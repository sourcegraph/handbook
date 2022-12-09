# Managed Instance v2.0

> NOTE: v2.0 is still under active development

> NOTE: as of 2022-10-27, any teammate is able to provision their own v2 instances. please reach out to #cloud for guidance.

This documentation details significant changes of Managed Instance v2.0 comparing to the previous version.

Unless we explictly call it out, you may assume things are unchanged.

Learn more from:

- [Cloud v2 MVP shortlist](https://docs.google.com/document/d/1O7V16J0gOtQSspfnNUJmcwRbXEaHKNv7ft7_IMk2YXc/edit#heading=h.nf7eonr5yxgn)
- [Cloud v2 migration and decision docs](https://docs.google.com/document/d/1GiOPJjuYrUahrZnENSLUCsujo2MCu2v_gw23SKNzE6E/edit)
- [Cloud v2 Orchestration docs](https://docs.google.com/document/d/1gyvi3T69FYb6P4EYIxcZJESnowghAPW1omtHU5vVTa4/edit)
- [Cloud v2 diagrams](https://app.excalidraw.com/o/4Dr1S6qmmY7/9eJlHswH65d)
- [Cloud v2 remaining work](https://docs.google.com/document/d/1eri1EUS8T8jiAz3GZfysKGhJEEewQ6PPGEsWXEEu60E/edit)
- [Cloud v2 SOC2 working docs](https://docs.google.com/document/d/1N1LLqDbtD1Mk36LofRFfvqE8iKFjdBeRcGU3NS8yEbo/edit#)

## Architecture

The largest architecture changes are moving from a standalone VM to GKE. Learn more from our [Cloud v2 diagrams](https://app.excalidraw.com/s/4Dr1S6qmmY7/4yUYgWaRxYx).

### Postgres

<span class="badge badge-note">SOC2/CI-79</span>

Postgres database now uses a single [Cloud SQL] instance, which is a fully managed service by GCP. It provides fully automated daily backup with point-in-time-recovery and retains for 7 days. We also have on-demand backup prior to upgrade to provide fallback plan for unanticipated events.

### GKE

<span class="badge badge-note">SOC2/CI-79</span>

All services of a Cloud instance are running on a dedicated GKE cluster. We utilize [Backup for GKE](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke) to provides fully automated daily backup with retention set to 90 days. The backup includes all production disks and application state. Additionally, backup is always taken prior to upgrade or other major operation.

## Deployment Environments

<span class="badge badge-note">SOC2/CI-100</span>

Deployment artifacts are stored in a centralized GitHub repoistory [sourcegraph/cloud].
Each enviornment is namespaced under `environments/$env`. A centralized repo makes sharing global configuration much easier comparing to having multiple repo.

Learn more from [diagram](https://app.excalidraw.com/s/4Dr1S6qmmY7/oQJll5x0xJ)

### Development (`dev`) environment

All dev projects are created under the [Sourcegraph Cloud V2 Dev](https://console.cloud.google.com/welcome?authuser=0&folder=205090528354&supportedpurview=project) GCP project folder and [environments/dev](https://github.com/sourcegraph/cloud/tree/main/environments/dev) directory in the [sourcegraph/cloud] repo.

This is our internal development environment. All `dev` deployment should be **short-lived** and they should always be teardown when they are no longer needed.

All engineering teammates are allowed to create instances and perform experiment under the `dev` environment. Access in general is unrestricted.

### Production (`prod`) environment

All dev projects are created under the [Sourcegraph Cloud V2 Prod](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts?authuser=1&folder=286349018886&supportedpurview=project) GCP project folder and [environments/prod](https://github.com/sourcegraph/cloud/tree/main/environments/prod) directory in the [sourcegraph/cloud] repo.

Access to `prod` environment is restricted and follow our [access policy](../../index.md#accessingdebugging-managed-instances).

This is our production environment and consists of internal and customer instances. All `prod` deployment is long-lived.

Below is a list of long-lived internal instances:

- [clouddev.sourcegraph.com](https://clouddev.sourcegraph.com)
- [~demo.sourcegraph.com~](https://demo.sourcegraph.com) (we will migrate `demo` to v2 soon)

Internal instances are created for various testing purposes:

- testing changes prior to the monthly upgrade on customer instances. upon a new release is made available, Cloud team will follow managed instances upgrade tracker (this is created prior to monthly upgrade) to proceed with upgrade process.
- testing significant operational changes prior to applying to customer instances
- long-lived instances for product teams to test important product changes, e.g. scaletesting.

All customer instances are considered part of the `prod` environment and all changes applied to these customers should be well-tested in the `dev` environment and internal instances.

## Playbook

The following processes only apply to Cloud v2.0:

- [Create a Managed Instance](./creation_process.md)
- [Restore a Managed Instance](./restore_process.md)
- [Upgrade a Managed instance](./upgrade_process.md)
- [Delete a Managed instance](./delete_process.md)
- [Disaster Recovery process for a Managed instance](./disaster_recovery_process.md)

### How to work with Cloud instances?

> NOTE: This is the prereq for all things related to Cloud. Please review this section carefully. If you have questions, please reach out to #cloud and tag `@cloud-support`.

Below is the bare minimal prereq before you can work with Cloud instances

- [sourcegraph/cloud]: deployment repo where we persist all Cloud instances config and deployment artifacts
- [sourcegraph/controller]: mi2 - cloud controller source code
- Install `mi2` by following [sourcegraph/controller#installation](https://github.com/sourcegraph/controller#installation)
- Sufficient access to GCP projects, see below FAQ to learn how to request access.

Let's walkthrough the process of accessing a Cloud instance:

First [locate the instance you are looking for](#how-to-locate-a-cloud-instance-in-the-deployment-repo)

- `gh repo clone sourcegraph/cloud`
- `cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID`

Then you can start running various `mi2` commands to work with a specific Cloud Instance (where we will infer the current instance base on current working directory).

```sh
# start a proxy to the database instance
mi2 instance db proxy
```

Learn more from the `mi2` cli [reference](https://github.com/sourcegraph/controller/blob/main/reference.md) for detail usage and examples.

### How to request access to Cloud instances infrastructure?

We utilize Entitle to provide time-bound access to GCP infrastructure for both production and development environment.

Use the slash command in Slack, type `/access_request` in any chat window and hit enter. Fill out the following values:

- **Search permission**: One of `Cloud V2 Dev Access`, `Cloud V2 Prod Access`
- **Permission duration**: Preferably to request the minimal amount of time
- **Add justification**: Add a note to provide context why access is needed

The request will be routed to #cloud, #security, or your direct manager for approval. We will review the request and approve the access request.

Please tag `@cloud-support` or `@security-support` in #cloud for immediate attention if it is time sensitive. If the request is related to an ongoing [incident](../../../engineering/dev/process/incidents/index.md), please [page Cloud on-call engineer using OpsGenie](../../../engineering/dev/process/incidents/index.md#incident-lead).

### How to request access to Cloud instances UI?

Learn more from [Request access to Cloud instances UI](../oidc_site_admin.md#request-access-to-cloud-instances-ui)

### How to locate a Cloud instance in the deployment repo?

There are two ways

If you not sure about the `slug` or `environment` of an instance, go to [s2](https://sourcegraph.sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/cloud$+file:config.yaml&patternType=standard&sm=1&groupBy=path)

```
repo:^github\.com/sourcegraph/cloud$ file:config.yaml <insert customer name or domain name as keyword to filter>
```

If you know the slug of the instance, run below at the root of the [sourcegraph/cloud] deployment repo to retrieve the instance ID

```sh
mi2 instance get -e $ENVIRONMENT --slug $CUSTOMER | jq -r '.metadata.name'
```

Then `cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID`

### How do I work with `mi2` CLI?

Learn more from [CLI reference](https://github.com/sourcegraph/controller/blob/main/reference.md).

### How to work with k8s deployment of a Cloud instance

Run below command to retrieve the credentials and configure the proper `kubectl` context.

```sh
mi2 instance workon -exec
```

### How to update & apply terraform modules?

In v2, we use `cdktf` via `mi2` cli to dynamically generate the cdktf stacks for each modules.

In `cloud` repo, run the following:

```sh
mi2 workflow run -e $ENVIRONMENT -exec -exec.concurrency 4 generate-cdktf
```

Commit the changes and open a pull request.

The following modules have auto-apply enabled, hence when they're changed, no action is required once they are merged

- `monitoring`
- `executors`
- `security`

For other modules, it's recommended to utilize below process.

```sh
# retrieve status of the plan
# make sure to run `--help` to learn more about different output format options
mi2 instance tfc check $module_name

# confirm the plan and apply it
mi2 instance tfc confirm
```

> We will add more step-by-step instruction in the future

Depending on how complex and the blast radius of the change, you may consider sample plan outputs of a few instances,
and use the `mi2 workflow` command to apply across all instances at once.
You can also utilize the `mi2 workflow` command to aggregate the raw plan output of all instances and perform precise check on them to ensure
the plan output is exactly what you are looking for.

### How to use a fork of `cdktf-cli`?

Sometime there is bugs (e.g. https://github.com/hashicorp/terraform-cdk/pull/2397, https://github.com/hashicorp/terraform-cdk/pull/2398) in the upstream and we have to maintain our own [fork](https://github.com/sourcegraph/terraform-cdk/tree/fix/tfc-planned-status) of `cdktf-cli`.

Use the fork in GitHub Actions, modify the `setup-mi2` action to reference the fork and pin to a specific commit, branch, or tag.

https://github.com/sourcegraph/cloud/blob/64d3ddfb2ecbff5c1a200aa8ac981ff1a48abf5e/.github/workflows/mi_create.yml#L97-L106

```yaml
- name: setup mi2 tooling
  uses: ./.github/actions/setup-mi2
  with:
    # Add a comment explain why a fork is required
    # cdktf-version: 0.13.3
    cdktf-repository: sourcegraph/terraform-cdk
    cdktf-ref: fix/tfc-planned-status
```

Use the fork locally:

```sh
gh repo clone sourcegraph/terraform-cdk
cd terraform-cdk
yarn install
yarn build
# in your shell config file or within the terminal session
alias cdktfl=/abspath-to-terraform-cdk-repo/packages/cdktf-cli/bundle/bin/cdktf
```

Then replace all `cdktf` command with `cdktfl`

[sourcegraph/cloud]: https://github.com/sourcegraph/cloud
[sourcegraph/controller]: https://github.com/sourcegraph/controller
