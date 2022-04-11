# Frontend Platform Processes

### Planning and prioritization

We plan and track our day-to-day work with [Github projects](https://github.com/orgs/sourcegraph/projects/222/views/1). Our current process (last updated 2021-12-09) is as follows:

- Incoming tickets (e.g., from other teams) must have the `team/frontend-platform` label applied. As part of our [triage process](#triage), these tickets are investigated and prioritized by the designated teammate.
- Work is scheduled by assigning issues a status of _Backlog_ and a target of _This iteration_, _Next iteration_, _This quarter_ or _Not planned_.
- The [Current work](https://github.com/orgs/sourcegraph/projects/222/views/1) view reflects work that is actively in progress.
  - By EOD Monday (in advance of our Tuesday sync), devs should update issues and assign a status of _On deck_ to the work they plan to pick up.
  - Once work on an issue has begun, it should have a status of _In progress_.
- The [All issues by target](https://github.com/orgs/sourcegraph/projects/222/views/22) view represents a higher level view of the work we have planned (or not planned).

### Triage

We have a weekly rotation for triaging and refining issues. During their week on rotation, the on-duty teammate is responsible for triaging and clarifying any new issues that have been reported. We aim to do the following on a daily basis:

1. Go to the [All issues by status tab on the Frontend Platform board](https://github.com/orgs/sourcegraph/projects/222/views/7), and find the _No status_ section. This is where untriaged issues appear. (If you don't see "No Status", it means that there are no untriaged issues.)
2. For each issue in that section, consider the following:
   - Is it clear what needs to be done? If not, ask for clarification on the ticket, apply an appropriate label (e.g., `needs-more-info` or `awaiting-reply`), and change the status to _Needs input_.
   - Is it clearly something that should be done by the Frontend Platform team? If not, tag other teams (using the appropriate `team/xyz` label) and have a discussion about which is the best team to own the issue. Or you can add the `needs-discussion` label and discuss it with the team at an upcoming meeting (e.g. Frontend Platform sync or FPT coffee).
   - Is there an obvious owner on the Frontend Platform team (e.g., if it relates to a feature)? If so, assign the appropriate teammate.
   - Is it ready for development? If required, add the `needs-design` label, assign the issue to the Product Designer, and set the status to _Waiting_.
   - If it's ready for development and you know how to prioritize it correctly, set the status to _Backlog_ and give it an appropriate target. If you don't know how to prioritize it, add the `needs-prioritization` label and ask your teammates for help.

At the end of the week, aim for the _No status_ section to be empty, or almost empty.

### Tracking Issues

The team makes use of [tracking issues](../../process/tracking_issues.md) for tracking progress on the implementation of new features. The teammates should ensure that a tracking issue is created when starting work on features that are expected to take longer than a few days (or require multiple PRs) to deliver.

### Code Insights

We have several Code Insights dashboards on [k8s.sgdev.org](https://k8s.sgdev.org/) which we use to track progress:

- [Frontend Platform: Migrations](https://k8s.sgdev.org/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3MjY0OTF9) tracks long-running code migrations (e.g., global CSS → CSS modules).
  - The insight title should contain the GitHub issue number (where applicable).
  - For completed migrations, the insight title should beging with "DONE: " (e.g. "DONE: Consolidation of React Testing Libraries (#24986)") and the insight should be moved to the bottom row.
- [Frontend Platform: Wildcard Usage](https://k8s.sgdev.org/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3MjcxMzd9).

### Getting cross-team feedback on RFC

- Create an issue for the RFC tracking on our [Kanban board](https://github.com/orgs/sourcegraph/projects/144).
- [Lock conversation](https://docs.github.com/en/github/building-a-strong-community/locking-conversations): RFC should be discussed in the Google doc.
- Add _rfc/tracking_ and _team/frontend-platform_ labels to the RFC issue.
- Once RFC is ready for review, move it to the _In review_ column and assign _sourcegraph/frontend-devs_ or individual developers to the issue.
- Github integration will notify _@web_ in #frontend-platform-rfc-feed that the RFC is ready for review.
- Once approved, link the RFC issue to the tracking issue [if required](#tracking-issues).

### Product Feedback

Specific product feedback about well-defined, small features can be found directly in the backlog boards. More general product feedback that applies to larger features, or that needs more research and planning to be actionable, is kept in [Productboard](https://sourcegraph.productboard.com/feature-board/2330177-web-frontend-platform)

### Code reviews

The team follows the [default code review guidelines](https://docs.sourcegraph.com/dev/background-information/code_reviews) with the following addition:

1. If the author would like any of the requested reviewers to merge the PR after approval they add the label `merge-on-any-approve`
2. If the author would like their PR to be merged once all of the requested reviewers have approved it they add the label `merge-on-all-approve`
3. When there are only minor issues, reviewers are encouraged to give "approval with comments" and trust their teammates to address the comments without requiring a follow-up review.

### Meetings

We inherit Sourcegraph's [meeting principles](../../../../../company-info-and-process/communication/index.md#internal-meetings) and [asynchronous communication guidelines](../../../../../company-info-and-process/communication/asynchronous-communication.md#how-to-choose-sync-vs-async) with some modifications that help us run effective meetings:

- Meeting agenda:
  - The meeting leader prepares the agenda at least 24 hours in advance in a shared Google document.
  - Participants write down their items at least 12 hours before the meeting. There can always be last-minute additions, but early preparation is encouraged.
  - If the discussion point is expected to take a considerable amount of time, an estimate in minutes should be added.
  - Participants ensure that each topic includes important details and relevant references.
  - Participants review agenda details before the meeting starts.
  - During the meeting, we follow the agenda and fill in notes along the way.
- Timing:
  - The meeting leader always starts discussion on time, even if some participants are late. (And try not to be late.)
  - The meeting leader ensures that the meeting ends on time (or early).
- Action items:
  - We capture and assign action items to individual teammates.
  - We review action items from the previous meeting to make sure they get completed.

### Retrospectives

Every two weeks, we hold a review/retrospective meeting to reflect on the past two weeks. We use this meeting to:

- Give _Shoutouts!_ to teammates to show appreciation for something they did that we appreciated
- Discuss things that went well in the past two weeks and that we should do more of / invest more into it
- Discuss the things that could have gone better and what we can learn from it to improve
- Talk about processes that we should revisit/refine/propose to improve our efficiency.

Teammates should consider action items coming out of the retrospective as a very high priority.

Teammates contribute to the retrospective asynchronously during the iteration by adding their thoughts to our [retrospective document](https://docs.google.com/document/d/1SRhrTRJFGAEtTyhOqaO7TxsMQeBgIhUXRCDOEcv1EB8/edit).

We rotate who leads the retrospective to allow all teammates an opportunity to lead the session. Teammates can find the rotation schedule at the top of the [retrospective document](https://docs.google.com/document/d/1SRhrTRJFGAEtTyhOqaO7TxsMQeBgIhUXRCDOEcv1EB8/edit).

### Weekly Sync

The team holds weekly syncs.

The meeting notes of team syncs can be found [in this doc](https://docs.google.com/document/d/1_wptyMfAjLagJKPjIhPt_miXoEpYuyo_64PBCTTr5h0/edit).

Before team syncs, teammates and stakeholders should write down under "Agenda" in the meeting notes document anything that they'd like to bring up for discussion with the whole team. During the sync, we dedicate time to discussing any tickets on our board that have the `needs-discussion` label.
