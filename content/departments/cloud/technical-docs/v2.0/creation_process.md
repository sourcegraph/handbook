# Creating a Cloud instance

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see http://go/cloud-ops.

## Option I - automated creation via GitHub Action

## Steps

### Create the instance

Invoke [Managed Instance create GitHub Action](https://github.com/sourcegraph/cloud/actions/workflows/mi_create.yml) with given parameters:

- `customer` - customer slug
- `environment` - environment name, learn more about [different environments](./index.md#deployment-environments)
  - `dev`
  - `prod`
- `instance_type` - purpose of this instance
  - `trial` - for customer trial
  - `production` - for paying customer
  - `internal` - for internal Sourcegraph usage
- `customer_admin_email` - (optional) the customer admin email
- `instance_domain` - (optional) override the instance domain instead of infering from customer slug, defaults to $CUSTOMER.sourcegraphcloud.com
- `license_key` - the product license key to be applied to the instance
- `target_src_version` - use the latest tested sourcegraph version, e.g. `4.2.1` (no `v` prefix)
- `gcp_region` - GCP region to deploy instance, one of [supported regions](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/cloud/-/blob/.github/workflows/mi_create.yml?L44)
- `instance_features` - Comma-separated list of feature tags, e.g., `enable_cody`, `static_nat_ip`.
- `dry_run` - (optional) whether to deploy GCP resources, enable to create the PR but not apply the resources

or via command line:

```
gh workflow run -R github.com/sourcegraph/cloud  \
  -f environment=[dev|prod] \
  -f customer=$SLUG \
  -f instance_type=[production|trial|internal] \
  -f target_src_version=$TARGET_SRC_VERSION \
  -f instance_domain=$DOMAIN \
  -f customer_admin_email=$CUSTOMER_ADMIN_EMAIL \
  -f gcp_region=us-central1 \
  -f dry_run=[true|false] \
  -f instance_features=enable_cody,static_nat_ip \
  -f license_key=$LICENSE_KEY
```

Then watch out for notification in #cloud-notifications or tail logs in GitHub Actions run.

### Wrapping up

Merge the Pull Request opened by GitHub Actions, then manually apply the license key:

> make sure you pull the latest change from `main`

#### Applying the license key

The license key should be generated before the instance is created and passed to the action in the `license_key` field.

- For CE/AE driven instances, a standalone license key should be included in the instance creation issue
- For internal/dev instances, generate a new license key following [these instructions](../../../technical-success/ce/process/license_keys.md#internal-licensing-faq)

If for some reason the key was not successfully applied during creation, it can manually be set with:

```sh
mi2 instance check -e $ENVIRONMENT -s $SLUG -enforce -src-license-key $LICENSE_KEY siteconfig.license-key
```

#### [Optional] Add additional customer admins

If there is more than one initial customer admin email in the ticket:

```sh
# notes it only work if two admins email belong to the same domain to avoid accidentally adding the wrong admins
# otherwise, you need to use SOAP to bypass this or consider asking the first admin to perform this step
# on their own
mi2 instance debug create-customer-admin -email <another-admin@company.com>
```

#### [Optional - only for manual process] Add customer admin to the instance

```sh
mi2 instance check -e $ENVIRONMENT -s $SLUG -enforce -customer-admin-email $CUSTOMER_ADMIN_EMAIL
```

#### Finally

In the GitHub issue, tag the assigned CE/AE the instance is ready with the following message. Also, notify the assigned CE/AE in the Slack thread:

```
Hi,

The instance has been provisioned and set password email has been sent to the mentioned customer admin.
For instance operations, please go to http://go/cloud-ops.
```

## Option II - manual playbook

## Prereq

Follow https://github.com/sourcegraph/controller#installation to install `mi2`

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
export TARGET_SRC_VERSION=4.2.0
export TF_TOKEN_app_terraform_io=$(gcloud secrets versions access latest --project=sourcegraph-secrets --secret=TFC_TEAM_TOKEN)
```

Fish

```sh
set -x SLUG company
set -x DOMAIN company.sourcegraph.com
set -x ENVIRONMENT dev
set -x TARGET_SRC_VERSION 4.2.0
set -x TF_TOKEN_app_terraform_io (gcloud secrets versions access latest --project=sourcegraph-secrets --secret=TFC_TEAM_TOKEN)
```

### Check out a new branch

This will create a `config.yaml` for the instance, this is the source of truth of instance specification.

```sh
git checkout -b $SLUG/create-instance
```

### Init instance config

```sh
mi2 instance create -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG [--region <GCP_REGION>]
```

> [!NOTE] `--region` flag is optional, value must be from [supported regions](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/controller/-/blob/internal/apis/sourcegraphcloud/types.go?L28). Without specifying flag `--region`, default instance GCP region is `us-central1`

```sh
export INSTANCE_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.metadata.name')
```

Change the Terraform Cloud run mode to CLI-driven

```sh
mi2 instance edit --jq '.spec.debug.tfcRunsMode = "cli"' --slug $SLUG -e $ENVIRONMENT
```

Configure the target Sourcegraph version

```sh
mi2 instance edit --jq '.spec.sourcegraphVersion = "'$TARGET_SRC_VERSION'"' --slug $SLUG -e $ENVIRONMENT
```

Verify domain is unique across all environments

```sh
# make sure none of the command below return a non-zero status code
mi2 instance list -e dev | jq -erM 'any(.[]; (.spec.domain == "'$DOMAIN'") and (.metadata.name != "'$INSTANCE_ID'")) | not'
mi2 instance list -e prod | jq -erM 'any(.[]; (.spec.domain == "'$DOMAIN'") and (.metadata.name != "'$INSTANCE_ID'")) | not'
```

### [Optional] Increase infastructure resources

i.e. change VM size in `config.yaml`

```sh
gcp:
  gke:
    blue:
      machineType: n2-highmem-8
```

### Init deployment - generate cdktf stacks artifacts

Generate the terraform (cdktf) modules (stacks) and prompt you to apply the terraform module

```sh
mi2 generate cdktf -e $ENVIRONMENT --slug $SLUG
```

### Init deployment - create terraform cloud workspaces

We use Terraform Cloud (TFC) as remote state backend and remote execution of Terraform. For terraform module we generate later has its own isolated state (a TFC workspace).
Therefore, we need pre-provision those workspaces on TFC ahead of time.

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

```sh
cd terraform/stacks/tfc
terraform init && terraform apply -auto-approve
```

### Init deployment - deploy cdktf stacks

> the stack list may be out-of-date, run `npx --yes cdktf-cli@0.13.3` under the instance root in case things are not working as intented

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

```sh
mi2 instance tfc deploy -auto-approve
```

### Init deployment - generate kustomize artifacts

Go back to the repo root directory, rerun the `generate` command to generate the kustomize manifests and helm overrides (it shouldn't error out again)

```sh
mi2 generate kustomize -e $ENVIRONMENT --slug $SLUG
```

### [Optional] Kustomize application resources

Create kustomize file `values.yaml` with application resource kustomization

Add file to config.yaml and re-generate kustomization files

```sh
mi2 instance edit --jq '.spec.cluster.values.valuesFiles += ["./values.yaml"]'
mi2 generate kustomize -e $ENVIRONMENT --slug $SLUG
```

### Init deployment - deploy apps

Run command below to obtain the commands to target the new cluster

```sh
mi2 instance workon -e $ENVIRONMENT --slug $SLUG -exec
```

Deploy the manifests

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/kubernetes
```

```sh
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

```sh
cd ..
mi2 instance check pods-health
```

### Generate dashboard

```sh
mi2 instance dashboard --output dashboard.md
```

### Enforce invariants

```sh
mi2 instance check -enforce
```

### Wrapping up

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

Enable uptime monitoring

```sh
mi2 instance edit --jq '.spec.debug.enableAlerting=true'
mi2 instance tfc deploy -auto-approve -force-ignore-stack-dependencies -target monitoring
```

Revert back up VCS-driven mode

```sh
mi2 instance edit --jq 'del(.spec.debug.tfcRunsMode)'
mi2 generate cdktf
cd terraform/stacks/tfc
terraform init && terraform apply -auto-approve
```

Add new instance to dashboard

```sh
cd sourcegraph/cloud
mi2 env dashboard -e prod --output prod.dashboard.md
```

Finish the [remaining work](#wrapping-up)

### Commit your changes

```sh
git add .
git commit -m "$SLUG: create instance"
```

Create a new pull request and merge it

## Troubleshooting

### Terraform failed to deploy via TFC

You might be seeing the error message of from GitHub Actions logs

```
Error: 022-12-14T22:35:54.704] [ERROR] default - Error in Deploy: {"message":"Request failed with status code 409","name":"Error","stack":"Error: Request failed with status code 409\n    at WGe.exports (/home/runner/work/cloud/cloud/terraform-cdk/packages/cdktf-cli/bundle/bin/cmds/handlers.js:199:4283)\n    at GGe.exports (/home/runner/work/cloud/cloud/terraform-cdk/packages/cdktf-cli/bundle/bin/cmds/handlers.js:199:4461)\n    at IncomingMessage.<anonymous> (/home/runner/work/cloud/cloud/terraform-cdk/packages/cdktf-cli/bundle/bin/cmds/handlers.js:200:8212)\n    at IncomingMessage.emit (node:events:525:35)\n    at IncomingMessage.emit (node:domain:489:12)\n    at endReadableNT (node:internal/streams/readable:1358:12)\n    at processTicksAndRejections (node:internal/process/task_queues:83:21)","config":{"url":"/runs/<redacted>/actions/apply","method":"post","data":"{}","headers":{"Authorization":"REDACTED","Accept":"application/json","Content-Type":"application/vnd.api+json","User-Agent":"terraform-cloud/1.15.0","Content-Length":2},"baseURL":"https://app.terraform.io/api/v2","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false}}}
```

```
Deploy: Request to Terraform Cloud failed with status 409: {"status":"409","title":"transition not allowed"}
```

This is happening because `cdktf` is trying to confirm a plan before it is ready to be confirmed. It is a known issue and we deem not worth fixing since we have already [went pretty far preventing it from haappen](https://github.com/sourcegraph/terraform-cdk/commits/fix/tfc-planned-status).

When this happened, locate the workspace of the affected instance on Terraform Cloud. Use the `INSTANCE_ID` as tag to filter workspaces, and there should be a workspace that requires manual confirmation. Confirm it and wait for it to finish, then re-run the failed GitHub Actions run.

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
