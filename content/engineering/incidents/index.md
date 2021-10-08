# Incidents

An incident is any unplanned event that causes a service disruption. Identifying and resolving incidents helps us improve: we'll make Sourcegraph a higher quality product, we'll improve the processes that lead to or around the incident, and we'll reduce friction around identifying incidents in the future.

Some examples of incidents:

- sourcegraph.com is down or a critical feature is broken (e.g. sign-in, search, code intel).
- A customer reports that their own Sourcegraph instance is down or a critical feature is broken.
- There is a security issue with Sourcegraph.
- The `main` build is broken.
- A Sourcegraph team member feels like an incident might be present, but isn't certain or isn't able to confirm on their own.

[This document](https://drive.google.com/file/d/1kTZ-_N1ulx9Kf0vZyn5BWTrtipbvN9jH/preview) visualizes how we deal with operational incidents.

## Process

### Identification

Incidents can be identified by anyone (e.g. customers, Sourcegraph teammates) via incident.<unlink></unlink>io.

The first Sourcegraph teammate (regardless of their role) that becomes aware of an incident, or suspects there may be an incident, is responsible for taking the following actions:

1. If the incident was reported by someone outside of Sourcegraph, acknowledge that the incident is being handled.
2. Start a new incident with the incident.<unlink></unlink>io Slack bot: `/incident`
   - set the description and (severity)[severity] from the modal in Slack
   - this will create a new chatroom in Slack where all other communication should occur
3. Identify an engineer to be the [Incident Lead](#incident-lead).
   - If you are an engineer and available for 30 minutes, then you should [triage the incident](#triage).
   - If you are not an engineer or are not available to triage the incident, then ask the on-call engineer to triage the incident.
     - You can find out who is on-call by typing `/genie whoisoncall` in Slack.
     - If you are not able to immediately get in contact with the on-call engineer, then manually create a new OpsGenie alert by typing `/genie <description of incident and link to Slack thread> with ops_team`.
   - Assign the Incident Lead in the incident chatroom with the following command `/incident lead @engineer`

### Severity levels

We currently have 3 severity levels:

1. **Critical** - Issues causing very high impact to customers. Immediate response is required. Examples include a full outage, or a data breach.
2. **Major** - Issues causing significant impact. Immediate response is usually required. We might have some workarounds that mitigate the impact on customers. Examples include an important sub-system failing.
3. **Minor** - Issues with low impact, which can usually be handled within working hours. Most customers are unlikely to notice any problems. Examples include a slight drop in application performance.

### Triage

The goal of triage is to either quickly resolve the incident using basic procedures, or quickly identify the right owner.

1. **Thank** the person who identified the incident.
1. **Acknowledge ownership** of the incident in the relevant Slack thread in the #dev-ops channel (i.e. "I'm on it").
1. Attempt to resolve the incident by rolling back to a known good state instead of trying to identify and fix the exact issue. **Communicate your intentions in the incident chatroom.**
   - [Rollback sourcegraph.com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/README.info.md#how-to-rollback-sourcegraphcom)
   - Revert a broken commit out of main. If a bad commit has already been deployed to sourcegraph.com and is causing problems, rollback the deploy _before_ reverting the commit in main.
     - Revert the commit in a branch and open a PR.
     - Tag the owner of the reverted commit as a reviewer of the PR.
     - Merge the PR as soon as CI passes (don't block on review).
   - [Fix failed database migration on sourcegraph.com](https://github.com/sourcegraph/sourcegraph/tree/main/migrations#dirty-schema)
   - [How to resolve "Sourcegraph.com is deleted entirely"](playbooks/dotcom_deleted_entirely.md)
1. If rolling back and or reverting commits doesn't resolve the incident, then identify the most logical [resolution owner](#ownership) given what you know (this may be yourself) and have that person **acknowledge ownership** in the incident chatroom (i.e. "I'm on it").
   - The person who has made recent changes to the affected product/code/system.
   - The person who owns the affected product/code/system.
   - The on-call engineer.
     - You can find out who is on-call by typing `/genie whoisoncall` in Slack.
     - If you are not able to immediately get in contact with the on-call engineer, then manually create a new OpsGenie alert by typing `/genie alert "description of incident and link to Slack thread" for ops_team`.

### Incident Lead

The incident lead is responsible for resolving the incident as quickly and safely as possible. They are the DRI coordinating the incident, tasked with driving it to resolution and ensuring clear internal and external communication with stalkholders and customers.

1. **Thank** the person who identified the incident.
1. **Acknowledge ownership** of the incident in the relevant incident chatroom (i.e. "I'm on it").
1. **Communicate** intended next steps (e.g. "I plan to...") and keep the incident status and summary up to date (e.g. "We tried ... which resulted in ...") in the incident chat room.
1. **Ensure** that a person has acknowledged and is ready to take over as the incident lead if they have to take off (i.e "I need to go ... X can you take over from here? ... Yes I can")

The owner of the incident may delegate tasks to other available/working engineers if necessary but should make a best effort to minimize the number of other engineers who get interrupted by the incident. This delegated work preempts work unrelated to operational incidents.

If the issue can not be quickly resolved (via rollback or other means) and if it is a severe problem with sourcegraph.com, then create an issue on sourcegraph/sourcegraph and tweet from the Sourcegraph account, e.g.:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Only <a href="https://t.co/4J5rrvuJbX">https://t.co/4J5rrvuJbX</a> is experiencing issues. Self-hosted Sourcegraph instances are not affected.</p>&mdash; Sourcegraph (@sourcegraph) <a href="https://twitter.com/sourcegraph/status/1101606401753792512?ref_src=twsrc%5Etfw">March 1, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Signing in to <a href="https://t.co/SQkErCgegd">https://t.co/SQkErCgegd</a> now works as expected. If you are interested to know why you can subscribe to this issue: <a href="https://t.co/OUHCn8nI3E">https://t.co/OUHCn8nI3E</a><br><br>Thanks for your patience!</p>&mdash; Sourcegraph (@sourcegraph) <a href="https://twitter.com/sourcegraph/status/1101621105620529153?ref_src=twsrc%5Etfw">March 1, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### False positives

Every incident is an opportunity for us to make Sourcegraph a higher quality product and to improve the processes that lead to or around an incident. Even if an incident turns out to be a false positive, we value that it was identified.

### Post-mortem

After the incident is resolved:

1. Update the incident status and close.
1. Update and close and relevant public GitHub issues.
1. If the Sourcegraph account Tweeted about the incident, Tweet that the incident has been resolved.
1. [Generate a postmortem](https://docs.incident.io/generating-a-postmortem), documents details and publish in Incidents folder in Google Drive.
1. Create GitHub issues for any appropriate followup work.
1. Schedule a [retrospective](../../retrospectives/index.md) if you think it would be valuable.

## Incident Post-mortems

- [3.30 Postgres Index Incident](./330_incident_retro.md)

## Go-to-market (license and subscription) issues

If a customer is experiencing an issue related to their license key or subscription status, any member of the Sourcegraph team has authority to generate a new, valid license key for any customer for any number of users that is **valid for up to 7 days** in the [site-admin Subscriptions page on Sourcegraph.com](https://sourcegraph.com/site-admin/dotcom/product/subscriptions). This will prevent the initial incident responder from being bottlenecked on a member of the go-to-market team that can validate the customer's subscription status.

The incident responder will need to select a Sourcegraph.com account to attach the subscription to (typically the account should belong to the customer, so they can access the license key directly from their user profile, but in an emergency, the incident responder can use their own account in lieu of asking the customer), and can then manually generate a license key. No license "tags" are necessary.

If a customer's instance is reporting "license expired" already, note that [there is a 72hr grace period](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/enterprise/internal/license/license.go#L43:15) before non-admin users are locked out.

## Links and resources

For more on why we need an incident management system, see [RFC 415: Incident Management](https://docs.google.com/document/d/18uGC02waDIZBIuxJy8y4EQvcm64MNl7neTTb83xU-j0/edit?usp=sharing).

Need help using incident<unlink>.io? Go to their Help Centre: https://docs.incident.io/.
