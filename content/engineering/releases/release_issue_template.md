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
- $RETROSPECTIVE_DATE
-->

# $MAJOR.$MINOR Release ($RELEASE_DATE)

**Note:** All `yarn run release ...` commands should be run from folder `dev/release`.

## $FIVE_WORKING_DAYS_BEFORE_RELEASE (5 work days before release): Prep for branch cut

- [ ] In the [Retrospectives folder](https://drive.google.com/drive/u/0/folders/1UiNZujRgsThPFkHoWJvymlsNDsBRtn6O), copy the previous retrospective doc into the current one (which should contain placeholder text).
- [ ] Post to [#dev-announce](https://app.slack.com/client/T02FSM7DL/C0EPTDE9L) the following message:
  ```
  :captain: *Release captain announcement:*

  Branch cut will be at the start of the next working day ($FOUR_WORKING_DAYS_BEFORE_RELEASE).

  All changes that will be part of `$MAJOR.$MINOR` (and all associated CHANGELOG updates) should be in `master` by tomorrow. Otherwise, they will not be included in the release.
  ```
- [ ] Use `./dev/release-ping.sh` to ping teammates who have open issues or PRs in the milestone to
  ask them to triage those that won't make it into the release.
- [ ] Verify there is a draft of the release blog post.

## $FOUR_WORKING_DAYS_BEFORE_RELEASE (4 work days before release): Branch cut

- [ ] Verify for each CHANGELOG item the following (if any item does not have these, disable it,
  notify the owner, and remove it from the CHANGELOG):
  - It has an owner attached to it
  - It has undergone manual QA (and the QA was done on k8s.sgdev.org or at scale if the feature requires it).
  - It is covered by the regression test suite
- [ ] Add a new section `## $MAJOR.MINOR` to [CHANGELOG.md](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md#unreleased) immediately under `## Unreleased changes`. Add new empty sections under `## Unreleased changes` ([example](https://github.com/sourcegraph/sourcegraph/pull/2323)).
- [ ] Create the `$MAJOR.$MINOR` branch off the CHANGELOG commit in the previous step: `git branch $MAJOR.$MINOR && git push origin $MAJOR.$MINOR`.
- [ ] Tag and announce the first release candidate:
  ```
  yarn run release release-candidate:create $MAJOR.$MINOR.0-rc.1
  yarn run release release-candidate:announce $MAJOR.$MINOR.0-rc.1
  ```
- [ ] Run regression tests:
  - [ ] New Sourcegraph Docker container:
    - Run the initializer: `E2E_INIT=true SOURCEGRAPH_BASE_URL=http://localhost:7080 yarn run test-regression -t 'Initialize new Sourcegraph instance'`
    - Run the regression test suite: `SOURCEGRAPH_BASE_URL=http://localhost:7080 yarn run test-regression`
  - [ ] Upgrade from previous release:
    - Run the initializer on a Docker container running the last patch version of the previous major/minor release.
    - Upgrade and run the regression test suite.
  - [ ] New Sourcegraph Kubernetes cluster:
    - Run the initializer on a new Sourcegraph Kubernetes cluster.
    - Run the regression test suite.

## $FOUR_WORKING_DAYS_BEFORE_RELEASE to $ONE_WORKING_DAY_BEFORE_RELEASE: Cut new release candidates

As necessary, `git cherry-pick` bugfix (not feature!) commits from `master` into the release branch.
Aggressively revert or disable features that may cause delays:

- [ ] Review [all release-blocking issues](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Asourcegraph+label%3Arelease-blocker). Add them as checklist items here. Ensure someone is resolving each.
- [ ] Review [all other open issues in the milestone](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Asourcegraph+-label%3Arelease-blocker+milestone%3A$MAJOR.$MINOR) and ask assignees to triage them to a different milestone (preferring Backlog).

Cut a new release candidate daily if necessary:

- [ ] Cut and announce release candidate:
  ```
  N=<release-candidate-number> yarn run release release-candidate:create $MAJOR.$MINOR.0-rc.$N
  N=<release-candidate-number> yarn run release release-candidate:announce $MAJOR.$MINOR.0-rc.$N
  ```
- [ ] Re-run the automated test suite against the new release candidate, file any regressions as
  `release-blocker` issues.
- [ ] If necessary, manually test features or workflows affected by the cherry-pick.

## $ONE_WORKING_DAY_BEFORE_RELEASE (1 work day before release) Tag final release

- [ ] Tag and announce on Slack the final release:
  ```
  yarn run release release-candidate:create $MAJOR.$MINOR.0`
  yarn run release release-candidate:announce $MAJOR.$MINOR.0
  ```
- [ ] Verify the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md) on
  `master` is accurate (no items should have been added since branch cut, but some items may need to
  be removed).
- [ ] Wait for the release Docker images to be available at https://hub.docker.com/r/sourcegraph/server/tags.
- [ ] Cut the Kubernetes cluster release in [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph):
    - [ ] Wait for Renovate to open a PR to update the image tags and merge that PR into `master` ([example](https://github.com/sourcegraph/deploy-sourcegraph/pull/199)).
    - [ ] Create the `$MAJOR.$MINOR` release branch from this commit.
      ```
      VERSION=`$MAJOR.$MINOR` bash -c 'git fetch origin && git checkout origin/master && git branch $VERSION && git checkout $VERSION && git push -u origin $VERSION'
      ```
    - [ ] Tag the `v$MAJOR.$MINOR.0` release at this commit.
        ```
        VERSION='v$MAJOR.$MINOR.0' bash -c 'git tag -a "$VERSION" -m "$VERSION" && git push origin "$VERSION"'
        ```
- [ ] Open (but do not merge) PRs that publish the new release:
  ```
  yarn run release release:publish $MAJOR.$MINOR.0
  ```
- [ ] Review [all issues in the release milestone](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Asourcegraph+milestone%3A$MAJOR.$MINOR). Backlog things that didn't make it into the release and ping issues that still need to be done for the release (e.g. Tweets, marketing).
- [ ] Verify the blog post is ready to be merged.

## $RELEASE_DATE by 10am: Release

- [ ] Merge the release-publishing PRs created previously.
- [ ] Merge the blog post ([example](https://github.com/sourcegraph/about/pull/83)).

### Post-release

- [ ] Create a placeholder doc in the [Retrospectives folder](https://drive.google.com/drive/u/0/folders/1UiNZujRgsThPFkHoWJvymlsNDsBRtn6O)
  for the $MAJOR.$MINOR Retrospective. Add the following text to the document:
  ```
  Placeholder (copy actual contents from previous retrospective after that is completed)
  ```
- [ ] Update `dev/release/config.json` with the parameters for the current release.
- [ ] Create release calendar events, tracking issue, and announcement for next release:
  ```
  # Add calendar events and reminders for key dates in the release cycle
  yarn run release add-timeline-to-calendar

  # Create the release tracking issue (i.e., this issue)
  yarn run release tracking-issue:create

  # Post link to tracking to #dev-announce
  yarn run release tracking-issue:announce
  ```
- [ ] Notify the next release captain that they are on duty for the next release. Include a link to this release issue template.

## $RETROSPECTIVE_DATE: $MAJOR.$MINOR retrospective

- [ ] Complete the retrospective
- [ ] Copy over the retrospective to the new retrospective document (which should have a placeholder)
- [ ] Close this issue.
- [ ] Close the milestone.
