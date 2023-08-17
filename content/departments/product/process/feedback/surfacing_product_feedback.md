# Surfacing feedback to the product team

## Surfacing internal feedback

- Internal feedback should be shared in the #feedback-dogfood channel, and cross-posted (optional) in the relevant team's channel.
- Any teammate can open an issue for consideration by a engineering team, and assign the team's label. Teams each have their own workflow for triaging issues, but use [common principles](../../../engineering/working-with-issues.md)
- To determine which team the feedback applies to, consult [Engineering Ownership](../../../engineering/dev/process/engineering_ownership.md) (and update it if necessary!).

## Surfacing customer feedback

> If you're working with a specific customer on a bug or issue and need to directly involve a product engineering team, please refer to [engaging other teams](../../../technical-success/support/process/engaging-other-teams.md).

CEs, support engineers, Sales, Marketing, Engineering, and other teammates that interact directly with Sourcegraph users and/or Sourcegraph itself should share product feedback or feature requests with the product team.

We deeply value this feedback, so we make this process as frictionless for teammates as possible. There are only two ways of posting feedback:

- any team member can post general feedback to the #feedback channel. It will be triaged by the PM on feedback rotation.
- ARR-impacting feedback should be submitted and tracked as a product gap. This helps the product team drive important decisions. In particular, it's important that AEs and CEs submit feedback surfaced by customers or prospects as product gaps.

Bugs can be directly submitted as a GitHub issue.

### Product gaps

#### What is a Product gap?

It is important to distinguish all customer feedback you receive from what would be considered a product gap. A product gap would be some feedback you collect from a prospect during your initial sales cycle, or from an existing customer, that could be within the expected scope of work for Engineering. This especially pertains to either new feature requests or enhancements to existing features that could likely be incorporated in to our roadmap. In contrast, a product gap is NOT a bug nor should it be a potential request that falls well outside the scope of Sourcegraph intended use and function.

It is vitally important when creating a product gap, and a submission record (to tie a gap to a customer), that we offer additional details like the true level of impact this gap has on a customer and what their current workaround may be, if any. This information arms our Product team with the critical detail that can determine if and when a request is accepted for work, so be sure to provide as much context as possible.

### Create a Product gap and a Submission in Salesforce

If you have gotten a specific feedback request that a customer(s) would like to track the progress of you should log that feedback as a Product Gap in Salesforce. Doing so allows full transparency to CEs and Product Eng on how many customers are impacted by an issue and what teams are responsible.

To create a Product Gap, navigate to the impacted customer(s) most recent Opportunity that is relevant to the product gap. If the most recent Opportunity is related to an expansion product (Code Insights or Batch Changes), but the product gap feedback is not, do not use that Opportunity and instead use the overall renewal or expansion Opportunity. When viewing the Opportunity, you should see a related list labeled "Product Gap Submissions". Create a new Submission, and search in the field Product Gap to see if a gap already exists for what you wish to log. If no gap exists, create one, and then continue creating your submission that will tie your customer to the Product Gap. A gap submission should include the following:

- Severity - P0: Dealbreaker, P1: Significant Pain Point, P2: Nice to Have
- Use Case - _if relevant_ tie your submission to one or multiple core use cases to help with prioritization
- Description - any additional detail about what this specific customer wants (as opposed to what is already captured in the Product Gap which should apply to every Submission)
- Impact - what problem does it solve for them? What is the cost of not solving this problem? (for example, this could be answered in terms of developer experience, cost to the business, or time wasted)
- Workaround, if any

View the [full list of product gap categories/subcategories](https://docs.google.com/spreadsheets/d/1lgfIJUGkGW0Cp6yJmOqpR-WcUaWj8LbEAg4jt6EH4oY/edit?usp=sharing) in Google Drive.

New product gap submissions will be automatically posted to the #feedback channel, @-mentioning the PM responsible for the relevant product area. This automation relies on a [zap](https://zapier.com/app/editor/145738791), and the PM - area mapping is hard-coded there and should be modified when necessary.

#### Product Gap Statuses

PMs are responsible for updating a Gap after it's been opened. If a particular feature request is known to have a different status than what is reflected in a Product Gap, anyone is encouraged to update the status (e.g. if a feature is currently in Beta but the gap does not reflect).

- **Open** - needs to be reviewed/looked at by Product
- **In review** - is currently being reviewed by Product but has not been prioritized
- **In progress** - it is prioritized and the team is working on it
- **Scheduled** - has been added to our Product roadmap
- **Backlog** - we know we want to do this, we just don't know when yet
- **Experimental** - released, experimental phase. Contact PM for more info.
- **Beta** - released in Beta.
- **GA** - fully available in standard release.
- **Won't do** - we're not going to do this

#### Creating GitHub Issues

Customer Engineers should no longer be creating GitHub issues for feature requests from their Customers. Instead, Product Eng will manage the process of extracting Product Gaps from Salesforce to add to GitHub.

Bugs can still be submitted as GitHub issues.

Note: while this will currently be a manual process, we intend to automate the creation of GH issues upon creating of a new Product Gap in Salesforce.

#### What if the feedback is [a possible exception]?

There are no exceptions to the above process! Please do post all ARR-impacting product feedback in Salesforce – **this includes feedback that you feel might be: minor, not worth surfacing, too harsh, just a personal opinion, or from you rather than a customer**. All feedback helps us make Sourcegraph the best product possible.

### If you are uncomfortable posting the feedback

If you are uncomfortable posting feedback directly for any reason at all, you are very welcome to DM it on Slack to any [member of the product team](../../index.md#members). They will make sure it reaches the right folks. In some cases, this may mean they post the feedback to slack after removing any possible connection to you.
