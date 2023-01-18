# Code intelligence strategy

Code intelligence provides features and services that help developers better understand and navigate code. This page outlines the vision, strategy and goals of the Code intelligence team over the next year or so.

Quicklinks:

- [Engineering strategy](../../../departments/engineering/index.md#product-vision-and-strategy)
- [Code intelligence backlog](https://github.com/orgs/sourcegraph/projects/211)
- [Introduction demo](https://www.loom.com/share/b76c3ce971d9498197d4b664a20b20a8)
- [Documentation](https://docs.sourcegraph.com/code_navigation)

## Mission, Vision & Guiding Principles

### Mission

We generate and process rich metadata that powers compiler-accurate code navigation features such as jumping to a symbol's definition and finding where it's referenced across repositories. We help make developers’ lives easier by reducing the time needed to navigate and understand codebases. In the future, we also aim to leverage our metadata to power precise searches, Code Insights, and Batch Changes.

### Vision

- We see Code intelligence as the glue that sticks the product together, providing a platform for features from navigation to precise powered searches, compiler-accurate batch changes and insights. We aim to provide support for all widely used languages and for the ones we don’t, provide a platform for any developer to add and test their own indexers.
- In the near term we want Code intelligence to provide seamless, out-of-the-box, precise code navigation for languages that cover 90% of the market usage.
- We want our code navigation to reach IDE feature parity, while offering the option of plugging into developers’ favorite IDEs.
- In the longer term, we envision building a global knowledge graph that accurately maps the entire code universe.

## Where we are now

State of the art broken down by work stream:

- **Language tools:** We've progressively added and improved our precise language support, currently covering precise navigation 9 different languages. For a detailed description of language maturity see [indexers documentation](https://docs.sourcegraph.com/code_navigation/references/indexers).

- **Language platform:** Our goal is to increase precise code navigation coverage and adoption so more customers and users enjoy the benefits of compiler-accurate cross-repository navigation. To achieve this we're working towards making [auto-indexing](https://docs.sourcegraph.com/code_navigation/explanations/auto_indexing) widely available starting by enabling it by default for all our Cloud customers.

- **Code navigation:** Baseline features are implemented but have a considerable amount of debt and room for improvement. We're currently focusing on improving existent features that will make the overall navigation experience faster and more intuitive.

### Top customer, support, sales and marketing issues

Top feedback patterns we're hearing from customers and prospects across the board (also captured in our internal [Product Gaps dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O3t000006WZklEAG/view?reportFilters=%5B%7B%22operator%22%3A%22equals%22%2C%22value%22%3A%22Intelligence%22%2C%22column%22%3A%22Product_Gap_Submission__c.Product_Category__c%22%7D%5D)):

- Requests for adding precise support for more languages (often including the addition of cross-repository and cross-dependency navigation features), particularly improving C++ and adding C#.
- There have been reports about performance and scaling issues when indexing large monorepos, for which we're currently investing in a path forward for incremental indexing.

### Competitive landscape

- **Code hosts:** Both GitHub and GitLab offer navigation features, mostly powered by fuzzy code intelligence.

  GitHub has recently released a new version of their [Code Search](https://cs.github.com/) which includes an enhanced version of our search-based code intelligence approach. This means their chosen technical path prioritizes wider language breath while sacrificing accuracy. However, if GitHub's Code Search navigation proves to be "good enough" for most use cases, we'll have to directly compete for adoption and usage.

  Our precise code intelligence approach remains our key competitive advantage as it focuses on returning 100% accurate results and lays a solid foundation that enables implementing advanced navigation features like finding implementations and cross-dependency navigation. None of our competitors have mimicked the approach yet.

- **IDEs:** Code navigation is a core part of a developer’s workflow and most IDEs have advanced navigation features we cannot avoid competing with. Most developers expect Sourcegraph’s code navigation to have feature parity with their favorite IDE.
- **Other navigation tools:** These are usually focused on a small scope of languages, none of them have reached wide usage or compete directly with our current value proposition yet.

<!-- ### Analyst landscape

- Are there analysts tracking this product area?
- How are analysts positioning the product? What are areas of improvement? -->

## Strategy and plans

### Strategic-readiness

For the remainder of FY23 we'll be focusing on improvements that enable us to confidently support our largest existing customers. The finalized roadmap for this work is still TBD, but some of the areas we'll be investing in are:

**Improve current precise language support**
We now offer precise code navigation for a total of 9 languages. As adoption grows, we'll be focusing on making our existing indexers more mature by closing feature and performance gaps that exist between languages. With the launch of our own indexing protocol [SCIP](https://github.com/sourcegraph/scip) we'll continue to support LSIF based indexers but will be adding SCIP support to all currently supported languages and all future indexers. For a deeper look at the motivations behind SCIP you can check out our [SCIP announcement](https://about.sourcegraph.com/blog/announcing-scip).

**Iterate on auto-indexing UX:**

Enabling auto-indexing means a lower barrier for entry, improving the admin experience and more engineers using precise code navigation. Setting up [auto-indexing](https://docs.sourcegraph.com/code_intelligence/explanations/auto_indexing) is also a requirement for Sourcegraph to be able to index dependency packages.

Our next step is to do research on our existing UI, identify issues and gaps, and implement improvements to get closer to a self-serving experience for admins and users alike. Given auto-indexing will be soon enabled by default for all Cloud customers, we'll also be monitoring and weeding out any issues that might arise.

**Make code navigation feel fast and reliable**

We are committed to making our navigation feel fast and reliable to users. Our current focus is in solving known navigation issues while also adding quality of life improvements such as shipping an improved version of the reference panel and working on a more performant version of the blob view.

**Code intelligence API**

Several recent efforts have shown an increasing need to unify the [code intelligence data platform](https://docs.google.com/document/d/1AjZ_d0nJVHbV75IH3jZRkrGXhsv_AXp2kS4nrw2SAQ8). These efforts show an immediate need to be able to correlate and aggregate data from different sources within an API boundary (instead of re-implemented on several clients). This will set precedent for our internal team's domains and will establish clear ownership boundaries for other product teams to build on top of. We see this engineering milestone as a large enabler for every product vertical.

### Towards the code intelligence platform

The plan for this theme will be outlined by the Product team in the next quarter. A relevant sub-theme to consider is:

**Unlocking dependency navigation**

Most developers think in terms of package and dependency versions rather than focusing on external repositories. Supporting precise dependency navigation elevates the code navigation experience to a new level of cross-project analysis. Dependency navigation coupled with cross-repository takes the IDE model and scales it to encompass the whole cognitive space of a company.

The ability to navigate to any third party dependency a repository references is key to use cases like developer onboarding where time to value is directly related to how fast a developer is able to navigate and understand a new codebase, including the dependencies it relies on. Taking it a step further, adding support for a wider set of package hosts opens the door to a whole new array of cross-team features that support our use cases. These include (but are not limited to):

- Searching and finding references to vulnerable dependency versions or errors. Having an available fully semantic graph of the code in question allows other products such as Batch Changes to provide fast fixes and turnarounds during incidents and vulnerability detections.
- Accelerating developer onboarding by providing accurate search over the full transitive dependency graph.
- Monitoring code health by creating Code Insights that track deprecated dependency usages and version drift.

These are all currently in early stages of development and discussion. Read more about how we're thinking about the dependency graph in [RFC 593: Unlocking use cases based on the dependency graph of repositories](https://docs.google.com/document/d/1SkM8CG0IksvPEKRBRVLKipiRJTopx6Vq_hSWRJ9NyKs/edit#heading=h.trqab8y0kufp).

### What's next and why

- **Improving C++ support:** Given the fragmented nature of the C/C++ environment we've held off in investing in improving C/C++ language support or scaling in the last year. We're now actively working on a new C/C++ indexer using [SCIP](https://github.com/sourcegraph/scip). We're expecting to land an initial MVP that will be at parity with our old [lsif-clang](https://github.com/sourcegraph/lsif-clang) indexer by mid-March to mid-April 2023.
- **Adding precise C# support:** Work is underway for C# precise support with an initial delivery date being by April 2023.
- **Incremental indexing for large monorepos:** This feature has been on our mid-term roadmap for quite some time now, pain points have been worked through workarounds like spacing LSIF upload frequencies depending on the customer’s repo size and commit frequency. We're currently doing the foundational work required to unlock this feature.

### What we're not working on & why

- **Add support for a wider set of package hosts:** We currently support Maven, PyPI, crates, NPM and RubyGems packages. In the near future we want to expand our support to cover NuGet. See [Unlock dependency navigation theme](#themes) for strategic reasoning.
