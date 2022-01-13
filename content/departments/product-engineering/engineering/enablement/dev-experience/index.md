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
- Continuous integration
  - [`sourcegraph/sourcegraph` Buildkite pipelines](https://docs.sourcegraph.com/dev/background-information/continuous_integration#buildkite-pipelines)
  - [Continuous integration playbook](../../process/incidents/playbooks/ci.md)
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
- [GitHub planning board](https://github.com/orgs/sourcegraph/projects/212)
- Daily updates via [Geekbot](https://app.geekbot.com/dashboard/standup/90468/view/insights) to #dev-experience-updates
- [Google Drive folder](https://drive.google.com/drive/folders/1d1scMzzmXM5uCEpKI06U9cc6zPF7g9wE)

### Meetings

#### Team meetings

The DevX team currently has weekly sync meetings and biweekly retrospectives within the team.

- [Team sync notes](https://docs.google.com/document/d/1Lm6GT-F4v9OTa5wxa1-AKLtNwlDkORbbeGjqVd9kWPg/edit)
- [Retrospective notes](https://docs.google.com/document/d/1QR1It6KGccwWRpASH16J64QNkpHtngI4o2ttrGpVCwU/edit#)

#### `sg` hack hour

There is a weekly `sg` hack hour that Thorsten Ball and the DevX team co-host weekly Fridays from 16:00 UTC to 17:00 UTC for anyone interested in making contributions to [the Sourcegraph developer tool](https://docs.sourcegraph.com/dev/background-information/sg).

When the hack hour starts, a meeting link will be posted in #dev-experience.

To learn more about contributing to `sg`, check out the [contribution guide](https://docs.sourcegraph.com/dev/background-information/sg#contributing-to-sg)!

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

1. Infer the owner based on the contents of the issue, e.g. through product names and other context, and reach out for assistance:
   1. If a team can be inferred, ping the `@$TEAM-support` handle in Slack for assistance, escalating to `@$TEAM` if no support handle or teammate is available.
   2. If no team is easily inferred, ping the most recent author via `git blame` where relevant for assistance.
2. Guide the teammate towards a resolution for the issue by following our [broken builds process](https://docs.sourcegraph.com/dev/background-information/testing_principles#broken-builds-on-the-main-branch) (also see [Continuous integration: Flakes](https://docs.sourcegraph.com/dev/background-information/continuous_integration#flakes)).

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
