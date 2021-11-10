# Search Core strategy

This page outlines the strategy, and goals of the [Search Core team](../../../../engineering/code-graph/search/core.md).

For context on the mission, vision and guiding principles of Search, see the top-level [search strategy](./index.md) page.

Quicklinks:

- [Search Core backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-core)

## Where we are now

In FQ3, we grew the Sourcegraph Cloud global index to 2.1M repositories, including all repositories with 8 stars or more. Importantly, the changes we’ve made to reach this state have never been cloud-specific, and yielded trickle-down benefits to all Sourcegraph deployments (for instance, [significant reductions](https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/) in the memory usagee of Zoekt, our trigram-based indexed search backend).

## What's next and why

### FY22Q4

#### Goals

- Make Sourcegraph Search work well with large-scale monorepos (time to first result for unindexed search on monorepos larger than 200GB is < 10s and <2s for indexed, and time to indexing is always <30 minutes).
- Sourcegraph Cloud indexes public repositories globally from 4 non-GitHub code hosts.

#### Details

**Monorepo performance** is a recurrent pain point for large Enterprise customers. Unindexed monorepo performance is still poor, and several facets of search on large monorepos cause significant load on gitserver.

**Code host coverage**: we've chosen to make progress towards [indexing the entire OSS universe](https://about.sourcegraph.com/blog/why-index-the-oss-universe/) by indexing repositories from different code hosts, which we see as a better increment towards making sourcegraph.com a universal code search engine than our previous goal of scaling the global index to 5.5M repositories (see "what we're not working on" below).
#### What we're not working on and why

- Further scaling the Sourcegraph Cloud global index by adding more repositories from GitHub: low-star repos can contain a lot of strange things, and may be only tangentially related to code (i.e., wikipedia dumps, other non-code data stores that only the author uses). This has a knock-on effect to relevancy, scaling, and performance. In addition, by adding repositories from the "popular long tail", we are not really delivering on the promise of letting people search their own code: for many developers, this would amount to searching 0-1 star repositories (example), which means complete coverage is still 28+M repos.
