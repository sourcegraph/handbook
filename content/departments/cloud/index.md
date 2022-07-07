# Cloud

> NOTE: **Cloud means single-tenant dedicated instances managed by Sourcegraph** _(for example `mycompany.sourcegraph.com`)_. Sourcegraph Cloud should not be confused with Sourcegraph.com which holds public and open source code. The Cloud and managed instance should be considered synonyms within these handbook pages.

The Cloud team is the special focus team reporting directly to CEO modeled on _“if AWS were to offer ‘Managed Sourcegraph’ like they do Elasticsearch, Redis, PostgreSQL, etc., how would they do it?”_ The team is responsible for maintaining existing [managed instances](https://docs.sourcegraph.com/admin/install/managed). and building the next generation of them. The Cloud team has no other responsibilities.

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

**Support 200+ customer**

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
  - We’re incentivized to operate efficiently
- Administration / operations provided by Sourcegraph
- (FY24) Self service provisioning / release channels for upgrades

Not in scope (for FY23 / FY24):

- supporting customer provided GCP infrastructure
- supporting cloud providers other than GCP
- managing Sourcegraph installations in clusters not provisioned by the Cloud team (Bring-your-own-Kubernetes)
- supporting customers smaller than [X1](https://docs.google.com/document/d/1jJq_-arjzjsBDFWV5VlHi01KrxTXYd8NV5UV-fmMtCE/edit#bookmark=id.kjizf2bpwb0f) ARR
- optimizing cost below [X2](https://docs.google.com/document/d/1jJq_-arjzjsBDFWV5VlHi01KrxTXYd8NV5UV-fmMtCE/edit#bookmark=id.pqt5n89wdcan) $/month

## Roadmap

The Cloud team will define FY23 roadmap in upcoming weeks.

### Q2FY23 goals

- Support up to 100 managed instances [without greatly increasing engineering capacity invested in maintenance](https://docs.google.com/document/d/1SvWVScwBtLdrvoVKB4tgSiqhv3MPBDjv6JbwqGnlLdg/edit#)
  - [Migrate all managed instances to v 1.1 architecture](https://docs.google.com/document/d/1ZHOnZc6K0oLhnqbcFYyzvdqng2ZM4vhc8Ln20Q4piQ0/edit#heading=h.trqab8y0kufp)
- Provision sourcegraph.sourcegraph.com as production grade managed instance for Sourcegraph team
- [Support migration Sourcegraph.com customers to the Cloud](https://docs.google.com/document/d/1owIo8QA_omwnFqSfS5EKyIhd4SpMDdn7cZJrsvgjl-E/edit#heading=h.2vev9l6i9qrg)
- Support SOC2 audit for managed instances
- Enabling managed instances trials (limited capacity)
- Defined SLO & measured SLO for managed instances
- Finalize design & implementation plan of [RFC 706](https://docs.google.com/document/d/1pPS3xzv4pI5ZlliPrr1tkoOtvn-ZWxKVdYfNNHKVPHs/edit)

## Team

{{generator:product_team.cloud}}

## How to contact the team and ask for help

- For emergencies and incidents, alert the team using Slack command `/genie alert [message] for devops`.
- For internal Sourcegraph teammates, join us in [`#cloud`](https://sourcegraph.slack.com/archives/C03JR7S7KRP) slack channel to ask questions or request help from our team.
- For [special requests](#managed-instance-requests) types or requests for help that requires action for the Cloud team engineers _(exp. coding, infrastructure change etc.)_ please create a GH issue and assign a `team/cloud` label. You can also post a follow up message on the [`#cloud`](https://sourcegraph.slack.com/archives/C03JR7S7KRP) slack channel

## When to offer a Managed Instance

> NOTE: Please first read [the customer-facing managed instance documentation](https://docs.sourcegraph.com/admin/install/managed) to understand what managed instances are and what we provide.

Managed instances offer a backup alternative for using Sourcegraph when a customer either can't or, for some reason, won't deploy Sourcegraph self-hosted.

See below for the SLAs and Technical implementation details (including Security) related to managed instances.

Please message [`#cloud`](https://sourcegraph.slack.com/archives/C03JR7S7KRP) for any answers or information missing from this page.

When offering customers a Managed Instance, CE and Sales should communicate and gather information for the following topics

- Customers are comfortable with [security implication](technical-docs/index.md#security) of using a managed instance
- Customers' code host should be accessible publically or able to allow incoming traffic from Sourcegraph-owned static IP addresses. _(Notes: we do not have proper support for other connectivity methods, e.g. site-to-site VPN)_

## Managed Instance Requests

Customer Engineers (CE) or Sales may request to:

- **Create a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request&template=new_managed_instance.md&title=New+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)]
  - **After ruling out a self-hosted deployment** and [determining a managed instance is viable for a customer/prospect](https://docs.sourcegraph.com/admin/install/managed)
  - For new customers or prospects who currently do not have a managed instance.
- **Suspend a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fsuspension-request&template=managed-instance-suspend.md&title=Managed+Instance+suspension+request+for+%5BCUSTOMER+NAME%5D)]
  - For customers or prospects who currently have a managed instance that needs to pause their journey, but intend to come back within a couple of months.
- **Tear down a managed instance** - [[Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fteardown-request&template=managed-instance-teardown.md&title=Managed+Instance+teardown+request+for+%5BCUSTOMER+NAME%5D)]
  - For customers or prospects who have elected to stop their managed instance journey entirely. They accept that they will no longer have access to the data from the instance as it will be permanently deleted.

### Workflow

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

## SLAs for managed instances

Support SLAs for Sev 1 and Sev 2 can be found [here](../ce-support/support/index.md#slas). Other engineering SLAs are listed below

|                                               | Description                                            | Response time                                 | Resolution time                               |
| --------------------------------------------- | ------------------------------------------------------ | --------------------------------------------- | --------------------------------------------- |
| New instance Creation                         | Spin up new instance for a new customer                | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| Existing instance suspension                  | Suspend an existing managed instance temporarily       | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| Existing instance deletion/teardown           | Decommission/delete and existing managed instance      | Within 24 hours of becoming aware of the need | Within 15 working days from agreement         |
| New Feature Request                           | Feature request from new or existing customers         | Within 24 hours of becoming aware of the need | Dependent on the request                      |
| Maintenance: Monthly Update to latest release | Updating an instance to the latest release             | NA                                            | Within 1 week after latest release            |
| Maintenance: patch/emergency release Update   | Updating an instance with a patch or emergency release | NA                                            | Within 1 week after patch / emergency release |

### Incident Response

Incidents which affect managed instances are handled according to our [incidents](../engineering/dev/process/incidents/index.md) process.

## How we work

### Issue tracking

The [Cloud team GitHub Project](https://github.com/orgs/sourcegraph/projects/264/views/1) is the single source of truth.

### How we use GitHub Projects (Beta)

tbd

### On-call

We maintain an [on-call rotation in Opsgenie](https://sourcegraph.app.opsgenie.com/teams/dashboard/9ec2825d-38da-4e2b-bdec-a0c03d11d420/main). Responsibilities of the teammate who is on-call include:

- Acknowledging incoming alerts
- Initiating incident procedures
- Publishing postmortems

## [Managed Instance technical documentation](technical-docs/index.md)

## Team slack channels

- [`#cloud`](https://sourcegraph.slack.com/archives/C03JR7S7KRP) - external channel for the Cloud team where other Sourcegraphers can ask for help or leave questions for the team
- [`#cloud-internal`](https://sourcegraph.slack.com/archives/C03LCPCT3SP) - internal channel for the Cloud team for all day to day communication within the team

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
