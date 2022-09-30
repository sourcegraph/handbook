# Search Core strategy

This page outlines the strategy and goals of the [Search Core team](../../../departments/engineering/teams/search/core.md) over the next year or so.

For context on the mission, vision, and guiding principles of Search, see the top-level [search strategy](index.md) page.

Quicklinks:

- [Search overall strategy](../index.md)
- [Search Core backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-core)
- [Roadmap](https://github.com/orgs/sourcegraph/projects/214/views/21?filterQuery=quarter%3A%22FY23+Q2%22+owning-team%3A%22Search+core%22+)

## Where we are now

Search is the foundation of the overall product and the team is focused on making search universal, fast, and relevant.

We have recently worked toward the goal of indexing open source code to make our search universal:

- The Sourcegraph Cloud global index has now 2.6M repositories representing all repositories with 5 stars or more from GitHub.com and GitLab.com. While working towards this goal, we have made changes that have yielded trickle-down benefits to all Sourcegraph deployments, for instance, we accomplished a [5x reduction](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/) in the memory usage of Zoekt, our trigram-based indexed search backend.
- We have made progress towards expanding code host coverage to include repositories from non-GitHub.com and GitLab.com code hosts: you can now search more than [34k repositories](https://sourcegraph.com/search?q=context:global+r:%5Esrc%5C.fedoraproject%5C.org/+type:repo+count:all&patternType=literal) from src.fedoraproject.org on sourcegraph.com.
- We have released the beta version of [dependencies search](https://docs.sourcegraph.com/code_search/how-to/dependencies_search) enabling search through the dependencies of your repositories for Go, npm, and Python.

We conducted discovery work to better understand the bottlenecks of our search infrastructure on large monorepos (those with a working directory > 6GB) and started work on some prototypes to address our customers' most pressing needs. We established a baseline and created a synthetic gigarepo to measure progress towards our goal. Our synthetic gigarepo is a representative monorepo with a HEAD working copy size of 15GB.

As a first step towards improving the ranking of results, we have enabled [zoekt results ranking](https://docs.sourcegraph.com/dev/background-information/architecture/indexed-ranking#result-ranking) to further rank results within repositories.

## What's next and why

### FY23Q3

#### Goals

- **Monorepo performance**: At a P75 level, synthetic gigarepo will index in less than 30 minutes, indexed searches will complete in < 2s and unindexed searches will complete in < 10s.
- **Ranking**: Understand customer pain points and establish a baseline for future improvements.

#### Details

**Monorepo performance**: This is a recurrent pain point for large enterprise customers. Having replicated large monorepo setups, we identified that unindexed monorepo performance is still poor and several facets of search on large monorepos cause significant load on gitserver. To address this, we have been working on an incremental indexing prototype and a Searcher prototype to better handle unindexed searches.

**Ranking**: As a first step towards improving the ranking of our search results, we will start tracking the quality of search results using the index of user-selected results as a proxy metric. Having this tracking in place will help measure the success of future improvements. We will also conduct discovery of customers needs and pain points to drive the areas of ranking we choose to focus on.

#### What we're not working on and why

##### Scaling sourcegraph.com to repositories with 2 stars or more

We had a previous goal to scale the Sourcegraph Cloud global index to include every GitHub.com + GitLab.com repository with 2 stars or more (“more than one star”). While working to achieve this goal, we realized that growing the global index past our current scale wouldn’t have made a meaningful difference to the usability, universality or completeness of Sourcegraph Cloud:

- Most OSS code search use cases were already well-serviced at our current scale.
- The repositories in the 2 to 3 star bucket included a large number of low-quality repositories, with content only tangentially related to code, and indexing them would have negatively affected relevance of search results and performance.
- By indexing these 2 to 3 stars repositories we will not be achieving the promise of letting users search their own code since this would only be attained by additionally indexing all 0 to 1 star repositories, a much larger number of repositories which we are currently not ready to support.

We’ve chosen instead to make progress towards [indexing the entire OSS universe](https://about.sourcegraph.com/blog/why-index-the-oss-universe/) by indexing repositories from different code hosts as well as adding support for package host integrations. By focusing on this, we strive to make Sourcegraph.com a truly universal code search engine.
