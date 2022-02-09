# Delivery Team On-Call Rotation

The Delivery Team maintains an on-call rotation where an engineer is dedicated to providing support to our
internal teams and managed instances for a term of 1 week.

The on-call schedule is captured in OpsGenie. The on-call rotation consists of an Engineer On-Call (EOC), a Secondary Engineer On-Call (SEOC), and a technical manager (TM).

On-Call duties transfer automatically Mondays at 10am Central Time according to the schedule within OpsGenie.

## Response Times and SLAs
The Delivery team aims to provide timely responses that are proportional to the capacity of the team.

### OpsGenie Pages
The Engineer On-Call (EOC) is responsible for a 24 hour x 7 period shift where an initial response or acknowledgement
is expected within 10 minutes.

After 10 minutes, the Secondary Engineer On-Call (SEOC) is paged and expected to provide an initial response or acknowledgement within 5 minutes.

This is designed to ensure that an initial response is produced within 20 minutes of the page.

> Note: ⚠️ An OpGenie page is considered an emergency. It may wake up the EOC in the middle of the night. It's expected to be used with the utmost discretion.

### Support Responses
The Delivery team aims to facilitate and uphold the [SLAs maintained by the Customer Support team](https://handbook.sourcegraph.com/departments/support#slas). The Delivery team will triage and provide an initial response within 24 hours of receiving a support request or request for help.

## Roles

### Incoming Engineer On-Call (IEOC)

The engineer that is starting their on-call rotation.

### Outgoing Engineer On-Call (OEOC)

The engineer that is ending their on-call rotation.

### Engineer On-Call (EOC)

The engineer that is currently on-call.

### Secondary Engineer On-Call (SEOC)

The engineer that serves as an escalation if the Engineer On-Call is not available.

### Technical Manager

The manager of the Delivery team exists as the terminal escalation for the on-call rotation.

---

# Delivery Team On-Call Playbook

## Starting On-Call Rotation

At the start of their shift, the Incoming Engineer On-Call (IEOC) will prepare to take over on-call duties from the Outgoing Engineer On-Call.

### Review Hand-off Notes

The previous on-call engineer should post in the #delivery channel a link to the [Delivery On-Call Hand-off Notes](https://github.com/sourcegraph/delivery-scratch)

This document is designed to help the Incoming Engineer On-Call get up to speed with any open issues that require their attention during their shift. Additionally, this is designed to provide a mechanism for the Outgoing Engineer On-Call to
offload support duties in order to transition back into project work.

### Ensure OpsGenie can page you

This can be done in the OpsGenie interface by supplying your cellphone number or by downloading the OpsGenie app.
The method you choose to be contacted is up to you as long as your response time follows the [Response Time guidelines](#response-times-and-slas)

OpsGenie has documentation that describes [how to setup Notification Preferences](https://support.atlassian.com/opsgenie/docs/create-and-manage-notification-preferences/).

### Join Slack Channels

The following Slack channels should be monitored during your shift. There is no expectation to actively monitor these channels 24/7 during your support week, but you should serve as the designated point of contact during your working hours.


| Channel Name              | Description         | What to look for |
| --------------------------| -------------------- | ---------------- |
| [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) | Public channel where Sourcegraph teammates can ask questions, provide information, and escalate support issues. | Questions from other teams, request for help, and other Delivery-related information. |
| [#alerts-managed-instances](https://sourcegraph.slack.com/archives/C017SLJGA2Z) | Application-level webhook alerts from Managed Instances. | Alerts that indicate service degradation or disruption of our customer-facing instances.                                                      |
| [#incidents](https://sourcegraph.slack.com/archives/C027D0VLZDM)                | Company-wide incident feed. | Incidents that may affect on-prem/managed instance deployments.                                                                                   |
| [#prod-eng-announcements](https://sourcegraph.slack.com/archives/C0EPTDE9L)   | Product Engineering Announcements. | Monitor for release-related items or larger feature roll-outs that may affect on-prem / managed instance deployments.                                                                             |
| [#ask-prod-eng](https://sourcegraph.slack.com/archives/C022SPMNR0W)             | Company-wide forum to discuss Product Engineering topics. | Generally questions are tagged with "[Delivery]"     |
| [#buildkite-main](https://sourcegraph.slack.com/archives/C02FLQDD3TQ)           | Information about BuildKite CI.| The [build checker](https://handbook.sourcegraph.com/departments/product-engineering/engineering/process/incidents/playbooks/ci#buildchecker-has-locked-the-main-branch) will occasionally lock the main branch when the main build fails to build. When serving as a release captain it may be helpful to know the current state of the build.|

#### The `@delivery-support` Slack handle

You will be automatically added to the `@delivery-support` Slack group by OpsGenie. This handle is used to call attention to
important topics in Slack that may or may not include incidents or P1 customer support issues.

While an immediate response is not necessarily required, use your best judgement to determine an appropriate response.

## On-Call Duties

This is section is not designed to be prescriptive. You should use your best judgement on how to handle your on-call duties. This is by no means an exhaustive list but some notes of things to check while on-duty.

### Responding to Issues
Delivery engineers who are _not_ on-call do not need to respond to questions, instead they should defer to the Engineer On-Call (EOC). This is intended to promote knowledge transfer from subject matter experts (SMEs) to the rest of the Delivery team.

While the EOC may not provide the final resolution, the expectation is to provide an initial response, triage, and ensure that issues are captured in the [Delivery Github Project](https://github.com/orgs/sourcegraph/projects/205).

The EOC is encouraged to use the [handbook](https://handbook.sourcegraph.com), [docs site](https://docs.sourcegraph.com), [other resources](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/.*%24&patternType=literal), or consulting the larger Delivery team to provide as much context as possible when during triage and providing an initial response.

### Monitoring Slack Channels

You are not expected to monitor slack 24/7. During your working hours periodically check for messages in the
[Slack Channels](#join-slack-channels) listed above.

More urgent Slack messages are usually tagged with `@delivery-support`.

### Managed Instance Alerts

The `#alerts-managed-instances` channel will occasionally receive webhook alerts from our managed instances. The alerts
are generated by the Sourcegraph application and may require some interpretation before taking any action.

**If a managed instance is determined to be in a degraded state or unavailable to the customer, [declare an incident using the Incident Playbook](../../process/incidents/index.md#process).**

### OpsGenie

OpsGenie is configured with team-based escalations. OpsGenie will page the scheduled Engineer On-Call. Pages from OpsGenie
should be considered a priority and follow the guidelines for [Response Times](#response-times-and-slas).

### Maintaining On-Call Handoff Notes

Keep notes about any incidents, alerts, and priority support issues during your shift. They'll come in handy when you transition your duties to the next Incoming Engineer On-Call.

## Ending On-Call Rotation
Having a formal end to your on-call shift is intended to provide a way to debrief and promote a healthy relationship with on-call duties to reduce burnout.

While not prescriptive, you should take measures to reduce disruptions so you may focus on your project work.

### Leave Slack Channels

Reduce disruptions while you are no longer on-duty!

- `#alerts-managed-instances`
- `#incidents`

You will be automatically unsubscribed from the `@delivery-support` Slack handle.

### Finalize Hand-off Notes

As the Outgoing Engineer On-Call, your responsibility to ensure the [Delivery On-Call Hand-off Notes](https://github.com/sourcegraph/delivery-scratch) are up-to-date and ready for the Incoming Engineer On-Call by 10am Central Time on Monday.

### Take time off

If you responded to an incident or had an eventful on-call shift, consider taking a day off to recover and prevent burnout. Sourcegraph has an [unlimited PTO policy](../../../../../benefits-pay-perks/benefits-perks/time-off/index.md#paid-time-off-for-rest).
