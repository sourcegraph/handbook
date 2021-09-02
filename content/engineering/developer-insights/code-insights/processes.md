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

We plan and track our day-to-day work on our [Kanban board](https://github.com/orgs/sourcegraph/projects/118). Our current process is as follows:

- Incoming tickets (e.g. from other teams) arrive in the _Inbox_ column.
- Work is scheduled by adding a card to the _Planned_ column. This happens after talking through the next priorities in our [weekly sync](#weekly-sync) or raising something asynchronously in the #code-insights Slack channel.
  - The _Planned_ column is an _ordered_ column, by priority. Priority is discussed on the team.
  - Work should not be moved into the _Planned_ column until it is ready for development _and_ estimated and prioritized.
  - Work that is ready for development but not yet estimated or prioritized sits in the _Ready for Dev_ column.
  - Anything that needs design input gets the `needs-design` label and goes in the _Needs design_ column.
- When starting work, engineers pull cards from the _Planned_ column and move it to the _In Progress_ column.
- There should never be more than a couple of cards in the _In Progress_ column at the same time. If we paused work on something (e.g. because priorities changed), it should be moved back to _Planned_ or _Icebox_ as appropriate.
- Things we triaged from the _Inbox_, but don't plan to work on, go into the _Icebox_.

Note: we intentionally plan so we can avoid merging significant work less than two days before a release (if a release is on the 20th, our last day to merge is the 18th). Exceptions require explicit approval of both the PM and EM.

## Tracking Issues

The team makes use of [tracking issues](../../tracking_issues.md) for tracking progress on the implementation of longer projects that need to be broken up into multiple issues.
The teammates should ensure that a tracking issue is created when starting work on features that are expected to take longer than a few days (or require multiple PRs) to deliver.

## Product Feedback

Specific product feedback about well-defined, small features can be found directly in the GitHub board.
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
