# Search strategy

Sourcegraph aims to be a platform powered by code search. There are two teams that work together to make this possible: [Code Search](../../../departments/engineering/teams/code-search/index.md) and [Search Platform](../../../departments/engineering/teams/search-platform/index.md), with the Code Search team focusing primarily on the user-facing aspects of search, and the Platform team focusing on backend, relevancy, and performance. This page outlines the vision, strategy and goals that are shared by both teams.

Quicklinks:

- [Engineering vision](../../../departments/engineering/index.md#product-vision-and-strategy)
- [Latest demo](https://www.youtube.com/watch?v=XLfE2YuRwvw)
- [Documentation](https://docs.sourcegraph.com/code_search/)

## Mission

The Search team's mission is to enable developers to find the code they need when they need it, and then act on it.

In the near term, we want to make sure our customers are aware of and using our differentiated code search features. For example, Sourcegraph Cloud enables federated search over several code hosts beyond GitHub and GitLab, with relevant results. We envision that Search will power [unified](../index.md#deliver-a-unified-experience) use cases of Sourcegraph, at any scale and across the entire OSS universe.

## Competitive landscape

### GitHub

The biggest threat to our dominance as the leader in open-source, free, and commercially available code search is the advent of GitHub Code search, currently widely available in technology preview. Last quarter we stated:

> It’s very likely they only need to release “good enough” code search to deal Sourcegraph’s search product a serious blow. While we believe our solution will remain far superior to whatever GitHub releases, there is a real risk that the switching costs of using Sourcegraph will be too high for users to switch, if GitHub’s search improves significantly.

While we still maintain a strong reputation with our customers and the market, GitHub's code search is in fact "good enough" for some users. However, we serve SMB and Enterprise customers with thousands of repos or more, on multiple code hosts–and even non-git VCSs. GitHub's code search is not yet sufficient for industrial situations where finding and fixing vulnerabilities, searching across branches and revisions, or exhaustive searches must be both possible and performant.

Here's a real life example from one of our enterprise users: find all projects in a codebase that are missing a `CHANGELOG.md`.

We can do that with Sourcegraph. We just need to find all directories with `client` in the path, excluding directories where that `client` directory contains `CHANGELOG.md`, and return a list of directories (bonus points if they can be navigated into).

The Sourcegraph query: `repo:my-repo file:client -file:client/CHANGELOG.md select:file.directory`

And the [results](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+file:client+-file:client/CHANGELOG.md+select:file.directory&patternType=literal) when run on the Sourcegraph codebase.

With GitHub code search you're stopped before you even get started because you can't get back a list of directories, only code snippets from files. And even if you could, you're limited to 100 results returned, with no clarity on how many matches exist.

Despite our superior capabilities, GitHub has a very powerful distribution channel which requires us to evangelize Sourcegraph and its uses clearly and widely.

### Broader competition

As the scope of the Search teams continues to expand, we face competition in new areas. Some examples are onboarding new developers and enabling responses to codebase changes. There are both new entrants (Swimm) and incumbents (Zapier, IFTTT) in those spaces, but we believe continuing to build out our core platform positions us to deliver differentiated solutions by leveraging the distinct advantages of our code graph, such as its [unified experience](../index.md#deliver-a-unified-experience): [Notebooks](https://sourcegraph.com/notebooks?tab=explore) as onboarding documentation can be created from code searches, browsed alongside the user’s code, and searched alongside the user’s code. [Code monitors](https://sourcegraph.com/code-monitoring) can eventually integrate with Batch changes and Code insights, to allow users to directly change the pattern they’re monitoring from Sourcegraph, and visualize instances of this pattern in their codebase over time.

## Where we are now and what's next

This section is broken out into [Search Platform](index.md) and [Search Product](product.md) pages. Refer to each of those for details on what's coming up for each team.
