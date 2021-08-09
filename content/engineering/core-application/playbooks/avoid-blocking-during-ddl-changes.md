# Avoid blocking during DDL changes

Many DDL operations, such as the majority of the `ALTER TABLE` subcommands, acquire an `AccessExclusiveLock` on the specified table before performing the change. Acquiring the lock can take a non-trivial amount of time, as Postgres must ensure that the holder is the _only_ active transaction associated with the table. If the operation then takes a long time to complete, customers may perceive timeouts and other errors while using the product as concurrent transactions block and timeout.

## Playbook

We can avoid these issues by performing the migration steps manually, with aggressive timeouts in place. This will mitigate the lock acquisition issue by allowing us to retry until we find an open slot, and mitigates the blocking issue by ensuring that the operation is not permitted to take an excessive amount of time to complete.

> Note: before executing this playbook, make an announcement in both the #dev-announce and #dev-ops channels. Other teams may have committed their own migrations, and this playbook could cause those them to be unexpectedly skipped.

Let's assume we have a pull request with an expensive migration named `1000000011_alter_repo.sql`. We first need to connect to the database and change `schema_migrations` to match that value. This ensures that if the associated PR is merged, the migration will be skipped by the frontend.

```
localhost sourcegraph@sourcegraph=# SELECT * FROM schema_migrations;
┌────────────┬───────┐
│  version   │ dirty │
╞════════════╪═══════╡
│ 1000000010 │ f     │
└────────────┴───────┘
(1 row)
Time: 23.890 ms

localhost sourcegraph@sourcegraph=# UPDATE schema_migrations SET version = 1000000011;
UPDATE 1
Time: 9.217 ms
```

> Note: the migrator will skip _all_ migrations between the old and new value. If there are multiple migrations to be run, ensure that you execute each of them.

Next we'll configure an aggressive statement timeout, on the order of 50 to 100 milliseconds. This timeout applies only to our current session, and ensures that Postgres will rollback our operation promptly if it takes too long. Postgres sets this value to 0 by default, which means statements are permitted to execute indefinitely.

```
localhost sourcegraph@sourcegraph=# SELECT current_setting('statement_timeout');
┌─────────────────┐
│ current_setting │
╞═════════════════╡
│ 0               │
└─────────────────┘
(1 row)
Time: 0.759 ms

localhost sourcegraph@sourcegraph=# SELECT pg_sleep(1);
┌──────────┐
│ pg_sleep │
╞══════════╡
│          │
└──────────┘
(1 row)
Time: 1064.037 ms (00:01.064)

localhost sourcegraph@sourcegraph=# SET statement_timeout = 50;
SET
Time: 0.302 ms

localhost sourcegraph@sourcegraph=# SELECT pg_sleep(1);
ERROR:  57014: canceling statement due to statement timeout
LOCATION:  ProcessInterrupts, postgres.c:3106
Time: 120.526 ms
```

Now we can proceed with the DDL operation. Depending on how many transactions are active on the affected table, we may see the operation fail many times in a row. This is normal — we must acquire an `AccessExclusiveLock` but we've set a low timeout value. We may have to retry the operation several times before it eventually succeeds.

```
localhost sourcegraph@sourcegraph=# ALTER TABLE repo DROP COLUMN blocked;
ERROR:  57014: canceling statement due to statement timeout
LOCATION:  ProcessInterrupts, postgres.c:3106
Time: 1029.191 ms

localhost sourcegraph@sourcegraph=# ALTER TABLE repo DROP COLUMN blocked;
ERROR:  57014: canceling statement due to statement timeout
LOCATION:  ProcessInterrupts, postgres.c:3106
Time: 1080.322 ms

localhost sourcegraph@sourcegraph=# ALTER TABLE repo DROP COLUMN blocked;
ALTER TABLE
Time: 13.583 ms
```

### Success

Once the operation has completed, there's nothing further to do. You can terminate your connection to the database and merge the pull request. The migration will be skipped during deployment because we modified `schema_migrations` earlier in the playbook.

### Failure

If you're having trouble getting the operation to succeed, you may need to raise the timeout by a conservative amount. Try increments of +25 milliseconds, and remember that you may need to retry the operation multiple times regardless.

If you cannot get the operation to succeed even with a substantial timeout, contact the distribution team for assistance. For example, operations that rewrite a large number of rows may require a maintenance window or other high-touch coordination.
