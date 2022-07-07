# Search Product strategy

This page outlines the strategy, and goals of the [Search Product team](../../../departments/engineering/teams/search/product.md) over the next year or so.

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
We are actively leveraging our prior search backend work to implement exciting new features like Lucky search, which make it possible to generate valid Sourcegraph queries form users' natural language input. Long term, this will help us build an intuitive search experience without making users learn our query language.

Over the next quarter, Search Product will focus on improving our core competency of code search, as well as extend the potential of the search platform. We're facing real competition from GitHub's new code search (currently in technology preview). Many customers and prospects find it good enough for their needs and there is real market pressure for us to differentiate quickly.

Our Q3 work will include paring back the search experience to its essentials and improving ergonomics via query language improvements. Simultaneously, the team will be working toward exposing metadata in search, eventually allowing us to search data other than code via Sourcegraph. 

## What's next and why

### Enhancing the core workflow
#### UX enhancements
In Q3, we'll focus on simplifying the core workflow, implementing small but meaningful UX changes that make it easier for Sourcegraph users to solve problems and unblock themselves using Sourcegraph.

#### Query language improvements
We will continue our efforts to improve our search experience via the query language. Features like Lucky search and improved syntax such as inline regex, the elimination of a need for a pattern type, and aliases for `path` will help users get value from Sourcegraph quickly, even if they're used to another code search tool.

### Exposing metadata
We will also begin work to let metadata be searchable. Our first project will be exposing repository metadata, which is stored in a separate database from code. That database also houses data for our other products, such as Batch Changes and Notebooks, meaning that we could later make their metadata searchable as well.



For example, if a user enters:

> Python function for k-means clustering

We'd want to see the model generate a query like:

`file:.\py$ kmeans select:symbol.function`

Learning Sourcegraph's query language is a struggle for many users, to the point that they simply never go beyond using literal search. Anything we can do to reduce the learning curve and improve result quality will have a big impact on user experience and potentially drive more usage.

If successful, this effort would have implications beyond Code Search. Imagine being able to create a Code Insight or a Batch Change with natural language.

## What we're not working on and why

### Compute
**Patch generation/Batch Changes integrations:** We don't currently have the resources to support this and Batch Changes team is fully committed to other roadmap items.

**Support for pipe operations:** Similarly, we don't have the resources to support this and Code Insights (the requestor) doesn't have the ability to commit resources to it either.

**SCIP <> search <> Compute integration:** With Code Intel’s commitment to complete SCIP <> search <> Compute integration shortly, we will have the ability to search only precise results. This has huge implications for surfacing and leveraging code intelligence data throughout the product, however the team is not sufficiently resourced to pursue this work in Q3.
