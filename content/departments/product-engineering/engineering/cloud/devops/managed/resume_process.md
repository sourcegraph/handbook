# Resuming a managed instance

This page documents how to resume suspended [managed instances](./index.md). This is useful when Sales team would like to re-engage a customer again where their managed instance was suspended.

Managed instances configuration is tracked in [deploy-sourcegraph-managed].

For basic operations like accessing an instance for these steps, see [managed instances operations](operations.md).

- [General setup](#general-setup)
- [Sourcegraph resume](#sourcegraph-resume)
  - [0) Sourcegraph resume setup](#0-sourcegraph-resume-setup)
  - [1) Prepare terraform module](#1-prepare-terraform-module)
  - [2) Make database writable](#2-make-database-writable)
  - [3) Verify instance heath](#3-verify-instance-heath)
  - [4) Commit your change](#4-commit-your-change)
  - [5) Upgrade as needed](#5-upgrade-as-needed)

## General setup

Managed instances configuration is tracked in [deploy-sourcegraph-managed] - make sure you have the latest revision of this repository checked out. For basic operations like accessing an instance for these steps, see [managed instances operations](operations.md).

First, ensure you have the prerequisites installed and up-to-date:

- [Terraform CLI](https://www.terraform.io/)
- [Deno CLI](https://deno.land/) (used for scripting upgrades)
- [Comby CLI](https://comby.dev/) (used for rewriting configuration)
- [jq](https://stedolan.github.io/jq/)

Many of the following commands in this guide, as well as the commands [operations](./operations.md), use environment variables. Export the appropriate values for the upgrade so you don't lose track:

```sh
# name of customer deployment (should match folder)
export CUSTOMER=<customer_or_instance_name>

# the previous active deployment, either `red` or `black`
export CURRENT_DEPLOYMENT=$(gcloud compute snapshots list --format json --sort-by '~creationTimestamp' --limit 1 | jq -r '.[0].name' | awk -F: '{ if ($1 ~ "-red-") {print "red"} else {print "black"} }')

# The value can be found in the Managed Instances vault
# https://my.1password.com/vaults/nwbckdjmg4p7y4ntestrtopkuu/allitems/d64bhllfw4wyybqnd4c3wvca2m
export TF_VAR_opsgenie_webhook=<OpsGenie Webhook value>

export TF_VAR_cf_origin_cert_base64=$(gcloud secrets versions access latest --project=sourcegraph-dev --secret="SOURCEGRAPH_WILDCARD_CERT" | base64)
export TF_VAR_cf_origin_private_key_base64=$(gcloud secrets versions access latest --project=sourcegraph-dev --secret="SOURCEGRAPH_WILDCARD_KEY" | base64)
```

Make sure your copy of the [deploy-sourcegraph-managed]() repository is up to date:

```sh
git checkout main
git pull origin main
```

## Sourcegraph resume

### 0) Sourcegraph resume setup

**Follow the [general setup](#general-setup) guide.** Then, set up the appropriate version variables:

Make sure to use the same shell for all the commands in this guide unless otherwise stated.

Now start a branch for your upgrade:

```sh
git checkout -b $CUSTOMER/resume-instance
# all the below steps are documented assuming you are in the customer deployment directory
cd $CUSTOMER
```

### 1) Prepare terraform module

Uncomment out the following resources in `infrastructure.tf`.

- `google_compute_network_endpoint.primary`
- `google_monitoring_uptime_check_config.primary`
- `google_monitoring_alert_policy.primary`

In `terraform.tfvars`, remove the emply `deployments` list and empty `disks` map, uncomment the previous `deployments` and `disks` varible.

Update `terraform.tfvars`, replace `<snapshot_name>` with the snapshot taken during suspend process. Depending on the previous active deployment, the disk to restore from may vary. Run `gcloud compute snapshots list` to obtain the snapshot name.

If the `$CURRENT_DEPLOYMENT` is `red`, vice versa.

```tf
disks = {
  red = { from_snapshot = "default-red-data-disk--upgrade-from-<>" }
}
```

```sh
terraform plan -out resume.plan
```

If everything looks good to you, apply the plan

```sh
terraform apply resume.plan
```

### 2) Make database writable

You should ssh into the deployment and wait until postgres services are healthy ([instructions](operations.md#ssh-access)), then run the following.

```sh
../util/set-db-readonly.sh $CURRENT_DEPLOYMENT false
```

### 3) Verify instance heath

Consult the [upgrade process](upgrade_process.md#8-confirm-instance-health) for more detail.

### 4) Commit your change

```sh
git add . && git commit -m "$CUSTOMER: resume instance" && git push origin HEAD
```

And click the provided link to open a pull request in [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed).

**IMPORTANT: DO NOT FORGET TO GET YOUR PR APPROVED AND MERGED**, if you forget then the next person touching the instance will have a very bad time.

#### 5) Upgrade as needed

Check if the instance is running the latest version of Sourcegraph. First, obtain the current version

```sh
cat $CURRENT_DEPLOYMENT/VERSION
```

Go to [deploy-sourcegraph-docker], and compare with the latest tag.

Follow the [upgrade process](./upgrade_process.md) as needed

[deploy-sourcegraph-managed]: https://github.com/sourcegraph/deploy-sourcegraph-managed
[deploy-sourcegraph-docker]: https://github.com/sourcegraph/deploy-sourcegraph-docker/tags
