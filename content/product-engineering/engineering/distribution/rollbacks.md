# Rollbacks

Before you consider a rollback, please read the [README](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/migrations/README.md?utm_product_name=GoLand&utm_product_version=GoLand#L22:48)
carefully.

## Testing

Before performing a rollback at a customer site it is a good thing to practice the same rollback (between the same versions)
on a test cluster and to write down the first and last migration numbers in the range.

## Gotchas

### Migrations have to be invertible

The migrations that fall in the necessary range for a rollback have to be invertible. This has to be checked both on the
DB and on the source code side. For example if the up migration drops a column then the down migration cannot recover
that data. This could be ok if the column has NULLABLE values, and the code in the previous version can tolerate a column with NULL entries.

If a migration in the range is not invertible then manual intervention is necessary. This involves for example populating
a column with some default value. In some cases a down migration is not possible because it would break assumptions already
made in code.

> It is good to check all the migrations involved in a rollback for being invertible.

### Large tables

A rollback at a customer could involve very large tables. In this case it makes sense to test the rollback with a test
cluster that has similarly large amounts of data to get an idea how long the migrations will take and how large the
transactions will be.

### Squashed migrations

If the rollback overlaps with squashed migrations then careful sorting out of the migration ranges is required.
This should definitely be tested on a test cluster.

## Performing many migrations

The number of migrations between two versions can be large. Doing them one-by-one manually can become tedious,
especially if we ask an admin at a customer site to do it. An option here is to use [migrate](https://github.com/golang-migrate/migrate)
similar to how we use it in dev.

The following are steps to accomplish this:

Before starting the rollback, check that the customer DB is at the expected migration number:

Without namespace:

```shell
kubectl exec $(kubectl get pod -l app=pgsql -o jsonpath='{.items[0].metadata.name}') -- psql -U sg -c 'SELECT * FROM schema_migrations'
```

With namespace `ns-sourcegraph` (change as appropriate):

```shell
kubectl -n ns-sourcegraph exec $(kubectl -n ns-sourcegraph get pod -l app=pgsql -o jsonpath='{.items[0].metadata.name}') -- psql -U sg -c 'SELECT * FROM schema_migrations'
```

- Deploy the previous version of Sourcegraph onto the cluster. Make sure that the dirty DB flag is `false`. The frontends will complain that
  the DB is at a newer schema version. That is expected and ok.
- Prepare a `migrations.tar.gz` package file with the contents of the `migrations` directory at the current customer version.
- Copy both `migrations.tar.gz` and the `migrate` [binary](https://github.com/golang-migrate/migrate/releases) onto the pgsql pod.
- We will run `migrate` on the pod to eliminate kubectl port-forwarding of the postgres DB port. This is important if migrations
  take a while and a dropped connection could interfere:

On the `pgsql` pod and `pgsql` container execute:

```shell
PGSSLMODE=disable PGUSER=sg ./migrate -source file://<path to the unpacked migration dir> -database postgres://localhost:5432/sg down <number of migrations downward to previous version>
```

Once done, check the migration number again to see if it is at the expected previous version. Also check that the dirty DB flag is still `false`.

If everything looks good, restart the frontend pods.
