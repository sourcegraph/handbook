## Processes

### Planning, Prioritization, and Execution

As a team, we’ve experimented with Scrum and Kanban and decided that our team operates much more efficiently when we focus on continuous delivery with changing priorities. We use our [Github Project Board](https://github.com/orgs/sourcegraph/projects/213/) to track individual tasks and their status.
We have the following standard scrum columns on our task board:

#### Column: To Do

The To Do column is a constantly prioritized list of items. Each issue on this column is as atomic as possible and sorted by priority (descending). As we start working on the issues, we start by tackling the top issue first.

#### Column: In Progress

Once someone has started working on an issue we move it to the In Progress column. They remain in this column until the change is code reviewed and merged.

#### Column: Done

Once the change is successfully merged, it is moved to the **Done** column. Please note that, if the change is a significant change, we should also update the changelog. We also have a **Blocked** column to track issues where we currently can’t make progress. This simple workflow not only makes us operate faster but also helps us communicate our progress with partners.

As our to-do list grew, we realized that it became hard to see and prioritize issues, so we’ve decided to add to our board several additional columns.

#### Column: To Triage

When a new issue is opened and tagged for our team (`team/extensibility`) on the Sourcegraph repository, our scripts automatically add it to our “To Triage” column. Every Monday our team discusses the next steps for these issues.

#### Column: Backlog

The next column represents issues we’re thinking of tackling but that are not immediate priorities. It’s sorted by priority (descending). These issues are expected to be moved to the To Do column and prioritized in a month or two.

#### Column: Icebox

This column represents issues that we’ve acknowledged but are currently not planning to tackle. This column is not ordered in any specific order.

#### Column: Needs Design

This column exists for our design partners to track their issues.
sorted by priority (descending)
Items should be assigned to alicja & eng
Our kanplan methodology gives us the ability to refine the backlog while continuously delivering quality software. We benefit from flexible planning, clearer focus, and total transparency because our board represents our priorities. We also communicate our team updates with the broader engineering org [every two weeks](../../engineering-management.md#status-updates).

### Tracking Issues

The team makes use of [tracking issues](../../tracking_issues.md) for tracking progress on the implementation of new features. The teammates should ensure that a tracking issue is created when starting work on features that are expected to take longer than a few days to deliver.

### Product Feedback

Specific product feedback about well-defined, small features can be found directly in the backlog boards. More general product feedback that applies to larger features or that needs more research and planning to be actionable is kept in [Productboard](https://sourcegraph.productboard.com/feature-board/2330167-web-extensibility)

### Retrospectives

Every two weeks, we hold a sync retrospective meeting to reflect on the past two weeks. We use this meeting to:

- Review the previous retro’s action items to ensure we hold teammates accountable for actioning them
- We give _Shoutouts!_ to teammates to show appreciation for something they did that we appreciated.
- Discuss things that went well in the past two weeks and that we should do more of / invest more into it.
- We discuss the things that could have gone better and what we can learn from it to improve.
- We talk about processes that we should revisit/refine/propose to improve our efficiency?

We capture and assign actions to teammates to action. Teammates should consider actions coming out of the retrospective as a very high priority.

Teammates contribute to the retrospective asynchronously by adding their thoughts to our [retrospective document](https://docs.google.com/document/d/1uLR_2ICQB3jSCtQ3ebpQqvUYg11IIm0ZRJ5LoZ_wp2M/edit). Teammates are highly encouraged to comment on points raised before the sync meeting in the document.

We rotate who leads the retrospective to allow all teammates an opportunity to lead the session. Teammates can find the rotation schedule at the top of the [retrospective document](https://docs.google.com/document/d/1uLR_2ICQB3jSCtQ3ebpQqvUYg11IIm0ZRJ5LoZ_wp2M/edit).

### Code reviews

The team follow's the [default code review guidelines](https://docs.sourcegraph.com/dev/background-information/code_reviews) with the following addition:

1. If the author would like any of the requested reviewers to merge the PR after approval they add the label `merge-on-any-approve`
1. If the author would like their PR to be merged once all of the requested reviewers have approved it they add the label `merge-on-all-approve`

#### Cross-functional reviews

Engineers will often need reviews from teammates from other functions. For example, a pull request can benefit from visual review from a designer. In such cases, the author should be sure to request the PR review as well as tag the requested cross-functional reviewer(s) in their PR description, along with what exactly they need reviewed and when they need it to be reviewed by (e.g. "@Joelkw can you review the banner copy by the end of the week?"). See our [general guidelines on seeking feedback](../../../communication/seeking-and-giving-feedback.md#seeking-feedback).

### Feature freeze

We do not merge major features in the **last 3 days before the [release branch is cut](../../releases/index.md)**. We make sure that our changes keep `main` [continuously releasable](../../continuous_releasability.md), but leave buffer time in the form of a [feature freeze](https://en.wikipedia.org/wiki/Freeze_(software_engineering\)) so that we can address any issues found on Sourcegraph Cloud.

### Extension audits

We perform bi-monthly [audits](https://docs.google.com/spreadsheets/d/1HXmdHOwXhzFeQW-oiezsg0YF82HjGtUatShx3M66Gt0/edit#gid=0) of all Sourcegraph extension-related repositories [that we own](https://docs.sourcegraph.com/dev/background-information/sourcegraph_extensions) to ensure that they continue to reach our quality bar.

### Pair programming

We use pair programming extensively. We're huge believers in pair programming in remote work contexts, so we aim to pair as much as possible.

### Weekly Sync

The team holds weekly syncs.

The meeting notes of team syncs can be found [in this doc](https://docs.google.com/document/d/1apinxDIp2PdyDHjkr_nBuD7ykfzItVuTvWejiA66sjY/edit?ts=5fb7fd29#).

Before team syncs, teammates and stakeholders should write down under "Agenda" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.

### Hack Time

Every week, we spend an hour and a half working on experiments outside of our prioritized lists. Examples of the type of work include extensions we feel strongly about, market intelligence tools, automation scripts, etc.
