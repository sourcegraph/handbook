# Code Insights strategy

Code Insights is an upcoming product that lets you track and understand what's in your code and how it changes over time.

This page outlines the vision, strategy, and goals of the Code Insights team over the next year or so.

Quick links:

- [Product & Engineering strategy](../../../departments/engineering/strategy-goals/index.md)
- [Go to market resources for Sales, CE, and Marketing](../../../departments/engineering/teams/code-insights/go_to_market.md)
- [How Code Insights maps to FY23 Use Cases](https://docs.google.com/document/d/1NXR0eX9VseJGT_BfCata_WR-yP0VxPsyYIyrsTOuoPs/edit#)
- [Code Insights Backlog](https://github.com/orgs/sourcegraph/projects/200/views/13)
- [Latest demo video](https://www.youtube.com/watch?v=fMCUJQHfbUA)
- [Documentation](https://docs.sourcegraph.com/code_insights)
- [Roadmap](https://github.com/orgs/sourcegraph/projects/214/views/34?filterQuery=owning-org%3A%22Code+Graph%22+type%3ARoadmap+owning-team%3A%22Code+insights%22)

## Mission, Vision, and Guiding Principles

### Mission

Code Insights helps engineering leaders, managers, and engineers answer questions about how their code is changing or what's in their code that are difficult or impossible to answer otherwise.

We bring **the best practices of big data to challenges of big code**, turning a codebase into a queryable database.

**We help engineering leaders** set and measure quantitative engineering goals, whether they be related to a migration, deprecation, vulnerability, code smell, or high level understanding. We also help engineering leaders understand the shape of their code and how it changes over time. Then we help them tie trends and metrics to _owners_ on their engineering teams.

**We help individual engineers** measure the day-to-day goals of their teams – how they are progressing on an individual initiative, how quickly other teams are adopting their code – as well as quantify tech debt problems to justify to leaders why certain work is important. We also help them get a historical usage view of functions, changes, or other patterns. Happily, we've heard that Code Insights has even helped some engineers get promotions or bonuses, because they use code insights to quantify the impact and spread of their work.

### Strategy

To deliver on our mission, we will:

- First, build a robust Code Insights product offering that is configurable yet simple enough to answer many different engineering leaders' specific questions
- Continually track usage and feedback to grow the product in its most valuable directions
- Then, build in key cross-product pathways that enable more steps of our [Sourcegraph use cases](../index.md#use-cases) flows
- Next, build new features that integrate new computation ability and new types of data to answer ever more questions about a codebase
- Eventually, build new major features or sub-products that help answer the second- and third-stage level of questions about a codebase

### Vision

#### 1 Year vision

> Any Sourcegraph user can create code insights for their code to answer any question that can be known with a Sourcegraph search or API query, and export/filter/find/receive this information wherever they need.

#### 3 Year vision

> Sourcegraph Code Insights provide Sourcegraph-built custom value metrics and combines with all other data sources about your code to be the singular home for any high-level question, impact, or code analysis.

#### 10 year vision

> Code Insights is the foundation upon which all developers everywhere naturally track, measure, learn, predict, and optimize their engineering and codebase – the best practices of big data become the best practices for managing big code.

### Guiding principles

### Code Insights is built first for engineering leaders

The answer to "why are building Code Insights _now_, ahead of other cool projects Sourcegraph can pursue?" is that Code Insights serves the needs of engineering leaders.

Engineer leaders may not need to use Sourcegraph directly for code search (though their teams do), but they do need to answer questions about their code that Sourcegraph, via Code Insights, is well-positioned to serve.

**What this looks like:**

- If individual developers want feature A, and engineering leaders want feature B, we'll likely build feature B first (but that does not mean we won't later build feature A, especially as the product matures)
- As we collect feedback and case studies, we are _particularly_ focused on engineering leaders

**What this does _not_ look like:**

- If engineering leaders want feature C, but feature C would be _harmful_ to the experience of individual developers, we will not build feature C.

### Code Insights layers together the Sourcegraph feature ecosystem

Code Insights naturally sits at the intersection of many other key features, and there are validated needs for, for example: customers to have Insights visualizing what they monitor with Code Monitors, Batch Changes to naturally flow into Code Insights for tracking progress and impact, Precise Code Intelligence that powers code insights for any specific symbol across all repositories.

As Sourcegraph becomes an increasingly powerful developer tool, Code Insights will be vital to tracking and understanding how both Sourcegraph and a company's engineers impact a codebase.

**What this looks like:**

- Code Insights will be extensible and integrate with other Sourcegraph features
- Code Insights will develop and reuse permissions models used across Sourcegraph's features

**What this does _not_ look like:**

- We won't add integrations just for the sake of integrations, without a validated need and use case

### Code Insights is NOT for tracking individual developers

Code Insights is not for trying to track an individual's output and whether or not someone is a "good" engineer or high performing employee. We believe it is low-signal to track metrics like like number of commits or number of lines of code an individual contributes.

**What this looks like:**

- We don't build features that would primarily be used for evaluating individuals' performance
- On a case by case basis, we might even intentionally build features to _block_ our other features from being used for this purpose, if the need ever arises
- We won't market or sell code insights under false pretenses that this is a valid use case for this feature

**What this does _not_ look like:**

- We won't prevent the positive use cases of individual tracking: if an individual wants to make a code insight demonstrating – for example – the spread of an API they built, they can

### Code Insights is an enterprise quality professional tool

For Code Insights to be valuable, it must be precise, exact, and performant. When it comes to codebases, there's little value in a measurement tool that is 90% correct, or within +/- 5%: our users need exact answers to inform decisions and track goals successfully. Code Insights also has to be performant enough that one can use it to answer questions when the need arises – our users can't wait weeks for their data, nor can they "ration" use of Code Insights among a Sourcegraph instance.

**What this looks like:**

- We don't compromise on precise accuracy; we test thoroughly, often, and at the extremes of possible use
- We often prioritize improvements to speed and database size above more user-facing tweaks

**What this does _not_ look like:**

- Not every Code Insights feature will complete instantly – our developer audience understands the complexity of the tool and forgives some amount of loading/processing time

### Code Insights builds on top of Sourcegraph's other features

Users do not need to learn a new query language or format to use Code Insights. Nor will Code Insights introduce features that function differently than those same features in other areas of the product, confusing users. Code Insights is built atop Sourcegraph Search and will build with Sourcegraph's other features rather than duplicate functionality.

**What this looks like:**

- If a Code Insights feature shares a name or purpose with another Sourcegraph feature, we'll adopt the name and constraints of that feature
- If building a feature that might be reused across the Sourcegraph platform, Code Insights consults with other product engineering teams

**What this does _not_ look like:**

- Code Insights won't avoid introducing net new features if no other Sourcegraph feature has yet built them

### Code Insights is a product _with graphs_, not a _graphing product_

The primary value of Code Insights comes from the questions it can answer for its users in service of [Sourcegraph use cases](../index.md#use-cases). While Code Insights will continue to add graph UI features as customers demonstrate need and value –- or even just desire -- we will primarily focus on building new insight types or graph flows (such as monitoring, cross-feature integrations, and filtering/drilldown ability) rather than new chart types or especially fancy charting customizations.

**What this looks like:**

- Even in rarer cases when we don't have user feedback to differentiate the priority of two features, we'll prioritize features that let you answer more types of questions, or answer them more specifically, rather than features that let you change the graph display for aesthetic purposes
- We sometimes delay "standard" graphing UI features, such as persisted re-orderable dashboard displays, because they won't best unlock value for our users relative to other work

**What this does not look like:**

- Code Insights will still prioritize adding new chart types if they _do_ enable insights to answer new questions, such as a heatmap chart type to visualize changes in a non-Cartesian coordinates way.

## Where we are now

[Code Insights is generally available](https://about.sourcegraph.com/code-insights/) and a paid add-on feature. The pricing and packaging details are [internally available](https://docs.google.com/document/d/11Y5ZDIT_nCwkobGzVgseM7vgmk5Hkt-4UZHvivHwN7A/edit#heading=h.tivmnwrtt3gg).

This means that the Code Insights team is focused on building a valuable product that a growing number of customers pay for. To reach that goal, Code Insights will continue building stability, features, and core product experiences based on the feedback we get from our users. Other things equal, Code Insights is primarily focused on expanding the number of jobs it can do for our customers, before improving on all of those with polish-type features.

For what we have learned so far and how we are operationalizing those learnings, see [Strategy](#strategy-and-plans).

### Top customer, support, sales and marketing issues

- The biggest issues customers face, and that we're addressing, are the yet-to-be-built product gaps. See the docs page for [Current Limitations of Code Insights](https://docs.sourcegraph.com/code_insights/explanations/current_limitations_of_code_insights).
- The main sales task for Code Insights is focusing on repeatability of our early Insights sales
- The main marketing task for Code Insights is building demand generation pipelines around our Code Insights content and public assets

### Competitive landscape

While there are many devtool products that use some version of the word "Insights," and a handful of others that do high level information about code, there are **no known direct competitors to Code Insights**.

For the Sales-focused competitive breakdown and responses, see the [Field Enablement training recording from 56:32-1:01:00](https://drive.google.com/drive/folders/1vYwRVsK8IfmaLa7cDcctXydClsWmnAQE) and the [accompanying slides](https://docs.google.com/presentation/d/1feAl1na3R3A56c_WKvWddgZB_bhk69Qqq6GWr_ISYuM/edit). You can also find a detailed breakdown of "similar" products in the original [Product Document for Code Insights](https://docs.google.com/document/d/1d34gCpt_rUOMAun8phcjNsFofGaaA_N_8znmgaugdKw/edit#bookmark=id.pobwla63lsa7).

Overall: there are no other products that can efficiently and effectively provide the deep historical and realtime analysis that Code Insights can provide, largely because any product that wanted to compete with Sourcegraph Code Insights would first have to catch up to the product moat of Sourcegraph Search (which powers Code Insights), and then also build out a Code Insights-like product.

There may be one-off instances of companies that have glued together in-house solutions to answer some of the same problems, but we have already validated (thus far) every one of those companies would prefer to use Code Insights.

## Detailed Strategy and Plans

### Strategy for FY22H2:

The next six months are focused on building a product that can quickly prove out its product-market fit via successful customer sales.

### Goals

These are the goals we plan to fully complete by the end of Q1 FY23:

- KR 1: 10 customers have purchased Code Insights in FY23Q1

_See also [completed goals](../../../departments/engineering/teams/code-insights/goals_completed.md)_

### Themes (and What's next and why)

#### Powerful but simple

Our biggest pre-beta learning was that a nice GUI and quick flow to creating a user's first Code Insight dramatically improves initial adoption. As we build a product that needs to be complex and configurable enough to serve the varied needs of our customers and fit perfectly to their codebase, we want to maintain the ease of setting up and navigating Code Insights.

We will:

- Continue abstracting complexity (example: views vs tables) until a user chooses to expose it
- Build new setup features to make it easier to serve a variety of other jobs to be done, like we did with regex capture groups, based on new Sourcegraph computation abilities

#### Tracking needs

A major use case for Code Insights is tracking migrations and similar efforts, which is an action that supports all of our [Sourcegraph use cases](../index.md#use-cases). There are a number of core features we've learned are valuable to users that we have yet to build.

We will:

- Explore additional chart visualizations that are helpful
- Explore integrations with Search Contexts to filter repository sets
- Explore integrations with Code Monitoring
- Explore early integrations with Batch Changes
- Work to unify our permissions model across other Sourcegraph features in support of these explorations, and so it's easy to add tracking Insights to other features (like Notebooks)

#### Exploration needs

We've learned a second major use case for Code Insights is exploring, to discover areas of the codebase that need more attention or deviated from the standard. There are many exploration features that come heavily requested from users we also plan to develop.

We will:

- Explore new types of filters and drilldowns
- Build support for clicking into insights to see the code changes behind them
- Explore integrating streaming search endpoints so that Insights load in realtime

#### Stability and performance

We have a lot of potential growth in both how stable/observable and how performant Code Insights are. Putting effort into both of these areas now will pay major dividends in developing future features and scaling to larger customers.

We will:

- Continue to optimize our backend to run more insights over more repos in less time
- Explore stability updates for running over large repositories (monorepo scaling) using streaming search endpoints

#### Future big bets: new data sources, locations, and operations

Now that Code Insights is a GA product, we'll continue executing on the above themes at the same time we start early user research exploration around what other data features may add value to Code Insights.

We will explore:

- Adding third-party data sources directly to Code Insights, possibly via Sourcegraph extensions
- Exporting Code Insights directly to other tools
- Building new insight types powered by new computation features of Sourcegraph

### What we're not working on & why

In order to focus on what drives the most user value, the Code Insights team is explicitly not working on any of the following unless new information surfaces:

- Code Insights on single docker container deployments: Code Insights lives primarily on the unindexed search path, which is substantially more resource intensive in this context. Currently, the experience is unacceptably bad, so we don't support it. The number of customers and leads that use a single docker container deployment is both shrinking and small enough that this is not a priority.
- Full integration with Batch changes: some customers want to visualize batch changes progress in Insights. While valuable, Batch changes is also new, so only a subset of customers will get value immediately and we've chosen to delay this work and focus on features that benefit all Code Insights users first. (However, we are exploring early integrations.)
- Integration with Precise Code Intelligence: though making insights for symbols is useful, the feature maturity of cross-repo code intel and the complexity involved is not yet worth the time cost for us to develop first.

## Related use cases

This section lists use cases that are related to this product team, along with the specific relevant features.

Some resources that other teammates have also found very helpful:

- [How Code Insights maps to FY23 Use Cases](https://docs.google.com/document/d/1NXR0eX9VseJGT_BfCata_WR-yP0VxPsyYIyrsTOuoPs/edit#)
- [Code Insights x FY23 Use Cases](https://docs.google.com/presentation/d/1feAl1na3R3A56c_WKvWddgZB_bhk69Qqq6GWr_ISYuM/edit#slide=id.g1161442b32e_0_787) section of the sales enablement presentation
- Live dashboards of example insights sorted by use case and maintained by the Code Insights team:
  - [Code Reuse](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzN30=)
  - [Code Health](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzNn0=)
  - [Fixing Vulnerabilities](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzOH0=)
  - [Incident Response](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzOX0=)
  - [Developer Onboarding](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDU0MH0=)

{{generator:product_team_use_case_list.code_insights}}
