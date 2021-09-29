# Surfacing feedback to the product team

> If you're working with a specific customer on a bug or issue and need to directly involve a product engineering team, please refer to [engaging other teams](../support/engaging-other-teams.md).

CEs, CSEs, sales, marketing, engineering, and other teammates that interact directly with Sourcegraph users and/or Sourcegraph itself should share product feedback with the product team.

We deeply value this feedback, so we make this process as frictionless for teammates as possible:

## Post the feedback in [`#feedback`](https://sourcegraph.slack.com/archives/C0W2E592M) on Slack

You're welcome to tag teammates or teams, but that's not necessary – once the feedback is in [#feedback](https://sourcegraph.slack.com/archives/C0W2E592M) the product team will [make sure it's routed correctly](product_management/responding_to_user_feedback.md#slack-feedback-channel).

## When to create a GitHub issue

If you have gotten a specific feedback requests that a customer(s) would like to track the progress of:

1. Check if an issue for the feedback [already exists](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue). If there is already an issue with similar feedback, add a comment to that issue. If the issue is closed, read why and if it makes sense, re-open it with a comment.
2. If there is no issue with your feedback, create a [new feedback issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=feedback&template=customer_feedback.md&title=) or a [new bug issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=&template=bug_report.md&title=) to share with the customer.
3. If you know which team(s) owns the product area(s) involved, you can add the right team label (prefixed with `team/`) so that the issue gets [automatically](https://github.com/sourcegraph/sourcegraph/blob/main/.github/workflows/label-move.yml) added to the team's board for triage. If you do not know, that's okay! GitHub issues with the `feedback` label will also automatically post to the #feedback Slack channel on creation and product teammates will help route them.

### Private customer information

Because a shareable issue is by definition public, you should not include any private customer information. You should still include things like the customer name, by using our [process for linking customer names in public places](../ops/bizops/customer_ops_tools.md#linking-to-customer-or-prospect-names-in-public-places).

If you need to create an issue with more specific customer information, you should [create a new issue in Sourcegraph/Customer](https://github.com/sourcegraph/customer/issues/new/choose), which is private. You can then link that to a public issue in Sourcegraph/Sourcegraph.

### What happens to GitHub issues next?

Each product/engineering team will triage the issues and explain the reason for their decision: prioritize it, move it to the backlog, close it, ask for clarification. Each team's PM (EM for teams without a PM) is ultimately responsible for responding to an issue.

## What if the feedback is [a possible exception]?

There are no exceptions to the above process! Please do post all product feedback to the #feedback channel – **this includes feedback that you feel might be: minor, not worth surfacing, too harsh, just a personal opinion, or from you rather than a customer**. All feedback helps us make Sourcegraph the best product possible.

## If you are uncomfortable posting the feedback

If you are uncomfortable posting feedback directly to #feedback for any reason at all, you are very welcome to DM it on Slack to any [member of the product team](index.md#members). They will make sure it reaches the right folks. In some cases, this may mean they post the feedback to slack after removing any possible connection to you.
