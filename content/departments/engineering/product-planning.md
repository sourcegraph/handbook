## Product Roadmap

- [Product Roadmap](https://docs.google.com/document/d/1XehlyVYzyUP7jClMJB7NV-RyKyI4X14zkQ2N8Us4Q48/)

## Product-Focused Planning

Our product planning and execution strategy is designed to align with the
company's strategic objectives, marketing goals, and feedback from our
customers. Planning is continuous with quarterly check-ins.

It’s the EPD teams – product, engineering, and design together – that have the
expertise, context and pride of ownership to be best suited to propose the
highest impact work that fits those goals. And they’re the team that can do the
correct eng scoping.

### Planning Process

Planning is continuous, guided by the [company's strategic
objectives](https://docs.google.com/document/d/1Ju2SwpRCcIAC65kCu60QM8rnsn8YDTmkNAKO5xkl0ZY/edit#heading=h.ev1rhjc47atd),
[product
strategy](https://docs.google.com/document/d/1VxVbjskzTB4m9mvm3w5xtmFRDTxj1e5N3yEftEH2Nsw/edit#heading=h.mj1qne1whw0t),
marketing goals, feedback from our customers, especially [GTM-tracked product
gaps](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O3t000006WZklEAG/view?reportFilters=%5B%7B%22operator%22%3A%22equals%22%2C%22value%22%3A%22Cody%22%2C%22column%22%3A%22Product_Gap_Submission__c.Product_Category__c%22%7D%5D),
and internal needs (e.g., scalability, reliability, performance, security).

We expect that the rough  distribution of work will be about 50% based on the
strategic objectives (which drive our marketing launches). The other 50% of the
work will come bottoms up from customer feedback and internal needs. Across all
of this work, aim to keep Enterprise focused work at 20% or less as per our
“feature conveyor belt.”

Work items from these input sources are divided into three categories:

- **Work In Progress (WIP):** Already started. WIP has specified target dates, based on the work's scope and requirements.
  - By default, WIP should not be interrupted.
- **Next queue:** A short (max 5) ordered list of planned work without target dates. This work should represent the team’s most important upcoming work, across all categories.
  - This can be reordered or added to (up to the limit) without notification of stakeholders but no approval needed. Removing items requires approval from stakeholders for that item, Head of Product, and Head of Eng.
- **Backlog:** An unordered set of work with no associated target or commitment dates.

New work items are triaged into one of these three categories (see the FAQ for details).

Work can have two types of dates:

- **Target dates:** Set only for Work In Progress. Gives stakeholders a rough idea of when the work might be delivered.
  - Can be changed by the team at will, giving the team flexibility to adjust based on trade-offs between date and scope.
- **Commitment dates:** Set for work with external-to-EPD commitments. Work can be committed without yet being started.
  - Changing a commitment date requires approval from the stakeholders involved.

### Quarterly Check-ins

Per-team check-ins are where we come together to ensure we’re aware of progress
and aligned with direction. The purpose of the planning review is for each team
to present their progress, a snapshot of their planned work, and get feedback
from the exec team.

A planning review will consist of content to cover at least the following
topics:

- Retrospective:
  - How well did we do in accomplishing our goals since last quarter?
  - What data supports those conclusions?
- Status:
  - How well is the product serving the needs of our customers and the business?
  - How well have you hit your metrics targets?
- Plan snapshot:
  - What are your external commitments? What is the current Work In Progress? What work items are Next?
  - How does this work meet our business goals and how does it serve the needs of our customers?
  - What data are you using to drive your planning?
  - Have you done the high-level eng scoping to give you confidence that your team will be able to get committed work done by the committed date?
  - Note, not every team will have work that applies to every goal. Likewise, not every work item is expected to meet a strategic goal.
- Success Metrics:
  - What KPIs and targets have you set to measure the success of this work?
- Risks/Open Questions/Needs:
  - What are the biggests risks? What are the mitigations?
  - What guidance would you like from the exec team?
  - Do you have everything you need to be successful?
- Excluded:
  - What items in your Backlog are just below the line?
  - What requests to your team have you decided not to put on your Backlog at all?

TPMs will schedule reviews for each team throughout the quarter to include
interested members of the exec team, the leads of the product team (at least the
EPD triad) and other interested stakeholders. At the end of a review, the execs
and the product team will either be in alignment or the team will address the
concerns and schedule a follow-up (repeat as needed).

## FAQ

**Q: How do we prioritize work without the planning process?**

A: When prioritizing work (new or backlogged), the team should go through the following process:

- Does this work have an external commitment date? When does the work need to be started to meet that commitment date?
  - Changing a commitment date or the scope of a commitment requires buy in from the relevant stakeholders.
- Should this work interrupt Work In Progress?
  - Default answer is no! Interrupting Work In Progress should occur only for unavoidably urgent work like an incident or a commitment with a date outside of our control.
- If it shouldn’t interrupt Work In Progress, should it go in the Next queue? If so, where?
  - If the Next queue gets longer than 5 items, the team will have to remove work items to ensure that the team is focused on a small set of top priorities. When items are removed from the Next queue, stakeholders should be informed.
- If it’s not Next, add it to the Backlog (or close as won’t fix).

**Q: Where does new work come from?**

Strategic goals and product roadmap

- The product roadmap evolves based on customer needs, the competitive landscape, and customer feedback. The Product team owns the [product roadmap](https://docs.google.com/document/d/1XehlyVYzyUP7jClMJB7NV-RyKyI4X14zkQ2N8Us4Q48/edit#heading=h.3yu1a6dm5wpq), and PMs are responsible for working roadmap updates into team plans.

Marketing goals

- Marketing moments should deliver a cohesive and impactful set of features that support the marketing narrative. When Marketing wants to plan a marketing moment, they will coordinate with Product to adjust the [product roadmap](https://docs.google.com/document/d/1XehlyVYzyUP7jClMJB7NV-RyKyI4X14zkQ2N8Us4Q48/edit#heading=h.3yu1a6dm5wpq) 3-6 months before the planned event. They will specify a commitment date that provides sufficient lead time for Marketing to integrate the completed work into their narrative.

Customer Feedback and GTM Requests

- Product Managers are responsible for aggregating customer feedback across different channels and working it into the [product roadmap](https://docs.google.com/document/d/1XehlyVYzyUP7jClMJB7NV-RyKyI4X14zkQ2N8Us4Q48/edit#heading=h.3yu1a6dm5wpq) and team plans (small customer feedback items do not need to be in the roadmap). (This will be aided by ongoing investments to make Salesforce Product Gaps more self-serve.)

Internal needs

- Engineering, Product, and Design teammates will have items that need to be addressed to meet foundational goals such as scalability, reliability, performance, and security. This includes ongoing maintenance, architectural improvements, and polishing of existing features.

**Q: What prevents teams from letting scope creep and never shipping?**

A: Teams will need to give quarterly updates on their progress at the check-ins.
This is one mechanism for incentivizing teams to break work into smaller,
shippable chunks.

We’ll also need teams to incorporate the idea of [stepping
stones](https://medium.com/@jamesacowling/stepping-stones-not-milestones-e6be0073563f)
into their planning process: how do we break large projects into smaller, more
manageable chunks that are “shippable and stoppable”. That is, pieces that can
be shipped independently and which also add value such that even if the larger
project were to stop, the project still delivered value.

**Q: If planning is rolling, how do we know we’re working on the most important things?**

A: The Product Managers own the Next queue for each team and are responsible for
making sure that it’s aligned with the [company’s strategic
objectives](https://docs.google.com/document/d/1Ju2SwpRCcIAC65kCu60QM8rnsn8YDTmkNAKO5xkl0ZY/edit#heading=h.ev1rhjc47atd)
and [product
strategy](https://docs.google.com/document/d/1VxVbjskzTB4m9mvm3w5xtmFRDTxj1e5N3yEftEH2Nsw/edit#heading=h.mj1ķne1whw0t).
If the PMs are concerned that a team does not have enough high impact work (or
too much!), they are responsible for working with leadership and EMs to figure
out how to better align the team with our strategic goals.

**Q: What is the source of truth for plans? How do we keep leadership informed and aligned?**

For high level checks, the quarterly check-ins will inform and align.

The [product
roadmap](https://docs.google.com/document/d/1XehlyVYzyUP7jClMJB7NV-RyKyI4X14zkQ2N8Us4Q48/edit#heading=h.3yu1a6dm5wpq)
is the source of truth of teams’ work (although it doesn’t include internally
focused team work or smaller customer feedback work items). Over time, the TPM
team will develop processes so that leadership can go to a known location in our
issue tracker and understand what work is in progress, what’s up next, target
dates, and commitment dates. (We intentionally do not provide centralized
visibility into the backlog.)

**Q: When do changes need to be communicated? Do changes need to be approved?**

All changes should be passively communicated through updating the [product
roadmap](https://docs.google.com/document/d/1XehlyVYzyUP7jClMJB7NV-RyKyI4X14zkQ2N8Us4Q48/edit#heading=h.3yu1a6dm5wpq)
or, eventually, the issue tracker. Only some changes need to be actively
communicated to leadership and stakeholders.

For WIP:

- Dropped work: Must be communicated and approved
- Updated target date, has commitment date: Must be communicated and approved
- Updated target date, no commitment date:
  - If the target was within the next month, must be communicated.
  - If the target was further out, update, with active communication as needed
- Newly started work: Update, with active communication as needed.

For Next queue work:

- Dropped work: Must be communicated and approved
- Added work: Update, with active communication as needed
- Order changed: Update, with active communication as needed

Beyond this, any work that is at risk, even if it doesn’t trigger any changes,
should be communicated to at least
[#epd-planning](https://sourcegraph.slack.com/archives/C04SCUER62C) or in a PFP
sync.

**Q: When does eng scoping happen?**

When work becomes WIP, before setting a target date, EPD should do a high level
assessment to ensure a high level of confidence in the target date. As work
progresses, teams should continue to refine target dates.

Eng scoping is the difference between eyeballing a list of requirements and
hoping we can get them all done and having confidence that we can accomplish
what we want. And if we can’t, we want to know that ASAP so we can break it into
smaller [stepping
stones](https://medium.com/@jamesacowling/stepping-stones-not-milestones-e6be0073563f),
adjust dates, or cut scope.

**Q: What are tips for effective quarterly check-ins?**

A: Some tips for having an effective review:

- Make sure the priorities for your work are clear – what’s Must Have (P0), Want To Have (P1) and Nice To Have (P2)? What could get cut?
- Make sure the customer (internal and/or external) impact is clear – if we do this work, what’s the value to the customer?
- Make sure the business impact is clear: how does this work help us achieve our strategic goals?
- In addition to ensuring that the EPD team is aligned before heading into the review, try to get as much alignment with execs ahead of time as possible.
