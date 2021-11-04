# External contributions

When a pull request is coming from a non-Sourcegrapher, it won’t trigger a CI
build on Buildkite automatically because we want to review the code before it
runs on our CI infrastructure. Please review the PR to ensure it doesn’t make
any malicious changes to our build scripts.

## Triggering a build

There are two options to trigger a build.

## Option 1: On the command line

Pull the PR branch locally, and push it upstream:

```
git fetch origin pull/<PR-NUMBER>/head:<LOCAL-BRANCH-NAME-YOU-CHOOSE>
git push origin <LOCAL-BRANCH-NAME-YOU-CHOOSE>
```

If the PR changes, pull changes into the branch, and then push it upstream
again.

## Option 2: In the Buildkite web interface

1. Find the full length SHA of the latest commit, e.g. `ae724a83f8b6fc5628a4e8efcbb62975ed7b4c33` for #8234.
1. Find the branch name, e.g. `8160-http-warning` (trim `Akarshit:` prefix) for #8234.
1. Go to https://buildkite.com/sourcegraph/sourcegraph and click on **New Build** on the top-right menu.
1. Fill in message (could be anything, copy the pull request title is better), commit SHA and branch.
1. Click on **Create Build**, then the build status should be updated in the pull request checks.
