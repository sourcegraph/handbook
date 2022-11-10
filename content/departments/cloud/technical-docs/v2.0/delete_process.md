# Delete a Cloud instance

## Prereq

Follow https://github.com/sourcegraph/controller#installation to install `mi2`

```sh
git clone https://github.com/sourcegraph/cloud
cd cloud
```

Install `mi2` binary

```sh
go install ./cmd/mi2/
```

## Steps

> See flow chart https://app.excalidraw.com/s/4Dr1S6qmmY7/2wUSD4kIxRo

1. [Set environment variables](#Set-environment-variables)
1. [Check out a new branch](#Check-out-a-new-branch)
1. [Modify instance config to use TFC cli mode](#modify-instance-config-to-use-tfc-cli-mode)
1. [Remove namespace](#remove-namespace)
1. [Disable delete protection](#disable-delete-protection)
1. [Remove GKE backups and restores](#removes-gke-backups-and-restores)
1. [Destroy infrastructure - destroy cdktf stacks](#destroy-infrastructure---destroy-cdktf-stacks)
1. [Delete TFC workspaces](#delete-tfc-workspaces)
1. [Commit your changes](#commit-your-changes)

### Set environment variables

> Sharing `TF_TOKEN_app_terraform_io` is only temporary, this is expected to change in the future.

Bash

```sh
export SLUG=company
export DOMAIN=company.sourcegraph.com
export ENVIRONMENT=dev
export TF_TOKEN_app_terraform_io=$(gcloud secrets versions access latest --project=sourcegraph-secrets --secret=TFC_TEAM_TOKEN)
```

Fish

```sh
set -x SLUG company
set -x DOMAIN company.sourcegraph.com
set -x ENVIRONMENT dev
set -x TF_TOKEN_app_terraform_io (gcloud secrets versions access latest --project=sourcegraph-secrets --secret=TFC_TEAM_TOKEN)
```

### Check out a new branch

```sh
git checkout -b $SLUG/delete-instance
```

### Modify instance config to use TFC cli mode

Change the Terraform Cloud run mode to CLI-driven
Note: this will remove VCS trigger from Terraform Cloud workspaces for this instance!

```sh
mi2 instance edit --query '.spec.debug.tfcRunsMode = "cli"' --slug $SLUG -e $ENVIRONMENT
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
npx --yes cdktf-cli@0.13.0 deploy tfc
```

### Remove namespace

```sh
# deletes namespace and Network Endpoint Group Health check
$(mi2 workon -e $ENVIRONMENT --slug $SLUG to connect to cluster)
kubectl delete ns $NAMESPACE
```

### Disable delete protection

```sh
# delete sql protection
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/terraform/stacks/sql
terraform init
export SQL_RESOURCE=$(terraform state list | grep sql_self)
echo "$(jq '.resource.'$SQL_RESOURCE' += {"delete_protection":false}' cdk.tf.json)" > cdk.tf.json
terraform apply -auto-approve
```

### Removes GKE backups and restores

```sh
# remove GKE restores, backups, restore-plans and backup plans
cd sourcegraph/cloud
export PROJECT_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gcpProjectId')
gcloud config set project --project $PROJECT_ID
gcloud beta container backup-restore restores list | awk '{print $1}' | xargs gcloud beta container backup-restore restores delete
gcloud beta container backup-restore backups list | awk '{print $1}' | xargs gcloud beta container backup-restore backups delete
gcloud beta container backup-restore restore-plans list | awk '{print $1}' | xargs gcloud beta container backup-restore restore-plans delete --async
gcloud beta container backup-restore backup-plans list | awk '{print $1}' | xargs gcloud beta container backup-restore backup-plans delete --async
```

### Destroy infrastructure - destroy cdktf stacks

> the stack list may be out-of-date, run `npx --yes cdktf-cli@0.13.0` under the instance root in case things are not working as intented

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
npx --yes cdktf-cli@0.13.0 destroy project network gke sql app sqlschema waf security executors monitoring output --auto-approve --parallelism 8
```

### Delete TFC workspaces

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

```sh
npx --yes cdktf-cli@0.13.0 destroy tfc
```

### Commit your changes

```sh
rm -rf environments/$ENVIRONMENT/deployments/$INSTANCE_ID
git add .
git commit -m "$SLUG: delete instance"
```

Create a new pull request and merge it

### Any other questions?

Please reach out to #cloud
