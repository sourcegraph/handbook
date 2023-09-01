# External contributions

When a pull request is coming from a non-Sourcegrapher, it won’t trigger a CI
build on Buildkite automatically because we want to review the code before it
runs on our CI infrastructure. Please review the PR to ensure it doesn’t make
any malicious changes to our build scripts.

Also see: [Accepting external contributions](https://docs.sourcegraph.com/dev/contributing/accepting_contribution).

## Triggering a build

There are two options to trigger a build.

## Option 1: On the command line

Run the following commands:

```sh
gh pr checkout $PR_NUMBER
sg ci build
```

If the PR changes, pull changes into the branch, and run the above command again.

Alternatively, you can directly request a build for a specific commit:

```sh
gh pr checkout $PR_NUMBER
sg ci build --commit $COMMIT
```

## Option 2: In the Buildkite web interface

1. Find the full length SHA of the latest commit, e.g. `ae724a83f8b6fc5628a4e8efcbb62975ed7b4c33` for #8234.
1. Find the branch name, e.g. `8160-http-warning` (trim `Akarshit:` prefix) for #8234.
1. Go to https://buildkite.com/sourcegraph/sourcegraph and click on **New Build** on the top-right menu.
1. Fill in message (could be anything, copy the pull request title is better), commit SHA and branch.
1. Click on **Create Build**, then the build status should be updated in the pull request checks.
