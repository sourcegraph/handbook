<!--
This template is used for our monthly major/minor releases of Sourcegraph.
It is not used for patch releases. See [patch_release_issue_template.md](patch_release_issue_template.md)
for the patch release checklist.

Run a find replace on:
- $MAJOR
- $MINOR
- $RELEASE_DATE
- $FIVE_WORKING_DAYS_BEFORE_RELEASE
- $FOUR_WORKING_DAYS_BEFORE_RELEASE
- $THREE_WORKING_DAYS_BEFORE_RELEASE
- $ONE_WORKING_DAY_BEFORE_RELEASE
-->

# $VERSION Release ($RELEASE_DATE)

**Note:** All `yarn run release ...` commands should be run from `dev/release` in the [sourcegraph repository](https://github.com/sourcegraph/sourcegraph).

## At the start of the iteration

- [ ] Create the retrospective doc for the next iteration by copying the previous one.
- [ ] Update `dev/release/config.json` with the parameters for the current release.
- [ ] Add calendar events and reminders for key dates in the release cycle: `yarn run release add-timeline-to-calendar`
- [ ] Create the release tracking issue (i.e., this issue): `yarn run release tracking-issue:create`
- [ ] Post link to tracking to #dev-announce: `yarn run release tracking-issue:announce`

## 5 working days before release ($FIVE_WORKING_DAYS_BEFORE_RELEASE)

- [ ] Use `./dev/release-ping.sh` to message teammates who have open issues / PRs in the milestone and ask them to remove those that won't be done by the time that the release branch is scheduled to be created.
- [ ] Verify that there is a draft of the blog post and that it will be ready to be merged on time.

## 4 working days before release ($FOUR_WORKING_DAYS_BEFORE_RELEASE)

- [ ] Add a new section header for this version to [CHANGELOG.md](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md#unreleased) immediately under the `## Unreleased changes` heading. Add new empty sections under `## Unreleased changes` ([example](https://github.com/sourcegraph/sourcegraph/pull/2323)).
- [ ] Create the `$MAJOR.$MINOR` branch for this release off of the CHANGELOG commit that you created in the previous step.
- [ ] Tag the first release candidate: `yarn run release release-candidate:create $MAJOR.$MINOR.0-rc.1`
- [ ] Announce the release candidate: `yarn run release release-candidate:announce $MAJOR.$MINOR.0-rc.1`
  - [ ] In a reply to the Slack announcement, assign manual testers for each new feature in the CHANGELOG. These should NOT be authors of the feature. Instruct testers that:
    - Testing is their highest priority.
    - When filing issues, they should include appropriate context so that Product can decide whether
      the issue is a release blocker (or they should directly apply the `release-blocker` label if
      it is obvious).
  - [ ] Open issues for creating or updating regression tests for new features. Assign to feature authors.
- [ ] Run Sourcegraph Docker image with no previous data.
    - [ ] Run the new version of Sourcegraph.
        ```
        CLEAN=true IMAGE=sourcegraph/server:$MAJOR.$MINOR.0-rc.1 ./dev/run-server-image.sh
        ```
    - [ ] Initialize the site by creating an admin account.
    - [ ] Run the regression test suite against it.
- [ ] Upgrade Sourcegraph Docker image from previous released version.
    - [ ] Run the previous version of Sourcegraph.
        ```
        CLEAN=true IMAGE=sourcegraph/server:$OLDVERSION ./dev/run-server-image.sh
        ```
    - [ ] Initialize the site by creating an admin account.
    - [ ] Add a public repository (i.e. https://github.com/sourcegraph/sourcegraph).
    - [ ] Add a private repository (i.e. https://github.com/sourcegraph/infrastructure).
    - [ ] Stop the previous version of Sourcegraph and run the new version of Sourcegraph with the same data.
        ```
        CLEAN=false IMAGE=sourcegraph/server:$MAJOR.$MINOR.0-rc.1 ./dev/run-server-image.sh
        ```
    - [ ] Verify that code search returns results as you expect (depending on the repositories that you added).
    - [ ] Verify that basic code intelligence works on Go or TypeScript.
- [ ] Run the new version of Sourcegraph on a clean Kubernetes cluster with no previous data.
    - [ ] Create a new Kubernetes cluster using https://github.com/sourcegraph/deploy-k8s-helper.
    - [ ] Add a public repository (i.e. https://github.com/sourcegraph/sourcegraph).
    - [ ] Add a private repository (i.e. https://github.com/sourcegraph/infrastructure).
    - [ ] Verify that code search returns results as you expect (depending on the repositories that you added).
    - [ ] Verify that basic code intelligence works on Go or TypeScript.
    - [ ] Tear down this Kubernetes cluster.

## 3 working days before release ($THREE_WORKING_DAYS_BEFORE_RELEASE)

- [ ] `yarn run release release-candidate:create $MAJOR.$MINOR.0-rc.2`
- [ ] `yarn run release release-candidate:announce $MAJOR.$MINOR.0-rc.2`
  - [ ] Note the release blocking issues, ensure someone is working to resolve each, and add them as checklist items here.
- [ ] Review all open issues in the release milestone that aren't blocking and ask assignees to triage them to a different milestone (backlog preferred).

## As necessary

- `git cherry-pick` bugfix (not feature!) commits from `master` into the release branch.
- Aggressively revert features that may cause delays.
- Tag additional release candidates: `yarn run release release-candidate:create $MAJOR.$MINOR.0-rc.$RC`
  - Re-run automated test suite against new release candidates.
  - Re-test any new features or workflows that might have been impacted by commits cherry-picked into the release branch.

## 1 working day before release ($ONE_WORKING_DAY_BEFORE_RELEASE)

- [ ] Tag the final release: `yarn run release release-candidate:create $MAJOR.$MINOR.0`
- [ ] Announce the final release on #dev-announce: `yarn run release release-candidate:announce $MAJOR.$MINOR.0`
- [ ] Verify that all changes that have been cherry picked onto the release branch have been moved to the appropriate section of the [CHANGELOG](https://github.com/sourcegraph/sourcegraph/blob/master/CHANGELOG.md) on `master`.
- [ ] Wait for the final Docker images to be available at https://hub.docker.com/r/sourcegraph/server/tags.
- [ ] In [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph):
    - [ ] Wait for Renovate to open a PR to update the image tags and merge that PR ([example](https://github.com/sourcegraph/deploy-sourcegraph/pull/199)).
    - [ ] Create the `$MAJOR.$MINOR` release branch from this commit.
    - [ ] Tag the `v$MAJOR.$MINOR.0` release at this commit.
        ```
        VERSION='v$MAJOR.$MINOR.0' bash -c 'git tag -a "$VERSION" -m "$VERSION" && git push origin "$VERSION"'
        ```
- [ ] Open (but do not merge) PRs that do the following:
    - [ ] Update the documented version of Sourcegraph ([example](https://github.com/sourcegraph/sourcegraph/pull/2370/commits/701780fefa5809abb16669c9fb29738ec3bb2039)).
    ```
    # With find on macOS:
    find . -type f -name '*.md' -exec sed -i '' -E 's/sourcegraph\/server:[0-9\.]+/sourcegraph\/server:$MAJOR.$MINOR.0/g' {} +
    # With find on Linux:
    find . -type f -name '*.md' -exec sed -i -E 's/sourcegraph\/server:[0-9\.]+/sourcegraph\/server:$MAJOR.$MINOR.0/g' {} +
    # With ruplacer:
    ruplacer --go -t md 'sourcegraph/server:[0-9\.]+' 'sourcegraph/server:$MAJOR.$MINOR.0'
    ```
    - [ ] Update `latestReleaseKubernetesBuild` and `latestReleaseDockerServerImageBuild` ([example](https://github.com/sourcegraph/sourcegraph/pull/2370/commits/15925f2769564225e37013acb52d9d0b30e1336c)).
    - [ ] Update versions in docs.sourcegraph.com header ([example](https://github.com/sourcegraph/sourcegraph/pull/2701/commits/386e5ecb5225ab9c8ccc9791b489160ed7c984a2))
    - [ ] [Update deploy-aws version](https://github.com/sourcegraph/deploy-sourcegraph-aws/edit/master/ec2/resources/user-data.sh#L3)
    - [ ] [Update deploy-digitalocean version ](https://github.com/sourcegraph/deploy-sourcegraph-digitalocean/edit/master/resources/user-data.sh#L3)
    - [ ] Message @slimsag on Slack: `$MAJOR.$MINOR.0 has been released, update deploy-sourcegraph-docker as needed`
- [ ] Review all issues in the release milestone. Backlog things that didn't make it into the release and ping issues that still need to be done for the release (e.g. Tweets, marketing).
- [ ] Verify that the blog post is ready to be merged.

## By 10am PT on the 20th

- [ ] Merge the docs PRs created in the previous step.
- [ ] Merge the blog post ([example](https://github.com/sourcegraph/about/pull/83)).
- [ ] Close this issue.
- [ ] Close the milestone.
- [ ] Notify the next release captain that they are on duty for the next release. Include a link to this release issue template.
- [ ] Remind the team that they should submit [retrospective feedback](../../../retrospectives/index.md) 24 hours before the scheduled retrospective meeting.

## After the Retrospective

- [ ] Scrub the retrospective Google doc for any priviledged customer data.
- [ ] [Convert to Markdown](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607).
- [ ] Add a new retrospective page in `sourcegraph/doc/dev/retrospectives`.
- [ ] Add a link to it on `retrospectives/index.md` and in the left nav (`sourcegraph/doc/_resources/templates/doc.html`)
