# Sourcegraph Accounts infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-04-04 18:45:01.54905 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/6d96fe3d4aed2366f4accae010febe949ecaefdf
-->

This document describes operational guidance for Sourcegraph Accounts infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

|     PROPERTY     |                                                                                               DETAILS                                                                                                |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Service ID       | `sourcegraph-accounts` ([specification](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/service.yaml))                                                       |
| Owners           | **core-services**                                                                                                                                                                                    |
| Service kind     | Cloud Run service                                                                                                                                                                                    |
| Environments     | [dev](#dev), [prod](#prod)                                                                                                                                                                           |
| Docker image     | `us-central1-docker.pkg.dev/sourcegraph-dev/sourcegraph-accounts/accounts-server`                                                                                                                    |
| Source code      | [`github.com/sourcegraph/sourcegraph-accounts` - `cmd/accounts-server`](https://github.com/sourcegraph/sourcegraph-accounts/tree/HEAD/cmd/accounts-server)                                           |
| Rollout Pipeline | [`sourcegraph-accounts-us-central1-rollout`](https://console.cloud.google.com/deploy/delivery-pipelines/us-central1/sourcegraph-accounts-us-central1-rollout?project=sourcegraph-accounts-prod-csvc) |

<!--
Automatically generated from the service README: https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/README.md
-->

### Operators cheat sheet

#### Get email domain stats
For Google sign-in abuse protection.

```zsh
$ curl -s \
        -H "Authorization: Bearer $MANAGEMENT_SECRET" \
        https://accounts.sourcegraph.com/api/management/v1/email-domain-stats | jq
```

#### Create a new IdP client

```zsh
$ curl -s -X POST \
        -H "Authorization: Bearer $MANAGEMENT_SECRET" \
        https://accounts.sourcegraph.com/api/management/v1/identity-provider/clients \
--data '{"name": "<SERVICE NAME>", "scopes": ["<SCOPE>"], "redirect_uris": ["<REDIRECT_URI>"]}' | jq
```

#### Add new scope to an IdP client

Connect to the "accounts" database:

```sql
UPDATE idp_clients
SET scopes = scopes || '["<SCOPE>"]'::jsonb
WHERE id = '<CLIENT_ID>'
```

#### Assign SSC admin role

1. Connect to the "accounts" database.
1. Get the user ID via email:
   ```sql
   SELECT user_id FROM emails WHERE email = '<EMAIL>';
   ```
1. Insert metadata for `ssc`:
   ```sql
   INSERT INTO user_metadata (created_at, updated_at, user_id, scope, metadata)
   VALUES (now(), now(), <USER_ID>, 'ssc', '{ "roles": ["admin"] }');
   ```

## Environments

### dev

|      PROPERTY       |                                                           DETAILS                                                           |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Project ID          | [`sourcegraph-accounts-dev-csvc`](https://console.cloud.google.com/run?project=sourcegraph-accounts-dev-csvc)               |
| Category            | **test**                                                                                                                    |
| Deployment Type     | `rollout`                                                                                                                   |
| Resources           | [dev Redis](#dev-redis), [dev PostgreSQL instance](#dev-postgresql-instance), [dev BigQuery dataset](#dev-bigquery-dataset) |
| Slack notifications | [#alerts-sourcegraph-accounts-dev](https://sourcegraph.slack.com/archives/alerts-sourcegraph-accounts-dev)                  |
| Alerts              | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=sourcegraph-accounts-dev-csvc)                |
| Errors              | [Sentry `sourcegraph-accounts-dev`](https://sourcegraph.sentry.io/projects/sourcegraph-accounts-dev/)                       |
| Domain              | [accounts.sgdev.org](https://accounts.sgdev.org)                                                                            |
| Cloudflare WAF      | ✅                                                                                                                          |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

|          ACCESS          |                                                                                                                                                                        ENTITLE REQUEST TEMPLATE                                                                                                                                                                        |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Read-only Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [dev Terraform Cloud](#dev-terraform-cloud).

#### dev Cloud Run

The Sourcegraph Accounts dev service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

|    PROPERTY    |                                                                                                                                                                  DETAILS                                                                                                                                                                   |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=sourcegraph-accounts-dev-csvc)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=sourcegraph-accounts-dev-csvc) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=sourcegraph-accounts-dev-csvc)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `sourcegraph-accounts-dev`](https://sourcegraph.sentry.io/projects/sourcegraph-accounts-dev/)                                                                                                                                                                                                                                      |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs sourcegraph-accounts dev
```

#### dev Redis

| PROPERTY |                                                              DETAILS                                                              |
|----------|-----------------------------------------------------------------------------------------------------------------------------------|
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=sourcegraph-accounts-dev-csvc) |

#### dev PostgreSQL instance

| PROPERTY  |                                                   DETAILS                                                   |
|-----------|-------------------------------------------------------------------------------------------------------------|
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=sourcegraph-accounts-dev-csvc) |
| Databases | `accounts`                                                                                                  |

> [!NOTE]
> The [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) is required for BOTH read-only and write access to the database.

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect sourcegraph-accounts dev

# For write access - use with caution!
sg msp pg connect -write-access sourcegraph-accounts dev
```

#### dev BigQuery dataset

|    PROPERTY     |                                                                                                                                DETAILS                                                                                                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Dataset Project | `sourcegraph-accounts-dev-csvc`                                                                                                                                                                                                                                        |
| Dataset ID      | `sourcegraph_accounts`                                                                                                                                                                                                                                                 |
| Tables          | [`user_emails`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/user_emails.bigquerytable.json), [`events`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/events.bigquerytable.json) |

#### dev Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/sourcegraph-accounts/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/service.yaml), and `sg msp generate sourcegraph-accounts dev` generates the required infrastructure configuration for this environment in Terraform.
Terraform Cloud (TFC) workspaces specific to each service then provisions the required infrastructure from this configuration.
You may want to check your service environment's TFC workspaces if a Terraform apply fails (reported via GitHub commit status checks in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository, or in #alerts-msp-tfc).

> [!NOTE]
> If you are looking for service logs, see the [dev Cloud Run](#dev-cloud-run) section instead. In general:
>
> - check service logs ([dev Cloud Run](#dev-cloud-run)) if your service has gone down or is misbehaving
> - check TFC workspaces for infrastructure provisioning or configuration issues

To access this environment's Terraform Cloud workspaces, you will need to [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) and then [request Entitle access to membership in the "Managed Services Platform Operator" TFC team](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiSlVTVElGSUNBVElPTiBIRVJFIiwicm9sZUlkcyI6W3siaWQiOiJiMzg3MzJjYy04OTUyLTQ2Y2QtYmIxZS1lZjI2ODUwNzIyNmIiLCJ0aHJvdWdoIjoiYjM4NzMyY2MtODk1Mi00NmNkLWJiMWUtZWYyNjg1MDcyMjZiIiwidHlwZSI6InJvbGUifV19).
The "Managed Services Platform Operator" team has access to all MSP TFC workspaces.

> [!WARNING]
> You **must [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) before making your Entitle request**.
> If you make your Entitle request, then log in, you will be removed from any team memberships granted through Entitle by Terraform Cloud's SSO implementation.

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-sourcegraph-accounts-dev` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-sourcegraph-accounts-dev), or you can use:

```bash
sg msp tfc view sourcegraph-accounts dev
```

### prod

|      PROPERTY       |                                                              DETAILS                                                              |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Project ID          | [`sourcegraph-accounts-prod-csvc`](https://console.cloud.google.com/run?project=sourcegraph-accounts-prod-csvc)                   |
| Category            | **external**                                                                                                                      |
| Deployment Type     | `rollout`                                                                                                                         |
| Resources           | [prod Redis](#prod-redis), [prod PostgreSQL instance](#prod-postgresql-instance), [prod BigQuery dataset](#prod-bigquery-dataset) |
| Slack notifications | [#alerts-sourcegraph-accounts-prod](https://sourcegraph.slack.com/archives/alerts-sourcegraph-accounts-prod)                      |
| Alerts              | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=sourcegraph-accounts-prod-csvc)                     |
| Errors              | [Sentry `sourcegraph-accounts-prod`](https://sourcegraph.sentry.io/projects/sourcegraph-accounts-prod/)                           |
| Domain              | [accounts.sourcegraph.com](https://accounts.sourcegraph.com)                                                                      |
| Cloudflare WAF      | ✅                                                                                                                                |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

|          ACCESS          |                                                                                                                                                                      ENTITLE REQUEST TEMPLATE                                                                                                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Read-only Entitle request for the 'Managed Services ' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYTQ4OWM2MDktNTBlYy00ODAzLWIzZjItMzYzZGJhMTgwMWJhIiwidGhyb3VnaCI6ImE0ODljNjA5LTUwZWMtNDgwMy1iM2YyLTM2M2RiYTE4MDFiYSIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)   |
| GCP project write access | [Write access Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Sourcegraph Accounts prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

|    PROPERTY    |                                                                                                                                                                   DETAILS                                                                                                                                                                   |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=sourcegraph-accounts-prod-csvc)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=sourcegraph-accounts-prod-csvc) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=sourcegraph-accounts-prod-csvc)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `sourcegraph-accounts-prod`](https://sourcegraph.sentry.io/projects/sourcegraph-accounts-prod/)                                                                                                                                                                                                                                     |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs sourcegraph-accounts prod
```

#### prod Redis

| PROPERTY |                                                              DETAILS                                                               |
|----------|------------------------------------------------------------------------------------------------------------------------------------|
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=sourcegraph-accounts-prod-csvc) |

#### prod PostgreSQL instance

| PROPERTY  |                                                   DETAILS                                                    |
|-----------|--------------------------------------------------------------------------------------------------------------|
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=sourcegraph-accounts-prod-csvc) |
| Databases | `accounts`                                                                                                   |

> [!NOTE]
> The [Write access Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) is required for BOTH read-only and write access to the database.

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect sourcegraph-accounts prod

# For write access - use with caution!
sg msp pg connect -write-access sourcegraph-accounts prod
```

#### prod BigQuery dataset

|    PROPERTY     |                                                                                                                                DETAILS                                                                                                                                 |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Dataset Project | `sourcegraph-accounts-prod-csvc`                                                                                                                                                                                                                                       |
| Dataset ID      | `sourcegraph_accounts`                                                                                                                                                                                                                                                 |
| Tables          | [`user_emails`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/user_emails.bigquerytable.json), [`events`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/events.bigquerytable.json) |

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/sourcegraph-accounts/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/service.yaml), and `sg msp generate sourcegraph-accounts prod` generates the required infrastructure configuration for this environment in Terraform.
Terraform Cloud (TFC) workspaces specific to each service then provisions the required infrastructure from this configuration.
You may want to check your service environment's TFC workspaces if a Terraform apply fails (reported via GitHub commit status checks in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository, or in #alerts-msp-tfc).

> [!NOTE]
> If you are looking for service logs, see the [prod Cloud Run](#prod-cloud-run) section instead. In general:
>
> - check service logs ([prod Cloud Run](#prod-cloud-run)) if your service has gone down or is misbehaving
> - check TFC workspaces for infrastructure provisioning or configuration issues

To access this environment's Terraform Cloud workspaces, you will need to [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) and then [request Entitle access to membership in the "Managed Services Platform Operator" TFC team](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiSlVTVElGSUNBVElPTiBIRVJFIiwicm9sZUlkcyI6W3siaWQiOiJiMzg3MzJjYy04OTUyLTQ2Y2QtYmIxZS1lZjI2ODUwNzIyNmIiLCJ0aHJvdWdoIjoiYjM4NzMyY2MtODk1Mi00NmNkLWJiMWUtZWYyNjg1MDcyMjZiIiwidHlwZSI6InJvbGUifV19).
The "Managed Services Platform Operator" team has access to all MSP TFC workspaces.

> [!WARNING]
> You **must [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) before making your Entitle request**.
> If you make your Entitle request, then log in, you will be removed from any team memberships granted through Entitle by Terraform Cloud's SSO implementation.

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-sourcegraph-accounts-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-sourcegraph-accounts-prod), or you can use:

```bash
sg msp tfc view sourcegraph-accounts prod
```
