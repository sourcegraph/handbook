# Continuous releasability

We practice **continuous releasability**. This is a variant of [continuous
delivery](https://en.wikipedia.org/wiki/Continuous_delivery) adapted to a monthly release cadence
that serves the needs of customers running their own Sourcegraph instances.

## Continuous Releasability Contract

- `main` branch is always releasable
- Every new feature includes a feature flag

### `main` is always releasable

Every change merged into `main` must preserve the releasability of `main`. _Releasable_ means
that the revision can be released to customers. In particular,

- **Up-to-date changelog and docs**: The changelog and documentation reflect the current feature set.
  - Docs must be updated as soon as a feature is merged and enabled.
  - You can merge a feature without yet updating the docs if it is behind a disabled feature flag.
- **QA**: Every feature has been QA'd by an appropriate set of users in an appropriate environment.
  - Simple bug fixes should be tested at the very least by the author.
  - Simple features should be tested by someone other than the author.
  - Complex or scale-sensitive changes should be tested by multiple people on one of the dogfood instances.
- **No regressions**: The regression test suite passes.
  - The regression test suite is not run in CI, because it is time-consuming and somewhat flaky.
  - The author should manually run the regression test suite before merging, _unless_ they are
    certain the change does not break the regression test suite AND introduces no new behavior.
- **Up-to-date Regression test suite**: Every key workflow has a regression test.
  - This means adding/updating regression tests when you add/update workflows.

[What to do if the `main` branch builds are failing and it is not in a releasable state?](https://docs.sourcegraph.com/dev/background-information/testing_principles#broken-builds-on-the-main-branch)

### A feature flag is required for every new feature

The preferred feature flag mechanism is the
[`experimentalFeatures`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@2b90ec5006f6879193d9a0fd2d2493bc6e061004/-/blob/schema/site.schema.json#L47:6)
field of site config.

Feature flags achieve 2 things:

- They allow us to maintain the Continuous Releasability Contract while still merging big features
  into `main` (disabled behind the feature flag) before they are fully tested. This is useful if a
  feature needs to be deployed to a dogfood instance or beta-tested before being deemed
  release-ready.
- They give us a quick mechanism to disable features if a feature inadvertently breaks the
  Releasability Contract. E.g., if we discover a critical bug in a new feature 1 day before release,
  we can immediately disable it to make the release deadline.

## Exceptions

In some cases, it may be prohibitively expensive to preserve releasability. For example, a major
change made the indexed search backend horizontally scalable. Maintaining strict releasability of
`main` would have required spinning up the new backend alongside the old one with a feature flag
to toggle between the old and new backends. It was far easier to switch over and fix any bugs
immediately after.

Such cases are exceptional and the conditions under which they are allowable will change as the team
and codebase grows. If maintaining the Continuous Releasability Contract is too expensive for a
given feature, notify the Release Captain and together come up with a QA and rollout plan. Try to
minimize the period of time during which the Releasability Contract is broken. Here are some rules
of thumb:

- Do as much QA and testing as possible before merging into `main`.
- Have a plan for quickly testing and fixing any issues that arise immediately after merging into
  `main`.
- Make the change as much in advance of the release date as possible.
