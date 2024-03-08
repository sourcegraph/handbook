# Code intelligence team

<img align="right" src="https://sourcegraphstatic.com/docs/images/code-intelligence/code-intel-team%3Dlogo.png" height="350" alt="Sourcegraph Code intelligence team logo"></img>

## Vision

The Code Intelligence team builds tools and services that provide contextual information around code, taking into account its lexical, syntactic, and semantic structure. This includes:

- An API to provide fast, comprehensive, and accurate answers to important code navigation queries such as Go to Definition and Find References

- A powerful and flexible language-agnostic model of dependency relationships across projects, repositories, and languages

- Robust, extensible, and scalable infrastructure to index code across all languages, keep those indexes up-to-date, and efficiently resolve code navigation queries against all indexed code.

## Strategy

- We see Code intelligence as the glue that sticks the product together, providing a platform for features from navigation to precise powered searches, compiler-accurate batch changes and insights. We aim to provide support for all widely used languages and for the ones we don’t, provide a platform for any developer to add and test their own indexers.
- In the near term we want code navigation to provide seamless, out-of-the-box, precise code navigation for languages that cover 90% of the market usage.
- We want our code navigation to reach IDE feature parity, while offering the option of plugging into developers’ favorite IDEs.
- In the longer term, we envision building a global knowledge graph that accurately maps the entire code universe.
- Our complete strategy is available at [Code intelligence strategy](../../../../strategy-goals/strategy/code-intelligence/index.md)

### Video walkthrough

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/fcaddfd333da487cb526a4fc99ead803" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## How we work

On Slack, use the `#code-intel` channel, tag `@code-intel-support` for any help or use the `@codeintel` handle to notify the whole team. As detailed below in the streams section we do have several additional internal rooms however we expect almost all questions and conversations with external teams/departments to take place in `#code-intel`.

## Streams

Code Intelligence comprises a wide cognitive domain. To be effective and feel high ownership over a wide area is difficult. To tackle this we as a team have adopted the concept of streams (also known as 'soft-teams'). A stream is a smaller set of members from within the wider team usually centered around a specific skill set or cognitive space. Each stream owns a distinct area.

The aim is for streams to have the following characteristics:

- Long lived, these are not ephemeral groupings.
- Allow deep technical ownership and collaboration.
- Building technical roadmaps with a view on the long term.
- Firm but not brittle boundaries (people can operate across many streams when needed).
- Allow us in the future to scale and create distinct teams with minimal overhead.
- People feel 100% supported to comment, help and collaborate across the whole team.

There is no "that's not my responsibility" with the use of streams, we just have certain areas that are best filled by specific skill sets.

### Language Tools

- Slack channel: #language-tools-internal
- GitHub board: https://github.com/orgs/sourcegraph/projects/211/views/51

##### Current members

- Olaf
- TJ
- Varun
- Anton
- Auguste

##### Focus and ownership

The Language Tools stream focus on tooling specific to programming languages and their counterpart ecosystems to provide the best precise code navigation experience. The aim is to have a symbiotic relationship
with the Language Platform team in that, Language Tools will provide the specific logic per problem (think syntax highlighting) whilst Language Platform will expose an agnostic/programatic way to scale this. Specific areas of ownership include:

- Precise navigation
  - [SCIP](https://github.com/sourcegraph/scip#readme)
  - [SCIP indexers](https://docs.sourcegraph.com/code_intelligence/references/indexers)
  - LSIF indexers
  - Community indexer contributions
- Auto-inference behavior for indexing projects
- Syntax highlighting (including the syntect service)
- Package integrations (Maven, npm, PyPI, Crates)

### Language Platform

Language Platform's focus is split into two distinct areas, the creation of data (invoking SCIP indexers via Executors _or_ generating symbols) and the productionalization of said data (exposing the data in a queryable, performant and scalable way). Language Platform aims to empower two users, providing a programatic/pluggable system for the Language Tools stream and for downstream clients to build on top of the Code Graph data (the Code Navigation stream and also additional product teams).

- Slack channel: #language-platform-internal
- GitHub board --> https://github.com/orgs/sourcegraph/projects/211/views/48

##### Current members

- Eric
- Noah
- Cesar
- Valery

##### Focus and ownership

- Code Intelligence backend
  - Unified Intelligence API
  - Executors & Auto-indexing
  - Code Intel DB
  - Code Intelligence observability
- Symbol generation
  - Rockskip
  - Symbols service
- Code Intel extensions/code intellify

### Code Navigation

Code Navigation owns the UI/UX customer facing code navigation experience predominately focusing on the file view.

- Slack channel: #code-navigation-internal
- GitHub board: https://github.com/orgs/sourcegraph/projects/211/views/21

##### Current members

- Olaf

##### Primary focus

- Blob view (also known as the file view)
  - Reference panel
  - Popover
  - Fuzzy finder
- Sidebar
  - Directory tree
  - Symbols sidebar
- Admin and metadata pages
- Telemetry
- Accessibility

### How we do technical hiring

- [Code Walkthrough](code-walkthrough.md)

### How to reach us

- On GitHub, mention or assign issues to [team/code-intelligence](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/code-intelligence)
- On GitHub, view our [backlog](https://github.com/orgs/sourcegraph/projects/211) of work.
- On Slack, use the #code-intel channel or tag the @codeintel team.

### What we own

- GitHub repositories:

  - [sourcegraph/scip](https://github.com/sourcegraph/scip)
  - [sourcegraph/scip-java](https://github.com/sourcegraph/scip-java)
  - [sourcegraph/scip-typescript](https://github.com/sourcegraph/scip-typescript)
  - [sourcegraph/scip-python](https://github.com/sourcegraph/scip-python)
  - [sourcegraph/scip-ruby](https://github.com/sourcegraph/scip-ruby)
  - [sourcegraph/lsif-go](https://github.com/sourcegraph/lsif-go)
  - [sourcegraph/lsif-kotlin](https://github.com/sourcegraph/lsif-kotlin)
  - [sourcegraph/lsif-clang](https://github.com/sourcegraph/lsif-clang)
  - [sourcegraph/lsif-test](https://github.com/sourcegraph/lsif-test)
  - [sourcegraph/codeintelutils](https://github.com/sourcegraph/codeintelutils)
  - [sourcegraph/code-intel-extensions](https://github.com/sourcegraph/code-intel-extensions)
  - [sourcegraph/codeintellify](https://github.com/sourcegraph/codeintellify)

- GitHub organizations:

  - [lsif](https://github.com/lsif)
  - [sourcegraph-codeintel-showcase](https://github.com/sourcegraph-codeintel-showcase)

- Buildkite builds:
  - [code-intel-extensions](https://buildkite.com/sourcegraph/code-intel-extensions)
  - [lsif-go](https://buildkite.com/sourcegraph/lsif-go)
  - [sourcegraph-codeintel-showcase-indexer](https://buildkite.com/sourcegraph/sourcegraph-codeintel-showcase-indexer)
  - [sourcegraph-codeintel-showcase-upstreamer](https://buildkite.com/sourcegraph/sourcegraph-codeintel-showcase-upstreamer)

### On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub.com/sourcegraph/sourcegraph%24+file:monitoring/.*+%7B:%5B_%5D%2C+Owner:+monitoring.ObservableOwnerCodeIntel%2C+:%5B_%5D%7D+OR+%28:%5B_%5D%2C+monitoring.ObservableOwnerCodeIntel%29+count:1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/d0c10593-3edd-4d7e-8d1b-2ad29afeaa71)

### Glossary

We have a [glossary](glossary.md) for which covers terms commonly used in the context of code intelligence.
