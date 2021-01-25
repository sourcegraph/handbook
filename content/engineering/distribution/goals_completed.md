# Distribution team completed goals

This page records goals completed by the Distribution team historically. See also our [current goals](goals.md).

- [**2020**](#2020)
  - [FY-20-Q4](#FY-20-Q1)
  - [FY-20-Q3](#FY-20-Q1)
  - [FY-20-Q2](#FY-20-Q1)
  - [FY-20-Q1](#FY-20-Q1)
- [**2019**](#2019)
  - [FY-19-Q4](#FY-19-Q4)

## 2020

### FY-21-Q1

### Any engineer at Sourcegraph can create a release for all of our supported deployment types

Creating a new release for our deployments is currently a semi-automated process, which requires several manual steps and synchronizing our versioned artifacts (Sourcegraph, Kubernetes manifests, docker-compose manifests, etc).
We want to enable any engineer to perform a release as often as needed, to enable this we want to make releasing Sourcegraph a simple, automated process.

- **Owner**: Dave, Robert
- **Outcomes**:
  - ~~Releases can be triggered by a single manual step.~~ _Descoped_: See "Descoped outcomes"
  - All supported deployment types are released at the same time with the same commands.
  - Support documentation enables any engineer to perform a release with confidence.
- **Milestones**:
  - ~~[Enable running e2e test on an environment matching its test (docker-compose in a VM)](https://github.com/orgs/sourcegraph/projects/72).~~ Done: `3.20`
  - ~~[Automatically update the dogfood cluster](https://github.com/orgs/sourcegraph/projects/83).~~ Done: `3.20`
  - ~~[Enable continuous e2e tests on `main`](https://github.com/orgs/sourcegraph/projects/90).~~ Done: `Dist: 2020.11.16`
  - ~~[Enable continuous regression tests on `main`](https://github.com/orgs/sourcegraph/projects/90).~~ Done: `Dist: 2020.11.16`
  - ~~[Ensure relevant engineers are notified of broken builds](https://github.com/orgs/sourcegraph/projects/90).~~ Done: `Dist: 2020.11.16`
  - ~~[Releases can be done in a single day](https://github.com/orgs/sourcegraph/projects/90)~~. Done: `Dist: 2021.01.11`
  - ~~[Releases can be done automatically (e.g. CLI command, `/` command in Slack, etc.)](https://github.com/orgs/sourcegraph/projects/131)~~._Descoped_: See "Descoped outcomes"
- **Descoped outcomes**:
  - [Releases can be done automatically (e.g. CLI command, `/` command in Slack, etc.)](https://github.com/orgs/sourcegraph/projects/131): this outcome was descoped since the work on this goal has brought the release process to a reasonable state, and a [preliminary investigation](https://github.com/sourcegraph/sourcegraph/issues/9252#issuecomment-761713632) indicated that there might be diminishing returns from additional work on this. A new goal has been created to track work on this.

### FY-20-Q4

#### Automatic e2e testing

[RFC 137](https://docs.google.com/document/d/14f7lwfToeT6t_vxnGsCuXqf3QcB5GRZ2Zoy6kYqBAIQ/edit#heading=h.trqab8y0kufp) saw us remove our e2e tests from CI entirely because it was unreliable. Now e2e tests are run as part of our monthly release process completely manually, and are heavily broken/outdated each time we attempt to do it. Fixing them often takes ~1.5d of work from a developer on the team. Per the RFC, we want to run these e2e tests on CI in an automated and reliable fashion.

- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10646)
- Discussions: [RFC 137](https://docs.google.com/document/d/14f7lwfToeT6t_vxnGsCuXqf3QcB5GRZ2Zoy6kYqBAIQ/edit#heading=h.trqab8y0kufp)
- Owner: Dave
- Dependencies:
  - [CI infrastructure that can run Docker containers in a reliable way](#ci-infrastructure-that-can-run-docker-containers-in-a-reliable-way)

#### CI infrastructure that can run Docker containers in a reliable way

Today we cannot release of Sourcegraph, run e2e tests, or perform Docker image tests in an automated fashion because our CI infrastructure does not support running Docker containers (or VMs/Vagrant) in a reliable way. We have a [side-car DIND container in our CI pipeline](https://k8s.sgdev.org/search?q=repo:sourcegraph/infrastructure%24+dind&patternType=literal) but it is flaky, unreliable, and a regular source of issues which has led to us removing automated testing (see [Automatic e2e testing](#automatic-e2e-testing)).

- Owner: Dave
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/6887)

#### Support customers in deploying Sourcegraph with 500k+ repositories

We have had customers interested in deploying Sourcegraph at large-scale with ~500k+ repositories and will need to dedicate time to supporting them and making their trial go smoothly.

- Owner: Uwe, Dave
- [Tracking issue](https://github.com/sourcegraph/customer/issues/57)
- Discussions: [Initial planning issue](https://github.com/sourcegraph/customer/issues/57), [discussion about costs at this scale](https://github.com/sourcegraph/customer/issues/20)

### FY-20-Q3

#### Docker-compose should be released on-time (on the 20th)

Docker-compose deployments were never properly integrated into our release process, and as such it has been released late by about one week after the official release date of 20th when the blog post announcement goes live. This has happened for the past ~4 releases. This has been a recurring problem for customers ("I can't upgrade it doesn't seem to be released"), which has increased support load, and has been a recurring worry from the CE team and others ("can I tell this customer to upgrade to fix their issue yet?").

- Owner: Stephen, Dave, Uwe
- [Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/10486)

#### Add monitoring for common critical issues

While Sourcegraph does have built-in monitoring that is well-defined and works generally well, there are large gaps in several areas for common critical issues such as repositories failing to clone, repositories being deleted en-mass, search indexing failing, containers/services being unreachable, and much more. We need to add monitoring for common critical issues via per-team alerting and getting widespread adoption of standardized alerting internally at Sourcegraph.

- Owner: Robert, Stephen
- [Tracking issue](https://github.com/orgs/sourcegraph/projects/73)

#### GitOps / Terraform for all internal infrastructure

Today much of our internal infrastructure is managed directly instead of through GitOps / Terraform. It is common to require manual changes or interaction with the cluster to perform ops duties. We want to move to a world where all Sourcegraph internal infrastructure (CI pipelines, Sourcegraph.com, etc.) is managed by Git Ops, and all changes have review using a Git workflow.

- Owner: Gonza, Dax, Dave, Stephen

#### All site admins should have alerting set up to be notified when Sourcegraph is unhealthy

We have standardized alerting across our deployment methods, but it is very difficult to set up. Make it easy enough that all site admins can configure alerting and get notified when Sourcegraph is unhealthy.

- Owner: Robert

### FY-20-Q2

(This section left empty as we were using a different goal system during this time.)

### FY-20-Q1

(This section left empty as we were using a different goal system during this time.)

## 2019

### FY-19-Q1

(This section left empty as we were using a different goal system during this time.)

### FY-19-Q4

(This section left empty as we were using a different goal system during this time.)

#### Push admins to upgrade more frequently

See [RFC 80: Push users to upgrade more frequently](https://docs.google.com/document/d/17WamvKWQjEkzhun3za9KS2t5Anm9ey8ws4D0tz4xPkY/edit) for details.

- Owner: Stephen
- Discussions: [RFC 80: Push users to upgrade more frequently](https://docs.google.com/document/d/17WamvKWQjEkzhun3za9KS2t5Anm9ey8ws4D0tz4xPkY/edit)

#### Support process changes

See [RFC 117 Private: Support process changes](https://docs.google.com/document/d/12nCg0OuZsrWCB3_nN_F0duu5sxGXUgPbBRoqbxj8a2A/edit) for details.

- Owner: Stephen
- Discussions: [RFC 117 Private: Support process changes](https://docs.google.com/document/d/12nCg0OuZsrWCB3_nN_F0duu5sxGXUgPbBRoqbxj8a2A/edit)

#### Deploy Jaeger tracing by default in all deployment types

See [issue #9300](https://github.com/sourcegraph/sourcegraph/issues/9300) for details.

- Owner: Stephen
- Discussions: [issue #9300](https://github.com/sourcegraph/sourcegraph/issues/9300)

#### Remove the management console entirely

See [Proposal PR: Remove the management console (🦄unicorns and 🌈rainbows here)](https://github.com/sourcegraph/sourcegraph/pull/7197) for details.

- Owner: Stephen
- Discussions: [Proposal PR: Remove the management console (🦄unicorns and 🌈rainbows here)](https://github.com/sourcegraph/sourcegraph/pull/7197)

#### Authless management console access

See [RFC 63: Authless management console access](https://docs.google.com/document/d/1RkOS4EehLtAXhunTazkjCI4yKi5Hc8eRcHZ_v1Fz_QU/edit) for details.

- Owner: Stephen
- Discussions: [RFC 63: Authless management console access](https://docs.google.com/document/d/1RkOS4EehLtAXhunTazkjCI4yKi5Hc8eRcHZ_v1Fz_QU/edit)
