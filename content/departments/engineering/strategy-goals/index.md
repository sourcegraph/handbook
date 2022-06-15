# Product/Engineering strategy

## FY23

Our FY23 strategy is broken down in what we're planning to do, and why.

### Why

Sourcegraph today addresses many of the critical challenges that modern software teams face, such as accelerating [onboarding](https://about.sourcegraph.com/case-studies/convoy-improved-on-boarding) and [developer velocity](https://about.sourcegraph.com/case-studies/indeed-accelerates-development-velocity/), [incident response](../../../strategy-goals/strategy/use-cases/incident-response.md), [Code security](https://about.sourcegraph.com/case-studies/cloudflare-accelerates-debugging-and-improves-security/), [code reuse](https://about.sourcegraph.com/case-studies/cern-reduces-technical-debt/), and [monitoring code health](https://about.sourcegraph.com/case-studies/quantcast-large-scale-refactoring/).

Many of our current customers bought into our core capabilities (searching and navigating code, understanding code context, and automating large-scale changes) because they understood how to leverage them to address these use cases. But connecting these capabilities to use cases requires a leap of understanding: our product does not currently have first-class user flows built around these use cases. This friction can hamper further expansion and engagement.

Many more engineering teams and developers suffer from the same Big-Code-related pain points as our existing customers, but face significant user friction in connecting the current pieces of Sourcegraph to these core use cases. This prevents them from immediately understanding why Sourcegraph is valuable to them.

In order to achieve our ARR growth goal in FY23, our central challenge is to make Sourcegraph useful and accessible for a much larger set of engineering teams and developers, as well as to increase value and engagement at existing customers, by focusing our product development specifically on these target use cases.

To distill this down into themes:

- It to be obvious to users how to use Sourcegraph to solve for the **5 use cases**.
- We need to improve the **admin experience** of Sourcegraph - making upgrades, deployment, observability, and configuration much better.
- We are also building towards an enterprise SaaS solution. Any organization should be able to choose a Sourcegraph managed Cloud solution for trial or production, so users can start searching as quickly as possible.

### What

Our answer to the question of how to enable many more devs and eng orgs to discover the value of Sourcegraph is to make the [5 company use cases](../../../strategy-goals/strategy/index.md#use-cases) shine.

### Vision

Here's how things will look a year from now:

- Sourcegraph anchors technical **onboarding** inside the engineering organization and enables engineers to dive into unfamiliar code and get to "first bug fix or feature" quickly.
- Sourcegraph is the primary “step 2” **incident response** tool that devs turn to immediately after the first-line response tool (e.g., PagerDuty, Grafana) to locate the source of the issue and understand what needs to be patched to resolve it.
- Sourcegraph is the **security** remediation tool that CISOs and security teams use to assess, implement, and verify security patches across their code. (Many other tools focus on alerting, but Sourcegraph is used to close the loop.)
- Sourcegraph is the way that devs discover libraries and learn how to **reuse them**. It's also how library maintainers monitor and understand usage.
- Sourcegraph provides a dashboard source of truth for overall **code structure and health**. It makes visible the impact of changes on health and provides interventions for improving code health.
- We have a delightful site admin experience for Sourcegraph and we have met the security, reliability, and compliance requirements of a >100-developer organization on Sourcegraph Cloud.

### How

- **Customer-driven roadmap development:** Focusing on these use cases will drive targeted, cross-cutting improvements to our web app, browser extension, and editor extensions. We will proactively engage our customers to validate our product roadmap. Though we intend for use cases to drive both expansion and new acquisition, we will focus on partnering with existing customers as proxies for the prospects we want to reach.
- **Whole product thinking:** As we work towards "making target use cases shine" in our product, unified user flows are likely to yield much higher compounded value than siloed efforts to address the use cases. Worded differently, we should think in terms of "How do you use Sourcegraph to find and fix vulnerabilities", rather than "How do you use code insights to find and fix vulns? What about batch changes? Search?".
- **Data-driven decisions:** We must understand how users are using and failing to use our product in each use case. To do that, we must improve the maturity of our product user analytics system, aligning this with a well-defined customer journey, while respecting the privacy rights and expectations of our users.
- **Share underlying capabilities:** We will build solutions that enable a 10x improvement in these areas by building on our code search, navigation, and large-scale changesets capabilities, and our ability to integrate context from best-in-class third-party tools through our open extension API. Users should be able to leverage these capabilities consistently wherever they choose to use Sourcegraph: in the webapp, on their code host, in their editor, on the command line, or through the API.
- **Low-friction adoption:** We must bring to maturity our two delivery modes of self-hosted and cloud to minimize adoption friction and ensure we meet customers' reliability, security, and compliance needs. No product, however great the feature set, is useful if a customer is unable to use it for any of these reasons.
- **Using our own product and providing feedback (dogfooding):** We are developers building developer tools. Nobody is more available to provide immediate, honest, and direct feedback to improve our product than ourselves. [Our vision](#vision) on how well we improve each of the 5 use cases for our customers certainly applies to us internally at Sourcegraph.

### Examples of what we're NOT building

- It is often useful, in order to clarify our focus, to call out certain things that we _could_ but _won't_ build.
- Major features that don't address any of the 5 use cases
- Major features that we can’t iterate on with existing customers
- Code search for every public repository on GitHub
- A code host
- An IDE (cloud or otherwise)

### Competitive philosophy

One difference between this year and last is that we anticipate more competition. The world is starting to come around to the value of code search, so it's natural there will be more competitive interest. Some of these competitors will be larger and may have a distribution advantage (e.g., GitHub/Microsoft). Others will be smaller with innovative approaches in product, technology, or marketing. A few things to call out in our approach:

- We should remain focused on our users and our core value proposition. We will build a great company by again and again delighting our users.
- Leaning into our use cases not only helps us reach new devs, but also helps demonstrate the unique value of Sourcegraph relative to other entrants into the market.
- Competition should inspire us to do even better by our customers. There's no shame in copying (our competitors are definitely copying us!), but we won't copy for copying's sake—everything we do must be with an eye toward providing the greatest value for our customers.

For those particularly interested in understanding more about competitive frameworks as they apply to Sourcegraph, there is also [this internal document](https://docs.google.com/document/d/1BahpQNdVtg2guhoZ9Jvv0yhhENIQm5dTNjsKMCc7r4k/edit#heading=h.9dsgkokut1e1).

### See also

- [Company strategy for FY23](../../../strategy-goals/strategy/index.md#this-year-fy23)
- [Product/Engineering OKRs for Q1 FY23](https://docs.google.com/presentation/d/1KUOElUkrH-29teXmZBmgmIgLngf-I_6Ikixub1SR0yM/edit#slide=id.g1014ebc164b_0_137) (internal only)
- [Product roadmap](./roadmap.md)

## FY23 Q2 focus

**We’re building for enterprise and strategic accounts**
We’re building a product that adds value for enterprise (501 - 10k employees) and strategic (10k+ employees) customers because this group has the biggest impact on our revenue and this allows us to get Sourcegraph into the hands of thousands of developers.

**Improving quality is essential to our success**
To meet the high expectations of all customers, especially enterprise and strategic customers, we need to improve the quality of the end-to-end customer experience of Sourcegraph by investing in areas that will help us reduce the number of defects in releases, reduce the number of incidents/issues, and reduce the time to resolution of incidents/issues.

**We need to improve our deployments to meet customer demand**
We have a great product and our customers are struggling with getting to a point where they can use it through a trial or production instance in a reasonable amount of time. We need to ensure that deployments are as seamless as possible and don’t get in the way of customer value. In addition, we continue to see increased interest in Sourcegraph managed deployments since they provide a way to avoid the burden of self-hosting and maintaining Sourcegraph, so we need to quickly scale our ability to support more managed instances to meet these demands. From our customer perspective, managed instances are a Cloud SaaS offering of our product and we also need to think of it in this way. Over time (~2 years), we expect automated managed instances to evolve into a streamlined Sourcegraph hosted self-service solution.

**Use cases connect customers to the value of Sourcegraph**
Use cases are how our customers experience the value of Sourcegraph. We need to continue to educate our customers on how our current product and planned improvements help them solve each of these use cases by building a cohesive product experience for each of them.

**We’re building one Sourcegraph product**
We want every user to be able to realize the full value of Sourcegraph regardless of where it is hosted or how it is deployed. There have been many improvements to user onboarding, invite flows, and other setup experiences for Cloud, and we need these improvements to be brought back into the core product experience of Sourcegraph.
