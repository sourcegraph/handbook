# Navigating the PGSQL Database

## The PGSQL database

The PGSQL database is Sourcegraph's main database. It contains the majority of the application data with the exception of code-intel and code-insights data.

## When to run queries against the PGSQL database

Running queries against this database should be used as a backup debugging option after exhausting the available search options exposed through the GraphQL API. The GraphQL API is both easier and safer to use than SQL.

## What data can be found by querying the PGSQL database

- users
- repositories
- external services
- settings
- batch changes
- LSIF uploads
- versions
- extensions
- organizations
- email configurations
- access tokens
- plus many more relational data

## Connecting to the PGSQL database

### Kubernetes:

```
kubectl exec -ti PGSQL_CONTAINER_NAME -- psql -U sg
```

### Docker-Compose:

```
docker-compose exec -it pgsql psql -U sg
```

### Single-Container:

```
docker ps -a
  Identify the Sourcegraph container id
docker exec -it CONTAINER_ID bash
psql -U sg
```

## Common database commands

| Command       | Usage                                                                |
| ------------- | -------------------------------------------------------------------- |
| \dt           | Lists all tables in the current database                             |
| \d table_name | describe a table (see which columns the table contains)              |
| \x            | enable expanded display (makes reading individual table rows easier) |
| \q            | exit from the psql shell                                             |

## Commonly queried tables

| Table            | Usage                                                        |
| ---------------- | ------------------------------------------------------------ |
| users            | check existence of accounts, get user id for further queries |
| repo_permissions | determine which repos a user is granted acccess to           |

## Example queries

### Determine number of users with access to a specific repository

```sql
  SELECT name, id
  FROM repo
  WHERE name LIKE '%<REPO NAME>' AND deleted_at IS NULL;


  SELECT repo_id, array_length(user_ids_ints, 1)
  FROM repo_permissions
  WHERE repo_id = <REPO ID>;  --using repo_id from previous step
```

### Determine which users have access to a specific repository

```sql
  SELECT name, id
  FROM repo
  WHERE name LIKE '%<REPO NAME>' AND deleted_at IS NULL;


  SELECT repo_viewers.repo_id, users.username
  FROM (
    SELECT repo_id, unnest(user_ids_ints) AS repo_viewer_id
    FROM repo_permissions
    WHERE repo_id = <REPO ID> --using repo_id from previous step
  ) AS repo_viewers
  JOIN users ON repo_viewers.repo_viewer_id = users.id;
```

### Monitor active database connections

```sql
  SELECT * FROM pg_stat_activity WHERE state='active';
```
