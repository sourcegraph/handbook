# Job Fair and planning process

Sourcegraph assigns work using a Job Fair system, treating all engineering work as projects with business champions, tied to KPIs, and allowing the organization to work as a single, flexible labor pool of freelancers, simultaneously optimizing for business impact, velocity, and engineering career growth.

## Summary

- Projects are described in PR-FAQs (Press release-FAQ). PR-FAQs describe ambitious goals that take several quarters of work of several engineers to complete.
- We globally prioritize work in 3-month cycles, with off-cycle adjustments as needed. In each planning cycle, we build an actionable plan for the next 3 months with staffed engineeres to the top projects, and a more tentative plan for the 3 months after that.
- When a feature has shown clear product-market fit, it becomes pre-approved for job fair staffing. This pre-greenlighting lasts for 2-4 quarters, or as long as needed for the feature to work for our [strategic customers](../../strategy-goals/strategy/index.md#market-segmentation). Projects which are pre-greenlit should have a 2-4 quarter roadmap for strategic customers.
- Before each cycle, we ask everyone at Sourcegraph to propose new projects (by raising a PR-FAQ) or to propose continuing an existing project (by adding a scoped step to an existing PR-FAQ).
- Look our for updates in #job-fair.

## Roadmap planning

### Planning summary

We plan in 3-months cycles, that are organized in the following way:

1. Call for input from sales and strategy updates
2. Call for projects (PR-FAQs or a new step in an existing PR-FAQ)
3. Call for staffing preferences of engineers
4. Global prioritization against the [MSEM](../../strategy-goals/msem.md), ARR opportunities, and technical goals, so as to saturate engineering capacity.
5. Cycle starts! Off-cycle PR-FAQs are welcome, either to be considered for the next cycle or to make off-cycle adjustments.

### Pre-Greelit Projects

Pre-greenlit projects are our way to creating focus to ensure that features have the time to fully become strategic ready. This also helps produce longer customer-facing roadmaps. Below is specifically how it works...

- The PMs, EMs, and Designers identify several features to receive consistent engineering investment for up to 4 consecutive quarters. (Example: Own will need 3 engineers for ~4 quarters to be fully GA for strategic customers).
- The rest of the engineers stay in the normal job fair prioritization process to ensure flexibility. We expect 20-40% of the engineering organization to be flexible.
- PM / Tech Lead will own creating 8-12 month high confidence roadmap for these features including definition of done
- PM / Tech Lead will continue to submit projects via Job Fair process even though greenlighting is already agreed

Sourcegraph employees can read the full [decision document](https://docs.google.com/document/d/1xFoNhiWP4OQwBoYwsjtUXkS8xVRVhhwU6-0uu6rWEdM/edit?usp=sharing) for introducing pre-greenlit projects. Current projects can be found in our [FY24 strategy](../../strategy-goals/strategy/index.md#fy24-pre-greenlit-featuers).

### Planning sequence

In what follows:

- a **cycle** is 3 months of work leading to a quarterly release (eg. Starship). Note that the release cycle is decorrelated from our financial planning cycle.
- **D** is the day the (development) cycle starts, and **D+90** is the Starship release date.

Here's our planning cycle:

- **D-45**: TPMs send reminders that planning will start soon!
  - Reminder to the go-to-market leadership to collect top 10 asks from customers
  - Reminder to everybody else to create PR-FAQs. Note that PR-FAQs can be raised on an ongoing basis, this is just a reminder.
- **D-30 days**: GTM leadership share the top 10 asks from customrs in #job-fair
- **D-23**: Deadline to submit projects for job fair prioritisation. Projects are submitted by [raising a ticket](https://github.com/sourcegraph/pr-faqs/issues/new/choose). A project is either a new PR-FAQ, or a new milestone in an existing PR-FAQ. In both cases, the proposal needs to include a definition of a milestone that can be achieved in one quarter, and the staffing requirements.
- **D-23 to D-17**:
  - The prioritization team (PM/EMs/HoX/VPEng) reads PR-FAQs and creates a recommendation (or set of!) based on MSEM, revenue goals, and technical goals.
  - In parallel, engineers express their preferences on a set of PR-FAQs they’d like to join if prioritized.
- **D-17 to D-10**: prioritization week: prioritize the quarter ahead. 1 hour of job fair prioritization meeting every day until done
  - The prioritization team (PM/EMs/HoX/VPEng) start by prioritizing the next release
  - Then the release after that (more uncertain as will be re-assessed in the next cycle)
- **D-10 to D-3**: staffing week.
- **D-3 to D**: buffer, cycle starts
  - VPEng (or delegate) posts in #announce-company to share projects that have been greenlit.
- **D+7**: Updates to the customer facing roadmap by PMs and marketing are done.

This cadence will apply to most of PR-FAQs. A minority of PR-FAQs will also be greenlit on a rolling basis. If this process looks rigid, it isn’t. We’ll make adjustments in cycle if we have good reasons to make them. But having a planning cadence provides visibility to the team on when to submit PR-FAQs ideally (before planning!), when and how prioritization happens, and how far ahead we plan the roadmap and why.
Note that as we go, prioritization will be easier and easier as we’ll have planned 2 cycles ahead and will only be making adjustments.

### Roles and responsibilities

- TPMs are responsible for coordinating the cycle: sending calendar invites, reminders, organizing Job Fair meetings).
- PMs are responsible for the overal quality level of PR-FAQs (clear success criteria).
- The prioritization team (PM/EMs/HoX/VPEng) are responsible for prioritization and staffing
- The Tech Lead is responsible for success of a PR-FAQ. See [How to be a Tech Lead](./tech-lead.md).

## Submitting to the roadmap

Projects can be submitted on a rolling basis. To submit a project, make sure you've read the [guidelines](#pr-faqs) below, then [raise a PR-FAQ](https://github.com/sourcegraph/pr-faqs/issues/new/choose) issue.

- You can use this [template](https://docs.google.com/document/d/1Stwe26NWoh0r_LOeA3sUqwDZlrmZ2qBEcdV0Sd1KP1o/edit#).
- All PR-FAQs are stored in the [PR-FAQ folder](https://drive.google.com/drive/folders/1cOXPKDIQ3O3ZEq9oP6WZBTizgwnoZI9l).
- If you need help putting your PR-FAQ together, post in #ask-product to request help from a PM.

Most of prioritisation takes place on a [3-month cadence](#planning-sequence). Notify an EM/PM if you think your PR-FAQ needs to be prioritized sooner.

### PR-FAQs

PR-FAQ stands for Press Release / FAQ. It's a [popular way](https://www.optimizeforoutcomes.com/the-PR-FAQ/) to define projects by working backwards from the customer; there are many [resources online](https://medium.com/intrico-io/strategy-tool-amazons-pr-faq-72b3e49aa167) with [templates](https://medium.com/agileinsider/press-releases-for-product-managers-everything-you-need-to-know-942485961e31) and discussions.

PR-FAQs should cover work that is at least 3 weeks for 1 engineer, either in the form of a standalone PR-FAQ, or in the form of a milestone defined in an existing PR-FAQ.

- **Milestones and scope**. PR-FAQs need to include a milestone to be delivered in one quarter, with a definition of its scope.
  - **New PR-FAQs** are often ambitious initiatives that will take several cycles to deliver. That’s great! However, we also want planning to be actionable and to deliver value to customers as fast as possible.
  - **Continue working on an existing PR-FAQ**. If you’ve worked on a PR-FAQ for one quarter, and want to keep working on it, then
    - Keep the same PR-FAQ (unless you prefer to start a new one).
    - Add a new milestone section that describes the scope of what you’re proposing to work on.
    - Raise a new PR-FAQ ticket, pointing to the milestone
    - Scoping doesn’t have to be fine-grained at this stage. For a working example, see the [Sentinel roadmap](https://docs.google.com/document/d/10Hs6SfUsJ_WN3ZNOJxT3oFu3LXGGRm0QuhQeexv7Ggk/edit#heading=h.pdl7d6g58e8l). Each early step is a quarter, and later steps will be broken down further as we iterate.
  - There's some ambiguity in the decision to raise a new PR-FAQ or to add a milestone in an existing one. There's no wrong or right decision: do what makes it so your project is the easiest to understand.
  - The milestone should provide some customer value. It’s possible in 99.999% of the cases (it can be to an internal customer for platform or infra stuff). Get help from a PM if unsure here. If it’s not at all possible to deliver a valuable increment in a quarter, state it clearly as it is useful to know both for planning and for discussion about the proposal (can we make it smaller!).
- **Staffing needed**. PR-FAQs include the team needed to deliver the proposed one-quater (or less) milestone. Providing several options is encouraged! Eg. with 3 eng we might do x next cycle, with 2 eng we might do y, with 1 we won’t get anything valuable out.
- **Authors**. Most PR-FAQs should include design, engineering, and product authors to provide a well rounded perspective from each of the disciplines. One way to do that is to write the PR-FAQ, then quickly involve counterparts to make sure the approach, design, and scope make sense.
- **Validation**. PR-FAQs should be backed by user or customer insight: either through research, direct conversation with customers, or input from the GTM team. Any associated customer Product Gaps should be indicated on the PRFAQ.
- **Metrics** and measurable goals. PR-FAQs need to set metrics as part of the success criteria of a milestone. We understand that given our release and adoption cycle, it may be hard to measure things quarterly, so here are a few tips:
  - Feel free to scope down metrics to single-tenant Cloud only, because the adoption cycle is much faster there.
  - Feel free to define targets to be attained in 6 or 12 months if it’s impossible to measure 3-month results (preferred).
- "Umbrella projects" are deprecated and will not be used anymore.
- **Duplicates**. Try to avoid duplicate proposals or proposals about work already on some team’s roadmap. It’s a good idea to quickly survey what’s already on the roadmap before raising a proposal.
- Here are two examples of good PR-FAQs: [Job Fair](https://docs.google.com/document/d/1X9j_wkKlCE9xTwRWefZaOE8OCeisQx6p6gzZTe9aQsI/edit#) and [Sourcergaph Own](https://docs.google.com/document/d/1NeokrfnZq7iLzRCIwvzZ9vhD6O3xYCv4trmu24w7m-E/edit#).

### Backend/invisible/cleanup work

- For non-customer-facing work, such as “I want to replace the XYZ engine/library/layer”, if it’s longer than a month of work in 2023, then it has to go through the PR-FAQ process.
  - Head of Engineering is the business sponsor and will assign biz impact.
  - This is a way we can show the business the importance of the work we sponsor.
- Easiest way to get backend work approved is to tie it to a greenlit project by making it a prerequisite.
- There’s a fixed 20% budget of ALL Eng resources (i.e. 16 people at any time) allocated to “Infrastructure”, meaning they’re just doing the highest-priority tech cleanup.
  - This work will be in the Job Board under the umbrella project of Infrastructure.
  - The current recommendation is to write an RFC for any work you want in this bucket that takes longer than about a week, and we’ll prioritize it against all other open work (cross-functionally).

### PM review

PMs (or Head of Engineering for non-customer facing/platform proposals) are in charge of reviewing PR-FAQs. This is non-blocking and just a way to ensure there's a high standard for PR-FAQs and that the exec team can focus on reviewing the most impactful proposals first in case there are too many of them.

We don't use a formal/complicated framework for evaluating impact for now, in order to keep things lightweight. We might someday introduce a more complicated [opportunity canvas](https://docs.google.com/document/d/1pTEMcwH10xWilQEnVc65oC6PdC3VMjn2XoARfNTaHkc/edit#) later on.

That said, here’s a rough guideline for evaluating impact of customer-facing features:

- **High**: Large ARR (>$5M ARR) or DAU (> 500 DAUs) impact, in the next 12 months. Fit with strategy. Well validated. Differentiated feature. Eg. a project like Batch Changes, Insights, Own, or adding support for a broadly-used codehost.
- **Medium**: Large ARR (>$1M ARR) or DAU (> 100 DAUs) impact, in the next 12 months. Fit with strategy. Elements of validation.
- **Low**: Unknown or unvalidated impact. No clear fit with strategy.

## Finding a project to work on

Projects are in the [Job Fair project](https://github.com/orgs/sourcegraph/projects/302/views/18).
Projects are assigned using the planning cadence above and on a rolling basis. Feel free to drop a comment in PR-FAQ issues and let your manager know if you're interested in joining a project.

## Known trade-offs

Job fair allows us to avoid over-relying on a rigid org chart and team structures. That said, it comes with a few trade-offs:

- Bug fixes and small tweaks are less visible, and may fall through the cracks. We rely on a lightweight ownership model to solve for this: engineers are still part of teams. We're building code ownership tooling to help address this.
- 3 to 6-months roadmap: Job Fair makes it so we're continuously reallocating resources to projects. This additional flexibility comes at the expense of having longer term predictability. We compensate for this by building a customer facing roadmap that is fine-grained in the short term (3 to 6 months), and focused on higher-level problems in the longer term (12 months). Focusing on outcomes and problems vs features for longer term horizons helps us avoid overpromising or deviating from solving real customer problems.

## Communications

Job Fair updates are posted weekly in the #job-fair slack channel to communicate the progress of projects and action items that are needed.

As projects progress throughout each iteration of Job Fair, any staffing or prioritization changes will be determined by the Job Fair leadership team. These changes will be communicated to the Technical Program Manager, Tech Leads and any other DRIs involved with that project.

## Glossary

- PR-FAQ – Press Release / FAQ, a [popular way](https://www.optimizeforoutcomes.com/the-PR-FAQ/) to define projects by working backwards from the customer; there are many [resources online](https://medium.com/intrico-io/strategy-tool-amazons-pr-faq-72b3e49aa167) with [templates](https://medium.com/agileinsider/press-releases-for-product-managers-everything-you-need-to-know-942485961e31) and discussions.
- Roadmap – Our [WIP Product vision & direction document](https://docs.google.com/document/d/1tzfLimS4et3SnC07ZS7ncSeojsEV6UJ5ppvS47WGgg8/edit), which is finalized and is now being used to generate Roadmap projects, by ensuring that our “greenlit” projects have sufficient coverage of our Roadmap goals.
- Roadmap Project - a project that has been green-lit as something we will be committing to delivering and resourcing for success. Also known as a Job Board project; see below.
- Job Board – conceptually, a spreadsheet that tracks all greenlit projects, each of which has gone through a PR-FAQ review and prioritization into the project list. Managed by Ryan Phillips. The first iteration takes us through March Starship.
- Job Fair – ([PR-FAQ](https://docs.google.com/document/d/1X9j_wkKlCE9xTwRWefZaOE8OCeisQx6p6gzZTe9aQsI/edit#)). A new way of defining project work that forces everything through a lens of business prioritization and alignment with our Roadmap. All projects receive KPIs for estimated impact to ARR/DAU, and even internal/technical/maintenance work can be fitted into the Job Fair framework with very little overhead.

## Related

Also see the [announcement](https://docs.google.com/document/d/1X9j_wkKlCE9xTwRWefZaOE8OCeisQx6p6gzZTe9aQsI/edit).
