# Planning process

This page describes how we define & continuously refine our product/engineering department level OKRs & roadmap to align and track progress towards our yearly strategy. Because planning is complex, we have a few baseline working agreements:

- We complete as much of the planning process as possible using async communication and collaboration (docs, slack, github, etc.)
- When we cannot drive a decision asynchronously we will schedule a meeting with the decision makers and key input providers. Decision makers are responsible for ensuring the outcome of the meeting is reflected in asynchronous artifacts
- Prod/eng directors drive creating quarterly department OKRs gathering input from their teams
- Changes/updates to OKRs can and should be made throughout the quarter when necessary
- Creation of roadmap items or updates to existing roadmap is owned by individual teams
- We rely on the EM & PM to communicate any significant changes in scope of work or delivery of work to the appropriate stakeholders

## Artifacts

Following are the key artifacts we use to represent the work we are doing.

### Annual prod/eng strategy

- **Purpose:** Provide direction and context on what we are planning on doing this year and why
- **Drivers:** [Christina Forney](../../../team/index.md#christina-forney) & [Nick Snyder](../../../team/index.md#nick-snyder)
- **Approvers:** [Quinn Slack](../../../team/index.md#quinn-slack)
- **Key input providers:** Prod/eng directors
- **Due date:** Provided in mid Q4 of previous FY (should be ready by Jan)
- **Form of artifact:**
  - While we are collaborating on the annual prod/eng strategy we will use a Google doc
  - Once the strategy is finalized it is added to the [Prod/Engineering Strategy page](../strategy-goals/index.md)

Sourcegraph has a top-level [strategy page](../../../strategy-goals/strategy/index.md) that describes in [narrative form](https://www.mindtheproduct.com/the-importance-of-narrative/) where the company is headed and why, what we want the product to be at the end of the year, trade-offs, and how we plan to achieve that strategically. This strategy is used to drive our annual prod/eng strategy

### Quarterly department OKRs

- **Purpose:** set directional strategy with clear outcomes for what our department will achieve. They communicate to our department and cross-functionally what we view as the most important themes we are focused on as a department this quarter.
  - Objectives:
    - Are high impact outcomes that we need to achieve for the business
    - Are inspiring
    - Are specific enough to provide alignment and context to make decisions, and also broad enough that multiple teams can contribute to it
    - Allow us to prioritize the work that is most important
  - KRs:
    - Are how we know we have achieved the objective
    - Are supported by a list of all the things that we will do in order to achieve the outcome we desire, including directly responsible individuals for each item
  - Objectives and KRs:
    - Are not necessarily meant to reflect commitments to other departments
    - Are not necessarily always cross-functional
    - Do not need to be relevant for ALL teams/orgs
    - Do not need to represent the sum of what everyone is doing
- **Drivers:** Prod/eng directors
- **Approvers:** [Christina Forney](../../../team/index.md#christina-forney) & [Nick Snyder](../../../team/index.md#nick-snyder)
- **Key input providers:** Engineering Managers, Customer Support Managers, Product Design Managers, and Product Managers
- **Due date:** By start of quarter the final department OKRs are updated in the artifacts below as well as communicated in #product-eng-directors; [6 weeks prior to the quarter boundary](#6-weeks-before) we begin drafting OKRs for the following quarter
- **Form of artifact:**
  - While we are collaborating on quarterly department OKRs we will use a Google doc
  - Once quarterly OKRs are finalized they are documented in the following ways:
    - [OKR Github tracker](https://github.com/sourcegraph/product-engineering-tracker/issues/65) is the source of truth for prod/eng OKRs and is updated weekly with progress. This is private because KRs frequently contain sensitive business metrics and customer names. Each KR has an associated GitHub issue following [this template](https://github.com/sourcegraph/product-engineering-tracker/issues/new?template=product-engineering-kr.md).
    - A [Prod/Eng dashboard slide](https://docs.google.com/presentation/d/1KUOElUkrH-29teXmZBmgmIgLngf-I_6Ikixub1SR0yM/edit#slide=id.g1122c1a30bf_10_0) in the Exec OKR Google Slide deck which is used to signal any critical updates on a weekly basis. An OKR progress review is done monthly
    - The [handbook OKR page](../../../strategy-goals/goals/index.md) is the sanitized public version of our OKRs. It captures a distilled version of our department OKRs and does not include status updates
- **Grading:** At the end of the quarter we grade both KRs and Objectives.
  - We grade KRs based on how they are worded at the end of the quarter. If our understanding of what success looks like changes throughout the quarter, then we need to update KR definitions before the end of the quarter.
  - After we grade the KRs individually, we review whether we subjectively achieved the objectives or not.
  - Rubric
    | Status | Description |
    | ------------- | -------------------------------------------- |
    | 🟢 | We achieved success (90-100% completion for non-binary outcomes) |
    | ⚠️ | We achieved partial success (75–89% completion for non-binary outcomes) |
    | 🛑 | We did not achieve success (<75% completion for non-binary outcomes) |

Our philosophy on goal setting as well as a view into our history of goals is [published in our handbook](../../../strategy-goals/goals/index.md).

### Roadmap

- **Purpose:** The purpose of our roadmap is to communicate to our team and our customers the story of what we plan to deliver to achieve our our annual vision and quarterly OKRs. Expectations around roadmap items depend on how far in the future we expect them to happen. Our goal is to have high confidence and fidelity in our roadmap for the next 3 months on a rolling basis, and for it to contain our best approximation for the biggest milestones we want to hit over the next 12 months on a rolling basis. The roadmap should always reflect the realistic expectations of the team:
  - Don't invent roadmap items that the team has low confidence in just to fill space on the roadmap (at the same time it is important for teams to challenge themselves to think about what they want to aim to accomplish over a time horizon longer than one quarter).
  - Don't provide false precision on dates (if you can only place items into a quarter or month, that is fine)
  - Don't include stretch roadmap items (just adjust the timeline out so you don't feel the need to label something as "stretch")
- **Drivers:** Engineer Managers & Product Managers
- **Approvers:** Prod/eng directors
- **Key input providers:** All of product & engineering
- **Due date:** By start of quarter, roadmap deliverables for the next quarter are updated with a high degree of confidence including expected delivery dates; when the delivery date of a roadmap item is unknown, we will specify the end of the planned quarter
- **Form of artifact:**
  - Internal tactical roadmap: The source of truth for our roadmap with the tactical work is [this GitHub project](https://github.com/orgs/sourcegraph/projects/214). Each roadmap item should link to an issue that follows [this template](https://github.com/sourcegraph/sourcegraph/issues/new?template=roadmap-issue.md), and teams should keep the delivery plan portion of the template up-to-date and post updates to the issue anytime something important happens (ex: milestone achieved, plan changed).
  - WIP public strategic roadmap: we are working on a public roadmap that is more strategic and higher level.
    - [Team strategy pages](../../../strategy-goals/strategy/index.md#team-strategy-pages) are updated monthly to reflect the team’s strategic intent. In line with the monthly cadence these pages will be updated at the quarterly boundary to reflect any material changes to a team direction.
  - The [PMM deck](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gf131fe1596_2_7) will be updated at the quarter boundary to include changes in messaging as a result of planning.

## Cadence

Planning is made up of activities that happen on quarterly, monthly, & weekly basis.

### Quarterly planning

The main planning activity has several milestones oriented around the quarter boundary. To streamline communication on deliverables in this timeline we:

- Use the #product-eng-planning to initiate collaboration on planning activities
- We will leverage collaboration tools native to each artifacts system of record to collaborate on content
- When we deliver drafts that need communicated for broad review / awareness we will post to #product-eng-announce

**FY23-Q2 planning due dates and artifacts**

The following timeline gives due dates for KR and roadmap planning as a reference and source of truth for this quarter. This section will be kept up-to-date then deleted or updated for the next quarter.

2022-04-11 Monday

- Company OKRs finalized
- Dept KR review
- DUE: Team roadmaps up to date, with broad strokes and alignment to use cases and company objectives (needed for CAB roadmap session dry run)

2022-04-18 Monday

- Dept KR review

2022-04-22 Friday

- DUE: Final draft Dept KRs to [Christina Forney](../../../team/index.md#christina-forney)
- DUE: Team roadmaps solidified for Q2, with high level Q3 & Q4

2022-04-25 Monday

- DUE: Final draft Dept KRs due to Exec team

2022-04-26 Tuesday

- DUE: Public roadmap published
- Final OKR signoff by [Quinn Slack](../../../team/index.md#quinn-slack)

2022-05-03 Tuesday

- Q2 Company kickoff

**Expectations of planning process**

- Discussion by teams: “What can we do in support of these objectives?”
- Directors gather input from teams and cross-functional partners
- Directors synthesize input to write KRs; collaborating to reach final alignment on Dept KRs
- Teams ensure roadmaps are updated in support of annual strategy, cross-functional input, and to achieve our KRs
- Directors ensure that across teams, the collective work of our teams (roadmaps) will deliver on our strategy and OKRs

**Publish OKRs** - [Christina Forney](../../../team/index.md#christina-forney):

- Get exec team buy in and approve OKRs
- OKRs added to the handbook
- OKRs added to the Exec Google Slide deck
- OKRs added to the GitHub Tracker

**Communicate Roadmap Updates** - Prod/eng directors:

- Review / Update organization (code graph, cloud, enablement) strategy pages
- Share any material roadmap changes with stakeholders (CE, marketing, sales, customers)
- Ensure [PMM deck](#monthly-pmm-roadmap-update) is up to date

#### First week of new quarter

**Kick off new quarter** - [Christina Forney](../../../team/index.md#christina-forney) & [Nick Snyder](../../../team/index.md#nick-snyder)

- Share previous quarter OKR scorecard to Product/eng department
- Communicate department OKRs
- Highlighting changes/additions to the roadmap for upcoming quarter at Company kick off

#### Quarterly retrospective

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

### Mid-quarter adjustments

When we discover OKRs or roadmap items are not aligned with our most pressing ambitions and most critical outcomes, we should rethink and rearticulate our focus to ensure our teams are working on the most important things.

Signs that we should consider changing our plan:

- We are getting distracted by things which feel more important but aren’t supporting our plan
- We received new information that feel in opposition to our plan
- We baselined a metric and it becomes less clear how to have an impact.

We shouldn’t be afraid to have these important discussions and question whether or not we are focusing on the most important things. If we do decide to make any changes (tweak a target, reword/replace something, or drop an item entirely), we will treat this as a valuable learning exercise and opportunity to improve alignment with our teams and stakeholders

To change something material mid quarter here are the steps:

- Raise the discussion in our #product-eng-directors slack channel to discuss async
- When an async conversation is no longer moving a decision along schedule a synchronous conversation with all impacted stakeholders
- If the change is to an OKR:
  - Gather feedback and consensus from rest of team and determine if we want to change the OKR or completely remove it
  - Gain approval from Nick/Christina; if necessary, gain alignment or simply bring awareness to change at Exec Meeting
- Update the associated artifact and communicate change in appropriate Slack channels #prod-eng-announce, etc.

### Monthly team newsletters

Team newsletters communicate a high-level narrative/summary to the rest of the company about what each team in product/eng accomplished since the last newsletter and what is up next. The engineering manager of each team is responsible for sending an update to [engineering-team-status@sourcegraph.com](https://groups.google.com/a/sourcegraph.com/g/engineering-team-status) by the end of the week that contains the first day of each month. EMs may delegate to someone else on the team to send the update.

- The email subject should contain the team name and the date (for example: "Search update 2020-10-14") so each update starts a distinct email thread (otherwise, they get grouped in the Google Groups UI).
- There is no strict format to follow for the content, but here are some tips:
  - Favor prose over a list of changes.
  - Be brief and link to details.
  - Consider sharing wins, challenges, risks, plans, lessons learned.
  - Inline relevant screenshots/demos/gifs/charts when possible so it isn't just a wall of text.
  - Be creative and have fun with it! Jokes and random fun facts are welcome.

### Monthly plan reviews

An important part of keeping planning simple is to make incremental updates throughout each quarter.

Each PM should update the [PMM roadmap deck](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gf131fe1596_2_7) (internal only), review their roadmap items, and review their [team strategy pages](#strategy) at the same time. The PMM deck contains a manually updated copy of the current plan, plus recently launched important customer-facing features from the [roadmap tracker](https://github.com/orgs/sourcegraph/projects/214/views/21) (so be sure the [roadmap tracker](#roadmap) and [feature data](../product/process/index.md#product-data) is also updated at this point, if you haven't already).

Be sure to @ mention your engineering, design, product marketing, and any other important partners for feedback in your monthly update PRs. Engineering should feel empowered to bring up that they feel strongly about in conversations with product. [We want to push decisions down to people closest to those problems](../../../company-info-and-process/communication/decisions.md#what-makes-an-effective-decision). It is product's responsibility to help give insight into customer pains and feedback, strategic priorities, and to ensure consistency across the product.

Updates and highlights of what has changed are shared in #prod-eng-announce Slack channels and also on an on org-basis (cross-team feedback within an org is important). Surface large changes to the rest of the Director/VP team to have appropriate discussions and tradeoffs as necessary.

### Weekly OKR updates

The DRI (directly responsible individual) for each OKR is responsible for posting an update to the associated tracking issue by 19:00 UTC each Friday. To post an update, create a new comment with the following details:

- Forecasted grade for the KR at the end of the quarter: 🟢, ⚠️, 🛑.
- Short description of why the forecast is what it is. Here are some example questions to consider (not every question here is relevant to every update):
  - What gives us confidence we're on track?
  - What recent progress have we made?
  - For numeric goals, what is the current state of the metric and the trend line?
  - What has slowed us down?
  - What are the risks looking ahead?
  - What are next steps (and who is owning those steps)?
  - What can be done to get this KR back on track?
