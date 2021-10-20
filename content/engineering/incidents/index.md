# Incidents

An incident is any unplanned event that causes a service disruption. Identifying and resolving incidents helps us improve: we'll make Sourcegraph a higher quality product, we'll improve the processes that lead to or around the incident, and we'll reduce friction around identifying incidents in the future.

Some examples of incidents:

- sourcegraph.com is down or a critical feature is broken (e.g. sign-in, search, code intel).
- We have a severity 1 issue (per [our standard SLA definition](../../support/index.md#slas)) that impacts all/many self-hosted instances
- We have a severity 1 issue (per [our standard SLA definition](../../support/index.md#slas)) that impacts all/many managed instances
- We have a severity 1 issue (per [our standard SLA definition](../../support/index.md#slas)) that impacts all/many Cloud/SaaS users
  instance is down or a critical feature is broken.
- There is a security issue with Sourcegraph.
- A Sourcegraph team member feels like an incident might be present, but isn't certain or isn't able to confirm on their own.
- We need to do critical proactive 1-to-many communication to all self-hosted customers (for example, making them aware of something they need to do in a certain upgrade like [the prep needed before upgrading to 3.31](https://docs.sourcegraph.com/admin/migration/3_31)) -- over time, as we do more of this, we will likely create a separate process for this

Additionally, on big announcement days (funding, product launch, campaign launch, etc.), all incidents warrant more immediate attention from marketing so we can hold off on planned activities/be prepared to respond to issues. On these days, the person in marketing leading the announcement is responsible for looping #customer-support and engineering/product in ahead of time to ensure they are aware of planned activities. The person leading the announcement will work with #customer-support on the ad-hoc plan for incidents (which may involve on-call rotation).

## Process

### Identification

Incidents can be identified by anyone (e.g. customers, Sourcegraph teammates) via incident.<unlink></unlink>io.

Even incidents that might turn out to be [false positives](#false-positives) should be reported, to ensure that they are responded to and investigated with the same rigor as any incident, and that any lessons can be learnt.

The first Sourcegraph teammate (regardless of their role) that becomes aware of an incident, or suspects there may be an incident, is responsible for taking the following actions:

1. If the incident was reported by someone outside of Sourcegraph, acknowledge that the incident is being handled.
2. Start a new incident with the incident.<unlink></unlink>io Slack bot: `/incident`
   - set the description and (severity)[severity] from the modal in Slack
   - this will create a new chatroom in Slack where all other communication should occur
3. If you are not a member of product, engineering, or customer support, type the following into the Slack channel to page someone who can complete the rest of this list (otherwise proceed to the next step): `/genie alert we have an incident, please help for customer-support`
4. Identify folks to serve in the following roles (see [how to identify folks to serve in incident lead and messenger roles](#how-to-identify-folks-to-serve-in-incident-lead-and-messenger-roles)

- [Incident Lead](#incident-lead-roles-and-responsibilities)
- [Messenger](#messenger-roles-and-responsibilities)

5. Stay involved to help, or thank the incident lead and messenger and leave them to it

### Severity levels

We currently have 2 severity levels for incidents that require this workflow and both of these levels are considered a severity 1 per [our contractual SLAs](https://about.sourcegraph.com/handbook/support#slas), we just break them down a bit more for internal delineation:

1. **Critical** - Issues causing very high impact to customers. Immediate response is required. Examples include a full outage, or a data breach.
2. **Major** - Issues causing significant impact. Immediate response is usually required. We might have some workarounds that mitigate the impact on customers. Examples include an important sub-system failing.

Severity level 2 issues [our contractual SLAs](https://about.sourcegraph.com/handbook/support#slas) (aka, minor issues) should not use this workflow (these go through the usual support/feedback processes.

### How to identify folks to serve in incident lead and messenger roles

- This may, if appropriate, be the same person who identified and raised the incident
- When it’s an issue that is impacting customers, it is ideal to have different folks serve as incident lead vs messenger, this allows the incident lead to focus on solving the issue
- Typically an incident lead is on the engineering team. If an engineer hops in, great. Otherwise, loop in the on-call engineer. You can find out who is on-call by typing `/genie whoisoncall` in Slack. If you are not able to immediately get in contact with the on-call engineer, then manually create a new OpsGenie alert by typing `/genie alert <description of incident and link to Slack thread> for [@team or user email]`. For example:
  - `/genie alert Sourcegraph.com is down for delivery team`
  - `/genie alert We need your help with the production incident for name@sourcegraph.com`
- Assign the Incident Lead in the incident chatroom with the following command /incident lead @engineer
- A messenger can be on the engineering or customer support team and is only necessary for issues that have customer impact
  - Support is also in OpsGenie and can be engaged the same way
  - If ever there is a question about whether a messenger is useful for an incident, just post in #customer-support and the support team can help think through it and determine best next steps.

### Incident Lead roles and responsibilities

The incident lead is responsible for resolving the incident as quickly and safely as possible. They are the DRI coordinating the incident, tasked with driving it to resolution and keeping others informed (if it's a non-customer-impact issue) or coordinating with the messenger on communication (for customer-impact issues).

1. **Thank** the person who identified the incident.
2. **Acknowledge ownership** of the incident in the relevant incident chatroom (i.e. "I'm on it").
3. **Communicate** intended next steps (e.g. "I plan to...") and keep the incident status and summary up to date (e.g. "We tried ... which resulted in ...") in the incident chat room.
4. **Attempt to resolve the incident** by rolling back to a known good state instead of trying to identify and fix the exact issue. Communicate your intentions in the incident chatroom.
   - [Rollback sourcegraph.com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/README.info.md#how-to-rollback-sourcegraphcom)
   - Revert a broken commit out of main. If a bad commit has already been deployed to sourcegraph.com and is causing problems, rollback the deploy before reverting the commit in main.
     - Revert the commit in a branch and open a PR.
     - Tag the owner of the reverted commit as a reviewer of the PR.
     - Merge the PR as soon as CI passes (don’t block on review).
   - [Fix failed database migration on sourcegraph.com](https://github.com/sourcegraph/sourcegraph/tree/main/migrations#dirty-schema)
   - [How to resolve “Sourcegraph.com is deleted entirely”](playbooks/dotcom_deleted_entirely.md)
5. If rolling back and or reverting commits doesn’t resolve the incident, then identify the most logical [resolution owner](https://about.sourcegraph.com/handbook/engineering/incidents#ownership) given what you know (this may be yourself) and have that person acknowledge ownership in the incident chatroom (i.e. “I’m on it”).
   - The person who has made recent changes to the affected product/code/system.
   - The person who owns the affected product/code/system.
   - The on-call engineer.
6. Handles the internal details of pausing a release (engaging the messenger to help with any relevant customer communication)

The incident lead may delegate tasks to other available/working engineers if necessary but should make a best effort to minimize the number of other engineers who get interrupted by the incident. This delegated work takes priority over work unrelated to operational incidents.

### Messenger roles and responsibilities

The messenger is only needed for incidents with customer-facing impact. The messenger is almost always a member of customer support or engineering (someone who is not in the role of incident lead) who is able to witness the incident lead work (in the dedicated Slack channel and/or on any huddle calls) and (with minimal progress-interrupting questions) translates what they witness to:

- [Status page](https://sourcegraphstatus.com/#) updates for customers which is updated via incident.io Slack commands (`/incident statuspage`) and following these best practices:

  - Be sure posts do not orient toward any specific region and remain relevant to a global population (for example, use UTC timezone and don’t say things like “this morning,” etc)
  - Be succinct and informative
  - First post should be a report of awareness of the incident and mention to email support@sourcegraph.com if there are questions. For example:

    _Identified: We are aware there is an issue with **\_\_\_**. We are investigating a resolution. If you have any questions, email support@sourcegraph.com._

  - Next post(s) can be updates. These are best offered at least every 30 minutes. For example:

    _Investigating: We are continuing to investigate a resolution. We want to resolve this as quickly as possible!_

  - When the issue is resolved, post a “resolved” status. If customers are required to follow any guidance, consider including it here or link to where it can be found. For example:

    _Resolved: We have resolved the issue and will conduct a postmortem to see how we can learn and grow. If you would like to know more, please email support@sourcegraph.com._

  Need help using incident.io? Go to their Help Centre: https://docs.incident.io/

- Direct message updates/responses to customers (if relevant) in #support- or #trial- customer Slack channels or Zendesk email tickets
- Draft suggested social media posts (at marketing’s request; marketing will revise to match Sourcegraph tone, etc)
- Internal updates in the dedicated Slack channel by keeping the incident.io status up to date. All teammates joining the chat room will get the current status provided by incident.io. At any time, a user in the chat room can see the current status using this slack command: `/incident recap`.
- Posts in #customer-support, #ce, #sales to ensure key customer-facing roles impacted by incidents are easily informed and folks can join the incident channel for more information
- Posts in #marketing for all customer-impact incidents and tag @marketing-incident. This will give marketing visibility into all issues and the team can determine how to respond/what action is necessary. It's okay that they don't respond right away -- most incidents do not require that of our marketing teammates.
- Posts in #general if the issue is severe enough it’s better to err on broader internal communicationIn some cases, an issue is so severe we need to do executive level communication.
- In these cases, the messenger loops in a member of @cs-leadership who will help by handling this. The messenger reminds them to include all department heads and for marketing to also include our director of global communication in addition to the head of marketing).

### False positives

Every incident is an opportunity for us to make Sourcegraph a higher quality product and to improve the processes that lead to or around an incident. Even if an incident turns out to be a false positive, we value that it was identified.

### Pausing a release

In some incidents, we may learn that we need to pause a release.

- The incident lead alerts @delivery-support, @cs, @ce so the teams can plan accordingly
- The messenger alerts customers via a post on the status page

### Post-mortem

After the incident is resolved, the incident lead:

1. Update the incident status and close.
2. Confirms that the messenger updated any customer communication channels, internal threads, or channels (outside of the incident channel) and social media posts (with marketing’s approval and if necessary) with the latest information.
3. Update and close and relevant public GitHub issues.
4. [Generate a postmortem](https://docs.incident.io/generating-a-postmortem), documents details and publish in Incidents folder in Google Drive.
5. Create GitHub issues for any appropriate followup work.
6. Schedule a [retrospective](../../retrospectives/index.md) if you think it would be valuable.

## Incident Post-mortems

- [3.30 Postgres Index Incident](./330_incident_retro.md)

## Go-to-market (license and subscription) issues

If a customer is experiencing an issue related to their license key or subscription status, any member of the Sourcegraph team has authority to generate a new, valid license key for any customer for any number of users that is **valid for up to 7 days** in the [site-admin Subscriptions page on Sourcegraph.com](https://sourcegraph.com/site-admin/dotcom/product/subscriptions). This will prevent the initial incident responder from being bottlenecked on a member of the go-to-market team that can validate the customer's subscription status.

The incident responder will need to select a Sourcegraph.com account to attach the subscription to (typically the account should belong to the customer, so they can access the license key directly from their user profile, but in an emergency, the incident responder can use their own account in lieu of asking the customer), and can then manually generate a license key. No license "tags" are necessary.

If a customer's instance is reporting "license expired" already, note that [there is a 72hr grace period](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/enterprise/internal/license/license.go#L43:15) before non-admin users are locked out.

## Links and resources

Need help using incident<unlink>.io? Go to their Help Centre: https://docs.incident.io/.
