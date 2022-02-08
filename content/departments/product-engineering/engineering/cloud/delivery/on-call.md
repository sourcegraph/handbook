# Delivery Team On-Call Rotation

The Delivery Team maintains an on-call rotation where an engineer is dedicated to providing support to our
internal teams and managed instances for a term of 1 week.

The on-call schedule is captured in OpsGenie. The on-call rotation consists of an Engineer On-Call (EOC), a Secondary Engineer On-Call (SEOC), and a technical manager (TM).

On-Call duties transfer automatically Mondays at 10am Central Time according to the schedule within OpsGenie.

## Response Times and SLAs

The Delivery team aims to provide timely responses that are proportional to the capacity of the team.
The Engineer On-Call (EOC) is responsible for a 24 hour x 7 period shift, guarenteeing responses during their
working hours (generally 9am - 5pm in their timezone).

The EOC is expected to provide an initial response within 30 minutes in response to an Incident where they are activated with an OpsGenie page. If the EOC is unavailable within the first 45 minutes of an OpsGenie page, the Secondary Engineer On-Call will be activated, where the expectation is to provide an initial response within an additional 45 minutes.

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

The previous on-call engineer should post in the #delivery channel a link to the [Delivery On-Call Hand-off Google Doc](https://docs.google.com/document/d/1K1ZsfocwLk9F6Do4DZQImiSmh-ln2L3IomDBlxxdQHs/edit?usp=sharing)

This document is designed to help the Incoming Engineer On-Call get up to speed with any open issues that require their attention during their shift. Additionally, this is designed to provide a mechanism for the Outgoing Engineer On-Call to
offload support duties in order to transition back into project work.

### Ensure OpsGenie can page you

This can be done in the OpsGenie interface by supplying your cellphone number or by downloading the Opsgenie app.
The method you choose to be contacted is up to you as long as your response time follows the [Reponse Time guidelines](#response-times-and-slas)

### Join Slack Channels

The following Slack channels should be monitored during your shift. There is no expectation to actively monitor these channels 24/7 during your support week, but you should serve as the designated point of contact during your working hours.

| Channel Name              | Description                                                                                                    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| #delivery                 | Public channel where Soucegraph teammates can ask questions, provide information, and escalate support issues. |
| #alerts-managed-instances | Application-level webhook alerts from Managed Instances.                                                       |
| #incidents                | Company-wide incident feed.                                                                                    |
| #prod-eng-announcements   | Product Engineerng Announcements.                                                                              |
| #ask-prod-eng             | Company-wide forum to discuss Product Engineering topics. Generally questions are tagged with "[Delivery]"     |
| #buildkite-main           | Information about BuildKite CI.                                                                                |

|

#### The `@delivery-support` Slack handle

You will be automatically added to the `@delivery-support` Slack group by Opsgenie. This handle is used to call attention to
important topics in Slack that may or may not include incidents or P1 customer support issues.

While an immediate response is not necessarily required, use your best judgement to determine an appropriate response.

## On-Call Duties

This is section is not designed to be prescriptive. You should use your best judgement on how to handle your on-call duties. This is by no means an exhaustive list but some notes of things to check while on-duty.

### Monitoring Slack Channels

You are not expected to monitor slack 24/7. During your working hours periodically check for messages in the
[Slack Channels](#join-slack-channels) listed above.

More urgent Slack messages are usually tagged with `@delivery-support`.

### Managed Instance Alerts

The `#alerts-managed-instances` channel will occasionally receive webhook alerts from our managed instances. The alerts
are generated by the Sourcegraph application and may require some interpretation before taking any action.

**If a managed instance is determined to be in a degraded state or unavailable to the customer, [declare an incident using the Incident Playbook](https://handbook.sourcegraph.com/departments/product-engineering/engineering/process/incidents#process).**

### OpsGenie

OpsGenie is configured with team-based escalations. OpsGenie will page the scheduled Engineer On-Call. Pages from OpsGenie
should be considered a priority and follow the guidelines for [Response Times](#response-times-and-slas).

### Maintaining On-Call Handoff Notes

Keep notes about any incidents, alerts, and priority support issues during your shift. They'll come in handy when you transition your duties to the next Incoming Engineer On-Call.

## Ending On-Call Rotation

### Leave Slack Channels

Reduce disruptions while you are no longer on-duty!

- `#alerts-managed-instances`
- `#incidents`

You will be automatically unsubscribed from the `@delivery-support` Slack handle.

### Finalize Hand-off Notes

As the Outgoing Engineer On-Call, your responsibility to ensure the [Delivery On-Call Hand-off Google Doc](https://docs.google.com/document/d/1K1ZsfocwLk9F6Do4DZQImiSmh-ln2L3IomDBlxxdQHs/edit?usp=sharing) is up-to-date and ready for the Incoming Engineer On-Call by 10am Central Time on Monday.

### Take time off

If you responded to an incident, consider taking a day off to recover and prevent burn-out. Sourcegraph has an [unlimited PTO policy](../../../../../benefits-pay-perks/benefits-perks/time-off/index.md#paid-time-off-for-rest).
