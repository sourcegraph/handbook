# Deleting a managed instance

<span class="badge badge-note">SOC2/CI-41</span>

**For MI 1.1, see the new process [here](v1.1/mi1-1_delete_process.md).**

## How to request

1. Create a new issue using [this template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fdevops&template=managed-instance-teardown.md&title=)
2. Notify Cloud team in [#cloud] channel, linking to the issue

SLAs for this can be found with our other [managed instance SLAs](index.md#slas-for-managed-instances).

---

## Deletion guidance for engineering

Deleting a managed instance is initiated by a CE team member by creating an teardown request. There are a few logical steps to follow.

1.  Confirm the request with the CE Team. Data is not able to be recovered after this process is performed.

1.  Destroy the customer's managed instance infrastructure with Terraform.
1.  Destroy the customer's Terraform remote state.
1.  Delete GCP Disk Snapshots
1.  Delete the DNS entry and GCP Project for the managed instance.
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

### Allow the GCP KMS Crypto Key to be deleted

```
sed -i '' 's/    prevent_destroy = true/    prevent_destroy = false/g' infrastructure.tf
```

By default the KMS Crypto Key is prevented from being deleted. This must be changed in order for Terraform to remove all resources.
Without this change you will see the following error:

> Error: Instance cannot be destroyed
>
> on infrastructure.tf line 539:
>
> 539: resource "google_kms_crypto_key" "key" {
>
> Resource google_kms_crypto_key.key has lifecycle.prevent_destroy set, but the
> plan calls for this resource to be destroyed. To avoid this error and continue
> with the plan, either disable lifecycle.prevent_destroy or reduce the scope of
> the plan using the -target flag.

### Destroy the infrastructure

This will remove all GCP infrastructure except the Terraform remote state GCP bucket associated with the customer, which is
handled in the next step.

```
terraform destroy
```

## Destroy the customer's Terraform remote state

### Disable 'prevent_destroy'

The default behavior of a GCP bucket is to prevent the destruction of the bucket through the API. It is necessary to remove this protection.

```
cd gcp-tfstate
sed -i '' 's/resource "google_storage_bucket" "tfstate" {/resource "google_storage_bucket" "tfstate" {\nforce_destroy = true/g' gcp-tfstate.tf
terraform apply
```

Once `force_destroy` has been set to "true", Terraform is able to remove the GCP Bucket.

```
terraform destroy
```

## Commit the changes to the deploy-sourcegraph-managed repo

### Prepare the changeset

```
cd ../ # to deploy-sourcegraph-managed/$CUSTOMER
git add . && git commit -m “${CUSTOMER}: change flags to force resource removal”
cd ../ # to deploy-sourcegraph-managed
git rm -r $CUSTOMER && git commit -m “${CUSTOMER}: remove managed instance infrastructure”
git push origin HEAD
```

### Create the Pull Request

**Title:** managed-instance-$CUSTOMER: Teardown Managed Instance

_Link tear-down request issue in the description_

## Delete Snapshots

Scheduled snapshots are not managed by Terraform. In order to remove the GCP project, remaining snapshots must be deleted.

**Please double-check the value of the $CUSTOMER environment variable in your current session.**

```
gcloud compute snapshots list --project=sourcegraph-managed-$CUSTOMER | grep "data" | awk '{print $1}' | xargs gcloud compute snapshots delete --project=sourcegraph-managed-$CUSTOMER --quiet
```

## Remove the GCP Project

### Checkout the sourcegraph/infrastructure repository and ensure it is up-to-date

```
git checkout main
git pull
```

### Create a new branch

```
git checkout -b managed-instance/${CUSTOMER}/teardown-project
```

### Remove project variable

```
cd gcp/projects
```

Edit `terraform.tfvars` to remove the project variable corresponding to $CUSTOMER.

### Remove the GCP project

```
terraform apply
```

**Review the proposed changes carefully.**

### Commit the change

To prevent an initial state circular depenency, the Terraform state for GCP projects is committed as a file into the infrastructure repository.
Make sure to include this in the pull request.

```
git add terraform.tfvars terraform.tfstate
git commit -m "managed-instance-${CUSTOMER}: Remove GCP project"
```

### Open a pull request

```
git push origin HEAD
```

Open the PR:
**Title:** managed-instance-$CUSTOMER: Remove GCP Project

_Link tear-down request issue in the description_

Wait for checks to pass, approval and then merge pull request.

## Remove the DNS Entry

### Checkout the sourcegraph/infrastructure repository and ensure it is up-to-date

```
git checkout main
git pull
```

### Create a new branch

```
git checkout -b managed-instance/${CUSTOMER}/teardown
```

### Remove the DNS entry

```
cd dns
```

Edit `sourcegraph.managed.tf` to remove the cloudflare_record resource for $CUSTOMER.

### Commit the change

```
git add sourcegraph.managed.tf
git commit -m "managed-instance-${CUSTOMER}: Remove DNS entry"
cd ../ # back to the infrastructure/ repo root directory
```

### Open a pull request

```
git push origin HEAD
```

Open the PR:
**Title:** managed-instance-$CUSTOMER: Remove DNS entry

_Link tear-down request issue in the description_

Wait for checks to pass, approval, and merge pull request.

### Update the local main branch

```
git checkout main
git pull
```

### Remove the DNS the change

Check .tool-versions for correct Terraform version

```
cd infrastructure/dns
cat .tool-versions
terraform apply
cd ../ # back to the repo root directory
```

## Update documentation to remove references of the managed instance

### Updating outstanding tracking issues

Search for any open upgrade tracking issues, edit the description to remove the customer’s entry. No need to upgrade if there isn’t anything to upgrade!

This [Github Query](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Arelease-tracking) may be helpful.

## Close teardown request issue

<span class="badge badge-note">SOC2/CI-41</span>

> NOTE: to ensure auditability of the teardown SLA, it is important to execute these steps directly after tearing down a managed instance.

1. Validate that the teardown request issue has references to the pull requests showing the necessary changes. If any are missing, update the PR descriptions with a link to the teardown request issue.
1. Close the teardown request issue.

[#cloud-devops]: https://sourcegraph.slack.com/archives/C02KX975BDG
