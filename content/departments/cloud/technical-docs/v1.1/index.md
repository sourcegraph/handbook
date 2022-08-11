# Managed Instance v1.1

This documentation details significant changes of Managed Instance v1.1 comparing to the previous version.

Unless we explictly call it out, you may assume things are unchanged.

## Architecture

The largest architecture changes are the externalizing several components to
GCP-managed services.

### Postgres

<span class="badge badge-note">SOC2/CI-79</span>

Postgres database now uses a single [Cloud SQL] instance, which is a fully managed service by GCP. It provides fully automated daily backup with point-in-time-recovery and retains for 7 days. We also have on-demand backup prior to upgrade to provide fallback plan for unanticipated events.

### Object Storage

Object storage now uses [Google Cloud Storage] (GCS) and it's a managed service provided by GCP.

## Technical details

![architecture](https://storage.googleapis.com/sourcegraph-assets/managed-instances-architecture-v1.1.png)

_To update this file: goto
[excalidraw](https://app.excalidraw.com/s/4Dr1S6qmmY7/32zlotHc5bx)_

### Operations

The following processes only apply to Managed Instances v1.1:

- [Create a Managed Instance](./mi1-1_creation_process.md)
- [Upgrade a Managed Instance](./mi1-1_upgrade_process.md)
- [Restore a Managed Instance](./mi1-1_restore_process.md)
- [Failover Process](./mi1-1_failover_process.md)
- [Enable Executors](./mi1-1_enable_executors_process.md)

[cloud sql]: https://cloud.google.com/sql/postgresql
[google cloud storage]: https://cloud.google.com/storage
