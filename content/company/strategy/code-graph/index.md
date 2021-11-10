# Code Graph strategy

We have teams working on [Search](./search/index.md), [Code Insights](./code-insights/index.md), [Code Intelligence](./code-intelligence/index.md), and [Batch Changes](./batch-changes/index.md); this page describes the overarching mission and strategy that ties them together, but each linked team also provides a more detailed strategy page with what they are working on next and why. There is also a whole-company [Sourcegraph strategy](../index.md) available.

## Mission

We want to make finding, understanding, and editing code easier, regardless of how much you have, how complex it is, where you store it, or even how technical you are.

## Vision

### One year vision

> We want to ensure that we are solving the most critical problems for our enterprise users, focusing on retaining existing and acquiring new enterprise customers. By providing as much value as possible to them, we can grow the business while solving the hardest scaling and complexity problems for everyone.

### Three year vision

> We imagine a much more connected experience, not just in terms of the kinds of searching that you're able to do, but in how we can offer suggestions for interesting searches and what you can do with the results. Expanding on capabilities we've introduced recently, such as semantic search, insights, and batch changes, we will offer an unparalleled solution for searching and making decisions across branches, repositories, and even code hosts, beyond even what's possible today.

### Ten year vision

> We want to make using Sourcegraph to understand and modify code so easy that anyone can do it, including people not traditionally considered developers. We want to [democratize coding](../index.md#ten-year-vision) by making it so that everyone in the company can engage with the organization's code, safely making changes to implement their department's priorities and interests, without need for an intermediary to do it for them.

## Principles

### Abstraction vs. complexity

According to [The Case for 'Developer Experience'](https://future.a16z.com/the-case-for-developer-experience/) (by [Jean Yang](https://twitter.com/jeanqasaur)), there are two ways to think about categories of developer tools or features today:

- Abstraction tools, which simplify tasks away by providing building blocks, sane defaults, and frameworks to build on. Most existing developer tools are of this variety.
- Complexity-exploring tools, which help with complex problems such as finding and fixing issues in existing, heterogeneous software systems. I.e., ones that were created using the existing tools developers use today, with different languages, frameworks, and versions in constant flux, all interacting with each other.

This emerging need for complexity-exploring tooling is one we see Sourcegraph playing an important role in. "The reality is that software tech stacks today look more like a rainforest — with animals and plants co-existing, competing, living, dying, growing, interacting in unplanned ways — than like a planned garden" ([_The Case for 'Developer Experience' by Jean Yang_][1]), and we are mindfully designing our user experience to let you embrace this complexity rather than hiding it, or pushing you towards a specific single solution.

Practically, this means a few things as we think about how our product should work:

1. Sourcegraph fits in to your existing ecosystem – wherever you host your code, whatever language it's in, or however many repos you use.
1. By surfacing relationships (not just code itself, but data types, configuration, and more) we help you build a clear, meaningful model of your software.
1. We make this information easy to explore by revealing complexity as needed, with the most relevant information up front, easy to understand, and easy to share.

If we achieve these points, we can make it easy for developers to get things done and, ultimately, ship great code.

[1]: https://future.a16z.com/the-case-for-developer-experience/

## Themes & Goals

We are focused on several themes to help make our one year vision a reality. They are not listed in priority order. To see how these play into what any particular product team is delivering, take a look at the individual team strategy pages linked at the [top of this page](#code-graph).

We also set our goals around these themes, you can see current FY22-Q4 goals as a bullet list in each theme. The team listed after each goal is the primary team responsible for implementing the goal, but in the end we achieve these together and will support each other as needed to make them reality. The current status can be found at our [high-level OKR and roadmap tracker](https://github.com/orgs/sourcegraph/projects/214/views/11) (internal only) or on the [slides version of the same content](https://docs.google.com/presentation/d/1DgY3k684Jn3diCe4GPPcrGt9iaD9-vyndiiJwEoELyE/edit?usp=sharing) (also internal only).

### Make the power of our features easier to find and use

Learning what's possible and how to get the most out of our product tends to be trial and error, especially for an individual developer who might have a unique set of use cases and interests for which they would benefit from exploring. Making onboarding and interaction easier also helps our users and sales teams demonstrate the value of our product more quickly than is possible today.

As the market matures, it’s likely we will face competition from companies that vertically specialise in a language ecosystem. It will be important to monitor these to ensure we understand the key innovations, bringing them in (and generalizing them to all languages where possible.) We want to do all languages well, and differentiate on supporting all the languages you use. We don't want to do find ourselves in a situation where we are doing all languages, but doing them poorly.

- Measure and increase [WAU](../../../bizops/user_definitions.md) for [customer facing product teams](https://github.com/sourcegraph/handbook/blob/main/data/product_teams.yml) by 15%. For most teams this will require understanding and improving time-to-value as a driver for increasing active users. (All Teams)
- Make it easier to adopt Batch Changes by fixing top three changeset syncing and permission configuration issues. ([Batch Changes](./batch-changes/index.md))
- 3 customers with >1 Search Notebook, demonstrating initial traction for this feature and proving the value of Search Notebooks for sharing explanations of code. ([Search Product](./search/index.md))

### Level up our enterprise-ready features

How our product works in terms of pricing, upgrade paths, auditing, single sign-on, access control, and so on are essential for enterprise customers with large, complex organizations. In partnership with our Cloud team, we're focused on ensuring that these elements of our product meet and exceed these needs so that when it comes to rolling out Sourcegraph the logistics of getting set up don't get in the way of realizing the value of Big Code search.

- Get a Sales commitment from a customer who will pay for Insights at launch, proving the value of the feature ([Code Insights](./code-insights/index.md))
- Enable out-of-the-box cross-repo and dependency navigation for 3 customers by successfully moving them to on-prem auto-indexing. ([Code intelligence](./code-intelligence/index.md))
- Enable powerful automation and notification use cases (e.g. by adding webhook and Slack integrations) to Code Monitors and getting a Q1 usage commitment from 3 customers. ([Search Product](./search/index.md))
- Improve precise code intelligence actions coverage by going from 3 to 5 languages (adding Kotlin and TS/JS), representing the languages in ~50% of all actions. ([Code intelligence](./code-intelligence/index.md))

### Deliver a unified experience

Our product solves real problems today, but investing in the polish, user experience, and cross-feature functionality within our product teams to make the experience lovable and help us deliver solutions that are more than the sum of the parts. As an example: Code Insights can lead you to a more detailed Precise Code Intelligence search, from which you might launch a more advanced semantic analysis; from here, you might use Batch Changes to remediate a problem and then document everything you've done in a Search Notebook, monitoring the progress as the fix is rolled out in Code Insights. Another example might be learning about a library in API docs and exploring how it is used over time using Code Insights. One thing we've noticed is that Code Intelligence seems to be a common linking component for these sorts of unified features.

- No goal in this quarter since we are improving our measurement capability around what is most important here; we expect to have more focus in Q1.

### Scale for Big Code

We have more and more large customers dealing with a lot of code and complexity at scale. It's important that our platform meets their needs, not just in terms of search performance, but in allowing you to explore and understand complex interrelationships of meaning in source code, at the [world's largest scale](../index.md#big-code).

- Make Sourcegraph Search work well with large-scale monorepos (time to first result for unindexed search on monorepos larger than 200GB is < 10s and <2s for indexed, and time to indexing is always <30 minutes). ([Search Core](./search/index.md))
- Sourcegraph Cloud indexes public repositories globally from 4 non-GitHub code hosts. ([Search Core](./search/index.md))
- Three customers use server side Batch Changes to create 200+ changeset batch changes, proving that it is enabling large-scale use cases and revenue. ([Batch Changes](./batch-changes/index.md))
- At least one customer issue was solved with the help of `src debug`, which makes observability better for on-prem and makes Customer Support’s job easier. ([Search Core](./search/index.md))
