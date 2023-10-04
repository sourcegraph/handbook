# PostgreSQL deployments

For deployments other than Cloud and Sourcegraph.com please use the information [here](https://docs.sourcegraph.com/admin/faq#how-do-i-access-the-sourcegraph-database) to access the database.

## Sourcegraph.com specific

We currently run two separate databases. The `sg-cloud` database is the primary database, and the code-intel team uses the `sg-cloud-code-intel`.

You can also directly view the database in [GCP](https://console.cloud.google.com/sql/instances?project=sourcegraph-dev).

We utilize the [Google Cloud SDK](https://cloud.google.com/sdk) utility [Cloud SQL Proxy](https://cloud.google.com/sql/docs/postgres/sql-proxy) to connect to our production databases. By default, our Cloud SQL databases are not accessible.

There are two ways of connecting: either using the `gcloud beta sql connect` command, which will use the `pgsql` client, or running the `cloud_sql_proxy` on a port locally to utilize your preferred tools.

For read-only access, there is also an option of using [BigQuery](https://console.cloud.google.com/bigquery?sq=527047051561:67f2616f4acb4b7cb3639e4a97e2f4aa) and their `EXTERNAL_QUERY` syntax.

Using BigQuery, if you want to run a query

```
SELECT name::text,created_at::text FROM repo LIMIT 5;
```

against the Prod CloudSQL database, you need to run

```
SELECT * FROM EXTERNAL_QUERY("sourcegraph-dev.us.sg-cloud", "SELECT name::text,created_at::text FROM repo LIMIT 5;");
```

in the BigQuery editor (passing the PostgreSQL query in the second parameter to EXTERNAL_QUERY).

### Connecting to Postgres

#### Install the command line tools

If you didn't yet, [install Google Cloud SDK](https://cloud.google.com/sdk/docs/install). Ensure, that `gcloud` command is reachable on your path.

Install the Cloud SQL proxy by running this command with `gcloud`:

```
  gcloud components install cloud_sql_proxy
```

#### Request permission using Entitle

Request the "Sourcegraph Dot Com projects" bundle using Entitle to ensure you have the correct GCP permissions to access the databases.

#### Command line only use (pgsql)

You may use these gcloud commands to connect directly to the databases:

- Default db {[Password](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&v=dnrhbauihkhjs5ag6vszsme45a&i=pjxf64qxwsin4d56xij6vm3gva&h=my.1password.com)}
  ```
    gcloud beta sql connect --project sourcegraph-dev sg-cloud-732a936743 --user=dev-readonly -d=sg
  ```
- Code intel db {[Password](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&v=dnrhbauihkhjs5ag6vszsme45a&i=hbgj2dfajwj7cdiifk3zb2h2b4&h=my.1password.com)}

  ```
    gcloud beta sql connect --project sourcegraph-dev sg-cloud-code-intel-9fc67e507c  --user=dev-readonly -d=sg
  ```

If you receive an error while connecting, ensure you have the required permissions through Entitle and re-request them if they have expired.

Go to [Example Queries](#example-queries) to continue

#### Proxy for advanced use

Run the `cloud_sql_proxy` against our production instance

```
  cloud_sql_proxy -instances=sourcegraph-dev:us-central1:sg-cloud-732a936743=tcp:5555
```

Now, in a new terminal, run the command below. The database will be running on `localhost:5555`

```
  export PGPASSWORD='<$PASSWORD>'
  psql -h localhost -p 5555 -d sg -U 'dev-readonly'
```

Note, that to connect to `localhost:5555` you still need to supply the postgres password stored in 1Password (mentioned above).

### Example queries

> 🔥 You are directly interfacing with the production database. If you are unsure of any commands, please reach out in #dev-chat or #dev-ops.
> Please prefer using the readonly user `frontend-dev`

- See all fields on a table (ie the `repo` table)
  ```
    \d+ repo
  ```
- See the total number of rows in the `repo` table
  ```
    SELECT COUNT(*) FROM repo;
  ```

### Performance monitoring

We run a PgHero deployment as well you can use to analyze slow queries and overall database performance.

```
  kubectl port-forward -n monitoring deploy/pghero 8080:8080
```

And then navigate to http://localhost:8080 to view the dashboard

See additional Postgres tips in our [incident docs](../incidents/playbooks/index.md#postgreSQL-database-problems)

## Dogfood specific

[Dogfood](https://k8s.sgdev.org) runs Sourcegraph completely on Kubernetes.

1. First, [connect to the cluster](./instances.md#k8ssgdevorg).
2. Then you can port-forward the pgsql deployment: `kubectl port-forward -n dogfood-k8s pgsql-0 8080:5432`
3. Then access it locally: `pgcli -h localhost -p 8080 -d sg -U 'sg'`
