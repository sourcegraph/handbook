# MI v1.1 on-prem data migration

> WARNING: This page is **DEPRECATED**, and only retain to provide historical context.

> NOTE: This process is still a work-in-progress. For more details, see [RFC 760](https://docs.google.com/document/d/1IAgXmv2TbtU_rWXtph-KFc3qbqswREIAxO1rGALuoMQ/edit#) and the [tracking issue](https://github.com/sourcegraph/customer/issues/1525), or cc @bobheadxi (Robert Lin).

This process describes the current state of how to do a full data migration of an on-prem instance to a MI v1.1 Cloud instance.

## Requirements

To qualify for a data migration, the customer must:

- have a Sourcegraph instance on v3.20.0 or later
- use databases on Postgres 11 or later
- _not_ have [on-disk database encryption](https://docs.sourcegraph.com/admin/config/encryption) enabled
- have the [latest release](https://github.com/sourcegraph/src-cli/releases) of [`src`](https://github.com/sourcegraph/src-cli)
- have direct database access
- have a site-admin access token for their instance

An operator must:

- have the [latest _build_](https://github.com/sourcegraph/src-cli/blob/main/DEVELOPMENT.md#development) of [`src`](https://github.com/sourcegraph/src-cli) installed
- have the `gcloud` CLI installed

## Process

### Prepare instance

The customer should add a non-dismissible site notice to their instance in global settings:

```json
{
  "notices": [
    {
      "dismissible": false,
      "location": "top",
      "message": "🚨 A Sourcegraph instance migration is underway - changes to configuration might not be persisted, and performance may be affected, until the migration is finalized."
    }
  ]
}
```

### Create snapshot contents

#### Databases

The customer should first be asked to create `pg_dump` exports of their Sourcegraph databases. Template commands can be generated with `src snapshot databases` for various configurations:

```sh
$ src snapshot databases --help
'src snapshot databases' generates commands to export Sourcegraph database dumps.
Note that these commands are intended for use as reference - you may need to adjust the commands for your deployment.

USAGE
        src [-v] snapshot databases <pg_dump|docker|kubectl> [--targets=<docker|k8s|"targets.yaml">]

TARGETS FILES
        Predefined targets are available based on default Sourcegraph configurations ('docker', 'k8s').
        Custom targets configuration can be provided in YAML format with '--targets=target.yaml', e.g.

                primary:
                        target: ...   # the DSN of the database deployment, e.g. in docker, the name of the database container
                        dbname: ...   # name of database
                        username: ... # username for database access
                        password: ... # password for database access - only include password if it is non-sensitive
                codeintel:
                        # same as above
                codeinsights:
                        # same as above

        See the pgdump.Targets type for more details.
```

Each of the generated commands must be run to completion to generate a database dump for each database.
The output is as follows:

- `src-snapshot/primary.sql`
- `src-snapshot/codeintel.sql`
- `src-snapshot/codeinsights.sql`

For custom or complex database setups, the operator will decide how best to proceed, in collaboration with IE/CSE/etc - the goal in the end is to generate the above database dumps in a format aligned with the output of `src snapshot databases pg_dump` (the plain `pg_dump` commands).

> NOTE: Database export may affect the performance of the Sourcegraph instance while it is in progress. Depending on the size of the instance's databases, this can take a very long time.

#### Instance summary

A snapshot summary is used to run acceptance tests post-migration. The customer should create one with `src snapshot summary` - note that a site admin access token is required:

```sh
src login # configure credentials for the instance
src snapshot summary
```

This will generate a JSON file at `src-snapshot/summary.json`. See `src snapshot summary --help` for more details.

### Create migration resources

First, the operator must [create an instance](mi1-1_creation_process.md) with the configuration for the desired final Cloud instance and freeze it:

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker-compose down'
```

In the [`cloud-data-migrations`](https://github.com/sourcegraph/cloud-data-migrations) repository:

> NOTE: The TFC workspace requires special configuration to properly set it up, we will document this in the future. For now, just ask in #cloud-internal.

1. Copy the `template/` directory, naming it corresponding to the customer
2. For `project/`:
   1. Fill out all `$CUSTOMER` variables and set all unset variables in `terraform.tfvars` as documented
   2. Commit and push your changes
   3. Create Terraform Cloud workspace for the directory and apply
3. Then do the same for `resources/`, using the outputs of `project/`

Once `resources/` has been applied, you should have outputs for a GCP bucket and a GCP service account with write-only access to it. [Create a 1password share entry](https://support.1password.com/share-items/) with these outputs:

- `snapshot_bucket_name`
- `writer_service_account_key`

Outputs can also be retrieved from the Terraform state of `resources/`:

```sh
cd resources/
terraform init
# Bucket name
terraform output -json | jq -e -r .snapshot_bucket_name.value
# Credentials, sent to file
terraform output -json | jq -e -r .writer_service_account_key.value > credential.json
```

### Upload snapshot contents

If the steps to [create snapshot contents](#create-snapshot-contents) were followed correctly, the customer should run `src snapshot upload` with [the appropriate bucket and credentials](#create-migration-resources) will find the snapshot contents and upload them to the configured buckets.

```sh
src snapshot upload -bucket=$BUCKET -credentials=$CREDENTIALS_FILE
```

> NOTE: `src snapshot upload` will upload all resources concurrently, but depending on the size of the database exports and other conditions, uploads may still take a very long time. If an upload fails, it may safely be attempted again.

Once the customer has indicated the upload succeeded, validate the contents of the bucket to ensure everything is there:

- `primary.sql`
- `codeintel.sql`
- `codeinsights.sql`
- `summary.json`

> NOTE: Data is currently [retained for 7 days](https://github.com/sourcegraph/cloud-data-migrations/blob/6ab4c982d505d76c8c7aa6fa2e22ce8c2495055a/modules/migration_resources/main.tf#L90-L98).

Audit logs are generated for bucket access in the project's logs, under log entries with `@type: "type.googleapis.com/google.cloud.audit.AuditLog"`.

### Reset databases

First, prepare the Cloud database for import:

```sh
gcloud components install cloud_sql_proxy
```

> NOTE: This may not work due to some path jankness - we will have better tooling when Cloud V2 is GA.

Get the following data from the Cloud v1.1 instance created in `deploy-sourcegraph-managed`:

```sh
# from GCP project
export TARGET_INSTANCE_PROJECT="sourcegraph-managed-migration"
export TARGET_INSTANCE_DB="main-47cc60a2"
# in deployment dir
export INSTANCE_ADMIN_PASSWORD=$(terraform show -json | jq -r '.values.root_module.child_modules[].resources[] | select(.address == "module.managed_instance.random_password.db_main_admin_password") | .values.result')
# from migration resources output
export DB_DUMP_BUCKET=""
```

Then in `cloud-data-migrations`, drop all database contents:

```sh
cmd/cdi/recreate_dbs.sh
```

### Import databases

Ensure [databases have been reset](#reset-databases). Then, one by one, import each database from the bucket the customer has uploaded to:

```sh
gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_INSTANCE_DB gs://$DB_DUMP_BUCKET/primary.sql --database=pgsql
gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_INSTANCE_DB gs://$DB_DUMP_BUCKET/codeintel.sql --database=codeintel-db
gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_INSTANCE_DB gs://$DB_DUMP_BUCKET/codeinsights.sql --database=codeinsights-db
```

### Upgrade databases

> NOTE: This step requires additional validation ([#1650](https://github.com/sourcegraph/customer/issues/1650)).

Start the database proxy on the instance:

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker-compose up -d cloud-sql-proxy'
```

If the imported version is less than 2 versions behind Cloud, then you [should be able to simply run the migrator](https://docs.sourcegraph.com/admin/how-to/manual_database_migrations#up):

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker-compose up migrator'
```

Otherwise, you may need to run a [multi-version upgrade](https://docs.sourcegraph.com/admin/deploy/docker-compose/upgrade#multi-version-upgrades):

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker run --env-file .env --network docker-compose_sourcegraph sourcegraph/migrator:$TO upgrade -from=$FROM -to=$TO'
```

> NOTE: If anything goes horribly wrong, you can [reset databases](#reset-databases) and continue again from there with adjusted steps as needed.

### Spin up instance

> NOTE: This step requires additional validation ([#1651](https://github.com/sourcegraph/customer/issues/1651)).

If all upgrades succeed, spin up the instance:

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker-compose up -d'
```

Sync configuration:

```sh
mi init-instance
```

Run a health check:

```sh
mi check --executors
```

Run an acceptance test using the downloaded `summary.json` from the snapshot bucket:

```sh
src login # to the instance
src snapshot test -snapshot-summary="./summary.json"
```

Remove the migration notice that was added previously.
