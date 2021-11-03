# Search strategy

Sourcegraph aims to be the best tool for universal code search, and the Search team enables that mission. The Search team is made up of Search Product and Search Core teams, with the Product team focusing primarily on the user-facing aspects of search, and the Core team focusing on backend and performance. This page outlines the vision, strategy and goals of the Search teams.

Quicklinks:

- [Code Graph overall strategy](../index.md)
- [Search Product backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-product/) <!-- Update links with your page -->
- [Search Core backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fsearch-core)
- [Completed goals](../../../../engineering/code-graph/search/goals_completed.md))
- [Latest demo](https://www.youtube.com/watch?v=XLfE2YuRwvw)
- [Documentation](https://docs.sourcegraph.com/code_search/)

## Mission, Vision & Guiding Principles

### Mission

Sourcegraph's mission is to make it so that everyone can code. The Search teams' mission is to enable developers to find the code they need when they need it.

### Vision

Sourcegraph search is a critical part of development workflows because it provides the most precise, relevant search results and empowers users to code with confidence.

#### 1 Year vision

> Developers can find all the code they need and code search is a critical part of their workflow, increasing individual and team productivity.

#### 3 Year vision

> Developers look to Sourcegraph search as the bastion of quality code search and code content: we have the best code search and the best search results.

#### 10 year vision

> Code search is ubiquitous–a constant companion for users of all levels–empowering them to create and modify software.

### Strategy

To deliver on our vision, we will:

- Index the open source universe to make code search available to all.
- Serve highly technical enterprise users and teams by providing innovative solutions to hard search problems at enterprise scale.
- Engage with individuals and small teams on Cloud by providing an intuitive search UX and private, multi-repository search.
- Curate the search experience to surface only the most relevant, informative results to developers.
- Support search-related features of other Sourcegraph teams, such as Code Insights and Batch Changes, by continuing to expand search's capabilities.

### Guiding principles

- Code search should be universal
- Coee search shoudl be easy to use
- Code search should be accessible
- Code search should be fast
- Code search should be relevant
- Code search should be educational

#### Code search should be universal

We believe code search should be universal–meaning it should make the entire universe of available code searchable, and that it should be available universally–to every developer, regardless of skill level.

- Index the open source code universe
- Provide access to that universe through our own open source code search software

#### Code search should be easy to use

Currently, our search UX has powerful functionality but a high learning curve. Code can be complicated and we'll strive to make the search experience as painless and intuitive as possible so code is approachable for everyone.

- We must develop and grow a capable, but intuitive, search interface

#### Code search should be accessible

Everyone deserves access to high quality code search; as such, our code search interface should be accessible.

- Ensure this interface is accessible to all skill levels and WCAG compliant

#### Code search shold be fast

For any search product to be effectively used, in addition to the above, it must be fast. We will continually improve our search performance so users get results back fast regardless of the the size of data we index.

- Maintain our focus on–and high standards for–search query performance

#### Code search should be relevant

In order to be useful, search results need to be relevant. Our search results will be the most accurate, relevant, and informative results possible. Our current results ranking is a first pass specifically targeting Cloud. Future work on ranking should also take into account the needs of Enterprise users.

- Develop relevance and ranking capabilities that are accurate, innovative, and market leading

#### Code search should be educational

For everyone to be able to code, we need to foster a culture of knowledge sharing. Sourcegraph is in a unique position to leverage search to increase code sharing and education, empowering communities of self-learners.

## Where we are now

Search has achieved product market fit and is used by thousands of developers at customers ranging from small businesses to the largest enterprises. Development teams are struggling to collaborate and maintain consistency across codebases spanning, in some cases, tens of thousands of repositories, and Sourcegraph search plays a critical role in alleviating that pain.

With the launch of Sourcegraph Cloud, search has access to a much broader audience, and will have to adapt in important ways. Search onboarding is a critical issue for us at this stage, as we’re finding the average Cloud user struggles to find immediate value in code search. Improving our search onboarding experience is critical for the growth of Cloud and will improve our enterprise onboarding as well.

Finally, as Sourcegraph’s offerings grow, search becomes increasingly critical to the success of other products and features. For example, Code Insights and Batch Changes rely on core functionality provided by search, and also feel the pain of its limitations. Search will strive to enable the success of other products and teams while maintaining focus on our core mission.

### Competitive landscape

Our competitive landscape in the search space is sparse at the moment, but there are serious potential competitors we need to monitor–GitHub is the elephant in the room. It’s very likely they only need to release “good enough” code search to deal Sourcegraph’s search product a serious blow. While we believe our solution will remain far superior to whatever GitHub releases, there is a real risk that the switching costs of using Sourcegraph will be too high for users to switch, if GitHub’s search improves significantly.

There are also existing open source projects that may be “good enough” for many users. While we don’t believe these pose a serious threat to our enterprise business, they are competitors with our Cloud offering and, to the extent users prefer those experiences, we need to consider how to compete against them for attention and usage.

## What’s next and why

### FY2022 Q3

Over the past year, we built the initial version of Search Contexts and Code monitoring. These differentiated features have shown promise, but we need to iterate on them in order for them to reach their full potential, which will help make cloud and enterprise successful at massive scale.

Similarly, we introduced a framework for higher-order search functionality ([predicates](https://docs.google.com/document/d/1_m63fsBMAtqaq3GA_aMzKUPxD3yxTy8d12lJE6qN6PU/edit?usp=sharing)), and made the necessary engineering investments to allow rapid iteration on advanced search functionality (see existing [advanced search usage highlights](https://docs.google.com/document/d/1GpyrFPwiOuUEytHt5TKnLZ0QqUq1dDtBAZZZ62CkEPo/edit?usp=sharing)). This opens the opportunity to better support other teams that build on top of search (Code Insights, Batch Changes), as well as extend the use cases that are uniquely served by Sourcegraph search.

Finally, in continuity with our work in FQ2, and with the goal of making cloud successful at massive scale, we’ll keep our focus on growing the Sourcegraph Cloud global index. Since Sourcegraph cloud is the largest deployment of Sourcegraph, we expect this work to have trickle-down benefits for all customer instances as well, regarding performance and resource utilization of search at scale.

#### Goals

**Search Core**

- 5.5M most popular GitHub.com repos in the Sourcegraph Cloud global index (current: 2.1M)
- P75 1h literal\_\* under 1s

**Search Product**

- Zero enterprise users of version contexts
- Internal & external consumers can rely on advanced search features (predicates, post-processing)

#### Details

##### Search Contexts

We plan on:

- Sunsetting version contexts as soon as existing customers using them have migrated over to search contexts.
- Sunsetting repogroups in favour of search contexts.

This cleans up long-standing feature debt in the product.

##### Code monitoring

Investigate low-hanging fruit improvements to diff/commit search.
Diff/commit search limitations heavily impact code monitoring, and the eventual vision of code monitoring (“monitor all the code on a Sourcegraph instance”) is largely blocked by this.
We prefer prioritizing performance over features for code monitoring.
Diff/commit search performance is also a pain point for customers on monorepos.

##### Advanced Search Functionality

We want to extend advanced search functionality, both to service other teams’ needs (RegEx search capture groups, requested by the Code insights team) and to expand the use cases that are uniquely served by Sourcegraph (export results, more convenient search built-ins based on a proven record of delighted users).

### Top customer, support, sales and marketing issues

- Improve onboarding and education of new users on using Sourcegraph in both enterprise and cloud offerings
- Search UX and making searching more intuitive and inline with users’ expectations
- Slack and webhook integration for Code Monitoring, allowing users to disseminate communication when significant changes occur across an organization’s codebase

### What we're not working on & why

- **Slack integration and webhooks for code monitoring:** We’ve had many requests for webhooks to provide notifications when a Code Monitor is triggered. Early research indicates that this may be best provided via a Slack integration (Slack App) for many users, in addition to a webhook for others, but we do not plan to address this directly in Q3.
- **Better search performance on monorepos:** we are not planning any specific work around search performance on monorepos for Q3.
- **Improvements to search results ranking:** in Q2 we shipped star ranking, with an escape hatch allowing enterprise customers to specify ranking for (sets of) repositories via a configuration file. We do not anticipate going further with search results ranking in Q3.
