# Opsgenie

Our current [on-call](../../dev/process/incidents/on_call.md) alerting system is run via Opsgenie. This system will send notifications via voice call, SMS, email, and Slack.
Teams at Sourcegraph that have production systems where they need to alerted to potential issues should have an Opsgenie rotation.

## Accessing Opsgenie

Access to Opsgenie is granted automatically to all Engineering teammates and you may login with your [OKTA](../../../tech-ops/tools/Okta/main.md) credentials at https://sourcegraph.app.opsgenie.com/.

> [!NOTE] EMs should have the `Admin` role

After logging in to Opsgenie for the first time, work with your EM to join a team and participate in the rotation.

## Creating an Opsgenie team

Admins are able to view the [current Opsgenie teams](https://sourcegraph.app.opsgenie.com/teams/list) and create new teams.
Engineering managers should have access to this page (notify the DevOps team if that is not the case).

## Creating an Opsgenie rotation

See the [official Opsgenie docs](https://support.atlassian.com/opsgenie/docs/manage-on-call-schedules-and-rotations/).

Ensure that the first escalation after the on-call engineer is to "Alert the entire team".
Ensure that the final escalation policy is set to "Send to the DevOps team" or "Send to all teams" bases on severity.

### Creating split rotations

Otherwise known as "follow-the-sun" rotations, split on-call rotations are a great way to leverage distributed, worldwide teams to make sure no one has to wake up in the middle of the night! If you need a "follow-the-sun" rotation with additional flexibility, [check out this approach](./opsgenie-routing.md).

For example, if half your team is in North America and the other half of your team is in parts of Europe, you could leverage on-call rotations based on an east and west side of the Atlantic grouping, such as:

- a UTC-8 PT (Pacific Time) group covering UTC 18:00 - 06:00 (PT 11am - 11pm)
- a UTC+1 CET (Central European Time) group covering UTC 06:00 - 18:00 (CET 8am - 8pm)

To set this up in Opsgenie:

1. Under your schedule, click "Create a new rotation", setting it to the desired interval (e.g. "weekly") and selecting the "Restrict to time intervals" option. Configure the interval's start and end _times_ to match your first group. Make sure to update the time in "Start on" to match the interval's start time.
   ![rotation](https://user-images.githubusercontent.com/23356519/178831318-433e9e87-bf1f-4f67-b894-8f38bd9de1f3.png)
2. Repeat the above, except set "Restrict to time intervals" times to match the second group, again ensuring the time in "Start on" matches the interval's start time.
3. Assign the appropriate teammates to both of the above.

And that's it! The resulting schedule should look like this, using the example groupings above:

![schedule](https://user-images.githubusercontent.com/23356519/178831992-cc51874d-d566-4546-a251-6e53bc6eb204.png)

## Alerts on Cloud

Opsgenie alerts on Cloud are configured in the following way:

- The site-config
- The Opsgenie team
- The [ObservableOwner](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+ObservableOwner&patternType=literal)

(This process may change with https://github.com/sourcegraph/sourcegraph/issues/34861)

## Integration with Slack

Alerts can be sent to specific slack channels using the [Opsgenie slack integration](https://sourcegraph.app.opsgenie.com/settings/slack).

[Slackgenie](../../dev/tools/slackgenie.md) is used to update a slack user group with members of a support rotation - e.g., updating the delivery-support slack handle so that notifications go directly to the on-call user.
