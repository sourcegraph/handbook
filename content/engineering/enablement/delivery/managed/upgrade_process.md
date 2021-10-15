# Upgrading a managed instance

This page documents how [Sourcegraph upgrades](#sourcegraph-upgrade) and [machine upgrades](#machine-upgrade) are done for [managed instances](./index.md).
Managed instances configuration is tracked in [`deploy-sourcegraph-managed-instances`](https://github.com/sourcegraph/deploy-sourcegraph-managed).

For basic operations like accessing an instance for these steps, see [managed instances operations](operations.md).
To create a managed instance, see [managed instances creation process](creation_process.md).

- [General setup](#general-setup)
- [Sourcegraph upgrade](#sourcegraph-upgrade)
  - [0) Sourcegraph upgrade setup](#0-sourcegraph-upgrade-setup)
  - [1) Add a banner indicating upgrade is in progress](#1-add-a-banner-indicating-upgrade-is-in-progress)
  - [2) Mark the database as ready-only](#2-mark-the-database-as-ready-only)
  - [3) Create a snapshot of the current deployment](#3-create-a-snapshot-of-the-current-deployment)
  - [4) Initialize the new production deployment](#4-initialize-the-new-production-deployment)
  - [5) Make the database on the new deployment writable](#5-make-the-database-on-the-new-deployment-writable)
  - [6) Upgrade the new deployment](#6-upgrade-the-new-deployment)
  - [7) Recreate the deployment](#7-recreate-the-deployment)
  - [8) Confirm instance health](#8-confirm-instance-health)
  - [9) Switch the load balancer target](#9-switch-the-load-balancer-target)
  - [10) Take down the old deployment](#10-take-down-the-old-deployment)
  - [11) Remove the banner indicating maintenance is in progress](#11-remove-the-banner-indicating-maintenance-is-in-progress)
  - [13) Open a pull request to commit your changes](#13-open-a-pull-request-to-commit-your-changes)
- [Machine upgrade](#machine-upgrade)
  - [0) Machine upgrade setup](#0-machine-upgrade-setup)
  - [1) Prepare for maintainence](#1-prepare-for-maintainence)
  - [2) Prepare resource changes in Terraform](#2-prepare-resource-changes-in-terraform)
  - [3) Spin up an upgraded machine](#3-spin-up-an-upgraded-machine)
  - [4) Prepare the new machine](#4-prepare-the-new-machine)
    - [4.a) Resize the disk](#4a-resize-the-disk)
  - [5) Wrap up the upgrade](#5-wrap-up-the-upgrade)

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
# for API access to port-forwarded frontend
export SRC_ENDPOINT=http://localhost:4444
# see 1password "$CUSTOMER admin account", under "token" field
export SRC_ACCESS_TOKEN=$TOKEN
# currently live instance
export OLD_DEPLOYMENT=$(gcloud compute instances list --project=sourcegraph-managed-${CUSTOMER} | awk 'NR>1 { if ($1 ~ "-red-") print "red"; else print "black"; }')
# the instance we will create
export NEW_DEPLOYMENT=$([ "$OLD_DEPLOYMENT" = "red" ] && echo "black" || echo "red")
```

Make sure your copy of the [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed) repository is up to date:

```sh
git checkout main
git pull origin main
```

## Sourcegraph upgrade

This is the upgrade process for [Sourcegraph releases](https://docs.sourcegraph.com/admin/updates).

There is a ~1h two-part screencast available by @slimsag walks through this whole upgrade process end-to-end, talks about some of the intricacies, future improvements to this process, and more. It is rough / on-the-spot so please disregard the brief and occassional 🐱 meows and crashing noises in the background. These videos reference some customer names, and as such can only be shared with the Sourcegraph team at this time.

- [Part 1](https://drive.google.com/file/d/12ya1CrBZyjbjTIW-nd-TbjC9W95mVFUU/view?usp=sharing)
- [Part 2](https://drive.google.com/file/d/1G-w0JvUEwlU6MfOBjV9KnahUm2mLhzEg/view?usp=sharing)

> NOTE: You do not need to watch the above videos to perform this process, these are for educational purposes only. The steps below may be more up-to-date and accurate than the videos above.

### 0) Sourcegraph upgrade setup

**Follow the [general setup](#general-setup) guide.** Then, set up the appropriate version variables:

```sh
# version to upgrade to - MUST be in format 'v$MAJOR.$MINOR.$PATCH'
export NEW_VERSION=v<sourcegraph_version>
# old version used to verify upgrade
export OLD_VERSION=$(cat ${CUSTOMER}\/${OLD_DEPLOYMENT}\/VERSION)
```

Validate all variables are set:

```sh
./util/validate-env.ts
```

Make sure to use the same shell for all the commands in this guide unless otherwise stated.

Now start a branch for your upgrade:

```sh
git checkout -b $CUSTOMER/upgrade-to-$NEW_VERSION
# all the below steps are documented assuming you are in the customer deployment directory
cd $CUSTOMER
```

Also refer to the [upgrade notes](https://docs.sourcegraph.com/admin/updates/docker_compose) for any additional steps that should be conducted during the update.

### 1) Add a banner indicating upgrade is in progress

Set up access to the frontend by copying this output and running it in another shell:

```sh
echo "gcloud compute start-iap-tunnel default-$OLD_DEPLOYMENT-instance 80 --local-host-port=localhost:4444 --zone us-central1-f --project sourcegraph-managed-$CUSTOMER"
```

Note that an upgrade is being performed:

```sh
../util/set-notice.sh upgrade
```

### 2) Mark the database as ready-only

```sh
../util/set-db-readonly.sh $OLD_DEPLOYMENT true
```

During this time searching will still work, but the site will refuse all database writes, e.g. this will show up in the web UI as:

> [...]: pq: cannot execute INSERT in a read-only transaction

During this time:

- Repositories will not update
- Authentication permissions will not synchronize
- LSIF precise code intel cannot be uploaded
- User settings and site configuration cannot be updated
- Extensions cannot be installed

### 3) Create a snapshot of the current deployment

```sh
../util/create-snapshot.ts $OLD_DEPLOYMENT
git add . && git commit -m "$CUSTOMER: snapshot deployment"
```

This can take anywhere from a minute to several minutes, depending on how large the disk is.

Note the number of snapshots in `terraform.tfvars`, and prune snapshots >5 upgrades old where appropriate.
Make sure to `terraform apply` any additional changes you make.

### 4) Initialize the new production deployment

Copy the old deployment's Docker Compose configuration:

```sh
cp -R $OLD_DEPLOYMENT/ $NEW_DEPLOYMENT/
git add $NEW_DEPLOYMENT/ && git commit -m "$CUSTOMER: set up $NEW_DEPLOYMENT configuration"
```

Initialize the new production deployment (`NEW_DEPLOYMENT`) using the snapshot created in the previous step.
This should only modify the deployment - not recreate it.

```sh
../util/init-deployment.ts $NEW_DEPLOYMENT
git add . && git commit -m "$CUSTOMER: init $NEW_DEPLOYMENT deployment"
```

### 5) Make the database on the new deployment writable

Make the database on the new deployment writable:

```sh
../util/set-db-readonly.sh $NEW_DEPLOYMENT false
```

If you run into errors like:

- `bash: docker: command not found`
- `ERROR: (gcloud.beta.compute.start-iap-tunnel) Error while connecting [4003: 'failed to connect to backend'].`

This might indicate that the instance is not fully set up yet - try again in a minute.

### 6) Upgrade the new deployment

First check that thew new version requires no manual migration steps in [docker-compose upgrade guide](https://docs.sourcegraph.com/admin/updates/docker_compose)

Then, to upgrade the new `$NEW_DEPLOYMENT` deployment to `$NEW_VERSION`:

```sh
VERSION=$NEW_VERSION ../util/update-docker-compose.sh $NEW_DEPLOYMENT/
git --no-pager diff $NEW_DEPLOYMENT
```

Address any merge conflicts in the `$NEW_DEPLOYMENT/` directory if needed.

Also verify that no references remain for the old version - the script does not automatically apply changes to replicas.
For each reference, ensure that the _entire_ service entry is up to date (i.e. not just the version).
You can list references like so (if nothing shows up, you should be good to go):

```sh
cat $NEW_DEPLOYMENT/docker-compose/docker-compose.yaml | grep ${OLD_VERSION#v}
```

Commit and apply the upgrade:

```sh
git add $NEW_DEPLOYMENT/ && git commit -m "$CUSTOMER: upgrade to $NEW_VERSION"
terraform apply
```

### 7) Recreate the deployment

Take down the new `$NEW_DEPLOYMENT` deployment and recreate it (so the startup script runs on a clean OS disk):

```sh
../util/drop-deployment.ts $NEW_DEPLOYMENT
git add . && git commit -m "$CUSTOMER: take down $NEW_DEPLOYMENT"
../util/deploy-deployment.ts $NEW_DEPLOYMENT
git add . && git commit -m "$CUSTOMER: restart $NEW_DEPLOYMENT"
```

### 8) Confirm instance health

Access Grafana and confirm the instance is healthy by verifying no critical alerts are firing, and there has been no large increase in warning alerts:

```sh
gcloud compute start-iap-tunnel default-$NEW_DEPLOYMENT-instance 3370 --local-host-port=localhost:4445 --zone us-central1-f --project sourcegraph-managed-$CUSTOMER
```

If you run into an error like:

```
ERROR: (gcloud.beta.compute.start-iap-tunnel) Error while connecting [4003: 'failed to connect to backend'].
```

This might indicate that the instance is not fully set up yet - try again in a minute.

Ensure that no containers with the wrong version are still running:

```sh
../util/ssh-exec.sh "docker ps --format {{.Image}} | grep ${OLD_VERSION#v}"
```

### 9) Switch the load balancer target

Connect to the new instance using the SOCKS5 proxy and confirm you can access it and view the old version at https://company.sourcegraph.com/site-admin/updates.
Switch over the load balancer:

```sh
../util/retarget-load-balancer.ts $NEW_DEPLOYMENT
git add . && git commit -m "$CUSTOMER: switch load balancer to new target"
```

During this time users will see 500 errors:

> Error: Server Error
> The server encountered a temporary error and could not complete your request.
> Please try again in 30 seconds.

For 1m35s while the `google_compute_network_endpoint` gets destroyed.

### 10) Take down the old deployment

Remove the old `$OLD_DEPLOYMENT` deployment and its data disk:

```sh
../util/drop-deployment.ts $OLD_DEPLOYMENT drop-disk
rm -rf $OLD_DEPLOYMENT/
git add . && git commit -m "$CUSTOMER: remove $OLD_DEPLOYMENT deployment"
```

### 11) Remove the banner indicating maintenance is in progress

Set up access to new frontend by copying this output and running it in another shell:

```sh
echo "gcloud compute start-iap-tunnel default-$NEW_DEPLOYMENT-instance 80 --local-host-port=localhost:4444 --zone us-central1-f --project sourcegraph-managed-$CUSTOMER"
```

Remove the notice previously added to the global user settings:

```sh
../util/set-notice.sh none
```

### 13) Open a pull request to commit your changes

```sh
git push origin HEAD
```

And click the provided link to open a pull request in [`deploy-sourcegraph-managed`](https://github.com/sourcegraph/deploy-sourcegraph-managed).

**IMPORTANT: DO NOT FORGET TO GET YOUR PR APPROVED AND MERGED**, if you forget then the next person upgrading the instance will have a very bad time.

## Machine upgrade

This is the upgrade process for changing the underlying machine for a managed instance.

### 0) Machine upgrade setup

**Follow the [general setup](#general-setup) guide.** Then set up a date to identify your upgrade:

```sh
export DATE=$(date +%m-%d-%Y)
```

Validate all variables are set:

```sh
./util/validate-env.ts
```

Then set up a branch for your changes:

```sh
git checkout -b $CUSTOMER/machine-upgrade-$DATE
# all the below steps are documented assuming you are in the customer deployment directory
cd $CUSTOMER
```

### 1) Prepare for maintainence

Set up access to the frontend by copying this output and running it in another shell:

```sh
echo "gcloud compute start-iap-tunnel default-$OLD_DEPLOYMENT-instance 80 --local-host-port=localhost:4444 --zone us-central1-f --project sourcegraph-managed-$CUSTOMER"
```

Note that maintainence is being performed:

```sh
../util/set-notice.sh maintainence
```

Then, [mark the database as read-only](#2-mark-the-database-as-ready-only).

Create a snapshot:

```sh
../util/create-snapshot.ts $OLD_DEPLOYMENT upgrade-machine-$DATE
git add . && git commit -m "$CUSTOMER: snapshot deployment"
```

This can take anywhere from a minute to several minutes, depending on how large the disk is.

### 2) Prepare resource changes in Terraform

For example, in `terraform.tfvars`:

```diff
- machine_type         = "n1-standard-8"
+ machine_type         = "n1-standard-32"
- data_disk_size       = 250 # GB
+ data_disk_size       = 500 # GB
```

Notes:

- See [Cost estimation: working out the VM type required](cost_estimation.md#working-out-the-vm-type-required) for details about what you can choose for `machine_type`.
- `data_disk_size` can only increase, it can never be decreased.

### 3) Spin up an upgraded machine

Set up configuration for the new machine:

```sh
cp -R $OLD_DEPLOYMENT/ $NEW_DEPLOYMENT/
git add $NEW_DEPLOYMENT/ && git commit -m "$CUSTOMER: set up $NEW_DEPLOYMENT configuration"
```

Initialize the new production deployment (`NEW_DEPLOYMENT`) using the snapshot created in the previous step.
**⚠️ When the tool prompts you to apply, exit the command (DO NOT APPLY THE CHANGES). ⚠️**

```sh
../util/init-deployment.ts $NEW_DEPLOYMENT upgrade-machine-$DATE
```

We want to make sure our resource changes _only apply to our new machine_, not both machines.
Run the following to spin up the new machine instead:

```sh
terraform apply \
  -target="google_compute_disk.primary[\"$NEW_DEPLOYMENT\"]" \
  -target="google_compute_instance.primary[\"$NEW_DEPLOYMENT\"]"
```

Make sure the plan indicates `0 to change` before applying. Commit your changes:

```sh
git add . && git commit -m "$CUSTOMER: init targetted $NEW_DEPLOYMENT deployment"
```

### 4) Prepare the new machine

[Make the database on the new deployment writeable](#5-make-the-database-on-the-new-deployment-writable).

If you changed the disk size, make sure to [resize the disk](#4-a-resize-the-disk).

#### 4.a) Resize the disk

Special steps are needed to perform a disk upgrade (i.e. if you [changed the `data_disk_size` variable](#prepare-resource-changes-in-terraform)).
Shut down the deployment:

```sh
../util/ssh-exec.sh "cd /deployment/docker-compose && docker-compose down"
```

Take a look at our mounted disk, `/dev/sdb`:

```sh
../util/ssh-exec.sh "df -Th /dev/sdb"
```

It should have `Type: ext4` and `Mounted on: /mnt/docker-data`. Notice that the `Size` is not your upgrade disk size:

```sh
Filesystem     Type      Size  Used Avail Use% Mounted on
/dev/sdb       ext4      246G   37G  209G  15% /mnt/docker-data
```

To make use of the new disk space, we need to extend the filesystem on the `/dev/sdb` disk:

```sh
../util/ssh-exec.sh "resize2fs /dev/sdb"
```

Verify the file system is extended - you should now see that the `Size` matches your upgraded disk size:

```sh
../util/ssh-exec.sh "df -Th /dev/sdb"
```

Restart the instance:

```sh
../util/ssh-exec.sh "cd /deployment/docker-compose && docker-compose up -d"
```

For reference, the above steps were adapted from [Working with persistent disks](https://cloud.google.com/compute/docs/disks/working-with-persistent-disks).

### 5) Wrap up the upgrade

1. [Confirm instance health](#8-confirm-instance-health).
2. [Switch the load balancer target](#9-switch-the-load-balancer-target) - when prompted to apply, exit the command (do not apply the changes) and continue to the next step. This will prevent Terraform from attempting to apply resource changes to the old machine - instead, we just update the load balancer and remove the old instance at the same time.
3. [Take down the old deployment](#10-take-down-the-old-deployment)
4. [Remove the maintainence banner](#11-remove-the-banner-indicating-maintenance-is-in-progress)
5. [Open a pull request](#13-open-a-pull-request-to-commit-your-changes)
