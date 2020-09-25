<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn run release patch:issue <version>` from the
`dev/release` directory in the main repository to create a patch release issue, instead.

Arguments:
- $MAJOR
- $MINOR
- $PATCH
-->

# $MAJOR.$MINOR.$PATCH Patch Release

**Attention developers:** Add pending changes to this checklist, cherry-pick the relevant commits onto branch `$MAJOR.$MINOR`. **Only check off items if the relevant PR/commits have been cherry-picked into the branch**:

- [ ] TODO: Add PR or commit links here.
    ```
    git log v$MAJOR.$MINOR.$(($PATCH-1))...$MAJOR.$MINOR --pretty=format:'- [ ] %H %s' --reverse
    ```

## Release sourcegraph/server

- [ ] Push the branch [`$MAJOR.$MINOR`](https://github.com/sourcegraph/sourcegraph/tree/$MAJOR.$MINOR) with your cherry-picked commit(s) and make sure CI passes.
- [ ] Push a release candidate tag:
    ```
    git checkout '$MAJOR.$MINOR'
    git tag -a 'v$MAJOR.$MINOR.$PATCH-rc.1' -m 'v$MAJOR.$MINOR.$PATCH-rc.1' && git push origin 'v$MAJOR.$MINOR.$PATCH-rc.1'
    ```
- [ ] If CI passes, push the release tag:
    ```
    git checkout '$MAJOR.$MINOR'
    git tag -a 'v$MAJOR.$MINOR.$PATCH' -m 'v$MAJOR.$MINOR.$PATCH' && git push origin 'v$MAJOR.$MINOR.$PATCH'
    ```
- [ ] Wait for the final Docker images to be available at https://hub.docker.com/r/sourcegraph/server/tags.
- [ ] Run the old and new images at least three times to make sure it starts:
    ```
    # 1. Answer YES to delete /tmp/sourcegraph with the old image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR ./dev/run-server-image.sh
    
    # 2. Answer NO to delete /tmp/sourcegraph with the new image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR.$PATCH ./dev/run-server-image.sh
    
    # 3. Answer YES to delete /tmp/sourcegraph with the new image
    IMAGE=sourcegraph/server:$MAJOR.$MINOR.$PATCH ./dev/run-server-image.sh
    ```

## Release Kubernetes deployment

In [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph):

- [ ] Cherry-pick relevant `deploy-sourcegraph` configuration changes from `master` onto the relevant release branch.
    ```
    git checkout $MAJOR.$MINOR
    git pull
    git cherry-pick <commit0> <commit1> ... # all relevant commits from the master branch
    git push $MAJOR.$MINOR
    ```
- [ ] Trigger an upgrade using the [Update tags workflow](https://github.com/sourcegraph/deploy-sourcegraph/actions?query=workflow%3A%22Update+tags%22) - set `version` to a semver contraint that will apply the version you want (e.g. `~$MAJOR.$MINOR`) and set the branch to the branch you want to upgrade (i.e. `$MAJOR.$MINOR`). Merge the pull request that gets created ([example](https://github.com/sourcegraph/deploy-sourcegraph/pull/863)).
- [ ] Push the release tag on the commit:
    ```
    git tag v$MAJOR.$MINOR.$PATCH
    git push origin v$MAJOR.$MINOR.$PATCH
    ```

## Release Docker Compose

- [ ] Release Docker Compose by following [these instructions](https://github.com/sourcegraph/deploy-sourcegraph-docker/blob/master/RELEASING.md)

## Update the docs

- [ ] Open and merge PRs that publish the release (the PRs created by this command must be merged manually):
  ```
  yarn run release release:publish $MAJOR.$MINOR.$PATCH
  ```
- [ ] Add an entry to https://docs.sourcegraph.com/admin/updates/kubernetes indicating the steps required to upgrade.
- [ ] Cherry pick the release-publishing PR from sourcegraph/sourcegraph@master into the release branch.
- [ ] Create a new section for the patch version in the changelog. Verify that all changes that have been cherry picked onto the release branch have been moved to this section of the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md) on `main`.
- [ ] Post a reply in the #dev-announce thread to say that the release is complete.
