# Playbooks for deployments

This page collects playbooks for Sourcegraph deployments managed and operated by the company.
Refer to [the instances page](./instances.md) for a complete listing.

- [General](#general)
- [Debugging](#debugging)
  - [Check what version of Sourcegraph is deployed](#check-what-version-of-sourcegraph-is-deployed)
- [Sourcegraph.com](#sourcegraphcom)
  - [Observability](#observability)
  - [Deploying to sourcegraph.com](#deploying-to-sourcegraphcom)
  - [Deploying to sourcegraph.com during code freeze](#deploying-to-sourcegraphcom-during-code-freeze)
  - [Manually deploying a service to sourcegraph.com](#manually-deploying-a-service-to-sourcegraphcom)
  - [Rolling back sourcegraph.com](#rolling-back-sourcegraphcom)
  - [Accessing sourcegraph.com database](#accessing-sourcegraphcom-database)
    - [Connect to dotcom database via command line](#connect-to-dotcom-database-via-command-line)
      - [Using Cloud SQL Proxy](#using-cloud-sql-proxy)
      - [Example database queries](#example-database-queries)
    - [Connect to dotcom database via BigQuery](#connect-to-dotcom-database-via-bigquery)
  - [Backing up \& restoring a Cloud SQL instance (production databases)](#backing-up--restoring-a-cloud-sql-instance-production-databases)
  - [Database performance monitoring](#database-performance-monitoring)
  - [Invalidating all user sessions](#invalidating-all-user-sessions)
  - [Restarting docs.sourcegraph.com](#restarting-docssourcegraphcom)
  - [Creating banners for maintenance tasks](#creating-banners-for-maintenance-tasks)
  - [Gitserver disk space related maintenance](#gitserver-disk-space-related-maintenance)
    - [Blocked repos](#blocked-repos)
      - [Outlandishly sized repos](#outlandishly-sized-repos)
      - [Blocking a repo](#blocking-a-repo)
- [k8s.sgdev.org](#k8ssgdevorg)
  - [Manage users in k8s.sgdev.org](#manage-users-in-k8ssgdevorg)
  - [Accessing k8s.sgdev.org database](#accessing-k8ssgdevorg-database)
- [Cloudflare Configuration](#cloudflare-configuration)

## General

## Debugging

See [debugging](./debugging/index.md).

### Working with Kubernetes deployments

See [Working with Kubernetes deployments](./kubernetes.md)

### Check what version of Sourcegraph is deployed

[Install `sg`, the Sourcegraph developer tool](https://github.com/sourcegraph/sourcegraph/blob/main/dev/sg/README.md), and using the [`sg live` command](https://github.com/sourcegraph/sourcegraph/blob/main/dev/sg/README.md#sg-live---see-currently-deployed-version) you can see the version currently deployed for a specific environment:

```sh
sg live <environment|url>
```

## Sourcegraph.com

To learn more about this deployment, see [instances](./instances.md#dotcom).

### Observability

See [Sourcegraph.com observability](../../tools/observability/dotcom.md) for general observability guidance for the instance.

### Deploying to sourcegraph.com

Every commit to the `release` branch (the default branch) on [deploy-sourcegraph-cloud](https://github.com/sourcegraph/deploy-sourcegraph-cloud) deploys the Kubernetes YAML in this repository to our dot-com cluster [in CI](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud/builds?branch=release) (i.e. if CI is green then the latest config in the `release` branch is deployed).

Deploys on sourcegraph.com are currently [handled by GitHub Actions](index.md#continuous-deployment-process).

If you want to expedite a deploy, you can manually create and merge a PR that updates the Docker image tags in [deploy-sourcegraph-cloud](https://github.com/sourcegraph/deploy-sourcegraph-cloud). You can find the desired Docker image tags by looking at the output of the Docker build step in [CI on sourcegraph/sourcegraph `main` branch](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=main) or by looking at [Docker Hub](https://hub.docker.com/u/sourcegraph/).

### Deploying to sourcegraph.com during code freeze

Note: sample for `2021-08-19` code freeze.

**Image build**

To ensure stability during a [code freeze](https://en.wikipedia.org/wiki/Freeze_%28software_engineering%29), a separate `release/YYYY-MM-dd` branch will be created from `main`, with only approved commits to be `cherry-picked` onto `release/YYYY-MM-dd` branch for release. To ensure any compability between the `main` and `release/YYYY-MM-dd` branches, **ALL** commits must first be merged to `main` and pass [CI](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=main) for being `cherry-picked`. All tests will be run on the `release/YYYY-MM-dd` branch and must pass before docker images are published to docker hub.
When creating a hotfix PR in `sourcegraph/sourcegraph`, it is important to create a branch with prefix `main-dry-run/` (it enables CI pipeline similar to the pipeline which is run against every commit in main branch). This can be done with:

```sh
sg ci build main-dry-run
```

More about [pipeline run types](https://docs.sourcegraph.com/dev/background-information/ci/reference).

**Deploy**

During the code freeze, [Renovate](#renovate) will be disabled on **YYYY-MM-dd 12:00+00:00** and no automatic updates to Kubernetes manifests will be made. To deploy your changes, you can manually create and merge (requires approval from [CloudDevops](../../../teams/devops/index.md)) a PR that updates the Docker image tags in [deploy-sourcegraph-cloud](https://github.com/sourcegraph/deploy-sourcegraph-cloud). You can find the desired Docker image tags by looking at the output of the Docker build step in [CI on sourcegraph/sourcegraph `release/YYYY-MM-dd` branch](https://buildkite.com/sourcegraph/sourcegraph/builds?branch=release%2F2021-08-19) or by looking at [Docker Hub](https://hub.docker.com/u/sourcegraph/).

Once your PR has been merged, you can follow the deployment via [CI on the `release` branch](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud/builds?branch=release).

### Manually deploying a service to sourcegraph.com

Sometimes you need to manually deploy a service to sourcegraph.com instead of relying on our CD process i.e. hotfix during code freeze.

Usually you'll know the build from which you'd like to deploy, we'll use a specific build of gitserver as an example:

1. Find the [green build](https://buildkite.com/sourcegraph/sourcegraph/builds/118059) in Buildkite
2. Find the [step](https://buildkite.com/sourcegraph/sourcegraph/builds/118059#30aa1bb5-084f-47bf-874a-8266fe87ec68) that built the Docker image for your service
3. Find the image, which will have the format `index.docker.io/sourcegraph/{SERVICE}:{TIMESTAMP}@sha256:{HASH}`
4. Pull the latest from [deploy-sourcegraph-cloud](https://github.com/sourcegraph/deploy-sourcegraph-cloud)
5. Check out the `release` branch
6. Create a new branch
7. Run the `update-images.py` script using the image URL from step 3. For example:

   ```
   ./update-images.py index.docker.io/sourcegraph/gitserver:118059_2021-11-29_05fcc11@sha256:0c8a862e7977a830e2fa8a690ac243eea1255c150766a44b6c6c86df959d224f
   ```

8. Commit, push your changes and have them reviewed either by [CloudDevops](../../../teams/devops/index.md).
9. Once merged, the CD process will take over and deploy the image(s) you've updated

### Rolling back sourcegraph.com

To roll back soucegraph.com, push a new commit to the `release` branch in [deploy-sourcegraph-cloud](https://github.com/sourcegraph/deploy-sourcegraph-cloud) that reverts the image tags and configuration to the desired state.

```sh
# Ensure that you're up-to-date
git checkout release
git pull

# Rollback the release branch to $COMMIT
# See https://stackoverflow.com/a/21718540 if you want more context
git revert --no-commit $COMMIT..HEAD

# Push the revert commit back to the release branch
git commit
git push origin release
```

[Buildkite](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud/) will deploy the working commit to sourcegraph.com.

🚨 You also need to disable auto-deploys to prevent Renovate from automatically merging in image digest updates so that the site doesn't roll-forward.

### Accessing sourcegraph.com database

Sourcegraph.com utilizes an external HA database in Google Cloud.
We currently run two separate databases.
The `sg-cloud` database is the primary database, and the code-intel team uses the `sg-cloud-code-intel` database.

You can directly view the database in [GCP](https://console.cloud.google.com/sql/instances?project=sourcegraph-dev).

To connect to the database, there are two options:

1. [Connect to dotcom database via command line](#connect-to-dotcom-database-via-command-line)
2. [Connect to dotcom database via BigQuery](#connect-to-dotcom-database-via-bigquery) (read-only access)

#### Connect to dotcom database via command line

> [!WARNING] Before trying to connect to the dotcom database, you need to:
>
> - make an [Entitle request](https://app.entitle.io/) for either the `Sourcegraph Read only access` permission set to get read-only access or `Sourcegraph Dot Com projects` permission set for write access
> - ensure you have [installed the Google Cloud SDK](https://cloud.google.com/sdk/docs/install) - `sg setup` also handles this for you.

We utilize the [Google Cloud SDK](https://cloud.google.com/sdk) utility [Cloud SQL Proxy](https://cloud.google.com/sql/docs/postgres/sql-proxy) to connect to our production databases. By default, our Cloud SQL databases are not accessible.

There are two ways of connecting: either using the `gcloud sql connect` command, which will use the `pgsql` client, or running the `cloud_sql_proxy` on a port locally to utilize your preferred tools.

You may use these `gcloud` commands to connect directly to the databases:

- Default database (`sg-cloud`) [user passwords](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&v=dnrhbauihkhjs5ag6vszsme45a&i=pjxf64qxwsin4d56xij6vm3gva&h=my.1password.com)

  ```sh
  gcloud beta sql connect --project sourcegraph-dev sg-cloud-732a936743 --user=dev-readonly -d=sg
  ```

- `sg-cloud-code-intel` database [user passwords](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&v=dnrhbauihkhjs5ag6vszsme45a&i=hbgj2dfajwj7cdiifk3zb2h2b4&h=my.1password.com)

  ```sh
  gcloud beta sql connect --project sourcegraph-dev sg-cloud-code-intel-9fc67e507c  --user=dev-readonly -d=sg
  ```

If you receive an error while connecting, ensure you have the required permissions through Entitle and re-request them if they have expired.

Go to [Example Queries](#example-database-queries) to continue

##### Using Cloud SQL Proxy

Using `cloud_sql_proxy` allows you to connect to the database with any client of your choice.
Install the Cloud SQL proxy by running this command with `gcloud`:

```sh
gcloud components install cloud_sql_proxy
```

To get started, run the `cloud_sql_proxy` against our production instance:

```sh
cloud_sql_proxy -instances=sourcegraph-dev:us-central1:sg-cloud-732a936743=tcp:5555
```

Now, in a new terminal, run the command below. The database will be running on `localhost:5555`

```sh
export PGPASSWORD='<$PASSWORD>'
psql -h localhost -p 5555 -d sg -U 'dev-readonly'
```

Note, that to connect to `localhost:5555` you still need to supply the postgres password stored in 1Password (mentioned above).

##### Example database queries

> [!WARNING] 🔥 **You are directly interfacing with the production database.**
> If you are unsure of any commands, please reach out in #discuss-dev-ops or #chat-dev.
> Please prefer using a readonly user.

- See all fields on a table (ie the `repo` table)

  ```psql
    \d+ repo
  ```

- See the total number of rows in the `repo` table

  ```psql
    SELECT COUNT(*) FROM repo;
  ```

#### Connect to dotcom database via BigQuery

You can also query the production database via BigQuery as an external data source.
Using BigQuery, if you want to run the query:

```psql
SELECT name::text,created_at::text FROM repo LIMIT 5;
```

against the Prod CloudSQL database, you need to run the following in [BigQuery console](https://console.cloud.google.com/bigquery?sq=527047051561:67f2616f4acb4b7cb3639e4a97e2f4aa):

```psql
SELECT * FROM EXTERNAL_QUERY("sourcegraph-dev.us.sg-cloud", "SELECT name::text,created_at::text FROM repo LIMIT 5;");
```

Note that here, we are passing the PostgreSQL query in the second parameter to `EXTERNAL_QUERY`.

See an [example query](https://console.cloud.google.com/bigquery?sq=527047051561:bfa7c7e57f884d209f261d15e4610229) to get started.

> [!NOTE] This method only permits read-only access. For write access, try [connecting to the dotcom database via command line](#connect-to-dotcom-database-via-command-line).

### Backing up & restoring a Cloud SQL instance (production databases)

Before any potentially risky operation you should ensure the databases have recent ( < 1 hour) backups. We currently have daily backups enabled.

You can create a backup of a Cloud SQL instance via `gcloud sql backups create --instance=${instance_name} --project=sourcegraph-dev`

To restore a Cloud SQL instance to a previous revision you can use `gcloud sql backups restore $BACKUP_ID --restore-instance=${instance_name}`

You can also perform these commands from the [Google Cloud SQL UI](https://console.cloud.google.com/sql/instances?project=sourcegraph-dev)

> [!WARNING] 🚨 You should notify the #dev-ops channel if an situation arises when a restore my be required. It should also be filed in our ops-incident log.

### Database performance monitoring

We run a PgHero deployment as well you can use to analyze slow queries and overall database performance.

```sh
kubectl port-forward -n monitoring deploy/pghero 8080:8080
```

And then navigate to http://localhost:8080 to view the dashboard

See additional Postgres tips in our [incident docs](../incidents/playbooks/index.md#postgreSQL-database-problems)

### Invalidating all user sessions

If all user sessions need to be invalidated, you can run this on the `frontend` database to force all users to log in again.

```psql
UPDATE users SET invalidated_sessions_at=now(), updated_at=now();
```

### Restarting docs.sourcegraph.com

To restart the services powering docs.sourcegraph.com:

Configure kubectl context to the dotcom cluster

```sh
gcloud container clusters get-credentials cloud --zone us-central1-f --project sourcegraph-dev
```

Rollout a restart

```sh
kubectl -n default rollout restart deploy docs-sourcegraph-com
```

Wait a moment, and check https://docs.sourcegraph.com/.

### Creating banners for maintenance tasks

For database upgrades or other tasks that might cause some aspects of Sourcegraph to be unavailable, we provide a banner across the top of the site. This can be done via editing **Global Settings** with the following snippet.

```json
"notices": [
    {
"dismissible": false,
"location": "top",
"message": "🚀 Sourcegraph is undergoing a scheduled upgrade.
You may be unable to perform some write actions during this time, such as updating your user settings."
    },
]
```

### Gitserver disk space related maintenance

We clone a public GitHub.com repo on dotcom if a user visits it and it is not already cloned. This means over time, dotcom accumulates a lot of repos that are visited maybe a long time ago and do not need to be stored on disk - especially if gitserver's free disk space if running low. As a result, it usually doesn't hurt to delete these repos, most of which happen to be 0 stars.

In the last round of cleanup in March 2023, we removed 1.8 million 0 star repos that used up a cumulative disk space of 65TB across all gitserver shards. This cleanup also ensured that we do not need to increase the disk size immediately as we were had only about ~10% free disk space prior to the cleanup.

Increasing the disk space is costly ([30TB costs ~$5k per month for the current tier of disk we use in gitserver on dotcom](https://cloud.google.com/products/calculator#id=47a69a3f-3841-46fb-8695-ac40e7094ac6)), both in immediate expenses for extra storage and future costs in terms of efforts and risk should we need to reduce the disk size. Reducing disk size is time consuming, risky and potentially incurs downtime and can also lead to data loss. All of this indicates that we should do our best to stay within the currently allocated disk sizes as best as we can and only increase disk space if we really are sure that it is the right choice and have weighed in all other options in depth.

Dotcom lazily syncs GitHub.com repositories, which also makes it safe to delete those repositories since they will not be cloned automatically the next time the code host connection completes a sync.

At the time of writing this doc, we do not store information on when a last repository was visited by a user although adding this is planned but not promised. If you are reading this doc and last visited information is now available, you should factor that into deciding which repos should be deleted. Currently, we delete 0 star repos to start with and if that is not enough then we delete 1 star repos, however the more the number of stars increases, the gains in recovered disk space start reducing down, for example all 0 star repos when we did the last cleanup amounted to ~65TB, and all 1 star repos amounted to ~11TB while 2 star repos amounted to just ~5GB.

To find out disk space used by repos you may use a query like the following for example, where we find the count and total disk space used by all 0 star repos synced with GitHub.com:

```sql
SELECT
	count(*),
	pg_size_pretty(sum(repo_size_bytes))
FROM (
	SELECT
		*
	FROM
		repo
		JOIN gitserver_repos gr ON repo.id = gr.repo_id
		JOIN external_service_repos esr ON esr.repo_id = repo.id
			AND esr.external_service_id = 4
	WHERE
		repo.stars < 1
		AND repo.external_service_type = 'github'
		AND repo.deleted_at IS NULL
		AND repo.blocked IS NULL
		AND gr.clone_status = 'cloned') repo;
```

Once you've arrived at the final query that gives you right selection for the repos to deleted, you should use it to delete the repos in batches of 10000. The last time we ran the cleanup, deleting 10k repos took anywhere between 20-40 seconds depending on the usage of the `repo` table. As a result running in short batches is a good approach to quickly cancel and stop operations in case the need arises. Also incremental feedback every half a minute is great versus running a query for 10 hours and staring at a command not knowing if its still running or if its stuck.

If the above query accurately reflects the set of repos to be deleted, then you can "mark the repo as deleted" by running the following query:

```sql
UPDATE repo
SET name = soft_deleted_repository_name(name), deleted_at = now()
WHERE id IN ((
	SELECT
		repo.id
	FROM
		repo
		JOIN gitserver_repos gr ON repo.id = gr.repo_id
		JOIN external_service_repos esr ON esr.repo_id = repo.id
			AND esr.external_service_id = 4
	WHERE
		repo.stars < 1
		AND repo.external_service_type = 'github'
		AND repo.deleted_at IS NULL
		AND repo.blocked IS NULL
		AND gr.clone_status = 'cloned'
	LIMIT 10000)); \watch 5;
```

This will delete 10000 repositories at a time and sleep for 5 seconds between each successful batch.

Once the repos are marked as deleted, the [purge worker](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@05ccd17626361dc78ad76428c8734ac61dedf888/-/blob/internal/repos/purge.go?L23-66) will eventually recover the disk space that is occupied by these deleted repos.

#### Blocked repos

You might have noticed above that we do not delete blocked repos. This is essential because marking them as deleted means if the repository matches the filter patterns of any of the code hosts configured on dotcom, or if the repository is visited by a user on the website it will be cloned again, thereby defeating the purpose of blocking it in the first place.

##### Outlandishly sized repos

Some repos contain data sets, binaries that are rarely useful for code search and do nothing but occupy a ton of disk space. You may want to list the largest repos that are on disk and not blocked and either block or deleted them on a case by case basis.

For example, the following query will list the id, name, gitserver shard and the disk space used by the 100 largest repos in descending order:

```sql
SELECT
	r.id,
	r.name,
	gr.shard_id,
	pg_size_pretty(gr.repo_size_bytes)
FROM
	repo AS r
	JOIN gitserver_repos AS gr ON r.id = gr.repo_id
WHERE
	r.deleted_at IS NULL
	AND r.blocked IS NULL
	AND gr.repo_size_bytes IS NOT NULL
ORDER BY
	repo_size_bytes DESC
LIMIT 100;
```

##### Blocking a repo

Get the current timestamp from [epochconverter.com](https://www.epochconverter.com/) and use it to mark the repo as blocked:

```
UPDATE
	repo
SET
	blocked = '{"at": "<insert-timestamp>", "reason": "<add an appropriate reason>"}'
WHERE
	id = <ID-OF-REPO>;
```

Gitserver will then [select the repo](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@05ccd17626361dc78ad76428c8734ac61dedf888/-/blob/internal/database/gitserver_repos.go?L228) to be purged from disk.

## k8s.sgdev.org

To learn more about this deployment, see [instances](./instances.md#k8s-sgdev-org).

### Manage users in k8s.sgdev.org

To create an account on [k8s.sgdev.org](https://k8s.sgdev.org), log in with your Sourcegraph Google account via OpenID Connect.

To promote a user to site admin (required to make configuration changes), use the admin user credentials available in 1password (titled `k8s.sgdev.org admin user`) to log in to [k8s.sgdev.org](https://k8s.sgdev.org), and go to the [users page](https://k8s.sgdev.org/site-admin/users) to promote the desired user.

### Accessing k8s.sgdev.org database

This instance is run completely on Kubernetes, including its Postgres databases.

1. First, [connect to the cluster](./instances.md#k8ssgdevorg).
2. Then you can port-forward the pgsql deployment: `kubectl port-forward -n dogfood-k8s pgsql-0 8080:5432`
3. Then access it locally: `pgcli -h localhost -p 8080 -d sg -U 'sg'`

## Cloudflare Configuration

For documentation on how to configure Cloudflare's WAF and rate limiter, see the [security documentation](./security.md#cloudflare).
