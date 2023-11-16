# Developer Infrastruture Team

<img align="right" src="https://user-images.githubusercontent.com/23356519/166327839-472252c9-e3aa-460e-8c11-5655b0451ae2.png" height="300" alt="Sourcegraph Developer Infrastructure temporary team logo"></img>

The Developer Infrastructure team, or DevInfra for short, is a team focused on improving the developer experience of Sourcegraph.

Need DevInfra help or support? Jump to the [Contact section](#contact).

## Leadership

{{generator:product_team_leads.ship_devinfra}}

## Members

{{generator:product_team.ship_devinfra}}

## Strategy

Find out more about the Developer Infrastructure team's mission, vision, and strategic plans in our [Strategy page](../../../../strategy-goals/strategy/devinfra/index.md).

## Responsibilities

- General
  - Monitoring and triaging [`dx` issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Adx) and [project board](processes.md#updating-the-dev-experience-project-board)
  - [Developer Infrastructure support](processes.md#support)
- Tooling
  - [`sg` - the Sourcegraph developer tool](https://docs.sourcegraph.com/dev/background-information/sg) ([`dev/sg`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/dev/sg))
  - [CLA bot](https://github.com/sourcegraph/clabot-config)
  - [Monitoring generator](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/monitoring)
- Backend platform
  - [`lib/errors`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/lib/errors): error types for Sourcegraph backend services
  - [`sourcegraph/log`](https://sourcegraph.com/github.com/sourcegraph/log/-/tree): standardized logging for Sourcegraph backend services + [how-to guide](https://docs.sourcegraph.com/dev/how-to/add_logging)
  - [`sourcegraph/run`](https://sourcegraph.com/github.com/sourcegraph/run/-/tree): execute commands and manipulate command output in Go experiment
  - [`internal/observation`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/internal/observation): all-in-one operation-oriented observability primitives + [how-to guide](https://docs.sourcegraph.com/dev/how-to/add_observability)
  - [`internal/trace`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/internal/trace), [`internal/tracer`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/internal/tracer): tracing infrastructure and libraries
  - Packaging infrastructure (e.g. base Docker images)
  - [SOC2 compliance](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6NjA=) regarding software development lifecycles, testing, and continuous integration
  - [`*.(bazel|bzl)`](https://sourcegraph.com/search?q=context%3Aglobal+lang%3AStarlark+repo%3Agithub.com%2Fsourcegraph%2Fsourcegraph&patternType=regexp&sm=0&groupBy=repo)
- Continuous integration (also see [CI support responsibilities](processes.md#ci-support-responsibilities))
  - [`sourcegraph/sourcegraph` Buildkite pipelines](https://docs.sourcegraph.com/dev/background-information/continuous_integration#buildkite-pipelines)
    - [Pipeline generator](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/enterprise/dev/ci)
    - [Documentation](https://docs.sourcegraph.com/dev/background-information/ci)
  - [Continuous integration infrastructure](../../dev/tools/infrastructure/ci/index.md) (Buildkite agents, etc.)
    - [buildkite-job-dispatcher](../../dev/tools/infrastructure/ci/index.md#buildkite-job-dispatcher)
  - [Continuous integration playbook](../../dev/process/incidents/playbooks/ci.md)
  - [Bazel support](https://docs.sourcegraph.com/dev/background-information/bazel)
- Other
  - [Maintaining various instances of Sourcegraph](#sourcegraph-instances-operated-by-us)
  - [Developer experience newsletter](./newsletter.md)
  - [`sg` hack hour](processes.md#sg-hack-hour)
  - GCP cost and cost reduction initiatives

Also see [org-wide areas of ownership](../../dev/process/engineering_ownership.md#developer-experience) and our [team processes](processes.md).

## Support levels

The team operate across a broad range of responsibilities, so it's best to reason in terms of how much a given issue affects others.
The below list gives an overview of the commonly encountered scenarios, but isn't meant to be exhaustive.

- _P0_: Issues that are affecting at least a third of the engineering team and that have no immediate workaround.
- _P0_: Issues the CI where a given build is affecting other builds, i.e breaking isolation.
- _P0_: Issues caused by Bazel, affecting releases (broken release or preventing it to be created).
- _P1_: Issues with CI or local environment that are threating another team objectives.
- _P2_: Issues causing intermittent failures in CI.
- _P3_: Default priorities for support requests when created.
- _P4_: Issues that can wait, usually QoL improvements.

## Contact

For **questions** and **discussions** about anything related to developer experience, post a message in the [#discuss-dev-infra channel](https://sourcegraph.slack.com/archives/C01N83PS4TU).

For **urgent requests** or if you're **blocked** on something important, add the `@dev-infra-support` tag in your message.

- The `@dev-experience-support` tag will ping an on-call member of the DevInfra team.
- Requests tagged with `@dev-experience-support` will get priority support.
- Please use the `@dev-experience-support` tag only for issues that require immediate attention.

You can also interact with us on **GitHub**:

- [team/devinfra](https://github.com/sourcegraph/sourcegraph/labels/team%2Fdevinfra) label
- To request a code review from us, tag the @sourcegraph/devinfra team.
- We also monitor and track issues with the [dx](https://github.com/sourcegraph/sourcegraph/labels/dx) label in our [GitHub project](processes.md#devinfra-project).
- We have a public [GitHub Discussions board](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience). You can also create a discussion directly on our board with the command `sg feedback`

> [!NOTE] When referring to this team, prefer to use _Developer Infrastructure_ or _DevInfra_ - only use _developer experience_ or _dx_ when referring to developer experience in general.

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../dev/process/principles-and-practices.md). In addition, the following principles guide the work we do in Developer Infrastructure. Sometimes adhering to one causes us to compromise another, but they guide our decisions on what matters.

- **We don't own the developer experience at Sourcegraph – we simply focus on it.** Sourcegraph engineers own the developer experience as a collective.
- **We ship open products.** Our products are open to contributions to anyone in the company, documented, and provide migration paths if necessary. Our decisions are clearly and publicly communicated for everyone to understand our reasoning. We want to make it simple for everyone to benefit from and work on Sourcegraph’s developer experience.
- **We bandage first, then plan for surgery.** Fix local problems first, then generalize if and only if it makes sense.
  - What we cannot take upon right now, we make its status clear and provide stewardship.
    - We should never refuse to fix a "now" problem in favour of a long-term solution, only to cancel the fix because the priorities changed in between. More than not addressing the issue at hand, it prevents our users from fixing the problem for themselves in the meantime.
  - We deliver small and iterative experiments and collect feedback. We communicate regularly on their status to enable others to provide inputs. We should reap the benefits of what we work on as we go, not at the end.
- **We listen and observe.** Our users often know best what's immediately good for them because they are the ones experiencing it every day.
  We are not a dependency. We actively seek to avoid blocking product teams. We focus on improving and expediting progress, not being critical to it.

## Processes

Read more about [how this team works](./processes.md).

## Useful resources

- Tools and languages updates feed is available in #dev-infra-notifications
- GitHub issues and pull-requests feed is available in #dx-github-feed
- Alerts in #dev-experience-alerts
- [DevInfra initiatives code insights](https://k8s.sgdev.org/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3MjcyNTV9)
- [DevInfra-scratch](processes.md#DevInfra-scratch)
- Playbook for [CI Incidents](../../dev/process/incidents/playbooks/ci.md)

## Sourcegraph instances operated by us

We also maintain various instances of Sourcegraph which include:

- [sourcegraph.com (dotCom)](https://sourcegraph.com)
  - [Continuously deployed](../../dev/process/deployments/index.md#continuous-deployment-process) on the following schedule "09:00 UTC on Monday, 06:00 UTC rest of weekdays". To trigger a deployment refer to the [Deploying a code change to DotCom](../devops/deploy-code-change.md) document.
- [S2](https://golinks.io/s2)
  - Managed instance which is continuously deployed with a [GitHub action](https://golinks.io/s2-deploy) that runs every hour between 8am and 10pm UTC on weekdays.
  - For more information see [S2](../../dev/process/deployments/instances.md#sourcegraphsourcegraphcom-s2)
- [k8s](https://k8s.sgdev.com) aka "dogfood" for more information refer to the [Instances document](../../dev/process/deployments/instances.md)
- [Scaletesting](https://scaletesting.sgdev.org) for more information see [scaletesting](../../dev/tools/scaletesting.md)

## Tech stack

- We primarily build tools and libraries in Go, with a dash of bash scripting in between.
- We also operate [CI infrastructure](../../dev/tools/infrastructure/ci/index.md) with Kubernetes and Terraform.
- We're the reference point for any Bazel related effort.
