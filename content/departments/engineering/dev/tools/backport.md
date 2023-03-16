# Sourcegraph backporting tool

This tool helps backporting merged pull request in GitHub. It takes a specific code change or feature that was developed on a newer version / commit in the codebase and apply's it to an older version of the same codebase (e.g. a release branch).

This tool is currently being used for [Sourcegraph releases](../process/releases/index.md) in order to backport changes from the `main` branch to the release branch and replace the manual cherry-picking process.

It is developed in [`sourcegraph/backport`](https://github.com/sourcegraph/backport).

## Prerequisite

To run locally, this tool requires the following dependencies in your system `PATH`

- [node](https://github.com/nvm-sh/nvm)
- [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

## How should I use the backporting tool?

Backporting is how you move changes from `main` into a release branch. There are a few scenarios this might be used:

1. Moving a commit from `main` to the release during the code freeze period. This should only be done for low-risk changes, and not significant feature changes.
2. Fixing an issue present on the release branch.
3. Backporting to an older release branch for a patch.

It is your responsibility to ensure any backports that you open are merged during the code freeze period of a release. Release captains will get a notification that backports are opened as a release blocker, but the best case scenario is all backports are closed promptly. A good practice it to backport and merge your change if necessary as soon as possible after merging into `main`.

### Can I approve the backport PR?

Yes, you can approve backport PRs as long as they have been approved into `main` through the normal PR process with additional reviewers.

### Does the backport PR automatically merge?

No! It is your responsibility to ensure the backport PR is merged. Auto-merge is a good tool to use in this scenario.

## I want to backport my change, what do I do?

To backport to a specific branch, simply attach the relevant backport label on Github to your pull request corresponding to the desired target branch. Once your original pull request is merged a GitHub action will attempt the cherry-pick and if successful another pull request will be opened to backport your change into the target branch.

Backport labels can also be applied after merge, so you don't need to worry if you didn't include the label before you merged your pull request.

As an example, say you wanted to backport into the 5.0 release branch. Attach the `backport 5.0` label to your pull request, and merge. Open the backport pull request, wait for CI to pass, and merge into the release branch.

## I want to merge to `main` during freeze, but NOT backport. What do I do?

If you want to merge some changes to `main` that do **not** belong in the release branch during the code freeze, simply add the label `confirm-no-backport`. This is just a simple mechanism to remind all mergers that the code freeze is in progress, and make sure we are being deliberate about merging.

## Issues

if the backporting tool fails to create a pull request, it will add a comment to the original pull request with the error message and instructions on how to manually create a backport pull request.
It will also add the labels `failed-backport-to-<target-version>` , `release-blocker`, `backports` to the original pull request.

you can manually create one by running the following command in your terminal:

1. Fetch latest updates from GitHub

`git fetch`

2. Create a new working tree

`git worktree add ${worktreePath} ${base}`

3. Navigate to the new working tree

`cd ${worktreePath}`

4. Create a new branch

`git switch --create ${head}`

5. Cherry-pick the merged commit of this pull request and resolve the conflicts

`git cherry-pick -x --mainline 1 ${commitSha}`

6. Push it to GitHub

`git push --set-upstream origin ${head}`

7. Go back to the original working tree

`cd ../..`

8. Delete the working tree

`git worktree remove ${worktreePath}`

# PRs with migration changes

If the PR contains a migration change, a manual update of the stiched migration files is required.

## How to update the stitched migration files

on the release branch, run the following commands :

1. sg migration leaves <latest-commit-release-branch>

this will output a list of leaf migrations for the release branch. e.g.:

```
Leaf migrations for "frontend" defined at commit "c982f23f27addb337836b650ab943037628d8a0d"
1675296942: (add column to changesets for external fork name)
1676996650: (package_repos_separate_versions_table_patch1)
1675864432: (add code_host_states to permission_sync_jobs table)
...
```

2.  identify which schema your migration is in e.g. frontend, codeintel, codeinsights. Once you have identified the schema, you can find the leaf migrations for that schema in the output of the previous command. Create a two PR's one to be merged to backport branch and the other to main. For both PR's, copy the leaf migrations numbers from the step above into the parents field of metadata.yaml file for that migration. Ensure that the main branch is updated to have the same parents as the backport branch at the same time.

3.  sg generate

4.  git add, git commit, git push changes to the backported branch as well as the PR that will merge to main for the drift fix.

5.  Wait for CI to go Green, and merge the PRs.
