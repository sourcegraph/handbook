# Cloud Operations Team

> [!NOTE] **Cloud means single-tenant dedicated instances managed by Sourcegraph** _(for example `mycompany.sourcegraph.com`)_. Sourcegraph Cloud should not be confused with Sourcegraph.com which holds public and open source code. The Cloud and managed instance should be considered synonyms within these handbook pages.

The Cloud team is the special focus team reporting directly to CEO modeled on _“if AWS were to offer ‘Managed Sourcegraph’ like they do Elasticsearch, Redis, PostgreSQL, etc., how would they do it?”_ The team is responsible for maintaining existing [managed instances](https://docs.sourcegraph.com/admin/install/managed) and building the next generation of them. The Cloud team has no other responsibilities.

## Leadership

{{generator:product_team_leads.ship_cloudops}}

## Members

{{generator:product_team.ship_cloudops}}

## Mission statement

Build a **fully managed platform** for using Sourcegraph, providing **feature compatibility** with self-hosted while **being cost-efficient for customers and Sourcegraph**.

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

**Feature compatibility**

- Feature set on-par (or more powerful) than self-hosted
- New features available on Cloud before self-hosted
- Existing features have higher adoption on Cloud than self-hosted

**Cost-efficiency**

- Infrastructure cost covered by Sourcegraph
- Administration / operations provided by Sourcegraph
- (FY24) Self service provisioning / release channels for upgrades

#### Not in scope (for FY23 / FY24):

- supporting customer provided GCP infrastructure
- supporting cloud providers other than GCP
- managing Sourcegraph installations in clusters not provisioned by the Cloud team (Bring-your-own-Kubernetes)
- supporting customers smaller than [X1](https://docs.google.com/document/d/1jJq_-arjzjsBDFWV5VlHi01KrxTXYd8NV5UV-fmMtCE/edit#bookmark=id.kjizf2bpwb0f) ARR
- optimizing cost below [X2](https://docs.google.com/document/d/1jJq_-arjzjsBDFWV5VlHi01KrxTXYd8NV5UV-fmMtCE/edit#bookmark=id.pqt5n89wdcan) $/month

## How to contact the team and ask for help

- For emergencies with an **active incident**, alert the team using Slack command `/genie alert [message] for cloud` and optionally tag the `@cloud-support` handle.
- For non-emergencies issues that are related with an active Cloud instance, follow [intake process](#request-for-help-playbook) below.
- For general questions, join us in #discuss-cloud-ops slack channel to ask questions or request help from our team.
- For Cloud instances requests (e.g., create cloud instance, configure cody), follow go/cloud-requests

**IMPORTANT** You may tag the `@cloud-support` handle if you are looking for immediate attention, and it will notify our [on-call engineers](#on-call). Please avoid tagging/DM a specific teammate or the `@cloud-team` handle. For immediate escalation, please tag Cloud EM in your message on Slack.

### Request for help playbook

This is the playbook for incoming requests concerning a specific Cloud instance, please follow it prior to engaging support:

> [!NOTE] When you're unsure, always fallback to our `Non-Emergency Contact` in go/whodoinotify

- Is this a technical issue concerning an existing Cloud instance?
  - Yes, the site is down.
    - This is an emergency, follow go/whodoinotify and page on-call contact
  - Yes, users are seeing degraded performance, e.g., search is slow, perm syncing is too slow, repo is not clone
    - Run some [basic sanity check](#sanity-check-on-a-cloud-instance) to decide the type of problems
      - For Cloud infra issues, follow Cloud Ops `Non-Emergency Contact` in go/whodoinotify
      - For application-specific issues, route requests to owning team from go/whodoinotify and tag @cloud-support for visibility
  - Yes, users are having trouble configuring the instance or using a specific features, e.g., SAML login error, cannot sync with code host due to unauthenticated error, batch changes unauthenticated error
    - Either route to the owning team from go/whodoinotify or open a support ticket with Support Engineering
  - Yes, but my issue is not covered above. Follow Cloud Ops `Non-Emergency Contact` in go/whodoinotify
  - No, this is most likely a general question (e.g., questions about prospective customers), follow Cloud Ops `Non-Emergency Contact` in go/whodoinotify

## Cloud Instances

### When to offer a Cloud Instance

> [!NOTE] Please first read [the customer-facing managed instance documentation](https://docs.sourcegraph.com/admin/install/managed) to understand what managed instances are and what we provide.

See below for the SLAs and Technical implementation details (including Security) related to managed instances.

Please message [`#discuss-cloud-ops`](https://sourcegraph.slack.com/archives/C03JR7S7KRP) for any answers or information missing from this page.

When offering customers a Cloud Instance, CE and Sales should communicate and gather information for the following topics

- Customers are comfortable with [security implication](technical-docs/index.md#security) of using a managed instance
- Customers' code host should be accessible publically or able to allow incoming traffic from Sourcegraph-owned static IP addresses. _(Notes: we do not have GA support for other connectivity methods, e.g. site-to-site VPN)_

### Trial Managed Instances (aka PoC)

[Documentation](./trial_mi.md)

### Internal processes for Cloud Operations

Below are a list of processes Cloud team supports for internal stakeholders, e.g., engineering department, Customer Engineers, Technical Advisors, Sales, Support, etc.

We aim to make all processes self-service as much as possible, please follow the instruction closely.

#### **Create a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi,mi/new-instance-request,mi/self-service&projects=&template=new_managed_instance.yml&title=New+Cloud+instance:+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">🤖 self-service</span>

- For new customers or prospects who currently do not have a managed instance. After [determining a managed instance is viable for a customer/prospect](https://docs.sourcegraph.com/admin/install/managed)
- For internal teammates who are looking for a short-lived instance for testing or demo purposes. For example, tracking a long-running feature branch for continous testing before release date (go/cloud-release-channels).

#### **Suspend a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fsuspension-request&template=managed-instance-suspend.md&title=Managed+Instance+suspension+request+for+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">⚙️ manual</span>

- For customers or prospects who currently have a managed instance that needs to pause their journey, but intend to come back within a couple of months.

#### **Tear down a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fteardown-request&template=managed-instance-teardown.md&title=Managed+Instance+teardown+request+for+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">⚙️ manual</span>

- For customers or prospects who have elected to stop their managed instance journey entirely. They accept that they will no longer have access to the data from the instance as it will be permanently deleted.

#### **Convert Trial Cloud instance to paid** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi,mi/self-service,mi/configure-instance-type&projects=&template=managed-instance-configure-instance-type.yml&title=Configure+Instance+Type+for+Cloud+instance+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">🤖 self-service</span>

- For prospects who sign the deal after trial expires.

#### **Enable telemetry on a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Fenable-telemetry-request&template=managed-instance-enable-telemetry.md&title=Enable+Telemetry+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">⚙️ manual</span>

- For customers or prospects who currently do have a managed instance and you would like to enable collection of user-level metrics.

#### **Disable telemtry on a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Fdisable-telemetry-request&template=managed-instance-disable-telemetry.md&title=Disable+Telemetry+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">⚙️ manual</span>

- For customers or prospects who currently do have a managed instance and you would like to disable collection of user-level metrics.

#### **Add IP(s) to a Cloud instance ingress allow list** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi/update-ip-allowlist&template=managed-instance-update-ip-allowlist.md&title=Add+New+IPs+to+%5BCUSTOMER%5D+Instance)

<span class="badge badge-note">⚙️ manual</span>

- For Customers who have IP restrictions to their MI and would like to add a new list of IP(s) or CIDR

#### **Configure Cody on a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi,mi/configure-cody-request,mi/self-service&projects=&template=managed-instance-configure-cody.yml&title=Configure+Cody+for+Cloud+instance+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">🤖 self-service</span>

- To enable Cody for an existing managed instance customer or prospect in trial. Note that the Cloud team will take care of creating and managing Anthropic and OpenAI keys, no action needed from CE/TA.
- To switch to a different LLM provider for an existing managed instance
- To disable Cody for an existing managed instance.

#### **Enable custom domain on a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi/add-custom-domain&template=managed-instances-custom-domain.md&title=Add+custom+domain+to+%5BCUSTOMER%5D+Instance)

<span class="badge badge-note">⚙️ manual</span>

- For customers we are looking to bring their own domain, e.g., `sourcegraph.company.com`.

#### **Enable static NAT IP or private connectivity on a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi&projects=&template=managed-instance-configure-code-host-connectivity.yml&title=Configure+Code+Host+Connectivity+for+Cloud+instance+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">⚙️ manual</span>
<span class="badge badge-note">🤖 self-service</span>

- For customers looking to configure IP allowlist to permit Cloud instance traffic
- For customers looking to enable private code hosts support, e.g., AWS Private Link, GCP Private Service Connect, Sourcegraph Connect for on-prem data center

#### **Update license key on a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi,mi/configure-license-key,mi/self-service&projects=&template=managed-instance-configure-license-key.yml&title=Configure+License+Key+for+Cloud+instance+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">🤖 self-service</span>

- To update the license key for an existing instance.

#### **Reset customer admin password**

<span class="badge badge-note">🤖 self-service</span>

To send out a password reset email

- Open [GitHub Actions](https://github.com/sourcegraph/cloud/actions/workflows/mi_reset_password.yml)
- Click `Run workflow` and follow instruction

#### **Restart a Cloud instance**

<span class="badge badge-note">🤖 self-service</span>

Restart the frontend after changing the site-config.

- Open [GitHub Actions](https://github.com/sourcegraph/cloud/actions/workflows/mi_reload_frontend.yml)
- Click `Run workflow` and enter in the customer slug and select `prod` as the environment.

Note: If you do not know the slug, refer to the `Name` field of the table at http://go/cloud-ops.

### Sanity check on a Cloud instance

When receiving customers complaint regarding performance or application issue, we need to do some basic sanity check to decide how to route the requests:

- Visit go/cloud-requests and locate the instance.
- Follow pre-req and request Cloud infra access.
- Navigate to "Quick links" section.

Then, we can decide the type of issue we are seeing, one of cloud infra issue, or application-specific issue.

- Review resource utilization in Grafana dashboard (`Global container resource utilization` dashboard) to ensure there is no anomaly (e.g., constant 90%+ utilization, constant spiky utilization).
  - Yes, this indicates Cloud infra problem. Please escalate to `@cloud-support`.
- Review application logs of relevant services and check if there is any anomaly, e.g., a lot of errors.
  - Yes, this indicates an application problem

#### **Request to increase executors count on a Cloud instance** - [New Request](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team/cloud,mi,mi/configure-executors-request&projects=&template=managed-instance-configure-executors.yml&title=Configure+Executors+concurrency+for+Cloud+instance+%5BCUSTOMER+NAME%5D)

<span class="badge badge-note">⚙️ manual</span>

- To increase the number of concurrent executors for an existing instance.

## Supporting Manage Instance

### SLAs for managed instances

Support SLAs for Sev 1 and Sev 2 can be found [here](../technical-success/support/index.md#slas). Other engineering SLAs are listed below

> SLA for internal requests may be extended during upstream service providers outage. For example, automated trial instance creation workflow relies on GitHub Actions and GitHub is down.

|                                               | Description                                            | Response time                                 | Resolution time                               |
| --------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- | --------------------------------------------- |
| New instance Creation                         | Spin up new instance for a new customer                | 1 working day                                 | 1 working day from agreement                  |
| New Trial instance Creation                   | Spin up new trial instance for a new customer          | 1 working day                                 | 1 working day                                 |
| Existing instance suspension                  | Suspend an existing managed instance temporarily       | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| Existing instance deletion/teardown           | Decommission/delete and existing managed instance      | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| New Feature Request                           | Feature request from new or existing customers         | Within 24 hours of becoming aware of the need | Dependent on the request                      |
| Maintenance: Monthly Update to latest release | Updating an instance to the latest release             | NA                                            | Within 10 working days after latest release   |
| Maintenance: patch/emergency release Update   | Updating an instance with a patch or emergency release | NA                                            | Within 1 week after patch / emergency release |
| Add IP(s) to Managed Instance                 | Add new list of IPs to MI allowlist                    | 1 working day                                 | Within 3 days                                 |
| Enable custom domain                          | Add or update custom domain                            | 3 working day                                 | Within 2 week                                 |

_Agreement here is the date specified within the required GitHub issue_

### Recovery Time Objective and Recovery Point Objective (RTO & RPO)

We have a maximum Recovery Point Objective of 24 hours. Snapshots are performed at-least daily on managed instances. Some components may have lower RPOs (e.g. database).

Our maximum Recovery Time Objective is defined by our [support SLAs](../technical-success/support/index.md#slas) for P1 & P2 incidents.

### Incident Response

Incidents which affect managed instances are handled according to our [incidents](../engineering/dev/process/incidents/index.md) process.

### Accessing/Debugging Managed Instances

For information relating to accessing, debugging, or otherwise admnistrating a managed instance, please refer to the go/cloud-ops.

## Processes

- [Cloud team working agreements](./working-agreements.md)
- [Cloud launch process](./launch-process.md)
- [Technical documentation](technical-docs/index.md)
- [Post Mortem Template / RCA](cloud-rca.md)

## FAQ

### FAQ: Can customers disable the "Builtin username-password authentication"?

Yes, you may disable the builtin authentication provider and only allow creation of accounts from configured SSO providers.

[Sourcegraph teammate access to Cloud instances](technical-docs/oidc_site_admin.md) is configured separately at the infrastructure and lives outside the regular Sourcegraph site configuration.

### FAQ: How do I restart the frontend after changing the site-config?

> [!NOTE] If you are a Cloud teammate, follow the regular operation playbook.

To restart the frontend for a customer, you can either execute:

#### Automated (recommended)

1. Navigate to the [Reload Instance Frontend](https://github.com/sourcegraph/cloud/actions/workflows/mi_reload_frontend.yml) GitHub Actions page
1. Click the "Run Workflow" button
1. Enter in the customer slug and select `prod` as the environment. If you do not know the slug, refer to the `Name` field of the table at http://go/cloud-ops.

#### Manually (requires [Cloud V2 Prod Access](https://app.entitle.io/request?bundleId=ce56e0e6-15d6-4f3a-93df-dd2418d378ec&targetType=bundle))

```sh
mi2 instance workon -e prod -s <customer slug> -exec
mi2 instance check pods-health
kubectl rollout restart deployments/sourcegraph-frontend
```

### FAQ: Do you support custom domains?

Yes. Learn more about [custom domain support](./technical-docs/custom_domain.md).

### FAQ: Does Cloud support Server Side Batch Changes and precise code navigation?

Yes. All Cloud instances have executors enabled by default, enabling the use of Server Side Batch Changes and Code Intel auto-indexing.

Key facts:

- [SSBC](https://docs.sourcegraph.com/batch_changes/explanations/server_side) is enabled by default
- [Auto-indexing](https://docs.sourcegraph.com/code_navigation/explanations/auto_indexing) are enabled on all repos by default so customer can benefit from [precise code navigation](https://docs.sourcegraph.com/code_navigation/explanations/precise_code_navigation). However, this relies on [inference](https://docs.sourcegraph.com/code_navigation/explanations/auto_indexing_inference) to work on the customer repo. For unsupported repo or repo that uses private registry (e.g., private NPM), the customer will have to work with Support or #ask-code-intel to figure out the custom auto-indexing configuration.

### FAQ: What are Cloud plans for observability - can I see data from customer instances in Honeycomb / Grafana Cloud / X?

Cloud instances provisioned for customers provide the same monitoring data / tooling as all other Sourcegraph instances (Grafana/Prometheus for metrics, Jaeger for traces).
GCP Logging is used to store / query logs written by Sourcegraph workloads, and GCP Monitoring is used for infrastructure-level metrics / uptime checks.

Access to data from Cloud instances is governed by [Cloud Access Control Policy](https://docs.google.com/document/d/16tRqZDKhli4hZtfAkJG46Cj6dtqAw2s6QGw5fGM43BQ/edit?usp=sharing).

Long-term, we will collaborate with [Developer Infrastructure team](../engineering/teams/devinfra/index.md) (as owners of Sourcegraph observability) to support monitoring / observability solutions that are qualified for use with customer data.

### FAQ: What are Cloud plans for continuous deployment - how often do we deploy code to Cloud instances?

Cloud instances provisioned for customers run [released](../engineering/dev/process/releases/index.md#releases) Sourcegraph versions and are currently updated at least once a month (for minor releases), unless we need to deploy a patch release.

Sourcegraph-owned instances can opt-in to receive continuous upgrades with versions that weren't officially released, e.g., the latest commit on `main` branch, release branches. We own continuous deployment to those environments.

### FAQ: What are Cloud plans for analytics - where can I see data from Cloud instances in Looker / Amplitude?

Cloud instances do not expose analytics data other than [pings](https://docs.sourcegraph.com/admin/pings).
Future work in this area is owned by [Data & Analytics team](../data-analytics/index.md).

### FAQ: Does Cloud support data migrations?

Cloud instances are generally created without any customer data (repos / code-host connections / code / user accounts / code insights etc.).

The Cloud team has an experimental process for importing data from on-premises / jointly-managed Sourcegraph instances, described [here](technical-docs/v2.0/onprem_data_migration.md).

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

### FAQ: What is the Cloud instance IP?

Use cases:

- The customer wants to maintain an IP allowlist to permit traffic to their code hosts
- The customer wants to maintain an IP allowlist to permit the use of their own SMTP service.
- The customer wants to permit Cloud instance access to their private registry for [code navigation auto-indexing](https://docs.sourcegraph.com/code_navigation/how-to/enable_auto_indexing), e.g, NPM Enterprise, [JFrog Artifactory](https://jfrog.com/artifactory/).
- The customer wants to use container images from a private container registry in build steps during auto-indexing or SSBC.
- The customer wants to communicate directly with private resources in [server-side batch changes](https://docs.sourcegraph.com/batch_changes/explanations/server_side).

**Outgoing** traffic of Cloud instances goes through Cloud NAT with stable IPs. All IPs are reserved exclusively on a per-customer basis. Those IPs are used by Sourcegraph Cloud to communicate directly with customer systems such as code hosts, authentication service, or SMTP service.

For #ce teammates, please review above content and reach out to #cloud with sufficient context.

For #cloud teammates, please run follow the operation dashboard.

### FAQ: Can customers restrict access to their Cloud instances to VPN-only/specific IP adddresses?

Use cases:

- The customer would like to only permit access to the Cloud instance from their VPN

**Incoming** traffic of Cloud instances first go through our WAF provider, Cloudflare, and we are able to utilize Cloudflare to filter incoming traffic based on the IP list provided by customer.

For #ce teammates, please request a list of IP address of IP ranges (CIDR) from customers and include them in the creation request.

For #cloud teammates, add the IP addresses to the instance `config.yaml`.

### FAQ: What code-hosts does Cloud support?

Cloud supports all code-hosts types (self-managed and Cloud-managed), but it currently requires the code-host to have a public IP.
More context [here](https://docs.google.com/document/d/14S3jn0bV03WdeT1H36omvtGJFoIFJjM-3ZA1qIyIl7o/edit).

If your prospect has the need for private code hosts, please review go/cloud-code-hosts to determine the code host type, then you may propose one of the our available options listed under https://docs.sourcegraph.com/cloud#private-connectivity

Please reach out to #discuss-cloud-ops, and we would love to partner with them to develop a new solution that is not available.

### FAQ: What is the difference between air-gapped, private and public code hosts?

Please use the decision tree at go/cloud-code-hosts to determine the code host types. The below definitions are for reference only.

- **Air-Gapped Code Host** is a code host that is physically isolated from the internet. For example the code host is deployed on a hardware (server) that is within customers office/private data center and the only way to connect to this code host is to be physically connected to this air-gapped network; a user has to be within the office and be connected to the air-gapped office network via ethernet cable of wi-fi. In this scenario the only option for Sourcegraph to work is on-prem deployment within the same air-gapped network and all users connect to Sourcegraph instance via local IP or local DNS. _Please note cloud will never be able to support air-gapped code hosts as these are based on their physical isolation so it’s not technically feasible for a Cloud instance to access such code host._
- **Private Code Host** is a code host deployed in a private network (for example AWS EC2 instance within VPC). To connect to this code host a user has to have access to the private network usually via VPC Peering, VPN, or tunneling)
- **Public Code Host** is the code host that is publicly accessible on internet - a user can CURL it via IP or open the URL in the browser. This also includes a code host with a public interface but restricts access to IP allowlist. The Sourcegraph instance can access this code host without using VPC Peering, VPN or other methods. Of course, accessing this code host is protected by authentication and authorization mechanisms

### FAQ: How do I figure out the GCP Project ID for a customer?

To identify the Project ID for a given customer, refer to the table found at http://go/cloud-ops.
