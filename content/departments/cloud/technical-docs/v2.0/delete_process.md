# Delete a Cloud instance

## Option 1 - automated deletion (recommended)

```sh
export SLUG=company
export ENVIRONMENT=prod
```

```sh
gh workflow run mi_delete.yml -f environment=$ENVIRONMENT -f customer=$SLUG
```

Upon completion, edit the PR desciprtion and reference the teardown GitHub issue. Then merge it.

## Option 2 - manual deletion

This is the fallback option when GitHub Actions is experiencing an outage or the automated operation failed and require manual actions.

### Prereq

Follow https://github.com/sourcegraph/controller#installation to install `mi2`

```sh
git clone https://github.com/sourcegraph/cloud
cd cloud
```

Install `mi2` binary

```sh
go install ./cmd/mi2/
```

### Steps

> See flow chart https://app.excalidraw.com/s/4Dr1S6qmmY7/2wUSD4kIxRo

1. [Set environment variables](#Set-environment-variables)
1. [Check out a new branch](#Check-out-a-new-branch)
1. [Modify instance config to use TFC cli mode](#modify-instance-config-to-use-tfc-cli-mode)
1. [Remove workload](#remove-workload)
1. [Disable delete protection](#disable-delete-protection)
1. [Remove GKE backups and restores](#removes-gke-backups-and-restores)
1. [Destroy infrastructure - destroy cdktf stacks](#destroy-infrastructure---destroy-cdktf-stacks)
1. [Delete TFC workspaces](#delete-tfc-workspaces)
1. [Commit your changes](#commit-your-changes)

#### Set environment variables

> Sharing `TF_TOKEN_app_terraform_io` is only temporary, this is expected to change in the future.

Bash

```sh
export SLUG=company
export DOMAIN=company.sourcegraph.com
export ENVIRONMENT=dev
export TF_TOKEN_app_terraform_io=$(gcloud secrets versions access latest --project=sourcegraph-secrets --secret=TFC_TEAM_TOKEN)
export INSTANCE_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.metadata.name')
```

Fish

```sh
set -x SLUG company
set -x DOMAIN company.sourcegraph.com
set -x ENVIRONMENT dev
set -x TF_TOKEN_app_terraform_io (gcloud secrets versions access latest --project=sourcegraph-secrets --secret=TFC_TEAM_TOKEN)
set -x INSTANCE_ID (mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.metadata.name')
```

#### Check out a new branch

```sh
git checkout -b $SLUG/delete-instance
```

#### Modify instance config to use TFC cli mode

Change the Terraform Cloud run mode to CLI-driven
Note: this will remove VCS trigger from Terraform Cloud workspaces for this instance!

```sh
mi2 instance edit --jq '.spec.debug.tfcRunsMode = "cli"' --slug $SLUG -e $ENVIRONMENT
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/terraform/stacks/tfc
terraform init && terraform apply -auto-approve
```

#### Remove workload

```sh
# gracefully remove unmanaged resources, e.g. GKE Backup
mi2 instance destroy --slug $SLUG -e $ENVIRONMENT -auto-approve

# deletes namespace and Network Endpoint Group Health check
cd kubernetes
mi2 instance workon -e $ENVIRONMENT --slug $SLUG -exec
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl delete -f -
```

#### Disable delete protection

```sh
# delete sql protection
mi2 instance edit --jq '.spec.debug.enableDeletionProtection = false' -s $SLUG -e $ENVIRONMENT
mi2 instance edit --jq '.spec.debug.enableAlerting = false' -s $SLUG -e $ENVIRONMENT
mi2 instance tfc deploy -s $SLUG -e $ENVIRONMENT -auto-approve -force-ignore-stack-dependencies -target sql -target monitoring
```

#### Destroy infrastructure - destroy cdktf stacks

> the stack list may be out-of-date, run `npx --yes cdktf-cli@0.13.3` under the instance root in case things are not working as intented

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
mi2 instance tfc destroy-all -auto-approve
```

> **NOTE**: If you encounter errors like `Unsupported attribute`, do `mi2 instance tfc deploy -auto-approve` and try again.

#### Delete TFC workspaces

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/terraform/stacks/tfc
terraform init && terraform destroy -auto-approve
```

#### Commit your changes

```sh
rm -rf environments/$ENVIRONMENT/deployments/$INSTANCE_ID
git add .
git commit -m "$SLUG: delete instance"
```

Create a new pull request and merge it

### Any other questions?

Please reach out to #cloud

# FAQ

### Debugging cloud instance deletion.

Often a instance deletion will fail to remove the network because the Network Endpoint Group (NEG) still exists
and blocks the VPC deletion.

Solution: Manually delete the NEG and then retry the instance deletion.
