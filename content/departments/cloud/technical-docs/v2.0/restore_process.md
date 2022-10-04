# Restore a managed instance v2.0 when it is completely gone

<span class="badge badge-note">SOC2/CI-110</span>

## Restoring Cloud SQL

Use cases:

- Cloud SQL data is corrupted by a broken database migration
- Cloud SQL data is deleted

### Restore from automated backup

> Below process is derived from [GCP documentation](https://cloud.google.com/sql/docs/postgres/backup-recovery/restoring#gcloud)

The restoration process will be performed with `gcloud`. Learn more about [why not terraform?](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/sql_database_instance#restore_backup_context).

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

## Restore GKE cluster application(s)

Use cases (tested scenarios):

- GKE cluster was deleted
- application namespaces was deleted
- single application was deleted
- PV from single application was deleted

### How GKE backup/restore works

Backup and restore uses [native GKE mechanism](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke).

> NOTE: **IMPORTANT** Backup has to be enabled during [creation process](./creation_process.md#enable-backup)

1. List backups

```sh
mi2 instance backup list --slug <CUSTOMER> -e [dev|prod]
```

2. Create on-demand backup

```sh
cd sourcegraph/cloud
mi2 instance backup create [--name <OPTIONAL_NAME>] --slug <CUSTOMER> -e [dev|prod]
```

Assess what is deleted:

- if GKE cluster - restore cluster and applications

```sh
cd sourcegraph/cloud
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/terraform/infra
terraform init
terraform apply
export CLUSTER_NAME=$(terraform show -json | jq -r '.. | .resources? | select(.!=null) | .[] | select((.type == "google_container_cluster") and (.mode == "managed")) | .values.name')
gcloud container clusters get-credentials $CLUSTER_NAME --region us-central1 --project $PROJECT_ID
cd sourcegraph/cloud
mi2 instance restore create --backup-name <BACKUP_NAME> --restore-type full-replace --slug <CUSTOMER> -e [dev|prod]
```

- if namespace - restore full namespace

```sh
cd sourcegraph/cloud
mi2 instance restore create --backup-name <BACKUP_NAME> --restore-type full-replace --slug <CUSTOMER> -e [dev|prod]
```

- if single stateless application (i.e. frontend)

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/kubernetes
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

- if single statefull application (i.e. gitserver, zoekt) - restore with empty disk

Note: this assumes deletion of StatefulSet and/or application PVC/PV. GCP will create new empty disk and attach it.

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/kubernetes
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

- if single statefull application (i.e. gitserver, zoekt) - restore with disk

TDB as separate PR - this requires using [Protected Applications](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/protected-application#backup-one-restore-all)
