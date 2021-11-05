# Responding to user feedback

The product team owns a number of [user feedback sources](user_feedback.md).

## Cross-team communication and recording responses

We check both HubSpot and Salesforce before replying to feedback to ensure another team has not already replied. We bcc all of our email replies to feedback into HubSpot and Salesforce so everyone can reference the communication.

If there are questions or takeaways that might impact a customer or prospect relationship, such as if the feedback is particularly strong (positive or negative) or timely, we also sometimes notify the relevant Sales/CE team member with a threaded reply in the #feedback channel in Slack.

## Feedback rotation

A single product manager owns the below general feedback channels for 2-4 weeks at a time, and then rotates this responsibility to the next-in-line product manager.

The [feedback workflow doc](https://docs.google.com/document/d/1TTRjK-CL38fdCvrVUgRL70agUiwDbQFJXCo8IuJmLls/edit#) lists the current responder.

### NPS Feedback

We do our best to respond to any actionable feedback within 24 hours.

A detailed explanation of the current process and the suggested reply structures can be found in the [feedback workflow doc](https://docs.google.com/document/d/1TTRjK-CL38fdCvrVUgRL70agUiwDbQFJXCo8IuJmLls/edit#heading=h.vihl64g0qa6a).

### GitHub issues created by third parties

The PM on feedback rotation labels and forwards issues that others create to the right teams, because those outside the Sourcegraph GitHub organization cannot add labels. You can refer to the [product teams page](../product_teams.md) and to the more detailed (internal only, working document) [product team areas of ownership](https://docs.google.com/spreadsheets/d/1nBVLPEEGsd5O2j8wLhJw1Ld3tqLjKQXo44Q5Cn532U4/edit#gid=0). We plan to merge the product team areas of ownership into the handbook page when finalized.

- Find [new issues to triage](https://github.com/sourcegraph/sourcegraph/issues?page=2&q=is%3Aissue+no%3Alabel+is%3Aopen) or [issues with the
  `needs-team-triage` label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Aneeds-team-triage).
- Find the [list of team labels](https://github.com/sourcegraph/sourcegraph/labels?q=team+%2F). The slack channel associated with the team is in the label description.

All issues labeled with a team's name are [automatically added](https://github.com/sourcegraph/sourcegraph/blob/main/.github/workflows/label-move.yml) to the team's board for triage.

#### Issues without a clear owner

If you are unsure about what team should own a specific issue or if there is a gap in the product team areas documentation:

1. Post in #product to identify who should own it.
1. Once we have identified what team should own this issue, the team can add it to their strategy page's "what we're not working on" to communicate that it owns these issues but they are not a priority, or update their priorities to include it if they plan to do so.

Don't hesitate to post if unsure, clarifying ownership and identifying gaps is helpful to everybody.

#### Issues that are support requests

If you find an issue that is really a support request, you can:

1. Post a comment directing the user to email support@sourcegraph.com so we can help them (that way we don't have to constantly remind the user to not post anything posing a security risk AND it's a gentle way to validate whether the issue is still an issue for them).
1. Create an email with that user in copy and send it to support@sourcegraph.com on their behalf.

### Slack #feedback channel

For both self-contained product feedback slack posts and for new GitHub issues with #feedback labels (which automatically cross-post to Slack), the product manager on feedback rotation:

- Sends the feedback to Productboard
- Tags the relevant team's stakeholders – usually the product manager and/or engineering manager – in the Slack thread

## Browser uninstall form feedback

See the [browser uninstall feedback section](https://docs.google.com/document/d/1TTRjK-CL38fdCvrVUgRL70agUiwDbQFJXCo8IuJmLls/edit#bookmark=id.hmb2g29ltsnr) of the feedback workflow doc.
