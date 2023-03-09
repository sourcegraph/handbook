# Sourcegraph backporting tool

This tool helps backporting merged pull request in GitHub. It takes a specific code change or feature that was developed on a newer version / commit in the codebase and apply's it to an older version of the same codebase (e.g. a release branch).

This tool is currently being used for [Sourcegraph releases](../process/releases/index.md) in order to backport changes from the `main` branch to the release branch and replace the manual cherry-picking process.

It is developed in [`sourcegraph/backport`](https://github.com/sourcegraph/backport).

To use it, check out the `sourcegraph/sourcegraph` repository. Find the merged commit pull request you want to backport and label it with `backport <target-branch>`. This will trigger a github action that will run backporting tool and create a new pull request with the backported changes onto the target branch.

## Prerequisite

This tool requires the following dependencies in your system `PATH`

- [node](https://github.com/nvm-sh/nvm)
- [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

## Issues

if the backporting tool fails to create a pull request, it will add a comment to the original pull request with the error message and instructions on how to manually create a backport pull request.
It will also add the labels `failed-backport-to-<target-version>` , `release-blocker`, `backports` to the original pull request.

you can manually create one by running the following command in your terminal:

### Fetch latest updates from GitHub",

`git fetch`

### Create a new working tree

`git worktree add ${worktreePath} ${base}`,

### Navigate to the new working tree

`cd ${worktreePath}`,

### Create a new branch

`git switch --create ${head}`,

### Cherry-pick the merged commit of this pull request and resolve the conflicts

`git cherry-pick -x --mainline 1 ${commitSha}`,

### Push it to GitHub

`git push --set-upstream origin ${head}`,

### Go back to the original working tree

`cd ../..`

### Delete the working tree"

`git worktree remove ${worktreePath}`
