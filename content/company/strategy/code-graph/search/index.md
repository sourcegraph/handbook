# Search strategy

Sourcegraph aims to be the best tool for universal code search, and the Search team enables that mission. The Search team is made up of Search Product and Search Core teams, with the Product team focusing primarily on the user-facing aspects of search, and the Core team focusing on backend and performance. This page outlines the vision, strategy and goals of the Search teams.

Quicklinks:

- [Code Graph overall strategy](../index.md)
- [Completed goals](../../../../engineering/code-graph/search/goals_completed.md)
- [Latest demo](https://www.youtube.com/watch?v=XLfE2YuRwvw)
- [Documentation](https://docs.sourcegraph.com/code_search/)

## Mission

Sourcegraph's mission is to make it so that everyone can code. The Search teams' mission is to enable developers to find the code they need when they need it.

## Vision

Sourcegraph search is a critical part of development workflows because it provides the most precise, relevant search results and empowers users to code with confidence.

#### 1 Year vision

> Developers can find all the code they need and code search is a critical part of their workflow, increasing individual and team productivity.

#### 3 Year vision

> Developers look to Sourcegraph search as the bastion of quality code search and code content: we have the best code search and the best search results.

#### 10 year vision

> Code search is ubiquitous–a constant companion for users of all levels–empowering them to create and modify software.

## Guiding principles

- Code search should be universal
- Coee search shoudl be easy to use
- Code search should be accessible
- Code search should be fast
- Code search should be relevant
- Code search should be educational

### Strategy

To deliver on our vision, we will:

- Index the open source universe to make code search available to all.
- Serve highly technical enterprise users and teams by providing innovative solutions to hard search problems at enterprise scale.
- Engage with individuals and small teams on Cloud by providing an intuitive search UX and private, multi-repository search.
- Curate the search experience to surface only the most relevant, informative results to developers.
- Support search-related features of other Sourcegraph teams, such as Code Insights and Batch Changes, by continuing to expand search's capabilities.

#### Code search should be easy to use

Currently, our search UX has powerful functionality but a high learning curve. Code can be complicated and we'll strive to make the search experience as painless and intuitive as possible so code is approachable for everyone.

- We must develop and grow a capable, but intuitive, search interface

#### Code search should be accessible

Everyone deserves access to high quality code search; as such, our code search interface should be accessible.

- Ensure this interface is accessible to all skill levels and WCAG compliant

#### Code search should be fast

For any search product to be effectively used, in addition to the above, it must be fast. We will continually improve our search performance so users get results back fast regardless of the the size of data we index.

- Maintain our focus on–and high standards for–search query performance

#### Code search should be relevant

In order to be useful, search results need to be relevant. Our search results will be the most accurate, relevant, and informative results possible. Our current results ranking is a first pass specifically targeting Cloud. Future work on ranking should also take into account the needs of Enterprise users.

- Develop relevance and ranking capabilities that are accurate, innovative, and market leading

#### Code search should be educational

For everyone to be able to code, we need to foster a culture of knowledge sharing. Sourcegraph is in a unique position to leverage search to increase code sharing and education, empowering communities of self-learners.

#### Code search should be universal

We believe code search should be universal–meaning it should make the entire universe of available code searchable, and that it should be available universally–to every developer, regardless of skill level.

- Index the open source code universe
- Provide access to that universe through our own open source code search software

## Competitive landscape

Our competitive landscape in the search space is sparse at the moment, but there are serious potential competitors we need to monitor–GitHub is the elephant in the room. It’s very likely they only need to release “good enough” code search to deal Sourcegraph’s search product a serious blow. While we believe our solution will remain far superior to whatever GitHub releases, there is a real risk that the switching costs of using Sourcegraph will be too high for users to switch, if GitHub’s search improves significantly.

There are also existing open source projects that may be “good enough” for many users. While we don’t believe these pose a serious threat to our enterprise business, they are competitors with our Cloud offering and, to the extent users prefer those experiences, we need to consider how to compete against them for attention and usage.

As the scope of the Search teams expands, we'll face competition in new areas. Some examples are onboarding new developers and enabling responses to codebase changes. There are both new entrants (Swimm) and incumbents (Zapier, IFTTT) in those spaces, but we believe we are uniquely positioned to deliver differentiated solutions to those problems.

## Where we are now, what's next, and why

Search has achieved product market fit and is used by thousands of developers at customers ranging from small businesses to the largest enterprises. Development teams are struggling to collaborate and maintain consistency across codebases spanning, in some cases, tens of thousands of repositories, and Sourcegraph search plays a critical role in alleviating that pain.

With the launch of Sourcegraph Cloud, search has access to a much broader audience, and will have to adapt in important ways. Search onboarding is a critical issue for us at this stage, as we’re finding the average Cloud user struggles to find immediate value in code search. Improving our search onboarding experience is critical for the growth of Cloud and will improve our enterprise onboarding as well.

Finally, as Sourcegraph’s offerings grow, search becomes increasingly critical to the success of other products and features. For example, Code Insights and Batch Changes rely on core functionality provided by search, and also feel the pain of its limitations. Search will strive to enable the success of other products and teams while maintaining focus on our core mission.

For more details, see:

- [Search Core strategy](./core.md)
- [Search Product strategy](./product.md)
