# Managed Instance v2.0

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

The largest architecture changes are moving from a standalone VM to GKE. Learn more from our [Cloud v2 diagrams](https://link.excalidraw.com/readonly/UyUsbNf7nOQF4fa2AjLA) or [update it](https://app.excalidraw.com/s/4Dr1S6qmmY7/4yUYgWaRxYx).

<iframe src="https://link.excalidraw.com/readonly/UyUsbNf7nOQF4fa2AjLA" width="100%" height="100%" style="border: none;"></iframe>

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
- [sourcegraph.sourcegraph.com](#s2-instance)
- [demo.sourcegraph.com](https://demo.sourcegraph.com)

Internal instances are created for various testing purposes:

- testing changes prior to the monthly upgrade on customer instances. upon a new release is made available, Cloud team will follow managed instances upgrade tracker (this is created prior to monthly upgrade) to proceed with upgrade process.
- testing significant operational changes prior to applying to customer instances
- long-lived instances for product teams to test important product changes, e.g. scaletesting.

All customer instances are considered part of the `prod` environment and all changes applied to these customers should be well-tested in the `dev` environment and internal instances.

##### [s2 instance](https://sourcegraph.sourcegraph.com/)

This is the internal Cloud dogfood instance for the entire company. #discuss-cloud-ops is responsible for rolling out nightly builds on this instance. Additionally, they are responsible for the maintenance of infrastructure, including Cloud SQL and underlying VM.

Operation playbook: go/s2-ops

Deployment status: go/s2-deploy

## Playbook

The following processes only apply to Cloud v2.0:

- [Create a Managed Instance](./creation_process.md)
- [Restore a Managed Instance](./restore_process.md)
- [Upgrade a Managed instance](./upgrade_process.md)
- [Delete a Managed instance](./delete_process.md)
- [Disaster Recovery process for a Managed instance](./disaster_recovery_process.md)

### How to work with Cloud instances?

> [!NOTE] This is the prereq for all things related to Cloud. Please review this section carefully. If you have questions, please reach out to #cloud and tag `@cloud-support`.

Please visit go/cloud-ops to locate the instance you would like to access, then you will find instructions for:

- access database
- view logs
- work with the k8s deployments and access containers to troubleshoot problem

### How to request access to Cloud instances UI?

Learn more from [Request access to Cloud instances UI](../oidc_site_admin.md#request-access-to-cloud-instances-ui)

### How to locate a Cloud instance in the deployment repo?

Please visit go/cloud-ops to locate the instance.

### How to update & apply terraform modules?

Please visit go/cloud-ops, and follow instruction from `Deploy terraform changes` section.

### How to use a fork of `cdktf-cli`?

> [!WARNING] This process is deprecated, and we no longer use `cdktf-cli` directly.

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
