# Restore a managed instance v1.1 when it is completely gone

<span class="badge badge-note">SOC2/CI-110</span>

> Are you experiencing a zonal failure? Follow the [failover process](./mi1-1_failover_process.md)

In MI v1.1, we now have resources running outside the VM, i.e Cloud SQL, hence the restoration comes with multiple stages. Perform the restoration in the following order.

## Restoring Cloud SQL

Use cases:

- Cloud SQL data is corrupted by a broken database migration
- Cloud SQL data is deleted

### Restore from automated backup

> Below process is derived from [GCP documentation](https://cloud.google.com/sql/docs/postgres/backup-recovery/restoring#gcloud)

The restortion process will be performed with `gcloud`. Learn more about [why not terraform?](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/sql_database_instance#restore_backup_context).

Locate the SQL instance, note the name of the instance as `SQL_INSTANCE`

```sh
gcloud sql instances list --project $PROJECT_ID
```

List all backups, note the name of the latest (or the one right before database state is corrupted) **SUCCESSFUL** backup as `SQL_BACKUP_ID`

```sh
gcloud sql backups list --instance $SQL_INSTANCE --project $PROJECT_ID
```

Restore the backup to the current instance.

> NOTE: **IMPORTANT** This will override all current data with the backup.

```sh
gcloud sql backups restore $SQL_BACKUP_ID --restore-instance $SQL_INSTANCE --project $PROJECT_ID
```

## Restore the compute instance (VM)

Use cases:

- Docker daemon state is corrupted
- Application data is deleted
- VM is deleted

### Assess what is deleted

Navigate to `sourcegraph-managed-$CUSTOMER` project, and look at existing compute instance.

Does the VM still exist?

- No, the VM is gone.

  - Does the data disk `default-$CURRENT_DEPLOYMENT-data-disk` still exists?
    - Yes, [re-create the VM with existing data disk](##re-create-the-vm-with-existing-data-disk)
    - No, [re-create the VM with a new data disk from disk snapshot](##re-create-the-vm-with-new-data-disk-from-disk-snapshot)

- Yes, follow [operation guides](../operations.md) to troubleshoot services condition. If unable to recover running services on the VM, fallback to [restore snapshot on a live VM](#restore-snaphost-on-a-live-vm).

### Re-create the VM with existing data disk

1. Open [sourcegraph/deploy-sourcegraph-managed] and check out to the `$CUSTOMER` directory
1. Run `terraform apply` to reconcile the infrastructure to its definition in code.
1. Follow [confirm instance health](../operations.md#confirm-instance-health)

### Re-create the VM with new data disk from disk snapshot

1. Run `gcloud compute snapshots list --project=sourcegraph-managed-$CUSTOMER --sort-by="~creationTimestamp" --limit=5 --format="table(name,creationTimestamp)"` and copy the name of the latest snapshot
1. Go to [sourcegraph/deploy-sourcegraph-managed] and create a new branch `$CUSTOMER/restore-instance`
1. `cd $CUSTOMER`
1. Edit `$CUSTOMER/terraform.tfvars`. NOTES: the key could be `black` depending on the current active instance

   ```tf
   disks = {
     red = { from_snapshot = "REPLACE_ME_WITH_SNAPSHOT_NAME" }
   }
   ```

1. Run `terraform apply` to reconcile the infrastructure to its definition in code.
1. Follow [confirm instance health](../operations.md#confirm-instance-health)
1. Commit your changes and open a Pull Request

### Restore snapshot on a live VM

1. Run `gcloud compute snapshots list --project=sourcegraph-managed-$CUSTOMER --sort-by="~creationTimestamp" --limit=5 --format="table(name,creationTimestamp)"` and copy the name of the latest snapshot
1. Go to [sourcegraph/deploy-sourcegraph-managed] and create a new branch `$CUSTOMER/restore-instance`
1. `cd $CUSTOMER`
1. Edit `$CUSTOMER/terraform.tfvars`. NOTES: the key could be `black` depending on the current active instance

   ```tf
   disks = {
     red = { from_snapshot = "REPLACE_ME_WITH_SNAPSHOT_NAME" }
   }
   ```

1. Run `terraform apply` **twice**
1. Run `gcloud compute instances stop default-$OLD_DEPLOYMENT-instance --project $PROJECT_ID`
1. Run `gcloud compute instances start default-$OLD_DEPLOYMENT-instance --project $PROJECT_ID`
1. Follow [confirm instance health](../operations.md#confirm-instance-health)
1. Commit your changes and open a Pull Request

[sourcegraph/deploy-sourcegraph-managed]: https://github.com/sourcegraph/deploy-sourcegraph-managed
