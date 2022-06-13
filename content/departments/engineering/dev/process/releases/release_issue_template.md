<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn release tracking:issues` in the `sourcegraph/sourcegraph` repository.

Arguments:
- $MAJOR
- $MINOR
- $PATCH
- $RELEASE_DATE
- $ONE_WORKING_DAY_AFTER_RELEASE
-->

# $MAJOR.$MINOR release

This release is scheduled for **$RELEASE_DATE**.

---

## Setup

- [ ] Ensure release configuration in [`dev/release/release-config.jsonc`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/release/release-config.jsonc) on `main` is up to date with the parameters for the current release.
- [ ] Ensure you have the latest version of the release tooling and configuration by checking out and updating `sourcegraph@main`.

## Cut Release (day before release - $ONE_WORKING_DAY_BEFORE_RELEASE)

Perform these steps the day before the release date to generate a stable release candidate.

### Prepare release

- [ ] Post a release status update to Slack - [review all release-blocking issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Arelease-blocker), and ensure someone is resolving each.
  ```sh
  yarn release release:status
  ```

Do the [branch cut](./index.md#release-branches) for the release:

- [ ] Update the changelog and merge the generated pull request:
  ```sh
  yarn release changelog:cut
  ```
- [ ] Create the `$MAJOR.$MINOR` branch off the CHANGELOG commit in the previous step:
  ```sh
  git branch $MAJOR.$MINOR && git push origin $MAJOR.$MINOR
  ```

Upon branch cut, create and test release candidates:

- [ ] Tag the first release candidate:
  ```sh
  N=1; yarn release release:create-candidate $N
  ```
- [ ] Ensure that the following Buildkite pipelines all pass for the `v$MAJOR.$MINOR.$PATCH-rc.1` tag:

  - [ ] [Sourcegraph pipeline](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=v$MAJOR.$MINOR.$PATCH-rc.1)

- [ ] File any failures and regressions in the pipelines as `release-blocker` issues and assign the appropriate teams.

Revert or disable features that may cause delays. As necessary, `git cherry-pick` bugfix (not feature!) commits from `main` into the release branch. Continue to create new release candidates as necessary, until no more `release-blocker` issues remain.

**Note**: You will need to re-check the above pipelines for any subsequent release candidates. You can see the Buildkite logs by tweaking the "branch" query parameter in the URLs to point to the desired release candidate. In general, the URL scheme looks like the following (replacing `N` in the URL):

- Sourcegraph: `https://buildkite.com/sourcegraph/sourcegraph/builds?branch=v$MAJOR.$MINOR.$PATCH-rc.N`

- [ ] Post a release status update to Slack:

  ```sh
  yarn release release:status
  ```

- [ ] Post the following message to the #cloud-devops channel asking for the release candidate to be deployed to a test managed instance. You're good to go once the instance is up and running:

  ```
  Hey team, I'm the release captain for the $MAJOR.$MINOR release, posting here for asking for a release candidate (v$MAJOR.$MINOR.$PATCH-rc.1) to be deployed to a test managed instance. Could someone help here? :ty:
  ```

## Release Day ($RELEASE_DATE)

### Stage release

<!-- Keep in sync with patch_release_issue's "Stage release" section -->

On the day of the release, confirm there are no more release-blocking issues (as reported by the `release:status` command), then proceed with creating the final release:

- [ ] Make sure [CHANGELOG entries](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md) have been moved from **Unreleased** to **$MAJOR.$MINOR.$PATCH**, but exluding the ones that merged to `main` after the branch cut (whose changes are not in the `$MAJOR.$MINOR` branch).
- [ ] Tag the final release:
  ```sh
  yarn release release:create-candidate final
  ```
- [ ] Ensure that the following pipelines all pass for the `v$MAJOR.$MINOR.$PATCH` tag:
  - [ ] [Sourcegraph pipeline](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=v$MAJOR.$MINOR.$PATCH)
- [ ] Wait for the `v$MAJOR.$MINOR.$PATCH` release Docker images to be available in [Docker Hub](https://hub.docker.com/r/sourcegraph/server/tags)
- [ ] Open PRs that publish the new release and address any action items required to finalize draft PRs (track PR status via the [generated release batch change](https://k8s.sgdev.org/organizations/sourcegraph/batch-changes)):
  ```sh
  yarn release release:stage
  ```

### Finalize release

- [ ] From the [release batch change](https://k8s.sgdev.org/organizations/sourcegraph/batch-changes), merge the release-publishing PRs created previously.
  - For [sourcegraph](https://github.com/sourcegraph/sourcegraph)
    - [ ] Cherry pick the release-publishing PR from `sourcegraph/sourcegraph@main` into the release branch.
  - For [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph)
    - [ ] Ensure the [release tag `v$MAJOR.$MINOR.$PATCH`](https://github.com/sourcegraph/deploy-sourcegraph/releases) has been created
  - For [deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-docker)
    - [ ] Ensure the [release tag `v$MAJOR.$MINOR.$PATCH`](https://github.com/sourcegraph/deploy-sourcegraph-docker/releases) has been created
- [ ] Alert the marketing team in [#release-post](https://sourcegraph.slack.com/archives/C022Y5VUSBU) that they can merge the release post.
- [ ] Finalize and announce that the release is live:
  ```sh
  yarn release release:close
  ```

### Post-release

- [ ] Notify the next [release captain](./index.md#release-captain) that they are on duty for the next release.
- [ ] Open a PR to update [`dev/release/release-config.jsonc`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/release/release-config.jsonc) with the parameters for the next release.
- [ ] Ensure you have the latest version of the release tooling and configuration by checking out and updating `sourcegraph@main`.
- [ ] Create release calendar events, tracking issue, and announcement for next release:
  ```sh
  yarn run release tracking:issues
  yarn run release tracking:timeline
  ```
- [ ] Close this issue.

**Note:** If a patch release is requested after the release, ask that a [patch request issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Fdistribution&template=request_patch_release.md&title=$MAJOR.$MINOR.1%3A+) be filled out and approved first.
