# Developer Infrastructure processes

## Asking for help

A classic productivity killer is to get stuck on something and keep banging at the wall over and over. Every engineer has encountered this.
The usual advice for this is to reach out for help when you're stuck.

The problem with that advice is that it's not always applicable, you could
be diving into a rabbit hole for hours and still get the feeling that you're not stuck, but instead jumping from one hypothesis to another. You are
technically, _not stuck_, so why ask for help? And the rabbit hole exploration continues...

So instead, let's redefine the criteria for asking for help: if you do not make tangible progress toward your goal for a few hours (usually, if more than two)
it's time to ask for help. Asking for help, even if there are other roads to explore, is not a failure. It's instead about actively seeking
to maximize your impact. A fresh pair of eyes, someone with a different context, etc ... can help you to see if it's time to change directions, go around
the problem, or perhaps simply solve the problem.

Our team scope is very large, and it encompasses a broad range of domains and different skillsets, so this particular aspect of engineering is
magnified, making it even more important to ask for help at the right time.

So, if you don't see tangible signs of progress after a two hours on something, reach out to your peers! We're a team and that's exactly why it's
here for, we win together, and together we win even more.

## Planning and tracking work

We use a 4-step delivery framework to prioritize problems to solve, create solutions, and follow through on our work.
This applies for both [planned work](#planned-work) and [unplanned work](#unplanned-work).

1. Identify the problem, who has this problem (the customers), and potential solutions.
   - Artifact: [planned work process](#planned-work), or at least [a GitHub issue](#tracking)
2. Execute on a solution, in line with [our principles](./index.md#principles), and communicate progress back within the team (e.g. via the [planned work process](#planned-work) or [unplanned work process](#unplanned-work))
3. [Roll out the change to our customers](#rollout-strategy).
   - Artifact: Sharing it in our channels (Slack and newsletter). Educating our customers about the change, and helping them adopt it.
4. Tracking adoption and feedback.
   - Artifact: feedback or metrics on adoption.

### Planned work

We use the [roadmap view](https://github.com/orgs/sourcegraph/projects/354) and [scratch documents](#scratch-documents) to asynchronously discuss our roadmap.

When planning work, the [relevant work lead](#work-leads) should:

- Work with the PM/EM to create the [roadmap tracking issue](#roadmap-tracking-issues) using the [tracking issue bot](../../dev/process/tracking_issues.md). A loose scratch doc can be created in [the team Drive](#google-drive) as well, but ultimately the tracking issue is the concrete artifact we share with stakeholders and the company. The tracking issue description should have the following:
  - **Problem**: Articulate the problem space and requirements.
  - **Scope**: Scope the work so that it can be completed in a single bet cycle, identifying:
    - **Boundaries**: Define what work is within the scope and what work is explicitly out of scope. (Out-of-scope boundaries, or "non-goals", are worth writing down and they help prevent scope creep.)
    - **Definition of done**: the desired end state that needs to be achieved for a work item to be considered "done", in addition to:
      - a [rollout strategy](#rollout-strategy)
      - "non-functional requirements" such as testing, monitoring, and documentation
      - a retrospective (e.g. by consulting relevant stakeholders) to identify if goals were achieved and follow-up work needs to be done
- Create a implementation plan by creating and tagging [GitHub issues](#tracking) to be tracked in the roadmap issue.
  - Issues should be labeled with days estimates ([as supported by the tracking-issue-bot](../../dev/process/tracking_issues.md#labels)), other metadata where helpful, a rough order of operations, and outline of what can be parallelized.
  - Dependencies on other work are identified and tracked.
- Maintain an understanding of the progress of the work.
  - Have a clear picture of what's being executed, what's coming up, and overall timelines.
  - Ensure required tasks are delegated.
  - Continually evaluate whether our priorities are right.
  - Work with EM/PM if any adjustments are needed.
  - Create follow-up issues for any known or outstanding bugs.

Note that teammates can also support a work lead on all of the above - it is not exclusively the responsibility of work leads.

> [!NOTE] An updated and well-documented planning issue makes it easier to teammates and stakeholders to pick up context around the state of planning, and helps represent the often significant time investment involved with planning efforts.

### Unplanned work

We aim to allow teammates the flexibility to work on incoming requests, tackle proactive improvements, and invest in long-term efforts on our [roadmap](../../../../strategy-goals/strategy/devinfra/index.md#roadmap), so as a rule of thumb:

- We aim to spend **20% to 30%** (~2-3 days every 2 weeks) of our time on making proactive impact, i.e. working on things that are aligned with the team's mission, but aren't on our roadmap.
- If **over 50%** (~5 days every 2 weeks) of our time is spent _outside_ of planned work (i.e support requests), we opt to discuss the scope and priority of the work with the team first.

We encourage you to log unplanned work in [GitHub issues](#tracking), the [DevInfra-scratch repository](#DevInfra-scratch), or in [the daily Geekbot updates](#slack).
If the work is a response to an active problem or urgent request that must be prioritized outside of our [planned work](#planned-work), create an issue and add the `reactive` label so that we can prioritize the work and review our reactive work load at the end of a bet period.

Note that even unplanned work should take into account a [rollout strategy](#rollout-strategy), especially if it is implementing improvements based on feedback.

### Rollout strategy

For each work item, we ask the following questions:

1. Who needs to know about this change?
2. How and where are we reaching them?
3. What do they need in order to adopt this change?

From the answers, we extend the Definition of Done for the item to include these steps:

- Create an announement about the change in immediate channels (relevant Slack channels)
- Add an entry to the Developer Infrastructure newsletter
- Update documentation if applicable
- Create resources to help engineers adopt the change
- Create content to educate engineers about the background and reason for the change

### Pull request reviews

Remember that pull requests are simply a dialogue between team members about changes that we're shipping as a team and we're here to help each others to achieve it.

On top of [the company wide process for reviewing pull requests](https://docs.sourcegraph.com/dev/background-information/pull_request_reviews), we follow these principles when it comes to review each others:

- We own our PRs:
  - Ex: If looking to be reviewed by someone in particular, just explicty add them in the reviewers (useful to get a thorough review when a teammate has a lot of context for example).
  - Ex: Reach out for others if a review is urgent.
  - Ex: PR author is responsible of taking the decision on when it's ok to merge it, to keep adding changes or to add those in a different PR.
- We eagerly communicate in our PRs:
  - Ex: If a review was expedited to unblock the PR, just say so and let its author bear the responsibility of merging or not their PR.
  - Ex: If only a subset of the PR content is familiar to you, you can still review, just say what you didn't cover.
  - Ex: If I don't understand why something is done in a certain way, just ask. There are no dumb questions.
  - Ex: If you're happy to see a change be merged, just say it! Async doesn't mean we can't be supportive of each others like we'd have done if we'd be sitting next to each other.
- When in doubt, act!
  - Ex: If you're not sure that a piece of code is going to create a problem, just say so, that's always better than not posting anything and you can always come back later and confirm.
  - Ex: A PR should fix a problem, but that's not entirely sure. If merging tells you the answer, and that's shorter than verifying, just do it unless the consequences are too high.
  - Ex: A PR has been merged? You can still review it, its author will open a new PR if you spot a mistake!

### Tracking

As of 2022-04-28, we use GitHub issues and projects to keep track of our work.

#### Developer Infrastructure project

For a lower level view of our day-to-day progress, we use the [Developer Infrastructure GitHub project](https://github.com/orgs/sourcegraph/projects/212). This board automatically imports issues with the `dx` or `team/dev-infra` labels. Additional views are avaialble on the board for specific purposes, such as viewing active [roadmap issues](#roadmap-tracking-issues).

> [!NOTE] Be _very_ careful when deleting things from the GitHub project, especially board views, labels, custom fields, and so on.

#### Roadmap tracking issues

[Roadmap tracking issues](https://github.com/sourcegraph/sourcegraph/issues?q=label%3Aroadmap+label%3Ateam%2Fdev-infra+sort%3Aupdated-desc) are what we communicate to teammates outside of the Developer Infrastructure team what we are working on and what we plan on working on.
Roadmap issues should be scoped to a bet period, and be a [tracking issue](../../dev/process/tracking_issues.md) that encapsulates everything outlined in the [planned work process](#planned-work).

They should have the `team/dev-infra` and `roadmap` label, one (or more) appropriate `dev-infra/...` label(s), as well as the following text in the description to help the tracking issue bot find relevant issues:

```md
<!-- OPTIONAL LABEL: roadmap -->
```

> [!NOTE] Be sure to add _all_ your desired labels (including at least one `DevInfra/...` label) _before_ creating the issue, otherwise the tracking issue bot might try to tag more issues than you want.

A project board view for roadmap tracking issues is also available [here](https://github.com/orgs/sourcegraph/projects/212/views/33).

### Google Drive

We collect meeting notes and planning artifacts in a shared [Google Drive folder](https://drive.google.com/drive/folders/1d1scMzzmXM5uCEpKI06U9cc6zPF7g9wE).

#### Scratch documents

We encourage the liberal use of "scratch documents" - temporary, short-lived Google Docs that are used as discussion forums and a dump for ideas.
Concrete, permanent artefacts should be created from them, e.g. via the [planned work process](#planned-work).

## Support

### Requesting support

If you have a question that relates to our [areas of ownership](../../dev/process/engineering_ownership.md), the #discuss-dev-infra channel is the best way to reach us. Tag the `@dev-infra-support` handle if something is urgent (think of this as pulling the fire alarm) and requires our immediate attention. Our on-call teammate will jump in.

#### Raising an issue

If you think Developer Infrastructure is the right team to address a bug or other request, please [create an issue](https://github.com/sourcegraph/sourcegraph/issues). The issue should include:

- A short description of the ask
- A more detailed explanation of the background, context, and problem that needs solving
- Any guidance related to the impact of this issue
- Any extra information that will help us solve or prioritize the issue
- The label `team/dev-infra`

### Providing support

This section documents tips for teammates on support, which is handled via our [support rotation](#support-rotation).
General tips:

1. We are not responsible for every issue in CI - see [build pipeline support](#build-pipeline-support) and [CI support responsibilities](#ci-support-responsibilities).
2. `git rebase` is very easy for teammates unfamiliar with `git` to do incorrect - if a branch update is required, err towards recommending a [`git merge`](https://git-scm.com/docs/git-merge) (e.g. `git pull origin main`).
3. Be wary of issues achieving joke/meme status: it often means that it is actually quite a disruptive issue, and warrants a closer look.
4. Be liberal in asking for a video or screen recording to demonstrate DX issues: this can help us understand and emphathise with DX pains.

Tips for [tracking](#tracking) support work:

1. Make sure to [update DevInfra-scratch](#DevInfra-scratch) for any notable support efforts and problems you ran into.
2. If a sizeable amount of work is surfaced (e.g. an active problem or urgent request), follow the [unplanned work tracking](#unplanned-work) guidance to help us keep track of how much reactive work we are tackling, and to ensure the work gets prioritized as needed.

#### Build pipeline support

> [!NOTE] The DevInfra team is _not_ responsible for all the tools and tests that run in Sourcegraph's CI infrastructure. Learn more: [CI reponsibilities](#ci-support-responsibilities)

Build pipeline support pertains to our [continuous integration](https://docs.sourcegraph.com/dev/background-information/continuous_integration). The goal of this process is to identify the right person to drive a fix on an issue, rather than actively fixing every issue that arises.

The on-call support teammate should monitor the pipeline through channels like #buildkite-main for [flakes](https://docs.sourcegraph.com/dev/background-information/testing_principles#flaky-tests) and notifications from [`buildchecker`](https://docs.sourcegraph.com/dev/background-information/continuous_integration#buildchecker).
Monitoring generally means taking a look at a random sample of 2-3 failures in #buildkite-main throughout the day and identifying if it might be a legitimate issue, of if it is a flake - refer to the [flakes playbook](../../dev/process/incidents/playbooks/ci.md#is-this-a-failure-or-a-flake) to learn more.

If there are any issues, ensure issues are followed up on:

1. Infer the owner based on the contents of the issue \*e.g. through product names, git history, and/or other context) and reach out for assistance:
   1. If a team can be inferred, ping the `@$TEAM-support` handle in Slack for assistance, escalating to `@$TEAM` if no support handle or teammate is available.
   2. If no team is easily inferred, ping the most recent author via `git blame` where relevant for assistance.
2. Guide the teammate towards a resolution for the issue by following our [broken builds process](https://docs.sourcegraph.com/dev/background-information/testing_principles#broken-builds-on-the-main-branch) (also see [Continuous integration: Flakes](https://docs.sourcegraph.com/dev/background-information/continuous_integration#flakes)).

##### CI support responsibilities

The DevInfra team is _not_ responsible for all the tools and tests that run in Sourcegraph's CI infrastructure.

If a tool or test is behaving in an unstable manner, the team using the tool or test (see [build pipeline support](#build-pipeline-support) for how we infer ownership) has the responsibility of leading an investigation into what might be causing said instability, with the _assistance_ of the DevInfra team if helpful.

The team leading the investigation should either fix the issue directly, or if the issue requires changes in the [DevInfra team's ownership/responsibility areas](#responsibilities) (e.g. increasing resource limits for build agents, or making significant changes to the pipeline generator), request the desired changes through an issue tagged `team/DevInfra`.

For a higher-level understanding of our responsibilities, see our [guiding principles](../../../../strategy-goals/strategy/devinfra/index.md#guiding-principles).

## Team roles

### Support rotation

We use OpsGenie to manage a [support](#support) rotation that changes weekly. The person on-call will be pinged when someone tags `@dev-infra-support` in Slack. That person is expected to prioritize responding to the support request, but anyone who sees a request can and should jump in.

### Work leads

For each major body of work, we assign an engineer to be a **work lead**. Work leads are responsible for working with the PM/EM to articulate the problem space, requirements, proposed solution, results, and measures of success. They also scope a delivery plan and create issues to be tracked in the tracking issue. The work lead helps answer questions about priority order, scope change, etc., and provides updates at team syncs. They are **not** solely responsible for executing on the work, which is a team effort.

See the [planned work process](#planned-work) for additional details.

## Team meetings and communication

We inherit Sourcegraph's [meeting principles](../../../../company-info-and-process/communication/index.md#internal-meetings) and [asynchronous communication guidelines](../../../../company-info-and-process/communication/asynchronous-communication.md#how-to-choose-sync-vs-async) with some modifications that help us run effective meetings:

- Meeting leaders rotate weekly, and the leader should prepare the agenda at least 24 hours ahead of time.
- All teammates should add items to the agenda before the meeting begins.
- Any action items that come out of meetings should be considered a high priority.

### Team sync

We connect weekly to discuss any topics that are best addressed in person. Our notes are available [here](https://docs.google.com/document/d/1Lm6GT-F4v9OTa5wxa1-AKLtNwlDkORbbeGjqVd9kWPg/edit).

### Team retrospective

We connect bi-weekly to celebrate wins from the past two weeks, give cheers to our teammates, and reflect on what we’ve liked, not liked, and learned for going forward. The focus of the [agenda](https://docs.google.com/document/d/1QR1It6KGccwWRpASH16J64QNkpHtngI4o2ttrGpVCwU/edit#) for this meeting is team health, as opposed to day-to-day work.

### Coffee break

Every week we hold an informal, totally optional coffee break to connect socially and hang out together as humans.

### `sg` hack hour

There is a weekly `sg` hack hour that Thorsten Ball and the DevInfra team co-host weekly Fridays from 16:00 UTC to 17:00 UTC for anyone interested in making contributions to [the Sourcegraph developer tool](https://docs.sourcegraph.com/dev/background-information/sg).

When the hack hour starts, a meeting link will be posted in #dev-experience.

To learn more about contributing to `sg`, check out the [contribution guide](https://docs.sourcegraph.com/dev/background-information/sg#contributing-to-sg)!

### Slack

Teammates communicate in #team-dev-infra, and #team-dev-infra-private, and post daily updates [Geekbot](https://app.geekbot.com/dashboard/standup/90468/view) in #dev-infra-notifications.

## Housekeeping

### Weekly reminders

At the start of each week, the TL posts a reminder in `#team-dev-infra` indicating who is on support and who is leading meetings.

### Updating the Developer Infrastructure project board

All engineers update the [Developer Infrastructure project board](https://github.com/orgs/sourcegraph/projects/212) in advance of the weekly sync.

The status field for each issue in the project board roughly represents the following:

- **Unplanned**: No concrete plans to tackle yet
- **Next iteration**: Something to consider for next iteration
- **Planned**: On somebody's immediate plans (i.e. will be tackled roughly within this iteration)
- **In progress**: Actively being worked on
- **Blocked**: No progress can be made due to a dependency
- **External**: DX-related work being handled by other teams
- **Done**: That's a wrap!

### Updating the Engineering roadmap

The PM and work leads own the [roadmap issues](https://github.com/sourcegraph/sourcegraph/issues?q=label%3Aroadmap+label%3Ateam%2Fdev-infra+sort%3Aupdated-desc). They solicit input from the team to make sure the problem space is thorough, measures of success are ambitious-but-reasonable, and technical details are correct.

### Updating our Strategy page

The PM updates this page at the start of each month.

### Newsletter

The DevInfra team is responsible for a **monthly** (ish) newsletter to highlight developer experience updates (not just those lead by the team). Learn more about it and see previous issues [in the newsletter archive](newsletter.md).

To prepare a new issue of the newsletter, create a PR for the latest newsletter issue here following the conventions in the [previous newsletters](./newsletter.md). Some tips:

- You can refer to [`dx-announce` issues and PRs](https://github.com/sourcegraph/sourcegraph/issues?q=+is%3Aclosed+sort%3Aupdated-desc+label%3Adx-announce) for content ideas!
  - Adding a `closed:>YYYY-MM-DD` will filter the list down to just things that have been closed since the last newsletter issue.
- To include images, either [follow the official guide](../../../../handbook/editing/handbook-images-video.md) or upload images to a GitHub issue - this will provide a shareable link.

Once the newsletter is ready and reviewed, merge the PR. Then copy and paste the rendered newsletter from the handbook (you can set this up locally with `yarn dev`) into a draft newsletter. You will need to remove the background color from the pasted content, but the formatting should otherwise just work.

Verify the output looks good, and email it to engineering-team@sourcegraph.com.

### DevInfra-scratch

We maintain a repository with experiments and notes from the DevInfra team, [`sourcegraph/dev-infra-scratch`](https://github.com/sourcegraph/dev-infra-scratch), in an effort to improve knowledge-sharing and log our explorations and trends.
We encourage you to log anything you want in this repository, particularly insights from pairing sessions and so on!

Of particular note is the support log ([2022 support log](https://github.com/sourcegraph/dev-infra-scratch/blob/main/2022/ce-support/support/log.md)), which should be update with any notable efforts during [support rotations](#support-rotation).
