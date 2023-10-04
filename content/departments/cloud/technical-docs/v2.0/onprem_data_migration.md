# On-prem data migration to Cloud v2

> [!WARNING] This process is still a work-in-progress. For more details, see [RFC 760](https://docs.google.com/document/d/1IAgXmv2TbtU_rWXtph-KFc3qbqswREIAxO1rGALuoMQ/edit#) and the [tracking issue](https://github.com/sourcegraph/customer/issues/1525), or cc @bobheadxi (Robert Lin).
> This page was adapted only on a best-effort basis for Cloud v2 - it has currently not yet been thoroughly tested for Cloud v2.

This process describes the current state of how to do a full data migration of an on-prem instance to a [Cloud v2](./index.md) instance.
On-prem-to-Cloud data migrations are currently owned by [Implementation Engineering](../../../technical-success/ie/index.md), but the process is documented in Cloud as it pertains to Cloud infrastructure.

**The on-prem-to-Cloud data migration process described here will result in the full restore/ overwriting of the Cloud v2 instance to the state of the customer's on-prem instance.** This process is intended to be performed immediately following the provisioning of a new Cloud v2 instance. If a migration is planned for a newly provisioned Cloud v2 instance, TAs are recommended to not hand over access to the Cloud v2 instance to the customer until the migration is complete.

**Note:** This process is an "all-or-nothing" data migration. There is no way to partially or selectively migrate certain aspects of a customer's on-prem Sourcegraph instance's data (e.g., only Batch Changes execution history or certain Code Insights)

## Requirements

To qualify for a data migration, the customer must:

- have a Sourcegraph instance on v3.20.0 or later (limitation of [multi-version upgrades](https://docs.sourcegraph.com/admin/updates#upgrade-types))
  - note: where possible, strongly encourage the customer to upgrade to their on-prem instance to the latest version of Sourcegraph first.
- use databases on Postgres 12 or later
- _not_ have [on-disk database encryption](https://docs.sourcegraph.com/admin/config/encryption) enabled
- have the [latest release](https://github.com/sourcegraph/src-cli/releases) of [`src`](https://github.com/sourcegraph/src-cli)
- have direct database access
- have a site-admin access token for their instance

An operator must:

- have the [latest _build_](https://github.com/sourcegraph/src-cli/blob/main/DEVELOPMENT.md#development) of [`src`](https://github.com/sourcegraph/src-cli) installed
- have the `gcloud` CLI installed

## Initial Setup

### Set up the target Cloud instance

First, the operator must [create an instance](./creation_process.md) with the configuration for the desired final Cloud instance.
If alerting is not disabled, make sure to disable it by editing the instance `config.yaml` in [`sourcegraph/cloud`](https://github.com/sourcegraph/cloud) as follows:

```diff
spec:
  debug:
-    enableAlerting: true
+    enableAlerting: false
```

Then regenerate Terraform manifests:

```sh
mi2 generate cdktf
```

Commit and submit your changes as a pull request. After merging and confirming the apply in Terraform Cloud, proceed with scaling down the instance:

```sh
mi2 instance scale-down
```

### Create migration Cloud Storage Bucket

In the [`cloud-data-migrations`](https://github.com/sourcegraph/cloud-data-migrations) repository, copy the `template/` directory, naming it corresponding to the customer.
Fill out all `$CUSTOMER` variables and set all unset variables in `terraform.tfvars` as documented.
Commit your changes and open a pull request in `cloud-data-migrations`.

Then, create Terraform Cloud workspaces for the migration resources in [`sourcegraph/infrastructure/terraform-cloud/cloud_migration.tf`](https://github.com/sourcegraph/infrastructure/blob/main/terraform-cloud/cloud_migration.tf) file by adding something like the following, replacing `$CUSTOMER` as appropriate:

```terraform
#### $CUSTOMER

module "cloud-data-migration-project-$CUSTOMER" {
  source             = "../modules/tfcworkspace"
  organization       = data.tfe_organization.sourcegraph.name
  vcs_oauth_token_id = tfe_oauth_client.github.oauth_token_id

  name              = "cloud-data-migration-project-$CUSTOMER"
  vcs_repo          = local.sourcegraph_cloud_data_migrations_repo_name
  working_directory = "$CUSTOMER/project"
  trigger_patterns  = ["$CUSTOMER/project/*"]
  tags              = ["cloud-tooling"]
  terraform_version = "1.3.6"

  team_access = local.allow_cloud_team_write_access
}

module "cloud-data-migration-resources-$CUSTOMER" {
  source             = "../modules/tfcworkspace"
  organization       = data.tfe_organization.sourcegraph.name
  vcs_oauth_token_id = tfe_oauth_client.github.oauth_token_id

  name              = "cloud-data-migration-resources-$CUSTOMER"
  vcs_repo          = local.sourcegraph_cloud_data_migrations_repo_name
  working_directory = "$CUSTOMER/resources"
  trigger_patterns  = ["$CUSTOMER/resources/*"]
  tags              = ["cloud-tooling"]
  terraform_version = "1.3.6"

  team_access = merge(local.allow_cloud_team_write_access, local.allow_implementation_engineering_team_write_access)
}
```

Commit your changes and open a pull request.

Make sure that your Terraform Cloud workspaces are created, then schedule a run for the created `-project` workspace.
Once that succeeds, do the same for the created `-resources` workspace.

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

### Notify users of instance migration

The customer site admin is responsible for communicating the upcomming cloud migration plans to their users. It is recommended that they add a non-dismissible site notice to their on-prem instance in global settings:

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

## Collect snapshot contents from on-prem instance

### Generate databases backups

The customer should first be asked to create `pg_dump` exports of their Sourcegraph databases.
`pg_dump` is designed to be [usable while the database is in use](https://www.postgresql.org/docs/current/app-pgdump.html):

> It makes consistent backups even if the database is being used concurrently. pg_dump does not block other users accessing the database (readers or writers).

Note that [we ask the customer to configure a notice](#notify-users-of-instance-migration) to let their users know that any actions taken after the point of the dump will not be persisted to their new Cloud instance.

Template commands for running `pg_dump` can be generated with `src snapshot databases` for various configurations:

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

> [!NOTE] Database export may affect the performance of the Sourcegraph instance while it is in progress. Depending on the size of the instance's databases, this can take a very long time.

### Generate instance summary

A snapshot summary is used to run acceptance tests post-migration. The customer should create one with `src snapshot summary` - note that a site admin access token is required:

```sh
src login # configure credentials for the instance
src snapshot summary
```

This will generate a JSON file at `src-snapshot/summary.json`. See `src snapshot summary --help` for more details.

> [!NOTE] If the `src snapshot summary` command fails, the `--dump-requests` flag can be added to generate the underlying GraphQL query for generating the snapshot summary, which can be run directly in the GraphQL API console in site admin.

### Upload snapshot contents to GCS bucket

If the above steps for creating the `src-snapshot` folder contents were followed correctly, the customer can run `src snapshot upload` with [the appropriate bucket and credentials](#create-migration-cloud-storage-bucket) and `src` will find the snapshot contents and upload them to the configured buckets.

```sh
src snapshot upload -bucket=$BUCKET -credentials=$CREDENTIALS_FILE
```

> [!NOTE] `src snapshot upload` will upload all resources concurrently, but depending on the size of the database exports and other conditions, uploads may still take a very long time. If an upload fails, it may safely be attempted again.

Once the customer has indicated the upload succeeded, validate the contents of the bucket to ensure everything is there:

- `primary.sql`
- `codeintel.sql`
- `codeinsights.sql`
- `summary.json`

> [!NOTE] Data is currently [retained for 7 days](https://github.com/sourcegraph/cloud-data-migrations/blob/6ab4c982d505d76c8c7aa6fa2e22ce8c2495055a/modules/migration_resources/main.tf#L90-L98).

Audit logs are generated for bucket access in the project's logs, under log entries with `@type: "type.googleapis.com/google.cloud.audit.AuditLog"`.

## Execute data migration

### Reset databases

First, prepare the Cloud database for import. Make sure all Sourcegraph pods are scaled down in the cloud instance with the exception of `cloud-sql-proxy`

```sh
mi2 instance scale-down
```

In a separate terminal window, set up a connection to the Cloud SQL database:

```sh
mi2 instance db proxy -session.timeout 0 -download
```

Then, connect to the database as the admin user:

```sh
# Extract the database admin password
cd terraform/stacks/sql && terraform init && cd -
export INSTANCE_ADMIN_PASSWORD="$(cd terraform/stacks/sql && terraform output -json | jq -r '.sql_crossstackoutputgooglesqlusersqlsqladminuserCE5B87EApassword_209B7378.value')"
# Connect to database
psql postgres://sourcegraph-admin:"$INSTANCE_ADMIN_PASSWORD"@localhost:5433/postgres
```

Drop and recreate all databases:

```sql
DROP DATABASE IF EXISTS "pgsql";
CREATE DATABASE "pgsql";
DROP DATABASE IF EXISTS "codeintel-db";
CREATE DATABASE "codeintel-db";
DROP DATABASE IF EXISTS "codeinsights-db";
CREATE DATABASE "codeinsights-db";
```

### Import databases

Ensure [databases have been reset](#reset-databases). Then, one by one, import each database from the bucket the customer has uploaded to:

```sh
export TARGET_INSTANCE_PROJECT=$(mi2 instance get -jq '.status.gcp.projectId' | tr -d '"')
export TARGET_CLOUD_SQL_INSTANCE=$(mi2 instance get -jq '.status.gcp.cloudSQL[0].name' | tr -d '"')
# see cloud-data-migration-resources-$CUSTOMER terraform outputs
export SOURCE_GCS_BUCKET="..."
```

```sh
gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_CLOUD_SQL_INSTANCE gs://$SOURCE_GCS_BUCKET/primary.sql --database=pgsql
gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_CLOUD_SQL_INSTANCE gs://$SOURCE_GCS_BUCKET/codeintel.sql --database=codeintel-db
gcloud --project $TARGET_INSTANCE_PROJECT sql import sql $TARGET_CLOUD_SQL_INSTANCE gs://$SOURCE_GCS_BUCKET/codeinsights.sql --database=codeinsights-db
```

### Upgrade databases

> [!NOTE] This step may be skipped if the customer upgraded to the latest version (equivalent to the active Cloud instance) before creating their snapshot.

If the Sourcegraph version of the imported database is behind Cloud, then you must run a database migration:

```sh
mi2 instance debug migrate-db --from-version="$FROM_VERSION" --auto-approve
```

> [!NOTE] If anything goes horribly wrong, you can [reset databases](#reset-databases) and continue again from there with adjusted steps as needed.

### Spin up instance

If all upgrades succeed, spin up the instance:

```sh
mi2 generate kustomize
# Compare
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm kubernetes/ | kubectl --kubeconfig=$(mi2 instance kubeconfig) diff -f -
# Apply
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm kubernetes/ | kubectl --kubeconfig=$(mi2 instance kubeconfig) apply -f -
```

Set up SOAP configuration:

```sh
mi2 instance check -enforce -force-apply soap
```

The instance will need `externalURL` set to the instance domain for SOAP to work - follow [this guide](https://docs.sourcegraph.com/admin/config/site_config#editing-your-site-configuration-if-you-cannot-access-the-web-ui) to directly edit the instance's site configuration. Additionally, make sure that basic/builtin auth is enabled so that we can configure a password:

```json
{
  "auth.providers": [
    // ...
    { "type": "builtin" }
  ]
}
```

[Request Entitle access](../oidc_site_admin.md#request-ui-access-to-managed-instances) to log in to the UI and log in to the instance. Then create the Sourcegraph service account manually:

- Username: `cloud-admin`
- Email: `managed+<instance-display-name>@sourcegraph.com`

Run `openssl rand -hex 32` in your terminal and use the output as the password. Also **save the password to the `SOURCEGRAPH_ADMIN_PASSWORD` GSM secret in the Cloud V2 instance project**. Then copy the password reset link from creating the user and open it in an incognito tab to set the new user's password. If you missed the link, you can recreate it from Site Admin -> Users -> dropdown menu -> "Reset password".

<!-- Automated version: https://sourcegraph.sourcegraph.com/github.com/sourcegraph/controller/-/blob/internal/instances/init.go?L33 -->

Then **delete** the `SOURCEGRAPH_ADMIN_TOKEN` GSM secret in the Cloud V2 instance project, as it is no longer valid.

You must also promote the new `cloud-admin` user to Site Admin: find the user in the Users page (`/site-admin/users?searchText=cloud-admin`), and from the overflow menu select **Promote to Site Admin**.

Enforce all invariants, now that the service account has been set up:

```sh
# Enforce invariants that will finalize the service account setup
mi2 instance check -enforce -label service-account
# Make sure all invariants are applied, including inviting the customer admin again
# Note that $CUSTOMER_ADMIN_EMAIL must match the one the Cloud instance was initially created with
mi2 instance check -enforce -customer-admin-email $CUSTOMER_ADMIN_EMAIL
# Verify full invariants suite again
mi2 instance check
```

Now that the service account has been promoted to a SOAP service account, we should revert any changes to `"auth.providers"` we made earlier.

Run an acceptance test using the downloaded `summary.json` from the snapshot bucket:

```sh
export SRC_ACCESS_TOKEN=$(gcloud secrets versions access --project=$TARGET_INSTANCE_PROJECT --secret=SOURCEGRAPH_ADMIN_TOKEN latest)
export SRC_ENDPOINT="..." # set to instance URL
src login # to the instance
src snapshot test -summary-path="gs://$SOURCE_GCS_BUCKET/summary.json"
```

### Final Steps

After the data migration is complete, the site admin should remove the migration notice that was [previously added](#notify-users-of-instance-migration).

Additionally, make sure to re-enable alerting by editing the instance `config.yaml` in [`sourcegraph/cloud`](https://github.com/sourcegraph/cloud) as follows:

```diff
spec:
  debug:
-    enableAlerting: false
+    enableAlerting: true
```

Then regenerate Terraform manifests:

```sh
mi2 generate cdktf
```

Then commit your changes as a pull request. Once it has been merged, confirm the changes have been applied in Terraform Cloud.
