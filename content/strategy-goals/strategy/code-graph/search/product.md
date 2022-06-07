# Search Product strategy

This page outlines the strategy, and goals of the [Search Product team](../../../../departments/engineering/engineering/code-graph/search/product.md) over the next year or so.

For context on the mission, vision and guiding principles of Search, see the top-level [search strategy](index.md) page.

Quicklinks:

- [Search overall strategy](../index.md)
- [Search Product backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-product/)
- [Roadmap](https://github.com/orgs/sourcegraph/projects/214/views/34?filterQuery=owning-org%3A%22Code+Graph%22+type%3ARoadmap+owning-team%3A%22Search+product%22)

## Guiding principles

- Continue to differentiate the core platform beyond code search. Search will always power our platform, but to remain competitive we need to become more than the world's best code search

- Provide compelling solutions for the most pressing use cases of our customers

- Maintain room for experimentation and exploratory work that creates meaningful business value

## Where we are now

Sourcegraph is the leading code intelligence platform in the market, used by tens of thousands of developers across enterprises of all sizes. The engine powering the platform is Code Search, which has advanced, novel search capabilities such as [structural search](https://learn.sourcegraph.com/how-to-use-structural-search-in-sourcegraph) and [diff/commit search](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MTI=).

The Search Product team has a dual mission:

- Increasing the value of the search as a platform for other teams to build upon (Code Insights, Batch Changes), with these other team's goals in mind.
- Building differentiated user-facing products and features of its own.

In addition to the core search experience, the Search Product team's scope includes [Code monitors](https://docs.sourcegraph.com/code_monitoring) and [Notebooks](https://sourcegraph.com/notebooks?tab=explore). Today, all products and features in Search Product's scope are included in every Sourcegraph contract.

Over the past year, we’ve spent a significant amount of time cleaning up and improving the search backend. These efforts include, but are not limited to:

- Implementing streaming across backends to minimize latency and memory usage
- Partitioning search code into different domains and stages to manage complexity
- Simplifying and unifying search result types

Having just launched [Notebooks](https://docs.sourcegraph.com/notebooks) at the end of Q1, we anticipate to actively engage with new customers who purchased Sourcegraph because of them. We plan to take advantage of customer enthusiasm to create tight feedback loops between them and the team.

We will also actively promote our experimental project, Compute, internally to Sales and Marketing and partner with them to engage with customers and get early product direction from the market.

## What's next and why

Over the next quarter, Search Product will focus on foundational work (generalizing the search backend to make it more powerful for internal consumers, and taking a fresh look at the core search UX) and conducting research to inform an improved search experience.

### Foundational work

Our planned foundational work falls broadly into two buckets: generalizing the search backend to make it more usable and powerful for internal consumers, and taking a fresh look at the core search UX.

#### Search backend

The primary goal of these efforts has been to push the backend to a state where it will be maintainable in the face of new features. This is an ongoing process, but we’ve gained significant ground.

In Q2, we will start to shift the focus of backend work from maintainability to capability and flexibility. This means thinking of “search” more as an API that we provide for internal consumers that exposes all the information needed to build features on top of it. Though search is an API, it's not yet flexible enough to solve all the use cases presented by, for example, Code Insights, and some other proposed user-facing query features. This work is important because it enables development of high-value roadmap items, and the ability to conceive of novel features that weren't possible before.

#### Search UX

Our search language, capabilities and interface have evolved a lot over the past year, as we introduced search predicates, Compute, the search reference, among others. Following these evolutions, we want to take a holistic look at our core search experience. Ensuring our core search experience is high-quality, cohesive and intuitive is vital to Sourcegraph's continued dominance in the code search market.

### Research

Our research efforts will consist of establishing a baseline for UX issues by conducting a UX audit and building an estimated and prioritized design debt and UX roadmap. We will also conduct user research on Notebooks usage to inform its future roadmap.

Despite being research, there will be some delivery related to this work. We plan to release an incremental improvement to the logged-in homepage, refactor the search results UI components, and execute on technical work related to our migration off of the Monaco editor.

We'll also start to explore usage of ML models to enable natural language search, whether through generating query suggestions from natural language, or directly building a natural language search backend. We'll evaluate both approaches, and spike out the work required to get them in front of users. We expect this to be a long-term effort, and as such we are not targeting actual integration into the Sourcegraph product this quarter.

For example, if a user enters:

> Python function for k-means clustering

We'd want to see the model generate a query like:

`file:.\py$ kmeans select:symbol.function`

Learning Sourcegraph's query language is a struggle for many users, to the point that they simply never go beyond using literal search. Anything we can do to reduce the learning curve and improve result quality will have a big impact on user experience and potentially drive more usage.

If successful, this effort would have implications beyond Code Search. Imagine being able to create a Code Insight or a Batch Change with natural language.

#### What we're not working on and why

This quarter, we are largely deferring launching new user-facing features in favor of foundational and research efforts. Q1 was a hugely productive quarter for the team, and we want to let the new products and features that shipped get some usage and garner feedback.

## Related use cases

This section lists use cases that are related to this product team, along with the specific relevant features.

{{generator:product_team_use_case_list.search_product}}
