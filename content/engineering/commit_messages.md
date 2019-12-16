# Commit message guidelines

This document contains recommendations on how to write good commit messages. Having consistent commit messages makes it easier to see at a glance what code has been affected by recent changes. It also makes it easier to search through our commit history.

To get some background, please read [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

These guidelines are not hard requirements and not enforced in any way. If any of these guidelines turn in to hard requirements in the future, they must be enforced by automated tooling.

## Format

A commit message has two parts: a subject and a body. These are separated by a blank line.

### Subject

The subject line should be concise and easy to visually scan in a list of commits, giving context around what code has changed.

1. Prefix the subject with the primary area of code that was affected (e.g. `web:`, `cmd/searcher:`).
2. Limit the subject line to 50 characters.
3. Do not end the subject line with punctuation.
4. Use the [imperative mood](https://chris.beams.io/posts/git-commit/#imperative) in the subject line.

   | Prefer | Instead of |
   |--------|------------|
   | Fix bug in XYZ | Fixed a bug in XYZ |
   | Change behavior of X | Changing behavior of X |

Example:

> cmd/searcher: Add scaffolding for structural search

## Body

The commit body is optional, and should explain _what_ changed and _why_ if a longer description is needed. The _how_ is the diff. When merging strive to keep the final commit body clean (see [pull requests](pull-request guidelines)).

## Pull requests

[Code review](code_reviews.md) happens in PRs, which should contain a good subject and description. When a PR is approved, we by default squash and merge commits. After clicking "Squash and merge", edit the body of the final commit message so that it is clean and informative. For example, delete any unnecessary and uninformative bullet points introduced by previous commits. Some guidelines:

- GitHub will add your first commit message and the subject line to the squashed commit. This is often redundant. Delete the commit bullet in this case.
- Phrases like `* add test`, `* fix test`, `* try X`, or `Update filename.md` are not useful and clutter the body. Delete these.
- Accepting suggested changes will add a commit like `Update... Co-Authored-By...`. Delete these.
