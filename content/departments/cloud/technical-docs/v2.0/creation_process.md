# Creating a Cloud instance

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see [managed instances operations](../operations.md) what if there is some text here.

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
1. [Init instance config](#init-instance-config)
1. [Init deployment - generate cdktf stacks artifacts](#init-deployment---generate-cdktf-stacks-artifacts)
1. [Init deployment - create terraform cloud workspaces](#init-deployment---create-terraform-cloud-workspaces)
1. [Init deployment - deploy cdktf stacks](#init-deployment---deploy-cdktf-stacks)
1. [Init deployment - generate kustomize artifacts](#init-deployment---generate-kustomize-artifacts)
1. [Init deployment - deploy apps](#init-deployment---deploy-apps)
1. [Deploy application](#deploy-application)
1. [Enable backup](#enable-backup)
1. [Commit your changes](#Commit-your-changes)

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
git checkout -b $SLUG/create-instance
```

### Init instance config

```sh
mi2 instance create -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

```sh
export INSTANCE_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.metadata.name')
```

Change the Terraform Cloud run mode to CLI-driven

```sh
yq --inplace e '.spec.debug.tfcRunsMode |= "cli"' environments/$ENVIRONMENT/deployments/$INSTANCE_ID/config.yaml
```

### Init deployment - generate cdktf stacks artifacts

Generate the terraform (cdktf) modules (stacks) and prompt you to apply the terraform module

```sh
mi2 generate cdktf -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

### Init deployment - create terraform cloud workspaces

We use Terraform Cloud (TFC) as remote state backend and remote execution of Terraform. For terraform module we generate later has its own isolated state (a TFC workspace).
Therefore, we need pre-provision those workspaces on TFC ahead of time.

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

```sh
npx --yes cdktf-cli@0.13.0 deploy tfc
```

### Init deployment - deploy cdktf stacks

> the stack list may be out-of-date, run `npx --yes cdktf-cli@0.13.0` under the instance root in case things are not working as intented

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

```sh
npx --yes cdktf-cli@0.13.0 deploy project network gke sql app sqlschema waf security executors monitoring output --auto-approve --parallelism 8
```

### Init deployment - generate kustomize artifacts

Go back to the repo root directory, rerun the `generate` command to generate the kustomize manifests and helm overrides (it shouldn't error out again)

```sh
mi2 generate kustomize -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

### Init deployment - deploy apps

Run command below to obtain the commands to target the new cluster

```sh
mi2 workon -e $ENVIRONMENT --slug $SLUG
```

Copy and run the output `gcloud` and `kubectl` commands, you shall see something like

```sh
gcloud container clusters get-credentials src-$random_hash --region us-central1 --project src-$random_hash
kubectl config set-context gke_src-$random_hash_us-central1_src-src-$random_hash --namespace=src-$random_hash
```

Deploy the manifests

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/kubernetes
```

```sh
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

### Enable backup

Enable daily backup for GKE cluster

```sh
cd sourcegraph/cloud
mi2 instance sync --slug $SLUG -e $ENVIRONMENT
```

### Wrapping up

Revert back up VCS-driven mode

```sh
yq --inplace e 'del(.spec.debug.tfcRunsMode)' environments/$ENVIRONMENT/deployments/$INSTANCE_ID/config.yaml
```

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

```sh
npx --yes cdktf-cli@0.13.0 deploy tfc
```

### Commit your changes

```sh
git add .
git commit -m "$SLUG: create instance"
```

Create a new pull request and merge it

## Troubleshooting

### PVC is stuck at `Pending`

You may be seeing the following events

```
failed to provision volume with StorageClass "sourcegraph": rpc error: code = InvalidArgument desc = CreateVolume failed to pick zones for disk: failed to pick zones from topology: need 2 zones from topology, only got 1 unique zones
```

This is due to there is only one worker node available in the pool, we can force worker pool to scale up by deployment the below pause pod.

```sh
kubectl apply -f https://gist.githubusercontent.com/michaellzc/c19b94d84cfd0da2265034d16d623aa9/raw/a8398bf3131bfcdb571f2122227debbb54371fbd/src-cloud-scale-up-node-pool.yaml
```

Don't forget to clean it up after PVCs are provisioned.

```sh
kubectl delete -f https://gist.githubusercontent.com/michaellzc/c19b94d84cfd0da2265034d16d623aa9/raw/a8398bf3131bfcdb571f2122227debbb54371fbd/src-cloud-scale-up-node-pool.yaml
```

### How do I check my Sourcegraph deployment rollout progress?

> We do not use ArgoCD for V2 MVP

Visit ArgoCD at https://argocd-cloud.sgdev.org

### I am unable to apply the terraform module due to permission error.

> `roles/owner` definitely grants excessive permissions, but it would make developing greenfield project much easier and we will revist permissions at a later day.

Ensure the Google Group you belong to is present here https://github.com/sourcegraph/infrastructure/blob/c8b6d3dd3f6312334281d8261523b4d6cad60c8e/gcp/projects/terraform.tfvars#L460-L467. Otherwise, consult [GCP access process](../../../engineering/dev/process/gcp_access_process.md#standard-access-for-permanent-access-to-resources-projects-or-assets) to obtain access.

### Any other questions?

Please reach out to #cloud
