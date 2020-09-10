# Code intelligence team

The Code Intelligence team builds tools and services that provide contextual information around code, taking into account its lexical, syntactic, and semantic structure. This includes:

- An API to provide fast, comprehensive, and accurate answers to important code navigation queries such as Go to Definition and Find References

- A powerful and flexible language-agnostic model of dependency relationships across projects, repositories, and languages

- Robust, extensible, and scalable infrastructure to index code across all languages, keep those indexes up-to-date, and efficiently resolve code intelligence queries against all indexed code.

## Vision

To be the point of discovery for the knowledge graph for all source code.

## Mission

Build a code intelligence platform that understands code in all languages and provides rich metadata to power code search, insights and campaigns.

## Goals

This list will be updated regularly with links to the technical implementation details in RFCs and/or Github issues.

### Provide precise code intel for the primary programming languages that combined cover > 50% of usage across customer projects.

- Metrics:
  - Language coverage (%)
- Planned work:
  1. Resolve outstanding issues for lsif-clang, ship to 3 customers, [tracking issue 12349](https://github.com/sourcegraph/sourcegraph/issues/12349).
  1. Resolve outstanding issues for lsif-java, ship to 3 customers, [tracking issue 13017](https://github.com/sourcegraph/sourcegraph/issues/13017).
  1. Resolve outstanding issues for lsif-go, ship to 3 customers, [tracking issue 13015](https://github.com/sourcegraph/sourcegraph/issues/13015).
  1. Provide best effort auto-indexing for supported languages, [RFC-199](https://docs.google.com/document/d/1rCduWqaLAbMu2s43RwJTBbRlhL6qS3oqq4iawiGdoVE/edit), [RFC-201](https://docs.google.com/document/d/1NPQs1s814LZjNXjPuavqC1N7hZR192DNtmSBmAeH9UY/edit).
- Success Outcome: We have accurate and comprehensive precise code intel for C++, Go, and Java. We will work to ship each indexer to at least 3 customers and gather feedback for future iteration. The precision level for each indexer tool is > 80%.

### Create a backend that can perform and scale across organizations of various sizes up to the upper boundaries of our system.

- Metrics:
  - Request Latency
  - System Throughput
  - Max number of repositories (N1)
  - Max size of project (N2)
  - Max commit rate of repository (N3)
- Planned work:
  1. Gather current values for metrics Request Latency and System Throughput, create benchmarks for existing system.
  1. Source and track current performance of tools across following dimensions: Number of repositories (N1), Size of project (N2), Commit rate of repos (N3).
  1. Determine the upper boundary of the code intel backend across scale dimensions: max of N1, N2, N3.
  1. Create a testbed environment that allows the team to instantiate & execute instances against various use cases in a controlled method for automation of stress and volume testing, [RFC 218](https://docs.google.com/document/d/1UitCAKefZLCewzDqxN787EsKDdepZ9Dqz1zXpdPFjgU/view).
  1. Develop a prototype for incremental indexing, [RFC-170](https://docs.google.com/document/d/1NPu0Vc7FpdoYwCrtpnu-8KB4OPbw7L0KBTqw96JVc8w/edit).
  1. Shard bundle manager, [RFC-200](https://docs.google.com/document/d/1IfkY9a6odfQmkjGtgJBFtPOUFuTwWryawFfVGRi8hO4/).
- Success Outcome: We understand the upper boundaries N1-N3. Code intel backend can achieve latency and throughput targets when operating within upper bounds of inputs N1-N3.

### LSIF indexers can operate in monorepos architecture.

- Metrics:
  - Time to Intelligence (TTI)
- Planned work:
  1. Create definition for Time to Intelligence metric and determine how this metric is measured and tracked.
  1. Create and send a survey to customers to gather information on monorepos use cases and stats.
  1. Identify the common challenges our customers are experiencing when operating Sourcegraph in monorepos by working directly with 3 customers to index a monorepos, gather feedback and identity problems we need to address.
  1. Update lsif-\* tools to enable indexing subsets of a project.
  1. Integrate with monorepos build systems: Bazel and stretch goal is one of: Buck, Pants, OAO
- Successful Outcome: Users are able to process monorepos with the same TTI as any other type of repository. Our tools provide configuration options that accomodate for complex use cases (cross repository and sub-project code intel).

### Provide clarity on capabilities of code intel tools at each release state

- Planned work:
  1. Define release states and their respective criteria.
  1. Assess each code intel tool against criteria and determine release state.
  1. Communicate changes by updating documentation on lsif.dev and /sourcegraph/lsif-\* repos.
- Success Outcome: We are able to consistently apply release states to our tools as they move through development lifecycle. We have provided clear communication to users, internal teams and stakeholders on capabilities of each tool.

## Contact

- #code-intel channel or @codeintel in Slack.
- [team/code-intelligence](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/code-intelligence) label in GitHub.

## Tech stack

Precise code intelligence specific services are written in Go and code intelligence features are added to the existing frontend service where possible. Sourcegraph extensions that provide code intelligence are written in TypeScript. We use SQLite databases to store data specific to a particular LSIF index and Postgres to store all other data.

## Team communication

Here are some key ways to contact us:

- On GitHub, mention or assign issues to the [@sourcegraph/code-intel](https://github.com/orgs/sourcegraph/teams/code-intel) team.
- On Slack, use the [#code-intel](https://app.slack.com/client/T02FSM7DL/CHXHX7XAS) channel.
- On Google Drive, we use the [Code Intel](https://drive.google.com/drive/folders/1vKcW5EM4RBIuF8ZFvPM0G1FRwl_03RXK) directory.

## Team process
The code intel team has defined a set of rituals that keeps the team connected around our common goals. As a team we also believe in good meeting etiquette, and to ensure effective meetings for everyone every meeting must have a meaningful topic, agenda, and stated goal or purpose statement defined ahead of time.

On a weekly basis:

* Team Sync Meeting: Every Monday, the code intel team meets to stay in sync and hear from stakeholders. We use a Google doc for [agenda and meeting notes](https://docs.google.com/document/d/1R4gXavKwajVRplHSy1ECn_ZHMoQZIwiGKqWWb2SdbUE/edit). Prior to the weekly sync meeting, each team member should:
  1. Add any agenda items that should be discussed.
  1. Review any existing agenda items and be prepared to discuss them.
  1. Update the current release [tracking issue](../tracking_issues.md) with a summary of progress for the previous week and plans for the next week.

* Team Updates: Every Friday, we update the tracking issue with our weekly progress to inform external stakeholders of the state of milestone goals. The engineers working on a goal are responsible for its update.
  
For each iteration (currently one month long), we follow this process:

* Planning Meeting(s): Prior to each iteration the team has planning meetin(s) to discuss which items should be prioritized for the upcoming release. We revisit oustanding work that track against our team goals, and go over [our backlog](https://github.com/sourcegraph/sourcegraph/labels/team%2Fcode-intelligence) of bugs and feature requests. Once the team agrees on a task, we add it to the tracking issue and as part of our team goals for the milestone.

* Retrospective Meeting: After the release branch has been cut for the iteration, the team has a retro to discuss how the iteration went, and what changes we might want to make to continously improve our teamwork.

We track most of our work using [issues on the Sourcegraph main repository](https://github.com/sourcegraph/sourcegraph/issues). If you have an issue that wants our attention, mention [the @sourcegraph/code-intel team](https://github.com/orgs/sourcegraph/teams/code-intel) or tag your issue with the [`team/code-intelligence` label](https://github.com/sourcegraph/sourcegraph/labels/team%2Fcode-intelligence).

## New Engineer Onboarding

Our team is growing and to help our new teammates have the best onboarding experience we have created additional material that builds on Sourcegraph's [general engineering onboarding](../onboarding.md) guide. We think will help you ramp up in all things code intel.

### Weeks 1 - 4

**Architecture Presentation**: An experienced code intel engineer will give a live presentation primarily to the new hire (and any other Sourcegraph teammate who’s interested) explaining the architecture of our systems at a high level.

**Pair Programming**: Keeping inline with [engineering pairing sessions](../onboarding.md#pairing-sessions) we will support our new teammates by setting aside dedicated time every week for mentoring. This not only helps deliver guided learning but also is great for team and relationship building.

**First Tasks**: The team has marked issues we believe are good first issues in [Github](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+label%3A%22good+first+issue%22++label%3A%22team%2Fcode-intelligence%22), following the [starter task process](../onboarding.md#starter-tasks) work with the code intel engineering manager to select three issues that you think are good ones for you to work on in your first 4 weeks.

**Technical Design Docs & Diagrams**: We know that a picture is worth a thousand words and we will create visual diagrams to supplement our written documentation for the most critical or complex components and processes. This material is great for async learning and can provide a better understanding of the parts that make up the big picture. Check [code intel user documentation](https://docs.sourcegraph.com/user/code_intelligence) and [our journey with LSIF post](https://about.sourcegraph.com/blog/evolution-of-the-precise-code-intel-backend/) to understand the overall view. Browse through available documentation and diagrams in the [code intel developer documentation](https://docs.sourcegraph.com/dev/codeintel/) and [code intel Google drive](https://drive.google.com/drive/folders/1vKcW5EM4RBIuF8ZFvPM0G1FRwl_03RXK) and learn how the Bundle Manager works or view Inter-service request diagrams.

### Second Month

**Inverted Presentation**: Our new teammate has now had some time to explore the source code and will use their knowledge to present to the team. You can choose to either explain the architecture of an existing component or present a solution to a problem you just solved. The team will give feedback and clarify where needed and provide more details to high-level designs.

**Feedback**: We want to hear from our new teammate how helpful each of these onboarding experiences was and we will continuously update our onboarding guide based on new insights. As per the engineering guide for feedback will be gathered in week 6.

## Members

- [María Craig](../../../company/team.md#mar%c3%ada-craig-she-her) ([Product Manager](../../product/roles/product_manager.md))
- [Aida DeWitt](../../../company/team/index.md#aida-dewitt-she-her) ([Engineering Manager](../roles.md#engineering-manager))
  - [Eric Fritz](../../../company/team/index.md#eric-fritz-he-him)
  - [Garo Brik](../../../company/team/index.md#garo-brik-they-them)
  - [Noah Santschi-Cooney](../../../company/team/index.md#noah-santschi-cooney-he-him)

## Ownership

- GitHub organizations:

  - [lsif](https://github.com/lsif)
  - [sourcegraph-codeintel-showcase](https://github.com/sourcegraph-codeintel-showcase)

- GitHub repositories:

  - [sourcegraph/codeintelutils](https://github.com/sourcegraph/codeintelutils)
  - [sourcegraph/code-intel-extensions](https://github.com/sourcegraph/code-intel-extensions)
  - [sourcegraph/codeintellify](https://github.com/sourcegraph/codeintellify)
  - [sourcegraph/lsif-go](https://github.com/sourcegraph/lsif-go)
  - [sourcegraph/lsif-node](https://github.com/sourcegraph/lsif-node)
  - [sourcegraph/lsif-java](https://github.com/sourcegraph/lsif-java)
  - [sourcegraph/lsif-clang](https://github.com/sourcegraph/lsif-clang)
  - [sourcegraph/lsif-test](https://github.com/sourcegraph/lsif-test)

- Buildkite builds:
  - [code-intel-extensions](https://buildkite.com/sourcegraph/code-intel-extensions)
  - [lsif-go](https://buildkite.com/sourcegraph/lsif-go)
  - [sourcegraph-codeintel-showcase-indexer](https://buildkite.com/sourcegraph/sourcegraph-codeintel-showcase-indexer)
  - [sourcegraph-codeintel-showcase-upstreamer](https://buildkite.com/sourcegraph/sourcegraph-codeintel-showcase-upstreamer)

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub.com/sourcegraph/sourcegraph%24+file:monitoring/.*+%7B:%5B_%5D%2C+Owner:+ObservableOwnerCodeIntel%2C+:%5B_%5D%7D+OR+%28:%5B_%5D%2C+ObservableOwnerCodeIntel%29+count:1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/d0c10593-3edd-4d7e-8d1b-2ad29afeaa71)

## Hiring status

_Updated 2020-08-01_

We are hiring for these roles:

- +1 [Software Engineer - Code intelligence](https://about.sourcegraph.com/handbook/engineering/hiring/software-engineer-code-intelligence)
