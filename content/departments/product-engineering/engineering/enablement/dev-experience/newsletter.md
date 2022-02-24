# 🗞 Developer experience newsletter

Welcome to the developer experience newsletter! This is a newsletter prepared by the [DevX team](./index.md) to highlight contributions and updates to Sourcegraph's developer experience, which is [an area the DevX team focuses on but is owned by everyone](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md#guiding-principles).

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #dev-experience or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

To learn more about components of Sourcegraph's developer experience, check out the [developer documentation](https://docs.sourcegraph.com/dev).

> NOTE: For authors, refer to [this guide](./index.md#newsletter) for preparing a newsletter.

## Feb 21, 2022

Welcome to another iteration of the [Developer Experience newsletter](./newsletter.md) of notable changes since the Jan 10th issue!
As a reminder, you can check out previous iterations of the newsletter in the [newsletter archive](./newsletter.md).

### SOC2 compliance processes

A new bot, `pr-auditor`, is now live in `sourcegraph/sourcegraph` and is rolling out to [a number of other repositories](https://k8s.sgdev.org/users/robert/batch-changes/pr-auditor-rollout) that houses code that reaches customers. `pr-auditor` will add status checks on your pull requests when you edit descriptions to indicate whether or not it has detected a "test plan" within your pull request description. If a "test plan" is not provided by the time a PR is merged, an issue will be created in [the `sec-pr-audit-trail` repository](https://github.com/sourcegraph/sec-pr-audit-trail/issues) requesting that the PR author document a test plan, or provide a reason for the exception. This serves as an audit log to help us achieve these two SOC2 control points:

> **GN-104** Code changes are systematically required to be peer-reviewed and approved prior to merging code into the main branch.

<span class="virtual-br">

> **GN-105** Application and infrastructure changes are required to undergo functional, security, unit, integration, smoke, regression, and SAST testing prior to release to production.

**What is a test plan?** A test plan is denoted by content following `# Test plan`, `Test plan:`, `### Test Plan:`, etc. within a pull request description. All pull requests must provide test plans that indicate what has been done to test the changes being introduced. Testing methodologies could include:

- [Automated testing](https://docs.sourcegraph.com/dev/background-information/testing_principles#automated-tests), such as unit tests or integration tests
- [Other testing strategies](https://docs.sourcegraph.com/dev/background-information/testing_principles#other-testing-strategies), such as manual testing, providing observability measures, or implementing a feature flag that can easibly be toggled to limit impact

**Pull request reviews are now also required by default**. Branch protections have been enabled in `sourcegraph/sourcegraph`. In other repositories with `pr-auditor` review checks must be opted out of by including `No review required: ...` within a pull request's test plan.

To learn more, refer to [our updated testing guidance](https://docs.sourcegraph.com/dev/background-information/testing_principles). You can find DevX SOC compliance documentation by control point in [this search notebook](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6NjA=). If you have any questions or feedback, please do not hesitate to reach out in #dev-experience or in our [GitHub discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience)!

### Internal tools and libraries

#### Database migrations update

We have now eradicated two classes of errors related to database migrations:

1. On the site-administrator and ops side, we no longer spuriously mark the database as dirty and give up any attempt at migrations at the first sign of trouble. We no longer immediately fail an upgrade because of the mere presence of an empty table or a concurrently created index. Now we only fail for **actual** reasons.
2. On the development side, we no longer have to worry about two independently created migrations clashing only after both are merged into `main`. That was very annoying to me and now it will never, ever happen again. Check out the help page for the new `sg migration` to check out the new tooling.

See the [migrator docs](https://docs.sourcegraph.com/admin/how-to/manual_database_migrations) for additional info.

#### New `lib/errors` package

_All_ errors in Sourcegraph backend services should now use the new `github.com/sourcegraph/sourcegraph/internals/errors` package. This consolidation helps us restrict and control the ways that we can create, consume, and compare errors, and will allows us to control library behavior clashes more easily in the future. [#30558](https://github.com/sourcegraph/sourcegraph/pull/30558)

#### Actor propagation reminder

Unified actor propagation was introduced a few months ago as part of an effort to enable the implementation of [sub-repository permissions](https://github.com/sourcegraph/sourcegraph/issues/27916) across all Sourcegraph features.
There have been gradual efforts to roll out this actor propagation to more services, which may cause behavioural changes that impact how permissions are handled if, for example, `internal` actors are not set explicitly.
When implementing new features please ensure that actors are correctly set and read from contexts.

To learn more, check out the [intro to actor propagation search notebook](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6OTI=).

#### New `teams` package

There is now a unified library for interacting with Sourcegraph teammates for whatever fun integrations you want to build! It leverages [`team.yaml`](https://github.com/sourcegraph/handbook/blob/main/data/team.yml) data as well as additional GitHub and Slack metadata:

```go
import "github.com/sourcegraph/sourcegraph/dev/internal/team"

func main() {
  // Neither a GitHub client nor a Slack client is required, but each enables more ways
  // to query for users and/or get additional metadata about a user.
  teammates := team.NewTeammateResolver(githubClient, slackClient)
  tm, _ := teammates.ResolveByName(ctx, "Robert")
  println(tm.SlackID)
  println(tm.HandbookLink)
  println(tm.Role)
  // etc.
}
```

`sg teammate`, branch lock notifications, and Buidlkite failure mentions are [all powered by this API](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+f:dev+ResolveBy...%28...%29+-f:test%7Cmock&patternType=structural).

### Continuous integration

#### Slack mention notifications

We now generate notifications for failed builds based on the author of each commit (using the [new teams package](#new-teams-package)).
Make sure to set up your [`teams.yaml` entry with your GitHub handle](https://github.com/sourcegraph/handbook/blob/main/data/team.yml) to get notified when your changes fail in `main`!

#### Pipeline readability improvements

Pipeline operations can now be configured into groups with `operations.NewNamedSet` ([#30381](https://github.com/sourcegraph/sourcegraph/pull/30381)). The result looks like this:

![Grouped operations](https://user-images.githubusercontent.com/23356519/151649399-247b9507-3d2e-48b3-9f10-48bea69872c8.png)

`sg ci preview` also leverages this grouping to improve readability of pipeline steps, as well as now leveraging a terminal Markdown renderer to generate nicer output! ([#30724](https://github.com/sourcegraph/sourcegraph/pull/30724))

#### Build traces are now uploaded to Honeycomb

Build traces are now uploaded to Honeycomb to dive into the performance of each command that gets run in a pipeline!
A link to the uploaded build trace is added as an annotation on the results of each Buildkite build.

![Trace example](https://user-images.githubusercontent.com/23356519/154169455-9d484f0f-7aac-4310-ac62-1551696765ff.png)

To learn more, check out the [Pipeline command tracing docs](https://docs.sourcegraph.com/dev/background-information/continuous_integration#pipeline-command-tracing).

#### Test analytics preview

We have started rolling out Buildkite test analytics support for Go tests and a subset of frontend tests that get run in continuous integration. This is still an experimental Buildkite feature, but you can learn more about it in our [Test analytics docs](https://docs.sourcegraph.com/dev/background-information/continuous_integration#test-analytics).

#### Pipeline documentation

A new command, `sg ci docs`, can now render a full, up-to-date reference of various run types that our pipeline can generate as well as example pipelines of each, such as what gets run with various diff types.
You can also see a web version of this in the [Pipeline types reference](https://docs.sourcegraph.com/dev/background-information/ci/reference).

Our [pipeline development guide](https://docs.sourcegraph.com/dev/background-information/continuous_integration#pipeline-development) has also been refereshed with updated content, featuring a series of embedded search notebooks! This includes new guidance on:

- [Creating pipeline annotations](https://docs.sourcegraph.com/dev/background-information/continuous_integration#creating-annotations) (using a new API introduced in [#30951](https://github.com/sourcegraph/sourcegraph/pull/30951))
- [Caching build artefacts](https://docs.sourcegraph.com/dev/how-to/cache_ci_artefacts)
- [Pipeline observability features](https://docs.sourcegraph.com/dev/background-information/continuous_integration#observability)

#### Generate builds using run types

`sg ci build` now supports an additional argument to automatically generate a Buildkite build using a specified run type ([#30932](https://github.com/sourcegraph/sourcegraph/pull/30932)). For example, to create a `main` dry run build:

```sh
sg ci build main-dry-run
```

This now also supports run types that require arguments, such as `docker-images-patch` - learn more in [#31193](https://github.com/sourcegraph/sourcegraph/pull/31193).

![sg ci build](https://user-images.githubusercontent.com/23356519/153933687-110f3657-543b-4d95-b01b-21b6b9e28514.png)

#### Coming soon: stateless Buildkite agents

We will soon be rolling out stateless Buildkite agents to all pipeline builds.
These should improve the stability and reliability of all pipelines by removing any issues that might be caused by lingering state from other builds.
Learn more about this in [this Loom demo](https://www.loom.com/share/601c226a8a93429890c40213922476f9)! ([#31003](https://github.com/sourcegraph/sourcegraph/issues/31003))

### Local development

#### Log entries now link to source in VS Code

Each log entry now prints an iTerm link that links to each log statement's source file:line in VS Code ([#30439](https://github.com/sourcegraph/sourcegraph/pull/30439)).

#### Workaround for MacOS firewalls

A new `-add-to-macos-firewall` flag, [enabled by default on MacOS](https://github.com/sourcegraph/sourcegraph/pull/31299), is now available on `sg start` and `sg run` to avoid all those pop-up prompts you get in MacOS when firewalls are enabled. [#30747](https://github.com/sourcegraph/sourcegraph/pull/30747)

If this causes issues for you, the behaviour can be disabled with `-add-to-macos-firewall=false`.

#### `sg` highlights

You can now see what has changed as part of your fresh `sg` installation with the `sg version changelog` command! You can also use it to see what's coming up next with `sg version changelog -next`. [#30697](https://github.com/sourcegraph/sourcegraph/pull/30697)

`sg start` now waits for all commands to install before starting them ([#29760](https://github.com/sourcegraph/sourcegraph/pull/29760)).

M1 macs no longer require _any_ additional workarounds ([#29815](https://github.com/sourcegraph/sourcegraph/pull/29815)).

`sg checks docker` now features a custom Dockerfile parser to enable more powerful checks, such as validating `apk add` arguments as well as also running more existing checks.
It now powers the Docker check in CI as well! ([#31217](https://github.com/sourcegraph/sourcegraph/pull/31217))

`sg setup` now features an overhauled checks system to make sure your dev environment is ready to go ([#29849](https://github.com/sourcegraph/sourcegraph/pull/31055)).

## Jan 10, 2022

Happy new year, and welcome to another iteration of the [Developer Experience newsletter](./newsletter.md)! It's been a little while since the last issue, so this is going to be a long one 😄 As a reminder, you can check out previous iterations of the newsletter in the [newsletter archive](./newsletter.md).

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #dev-experience or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

### Internal tools and libraries

#### Backward-compatible database migrations are now enforced

Backward-compatible database migrations are now enforced in the CI pipeline for `sourcegraph/sourcegraph` - see the PR to re-enable the check at [#28872](https://github.com/sourcegraph/sourcegraph/pull/28872). This PR contains some initial documentation on writing backwards-compatible migrations, but it is still a work in progress.

**What is a backwards compatible migration?:** A migration is backwards-compatible with a particular Sourcegraph version if those changes can be applied to a version without ill-effect.

**What has already changed? (TL;DR)**: We've removed our use of golang-migrate that ran database migrations on startup of the frontend service and added a `migrator` service that runs database migrations separately from and prior to instance upgrades. This puts us well on our way to removing the entire class of frequent "dirty database" bugs that plagues many site-administrators on every upgrade.

**What else is changing?:** We will soon be enforcing that the unit tests of the _previous minor release_ continue to pass with the newest database schema. This gives high confidence that any changes to the database will not negatively affect a running instance (behind at most one minor version). This allow site-administrators to upgrade an instance without requiring downtime to run the migrations.

Of course, this check will come with escape hatches in the event of flake or test failures that are locked in the past. We're currently fleshing out the documentation on the subject, so keep an eye out for updates!

For the full announcement or to leave comments, check out [the Slack discussion](https://sourcegraph.slack.com/archives/C0EPTDE9L/p1641329708282700)!

#### Actor propagation

Actors (used to identify a request in the context of a user or internal actor) are now propagated across _all_ internal requests when using the `httpcli` library, and the various approaches for propagating actors across services has been standardized with the new [`actor.HTTPMiddleware`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@9233e2cd9b96bbbbbfb4be2e72543cb41ad9920c/-/blob/internal/actor/http.go?L94:6#tab=references). This makes it easier to enforce permissions across services. For more details, see [#28117](https://github.com/sourcegraph/sourcegraph/pull/28117).

#### Database connections

[`dbconn.Global` has been removed](https://github.com/sourcegraph/sourcegraph/pull/28251)! This is a huge step towards [bringing better database mocking to the entire codebase](https://github.com/sourcegraph/sourcegraph/issues/26113) (check out the [code insights dashboard tracking relevant migrations](https://k8s.sgdev.org/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3MjY0OTB9)!)

![migration from global database mocks](https://user-images.githubusercontent.com/23356519/148499207-4862bdd8-2be6-4e73-9d47-2cd91f2c208c.png)

#### Tracking issues

[Tracking issues](../../process/tracking_issues.md) now support a new marker, `<!-- OPTIONAL LABEL: my-label -->`, that allows you to add labels on a tracking issue that do not need to be present on child issues for them to be considered part of this tracking issue. This is useful for making tracking issues easier to find without adding labels to every single issue within the tracking issue. For more details, see [#28665](https://github.com/sourcegraph/sourcegraph/pull/28665).

### Continuous integration

#### Subsequent `main` pipeline failures will now result in a branch lock

In response to a variety of CI incidents (including [INC-21](https://github.com/sourcegraph/sourcegraph/issues/25482) at the end of September) we have introduced automated branch locks via a tool called [`buildchecker`](https://github.com/sourcegraph/sourcegraph/tree/main/dev/buildchecker). When `buildchecker` detects a series of CI failures, it will now automatically restrict push access to `main` to authors of recent failed builds and the DevX team until it sees a passed build, at which point it will unlock the branch. A notification will be posted in Slack to #buildkite-main as well mentioning the relevant teammates.

It is the responsibility of authors of recently failed builds to investigate what might have gone wrong, seek help if needed, and help get the pipeline back green. We hope this will prevent long periods of time where many commits to `main` go untested due to failing jobs. To learn more, check out the [branch lock playbook](../../process/incidents/playbooks/ci.md#buildchecker-has-locked-the-main-branch)

We've also made significant investments towards improving and streamlining the pipeline for better stability and observability - most recently, [a large number of E2E/QA tests were dropped](#e2e-and-qa-tests-survey-results) - which will hopefully help with minimizing locks triggered by test and infrastructure flakes.

#### Specifying tools and language versions ran by _any_ continuous pipeline

In response to [INC-59](https://docs.google.com/document/d/1HXKZa9L3MVswK6pDpRN5TdCgUcEcQca9Re4vCwlb6Ek/edit#) we have reworked which tools and languages versions are to be used in a given CI job. Previously, the agents where running a mix of `asdf` and natively installed versions which created trouble when diagnosing build failures that weren't caused by the test themselves.

It is now _the responsibility of each repository to provide an adequate `.tools-version` file that defines what are the versions it needs_. There are no more pre-installed `go` version for example.
Presently, this approach is limited by having the plugin for that particular tool installed beforehand on the agents images (we are working on removing this limitation). The overarching goal is to make the agents reasonably independent from what they are actually building.

#### E2E and QA Tests survey results

[RFC 544](https://docs.google.com/document/d/1pHlgAj3JderMVsP2rWMovh2mTSK8TBecriSHLZX6UHQ/edit) explored the result of [the e2e and qa tests survey](https://sourcegraph.slack.com/archives/CHXHX7XAS/p1636989660454300). Thanks to the efforts of every team that took part to that survey, a large amount of irrelevant tests [have been removed](https://github.com/sourcegraph/sourcegraph/pull/28995). As a result, those tests are about seven minutes faster than before and the average build time on the `main` branch is hovering around the 20 minutes mark instead of 25 minutes.

There is more to come on that topic and the [Frontend Platform team](../frontend-platform/index.md) has plans to rework those tests as well as providing guidance on how to write them in reliable fashion.

#### Buildkite agent selection

Buildkite pipeline steps should now explicitly declare `queue: standard` to avoid experimental or temporary agents. For more details, see [infrastructure#2939](https://github.com/sourcegraph/infrastructure/pull/2939).

#### Terraform vulnerability scanning

The [security team](../../cloud/security/index.md) has introduced [Checkov checks](https://www.checkov.io/1.Welcome/What%20is%20Checkov.html) to the [`infrastructure` repository](https://github.com/sourcegraph/infrastructure) and performed a cleanup to fix or suppress all high and critical issues!

Going forward, the Checkov step of the infrastructure pipeline will be set to fail in the event it finds a Terraform security issue. If the pipeline fails a warning block will be displayed in the pipeline output - a link will take you to the handbook with guidance on how to continue, and additional output will help point you towards how to correct the issue. For more details, see [Checkov Terraform vulnerability scanning](../../cloud/security/checkov.md)

If anyone has any questions or issues, please post in the #security channel!

#### Sentry integration to monitor internal pipeline scripts and hooks

There are scripts and components of the CI pipeline that should never fail, independently of the tests results. These have proved be to hard to monitor, especially when the scripts are called from build hooks. Being notified when these failures happen enables faster reaction time. Here is an [example](https://github.com/sourcegraph/sourcegraph/pull/28915/files#diff-3c4244f37fc751696252758dd92a887d9e1e30851b18932c142ae56202bb5ea7R40) to get monitor a command so that a Sentry issue in the [Buildkite](https://sentry.io/organizations/sourcegraph/projects/buildkite/?project=6110304) project is created on a non zero exit code.

### Observability

The previous raw Grafana configuration used to add template variables to dashboards has been replaced with [`Container::Variables`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/docs/monitoring/monitoring?ContainerVariable) that abstracts away a lot of the behind-the-scenes dashboard config and potential gotchas to make it easier to define template variables on dashboards! Dashboard template variables are used to filter individual panels down by substituting variables in panel queries. Learn more in the [`ContainerVariable` API docs](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/docs/monitoring/monitoring?ContainerVariable).

![template variables](https://user-images.githubusercontent.com/23356519/148470790-4397f274-68c7-45ab-8f9a-9057d162b1ab.png)

### Local development

#### Revamped introductory documentation

The local development docs homepage has been revamped! Check it out at [docs.sourcegraph.com/dev](https://docs.sourcegraph.com/dev). The [quickstart docs](https://docs.sourcegraph.com/dev/setup/quickstart) has also been overhauled with a streamlined setup experience featuring `sg setup`, which has been greatly improved!

#### `sg` improvements

`sg` [now ships](https://github.com/sourcegraph/sourcegraph/pull/29382) a command that can reset databases as well as creating a site-admin: `sg db` (early adopters may have seen it under the name of `sg reset`). You can read more about the `sg db [reset-pg|reset-redis|add-user]` in the [documentation](https://docs.sourcegraph.com/dev/background-information/sg#sg-db-interact-with-your-local-sourcegraph-database-s)

If you have ideas of other features that would be great, don't hesitate to join the [`sg` hack hour](./index.md#sg-hack-hour) on Fridays at 4PM UTC!

## Nov 23, 2021

Hello everyone, and welcome to another iteration of the Developer Experience newsletter!

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #dev-experience or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

### Onboarding

Significant progress has been made with sg setup, a new command that is slated to replace all the manual fenangling that must be done today to set up a Sourcegraph development environment. See a sneak peak of the upcoming iteration of the tool [here](https://sourcegraph.slack.com/archives/C01N83PS4TU/p1637576910255900)!

### Continuous integration

The Dev Experience team is proposing a "build sheriff" rotation in [RFC 515](https://docs.google.com/document/d/1rHOOgvWmBB5c4aS_wWPogNCAWT6_tww8tceSy6nzFy8/edit), with the goal of distributing knowledge and responsibilities around our CI infrastructure to all of engineering through regular rotations of "build sheriffs".

You may have noticed a daily update in #dev-experience providing an overview of how CI has behaved that day—this will be helping us track our progress towards a flake-free pipeline! If you need more details, a [dashboard is now available in Grafana Cloud](https://sourcegraph.grafana.net/d/iBBWbxFnk/ci?orgId=1) that features an overview of recently failed builds, steps, and potentially relevant logs. You can use this to see if lots of builds are failing on similar steps, which steps are the most problematic, and whether the issues are potentially related. A link can also be found in the Slack summaries. Let us know what you think on [#26118](https://github.com/sourcegraph/sourcegraph/issues/26118)!

![image](https://user-images.githubusercontent.com/23356519/143134471-85e5cea1-a1a2-44cd-96ff-36f06b7fe125.png)

This dashboard is powered by build logs that are now parsed from Buildkite output and uploaded to Loki, a log database available for query in Grafana Cloud using [LogQL](https://grafana.com/docs/loki/latest/logql/). [Try it out here](https://sourcegraph.grafana.net/goto/LZur5Hpnz?orgId=1)! This can be especially useful when seeing if a build issue is a common recurrence.

We are also trialing a number of additional annotations for build failures that should serve to help surface actionable errors more easily, and are working towards exporting an API for it that will enable more checks to easily add digestible output to builds. Let us know in #dev-experience if you have any ideas for how this could be improved!

![image](https://user-images.githubusercontent.com/23356519/143134415-bc30233b-3d2e-4eb9-a3e6-99add60e839d.png)

### Observability

A proposed revamp of how Honey events are created has been proposed in [#27964](https://github.com/sourcegraph/sourcegraph/pull/27964), furthering work on turning internal/observation into the go-to package for all application observability needs.

[Distributed tracing is now available on worker jobs](https://github.com/sourcegraph/sourcegraph/pull/24008), enabling Jaeger traces to be collected for worker job processing. This is currently only enabled for precise-code-intel-worker in Cloud, and enabling this for other workers is in the works.

[RFC 501 REVIEW: Runtime error monitoring](https://docs.google.com/document/d/1d18e_YFJsw5cgDId8Iz1MT8A_GsHZTOGHMuem1JMzuM/edit) implementation is also progressing, which will allow errors to be more easily surfaced in Sentry to complement alerting.

### Code health

Work on reducing usages of globals has continued with [improvements to how site configuration is accessed](https://github.com/sourcegraph/sourcegraph/pull/27453) that allows site configuration clients to be injected into places that require it. This makes site configuration easier to mock out and test without replacing a global variable in mocks.

On a similar note, tests have been undergoing [incremental updates](https://github.com/sourcegraph/sourcegraph/pull/27401) to leverage the more ergonomic and self-contained database mocks—a [brief guide is available](https://docs.sourcegraph.com/dev/background-information/languages/testing_go_code#testing-with-a-database) if you know an area of the codebase that could use a similar update!

## Nov 2, 2021

Hello everyone! Welcome back to the Developer Experience newsletter. It is a compilation of announcements related to development experience at Sourcegraph. DevX is a global effort

To be mentioned here in the next iteration, please tag your PR or issue with dx-announce!

### DevX team mission statement

Published Developer Experience team mission and strategy: [handbook.sourcegraph.com/company/strategy/enablement/dev-experience](../../../../../strategy-goals/strategy/enablement/dev-experience/index.md)

### Buildkite incident post-mortem(s)

On Sep 19th, for about two hours, it wasn't possible to interact with any container registries from Google Cloud platform, which interrupted the process for release 3.33. You can find the detailed report here: [Postmortem Review: INC-25 Buildkite pipelines are not able to interact with container registry](https://docs.google.com/document/d/1Ag4s1GPX4RNU4vsSclT6Ejox6WOS3pWQQr1xz7UtEY0/edit?usp=sharing) .

On October 26th, for another two hours, the pipeline agents were down. You can find the detailed report here: [REVIEW: INC-30 Buildkite pipelines are failing due to pipeline generator failing to run](https://docs.google.com/document/d/1Mb-msMDM81dq7Kf3W4zwpDYYhwXzrPI92Q_RUWKL_U0/edit#)

### CI Pipeline highlights!

- All-in-one pipeline - check all your build jobs in one place! [https://github.com/sourcegraph/sourcegraph/pull/26051](https://github.com/sourcegraph/sourcegraph/pull/26051)
- Cross-build search for Buildkite failures: [https://github.com/sourcegraph/sourcegraph/pull/26259](https://github.com/sourcegraph/sourcegraph/pull/26259)
- We are now measuring how long the pipeline stays red per day. It captures both how reliable the pipeline is and how fast it gets back to green.
  - 22th: red for 1h8m
  - 21th: red for 1h34m
  - 20th: red for 21m
  - 19th: red for 2h4m
  - 18h: red for 54m
- Contractors are now able to access CI builds, as long as they prefix their PR with contractors/ and they have been manually added to buildkite contractors team.
- SQL queries are now displayed on failure in Go tests, both locally and in the CI. [https://github.com/sourcegraph/sourcegraph/pull/26020](https://github.com/sourcegraph/sourcegraph/pull/26020)
- One less papercut, remember the warning sign at the beginning of every step logs? It's not there anymore. [https://github.com/sourcegraph/sourcegraph/pull/26233](https://github.com/sourcegraph/sourcegraph/pull/26233)
- [RFC 497 WIP: Restructuring CI Experience](https://docs.google.com/document/d/1QqOb0ZDuUDSB57RM_YLzqAPFaFnDGq-8AES5yppWiqg/edit#heading=h.p8geto1rvwhg) is now open for feedback!

### SG Highlights

_`sg` is a CLI tool that wraps commands to run the local environment and interact with various Sourcegraph resources such as CI builds or RFC._

A new home for sg documentation: [https://docs.sourcegraph.com/dev/background-information/sg](https://docs.sourcegraph.com/dev/background-information/sg)

- sg ci logs - browse, grep, or save Buildkite output
  - Try the Loki integration locally for advanced search! [https://github.com/sourcegraph/sourcegraph/pull/25835](https://github.com/sourcegraph/sourcegraph/pull/25835)
- sg ci status --wait - get notified as soon as your Buildkite build completes
  - ![image](https://user-images.githubusercontent.com/23356519/143134317-8fa0f0d2-d8e9-4d4c-9ee0-68ec4d44d8fd.png)
- sg version: displays what version of sg you're currently running. Adding it to your message when requesting support for sg will really help!
- Our first bug report that came from the community has been fixed! [sg: include original err in install err](https://github.com/sourcegraph/sourcegraph/pull/26506)

### From the wider Sourcegraph community

- Runtime errors monitoring: [RFC 501 REVIEW: Runtime error monitoring](https://docs.google.com/document/d/1d18e_YFJsw5cgDId8Iz1MT8A_GsHZTOGHMuem1JMzuM/edit)

- Database mocking proposal: [https://github.com/sourcegraph/sourcegraph/pull/26129](https://github.com/sourcegraph/sourcegraph/pull/26129)

## Oct 8, 2021

Hello everyone! This is the first iteration of the Developer Experience newsletter. It is a compilation of announcements related to development experience at Sourcegraph.

To be mentioned here in the next iteration, please tag your PR or issue with dx-announce!

### A team has been created

The Developer Experience team has been created in mid September! Our first goal is to improve the CI experience.

### Buildkite incident post-mortem

Between Sep 21th and Sep 24th, our main branch builds were failing. Due to the difficulties we were having to reliably make it pass, we escalated it to an incident. To prevent new failures from piling up on the already broken branch, we made a decision to lock the main branch, which is a pretty unusual event.

You can find the detailed report in[Postmortem REVIEW: INC-21 Builds failing on main](https://docs.google.com/document/d/1QlosBcYayKqSeMpVuj-TXrFyxmFsiUyZZ_AM5nUz9OU/edit#), which is now in a reviewable state and open to feedback and any inputs.

We'd like to thank dearly all of those who helped to fix this: [Patrick Dubroy](mailto:patrick@sourcegraph.com), Robert Lin, Eric Fritz, Valery Bugakov, Tomás Senart, [Thorsten Ball](mailto:thorsten@sourcegraph.com), [Dax McDonald](mailto:dax@sourcegraph.com), Geoffrey Gilmore, [Erik Seliger](mailto:erik@sourcegraph.com), [Dave Try](mailto:dave@sourcegraph.com)and JH. With the actions we've proposed in the postmortem, we don't expect such an event to happen in the future.

### Pipeline improvements

The CI is what enables us to feel confident when delivering our changes to our users, and is one of the key components enabling Sourcegraph to deliver quality software.

Previously, it was really hard to find time to improve the CI because it was competing with infrastructure work in terms of prioritization, making it a frustrating but rational choice. With the recent team reorganization, making that hard choice is not a problem anymore as this component is now owned by the DX team.

Following up on the above incidents, it became absolutely clear that the CI is a big contender in the list of pains faced by everyone. The good news is that it's a pretty actionable one!

Let's start with some numbers:

- August average build time on the main branch: 19m57, on PR 20m24s
- September average build time on the main branch: 27m47s, on PRs 22m32 (1)
- October average build time on the main branch: 17m48s, on PRs 9m34

![image](https://user-images.githubusercontent.com/23356519/143134230-11641386-4588-4680-82c2-d85b576dc0ce.png)

- Pull requests now run a smaller set of checks on average, and it is easier to add additional PR checks of your own that run over subsets of code that you care about within the pipeline generator.
  See the [Introductory documentation](https://docs.sourcegraph.com/dev/background-information/continuous_integration) to help you get started with hacking on the pipeline generator
- Puppeteer [tests](https://github.com/sourcegraph/sourcegraph/pull/25027)[are now](https://github.com/sourcegraph/sourcegraph/pull/25027)[run in parallel multiple smaller steps](https://github.com/sourcegraph/sourcegraph/pull/25027), netting almost a 50% improvement :fire:
- (1) spiked because that's when the executor pipeline was introduced.

**What's next?**

Observability is crucial to being able to know when and on what to act. This led to the creation of [RFC 496 REVIEW: Continuous integration observability](https://docs.google.com/document/d/1fknr3NQGmwbKCfnF3Bcr-tYzV-TeuAGq-_Tm2-z_09M/edit#bookmark=id.7ia1mplkc80k) which is now in a reviewable state for everyone.

More speed improvements on the builds are being worked on, stay tuned!

### sg is officially entering our daily workflows

What if we had a tool that would be the entry point to interact with our development environment? That's the idea behind sg! Thorsten Ball has been driving this, with contributions from many other engineers. After a few months in a beta state, it's now becoming an integral part of our workflow.

[sg](https://github.com/sourcegraph/sourcegraph/tree/main/dev/sg) is now the default way to run the Sourcegraph development environment locally.

- After half a year of working on sg, the PR to remove what we once knew as `dev/start.sh` and `enterprise/dev/start.sh` has [been merged](https://github.com/sourcegraph/sourcegraph/pull/25505). Adios, 993 lines of shell script!
- The docs have also been updated: the [Getting Started guide](https://docs.sourcegraph.com/dev/getting-started) now uses sg.

But wait, there's more! A new group of commands has been added, the "ci" commands.

- sg ci preview: You can now preview which steps your branch is going to run on the CI with the sg ci preview command. See something that shouldn't be running in there? [Open a PR on the pipeline generator](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@main/-/tree/enterprise/dev/ci) !
- sg ci status: No more clicking around to find the current build in Buildkite!
- sg ci build: will trigger a manual build, useful if working from a sourcegraph fork.

And additional goodies: the sg teammate time and handbook commands that will tell you what is the current time of that person that lives very far from you, without having to leave your terminal.

**What's next?**

This is just the beginning. Work on [sg setup](https://github.com/sourcegraph/sourcegraph/issues/24900) has begun. The idea is that we can reduce the Getting Started guide from 8 pages down to "install sg and run sg setup".

### Grafana cloud is now available to all!

Just sign up via GSuite SSO on [https://sourcegraph.grafana.net](https://sourcegraph.grafana.net/). This Grafana instance currently has logs for Sourcegraph Cloud, available for search with [LogQL](https://grafana.com/docs/loki/latest/logql/) via Loki. It has support for querying inferred fields from log messages, filtering for substring matches, and more. [Try it out!](https://sourcegraph.grafana.net/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22grafanacloud-sourcegraph-logs%22,%7B%22expr%22:%22%7Bapp%3D%5C%22sourcegraph-frontend%5C%22%7D%20%7C%20logfmt%20%7C%20lvl%20%3D%20%5C%22eror%5C%22%20%7C%3D%20%5C%22migration%5C%22%22%7D%5D)

Metrics and parity with /-/debug/grafana is on the roadmap—follow [#25407](https://github.com/sourcegraph/sourcegraph/issues/25407) for updates on that!

**Shoutouts to teammates that improved our dev experience in September** [**Robert Lin, Valery Bugakov, Thorsten Ball, JH, Camden Cheek, Erik Seliger, Coury Clark and Quinn Slack**](https://github.com/sourcegraph/sourcegraph/pulls?page=2&q=is%3Apr+is%3Amerged+label%3Adx) **.**
