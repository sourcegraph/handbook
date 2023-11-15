# Code Insights strategy

Code Insights lets engineering leaders track and understand what's in your code and how it changes over time, and helps individual developers discover relevant trends and high-level information about a codebase within their core workflow of searching and navigating code.

This page outlines the vision, strategy, and goals of the Code Insights team over the next year or so.

Quick links:

- [Go to market resources for Sales, CE, and Marketing](../../../departments/engineering/teams/code-search/code-insights/go_to_market.md)
- [Engineering strategy](../../../departments/engineering/index.md#product-vision-and-strategy)
- [How Code Insights maps to FY23 Use Cases](https://docs.google.com/document/d/1NXR0eX9VseJGT_BfCata_WR-yP0VxPsyYIyrsTOuoPs/edit#)
- [Code Insights Backlog](https://github.com/orgs/sourcegraph/projects/200/views/13)
- [Latest demo video](https://www.youtube.com/watch?v=fMCUJQHfbUA)
- [Documentation](https://docs.sourcegraph.com/code_insights)
- [Roadmap](https://docs.google.com/document/d/1XNrbBtkS8_lsjKxV8zvNfb1sn1Ug9Zhc24LFLCOa-Ic/edit?usp=sharing)

## Mission, Vision, and Guiding Principles

### Mission

Code Insights helps engineering leaders, managers, and engineers answer questions about how their code is changing or what's in their code that are difficult or impossible to answer otherwise.

We bring **the best practices of big data to challenges of big code**, turning a codebase into a queryable database.

**We help engineering leaders** set and measure quantitative engineering goals, whether they be related to a migration, deprecation, vulnerability, code smell, or high level understanding. We also help engineering leaders understand the shape of their code and how it changes over time. Then we help them tie trends and metrics to _owners_ on their engineering teams.

**We help individual engineers** measure the day-to-day goals of their teams – how they are progressing on an individual initiative, how quickly other teams are adopting their code – as well as quantify tech debt problems to justify to leaders why certain work is important. We also help give them a high level or historical usage view of functions, changes, or other patterns that improve their core Sourcegraph use of searching and navigating code. Happily, we've heard that Code Insights has even helped some engineers get promotions or bonuses, because they use code insights to quantify the impact and spread of their work.

### Strategy

To deliver on our mission, we will:

- ✅ First, build a robust Code Insights product offering that is configurable yet simple enough to answer many different engineering leaders' specific questions
- 🔄 Continually track usage and feedback to grow the product in its most valuable directions
- Now, in FY23Q3, build Code Insights features that empower the core workflow of individual developers who use Sourcegraph 10+ times a day to search and navigate code
- Then, build in key cross-product pathways that enable more steps of our [Sourcegraph use cases](../index.md#use-cases) flows
- Next, build new features that integrate new computation ability and new types of data to answer ever more questions about a codebase
- Eventually, build new major features or sub-products that help answer the second- and third-stage level of questions about a codebase

### Vision

#### 1 Year vision

> Any Sourcegraph user uses Code Insights features to see actionable information about historical usage, code structure, and other high-level patterns that improve the efficiency of their daily workflows.

#### 3 Year vision

> Code Insights features are table stakes for what best-in-class code search and navigation must provide. For engineering leaders, Sourcegraph Code Insights provide Sourcegraph-built custom value metrics and combines with all other data sources about your code to be the singular home for any high-level question, impact, or code analysis. These same metrics are surfaced in-flow to developers to enable an entire organization to move towards the same goals effectively.

#### 10 year vision

> Code Insights is the foundation upon which all developers everywhere naturally track, measure, learn, predict, and optimize their engineering and codebase – the best practices of big data become the best practices for managing big code both in-flow and deliberately.

### Guiding principles

### For individual developers

#### Meet developers where they work

Code Insights surfaces key information for individual developers in their existing workflows, without requiring learning a new interface or tool. We use information about where in a developers workflow they are to help inform what information is useful to show.

**What this looks like:**

- Code Insights may surface information in a search screen or code navigation hover that informs whether or not you should reuse code, or what questions you need to answer next
- Code Insights may surface this same information in your IDE or on your code host via our extensions

#### Integrate seamlessly with our existing workflows

Rather than try to build new core workflow pathways, Code Insights integrates into our search and code navigation core workflow.

**What this looks like:**

- We focus on extending and adding value within our search and code navigation features

**What this does _not_ look like:**

- We do add separate /insights/ pages and flows when the same need could be solved within our existing workflows.

#### The "why" and "where" is more important than the "what" and "who"

Most questions individual developers have for Code Insights are about why code is a certain way, or where the code they want to reference is found. They are less concerned with who wrote the code and what the codebase contains at a high level (since they are looking at the low-level code itself).

**What this looks like:**

- We build features that help surface trends and patterns and the potential reasons behind them

**What this does not look like:**

- We don't focus on absolute counts or compliance-type use cases that most individual developers don't have

#### Maintain a user's flow

Code Insights works quickly and smoothly, and doesn't interrupt a developer's flow or require them to learn a new product to get value.

**What this looks like:**

- We build features with minimal loading time and setup required so developers don't break flow to get value from code insights

**What this does not look like:**

- We don't require developers to return later to get value from the product

#### Proactively surface important information

Code Insights automatically surfaces to developers when there's a change or new pattern they care about. Individual developers don't need to remember to check code insights features on their own.

**What this looks like:**

- We make automated alerting for Insights and related features first-class priorities, at both a threshold cadence and a time cadence.

**What this does not look like:**

- We don't spam developers with unnecessary information or alerts. We make it easy to configure alerts that you actually care about.

### For Engineering Leaders

#### Code Insights was built first for engineering leaders

The answer to "why did we build Code Insights ahead of other cool projects Sourcegraph can pursue?" is that Code Insights serves the needs of engineering leaders.

Engineer leaders may not need to use Sourcegraph directly for code search (though their teams do), but they do need to answer questions about their code that Sourcegraph, via Code Insights, is well-positioned to serve.

The below principles are an abbreviation of what we use when building for engineering leaders. For full details, see [older revisions of this page](https://sourcegraph.com/github.com/sourcegraph/handbook/-/commit/c45cd7e2e8d54f2090f79417414dd0e131acc2b0?visible=2). These principles will become relevant again after we build Insights features that serve the core developer.

- Code Insights layers together the Sourcegraph feature ecosystem
- Code Insights is NOT for tracking individual developers
- Code Insights is an enterprise quality professional tool
- Code Insights builds on top of Sourcegraph's other features
- Code Insights is a product _with graphs_, not a _graphing product_

## Where we are now

[Code Insights is generally available](https://about.sourcegraph.com/code-insights/) and a paid add-on feature. The pricing and packaging details are [internally available](https://docs.google.com/document/d/11Y5ZDIT_nCwkobGzVgseM7vgmk5Hkt-4UZHvivHwN7A/edit#heading=h.tivmnwrtt3gg).

Many enterprise customers have purchased Code Insights for their engineering leaders to use. Since we have product-market fit for the engineering leader use, we are now focused on building a valuable set of features that also serve every individual developer in their core workflow.

For what we have learned so far and how we are operationalizing those learnings, see [Strategy](#strategy-and-plans).

### Top customer, support, sales and marketing issues

- The biggest issues customers face, and that we're addressing, are the yet-to-be-built product gaps. See the docs page for [Current Limitations of Code Insights](https://docs.sourcegraph.com/code_insights/explanations/current_limitations_of_code_insights).
- The main sales task for Code Insights is focusing on repeatability and pipeline generation of our Insights sales
- The main marketing task for Code Insights is building demand generation pipelines around our Code Insights content and public assets

### Competitive landscape

While there are many devtool products that use some version of the word "Insights," and a handful of others that do high level information about code, there are **no known direct competitors to Code Insights**.

For the Sales-focused competitive breakdown and responses, see the [Field Enablement training recording from 56:32-1:01:00](https://drive.google.com/drive/folders/1vYwRVsK8IfmaLa7cDcctXydClsWmnAQE) and the [accompanying slides](https://docs.google.com/presentation/d/1feAl1na3R3A56c_WKvWddgZB_bhk69Qqq6GWr_ISYuM/edit). You can also find a detailed breakdown of "similar" products in the original [Product Document for Code Insights](https://docs.google.com/document/d/1d34gCpt_rUOMAun8phcjNsFofGaaA_N_8znmgaugdKw/edit#bookmark=id.pobwla63lsa7).

Overall: there are no other products that can efficiently and effectively provide the deeply configurable historical and realtime analysis that Code Insights can provide, largely because any product that wanted to compete with Sourcegraph Code Insights would first have to catch up to the product moat of Sourcegraph Search (which powers Code Insights), and then also build out a Code Insights-like product.

There may be one-off instances of companies that have glued together in-house solutions to answer some of the same problems, but we have already validated (thus far) every one of those companies would prefer to use Code Insights.

There are no products that target providing high-level or historical information for individual developers within the code search and navigation flows themselves.

## Detailed Strategy and Plans

### Strategy for FY22H2:

The next six months are focused on building features that developers will use multiple times a day as they search and navigate code.

### Tactics

As we execute on this strategy, we will consistently prioritize shipping new iterations to customers as quickly as possible (<1 month) and collecting quantitative data via our new pipelines to validate next directions.

This means we may ship features that only work for some use cases, or don't yet scale to all customers, and that's okay – we'll message and feature-flag them as necessary to minimize any impacts. High speed is more important than high confidence for this work, because:

1. New data and delivery processes will allow us to collect customer feedback much faster, so we don't need to wait until we've built high confidence (prior, we did because feedback iteration cycles might take many months, so getting it right the first time was more important)
2. Developers (unlike engineering leaders) comprise the majority of our users, so we can expect to reach a statistically significant number of users more quickly
3. We believe many of these features need "live time" in front of users to discover new ways developers should search code using them, which a research prototype can't always capture

### Themes (and what's next and why)

_All of these themes are yet-to-be-validated with actively-ongoing user research._

#### Surface relevant recent trends and changes

Developers searching for code often have to dig into git blame or diff searches to understand the "why" behind a change. We should proactively surface information that answers questions about why something exists the way it does.

We will:

- Explore surfacing historical trends, diff search, and other high-level information in the core workflow of search and code navigation (such as [#38440](https://github.com/sourcegraph/sourcegraph/issues/38440))

#### Convey the structure of a codebase

When "onboarding" (in the local, "I need to make a few quick changes or fix some failing tests" sense of the word) to a new area of any codebase, developers struggle to understand how it's structured.

We will:

- Explore surfacing heatmaps or structural information in the search and navigation workflow

#### Prevent regressions on important initiatives

While engineering leaders can set up code insights to track important initiatives, the average developer won't know those insights exist and may commit code that moves key metrics in the wrong direction.

We will:

- Explore how to best surface key initiatives within the search and navigation workflow (such as [#38441](https://github.com/sourcegraph/sourcegraph/issues/38441))

#### Export insights information to core workflow tools

Some customers use third-party tools like service catalogs as part of their developers core workflow. We want to make Code Insights available to developers where they work.

We will:

- Explore easier embedding and exporting of code insights into other tools

#### Provide automated alerts for individual developers

Often, a team lead may set up a code insight to help with a key initiative. When the insight changes (positively or negatively), it's important that their team is aware of it.

We will:

- Build monitoring integrations to send relevant code insights information into tools like Slack

### What we're not working on & why

In order to focus on what drives the most user value, the Code Insights team is explicitly not working on any of the following unless new information surfaces:

- Additional short-term features for engineering leadership: Code Insights successfully serves the needs of engineering leaders at many enterprises, so we're pausing development on features for the engineering leader while we focus on building features for the individual developer. This does not mean we are pausing support for existing features (we are not pausing support) nor that we are not marketing and still offering Code Insights as an add-on product for engineering leaders (we are still targeting engineering leaders with the product).
- Code Insights on single docker container deployments: Code Insights lives primarily on the unindexed search path, which is substantially more resource intensive in this context. Currently, the experience is unacceptably bad, so we don't support it. The number of customers and leads that use a single docker container deployment is both shrinking and small enough that this is not a priority.
- Full integration with Batch changes: some customers want to visualize batch changes progress in Insights. While valuable, Batch changes is also new, so only a subset of customers will get value immediately and we've chosen to delay this work and focus on features that benefit all developers first.
- Integration with Precise Code Intelligence: though making insights for symbols is useful, the feature maturity of cross-repo code intel and the complexity involved is not yet worth the time cost for us to develop first.

## Related use cases

This section lists use cases that are related to this product team, along with the specific relevant features.

Some resources that other teammates have also found very helpful:

- Live dashboards of example insights sorted by use case and maintained by the Code Insights team:
  - [Code Reuse](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzN30=)
  - [Code Health](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzNn0=)
  - [Fixing Vulnerabilities](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzOH0=)
  - [Incident Response](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzOX0=)
  - [Developer Onboarding](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDU0MH0=)

{{generator:product_team_use_case_list.code_insights}}
