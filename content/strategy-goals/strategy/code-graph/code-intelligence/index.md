# Code intelligence strategy

Code intelligence provides features and services that help developers better understand and navigate code. This page outlines the vision, strategy and goals of the Code intelligence team over the next year or so.

Quicklinks:

- [Code Graph overall strategy](../index.md)
- [Product & Engineering strategy](../../../../departments/product-engineering/strategy-goals/index.md)
- [Code intelligence backlog](https://github.com/orgs/sourcegraph/projects/211)
- [Latest demo](https://www.loom.com/share/b76c3ce971d9498197d4b664a20b20a8)
- [Documentation](https://docs.sourcegraph.com/code_intelligence)
- [Roadmap](https://github.com/orgs/sourcegraph/projects/214/views/34?filterQuery=owning-org%3A%22Code+Graph%22+type%3ARoadmap+owning-team%3A%22Code+intelligence%22)

## Mission, Vision & Guiding Principles

### Mission

We generate and process rich metadata that powers compiler-accurate code navigation features such as jumping to a symbol's definition and finding where it's referenced across repositories. We help make developers’ lives easier by reducing the time needed to navigate and understand codebases. In the future, we also aim to leverage our metadata to power precise searches, Code Insights, and Batch Changes.

### Vision

- We see Code intelligence as the glue that sticks the product together, providing a platform for features from navigation to precise powered searches, compiler-accurate batch changes and insights. We aim to provide support for all widely used languages and for the ones we don’t, provide a platform for any developer to add and test their own indexers.
- In the near term we want Code intelligence to provide seamless, out-of-the-box, precise code navigation for languages that cover 90% of the market usage.
- We want our code navigation to reach IDE feature parity, while offering the option of plugging into developers’ favorite IDEs.
- In the longer term, we envision building a global knowledge graph that accurately maps the entire code universe.

### Guiding principles

We prioritize precise language support based on overall usage and market-share, while also taking into account our customers' appetites. Given that supporting new languages requires deep knowledge of the language ecosystem, our team's skillset also affects the order of language support priority. To mitigate the impact of this factor we’re working on putting in place the necessary infrastructure that will enable taking in community contributions in the future.

## Where we are now

Code intelligence lies at the very center of the product as a whole, providing the metadata that powers other product areas.

At the moment maturity varies depending on the area of ownership:

- **Language indexers:** Maturity varies widely per language. See [LSIF indexers documentation](https://docs.sourcegraph.com/code_intelligence/references/indexers).

- **Code intelligence platform:** We're currently focusing on delivering an out-of-the-box precise code intelligence solution to a small number of eager customers. This allows customers to easily set up precise code intelligence for Go, Java, Scala, Kotlin and TypeScript repositories. This also enables automatic indexing of a repository's dependencies, which means users are now be able to navigate and find references across repositories and dependencies alike.

- **Code navigation:** Baseline features are implemented but have a considerable amount of debt and room for improvement. We're currently focusing on researching and implementing features that will make the overall navigation experience faster and more intuitive.

In the last few months we’ve:

- Added precise support for Python and revamped our TypeScript support.
- Improved our search-based navigation experience by implementing efforts like [Rockskip](https://docs.sourcegraph.com/code_intelligence/explanations/rockskip) and [Squirrel] (https://docs.google.com/document/d/10YHHydQXmPODzeDDSAm_audheahdc8NjCqQPBV_wcN0)
- Shipped the [executors service](https://docs.sourcegraph.com/admin/executors) that powers [auto-indexing](https://docs.sourcegraph.com/code_intelligence/explanations/auto_indexing) at on-prem customers that use GCP or AWS.

Recent key learnings:

- In alignment to the company's pivot towards managed instances, establishing a pricing strategy for the executors service will be key part of moving Auto-indexing into Beta.

### Top customer, support, sales and marketing issues

Top feedback patterns we're hearing from customers and prospects across the board (also captured in our internal [Product Gaps dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O3t000006WZklEAG/view?reportFilters=%5B%7B%22operator%22%3A%22equals%22%2C%22value%22%3A%22Intelligence%22%2C%22column%22%3A%22Product_Gap_Submission__c.Product_Category__c%22%7D%5D)):

- Requests for adding precise support for more languages (often including the addition of cross-repository and cross-dependency navigation features).
- Current manual setup is not straightforward, customers run into issues while setting up precise code intelligence for their repositories. This varies per indexer maturity and language ecosystem complexity.
- There have been reports about performance and scaling issues when indexing large monorepos.
- Requests for the ability to visualize the code graph and its dependencies.

### Competitive landscape

- **Code hosts:** Both GitHub and GitLab offer navigation features, mostly powered by fuzzy code intelligence.

  GitHub has recently released a new version of their [Code Search](https://cs.github.com/) which includes an enhanced version of our search-based code intelligence approach. This means their chosen technical path prioritizes wider language breath while sacrificing accuracy. However, if GitHub's Code Search navigation proves to be "good enough" for most use cases, we'll have to directly compete for adoption and usage.

  Our precise code intelligence approach remains our key competitive advantage as it focuses on returning 100% accurate results and lays a solid foundation that enables implementing advanced navigation features like finding implementations and cross-dependency navigation. None of our competitors have mimicked the approach yet.

- **IDEs:** Code navigation is a core part of a developer’s workflow and most IDEs have advanced navigation features we cannot avoid competing with. Most developers expect Sourcegraph’s code navigation to have feature parity with their favorite IDE.
- **Other navigation tools:** These are usually focused on a small scope of languages, none of them have reached wide usage or compete directly with our current value proposition yet.

<!-- ### Analyst landscape

- If you are not currently involved with analyst discussions for your product area, you can reach out to Christina for context here and to stay in the loop in the future.
- Are there analysts tracking this product area?
- How are analysts positioning the product? What are areas of improvement? -->

## Strategy and Plans

### Themes

**Unlock dependency navigation**

We believe this is emerging as an additional killer feature. Most developers think in terms of package and dependency versions rather than focusing on external repositories. Supporting precise dependency navigation elevates the code navigation experience to a new level of cross-project analysis. Dependency navigation coupled with cross-repository takes the IDE model and scales it to encompass the whole cognitive space of a company.

The ability to navigate to any third party dependency a repository references is key to use cases like [Developer onboarding](../../use-cases/dev-onboarding.md) where time to value is directly related to how fast a developer is able to navigate and understand a new codebase (including the dependencies it relies on). Taking it a step further, adding support for a wider set of package hosts opens the door to a whole new array of cross-team features that support our use cases. These include (but are not limited to):

- Make Sourcegraph a must-have for code security teams by [Fixing security vulnerabilities](../../use-cases/fixing-security-vulnerabilities.md) and helping [Incident response](../../use-cases/incident-response.md) by searching and finding references to vulnerable dependency versions or errors. Having an available fully semantic graph of the code in question allows other products such as Batch Changes to provide fast fixes and turnarounds during incidents and vulnerability detections.
- Accelerating [Developer onboarding](../../use-cases/dev-onboarding.md) by enabling the ability to search over the full transitive dependency graph.
- Monitor [Code Health](../../use-cases/code-health.md) by creating Code Insights that track deprecated dependency usages and version drift.
- Encourage [Code Reuse](../../use-cases/code-reuse.md) by making precise navigation the obvious way to find references to relevant usage examples.

These are all currently in early stages of development and discussion. Read more about how we're thinking about the dependency graph in [RFC 593: Unlocking use cases based on the dependency graph of repositories](https://docs.google.com/document/d/1SkM8CG0IksvPEKRBRVLKipiRJTopx6Vq_hSWRJ9NyKs/edit#heading=h.trqab8y0kufp).

**Ship precise language support**

We’ve historically invested in broadening our span of supported languages. This is an ongoing effort that ties directly back to the Global Code Graph vision, aiming to support languages that cover 90% of code intelligence actions at customers and Sourcegraph Cloud (see our [language share dashboard section](https://sourcegraph.looker.com/dashboards/159)). Increasing precise support contributes to push forward any security features we choose to implement as it makes compiler-accurate metadata available for all our product verticals. We're currently working on adding precise cross-repository Python support and PyPi package support.

**Auto-indexing on-prem goes into Beta:**

Strategically we're favoring accuracy over availability and actively recommend customers to set up precise code intelligence. This comes at a cost, as the current precise set up experience can be cumbersome and isn't scalable for customers with a large amount of repositories given it requires manual set up for each individual repository we want to enable precise code intelligence for.

Enabling auto-indexing means a lower barrier for entry, improving the admin experience and more engineers using precise code intelligence. Setting up [auto-indexing](https://docs.sourcegraph.com/code_intelligence/explanations/auto_indexing) is also a requirement for Sourcegraph to be able to index dependency packages.

Building the code graph also means we need to generate and store increased amounts of data that will require scaling our infrastructure in an order of one to two magnitudes. We hypothesize that we'll reach scaling concerns, we want to be proactive in identifying and removing bottlenecks.

Our next step is helping customers set up, monitor and weed out any issues that might arise from our first trials to move auto-indexing into Beta. At this point we’ll be aiming to roll it out to a larger number of customers.

**Make code navigation feel fast and reliable**

We receive a significant amount of feedback around papercuts and potential improvements to our navigation experience. We are commited to making our navigation feel fast and reliable to users. Our current focus is in solving low hanging navigation issues while also adding quality of life improvements with the aim of increasing code navigation usage.

**Code intelligence platform API**

Several recent efforts have shown an increasing need to unify the [code intelligence data platform](https://docs.google.com/document/d/1AjZ_d0nJVHbV75IH3jZRkrGXhsv_AXp2kS4nrw2SAQ8). These efforts show an immediate need to be able to correlate and aggregate data from different sources within an API boundary (instead of re-implemented on several clients). This will set precedent for where code goes in relation to code intelligence domains and will establish clear ownership boundaries for other product teams to build on top of. We see this engineering milestone as a large enabler for every product vertical, thus indirectly impacting usage in the mid term.

### How do these all tie together?

Although the themes above might seem isolated or disconnected at a first glance, each one of them contributes to push forward our [Code Graph vision](../index.md). Auto-indexing serves a double purpose: it lowers the barrier to adoption by making precise code intelligence easier to configure, and also unlocks the ability to index dependencies (which play a central part in our current strategy). By adding more language support, combining it with adding package hosts support, and improving our navigation features overall we're aiming to position Sourcegraph as a superior code navigation platform that goes beyond baseline expectations and creates delightful experiences for our users.

Additionally, providing the precise code intelligence data layer sets the foundations to unlock new features in our other product verticals (e.g. powering symbol renaming in Batch Changes, using number of call sites to power ranking in Search) and enhancing already existing product verticals (e.g more accurate dependency tracking in Code Insights). This will make Sourcegraph a powerful integrated solution for a large array of developer use cases, which will be hard to match by any single competitor.

### What's next and why

- **Adding precise C# and Ruby language support:** Based on our team's bandwidth and skill set, we are not planning to work on these languages this quarter. However, to support our [Grow ARR and Iterate with existing customers first](../../index.md#this-year-fy23) goals, we are working towards prioritizing these languages later this year based on current customer language share and associated ARR.

- **Scale the C++ code graph:** Given the fragmented nature of the C/C++ environment we've held off in investing in improving C/C++ language support or scaling in the last year. However, we're currently looking into implementation strategies that will help us uncover the level of effort it would require the team to improve our current support.

- **Add support for a wider set of package hosts:** We currently support Maven and NPM packages (and are working towards adding PyPi). In the near future we want to expand our support to cover NuGet and RubyGems. See [Unlock dependency navigation theme](#themes) for strategic reasoning.

- **Auto-indexing on prem goes GA:** Once we've validated adoption in Beta phase focus on identifying feedback patterns and solving issues to make the auto-indexing generally available to all customers.

### What we're not working on & why

- **Incremental indexing for large monorepos:** This feature has been on our mid-term roadmap for quite some time now, pain points have been worked through workarounds like spacing LSIF upload frequencies depending on the customer’s repo size and commit frequency. We're currently doing the foundational work required to unlock this feature.

## Related use cases

This section lists use cases that are related to this product team, along with the specific relevant features.

{{generator:product_team_use_case_list.code_intelligence}}
