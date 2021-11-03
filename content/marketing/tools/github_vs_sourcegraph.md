# GitHub vs. Sourcegraph

[GitHub](https://github.com) is a development platform with code hosting, issue tracking, code review, and more. Sourcegraph and GitHub integrate well together.

- [GitHub integration with Sourcegraph](https://docs.sourcegraph.com/integration/github) (Sourcegraph documentation)

## Code search

GitHub offers [code search](https://help.github.com/en/articles/searching-code), which is acceptable for smaller teams using GitHub with simple/infrequent code search needs. The main pain points we hear are lack of support for literal/regexp queries and filters, and that the UI is not optimized for searching across multiple repositories. For medium and large organizations, Sourcegraph is a better alternative to GitHub's built-in code search.

## Code navigation

GitHub offers limited [code navigation](https://help.github.com/en/github/managing-files-in-a-repository/navigating-code-on-github) features for certain languages and repositories.

[Sourcegraph code intelligence](https://docs.sourcegraph.com/code_intelligence) integrates seamlessly with GitHub and offers the following benefits over what GitHub provides:

- Support for many more languages
- Cross-repository definitions and references
- Integration with pull requests (to get code intelligence in code review)
- Precise (non-heuristic-based) definitions and references
- Support for all repositories (public, private, and on GitHub Enterprise Server)

Any organization that sees value in GitHub's code navigation features should consider upgrading to Sourcegraph code intelligence for these benefits.
