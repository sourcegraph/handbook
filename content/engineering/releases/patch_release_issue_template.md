<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn run release tracking:patch-issue <version>` from the
`dev/release` directory in the main repository to create a patch release issue, instead.

Arguments:
- $MAJOR
- $MINOR
- $PATCH
-->

# $MAJOR.$MINOR.$PATCH Patch Release

**Attention developers:** to get your commits in `main` included in this patch release, please file a [patch request](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Fdistribution&template=request_patch_release.md&title=$MAJOR.$MINOR.$PATCH%3A+) for review. Only check off items if the commit have been cherry-picked into the `$MAJOR.$MINOR` branch by the release captain.

- [ ] TODO: Add commit links and their associated patch request issues here

---

**Note:** All `yarn run release ...` commands should be run from folder `dev/release`.

**Note:** All `yarn run test ...` commands should be run from folder `web`.

## Setup

- [ ] Ensure release configuration in `dev/release/config.json` on `main` is up to date with the parameters for the current release.
- [ ] Ensure the latest version of the release tooling has been built before each step using `yarn run build` in `dev/release`.

## Prepare release

- [ ] Ensure that all the commits listed above has been cherry-picked to [`$MAJOR.$MINOR`](https://github.com/sourcegraph/sourcegraph/tree/$MAJOR.$MINOR) and make sure CI passes.
    ```
    git checkout $MAJOR.$MINOR
    git pull
    git cherry-pick <commit0> <commit1> ... # all relevant commits from the main branch
    git push $MAJOR.$MINOR
    ```
- [ ] Cherry-pick relevant [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) configuration changes from `master` onto the `$MAJOR.$MINOR` release branch, and ensure CI passes.
    ```
    git checkout $MAJOR.$MINOR
    git pull
    git cherry-pick <commit0> <commit1> ... # all relevant commits from the master branch
    git push $MAJOR.$MINOR
    ```
- [ ] Cherry-pick relevant [deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-docker) configuration changes from `master` onto the `$MAJOR.$MINOR` release branch, and ensure CI passes.
    ```
    git checkout $MAJOR.$MINOR
    git pull
    git cherry-pick <commit0> <commit1> ... # all relevant commits from the master branch
    git push $MAJOR.$MINOR
    ```
- [ ] Push a release candidate tag:
    ```
    yarn run release release-candidate:create 1
    ```
- [ ] Wait for the release candidate Docker images to be available in [Docker Hub](https://hub.docker.com/r/sourcegraph/server/tags).
- [ ] Ensure the release candidate starts for upgrades and new instances:
    ```
    # 1. Answer YES to delete /tmp/sourcegraph with the old image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR ./dev/run-server-image.sh
    
    # 2. Answer NO to delete /tmp/sourcegraph with the new image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR.$PATCH-rc.1 ./dev/run-server-image.sh
    
    # 3. Answer YES to delete /tmp/sourcegraph with the new image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR.$PATCH-rc.1 ./dev/run-server-image.sh
    ```

## Stage release

- [ ] Tag the final release:
    ```
    yarn run release release-candidate:create final
    ```
- [ ] Wait for the release Docker images to be available in [Docker Hub](https://hub.docker.com/r/sourcegraph/server/tags).
- [ ] Open PRs that publish the new release and address any action items required to finalize draft PRs (track PR status via the [generated release campaign](https://k8s.sgdev.org/organizations/sourcegraph/campaigns)):
  ```sh
  yarn run release release:stage
  ```

## Release

<!-- Keep in sync with release_issue_template's "Release" section -->

- [ ] From the [release campaign](https://k8s.sgdev.org/organizations/sourcegraph/campaigns), merge the release-publishing PRs created previously.
  - For [sourcegraph](https://github.com/sourcegraph/sourcegraph), also:
    - [ ] Cherry pick the release-publishing PR from `sourcegraph/sourcegraph@main` into the release branch.
- [ ] Announce that the release is live:
  ```sh
  yarn run release release:close
  ```

## Post-release

- [ ] Open a PR to update `dev/release/config.json` with the parameters for the current release.
- [ ] Run `yarn build` to rebuild the release script.
- [ ] Close this issue.

**Note:** If another patch release is requested after the release, ask that a [patch request issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Fdistribution&template=request_patch_release.md) be filled out and approved first.
