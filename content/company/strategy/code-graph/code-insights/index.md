# Code Insights strategy

Code Insights is an upcoming product that lets you track and understand what's in your code and how it changes over time.

This page outlines the vision, strategy, and goals of the Code Insights team.

Quick links:

- [Code Graph overall strategy](../index.md)
- [Code Insights Backlog](https://github.com/orgs/sourcegraph/projects/200/views/13)
- Latest demo – private since the product is in beta; slack the #code-insights team or email feedback@sourcegraph.com if you're curious!
- [Documentation](https://docs.sourcegraph.com/code_insights)

## Mission, Vision, and Guiding Principles

### Mission

Code Insights helps engineering leaders, managers, and engineers answer questions about how their code is changing or what's in their code that are difficult or impossible to answer otherwise.

We bring **the best practices of big data to challenges of big code**, turning a codebase into a queryable database.

**We help engineering leaders** set and measure quantitative engineering goals, whether they be related to a migration, deprecation, vulnerability, code smell, or high level understanding. We also help engineering leaders understand the shape of their code and how it changes over time. Then we help them tie trends and metrics to _owners_ on their engineering teams.

**We help individual engineers** measure the day-to-day goals of their teams – how they are progressing on an individual initiative, how quickly other teams are adopting their code – as well as quantify tech debt problems to justify to leaders why certain work is important. We also help them get a historical usage view of functions, changes, or other patterns. Happily, we've heard that Code Insights has even helped some engineers get promotions or bonuses, because they use code insights to quantify the impact and spread of their work.

### Strategy

To deliver on our mission, we will:

- First, build a robust Code Insights product offering that is configurable yet simple enough to answer many different engineering leaders' specific questions
- Concurrently, continually track usage and feedback to grow the product in its most valuable directions
- Then, be intentional with how we publicly launch Code Insights to make sure this story is immediately clear
- Next, build towards a Cloud product offering after launching publicly to self-hosted customers
- Eventually, build new major features that help answer the second- and third-stage level of questions about a codebase

### Vision

#### 1 Year vision

> Any Sourcegraph user can create code insights for their code to answer any question that can be known with a Sourcegraph search, and export/find/recieve this information wherever they need.

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
- As we collect feedback and case studies towards our GA launch, we are _particularly_ focused on engineering leaders

**What this does _not_ look like:**

- If engineering leaders want feature C, but feature C would be _harmful_ to the experience of individual developers, we will not build feature C.

### Code Insights layers together the Sourcegraph feature ecosystem

Code Insights naturally sits at the intersection of many other key features, and there are validated needs for, for example: customers to have Insights visualizing what they monitor with Code Monitors, Batch Changes to naturally flow into Code Insights for tracking progress and impact, Precise Code Intelligence that powers code insights for any specific symbol across all repositories.

As Sourcegraph becomes an increasingly powerful developer tool, Code Insights will be vital to tracking and understanding how both Sourcegraph and a company's engineers impact a codebase.

**What this looks like:**

- Code Insights will be extensible and integrate with other Sourcegraph features

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

Users do not need to learn a new query language or format to use Code Insights. Nor will Code Insights introduce features that function differently than those same features in other areas of the product, confusing users. Code Insights is built atop Sourcegraph Search and will build with Sourcegraph's other features rather than implement its own versions of any functionality.

**What this looks like:**

- If a Code Insights feature shares a name or purpose with another Sourcegraph feature, we'll adopt the name and constraints of that feature
- If building a feature that might be reused across the Sourcegraph platform, Code Insights consults with other product engineering teams

**What this does _not_ look like:**

- Code Insights won't avoid introducing net new features if no other Sourcegraph feature has yet built them

## Where we are now

Code Insights is a [Beta Feature](../../../../product-engineering/product/beta_and_experimental_feature_labels.md). It entered Beta in August 2021, and will likely remain in Beta into Q4.

This means that the Code Insights team is singularly focused on bringing Code Insights into general availability. To reach that goal, Code Insights will be building stability, features, and core product experiences based on the feedback we get from our beta participants.

During the Beta, we are also evaluating pricing and packaging options. It is likely Code Insights will be a standalone feature with its own pricing.

For what we have learned so far and how we are operationalizing those learnings, see [Strategy](#strategy-and-plans).

### Top customer, support, sales and marketing issues

- The biggest issues customers face, and that we're addressing, are the yet-to-be-built product gaps. See the docs page for [Current Limitations of Code Insights](https://docs.sourcegraph.com/code_insights/explanations/current_limitations_of_code_insights) for an up-to-date list.
- Internally, the main task for Code Insights is determining the pricing and packaging

### Competitive landscape

While there are many devtool products that use some version of the word "Insights," and a handful of others that do high level information about code, there are **no known direct competitors to Code Insights**.

There are no other products that can efficiently and effectively provide the deep historical and realtime analysis that Code Insights can provide, largely because any product that wanted to compete with Sourcegraph Code Insights would first have to catch up to the product moat of Sourcegraph Search (which powers Code Insights), and then also build out a Code Insights-like product.

There may be one-off instances of companies that have glued together in-house solutions to answer some of the same problems, but we have already validated (thus far) every one of those companies would prefer to use Code Insights.

While Code Insights is in Beta, you can find a detailed breakdown of "similar" products in the original [Product Document for Code Insights](https://docs.google.com/document/d/1d34gCpt_rUOMAun8phcjNsFofGaaA_N_8znmgaugdKw/edit#bookmark=id.pobwla63lsa7). At some moment pre-GA launch, the product and marketing team will create more standard competitive resources based on the GA product features and merge them into this page.

## Detailed Strategy and Plans

### Strategy for FY22H2:

The next six months are focused on building a product that can quickly prove out its product-market fit via successful customer sales.

### Goals

#### FY22Q3

- KR 1: We have qualitative/anecdotal evidence that at least 3 customers have a manager/director/VP who is using code insights
- KR 2: 50% of customers on 3.31+ make 10 code insights per customer, and have at least 5 weekly unique viewers of insights ([Looker dashboard](https://sourcegraph.looker.com/dashboards-next/209?Latest+Version=))

_See also [completed goals](../../../../product-engineering/engineering/code-graph/code-insights/goals_completed.md)_

### Themes (and What's next and why)

#### Powerful but Simple

Our biggest pre-beta learning was that a nice GUI and quick flow to creating a user's first Code Insight dramatically improves initial adoption. As we build a product that needs to be complex and configurable enough to serve the varied needs of our customers and fit perfectly to their codebase, we want to maintain the ease of setting up and navigating Code Insights.

We will:

- Continue abstracting complexity (example: views vs tables) unless necessary to expose it
- Build new setup features to make it easier to track a variety of other use cases, like with regex capture groups
- Explore what quick-to-set-up insights might be possible the first moment a customer uses insights

#### Tracking Use Case Needs

A major use case for Code Insights is tracking migrations and similar efforts. There are a number of core features we've learned are valuable to users that we have yet to build.

We will:

- Enable things like custom x-axis time ranges on Insights
- Allow users to edit insights after creation
- Explore additional chart visualizations that are helpful
- Allow engineering leaders to export insights data to their preferred dashboards tools
- Explore integrations with Code Monitoring

#### Exploration Use Case Needs

We've learned a second major use case for Code Insights is exploring, to discover areas of the codebase that need more attention or deviated from the standard. There are many exploration features that come heavily requested from users we also plan to develop.

We will:

- Explore new types of filters and drilldowns
- Build support for clicking into insights to see the code changes behind them

#### Stability and Performance

We're an early Beta product and have a lot of potential growth in both how stable/observable and how performant Code Insights are. Putting effort into both of these areas now will pay major dividends in developing future features and scaling to larger customers.

We will:

- Migrate Insights configurations out of settings files into a proper database
- Continue to optimize our backend to run more insights over more repos in less time

#### Launch Planning

In order to have a successful GA launch, we are also focused on the tasks required to build excitement, storytelling, and sales energy.

We will:

- Be planning for customer case studies and quotes
- Align on pricing and packaging
- Build landing pages and marketing content ahead of the launch

### What we're not working on & why

In order to focus and have a successful initial launch, the Code Insights team is explicitly not working on any of the following until FY23:

- Code Insights is GA on Cloud: due to the multi-tenant nature of cloud, there's additional backend work we'll do in FY23 to make Insights GA on Cloud. Optimizations we plan to make in FY22H2 will help us quickly plan and support Code Insights on Cloud, but we won't have time for that until FY23H1.
- Custom Insights Data Import: it's worth exploring what importing data mixed with Code Insights can do, but we first need to stabilize and grow our core product features before adding that complexity. We'll explore this in FY23H1.
- Custom Extension Insights: while some Sourcegraph extensions do and can contribute Code Insights, we're not focused on third-party contributed insights because of the limited excitement initial users had for them. We _may_ explore this in FY23H1.
- Integration with Batch changes: some customers want to visualize batch changes progress in Insights. While valuable, Batch changes is also new, so only a subset of customers will get value immediately and we've chosen to delay this work and focus on features that benefit all Code Insights users first.
- Integration with Precise Code Intelligence: though making insights for symbols is useful, the feature maturity of cross-repo code intel and the complexity involved is not yet worth the time cost for us to develop first.
