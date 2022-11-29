# Code Insights team processes

There is no such thing as a team without processes, only teams with undocumented processes. Therefor, we prefer to document the way we do things, and evolve it over time!

We share the [Engineering processes](../index.md#processes), plus the following for our team.
We use our [bi-weekly retrospective](#retrospectives) to identify any tweaks we should make that would improve our process.

## Weekly sync

The team holds weekly syncs.

The meeting notes of team syncs can be found [our sync meeting notes Google Doc](https://docs.google.com/document/d/1cftSl8GMuw4uUv91wpgpMCPB8BFJ28dd3FojBYDB4rI/edit).

Before team syncs, teammates and stakeholders should write down under "Agenda" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.
Attendees are encouraged to add comments on talking points asynchronously before the meeting too.

## Planning and prioritization

We plan and track our day-to-day work on our [GitHub board](https://github.com/orgs/sourcegraph/projects/291/views/1). This board follows the philosophy of trying to reflect reality as best as possible. Flexibility is a key component of how to use this board and it should support making decisions that align the team and allow us to move forward with our work.

The board is organized around a priority structure where P0 is the most important column and P2 is the least important, followed by the backlog. Issues in the P0-P2 priority pipeline are issues that are planned for work. The backlog is for issues to go that are not currently prioritized but are still loosely on the product roadmap.

Issues can freely move between priority columns as required. For example, if something important shows up in triage it will likely knock other things out of upcoming priority.

Ideally every ticket that moves into P0 is work that someone is actually going to do (assigned to someone) and has a size estimation. It is less important than issues cleanly "fit" in an iteration and more important that everyone clearly understands the priority of our work and what they are working on.

There is a grab column that is for "grab-and-go" style organization. These are issues that are mostly technical in nature and generally do not make sense to try and prioritize against feature work. These issues are free to grab whenever capacity allows.

The triage column is the default column and represents issues that have not yet been assigned a column.

Our current process is as follows:

- We work in **2-week iterations**.

- Incoming tickets are added to the [GitHub project](https://github.com/orgs/sourcegraph/projects/291/views/1) automatically when they are labelled <span class="badge" style="background: var(--bs-teal)">team/code-insights</span> and will be visible in the triage column.

- **While an iteration is ongoing, we plan the next iteration**. This is a mostly asynchronous process.

  - Anyone can add issues to the triage column before the Thursday iteration planning. Issues will be triaged and sorted into priority columns. Issues that are going to be worked on immediately will receive an assignee and a rough estimate before moving into P0.

    - If **technical exploration** is needed to get more information, a _spike_ (a time-boxed investigation task meant to facilitate more granular planning) can be proposed for the next iteration instead to get that information.
    - Estimations **include the testing time necessary** to fully test an issue against test plans or test cases defined in the issue.

  - Often, planning work involves RFCs or designs that require engineering input. For this process:

    - The goal of a product-manager-created RFC is to arrive at scoped outcomes for either designs or engineering: this is collected in a "Decisions for Design" or "Decisions for Engineering" section.
    - At this point, the engineering project lead or designer becomes the driver for taking the work through its next stage. For engineering, this may optionally involve an engineering RFC or a new implementation discussion among engineers on the existing RFC. For design, this usually involves Figma mocks. From those stages, the respective project lead or designer and engineers can create GitHub issues to put into proposed.
    - Although discussions and project scope can vary, the rough average goal timeline for this process is:
    - 0.5-1 week: product RFC and discussion
    - 1-1.5 weeks: designs or engineering implementation discussion and issue creation

- During an iteration, teammates **work on their assigned issues for the iteration in the order they are listed** in the ["Current iteration" view](https://github.com/orgs/sourcegraph/projects/200/views/1) of the board. When starting work on a task, the teammate **updates its status column to "In Progress"** to communicate it to their team. This gives a good overview in the ["Current iteration" view](https://github.com/orgs/sourcegraph/projects/200/views/1), which can also be viewed in [Kanban layout](https://github.com/orgs/sourcegraph/projects/200/views/1?layout=board), on how the iteration is tracking.

- If one or more issues that were planned for an iteration are looking to **not get finished** (which includes testing) in the current iteration (while maintaining sustainable work practices) the assignee **raises this as soon as possible asynchronously** to the team (including the PM and EM), e.g. on the GitHub issue or Slack.

## Design planning and process

Design issues use the same planning structure and can be identified using the the [needs design view](https://github.com/orgs/sourcegraph/projects/291/views/2)

1. Anyone on the team can create issues for things that need designs. These issues should be tagged with `needs-design`.
1. Design issues do not need to, and often do not, follow 2-week iteration cycles. It is up to the designer when to start or make progress on various design projects _within the constraints_ that designs are complete by the end of the tagged iteration. So, a larger 4-week project to be completed three iterations (in six weeks) away might be started before smaller 1-week project that only needs to be completed by a date four weeks in the future, and that's fine.
1. The product manager, engineering manager, and designer meet synchronously once a week to review the design board, which requires aligning on proposed updates and re-prioritizing if over capacity.
   1. To propose an update or add a design issue, an issue labelled `needs-design` should be created. In the sync, the triad will review all "needs-design" issues and either align that the priority and timeline works.
1. Issues tagged `needs-design` should only ever have the designer assigned. We do not un-assign the designer and then re-assign engineers; we move the issue to done and create new engineering issues. We do this because:
   1. Past experience has taught us that this causes confusion as to the status of an issue, as it's possible for an issue to from "in progress" on design back to "todo" on engineering.
   1. Often, designs are larger than a single engineering issue and we want to default to engineers breaking up a project into smaller items, rather than reusing a larger and imperfect issue.
1. During the design phase, the Designer creates and maintains a design changelog that is available as a separate Figma page and is linked from the main design issue. The design changelog is created to keep track of the key or pivotal design decisions for a given project as well as the reasoning behind them.
   1. The design changelog is primarily useful for big projects. Smaller issues may not require creating the changelog.
   1. When re-opening the discussion about the past design decision, please read the design changelog first to make sure that your point wasn't addressed earlier and that new information came to light that warrants reconsidering the decision.

## Project Leads

Larger projects, especially ones that involve multiple domains, may benefit from a "project lead". A project lead assumes full responsibility for gathering all requirements to complete a project. The project lead is expected to have full understanding of the issue and pull in any resources or team members needed to complete the task.

### Time commitment

Being a project lead takes a bit more time than just working on a single issue. If you are a project lead then your capacity will be reduced. Project leads should make sure to take this into consideration when planning other iteration work.

### Responsibilities

1. Be the first point of engineering contact for product and design
1. Have a full understanding of the requirements and the work that needs to be done across the frontend and backend. The main benefit here is catching any misunderstandings or integration issues before they happen.
1. Keep an eye on progress and be proactive about raising blockers or delays.
1. Help define the testing plan.

### Tracking project leads

A project requiring a lead will most likely require multiple issues to complete. The project lead should create a tracking issue for these and clearly state who the lead is in the issue.

## How we think about issue sizes

When sizing an issue please keep in mind the size includes the entire lifecycle of the issue. The coding, any testing both automated and manual, as well as PR reviews and documentation.

When thinking about the size of an issue we try to stay away from actual time estimates. Generally, 1 and 2 sizes should be considered small. 3 and 5 are medium issues. 8 and 13 can be considered large issues. Any number larger than 13 can be considered significantly large, and possibly could represent a small project.

While there is no "maximum" number, once we get higher than a 13 in size it will probably prompt some discussion or at least need some explanation in the issue.

### Examples

- 1: A small issue that you completely know the entire solution and are 100% confident in the scope. You have no questions and no dependencies on other teammates. There aren't any tests that need writing. Fixing a typo, updating copy, or very minor CSS changes would most likely all be 1s.
- 2: You still know the full scope of your solution and have no dependencies. But the change is more logic-based than a simple text update. Something like removing a feature flag and all accompanying code. This could be a simple change but may take more effort in asserting the change is successful. i.e. manually testing the change.
- 3: The scope is still generally understood, but some discovery may need to happen during coding. Any tests already exist for this section of code and only need basic updates if any. The resulting PR is pretty small and could be reviewed quickly by a teammate.
- 5: Like 3, but may need more discovery. Or maybe there are no tests for this part of the code yet so you have to start from scratch.
- 8: The solution is vaguer and may need some input from outside of your own personal domain. For example, a change to the UI requires more data from the backend. Now we need some input from several domains (frontend and backend) plus resulting tests and approvals.
- 13: At this point, the solution probably requires multiple domains and possibly multiple teams. The solution may need a great deal of discovery or follow-up activities. Maybe we need a full E2E test to have confidence or large volumes of documentation. PR reviews at this size will probably take multiple hours for teammates to review.
- Beyond size 13 the issue probably needs to be broken down more or given a spike. But not always! Some problems are just hard and that's ok, but we document the reasoning behind it so that everyone understands why.

### Fortnightly iteration planning

Every two weeks, usually on the Thursday before the next iteration begins, we hold an iteration planning. This is a sync meeting to triage new issues according to priority, review the priority of issues that are still in progress, and review the priority of issues already in the upcoming pipeline.

The goal of the meeting is to produce a sorted priority of issues such that each column is entirely more important than the last.

### Releases

Despite following two-week iterations, our [releases are monthly on the 22nd](../../dev/process/releases/index.md#releases) and we may sometimes need to order tasks in a way that we can get important projects into the next release.

### Planning larger projects

Larger (usually multi-iteration) projects coming from our roadmap go through three phases. <small>_(Note that these three phases are the **team collaboration** phases, but there are often additional individual phases like design research processes or technical research that may come before phase 1.)_</small>

1. **Product context and scope agreement** (usually 1–2 weeks)<br>
   The PM (or other driving individual) creates a product-level RFC summarizing user desires from feedback and proposes a reasonable timeline to reach a scope agreement (mentioned in the RFC).
   Engineers, designer (as applicable), PM, and EM discuss the needs in the RFC and the feasibility/complexity of different options.
   **The goal of this phase is to agree on a scope for the project**, which will generally be a _subset_ of the desires the PM/driver outlined in the RFC based on the implementation complexity, how long it would roughly take to implement, and how much time we want to dedicate to the project.
   After discussion, the agreed-upon scope is recorded in a section at the bottom of the RFC.

2. **Design and implementation planning** (usually 1–2 weeks)<br>
   For a UI project, our designer will create wireframes and designs which are reviewed and discussed by all teammates in Figma.
   Similarly, engineers will make a proposal for the needed GraphQL APIs (e.g. in an RFC) and agree on the API shape, think the implementation through, and create concrete implementation sub-tasks with estimates, testing plans, and a label collecting them.
   The goal of this phase is to be "ready to go" for the implementation phase – having a plan (with reasonable confidence) that only needs to be executed.

3. **Implementation and testing** (usually 1–4 weeks)<br>
   Engineers execute on the implementation plan, putting a set of issues from the project into each iteration.
   This also includes that each sub-implementation-task is sufficiently tested, meaning by the end of this phase the project is ready to ship to customers with confidence.
   When we are in testing phases, we prefer to make small issues for each problem discovered, and err on the side of too many testing issues (with duplicates, which are easy to close) rather than not filing something because we are worried about duplicates.

We sequentialize and parallelize projects in a way that we can _plan_ projects (step 1 and 2) while another project is currently being _implemented_, so that we always have the next project ready to be implemented by the time a project has finished implementation.
We will however make sure to never have multiple projects in planning phase at the same time, as this leads to cognitive overload while also delivering on an implementation for another projects.
This means a teammate may have to think at most about 2 projects at any given time: one that is being implemented, and one that is being planned, and a teammate will never have to implement more than one larger project at the same time.

<object data="project_planning.svg" width="1100" height="263" aria-label="Diagram showing three example projects going through all three project phases, with each product and design phase in parallel to the implementation phase of the previous project."></object>

#### Project Tracking

To track projects that span multiple iterations we use tracking issues and a project specific label.
The project specific label is created by any of the teammates, and should be descriptive enough to clearly indicate which project it is for, e.g. <span class="badge bg-info">insights-dashboards-v1</span> (milestones are not used for this, as they are used for iterations).

Suffixes like **v1** can be used to communicate we are aiming for an initial, well-defined scope to avoid scope creep.
Further improvements are either tracked as individual tasks in iterations, or if a new, larger, multi-iteration improvement, a new project is created with a new label.

## Product Feedback

Specific product feedback about well-defined, small features can be found directly in the [GitHub board](https://github.com/orgs/sourcegraph/projects/200/views/7).
More general product feedback that applies to larger features, or that needs more research and planning to be actionable, is kept in [Productboard](https://sourcegraph.productboard.com/feature-board/1793095-code-insights).

## Retrospectives

Every two weeks, we hold a review/retrospective meeting to reflect on the past two weeks. We use this meeting to:

- Review the previous retro’s action items to ensure they get completed
- Give _Shoutouts!_ to teammates to show appreciation for something they did that we appreciated
- Discuss things that went well in the past two weeks and that we should do more of / invest more into it
- Discuss the things that could have gone better and what we can learn from it to improve
- Talk about processes that we should revisit/refine/propose to improve our efficiency.

We capture and assign actions to individual teammates. Teammates should consider actions coming out of the retrospective as a very high priority.

Teammates contribute to the retrospective asynchronously during the iteration by adding their thoughts to our [retrospective document](https://docs.google.com/document/d/13MrQ5pZnvqBvWcsw8TcKSpDA2E9iR7YSL7dWr89mhDs/edit).
Teammates are highly encouraged to comment on points raised before the sync meeting in the document.

We rotate who leads the retrospective to allow all teammates an opportunity to lead the session.
Teammates can find the rotation schedule at the top of the [retrospective document](https://docs.google.com/document/d/13MrQ5pZnvqBvWcsw8TcKSpDA2E9iR7YSL7dWr89mhDs/edit).

## Code reviews

The team follows the [default code review guidelines](https://docs.sourcegraph.com/dev/background-information/pull_request_reviews#reviewing-pull-requests) with the following addition:

1. If the author would like any of the requested reviewers to merge the PR after approval they add the label **merge-on-any-approve**
2. If the author would like their PR to be merged once all of the requested reviewers have approved it they add the label **merge-on-all-approve**
3. When there are only minor issues, reviewers are encouraged to give "approval with comments" and trust their teammates to address the comments without requiring a follow-up review.
4. If there are any user-facing UI changes the author requests a review from the designer.

## Support rotation

The team currently follows a support rotation that is intended to allow a single engineer to dedicate time towards supporting customer issues. This support rotation will automatically update based on an [OpsGenie schedule](https://sourcegraph.app.opsgenie.com/settings/schedule/detail/72b2d9c8-8e48-4681-8914-908ead78dd8c) and can be contacted with the @code-insights-support Slack tag. This support rotation is currently intended to be a work hours rotation, instead of on-call.

If the teammate on support duty has time off during their turn, someone else on the team will swap with them or cover. OpsGenie allows to add an override in these cases.
It's the support engineer's responsibility to reach out proactively, find someone to swap with or cover and add the override.

The engineer assigned to the support rotation is responsible for:

1. Responding to and triaging escalations from other teams (for example: [customer support](../../../technical-success/support/index.md), or [security](../../../security/index.md))
2. Performing a best-effort resolution of the issue
   1. This means even if someone doesn't have much knowledge or context about some parts of the system, they are still responsible to try and solve the problem before escalating to other engineers on the team
   2. This could mean searching documentation, asking questions to other engineers, experimenting with the product, or any other means at your disposal to try and solve the problem
   3. As a reminder, it is better to reach a high quality resolution for our customers, even in high priority escalations. It is acceptable (and expected) to push back on support escalations if you need more time to understand and formulate an answer.
3. Updating any documentation that may help others understand and solve the issue
