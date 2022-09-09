## Managed Instance technical documentation

> NOTE: As of 2022-05-20, new managed instances are using the v1.1 architecture, [learn more](./v1.1/index.md)

![architecture](https://storage.googleapis.com/sourcegraph-assets/managed-instance-architecture.png)

### Deployment type and scaling

Managed instances are Docker Compose deployments only today. We do not currently offer Kubernetes managed instances.

These managed Docker Compose deployments can scale up to the largest GCP instance type available, n2-standard-128 with 128 CPU / 512 GB memory which is typically enough for most medium to large enterprises.

We do not offer Kubernetes managed instances today as this introduces some complexity for us in terms of ongoing maintenance and overhead, we may revisit this decision in the future.

### Environments

<span class="badge badge-note">SOC2/CI-100</span>

#### Internal instances

For each type of Managed Instances (v1.0 and v.1.1), Sourcegraph maintains separate test environments:

- ~for v1.0 - [dev instance](https://devmanaged.sourcegraph.com/)~ (all instances have been migrated to v1.1)
- for v1.1 - [rctest instance](https://rctest.sourcegraph.com/)
- for v1.1 - [tpgi instance](http://tpgi.sourcegraph.com/)
- for v1.1 - [s2 instance](https://sourcegraph.sourcegraph.com/)
- for v1.1 - [research.sourcegraph.com](https://research.sourcegraph.com)

Internal instances are created for various testing purposes:

- testing changes prior to the monthly upgrade on customer instances. upon a new release is made available, Cloud team will follow [managed instances upgrade tracker](../../engineering/dev/process/releases/upgrade_managed_issue_template.md) to proceed with upgrade process.
- testing significant operational changes prior to applying to customer instances
- short-lived instances for product teams to test important product changes. Notes: any teammate may request a managed instance through our [request process](./index.md#managed-instance-requests)

##### [dev instance](https://devmanaged.sourcegraph.com/)

This is a shared instance for the engineering organization to test unreleased versions, locally built images, or anything they would like to experiement with Managed Instances.

#cloud is responsible for the maintenance of infrastructure, including Cloud SQL and underlying VM. The team that is running the experiment is responsbile for keeping everyone updated on the experiement in #cloud and ensuring the application is working as intented. The team should consult the [operation guide](./operations.md) when interacting with the dev instance. (please backup the database and VM before doing anyting destructive)

##### [tpgi instance](http://tpgi.sourcegraph.com/)

Learn more from https://github.com/sourcegraph/customer/issues/958

##### [s2 instance](https://sourcegraph.sourcegraph.com/)

This is the internal Cloud dogfood instance for the entire company. #dev-experience is responsible for rolling out nightly builds on this instance and #cloud is responsible for the maintenance of infrastructure, including Cloud SQL and underlying VM.

##### [research.sourcegraph.com](https://research.sourcegraph.com)

Learn more from https://github.com/sourcegraph/customer/issues/1221

#### Customer instances

All customer instances are considered part of the production environment and all changes applied to these customers should be well-tested in the test environment.

Upgrade process to new Sourcegraph version is also preceded with upgrading test instances - [upgrade to v3.40.1](https://github.com/sourcegraph/sourcegraph/issues/36219).

### Release process

<span class="badge badge-note">SOC2/CI-100</span>

Sourcegraph upgrades every test and customer instances according to [SLA](#slas-for-managed-instances).

The release process is performed in steps:

1. New version is released via [release guild](../../engineering/dev/process/releases/release_guild.md)
2. Github issue in [Sourcegraph repository](https://github.com/sourcegraph/sourcegraph) is open based on the [managed instances upgrade template](../../engineering/dev/process/releases/upgrade_managed_issue_template.md)
3. Github issue is labeled with `team/cloud` and Cloud Team is automatically notified to perform Managed Instances upgrade. Label is part of the template.
4. Cloud team performs upgrade of all instances in given order:

- for Instances with version [v1.0](./upgrade_process.md)
  1. Test instances are upgraded - [dev](https://devmanaged.sourcegraph.com/) and [demo](https://demo.sourcegraph.com/)
  1. [Uptime checks](./upgrade_process.md#8-confirm-instance-health) are verified. This includes [automated monitoring](#monitoring-and-alerting)
  1. When test instances are working correctly, Cloud Team performs upgrade of all v1.0 customer instances
- for Instances with version [v1.1](./v1.1/mi1-1_upgrade_process.md)
  1. Test instance is upgraded - [rctest](https://rctest.sourcegraph.com/)
  1. [Uptime checks](./v1.1/mi1-1_upgrade_process.md#confirm-instance-health) are verified. This includes [automated monitoring](#monitoring-and-alerting)
  1. When test instance is working correctly, Cloud Team performs upgrade of all v1.1 customer instances

Sample upgrade:

- [tracking issue - 3.40.1](https://github.com/sourcegraph/sourcegraph/issues/36219).
- Github Pull Requests for [3.40.1 upgrade](https://github.com/sourcegraph/deploy-sourcegraph-managed/pulls?q=is%3Apr+is%3Aclosed++upgrade+v3.40.1)

### Known limitations of managed instances

Sourcegraph managed instances are single-machine Docker-Compose deployments only. We do not offer Kubernetes managed instances, or multi-machine deployments, today.

With that said, Docker Compose deployments can scale up to the largest GCP instance type available, n1-standard-96 with 96 CPU & 360 GB memory, and are typically capable of supporting all but the largest of enterprises. Current Cloud architecture has been [tested](./scalability_testing.md) to support  workload of >100000 repositories and 10000 [simulated](https://github.com/sourcegraph/k6) users on a [`n2-standard-32`](https://cloud.google.com/compute/docs/general-purpose-machines#n2-standard) VM. 

The main limitation of this model is that an underlying GCP infrastructure outage could result in downtime, i.e. is it not a HA deployment.

### Security

- **Isolation**: Each managed instance is created in an isolated GCP project with heavy gcloud access ACLs and network ACLs for security reasons.
- **Admin access**: Both the customer and Sourcegraph personnel will have access to an application-level admin account. Learn more about [how we ensure secure access to your instance](./oidc_site_admin.md).
- **VM/SSH access**: Only Sourcegraph personnel will have access to the actual GCP VM, this is done securely through GCP IAP TCP proxy access only. Sourcegraph personnel can make changes or provide data from the VM upon request by the customer.
- **Inbound network access**: The customer may choose between having the deployment be accessible via the public internet and protected by their SSO provider, or for additional security have the deployment restricted to an allowlist of IP addresses only (such as their corporate VPN, etc.). Filtering of the IP allowlist is performed by our WAF provider, Cloudflare. Notes, in addition to the customer provided IP allowlist, traffic from well-known public code hosts (e.g. GitHub.com) is also permitted to access selected Sourcegraph endpoints to ensure functionality of certain features.
- **Outbound network access**: The Sourcegraph deployment will have unfettered egress TCP/ICMP access, and customers will need to allow the
  Sourcegraph deployment to contact their code host. This can be done by having their code-host be publicly accessible, or by allowing the static IP of the Sourcegraph deployment to access their code host.
- **Web Application Firewall (WAF) protections**: All managed instances are proxied through Cloudflare and leverage security features such as rate limiting and the Cloudflare WAF.

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

2. From Opsgenie, alert is sent to [on-call Cloud](../index.md#on-call) and Slack channels ([`#opsgenie`](https://sourcegraph.slack.com/archives/C0J618TTM), [`#cloud-internal`](https://sourcegraph.slack.com/archives/C03LCPCT3SP)).

3. On-call Cloud engineer has to decide, what is the alert type and if [incident](../../engineering/dev/process/incidents/index.md) should be opened and follow [the procedure](../../engineering/dev/process/incidents/#process) to perform the incident. On-call Cloud engineer should use [managed instances operations](./operations.md) to check, assess and repair broken managed instance.

4. When alert is closed via incident resolution, [post-mortem actions](../../engineering/dev/process/incidents/#post-mortem) has to be assigned and performed.

[Opsgenie alerts](https://sourcegraph.app.opsgenie.com/alert)
Sample managed instance incident - [customer XXX is down](https://app.incident.io/incidents/102).

### Configuration management

Terraform is used to maintain all managed instances. You can find this configuration here: https://github.com/sourcegraph/deploy-sourcegraph-managed

All customer credentials, secrets, site configuration, app and user configuration—is stored in Postgres only (i.e. on the encrypted GCP disk). This allows customers to enter their access tokens, secrets, etc. directly into the app through the web UI without transferring them to us elsewhere.

### Operations

Please review the Managed Instances v1.0 [operations guide](./operations.md) for instructions.

Managed Instances v1.1 documentation can be found [here](./v1.1/index.md)

Managed Instances v2.0 documentation can be found [here](./v2.0/index.md)
