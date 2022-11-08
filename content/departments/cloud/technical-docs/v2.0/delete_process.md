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

This will create a `config.yaml` for the instance, this is the source of truth of instance specification.

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

### Destroy infrastructure - destroy cdktf stacks

> the stack list may be out-of-date, run `npx --yes cdktf-cli@0.13.0` under the instance root in case things are not working as intented

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
gcloud sql instances patch <CLOUDSQL_INSTANCE_NAME> --no-deletion-protection --project <GCP_PROJECT>
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
git add .
git commit -m "$SLUG: delete instance"
```

Create a new pull request and merge it

### Any other questions?

Please reach out to #cloud
