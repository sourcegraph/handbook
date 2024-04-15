## Managed Instance technical documentation

> [!NOTE] As of 2023-03-23, new managed instances are using the v2.0 architecture, [learn more](./v2.0/index.md)

### Operations

Please review the Managed Instances [operations guide](./v2.0/index.md) for instructions.

### Release process

<span class="badge badge-note">SOC2/CI-100</span>

Sourcegraph upgrades every test and customer instances according to [SLA](#slas-for-managed-instances).

The release process is performed in steps:

1. New version is released via [release team](../../engineering/teams/release/team/index.md)
2. GitHub issue in [Sourcegraph Customer repository](https://github.com/sourcegraph/customer) with the `mi2 env create-tracking-issue -e prod $TARGET_VERSION` command
3. GitHub issue is labeled with `team/cloud` and Cloud Team is automatically notified to perform Managed Instances upgrade. Label is part of the template.
4. Cloud team performs upgrade of all instances in given order depending on the release type:

#### Release process for quarterly major release

| Stage | Working days since release | Action                                                                                                                               | Condition not met?                                                              |
| ----- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 1     | 0-2                        | Upgrade internal instances by Cloud Team (incl. [demo](https://demo.sourcegraph.com/) and [rctest](https://rctest.sourcegraph.com/)) |
| 2     | 3-4                        | Time for verification by Sourcegraph teams                                                                                           | New patch created -> start from 1st stage                                       |
| 3     | 5-6                        | Upgrade: 30% trials 10% customers                                                                                                    | New patch created -> upgrade internal in 1 working day and start from 2nd stage |
| 4     | 7-8                        | Upgrade: 100% trials 40% customers                                                                                                   | New patch created -> upgrade internal in 1 working day and start from 3rd stage |
| 5     | 9-10                       | Upgrade: 100% customers                                                                                                              | New patch created -> upgrade internal in 1 working day and start from 3rd stage |

After upgrade of every single instances uptime checks are verified. This includes [automated monitoring](#monitoring-and-alerting)

Sample upgrade:

- [tracking issue - 5.1.4](https://github.com/sourcegraph/customer/issues/2251).
- GitHub Pull Requests for [5.1.4 upgrade](https://github.com/sourcegraph/cloud/pulls?q=is%3Apr+is%3Aclosed+label%3Ami-upgrade+5.1.4)

#### Release process for monthly minor or patch releases

With [bi-weekly patch release schedule](../../engineering/dev/process/releases/index.md#patch-schedule), Cloud Team is using simplified release process to ensure Cloud customers can obtain patch as soon as possible.

| Stage | Working days since release | Action                                                                                                                                                                            |
| ----- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | 0-2                        | Patch internal instances by Cloud Team (incl. [demo](https://demo.sourcegraph.com/), [clouddev](https://clouddev.sourcegraph.com/) and [rctest](https://rctest.sourcegraph.com/)) |
| 2     | 3-5                        | Patch trials and customer instances. Follow 10%, 40%, 100% in each group respectively                                                                                             |

### Known limitations of managed instances

Sourcegraph managed instances are now running on Kubernetes, specifically GKE, today.

Current Cloud architecture has been [tested](./scalability_testing.md) to support a workload of >100000 repositories (440GB Git storage) and 10000 [simulated](https://github.com/sourcegraph/k6) users on a [`n2-standard-32`](https://cloud.google.com/compute/docs/general-purpose-machines#n2-standard) VM.

### Security

- **Isolation**: Each managed instance is created in an isolated GCP project with heavy gcloud access ACLs and network ACLs for security reasons.
- **Admin access**: Both the customer and Sourcegraph personnel will have access to an application-level admin account. Learn more about [how we ensure secure access to your instance](./oidc_site_admin.md).
- **VM/SSH access**: Only Sourcegraph personnel will have access to the actual GCP environment, this is done securely through GCP IAP TCP proxy access only. Sourcegraph personnel can make changes or provide data from the environment upon request by the customer.
- **Inbound network access**: The customer may choose between having the deployment be accessible via the public internet and protected by their SSO provider, or for additional security have the deployment restricted to an allowlist of IP addresses only (such as their corporate VPN, etc.). Filtering of the IP allowlist is performed by our WAF provider, Cloudflare. Notes, in addition to the customer provided IP allowlist, traffic from well-known public code hosts (e.g. GitHub.com) is also permitted to access selected Sourcegraph endpoints to ensure functionality of certain features.
- **Outbound network access**: The Sourcegraph deployment will have unfettered egress TCP/ICMP access, and customers will need to allow the
  Sourcegraph deployment to contact their code host. This can be done by having their code-host be publicly accessible, or by allowing the static IP of the Sourcegraph deployment to access their code host.
- **Web Application Firewall (WAF) protections**: All managed instances are proxied through Cloudflare and leverage security features such as rate limiting and the Cloudflare WAF.

Access can be requested in #it-tech-ops WITH manager approval.

### Monitoring and alerting

<span class="badge badge-note">SOC2/CI-86</span>
<span class="badge badge-note">SOC2/CI-25</span>

Each managed instance is created in an isolated GCP project, with exclusive resources.

Metrics are visible to Sourcegraph employees with access in a centralized GCP metrics scoping project project. All metrics can be seen in [scoped projects dashboard](https://console.cloud.google.com/monitoring/dashboards/builder/5b5a0be8-d90b-42d8-9271-46366d8af285?project=sourcegraph-managed-monitoring).

Every customer managed instance has alerts configured:

- cloud provider-managed uptime check is configured in dedicated GCP managed instance project
  - [v2.0](https://github.com/sourcegraph/controller/blob/0091a3b6fdad81297580499f26764befb7b72d21/internal/resource/monitoring/monitoring.go#L76-L114)
- [instance performance metrics alerts](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/controller/-/blob/internal/resource/monitoring/monitoring.go?L727) are configured in the scoped project for all managed instances
- [additional v2.0 infrastructure pefrormance metrics](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/controller/-/blob/internal/resource/monitoring/monitoring.go?L218) configured per instance
- [application performance metrics](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/controller/-/blob/internal/resource/monitoring/monitoring.go?L513) - based on application log events

Alerting flow:

1. When alert is triggered, it is sent to Opsgenie channel:

2. From Opsgenie, alert is sent to [on-call Cloud](../index.md#on-call) and Slack channels ([`#opsgenie`](https://sourcegraph.slack.com/archives/C0J618TTM), [`#alerts-managed-instances`](https://sourcegraph.slack.com/archives/C017SLJGA2Z).

3. On-call Cloud engineer has to decide, what is the alert type and if [incident](../../engineering/dev/process/incidents/index.md) should be opened and follow [the procedure](../../engineering/dev/process/incidents/#process) to perform the incident. On-call Cloud engineer should use the generated [managed instances operations](./v2.0/index.md#how-to-work-with-cloud-instances) to check, assess and repair broken managed instance.

4. When alert is closed via incident resolution, [post-mortem actions](../../engineering/dev/process/incidents/#post-mortem) has to be assigned and performed.

[Opsgenie alerts](https://sourcegraph.app.opsgenie.com/alert)
Sample managed instance incident - [customer XXX is down](https://app.incident.io/incidents/102).

### List Trials

Please visit go/cloud-ops
