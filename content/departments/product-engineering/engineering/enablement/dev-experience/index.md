# Dev Experience team

The Dev Experience team, or DevX for short, is a team focused on improving the developer experience of Sourcegraph as part of the [Enablement](../index.md) org.

## Members

{{generator:product_team.dev_experience}}

## Strategy

Find out more about the Dev Experience team's mission, vision, and strategic plans.(../../../../../strategy-goals/strategy/enablement/dev-experience/index.md)

## Responsibilities

- General
  - Monitoring and triaging [`dx` issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Adx)
  - [Developer experience support](/processes.md#support)
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

## Contact

- **Discussions and questions**: #dev-experience channel, @dev-experience, and [developer experience GitHub discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience)
- **[Support](#support)**: `@dev-experience-support` in Slack
- **GitHub**: [team/dev-experience](https://github.com/sourcegraph/sourcegraph/labels/team%2Fdev-experience) label and @sourcegraph/dev-experience team.
  - We also monitor and track issues with the [dx](https://github.com/sourcegraph/sourcegraph/labels/dx) label in our [GitHub project](https://github.com/orgs/sourcegraph/projects/212).

> NOTE: When referring to this team, prefer to use _Dev Experience_ or _DevX_ - only use _developer experience_ or _dx_ when referring to developer experience in general.

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../../../departments/product-engineering/engineering/process/principles-and-practices.md) and [Enablement org's principles and practices](../../../../departments/product-engineering/engineering/enablement/index.md#principles-and-practices). In addition, the following principles guide the work we do in dev experience. Sometimes adhering to one causes us to compromise another, but they guide our decisions on what matters.

- **We don't own the developer experience at Sourcegraph – we simply focus on it.** Sourcegraph engineers own the developer experience as a collective.
- **We ship open products.** Our products are open to contributions to anyone in the company, documented, and provide migration paths if necessary. Our decisions are clearly and publicly communicated for everyone to understand our reasoning. We want to make it simple for everyone to benefit from and work on Sourcegraph’s developer experience.
- **We bandage first, then plan for surgery.** Fix local problems first, then generalize if and only if it makes sense.
  - What we cannot take upon right now, we make its status clear and provide stewardship.
    - We should never refuse to fix a "now" problem in favour of a long-term solution, only to cancel the fix because the priorities changed in between. More than not addressing the issue at hand, it prevents our users from fixing the problem for themselves in the meantime.
  - We deliver small and iterative experiments and collect feedback. We communicate regularly on their status to enable others to provide inputs. We should reap the benefits of what we work on as we go, not at the end.
- **We listen and observe.** Our users often know best what's immediately good for them because they are the ones experiencing it every day.
  We are not a dependency. We actively seek to avoid blocking product teams. We focus on improving and expediting progress, not being critical to it.

## Processes

Read more about [how this team works](/processes.md).

## Useful resources

- Tools and languages updates feed is available in #dev-experience-notification
- GitHub issues and pull-requests feed is available in #dx-github-feed

## Growth plan

Come work with us! We're hiring software engineers to join our team in Q3 and Q4.

## Tech stack

TODO
