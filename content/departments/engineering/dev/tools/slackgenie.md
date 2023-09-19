# Slackgenie

Slackgenie is a background job that continually updates a certain Slack User Group
via an Opsgenie schedule. User Groups usually end in **-support** i.e _delivery-support_.
The goal of Slackgenie is to allow members of a team to focus on heads-down work
while the "On-call" member triages interrupts.

All alerts are delivered as Slack notifications. They do not come through when users
in the group are in Do Not Disturb. Multiple people can be in the rotation at once.

## How to add a new rotation

- Create a Slack User Group and add the team members you want in the rotation.
- Update the [slackgenie config](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/background-jobs/-/blob/slackgenie/config.yaml) to include the new User Group. (You need access to the private repo.)
- Under the Teams tab in Opsgenie, select Add Team.
- On the page for your new team, use the On-call tab to update the rotation with participants from your Slack User Group.
- Use the Integration tab to connect the rotation to Slack.
- **Ensure rotation is working** Check the buildkite job [here](https://buildkite.com/sourcegraph/background-jobs-slackgenie) to ensure the rotation is working

### Helpful tips

- You can override an Opsgenie schedule manually via "Take on-call for an hour" in the Opsgenie UI
  or messaging the Opsgenie slackbot.
