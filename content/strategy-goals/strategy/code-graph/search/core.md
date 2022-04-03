# Search Core strategy

This page outlines the strategy and goals of the [Search Core team](../../../../departments/product-engineering/engineering/code-graph/search/core.md) over the next year.

For context on the mission, vision, and guiding principles of Search, see the top-level [search strategy](index.md) page.

Quicklinks:

- [Search overall strategy](../index.md)
- [Search Core backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-core)
- [Roadmap](https://github.com/orgs/sourcegraph/projects/214/views/34?filterQuery=owning-org%3A%22Code+Graph%22+type%3ARoadmap+owning-team%3A%22Search+core%22)

## Where we are now

In **FY22Q3**, we grew the Sourcegraph Cloud global index to 2.1M repositories, including all repositories with 6 stars or more. Importantly, the changes we’ve made to reach this state have not been cloud-specific, and yielded trickle-down benefits to all Sourcegraph deployments (for instance, [significant reductions](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/) in the memory usage of Zoekt, our trigram-based indexed search backend).

In **FY22Q4**, we conducted discovery work to better understand the bottlenecks of our search infrastructure on large monorepos (>6GB working directory). We also started growing our search index to include repositories from more non-GitHub.com and GitLab.com code hosts: for instance, you can now search [34k repositories from src.fedoraproject.org on sourcegraph.com](https://sourcegraph.com/search?q=context:global+r:%5Esrc%5C.fedoraproject%5C.org/+type:repo+count:all&patternType=literal).

## What's next and why

### FY23Q1

#### Goals

- **Monorepo performance**: At a P75 level, gigarepo will index in less than 30 minutes, indexed searches complete in < 2s and unindexed searches complete in < 10s. Gigarepo is a representative monorepo with a HEAD working copy size of 15GB.
- **Ranking**: We start tracking ranking quality, using selected search results as a proxy.
- **Code host coverage**: Sourcegraph Cloud indexes public repositories globally from the most popular package hosts.

#### Details

**Monorepo performance**: is a recurrent pain point for large enterprise customers. Having replicated large monorepo setups, we identified that unindexed monorepo performance is still poor and several facets of search on large monorepos cause significant load on gitserver.

**Ranking**: As a first step towards improving the ranking of our search results, we will start tracking the quality of search results using the index of user-selected results as a proxy metric. Having this tracking in place will help measure the success of future improvements and drive the areas of ranking we choose to focus on.

**Code host coverage**: as we seek to keep expanding the code we index to include more non-GitHub.com or GitLab.com code hosts, we will add support for package host integrations (PyPi, Rubygems, NuGet, Crates, proxy.golang.org). This will not only increase our code host coverage, but also be a stepping stone towards unblocking [use cases based on the dependency graph of repositories](https://docs.google.com/document/d/1SkM8CG0IksvPEKRBRVLKipiRJTopx6Vq_hSWRJ9NyKs/edit#).

#### What we're not working on and why

##### Scaling sourcegraph.com to 5.5M repositories

We had a previous goal to scale the Sourcegraph Cloud global index to 5.5M repositories, or every GitHub.com + GitLab.com repository with 2 stars or more ("more than one star"). As we made progress towards this goal, we grew the Sourcegraph Cloud global index to 2.1M repositories. Then, as part of FY22Q4 planning, we deprioritized this goal in favor of code host coverage.

As we kept growing the global index past 2.1M, we noticed that we were pulling in more and more low-quality repositories, with content only tangentially related to code (for instance chat logs, wikipedia dumps, other non-code data stores that only the author uses). These repositories were negatively affecting relevance of search results, performance, and our ability to scale up (because they were frequently very large, and would cause indexing failures).

We also agreed that growing the global index from 2.1M to 5.5M repositories wouldn't have made a meaningful difference to the usability, universality or completeness of Sourcegraph Cloud. Most OSS code search use cases over popular code (eg. searching for usage examples of a popular library in OSS projects) are already well-serviced at our current scale. Adding an additional 3M repositories from the "popular long tail" of GitHub doesn't achieve the promise of letting people search their own code: this would amount to searching 0–1 star repositories, which means complete coverage is still 28+M repos, a scale we are not ready to invest in at this time.

In addition, while our work on scaling had produced trickle-down benefits on performance and efficiency for our Enterprise deployments, the work we would have needed to produce to scale from 2.1M to 5.5M would have been mostly Cloud-specific.

We've chosen to make progress towards [indexing the entire OSS universe](https://about.sourcegraph.com/blog/why-index-the-oss-universe/) by indexing repositories from different code hosts. By focusing on code host coverage, we strive to make Sourcegraph.com a truly universal code search engine: Sourcegraph will not be limited to searching over just the most popular code hosts thus increasing the discoverability and visibility of OSS code regardless of the code host. We see as a better increment towards making sourcegraph.com a compelling OSS code search engine than our previous goal of scaling the global index to 5.5M repositories.

## Related use cases

This section lists use cases that are related to this product team, along with the specific relevant features.

{{generator:product_team_use_case_list.search_core}}
