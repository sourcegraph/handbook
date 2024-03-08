# Search Platform strategy

This page outlines the strategy and goals of the [Search Platform team](../../../departments/engineering/teams/search-platform/index.md) over the next year or so.

For context on the mission, vision, and guiding principles of Search, see the top-level [search strategy](index.md) page.

Quicklinks:

- [Search overall strategy](../index.md)
- [Search Core backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-core)
- [Roadmap](https://docs.google.com/document/d/1XNrbBtkS8_lsjKxV8zvNfb1sn1Ug9Zhc24LFLCOa-Ic/edit?usp=sharing)

## Where we are now

Search is the foundation of the overall product and the team is focused on making search universal, fast, and relevant.

At the start of FY23 the team started work on improvements to performance of large monorepos, this was a recurrent pain point for large enterprise customers. We have recently made significant improvements towards our performance goals with the following:

- An incremental indexing prototype: numbers show that the time it takes to index a repo after a new commit is decreased by 75% from 36 mins to 9 mins. These numbers are based on our gigarepo (a synthetic monorepo with a HEAD size of 15 GB).
- A hybrid searcher + zoekt prototype: this prototype is ready to be put into production. Initial latency numbers show unindexed search results complete in less than 1 second.

We have also conducted discovery work to better understand what pain points our customers experience with our current ranking or results.

## What's next and why

### FY23Q3

#### Goals

Given the new company strategies and focus on making Sourcegraph support large customers, the team will be focusing on the following three areas in Q3 and beyond:

- **Observability and admin experience**
- **Scalability**
- **Ranking**

#### Details

**Observability and admin experience**: There are numerous areas of improvement around observability and admin experience within our product to help understand and debug when an instance is running into performance issues. In order to address some of these gaps, in the next months, we will be working on adding I/O metrics to better monitor performance and capturing logging data to better serve admins and our support team.

**Scalability**: We are finishing up work started in Q1 to make sure Sourcegraph can support customers with large monrepos. We are also starting to research how we can improve the memory efficiency of our indexed search service so that we can confidently scale keeping both our and our on premise customers costs in mind.

**Ranking**: In Q2, we spent some time gathering feedback from users to understand what works and doesn't in Sourcegrraph's results ranking. In this quarter we are focusing on papercuts and low hanging fruit enhancements to our ranking heuristics.

#### What we're not working on and why

##### Scaling sourcegraph.com to repositories with 2 stars or more

We had a previous goal to scale the Sourcegraph Cloud global index to include every GitHub.com + GitLab.com repository with 2 stars or more (“more than one star”). While working to achieve this goal, we realized that growing the global index past our current scale wouldn’t have made a meaningful difference to the usability, universality or completeness of Sourcegraph Cloud:

- Most OSS code search use cases were already well-serviced at our current scale.
- The repositories in the 2 to 3 star bucket included a large number of low-quality repositories, with content only tangentially related to code, and indexing them would have negatively affected relevance of search results and performance.
- By indexing these 2 to 3 stars repositories we will not be achieving the promise of letting users search their own code since this would only be attained by additionally indexing all 0 to 1 star repositories, a much larger number of repositories which we are currently not ready to support.
