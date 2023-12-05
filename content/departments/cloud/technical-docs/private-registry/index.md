# Managed Instance Private Registries support for Cloud Executors

Every [v2.0 Cloud Instance](../v2.0/index.md) is deployed in dedicated Google Cloud Platform project, with executors running in the same VPC.

**Private Registry** is a customer registry deployed in a private network (for example AWS EC2 instance within VPC). To connect to this registry a user has to have access to the private network usually via VPC Peering, VPN, or tunneling.

Registries access is required for code intel auto-indexing to be working.

## Public Registry with private domain

Customer might expose their private registry via external loadbalancer. In this case registry will be accessible via public IP and Sourcegraph will provide customer 2 static NAT IPs for IP allowlist.
If customer uses different (private) domain inside their repositories configuration for registry, additional change has to be performed in Cloud executors to translate customer private registry domain -> customer public loadbalancer IP.
This is done via dns-proxy running on executors VM.

Configuration:

1. Modify config.yaml with additional entry:

```yaml
spec:
  infrastructure:
    executorPrivateDNS:
      proxyTag: 202311201628
      routes:
        - destination: customer.loadbalancer.public.domain
          source: customer.registry.private.domain
```

> Note: as customer loadbalancer is handling connections also for private domain (`customer.registry.private.domain`), it has to be configured as NLB TLS passthrough (certificate is validated on registry) or has to have both certificates for public and private domain installed.

2. Open PR
3. When approved and merged, executors can access customer public loadbalancer using customer private domain.

## AWS Private Registry

If customer uses private registry deployed in AWS VPC, customer can expose this registry via AWS Private Link.
Sourcegraph will connect Cloud instance Google VPC with customer dedicated AWS VPC, where VPC Endpoint for customer VPC Endpoint Service will be created.

1. [Create GCP<->AWS VPN connection](../private-code-hosts/index.md#creation-process) documentation
2. If customer uses private domain for the reguistry exposed via VPC Endpoint Service, executors require dns-proxy to resolve private domain to VPC Endpoint.
3. For VPC Endpoint created in step 1, obtain endpoint dns entry via:

```sh
cd terrasform/stacks/awsvpn
for vpce in $(terraform state list | grep aws_vpc_endpoint | grep -v data); do terraform state show $vpce; done
```

- Modify config.yaml with additional entry:

```yaml
spec:
  infrastructure:
    executorPrivateDNS:
      proxyTag: 202311201628
      routes:
        - source: private.CUSTOMER.DOMAIN
          # VPC endpoint DNS entry - use domain with region inside the URL, b/c it routes to every zone inside VPC
          destination: vpce-<ID>.vpce-svc-<HASH>.<REGION>.vpce.amazonaws.com
```

- Open PR
- When approved and merged, executors can access customer public loadbalancer using customer private domain.

## GCP Private Registry

If customer uses private registry deployed in Google Cloud VPC, customer can expose the registry via Private Service Connect.

1. [Create Private Service Connect](../private-code-hosts/index.md#gcp-private-service-connect-gcp-code-hosts-only) documentation.

> Note: apart from creating registry connection, this will also open Fireckracker IPTABLES to allow executors connect to the registry.

## On-premise Private Registry

Comming soon...

## Azure Private Registry

Comming soon...

# FAQ

## 1. How can I test if my private registry is accessible?

You can index repository with configuration containing private registry endpoint. For more, please go to [official documentation](https://docs.sourcegraph.com/code_navigation/how-to/enable_auto_indexing#access-to-private-repositories-and-packages)
