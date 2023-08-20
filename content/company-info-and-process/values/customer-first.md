# Being a customer-first company

Some companies are engineering-first or sales-first, meaning they consider how that part of the organization needs to work to be successful and everything else is informed from there. Sourcegraph is a [customer-first company](index.md#customer-first):

> You earn and keep the trust of our customers by putting their interests first, ahead of Sourcegraph's interests and your team's interests. Over the long term, we need to be a customer-funded business, and you'll help us get there by being customer-first.

This handbook page documents what this means and how it plays out day to day.

Simply, this all boils down to two things we want to be true and can often feel competing:

1. We want to do what is in the best interest of the customer, setting them up for success and in such a way that they trust us.
2. We want to make decisions that set up Sourcegraph for long-term success and result in scalable and sustainable ways of doing things.

This means that everyone involved needs to be prepared to honor the area of ownership each other has and have hard conversations to get to the best answer in this spirit.

This is the area of responsibility for each organization:

- Sales is responsible for establishing, retaining, and growing our commercial relationship with customers.
- Customer Engineering (aka CE) is responsible for educating prospective dev users on how to use Sourcegraph and by providing proactive technical expertise.
- Customer Support (aka CS) is responsible for satisfying support SLAs for customers pre-sales (1 hour) and post-sales (defined contractual [SLAs](../../departments/technical-success/support/index.md#slas)) between 9:00 UTC–0:00 UTC (2am PT–5pm PT) Monday–Friday (this will expand to 24/5 support as the team grows over the course of FY22).
- Technical Advisory (aka TA) is accountable for our customers’ long-term success, usage, and adoption of our products.
- Product is responsible for the overall success of the product, including prioritization of support-driven, eng-driven, and product-driven efforts
- Engineering is responsible for giving accurate time estimates (necessary for effective prioritization) and providing enough engineering capacity to respond to interrupts (high-urgency bug fix requests filed by CS).

This is how ownership of these areas of responsibility plays out day to day:

- We want sales to focus on moving things through the sales cycle as quickly as possible
- We want CS, product, and engineering to ask whether there are any negative consequences and surface these for the organization to consider
- We want TA to know and understand our customers deeply, share and advocate for their needs internally, and provide useful and necessary context to internal teams so that we get to the best answer possible for our customers and for Sourcegraph while managing their expectations around our processes and SLAs.

This is how this all fits together in terms of workflow:

- When a customer agrees to move forward with a trial (and again when they move forward with a production set-up), the CE offers proactive coaching and guidance to set up the customer for success
- At any point pre-sales or post-sales (i.e., while setting up a trial or production deployment), the customer may need:
  - An answer to a how-to question
  - To make a feature request
  - Help troubleshooting something not working correctly

A few notes for CE:

- If CE doesn’t know the answer to a how-to question, they ask for help in the #ask-engineering Slack channel. This channel is monitored by product, engineering, and CS. It is a best effort approach (i.e., there is no SLA for response time for answers).
- Any other request for help from engineering should go through CS (for troubleshooting) or [product (for feature requests)](../../departments/product/process/feedback/surfacing_product_feedback.md) and not to engineering directly. (For example, CEs are welcome to start troubleshooting an issue, but if they get stuck, the next step is to engage CS, and CS will take responsibility for resolution and customer communication from there)
- CE [routes all feature requests to product](../../departments/product/process/feedback/surfacing_product_feedback.md) for consideration and prioritization
- If a CE feels compelled to let a customer know CS will help them, they should do so without using loaded terms like “ASAP” or that sign up CS for something they may not be able to honor
  - _Let me chat with members of our engineering and support team. I'll bring them up to speed on the situation and I should have a follow-up for you in a few hours at most. Please let me know if anything comes up in the meantime that I should look into._
  - When the CS makes first contact with the customer after taking the lead on the issue, they should first establish the context that has already been transferred. _Hey $CUSTOMER, $CE brought me up to speed on the issue. First off, let me say I'm sorry you ran into this issue and thanks for working with us to resolve this. My priority from here is to get this resolved ASAP. Here's what I understand is the situation..._
- CE should always provide as much context as possible to CS as outlined [here](../../departments/technical-success/ce/team-culture/index.md#customer-support-cs)

A few notes for CS:

- CS follows [this workflow](../../departments/technical-success/support/process/support-workflow.md).
- If CS gets stuck, they engage engineering for help as outlined [here](../../departments/technical-success/support/process/engaging-other-teams.md).
- CS is responsible for holistic prioritization of all issues they are handling (outlined [here](../../departments/technical-success/support/process/support-prioritization.md)), including all issues routed to any one engineering team. Whenever there is too much work for any one team to do, the head of CS gathers context from sales and CE to inform what order of work is best for Sourcegraph. This conversation happens in the #customer-support channel for visibility and clarity to everyone involved.

There may be times when an AE or CE is concerned that CS or product have not made a decision that is in the best interest of the customer. In these situations, the AE should bring up the concern with the CE. The CE should then dig in and either agree with or challenge the AE. It is common during this process for a CE to engage CS or product and for CS/product to push back based on what they know is happening across all customers and a sense of holistic prioritization. If CE is unable to get to resolution, diffuse the situation with the customer, and/or feels stuck, they should bring in the VP Technical Success, who can also bring in the VP of Sales, or VP of Eng to find a resolution.
