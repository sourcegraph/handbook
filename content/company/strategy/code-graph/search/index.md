# Search strategy

Sourcegraph aims to be the best tool for universal code search, and the Search team enables that mission. The Search team is made up of [Search Product](../../../../engineering/code-graph/search/product.md) and [Search Core](../../../../engineering/code-graph/search/core.md) teams, with the Product team focusing primarily on the user-facing aspects of search, and the Core team focusing on backend and performance. This page outlines the vision, strategy and goals of the Search teams.

Quicklinks:

- [Code Graph overall strategy](../index.md)
- [Latest demo](https://www.youtube.com/watch?v=XLfE2YuRwvw)
- [Documentation](https://docs.sourcegraph.com/code_search/)
- [Completed goals](../../../../engineering/code-graph/search/goals_completed.md)

## Mission

Sourcegraph's mission is to make it so that everyone can code. The Search teams' mission is to enable developers to find the code they need when they need it.

## Vision

#### 1 Year vision

> Enterprise customers of Sourcegraph actively use our differentiated code search features. Sourcegraph Cloud enables federated search over several code hosts beyond GitHub and GitLab, with relevant results.

#### 3 Year vision

> Search powers [unified](../index.md#deliver-a-unified-experience) use cases of Sourcegraph, at any Enterprise scale and across the entire OSS universe.

#### 10 year vision

> Code search is a cornerstone of [universal coding literacy](../../index.md#ten-year-vision-democratize-coding).

## Guiding principles

Code search should be:

- 🌍 **Universal**: We believe code search should be universal–meaning it should make the entire universe of available code searchable, and that it should be available universally–to every developer, regardless of skill level.
- 💡 **Easy to use**: The learning curve for search should be as smooth as possible. Code can be complicated and we'll strive to make the search experience as painless and intuitive as possible so code is approachable for everyone.
- ⌨️ **Accessible**: Everyone deserves access to high quality code search; as such, our code search interface should be accessible.
- 🚀 **Fast**: For any search product to be effectively used, in addition to the above, it must be fast. We will continually improve our search performance so users get results back fast regardless of the the size of data we index.
- ✅ **Relevant**: In order to be useful, search results need to be relevant. Our search results will be the most accurate, relevant, and informative results possible. Our current results ranking is a first pass specifically targeting Cloud. Future work on ranking should also take into account the needs of Enterprise users.
- 🧠 **Educational**: For everyone to be able to code, we need to foster a culture of knowledge sharing. Sourcegraph is in a unique position to leverage search to increase code sharing and education, empowering communities of self-learners.

## Competitive landscape

Our competitive landscape in the search space is sparse at the moment, but there are serious potential competitors we need to monitor–GitHub is the elephant in the room. It’s very likely they only need to release “good enough” code search to deal Sourcegraph’s search product a serious blow. While we believe our solution will remain far superior to whatever GitHub releases, there is a real risk that the switching costs of using Sourcegraph will be too high for users to switch, if GitHub’s search improves significantly.

There are also existing open source projects that may be “good enough” for many users. While we don’t believe these pose a serious threat to our enterprise business, they are competitors with our Cloud offering and, to the extent users prefer those experiences, we need to consider how to compete against them for attention and usage.

## Where we are now, what's next, and why

Search has achieved product market fit and is used by thousands of developers at customers ranging from small businesses to the largest enterprises. Development teams are struggling to collaborate and maintain consistency across codebases spanning, in some cases, tens of thousands of repositories, and Sourcegraph search plays a critical role in alleviating that pain.

Internally, as Sourcegraph’s offerings grow, search becomes increasingly critical to the success of other products and features. For example, Code Insights and Batch Changes rely on core functionality provided by search, and also feel the pain of its limitations. Search will strive to enable the success of other products and teams while maintaining focus on our core mission.

For more details, see:

- [Search Core strategy](./core.md)
- [Search Product strategy](./product.md)
