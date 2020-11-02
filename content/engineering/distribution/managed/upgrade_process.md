# Upgrading a managed instance

Managed instances configuration is tracked in [`deploy-sourcegraph-managed-instances`](https://github.com/sourcegraph/deploy-sourcegraph-managed). For basic operations like accessing an instance for these steps, see [managed instances operations](operations.md).

- [Walkthrough video](#walkthrough-video)
- [0) Setup](#0-setup)
- [1) Add a banner indicating scheduled maintenance is in progress](#1-add-a-banner-indicating-scheduled-maintenance-is-in-progress)
- [2) Mark the database as ready-only](#2-mark-the-database-as-ready-only)
- [3) Create a snapshot of the current deployment](#3-create-a-snapshot-of-the-current-deployment)
- [4) Initialize the new production deployment](#4-initialize-the-new-production-deployment)
- [5) Make the database on the new deployment writable](#5-make-the-database-on-the-new-deployment-writable)
- [6) Upgrade the new deployment](#6-upgrade-the-new-deployment)
- [7) Recreate the deployment](#7-recreate-the-deployment)
- [8) Confirm instance health](#8-confirm-instance-health)
- [9) Switch the load balancer target](#9-switch-the-load-balancer-target)
- [10) Remove the banner indicating scheduled maintenance is in progress](#10-remove-the-banner-indicating-scheduled-maintenance-is-in-progress)
- [11) Take down the old deployment](#11-take-down-the-old-deployment)
- [12) Open a pull request to commit your changes](#12-open-a-pull-request-to-commit-your-changes)

## Walkthrough video

This ~1h two-part screencast by @slimsag walks through this whole upgrade process end-to-end, talks about some of the intricacies, future improvements to this process, and more. It is rough / on-the-spot so please disregard the brief and occassional 🐱 meows and crashing noises in the background.

- Part 1: https://drive.google.com/file/d/12ya1CrBZyjbjTIW-nd-TbjC9W95mVFUU/view?usp=sharing
- Part 2: https://drive.google.com/file/d/1G-w0JvUEwlU6MfOBjV9KnahUm2mLhzEg/view?usp=sharing

These videos reference some customer names, and as such can only be shared with the Sourcegraph team at this time.

**Note:** You do not need to watch the above videos to perform this process, these are for educational purposes only. The steps below may be more up-to-date and accurate than the videos above.

## 0) Setup

Managed instances configuration is tracked in [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed) - make sure you have the latest revision of this repository checked out. For basic operations like accessing an instance for these steps, see [managed instances operations](operations.md).

Many of the following commands in this guide, as well as the commands [operations](./operations.md), use environment variables. Export the appropriate values for the upgrade so you don't lose track:

```sh
export CUSTOMER=<customer_or_instance_name>
export VERSION=v<sourcegraph_version>
```

Start a branch for your upgrade in [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed):

```sh
git checkout -b $CUSTOMER/upgrade-to-$VERSION
```

Figure out [what instance is currently live](./operations.md#redblack-deployment-model) for the managed instance you are upgrading - it should be either `red` or `black`:

```sh
gcloud compute instances list --project=sourcegraph-managed-$CUSTOMER
```

Export the following values in your shell:

```sh
export OLD_DEPLOYMENT=red # the current deployment
export NEW_DEPLOYMENT=$([ "$OLD_DEPLOYMENT" = "red" ] && echo "black" || echo "red")
```

You can replace the `DEPLOYMENT` variable used in the examples in [operations](./operations.md) (using this guide to determine the appropriate value) like so:

```sh
export DEPLOYMENT=$OLD_DEPLOYMENT
# ... commands that target specific instances like `default-$DEPLOYMENT-instance`
```

## 1) Add a banner indicating scheduled maintenance is in progress

Add to the global user settings (`/site-admin/global-settings`):

```jsonc
  "notices": [
    {
      "dismissible": false,
      "location": "top",
      "message": "🚀 Sourcegraph is undergoing a scheduled upgrade ([what's changed?](https://about.sourcegraph.com/blog/)). You may be unable to perform some write actions during this time, such as updating your user settings."
    }
  ]
```

## 2) Mark the database as ready-only

[SSH into `DEPLOYMENT=$OLD_DEPLOYMENT`](./operations.md#ssh-access) and mark the database as read-only:

```sh
docker exec -it pgsql psql -U sg -c 'ALTER DATABASE sg SET default_transaction_read_only = true;'
```

During this time searching will still work, but the site will refuse all database writes, e.g. this will show up in the web UI as:

> [...]: pq: cannot execute INSERT in a read-only transaction

During this time:

- Repositories will not update
- Authentication permissions will not synchronize
- LSIF precise code intel cannot be uploaded
- User settings and site configuration cannot be updated
- Extensions cannot be installed

## 3) Create a snapshot of the current deployment

Edit `$CUSTOMER/terraform.tfvars` to create a snapshot of the current deployment, for example:

```diff
 load_balancer_target = "red"
 deployments = ["red"]
 disks = {
     red = { from_snapshot = null }
 }
 snapshots = {
+    upgrade-from-3-17-2 = { from_disk = "default-red-data-disk" }
 }
```

Make sure the version (`3-17-2`) describes the current version of the instance, and `from_disk` is correct, then `terraform apply` it to create the snapshot. This can take anywhere from a minute to several minutes, depending on how large the disk is.

## 4) Initialize the new production deployment

Copy the old deployment's Docker Compose configuration:

```sh
cd $CUSTOMER
cp -R $OLD_DEPLOYMENT/ $NEW_DEPLOYMENT/
git add $NEW_DEPLOYMENT/
git commit -m "$CUSTOMER: cp -R $OLD_DEPLOYMENT/ $NEW_DEPLOYMENT/"
```

Initialize the new production deployment (`NEW_DEPLOYMENT`) using the snapshot created in the previous step, by editing `$CUSTOMER/terraform.tfvars` with something like:

```diff
 load_balancer_target = "red"
-deployments = ["red"]
+deployments = ["red", "black"]
 disks = {
     red = { from_snapshot = null }
+    black = { from_snapshot = "default-red-data-disk-snapshot--upgrade-from-3-17-2" }
 }
 snapshots = {
     upgrade-from-3-17-2 = { from_disk = "default-red-data-disk" }
 }
```

Make sure to use the right `red` / `black` in both the new deployment name and the `from_snapshot` value. Similarly, change the `from_snapshot` value to match the snapshot you previously took.

Then `terraform apply` to update the metadata. This should only modify the deployment - not recreate it.

## 5) Make the database on the new deployment writable

[SSH into `DEPLOYMENT=$NEW_DEPLOYMENT`](./operations.md#ssh-access) (the _new_ deployment) to be upgraded, and make the database writable:

```sh
docker exec -it pgsql psql -U sg -c 'set transaction read write; ALTER DATABASE sg SET default_transaction_read_only = false;'
```

## 6) Upgrade the new deployment

First check that thew new version requires no manual migration steps in [docker-compose upgrade guide](https://docs.sourcegraph.com/admin/updates/docker_compose)

Then, to upgrade the new `$NEW_DEPLOYMENT` deployment to `$VERSION`:

```sh
cd $CUSTOMER
VERSION=$VERSION ../update-docker-compose.sh $NEW_DEPLOYMENT/
# Address any merge conflicts in $NEW_DEPLOYMENT/ if needed.
git add $NEW_DEPLOYMENT/
git commit -m "$CUSTOMER: upgrade to $VERSION"
```

Then `terraform apply`.

## 7) Recreate the deployment

Take down the new `$NEW_DEPLOYMENT` deployment, for example:

```diff
 load_balancer_target = "red"
-deployments = ["red", "black"]
+deployments = ["red"]
```

`terraform apply` and recreate it (so the startup script runs on a clean OS disk), for example:

```diff
 load_balancer_target = "red"
-deployments = ["red"]
+deployments = ["red", "black"]
```

## 8) Confirm instance health

[Access Grafana](operations.md#port-forwarding-direct-access-to-caddy-jaeger-and-grafana) and confirm the instance is healthy by verifying no critical alerts are firing, and there has been no large increase in warning alerts.

## 9) Switch the load balancer target

Connect to the new instance using the SOCKS5 proxy and confirm you can access it and view the old version at https://company.sourcegraph.com/site-admin/updates

Change the `load_balancer_target` in `terraform.tfvars` from the old deployment (e.g. `"red"`) to the new deployment (e.g. `"black"`), and `terraform apply`. During this time users will see 500 errors:

> Error: Server Error
> The server encountered a temporary error and could not complete your request.
> Please try again in 30 seconds.

For 1m35s while the `google_compute_network_endpoint` gets destroyed.

## 10) Remove the banner indicating scheduled maintenance is in progress

Remove the notice previously added to the global user settings.

## 11) Take down the old deployment

Remove the old `$OLD_DEPLOYMENT` deployment and its data disk, for example:

```diff
 load_balancer_target = "red"
-deployments = ["red", "black"]
+deployments = ["black"]
 disks = {
-    red = { from_snapshot = null }
     black = { from_snapshot = "default-red-data-disk-snapshot--upgrade-from-3-17-2" }
 }
```

And `terraform apply` it.

Also remove the deploy config for that deployment as it is no longer used:

```sh
cd $CUSTOMER
rm -rf $OLD_DEPLOYMENT/
git add .
git commit -m "$CUSTOMER: remove $OLD_DEPLOYMENT deployment"
```

## 12) Open a pull request to commit your changes

```sh
git push origin HEAD
```

And click the provided link to open a pull request in [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed).

**IMPORTANT: DO NOT FORGET TO GET YOUR PR APPROVED AND MERGED**, if you forget then the next person upgrading the instance will have a very bad time.
