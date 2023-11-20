# Support Rotation in Team Source

In the Source team we run a support rotation.

## What does it mean to be on support?

When you are on support rotation, you are the team's first responder to support requests.

It does _not_ mean that you are alone and should fix every issue completely and by yourself. It means that you triage incoming issues, take a first stab at them and, if necessary, call the rest of the team for help, or escalate the issue further.

Here are the expectations when you are on support rotation:

1. Triaging and resolving support requests is your #1 priority for the week. You can plan to do other work, but if a support request comes in or needs work, then that's the #1 priority.
1. Monitor #discuss-source and #discuss-engineering for Source-related questions and bug reports.
1. Acknowledge bug reports and questions. Even a simple "I'm on it, taking a look" in the Slack thread is good, since it lets others on the team know that you are working on it.
1. Provide the next engineering on support with the status of all in-flight issues before their rotation begins: prepare to report status of support in sprint planning.
1. Ask for help when you are stuck! Don't spend too much time trying to troubleshoot an issue alone and you get stuck, especially if it's high priority. Do your best, ask the team, and resolve the issue.
1. If you have too many support requests, ask in #team-source for help or tag the EM.
1. After resolving an issue, possibly do one of the following things:

- Create a ticket if there is follow-up work to be done that is not urgent.
- Extend the documentation if that would've prevented the issue.
- Create a backlog issue for an improvement, feature, tool, etc. that would have been useful to troubleshoot and solve the problem and find an owner for the issue.

## Rotation

- We switch support rotation every week.
- Every engineer will be on rotation at some point.
- We manage the rotation in the [source team in OpsGenie](https://sourcegraph.app.opsgenie.com/teams/dashboard/2dfa5270-6a5f-49f5-bc1a-abb6e20f9676/main).
- This [configuration](https://github.com/sourcegraph/background-jobs/blob/6980e3fe98808ef27aaa771298384f7ad4b14d8c/slackgenie/config.yaml#L14-L15) ensures that the `@source-support` group in Slack gets updated to the person currently on support in OpsGenie.
