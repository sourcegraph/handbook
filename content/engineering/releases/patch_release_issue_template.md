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
    git log v$MAJOR.$MINOR.$(($PATCH-1))...$MAJOR.$MINOR --pretty=format:'- %H %s'
    ```

## Release sourcegraph/server

- [ ] Push the branch `$MAJOR.$MINOR` with your cherry-picked commit(s) and make sure CI passes.
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

## Release Kubernetes deployment

In [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph):

- [ ] Wait for Renovate to open a PR to update the image tags and merge that PR ([example](https://github.com/sourcegraph/deploy-sourcegraph/pull/199)).
- [ ] Cherry-pick the image tag update commits from `master` onto `$MAJOR.$MINOR` branch. Then push the release tag:
    ```
    git checkout $MAJOR.$MINOR
    git pull
    git cherry-pick <commit0> <commit1> ... # all relevant commits from the master branch
    git push $MAJOR.$MINOR
    git tag v$MAJOR.$MINOR.$PATCH
    git push origin v$MAJOR.$MINOR.$PATCH
    ```

## Update the docs

- [ ] Open and merge PRs that publish the release (the PRs created by this command must be merged manually):
  ```
  yarn run release release:publish $MAJOR.$MINOR.$PATCH
  ```
- [ ] Create a new section for the patch version in the changelog. Verify that all changes that have been cherry picked onto the release branch have been moved to this section of the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md) on `master`.
- [ ] Post a reply in the #dev-announce thread to say that the release is complete.
