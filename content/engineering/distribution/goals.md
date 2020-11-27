# Distribution team goals

Goals are continuously updated and reviewed. If you find these goals do not reflect our current priorities or are out of date, please update them as soon as possible or add it as a topic to our [weekly sync](recurring_processes.md#weekly-distribution-team-sync).

## Goals

### Medium-term goals (~3-6 Months)

#### [Improve internal deployment pipeline UX](https://github.com/orgs/sourcegraph/projects/96)

Our existing deployment pipelines to our Sourcegraph instances (such as Sourcegraph Cloud) has several usability problems - for example, it is hard for engineers to identify when a commit was deployed to an environment or which deployment is currently running in a particular environment. We want to improve the deployment experience, making sure we can deploy with confidence and can easily understand in which stage of the pipeline a change currently is.

- **Owner**: TBD
- **Status**: Not started. Unknown amount of work.
- **Outcomes**:
  - It is simple to identify when a commit has been deployed to an environment.
  - Developers are notified when their PR is deployed to an environment.
  - Deployments display information about the artifact they are deploying.
  - We are able to rollback to or redeploy a previous version.
  - Stretch: We can correlate deployments to Grafana metrics and Stackdriver logs.
  - TBD: Branches can trigger a parallel `sourcegraph-frontend` deployment.
  - TBD: We can trigger rollbacks and deployments via a `/` command in Slack.
- **Milestones**: TBD

#### Any engineer at Sourcegraph can create a release for all of our supported deployment types by running a single action

Creating a new release for our deployments is currently a semi-automated process, which requires several manual steps and synchronizing our versioned artifacts (Sourcegraph, Kubernetes manifests, docker-compose manifests, etc). We want to enable any engineer to perform a release as often as needed, to enable this we want to make releasing Sourcegraph a simple, automated process.

- **Owner**: Dave, Robert
- **Status**: In progress. Estimated completion by end of FY21-Q1.
- **Outcomes**:
  - Releases can be triggered by a single manual step.
  - All supported deployment types are released at the same time with the same command.
  - Support documentation enables any engineer to perform a release with confidence.
- **Milestones**:
  - ~~[Enable running e2e test on an environment matching its test (docker-compose in a VM)](https://github.com/orgs/sourcegraph/projects/72).~~ Done: 3.20
  - ~~[Automatically update the dogfood cluster](https://github.com/orgs/sourcegraph/projects/83).~~ Done: 3.20
  - [Enable continuous e2e tests on `main`](https://github.com/orgs/sourcegraph/projects/90). **In progress**
  - [Releases can be done in a single day](https://github.com/orgs/sourcegraph/projects/90). **In progress**
  - [Enable continuous regression tests on `main`](https://github.com/orgs/sourcegraph/projects/90). **In progress**
  - [Ensure relevant engineers are notified of broken builds](https://github.com/orgs/sourcegraph/projects/90). **In progress**
  - Releases can be done automatically with a single action (e.g. CLI command, `/` command in Slack, etc.). _Estimated: 2020_

#### [Upgrades between releases are easy to perform](https://github.com/orgs/sourcegraph/projects/71)

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
  - Create a demo video/presentation to gather customer feedback. **In progress**
  - Create customer facing migration path and how-to documentation. _Estimated: 2020_
  - Use Dhall to generate public Kubernetes manifests.
  - Migrate a highly technical customer to Dhall and collect usage feedback.
  - Design customization workflow.
    - Potentially Kustomize would still be used for last-mile changes and non-standard derivations.

#### Improve the debugging and troubleshooting process

As we deploy Sourcegraph to multiple different environments, we need to provide a consistent and straightforward process to debug issues. We are currently lacking tools to collect debugging information (configuration, type, size, diff from upstream, etc) consistently and a process to capture the output of debugging sessions to feed back into our priorities and documentation.
We will initially focus on reducing the time it takes to collect troubleshooting information.

- **Owner**: TBD
- **Status**: Not started. Unknown amount of work.
- **Outcomes**:
  - We can categorize and capture the amount of effort spent on different incident types.
  - We can provide a straightforward set of tools to collect initial debugging and deployment information.
  - TBD
- **Milestones**: TBD

#### [Split Cloud infrastructure into separate GCP projects](https://github.com/orgs/sourcegraph/projects/92)

- **Owner**: Gonza
- **Status**: In progress. Estimated complete by end of 2020.
- **Outcomes**:
  - We have a clear guideline on when to split resources to new projects.
  - We report the cost of each project.
  - We can set spending limits for dynamic environments.
- **Milestones**:
  - ~~Create initial GCP structure.~~ Done: 3.19
  - ~~Move non-production projects to folders.~~ Done: 3.20
  - ~~Move CI to a new GCP project.~~ Done: 3.21
  - ~~Move non-production deployments to separate projects.~~ Done: 3.21
  - ~~Create code to bootstrap new projects.~~ Done: 3.21
  - Document project and folder usage guidelines.
  - Set spending limits for dynamic environments.

#### Site admins use reliable methods like Docker Compose or Kubernetes for production deployments

Many customers of Sourcegraph today are still running a single-container `sourcegraph/server` deployment in production. In 2019 we began advising all new deployments that this deployment option is _not_ for production use because it has no proper resource isolation and as such when it falls over it is impossible to debug, leading to painstakingly urgent migrations to better deployment types and frustrated/angry customers. We would like to get to a world where all production instances of Sourcegraph use reliable deployment methods like Docker Compose or Kubernetes.

- **Owner**: TBD
- **Status**: [RFC 263 REVIEW: Single-container deployments are for demos only](https://docs.google.com/document/d/1GPypas4ZUZIw346EcNDM1up2OOQFyPpEzA3-0glPEMY/edit)
- **Outcomes**:
  - Customer deployments become more reliable in performance, stability, uptime, etc.
  - No customers are using the unreliable `sourcegraph/server` for their production deployment.
  - Customers upgrade to Docker Compose or Kubernetes deployments without any major trouble.
- **Milestones**:
  - ~~RFC creation.~~
  - RFC approval.
  - ...TBD...

#### Support upgrading across multiple Sourcegraph versions

Upgrading from 3.13 -> 3.17 requires you perform 4 individual upgrades today (3.14 -> 3.15 -> 3.16 -> 3.17) which is extremely painful and time consuming for site admins, especially so given how time consuming our upgrade process is in general. We would like to make upgrades across multiple Sourcegraph versions easier.

- **Owner**: TBD
- **Status**: Not started. Unknown amount of work.
- **Outcomes**:
  - Customers can upgrade across multiple versions of Sourcegraph, allowing them to get up-to-date more quickly and easily.
- **Milestones**:

### Short-term goals

Short-term goals are described in our [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Atracking+label%3Ateam%2Fdistribution).

## Past goals

We record past goals that we have completed [here](goals_completed.md).

## Roadmap

[Distribution roadmap PR](https://github.com/sourcegraph/about/pull/1104)
