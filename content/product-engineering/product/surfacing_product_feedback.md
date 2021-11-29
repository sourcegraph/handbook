# Surfacing feedback to the product team

> If you're working with a specific customer on a bug or issue and need to directly involve a product engineering team, please refer to [engaging other teams](../../support/engaging-other-teams.md).

CEs, application engineers (CS), Sales, Marketing, Engineering, and other teammates that interact directly with Sourcegraph users and/or Sourcegraph itself should share product feedback with the product team.

We deeply value this feedback, so we make this process as frictionless for teammates as possible. Team members can submit a product gap to share any new feedback internally with the team.

## What IS a Product Gap?

It is important to distinguish all customer feedback you receive from what would be considered a product gap. A product gap would be some feedback you collect from a prospect during your initial sales cycle, or from an existing customer, that could be within the expected scope of work for our Product and Engineering team. This especially pertains to either new feature requests or enhancements to existing features that could likely be incorporated in to our roadmap. In contrast, a product gap is NOT a bug nor should it be a potential request that falls well outside the scope of Sourcegraph intended use and function.

It is vitally important when created a product gap, and a submission record (to tie a gap to a customer), that we offer additional details like the true level of impact this gap has on a customer and what their current workaround may be, if any. This information arms our Product team with the critical detail that can determine if and when a request is accepted for work, so be sure to provide as much context as possible.

## Create a Product Gap and a Submission in Salesforce

If you have gotten a specific feedback requests that a customer(s) would like to track the progress of you should log that feedback as a Product Gap in Salesforce. Doing so allows full transparency to CEs and Product Eng on how many customers are impacted by an issue and what teams are responsible.

To create a Product Gap, navigate to the impacted customer(s) most recent Opportunity, whether it's a net new opp or a renewal. When viewing the Opportunity, you should see a related list labeled "Product Gap Submissions". Create a new Submission, and search in the field Product Gap to see if a gap already exists for what you wish to log. If no gap exists, create one, and then continue creating your submission that will tie your customer to the Product Gap. Be sure to include relevant information like what workarounds your customer must employ (if any), and the severity of what this issue blocks for them.

View the [full list of product gap categories/subcategories](https://docs.google.com/spreadsheets/d/1lgfIJUGkGW0Cp6yJmOqpR-WcUaWj8LbEAg4jt6EH4oY/edit?usp=sharing) in Google Drive.

## Product Gap Definitions

- Open - needs to be reviewed/looked at by Product
- In review - is currently being reviewed by Product but has not been prioritized
- In progress - it is prioritized and the team is working on it
- Scheduled - has been added to our Product roadmap
- Resolved - this is done!
- Backlog - we know we want to do this, we just don't know when yet
- Won't do - we're not going to do this

## Creating GitHub Issues

Customer Engineers should no longer be creating GitHub Issues for their Customers. Instead, Product Eng will manage the process of extracting Product Gaps from Salesforce to add to GitHub.

Note: while this will currently be a manual process, we intend to automate the creation of GH issues upon creating of a new Product Gap in Salesforce.

## What if the feedback is [a possible exception]?

There are no exceptions to the above process! Please do post all product feedback in Salesforce – **this includes feedback that you feel might be: minor, not worth surfacing, too harsh, just a personal opinion, or from you rather than a customer**. All feedback helps us make Sourcegraph the best product possible.

## If you are uncomfortable posting the feedback

If you are uncomfortable posting feedback directly for any reason at all, you are very welcome to DM it on Slack to any [member of the product team](index.md#members). They will make sure it reaches the right folks. In some cases, this may mean they post the feedback to slack after removing any possible connection to you.
