# Introductions to git and GitHub

This guide is a resource for learning both git and GitHub, both of which are extremely useful to know as a part of the Sourcegraph team. We use git (a distributed source control system) and GitHub (a tool for hosting projects that use git) for our own software development, and using Sourcegraph (the product) also requires knowledge of git in many cases.

## Intro to GitHub

- [GitHub walkthrough](https://youtu.be/sz6zfrQpCQg) on Youtube

## Git basics

- [Git intro](https://guides.github.com/introduction/git-handbook/)
- Hackernoon git intro [Part 1](https://hackernoon.com/understanding-git-fcffd87c15a3) and [Part 2](https://hackernoon.com/understanding-git-2-81feb12b8b26).

To visualize the git flow, there's [an article version](https://guides.github.com/introduction/flow/) and [a video version](https://www.youtube.com/watch?v=47E-jcuQz5c&index=1&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4).

[Video introduction to GitHub](https://www.youtube.com/watch?v=sz6zfrQpCQg)

## Unique to Sourcegraph

For repositories such as `sourcegraph/sourcegraph` you should make pull requests from branches on the main repository instead of forking and making a pull request. This is due to how CI currently only runs on trusted contributors. See [external contributions](../../engineering/external_contributions.md)

## More information

Once you have the basics down, you can look into the [full reference docs](https://git-scm.com/docs) and [glossary](https://git-scm.com/docs/gitglossary).

Other Sourcegraph resources for learning git include our [glossary](./glossary.md) and [editing the handbook tutorials](../../editing.md).

For more information on git beyond these links, you can ask most teammates (including all engineers) or ask questions in the #dev-chat and #handbook channels.
