# Managed instances

This documentation details how the Distribution team at Sourcegraph internally handles the provisioning/creation/configuration/maintenance of [managed instances](https://docs.sourcegraph.com/admin/install/managed).

Please first read [the customer-facing managed instance documentation](https://docs.sourcegraph.com/admin/install/managed) to understand what these are and what we provide.

For operation guides (e.g. upgrade process), please see [managed instances operations](./operations.md). This page is intented to provide additional external-facing information.

- [Technical details](#technical-details)
  - [Deployment type and scaling](#deployment-type-and-scaling)
  - [Environments](#environments)
  - [Known limitations of managed instances](#known-limitations-of-managed-instances)
  - [Security](#security)
  - [Monitoring and alerting](#monitoring-and-alerting)
  - [Access](#access)
- [Cost estimation](cost_estimation.md)
- [Requesting a managed instance](#requesting-a-managed-instance)
- [SLAs for managed instances](#slas-for-managed-instances)
- [Operations for managed instances](#operations)
- [FAQ](#faq)

## When to offer a Managed Instance

Managed instances offer a backup alternative for using Sourcegraph when a customer either can't or, for some reason, won't deploy Sourcegraph self-hosted.

As of 2022-03-10, managed instance is not the recommended deployment method for any tier size of customer. We hope to be able to change that in the future.

See below for the SLAs and Technical implementation details (including Security) related to managed instances.

Please message #cloud-devops for any answers or information missing from this page.

When offering customers a Managed Instance, CE and Sales should communicate and gather information for the following topics

- [ ] Customers are comfortable with [security implication](#security) of using a managed instance
- [ ] Customers's code host should be accessible publically or able to allow incoming traffic from Sourcegraph-owned static IP addresses. (Notes: we do not have proper support for other connectivity methods, e.g. site-to-site VPN)

## Managed Instance Requests

Customer Engineers (CE) or Sales may request to:

- **Create a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fdevops%2C+mi%2Cmi%2Fnew-instance-request&template=new_managed_instance.md&title=New+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)]
  - **After ruling out a self-hosted deployment** and [determining a managed instance is viable for a customer/prospect](https://docs.sourcegraph.com/admin/install/managed)
  - For new customers or prospects who currently do not have a managed instance.
- **Suspend a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fdevops%2Cmi%2Cmi%2Fsuspension-request&template=managed-instance-suspend.md&title=Managed+Instance+suspension+request+for+%5BCUSTOMER+NAME%5D)]
  - For customers or prospects who currently have a managed instance that needs to pause their journey, but intend to come back within a couple of months.
- **Tear down a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fdevops%2Cmi%2Cmi%2Fteardown-request&template=managed-instance-teardown.md&title=Managed+Instance+teardown+request+for+%5BCUSTOMER+NAME%5D)]
  - For customers or prospects who have elected to stop their managed instance journey entirely. They accept that they will no longer have access to the data from the instance as it will be permanently deleted.

### Workflow

1.  Sales alerts their CE partner to seek approval from CE leadership, who will guide next steps
2.  If approved, then CE proceeds based on whether this is a standard or non-standard managed instance scenario:
    - For standard managed instance requests (i.e., new instance, no scale concerns, no additional security requirements), CE submits a request to the DevOps team using the corresponding issue template in the [sourcegraph/customer](https://github.com/sourcegraph/customer) repo.
    - For non-standard managed instance requests (i.e., any migrations, special scale or security requirements, or anything considered unusual), CE submits the opportunity to Tech Review before making a request to the DevOps team.
3.  Message the team in #cloud-devops.

## SLAs for managed instances

Support SLAs for Sev 1 and Sev 2 can be found [here](../../../../../ce-support/support/index.md#slas). Other engineering SLAs are listed below

|                                               | Description                                            | Response time                                 | Resolution time                               |
| --------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- | --------------------------------------------- |
| New instance Creation                         | Spin up new instance for a new customer                | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| Existing instance suspension                  | Suspend an existing managed instance temporarily       | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| Existing instance deletion/teardown           | Decommission/delete and existing managed instance      | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| New Feature Request                           | Feature request from new or existing customers         | Within 24 hours of becoming aware of the need | Dependenant on the request                    |
| Maintenance: Monthly Update to latest release | Updating an instance to the latest release             | NA                                            | Within 1 week after latest release            |
| Maintenance: patch/emergency release Update   | Updating an instance with a patch or emergency release | NA                                            | Within 1 week after patch / emergency release |

### Incident Response

Incidents which affect managed instances handled according to our [incidents](../../../process/incidents/index.md) process.

## Technical details

> As of 2022-05-20, new managed instances are using the v1.1 architecture, [learn more](./v1.1/index.md)

![architecture](https://storage.googleapis.com/sourcegraph-assets/managed-instance-architecture.png)

### Deployment type and scaling

Managed instances are Docker Compose deployments only today. We do not currently offer Kubernetes managed instances.

These managed Docker Compose deployments can scale up to the largest GCP instance type available, n1-standard-96 with 96 CPU / 360 GB memory which is typically enough for most medium to large enterprises.

We do not offer Kubernetes managed instances today as this introduces some complexity for us in terms of ongoing maintenance and overhead, we may revisit this decision in the future.

### Environments

<span class="badge badge-note">SOC2/CI-100</span>

#### Internal instances

For each type of Managed Instances (v1.0 and v.1.1), Souregraph maintains separate test environments:

- for v1.0 - [dev instance](https://devmanaged.sourcegraph.com/)
- for v1.1 - [rctest instance](https://rctest.sourcegraph.com/)

Internal instances are created for various testing purposes:

- testing changes prior to the monthly upgrade on customer instances. upon a new release is made available, DevOps team will follow [managed instances upgrade tracker](../../../process/releases/upgrade_managed_issue_template.md) to proceed with upgrade process.
- testing significant operational changes prior to applying to customer instances
- short-lived instances for product teams to test important product changes. Notes: any teammate may request a managed instance through our [request process](./index.md#managed-instance-requests)

#### Customer instances

All customer instances are considered part of the production environment and all changes applied to these customers should be well-tested in the test environment.

Upgrade process to new Sourcegraph version is also preceded with upgrading test instances - [upgrade to v3.40.1](https://github.com/sourcegraph/sourcegraph/issues/36219).

### Known limitations of managed instances

Sourcegraph managed instances are single-machine Docker-Compose deployments only. We do not offer Kubernetes managed instances, or multi-machine deployments, today.

With that said, Docker Compose deployments can scale up to the largest GCP instance type available, n1-standard-96 with 96 CPU & 360 GB memory, and are typically capable of supporting all but the largest of enterprises (around 25,000 repositories and 3,000 users are supported, based on what we have seen thus far.)

The main limitation of this model is that an underlying GCP infrastructure outage could result in downtime, i.e. is it not a HA deployment.

### Security

- **Isolation**: Each managed instance is created in an isolated GCP project with heavy gcloud access ACLs and network ACLs for security reasons.
- **Admin access**: Both the customer and Sourcegraph personnel will have access to an application-level admin account.
- **VM/SSH access**: Only Sourcegraph personnel will have access to the actual GCP VM, this is done securely through GCP IAP TCP proxy access only. Sourcegraph personnel can make changes or provide data from the VM upon request by the customer.
- **Inbound network access**: The customer may choose between having the deployment be accessible via the public internet and protected by their SSO provider, or for additional security have the deployment restricted to an allowlist of IP addresses only (such as their corporate VPN, etc.)
- **Outbound network access**: The Sourcegraph deployment will have unfettered egress TCP/ICMP access, and customers will need to allow the
  Sourcegraph deployment to contact their code host. This can be done by having their code-host be publicly accessible, or by allowing the static IP of the Sourcegraph deployment to access their code host.
- **Web Application Firewall (WAF) protections**: The Sourcegraph deployment, if open to the Internet, will be proxied through Cloudflare and leverage security features such as rate limiting and the Cloudflare WAF. Notes: Cloudflare WAF is not applicable when inbound network access is restricted to an allowlist of IP addresses only.

Access can be requested in #it-tech-ops WITH manager approval.

### Monitoring and alerting

<span class="badge badge-note">SOC2/CI-86</span>
<span class="badge badge-note">SOC2/CI-25</span>

Each managed instance is created in an isolated GCP project.
System performance metrics are configured and collected in [scoped project](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/monitoring).
All metrics can be seen in [scoped projects dashboard](https://console.cloud.google.com/monitoring/dashboards/builder/5b5a0be8-d90b-42d8-9271-46366d8af285?project=sourcegraph-managed-monitoring).

Every customer managed instance has alerts configured:

- [uptime check - version v1.0](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/dev/infrastructure.tf#L555) configured in dedicated GCP managed instance project
- [uptime check - version v1.1](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/modules/terraform-managed-instance-new/infrastructure.tf#L529) configured in dedicated GCP managed instance project
- [instance performance metric alerts](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/monitoring/alerting.tf) configured in scoped project for all managed instances
- [application performance metrics](./operations.md#performance-checks) - configured in customer intance [site-config.json](https://docs.sourcegraph.com/admin/config/site_config) via `mg cli` during instance creation

Alerting flow:

1. When alert is triggered, it is sent to Opsgenie channel:

- [uptime check channel for v1.0](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/dev/infrastructure.tf#L577)
- [uptime check channel for v1.1](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/modules/terraform-managed-instance-new/infrastructure.tf#L552)
- [metrics monitoring channel](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/monitoring/alerting.tf#L24)

2. From Opsgenie, alert is sent to [on-call DevOps](../index.md#on-call) and Slack channels (#opsgenie, #cloud-devops).

3. On-call DevOps has to decide, what is the alert type and if [incident](../../../../dev/process/incidents/index.md) should be opened and follow [the procedure](../../../../dev/process/incidents/#process) to perform the incident. On-call DevOps should use [managed instances operations](./operations.md) to check, assess and repair broken managed instance.

4. When alert is closed via incident resolution, [post-mortem actions](../../../../dev/process/incidents/#post-mortem) has to be assigned and performed.

[Opsgenie alerts](https://sourcegraph.app.opsgenie.com/alert)
Sample managed instance incident - [customer XXX is down](https://app.incident.io/incidents/102).

### Configuration management

Terraform is used to maintain all managed instances. You can find this configuration here: https://github.com/sourcegraph/deploy-sourcegraph-managed

All customer credentials, secrets, site configuration, app and user configuration—is stored in Postgres only (i.e. on the encrypted GCP disk). This allows customers to enter their access tokens, secrets, etc. directly into the app through the web UI without transferring them to us elsewhere.

### Operations

Please review the Managed Instances v1.0 [operations guide](./operations.md) for instructions.

Managed Instances v1.1 documentation can be found [here](./v1.1/index.md)

## FAQ

### FAQ: Can customers disable the "Builtin username-password authentication"?

Yes, you may disable the builtin authentication provider and only allow creation of accounts from configured SSO providers.

However, in order to preserve site admin access for Sourcegraph operators, we need to add [Sourcegraph's internal Okta](./oidc_site_admin.md) as an authentication provider. Plesae reach out to our team prior disabling the builtin provider.
