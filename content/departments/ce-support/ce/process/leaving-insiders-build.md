# Migrating off the insiders build

Customers can wind up on our insiders/development build rather than a stable version of Sourcegraph. This can lead to unexpected behavior (since those builds aren't tested like official version releases are). We discourage customers from being on the insiders build; usually, if we see that they are, it's a mistake rather than an intentional choice.

## How to determine if a company is on the insiders build

To determine if a customer is impacted, look for them in the [server instance Looker report](https://sourcegraph.looker.com/looks/436). If they are impacted, the `Latest Version` column for their instance will show a version that looks like `12345_2021-02-15_ba5ee0d`. A stable build version, in contrast, will look like `3.22.1`.

## Moving off the build

Because of how Sourcegraph makes assumptions about upgrades (that they are always forward-tracked; customers aren't downgrading unless CE is involved), you'll need to confirm what commit the customer's instance is on. Have them run `git log -1 --oneline` to pull that information. Once you have that, check the repo histories to find that commit. Ask Distribution if you're not able to locate the commit message.

Once you've found the commit, use the repo history to find what the next stable release _after_ that commit is. Have the customer follow the normal upgrade process to move to that version, and then from there they can follow the upgrade process to bring themselves up to date with our most recent stable release. If there is no stable release ahead of their current commit, wait until the next release goes out, and then have them migrate to that release.

## Preventing accidental use of the insiders build

If a customer checks out or forks `master` rather than a specific version branch, they'll arrive on the insiders build. When going over setup instructions with a new customer, ensure that they're aware that they need to check out a specific version to prevent this.
