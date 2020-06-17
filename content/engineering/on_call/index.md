# On-call

We have an ops on-call rotation managed through [OpsGenie](https://opsgenie.com). This rotation covers operation of our public site sourcegraph.com.

## Responsibilities

1.  Know when you are going to be on call. If you can't fulfill the responsibilities of on-call for any reason that week, swap with a teammate.
1.  Acknowledge pages promptly. If you do not acknowledge within 10 minutes, someone else will get paged.
1.  Identify the issue and collect information that might be useful for preventing the problem in the future (e.g. if a disk was full, what was it full with?).
    - This frequently involves running kubectl commands against our production cluster.
    - Make sure you have [setup access to kubernetes](https://about.sourcegraph.com/handbook/engineering/deployments#how-to-setup-access-to-kubernetes) and know [how to perform operations](https://about.sourcegraph.com/handbook/engineering/deployments#kubectl-cheatsheet) like: looking at logs for a service, restarting a service, getting a command shell in a running pod (e.g. to look at what is on disk).
1.  Take steps to resolve the issue (e.g. if a disk was full, delete any data that is safe to delete to resolve the immediate issue) if you can.
    - Don't mark pages as "resolved". Wait for the underlying alert to auto resolve.
    - If you have unsuccessfully attempted to figure out how to resolve a page, the page hasn't auto resolved (many do), and the issue appears important (e.g. impacts users), then get help from someone else. Prefer to contact people who you know are already awake/working.
1.  Add an entry to the [incidents log](https://docs.google.com/document/d/1dtrOHs5STJYKvyjigL1kMm6u-W0mlyRSyVxPfKIOfEw/edit?usp=sharing)
1.  File issues for any followup work that needs to happen.
1.  If alerts are too noisy and/or inactionable, take actions to fix or disable alerts.

## Slack channels

You'll want to be in #dev-ops, #buildkite, and #opsgenie on [Slack](../../communication/team_chat.md) in particular. Most of the work you do as the on-call engineer should be discussed in #dev-ops.

## Schedule

The authoritative schedule is in OpsGenie:
https://app.opsgenie.com/schedule#/190e2873-1e3b-4350-b67b-2e681d542970

I recommend importing the schedule into your calendar.

- You can subscribe to only your on-call weeks here: https://app.opsgenie.com/user/profile#/onCallSchedule/
- You can subscribe to the entire on-call schedule here: https://app.opsgenie.com/schedule#/190e2873-1e3b-4350-b67b-2e681d542970

To import to Google Calendar:

- Copy the webcal url from OpsGenie:
  ![copy-schedule-link.gif](copy-schedule-link.gif)
- Add calendar from URL
  ![gcal.gif](gcal.gif)

## Resources

Note: Most of our internally hosted services (\*.sgdev.org) use SSO with your
Sourcegraph Google account. We also have a document storing [shared] passwords
for external services.

- [Distribution team handbook section](../distribution/index.md)
- [Opsgenie](https://app.opsgenie.com/alert) - Paging account
- [Prometheus](https://prometheus.sgdev.org/) - Service-level instrumentation/metrics. Also consumes other metrics since Kubernetes exports Prometheus metrics from cAdvisor and Kubernetes services.
- [Grafana](https://grafana.sgdev.org/) - dashboard for graphing metrics
- [Kubernetes](https://github.com/sourcegraph/infrastructure/blob/master/kubernetes/README.md) Container management. Sourcegraph is run and managed by Kubernetes.
- [AlertManager](https://alertmanager.sgdev.org/) - Manages alerts from Prometheus.
- [Site24x7](https://www.site24x7.com/app/client#/home/monitors) - Graphs of uptime and response time for specific endpoints.

[shared]: https://docs.google.com/document/d/1vszZnGMxr-BeZJwvyzHLdhjWPDF6XI7IBFGmfIE7DGc/edit

## Alerts

NOTE: Before adding any alert, please ensure it is good enough to wake you up
at 3:30am. Good practice is to instrument first for a few days/week and check
if your alert would fire only when it should.

To create an alert you must first decide on the best place to instrument/get
data from.

- Can you measure it with a simple HTTP request succeeding? Then use
  Site24x7. We store the checks in the infrastructure repository. See the
  [Site24x7 README](https://github.com/sourcegraph/infrastructure/blob/master/site24x7/README.md).
- Is it a service level metric that already exists or you could add to the
  Sourcegraph codebase? eg p95 open connections to pgsql. Then use
  [Prometheus](../prometheus.md). See [enabled alerts](https://prometheus.sgdev.org/alerts).
- Do you need to validate a core user flow? Use
  [e2etest](https://github.com/sourcegraph/sourcegraph/blob/master/test/e2e/README.md)

## Playbook

### Free gitserver disk space on sourcegraph.com

#### 1. See the status of all gitserver pods

```console
kubectl get all -n prod -l app=gitserver -o wide

NAME              READY   STATUS            RESTARTS   AGE   IP             NODE                                NOMINATED NODE
pod/gitserver-0   0/1     CrashLoopBackOff  12         1h    10.52.14.6     gke-dot-com-dot-com-93160456-s7zw   <none>
pod/gitserver-1   1/1     Running           0          1h    10.52.13.189   gke-dot-com-dot-com-93160456-b7bk   <none>
pod/gitserver-2   1/1     Running           0          1h    10.52.0.165    gke-dot-com-dot-com-93160456-271w   <none>
```

#### 2. Verify that it's a disk space problem

Replace `gitserver-0` with the name of the affected pod.

```console
kubectl -n prod describe pod gitserver-0 | grep -A5 "Message:"

      Message:   t=2019-04-24T07:46:46+0000 lvl=info msg="Distributed tracing enabled" tracer=Lightstep
2019/04/24 07:46:46 failed to setup temporary directory: mkdir /data/repos/.tmp-old227473847: no space left on device
```

#### 3. SSH into the node where the affected pod is scheduled

The node address is present in the output of the first command you ran: `kubectl get all -n prod -l app=gitserver -o wide`. Replace the node name in the command below.

```console
gcloud compute ssh gke-dot-com-dot-com-93160456-s7zw --zone us-central1-f
```

#### 4. Become root and find the mount path containing `repos-gitserver-`

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

#### 5. Delete repos from disk until Use% is below 98%

```console
cd /var/lib/kubelet/plugins/kubernetes.io/gce-pd/mounts/$DISK_NAME/github.com
for repo in *; do echo $repo; rm -rf $repo; sleep 0.1; df -h .; done
```

At the same time you run this command, check in a different terminal split or window the status of gitserver pods.

```console
watch -n1 kubectl get all -n prod -l app=gitserver -o wide
```

#### 6. Verify service is restored

Open the alert UI to click on the check URL that was failing and verify it's now working again.

### Making updates to stateful sets 

Statefulsets are different to a deployment in that all pods must be in a healthy state before changes can be made.

Currently sourcegraph uses statefulsets for the following services:
  * gitserver
  * grafana  
  * indexed-search

In order to push an update to a failing statefulset take the following action:

#### 1. Update the statefulset `yaml` with the appropriate change and apply using:

```console
`kubectl apply -f <service.StatefulSet.yaml>`
```
#### 2. Delete the pods in the stateful set:

```console
REPLICAS=`kubectl get sts -n prod <statefulset> -o jsonpath={.spec.replicas}`; for i in `seq 0 $[REPLICAS-1]`; do POD=<statefulset>-$i;   echo "Deleting POD $POD";   kubectl delete pod -n prod $POD ; done
```
#### 3. The statesfulset controller will now restart the pods. Verify the pods are starting successfully. 

```console
watch -n1 kubectl get all -n prod -l app=gitserver -o wide
```

#### 4. Verify service is restored
Open the alert UI to click on the check URL that was failing and verify it's now working again.

### Useful dashboards

Check out the [kubectl cheatsheet](../deployments.md#kubectl-cheatsheet) for how to get access to Jaeger locally.

### Access pod logs in GCP console

1. Go to **Kubernetes Engine > Workloads**, then search and click on the pod you're interested, e.g. `sourcegraph-frontend`.
2. In the **Deployment details** page, there is a row called **Logs**, which has both **Container logs** and **Audit logs**.
3. Click on the **Container logs**, then you should be redirected to the **Logs Viewer** page.

### PostgreSQL database problems

We provide two sets of instructions here, shell commands and PostgreSQL commands to be run inside a `psql` instance. PostgreSQL commands are denoted by the prompt `sg=#` in this documentation; the actual prompt corresponds to the postgres user name.

There's also a web interface for checking on common things, `https://pgsql-inspector.sgdev.org/`. As of this writing, it appears to have an SSL certificate for the wrong host.

#### Shell commands

These commands assume you're on a local machine, and trying to access the live systems.

##### Helpful aliases

```bash
alias dbpod='kubectl get pods --namespace=prod | grep pgsql | cut -d " " -f 1'
alias proddb='kubectl exec -it --namespace=prod $(dbpod) -- psql -U sg -P pager=off';
```

##### Reauthenticate kubectl

If you see the following when running `kubectl` commands:

> Unable to connect to the server: x509: certificate signed by unknown authority

Run:

```
gcloud container clusters get-credentials dot-com --zone us-central1-f --project sourcegraph-dev
```

##### Check load average

```bash
kubectl exec -it --namespace=prod $(dbpod) -- top
```

You might also like the shorter output of `uptime`.

#### PostgreSQL interactions

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

##### List slow queries

Note that typical queries usually run in milliseconds, not seconds. "1 minute" is far enough out to be highly unusual.

```sql
select pid, now() - pg_stat_activity.query_start AS duration, query, state from pg_stat_activity where (now() - pg_stat_activity.query_start) > interval '1 minute';
```

##### Cancel or terminate slow queries

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

##### Check/fix migration table

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

##### Describe a table and its indexes

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

### DNS/SSL settings on Cloudflare

- Visit https://dash.cloudflare.com/login (get the credentials from 1Password)
- Click on "sourcegraph.com"
- Click on DNS and make sure the IP matches the IP from `kubectl get -nprod services` (after settings the K8s context with `gcloud container clusters get-credentials main-cluster-5 --zone us-central1-f --project sourcegraph-dev`)
- Click on Crypto in the top bar and make sure it's set to **Full**

### Rolling back Sourcegraph.com to an old `frontend` image version

- Run `gcloud container clusters get-credentials main-cluster-5 --zone us-central1-f --project sourcegraph-dev`
- Visit https://hub.docker.com/r/sourcegraph/frontend/tags/ to find an older tag
- Run `kubectl edit deployment -nprod sourcegraph-frontend` and find the line that looks like `image: sourcegraph/frontend:22342_2018-10-30_a0ba521` and update the tag

### Deleting a repository and its data

1. Get pod names in production: `kubectl --namespace=prod get pods`
1. Connect to Postgres: `kubectl --namespace=prod exec -ti [pgsql pod name] -- psql -U sg`
1. Delete row: `DELETE FROM repo WHERE uri = 'github.com/example/example';`
1. Connect to gitserver-1: `kubectl --namespace=prod exec -ti [gitserver-1 pod name] -- sh`
1. Find and delete repo directory in `/data/repos/` if exists
1. Do steps 4 and 5 with gitserver-2 as well
