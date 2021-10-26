# Bitbucket Server vs. Sourcegraph

[Bitbucket Server](https://github.com) is a code host and review tool. Sourcegraph and Bitbucket Server integrate well together.

- [Bitbucket Server integration with Sourcegraph](https://docs.sourcegraph.com/integration/bitbucket_server) (Sourcegraph documentation)

> Sourcegraph also supports [Bitbucket Cloud](bitbucket_cloud_vs_sourcegraph.md), Atlassian's cloud-hosted code host.

## Code search

Bitbucket Server offers limited [code search](https://confluence.atlassian.com/bitbucketserver/search-for-code-in-bitbucket-server-814204781.html), which is acceptable for smaller teams using Bitbucket Server with simple/infrequent code search needs. The main pain points we hear are lack of support for literal/regexp queries, and that the UI is not optimized for searching across multiple repositories. For medium and large organizations, Sourcegraph is a better alternative to Bitbucket Server's built-in code search.
