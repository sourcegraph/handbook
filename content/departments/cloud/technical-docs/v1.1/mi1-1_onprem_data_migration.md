# MI v1.1 on-prem data migration

> NOTE: This process is still a work-in-progress. For more details, see [RFC 760](https://docs.google.com/document/d/1IAgXmv2TbtU_rWXtph-KFc3qbqswREIAxO1rGALuoMQ/edit#) and the [tracking issue](https://github.com/sourcegraph/customer/issues/1525), or cc @bobheadxi (Robert Lin).

This process describes the current state of how to do a full data migration of an on-prem instance to a MI v1.1 Cloud instance.

## Requirements

The customer must:

- have a Sourcegraph instance on v3.20.0 or later
- use databases on Postgres 11 or later
- *not* have [on-disk database encryption](https://docs.sourcegraph.com/admin/config/encryption) enabled
- have the latest version of [`src`](https://github.com/sourcegraph/src-cli)
- have direct database access
- have a site-admin access token for their instance

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
    },
  ],
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

For custom or complex database setups, a Cloud team engineer will decide how best to proceed, in collaboration with IE/CSE/etc.

> NOTE: Database export may affect the performance of the Sourcegraph instance while it is in progress. Depending on the size of the instance's databases, this can take a very long time.

#### Instance summary

A snapshot summary is used to run acceptance tests post-migration. Create one with `src snapshot summary` - note that a site admin access token is required.

```sh
src login
src snapshot summary
```

### Create migration resources

First, [create an instance](mi1-1_creation_process.md) with the configuration for the desired final Cloud instance and freeze it:

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker-compose down'
```

In the [`cloud-data-migrations`](https://github.com/sourcegraph/cloud-data-migrations) repository:

1. Copy the `template` directory, naming it corresponding to the customer
2. For `project/`:
   1. Fill out all `$CUSTOMER` variables and set all unset variables
   2. Create Terraform Cloud workspace for the directory and apply
3. Then do the same for `resources/`, using the outputs of `project/`

Once `resources/` has been applied, you should have outputs for a GCP bucket and a GCP service account with write-only access to it. Create a 1password share entry with these outputs:

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

### Import databases

First, prepare the Cloud database for import:

```sh
gcloud components install cloud_sql_proxy
```

> NOTE: This may not work due to some path jankness - we will have better tooling when Cloud V2 is GA.

First, get the following data from the Cloud v1.1 isntance created in `deploy-sourcegraph-managed`:

```sh
# from project
export TARGET_INSTANCE_PROJECT="sourcegraph-managed-migration"
export TARGET_INSTANCE_DB="main-47cc60a2"
# in deployment dir
export INSTANCE_ADMIN_PASSWORD=$(terraform show -json | jq -r '.values.root_module.child_modules[].resources[] | select(.address == "module.managed_instance.random_password.db_main_admin_password") | .values.result')
# from migration resources output
export DB_DUMP_BUCKET=""
```

Then in `cloud-data-migrations`:

```sh
cmd/cdi/recreate_dbs.sh

gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_INSTANCE_DB gs://$DB_DUMP_BUCKET/primary.sql --database=pgsql

gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_INSTANCE_DB gs://$DB_DUMP_BUCKET/codeintel.sql --database=codeintel-db

gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_INSTANCE_DB gs://$DB_DUMP_BUCKET/codeinsights.sql --database=codeinsights-db
```

### Upgrade databases

> NOTE: Starting here, the process is not very well-tested at the moment.

Start the database proxy on the instance:

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker-compose up -d cloud-sql-proxy'
```

If the imported version is less than 2 versions behind Cloud, then you can simply run the migrator:

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker-compose up migrator'
```

Otherwise, run a multi-version upgrade:

```sh
mi ssh-exec 'cd /deployment/docker-compose && docker run --env-file .env --network docker-compose_sourcegraph sourcegraph/migrator:$TO upgrade -from=$FROM -to=$TO'
```

### Spin up instance

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

Run an acceptance test using a downloaded `summary.json` from the snapshot bucket:

```sh
src login # to the instance
src snapshot test -snapshot-summary="./summary.json"
```

Remove the migration notice that was added previously.
