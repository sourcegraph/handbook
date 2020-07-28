# Upgrading a managed instance

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

## 1) Add a banner indicating scheduled maintenance is in progress

Add to the global user settings:

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

Mark the database as read-only:

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

Edit `deploy-sourcegraph-managed/$CUSTOMER/terraform.tfvars` to create a snapshot of the current deployment:

```diff
 load_balancer_target = "red"
 deployments = ["red"]
 disks = {
     red = { from_snapshot = null }
 }
+snapshots = {
+    upgrade-from-3-17-2 = { from_disk = "default-red-data-disk" }
+}
```

Make sure the version (`3-17-2`) describes the current version of the instance, and `from_disk` is correct, then `terraform apply` it to create the snapshot. This can take anywhere from a minute to several minutes, depending on how large the disk is.

## 4) Initialize the new production deployment

Initialize the new `black` production deployment using the snapshot created in the previous step, by editing `deploy-sourcegraph-docker/$CUSTOMER/terraform.tfvars` with something like:

```diff
 load_balancer_target = "red"
-deployments = ["red"]
+deployments = ["red", "black"]
 disks = {
     red = { from_snapshot = null }
     black = { from_snapshot = "default-red-data-disk-snapshot--upgrade-from-3-17-2" }
 }
 snapshots = {
     upgrade-from-3-17-2 = { from_disk = "default-red-data-disk" }
 }
```

Make sure to use the right `red` / `black` in both the new deployment name and the `from_snapshot` value. Similarly, change the `from_snapshot` value to match the snapshot you previously took.

Then in `deploy-sourcegraph-docker/$CUSTOMER` copy the `red` deployment's Docker Compose configuration:

```sh
cp -R red/ black/
git add black/
git commit -m 'cp -R red/ black/'
```

Then `terraform apply` to update the metadata. This should only modify the deployment - not recreate it.

## 5) Make the database on the new deployment writable

On the _new_ deployment to be upgraded, make the database writable:

```sh
docker exec -it pgsql psql -U sg -c 'set transaction read write; ALTER DATABASE sg SET default_transaction_read_only = false;'
```

## 6) Upgrade the new deployment

First check the new version at https://docs.sourcegraph.com/admin/updates/docker_compose requires no manual migration steps.

Then, to upgrade the new `black` deployment to 3.18.0:

```sh
cd deploy-sourcegraph-docker/$CUSTOMER
VERSION=v3.18.0 ../update-docker-compose.sh black/
# Address any merge conflicts in black/ if needed.
git add black/
git commit -m 'update to v3.18.0'
```

Then `terraform apply`.

## 7) Recreate the deployment

Take down the new `black` deployment:

```diff
 load_balancer_target = "red"
-deployments = ["red", "black"]
+deployments = ["red"]
```

`terraform apply` and recreate it (so the startup script runs on a clean OS disk):

```diff
 load_balancer_target = "red"
-deployments = ["red"]
+deployments = ["red", "black"]
```

## 8) Confirm instance health

Access Grafana and confirm the instance is healthy.

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

Remove the old `red` deployment and its data disk:

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

