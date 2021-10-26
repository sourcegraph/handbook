# Processes

We consider this page to be a living document for all our internal processes. Our processes evolve and change over time to fit business and team needs.

## Sprint Review

The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations.

During the event, we review what was accomplished in the Sprint and what has changed in their environment. Based on this information, attendees collaborate on what to do next. The Product Backlog may also be adjusted to meet new opportunities.

The meeting notes of Sprint Reviews can be found [our Sprint Review Google Doc](https://docs.google.com/document/d/1hInzQAVjaBuFz9VKtNlh-dCQE12n2waidSCt_3c6Vlg/edit?usp=sharing).

## Planning and prioritization

We plan and track our day-to-day work on our [GitHub board](https://github.com/orgs/sourcegraph/projects/213/views/1).
The project is separated into multiple views: **Current iteration**, **Next iteration** (both grouped by issue status) and a separate board for each workstream (IDE, Browser Extensions, etc).

Our current process is as follows:

- We work in **2-week iterations**. Every iteration has a GitHub milestone, which is created at least one iteration in advance.

- Incoming tickets (from team members or from other teams) are added to the [GitHub project](https://github.com/orgs/sourcegraph/projects/213/views/1) automatically when they are labelled <span class="badge" style="background: var(--bs-teal)">team/extensibility</span> and will be visible in the ["To Triage" view](https://github.com/orgs/sourcegraph/projects/213/views/10).

- **While an iteration is ongoing, we plan the next iteration**. This is a mostly asynchronous process.

  - Engineers, designer, PM and EM **_propose_ issues to be worked on** _before_ the Planning Sync by adding them to the next iteration milestone and setting "Status" to "Proposed".

  - As much as possible, the proposer **involves the necessary stakeholders _asynchronously_ to get agreement** on whether the issue should be worked on in the next iteration before the Planning Sync. For example, the PM or EM might ping engineers in GitHub or Slack on whether an issue seems feasible, or engineers might ping their EM and PM to get buy-in whether the issue fits into our goals.

  - Teammates can **_reorder_ proposed issues** on the ["Next iteration" board](https://github.com/orgs/sourcegraph/projects/213/views/2) before the Planning Sync to their liking. The order at the time of the Planning Sync is the _proposed order_.

  - At the Planning Sync, we take a look at the proposed issues together on the ["Next iteration" view](https://github.com/orgs/sourcegraph/projects/213/views/2) to **reach agreement** on the **set** of iteration issues, their **assignees**, and **order**, taking into account our goals and roadmap, technical aspects, estimates, workloads on individuals, and release dates.

- During an iteration, teammates **work on their assigned issues for the iteration in the order they are listed** in the ["Current iteration" view](https://github.com/orgs/sourcegraph/projects/213/views/1) of the board. When starting work on a task, the teammate **updates its status column to "In Progress"** to communicate it to their team. This gives a good overview in the ["Current iteraton" view](https://github.com/orgs/sourcegraph/projects/213/views/1), which can also be viewed in [Kanban layout](https://github.com/orgs/sourcegraph/projects/213/views/1?layout=board), on how the iteration is tracking.

- If one or more issues that were planned for an iteration are looking to **not get finished** (which includes testing) in the [current iteration](https://github.com/orgs/sourcegraph/projects/213/views/1) (while maintaining sustainable work practices) the assignee **raises this as soon as possible asynchronously** to the team (including the PM and EM), e.g. on the GitHub issue or Slack. These issues then **become _proposed_ issues for the next iteration** (meaning nothing carries over automatically, but we also don't just drop and forget missed issues).

### Releases

For IDE Extensions and Browser Extensions, we release at the end of every sprint (two-weeks).

For Sourcegraph Extensions & other core dependent work we follow our [monthly release schedule](../../releases/index.md#releases). We also intentionally plan so we can avoid merging significant work less than two days before a release (if a release is on the 20th, our last day to merge is the 18th). Exceptions require explicit approval of both the PM and EM.

## Retrospectives

The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness.

The team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done. Inspected elements often vary with the domain of work (eg. releasing browser extension is different than making updates to the extension marketplace). Assumptions that led them astray are identified and their origins explored. The team discusses what went well during the Sprint, what problems it encountered, and how those problems were (or were not) solved. Please keep in mind that acknowledging positive events is as important as capturing negative events.

These discussion items are captured on our [retrospective document](https://docs.google.com/document/d/1uLR_2ICQB3jSCtQ3ebpQqvUYg11IIm0ZRJ5LoZ_wp2M/edit). Once discussed, we work together on identifying the most helpful changes to improve our effectiveness. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint.

## Sprint Cleanup

After each sprint, there are some manual tasks that are needed to be done before we start a new sprint.

1. Create a new Sprint (milestone) on [GitHub](https://github.com/sourcegraph/sourcegraph/milestones). The title should be "Extensibility X" where X is +2 from last completed sprint. There should be an explanation with the format "Extensibility Sprint from 2021/11/08 - 2021/11/19", that starts on a Monday and finished in 2 weeks at Friday. This Friday should be saved as the "Due Date"
2. Once the milestone is created, visit the [Current Iteration](https://github.com/orgs/sourcegraph/projects/213/views/1) board. If there are items on the Proposed, In Progress, or Blocked group, change their milestone to the upcoming milestone. Once all items are in Done, update the tab view query to filter this new milestone (eg change it from "milestone:"Extensibility 1" to milestone:"Extensibility 2"). Make sure to save the new view.
3. Once the [Current Iteration](https://github.com/orgs/sourcegraph/projects/213/views/1) board is updated, make sure to update the [Next Iteration](https://github.com/orgs/sourcegraph/projects/213/views/2) board query. Don't forget to save the view.
4. Lastly, go back to the [Milestones](https://github.com/sourcegraph/sourcegraph/milestones?state=open) page and find the milestone that has just finished. Make sure that all the items are closed. If there are any open items, make sure to move them to the current milestone and close the milestone.

## Product Feedback

Specific product feedback about well-defined, small features can be found directly in the corresponding GitHub board tab. (eg [Browser Extension](https://github.com/orgs/sourcegraph/projects/213/views/6))

More general product feedback that applies to larger features, or that needs more research and planning to be actionable, is kept in [Productboard](https://sourcegraph.productboard.com/roadmap/2748745-extensibility-features-timeline-roadmap).

## Code reviews

The team follows the [default code review guidelines](https://docs.sourcegraph.com/dev/background-information/code_reviews) with the following addition:

1. If the author would like any of the requested reviewers to merge the PR after approval they add the label `merge-on-any-approve`
2. If the author would like their PR to be merged once all of the requested reviewers have approved it they add the label `merge-on-all-approve`
3. When there are only minor issues, reviewers are encouraged to give "approval with comments" and trust their teammates to address the comments without requiring a follow-up review.

## Extension audits

We perform bi-monthly [audits](https://docs.google.com/spreadsheets/d/1HXmdHOwXhzFeQW-oiezsg0YF82HjGtUatShx3M66Gt0/edit#gid=0) of all Sourcegraph extension-related repositories [that we own](https://docs.sourcegraph.com/dev/background-information/sourcegraph_extensions) to ensure that they continue to reach our quality bar.

## Pair programming

We use pair programming extensively. We're huge believers in pair programming in remote work contexts, so we aim to pair as much as possible.

## Hack Time

Every week, we spend an hour and a half working on experiments outside of our prioritized lists. Examples of the type of work include extensions we feel strongly about, market intelligence tools, automation scripts, etc.
