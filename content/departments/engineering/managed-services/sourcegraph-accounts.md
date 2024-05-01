# Sourcegraph Accounts infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-05-01 12:30:44.823519 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/d0e016b97b93281abe4e18a9933ef0195d17296c
-->

This document describes operational guidance for Sourcegraph Accounts infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | `sourcegraph-accounts` ([specification](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/service.yaml))             |
| Owners       | **core-services**                                                                                                                                          |
| Service kind | Cloud Run service                                                                                                                                          |
| Environments | [dev](#dev), [prod](#prod)                                                                                                                                 |
| Docker image | `us-central1-docker.pkg.dev/sourcegraph-dev/sourcegraph-accounts/accounts-server`                                                                          |
| Source code  | [`github.com/sourcegraph/sourcegraph-accounts` - `cmd/accounts-server`](https://github.com/sourcegraph/sourcegraph-accounts/tree/HEAD/cmd/accounts-server) |

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

## Rollouts

| PROPERTY          | DETAILS                                                                                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Delivery pipeline | [`sourcegraph-accounts-us-central1-rollout`](https://console.cloud.google.com/deploy/delivery-pipelines/us-central1/sourcegraph-accounts-us-central1-rollout?project=sourcegraph-accounts-prod-csvc) |
| Stages            | [dev](#dev) -> [prod](#prod)                                                                                                                                                                         |

Changes to Sourcegraph Accounts are continuously delivered to the first stage ([dev](#dev)) of the delivery pipeline.

Promotion of a release to the next stage in the pipeline must be done manually using the GCP Delivery pipeline UI.

## Environments

### dev

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`sourcegraph-accounts-dev-csvc`](https://console.cloud.google.com/run?project=sourcegraph-accounts-dev-csvc)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **test**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Deployment type     | `rollout`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Resources           | [dev Redis](#dev-redis), [dev PostgreSQL instance](#dev-postgresql-instance), [dev BigQuery dataset](#dev-bigquery-dataset)                                                                                                                                                                                                                                                                                                                                                                              |
| Slack notifications | [#alerts-sourcegraph-accounts-dev](https://sourcegraph.slack.com/archives/alerts-sourcegraph-accounts-dev)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=sourcegraph-accounts-dev-csvc), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=sourcegraph-accounts-dev-csvc) |
| Errors              | [Sentry `sourcegraph-accounts-dev`](https://sourcegraph.sentry.io/projects/sourcegraph-accounts-dev/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [accounts.sgdev.org](https://accounts.sgdev.org)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [dev Terraform Cloud](#dev-terraform-cloud).

#### dev Cloud Run

The Sourcegraph Accounts dev service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=sourcegraph-accounts-dev-csvc)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=sourcegraph-accounts-dev-csvc) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=sourcegraph-accounts-dev-csvc)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `sourcegraph-accounts-dev`](https://sourcegraph.sentry.io/projects/sourcegraph-accounts-dev/)                                                                                                                                                                                                                                      |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs sourcegraph-accounts dev
```

#### dev Redis

| PROPERTY | DETAILS                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=sourcegraph-accounts-dev-csvc) |

#### dev PostgreSQL instance

| PROPERTY  | DETAILS                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------- |
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

| PROPERTY        | DETAILS                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dataset Project | `sourcegraph-accounts-dev-csvc`                                                                                                                                                                                                                                        |
| Dataset ID      | `sourcegraph_accounts`                                                                                                                                                                                                                                                 |
| Tables          | [`user_emails`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/user_emails.bigquerytable.json), [`events`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/events.bigquerytable.json) |

#### dev Architecture Diagram

![Architecture Diagram](./sourcegraph-accounts-dev.svg)

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

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`sourcegraph-accounts-prod-csvc`](https://console.cloud.google.com/run?project=sourcegraph-accounts-prod-csvc)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **external**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Deployment type     | `rollout`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Resources           | [prod Redis](#prod-redis), [prod PostgreSQL instance](#prod-postgresql-instance), [prod BigQuery dataset](#prod-bigquery-dataset)                                                                                                                                                                                                                                                                                                                                                                          |
| Slack notifications | [#alerts-sourcegraph-accounts-prod](https://sourcegraph.slack.com/archives/alerts-sourcegraph-accounts-prod)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=sourcegraph-accounts-prod-csvc), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=sourcegraph-accounts-prod-csvc) |
| Errors              | [Sentry `sourcegraph-accounts-prod`](https://sourcegraph.sentry.io/projects/sourcegraph-accounts-prod/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [accounts.sourcegraph.com](https://accounts.sourcegraph.com)                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GCP project read access  | [Read-only Entitle request for the 'Managed Services ' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYTQ4OWM2MDktNTBlYy00ODAzLWIzZjItMzYzZGJhMTgwMWJhIiwidGhyb3VnaCI6ImE0ODljNjA5LTUwZWMtNDgwMy1iM2YyLTM2M2RiYTE4MDFiYSIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)   |
| GCP project write access | [Write access Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Sourcegraph Accounts prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=sourcegraph-accounts-prod-csvc)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=sourcegraph-accounts-prod-csvc) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=sourcegraph-accounts-prod-csvc)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `sourcegraph-accounts-prod`](https://sourcegraph.sentry.io/projects/sourcegraph-accounts-prod/)                                                                                                                                                                                                                                     |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs sourcegraph-accounts prod
```

#### prod Redis

| PROPERTY | DETAILS                                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=sourcegraph-accounts-prod-csvc) |

#### prod PostgreSQL instance

| PROPERTY  | DETAILS                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------ |
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

| PROPERTY        | DETAILS                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dataset Project | `sourcegraph-accounts-prod-csvc`                                                                                                                                                                                                                                       |
| Dataset ID      | `sourcegraph_accounts`                                                                                                                                                                                                                                                 |
| Tables          | [`user_emails`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/user_emails.bigquerytable.json), [`events`](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/events.bigquerytable.json) |

#### prod Architecture Diagram

![Architecture Diagram](./sourcegraph-accounts-prod.svg)

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

## Alert Policies

The following alert policies are defined for each of this service's environments.

#### Cloud SQL - Connections

```md
The number of Cloud SQL connections are approaching the maximum number of connections.
This can be caused by an increase in the number of active service instances.

Try increasing the 'resource.postgreSQL.maxConnections' configuration parameter.
```

Severity: WARNING

#### Cloud SQL - CPU Utilization

```md
Cloud SQL instance CPU utilization is above acceptable threshold.
```

Severity: WARNING

#### Cloud SQL - Disk Utilization

```md
Cloud SQL instance disk utilization is above acceptable threshold.
```

Severity: WARNING

#### Cloud SQL - Memory Utilization

```md
Cloud SQL instance memory utilization is above acceptable threshold.
```

Severity: WARNING

#### Cloud SQL - Server Availability

```md
Cloud SQL instance is down.
```

Severity: WARNING

#### Cloud SQL - Spike in Per-Query Lock Time

```md
Cloud SQL database queries encountered lock times well above acceptable thresholds.
```

Severity: WARNING

#### Cloud SQL - Sustained Per-Query Lock Times

```md
Cloud SQL database queries are encountering lock times above acceptable thresholds over a window.
```

Severity: WARNING

#### High Container CPU Utilization

```md
High CPU Usage - it may be neccessary to reduce load or increase CPU allocation
```

Severity: WARNING

#### High Container Memory Utilization

```md
High Memory Usage - it may be neccessary to reduce load or increase memory allocation
```

Severity: WARNING

#### Container Startup Latency

```md
Service containers are taking longer than configured timeouts to start up.
```

Severity: WARNING

#### Cloud Redis - System CPU Utilization

```md
Redis Engine CPU Utilization goes above the set threshold. The utilization is measured on a scale of 0 to 1.
```

Severity: WARNING

#### Cloud Redis - Standard Instance Failover

```md
Instance failover occured for a standard tier Redis instance.
```

Severity: WARNING

#### Cloud Redis - System Memory Utilization

```md
Redis System memory utilization is above the set threshold. The utilization is measured on a scale of 0 to 1.
```

Severity: WARNING

#### High Ratio of 400 Responses

```md
400 responses coming from the application. Does NOT include requests that did not reach the instance, e.g. if no host is available to receive a request - check GCP logs and error reports instead.
```

Severity: WARNING

#### High Ratio of 401 Responses

```md
401 responses coming from the application. Does NOT include requests that did not reach the instance, e.g. if no host is available to receive a request - check GCP logs and error reports instead.
```

Severity: WARNING

#### High Ratio of 403 Responses

```md
403 (forbidden) responses coming from the application. Does NOT include requests that did not reach the instance, e.g. if no host is available to receive a request - check GCP logs and error reports instead.
```

Severity: WARNING

#### High Ratio of 500 Responses

```md
500 responses coming from the application. Does NOT include requests that did not reach the instance, e.g. if no host is available to receive a request - check GCP logs and error reports instead.
```

Severity: WARNING

#### Cloud Run Pending Requests

```md
There are requests pending - we may need to increase Cloud Run instance count, request concurrency, or investigate further.
```

Severity: WARNING

#### Cloud Run Instance Precondition Failed

```md
Cloud Run instance failed to start due to a precondition failure.
This is unlikely to cause immediate downtime, and may auto-resolve if no new instances are created and/or we return to a healthy state, but you should follow up to ensure the latest Cloud Run revision is healthy.
```

Severity: WARNING

#### External Uptime Check

```md
Service is failing to repond on https://accounts.sourcegraph.com - this may be expected if the service was recently provisioned or if its external domain has changed.
```

Severity: CRITICAL

#### Container Instance Count

```md
There are a lot of Cloud Run instances running - we may need to increase per-instance requests make make sure we won't hit the configured max instance count
```

Severity: WARNING
