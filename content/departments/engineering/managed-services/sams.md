# Self-Serve Cody infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-05-01 12:30:44.589815 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/d0e016b97b93281abe4e18a9933ef0195d17296c
-->

This document describes operational guidance for Self-Serve Cody infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Service ID   | `sams` ([specification](https://github.com/sourcegraph/managed-services/blob/main/services/sams/service.yaml))                                   |
| Owners       | **cody-plg**                                                                                                                                     |
| Service kind | Cloud Run service                                                                                                                                |
| Environments | [dev](#dev), [prod](#prod)                                                                                                                       |
| Docker image | `us-central1-docker.pkg.dev/sourcegraph-dev/sams/accounts-server`                                                                                |
| Source code  | [`github.com/sourcegraph/self-serve-cody` - `cmd/accounts-server`](https://github.com/sourcegraph/self-serve-cody/tree/HEAD/cmd/accounts-server) |

## Rollouts

| PROPERTY          | DETAILS                                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Delivery pipeline | [`sams-us-central1-rollout`](https://console.cloud.google.com/deploy/delivery-pipelines/us-central1/sams-us-central1-rollout?project=sams-prod-ywuz) |
| Stages            | [dev](#dev) -> [prod](#prod)                                                                                                                         |

Changes to Self-Serve Cody are continuously delivered to the first stage ([dev](#dev)) of the delivery pipeline.

Promotion of a release to the next stage in the pipeline must be done manually using the GCP Delivery pipeline UI.

## Environments

### dev

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Project ID          | [`sams-dev-bfec`](https://console.cloud.google.com/run?project=sams-dev-bfec)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **test**                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Deployment type     | `rollout`                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Resources           | [dev Redis](#dev-redis), [dev PostgreSQL instance](#dev-postgresql-instance), [dev BigQuery dataset](#dev-bigquery-dataset)                                                                                                                                                                                                                                                                                                                                              |
| Slack notifications | [#alerts-sams-dev](https://sourcegraph.slack.com/archives/alerts-sams-dev)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=sams-dev-bfec), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=sams-dev-bfec) |
| Errors              | [Sentry `sams-dev`](https://sourcegraph.sentry.io/projects/sams-dev/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [cody.sgdev.org](https://cody.sgdev.org)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [dev Terraform Cloud](#dev-terraform-cloud).

#### dev Cloud Run

The Self-Serve Cody dev service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=sams-dev-bfec)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=sams-dev-bfec) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=sams-dev-bfec)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `sams-dev`](https://sourcegraph.sentry.io/projects/sams-dev/)                                                                                                                                                                                                                                                      |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs sams dev
```

#### dev Redis

| PROPERTY | DETAILS                                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------------------- |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=sams-dev-bfec) |

#### dev PostgreSQL instance

| PROPERTY  | DETAILS                                                                                     |
| --------- | ------------------------------------------------------------------------------------------- |
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=sams-dev-bfec) |
| Databases | `accounts`, `cody_management`                                                               |

> [!NOTE]
> The [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) is required for BOTH read-only and write access to the database.

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect sams dev

# For write access - use with caution!
sg msp pg connect -write-access sams dev
```

#### dev BigQuery dataset

| PROPERTY        | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dataset Project | `sams-dev-bfec`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Dataset ID      | `sams`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Tables          | [`user_emails`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/user_emails.bigquerytable.json), [`events`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/events.bigquerytable.json), [`cody_events`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/cody_events.bigquerytable.json), [`subscription_events`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/subscription_events.bigquerytable.json) |

#### dev Architecture Diagram

![Architecture Diagram](./sams-dev.svg)

#### dev Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/sams/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/service.yaml), and `sg msp generate sams dev` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-sams-dev` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-sams-dev), or you can use:

```bash
sg msp tfc view sams dev
```

### prod

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`sams-prod-ywuz`](https://console.cloud.google.com/run?project=sams-prod-ywuz)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **external**                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Deployment type     | `rollout`                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Resources           | [prod Redis](#prod-redis), [prod PostgreSQL instance](#prod-postgresql-instance), [prod BigQuery dataset](#prod-bigquery-dataset)                                                                                                                                                                                                                                                                                                                                          |
| Slack notifications | [#alerts-sams-prod](https://sourcegraph.slack.com/archives/alerts-sams-prod)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=sams-prod-ywuz), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=sams-prod-ywuz) |
| Errors              | [Sentry `sams-prod`](https://sourcegraph.sentry.io/projects/sams-prod/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [cody.sourcegraph.com](https://cody.sourcegraph.com)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GCP project read access  | [Read-only Entitle request for the 'Managed Services ' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYTQ4OWM2MDktNTBlYy00ODAzLWIzZjItMzYzZGJhMTgwMWJhIiwidGhyb3VnaCI6ImE0ODljNjA5LTUwZWMtNDgwMy1iM2YyLTM2M2RiYTE4MDFiYSIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)   |
| GCP project write access | [Write access Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Self-Serve Cody prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=sams-prod-ywuz)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=sams-prod-ywuz) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=sams-prod-ywuz)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `sams-prod`](https://sourcegraph.sentry.io/projects/sams-prod/)                                                                                                                                                                                                                                                     |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs sams prod
```

#### prod Redis

| PROPERTY | DETAILS                                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=sams-prod-ywuz) |

#### prod PostgreSQL instance

| PROPERTY  | DETAILS                                                                                      |
| --------- | -------------------------------------------------------------------------------------------- |
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=sams-prod-ywuz) |
| Databases | `accounts`, `cody_management`                                                                |

> [!NOTE]
> The [Write access Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) is required for BOTH read-only and write access to the database.

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect sams prod

# For write access - use with caution!
sg msp pg connect -write-access sams prod
```

#### prod BigQuery dataset

| PROPERTY        | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dataset Project | `sams-prod-ywuz`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Dataset ID      | `sams`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Tables          | [`user_emails`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/user_emails.bigquerytable.json), [`events`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/events.bigquerytable.json), [`cody_events`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/cody_events.bigquerytable.json), [`subscription_events`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/subscription_events.bigquerytable.json) |

#### prod Architecture Diagram

![Architecture Diagram](./sams-prod.svg)

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/sams/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/service.yaml), and `sg msp generate sams prod` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-sams-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-sams-prod), or you can use:

```bash
sg msp tfc view sams prod
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
Service is failing to repond on https://cody.sourcegraph.com - this may be expected if the service was recently provisioned or if its external domain has changed.
```

Severity: CRITICAL

#### Container Instance Count

```md
There are a lot of Cloud Run instances running - we may need to increase per-instance requests make make sure we won't hit the configured max instance count
```

Severity: WARNING
