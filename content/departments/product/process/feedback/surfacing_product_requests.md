# Surfacing product requests to the product team

This page outlines the different kinds of product requests, how to raise each to EPD, and how product requests are including in our planning process. A loom recording overviewing this entire process can be found [here](https://www.loom.com/share/ec2afa8c60c44e21aab67ee12e5a85ad).

Note: we have a separate process for raising bugs or requests-for-help from EPD.

## Product Gaps vs Product Feedback

Any teams that interact directly with Sourcegraph users and/or Sourcegraph itself should share product feedback or product gaps with the product team. We deeply value this feedback, so we make this process as frictionless for teammates as possible. There are only two ways of surfacing product requests:

Product Feedback is:

- Observations, comments, and / or opinions on the product experience shared by prospects or customers
- Choosing to action desired state positively influences sentiment but does not necessarily have a quantifiable impact
- Shared informally in #feedback- channels

Product Gaps (aka Feature Requests) are:

- Specific requested or desired enhancements to our product that provides a tangible benefit to a prospects’ or customers’ use of Sourcegraph
- Impact of choosing to implement desired functionality is quantifiable
- Logged in Salesforce Product Gaps
  - When created, a message is posted in #feedback

## Product Gaps (aka Feature Requests)

### What is a Product Gap?

It is important to distinguish the customer feedback you receive from what would be considered a product gap. A product gap pertains to either a new feature request or an enhancement to an existing feature, that could potentially be incorporated into our roadmap. In contrast, a product gap is NOT a bug nor is it feedback on the way in which something was implemented. That is considered product feedback.

Product Gaps should establish a clear need for a prospect or customers' use of Sourcegraph. This is why it is important, with each submission, to capture a description of the ask, a statement on the impact of the ask, and context on what workaround exists given the gap.

There are two components of Product Gaps in Salesforce:

- Product Gap: the overall product gap. Each product gap has:

  - A [status](#product-gap-statuses) (default is Open)
  - A product category (what area of Sourcegraph the product gap pertains to)
  - Open-text fields to link to GH tracking issues and / or related documentation
  - A Feature Lifecycle Stage field to indicate if the Product Gap's current maturity is Experimental, Beta, or GA.

- Product Gap Submission: individual submission requests per customers / prospect. Product Gaps have a one-to-many relationship with Product Gap Submissions. That is, a Product Gap likely has many submissions from multiple customers / prospects. For each Product Gap Submission, it must be associated to an opportunity -- this is important for understanding and quantifying the potential impact of a Product Gap. Each Submission should also contain:
  - [Severity](#product-gap-submission-severity) - an indication of the severity to the customer / prospect by not having the desired, requested capability
  - Description - a statement about what this specific customer wants (as opposed to what is already captured in the Product Gap which should apply to every Submission)
  - Impact - what problem does it solve for them? What is the cost of not solving this problem? (for example, this could be answered in terms of developer experience, cost to the business, or time wasted)
  - Workaround - helps to contextualize the severity rating by providing an understanding of if and how the customer / prospect works around the request currently

### How to view Product Gaps in Salesforce

Access to Product Gaps is granted via Entitle. Once you have requested and received automatic approval, navigate to the Product Gaps Dashboard [here](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000015UGhEAM/view?queryScope=userFolders).

### How to Create a Product Gap and a Submission in Salesforce

If you have received a specific feedback request that a prospect or customer would like Sourcegraph to consider building into the product experience, you should log that feedback as a Product Gap in Salesforce.

To create a Product Gap, navigate to the most recent Opportunity that is relevant to the Product Gap (for existing customers this is likely their upcoming renewal record). If the most recent Opportunity is related to an expansion product (Code Insights or Batch Changes), but the product gap feedback is not, do not use that Opportunity and instead use the overall renewal or expansion Opportunity. When viewing the Opportunity, under "Related List Quick Links" is a link for "Product Gap Submissions". Hover over and click "New". You'll begin by entering the Product Gap name. This is a lookup field so Salesforce will attempt to find a Product Gap if it already exists to avoid duplication. If no gap exists, create a new one. Then, you'll create your individual submission that will associate your customer ask to the overall Product Gap.

When a new product gap submission is created it will be automatically be posted to the #feedback channel.

## How EPD incorporates Product Gaps in planning

Since Salesforce Product Gaps are the source of truth for GTM requests, PMS (and EMs if a team does not have a PM) are expected to review and maintain Prodcut Gaps on an ongoing basis. When it comes time for release planning, Product Gaps are considered during quarterly planning, as EPD lays out their next quarter of commitments, PMs/EMs pull top asks from Product Gaps self-serve. Then, monthly, as EPD gets a better sense of commitments and release dates, Product Gap statuses are updated and updates shared via our Sales / TS / EPD Monthly Release Meeting.

### Field explanations & FAQ

#### Product Gap Statuses

PMs are responsible for updating a Gap after it's been opened. If a particular feature request is known to have a different status than what is reflected in a Product Gap, anyone is encouraged to update the status (e.g. if a feature is currently in Beta but the gap does not reflect).

- **Open** - needs to be reviewed/looked at by Product, the default status of a new Product Gap
- **In progress** - it is prioritized and the team is working on it
- **On Backlog** - we know we want to do this, we just don't know when yet
- **Won't do** - we're not going to do this
- **Done** - we have built this capability (note: Feature Lifecycle Stage determines the maturity of the feature)

#### Product Gap Submission Severity

When creating a Product Gap Submission, categorizing the severity of the ask is extremely important context that goes into overall prioritization and planning.

- **P0: Dealbreaker** - a P0 severity likely means there is no workaround; the product gap is likely having a material impact on a prospect / customers' use case or ability to use our product.
- **P1: Significant Pain Point** - a P1 serverity likely means that there is a workaround, however, it does not reasonably meet a prospect / customers' expectations around the use of our product and over time could lead to a negative sentiment or problem with their use of Sourcegraph.
- **P2: Nice to Have** - a P2 severity should always have an acceptable workaround. P2's should not lead to gaps or friction with a customers' use of Sourcegraph but implementing the desired ask could have positive benefits on the overall relationship and use of Sourcegraph.

#### What if the feedback is [a possible exception]?

There are no exceptions to the above process! Please do post all ARR-impacting product feedback in Salesforce – **this includes feedback that you feel might be: minor, not worth surfacing, too harsh, just a personal opinion, or from you rather than a customer**. All feedback helps us make Sourcegraph the best product possible.
