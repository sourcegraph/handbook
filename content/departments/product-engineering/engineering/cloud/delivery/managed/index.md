# Managed instances

This documentation details how the Distribution team at Sourcegraph internally handles the provisioning/creation/configuration/maintenance of [managed instances](https://docs.sourcegraph.com/admin/install/managed).

Please first read [the customer-facing managed instance documentation](https://docs.sourcegraph.com/admin/install/managed) to understand what these are and what we provide.

- [Technical details](#technical-details)
  - [Deployment type and scaling](#deployment-type-and-scaling)
  - [Known limitations of managed instances](#known-limitations-of-managed-instances)
  - [Security](#security)
  - [Access](#access)
- [Cost estimation](cost_estimation.md)
- [Requesting a managed instance](#requesting-a-managed-instance)
- [Creating a managed instance](creation_process.md)
- [Managed instances operations](operations.md)
- [Upgrading a managed instance](upgrade_process.md)
- [Suspending a managed instance](suspend_process.md)
- [Resuming a managed instance](resume_process.md)
- [FAQ](#faq)

## Requesting a managed instance

After [determining a managed instance is what a customer/prospect wants](https://docs.sourcegraph.com/admin/install/managed), Customer Engineers should:

1. Submit a request to the Delivery team via the [Managed Instance Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fdelivery&template=new_managed_instance.md&title=) issue template in the sourcegraph/customer repo
2. Message the team in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX)

## SLA for managed instances
Currently, the SLA for creating a new managed instance is 10 business days.  This allows the team to assess the sizing is correct, verify the information in the ticket, and plan the work in the following iterations without interupting work that is currently in progress

Managed instances feature requests have a SLA of 10 business days to provide engineering level of effort.  After a level of effort and scoping is produced, we follow standard guidelines for prioritization and scheduling the work 

## Technical details

![architecture](https://storage.googleapis.com/sourcegraph-assets/managed-instance-architecture.png)

### Deployment type and scaling

Managed instances are Docker Compose deployments only today. We do not currently offer Kubernetes managed instances.

These managed Docker Compose deployments can scale up to the largest GCP instance type available, n1-standard-96 with 96 CPU / 360 GB memory which is typically enough for most medium to large enterprises.

We do not offer Kubernetes managed instances today as this introduces some complexity for us in terms of ongoing maintenance and overhead, we may revisit this decision in the future.

### Known limitations of managed instances

Sourcegraph managed instances are single-machine Docker-Compose deployments only. We do not offer Kubernetes managed instances, or multi-machine deployments, today.

With that said, Docker Compose deployments can scale up to the largest GCP instance type available, n1-standard-96 with 96 CPU & 360 GB memory, and are typically capable of supporting all but the largest of enterprises (around 25,000 repositories and 3,000 users are supported, based on what we have seen thus far.)

The main limitation of this model is that an underlying GCP infrastructure outage could result in downtime, i.e. is it not a HA deployment.

### Security

- **Isolation**: Each managed instance is created in an isolated GCP project with heavy gcloud access ACLs and network ACLs for security reasons.
- **Admin access**: Both the customer and Sourcegraph personnel will have access to an application-level admin account.
- **VM/SSH access**: Only Sourcegraph personnel will have access to the actual GCP VM, this is done securely through GCP IAP TCP proxy access only. Sourcegraph personnel can make changes or provide data from the VM upon request by the customer.
- **Inbound network access**: The customer may choose between having the deployment be accessible via the public internet and protected by their SSO provider, or for additional security have the deployment restricted to an allowlist of IP addresses only (such as their corporate VPN, etc.)
- **Outbound network access**: The Sourcegraph deployment will have unfettered egress TCP/ICMP access, and customers will need to allow the Sourcegraph deployment to contact their code host. This can be done by having their code-host be publicly accessible, or by allowing the static IP of the Sourcegraph deployment to access their code host.

### Access

- To perform the steps outlined in these docs you will need to be a member of:
  - The google group [gcp-managed](https://groups.google.com/a/sourcegraph.com/g/gcp-managed/members)
  - 1Password Vaults `Customer managed instances` & `Internal managed instances`

Access can be requested in #it-tech-ops WITH manager approval.

### Configuration management

Terraform is used to maintain all managed instances. You can find this configuration here: https://github.com/sourcegraph/deploy-sourcegraph-managed

All customer credentials, secrets, site configuration, app and user configuration—is stored in Postgres only (i.e. on the encrypted GCP disk). This allows customers to enter their access tokens, secrets, etc. directly into the app through the web UI without transferring them to us elsewhere.

## FAQ

### FAQ: Can customers disable the "Builtin username-password authentication"?

No, this is required in order for Sourcegraph to access the instance and debug issues through the initial admin account.

However, it does not need to be used by the customer or their users at all. The default login method can be configured to their SSO provider of choice.

### FAQ: "googleapi: Error 400: The network_endpoint_group resource ... is already being used"

If `terraform apply` is giving you:

```
Error: Error when reading or editing NetworkEndpointGroup: googleapi: Error 400: The network_endpoint_group resource 'projects/sourcegraph-managed-$COMPANY/zones/us-central1-f/networkEndpointGroups/default-neg' is already being used by 'projects/sourcegraph-managed-$COMPANY/global/backendServices/default-backend-service', resourceInUseByAnotherResource
```

Or similar—this indicates a bug in Terraform where GCP requires an associated resource to be deleted first and Terraform is trying to delete (or create) that resource in the wrong order.

To workaround the issue, locate the resource in GCP yourself and delete it manually and then `terraform apply` again.
