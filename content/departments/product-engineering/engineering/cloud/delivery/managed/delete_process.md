# Deleting a managed instance

Deleting a managed instance is initiated by a CE team member by creating an teardown request. There are a few logical steps to follow.

1. Confirm the request with the CE Team. Data is not able to be recovered after this process is performed.

1. Destroy the customer's managed instance infrastructure with Terraform.
1. Destroy the customer's Terraform remote state.
1. Open a PR against deploy-sourcegraph-managed.
1. Delete the DNS entry for the managed instance. 
1. Update documentation to remove references of the managed instance.



## Confirm teardown request with the CE Team:

Send a message to the #ce team's Slack channel. An example could be:

```
Hello, @ce! The <customer name> managed instance is scheduled for teardown in 1 hour. If this is in error, please notify me immediately.
Teardown request ticket: <ticket link>
```


## Destroy the managed instance infrastructure
**Important!** Always start with a fresh terminal session to ensure you do not have any conflicting environment variables.

### Setup
Clone or navigate to the `sourcegraph/deploy-sourcegraph-managed` repository
1. Navigate into the repository
  * `cd deploy-sourcegraph-managed`
1. Pull in the latest changes
  * `git checkout main`
  * `git pull` 

1. Create a branch for the teardown
  * `git checkout -b $CUSTOMER/destroy-managed-instance`
1. Setup the environment:
  * `export TF_VAR_opsgenie_webhook=<value from 1Password>`
  * `export CUSTOMER=<customer>`

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

>Error: Instance cannot be destroyed
>
>  on infrastructure.tf line 539:
>
> 539: resource "google_kms_crypto_key" "key" {
>
>Resource google_kms_crypto_key.key has lifecycle.prevent_destroy set, but the
>plan calls for this resource to be destroyed. To avoid this error and continue
>with the plan, either disable lifecycle.prevent_destroy or reduce the scope of
>the plan using the -target flag.


### Destroy the infrastructure
This will remove all GCP infrastructure execept the Terraform remote state GCP bucket associated with the customer, which is
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

**Title:** Appfolio: Teardown Managed Instance
*Link tear-down request ticket in the description*

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

Edit `sourcegraph.managed.tf` remove the cloudflare_record resource for $CUSTOMER.


### Verify the change
```
git diff
```

### Commit the change
```
git add sourcegraph.managed.tf
git commit -m “managed-instance-${CUSTOMER}: Remove DNS entry”
```

### Open a pull request
```
git push origin HEAD
```

For the Pull Request:
**Title:** managed-instance-appfolio: Remove DNS entry
*Link tear-down request ticket in the description*


Wait for checks to pass and approval, merge pull request


### Apply the change
Check .tool-versions for correct Terraform version

```
git checkout main
git pull
terraform apply
```

## Update documentation to remove references of the managed instance

###  Updating the upgrade template
Remove customer from managed instance upgrade template. Avoid mentioning the customer name directly, the handbook is a public repository.

The template is located in [content/departments/product-engineering/engineering/process/releases/upgrade_managed_issue_template](../../departments/product-engineering/engineering/process/releases/upgrade_managed_issue_template).

### Updating outstanding tracking issues
Search for any open upgrade tracking issues, edit the description to remove the customer’s entry. No need to upgrade if there isn’t anything to upgrade!

This [Github Query](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Arelease-tracking) may be helpful.


## Close the teardown request ticket
The teardown request ticket should now have references back to the pull requests showing the necessary changes.
At this time the teardown request ticket from CE can be marked as Completed.
