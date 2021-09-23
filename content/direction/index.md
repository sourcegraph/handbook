# Sourcegraph direction

Product strategy is the bridge (how we're going to get there) between our [vision](../company/strategy.md) (where we're headed) and the [individual team and org directions](index.md##per-area-direction-pages) (what we are going to do).

Want to help us achieve these goals? [We're hiring!](https://github.com/sourcegraph/careers)

## Product strategy

This is our strategy for realizing our [1-year vision](../company/strategy.md#1-year-vision).

### Build Sourcegraph into the development workflow

#### Challenge to overcome

We measure the value Sourcegraph brings to developers by measuring how often they use Sourcegraph in their daily workflows. We believe the [natural frequency of usage](https://amplitude.com/blog/2016/10/11/product-usage-interval) (how often people use Sourcegraph) as a key part of every developer’s workflow is many times per day. Our current usage metrics are good, but are not as high as they should be to match this natural frequency of usage.

#### What we want to achieve

Sourcegraph is an essential and frequently used part of the developer’s day to day workflow because it is the place that gives developers all context about their code. Sourcegraph is The One Search Bar to find information you need about your code. Search is easy to do from anywhere, aware of your current context, and integrated deeply into your common workflows; it's not just a list of matches.

We will measure this by:

- Number of daily active users
- Number of times Sourcegraph is used per day

#### How we're going to do this

- Insert Sourcegraph into more places in the developer workflow, so developers are being prompted to go use Sourcegraph.
- Give developers more reasons to come back with greater frequency by adding more value for them inside of Sourcegraph (e.g., information about code that doesn't live in the code itself).

### Support a broader set of configurations and workflows

#### Challenge to overcome

Many organizations have unique code setups and workflows that require workarounds to support, or prevent them from using Sourcegraph entirely.

#### What we want to achieve

Sourcegraph is the code search solution for every developer and every organization, regardless of their setup. At any organization, Sourcegraph is how developers are able to work with large and complex development workflows. Sourcegraph sustainably supports configuration of unique infrastructure and code setups.

#### How we're going to do this

- Solve use cases that are present at many large enterprises.
- Reduce friction in getting Sourcegraph deployed at scale.
- More integrated support for non-Git version control systems.

### Surface insights into code and development

#### Challenge to overcome

Software development executives have a hard time understanding what is going on with their large teams, the projects they are investing in, and the impact developers and teams have inside of their organization. The insights and information they need is hard to come by and is not solved by other tools or services because it relies on data the development teams produce to be tied to higher order concerns.

#### What we want to achieve

Sourcegraph has access to the low level data needed to build insights that are high quality and meaningful. Sourcegraph feeds the symbiotic relationship between developer produced data and executive insights, creating a cyclical feedback loop of immense value. Engineering leaders turn to Sourcegraph to understand what is going on in their organization.

#### How we're going to do this

- Do research to understand what questions engineering leaders want to answer about their organization's code.
- Add features to Sourcegraph that provide insights that are valuable to both leaders and developers.

## Per-area direction pages

Within this overall product direction, individual product areas set their own goals and roadmaps aligned to the [company OKRs](../company/goals/2022_q3.md), [Sourcegraph direction](../direction/index.md) and each have a direction page with all the details of what they are working on next and why. There is also an [(currently internal only) presentation](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gd8d1ce5e98_0_164) with highlights of planned features from all teams.

### Code Graph

- [Search core and Search product](code-graph/search/index.md)
- [Batch Changes](code-graph/batch-changes/index.md)
- [Code Intelligence](code-graph/code-intelligence/index.md)
- [Code Insights](code-graph/code-insights/index.md)

### Enablement

- Repository Management
- [Distribution](enablement/distribution/index.md)
- [Frontend Platform](enablement/frontend-platform/index.md)

### Cloud

- [Core application](cloud/core-application/index.md)
- Cloud SaaS
- Growth
  - [API docs](cloud/growth/index.md)
- [Security](cloud/security/index.md)
- DevOps/SRE
- [Extensibility](cloud/extensibility/index.md)
