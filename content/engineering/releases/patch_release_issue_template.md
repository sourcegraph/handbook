<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn release tracking:issues` in the `sourcegraph/sourcegraph` repository.

Arguments:
- $MAJOR
- $MINOR
- $PATCH
- $RELEASE_DATE
- $ONE_WORKING_DAY_AFTER_RELEASE
-->

# $MAJOR.$MINOR.$PATCH patch release

This release is scheduled for **$RELEASE_DATE**.

> **Attention developers:** to get your commits in `main` included in this patch release, please file a [patch request](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Fdistribution&template=request_patch_release.md&title=$MAJOR.$MINOR.$PATCH%3A+) for review.
>
> Only check off items if relevant commits across the following repositories have been cherry-picked into the relevant `$MAJOR.$MINOR` branch by the release captain:
>
> - `sourcegraph/sourcegraph`
> - `sourcegraph/deploy-sourcegraph`
> - `sourcegraph/deploy-sourcegraph-docker`

- [ ] TODO: Add [patch request issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Apatch-release-request) and their associated commits here

## Setup

<!-- Keep in sync with release_issue_template's "Setup" section -->

- [ ] Ensure release configuration in [`dev/release/release-config.jsonc`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/release/release-config.jsonc) on `main` is up to date with the parameters for the current release.
- [ ] Ensure you have the latest version of the release tooling and configuration by checking out and updating `sourcegraph@main`.

## Prepare release

Ensure that all [patch request issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Apatch-release-request) are accounted for, and have all relevant commits across relevant repositories listed above in the checklist.

For each of the following repositories, cherry-pick (see snippet below) and check off commits listed above.

- [ ] `sourcegraph/sourcegraph` ([`$MAJOR.$MINOR` release branch](https://github.com/sourcegraph/sourcegraph/tree/$MAJOR.$MINOR))
- [ ] `sourcegraph/deploy-sourcegraph` ([`$MAJOR.$MINOR` release branch](https://github.com/sourcegraph/deploy-sourcegraph/tree/$MAJOR.$MINOR))
- [ ] `sourcegraph/deploy-sourcegraph-docker` ([`$MAJOR.$MINOR` release branch](https://github.com/sourcegraph/deploy-sourcegraph-docker/tree/$MAJOR.$MINOR))

```sh
git checkout $MAJOR.$MINOR
git pull
git cherry-pick <commit0> <commit1> ... # all relevant commits from the default branch
git push $MAJOR.$MINOR
```

- [ ] Ensure CI passes on all release branches listed above.

Create and test the first release candidate:

- [ ] Push a release candidate tag:
    ```sh
    N=1 yarn release release:create-candidate $N
    ```
- [ ] Ensure the [Sourcegraph pipeline](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=$MAJOR.$MINOR), [QA pipeline](https://buildkite.com/sourcegraph/qa/builds?branch=$MAJOR.$MINOR), and [E2E pipeline](https://buildkite.com/sourcegraph/e2e/builds?branch=$MAJOR.$MINOR) in Buildkite passes.
- [ ] File any failures and regressions in the pipelines as `release-blocker` issues and assign the appropriate teams.

## Stage release

<!-- Keep in sync with release_issue_template's "Stage release" section -->

- [ ] Verify the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md) on `main` and `$MAJOR.$MINOR` are accurate.
- [ ] Tag the final release:
    ```sh
    yarn release release:create-candidate final
    ```
- [ ] Ensure the [Sourcegraph pipeline](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=$MAJOR.$MINOR), [QA pipeline](https://buildkite.com/sourcegraph/qa/builds?branch=$MAJOR.$MINOR), and [E2E pipeline](https://buildkite.com/sourcegraph/e2e/builds?branch=$MAJOR.$MINOR) in Buildkite passes, and for the release Docker images to be available in [Docker Hub](https://hub.docker.com/r/sourcegraph/server/tags).
- [ ] Open PRs that publish the new release and address any action items required to finalize draft PRs (track PR status via the [generated release campaign](https://k8s.sgdev.org/organizations/sourcegraph/campaigns)):
  ```sh
  yarn release release:stage
  ```

## Finalize release

<!-- Keep in sync with release_issue_template's "Finalize elease" section, except no blog post -->

- [ ] From the [release campaign](https://k8s.sgdev.org/organizations/sourcegraph/campaigns), merge the release-publishing PRs created previously.
  - For [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph), also:
    - [ ] Tag the `v$MAJOR.$MINOR.0` release at the most recent commit on the `v$MAJOR.$MINOR` branch.
        ```sh
        VERSION='v$MAJOR.$MINOR.0' bash -c 'git tag -a "$VERSION" -m "$VERSION" && git push origin "$VERSION"'
        ```
  - For [sourcegraph](https://github.com/sourcegraph/sourcegraph), also:
    - [ ] Cherry pick the release-publishing PR from `sourcegraph/sourcegraph@main` into the release branch.
- [ ] Finalize and announce that the release is live:
  ```sh
  yarn release release:close
  ```

## Post-release

- [ ] Open a PR to update [`dev/release/release-config.jsonc`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/release/release-config.jsonc) with the parameters for the current release.
- [ ] Ensure you have the latest version of the release tooling and configuration by checking out and updating `sourcegraph@main`.
- [ ] Close this issue.

**Note:** If another patch release is requested after the release, ask that a [patch request issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Fdistribution&template=request_patch_release.md) be filled out and approved first.
