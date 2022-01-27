# Suspending a managed instance

This page documents how suspension of managed instances are done for [managed instances](./index.md). This is useful when Sales team would like to re-engage a customer at a later and they already have a managed instance provisioned. We will tear off most resources while still keeping the persistent data (disk snapshot) around.

Managed instances configuration is tracked in [`deploy-sourcegraph-managed-instances`](https://github.com/sourcegraph/deploy-sourcegraph-managed).

For basic operations like accessing an instance for these steps, see [managed instances operations](operations.md).

- [General setup](#general-setup)
- [Sourcegraph suspend](#sourcegraph-suspend)
  - [0) Sourcegraph suspend setup](#0-sourcegraph-suspend-setup)
  - [1) Mark the database as ready-only](#1-mark-the-database-as-read-only)
  - [2) Create a snapshot of the current deployment](#2-create-a-snapshot-of-the-current-deployment)
  - [3) Remove some resources](#3-remove-some-resources)
  - [4) Wrapping up](#4-wrapping-up)

## General setup

Managed instances configuration is tracked in [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed) - make sure you have the latest revision of this repository checked out. For basic operations like accessing an instance for these steps, see [managed instances operations](operations.md).

First, ensure you have the prerequisites installed and up-to-date:

- [Terraform CLI](https://www.terraform.io/)
- [Deno CLI](https://deno.land/) (used for scripting upgrades)
- [Comby CLI](https://comby.dev/) (used for rewriting configuration)
- [jq](https://stedolan.github.io/jq/)

Many of the following commands in this guide, as well as the commands [operations](./operations.md), use environment variables. Export the appropriate values for the upgrade so you don't lose track:

```sh
# name of customer deployment (should match folder)
export CUSTOMER=<customer_or_instance_name>
export CURRENT_DEPLOYMENT=$(gcloud compute instances list --project=sourcegraph-managed-${CUSTOMER} | grep -v "executors" | awk 'NR>1 { if ($1 ~ "-red-") print "red"; else print "black"; }')
```

Make sure your copy of the [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed) repository is up to date:

```sh
git checkout main
git pull origin main
```

## Sourcegraph suspend

### 0) Sourcegraph suspend setup

**Follow the [general setup](#general-setup) guide.** Then, set up the appropriate version variables:

Make sure to use the same shell for all the commands in this guide unless otherwise stated.

Now start a branch for your upgrade:

```sh
git checkout -b $CUSTOMER/suspend-instance
# all the below steps are documented assuming you are in the customer deployment directory
cd $CUSTOMER
```

### 1) Mark the database as ready-only

```sh
../util/set-db-readonly.sh $CURRENT_DEPLOYMENT true
```

### 2) Create a snapshot of the current deployment

```sh
../util/create-snapshot.ts $CURRENT_DEPLOYMENT
git add . && git commit -m "$CUSTOMER: snapshot deployment"
```

This can take anywhere from a minute to several minutes, depending on how large the disk is.

Note the number of snapshots in `terraform.tfvars`, and prune snapshots >5 upgrades old where appropriate.
Make sure to `terraform apply` any additional changes you make.

### 3) Remove some resources

Comment out the `deployments` list and `disks` map in `terraform.tfvars` (this makes whoever is going to resume the instance life easier), then paste below snippet into the file.

```tf
deployments = []
disks       = {}
```

Comment out the following resources in `infrastructure.tf`.

- `google_compute_network_endpoint.primary`
- `google_monitoring_uptime_check_config.primary`
- `google_monitoring_alert_policy.primary`

```sh
terraform plan && terraform apply
```

### 4) Wrapping up

```sh
git add . && git commit -m "$CUSTOMER: suspend instance" && git push origin HEAD
```

And click the provided link to open a pull request in [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed).

**IMPORTANT: DO NOT FORGET TO GET YOUR PR APPROVED AND MERGED**, if you forget then the next person touching the instance will have a very bad time.
