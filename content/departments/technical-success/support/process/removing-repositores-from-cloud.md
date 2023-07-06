# Removing repositores from cloud

This document is a guide on how to completely remove repositories from Sourcegraph Cloud. (Requests for repo deletion should be routed to #ask-source).

## Prerequisites

The user should have privileged access to be able to perform this on Sourcegraph Cloud.

⚠️ **WARNING:** Be careful to make sure everything checks out as per the removal request.

## Process of removing repositories

We consider the following kinds of repositories:

- Public forks of private repositories
- Public repositories that are made private
- Public repositories added by other users or organizations other than the owner of the repository
- Private repositories

The removal process is the same across all the visibility types listed above.

Depending on the environment, exec into `pgsql` following the steps below:

For Cloud:

Follow the steps [here](../../../engineering/dev/process/deployments/postgresql.md#connecting-to-postgres)
to connect to the database for Sourcegraph Cloud.

For docker-compose deployments:

**Docker**

```
docker exec -it $PGSQL_CONTAINER -- psql -U sg
```

> 🔥 You are directly interfacing with productions databases. If you are unsure of any commands, please reach out in #dev-chat or #dev-ops.

**Option 1 ('Hard' delete)**

A hard delete leaves no trace of the repository in the database

1. If you know the name of the repo by it's URI get the id:

```
SELECT id FROM repo WHERE uri LIKE 'example.com/example/repo';
```

2. Delete the repo:

```
DELETE FROM repo WHERE id=<$id_of_the_repo>;
```

**Option 2 ('Soft' delete)**

A soft delete does not permanently delete a repository in the database and allows it to be un-deleted in the future.

1. Get the id of the repo:

```
SELECT id FROM repo WHERE uri LIKE 'example.com/example/repo';
```

2. Soft delete the repo:

```
UPDATE repo SET name = soft_deleted_repository_name(name), deleted_at = transaction_timestamp() WHERE deleted_at IS NULL AND id = <id_of_the_repo>;
```

Note: Deleting a repository from the database does not automatically delete the data on disk (in `gitserver`). This requires an additional step.

3. To get the correct repo in `gitserver` you will need to get it's `shard_id` by running the following command in the database:

```
SELECT shard_id FROM gitserver_repos where repo_id = <$id_of_the_repo>
```

## Removing the repository from disk

Exec into `gitserver`:

**Kubernetes**

```
kubectl exec -it $GITSERVER_POD sh
```

**Docker**

```
docker exec -it $GITSERVER_CONTAINER sh
```

and then

1. `cd /data/repos/<$codehost/repo-owner>`
1. `rm -rf $repo_name`

## Verifying the repository was removed from the database

1. Exec into `pgsql`
1. `SELECT FROM repo WHERE name LIKE 'example.com/example/repo';`

## Verifying the repository was removed from disk

1. `cd /data/repos/<$codehost/repo-owner>`
2. `ls $repo_name`

Both instances should return null results to help confirm deletion.

### DMCA process

Our DMCA policy for cloud is [here](https://about.sourcegraph.com/terms-cloud/#10-Copyright-infringement-and-DMCA-policy)
