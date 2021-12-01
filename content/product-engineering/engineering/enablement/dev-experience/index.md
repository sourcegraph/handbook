# Dev Experience team

The Dev Experience team, or DevX for short, is a team focused on improving the developer experience of Sourcegraph as part of the [Enablement](../index.md) org.

## Members

- [Taylor Sperry](../../../../company/team/index.md#taylor-sperry) (Technical [Product Manager](../../../product/roles/index.md#product-manager))
- Kristen Stretch ([Engineering Manager](../../roles.md#engineering-manager))
  - [JH Chabran](../../../../company/team/index.md#jh-chabran)
  - [Robert Lin](../../../../company/team/index.md#robert-lin)
  - [Dave Try](../../../../company/team/index.md#dave-try)

## [Strategy](../../../../company/strategy/enablement/dev-experience/index.md)

- [Mission](../../../../company/strategy/enablement/dev-experience/index.md#mission)
- [Vision](../../../../company/strategy/enablement/dev-experience/index.md#vision)
- [Guiding principles](../../../../company/strategy/enablement/dev-experience/index.md#guiding-principles)
- [Measuring success](../../../../company/strategy/enablement/dev-experience/index.md#measuring-success)
- [Roadmap](../../../../company/strategy/enablement/dev-experience/index.md#roadmap)

## Responsibilities

_This section is a work in progress._

- [Continuous integration playbook](../../incidents/playbooks/ci.md)
- [Developer experience newsletter](./newsletter.md)

## Contact

- **Discussions and questions**: #dev-experience channel and [developer experience GitHub discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience)
- **[Support](#support)**: `@dev-experience-support` in Slack
- **GitHub**: [team/dev-experience](https://github.com/sourcegraph/sourcegraph/labels/team%2Fdev-experience) label and @sourcegraph/dev-experience team.
  - We also monitor and track issues with the [dx](https://github.com/sourcegraph/sourcegraph/labels/dx) label in our [GitHub project](https://github.com/orgs/sourcegraph/projects/212).

> NOTE: When referring to this team, prefer to use _Dev Experience_ or _DevX_ - only use _developer experience_ or _dx_ when referring to developer experience in general.

## Processes

To collaborate, we use the following:

- Internal team channel in #dev-experience-internal
- [Planning board](https://github.com/orgs/sourcegraph/projects/212)
- [Team sync](https://docs.google.com/document/d/1Lm6GT-F4v9OTa5wxa1-AKLtNwlDkORbbeGjqVd9kWPg/edit)
- Daily updates via [Geekbot](https://app.geekbot.com/dashboard/standup/90468/view/insights) to #dev-experience-updates
- [Google Drive folder](https://drive.google.com/drive/folders/1d1scMzzmXM5uCEpKI06U9cc6zPF7g9wE)

### Work allocation

We aim to allow teammates the flexibility to work on incoming requests, tackle proactive improvements, and invest in long-term efforts to further our [team goals](../../../../company/strategy/enablement/dev-experience/index.md), so as a rule of thumb:

- We aim to spend **20% to 30%** (~2-3 days every 2 weeks) of our time on making proactive impact, i.e. working on things that are aligned with the team's mission, but aren't on our roadmap.
- If **over 50%** (~5 days every 2 weeks) of our time is spent _outside_ of planned work (i.e support requests), we opt to discuss the scope and priority of the work with the team first.

### Meetings

_This section is a work in progress._

We currently have weekly sync meetings and biweekly retrospectives.

### Support

Support is handled through the `@dev-experience-support` handle in Slack.
Support on-call responsibilities on this team include:

- Urgent questions and issues
- [Build pipeline support](#build-pipeline-support)

#### Build pipeline support

Build pipeline support pertains to our [continuous integration](https://docs.sourcegraph.com/dev/background-information/continuous_integration).
This responsibility can be described as that of a "build sheriff" - the goal is to have someone lead on identifying the right person to drive a fix on an issue, rather than actively fixing every issue that arises.

As a build sheriff, the on-call support teammate should monitor the pipeline through channels like #buildkite-main for [flakes](https://docs.sourcegraph.com/dev/background-information/testing_principles#flaky-tests), and ensure issues are followed up on:

1. Infer the owner based on the contents of the issue, e.g. through product names and other context, and reach out for assistance:
   1. If a team can be inferred, ping the `@$TEAM-support` handle in Slack for assistance, escalating to `@$TEAM` if no support handle or teammate is available.
   2. If no team is easily inferred, ping the most recent author via `git blame` where relevant for assistance.
2. Guide the teammate towards a resolution for the issue by following our [broken builds process](https://docs.sourcegraph.com/dev/background-information/testing_principles#broken-builds-on-the-main-branch) (also see [Continuous integration: Flakes](https://docs.sourcegraph.com/dev/background-information/continuous_integration#flakes)).

### Newsletter

The DevX team is responsible for a **monthly** newsletter to highlight developer experience updates (not just those lead by the team). Learn more about it and see previous issues [in the newsletter archive](newsletter.md).

To prepare a new issue of the newsletter, create a PR for the latest newsletter issue here following the conventions in the [previous newsletters](./newsletter.md). Some tips:

- You can refer to [`dx-announce` issues and PRs](https://github.com/sourcegraph/sourcegraph/issues?q=+is%3Aclosed+sort%3Aupdated-desc+label%3Adx-announce) for content ideas!
- To include images, either [follow the official guide](../../../../handbook/editing/handbook-images-video.md) or upload images to a GitHub issue - this will provide a shareable link.

Once the newsletter is ready and reviewed, merge the PR. Then copy and paste the rendered newsletter from the handbook (you can set this up locally with `yarn dev`) into a draft newsletter. You will need to remove the background color from the pasted content, but the formatting should otherwise just work.

Verify the output looks good, and email it to engineering-team-status@sourcegraph.com.

## Growth plan

TODO

## Tech stack

TODO
