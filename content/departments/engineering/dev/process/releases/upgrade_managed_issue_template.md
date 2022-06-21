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

These [managed instances](../../admin-exp/devops/managed/index.md) upgrades are scheduled for **$ONE_WORKING_DAY_AFTER_RELEASE**.

To perform these upgrades, follow the [managed instances upgrade process](../../admin-exp/devops/managed/upgrade_process.md).
Make sure to upgrade internal instances before customer instances.

---

## Upgrade internal managed instances

- [ ] Upgrade [devmanaged.sourcegraph.com](https://devmanaged.sourcegraph.com)
- [ ] Upgrade [rctest.sourcegraph.com](https://rctest.sourcegraph.com)
- [ ] Upgrade [demo.sourcegraph.com](https://demo.sourcegraph.com) - contact #ce beforehand and make sure there are no demos scheduled for the hour of the upgrade.
- [ ] Upgrade [tpgi.sourcegraph.com](https://tpgi.sourcegraph.com) - this is the accessibility audit managed instance, please contact #frontend-platform before upgrading.

## Upgrade customer managed instances

<!--
  DO NOT MENTION CUSTOMER NAMES on this list or your commits!
  Use a https://github.com/sourcegraph/accounts link instead.
-->

- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/528
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/532
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/542
- [ ] Upgrade second instance for https://github.com/sourcegraph/accounts/issues/542
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/5041
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/547
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8288
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8282
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8285
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/581
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/537
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/820
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/814
- [ ] Upgrade second instance for https://github.com/sourcegraph/customer/issues/820
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/774
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/956
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/769
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/1046
