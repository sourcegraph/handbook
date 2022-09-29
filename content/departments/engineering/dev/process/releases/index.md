# Sourcegraph releases

This document describes how we release Sourcegraph.

## Release policies

> As of [RFC 612](https://docs.google.com/document/d/1Gecnsk4mnmf_p9SO4ExICSTC_op-eL2I_kwutHvwSmU/edit) the ownership of the release process has changed.
> The [Release Guild](./release_guild.md) is now the entity that owns the release process. Read more details about release
> responsibilities in the [Releases](./index.md#Releases) section below.

### Releases

**Sourcegraph minor releases are monthly.**
A release refers to a minor version increase of Sourcegraph (e.g. 3.0.0 -> 3.1.0).

These releases **may** require [manual migration steps](https://docs.sourcegraph.com/admin/updates).

These releases always ship on time, even if they're missing features or bug fixes we hoped to get in ([why?](https://about.gitlab.com/2015/12/07/why-we-shift-objectives-and-not-release-dates-at-gitlab/)).

Minor releases are the responsibility of the [Release Guild](./release_guild.md), and are performed by a release captain
selected from the guild.

### When we release

We create releases by 10am US Pacific Time on the 22nd day of each month. If the 22nd falls on a non-working day, the release captain will shift the release earlier to the last working day before the 22nd. The calendar events will reflect this.

The release branch will be cut exactly (and no more than) 72 weekday-hours prior to the release date and time (using the commit ledger if necessary). This aims to prevent surprise release cuts and ensure teammates can always know how much time is left until the release branch is prepared.

For example if the 22nd of the month was on a Thursday, we would cut the build on Monday the 19th.

If the 22nd of the month was on a Monday, the release cut would be on Wednesday the 17th.

If the 22nd of the month was on a Sunday, the release would become the 20th and the release cut would be on Tuesday the 17th.

### Patch releases

**Sourcegraph patch releases are created as required.**
A _patch release_ refers to a patch version increase of Sourcegraph (e.g. `3.0.0` -> `3.0.1`).

These releases **never** require any manual migration steps.

Patch releases are ultimately the responsibility of the requesting entity (for example a feature team). The release guild will coordinate
and facilitate any internal communications required, and will make a best effort to perform the patch release. If for some reason
the release guild is unable to release a patch, the responsibility to do so will fall back to the requestor.

#### Release guild SLA

The release guild operates with the following SLA:

1. 2 working days after patch request to accept or deny the patch release responsibility
2. 3 working days after accepting responsibility to perform the patch release

> NOTE: Patch releases are not free, and we currently enforce certain requirements before a patch release is conducted.

#### Requesting a patch

1. To request a patch release, please fill out a [patch release request](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Fdistribution%2Cpatch-release-request&template=request_patch_release.md&title=).
2. Notify the release guild (#release-guild). One of the guild members will respond within 2 working days and confirm if the guild is
   able to perform the patch release.
   1. If the guild SLA is too long or otherwise insufficient, the patch requestor is free to notify the guild and perform the patch as long as the patch meets the overall requirements for a Sourcegraph patch.
      We require that the guild still be notified about any patch requests to be aware of any patches that are currently in progress.
      > In most cases, waiting until the next [full release](#releases) is the best approach.

#### Patch request process

The release guild will evaluate this patch process at the end of Q2 FY23 with the goal to make the patch requestor
the first and primary party responsible to cut the patch ([read more in RFC 612](https://docs.google.com/document/d/1Gecnsk4mnmf_p9SO4ExICSTC_op-eL2I_kwutHvwSmU/edit)). Some critiera that we will use to measure success
will be:

1. Only include absolute necessary changes to address issues introduced in the corresponding minor release, and no disruption to the overall customer upgrade experience.
2. Enough internal experience in the release guild such that the guild can be a resource to help with patches (aiming for at least 1 more patch captain)

### Other

On rare occasions we may decide to increase the major version number (e.g. `2.13.x` -> `3.0.0`).
These releases **may** require [manual migration steps](https://docs.sourcegraph.com/admin/updates).

## Key concepts and components

This section documents the process used to create releases at Sourcegraph.

### Release captain

The release captain is _responsible_ for managing the release process and ensuring that the release happens on time. The release captain may _delegate_ work to other teammates, but such delegation does not absolve the release captain of their responsibility to ensure that delegated work gets done.

The release captain should create a tracking issue using the [release issue template](release_issue_template.md) at the beginning of the release cycle.

Release captain responsibilities are currently owned by the [Release guild](release_guild.md).

#### Release Retrospective

The release captain is responsible to start an async release retrospective for every release. Typically this will be in a google document located in the [Release Guild folder in Google Drive](https://drive.google.com/drive/folders/1KMGL2iS8yuBHU-fJsTqb8lIqyHcO75nB?usp=sharing). We perform these retrospectives so that we can understand and grow. The long term vision is to improve this release process, and to do so we need to gather information about each release.

The retrospective document should be shared in #release-guild.

### Release tooling

The [Sourcegraph release tool] is used to generate releases as associated materials (such as tracking issues).
It leverages the following issue templates, which list all individual steps that needs to be performed, for each type of release:

- [Release issue template](release_issue_template.md)
- [Patch release issue template](patch_release_issue_template.md)

### Release branches

Each major and minor release of [Sourcegraph](https://github.com/sourcegraph/sourcegraph) has a long lived release branch (e.g. `3.0`, `3.1`).
Individual releases are tagged from these release branches (e.g. `v3.0.0-rc.1`, `v3.0.0`, `v3.0.1-rc.1`, and `v3.0.1` would be tagged from the `3.0` release branch).

To avoid confusion between tags and branches:

- Tags are always the full semantic version with a leading `v` (e.g. `v2.10.0`)
- Branches are always the dot-separated major/minor versions with no leading `v` (e.g. `2.10`).

Development always happens on `main` and changes are cherry-picked onto release branch as necessary **with the approval of the release captain**.

#### Example

Here is an example git commit history:

1. The release captain creates the `3.0` release branch at commit `B`.
1. The release captain tags the release candidate `v3.0.0-rc.1` at commit `B`.
1. A feature is committed to `main` in commit `C`. It will not ship in `3.0`.
1. An issue is found in the release candidate and a fix is committed to `main` in commit `D`.
1. The release captain cherry-picks `D` from `main` into `3.0`.
1. The release captain tags `v3.0.0` on the `3.0` release branch.
1. Development continues on `main` with commits `E`, `F`, `G`, `H`.
1. Commit `F` fixes a critical bug that impacts 3.0, so it is cherry-picked onto the `3.0` release branch and `v3.0.1` is tagged.
1. The release captain (different person) for 3.1 creates the `3.1` release branch at commit `H` and a new release cycle begins.
1. Commit `J` fixes a critical bug that impacts both 3.0 and 3.1, so it is cherry-picked into both `3.0` and `3.1` release branches and new releases are tagged (`v3.0.2`, `v3.1.2`).

```text
A---B---C---D---E---F---G---H---I---J---K---L (main branch)
     \                       \
      \                       `---v3.1.0-rc.1---I'---v3.1.0---J'---v3.1.2 (3.1 release branch)
       \
        `---v3.0.0-rc.1---D'---v3.0.0---F'---v3.0.1---J'---v3.0.2 (3.0 release branch)
```

### Issues

This section documents how do we deal with issues that are found during the release process.

#### Blocking

The release always ships on time, even if it's missing features or bug fixes we hoped to get in ([why?](https://about.gitlab.com/2015/12/07/why-we-shift-objectives-and-not-release-dates-at-gitlab/)).

There are only three kinds of issues that are eligible to block a release:

1. Issues that literally prevent us from tagging a release (i.e. our CI logic to produce builds from git tags is broken).
2. Issues that fundamentally break our product for a _majority_ of our customers and don't have acceptable workarounds.
3. Critical security _regressions_ from the previous release.

Only the release captain can label something as release blocking.

The release captain has unlimited power to make changes to the release branch to resolve release blocking issues. As soon as a release blocking issue is identified, the release captain should decide the least risky way to resolve the issue as soon as possible. A good default action is to identify and revert offending commits from the release branch. In the worst case, this could involve recreating the release branch from an earlier commit on `main`. Project owners can work on `main` to fix the issue, and if the issue is resolved in time, revert the revert and cherry-pick the fix on the release branch.

#### Non-blocking

Most issues are non-blocking. Fixes to non-blocking issues can be fixed in `main` by the code owner who can then `git cherry-pick` those commits into the release branch with the approval of the release captain. Alternatively, broken features can be reverted out of the release branch or disabled via feature flags if they aren't ready or are too buggy.

### CHANGELOG.md

When releasing a new version, the Release Captain may need to manually update the [CHANGELOG.md]. Follow the instruction below:

- [ ] Check past entries in [CHANGELOG.md] to understand the changelog format.
- [ ] Create a new H2 title named `{major}.{minor}.{patch}` (the new version) after the `Unreleased` section if it doesn't already exist.
- [ ] Copy all changelog entries of the commits belong to this patch release into the new H2 title `## {major}.{minor}.{patch}`, grouped into the types they were originally in (e.g. `### Added`, `### Changed`, `### Fixed`, `### Removed`).

## Minor release process

### 1) Start a minor release

Major and minor releases are released on a fixed schedule, see [when we release](#when-we-release).

### 2) Minor release tracking issue

The tracking issue for the current minor release is created as a part of the post-release step from the previous minor release. Learn more from the [release issue template].

The Release Captain should review and follow the instruction in the release tracking release for the next steps. At a high level, it includes the following steps:

- Build a release candidate and verify CI passes
- Publish final images
- Update documentation
- Update references of the image tag to the new version using batch change

### 3) Wrapping up

Follow the instruction from post-release in the release tracking issue to wrap up the release and schedule the next minor release.

## Patch release process

You can reference our [patch release process recording](https://drive.google.com/drive/u/1/folders/1SUp3732AewIKTFcn5cqfvyf5_7d2HyUX) on Google Drive.

### 1) Kickstart a patch release using the [Sourcegraph release tool]

CE or the products team will start requesting a patch release by submitting a [patch release request]. Learn more from the [patch release issue template].

Upon the Delivery team or the Release Captain receives the patch release request and we have decided to roll out a new patch release, the Release Captain should follow the instruction in the [patch release request] issue to kickstart the patch release process. The instruction is located at the bottom of the [patch release request].

### 2) Patch release tracking issue

The [Sourcegraph release tool] creates a patch release tracking issue which contains a list of action items the Release Captain has to perform. Learn more from the [patch release issue template].

The Release Captain should review and follow the instruction in the patch release tracking release for the next steps. At a high level, it includes the following steps:

- Build a release candidate and verify CI passes
- Publish final images
- Update documentation and changelog
- Update references of the image tag to the new version using batch change

### 3) Revisit patch request issue

Now it's a good time to go back to the original [patch release request] and close it.

## FAQ

### Why the 22nd?

There is nothing particularly special about using this date for releases. Historically the 20th was release date, which was changed as a result of [RFC 695](https://docs.google.com/document/d/1HedzJIzcNR5Ihy_h0PgEqfdAE0z3sSSyZL5IOw2O8qk/edit#).

### Why aren't releases continuous?

Although [Sourcegraph.com](https://sourcegraph.com) is [continuously deployed](../deployments/instances.md), the version of Sourcegraph that customers use is not continuously released or updated.
This is because:

- We don't think customers would be comfortable with a continuously updated service running on their own infrastructure, for security and stability reasons.
- We haven't built the automated testing and update infrastructure to make continuous customer releases reliable.

In the future, we may introduce continuous releases if these issues become surmountable.

[patch release request]: https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Fdistribution%2Cpatch-release-request&template=request_patch_release.md&title=
[revert poor onboarding ux change]: https://github.com/sourcegraph/sourcegraph/issues/30197
[release-config.jsonc]: https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/release/release-config.jsonc
[sourcegraph release tool]: ../../tools/release.md
[sourcegraph/sourcegraph]: https://github.com/sourcegraph/sourcegraph
[sourcegraph/deploy-sourcegraph-docker]: https://github.com/sourcegraph/deploy-sourcegraph-docker
[delivery]: ../../admin-exp/delivery/index.md
[release issue template]: release_issue_template.md
[patch release issue template]: patch_release_issue_template.md
[changelog.md]: https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md
