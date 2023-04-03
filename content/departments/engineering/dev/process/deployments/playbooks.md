# Playbooks for deployments

- [Playbooks for deployments](#playbooks-for-deployments)
  - [General](#general)
  - [Debugging](#debugging)
    - [Check what version of Sourcegraph is deployed](#check-what-version-of-sourcegraph-is-deployed)
  - [Sourcegraph.com](#sourcegraphcom)
    - [Deploying to sourcegraph.com](#deploying-to-sourcegraphcom)
    - [Deploying to sourcegraph.com during code freeze](#deploying-to-sourcegraphcom-during-code-freeze)
    - [Manually deploying a service to sourcegraph.com](#manually-deploying-a-service-to-sourcegraphcom)
    - [Rolling back sourcegraph.com](#rolling-back-sourcegraphcom)
    - [Disable Renovate](#disable-renovate)
    - [Backing up & restoring a Cloud SQL instance (production databases)](#backing-up--restoring-a-cloud-sql-instance-production-databases)
    - [Invalidating all user sessions](#invalidating-all-user-sessions)
    - [Accessing sourcegraph.com database](#accessing-sourcegraphcom-database)
      - [Via the CLI](#via-the-cli)
      - [Via BigQuery (for read-only operations)](#via-bigquery-for-read-only-operations)
    - [Restarting docs.sourcegraph.com](#restarting-docssourcegraphcom)
    - [Creating banners for maintenance tasks](#creating-banners-for-maintenance-tasks)
    - [Gitserver disk space related maintenance](#gitserver-disk-space-related-maintenance)
  - [k8s.sgdev.org](#k8ssgdevorg)
    - [Manage users in k8s.sgdev.org](#manage-users-in-k8ssgdevorg)
  - [PostgreSQL](#postgresql)
  - [Cloudflare Configuration](#cloudflare-configuration)

## General

## Debugging

See [debugging](./debugging/index.md).

### Check what version of Sourcegraph is deployed

[Install `sg`, the Sourcegraph developer tool](https://github.com/sourcegraph/sourcegraph/blob/main/dev/sg/README.md), and using the [`sg live` command](https://github.com/sourcegraph/sourcegraph/blob/main/dev/sg/README.md#sg-live---see-currently-deployed-version) you can see the version currently deployed for a specific environment:

```sh
sg live <environment|url>
```

## Sourcegraph.com

To learn more about this deployment, see [instances](./instances.md#sourcegraph-cloud).

### Deploying to sourcegraph.com

Every commit to the `release` branch (the default branch) on [deploy-sourcegraph-cloud](https://github.com/sourcegraph/deploy-sourcegraph-cloud) deploys the Kubernetes YAML in this repository to our dot-com cluster [in CI](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud/builds?branch=release) (i.e. if CI is green then the latest config in the `release` branch is deployed).

Deploys on sourcegraph.com are currently [handled by Renovate](#renovate). The [Renovate dashboard](https://app.renovatebot.com/dashboard#github/sourcegraph/deploy-sourcegraph-cloud) shows logs for previous runs and allows you to predict when the next run will happen.

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

### Disable Renovate

1. Go to [renovate.json](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/renovate.json5) and comment out the file.
1. Ensure that no Renovate PRs are currently pending to update the images [here](https://github.com/sourcegraph/sourcegraph/pulls/app%2Frenovate)
1. After the incident, revert your commit and uncomment the file.

### Backing up & restoring a Cloud SQL instance (production databases)

Before any potentially risky operation you should ensure the databases have recent ( < 1 hour) backups. We currently have daily backups enabled.

You can create a backup of a Cloud SQL instance via `gcloud sql backups create --instance=${instance_name} --project=sourcegraph-dev`

To restore a Cloud SQL instance to a previous revision you can use `gcloud sql backups restore $BACKUP_ID --restore-instance=${instance_name}`

You can also perform these commands from the [Google Cloud SQL UI](https://console.cloud.google.com/sql/instances?project=sourcegraph-dev)

🚨 You should notify the #dev-ops channel if an situation arises when a restore my be required. It should also be filed in our ops-incident log.

### Invalidating all user sessions

If all user sessions need to be invalidated, you can run this on the `frontend` database to force all users to log in again.

```
UPDATE users SET invalidated_sessions_at=now(), updated_at=now();
```

### Accessing sourcegraph.com database

#### Via the CLI

Sourcegraph.com utilizes an external HA database. You will need to connect to it directly. The easiest way to do this is through the `gcloud` cli.

To connect to the production database:

```
  gcloud beta sql connect sg-cloud-732a936743 --user=sg -d sg --project sourcegraph-dev
```

However, if you want to use any other SQL client, you'll have to run the [`cloud_sql_proxy`](https://cloud.google.com/sql/docs/postgres/connect-admin-proxy#install) utility, which authenticates with you local `gcloud` credentials automatically.

```
  cloud_sql_proxy -instances=sourcegraph-dev:us-central1:sg-cloud-732a936743=tcp:5555
```

Once the proxy connects successfully, you can use any client to connect to the local `5555` port (you can choose any other port you want).

The password of the sg user is in our shared 1Password under [Google Cloud SQL](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/svfiw4vcbxhhbobpl442olyebu)

#### Via BigQuery (for read-only operations)

You can also query the production database via BigQuery as an external data source.

See an [example query](https://console.cloud.google.com/bigquery?sq=527047051561:bfa7c7e57f884d209f261d15e4610229) to get started.

**Note**: This method only permits read-only access

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

## PostgreSQL

See [PostgreSQL](./postgresql.md)

## Cloudflare Configuration

For documentation on how to configure Cloudflare's WAF and rate limiter, see the [security documentation](./security.md#cloudflare).
