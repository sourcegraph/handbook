# Search Product strategy

This page outlines the strategy, and goals of the [Search Product team](../../../../departments/product-engineering/engineering/code-graph/search/product.md).

For context on the mission, vision and guiding principles of Search, see the top-level [search strategy](index.md) page.

Quicklinks:

- [Search overall strategy](../index.md)
- [Search Product backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-product/)
- [Roadmap](https://github.com/orgs/sourcegraph/projects/214/views/34?filterQuery=owning-org%3A%22Code+Graph%22+type%3ARoadmap+owning-team%3A%22Search+product%22)

## Where we are now

Sourcegraph is the leading code search product in the market, used by tens of thousands of developers across enterprises of all sizes. It has advanced, novel search capabilities, such as [structural search](https://learn.sourcegraph.com/how-to-use-structural-search-in-sourcegraph) and [diff/commit search](https://sourcegraph.com/notebooks/Tm90ZWJvb2s6MTI=), as well as capabilities that extend search, such as [Code monitors](https://docs.sourcegraph.com/code_monitoring).

<!-- TODO: fix up docs link to go to Notebooks when docs PR is merged -->
We've launched [Notebooks](https://sourcegraph.com/notebooks?tab=explore) in public beta. You can create and share Notebooks with a free Sourcegraph cloud account. Read more about Notebooks in the [docs](https://docs.sourcegraph.com). This quarter will also see a [Code monitors](https://sourcegraph.com/code-monitoring?visible=4) release featuring a 10,000 repository limit on monitors (a 200x increase), major peformance improvements, multiple actions per monitor, Slack integration, and webhook support.

## What's next and why

### FY23Q1

#### Goals
Expand the core platform functionality with products and features that address our core [use cases](../../../strategy/use-cases/index.md). Sourcegraph needs to continue to differentiate its core platform beyond code search. Search will always power our platform, but to remain competitive we need to become more than the world's best code search. We must provide compelling solutions for the most pressing use cases of our customers. Our goal is to ensure the base Sourcegraph platform (currently Search, Notebooks, and Code monitors) continues to become more compelling and differentiated and supports future innovation from our team and across Sourcegraph.
- Support customers in onboarding new developers and sharing best practices, via Notebooks
- Enable more connectivity to Sourcegraph via webhooks and Slack integration
- Continue to improve our core platform experience by continuing to invest in the existing products and features, performance, and experimental R&D efforts that leverage our core search competency.

#### Details

**Search notebooks** achieve product market fit and enable individual developers and teams to easily document codebases and share best practices across an organization by enhancing Notebooks with sharing and duplication functionality, novel Notebook creation tools, and useful templates. Developers can already embed search results, code snippets and more, in a markdown-based notebook that creates more robust documentation. For example, by using structural search to persistently capture a function and its contents, even if it's moved in the codebase.

**Code monitor integrations** will provide the ability to integrate Code monitors with any service that supports webhooks, and will enable multiple actions to be triggered by a Code monitor. We will also support Slack integration with Code monitors.

#### What we're not working on and why

We're not going to try and go feature for feature with GitHub code search. That's a game of diminishing marginal returns and takes our focus off of truly differentiating features powered by our superior search technology. That doesn't mean search is no longer a central focus–far from it–but we'll stay true to our vision for the future of code search.

## Related use cases

This section lists use cases that are related to this product team, along with the specific relevant features.

{{generator:product_team_use_case_list.search_product}}
