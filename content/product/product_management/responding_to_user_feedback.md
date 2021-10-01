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

The PM on feedback rotation labels and forwards issues that others create to the right teams, because those outside the Sourcegraph GitHub organization cannot add labels. [This GitHub search](https://github.com/sourcegraph/sourcegraph/issues?page=2&q=is%3Aissue+no%3Alabel+is%3Aopen) is a fast way to find these issues.

All issues labeled with a team's name are [automatically added](https://github.com/sourcegraph/sourcegraph/blob/main/.github/workflows/label-move.yml) to the team's board for triage.

### Slack #feedback channel

For both self-contained product feedback slack posts and for new GitHub issues with #feedback labels (which automatically cross-post to Slack), the product manager on feedback rotation:

- Sends the feedback to Productboard
- Tags the relevant team's stakeholders – usually the product manager and/or engineering manager – in the Slack thread

## Browser uninstall form feedback

See the [browser uninstall feedback section](https://docs.google.com/document/d/1TTRjK-CL38fdCvrVUgRL70agUiwDbQFJXCo8IuJmLls/edit#bookmark=id.hmb2g29ltsnr) of the feedback workflow doc.
