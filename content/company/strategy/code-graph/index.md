# Code Graph strategy

We have teams working on [Search](./search/index.md), [Code Insights](./code-insights/index.md), [Code Intelligence](./code-intelligence/index.md), and [Batch Changes](./batch-changes/index.md); this page describes the mission and strategy that ties them together, but each linked page provides a more detailed strategy for that team including what they are working on next and why. There is also a whole-company [Sourcegraph strategy](../index.md) available to which all of this is aligned.

## Mission

Make finding, understanding, and editing code easier, no matter how complex it is, where it's stored, or how experienced you are. We will achieve this by creating a flow that ties insights, searching, and changes together.

## Themes & Goals

We are focused over the next year on several themes across Code Graph to make our mission a reality. We set our goals around these themes, so you can also see current FY22-Q4 goals as a bullet list under each theme. The current status of these can be found at our [high-level OKR and roadmap tracker](https://github.com/orgs/sourcegraph/projects/214/views/11) (internal only).

### Make the power of our features easier to find and use

Learning how to get the most out of our product tends to be trial and error, especially for an individual developer who might have a unique set of use cases. Making onboarding and interaction easier helps everyone (including potential cusotmers) find the value of our product more quickly than is possible today. Compared to tools that specialize in single-language ecosystems, we provide a more comprehensive solution (which is an advantage for us) but it is important we do this in a way that doesn't compromise depth.

- Measure and increase [WAU](../../../bizops/user_definitions.md) for [customer facing product teams](https://github.com/sourcegraph/handbook/blob/main/data/product_teams.yml) by 15%. For most teams this will require understanding and improving time-to-value as a driver for increasing active users. (All Teams)
- Make it easier to adopt Batch Changes by fixing top three changeset syncing and permission configuration issues. ([Batch Changes](./batch-changes/index.md))
- 3 customers with >1 Search Notebook, demonstrating initial traction for this feature and proving the value of Search Notebooks for sharing explanations of code. ([Search Product](./search/index.md))

### Level up our enterprise-ready features

How our product works in terms of pricing, upgrade paths, auditing, single sign-on, access control, etc. are essential for customers with large, complex organizations. In partnership with our Cloud team, we're focused on ensuring we meet and exceed these needs so that when rolling out Sourcegraph the logistics don't get in the way of realizing the value.

- Get a Sales commitment from a customer who will pay for Insights at launch, proving the value of the feature ([Code Insights](./code-insights/index.md))
- Enable out-of-the-box cross-repo and dependency navigation for 3 customers by successfully moving them to on-prem auto-indexing. ([Code intelligence](./code-intelligence/index.md))
- Enable powerful automation and notification use cases (e.g. by adding webhook and Slack integrations) to Code Monitors and getting a Q1 usage commitment from 3 customers. ([Search Product](./search/index.md))
- Improve precise code intelligence actions coverage by going from 3 to 5 languages (adding Kotlin and TS/JS), representing the languages in ~50% of all actions. ([Code intelligence](./code-intelligence/index.md))

### Deliver a unified experience

By investing in well-integrated functionality we can deliver solutions that are more than the sum of their parts. Code visualizations powered by search and Code Intelligence can help with onboarding into a new codebase; Search Notebooks can provide a way to mix documentation with searches; Insights can lead to easy mitigation of multi-repo wide issues using Batch Changes. These kinds of examples require us to think through and build intuitive integrations between our teams.

- No goal in this quarter since we are improving our measurement capability around what is most important here; we expect this to be a focus in Q1.

### Scale for Big Code

We have more and more large customers dealing with a lot of code and complexity at scale. It's important that our platform meets their needs, not just in terms of search performance, but in allowing you to explore and understand complex interrelationships of meaning in source code, at the [world's largest scale](../index.md#big-code).

- Make Sourcegraph Search work well with large-scale monorepos (time to first result for unindexed search on monorepos larger than 200GB is < 10s and <2s for indexed, and time to indexing is always <30 minutes). ([Search Core](./search/index.md))
- Sourcegraph Cloud indexes public repositories globally from 4 non-GitHub code hosts. ([Search Core](./search/index.md))
- Three customers use server side Batch Changes to create 200+ changeset batch changes, proving that it is enabling large-scale use cases and revenue. ([Batch Changes](./batch-changes/index.md))
- At least one customer issue was solved with the help of `src debug`, which makes observability better for on-prem and makes Customer Support’s job easier. ([Search Core](./search/index.md))

## Principles

### Abstraction vs. complexity

According to [The Case for 'Developer Experience'](https://future.a16z.com/the-case-for-developer-experience/) (by [Jean Yang](https://twitter.com/jeanqasaur)), there are two ways to think about categories of developer tools or features today:

- Abstraction tools, which simplify tasks away by providing building blocks, sane defaults, and frameworks to build on. Most existing developer tools are of this variety.
- Complexity-exploring tools, which help with complex problems such as finding and fixing issues in existing, heterogeneous software systems. I.e., ones that were created using the existing tools developers use today, with different languages, frameworks, and versions in constant flux, all interacting with each other.

We see Sourcegraph as playing an important role in this emerging need for complexity-exploring tooling. "The reality is that software tech stacks today look more like a rainforest — with animals and plants co-existing, competing, living, dying, growing, interacting in unplanned ways — than like a planned garden" ([_The Case for 'Developer Experience' by Jean Yang_][1]), and we are mindfully designing our user experience to let you embrace this complexity rather than hiding it, or pushing you towards a specific single solution. Practically, this means a few things as we think about how our product should work:

1. Sourcegraph fits in to your existing ecosystem – wherever you host your code, whatever language it's in, or however many repos you use.
1. By surfacing relationships (not just code itself, but data types, configuration, and more) we help you build a clear, meaningful model of your software.
1. We make this information easy to explore by revealing complexity as needed, with the most relevant information up front, easy to understand, and easy to share.

If we achieve these points, we can make it easy for developers to get things done and, ultimately, ship great code.

[1]: https://future.a16z.com/the-case-for-developer-experience/
