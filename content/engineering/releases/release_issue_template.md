<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn run release tracking-issue:create` from the
`dev/release` directory in the main repository to create a release tracking issue, instead.

Arguments:
- $MAJOR
- $MINOR
- $RELEASE_DATE
- $FIVE_WORKING_DAYS_BEFORE_RELEASE
- $FOUR_WORKING_DAYS_BEFORE_RELEASE
- $ONE_WORKING_DAY_BEFORE_RELEASE
-->

# $MAJOR.$MINOR Release ($RELEASE_DATE)

**Note:** All `yarn run release ...` commands should be run from folder `dev/release`.
**Note:** All `yarn run test ...` commands should be run from folder `web`.

## $FIVE_WORKING_DAYS_BEFORE_RELEASE (5 work days before release): Prep for branch cut

- [ ] Post a release status update to Slack - review all release-blocking issues, and ensure someone is resolving each.
  ```sh
  yarn run release release:status $MAJOR.$MINOR.0
  ``` 

## $FOUR_WORKING_DAYS_BEFORE_RELEASE (4 work days before release): Branch cut

- [ ] Update the changelog and merge the generated pull request:
  ```sh
  yarn run release changelog:cut $MAJOR.$MINOR.0
  ```
- [ ] Create the `$MAJOR.$MINOR` branch off the CHANGELOG commit in the previous step: `git branch $MAJOR.$MINOR && git push origin $MAJOR.$MINOR`.

Upon branch cut, create and test the first release candidate:

- [ ] Tag the first release candidate:
  ```sh
  yarn run release release:create-candidate $MAJOR.$MINOR.0-rc.1
  ```
- [ ] Run regression tests:
  - [ ] Follow the [Regression tests guide](https://github.com/sourcegraph/sourcegraph/blob/main/client/web/src/regression/README.md) to set up your e2e environment. 
        Run the tests from the `web` directory. A more complete set of env vars can be found in this
        [1password](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/gm5dfflq6sfclmotneuayfdj5q) entry.
  - [ ] New Sourcegraph Docker container:
    - Run the initializer: `E2E_INIT=true SOURCEGRAPH_BASE_URL=http://localhost:7080 yarn run test:regression -t 'Initialize new Sourcegraph instance'`
    - Run the regression test suite: `SOURCEGRAPH_BASE_URL=http://localhost:7080 yarn run test:regression`
  - [ ] Upgrade from previous release:
    - Run the initializer on a Docker container running the last patch version of the previous major/minor release.
    - Upgrade and run the regression test suite.
  - [ ] New Sourcegraph Kubernetes cluster:
    - Run the initializer on a new Sourcegraph Kubernetes cluster.
    - Run the regression test suite.
- [ ] File any regressions as `release-blocker` issues and assign the appropriate teams.

Revert or disable features that may cause delays. As necessary, `git cherry-pick` bugfix (not feature!) commits from `main` into the release branch. Continue to create new release candidates daily or as necessary, until no more `release-blocker` issues remain:

- [ ] Cut the Nth release candidate:
  ```
  N=<release-candidate-number> yarn run release release:create-candidate $MAJOR.$MINOR.0-rc.$N
  ```
- [ ] Re-run the automated test suite against the new release candidate, file any regressions as
  `release-blocker` issues.
  - [ ] If necessary, manually test features or workflows affected by the cherry-pick.
- [ ] Post a release status update by running the command below. Ensure someone is resolving each release-blocking issue. If there are no more release-blocking issues, proceed to tag the final release in the next section.
  ```
  yarn run release release:status $MAJOR.$MINOR.0
  ``` 

## Tag final release

Once there are no more release-blocking issues (as reported by the `release:status` command) proceed with creating the final release:

- [ ] Tag the final release:
  ```
  yarn run release release-candidate:create $MAJOR.$MINOR.0
  ```
- [ ] Verify the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md) on
  `main` is accurate (no items should have been added since branch cut, but some items may need to
  be removed).
- [ ] Wait for the release Docker images to be available in [Docker Hub](https://hub.docker.com/r/sourcegraph/server/tags).
- [ ] Release Docker Compose by following [these instructions](https://github.com/sourcegraph/deploy-sourcegraph-docker/blob/master/RELEASING.md)
- [ ] Open PRs that publish the new release:
  ```sh
  # Run this in the main sourcegraph repository in the `dev/release` directory on `main` branch:
  yarn run release release:stage $MAJOR.$MINOR.0
  ```
- [ ] Create a PR to update the [Kubernetes upgrade guide](https://docs.sourcegraph.com/admin/updates/kubernetes) indicating the steps required to upgrade. Add the created pull request to the release campaign:
  ```sh
  yarn run release release:add-to-campaign $MAJOR.$MINOR.0 sourcegraph/sourcegraph <pr-number>
  ```
- [ ] Create a PR to update [deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-docker) as required. Add the created pull request to the release campaign:
  ```sh
  yarn run release release:add-to-campaign $MAJOR.$MINOR.0 sourcegraph/deploy-sourcegraph-docker <pr-number>
  ```

## $RELEASE_DATE: Release

- [ ] From the [release campaign](https://k8s.sgdev.org/organizations/sourcegraph/campaigns), merge the release-publishing PRs created previously.
  - For [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph), also:
    - [ ] Tag the `v$MAJOR.$MINOR.0` release at the most recent commit on the `v$MAJOR.$MINOR` branch.
        ```sh
        VERSION='v$MAJOR.$MINOR.0' bash -c 'git tag -a "$VERSION" -m "$VERSION" && git push origin "$VERSION"'
        ```
  - For [sourcegraph](https://github.com/sourcegraph/sourcegraph), also:
    - [ ] Cherry pick the release-publishing PR from `sourcegraph/sourcegraph@main` into the release branch.
- [ ] Ask the product team to merge the blog post ([example](https://github.com/sourcegraph/about/pull/83)). Add the pull request to the release campaign:
  ```sh
  yarn run release release:add-to-campaign $MAJOR.$MINOR.0 sourcegraph/about <pr-number>
  ```
- [ ] Announce that the release is live:
  ```sh
  yarn run release release:close $MAJOR.$MINOR.0
  ```

### Post-release

- [ ] Notify the next release captain that they are on duty for the next release. They should complete the steps in this section.
- [ ] Ensure you have the latest version github.com/sourcegraph/about checked out and it is located
      at `../about` (relative to this repository).
- [ ] Update `dev/release/config.json` with the parameters for the current release.
- [ ] Run `yarn build` to rebuild the release script (necessary, because `config.json` is compiled in).
- [ ] Create release calendar events, tracking issue, and announcement for next release:
  ```sh
  # Add calendar events and reminders for key dates in the release cycle
  yarn run release tracking:release-timeline

  # Create the release tracking issue (i.e., this issue)
  yarn run release tracking:release-issue
  ```
- [ ] Close this issue.
- [ ] Close the milestone.
