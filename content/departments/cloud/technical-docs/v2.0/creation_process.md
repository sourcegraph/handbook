# Creating a managed instance

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see [managed instances operations](../operations.md) what if there is some text here.

## Prereq

Follow https://github.com/sourcegraph/controller#installation to install `mi2`

```sh
git clone https://github.com/sourcegraph/cloud
cd cloud
```

## Steps

> See flow chart https://app.excalidraw.com/s/4Dr1S6qmmY7/2wUSD4kIxRo

1. [Set environment variables](#Set-environment-variables)
1. [Check out a new branch](#Check-out-a-new-branch)
1. [Init deployment artifacts - GCP Project](#init-deployment-artifacts---gcp-project)
1. [Init deployment artifacts - Infrastructure](#init-deployment-artifacts---infrastructure)
1. [Init deployment artifacts - K8S](#init-deployment-artifacts---k8s)
1. [Deploy application](#deploy-application)
1. [Commit your changes](#Commit-your-changes)

### Set environment variables

```sh
export SLUG=company
export DOMAIN=company.sourcegraph.com
export ENVIRONMENT=dev
```

### Check out a new branch

```sh
git checkout -b $SLUG/create-instance
```

### Init deployment artifacts - GCP Project

`mi2 generate` will

- generate the terraform module and prmompt you to apply the terraform module
- generate the kustomization manifests and helm override based on output from the terraform module

```sh
mi2 generate -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

Above command will fail on the first run, follow the prompt to manually apply the terraform module or you can just run the command below

Before applying the terraform modulel, gather the computed values and configure them as environment variables

```sh
export INSTANCE_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.metadata.name')
export PROJECT_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gcpProjectId')
```

Apply the `project` terraform module

```sh
cd environments/$ENVIRONMENT/deployments/$INSTNACE_ID/terraform/project
terraform init
terraform apply
```

### Init deployment artifacts - Infrastructure

Rerun the `generate` command to generate the infra terraform module.

```sh
mi2 generate -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

Above command will fail again, run the command below to manually apply the `infra` terraform module.

```sh
cd environments/$ENVIRONMENT/deployments/$INSTNACE_ID/terraform/infra
terraform init
terraform apply
```

### Init deployment artifacts - K8S

Rerun the `generate` command to generate the kustomize manifests and helm overrides (it shouldn't error out again)

```sh
mi2 generate -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

### Deploy application

Connect to the cluster locally by running

```sh
cd environments/$ENVIRONMENT/deployments/$INSTNACE_ID/terraform/infra
export CLUSTER_NAME=$(terraform show -json | jq -r '.. | .resources? | select(.!=null) | .[] | select((.type == "google_container_cluster") and (.mode == "managed")) | .values.name')
gcloud container clusters get-credentials $CLUSTER_NAME --region us-central1 --project $PROJECT_ID
```

Deploy the manifests

```sh
cd environments/$ENVIRONMENT/deployments/$INSTNACE_ID/kubernetes
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
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
