# Search goals and priorities

This page documents the current goals and priorities of the [Search team](index.md). See also our [completed goals](goals_completed.md).

## Goals

### Unlock the core search use cases that bring value to large-scale organizations

Timeline: May 2021

#### Definition of large-scale

Organizations with:

- A Git directory size between 100 GB and 50 TB
- Total lines of code (LOC) between 1 billion and 5 billion

See [looker](https://sourcegraph.looker.com/looks/436) for current customer data.

#### Problem

**Scale across our feature set:** customers at large-scale organizations care about more than indexed text search; they would like to use structural search and diff/commit search across the entirety of their codebase, yet this is largely impossible currently: structural search queries on large-scale codebases frequently time out, and diff/commit search have a 50 repository limit.

**Speed across our feature set:** Large customers expect search to be [fast at their scale](perf.md), no matter the search type (literal, regexp, structural, diff, commit). Today, search is TODO metrics.

**Trust:** large customers would like to use Sourcegraph to search for security issues across their entire codebase. They expect Sourcegraph to return consistent and exhaustive results. Currently, running the same global query multiple times on a large codebase will often yield different result counts, without giving insight as to why. This leads to customers losing trust in Sourcegraph.

**Flexibility:** to find the code they care about, large-scale customers frequently request specific filtering capabilities (for instance "return all repositories that are not stale, and that contain a given pattern"). Up until now, this has required the addition of one-off, specific filters such as `repohasfile`, `repohascommitafter`. This approach does not scale.

**Relevance:** users of Sourcegraph in large organizations frequently care about only a subset of the code indexed on their instance (for example, Python backend developers will primarily care about repositories containing Python backend code). Currently, it is hard for users to understand how to search only the code they care about by default, or to refine search results to find the code they care about.

**Alerting:** customers using Sourcegraph to find security issues in their codebase rarely want to run one-off queries; they would like Sourcegraph to run their queries regularly, and to notify them of new results, so that they can take action. Saved searches, our current solution for this use case, is hard to understand, limited to email notifications (while customers frequently want to integrate with third-party services through webhooks), and suffers from the scale and performance limiations of diff search on large codebases. 

#### [WIP] Outcome

TODO: What does this look like? Describe this in prose using descriptions from the team: [Search team 6 month vision](https://docs.google.com/document/d/1iiYCKK5D2PTVzzFmTF1OHl5SNLVkYfbOfyrCcoYM_24/edit#heading=h.bi6mdia4vr7w).

- Make it clear to the passing naive hacker that they couldn’t write something which replaces us in a few weekends / just use grep.
- Our search experience is consistent, reliable, and predictable: IE Sourcegraph search does what it says and says what it does.
- We understand more about each individual user and tailor their results so that results are ranked to promote the languages and repositories they are most likely to care about.
- Search queries and their results become a frictionless starting point for creating all the other business objects our users will start to value… monitors, insights, campaigns and /next/.
- Search is optimized for the cloud, where hundreds of a company’s private repos will live alongside hundreds of thousands of public open source repos.
- We have a learnable, comprehensive code search query language; performant and reliable search across all result types we offer; a polished product that handles failure cases properly; and a personalized experience for users that surfaces their most relevant code.

#### Roadmap and Milestones

The roadmap and milestones are tracked in [productboard](https://sourcegraph.productboard.com/roadmap/2213445-search-roadmap)

At a glance roadmap as of 2021-01-12:

![2021-01-12](https://sourcegraphstatic.com/handbook/product-roadmaps/2020-01-12-Search%20roadmap.png)
