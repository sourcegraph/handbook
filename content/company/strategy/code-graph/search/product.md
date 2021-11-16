# Search Product strategy

This page outlines the strategy, and goals of the [Search Product team](../../../../engineering/code-graph/search/product.md).

For context on the mission, vision and guiding principles of Search, see the top-level [search strategy](./index.md) page.

Quicklinks:

- [Search Product backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-product/)

## Where we are now
Sourcegraph is the leading code search product in the market, used by tens of thousands of developers across enterprises of all sizes. It has advanced, novel search capabilities, such as [structural search](https://learn.sourcegraph.com/how-to-use-structural-search-in-sourcegraph) and [diff/commit search](https://docs.sourcegraph.com/code_search/explanations/features#commit-diff-search), as well as capabilities that extend search, such as [Code monitors](https://docs.sourcegraph.com/code_monitoring). Our work-in-progress includes supporting other use cases powered by search, such as onboarding new developers, and integrations with Sourcegraph.

## What's next and why
### FY22Q4
#### Goals
- Support customers in onboarding new developers and sharing best practices, via Search notebooks, with at least three customers using Search notebooks in FY22Q1
- Enable more connectivity to Sourcegraph via webhooks and Slack integration, and have at least three customers committed to upgrading in FY22Q1 in order to utilize the functionality

#### Details

**Search notebooks** will enable individual developers and teams to easily document codebases and share best practices across an organization by enabling a [Jupyter notebooks](https://jupyter.org/)-style experience. Developers will be able to embed search results, code snippets and more, in a markdown-based notebook that creates more robust documentation. For example, using structural search to persitently capture a function and its contents, even if it's moved in the codebase.

**Code monitor integrations** will provide the ability to integrate Code monitors with any service that supports webhooks, and will enable multiple actions to be triggered by a Code monitor. We will also support Slack integration with Code monitors.

#### What we're not working on and why
We currently have no development work in the pipeline for search relevance, ranking, or semantic and natural language searching. These are important areas where we do plan to invest substantial research, but we have no implementation plans for FY22Q4.
