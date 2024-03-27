# MSP Testbed infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-03-27 07:28:50.839481 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/ad2cd63ae14c7e14f463f42dc3247b681dfbb925
-->

This document describes operational guidance for MSP Testbed infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | [`msp-testbed`](https://github.com/sourcegraph/managed-services/blob/main/services/msp-testbed/service.yaml)                     |
| Owners       | **core-services**                                                                                                                |
| Service kind | Cloud Run service                                                                                                                |
| Environments | [test](#test), [robert](#robert)                                                                                                 |
| Docker image | `us.gcr.io/sourcegraph-dev/msp-example`                                                                                          |
| Source code  | [`github.com/sourcegraph/sourcegraph` - `cmd/msp-example`](https://github.com/sourcegraph/sourcegraph/tree/HEAD/cmd/msp-example) |

## Environments

### test

| PROPERTY            | DETAILS                                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`msp-testbed-test-77589aae45d0`](https://console.cloud.google.com/run?project=msp-testbed-test-77589aae45d0)                     |
| Category            | **test**                                                                                                                          |
| Resources           | [test Redis](#test-redis), [test PostgreSQL instance](#test-postgresql-instance), [test BigQuery dataset](#test-bigquery-dataset) |
| Slack notifications | [#alerts-msp-testbed-test](https://sourcegraph.slack.com/archives/alerts-msp-testbed-test)                                        |
| Alerts              | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=msp-testbed-test-77589aae45d0)                      |
| Errors              | [Sentry `msp-testbed-test`](https://sourcegraph.sentry.io/projects/msp-testbed-test/)                                             |
| Domain              | [msp-testbed.sgdev.org](https://msp-testbed.sgdev.org)                                                                            |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

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
> The [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) is required for BOTH read-only and write access to the database.

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

| PROPERTY            | DETAILS                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`msp-testbed-robert-7be9`](https://console.cloud.google.com/run?project=msp-testbed-robert-7be9)                                             |
| Category            | **test**                                                                                                                                      |
| Resources           | [robert Redis](#robert-redis), [robert PostgreSQL instance](#robert-postgresql-instance), [robert BigQuery dataset](#robert-bigquery-dataset) |
| Slack notifications | [#alerts-msp-testbed-robert](https://sourcegraph.slack.com/archives/alerts-msp-testbed-robert)                                                |
| Alerts              | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=msp-testbed-robert-7be9)                                        |
| Errors              | [Sentry `msp-testbed-robert`](https://sourcegraph.sentry.io/projects/msp-testbed-robert/)                                                     |
| Domain              | [msp-testbed-robert.sgdev.org](https://msp-testbed-robert.sgdev.org)                                                                          |
| Cloudflare WAF      | ✅                                                                                                                                            |

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
