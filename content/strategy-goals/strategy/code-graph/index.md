# Code Graph strategy

Code Graph comprises teams working on [Search](./search/index.md), [Code Insights](./code-insights/index.md), [Code Intelligence](./code-intelligence/index.md), and [Batch Changes](./batch-changes/index.md); this page describes the mission and strategy that ties them together over the next year or so, with each linked page providing a more detailed strategy for that area. There is also a whole-company [Sourcegraph strategy](../index.md) and [Product & Engineering strategy](../../../departments/product-engineering/strategy-goals/index.md) to which all of this is aligned. Our [roadmap tracker](https://github.com/orgs/sourcegraph/projects/214/views/34) (internal only) shows what we're delivering to make this strategy a reality.

If you're new to our strategy pages, this video walkthrough (last updated Feb 2022) will help orient you.

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/71b675b67c464b0db7670a7f5025cbbe" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Mission

Our mission is to **make discovering, learning, analyzing, and editing code easier, no matter how complex it is, where it's stored, or how experienced you are.**

## Themes

Apart from the work each of our teams do for our mission, across Code Graph we're particularly focused now on improving the **discoverability** and **ease-of-use** around our [use cases](../index.md#use-cases), with a particular focus on how long it takes to find and get value from them (what we're calling time-to-value). There are a few reasons why this is important:

- Focusing on use cases ensures we're prioritizing areas where people get real value out of the product
- Improving discoverability increases feature adoption because it brings users into features at moments when the features would be most useful
- Building cross-team capabilities helps us deliver features that are more than the sum of their parts (as opposed to shipping our org chart)

Because this theme intentionally bridges team boundaries, we are especially mindful of following our [collaboration principles](../../../departments/product-engineering/process/cross-org-team-collab.md), which also includes details on how we collaborate with the [Growth](../admin-exp/growth-team/index.md) team on our [new user experience](../../../departments/product-engineering/process/new-user-experience.md).

For Q2 FY23 (the current quarter) we plan to have special focus on the [fixing security vulnerabilities](../use-cases/fixing-security-vulnerabilities.md) use case.

## Principles

There are a few key principles that generally inform how we think about our features:

- 🌍 **Universal**: It should make the entire universe of available code searchable, and it should be available to every developer, regardless of skill level.
- 💡 **Easy to use**: The learning curve should be smooth. Code can be complicated, but we strive to make the search experience as painless and intuitive as possible.
- ⌨️ **Accessible**: Everyone deserves access to high quality information about code; as such, our interface should be accessible.
- 🚀 **Fast**: For our product to be effective, it must be fast. We will continually improve our performance regardless of the size and complexity of data we index.
- ✅ **Relevant**: In order to be useful, we need to be relevant. Our features will be the most accurate, relevant, and informative results possible.
- 🧠 **Educational**: For everyone to be able to code, we need to foster a culture of knowledge sharing. We are in a unique position to leverage search to increase code sharing and education, empowering communities of self-learners.
- 🔬 **Innovative**: On top of building features that are immediately useful to customers, invest in key technology areas that drive Sourcegraph's long term product differentiation and defensibility, such as Code Intelligence's [technology](code-intelligence#competitive-landscape) and Code Search's compute platform.

### Abstraction vs. complexity

According to [The Case for 'Developer Experience'](https://future.a16z.com/the-case-for-developer-experience/) (by [Jean Yang](https://twitter.com/jeanqasaur)), there are two ways to think about categories of developer tools or features today:

- Abstraction tools, which simplify tasks by providing building blocks, sane defaults, and frameworks to build on; most existing developer tools are of this variety.
- Complexity-exploring tools, which help with complex problems such as finding and fixing issues in existing, heterogeneous software systems. I.e., ones that were created using the existing tools developers use today, with different languages, frameworks, and versions in constant flux, all interacting with each other.

We see Sourcegraph playing an important role in this emerging need for complexity-exploring tooling. "The reality is that software tech stacks today look more like a rainforest—with animals and plants co-existing, competing, living, dying, growing, interacting in unplanned ways—than like a planned garden" ([_The Case for 'Developer Experience' by Jean Yang_][1]), and we are designing our user experience to let you embrace this complexity rather than hiding it. Practically, this means a few things as we think about how to strike this balance:

1. Sourcegraph fits in to your existing ecosystem – wherever you host your code, whatever language it's in, or however many repos you use.
1. By surfacing relationships (not just code itself, but data types, configuration, and more) we help you build a clear, meaningful model of your software.
1. We make this information easy to explore by revealing complexity as needed, with the most relevant information up front, easy to understand, and easy to share.

If we achieve these, we make it easy for developers to get things done and, ultimately, ship great code.

[1]: https://future.a16z.com/the-case-for-developer-experience/
