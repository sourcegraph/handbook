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

These [managed instances](../../../../cloud/index.md) upgrades are scheduled for **$ONE_WORKING_DAY_AFTER_RELEASE**.

To perform these upgrades, follow the [managed instances upgrade process](../../../../cloud/technical-docs/upgrade_process.md).
Make sure to upgrade internal instances before customer instances.
Make sure to upgrade instances by following the order as it is in this tracking issue.
For compliance, ensure that you link the upgrade pull requests to this issue.

---

## Upgrade internal managed instances

- [ ] Upgrade [rctest.sourcegraph.com](https://rctest.sourcegraph.com)
- [ ] Upgrade [demo.sourcegraph.com](https://demo.sourcegraph.com) - contact #ce beforehand and make sure there are no demos scheduled for the hour of the upgrade. #ce also prefers for upgrades to either occur EU morning or US evening.
- [ ] Upgrade [tpgi.sourcegraph.com](https://tpgi.sourcegraph.com) - this is the accessibility audit managed instance, please contact #frontend-platform before upgrading.
- [ ] Upgrading [research.sourcegraph.com]
- [ ] ~Upgrade [devmanaged.sourcegraph.com](https://devmanaged.sourcegraph.com)~ This is a test instance shared by engineering org
- [ ] ~Upgrade [sourcegraph.sourcegraph.com](https://sourcegraph.sourcegraph.com)~ This instance receives unreleased version upgrade reguarly by #dev-experience

## Upgrade customer managed instances

<!--
  DO NOT MENTION CUSTOMER NAMES on this list or your commits!
  Use a https://github.com/sourcegraph/accounts link instead.
-->

- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8494
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/528
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/532
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/542
- [ ] Upgrade second instance for https://github.com/sourcegraph/accounts/issues/542
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/5041
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/547
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8282
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8285
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/581
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/537
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8247
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/3078
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8495
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/1246
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/2007
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/981
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8383
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/1084
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8377
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8278
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/4189
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8483
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8287
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8389
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8340
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8306
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/3922
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/4345
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/589
- [ ] Upgrdae instance for https://github.com/sourcegraph/accounts/issues/8496
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/7890
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8497
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/1249
- [ ] Upgrade instance for https://github.com/sourcegraph/customer/issues/1254
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/570
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/4079
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8499
- [ ] Upgrade second instance for https://github.com/sourcegraph/accounts/issues/8494
- [ ] Upgrade instance for https://github.com/sourcegraph/accounts/issues/8506
- [ ] Verify all instances are upgraded: `mg --customer all info | grep 'Name\|Version'`
