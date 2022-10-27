# Managed Instance v2.0

> v2.0 is still under active development

> as of 2022-10-27, any teammate is able to provision their own v2 instances. please reach out to #cloud for guidance.

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

The largest architecture changes are moving from a standalone VM to GKE. Learn more from various WIP [Cloud v2 diagrams](https://app.excalidraw.com/o/4Dr1S6qmmY7/9eJlHswH65d).

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

> `prod` environment is not created yet. we will revisit this when we're clsoe to GA.

All dev projects are created under the [Sourcegraph Cloud V2 Prod] GCP project folder and [environments/prod](https://github.com/sourcegraph/cloud/tree/main/environments/prod) directory in the [sourcegraph/cloud] repo.

Access to `prod` environment is restricted and follow our [access policy](../../index.md#accessingdebugging-managed-instances).

This is our production environment and consists of internal and customer instances. All `prod` deployment is long-lived.

Below is a list of long-lived internal instances:

- [clouddev.sourcegraph.com](https://clouddev.sourcegraph.com)
- [demo.sourcegraph.com](https://demo.sourcegraph.com)

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

[sourcegraph/cloud]: https://github.com/sourcegraph/cloud
