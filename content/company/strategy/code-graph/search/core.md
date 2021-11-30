# Search Core strategy

This page outlines the strategy, and goals of the [Search Core team](../../../../product-engineering/engineering/code-graph/search/core.md).

For context on the mission, vision and guiding principles of Search, see the top-level [search strategy](./index.md) page.

Quicklinks:

- [Search overall strategy](../index.md)
- [Search Core backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-core)

## Where we are now

In FQ3, we grew the Sourcegraph Cloud global index to 2.1M repositories, including all repositories with 6 stars or more. Importantly, the changes we’ve made to reach this state have never been cloud-specific, and yielded trickle-down benefits to all Sourcegraph deployments (for instance, [significant reductions](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/) in the memory usagee of Zoekt, our trigram-based indexed search backend).

## What's next and why

### FY22Q4

#### Goals

- Make Sourcegraph Search work well with large-scale monorepos (time to first result for unindexed search on monorepos larger than 200GB is < 10s and <2s for indexed, and time to indexing is always <30 minutes).
- Sourcegraph Cloud indexes public repositories globally from 4 non-GitHub code hosts.

#### Details

**Monorepo performance** is a recurrent pain point for large Enterprise customers. Unindexed monorepo performance is still poor, and several facets of search on large monorepos cause significant load on gitserver.

**Code host coverage**: we've chosen to make progress towards [indexing the entire OSS universe](https://about.sourcegraph.com/blog/why-index-the-oss-universe/) by indexing repositories from different code hosts. By focusing on code host coverage, we strive to make Sourcegraph.com a truly universal code search engine: Sourcegraph will not be limited to searching over just the most popular code hosts thus increasing the discoverability and visibility of OSS code regardless of the code host. We see as a better increment towards making sourcegraph.com a compelling OSS code search engine than our previous goal of scaling the global index to 5.5M repositories (see "what we're not working on" below).

#### What we're not working on and why

##### Scaling sourcegraph.com to 5.5M repositories

We had a previous goal to scale the Sourcegraph Cloud global index to 5.5M repositories, or every GitHub.com + GitLab.com repository with 2 stars or more ("more than one star"). As we made progress towards this goal, we grew the Sourcegraph Cloud global index to 2.1M repositories. Then, as part of FQ4 planning, we deprioritized this goal in favour of code host coverage.

As we kept growing the global index past 2.1M, we noticed that we were pulling in more and more low-quality repositories, with content only tangentially related to code (for instance chat logs, wikipedia dumps, other non-code data stores that only the author uses). These repositories were negatively affecting relevance of search results, as well as performance and our ability to scale up (because they were frequently very large, and would cause indexing failures).

We also agreed that growing the global index from 2.1M to 5.5M wouldn't have made a meaningful difference to the usability, universality or completeness of Sourcegraph Cloud. Most OSS code search use cases over popular code (eg. searching for usage examples of a popular library in OSS projects) are already well-serviced at our current scale. Adding an additional 3M repositories from the "popular long tail" of GitHub doesn't achieve the promise of letting people search their own code: this would amount to searching 0-1 star repositories, which means complete coverage is still 28+M repos, a scale we are not ready to invest in at this time.

In addition, while our work on scaling had produced trickle-down benefits on performance and efficiency for our Enterprise deployments, the work we would have produced to scale from 2.1M to 5.5M would have been mostly Cloud-specific.
