# GitLab vs. Sourcegraph

[GitLab](https://about.gitlab.com) is a single application for the entire DevOps lifecycle. Sourcegraph and GitLab integrate well together (and offer largely complementary, not overlapping, features).

- [GitLab integration with Sourcegraph](https://docs.sourcegraph.com/integration/gitlab) (Sourcegraph documentation)
- Upcoming native integration: [GitLab blog post](https://about.gitlab.com/blog/2019/11/12/sourcegraph-code-intelligence-integration-for-gitlab/) and [Sourcegraph blog post](https://about.sourcegraph.com/blog/gitlab-integrates-sourcegraph-code-navigation-and-code-intelligence)

## Code search

GitLab offers [code search](https://docs.gitlab.com/ee/user/search/advanced_global_search.html), which is acceptable for smaller teams using GitLab with simple/infrequent code search needs. The main pain points we hear are lack of support for literal/regexp queries and filters, and that the UI is not optimized for searching across multiple repositories. For medium and large organizations, Sourcegraph is a better alternative to GitLab's built-in code search.
