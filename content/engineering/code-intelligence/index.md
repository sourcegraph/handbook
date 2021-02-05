# Code intelligence team

<img align="right" src="https://sourcegraphstatic.com/docs/images/code-intelligence/code-intel-team%3Dlogo.png" height="350" alt="Sourcegraph Code intelligence team logo"></img>

The Code Intelligence team builds tools and services that provide contextual information around code, taking into account its lexical, syntactic, and semantic structure. This includes:

- An API to provide fast, comprehensive, and accurate answers to important code navigation queries such as Go to Definition and Find References

- A powerful and flexible language-agnostic model of dependency relationships across projects, repositories, and languages

- Robust, extensible, and scalable infrastructure to index code across all languages, keep those indexes up-to-date, and efficiently resolve code intelligence queries against all indexed code.

## History

The origin of our work is the core of Sourcegraph, first implemented as [srclib](https://github.com/sourcegraph/srclib) a code analysis tool developed by our co-founders [Beyang](https://github.com/beyang) and [Quinn](https://github.com/sqs) in 2015.

2016 - We evolved our strategy to utilize LSP (Language Server Protocol) to power the new Sourcegraph code search engine. LSP is a user oriented protocol and requires an implementation of a language server for each programming language.

2017 - Over time we started to experience some issues with language servers. They can be difficult to deploy, slow at runtime, slow to adopt by members of their respective language communities, and slow to develop.

2018 - We added a new basic code intelligence that is built on search-based heuristics to allow us to provide quick and good enough i.e. "imprecise" support for the [most popular programming languages](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22).

2019 - While looking for more efficient alternatives to language servers we found LSIF (Language Server Index Format) which provided an index-based implementation of precise code navigation (similar to srclib) with the advantage of being able to build on top of the work done in the LSP community (LSIF and LSP are sister protocols).

2020 and beyond - The Code Intelligence team is responsible for how Sourcegraph understands code and for providing data that powers semantic search, campaigns and code insights. Our API is the point of discovery for the knowledge graph for all source code.

## Vision

To be the point of discovery for the knowledge graph for all source code.

## Mission

Build a code intelligence platform that understands code in all languages and provides rich metadata to power code search, insights and campaigns.

## [Goals](goals.md)

See [goals and priorities](goals.md)

## Contact

- #code-intel channel or @codeintel in Slack.
- [team/code-intelligence](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/code-intelligence) label in GitHub.

## Tech stack

Precise code intelligence specific services are written in Go and code intelligence features are added to the existing frontend service where possible. Sourcegraph extensions that provide code intelligence are written in TypeScript. We use SQLite databases to store data specific to a particular LSIF index and Postgres to store all other data.

## Team communication

Here are some key ways to contact us:

- On GitHub, mention or assign issues to the [@sourcegraph/code-intel](https://github.com/orgs/sourcegraph/teams/code-intel) team.
- On GitHub, view our [backlog](https://github.com/orgs/sourcegraph/projects/100) of work.
- On GitHub, view our [current iteration](https://github.com/orgs/sourcegraph/projects/101).
- On Slack, use the [#code-intel](https://app.slack.com/client/T02FSM7DL/CHXHX7XAS) channel.
- On Google Drive, we use the [Code Intel](https://drive.google.com/drive/folders/1YF237FV_4fAeIS4D5aH9bxexft_bh16r) directory.

## Team process

The code intel team has defined a set of rituals that keeps the team connected around our common goals. As a team we also believe in good meeting etiquette, and to ensure effective meetings for everyone every meeting must have a meaningful topic, agenda, and stated goal or purpose statement defined ahead of time.

Our iterations last two weeks and are comprised of the following:

- Planning Meeting: The first Monday of the iteration we hold a retro and planning meeting.  Our iterations are comprised of work taken from our [backlog](https://github.com/orgs/sourcegraph/projects/100).  Our in-flight iteration work is tracked in our iteration [board](https://github.com/orgs/sourcegraph/projects/101). 
- Team Sync Meeting: The second Monday of the iteration, the code intel team meets to stay in sync and hear from stakeholders. We use a Google doc for [agenda and meeting notes](https://docs.google.com/document/d/1R4gXavKwajVRplHSy1ECn_ZHMoQZIwiGKqWWb2SdbUE/edit). Prior to the sync meeting, each team member should:

  1. Add any agenda items that should be discussed.
  1. Review any existing agenda items and be prepared to discuss them.
  1. Update the current release [tracking issue](../tracking_issues.md) with a summary of progress for the previous week and plans for the next week.

- Team Updates: Every Friday, we update the tracking issue with our weekly progress to inform external stakeholders of the state of milestone goals. The engineers working on a goal are responsible for its update.

We track most of our work as [issues on the Sourcegraph main repository](https://github.com/sourcegraph/sourcegraph/issues). If you have an issue that wants our attention, mention [the @sourcegraph/code-intel team](https://github.com/orgs/sourcegraph/teams/code-intel) or tag your issue with the [`team/code-intelligence` label](https://github.com/sourcegraph/sourcegraph/labels/team%2Fcode-intelligence).

## New Engineer Onboarding

Our team is growing and to help our new teammates have the best onboarding experience we have created additional material that builds on Sourcegraph's [general engineering onboarding](../onboarding.md) guide. We think will help you ramp up in all things code intel.

### Weeks 1 - 4

**Architecture Presentation**: An experienced code intel engineer will give a live presentation primarily to the new hire (and any other Sourcegraph teammate who’s interested) explaining the architecture of our systems at a high level.

**Pair Programming**: Keeping inline with [engineering pairing sessions](../onboarding.md#pairing-sessions) we will support our new teammates by setting aside dedicated time every week for mentoring. This not only helps deliver guided learning but also is great for team and relationship building.

**First Tasks**: The team has marked issues we believe are good first issues in [Github](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+label%3A%22good+first+issue%22++label%3A%22team%2Fcode-intelligence%22), following the [starter task process](../onboarding.md#starter-tasks) work with the code intel engineering manager to select three issues that you think are good ones for you to work on in your first 4 weeks.

**Technical Design Docs & Diagrams**: We know that a picture is worth a thousand words and we will create visual diagrams to supplement our written documentation for the most critical or complex components and processes. This material is great for async learning and can provide a better understanding of the parts that make up the big picture. Check [code intel user documentation](https://docs.sourcegraph.com/code_intelligence) and [our journey with LSIF post](https://about.sourcegraph.com/blog/evolution-of-the-precise-code-intel-backend/) to understand the overall view. Browse through available documentation and diagrams in the [code intel developer documentation](https://docs.sourcegraph.com/dev/background-information/codeintel/) and [code intel Google drive](https://drive.google.com/drive/folders/1YF237FV_4fAeIS4D5aH9bxexft_bh16r) and learn how the Bundle Manager works or view Inter-service request diagrams.

### Second Month

**Inverted Presentation**: Our new teammate has now had some time to explore the source code and will use their knowledge to present to the team. You can choose to either explain the architecture of an existing component or present a solution to a problem you just solved. The team will give feedback and clarify where needed and provide more details to high-level designs.

**Feedback**: We want to hear from our new teammate how helpful each of these onboarding experiences was and we will continuously update our onboarding guide based on new insights. As per the engineering guide for feedback will be gathered in week 6.

## Members

- [María Craig](../../../company/team/index.md#maría-craig-she-her) ([Product Manager](../../product/roles/product_manager.md))
- [Alicja Suska](../../../company/team/index.md#alicja-suska-she-her) ([Product Designer](../../product/roles/product_designer.md))
- [Owen Convey](../../../company/team/index.md#owen-convey-he-him) ([Engineering Manager](../roles.md#engineering-manager)) {#code-intelligence-eng}
  - [Eric Fritz](../../../company/team/index.md#eric-fritz-he-him)
  - [Garo Brik](../../../company/team/index.md#garo-brik-they-them)
  - [Noah Santschi-Cooney](../../../company/team/index.md#noah-santschi-cooney-he-him)
  - [Ólafur Páll Geirsson](../../../company/team/index.md#olafurpg)
  - [TJ DeVries](../../../company/team/index.md#tj-devries)
  - FQ2 engineer
  - FQ3 engineer
  - FQ4 engineer

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

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub.com/sourcegraph/sourcegraph%24+file:monitoring/.*+%7B:%5B_%5D%2C+Owner:+monitoring.ObservableOwnerCodeIntel%2C+:%5B_%5D%7D+OR+%28:%5B_%5D%2C+monitoring.ObservableOwnerCodeIntel%29+count:1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/d0c10593-3edd-4d7e-8d1b-2ad29afeaa71)
