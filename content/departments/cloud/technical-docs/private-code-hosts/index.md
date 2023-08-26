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
        highAvailable: true
        region: <AWS_REGION>
      enabled: true
      type: awsvpn
```

#### 3. Generate additional terraform stacks

```
mi2 generate cdktf
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

For more details, go to [Google documentation](https://cloud.google.com/network-connectivity/docs/vpn/tutorials/create-ha-vpn-connections-google-cloud-aws)

### VPN Verification

For each customer using private code host, additional section to our generated operation dashboard is added.
Upon enabling the private code host support, follow the process [to update the dashboard](https://github.com/sourcegraph/cloud/blob/main/prod.dashboard.md#update-all-generated-dashboards)

#### 4. AWS VPC Endpoint Service (aka AWS Private Link)

[AWS Private Link](https://aws.amazon.com/privatelink/) is a secure method to expose a single endpoint (i.e. code host) from AWS VPC to specific AWS Principals (IAM in specific AWS VPC).
This solution ensures code the host is not exposed from AWS and only a given principal can access it.

When a customer exposes the code host via VPC Endpoint Service, the Cloud Instance needs to create an [AWS VPC Endpoint](https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html) to expose connections inside the Sourcegraph Managed AWS VPC.

1. Add addtional field to `privateCodeHost` section

```yaml
spec:
  infrastructure:
    privateCodeHost:
      aws:
        # privateLink represents a VPC endpoint exposed by customers
        privateLink:
          # Endpoint VPC Endpoint Service name
          endpoint: com.amazonaws.vpce.<REGION>.<VPC_ENDPOINT_SERVICE_ID>
          # ports list of TCP ports to open for GKE in AWS Security Group, by default only 443
          ports:
            - 443
        # enabled only if customer uses Private DNS Domain, this can be done only after customers accepts VPC Endpoint
        privateDnsEnabled: false
```

2. Generate additional resources in cdktf and apply

```sh
mi2 generate cdktf
mi2 instance cdktf deploy -auto-approve
```

> If customer uses [Private Domain](https://docs.aws.amazon.com/vpc/latest/privatelink/manage-dns-names.html) for VPC Endpoint Service and accepted VPC Endpoint connection:

3. enable Private DNS in VPC Endpoint

```yaml
spec:
  infrastructure:
    privateCodeHost:
      aws:
        # enabled only if customer uses Private DNS Domain, this can be done only after customers accepts VPC Endpoint
        privateDnsEnabled: true
```

4. Generate additional resources in cdktf and apply

```sh
mi2 generate cdktf
mi2 instance cdktf deploy -auto-approve
```

> If customer uses [Private Domain](https://docs.aws.amazon.com/vpc/latest/privatelink/manage-dns-names.html), addtional [DNS proxy sidecar](#optional-private-code-host-domain) also needs to be used in Cloud Instance.

## [Optional] Private code host domain

Every Cloud customer using private DNS domain for code hosts requires additional dns-proxy sidecar.
DNS-proxy is rewriting from private customer domain to public, resolvable A record
i.e. `private.CUSTOMER.com` -> `public.CUSTOMER.com` where:

- `private.CUSTOMER.com` is customer code host address, only resolvable inside customer network
- `public.CUSTOMER.com` - is resolvable to customer code host private IP
  Dns-proxy sidecar modifies pod `/etc/resolv.conf` file.

1. Configure config.yaml

```yaml
spec:
  infrastructure:
    gcp:
      gke:
        blue:
          additionalOauthScopes: # required for each node pool to pull dns-proxy private image from artifact registry
            - https://www.googleapis.com/auth/devstorage.read_only
    privateDNS:
      routes:
        - source: private.CUSTOMER.com
          destination: public.CUSTOMER.com
          # resolverIP: IP_OF_CUSTOM_RESOLVER - optional
```

2. Generate and apply cdktf

```sh
mi2 generate cdktf
# modify GKE node pool and add artifact registry repository with permissions
mi2 instance tfc deploy -auto-approve
```

3. Generate dns-proxy sidecars

```sh
# generate sidecars and copy dns-proxy from control plane project to customer project artifact registry repository
mi2 generate kustomize
cd kubernetes
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

### AWS Private Link playbook for customer

When a customer has private code hosts inside the AWS VPC and needs to expose it for Sourcegraph managed AWS VPC, customers can use [AWS Documentation](https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html) or follow these steps:

1. Create Network Loadbalancer, VPC Endpoint Service and VPC Endpoint Service via terraform file:

> Important: if https/ssl is used on NLB (recommended), customer has to create [AWS Certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs.html) and set `certificate_arn` and `ssl_policy` field in `aws_lb_listener` resources before apply.

```hcl
resource "aws_lb" "nlb" {
  name               = "${var.customer_id}-nlb"
  internal           = true
  load_balancer_type = "network"
  subnets            = var.customer_vpc_public_subnets

  enable_deletion_protection = true

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
  acceptance_required        = true
  network_load_balancer_arns = [aws_lb.nlb.arn]

  allowed_principals = [
    "arn:aws:iam::<SOURCEGRAPH_MANAGED_CUSTOMER_AWS_ACCOUNT_ID>:root"
  ]

  tags = {
   // customer tags
  }
}
```

2. For private VPC Endpoint Service domain, customer has to follow [verification steps](https://docs.aws.amazon.com/vpc/latest/privatelink/manage-dns-names.html) to prove customer owns the domain.
