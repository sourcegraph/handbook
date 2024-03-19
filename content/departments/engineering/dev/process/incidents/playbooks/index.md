# Playbooks for incidents

Many of these tips require kubectl usage - you can refer to the [deployment page's Kubernetes section](../../deployments/kubernetes.md) to help you get set up and started with basic commands.

## CI playbook

Refer to the [CI incidents playbook](./ci.md)

## Pausing a release

In some incidents, we may learn that we need to pause a release.

- The [incident lead](#incident-lead):
  - Alerts @delivery-support, @cs, @ce so the teams can plan accordingly
  - Handles the internal details of pausing a release (engaging the messenger to help with any relevant customer communication)
- The [messenger](#messenger) alerts customers via a post on the status page

## Go-to-market (license and subscription) issues

If a customer is experiencing an issue related to their Enterprise license key or Enterprise subscription status, any member of the Sourcegraph team has authority to generate a new, valid license key for any customer for any number of users that is **valid for up to 7 days** in the [site-admin Enterprise subscriptions page on Sourcegraph.com](https://sourcegraph.com/site-admin/dotcom/product/subscriptions). This will prevent the initial incident responder from being bottlenecked on a member of the go-to-market team that can validate the customer's Enterprise subscription status.

The incident responder will need to select a Sourcegraph.com account to attach the subscription to (typically the account should belong to the customer, so they can access the license key directly from their user profile, but in an emergency, the incident responder can use their own account in lieu of asking the customer), and can then manually generate a license key. No license "tags" are necessary.

If a customer's instance is reporting "license expired" already, note that [there is a 72hr grace period](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/enterprise/internal/license/license.go#L43:15) before non-admin users are locked out.

## Figure out why a pod is in CrashLoopBackoff

`CrashLoopBackoff` indicates that a service is repeatedly failing to start. Instead of using Google Cloud Console to check the logs, the best way to figure out why a pod is in this state is to use the following commands:

```sh
kubectl get pods -o=wide --namespace=prod   # find the pod you are interested in
kubectl describe --namespace=prod pod $POD_NAME
```

In the output, you'll find logs and a snippet like the following that can give more information about why a service has not started:

```
    State:         Waiting
      Reason:      CrashLoopBackOff
    Last State:    Terminated
      Reason:      OOMKilled
      Message:     690
```

Certain states like `Terminated` is not very clearly indicated in Google Cloud Console, and will usually not be properly indicated in logs either.

## Restarting pods

This action is also referred to as "bouncing pods" or to "bounce a pod". Follow the steps to [authenticate kubectl](../../deployments/index.md) and perform a restart using kubectl to restart the desired deployment:

```sh
kubectl rollout restart deployment/$SERVICE
```

Note the use of `deployment/`—you cannot restart services (`svc/`). Note that [stateful sets have a different process](#making-updates-to-stateful-sets).

You can also bounce pods by manually finding them via `kubectl get pods` and `kubectl delete pod $POD_ID`. Once a pod is deleted, it will automatically be recreated.

## Making updates to stateful sets

Statefulsets are different to a deployment in that all pods must be in a healthy state before changes can be made.

Currently sourcegraph uses statefulsets for the following services:

- gitserver
- grafana
- indexed-search

In order to push an update to a failing statefulset take the following action:

### 1. Update the statefulset `yaml` with the appropriate change and apply using:

```console
kubectl apply -f <service.StatefulSet.yaml>
```

### 2. Delete the pods in the stateful set:

```console
REPLICAS=`kubectl get sts -n prod <statefulset> -o jsonpath={.spec.replicas}`; for i in `seq 0 $[REPLICAS-1]`; do POD=<statefulset>-$i;   echo "Deleting POD $POD";   kubectl delete pod -n prod $POD ; done
```

### 3. The statesfulset controller will now restart the pods. Verify the pods are starting successfully.

```console
watch -n1 kubectl get all -n prod -l app=gitserver -o wide
```

### 4. Verify service is restored

Open the alert UI to click on the check URL that was failing and verify it's now working again.

## Useful dashboards

### Metrics

Dashboards for Prometheus metrics are available at `/-/debug/grafana` (for example, [sourcegraph.com/-/debug/grafana](https://sourcegraph.com/-/debug/grafana)).

### Tracing

Jaeger is available at `/-/debug/jaeger` (for example, [sourcegraph.com/-/debug/jaeger](https://sourcegraph.com/-/debug/jaeger)).

### Prod logs

1. Go to **Kubernetes Engine > Workloads**, then search and click on the pod you're interested, e.g. `sourcegraph-frontend`.
2. In the **Deployment details** page, there is a row called **Logs**, which has both **Container logs** and **Audit logs**.
3. Click on the **Container logs**, then you should be redirected to the **Logs Viewer** page.

## Free gitserver disk space on sourcegraph.com

### 1. See the status of all gitserver pods

```console
kubectl get all -n prod -l app=gitserver -o wide

NAME              READY   STATUS            RESTARTS   AGE   IP             NODE                                NOMINATED NODE
pod/gitserver-0   0/1     CrashLoopBackOff  12         1h    10.52.14.6     gke-dot-com-dot-com-93160456-s7zw   <none>
pod/gitserver-1   1/1     Running           0          1h    10.52.13.189   gke-dot-com-dot-com-93160456-b7bk   <none>
pod/gitserver-2   1/1     Running           0          1h    10.52.0.165    gke-dot-com-dot-com-93160456-271w   <none>
```

### 2. Verify that it's a disk space problem

Replace `gitserver-0` with the name of the affected pod.

```console
kubectl -n prod describe pod gitserver-0 | grep -A5 "Message:"

      Message:   t=2019-04-24T07:46:46+0000 lvl=info msg="Distributed tracing enabled" tracer=Lightstep
2019/04/24 07:46:46 failed to setup temporary directory: mkdir /data/repos/.tmp-old227473847: no space left on device
```

### 3. SSH into the node where the affected pod is scheduled

The node address is present in the output of the first command you ran: `kubectl get all -n prod -l app=gitserver -o wide`. Replace the node name in the command below.

```console
gcloud compute ssh gke-dot-com-dot-com-93160456-s7zw --zone us-central1-f
```

### 4. Become root and find the mount path containing `repos-gitserver-`

```console
sudo su
df -h | sort -r -k 5 -i | head -n8

Filesystem      Size  Used Avail Use% Mounted on
/dev/sdc        3.9T  3.8T   68G  99% /var/lib/kubelet/plugins/kubernetes.io/gce-pd/mounts/repos-gitserver-0-dot-com
/dev/root       1.2G  466M  756M  39% /
overlayfs       1.0M  172K  852K  17% /etc
tmpfs           1.0M  144K  880K  15% /var/lib/cloud
overlay          95G  8.2G   87G   9% /var/lib/docker/overlay2/ed84d3f946264457738a05ba00d586e8de53e731983a21b6825faa6fef01f068/merged
overlay          95G  8.2G   87G   9% /var/lib/docker/overlay2/d7ca574132a2511a82b3bbaa0010ee49e7e616a1ebee9ca61ad094d4aef286dd/merged
overlay          95G  8.2G   87G   9% /var/lib/docker/overlay2/d7bd7cc72a2e47cb32f2542bd7416597d4ad7a6409d0c069b041bf28766dea2a/merged
```

### 5. Delete repos from disk until Use% is below 98%

```console
cd /var/lib/kubelet/plugins/kubernetes.io/gce-pd/mounts/$DISK_NAME/github.com
for repo in *; do echo $repo; rm -rf $repo; sleep 0.1; df -h .; done
```

At the same time you run this command, check in a different terminal split or window the status of gitserver pods.

```console
watch -n1 kubectl get all -n prod -l app=gitserver -o wide
```

### 6. Verify service is restored

Open the alert UI to click on the check URL that was failing and verify it's now working again.

## PostgreSQL database problems

We provide two sets of instructions here, shell commands and PostgreSQL commands to be run inside a `psql` instance. PostgreSQL commands are denoted by the prompt `sg=#` in this documentation; the actual prompt corresponds to the postgres user name.

### Backing up & restoring a Cloud SQL instance (production databases)

Before any potentially risky operation you should ensure the databases have recent ( < 1 hour) backups. We currently have daily backups enabled.

You can create a backup of a Cloud SQL instance via `gcloud sql backups create --instance=${instance_name} --project=sourcegraph-dev` or choose from existing backups via `gcloud sql backups list --instance=${instance_name}`.

To restore a Cloud SQL instance to a previous revision you can use `gcloud sql backups restore $BACKUP_ID --restore-instance=${instance_name}`

You can also perform these commands from the [Google Cloud SQL UI](https://console.cloud.google.com/sql/instances?project=sourcegraph-dev)

🚨 You should notify the #dev-ops channel if an situation arises when a restore my be required. It should also be filed in our ops-incident log.

### Restore database using point-in-time recovery (creates new database clone!)

🚨 You should open an incident (unless it is already opened) and notify the #dev-ops channel if a situation arises when a point-in-time recovery is required.

Explanation of [CloudSQL PostgreSQL point in time recovery](https://cloud.google.com/sql/docs/postgres/backup-recovery/pitr)

⚠️ **WARNING:** Before starting restoring to point in time, ensure that previous step with restore via daily backup is not possible - point in time operation has to create a new database instance and all applications have to be reconfigured to use new instance!

You can create a clone of the instance from point in time via `gcloud sql instances clone ${instance_name} ${clone_instance_name} --point-in-time '2022-03-21T19:30:00.000Z'` (UTC timezone for the source instance in RFC 3339 format).

You have to create a PR which modifies all CloudSQL Proxy conigurations to point to new instance in [base folder of the repository](https://github.com/sourcegraph/deploy-sourcegraph-cloud/tree/release/base)
i.e. `sourcegraph-dev:us-central1:${instance_name}` -> `sourcegraph-dev:us-central1:${clone_instance_name}`

After PR is approved and merged, applications are redeployed and use new instance.

### Shell commands

These commands assume you're on a local machine, and trying to access the live systems. Also refer to the [deployment page's Kubernetes section](../../deployments/index.md#kubernetes) for kubectl tips.

#### Helpful aliases

> [!NOTE] For the sourcegraph.com database you should refer to the instructions [here](../../deployments/playbooks.md#accessing-sourcegraph.com-database)

```bash
alias dbpod='kubectl get pods --namespace=prod | grep pgsql | cut -d " " -f 1'
alias proddb='kubectl exec -it --namespace=prod $(dbpod) -- psql -U sg -P pager=off';
```

#### Check load average

```bash
kubectl exec -it --namespace=prod $(dbpod) -- top
```

You might also like the shorter output of `uptime`.

### PostgreSQL interactions

The `psql` command gives you, by default, a prompt looking like `user=#`, where "user" is the provided user name; `sg` for production. SQL queries and commands (`SELECT`, `UPDATE`, `INSERT`, `DELETE`, `DROP`) need to be terminated by a semicolon. Some commands start with a backslash, and are not SQL commands, and do not need semicolons.

Examples:

```
sourcegraph=# select * from schema_migrations;
  version   | dirty
------------+-------
 1528395540 | f
(1 row)

sourcegraph=# \d schema_migrations
Table "public.schema_migrations"
 Column  |  Type   | Modifiers
---------+---------+-----------
 version | bigint  | not null
 dirty   | boolean | not null
Indexes:
    "schema_migrations_pkey" PRIMARY KEY, btree (version)
```

If you have entered an SQL command and gotten a prompt back immediately, check the character right before the `#`. If you're missing a semicolon, that character changes to `-`. If you have mismatched parentheses, it changes to `(`. Examples:

```
           v-- this column here is really useful!
sourcegraph=# select (version, dirty
sourcegraph(# )
sourcegraph-# from schema_migrations
sourcegraph-# ;
      row
----------------
 (1528395540,f)
(1 row)
```

#### List slow queries

Note that typical queries usually run in milliseconds, not seconds. "1 minute" is far enough out to be highly unusual.

```sql
select pid, now() - pg_stat_activity.query_start AS duration, query, state from pg_stat_activity where (now() - pg_stat_activity.query_start) > interval '1 minute';
```

#### Cancel or terminate slow queries

Queries can be cancelled (requested to stop) or terminated (killed). You can only cancel a query which is running. Idle queries, which have completed but are waiting (typically on the client consuming the results or acknowledging them in some way), may not respond to a cancel, and require termination. (Under the hood: These are just sending signals. Cancel is `SIGINT`, terminate is `SIGTERM`.)

Cancel:

```sql
select pg_cancel_backend(pid), now() - pg_stat_activity.query_start AS duration, query, state from pg_stat_activity where (now() - pg_stat_activity.query_start) > interval '1 minute';
```

Terminate:

```sql
select pg_terminate_backend(pid), now() - pg_stat_activity.query_start AS duration, query, state from pg_stat_activity where (now() - pg_stat_activity.query_start) > interval '1 minute';
```

In each case, the column containing the results of the `pg_*_backend(pid)` call will have a `t` for successes and an `f` for failures. Note that even a terminated process may not disappear instantaneously. (Failures should not happen if your database role is a superuser, which is the configuration we document and support, and is what we use on prod.)

#### Cancel auto vaccuum

Auto vacuum can sometimes run for a long time and hold a lock on a table, which blocks other queries or applications like migrator from running if they want to alter the table. You can safely kill the auto vacuum with the following queries:

1. Get the pid of the auto vacuum

```
select pid, now() - pg_stat_activity.query_start AS duration, query, state from pg_stat_activity where (now() - pg_stat_activity.query_start) > interval '1 minute';
   pid   |        duration        |                                           query                                            | state
---------+------------------------+--------------------------------------------------------------------------------------------+--------
 1357675 | 01:20:17.586733        | -- query hash: 2912539462                                                                 +| active
         |                        | -- query length: 270 (0 args)                                                             +|
         |                        | -- (could not infer source)                                                               +|
         |                        | AlTER TABLE codeintel_ranking_definitions ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ;+|
         |                        | AlTER TABLE codeintel_ranking_references ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ; +|
         |                        | AlTER TABLE codeintel_initial_path_ranks ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ;  |
 1457786 | 4 days 06:28:14.352962 | autovacuum: VACUUM public.codeintel_ranking_definitions (to prevent wraparound)            | active
     312 | 01:19:07.321368        | SELECT                                                                                    +| active
         |                        |     CURRENT_CATALOG AS datname,                                                           +|
         |                        |     r.relname AS relname,                                                                 +|
         |                        |     pg_total_relation_size(r.oid) AS bytes,                                               +|
         |                        |     pg_relation_size(r.oid) AS relsize,                                                   +|
         |                        |     pg_indexes_size(r.oid) AS indexsize,                                                  +|
         |                        |     pg_total_relation_size(r.reltoastrelid) AS toastsize                                  +|
         |                        | FROM pg_class r                                                                           +|
         |                        | JOIN pg_namespace n ON n.oid = r.relnamespace                                             +|
         |                        | WHERE                                                                                     +|
         |                        |     r.relkind = 'r' AND n.nspname NOT IN ('pg_catalog', 'information_schema');            +|
         |                        |                                                                                            |
(3 rows
```

2. From the above output, the auto vacuum has the pid 1457786 which we will use to cancel the auto vacuum. We cancel the query instead of terminating it, since cancel is considered safer.

```
SELECT pg_cancel_backend(1457786);
 pg_cancel_backend
-------------------
 t
(1 row)
```

#### Check/fix migration table

When migrations run, the `schema_migrations` table is updated to show the state of migrations. The `dirty` column indicates whether a migration is in-process, and the `version` column indicates the version of the migration the database is on or converting to. On startup, frontend will abort if the `dirty` column is set to true. (The table has only one row.)

If frontend fails at startup with a complaint about a dirty migration, a migration was started but not recorded as completing. This could mean that it actually failed. It could also mean that it completed, but took long enough that the readiness check killed frontend before the state was recorded. So it's possible that one or more commands from the migration ran successfully.

_Do not_ mark the migration table as clean if you have not verified that the migration was successfully completed.

To check the state of the migration table:

```sql
SELECT * FROM schema_migrations;
```

Typical output would look like:

```
  version   | dirty
------------+-------
 1528395539 | t
(1 row)
```

This indicates that migration 1528395539 was running, but has not yet completed. Check on the actual state of the migration directly; _if_ it has completed, you can manually clear the dirty bit:

```sql
UPDATE schema_migrations SET dirty = 'f' WHERE version = 1528395539;
```

Checking on the status of the migration requires looking at the migration's commands. The source for each migration is in `sourcegraph/sourcegraph/migrations`, in a file named something like `1528395539_.up.sql`. The number indicates a migration serial number, and the text (usually empty in recent migrations) after the serial number describes the purpose of the migration. There should be a corresponding `.down.sql` file to reverse the migration.

A full explanation of how to determine whether arbitrary SQL commands have successfully executed is beyond the scope of this document, but the most common/easy case is described below.

#### Describe a table and its indexes

Many migrations do nothing but create tables and/or indexes or alter them. You can get a description of a table and its associated indexes quickly using the `\d` command (note lack of semicolon):

```
sg=# \d global_dep
   Table "public.global_dep"
  Column  |  Type   | Modifiers
----------+---------+-----------
 language | text    | not null
 dep_data | jsonb   | not null
 repo_id  | integer | not null
 hints    | jsonb   |
Indexes:
    "global_dep_idx_package" btree ((dep_data ->> ('package'::text COLLATE "C")))
    "global_dep_idxgin" gin (dep_data jsonb_path_ops)
    "global_dep_language" btree (language)
    "global_dep_repo_id" btree (repo_id)
Foreign-key constraints:
    "global_dep_repo_id" FOREIGN KEY (repo_id) REFERENCES repo(id) ON DELETE RESTRICT
```

Using this information, you can determine whether a table exists, what columns it contains, and what indexes on it exist. This allows you to determine whether a given command ran successfully. For instance, if one of the commands in a migration was `CREATE INDEX global_dep_idx_package [...]`, and you got the above output from `\d`, that would indicate that the index was successfully created. If the index wasn't present, that would indicate that the `CREATE INDEX` had not been executed, and you would need to run that statement before clearing the `dirty` flag in `schema_migrations`.

#### List indexing and blocking activity

If `migrator` attempts to run whilst another service has a lock on the database, the frontend will not start until the other process has completed. Anectdotally `repo-updater` can create locks that last days at a time. If the migrator is running for a long time, you can view the progress of the indexing activity by running the following activity:

```
SELECT
  now()::TIME(0),
  a.query,
  p.phase,
  --round(p.blocks_done / p.blocks_total::numeric * 100, 2) AS "% done",
  p.blocks_total,
  p.blocks_done,
  p.tuples_total,
  p.tuples_done,
  p.lockers_done,
  p.lockers_total,
  p.current_locker_pid,
  ai.schemaname,
  ai.relname,
  ai.indexrelname
FROM pg_stat_progress_create_index p
JOIN pg_stat_activity a ON p.pid = a.pid
LEFT JOIN pg_stat_all_indexes ai on ai.relid = p.relid AND ai.indexrelid = p.index_relid;
```

To determine which service is blocking the migrator, run the following query:

```
   SELECT blocked_locks.pid     AS blocked_pid,
         blocked_activity.usename  AS blocked_user,
         blocking_locks.pid     AS blocking_pid,
         blocking_activity.usename AS blocking_user,
         blocked_activity.query    AS blocked_statement,
         blocking_activity.query   AS current_statement_in_blocking_process,
         blocked_activity.application_name AS blocked_application,
         blocking_activity.application_name AS blocking_application
   FROM  pg_catalog.pg_locks         blocked_locks
    JOIN pg_catalog.pg_stat_activity blocked_activity  ON blocked_activity.pid = blocked_locks.pid
    JOIN pg_catalog.pg_locks         blocking_locks
        ON blocking_locks.locktype = blocked_locks.locktype
        AND blocking_locks.DATABASE IS NOT DISTINCT FROM blocked_locks.DATABASE
        AND blocking_locks.relation IS NOT DISTINCT FROM blocked_locks.relation
        AND blocking_locks.page IS NOT DISTINCT FROM blocked_locks.page
        AND blocking_locks.tuple IS NOT DISTINCT FROM blocked_locks.tuple
        AND blocking_locks.virtualxid IS NOT DISTINCT FROM blocked_locks.virtualxid
        AND blocking_locks.transactionid IS NOT DISTINCT FROM blocked_locks.transactionid
        AND blocking_locks.classid IS NOT DISTINCT FROM blocked_locks.classid
        AND blocking_locks.objid IS NOT DISTINCT FROM blocked_locks.objid
        AND blocking_locks.objsubid IS NOT DISTINCT FROM blocked_locks.objsubid
        AND blocking_locks.pid != blocked_locks.pid

    JOIN pg_catalog.pg_stat_activity blocking_activity ON blocking_activity.pid = blocking_locks.pid
   WHERE NOT blocked_locks.GRANTED;
```

### Redis interactions

### Connecting to the Redis databases in production

Find the Redis pods:

```sh
$ kubectl -n prod get pods | grep redis
redis-cache-8475866c76-swxlz                         2/2     Running     0          22d
redis-store-7c5fb8dd89-jzx44                         2/2     Running     0          22d
```

Get a `redis-cli` prompt:

```sh
$ kubectl -n prod exec -it redis-store-7c5fb8dd89-jzx44 -- redis-cli
Defaulting container name to redis-store.
Use 'kubectl describe pod/redis-store-7c5fb8dd89-jzx44 -n prod' to see all of the containers in this pod.
127.0.0.1:6379>
```

## DNS/SSL settings on Cloudflare

- Visit https://dash.cloudflare.com/login (get the credentials from 1Password)
- Click on "sourcegraph.com"
- Click on DNS and make sure the IP matches the IP from `kubectl get -nprod services` (after settings the K8s context with `gcloud container clusters get-credentials main-cluster-5 --zone us-central1-f --project sourcegraph-dev`)
- Click on Crypto in the top bar and make sure it's set to **Full**

## Rolling back Sourcegraph.com to an old `frontend` image version

- Run `gcloud container clusters get-credentials main-cluster-5 --zone us-central1-f --project sourcegraph-dev`
- Visit https://hub.docker.com/r/sourcegraph/frontend/tags/ to find an older tag
- Run `kubectl edit deployment -nprod sourcegraph-frontend` and find the line that looks like `image: sourcegraph/frontend:22342_2018-10-30_a0ba521` and update the tag

## Deleting a repository and its data

1. Get pod names in production: `kubectl --namespace=prod get pods`
1. Connect to Postgres: `kubectl --namespace=prod exec -ti [pgsql pod name] -- psql -U sg`
1. Delete row: `DELETE FROM repo WHERE uri = 'github.com/example/example';`
1. Connect to gitserver-1: `kubectl --namespace=prod exec -ti [gitserver-1 pod name] -- sh`
1. Find and delete repo directory in `/data/repos/` if exists
1. Do steps 4 and 5 with gitserver-2 as well

## Failing `about.sourcegraph.com`

Several of our static sites are hosted by Netlify at `about.sourcegraph.com`. You can check the service status at https://www.netlifystatus.com/ as well as notifications to the #alerts-external channel.

If you discover an issue with Netlify but their status page is not displaying it, open a support request using the credentials in 1Password.

Sites:

- `about.sourcegraph.com`
- `sourcegraph.com/about` -307-> `about.sourcegraph.com/about`
- `sourcegraph.com/pricing` -307-> `about.sourcegraph.com/pricing`

For a full list of sites redirected from `sourcegraph.com/$KEY` reference the [router code](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/cmd/frontend/internal/app/ui/router.go#L86) in our frontend.

## Moving a GCE disk between projects

Moving a disk between projects requires multiple steps to ensure the disk is detached from its original source.

- The initial disk can only be created using the same type. To change its type, you will have to snapshot the disk and restore as a new type.
- The initial disks can only be moved to the same region as their source project.

Create a new disk in your target project from the old disk:

```
gcloud compute disks create ${TARGET_DISK_NAME} --source-disk=https://www.googleapis.com/compute/v1/projects/${SOURCE_PROJECT}/zones/${SOURCE_ZONE}/disks/${PVC_NAME} --project=${TARGET_PROJECT} --zone=${TARGET_ZONE} --type ${SOURCE_TYPE}
```

We now have to snapshot and restore the disk, to ensure the disk is unlinked from its source disk. This process is the same as its used to [change a disk zone or type](#changing-a-gce-disk-zone-or-type), please follow that playbook.

## Changing a GCE disk zone or type

To change disk region or type, we need to first create a snapshot and then restore it to the new region or type.

Snapshot:

```
gcloud compute disks snapshot ${SOURCE_DISK_NAME} --project=${PROJECT} --zone=${SOURCE_ZONE} --snapshot-names ${SNAPSHOT_NAME}
```

At this point, you can optionally delete the source disk.

Restore:

```
gcloud compute disks create ${TARGET_DISK_NAME} --project=${PROJECT} --size ${TARGET_DISK_SIZE} --source-snapshot ${SNAPSHOT_NAME} --zone=${TARGET_ZONE} --type ${TARGET_DISK_TYPE}
```

_TARGET_DISK_SIZE has to be equal or larger than the original source disk._

There is an [alias command](https://cloud.google.com/sdk/gcloud/reference/compute/disks/move) that performs the `snapshot -> restore` operation automatically to switch regions, but it fails on big disks.

## Changing Persistent Volume disk or other immutable parameters (PV replacement)

As changing i.e. `gcePersistenDisk` or most PVs parameters are not allowed, steps to replace the PV with minimal downtime period:

1. Prepare new disk - use `Changing a GCE disk zone or type` paragraph above.
2. Create new PV yaml file ([sample here](https://github.com/sourcegraph/deploy-sourcegraph-cloud/tree/release/base/indexed-search))

3. Apply new changes via opening, approving and merging a PR.
4. Check if new PV is available - `kubectl get pv -n prod`.
5. Prepare PR with old PV removal, which should be deleted in the [base folder](https://github.com/sourcegraph/deploy-sourcegraph-cloud/tree/release/base).
6. Delete PV and PVC which should be replaced - via `kubectl`.

```
kubectl delete pv <PV-to-be-removed>
kubectl delete pvc <PVC-to-be-replaced> -n prod
```

7. Merge PR from step 5 - this will invoke a deploy again, to recreate the PVC via a [buildkite job](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud).

8. Verify that new PV is used (should be in `Bound` status):

```
kubectl get pv
```

## Linking a PV/PVC to a GCE disk

When we need to re-link a disk to a PersistentVolume and its associated PersistentVolumeClaim because we are restoring a disks from a snapshot or for some other reasons, we will need to adapt the Kubernetes resource definitions to link the existing GCE disk to GKE.

Example PVC:

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: MyDisk
  namespace: SomeNamespace
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

We will first ensure that the Claim is directly linked to an fixed Persistent Volume by setting the `claimRef` to the desired PVC. You also need to ensure that the `accessModes`, `capacity` and all other settings match between the claim and the volume.

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: MyDisk
spec:
  accessModes:
    - ReadWriteOnce
  capacity:
    storage: 1Gi
  claimRef:
    name: MyDisk
    namespace: SomeNamespace
  storageClassName: SomeStorageClass
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: MyDisk
  namespace: SomeNamespace
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

Lastly, we need to link the volume to a GCE disk by setting `gcePersistentDisk`. We must ensure that `gcePersistentDisk.pdName` matches the disk name in GCE.

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: MyDisk
spec:
  accessModes:
    - ReadWriteOnce
  capacity:
    storage: 1Gi
  claimRef:
    name: MyDisk
    namespace: SomeNamespace
  gcePersistentDisk:
    fsType: ext4
    pdName: SomeGCEDisk
  storageClassName: SomeStorageClass
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: MyDisk
  namespace: SomeNamespace
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

### StatefulSets

There are some additional steps when dealing with an `StatefulSet` as claims are not statically defined and we need to ensure the generated `PersistentVolumeClaim`s match the static `PersistentVolume`s.

First, discard the `PersistentVolumeClaim` sections from the previous step, and inspect the `volumeClaimTemplates` section of the `StatefulSet`.

```
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: MySet
  namespace: SomeNamespace
[...]
spec:
  [...]
  replicas: 1
  volumeClaimTemplates:
    - metadata:
        name: DataDisk
      spec:
        accessModes:
        - ReadWriteOnce
        resources:
          requests:
            storage: 1Gi
        storageClassName: SomeStorageClass
```

Kubernetes will generate the `PersistentVolumeClaim` name using the `metadata.name` and `spec.volumeClaimTemplates.metadata.name` using the following format `${spec.volumeClaimTemplates.metadata.name}-${metadata.name}-${replica-index}` and will set the `claimRef.namespace` using `metadata.name`.

Example `PersistentVolume` using the previous `volumeClaimTemplates`:

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: DataDisk-0
spec:
  accessModes:
    - ReadWriteOnce
  capacity:
    storage: 1Gi
  claimRef:
    name: DataDisk-MySet-0
    namespace: SomeNamespace
  gcePersistentDisk:
    fsType: ext4
    pdName: SomeGCEDisk
  storageClassName: SomeStorageClass
```

## Export/Import a Cloud SQL database

Exporting/Importing a database to Cloud SQL using `gcloud` requires the export to existing in a Google Storage bucket and it can be performed across GCP projects.

Export:

```
gcloud --project=${SOURCE_PROJECT} sql export sql ${SOURCE_SERVER_NAME} 'gs://some-bucket/Cloud_SQL_Export_${SQL_SERVER_NAME}_${DB_NAME}' --database=${SOURCE_DB_NAME}
```

Import:

```
gcloud --project=${TARGET_PROJECT} sql import sql ${TARGET_SERVER_NAME} 'gs://some-bucket/Cloud_SQL_Export_${SOURCE_SERVER_NAME}_${SOURCE_DB_NAME}' --database=${TARGET_DB_NAME}
```

## [Sourcegraph.com is deleted entirely](dotcom_deleted_entirely.md)

This playbook has a dedicated [page](dotcom_deleted_entirely.md).

## Managed Services Platform

Guidance for Managed Services Platform (MSP) incidents is available in [Managed Services incident response](../../../../teams/core-services/managed-services/incidents.md).
