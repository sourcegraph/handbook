# Deleting a managed instance

<span class="badge badge-note">SOC2/CI-41</span>

## How to request

1. Create a new issue using [this template](../../index.md#managed-instance-requests)
2. Notify Cloud in [#cloud] channel and cc `@cloud-support`, linking to the issue

SLAs for this can be found with our other [managed instance SLAs](../index.md#slas-for-managed-instances).

---

## Deletion guidance for engineering

Deleting a managed instance is initiated by a CE team member by creating an teardown request. There are a few logical steps to follow.

1.  Confirm the request with the CE Team. Data is not able to be recovered after this process is performed.

1.  Destroy the customer's managed instance infrastructure with Terraform.
1.  Delete GCP Disk Snapshots
1.  Delete GCP Project for the managed instance.
1.  Remove audit monitoring from GCP project.
1.  Update documentation to remove references of the managed instance.

## Confirm teardown request with the CE Team:

Send a message to the #ce team's Slack channel. An example could be:

```
Hello, @ce! The <customer name> managed instance is scheduled for teardown in 1 hour. If this is in error, please notify me immediately.
Teardown request issue: <issue link>
```

## Destroy the managed instance infrastructure

**Important!** Always start with a fresh terminal session to ensure you do not have any conflicting environment variables.

### Setup

Clone or navigate to the `sourcegraph/deploy-sourcegraph-managed` repository

1.  Navigate into the repository

    - `cd deploy-sourcegraph-managed`

1.  Pull in the latest changes

    - `git checkout main`
    - `git pull`

1.  Setup the environment:

    - `export CUSTOMER=<customer>`
    - `source $CUSTOMER/tfvars.env`

1.  Create a branch for the teardown

    - `git checkout -b $CUSTOMER/destroy-managed-instance`

1. Authenticate to the project:

    - `gcloud auth application-default login --project sourcegraph-managed-$CUSTOMER`

### Navigate to the customer's managed instance directory

```sh
cd $CUSTOMER
```

### Allow the GCP KMS Crypto Key and CloudSQL instance to be deleted

By default, the KMS Crypto Key and CloudS QL instance is prevented from being deleted. This must be changed in order for Terraform to remove all resources.

- Disable Cloud SQL delete protection by editing the `infrastructure.tf`:

  ```diff
  module "managed_instance" {
  +  cloud_sql_deletion_protection  = false
     source                         = "../modules/terraform-managed-instance-new"
  }
  ```

- Disable KMS key delete protection:

  ```sh
  sed -i '' 's/    prevent_destroy = true/    prevent_destroy = false/g' ../modules/terraform-managed-instance-new/infrastructure.tf
  ```

- Apply changes:

  ```sh
  terraform init # switch to local module
  terraform apply
  ```

### Destroy the infrastructure

This will remove all GCP infrastructure except the Terraform remote state and GCP project.

```sh
terraform destroy

# Restore module after destroying instance
git restore ../modules/terraform-managed-instance-new/infrastructure.tf
```

## Delete snapshots

Scheduled snapshots are not managed by Terraform. In order to remove the GCP project, remaining snapshots must be deleted.

**Please double-check the value of the $CUSTOMER environment variable in your current session.**

```sh
gcloud compute snapshots list --project=sourcegraph-managed-$CUSTOMER | grep "data" | awk '{print $1}' | xargs gcloud compute snapshots delete --project=sourcegraph-managed-$CUSTOMER --quiet
```

## Remove the GCP project

```sh
# Under $CUSTOMER directory
cd project

terraform init # switch to local module
terraform destroy -var-file=../terraform.tfvars
```

## Remove customer files

```sh
# Back to the repository root
cd ../../
rm -rf $CUSTOMER
```

### Commit the change

To prevent an initial state circular dependency, the Terraform state for GCP projects is committed as a file into the infrastructure repository.
Make sure to include this in the pull request.

```
git add $CUSTOMER
git commit -m "managed-instance-${CUSTOMER}: Remove GCP infrastructure and project"
git push origin HEAD
```

**Review the proposed changes carefully.**

### Create the pull request

**Title:** managed-instance-$CUSTOMER: Remove GCP infrastructure and project

_Link tear-down request issue in the description_

To get your "Test plan":

```sh
gcloud projects describe sourcegraph-managed-$CUSTOMER
```

Wait for checks to pass, approval and then merge pull request.

## Remove infrastructure monitoring

> NOTE: This is typically done through [GitHub Actions every 15 minutes](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/apply_monitoring.yml), no manual intervention needed in regular situations.

In the repository root of the [sourcegraph/deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed):

```sh
cd monitoring
terraform apply
```

## Remove audit monitoring from removed GCP project

> NOTE: This is typically done through [GitHub Actions every 15 minutes](https://github.com/sourcegraph/infrastructure/blob/main/.github/workflows/apply_mi_security_logging.yml), no manual intervention needed in regular situations.

In the repository root of the [sourcegraph/infrastructure](https://github.com/sourcegraph/infrastructure):

```sh
cd security/auto-discovery
terraform apply
```

## Update documentation to remove references of the managed instance

### Updating outstanding tracking issues

Search for any open upgrade tracking issues, edit the description to remove the customer’s entry. No need to upgrade if there isn’t anything to upgrade!

This [GitHub Query](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Arelease-tracking) may be helpful.

## Close teardown request issue

> NOTE: To ensure auditability of the teardown SLA, it is important to execute these steps directly after tearing down a managed instance.

1. Validate that the teardown request issue has references to the pull requests showing the necessary changes. If any are missing, update the PR descriptions with a link to the teardown request issue.
1. Close the teardown request issue.
