# Sourcegraph releases

This document describes how we release Sourcegraph.

## Release policies

> [!NOTE] As of [RFC 864](https://docs.google.com/document/d/1vZmRx6k-OUpSgrAJ9ovu4qfzrExQDXzWiBYv9XbGEZM/edit?usp=sharing) the ownership of the release process has changed.
> The [Release Team](../../../teams/release/index.md) is now the entity that owns the release process. Read more details about release
> responsibilities in the [Releases](#releases) section below.

### Release Schedule

As of April 2024, Sourcegraph releases features monthly ([see RFC 864](https://docs.google.com/document/d/1vZmRx6k-OUpSgrAJ9ovu4qfzrExQDXzWiBYv9XbGEZM/edit?usp=sharing)) The 2024 schedule is as follows (**version numbers are subject to change**):

| Version   | Feature Freeze Date | Branch Cut Date  | Release Date      | Release Kind |
| --------- | ------------------- | ---------------- | ----------------- | ------------ |
| 5.3.0     | February 1, 2024    | February 9, 2024 | February 15, 2024 | Minor        |
| 5.3.1     | N/A                 | N/A              | February 21, 2024 | Patch        |
| 5.3.2     | N/A                 | N/A              | March 8, 2024     | Patch        |
| 5.3.3     | N/A                 | N/A              | March 20, 2024    | Patch        |
| 5.3.9104  | N/A                 | April 3, 2024    | April 5, 2024     | Monthly      |
| 5.3.11625 | N/A                 | N/A              | April 18, 2024    | Patch        |
| 5.3.12303 | N/A                 | N/A              | April 22, 2024    | Patch        |
| 5.3.x     | N/A                 | May 2, 2024      | May 6, 2024       | Monthly      |
| 5.3.x     | N/A                 | N/A              | May 20, 2024      | Patch        |
| 5.3.x     | N/A                 | N/A              | May 27, 2024      | Patch        |
| 5.3.x     | N/A                 | June 3, 2024     | June 5, 2024      | Monthly      |
| 5.3.x     | N/A                 | N/A              | June 20, 2024     | Patch        |
| 5.3.x     | N/A                 | July 3, 2024     | July 5, 2024      | Monthly      |
| 5.3.x     | N/A                 | N/A              | July 22, 2024     | Patch        |

These releases **may** require [manual migration steps](https://sourcegraph.com/docs/admin/updates).

Releases are the responsibility of the [Release Team](../../../teams/release/index.md), and are performed by the team.

Releases are published with [semantic versioning syntax](https://semver.org/), though Sourcegraph releases do not necessarily follow the versioning semantics. The patch version can be between 0-65535 with the number always increasing.

## FAQ

**Q: Do I need to backport my PRs for it to be included in a monthly release?**

A: No, you don't. Monthly releases are cut from `main`, so once your PR is merged into `main` it'll be included in the next monthly release.

**Q: How do I get my bug fix into a patch release?**

A: You'll need to backport it into the branch of the latest monthly release. This will be in the format `<major>.<minor>.<patch>`.

**Q: How do I find out if a bug fix made it into the last release?**

A: The changelog will be the source of truth for this.

#### Selecting Release Dates

The following are general guidelines for selecting release dates:

- **Day 5**: Monthly release

- **Day 20**: Patch release

We chose _day 5_ to avoid holidays and other events at the beginning of the month, such as new quarterly review meetings and discussions. However, on some
occassions these days fall on Friday or the weekend, so we generally consider the following criteria in the event the schedule above fall on a Friday or the weekend:

1. Pick the next working day that isn't a Friday. This gives time for release prep.

### Patch releases

Generally speaking patches will only include bug fixes for previously released features. In some occasions we may release improvements to address issues that may not technically a bug fix, and in some occasions we may backport features provided they are:

1. Behind a feature flag
2. Low risk and well tested (with flag on and flag off)

#### Patch Schedule

Patches are scheduled regularly throughout the month. They usually happen on the 20th of each month (but might be subject to change following the [release schedule](#release-schedule) above).

These releases **never** require any manual migration steps.

We will also release patches out of band from the schedule above if there are urgent incidents to resolve, such as a security incident or other critical issue affecting the usage of Sourcegraph.

#### Requesting a patch

1. Reach out to the `@release-team` on #discuss-releases.

## Key concepts and components

This section documents the process used to create releases at Sourcegraph.

### Release captain

The release captain is _responsible_ for managing the release process and ensuring release is executed successfully. The release captain may _delegate_ work to other teammates, but such delegation does not absolve the release captain of their responsibility to ensure that delegated work gets done.

The release captain should create a tracking issue using the [release issue template](https://github.com/sourcegraph/sourcegraph/blob/main/dev/release/templates/release_issue_template.md) at the beginning of the release cycle.

Release captain responsibilities are currently owned by the [Release Team](../../../teams/release/index.md).

### Release tooling

`sg` is the tool used to create releases.

### Release branches

The release process uses a release branching model. Monthly releases are created from the `main` branch and are usually contained in a long lived release branch (e.g `5.3.270`, `6.2.205`).
Individual releases associated with the monthly release are tagged from these release branches.

To avoid confusion between tags and branches:

- Tags are always the full semantic version with a leading `v` (e.g. `v5.3.207`)
- Branches are always the dot-separated major/minor/patch versions with no leading `v` (e.g. `5.3.207`).

#### Example

Here is an example git commit history:

1. For a monthly release, the release captain creates the `5.3.207` release branch at commit `B`. This branch is cut from `main`.
1. The release captain tags the release `v5.3.207` at commit `B`.
1. A feature is committed to `main` in commit `C`. It will not ship in the next patch release from the `5.3.207` branch.
1. An issue is found in the release and a fix is committed to `main` in commit `D`.
1. The fix is backported into the `5.3.207` release branch and it'll be part of the next patch release `5.3.405.
1. The release captain tags `v3.0.0` on the `3.0` release branch.
1. Development continues on `main` with commits `E`, `F`, `G`, `H`.
1. The release captain (different person) for `5.3.427` creates the `5.3.427` release branch at commit `H` and a new monthly release cycle begins.

```text
A---B---C---D---E---F---G---H---I---J---K---L (main branch)
     \                       \
      \                       `---v5.3.427 (5.3.427 monthly release branch)
       \
        `---v5.3.207---D'---v5.3.405 patch release (5.3.207 monthly release branch)
```

> [!NOTE] cherry-picks can be automated using the backporting tool by adding the `backport <target-branch>` label to the PR (merged into `main`) that is being cherry-picked (e.g. `backport 5.0`)
> or using the `sg backport` command that's part of the [sg] CLI.

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

Most issues are non-blocking. Fixes to non-blocking issues can be fixed in `main` by the code owner who can then backport those commits into the release branch with the approval of the release captain. Alternatively, broken features can be reverted out of the release branch or disabled via feature flags if they aren't ready or are too buggy.

### CHANGELOG.md

When releasing a new version, the Release Captain may need to manually update the [CHANGELOG.md]. Follow the instruction below:

- [ ] Check past entries in [CHANGELOG.md] to understand the changelog format.
- [ ] Create a new H2 title named `{major}.{minor}.{patch}` (the new version) after the `Unreleased` section if it doesn't already exist.
- [ ] Copy all changelog entries of the commits belong to this patch release into the new H2 title `## {major}.{minor}.{patch}`, grouped into the types they were originally in (e.g. `### Added`, `### Changed`, `### Fixed`, `### Removed`).

## Support for older versions

At Sourcegraph, we're committed to providing the best support possible for our users. As such, we offer support for the latest version (N) and its previous major version (N-1). For instance, if version 5.x is the most recent release, we provide support for both 5.x and 4.x. However, once we release a new major version (e.g., 6.x), we will discontinue support for 4.x.

Please note that if you encounter any issues that can be resolved with an upgrade or are caused by using an outdated version, we will be unable to provide support. We recommend keeping up-to-date with the latest features and improvements to ensure the best experience.

> [!NOTE] It's important to note that we do not backport bug fixes or other improvements into older versions. Our team is focused on resolving issues in the latest versions of our products.

### Cody clients and backwards compatibility

Cody client extensions, such as the VS Code extension, need to maintain backwards compatibility with Sourcegraph servers back to 5.0.0. The Sourcegraph server has no backward compatibility requirements with respect to the clients. However, the server should try to maintain backwards compatibility with clients on a best effort basis.

Why only back to 5.0 instead of our standard policy of latest version and previous major version? That will eventually be our policy. However, since Cody was new to 5.0.0, it's a necessary exception to that policy.

[patch release request]: https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=team%2Fdistribution%2Cpatch-release-request&template=request_patch_release.md&title=
[revert poor onboarding ux change]: https://github.com/sourcegraph/sourcegraph/issues/30197
[release-config.jsonc]: https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/release/release-config.jsonc
[sourcegraph release tool]: ../../tools/release.md
[sourcegraph/sourcegraph]: https://github.com/sourcegraph/sourcegraph
[sourcegraph/deploy-sourcegraph-docker]: https://github.com/sourcegraph/deploy-sourcegraph-docker
[delivery]: ../../admin-exp/delivery/index.md
[release issue template]: https://github.com/sourcegraph/sourcegraph/blob/main/dev/release/templates/release_issue_template.md
[patch release issue template]: https://github.com/sourcegraph/sourcegraph/blob/main/dev/release/templates/patch_release_issue_template.md
[changelog.md]: https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md
