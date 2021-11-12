# Code intelligence strategy

Code intelligence provides features and services that help developers better understand and navigate code. This page outlines the vision, strategy and goals of the Code intelligence team.

Quicklinks:

- [Code Graph overall strategy](../index.md)
- [Code intelligence backlog](https://github.com/orgs/sourcegraph/projects/211)
- [Latest demo](https://www.loom.com/share/b76c3ce971d9498197d4b664a20b20a8)
- [Documentation](https://docs.sourcegraph.com/code_intelligence)

## Mission, Vision & Guiding Principles

### Mission

We generate and process rich metadata that powers compiler-accurate code navigation features such as jumping to a symbol's definition and finding where it's referenced across repositories. We help make developers’ lives easier by reducing the time needed to navigate and understand codebases. In the future, we also aim to leverage our metadata to power precise searches, code insights, and batch changes.

### Vision

#### 1 Year vision

> Code intelligence provides seamless, out-of-the-box, precise code navigation for languages that cover 90% of the market usage.

#### 3 Year vision

> Code intelligence is the glue that sticks the product together, providing a platform for features from navigation to precise powered searches, batch changes and insights.
> We support all widely used languages and for the ones we don’t, provide a platform for any developer to add and test their own indexers.
> Our code navigation reaches IDE feature parity, and we also offer the option of plugging into developers’ favorite IDEs.

#### 10 year vision

> Code intelligence builds a global knowledge graph that accurately maps the entire code universe.

### Guiding principles

We target developers independently of their career level and company size, helping them learn, onboard, find, and understand codebases faster.

We prioritize precise language support based on overall usage and market-share, while also taking into account our customers' appetites. Given that supporting new languages requires deep knowledge of the language ecosystem, our team's skillset also affects the order of language support priority.

## Where we are now

Code intelligence lies at the very center of the product as a whole, providing the metadata that will eventually power other product areas.

At the moment maturity varies depending on the area of ownership:

- **Language indexers:** Maturity varies widely per language. See [LSIF indexers documentation](https://docs.sourcegraph.com/code_intelligence/references/indexers).

- **Code intelligence platform:** We're currently focusing on delivering an out-of-the-box precise code intelligence solution to a small number of eager customers. This will allow customers to easily set up precise code intelligence for Go, Java, Scala, Kotlin, and soon TS repositories. This feature will also enable automatic indexing of a repository's dependencies, which means users will now be able to navigate and find references across repositories and dependencies alike.

- **Code navigation:** Baseline features are implemented but have a considerable amount of debt and room for improvement. We're currently focusing on researching and implementing features that will make the overall navigation experience faster and more intuitive.

In the last few months we’ve:

- Added precise support for the JVM ecosystem (Java, Scala and soon Kotlin).
- Added search-based support for Apex.
- Shipped critical platform features necessary to set up and run auto-indexing at on-prem customers that use GCP or AWS.
- Taken our first steps into improving the code navigation experience by tackling longstanding papercuts.

Recent key learnings:

- We learned that LSIF manual setup is non-trivial and requires various levels of team involvement at enterprise customers. There’s an appetite for a out-of-the-box precise code navigation solution.
- Investing in platform performance and scalability is critical for the Global code graph vision to become a reality. Cloud is already at 2TB of data at ~40k indices. The global code graph for Java alone is somewhere between 800k to 6 million indices, so anywhere from 40TB to 300TB would be needed for the JVM code graph alone.

### Top customer, support, sales and marketing issues

- Requests for adding precise support for more languages (often including the addition of cross-repository and cross-dependency navigation features).
- Current manual setup is not straightforward, customers run into issues while setting up LSIF for their repositories. This varies per indexer maturity and language ecosystem complexity.
- There have been reports about performance and scaling issues when indexing large monorepos.
- Requests feature that helps visualize the code graph and its dependencies.

### Competitive landscape

- **Code hosts:** Both GitHub and GitLab have navigation features, mostly powered by imprecise code intelligence. They have good out-of-the-box support, but their chosen technical path prioritizes wider language breath sacrificing accuracy. Our precise code intelligence approach focuses on having 100% accuracy by implementing LSIF indexers. So far none of our competitors have mimicked the approach, but as precise code navigation gains traction this is a potential risk.
- **IDEs:** Code navigation is a core part of a developer’s workflow and most IDEs have advanced navigation features we cannot avoid competing with. Most developers expect Sourcegraph’s code navigation to have feature parity with their favorite IDE.
- **Other navigation tools:** These are usually focused on a small scope of languages, none of them have reached wide usage or compete directly with our current value proposition yet.

<!-- ### Analyst landscape

- If you are not currently involved with analyst discussions for your product area, you can reach out to Christina for context here and to stay in the loop in the future.
- Are there analysts tracking this product area?
- How are analysts positioning the product? What are areas of improvement? -->

## Strategy and Plans

### FY22 Q4 goals

These tie back to [FY22 Q4 Product/Engineering OKRs](../../../goals/2022_Q4.md#product-engineering)

**Objective: Make the power of our features easier to find and use**

- **KR:** Measure and increase WAU for customer facing product teams by 15%. For most teams this will require understanding and improving time-to-value as a driver for increasing active users.

**Objective: Level up our enterprise-ready features**

- **KR:** Enable out-of-the-box cross-repo and dependency navigation for 3 customers by successfully moving them to on-prem auto-indexing.
- **KR:** Improve precise code intelligence actions coverage by going from 3 to 5 languages (adding Kotlin and TS/JS), representing the languages in ~50% of all actions.

### Themes

#### Top level theme: Build and scale the Global Code Graph

- **Cross repository and dependency navigation**
  - We believe this is the global code graph’s killer feature. It elevates the code navigation experience to a new level of cross-project analysis. It includes enabling precise cross-repository navigation and the ability to navigate to any third party dependency a repository references. We're solving this initially on Sourcegraph Cloud and plan to replicate the same functionality for on-premise usage.
- **Auto-indexing on-prem goes into Beta:**
  - The current set up experience is not scalable for customers with a large amount of repositories. Enabling auto-indexing would mean a lower barrier for entry, a seamless experience and more engineers using precise code intelligence.
  - Building the code graph also means we need to generate and store increased amounts of LSIF data that will require scaling our infrastructure in an order of one to two magnitudes. We hypothesize that we'll reach scaling concerns, we want to be proactive in identifying and removing bottlenecks.
  - Once we have validated our Alpha solution and have proven it’s running successfully at three customers, the next step is monitoring and weeding out any issues that might arise from our first trials to move on-prem auto-indexing into Beta. At this point we’ll be aiming to roll it out to a larger number of customers.
- **Ship precise language support**
  - We’ve historically invested in broadening our span of supported languages. This is an ongoing effort that ties directly back to the Global Code Graph vision. We're currently focusing on shipping Kotlin, Protobuf and a revamped version of our JS/TS indexer. Our next step is adding auto-indexing and cross dependency navigation for JS and TS to our on-prem offeting.
- **Improve the user experience of code navigation and code intelligence**
  - Begin measuring and reporting time-to-value as a metric so that we can understand and improve retention, activation, and sign-ups, and know where the high ROI items are for delivering a unified experience in future quarters.
  - Conduct research that helps us understand adoption drivers and pain points with the aim of identifying concrete improvements to increase discoverability and enhance the navigation experience.

### What's next and why

- **Adding precise Python support:** Given its extense usage both at customers and in the market, we intend to add support for this language in the near term.

### What we're not working on & why

- **Incremental indexing for large monorepos:** When we ship auto-indexing for enterprise instances, we will likely need to solve incremental indexing to support our customers’ monorepos. This feature has been on our mid-term roadmap for quite some time now, but pain points have been worked through using workarounds like spacing LSIF upload frequencies depending on the customer’s repo size and commit frequency. At this point, incremental indexing could become a clear blocker and would be bumped up on our priority list.

- **Adding C#, Ruby and other precise language support:** Based on our team's bandwidth, skill set, market share and current associated ARR, we are not planning to work on these languages this year. We do however intend to add support for them in the middle term.

- **Scale the C++ code graph:** Given the fragmented nature of the C/C++ environment we won’t be investing in improving C/C++ language support or scaling. We do however intend to revisit our solution in the future.
