# Search Product strategy

This page outlines the strategy, and goals of search from the perspective of the [Code Search team](../../../departments/engineering/teams/code-search/index.md) over the next year or so.

For context on the mission, vision and guiding principles of Search, see the top-level [search strategy](index.md) page.

Quicklinks:

- [Search overall strategy](../index.md)
- [Search Product backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-product/)
- [Roadmap](https://docs.google.com/document/d/1XNrbBtkS8_lsjKxV8zvNfb1sn1Ug9Zhc24LFLCOa-Ic/edit?usp=sharing)

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

### Ready the core workflow for deep integrations

#### SCIP <> search <> Compute integration

With Code Intel’s commitment to complete SCIP <> search <> Compute integration shortly, we will have the ability to search only precise results. This has huge implications for surfacing and leveraging code intelligence data throughout the product.

#### Develop integration framework in the core workflow

UI concern of where integrations fit:

- [RFC 701 Review: Search as both a workflow in itself, and as a start for other workflows](https://docs.google.com/document/d/1Np081Iuezi-ZCzEJT5VkJNBDKF-Po-Xbz4M5_QJLH2Y/edit#heading=h.trqab8y0kufp)

Likely way to integrate features more deeply into search and core workflow is to integrate code insights and batch changes into compute. There may be Compute work necessary to achieve that (production readiness, scale, …).

- Code Insights: [RFC (PRIVATE?) 696 REVIEW: Code Insights serves new jobs to be...](https://docs.google.com/document/u/0/d/1Vktm_9CtSoF8zjye5YwCrfaLm8srktf0fccbM-3bcOA/edit)
- Batch Changes: [RFC 713: Compute-powered batch changes](https://docs.google.com/document/u/0/d/1c9vGgSfh35HNzhPSMltgVkMA9B1NO4QF5GgZwFlt5Ys/edit)

## What we're not working on and why

- We'll complete our migration from the Monaco editor to CodeMirror 6, but we won't continue our work on improving search query suggestions for the time being. We're turning most of the application focus to cleaning up the core workflow.

- We'll also defer work to make metadata searchable. Although this is an important piece of functionality, the platform will be focused primarily on Lucky search and Compute foundational work.
