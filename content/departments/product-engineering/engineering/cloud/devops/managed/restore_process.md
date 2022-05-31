# Restore a managed instance when it is completely gone

<span class="badge badge-note">SOC2/CI-110</span>

**For MI 1.1, see the new process [here](v1.1/mi1-1_restore_process.md).**

## Assess what is deleted

Navigate to `sourcegraph-managed-$CUSTOMER` project, and look at existing compute instance. Does the VM still exist?

- No, the VM is gone.

  - Does the data disk `default-$CURRENT_DEPLOYMENT-data-disk` still exists?
    - Yes, [re-create the VM with existing data disk](##re-create-the-vm-with-existing-data-disk)
    - No, [re-create the VM with a new data disk from disk snapshot](##re-create-the-vm-with-new-data-disk-from-disk-snapshot)

- Yes, follow [operation guides](./operations.md) to troubleshoot services condition. If unable to recover running services on the VM, fallback to [re-create the VM with a new data disk from disk snapshot](##re-create-the-vm-with-new-data-disk-from-disk-snapshot).

## Re-create the VM with existing data disk

1. Open [sourcegraph/deploy-sourcegraph-managed] and check out to the `$CUSTOMER` directory
1. Run `terraform apply` to reconcile the infrastructure to its definition in code.
1. Follow [confirm instance health](./operations.md#confirm-instance-health)

## Re-create the VM with new data disk from disk snapshot

1. Run `gcloud compute snapshots list --project=sourcegraph-managed-$CUSTOMER --sort-by="~creationTimestamp" --limit=5 --format="table(name,creationTimestamp)"` and copy the name of the latest snapshot
1. Go to [sourcegraph/deploy-sourcegraph-managed] and create a new branch `$CUSTOMER/restore-instance`
1. Edit `$CUSTOMER/terraform.tfvars`. NOTES: the key could be `black` depending on the current active instance

   ```tf
   disks = {
     red = { from_snapshot = "REPLACE_ME_WITH_SNAPSHOT_NAME" }
   }
   ```

1. Run `terraform apply` to reconcile the infrastructure to its definition in code.
1. Follow [confirm instance health](./operations.md#confirm-instance-health)
1. Commit your changes and open a Pull Request

[sourcegraph/deploy-sourcegraph-managed]: https://github.com/sourcegraph/deploy-sourcegraph-managed
