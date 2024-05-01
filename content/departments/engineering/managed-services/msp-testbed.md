# MSP Testbed infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-05-01 12:30:44.148337 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/d0e016b97b93281abe4e18a9933ef0195d17296c
-->

This document describes operational guidance for MSP Testbed infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | `msp-testbed` ([specification](https://github.com/sourcegraph/managed-services/blob/main/services/msp-testbed/service.yaml))     |
| Owners       | **core-services**                                                                                                                |
| Service kind | Cloud Run service                                                                                                                |
| Environments | [test](#test), [robert](#robert)                                                                                                 |
| Docker image | `us.gcr.io/sourcegraph-dev/msp-example`                                                                                          |
| Source code  | [`github.com/sourcegraph/sourcegraph` - `cmd/msp-example`](https://github.com/sourcegraph/sourcegraph/tree/HEAD/cmd/msp-example) |

<!--
Automatically generated from the service README: https://github.com/sourcegraph/managed-services/blob/main/services/msp-testbed/README.md
-->

This is a test environment used by the Core Services team for experimenting with MSP infrastructure changes.
Each Core Services teammate generally focuses their experiments on an individual environment of this service.

## Rollouts

| PROPERTY          | DETAILS                                                                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Delivery pipeline | [`msp-testbed-us-central1-rollout`](https://console.cloud.google.com/deploy/delivery-pipelines/us-central1/msp-testbed-us-central1-rollout?project=msp-testbed-robert-7be9) |
| Stages            | [test](#test) -> [robert](#robert)                                                                                                                                          |

Changes to MSP Testbed are continuously delivered to the first stage ([test](#test)) of the delivery pipeline.

Promotion of a release to the next stage in the pipeline must be done manually using the GCP Delivery pipeline UI.

## Environments

### test

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`msp-testbed-test-77589aae45d0`](https://console.cloud.google.com/run?project=msp-testbed-test-77589aae45d0)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **internal**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Deployment type     | `rollout`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Resources           | [test Redis](#test-redis), [test PostgreSQL instance](#test-postgresql-instance), [test BigQuery dataset](#test-bigquery-dataset)                                                                                                                                                                                                                                                                                                                                                                        |
| Slack notifications | [#alerts-msp-testbed-test](https://sourcegraph.slack.com/archives/alerts-msp-testbed-test)                                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=msp-testbed-test-77589aae45d0), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=msp-testbed-test-77589aae45d0) |
| Errors              | [Sentry `msp-testbed-test`](https://sourcegraph.sentry.io/projects/msp-testbed-test/)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [msp-testbed.sgdev.org](https://msp-testbed.sgdev.org)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiNzg0M2MxYWYtYzU2MS00ZDMyLWE3ZTAtYjZkNjY0NDM4MzAzIiwidGhyb3VnaCI6Ijc4NDNjMWFmLWM1NjEtNGQzMi1hN2UwLWI2ZDY2NDQzODMwMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZTEyYTJkZDktYzY1ZC00YzM0LTlmNDgtMzYzNTNkZmY0MDkyIiwidGhyb3VnaCI6ImUxMmEyZGQ5LWM2NWQtNGMzNC05ZjQ4LTM2MzUzZGZmNDA5MiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [test Terraform Cloud](#test-terraform-cloud).

#### test Cloud Run

The MSP Testbed test service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=msp-testbed-test-77589aae45d0)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=msp-testbed-test-77589aae45d0) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=msp-testbed-test-77589aae45d0)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `msp-testbed-test`](https://sourcegraph.sentry.io/projects/msp-testbed-test/)                                                                                                                                                                                                                                                      |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs msp-testbed test
```

#### test Redis

| PROPERTY | DETAILS                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=msp-testbed-test-77589aae45d0) |

#### test PostgreSQL instance

| PROPERTY  | DETAILS                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=msp-testbed-test-77589aae45d0) |
| Databases | `primary`                                                                                                   |

> [!NOTE]
> The [Write access Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZTEyYTJkZDktYzY1ZC00YzM0LTlmNDgtMzYzNTNkZmY0MDkyIiwidGhyb3VnaCI6ImUxMmEyZGQ5LWM2NWQtNGMzNC05ZjQ4LTM2MzUzZGZmNDA5MiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) is required for BOTH read-only and write access to the database.

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect msp-testbed test

# For write access - use with caution!
sg msp pg connect -write-access msp-testbed test
```

#### test BigQuery dataset

| PROPERTY        | DETAILS                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Dataset Project | `msp-testbed-test-77589aae45d0`                                                                                        |
| Dataset ID      | `msp_testbed`                                                                                                          |
| Tables          | [`example`](https://github.com/sourcegraph/managed-services/blob/main/services/msp-testbed/example.bigquerytable.json) |

#### test Architecture Diagram

![Architecture Diagram](./msp-testbed-test.svg)

#### test Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/msp-testbed/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/msp-testbed/service.yaml), and `sg msp generate msp-testbed test` generates the required infrastructure configuration for this environment in Terraform.
Terraform Cloud (TFC) workspaces specific to each service then provisions the required infrastructure from this configuration.
You may want to check your service environment's TFC workspaces if a Terraform apply fails (reported via GitHub commit status checks in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository, or in #alerts-msp-tfc).

> [!NOTE]
> If you are looking for service logs, see the [test Cloud Run](#test-cloud-run) section instead. In general:
>
> - check service logs ([test Cloud Run](#test-cloud-run)) if your service has gone down or is misbehaving
> - check TFC workspaces for infrastructure provisioning or configuration issues

To access this environment's Terraform Cloud workspaces, you will need to [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) and then [request Entitle access to membership in the "Managed Services Platform Operator" TFC team](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiSlVTVElGSUNBVElPTiBIRVJFIiwicm9sZUlkcyI6W3siaWQiOiJiMzg3MzJjYy04OTUyLTQ2Y2QtYmIxZS1lZjI2ODUwNzIyNmIiLCJ0aHJvdWdoIjoiYjM4NzMyY2MtODk1Mi00NmNkLWJiMWUtZWYyNjg1MDcyMjZiIiwidHlwZSI6InJvbGUifV19).
The "Managed Services Platform Operator" team has access to all MSP TFC workspaces.

> [!WARNING]
> You **must [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) before making your Entitle request**.
> If you make your Entitle request, then log in, you will be removed from any team memberships granted through Entitle by Terraform Cloud's SSO implementation.

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-msp-testbed-test` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-msp-testbed-test), or you can use:

```bash
sg msp tfc view msp-testbed test
```

### robert

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`msp-testbed-robert-7be9`](https://console.cloud.google.com/run?project=msp-testbed-robert-7be9)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **test**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Deployment type     | `rollout`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Resources           | [robert Redis](#robert-redis), [robert PostgreSQL instance](#robert-postgresql-instance), [robert BigQuery dataset](#robert-bigquery-dataset)                                                                                                                                                                                                                                                                                                                                                |
| Slack notifications | [#alerts-msp-testbed-robert](https://sourcegraph.slack.com/archives/alerts-msp-testbed-robert)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=msp-testbed-robert-7be9), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=msp-testbed-robert-7be9) |
| Errors              | [Sentry `msp-testbed-robert`](https://sourcegraph.sentry.io/projects/msp-testbed-robert/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [msp-testbed-robert.sgdev.org](https://msp-testbed-robert.sgdev.org)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [robert Terraform Cloud](#robert-terraform-cloud).

#### robert Cloud Run

The MSP Testbed robert service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=msp-testbed-robert-7be9)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=msp-testbed-robert-7be9) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=msp-testbed-robert-7be9)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `msp-testbed-robert`](https://sourcegraph.sentry.io/projects/msp-testbed-robert/)                                                                                                                                                                                                                                            |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs msp-testbed robert
```

#### robert Redis

| PROPERTY | DETAILS                                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=msp-testbed-robert-7be9) |

#### robert PostgreSQL instance

| PROPERTY  | DETAILS                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------- |
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=msp-testbed-robert-7be9) |
| Databases | `primary`                                                                                             |

> [!NOTE]
> The [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) is required for BOTH read-only and write access to the database.

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect msp-testbed robert

# For write access - use with caution!
sg msp pg connect -write-access msp-testbed robert
```

#### robert BigQuery dataset

| PROPERTY        | DETAILS                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Dataset Project | `msp-testbed-robert-7be9`                                                                                              |
| Dataset ID      | `msp_testbed`                                                                                                          |
| Tables          | [`example`](https://github.com/sourcegraph/managed-services/blob/main/services/msp-testbed/example.bigquerytable.json) |

#### robert Architecture Diagram

![Architecture Diagram](./msp-testbed-robert.svg)

#### robert Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/msp-testbed/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/msp-testbed/service.yaml), and `sg msp generate msp-testbed robert` generates the required infrastructure configuration for this environment in Terraform.
Terraform Cloud (TFC) workspaces specific to each service then provisions the required infrastructure from this configuration.
You may want to check your service environment's TFC workspaces if a Terraform apply fails (reported via GitHub commit status checks in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository, or in #alerts-msp-tfc).

> [!NOTE]
> If you are looking for service logs, see the [robert Cloud Run](#robert-cloud-run) section instead. In general:
>
> - check service logs ([robert Cloud Run](#robert-cloud-run)) if your service has gone down or is misbehaving
> - check TFC workspaces for infrastructure provisioning or configuration issues

To access this environment's Terraform Cloud workspaces, you will need to [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) and then [request Entitle access to membership in the "Managed Services Platform Operator" TFC team](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiSlVTVElGSUNBVElPTiBIRVJFIiwicm9sZUlkcyI6W3siaWQiOiJiMzg3MzJjYy04OTUyLTQ2Y2QtYmIxZS1lZjI2ODUwNzIyNmIiLCJ0aHJvdWdoIjoiYjM4NzMyY2MtODk1Mi00NmNkLWJiMWUtZWYyNjg1MDcyMjZiIiwidHlwZSI6InJvbGUifV19).
The "Managed Services Platform Operator" team has access to all MSP TFC workspaces.

> [!WARNING]
> You **must [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) before making your Entitle request**.
> If you make your Entitle request, then log in, you will be removed from any team memberships granted through Entitle by Terraform Cloud's SSO implementation.

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-msp-testbed-robert` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-msp-testbed-robert), or you can use:

```bash
sg msp tfc view msp-testbed robert
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
Service is failing to repond on https://msp-testbed-robert.sgdev.org - this may be expected if the service was recently provisioned or if its external domain has changed.
```

Severity: CRITICAL
