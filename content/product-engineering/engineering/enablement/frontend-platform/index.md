# Frontend Platform team

The Frontend Platform team (part of the [Enablement](../index.md) org) defines and maintains the standards and tools for web development at Sourcegraph.

## Members

- [Taylor Sperry](../../../../team/index.md#taylor-sperry) (Technical [Product Manager](../../../product/roles/index.md#product-manager))
- [Alicja Suska](../../../../team/index.md#alicja-suska) ([Product Designer](../../../product/roles/index.md#product-designer))
- [Patrick Dubroy](../../../../team/index.md#patrick-dubroy) ([Engineering Manager](../../roles.md#engineering-manager)) {#frontend-platform-eng}
  - [Tom Ross](../../../../team/index.md#tom-ross)
  - [Valery Bugakov](../../../../team/index.md#valery-bugakov)
  - [Oleg Gromov](../../../../team/index.md#oleg-gromov)

## Our Strategy

[Mission & Vision](../../../../strategy-goals/strategy/enablement/frontend-platform/index.md)

## Responsibilities

1. Frontend platform:

   - Creating and maintaining the Wildcard Component Library
   - Owning the Sourcegraph web tech stack, tools, and patterns
   - Providing documentation and training material that enables product teams and new hires to learn how to do web development at Sourcegraph quickly
   - Defining and maintaining how we test and deploy frontend code
   - Ensuring an efficient and reliable frontend CI pipeline
   - Tracking, measuring, and improving cross-cutting frontend metrics like bundle size, [Web vitals](https://web.dev/vitals/), etc.

2. The core user experience of the Sourcegraph product:
   - Accessibility, navigation, and information hierarchy
   - Performance and efficiency of the core UI
   - All code browsing and code host-like views
   - Code syntax highlighting
   - Sourcegraph application homepage
   - . . . And supporting other teams in all of the above

## Contact

- #frontend-platform, @frontendplatform, or @frontend-platform-support in Slack.
- [team/frontend-platform](https://github.com/sourcegraph/sourcegraph/labels/team%2Ffrontend-platform) label and @sourcegraph/frontend-platform team on GitHub.

## Growth plan

[Come work with us!](https://boards.greenhouse.io/sourcegraph91/jobs/4079706004) We're hiring an early-career frontend engineer to join our team.

## Tech stack

We use a modern, flexible tech stack.
Here are some of the technologies we use to deliver on our goals:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/) + [Bootstrap](https://getbootstrap.com/)
- [GraphQL](https://graphql.org/)
- [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../principles-and-practices.md) and [Enablement principles and practices](../index.md#principles-and-practices). In addition, we have a few processes and practices specific to the Frontend Platform team:

## Processes

### Planning and prioritization

We plan and track our day-to-day work with [Github projects](https://github.com/orgs/sourcegraph/projects/222/views/1). Our current process (last updated 2021-12-9) is as follows:

- Incoming tickets (e.g., from other teams) must have the `team/frontend-platform` label applied. As part of our [triage process](#triage), these tickets are investigated and prioritized by the designated teammate.
- Work is scheduled by assigning issues a status of _Backlog_ and a target of _This iteration_, _Next iteration_, _This quarter_ or _Not planned_.
- The [Current work](https://github.com/orgs/sourcegraph/projects/222/views/1) view reflects work that is actively in progress.
  - By EOD Monday (in advance of our Tuesday sync), devs should update issues and add assign a status of _On deck_ to the work they plan to pick up.
  - Once work on an issue has begun, it should have a status of _In progress_.
  - Work that requires input should have a status of _Needs input_ and the appropriate label and asignees. For example, an issue that needs design input should be assigned to [Alicja Suska](../../../../team/index.md#alicja-suska) and given the `needs-design` label. Other relevant labels:
    - `needs-discussion`: if the issue should be discussed at the next Frontend Platform sync
    - `needs-more-info`: if it's not clear yet what needs to be done
    - `needs-prioritization`: if the issue is part of an active prioritization conversation, to be decided on soon
    - `awaiting-reply`: if we're waiting on an answer to a specific question on the ticket
  - Work that is blocked because it depends on external work should have a status of _Waiting_.
- The [All issues by target](https://github.com/orgs/sourcegraph/projects/222/views/22) view represents a higher level view of the work we have planned (or not planned).

### Triage

We have a weekly rotation for triaging and refining issues. During their week on rotation, the on-duty teammate is responsible for triaging and clarifying any new issues that have been reported. We aim to do the following on a daily basis:

1. Go to the [All issues by status tab on the Frontend Platform board](https://github.com/orgs/sourcegraph/projects/222/views/7), and find the _No status_ section. This is where untriaged issues appear. (If you don't see "No Status", it means that there are no untriaged issues.)
2. For each issue in that section, consider the following:
   - Is it clear what needs to be done? If not, ask for clarification on the ticket, apply an appropriate label (e.g., `needs-more-info`), and change the status to _Needs input_.
   - Is it clearly something that should be done by the Frontend Platform team? If not, tag other teams (using the appropriate `team/xyz` label) and have a discussion about which is the best team to own the issue. Or you can add the `needs-discussion` label and discuss it with the team at an upcoming meeting (e.g. Frontend Platform sync or FPT coffee).
   - Is there an obvious owner on the Frontend Platform team? E.g., if it relates to a feature
   - Is it ready for development? If required, add the `needs-design` label and set the status to _Waiting_.
   - If it's ready for development and you know how to prioritize it correctly, set the status to _Backlog_ and give it an appropriate target. If you don't know how to prioritize it, you can ask your teammates for help with prioritization.

At the end of the week, aim for the _No Status_ section to be empty, or almost empty.

### Tracking Issues

The team makes use of [tracking issues](../../tracking_issues.md) for tracking progress on the implementation of new features. The teammates should ensure that a tracking issue is created when starting work on features that are expected to take longer than a few days (or require multiple PRs) to deliver.

### Code Insights

We have several [Code Insights](https://docs.sourcegraph.com/code_insights) dashboards on Sourcegraph.com which we use to track progress:

- [Frontend Platform: Migrations](https://sourcegraph.com/insights/dashboards/frontendPlatformMigrations) tracks long-running code migrations (e.g., global CSS → CSS modules).
  - The insight title should contain the GitHub issue number (where applicable).
  - For completed migrations, the insight title should beging with "DONE: " (e.g. "DONE: Consolidation of React Testing Libraries (#24986)") and the insight should be moved to the bottom row.
- [Frontend Platform: Wildcard Usage](https://sourcegraph.com/insights/dashboards/frontendPlatformWildcardUsage) tracks usage of the [Wildcard Component Library](https://docs.sourcegraph.com/dev/background-information/web/wildcard).

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

We inherit Sourcegraph's [meeting principles](../../../../company-info-and-process/communication/index.md#internal-meetings) and [asynchronous communication guidelines](../../../../company-info-and-process/communication/asynchronous-communication.md#how-to-choose-sync-vs-async) with some modifications that help us run effective meetings:

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
