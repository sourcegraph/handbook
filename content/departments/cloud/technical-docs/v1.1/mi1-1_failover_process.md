# Failover a managed instance v1.1 to another zone

<span class="badge badge-note">SOC2/CI-110</span>

In MI v1.1, all resources are still zonal, and managed instances are not automatically resilient to zone-wide failures. It's possible to failover resources to another zone in the event of GCP zonal failure, but it's a tedious and manual process. Perform the failover in the following order.

## Failover Cloud SQL

Use cases:

- Cloud SQL current zone is down

### Edit Cloud SQL location

Open [sourcegraph/deploy-sourcegraph-managed] and open `$CUSTOMER/terraform.tfvars`. Add the following override:

> Replace the zone with whichever that is available in the same region at the moment.

```hcl
cloud_sql_zone = "us-central1-a"
```

Apply the changes

```sh
terraform apply
```

It will take some time for Cloud SQL to be moved to a different zone.

Commit your change and open a Pull Request.

## Failover the compute instance (VM)

<!-- TODO
Validate this actualy works
-->

Configure env var

```sh
eval (mg --customer $CUSTOMER workon)
export PROJECT_ID=$PROJECT_PREFIX-$CUSTOMER
export INSTANCE_NAME=default-$OLD_DEPLOYMENT-instance
```

Locate the most recent snapshot of the **current** data disk, note the name of the snapshot as `SNAPSHOT_NAME`. We are using a blue/green model for some infra changes, so it is possible to have snapshot of data disk of the previous instance. It's important to use the snapshot of the last active instance.

```sh
gcloud compute snapshots list --project $PROJECT_ID
```

Follow [the machine upgrade process](./mi1-1_machine_upgrade_process.md) to complete the failover while making the below changes

- `NEW_DEPLOYMENT` instance should be created from the latest `$SNAPSHOT_NAME`
- Change `zone` to a working zone
- The GCP backend service resource needs to be temporarily modified to stop referencing the existing network endpoint resource, so it can be moved to a new zone

[sourcegraph/deploy-sourcegraph-managed]: https://github.com/sourcegraph/deploy-sourcegraph-managed
