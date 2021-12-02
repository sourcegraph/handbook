# Search strategy

Sourcegraph aims to be the best tool for universal code search. There are two teams that work together to make this possible: [Search Product](../../../../product-engineering/engineering/code-graph/search/product.md) and [Search Core](../../../../product-engineering/engineering/code-graph/search/core.md), with the Product team focusing primarily on the user-facing aspects of search, and the Core team focusing on backend, relevancy, and performance. This page outlines the vision, strategy and goals that are shared by both teams.

Quicklinks:

- [Code Graph overall strategy](../index.md)
- [Product & Engineering strategy](../../../../product-engineering/strategy.md)
- [Latest demo](https://www.youtube.com/watch?v=XLfE2YuRwvw)
- [Documentation](https://docs.sourcegraph.com/code_search/)
- [Completed goals](../../../../product-engineering/engineering/code-graph/search/goals_completed.md)

## Mission

The Search team's mission is to enable developers to find the code they need when they need it.

In the near term, we want to make sure our customers are aware of and using our differentiated code search features. For example, Sourcegraph Cloud enables federated search over several code hosts beyond GitHub and GitLab, with relevant results. We envision that Search will power [unified](../index.md#deliver-a-unified-experience) use cases of Sourcegraph, at any scale and across the entire OSS universe.

## Competitive landscape

Our competitive landscape in the search space is sparse at the moment, but there are serious potential competitors we need to monitor–GitHub is the elephant in the room. It’s very likely they only need to release “good enough” code search to deal Sourcegraph’s search product a serious blow. While we believe our solution will remain far superior to whatever GitHub releases, there is a real risk that the switching costs of using Sourcegraph will be too high for users to switch, if GitHub’s search improves significantly.

There are also existing open source projects that may be “good enough” for many users. While we don’t believe these pose a serious threat to our enterprise business, they are competitors with our Cloud offering and, to the extent users prefer those experiences, we need to consider how to compete against them for attention and usage.

As the scope of the Search teams expands, we'll face competition in new areas. Some examples are onboarding new developers and enabling responses to codebase changes. There are both new entrants (Swimm) and incumbents (Zapier, IFTTT) in those spaces, but we believe our unique approach to search positions us to deliver differentiated solutions by leveraging the distinct advantages of our code graph, such as its [unified experience](../index.md#deliver-a-unified-experience): [Notebooks](https://sourcegraph.com/search/notebook) as onboarding documentation can be created from code searches, browsed alongside the user’s code, and searched alongside the user’s code. [Code monitors](https://sourcegraph.com/code-monitoring) can eventually integrate with Batch changes and Code insights, to allow users to directly change the pattern they’re monitoring from Sourcegraph, and visualize instances of this pattern in their codebase over time.

## Where we are now and what's next

This section is broken out into [Search Core](./core.md) and [Search Product](./product.md) pages. Refer to each of those for details on what's coming up for each team.
