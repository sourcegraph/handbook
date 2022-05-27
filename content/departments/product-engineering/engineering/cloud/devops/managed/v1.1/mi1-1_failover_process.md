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

- Modify the Terraform infrastructure zone variable to refer to a new zone.
- Modify the zone for manual snapshots to refer to the existing zone.
- Follow the normal managed instance upgrade process to create a replacement instance. If the live disk is inaccessible, restore from a historical snapshot instead.
- The GCP backend service resource needs to be temporarily modified to stop referencing the existing network endpoint resource, so it can be moved to a new zone

[sourcegraph/deploy-sourcegraph-managed]: https://github.com/sourcegraph/deploy-sourcegraph-managed
