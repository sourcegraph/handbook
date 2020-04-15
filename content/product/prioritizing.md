# Prioritizing

## Saying "no"

We receive tons of feature requests and bug reports, more than we can handle. This means we must frequently say "no" or prioritize things less urgently than some people would like. Our job is to find the most important things to work on.

## How do I get something prioritized by our product team?

- [Create a GitHub issue](https://github.com/sourcegraph/sourcegraph/issues/new/choose) OR [write an RFC](../communication/rfcs/index.md).
  - Include as much detail as possible about the issue.
  - Provide context around urgency and priority.
  - Link to the customer (if applicable) in HubSpot (see [below](#customer-requests)).
  - Add the team label on the issue for the team that should be responsible for it.
- Share with the team in any of the following ways:
  - Post link to the issue in Slack and ask the team to prioritize the issue in the next team sync (or let them know it is a P0 that should be handled immediately).
  - Send to the Product Manager to prioritize with the team.
  - Add the item in suggestion mode to [the roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit#) in your best guess at relative priority. The team or PM will accept or update the priority of the item.

### Engineering prototyping

Sometimes there is a general product area that the CEO/CTO/Product Manager/CE/Sales seem interested in, and a developer is passionate/inspired/excited about it and wants to work on prototyping in that area. The developer has total freedom for a couple months to work on it part-time as long as they make progress in prototyping with the Sales and CE teams and are showing progress to customers regularly. The sole test will be, if we ask the Sales/CE teams "is $DEVELOPER's prototype/project drawing interest in customer calls and is $DEVELOPER iterating on it well in response to feedback?"

## Prioritizing bug fixes and small tasks

Bugs and issues from customers come up regularly and need to be prioritized. Many of these tasks are quick (< 1 day) and should be prioritized within the iteration. Larger tasks should be added to the project roadmap. Customer issues should include context about how important that customer is, and how important this particular issue is to the customer so that teams can effectively prioritize. The goal is not to have the engineering teams jump at every customer request, but to thoughtfully triage them when compared to the rest of the work they have slated. If there is any ambiguity in importance, the PM can be consulted to help make prioritization decisions.

Each team may decide how they would like to keep track of the backlog of issues, whether that is in a kanban board, google doc, etc. Similarly, teams can decide how they would like to allocate resources to this, whether it is having one person working down the backlog each week, or assigning a set of issues to be accomplished within an iteration.

## Customer requests

Customer issues should reference the link to the company in HubSpot. **Note that the URL should never be hidden in a markdown link (such as `[company name](https://app.hubspot.com/contacts/XXXXXXX/company/XXXXXXX)`) as GitHub issue search doesn't search the full markdown, only the rendered text.**

Please make sure the URL looks like `https://app.hubspot.com/contacts/XXXXXXX/**company**/XXXXXXX`. If the link ends in `/**deal**/XXXXXXX` or `/**ticket**/XXXXXXX` searches for the company's id won't return the comprehensive set of issues.

### Finding all requests from a given customer

Visit the company's page on HubSpot, copy the unique identifier at the end of the URL, and search in GitHub. All issues filed on behalf of the company will appear.

> NOTE: Pro tip: use the [HubSpot Sourcegraph extension](https://sourcegraph.com/extensions/sourcegraph/hubspot) for autocompleting names and adding customer names to your view!
