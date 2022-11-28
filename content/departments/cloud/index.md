# Cloud

> NOTE: **Cloud means single-tenant dedicated instances managed by Sourcegraph** _(for example `mycompany.sourcegraph.com`)_. Sourcegraph Cloud should not be confused with Sourcegraph.com which holds public and open source code. The Cloud and managed instance should be considered synonyms within these handbook pages.

The Cloud team is the special focus team reporting directly to CEO modeled on _“if AWS were to offer ‘Managed Sourcegraph’ like they do Elasticsearch, Redis, PostgreSQL, etc., how would they do it?”_ The team is responsible for maintaining existing [managed instances](https://docs.sourcegraph.com/admin/install/managed) and building the next generation of them. The Cloud team has no other responsibilities.

## Members

{{generator:product_team.cloud}}

## Mission statement

Build a **fully managed platform** for using Sourcegraph that can **(by EOFY23) support 200+ customers** using **dedicated** Sourcegraph instances, providing **feature compatibility** with self-hosted while **being cost-efficient for customers and Sourcegraph**.

**Fully managed**

- Observability allowing Sourcegraph to react before user impact is noticed, while respecting user privacy
- Frequent, invisible Sourcegraph upgrades
- Invisible infrastructure updates
- Zero infrastructure access for customers

**Platform**

- Low customer onboarding cost
- Zero customer maintenance cost
- Secure (SOC 2, documented security posture)
- Reliable (ability to offer SLA, internal SLO of 99.9%)
- Automatable (in due time, feature releases / billing / upgrades / analytics are built-in)

**Support 200+ customers**

- Targeting 200+ customers in FY23 to invest in supporting 1000 in FY24
  - Support 300 production-grade instances (accommodating trials / testing)
- Compatible with current MI use cases
  - Infrastructure / Domain / Isolation boundary per customer

**Dedicated Sourcegraph instances**

- One Sourcegraph instance serves a single customer
- (FY23/FY24) Dedicated, Sourcegraph-provided Cloud infrastructure
- (FY23/FY24) GCP only

**Feature compatibility**

- Feature set on-par with self-hosted
  - With time, getting more powerful than self-hosted
- Features are opt-in (for a fee)
- New features available on Cloud before self-hosted
- Existing features have higher adoption on Cloud than self-hosted

**Cost-efficiency**

- Expected to support teams from 50 to 5000 users (EOFY23) at 500$/month minimal infrastructure cost
- Infrastructure cost covered by Sourcegraph
- Administration / operations provided by Sourcegraph
- (FY24) Self service provisioning / release channels for upgrades

#### Not in scope (for FY23 / FY24):

- supporting customer provided GCP infrastructure
- supporting cloud providers other than GCP
- managing Sourcegraph installations in clusters not provisioned by the Cloud team (Bring-your-own-Kubernetes)
- supporting customers smaller than [X1](https://docs.google.com/document/d/1jJq_-arjzjsBDFWV5VlHi01KrxTXYd8NV5UV-fmMtCE/edit#bookmark=id.kjizf2bpwb0f) ARR
- optimizing cost below [X2](https://docs.google.com/document/d/1jJq_-arjzjsBDFWV5VlHi01KrxTXYd8NV5UV-fmMtCE/edit#bookmark=id.pqt5n89wdcan) $/month

## Roadmap

The Cloud team roadmap in available [here](https://docs.google.com/spreadsheets/d/1H01OTNxXb2eobXLtgypJueVxqSz8Dh0IkgY9x5F8cBg/edit#gid=0).

### Q3FY23 goals

- Support the initiative to [make the Cloud a preferred deployment method](https://docs.google.com/document/d/1IUFb2JkwqdLCf8B-FkiF40PyAFg50xfWnB6gQO2ViRQ/edit) from the platform and infrastructure perspective
- [Cloud v2](https://docs.google.com/document/d/1GiOPJjuYrUahrZnENSLUCsujo2MCu2v_gw23SKNzE6E/edit#) - migrate current the Cloud (managed instances) from single-VM, Docker Compose based architecture to multi-node, GKE based architecture

## How to contact the team and ask for help

- For emergencies and incidents, alert the team using Slack command `/genie alert [message] for cloud` and optionally tag the `@cloud-support` handle.
- For internal Sourcegraph teammates, join us in #cloud slack channel to ask questions or request help from our team.
- For [managed instance requests](#managed-instance-requests) or requests for help that requires action for the Cloud team engineers _(exp. coding, infrastructure change etc.)_ please create a GH issue and assign a `team/cloud` label. You can also post a follow up message on the #cloud slack channel
- You may tag the `@cloud-support` handle if you are looking for immediate attention, and it will notify our [on-call engineers](#on-call). Please avoid tagging/DM a specific teammate or the `@cloud-team` handle, this is to try and protect their focus.

## Managed Instance

### When to offer a Managed Instance

> NOTE: Please first read [the customer-facing managed instance documentation](https://docs.sourcegraph.com/admin/install/managed) to understand what managed instances are and what we provide.

See below for the SLAs and Technical implementation details (including Security) related to managed instances.

Please message [`#cloud`](https://sourcegraph.slack.com/archives/C03JR7S7KRP) for any answers or information missing from this page.

When offering customers a Managed Instance, CE and Sales should communicate and gather information for the following topics

- Customers are comfortable with [security implication](technical-docs/index.md#security) of using a managed instance
- Customers' code host should be accessible publically or able to allow incoming traffic from Sourcegraph-owned static IP addresses. _(Notes: we do not have proper support for other connectivity methods, e.g. site-to-site VPN)_

### Trial Managed Instances (aka PoC)

[Documentation](./trial_mi.md)

### Managed Instance Requests

Customer Engineers (CE) or Sales may request to:

- **Add IP(s) to a Managed Instance Allowlist** - [[Issue Template]](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi/update-ip-allowlist&template=managed-instance-update-ip-allowlist.md&title=Add+New+IPs+to+%5BCUSTOMER%5D+Instance)
  - For Customers who have IP restrictions to their MI and would like to add a new list of IP(s) or CIDR
- **Create a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request&template=new_managed_instance.md&title=New+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)]
  - For new customers or prospects who currently do not have a managed instance.
  - After [determining a managed instance is viable for a customer/prospect](https://docs.sourcegraph.com/admin/install/managed)
- **Suspend a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fsuspension-request&template=managed-instance-suspend.md&title=Managed+Instance+suspension+request+for+%5BCUSTOMER+NAME%5D)]
  - For customers or prospects who currently have a managed instance that needs to pause their journey, but intend to come back within a couple of months.
- **Tear down a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fteardown-request&template=managed-instance-teardown.md&title=Managed+Instance+teardown+request+for+%5BCUSTOMER+NAME%5D)]
  - For customers or prospects who have elected to stop their managed instance journey entirely. They accept that they will no longer have access to the data from the instance as it will be permanently deleted.
- **Extend trial Managed Instance issue** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fextend-trial-request&template=managed-instance-extend-trial.md&title=Managed+Instance+Trial+Extend+for+%5BCUSTOMER+NAME%5D)]
  - For prospects who needs to extend the trial.
- **Convert Trial Managed Instance to paid issue** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fextend-trial-request&template=managed-instance-convert-trial-to-paid.md&title=Convert+Trial+Managed+Instance+to+Paid+for+%5BCUSTOMER+NAME%5D)]
  - For prospects who sign the deal after trial expires.
- **Enable telemtry on a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Fenable-telemetry-request&template=managed-instance-enable-telemetry.md&title=Enable+Telemetry+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)]
  - For customers or prospects who currently do have a managed instance and you would like to enable collection of user-level metrics.
- **Disable telemtry on a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Fdisable-telemetry-request&template=managed-instance-disable-telemetry.md&title=Disable+Telemetry+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)]
  - For customers or prospects who currently do have a managed instance and you would like to disable collection of user-level metrics.

#### Workflow

1. CE seeks Managed Instance approval from their regional CE Manager
2. The Regional CE Manager will review the following criteria:
   - Overall, is the deal qualified?
   - Is it technically qualified? We have documented POC success criteria and the customer agrees to the criteria. We have documented the basic technical requirements of the customer (languages, repo types, security, etc.)
   - If anything is non-standard, it must pass the tech review process
3. If approved, then CE proceeds based on whether this is a standard or non-standard managed instance scenario:
   - For standard managed instance requests (i.e., new instance, no scale concerns, no additional security requirements), CE submits a request to the Cloud team using the corresponding [issue template](#managed-instance-requests) in the [sourcegraph/customer](https://github.com/sourcegraph/customer) repo.
   - For non-standard managed instance requests (i.e., any migrations, special scale or security requirements, or anything considered unusual), CE submits the opportunity to Tech Review before making a request to the Cloud team.
4. Message the team in [`#cloud`](https://sourcegraph.slack.com/archives/C03JR7S7KRP).
5. If denied, the CE/AE can appeal through the CE/AE leadership chain of command.

## Supporting Manage Instance

### SLAs for managed instances

Support SLAs for Sev 1 and Sev 2 can be found [here](../technical-success/support/index.md#slas). Other engineering SLAs are listed below

> SLA for internal requests may be extended during upstream service providers outage. For example, automated trial instance creation workflow relies on GitHub Actions and GitHub is down.

|                                               | Description                                            | Response time                                 | Resolution time                               |
| --------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- | --------------------------------------------- |
| New instance Creation                         | Spin up new instance for a new customer                | Within 24 hours of becoming aware of the need | Within 7 working days from agreement          |
| New Trial instance Creation                   | Spin up new trial instance for a new customer          | 1 working day                                 | 1 working day                                 |
| Existing instance suspension                  | Suspend an existing managed instance temporarily       | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| Existing instance deletion/teardown           | Decommission/delete and existing managed instance      | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| New Feature Request                           | Feature request from new or existing customers         | Within 24 hours of becoming aware of the need | Dependent on the request                      |
| Maintenance: Monthly Update to latest release | Updating an instance to the latest release             | NA                                            | Within 10 working days after latest release   |
| Maintenance: patch/emergency release Update   | Updating an instance with a patch or emergency release | NA                                            | Within 1 week after patch / emergency release |
| Add IP(s) to Managed Instance                 | Add new list of IPs to MI allowlist                    | 1 working day                                 | Within 3 days                                 |

### Recovery Time Objective and Recovery Point Objective (RTO & RPO)

We have a maximum Recovery Point Time objective of 24 hours. Snapshots are performed at-least daily on managed instances. Some components may have lower RPOs (e.g. database).

Our maximum Recovery Time Objective is defined by our [support SLAs](../technical-success/support/index.md#slas) for P1 & P2 incidents.

### Incident Response

Incidents which affect managed instances are handled according to our [incidents](../engineering/dev/process/incidents/index.md) process.

### Accessing/Debugging Managed Instances

| Action                      | Who can do it                                         | Description                                                                                                                                                                                                           | How                                                                                                                                                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reload config               | CE/CS                                                 | Reload MI site config (restart frontend)                                                                                                                                                                              | [restart frontend](#faq-how-do-i-restart-the-frontend-after-changing-the-site-config)                                                                                                                                                                                               |
| View GCP project metrics    | Cloud/Security/All SG employees via policy attachment | Access to all MI metrics aggregate in single project                                                                                                                                                                  | [GCP scoped dashboard](https://console.cloud.google.com/monitoring/dashboards/builder/5b5a0be8-d90b-42d8-9271-46366d8af285?project=sourcegraph-managed-monitoring)                                                                                                                  |
| View GCP project logs       | Cloud/Security/All SG employees via policy attachment | Access customer GCP project logs                                                                                                                                                                                      | [GCP logs](https://console.cloud.google.com/logs/query?project=sourcegraph-managed-demo) - change to proper customer name                                                                                                                                                           |
| GCP ssh, tunnel ports       | Cloud/CS                                              | Required for troubleshooting customer environment and perform pre-defined playbook                                                                                                                                    | [install mi cli](#faq-how-to-use-mg-cli-for-managed-instances-operations)<br /> [ssh to MI](./technical-docs/operations.md#ssh-access)<br /> [port-forward to MI](./technical-docs/operations.md#port-forwarding)<br /> [gcloud](https://cloud.google.com/sdk/docs/install)commands |
| Access CloudSQL database    | Cloud/Security/CS                                     | Login to CloudSQL DB                                                                                                                                                                                                  | [install mi cli](#faq-how-to-use-mg-cli-for-managed-instances-operations)<br /> [access CloudSQL via mi cli](./technical-docs/operations.md#accessing-the-cloud-sql)<br /> [gcloud](https://cloud.google.com/sdk/docs/install) commands                                             |
| Login to customer MI web UI | Cloud/CE                                              | Login to customer web UI (requires enabled OIDC on customer instance or access to `1password customer instances vault`) - change URL to customer slug                                                                 | login with GSuite (OIDC) or user/password from 1password (if OIDC not enabled)                                                                                                                                                                                                      |
| Login to customer Grafana   | Cloud/CE                                              | Login to customer [Grafana](https://devmanaged.sourcegraph.com/-/debug/grafana/?orgId=1) (requires enabled OIDC on customer instance or access to `1password customer instances vault`) - change URL to customer slug | login with GSuite (OIDC) or user/password from 1password (if OIDC not enabled)                                                                                                                                                                                                      |
| List Managed Instances      | Cloud/CE                                              | List Managed Instances, filtered by instance type (trial/production/internal) and (optionally) by responsible CE                                                                                                      | [list Managed Instances](#faq-how-do-i-list-trial,-production-or-internal-instances)                                                                                                                                                                                                |

More Managed Instances can be found [here](./technical-docs/operations.md#accessing-the-instance)

## Processes

- [Cloud team working aggrements](./working-agreements.md)
- [Cloud launch process](./launch-process.md)
- [Technical documentation](technical-docs/index.md)

## FAQ

### FAQ: Can customers disable the "Builtin username-password authentication"?

Yes, you may disable the builtin authentication provider and only allow creation of accounts from configured SSO providers.

However, in order to preserve site admin access for Sourcegraph operators, we need to add [Sourcegraph's internal Okta](technical-docs/oidc_site_admin.md) as an authentication provider. Please reach out to our team prior to disabling the builtin provider.

### FAQ: How do I restart the frontend after changing the site-config?

> NOTE: If you are a Cloud teammate, follow the regular operation playbook.

Are you a member of our CE & CS teams?

- Visit [sourcegraph/deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed)
- Locate the `slug` of the customer instance from list of folders
- Visit https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/reload_frontend.yml
- Click `Run workflow` and input the `slug` of customer instance
- Click the `Run workflow` green button
- Done! It shouldn't take more than 2 minutes

<div style="position: relative; padding-bottom: 64.63195691202873%; height: 0;"><iframe src="https://www.loom.com/embed/158df7e4dec349ffbed534bcc5b228ff" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### FAQ: What are Cloud plans for observability - can I see data from customer instances in Honeycomb / Grafana Cloud / X?

Cloud instances provisioned for customers provide the same monitoring data / tooling as all other Sourcegraph instances (Grafana/Prometheus for metrics, Jaeger for traces).
GCP Logging is used to store / query logs written by Sourcegraph workloads, and GCP Monitoring is used for infrastructure-level metrics / uptime checks.

Access to data from Cloud instances is governed by [Cloud Access Control Policy](https://docs.google.com/document/d/16tRqZDKhli4hZtfAkJG46Cj6dtqAw2s6QGw5fGM43BQ/edit?usp=sharing).

Long-term, we will collaborate with [DevX team](../engineering/teams/dev-experience/index.md) (as owners of Sourcegraph observability) to support monitoring / observability solutions that are qualified for use with customer data.

### FAQ: What are Cloud plans for continuous deployment - how often do we deploy code to Cloud instances?

Cloud instances provisioned for customers run [released](../engineering/dev/process/releases/index.md#releases) Sourcegraph versions and are currently updated at least once a month (for minor releases), unless we need to deploy a patch release.

Sourcegraph-owned instances are continuously deployed (with versions that weren't officially released), [DevX team](../engineering/teams/dev-experience/index.md) owns continuous deployment to those environments.

### FAQ: What are Cloud plans for analytics - where can I see data from Cloud instances in Looker / Amplitude?

Cloud instances do not expose analytics data other than [pings](https://docs.sourcegraph.com/admin/pings).
Future work in this area is owned by [Analytics team](../bizops/index.md) and managed through the ["Improve our data collection"](../../strategy-goals/cross-functional-projects/index.md#current-cross-functional-projects) cross-functional project.

### FAQ: Does Cloud support data migrations?

Cloud instances are created without any customer data (repos / code-host connections / code / user accounts / code insights etc.), and Cloud team does not support importing customer data from self-managed / jointly-managed / Cloud-managed Sourcegraph instances.

### FAQ: How to use mi cli for Managed Instances operations?

Follow [sourcegraph/deploy-sourcegraph-managed/README.md](https://github.com/sourcegraph/deploy-sourcegraph-managed#deploy-sourcegraph-managed)

> NOTE: for using commands on specific customer, use `--customer XYZ` or `cd XYZ`, because customer `config.yaml` from specific directory will be used.

### FAQ: How do I generate a password reset link for customer admin?

> For #cloud engineers, run `mi reset-customer-password -email <>` and it will generate a 1password share link for you.

The password reset link expires after 24h, so it's quite common that CE would have to generate a new link during the initial hand-off process.

If access to the instance is restricted, either via VPN or CIDR whitelist, please reach out to #cloud for assistance.

Otherwise, the CE responsible for the customer is added as site-admin, so CE can login with "Sourcegraph Employee" (Google Workspace) auth provider and reset customer admin password. Otherwise, please reach out to #cloud for assistance.

**IMPORTANT**: Please do not share the password reset url directly with the customer admin over email or slack. [More context](https://sourcegraph.slack.com/archives/C03JR7S7KRP/p1660037049746969).

Open 1password, and create a new Secure Note item and paste the password reset url, then use the [1password share item feature](https://support.1password.com/share-items/) to securely share the link with customer admin. Make sure you configure the following options while sharing the item:

- Link expires after: 1 day
- Available to: `<insert customer admin email>`

This ensures only the customer admin is able to gain access to the password reset url.

### FAQ: I have a new feature I want to deploy to Cloud, how do I do that?

Read through our [Cloud Cost Policy](cloud-cost.md)

### FAQ: What are Cloud plans for analytics - where can I see data from Cloud instances in Looker / Amplitude?

Cloud instances do not expose analytics data other than [pings](https://docs.sourcegraph.com/admin/pings).
Future work in this area is owned by [Analytics team](../bizops/index.md) and managed through the ["Improve our data collection"](../../strategy-goals/cross-functional-projects/index.md#current-cross-functional-projects) cross-functional project.

### FAQ: How to list trial, production or internal instances?

You can either use:

- [Github Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_info.yml) (ce email parameter is optional).
- `mi cli` via command:

```
mi info --ce <NAME>@sourcegraph.com --instance-type [trial|production|internal] (both parameters are optional)
```

### FAQ: What is the Cloud instance IP?

Use cases:

- The customer would like to maintain an IP allowlist to permit traffic to their code hosts
- The customer would like to maintain an IP allowlist to permit the use of their own SMTP service.

Outgoing traffic of Cloud instances goes through Cloud NAT with stable IPs.

For #ce teammates, please reach out to #cloud and include link to this FAQ

### FAQ: What code-hosts does Cloud support?

Cloud supports all code-hosts types (self-managed and Cloud-managed), but it currently requires the code-host to have a public IP.
More context [here](https://docs.google.com/document/d/14S3jn0bV03WdeT1H36omvtGJFoIFJjM-3ZA1qIyIl7o/edit)

### FAQ: How do I figure out the GCP Project ID for a customer?

The best way to determine the project ID for a given customer is to look up the customer in the `deploy-sourcegraph-managed` repo using the following query on S2:

```
repo:^github\.com/sourcegraph/deploy-sourcegraph-managed$ file:config\.yaml lang:yaml customer: :[_\n]
```

The `customer` field should allow you identify the correct GCP project. If it's still unclear, a Cloud team member can help on Slack in the [#cloud](https://sourcegraph.slack.com/archives/C03JR7S7KRP) channel.

Alternatively, users with `gcloud` access can run:

```
gcloud projects list --filter='labels.mi-security=true' --format="json(projectId,labels)"
```

and search the results for the customer name. The `domain` field should include the customer's domain name allowing the project ID to be identified.
