# Incidents

An incident is any unplanned event that causes a service disruption. Identifying and resolving incidents helps us improve: we'll make Sourcegraph a higher quality product, we'll improve the processes that lead to or around the incident, and we'll reduce friction around identifying incidents in the future.

Some examples of incidents:

- sourcegraph.com is down or a critical feature is broken (e.g. sign-in, search, code intel).
- If sourcegraph.com is down for more than 5 minutes, a critical feature is down for more than 5 minutes, or we're aware of a service degradation issue that >5 users have reported. If you're unsure if the incident's impact qualifies, ask @cs in Slack for advice.
- We have an issue (per [our standard SLA definition](../../../../technical-success/support/index.md#slas)) that impacts all/many self-hosted instances, all/many managed instances, or all/many Cloud/SaaS users
- There is a security issue with Sourcegraph (and if so, please also follow [our security disclosure process](../../../../security/reporting-vulnerabilities.md#how-we-disclose-security-vulnerabilities)).
- A Sourcegraph team member feels like an incident might be present, but isn't certain or isn't able to confirm on their own.
- We need to do critical proactive 1-to-many communication to all self-hosted customers (for example, making them aware of something they need to do in a certain upgrade like [the prep needed before upgrading to 3.31](https://docs.sourcegraph.com/admin/migration/3_31)) -- over time, as we do more of this, we will likely create a separate process for this

Additionally, on big announcement days (funding, product launch, campaign launch, etc.), all incidents warrant more immediate attention from marketing so we can hold off on planned activities/be prepared to respond to issues. On these days, the person in marketing leading the announcement is responsible for looping #customer-support and engineering/product in ahead of time to ensure they are aware of planned activities. The person leading the announcement will work with #customer-support on the ad-hoc plan for incidents (which may involve on-call rotation).

All incidents are announced in the #announce-incidents channel automatically through incident.<unlink></unlink>io, and past incidents are available in the [incidents.io dashboard](https://app.incident.io/incidents) and our [past incident postmortems](#past-incident-post-mortems).

## Process

### Identification

Incidents can be identified by anyone (e.g. customers, Sourcegraph teammates) via incident.<unlink></unlink>io.

Even incidents that might turn out to be [false positives](#false-positives) should be reported, to ensure that they are responded to and investigated with the same rigor as any incident, and that any lessons can be learnt.

The first Sourcegraph teammate (regardless of their role) that becomes aware of an incident, or suspects there may be an incident, is responsible for taking the following actions:

1. If the incident was reported by someone outside of Sourcegraph, acknowledge that the incident is being handled.
2. Start a new incident with the incident.<unlink></unlink>io Slack bot: `/incident`
   - set the description and [severity](#severity-levels) from the modal in Slack
   - this will create a new chatroom in Slack where all other communication should occur
3. If you are not a member of product, engineering, or customer support, type the following into the Slack channel to page someone who can complete the rest of this list (otherwise proceed to the next step): `/genie alert we have an incident, please help for customer-support`
4. Identify folks to serve in the following roles (see [how to identify folks to serve in incident lead and messenger roles](#how-to-identify-folks-to-serve-in-incident-lead-and-messenger-roles)
   - [Incident Lead](#incident-lead)
   - [Messenger](#messenger)
5. Stay involved to help, or thank the incident lead and messenger and leave them to it

#### Severity levels

We currently have 2 severity levels for incidents that require this workflow and both of these levels are considered a severity 1 per [our contractual SLAs](../../../../technical-success/support/index.md#slas), we just break them down a bit more for internal delineation:

1. **Critical** - Issues causing very high impact to customers. Immediate response is required. Examples include a full outage, or a data breach.
2. **Major** - Issues causing significant impact. Immediate response is usually required. We might have some workarounds that mitigate the impact on customers. Examples include an important sub-system failing.

Severity level 2 issues [our contractual SLAs](../../../../technical-success/support/index.md#slas) (aka, minor issues) should not use this workflow (these go through the usual support/feedback processes.

#### False positives

Every incident is an opportunity for us to make Sourcegraph a higher quality product and to improve the processes that lead to or around an incident. Even if an incident turns out to be a false positive, we value that it was identified.

### Incident roles and responsibilities

Incidents always have an [incident lead](#incident-lead), and for customer-impact incidents, may also have a [messenger](#messenger).

#### Incident lead

The incident lead is responsible for resolving the incident as quickly and safely as possible. They are the DRI coordinating the incident, tasked with driving it to resolution and keeping others informed (if it's a non-customer-impact issue) or coordinating with the [messenger](#messenger) on communication (for customer-impact issues).

Typically an incident lead is on the engineering team and may, if appropriate, be the same person who identified and raised the incident. If not, and an engineer hops in, great. Otherwise, loop in the on-call engineer. You can find out who is on-call by typing `/genie whoisoncall` in Slack. If you are not able to immediately get in contact with the on-call engineer, then manually create a new OpsGenie alert by typing `/genie alert <description of incident and link to Slack thread> for [@team or user email]`. For example:

- `/genie alert Sourcegraph.com is down for delivery team`
- `/genie alert We need your help with the production incident for name@sourcegraph.com`

The incident lead should follow these steps:

1. **Assign** the Incident Lead in the incident chatroom with `/incident lead @engineer`
2. **Thank** the person who identified the incident.
3. **Acknowledge ownership** of the incident in the relevant incident chatroom (i.e. "I'm on it").
4. **Communicate** intended next steps (e.g. "I plan to...") and keep the incident status and summary up to date (e.g. "We tried ... which resulted in ...") in the incident chat room.
5. **Attempt to resolve the incident** by rolling back to a known good state instead of trying to identify and fix the exact issue—refer to [playbooks](#playbooks) for specific scenarios. Communicate your intentions in the incident chatroom.
6. If rolling back and or reverting commits doesn’t resolve the incident, then identify the most logical resolution owner given what you know (this may be yourself) and have that person acknowledge ownership in the incident chatroom (i.e. “I’m on it”).
   - The person who has made recent changes to the affected product/code/system.
   - The person who owns the affected product/code/system.
   - The on-call engineer.

The incident lead may delegate tasks to other available/working engineers if necessary but should make a best effort to minimize the number of other engineers who get interrupted by the incident. This delegated work takes priority over work unrelated to operational incidents.

If it's a security related issue, it's best to also loop in the security team.

> [!NOTE] Need help using incident<unlink>.io? Go to their Help Centre at [docs.incident.io](https://docs.incident.io/).

#### Messenger

The messenger is only needed for incidents with customer-facing impact. The messenger is always a member of customer support.

If an incident has customer impact, all you have to do is engage #customer-support and customer support will facilitate the entire communication process so you can focus on solving the issue. Support is also in OpsGenie and can be engaged the same way as engineering with `/genie whoisoncall` and `/genie alert <description of incident and link to Slack thread> for [@team or user email]`. If ever there is a question about whether a messenger is useful for an incident, just post in #customer-support and @ mention @cs-triage or page support and the support team can help think through it and determine best next steps.

Once identified, the messenger for the incident follows [this document](../../../../technical-success/support/process/serving-as-a-messenger-during-incidents.md) to ensure customer communication is consistent and reliable.

### Playbooks

See [playbooks](./playbooks/index.md).

Some common scenarios:

- [Rollback sourcegraph.com](../deployments/playbooks.md#rolling-back-sourcegraph-com)
  - Other deployment playbooks are available on the [deployment playbooks page](../deployments/playbooks.md)
- Revert a broken commit out of main. If a bad commit has already been deployed to sourcegraph.com and is causing problems, rollback the deploy before reverting the commit in main.
  - Revert the commit in a branch and open a PR.
  - Tag the owner of the reverted commit as a reviewer of the PR.
  - Merge the PR as soon as CI passes (don’t block on review).
- [Fix failed database migration on sourcegraph.com](https://github.com/sourcegraph/sourcegraph/tree/main/migrations#dirty-schema)
- For CI issues, refer to the [CI playbook](./playbooks/ci.md)
- More playblooks are available in the [playbooks section](#playbooks) of this page.

### Post-mortem

After the incident is resolved, the incident lead should follow these steps:

1. **Update** the incident status and closes it.
2. **Confirm** that the messenger updated any customer communication channels, internal threads, or channels (outside of the incident channel) and social media posts (with marketing’s approval and if necessary) with the latest information.
3. **Update and close** any relevant public GitHub issues.
4. **[Generate a postmortem](https://docs.incident.io/generating-a-postmortem)** and publish it in the [Incidents folder in Google Drive](https://drive.google.com/drive/u/0/folders/1aWKkaSyuLfAP35mPe1pe8niBF4oh0M8F).
   1. **Schedule** a [retrospective](../../../../../company-info-and-process/communication/retrospectives.md) if you think it would be valuable.
5. **Create [follow-ups in incident.io](https://app.incident.io/follow-ups)** from the "Follow-ups" tab in the incident page. For each follow-up, **attach a GitHub issue** from the overflow menu (you can choose to have one be created, or link an existing one).
   1. Attaching a GitHub issue makes it easier to ensure a follow-up item is addressed - if the GitHub issue is closed, the follow-up is marked as Resolved in incident.io.
6. **Archive** the incident channel.

#### Past incident post-mortems

- [Incidents folder in Google Drive](https://drive.google.com/drive/u/0/folders/1aWKkaSyuLfAP35mPe1pe8niBF4oh0M8F)
- [3.30 Postgres Index Incident](./330_incident_retro.md)
- [Extensibility Repo Name Logging Incident](./extensibility_repo_name_log.md)

## Links and resources

- [Incident playbooks](playbooks/index.md)
- [docs.incident.io](https://docs.incident.io/)
