# Slackgenie

Slackgenie is a background job that continually updates a certain slack user group
via an Opsgenie schedule. User Groups usually end in **-support** i.e *delivery-support*.
The goal of slackgenie is to allow other members of a team to focus on heads down work
while another member can triage interrupts.

All alerts are delivered as Slack notifications. They do not come through when users
in the group are in Do Not Disturb. Multiple people be in the rotation at once.

## How to add a new rotation


### Helpful tips

You can override an Opsgenie schedule manually via "Take on-call for an hour" in the Opsgenie UI
or messaging the Opsgenie slackbot.
