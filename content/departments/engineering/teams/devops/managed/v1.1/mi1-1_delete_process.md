# Deleting a managed instance

<span class="badge badge-note">SOC2/CI-41</span>

## How to request

1. Create a new issue using [this template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fdevops&template=managed-instance-teardown.md&title=)
2. Notify Cloud in [#cloud] channel, linking to the issue

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

1.  Create a branch for the teardown

- `git checkout -b $CUSTOMER/destroy-managed-instance`

1.  Setup the environment:

- `export TF_VAR_opsgenie_webhook=<value from 1Password>`
- `export CUSTOMER=<customer>`

### Navigate to the customer's managed instance directory

```
cd $CUSTOMER
```

### Allow the GCP KMS Crypto Key and CloudSQL instance to be deleted

- add extra variables in

```sh
module "managed_instance" {
  cloud_sql_deletion_protection  = false
  kms_crypto_key_prevent_destroy = false
  source                     = ...
  (..)
}
```

- apply changes

```sh
terraform apply
```

By default the KMS Crypto Key and CloudSQL instance is prevented from being deleted. This must be changed in order for Terraform to remove all resources.

### Destroy the infrastructure

This will remove all GCP infrastructure except the Terraform remote state and GCP project.

```
terraform destroy
```

## Remove the project from the monitoring project

```
cd monitoring/
sed -i 'sourcegraph-managed-$CUSTOMER/d' variables.tf # may need gsed for MacOS
terraform apply
```

## Delete Snapshots

Scheduled snapshots are not managed by Terraform. In order to remove the GCP project, remaining snapshots must be deleted.

**Please double-check the value of the $CUSTOMER environment variable in your current session.**

```
gcloud compute snapshots list --project=sourcegraph-managed-$CUSTOMER | grep "data" | awk '{print $1}' | xargs gcloud compute snapshots delete --project=sourcegraph-managed-$CUSTOMER --quiet
```

## Remove the GCP Project

```
cd gcp/projects
```

Edit `terraform.tfvars` to remove the project variable corresponding to $CUSTOMER.

```
terraform apply
```

### Commit the change

To prevent an initial state circular depenency, the Terraform state for GCP projects is committed as a file into the infrastructure repository.
Make sure to include this in the pull request.

```
cd ..
git add .
git commit -m "managed-instance-${CUSTOMER}: Remove GCP infrastructure and project"
```

**Review the proposed changes carefully.**

### Create the Pull Request

**Title:** managed-instance-$CUSTOMER: Teardown Managed Instance

_Link tear-down request issue in the description_

### Open a pull request

```
git push origin HEAD
```

Open the PR:
**Title:** managed-instance-$CUSTOMER: Teardown Managed Instance

_Link tear-down request issue in the description_

Wait for checks to pass, approval and then merge pull request.

### Open a pull request

```
git push origin HEAD
```

## Remove audit monitoring from removed GCP project

[infrasctructure repository](https://github.com/sourcegraph/infrastructure)

```
cd security/auto-discovery
terraform apply
```

## Update documentation to remove references of the managed instance

### Updating the upgrade template

Remove customer from managed instance upgrade template. **Avoid mentioning the customer name directly**, the handbook is a public repository.

The template is located in [handbook/content/departments/engineering/dev/process/releases/upgrade_managed_issue_template](../../../dev/process/releases/upgrade_managed_issue_template.md).

### Updating outstanding tracking issues

Search for any open upgrade tracking issues, edit the description to remove the customer’s entry. No need to upgrade if there isn’t anything to upgrade!

This [Github Query](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Arelease-tracking) may be helpful.

## Close teardown request issue

> NOTE: to ensure auditability of the teardown SLA, it is important to execute these steps directly after tearing down a managed instance.

1. Validate that the teardown request issue has references to the pull requests showing the necessary changes. If any are missing, update the PR descriptions with a link to the teardown request issue.
1. Close the teardown request issue.
