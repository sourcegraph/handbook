# Code Graph strategy

We have teams working on [Search](./search/index.md), [Code Insights](./code-insights/index.md), [Code Intelligence](./code-intelligence/index.md), and [Batch Changes](./batch-changes/index.md); this page describes the mission and strategy that ties them together, but each linked page provides a more detailed strategy for that team including what they are working on next and why. There is also a whole-company [Sourcegraph strategy](../index.md) available to which all of this is aligned.

## Mission

Make finding, understanding, and editing code easier, no matter how complex it is, where it's stored, or how experienced you are. We will achieve this by creating a flow that ties insights, searching, and changes together.

## Themes & Goals

We are focused over the next year on several themes across Code Graph to make our mission a reality. We set our goals around these themes, so you can also see current FY22-Q4 goals as a bullet list under each theme. The current status of these can be found at our [high-level OKR and roadmap tracker](https://github.com/orgs/sourcegraph/projects/214/views/11) (internal only).

### Make the power of our features easier to find and use

Learning how to get the most out of our product tends to be trial and error, especially for an individual developer who might have a unique set of use cases. Making onboarding and interaction easier helps everyone (including potential customers) find the value of our product more quickly than is possible today. Compared to tools that specialize in single-language ecosystems, we provide a more comprehensive solution (which is an advantage for us) but it is important we do this in a way that doesn't compromise depth.

- [Measure and increase WAU by 15%](https://github.com/sourcegraph/sourcegraph/issues/27342) (All Teams)
- [3 customers with >1 Search Notebook](https://github.com/sourcegraph/sourcegraph/issues/27353) ([Search Product](./search/index.md))

### Level up our enterprise-ready features

How our product works in terms of pricing, upgrade paths, auditing, single sign-on, access control, etc. are essential for customers with large, complex organizations. In partnership with our Cloud team, we're focused on ensuring we meet and exceed these needs so that when rolling out Sourcegraph the logistics don't get in the way of realizing the value.

- [1 customer committed to paying for Code Insights at launch](https://github.com/sourcegraph/sourcegraph/issues/27350) ([Code Insights](./code-insights/index.md))
- [3 customers adopt on-prem auto-indexing](https://github.com/sourcegraph/sourcegraph/issues/24961) ([Code intelligence](./code-intelligence/index.md))
- [Code monitors support webhook and Slack integrations + 3 customers committed in Q1](https://github.com/sourcegraph/sourcegraph/issues/27350) ([Search Product](./search/index.md))
- [Precise code intel support for Kotlin](https://github.com/sourcegraph/lsif-java/issues/304) ([Code intelligence](./code-intelligence/index.md))
- [Precise code intel support for TS/JS](https://github.com/sourcegraph/sourcegraph/issues/27345) ([Code intelligence](./code-intelligence/index.md))

### Deliver a unified experience

By investing in well-integrated functionality we can deliver solutions that are more than the sum of their parts. Code visualizations powered by search and Code Intelligence can help with onboarding into a new codebase; Search Notebooks can provide a way to mix documentation with searches; Insights can lead to easy mitigation of multi-repo wide issues using Batch Changes. These kinds of examples require us to think through and build intuitive integrations between our teams.

- No goal in this quarter since we are improving our measurement capability around what is most important here; we expect this to be a focus in Q1.

### Scale for Big Code

We have more and more large customers dealing with a lot of code and complexity at scale. It's important that our platform meets their needs, not just in terms of search performance, but in allowing you to explore and understand complex interrelationships of meaning in source code, at the [world's largest scale](../index.md#big-code).

- [Search works well with large-scale monorepos](https://github.com/sourcegraph/sourcegraph/issues/27320) ([Search Core](./search/index.md))
- [Sourcegraph Cloud indexes public repositories globally from 4 non-GitHub code hosts](https://github.com/sourcegraph/sourcegraph/issues/27322) ([Search Core](./search/index.md))
- [3 customers use server side Batch Changes to create 200+ changeset batch changes](https://github.com/sourcegraph/sourcegraph/issues/27348) ([Batch Changes](./batch-changes/index.md))
- [1 customer issue was solved with the help of `src debug`](https://github.com/sourcegraph/sourcegraph/issues/27347) ([Search Core](./search/index.md))

## Principles

### General principles

Code Graph should be:

- 🌍 **Universal**: We believe code search should be universal–meaning it should make the entire universe of available code searchable, and that it should be available universally–to every developer, regardless of skill level.
- 💡 **Easy to use**: The learning curve for search should be as smooth as possible. Code can be complicated and we'll strive to make the search experience as painless and intuitive as possible so code is approachable for everyone.
- ⌨️ **Accessible**: Everyone deserves access to high quality code search; as such, our code search interface should be accessible.
- 🚀 **Fast**: For any search product to be effectively used, in addition to the above, it must be fast. We will continually improve our search performance so users get results back fast regardless of the the size of data we index.
- ✅ **Relevant**: In order to be useful, search results need to be relevant. Our search results will be the most accurate, relevant, and informative results possible. Our current results ranking is a first pass specifically targeting Cloud. Future work on ranking should also take into account the needs of Enterprise users.
- 🧠 **Educational**: For everyone to be able to code, we need to foster a culture of knowledge sharing. Sourcegraph is in a unique position to leverage search to increase code sharing and education, empowering communities of self-learners.

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
