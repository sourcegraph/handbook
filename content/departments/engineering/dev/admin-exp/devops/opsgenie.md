# Opsgenie

Our current [on-call](../../process/incidents/on_call.md) alerting system is run via Opsgenie. This system will send notifications via voice call, SMS, email, and Slack.
Teams at Sourcegraph that have production systems where they need to alerted to potential issues should have an Opsgenie rotation.

## Accessing Opsgenie

Access to Opsgenie is granted automatically to all Engineering teammates and you may login with your [OKTA](../../../../tech-ops/tools/Okta/main.md) credentials at https://sourcegraph.app.opsgenie.com/.

> EM should have the `Admin` role

After logging in to Opsgenie for the first time, work with your EM to join a team and participate in the rotation.

## Creating an Opsgenie team

Admins are able to view the [current Opsgenie teams](https://sourcegraph.app.opsgenie.com/teams/list) and create new teams.
Engineering managers should have access to this page (notify the DevOps team if that is not the case).

## Creating an Opsgenie rotation

See the [official Opsgenie docs](https://support.atlassian.com/opsgenie/docs/manage-on-call-schedules-and-rotations/).

Ensure that the first escalation after the on-call engineer is to "Alert the entire team".
Ensure that the final escalation policy is set to "Send to the DevOps team" or "Send to all teams" bases on severity.

## Alerts on Cloud

Opsgenie alerts on Cloud are configured in the following way:

- The site-config
- The Opsgenie team
- The [ObservableOwner](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+ObservableOwner&patternType=literal)

(This process may change with https://github.com/sourcegraph/sourcegraph/issues/34861)

## Integration with Slack

Alerts can be sent to specific slack channels using the [Opsgenie slack integration](https://sourcegraph.app.opsgenie.com/settings/slack).

[Slackgenie](../../tools/slackgenie.md) is used to update a slack user group with members of a support rotation - e.g., updating the delivery-support slack handle so that notifications go directly to the on-call user.
