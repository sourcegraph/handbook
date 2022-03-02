# Removing repositores from cloud

There has been (and presumably),will be instances whereby customers using Sourcegraph cloud will request removal of repositories. This document exists as a guide on how to do so.

## Prerequisites

Such a request assumes that the user who intends to delete a repository on behalf of a customer and as per their request, has privileged access to be able to do this on cloud.

An **important** note on this is to be extra vigilant and careful to make sure everything checks out as per the removal request.

Regardless of repository visibility, the process is basically the same and you have the following options to be help accomplish this.

These are as follows:

## Process of removing repositories

We consider the following kinds of repositories;

1. Public forks of private repositories,
2. Public repositories that are made private,
3. Public repositories added by other users or organizations other than the owner of the repository,
4. Private repositories.

The removal process is the same across all the visibility types listed above.

You can;

Exec into `pgsql` with either;

`kubectl exec -ti $PGSQL_POD -- psql -U sg` in Kubernetes or;

`docker exec -it $PGSQL_CONTAINER -- psql -U sg` in Docker

then;

- **Option 1 ('Hard' delete)**

Note: A hard delete leaves no trace of the repository in the database

1. If you know the name of the repo by it's URI get the id of the repo that you would like to delete by running: `SELECT id FROM repo WHERE name LIKE 'example.com/example/repo';` or `SELECT id FROM repo WHERE uri LIKE 'example.com/example/repo'; `
2. Delete the repo by running: `DELETE FROM repo WHERE id=<$id_of_the_repo>;`

- **Option 2 ('Soft' delete)**

Note: A soft delete does not permanently delete a repository in the database. What a soft delete means is that a repository can be un-deleted in the future.

1. Get the id of the repo by running: `SELECT id FROM repo WHERE uri LIKE 'example.com/example/repo'; `
2. Rename the repo by running: `UPDATE repo SET name = soft_deleted_repository_name(name), deleted_at = transaction_timestamp() WHERE deleted_at IS NULL AND id = <$id_of_the_repo>`

Note: Deleting a repository from the database does not automatically delete the data on disk (in `gitserver`). This requires additional steps.
To get the correct repo in `gitserver` you will need to get it's `shard_id` by running the following command in the database;

`SELECT shard_id FROM gitserver_repos where repo_id = <$id_of_the_repo>`

## Removing the repository from disk

Exec into `gitserver` by running;

`kubectl exec -it $GITSERVER_POD sh` on Kubernetes

or

`docker exec -it $GITSERVER_CONTAINER` sh on Docker

and then;

1. `cd` into `/data/repos/`
2. Navigate (`cd`) into the codehost/repo-owner
3. Run `rm -rf $repo_name`

## Verifying the repository was removed from the database

1. Exec into `pgsql` and then;
2. `SELECT FROM repo WHERE name LIKE 'example.com/example/repo';`

## Verifying the repository was removed from disk

1. `cd` into `/data/repos/`
2. Navigate (`cd`) into the codehost/repo-owner
3. Grep for the repo

Both instances should return null results to help confirm deletion.
