<!--
DO NOTE COPY THIS ISSUE TEMPLATE MANUALLY. Use `yarn release tracking:issues` in the `sourcegraph/sourcegraph` repository.

Arguments:
- $MAJOR
- $MINOR
- $PATCH
- $RELEASE_DATE
- $ONE_WORKING_DAY_AFTER_RELEASE
-->

# $MAJOR.$MINOR.$PATCH managed instances upgrade

These [managed instances](../enablement/delivery/managed/index.md) upgrades are scheduled for **$ONE_WORKING_DAY_AFTER_RELEASE**.

To perform these upgrades, follow the [managed instances upgrade process](../enablement/delivery/managed/upgrade_process.md).
Make sure to upgrade internal instances before customer instances.

---

## Upgrade internal managed instances

- [ ] Upgrade [devmanaged.sourcegraph.com](https://devmanaged.sourcegraph.com)
- [ ] Upgrade [demo.sourcegraph.com](https://demo.sourcegraph.com)

## Upgrade customer managed instances

<!--
  DO NOT MENTION CUSTOMER NAMES on this list or your commits!
  Use a https://github.com/sourcegraph/accounts link instead.
-->

- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/528
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/532
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/542
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/5041
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/547
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8195
