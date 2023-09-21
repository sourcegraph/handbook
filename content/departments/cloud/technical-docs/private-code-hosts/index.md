# Managed Instance Private Code Hosts support

Every [v2.0 Cloud Instance](../v2.0/index.md) is deployed in Google Cloud Platform.

**Private Code Host** is a code host deployed in a private network (for example AWS EC2 instance within VPC). To connect to this code host a user has to have access to the private network usually via VPC Peering, VPN, or tunneling.

## Managed Instance NAT IP allowlist solution (recommended)

This solution is recommended by Cloud Team, but only possible if customers' code hosts can be accessible publicly and customer is able to allow incoming traffic from Sourcegraph-owned IP addresses.
Outgoing traffic of Cloud instances goes through Cloud NAT with stable IPs. All IPs are reserved exclusively on a per customer basis.
[More informations about IP allowlist](../../index.md#faq-what-is-the-cloud-instance-ip)

## AWS GCP site-to-site VPN solution (AWS code hosts only)

This option is for customers who want to connect to a private code host that is hosted on AWS infrastructure.

### Architecture

![AWS VPN architecture](https://storage.googleapis.com/sourcegraph-assets/handbook/private-code-host-solution-vpn-aws-private-link.png)

### Creation process

AWS GCP VPN extension connects an existing Cloud Instance with customer dedicated AWS account (maintained by Cloud Team).

#### 1. Create customer dedicated AWS account

[playbook](https://github.com/sourcegraph/infrastructure/tree/main/cloud/aws)

#### 2. Modify `config.yaml` with additional section:

```yaml
spec:
  infrastructure:
    privateCodeHost:
      aws:
        accountID: <AWS_ACCOUNT_ID>
        highAvailable: false
        privateLinks:
          # Endpoint VPC Endpoint Service name
          - endpoint: com.amazonaws.vpce.<REGION>.<VPC_ENDPOINT_SERVICE_ID>
            # ports list of TCP ports to open for GKE in AWS Security Group, by default only 443
            ports:
              - 443
            # enabled only if customer uses Private DNS Domain, this can be enable only after customers accepts VPC Endpoint or has acceptance disabled
            privateDnsEnabled: true
        region: <AWS_REGION>
      enabled: true
```

#### 3. Generate additional terraform stacks

```
mi2 generate cdktf
mi2 instance cdktf deploy -auto-approve
```

this will generate `awsvpc` and `awsvpn` stacks.

Creation process detail walkthrough:

1. AWS VPC is created in customer dedicated Sourcegraph AWS Account.
1. Cloud Router with GCP-side BGP ASN number is created in Managed Instance VPC.
1. AWS VPN Gateway with BGP AWS-side ASN number is created. It is attached to VPC and uses VPC route tables to propagate BPG sessions.
1. High Available GCP VPN Gateway is created in Managed Instance GCP VPC with 2 interfaces.
1. AWS Customer Gateway is created (uses GCP-side BGP ASN). For high available options 2 gateways are created.
1. AWS VPN connection is created with 2 tunnel options (every tunnel uses different 32B PreSharedKey). For high available options 2 VPC connections are created.
1. GCP External VPN Gateway is created with interfaces correspoding for each AWS VPN connection tunnel. For high available options External VPN Gateway has 4 interfaces, for non high-available 2.
1. For each External VPN Gateway interface GCP VPN Tunnel is created. It uses dedicated PreSharedKey (same in on AWS VPN Connection(s)).
1. For each GCP VPN Tunnel interface is added to Cloud Router. It uses IP range correspoding to AWS VPN Connection tunnel internal address.
1. For each AWS VPN Connection tunnel internal address BGP peer is added to Cloud Router.
1. AWS VPC Endpoint is created inside AWS VPC.

For more details, go to [Google documentation](https://cloud.google.com/network-connectivity/docs/vpn/tutorials/create-ha-vpn-connections-google-cloud-aws)

### FAQ

1. How to verify VPN is working?

For each customer using private code host, additional section to our generated operation dashboard is added.
Upon enabling the private code host support, follow the process [to update the dashboard](https://github.com/sourcegraph/cloud/blob/main/prod.dashboard.md#update-all-generated-dashboards)

2. What is AWS VPC Endpoint Service (aka AWS Private Link)

[AWS Private Link](https://aws.amazon.com/privatelink/) is a secure method to expose a single endpoint (i.e. code host) from AWS VPC to specific AWS Principals (IAM in specific AWS VPC).
This solution ensures code the host is not exposed from AWS and only a given principal can access it.

When a customer exposes the code host via VPC Endpoint Service, the Cloud Instance needs to create an [AWS VPC Endpoint](https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html) to expose connections inside the Sourcegraph Managed AWS VPC.

3. What should I do if customer uses Private DNS Domain?

If customer uses [Private Domain](https://docs.aws.amazon.com/vpc/latest/privatelink/manage-dns-names.html), addtional [DNS proxy sidecar](#optional-private-code-host-domain) also needs to be used in Cloud Instance.

Every Cloud customer using private DNS domain for code hosts requires additional dns-proxy sidecar.
DNS-proxy is rewriting from private customer domain to public, resolvable A record
i.e. `private.CUSTOMER.com` -> `public.CUSTOMER.com` where:

- `private.CUSTOMER.com` is customer code host address, only resolvable inside customer network
- `public.CUSTOMER.com` - is resolvable to customer code host private IP
  Dns-proxy sidecar modifies pod `/etc/resolv.conf` file.

#### Additional steps for Private DNS Domain

1. Configure config.yaml

> [!IMPORTANT] Follow playbook for given cloud instance to introduce additional node pool, as changing oauth scope on existing one will cause downtime.

```yaml
spec:
  infrastructure:
    gcp:
      gke:
        blue:
          machineType: XYZ
        green:
          additionalOauthScopes: # this might be deprecated soon, as scope is added by default
            - https://www.googleapis.com/auth/devstorage.read_only
          machineType: XYZ
    privateDNS:
      routes:
        - source: private.CUSTOMER.DOMAIN
          # use domain with region inside the URL, b/c it routes to every zone inside VPC
          destination: vpce-<ID>.vpce-svc-<HASH>.<REGION>.vpce.amazonaws.com
          # resolverIP: IP_OF_CUSTOM_RESOLVER - optional
```

2. Generate and apply cdktf resources:

Note: open PR and merge for VCS TFC changes to be applied.

```sh
mi2 generate cdktf
# modify GKE node pool and add artifact registry repository with permissions
mi2 instance tfc deploy -auto-approve
```

3. Generate dns-proxy sidecars

```sh
# generate sidecars and copy dns-proxy from control plane project to customer project artifact registry repository
mi2 generate kustomize
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm kubernetes/ | kubectl --kubeconfig=$(mi2 instance kubeconfig) apply -f -
```

4. Open Pull Request.

### AWS Private Link playbook for customer

When a customer has private code hosts inside the AWS VPC and needs to expose it for Sourcegraph managed AWS VPC, customers can use [AWS Documentation](https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html) or follow these steps:

1. Create Network Loadbalancer, VPC Endpoint Service and VPC Endpoint Service via terraform file:

> [!IMPORTANT] if https/ssl is used on NLB (recommended), customer has to create [AWS Certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs.html) and set `certificate_arn` and `ssl_policy` field in `aws_lb_listener` resources before apply.

```hcl
resource "aws_lb" "nlb" {
  name               = "${var.customer_id}-nlb"
  internal           = true
  load_balancer_type = "network"
  subnets            = var.customer_vpc_public_subnets

  enable_deletion_protection = true
  enable_cross_zone_load_balancing = true

  tags = {
   // customer tags
  }
}

resource "aws_lb_listener" "tls" {
  load_balancer_arn = aws_lb.nlb.arn
  port              = "443"
  protocol          = "TLS"
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn   = "arn:aws:acm:<REGION>:<ACCOUNT:certificate/<CERTIFICATE_ID"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.customer_gitlab.arn
  }
}

resource "aws_vpc_endpoint_service" "customer_gitlab" {
  acceptance_required        = false # not required as allowed_principals block unauthorized access
  network_load_balancer_arns = [aws_lb.nlb.arn]

  # optional
  private_dns_name = <CUSTOMER_PRIVATE_DNS_NAME_FOR_CODE_HOST>

  allowed_principals = [
    "arn:aws:iam::<SOURCEGRAPH_MANAGED_CUSTOMER_AWS_ACCOUNT_ID>:root"
  ]

  tags = {
   // customer tags
  }
}
```

2. For private VPC Endpoint Service domain, customer has to follow [verification steps](https://docs.aws.amazon.com/vpc/latest/privatelink/manage-dns-names.html) to prove customer owns the domain.

## GCP Private Service Connect (GCP code hosts only)

### Architecture

<iframe src="https://link.excalidraw.com/readonly/Xiz9LWNPCa3DERBJUiZI" width="100%" height="100%" style="border: none;"></iframe>

### How it works

Sourcegraph supports connecting to private code hosts on GCP using GCP [Private Service Connect] (PSC). It is used to securely expose and connect services across the project boundary within GCP.

The customer is the Service Producer (the "producer"), and the Sourcegraph Cloud instance is the Service Consumer (the "consumer"). PSC can expose an internal regional load balancer for the private code host to the consumer. The consumer can then connect to the private code host over PSC transparently.

### Pre-req

1. Confirm the GCP region customer's private code host or the entrypoint is in. The region has to be the same as the Sourcegraph Cloud instance.
1. Confirm whether the customer is using a public TLS certificate or not. If not, the customer should talk to us first to see if we can support it. (this is not tested yet, but should work in theory)

### Steps

#### (Customer) Reached out to the account team

Customer need to provide the following information

- The GCP region customer's private code host or the entrypoint is in, e.g., `us-central1`. If it is not one of the Cloud supported region, please consult the Cloud team.
- The DNS name of the customer private code host, e.g., `gitlab.internal.company.net`. Notes this is the dns name that the customer users interact with daily. If the private code host has geo-specific dns name, please consult the Cloud team.

#### (Customer) Create a [service attachment] to expose the private code host

Customer should publish their services using PSC by follow [GCP documentation](https://cloud.google.com/vpc/docs/configure-private-service-connect-producer). Below is a Terraform example:

> Notes your firewall rule should permit ingress traffic from the proxy-only subnet to the private code host. It should also permit egress traffic from the private code host to the psc subnet.

The customer need to provide the service attachment id to Sourcegraph, e.g., `projects/:id/regions/:region/serviceAttachments/:name`.

```tf
### Private Service Connect

resource "google_compute_service_attachment" "self" {
  name        = "${var.name}-psc-${random_id.tf_prefix.hex}"
  description = "A service attachment to expose the internal load balancer for Private Service Connect"

  # the region has to the same as the consumer due to GCP limitation
  region      = var.region

  # optional, e.g., gitlab.internal.company.com
  domain_names          = [var.domain_root]

  enable_proxy_protocol = false
  # a psc subnet, or with a `purpose=PRIVATE_SERVICE_CONNECT` `google_compute_subnetwork` in Terraform
  nat_subnets           = [google_compute_subnetwork.psc.id]

  # an upstream forwarding rule to one of the following
  #
  # - regional internal proxy Network Load Balancer, google_compute_region_target_tcp_proxy
  #   with an INTERNAL_MANAGED load balancing scheme in the backend service
  # - regional internal Application Load Balancer, google_compute_region_target_http_proxy, google_compute_region_target_https_proxy,
  #   with a INTERNAL_MANAGED load balancing scheme in the backend service
  # - internal passthrough Network Load Balancer, google_compute_region_target_tcp_proxy,
  #   with an INTERNAL load balancing scheme in the backend service
  #
  # how to decide?
  #
  # - if the target deployment (MIG or NEG) does not terminate TLS, you should use an internal Application Load Balancer with TLS certificate configured
  # - if the target deployment (MIG or NEG) terminates TLS, you should use an internal passthrough Network Load Balancer on port 443
  #
  # notes in order to create an internal load balancer, GCP requires the creation of a proxy-only subnet within the network
  target_service        = google_compute_forwarding_rule.https.self_link

  connection_preference = "ACCEPT_MANUAL"
  # a maps of "project_id" => { "id": "$project_id", "limit": $limit }
  dynamic "consumer_accept_lists" {
    iterator = each
    for_each = var.authorized_consumer_projects
    content {
      project_id_or_num = each.value["id"]
      connection_limit  = each.value["limit"]
    }
  }
}

### Compute - Network (psc subnet)

resource "google_compute_subnetwork" "psc" {
  name    = "${var.name}-psc-${random_id.tf_prefix.hex}"
  region  = var.region
  network = google_compute_network.self.id

  purpose       = "PRIVATE_SERVICE_CONNECT"
  ip_cidr_range = var.psc_subnetwork_cidr
}

output "service_attachment_uri" {
  value = google_compute_service_attachment.self.id
}
```

### (Sourcegraph) Create the Cloud instance for the customer

Follow the usual process to handle instance creation process, by make sure to create within the same region. With the following config:

> Notes below spec is still WIP, and subject to change.

```yaml
privateCodeHost:
  enabled: true
  gcp:
    privateServiceConnectEndpoints:
      # provided by the customer
      - domain: gitlab.internal.company.net
        targetService: projects/:project/regions/:region/serviceAttachments/:name
```

### (Customer) Create code host connection

Upon confirmation from the account team, the customer admin may visit their Sourcegraph Cloud instance and create a code host connection as usual. PSC should make the experience transparent.

[private service connect]: https://cloud.google.com/vpc/docs/private-service-connect
[service attachment]: https://cloud.google.com/vpc/docs/private-service-connect#service-attachments
