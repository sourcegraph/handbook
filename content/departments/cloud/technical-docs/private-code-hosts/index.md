# Managed Instance Private Code Hosts support

> **Warning**
> This is still work in progress!

Every [v2.0 Cloud Instance](../v2.0/index.md) is deployed in Google Cloud Platform.

**Private Code Host** is a code host deployed in a private network (for example AWS EC2 instance within VPC). To connect to this code host a user has to have access to the private network usually via VPC Peering, VPN, or tunneling).

## Managed Instance public IP allowlist solution

This solution is recommended by Cloud Team, but only possible if customers' code host can be accessible publically or customer is able to allow incoming traffic from Sourcegraph-owned static IP addresses.
Cloud Manage Instance is using NAT to ensure only given IP will access customer code hosts.
If customer is not able to meet these requirements, Sourcegraph can propose [VPN solution for code hosts deployed on AWS](#aws-gcp-site-to-site-vpn-solution)

## AWS GCP site to site VPN solution

### Architecture

[AWS VPN architecture](https://app.excalidraw.com/s/4Dr1S6qmmY7/4L5TAaxiYAy)

### Creation process

AWS GCP VPN extension is connecting existing Cloud Instance with customer dedicated AWS account (maintaned by Cloud Team).

#### 1. Modify `config.yaml` with additional section:

```yaml
spec:
  privateCodeHost:
    aws:
      accountID: <AWS_ACCOUNT_ID>
      highAvailable: true
      region: <AWS_REGION>
    domain: <CUSTOMER_CODE_HOST_PRIVATE_DOMAIN>
    enabled: true
    type: awsvpn
```

#### 2. Generate additional terraform stacks

```
mi2 generate cdktf
```

this will generate `awsvpc` and `awsvpn` stacks.

Creation process detail walkthrough:

1. AWS VPC is created in customer dedicated Sourcegraph AWS Account.
1. High Available VPN Gateway is created in Managed Instance GCP VPC with 2 public IP intrefaces.
1. Cloud Router with BGP GCP-side ASN number is created in Managed Instance VPC.
1. AWS VPN Gateway with BGP AWS-side ASN number is created. It is attached to VPC and uses all VPC route tables propagated.
1. AWS Customer Gateway tight to GCP VPN Gateway interface is created (uses GCP-side BGP ASN). For high available options 2 gateways are created.
1. AWS VPN connection is created with 2 tunnel options (every tunnel uses different 32B PreSharedKey). For high available options 2 VPC connections are created.
1. GCP External VPN Gateway is created with interfaces correspoding for each AWS VPN connection tunnel. For high available options External VPN Gateway has 4 interfaces, for non high-available 2.
1. For each External VPN Gateway interface GCP VPN Tunnel is created. It uses dedicated PreSharedKey (same in on AWS VPN Connection(s)).
1. For each GCP VPN Tunnel interface is added to Cloud Router. It uses IP rnage correspoding to AWS VPN Connection tunnel internal address.
1. For each AWS VPN Connection tunnel internal address BGP peer is added to Cloud Router.

For more details, go to [Google documentation](https://cloud.google.com/network-connectivity/docs/vpn/tutorials/create-ha-vpn-connections-google-cloud-aws)

#### 3. [Optional] Private code host domain

If customer code host uses private DNS name, additonal DNS Proxy sidecar is added to Cloud Instance.

**TBD**

### Verification

For each customer using private code host, additional section to dashboard.md is added.
Can be generated on deman via:

```sh
mi2 instance dashboard --output <FILE_NAME>.md
```

Secction example:

#### Verify setup from GCP side

Get name of GCP VPN router:

```bash
export GCP_ROUTER_NAME=$(gcloud compute routers list --project src-404b40e50f4f7b202e4e --filter="bgp.advertiseMode: CUSTOM"  --format=json | jq -r '.[0].name')
```

Verify GCP router status:

```bash
gcloud compute routers get-status $GCP_ROUTER_NAME --project src-404b40e50f4f7b202e4e  --region europe-west3  --format='flattened(result.bgpPeerStatus[].name, result.bgpPeerStatus[].ipAddress, result.bgpPeerStatus[].peerIpAddress)
```

List VPN tunnels:

```bash
gcloud compute vpn-tunnels list --project src-404b40e50f4f7b202e4e
```

Check tunnel status:

```bash
gcloud compute vpn-tunnels describe <TUNNEL_ID> --project src-404b40e50f4f7b202e4e --region europe-west3 --format='flattened(status,detailedStatus)'
```

List dynamic routes:

```bash
gcloud compute routers get-status $GCP_ROUTER_NAME --project src-404b40e50f4f7b202e4e --region europe-west3 --format="flattened(result.bestRoutes)"
```

### AWS Private Link playbook

**TBD**
