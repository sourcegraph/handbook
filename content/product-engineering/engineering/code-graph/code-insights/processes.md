# Processes

There is no such thing as a team without processes, only teams with undocumented processes. Therefor, we prefer to document the way we do things, and evolve it over time!

We share the [Developer Insights org's processes](../index.md#processes), plus the following for our team.
We use our [bi-weekly retrospective](#retrospectives) to identify any tweaks we should make that would improve our process.

## Weekly Sync

The team holds weekly syncs.

The meeting notes of team syncs can be found [our sync meeting notes Google Doc](https://docs.google.com/document/d/1cftSl8GMuw4uUv91wpgpMCPB8BFJ28dd3FojBYDB4rI/edit).

Before team syncs, teammates and stakeholders should write down under "Agenda" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.
Attendees are encouraged to add comments on talking points asynchronously before the meeting too.

## Planning and prioritization

We plan and track our day-to-day work on our [GitHub board](https://github.com/orgs/sourcegraph/projects/200/views/1).
The project is separated into multiple views: **Current iteration**, **Next iteration** (both grouped by issue status) and **All iterations** (grouped by milestone).

Our current process is as follows:

- We work in **2-week iterations**. Every iteration has a GitHub milestone, which is created at least one iteration in advance.

- Incoming tickets (from team members or from other teams) are added to the [GitHub project](https://github.com/orgs/sourcegraph/projects/200/views/1) automatically when they are labelled <span class="badge" style="background: var(--bs-teal)">team/code-insights</span> and will be visible in the ["All issues" view](https://github.com/orgs/sourcegraph/projects/200/views/7) under "No milestone". This represents our **backlog** of _unscheduled_ work.

- **While an iteration is ongoing, we plan the next iteration**. This is a mostly asynchronous process.

  - Engineers, designer, PM and EM **_propose_ issues to be worked on** the week _before_ the mid-iteration [Monday sync](#weekly-sync) by adding them to the next iteration milestone and setting "Status" to "Proposed". This is done considering our [higher-level goals and roadmap](../../../../company/strategy/code-graph/code-insights/index.md).

    - The issue should also have its **_Estimate_ column filled out**, so that it can be evaluated whether it fits into the iteration. If the proposer lacks the information to estimate the issue, they reply on the issue in GitHub or raise it in our Slack channel to get the missing information or get an estimate from the appropiate person. Teammates may also discuss this in ad-hoc synchronous meetings if beneficial. An assignee may also already volunteer or be proposed, but this may still be changed at the [Monday sync](#weekly-sync) to distribute workload.
      - If **technical exploration** is needed to get more information, a _spike_ (a time-boxed investigation task meant to facilitate more granular planning) can be proposed for the next iteration instead to get that information.
        - Estimations **include the testing time necessary** to fully test an issue against test plans or test cases defined in the issue.

  - As much as possible, the proposer **involves the necessary stakeholders _asynchronously_ to get agreement** on whether the issue should be worked on in the next iteration before the [Monday sync](#weekly-sync). For example, the PM or EM might ping engineers in GitHub or Slack on whether an issue seems feasible, or engineers might ping their EM and PM to get buy-in whether the issue fits into our goals.<br>
    If a task needs synchronous discussion with a smaller group than the whole team, teammates are encouraged to meet synchronously in a smaller group to have more clarity before the mid-iteration [Monday sync](#weekly-sync).

  - Teammates can **_reorder_ proposed issues** on the ["Next iteration" board](https://github.com/orgs/sourcegraph/projects/200/views/4) before the mid-iteration sync to their liking. The order at the time of the mid-iteration Monday sync is the _proposed order_.

  - At the mid-iteration [Monday sync](#weekly-sync), we take a look at the proposed issues together on the ["Next iteration" view](https://github.com/orgs/sourcegraph/projects/200/views/4) to **reach agreement** on the **set** of iteration issues, their **assignees**, and **order**, taking into account our [goals and roadmap](../../../../company/strategy/code-graph/code-insights/index.md), technical aspects, estimates, workloads on individuals, and release dates (the 20th of every month).<br>
    As a rule of thumb, the sum of estimates for each individual should not exceed **8 days** (out of a 10-work-day iteration) so we have enough buffer, time to reply to asks from other teams, to plan the next iteration's projects, and self-organized slack time.

- During an iteration, teammates **work on their assigned issues for the iteration in the order they are listed** in the ["Current iteration" view](https://github.com/orgs/sourcegraph/projects/200/views/1) of the board. When starting work on a task, the teammate **updates its status column to "In Progress"** to communicate it to their team. This gives a good overview in the ["Current iteraton" view](https://github.com/orgs/sourcegraph/projects/200/views/1), which can also be viewed in [Kanban layout](https://github.com/orgs/sourcegraph/projects/200/views/1?layout=board), on how the iteration is tracking.

- If one or more issues that were planned for an iteration are looking to **not get finished** (which includes testing) in the [current iteration](https://github.com/orgs/sourcegraph/projects/200/views/1) (while maintaining sustainable work practices) the assignee **raises this as soon as possible asynchronously** to the team (including the PM and EM), e.g. on the GitHub issue or Slack. These issues then **become _proposed_ issues for the next iteration** (meaning nothing carries over automatically, but we also don't just drop and forget missed issues).

### Releases

Despite following two-week iterations, our [releases are monthly on the 20th](../../releases/index.md#releases) and we may sometimes need to order tasks in a way that we can get important projects into the next release.

We also intentionally plan so we can avoid merging significant work less than two days before a release (if a release is on the 20th, our last day to merge is the 18th). Exceptions require explicit approval of both the PM and EM.

### Planning larger projects

Larger (usually multi-iteration) projects coming from our roadmap go through three phases. <small>_(Note that these three phases are the **team collaboration** phases, but there are often additional individual phases like product/design research processes or technical research that may come before phase 1.)_</small>

1. **Product context and scope agreement** (usually 1-2 weeks)<br>
   The PM (or other driving individual) creates a product-level RFC summarizing user desires from feedback and proposes a reasonable timeline to reach a scope agreement (mentioned in the RFC).
   Engineers, designer (as applicable), PM, and EM discuss the needs in the RFC and the feasibility/complexity of different options.
   **The goal of this phase is to agree on a scope for the project**, which will generally be a _subset_ of the desires the PM/driver outlined in the RFC based on the implementation complexity, how long it would roughly take to implement, and how much time we want to dedicate to the project.
   After discussion, the agreed-upon scope is recorded in a section at the bottom of the RFC.

2. **Design and implementation planning** (usually 1-2 weeks)<br>
   For a UI project, our designer will create wireframes and designs which are reviewed and discussed by all teammates in Figma.
   Similarly, engineers will make a proposal for the needed GraphQL APIs (e.g. in an RFC) and agree on the API shape, think the implementation through, and create concrete implementation sub-tasks with estimates, testing plans, and a label collecting them.
   The goal of this phase is to be "ready to go" for the implementation phase – having a plan (with reasonable confidence) that only needs to be executed.

3. **Implementation and testing** (usually 1-4 weeks)<br>
   Engineers execute on the implementation plan, putting a set of issues from the project into each iteration.
   This also includes that each sub-implementation-task is sufficiently tested, meaning by the end of this phase the project is ready to ship to customers with confidence.

We sequentialize and parallelize projects in a way that we can _plan_ projects (step 1 and 2) while another project is currently being _implemented_, so that we always have the next project ready to be implemented by the time a project has finished implementation.
We will however make sure to never have multiple projects in planning phase at the same time, as this leads to cognitive overload while also delivering on an implementation for another projects.
This means a teammate may have to think at most about 2 projects at any given time: one that is being implemented, and one that is being planned, and a teammate will never have to implement more than one larger project at the same time.

<object data="project_planning.svg" width="1100" height="263" aria-label="Diagram showing three example projects going through all three project phases, with each product and design phase in parallel to the implementation phase of the previous project."></object>

#### Project Tracking

To track projects that span multiple iterations, we make use of a distinct project specific label and a separate tab of the [GitHub project board](https://github.com/orgs/sourcegraph/projects/200).
The project specific label is created by any of the teammates, and should be descriptive enough to clearly indicate which project it is for, e.g. <span class="badge bg-info">insights-dashboards-v1</span> (milestones are not used for this, as they are used for iterations).

Suffixes like `v1` can be used to communicate we are aiming for an initial, well-defined scope to avoid scope creep.
Further improvements are either tracked as individual tasks in iterations, or if a new, larger, multi-iteration improvement, a new project is created with a new label.

Individual tasks of the project are assigned to iterations using milestones.

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

The team follows the [default code review guidelines](https://docs.sourcegraph.com/dev/background-information/code_reviews) with the following addition:

1. If the author would like any of the requested reviewers to merge the PR after approval they add the label `merge-on-any-approve`
2. If the author would like their PR to be merged once all of the requested reviewers have approved it they add the label `merge-on-all-approve`
3. When there are only minor issues, reviewers are encouraged to give "approval with comments" and trust their teammates to address the comments without requiring a follow-up review.
