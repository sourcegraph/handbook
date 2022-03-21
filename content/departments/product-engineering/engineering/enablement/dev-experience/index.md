# Dev Experience team

The Dev Experience team, or DevX for short, is a team focused on improving the developer experience of Sourcegraph as part of the [Enablement](../index.md) org.

## Members

{{generator:product_team.dev_experience}}

## [Strategy](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md)

- [Mission](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md#mission)
- [Vision](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md#vision)
- [Guiding principles](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md#guiding-principles)
- [Measuring success](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md#measuring-success)
- [Roadmap](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md#roadmap)

## Responsibilities

- General
  - Monitoring and triaging [`dx` issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Adx)
  - [Developer experience support](#support)
  - [Developer experience newsletter](./newsletter.md)
- Continuous integration (also see [CI support responsibilities](#ci-support-responsibilities))
  - [Continuous integration playbook](../../process/incidents/playbooks/ci.md)
  - [Continuous integration infrastructure](../../tools/infrastructure/ci/index.md)
  - [`sourcegraph/sourcegraph` Buildkite pipelines](https://docs.sourcegraph.com/dev/background-information/continuous_integration#buildkite-pipelines)
  - [Pipeline generator](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/enterprise/dev/ci)
  - [Buildkite agents](../../tools/infrastructure/index.md#buildkite-agents)
- Tooling
  - [`sg` - the Sourcegraph developer tool](https://docs.sourcegraph.com/dev/background-information/sg)
    - [`sg` hack hour](#sg-hack-hour)
  - [Monitoring generator](https://docs.sourcegraph.com/dev/background-information/observability/monitoring-generator)

> NOTE: We don't own the developer experience at Sourcegraph – we simply focus on it. Sourcegraph engineers own the developer experience as a collective. To learn more, check out our [team strategy](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md).

## Contact

- **Discussions and questions**: #dev-experience channel and [developer experience GitHub discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience)
- **[Support](#support)**: `@dev-experience-support` in Slack
- **GitHub**: [team/dev-experience](https://github.com/sourcegraph/sourcegraph/labels/team%2Fdev-experience) label and @sourcegraph/dev-experience team.
  - We also monitor and track issues with the [dx](https://github.com/sourcegraph/sourcegraph/labels/dx) label in our [GitHub project](https://github.com/orgs/sourcegraph/projects/212).

> NOTE: When referring to this team, prefer to use _Dev Experience_ or _DevX_ - only use _developer experience_ or _dx_ when referring to developer experience in general.

## Processes

To collaborate, we use the following:

- Internal team channel in #dev-experience-internal
- Daily updates via [Geekbot](https://app.geekbot.com/dashboard/standup/90468/view/insights) to #dev-experience-updates
- [GitHub board](https://github.com/orgs/sourcegraph/projects/212) for [planning](#planning)
  - This board automatically imports issues with the `dx` or `team/devx` labels
- [Google Drive folder](https://drive.google.com/drive/folders/1d1scMzzmXM5uCEpKI06U9cc6zPF7g9wE) for [meeting](#meetings) notes and [planning](#planning) artefacts

### Meetings

#### Team meetings

The DevX team currently has weekly sync meetings and biweekly retrospectives within the team.

- [Team sync notes](https://docs.google.com/document/d/1Lm6GT-F4v9OTa5wxa1-AKLtNwlDkORbbeGjqVd9kWPg/edit)
- [Retrospective notes](https://docs.google.com/document/d/1QR1It6KGccwWRpASH16J64QNkpHtngI4o2ttrGpVCwU/edit#)

#### `sg` hack hour

There is a weekly `sg` hack hour that Thorsten Ball and the DevX team co-host weekly Fridays from 16:00 UTC to 17:00 UTC for anyone interested in making contributions to [the Sourcegraph developer tool](https://docs.sourcegraph.com/dev/background-information/sg).

When the hack hour starts, a meeting link will be posted in #dev-experience.

To learn more about contributing to `sg`, check out the [contribution guide](https://docs.sourcegraph.com/dev/background-information/sg#contributing-to-sg)!

### Planning

This section describes how the DevX team currently conducts planning.
Planning can include quarterly planning, project scoping, requirements gathering, RFC-writing, or any combination of the above.

For any major body of work:

1. A [work lead](#work-leads) is assigned.
2. A [planning issue](#planning-issues) is created, and relevant planning work is done.
3. A [tracking issue](#tracking-issues) is created, tracking tasks required for completing the work.

#### Work leads

A **work lead** is the person assigned to lead a body of work, including the planning of said work.
If there are questions about priority order, scope change, etc. the work lead helps answer questions/provide updates.
They have special responsibilities regarding [planning issues](#planning-issues) and [tracking issues](#tracking-issues).

#### Planning issues

Planning starts with a **planning issue**. Planning issues are GitHub issues with the [`team/devx` and `planning` labels](https://github.com/sourcegraph/sourcegraph/issues?q=sort%3Aupdated-desc+is%3Aissue+label%3Aplanning+label%3Ateam%2Fdevx) on our [GitHub board](https://github.com/orgs/sourcegraph/projects/212) to track any significant planning efforts. A planning issue documents the planning process - links to RFC(s), discussions, artefacts like scratch documents, [meetings](#meetings), decisions, etc. as planning progresses.

> NOTE: An updated and well-documented planning issue makes it easier to teammates and stakeholders to pick up context around the state of planning, and helps represent the often significant time investment involved with planning efforts.

The [work lead](#work-leads) should:

- Continuously document the planning process
- Help/work with PM/EM to:
  - Define **Key Results**, including:
    - Desired outcomes of this work
    - Scoping the work to a manageable size for one team to deliver within one quarter (timeboxed)
    - How we will accomplish "Non-Functional Requirements" where applicable (or call out as N/A): testing, monitoring (how do we monitor and support the system?), documentation, etc.
  - Identify and monitor:
    - Stakeholders to notify and consult
    - Dependencies on other teams and/or other work and their progress status.

**✅ Outcome**: Once a roadmap or scope has been finalized, the appropriate tasks should be created, labelled with days estimates ([as supported by the tracking-issue-bot](../../process/tracking_issues.md#labels)) and other metadata where helpful, as well as a rough order of operation and outline of what can be parallelized. A [tracking issue](../../process/tracking_issues.md) should then be created.

#### Tracking issues

A tracking issue is summarised by the Key Results defined in [planning](#planning-issues), and collects all the relevant tasks to achieving this to track in-flight work. Tracking issues are GitHub issues with the [`team/devx` and `tracking` labels](https://github.com/sourcegraph/sourcegraph/issues?q=sort%3Aupdated-desc+is%3Aissue+label%3Atracking+label%3Ateam%2Fdevx) on our [GitHub board](https://github.com/orgs/sourcegraph/projects/212).

> NOTE: Tracking issues are managed automatically using the tracking issue bot if created using the tracking issue template - learn more in [tracking issue bot docs](../../process/tracking_issues.md)!

The [work lead](#work-leads) should:

- Have a clear picture of the work currently being executed on, upcoming work, and overall timelines
- Ensure required tasks are delegated
- Continually evaluate:
  - That we are working towards the Key Results, and if the work meets it.
  - The Key Results, scope, and order of operations
  - If any adjustments are needed - if so, work with PM/EM to make the adjustments.

**✅ Outcome**: The Key Results defined during [planning](#planning-issues) are met, and follow-ups and takeaways are documented and tracked:

- Are there any known/outstanding bugs? Create issues to follow up if needed.
- Did we change the design mid-development? If so, why?

### Support

Support is handled through the `@dev-experience-support` handle in Slack.
Support on-call responsibilities on this team include:

- Urgent questions and issues
- [Build pipeline support](#build-pipeline-support)

#### Build pipeline support

Build pipeline support pertains to our [continuous integration](https://docs.sourcegraph.com/dev/background-information/continuous_integration).
The goal is to have someone lead on identifying the right person to drive a fix on an issue, rather than actively fixing every issue that arises.

The on-call support teammate should monitor the pipeline through channels like #buildkite-main for [flakes](https://docs.sourcegraph.com/dev/background-information/testing_principles#flaky-tests) and notifications from [`buildchecker`](https://docs.sourcegraph.com/dev/background-information/continuous_integration#buildchecker).
If there are any issues, ensure issues are followed up on:

1. Infer the owner based on the contents of the issue \*e.g. through product names, git history, and/or other context) and reach out for assistance:
   1. If a team can be inferred, ping the `@$TEAM-support` handle in Slack for assistance, escalating to `@$TEAM` if no support handle or teammate is available.
   2. If no team is easily inferred, ping the most recent author via `git blame` where relevant for assistance.
2. Guide the teammate towards a resolution for the issue by following our [broken builds process](https://docs.sourcegraph.com/dev/background-information/testing_principles#broken-builds-on-the-main-branch) (also see [Continuous integration: Flakes](https://docs.sourcegraph.com/dev/background-information/continuous_integration#flakes)).

##### CI support responsibilities

The DevX team is _not_ responsible for all the tools and tests that run in Sourcegraph's CI infrastructure.
If a tool or test is behaving in an unstable manner, the team using the tool or test (see [build pipeline support](#build-pipeline-support) for how we infer ownership) has the responsibility of leading an investigation into what might be causing said instability, with the _assistance_ of the DevX team if helpful.

The team leading the investigation should either fix the issue directly, or if the issue requires changes in the [DevX team's ownership/responsibility areas](#responsibilities) (e.g. increasing resource limits for build agents, or making significant changes to the pipeline generator), request the desired changes through an issue tagged `team/devx`.

For a higher-level understanding of our responsibilities, see our [guiding principles](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md#guiding-principles).

### Work allocation

We aim to allow teammates the flexibility to work on incoming requests, tackle proactive improvements, and invest in long-term efforts to further our [team goals](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md), so as a rule of thumb:

- We aim to spend **20% to 30%** (~2-3 days every 2 weeks) of our time on making proactive impact, i.e. working on things that are aligned with the team's mission, but aren't on our roadmap.
- If **over 50%** (~5 days every 2 weeks) of our time is spent _outside_ of planned work (i.e support requests), we opt to discuss the scope and priority of the work with the team first.

### Newsletter

The DevX team is responsible for a **monthly** (ish) newsletter to highlight developer experience updates (not just those lead by the team). Learn more about it and see previous issues [in the newsletter archive](newsletter.md).

To prepare a new issue of the newsletter, create a PR for the latest newsletter issue here following the conventions in the [previous newsletters](./newsletter.md). Some tips:

- You can refer to [`dx-announce` issues and PRs](https://github.com/sourcegraph/sourcegraph/issues?q=+is%3Aclosed+sort%3Aupdated-desc+label%3Adx-announce) for content ideas!
  - Adding a `closed:>YYYY-MM-DD` will filter the list down to just things that have been closed since the last newsletter issue.
- To include images, either [follow the official guide](../../../../../handbook/editing/handbook-images-video.md) or upload images to a GitHub issue - this will provide a shareable link.

Once the newsletter is ready and reviewed, merge the PR. Then copy and paste the rendered newsletter from the handbook (you can set this up locally with `yarn dev`) into a draft newsletter. You will need to remove the background color from the pasted content, but the formatting should otherwise just work.

Verify the output looks good, and email it to engineering-team@sourcegraph.com.

## Growth plan

TODO

## Tech stack

TODO

### Internal resources

- Tools and languages updates feed is available in #dev-experience-notification
- GitHub issues and pull-requests feed is available in #dx-github-feed
