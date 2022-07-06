# Frontend Platform Processes

## How we plan and track our work

### Planning

We use the [FPT Planning](https://docs.google.com/document/d/1Y_1t9fPWn7VfARcLKj4KEV4FJoMHsGzG8flJH2V54QA/edit) document to asynchronously discuss our quarterly roadmap. Our [Strategy](../../../../../content/strategy-goals/strategy/frontend-platform/index.md) page is updated monthly to reflect our team’s plans.

We collect our team’s important planning documents in [Frontend Platform RFCs and PDs](https://docs.google.com/document/d/12CJP9T360GzxQJpJuJgtRid3uKpyIWPo1XpvkXG3P9M/edit).

### Tracking

As of 2022-04-20, we use Github projects and Code Insights to keep track of our work.

#### Engineering roadmap project

Our quarterly roadmap items are defined in [tracking issues](../../dev/process/tracking_issues.md) on the [Engineering roadmap](https://github.com/orgs/sourcegraph/projects/214/views/14). In addition to describing the problem space, proposed solution, and measures of success, these tracking issues collate the smaller issues that contribute to the execution of our roadmap. In this way, they reflect a high-level view of our progress on a given roadmap item.

#### Frontend Platform project

For a lower level view of our day-to-day progress, we use the [Frontend Platform Github project](https://github.com/orgs/sourcegraph/projects/222/views/1). We are currently exploring ways to refine our processes around triaging incoming requests, scheduling work, and measuring progress. Today, we mainly rely on `Status` labels:

- `Needs input`: We need input from someone outside of our team and the issue is blocked.
- `On deck`: This issue should be picked up within the next two weeks. It’s what’s next after the person assigned to the issue completes their current work.
- `Waiting`: The issue is dependent on something else and is blocked.
- `In progress`: The issue is actively in progress.
- `Done`: PRs associated with this issue have been merged to main and the issue is closed.
- `Backlog`: We don’t have any immediate plans to pick up this issue.

#### Code Insights

We have several Code Insights dashboards on [k8s.sgdev.org](https://k8s.sgdev.org/) which we use to track progress:

[Frontend Platform: Migrations](https://k8s.sgdev.org/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3MjY0OTF9) tracks long-running code migrations (e.g., global CSS → CSS modules). The insight title should contain the GitHub issue number (where applicable). For completed migrations, the insight title should beging with "DONE: " (e.g. "DONE: Consolidation of React Testing Libraries (#24986)") and the insight should be moved to the bottom row.

[Frontend Platform: Wildcard Usage](https://k8s.sgdev.org/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3MjcxMzd9).

## Support

The Frontend Platform team primarily receives support requests from internal Sourcegraph engineers, though we also monitor customer requests in the product gap dashboards maintained by the Customer Engineering (CE) and Sales organization.

### Requesting support

If you have a question that relates to our [areas of ownership](../../dev/process/engineering_ownership.md), the #frontend-platform channel is the best way to reach us. Tag the `@frontend-platform-support` handle if something is urgent (think of this as pulling the fire alarm) and requires our immediate attention. Our on-call teammate will jump in.

### Raising an issue

If you think Frontend Platform is the right team to address a bug or other request, please use the [Frontend Platform issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Ffrontend-platform&template=frontend_platform_issue.yaml) template to create an issue.

## Team Roles

### Support rotation

We use OpsGenie to manage a support rotation that changes weekly. The person on-call will be pinged when someone tags `@frontend-platform-support` in Slack. That person is expected to prioritize responding to the support request, but anyone who sees a request can and should jump in.

#### Handling CI assistance requests

If `@frontend-platform-support` is pinged for a CI issue, the teammate on rotation should ask the person requesting help [to determine](https://docs.sourcegraph.com/dev/how-to/testing#assessing-flaky-client-steps) whether or not the issue is due to a flaky test and [to disable it](https://docs.sourcegraph.com/dev/background-information/ci#flaky-tests) if so.

Otherwise, the teammate on rotation should resolve the problem with a PR from the Frontend Platform team or create an issue and assign it to the appropriate owner.

This process aims to _always_ have a solution or artifact for a reported problem so that we can avoid the same CI issues in the future.

### Technical lead

For each roadmap item, we assign an engineer to be technical lead. Technical leads are responsible for working with the EM/PM to articulate the problem space, proposed solution, and measures of success. They also scope a delivery plan and create issues to be tracked in the roadmap tracking issue. They are **not** solely responsible for executing on the work, which is a team effort. At our weekly team syncs, they share a status update (`On track`, `At risk`, `Won’t Do`) with the team.

## Team Meetings

We inherit Sourcegraph's [meeting principles](../../../../company-info-and-process/communication/index.md#internal-meetings) and [asynchronous communication guidelines](../../../../company-info-and-process/communication/asynchronous-communication.md#how-to-choose-sync-vs-async) with some modifications that help us run effective meetings:

- Meeting leaders rotate weekly, and the leader should prepare the agenda at least 24 hours ahead of time.
- All teammates should add items to the agenda before the meeting begins.
- Any action items that come out of meetings should be considered a high priority.

### Team Sync

We connect weekly to discuss any topics that are best addressed in person. The [agenda](https://docs.google.com/document/d/1_wptyMfAjLagJKPjIhPt_miXoEpYuyo_64PBCTTr5h0/edit) includes a “sprint” kickoff or midpoint check-in (we loosely operate in two-week cycles), review of any unplanned work, and updates on roadmap progress. Technical leads should update roadmap items ahead of time with a status of `On track`, `At risk`, or `Won’t do` and any other relevant details.

### Team Retro

We connect bi-weekly to celebrate wins from the past two weeks, give cheers to our teammates, and reflect on what we’ve liked, not liked, and learned for going forward. The focus of the [agenda](https://docs.google.com/document/d/1SRhrTRJFGAEtTyhOqaO7TxsMQeBgIhUXRCDOEcv1EB8/edit) for this meeting is team health, as opposed to day-to-day work.

### Frontend Crew

The Frontend Platform team uses this [agenda](https://docs.google.com/document/d/1el48U_HejMzoUjQ_l2glyPSFkuqTCr_IvIvkfu2zNNY/edit#heading=h.i5plvdwlbjoi) to run a bi-weekly, technically-focused meeting open to all frontend devs (and anyone else who’s interested!) at Sourcegraph. The idea is similar to a “guild” in the Spotify model: “A Guild is a more organic and wide-reaching _community of interest_, a group of people that want to share knowledge, tools, code, and practices.”

## Housekeeping

### Weekly reminders

At the start of each week, the PM posts a reminder in `#frontend-platform-internal` indicating who is on support and who is leading meetings.

### Updating the Frontend Platform project board

All engineers update the board in advance of the weekly sync.

### Updating the Engineering roadmap

The PM owns the roadmap issues and solicits input from the team to make sure the problem space is thorough, measures of success are ambitious-but-reasonable, and technical details are correct. The PM updates these issues weekly, after getting the roadmap progress reports in the team sync.

### Updating our Strategy page

The PM updates this page at the start of each month.
