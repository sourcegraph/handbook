# Releases

<!-- TODO: split this up into an eng process doc and a semi-public when-and-why-we-release-regularly doc -->

This document describes how we release Sourcegraph.

## Goal

The goal of our release process is to make releases boring, regular, and eventually, automated.

## Releases are monthly

We release Sourcegraph **by** 10am US Pacific Time on the 20th day of each month.

"Release" means:

- The Docker images are available for download.
- The blog post is published.
- The release is documented on docs.sourcegraph.com.

The release always ships on time, even if it's missing features or bug fixes we hoped to get in ([why?](https://about.gitlab.com/2015/12/07/why-we-shift-objectives-and-not-release-dates-at-gitlab/)).

### Why the 20th?

There is nothing particularly special about this date, but it does mean we wrap up a release before many teammates go on vacation during the end of December.

### Why aren't releases continuous?

Although [Sourcegraph.com](https://sourcegraph.com) is continuously deployed (from sourcegraph/sourcegraph@`master`), the version of Sourcegraph that customers use is not continuously released or updated. This is because:

- We don't think customers would be comfortable with a continuously updated service running on their own infrastructure, for security and stability reasons.
- We haven't built the automated testing and update infrastructure to make continuous customer releases reliable.

In the future, we may introduce continuous releases if these issues become surmountable.

## Versioning

[Monthly releases](#releases-are-monthly) of Sourcegraph increase the minor version number (e.g. 3.1 -> 3.2). These releases **never** require any manual migration steps.

Patch releases (e.g. 3.0.0 -> 3.0.1) are released on an as-needed basis to fix bugs and security issues. These releases **never** require any manual migration steps. To create a patch release, create a tracking issue using the [patch release issue template](patch_release_issue_template.md) and complete all listed steps.

On rare occasions we may decide to increase the major version number (e.g. 2.13 -> 3.0). These releases **may** require manual migration steps.

## When are patch releases performed?

Patch releases are not free. When considering if a patch release is right ask the following questions:

- Are users/customers actively asking us for these changes and cannot wait until the next full release?
- Is there some functionality completely broken that warrants _redacting_ the prior release of Sourcegraph and advising users wait for the patch release?
- Is it worth interrupting our regular planned work and release cycle for someone to take 3-6 hours and perform the patch release process?
- Is it worth taking up site admin's valuable time by asking them to upgrade (and producing noise for them if they don't need to upgrade)?
- Are the changes extremely minimal, well-tested, and low risk such that not testing as we do in a full release is OK?

If you answered yes to most of these questions, a patch release is warranted. Otherwise, waiting until the next full release (which happens monthly on the 20th) is the best approach.

## Release process

What is the process we follow to release?

### Release captain

The release captain is _responsible_ for managing the release process and ensuring that the release happens on time. The release captain may _delegate_ work to other teammates, but such delegation does not absolve the release captain of their responsibility to ensure that delegated work gets done.

The release captain should create a tracking issue using the [release issue template](release_issue_template.md) at the beginning of the release cycle.

### Release issue templates

- [Release issue template](release_issue_template.md)
- [Patch release issue template](patch_release_issue_template.md)
- [Release blog post issue template](../../product/product_management/release_issue_template.md)

### Schedule

Release captain responsibilities are owned by the [Distribution team](../distribution/index.md).

### Release branches

Each major and minor release of [Sourcegraph](https://github.com/sourcegraph/sourcegraph) has a long lived release branch (e.g. `3.0`, `3.1`). Individual releases are tagged from these release branches (e.g. `v3.0.0-rc.1`, `v3.0.0`, `v3.0.1-rc.1`, and `v3.0.1` would be tagged from the `3.0` release branch).

To avoid confusion between tags and branches:

- Tags are always the full semantic version with a leading `v` (e.g. `v2.10.0`)
- Branches are always the dot-separated major/minor versions with no leading `v` (e.g. `2.10`).

Development always happens on `master` and changes are cherry picked onto release branch as necessary **with the approval of the release captain**.

#### Example

Here is an example git commit history:

1. The release captain creates the `3.0` release branch at commit `B`.
1. The release captain tags the release candidate `v3.0.0-rc.1` at commit `B`.
1. A feature is committed to `master` in commit `C`. It will not ship in `3.0`.
1. An issue is found in the release candidate and a fix is committed to `master` in commit `D`.
1. The release captain cherry picks `D` from `master` into `3.0`.
1. The release captain tags `v3.0.0` on the `3.0` release branch.
1. Development continues on master with commits `E`, `F`, `G`, `H`.
1. Commit `F` fixes a critical bug that impacts 3.0, so it is cherry picked onto the `3.0` release branch and `v3.0.1` is tagged.
1. The release captain (different person) for 3.1 creates the `3.1` release branch at commit `H` and a new release cycle begins.
1. Commit `J` fixes a critical bug that impacts both 3.0 and 3.1, so it is cherry picked into both `3.0` and `3.1` release branches and new releases are tagged (`v3.0.2`, `v3.1.2`).

```
A---B---C---D---E---F---G---H---I---J---K---L (master branch)
     \                       \
      \                       `---v3.1.0-rc.1---I'---v3.1.0---J'---v3.1.2 (3.1 release branch)
       \
        `---v3.0.0-rc.1---D'---v3.0.0---F'---v3.0.1---J'---v3.0.2 (3.0 release branch)
```

#### Cherry-picking a fix onto release branch

In order to cherry-pick a fix onto a release branch:

1. Merge changes into `master` as a squashed commit.
1. Get approval from the **release captain**.
1. Checkout the release branch (e.g. `git checkout 3.12`).
1. Make sure your local release branch is up to date (i.e. `git pull`).
1. `git cherry-pick <commit-sha-of-squashed-commit>`
1. `git push`
1. Let the release captain know (either by sending a message on Slack or leaving a comment on the merged PR with the SHA of the cherry-picked commit, see [example](https://github.com/sourcegraph/sourcegraph/pull/7753#issuecomment-575134117)).

### Issues

How do we deal with issues that are found during the release process?

#### Blocking

The release always ships on time, even if it's missing features or bug fixes we hoped to get in ([why?](https://about.gitlab.com/2015/12/07/why-we-shift-objectives-and-not-release-dates-at-gitlab/)).

There are only three kinds of issues that are eligible to block a release:

1. Issues that literally prevent us from tagging a release (i.e. our CI logic to produce builds from git tags is broken).
2. Issues that fundamentally break our product for a _majority_ of our customers and don't have acceptable workarounds.
3. Critical security _regressions_ from the previous release.

Only the release captain can label something as release blocking.

The release captain has unlimited power to make changes to the release branch to resolve release blocking issues. As soon as a release blocking issue is identified, the release captain should decide the least risky way to resolve the issue as soon as possible. A good default action is to identify and revert offending commits from the release branch. In the worst case, this could involve recreating the release branch from an earlier commit on master. Project owners can work on master to fix the issue, and if the issue is resolved in time, revert the revert and cherry-pick the fix on the release branch.

#### Non-blocking

Most issues are non-blocking. Fixes to non-blocking issues can be fixed in `master` by the code owner who can then `git cherry-pick` those commits into the release branch with the approval of the release captain. Alternatively, broken features can be reverted out of the release branch or disabled via feature flags if they aren't ready or are too buggy.
