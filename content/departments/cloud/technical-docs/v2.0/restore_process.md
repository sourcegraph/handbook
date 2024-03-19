# Restoring a Cloud instance

<span class="badge badge-note">SOC2/CI-110</span>

Follow [break glass process](./break_glass_process.md) to ensure you have the proper access to perform this playbook.

Extract the instance from Control Plane if `cloud.sourcegraph.com/control-plane-mode=true` is in `config.yaml`. Follow the Extract instance from control plane (break glass) section from the Ops Dashboard of the instance, go/cloud-ops.

At the end, follow the `Backfill instance into control plane` section from the Ops Dashboard of the instance, go/cloud-ops

## Restoring Cloud SQL

Use cases:

- Cloud SQL data is corrupted by a broken database migration
- Cloud SQL data is deleted

### Restore from automated backup

> Below process is derived from [GCP documentation](https://cloud.google.com/sql/docs/postgres/backup-recovery/restoring#gcloud)

The restoration process will be performed with `gcloud`. Learn more about [why not terraform?](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/sql_database_instance#restore_backup_context).

List all backups, note the id of the latest (or the one right before database state is corrupted) **SUCCESSFUL** backup as `SQL_BACKUP_ID`

```sh
mi2 instance sql-backup list --slug $SLUG -e $ENVIRONMENT
```

Restore the backup to the current instance.

> [!NOTE] **IMPORTANT** This will override all current data with the backup.

```sh
mi2 instance sql-restore create --backup-id $SQL_BACKUP_ID --slug $SLUG -e $ENVIRONMENT
```

List operations to watch for progress

```sh
mi2 instance sql-restore list --slug $SLUG -e $ENVIRONMENT
```

## Restore GKE cluster application(s)

Use cases (tested scenarios):

- GKE cluster was deleted
- application namespaces was deleted
- single application was deleted
- PV from single application was deleted

Backup and restore uses [native GKE mechanism](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke).

1. [Follow break glass process](./break_glass_process.md)
1. [List available backups](#list-backups)
1. [Extract the instance from control plane]
1. Assess the damage
   1. [GKE cluster is gone](#restore-cluster-and-applications)
   1. [The namespace is gone](#restore-the-full-namespace)
   1. [Stateful services is corrupted or PV/PVC/disk is gone](#restore-statefull-application-from-disk-backup)
   1. [Missing stateless deployment](#restore-stateless-application)
   1. [Missing stateful services deploymnet](#restore-statefull-application-with-empty-disk)

### List backups

```sh
mi2 instance backup list --slug $SLUG -e $ENVIRONMENT
```

note the backup name, you will need it later.

### Restore cluster and applications from backup

> [!WARNING] this will spin up a new GKE cluster and replace it with the previous backup

```sh
cd sourcegraph/cloud
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID
mi2 instance tfc deploy -auto-approve -e $ENVIRONMENT --slug $SLUG
mi2 instance workon -e $ENVIRONMENT --slug $SLUG
mi2 instance restore create --backup-name $BACKUP_NAME --restore-type full-replace --slug $SLUG -e $ENVIRONMENT
```

### Restore the full namespace

> [!WARNING] this will restore both application statue and disk to the state of backup

```sh
cd sourcegraph/cloud
mi2 instance restore create --backup-name <BACKUP_NAME> --restore-type full-replace --slug $SLUG -e $ENVIRONMENT
```

Note: if pod hangs with PVCs pending, use below command:

```sh
kubectl delete sc gce-pd-gkebackup-de && kubectl get sc sourcegraph -o json | jq '.metadata.name = "gce-pd-gkebackup-de"' | kubectl apply -f -
```

### Restore stateless application

e.g. `sourcegraph-frontend`

> [!WARNING] make sure no disk or statefulset application is deleted, or we will risk data loss

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/kubernetes
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

### Restore statefull application from disk backup

e.g. `gitserver`, `zoekt`

```sh
cd sourcegraph/cloud
mi2 instance restore create --backup-name $BACKUP_NAME --restore-type [gitserver|indexed-search] --slug $SLUG -e $ENVIRONMENT
```

### Restore statefull application with empty disk

e.g. `gitserver`, `zoekt`

> [!WARNING] this assumes deletion of StatefulSet and/or application PVC/PV. GCP will create new empty disk and attach it.
> You probally want to [restore with disk backup](#restore-statefull-application-with-disk-restore)

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/kubernetes
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

# Restoring GCP deleted project

Notes:

- accidental deletion of GCP project was performed using the following command: `gcloud projects delete <PROJECT_ID>` based on [official GCP documentation](https://cloud.google.com/sdk/gcloud/reference/projects/delete)
- according to [GCP official documentation](https://support.google.com/googleapi/answer/6251787?hl=en#zippy=%2Crestore-a-project), GCP project can be restored within 30 days since deletion

- export environment variables

```sh
export ENVIRONMENT=[dev|prod]
export SLUG=<SLUG>
export GCP_PROJECT=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.status.gcp.projectId')
```

- peform undelete

```sh
gcloud projects undelete $GCP_PROJECT
```

- verify project is restored

```sh
gcloud projects describe $GCP_PROJECT
# should be: lifecycleState: ACTIVE
```
