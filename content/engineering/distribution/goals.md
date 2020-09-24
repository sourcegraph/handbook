# Distribution team goals

Goals are continuously updated and reviewed. If you find these goals do not reflect our current priorities or are out of date, please update them as soon as possible or add it as a topic to our [weekly sync](recurring_processes.md#weekly-distribution-team-sync).

## Medium-term goals (~3-6 Months)

### Any engineer at Sourcegraph can create a release for all of our supported deployment types by running a single command

Creating a new release for our deployments is currently a semi-automated process, which requires several manual steps and synchronizing our versioned artifacts (Sourcegraph, Kubernetes manifests, docker-compose manifests, etc). We want to enable any engineer to perform a release as often as needed, to enable this we want to make releasing Sourcegraph a simple, automated process.

- **Owner**: Stephen, Dave, Robert
- **Status**: In progress. Estimated completion by end of 2020.
- **Outcomes**:
  - Releases can be triggered by a single manual step.
  - All supported deployment types are released at the same time with the same command.
  - Support documentation enables any engineer to perform a release with confidence.
- **Milestones**:
  - ~~[Enable running e2e test on an environment matching its test (docker-compose in a VM)](https://github.com/orgs/sourcegraph/projects/72).~~ Done: 3.20
  - ~~[Automatically update the dogfood cluster](https://github.com/orgs/sourcegraph/projects/83).~~ Done: 3.20
  - [Enable continuous e2e tests on `main`](https://github.com/orgs/sourcegraph/projects/72). **In progress**
  - [Releases can be done in a single day](https://github.com/orgs/sourcegraph/projects/90). **In progress**
  - [Enable continuous regression tests on `main`](https://github.com/orgs/sourcegraph/projects/90). **In progress**
  - [Ensure relevant engineers are notified of broken builds](https://github.com/orgs/sourcegraph/projects/90). **In progress**
  - Releases can be done automatically with a single `/` command via Slack. _Estimated: 2020_

### [Upgrades between releases are easy to perform](https://github.com/orgs/sourcegraph/projects/71)

Performing upgrades to deployments is currently a complicated process that requires keeping a fork of our configuration and resolving diff conflicts when performing upgrades which are often complicated as the configuration might contain environment-specific customization. This process creates a bad experience for our customers because of the unknown amount of effort of the upgrade process.
We will start by looking at our Kubernetes deployment and working on an easier update process.

- **Owner**: Geoffrey, Uwe
- **Status**: In progress. Estimated completion FY20-Q4.
- **Outcomes**:
  - Upgrades to deployments do not require resolving diff conflicts from upstream.
  - Upgrading a deployment configuration requires less than 2 hours of work.
- **Milestones**:
  - ~~Research and evaluate possible tools.~~ Done: 3.19
    - ~~Bash/JQ.~~
    - ~~Cue.~~ Done: 3.17
    - ~~Dhall.~~ Done: 3.18
  - ~~Create a Kubernetes deployment PoC.~~ Done: 3.19
  - ~~Design Dhall Architecture.~~ Done: 3.20
  - Migrate internal deployments to Dhall, onboard other teams on how to make changes with Dhall and collect feedback. **In progress**
  - Create customer facing migration path and how-to documentation. _Estimated: 3.22_
  - Use Dhall to generate public Kubernetes manifests.
  - Migrate a highly technical customer to Dhall and collect usage feedback.
  - Design customization workflow.
    - Potentially Kustomize would still be used for last-mile changes and non-standard derivations.

### Improve the debugging and troubleshooting process

As we deploy Sourcegraph to multiple different environments, we need to provide a consistent and straightforward process to debug issues. We are currently lacking tools to collect debugging information (configuration, type, size, diff from upstream, etc) consistently and a process to capture the output of debugging sessions to feed back into our priorities and documentation.
We will initially focus on reducing the time it takes to collect troubleshooting information.

- **Owner**: TBD
- **Status**: Not started. Unknown amount of work.
- **Outcomes**:
  - We can categorize and capture the amount of effort spent on different incident types.
  - We can provide a straightforward set of tools to collect initial debugging and deployment information.
  - TBD
- **Milestones**: TBD

### [Split Cloud infrastructure into separate GCP projects](https://github.com/orgs/sourcegraph/projects/92)

- **Owner**: Gonza
- **Status**: In progress. Estimated complete by end of 2020.
- **Outcomes**:
  - We have a clear guideline on when to split resources to new projects.
  - We report the cost of each project.
  - We can set spending limits for dynamic environments.
- **Milestones**:
  - ~~Create initial GCP structure.~~ Done: 3.19
  - ~~Move non-production projects to folders.~~ Done: 3.20
  - Move CI to a new GCP project **In progress**
  - Move non-production deployments to separate projects. **In progress**
  - Create code to bootstrap new projects.
  - Document project and folder usage guidelines.

## Short-term goals

Short-term goals are described in our [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Atracking+label%3Ateam%2Fdistribution).
