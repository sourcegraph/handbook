# Introductions to git and GitHub

This guide is a resource for learning both git and GitHub, both of which are extremely useful to know as a part of the Sourcegraph team. We use git (a distributed source control system) and GitHub (a tool for hosting projects that use git) for our own software development, and using Sourcegraph (the product) also requires knowledge of git in many cases.

## Intro to GitHub

- [GitHub walkthrough](https://youtu.be/sz6zfrQpCQg) on Youtube

## Glossary

- **Repository:** A collection of (usually related) source code and other files, plus the history of those files. It is a location for your project, similar to a Google Drive folder that stores related documents in one place.
- **Branch:** A specific series of changes in a repository, usually used to isolate changes during their development. Branching lets you make changes, test them in a staging area, then merge them into the "main branch" (the "live" part of your code).
- **Main (sometimes referred to externally as “Master”) Branch:** The primary/default branch of a repository, usually holding the actively-developed product and working on features (non-working versions tend to stay in branches). This is the "live" part of a project that can be viewed by the public.
- **Commit:** A single point in the Git history; the entire history of a project is represented as a set of interrelated commits. The word "commit" is often used by Git in the same places other revision control systems use the words "revision" or "version". Also used as a shorthand for commit object.
- **Pull Request:** Creating a pull request is a way of proposing your changes to a repository. You can ask for reviews from certain people in a pull request.
- **Merge:** Bring the contents of your branch into the main branch. Merging is performed by an automatic process that identifies changes made since the branches diverged, and then applies all those changes together. In cases where changes conflict, manual intervention may be required to complete the merge.

## Git basics

- [Git intro](https://guides.github.com/introduction/git-handbook/)
- Hackernoon git intro [Part 1](https://hackernoon.com/understanding-git-fcffd87c15a3) and [Part 2](https://hackernoon.com/understanding-git-2-81feb12b8b26).
- Configuring [GitHub Notifications](../../company-info-and-process/onboarding/git-intro/github-notifications/index.md)

To visualize the git flow, there's [an article version](https://guides.github.com/introduction/flow/) and [a video version](https://www.youtube.com/watch?v=47E-jcuQz5c&index=1&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4).

To visualize the Handbook git flow specifically, see the diagram [here](../../handbook/editing/index.md).

[Video introduction to GitHub](https://www.youtube.com/watch?v=sz6zfrQpCQg)

## Unique to Sourcegraph

For repositories such as `sourcegraph/sourcegraph` you should make pull requests from branches on the main repository instead of forking and making a pull request. This is due to how CI currently only runs on trusted contributors. See [external contributions](../engineering/dev/process/external_contributions.md)

## More information

Once you have the basics down, you can look into the [full reference docs](https://git-scm.com/docs) and [glossary](https://git-scm.com/docs/gitglossary).

Other Sourcegraph resources for learning git include our [glossary](../../company-info-and-process/onboarding/glossary.md) and [editing the handbook tutorials](../../handbook/editing/index.md).

For more information on git beyond these links, you can ask most teammates (including all engineers) or ask questions in the #dev-chat and #handbook channels.
