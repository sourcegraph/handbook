# Creating a Cloud instance

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see [managed instances operations](../operations.md) what if there is some text here.

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
- `target_src_version` - use the latest tested sourcegraph version, e.g. `4.2.1` (no `v` prefix)
- `customer_admin_email` - (optional) the customer admin email
- `instance_domain` - (optional) override the instance domain instead of infering from customer slug
- `cdktf_deploy` - (optional) whether to deploy GCP resources, false for fast re-run when resources are already created.

or via command line:

```
gh workflow run -R github.com/sourcegraph/cloud  \
  -f environment=[dev|prod] \
  -f customer=$SLUG \
  -f instance_type=[production|trial|internal] \
  -f target_src_version=$TARGET_SRC_VERSION \
  -f instance_domain=$DOMAIN \
  -f customer_admin_email=$CUSTOMER_ADMIN_EMAIL \
  -f cdktf_deploy=[true|false]
```

Then watch out for notification in #cloud-notifications or tail logs in GitHub Actions run.

### Wrapping up

> NOTE: This is temporary, learn more: https://sourcegraph.slack.com/archives/C03JR7S7KRP/p1671034214541469

Check out to the PR, and update `config.yaml` of the new instance to allow CE access to the instance

```yaml
spec:
  debug:
    additionalAdminEmails:
      - <insert assigned CE email>
```

```sh
mi2 instance check -e $ENVIRONMENT -s $SLUG -enforce okta.instance-group
```

Once it's finished, merge the Pull Request opened by GitHub Actions, then manually apply the license key:

> make sure you pull the latest change from `main`

```sh
# For PLG instances
mi2 instance check -e $ENVIRONMENT -s $SLUG -enforce -src-license-key gsm://projects/sourcegraph-secrets/secrets/plg-licence-key site-config.license-key

# For CE/AE driven instances, a standalone license key should be included in the creation request
mi2 instance check -e $ENVIRONMENT -s $SLUG -enforce -src-license-key $LICENSE_KEY site-config.license-key
```

In the GitHub issue, tag the assigned CE/AE the instance is ready with the following message. Also notify the assigned CE/AE in the Slack thread:

```
Hi,

The instance has been provisioned and set password email has been sent to the mentioned customer admin
```

(PLG manual triel only) add the `cloud-trial/instance-ready` label on the instance request issue. This will trigger an alert in #cloud-trial-alerts.

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
mi2 instance create -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

```sh
export INSTANCE_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.metadata.name')
```

Change the Terraform Cloud run mode to CLI-driven

```sh
mi2 instance edit --query '.spec.debug.tfcRunsMode = "cli"' --slug $SLUG -e $ENVIRONMENT
```

Configure the target Sourcegraph version

```sh
mi2 instance edit --query '.spec.sourcegraphApplicationVersion = "'$TARGET_SRC_VERSION'"' --slug $SLUG -e $ENVIRONMENT
```

Verify domain is unique across all environments

```sh
# make sure none of the command below return a non-zero status code
mi2 instance list -e dev | jq -erM 'any(.[]; (.spec.domain == "'$DOMAIN'") and (.metadata.name != "'$INSTANCE_ID'")) | not'
mi2 instance list -e prod | jq -erM 'any(.[]; (.spec.domain == "'$DOMAIN'") and (.metadata.name != "'$INSTANCE_ID'")) | not'
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
npx --yes cdktf-cli@0.13.3 deploy tfc
```

### Init deployment - deploy cdktf stacks

> the stack list may be out-of-date, run `npx --yes cdktf-cli@0.13.3` under the instance root in case things are not working as intented

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

```sh
npx --yes cdktf-cli@0.13.3 deploy project network gke sql app sqlschema waf security executors monitoring output --auto-approve --parallelism 8
```

### Init deployment - generate kustomize artifacts

Go back to the repo root directory, rerun the `generate` command to generate the kustomize manifests and helm overrides (it shouldn't error out again)

```sh
mi2 generate kustomize -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
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

### Enable backup

Enable daily backup for GKE cluster

```sh
cd sourcegraph/cloud
mi2 instance sync --slug $SLUG -e $ENVIRONMENT
```

### Wrapping up

Revert back up VCS-driven mode

```sh
mi2 instance edit --query 'del(.spec.debug.tfcRunsMode)' --slug $SLUG -e $ENVIRONMENT
```

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

```sh
npx --yes cdktf-cli@0.13.3 deploy tfc
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
