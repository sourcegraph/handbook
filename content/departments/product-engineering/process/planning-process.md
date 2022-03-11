# Planning process

On a quarterly basis Product & Engineering review our strategy, goals (OKRs) and roadmap and perform a retrospective. This page describes how these processes work, aligned to our [planning philosophy](planning-philosophy.md). Because planning is complex, we have a few baseline working agreements:

- We complete as much of the planning process as possible using async communication and collaboration (docs, slack, github, etc.)
- When we cannot drive a decision asynchronously we will schedule a meeting with the decision makers and key input providers; decision makers are responsible for ensuring the outcome of the meeting is reflected in asynchronous artifacts
- Prod/eng directors drive creating quarterly department OKRs gathering input from their teams
- Changes/updates to OKRs can and should be made throughout the quarter when necessary
- Creation of roadmap items or updates to existing roadmap is owned by individual teams
- We rely on the EM & PM to communicate any significant changes in scope of work or delivery of work to the appropriate stakeholders
- We have a dedicated facilitator for planning in each quarter; for FY23 Q2, it will be [Serina Clark](../team/index.md#serina-clark)

We also have clear guidelines for things like planning [artifacts](#artifacts), [cadence](#cadence), and [how to make mid-quarter adjustments](#mid-quarter-adjustments). First, though, it's worth familiarizing yourself with the [strategy](#strategy), [goals](#goals-okrs), and [roadmap](#roadmap) concepts.

## Strategy

_See also [strategy artifact definitions](#annual-prodeng-strategy)_

Sourcegraph has a top-level [strategy page](../../../strategy-goals/strategy/index.md) that describes in [narrative form](https://www.mindtheproduct.com/the-importance-of-narrative/) where the company is headed and why, what we want the product to be at the end of the year, trade-offs, and how we plan to achieve that strategically. Product/Engineering also has a [department level strategy](../strategy-goals/index.md), and individual teams have [per-team strategy pages](../../../strategy-goals/strategy/index.md#team-strategy-pages).

These are intended to be relatively stable over the course of a year, but anyone can propose edits any time as we learn new information.

## Goals (OKRs)

_See also [OKR artifact definitions](#quarterly-department-okrs)_

Our philosophy on goal setting as well as a view into our history of goals is [published in our handbook](../../../strategy-goals/goals/guidelines.md). Each quarter we set OKRs at the department level (product and engineering). OKRs define what success looks like each quarter, taking into account where we are at as a company and what we think the next things we need to accomplish given the vision and strategy we have for the year. We don't require OKRs at lower levels (orgs, teams) because the most important artifact is the roadmap, which should be aligned to the goals.

The source of truth for current OKRs and status of those OKRs is in our [private issue tracker](https://github.com/sourcegraph/product-engineering-tracker/labels/summary). This is private because KRs frequently contain sensitive business metrics and customer names. The sanitized public version of our OKRs are [here in the handbook](../../../strategy-goals/goals/index.md). Each KR has an associated GitHub issue following [this template](https://github.com/sourcegraph/product-engineering-tracker/issues/new?template=product-engineering-kr.md).

## Roadmap

_See also [strategy artifact definitions](#roadmap-tracker)_

The purpose of our roadmap is to communicate to our team and our customers the story of what we plan to deliver to acheive our our annual vision and quarterly OKRs. Expectations around roadmap items depend on how far in the future we expect them to happen. Our goal is to have high confidence and fidelity in our roadmap for the next 3 months on a rolling basis, and for it to contain our best approximation for the biggest milestones we want to hit over the next 12 months on a rolling basis. The roadmap should always reflect the realistic expectations of the team:

- Don't invent roadmap items that the team has low confidence in just to fill space on the roadmap (at the same time it is important for teams to challenge themselves to think about what they want to aim to accomplish over a time horizon longer than one quarter).
- Don't provide false precision on dates (if you can only place items into a quarter or month, that is fine)
- Don't include stretch roadmap items (just adjust the timeline out so you don't feel the need to label something as "stretch")

The source of truth for our roadmap is [this GitHub project](https://github.com/orgs/sourcegraph/projects/214). Each roadmap item should link to an issue that follows [this template](https://github.com/sourcegraph/sourcegraph/issues/new?template=roadmap-issue.md), and teams should keep the delivery plan up-to-date and post updates to the issue anytime something important happens (ex: milestone achieved, plan changed).

## Cadence

Planning is made up of activities that happen on a weekly, monthly, and quarterly basis.

### Weekly OKR updates

- The assignee of each OKR is responsible for posting an update to the associated tracking issue by 19:00 UTC each Friday. To post an update, create a new comment with the following details:
  - The status of how we are tracking toward the goal (for numeric goals, include the current number we are at).
    | Status | Description |
    | ------------- | -------------------------------------------- |
    | 🟢 On track | 90–100% confidence we will achieve the goal. |
    | ⚠️ At risk | 75–89% confidence we will achieve the goal. |
    | 🛑 Off track | <75% confidence we will achieve the goal. |
    | 🚀 Done | We have achieved the goal! |
    | ☠️ Cancelled | We are no longer pursuing this goal. |
  - Description of concrete progress that has been made since the last weekly update.
  - Clear next steps and owners.
  - Any other helpful information (ex: risks, requests for help).
- VP Product and VP Eng review and ask questions async and then anything that needs discussion is added to [VP team sync agenda](../team/index.md#vp-team-sync).

### Monthly plan reviews

An important part of keeping planning simple is to make incremental updates throughout each quarter, so there are fewer major changes needed when you get to the next one.

In addition to the monthly [team newsletter](team-newsletters.md), each PM should update the [PMM roadmap deck](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gf131fe1596_2_7) (internal only), review their [OKRs](#goals-okrs), and review their [team strategy pages](#strategy) at the same time. The PMM deck contains a manually updated copy of the current plan, plus recently launched important customer-facing features from the [roadmap tracker](https://github.com/orgs/sourcegraph/projects/214/views/21) (so be sure the [roadmap tracker](#roadmap) and [feature data](../product/process/index.md#product-data) is also updated at this point, if you haven't already).

Be sure to @ mention your engineering, design, product marketing, and any other important partners for feedback in your monthly update PRs. Engineering should feel empowered to bring up that they feel strongly about in conversations with product. [We want to push decisions down to people closest to those problems](../../../company-info-and-process/communication/decisions.md#what-makes-an-effective-decision). It is product's responsibility to help give insight into customer pains and feedback, strategic priorities, and to ensure consistency across the product.

Updates and highlights of what has changed are shared in #prod-eng-announce Slack channels and also on an on org-basis (cross-team feedback within an org is important). Surface large changes to the rest of the Director/VP team to have appropriate discussions and tradeoffs as necessary.

#### Mid-quarter adjustments

When we discover OKRs or roadmap items are not aligned with our most pressing ambitions and most critical outcomes, we should rethink and rearticulate our focus to ensure our teams are working on the most important things. Signs that we should consider changing them are that we are getting distracted by things which feel more important but aren’t supporting our plan, we have received new information that feel in opposition to our plan, or we have baselined a metric and it becomes less clear how to have an impact.

We shouldn’t be afraid to have these important discussions and question whether or not we are focusing on the most important things. If we do decide to make any changes (tweak a target, reword/replace something, or drop an item entirely), we will treat this as a valuable learning exercise and opportunity to improve alignment with our teams and stakeholders

To change something mid quarter here are the steps:

- Raise the discussion in our #product-eng-directors slack channel to discuss async and if necessary, add to our weekly Product/Eng Directors sync meeting agenda
- Gather feedback and consensus from rest of team and determine if we want to change the OKR or completely remove it
- Gain approval from Nick/Christina; if necessary, gain alignment or simply bring awareness to change at Exec Meeting
- Update the OKR github tracker and communicate change in appropriate Slack channels #prod-eng-announce, etc.

### Quarterly planning

The main planning activity has several milestones oriented around the quarter boundary. To streamline communication on deliverables in this timeline we:

- Use the #product-eng-directors to initiate collaboration on OKRs / Roadmap drafts
- We will leverage collaboration tools native to each artifact system of record to collaborate on content
- When we deliver drafts that need communicated for broad review / awareness we will post to #prod-eng-announce

All milestone dates are **relative to the first day of the quarter for which planning is happening**. Several milestones in the cadence refer to artifacts that are defined in the [next section](#artifacts).

#### 7 weeks before

Prod/eng directors align on the **planning process** through review, adjustments, and final agreement on planning timelines and deliverables.

#### 6 weeks before

Prod/eng directors create **first draft Objectives** (KRs where possible)so that PMs & EMs have a filter to refine their roadmap items for the following quarter.

#### 5 weeks before

EMs & PMs make **first pass adjustments to future roadmap items** taking into consideration 1) the draft OKRs and 2) their team’s current work in progress.

#### 4 weeks before

Prod/eng directors refine goals, finalizing a **second draft of OKRs** that incorporates feedback from EMs, PMs, & VPs.

Prod/eng directors review the following quarter roadmap items to ensure what is tentatively planned drives towards our strategy. This review should identify gaps and dependencies between teams.

#### 3 weeks before

[Christina Forney](../team/index.md#christina-forney) shares the Draft OKRs with company leadership, confirming **exec team feedback & directional alignment** on objectives, key results and planned roadmap items.

#### 2 weeks before

Prod/eng directors incorporate executive feedback into the goals and **complete and communicate the final draft of OKRs** to team members.

#### 1 week before

Individual teams review, update, and make any **final roadmap updates** as needed.

Prod/eng directors work closely with teams on roadmap items ensuring planned work aligns with the strategic direction of the company and the quarterly objectives.

#### Quarter boundary

**Publish OKRs** - [Christina Forney](../team/index.md#christina-forney):

- Get exec team buy in and approve OKRs
- OKRs added to the handbook
- OKRs added to the Exec Google Slide deck
- OKRs added to the GitHub Tracker

**Communicate Roadmap Updates** - Prod/eng directors:

- Review / Update organization (code graph, cloud, enablement) strategy pages
- Share material roadmap changes with stakeholders (CE, marketing, sales, customers)
- Ensure [PMM deck](#monthly-pmm-roadmap-update) is up to date

#### First week of new quarter

**Kick off new quarter** - [Christina Forney](../team/index.md#christina-forney) & [Nick Snyder](../team/index.md#nick-snyder)

- Share previous quarter OKR scorecard to Product/eng department
- Communicate department OKRs
- Highlighting changes/additions to the roadmap for upcoming quarter at Company kick off

[End of quarter retrospective](#quarterly-department-retrospective) - Prod/eng directors

### Quarterly retrospective

Near the end of each quarter, the product/engineering VPs and Directors will get together for a retrospective. The purpose of this retrospective is to create a shared safe space for celebrating wins, learning, and improvement.

Before the retrospective we will:

- Solicit feedback from the broader product/engineering team
- Asynchronously write down thoughts on topics we may want to discuss during the retrospective. Prompts may include but aren't limited to:
  - What went well (wins) for yourself and for your team?
  - Did we accomplish what we said we were going to accomplish?
  - What didn’t go well (struggles and challenges) for yourself and for your team?
  - What did you and/or your team learn?
  - What should we start/stop/continue?

During the retrospective we will vote on what topics we want to discuss and then discuss those topics, and after the retrospective, we will share notes and action items in a public channel for transparency.

## Artifacts

### Annual prod/eng strategy

- **Purpose:** Provide direction and context on what we are planning on doing this year and why
- **Drivers:** [Christina Forney](../team/index.md#christina-forney) & [Nick Snyder](../team/index.md#nick-snyder)
- **Approvers:** [Quinn Slack](../team/index.md#quinn-slack)
- **Key input providers:** Prod/eng directors
- **Due date:** Provided in mid Q4 of previous FY (should be ready by Jan)
- **Form of artifact:**
  - While we are collaborating on the annual prod/eng strategy we will use a Google doc
  - Once the strategy is finalized it is added to the [Prod/Engineering Strategy page](../strategy-goals/index.md)

### Quarterly department OKRs

- **Purpose:** Track and communicate our strategic prod/eng goals
- **Drivers:** Prod/eng directors
- **Approvers:** [Christina Forney](../team/index.md#christina-forney) & [Nick Snyder](../team/index.md#nick-snyder)
- **Key input providers:** EMs, Customer Support Managers, & PMs
- **Due date:** By start of quarter the final department OKRs are updated in the artifacts below as well as communicated in #product-eng-directors; [6 weeks prior to the quarter boundary](#6-weeks-before) prod/eng OKRs are drafted
- **Form of artifact:**
  - While we are collaborating on quarterly department OKRs we will use a Google doc
  - Once quarterly OKRs are finalized they are documented in the following ways:
    - [Github tracker](https://github.com/sourcegraph/product-engineering-tracker/issues/65) is the source of truth for prod/eng OKRs and is updated weekly with progress
    - A [Prod/Eng dashboard slide](https://docs.google.com/presentation/d/1KUOElUkrH-29teXmZBmgmIgLngf-I_6Ikixub1SR0yM/edit#slide=id.g1122c1a30bf_10_0) in the Exec OKR Google Slide deck which is used to signal any critical updates on a weekly basis. An OKR progress review is done monthly
    - The [handbook OKR page](../../../strategy-goals/goals/index.md) captures a distilled version of OKRs and does not include status updates

### Roadmap tracker

- **Purpose:** Communicate to our teams and stakeholders what we plan to deliver in the quarter to move closer to our vision and achieve our OKRs.
- **Drivers:** EMs and PMs
- **Approvers:** Prod/eng directors
- **Key input providers:** All of product & engineering
- **Due date:** By start of quarter, roadmap deliverables for the next quarter are updated with a high degree of confidence including expected delivery dates; when the delivery date of a roadmap item is unknown, we will specify the end of the planned quarter
- **Form of artifact:**
  - The roadmap items in [Github dashboard](https://github.com/orgs/sourcegraph/projects/214/views/21) reflect the bodies of work we plan to complete in the upcoming quarter and are continuously updated through the planning process.
  - The [PMM deck](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gf131fe1596_2_7) will be updated at the quarter boundary to include changes in messaging as a result of planning.
  - [Team strategy pages](../../../strategy-goals/strategy/index.md#team-strategy-pages) are updated monthly to reflect the team’s strategic intent. In line with the monthly cadence these pages will be updated at the quarterly boundary to reflect any material changes to a team direction.
