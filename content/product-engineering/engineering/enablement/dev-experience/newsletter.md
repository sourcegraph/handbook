# 🗞 Developer experience newsletter

Welcome to the developer experience newsletter! This is a newsletter prepared by the [DevX team](./index.md) to highlight contributions and updates to Sourcegraph's developer experience, which is [an area the DevX team focuses on but is owned by everyone](../../../../company/strategy/enablement/dev-experience/index.md#guiding-principles).

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #dev-experience or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

To learn more about components of Sourcegraph's developer experience, check out the [developer documentation](https://docs.sourcegraph.com/dev).

> NOTE: For authors, refer to [this guide](./index.md#newsletter) for preparing a newsletter.

## Nov 23, 2021

Hello everyone, and welcome to another iteration of the Developer Experience newsletter!

To have your updates highlighted here, please tag your PR or issue with the `dx-announce` label! If you have questions or feedback, feel free to reach out in #dev-experience or in our [discussions](https://github.com/sourcegraph/sourcegraph/discussions/categories/developer-experience) as well.

### Onboarding

Significant progress has been made with sg setup, a new command that is slated to replace all the manual fenangling that must be done today to set up a Sourcegraph development environment. See a sneak peak of the upcoming iteration of the tool [here](https://sourcegraph.slack.com/archives/C01N83PS4TU/p1637576910255900)!

### Continuous integration

The Dev Experience team is proposing a "build sheriff" rotation in [RFC 515](https://docs.google.com/document/d/1rHOOgvWmBB5c4aS_wWPogNCAWT6_tww8tceSy6nzFy8/edit), with the goal of distributing knowledge and responsibilities around our CI infrastructure to all of engineering through regular rotations of "build sheriffs".

You may have noticed a daily update in #dev-experience providing an overview of how CI has behaved that day - this will be helping us track our progress towards a flake-free pipeline! If you need more details, a [dashboard is now available in Grafana Cloud](https://sourcegraph.grafana.net/d/iBBWbxFnk/ci?orgId=1) that features an overview of recently failed builds, steps, and potentially relevant logs. You can use this to see if lots of builds are failing on similar steps, which steps are the most problematic, and whether the issues are potentially related. A link can also be found in the Slack summaries. Let us know what you think on [#26118](https://github.com/sourcegraph/sourcegraph/issues/26118)!

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

On a similar note, tests have been undergoing [incremental updates](https://github.com/sourcegraph/sourcegraph/pull/27401) to leverage the more ergonomic and self-contained database mocks - a [brief guide is available](https://docs.sourcegraph.com/dev/background-information/languages/testing_go_code#testing-with-a-database) if you know an area of the codebase that could use a similar update!

## Nov 2, 2021

Hello everyone! Welcome back to the Developer Experience newsletter. It is a compilation of announcements related to development experience at Sourcegraph. DevX is a global effort

To be mentioned here in the next iteration, please tag your PR or issue with dx-announce!

### DevX team mission statement

Published Developer Experience team mission and strategy: [https://handbook.sourcegraph.com/company/strategy/enablement/dev-experience](https://handbook.sourcegraph.com/company/strategy/enablement/dev-experience)

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

Just sign up via GSuite SSO on [https://sourcegraph.grafana.net](https://sourcegraph.grafana.net/). This Grafana instance currently has logs for Sourcegraph Cloud, available for search with [LogQL](https://grafana.com/docs/loki/latest/logql/) via Loki. It has support for querying inferred fields from log messages, filtering for substring matches, and more. [Try it out!](https://sourcegraph.grafana.net/explore?orgId=1&amp;left=%5B%22now-1h%22,%22now%22,%22grafanacloud-sourcegraph-logs%22,%7B%22expr%22:%22%7Bapp%3D%5C%22sourcegraph-frontend%5C%22%7D%20%7C%20logfmt%20%7C%20lvl%20%3D%20%5C%22eror%5C%22%20%7C%3D%20%5C%22migration%5C%22%22%7D%5D)

Metrics and parity with /-/debug/grafana is on the roadmap - follow [#25407](https://github.com/sourcegraph/sourcegraph/issues/25407) for updates on that!

**Shoutouts to teammates that improved our dev experience in September** [**Robert Lin, Valery Bugakov, Thorsten Ball, JH, Camden Cheek, Erik Seliger, Coury Clark and Quinn Slack**](https://github.com/sourcegraph/sourcegraph/pulls?page=2&amp;q=is%3Apr+is%3Amerged+label%3Adx) **.**
