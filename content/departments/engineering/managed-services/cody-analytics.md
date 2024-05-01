# Cody Analytics infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-05-01 12:30:43.834017 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/d0e016b97b93281abe4e18a9933ef0195d17296c
-->

This document describes operational guidance for Cody Analytics infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | `cody-analytics` ([specification](https://github.com/sourcegraph/managed-services/blob/main/services/cody-analytics/service.yaml)) |
| Owners       | **cody-strat**                                                                                                                     |
| Service kind | Cloud Run service                                                                                                                  |
| Environments | [dev](#dev), [prod](#prod)                                                                                                         |
| Docker image | `us-central1-docker.pkg.dev/sourcegraph-dev/cody-analytics/service`                                                                |
| Source code  | [`github.com/sourcegraph/cody-analytics` - `.`](https://github.com/sourcegraph/cody-analytics/tree/HEAD/.)                         |

## Environments

### dev

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`cody-analytics-dev-bd34`](https://console.cloud.google.com/run?project=cody-analytics-dev-bd34)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **test**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Deployment type     | `manual`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Resources           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Slack notifications | [#alerts-cody-analytics-dev](https://sourcegraph.slack.com/archives/alerts-cody-analytics-dev)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=cody-analytics-dev-bd34), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=cody-analytics-dev-bd34) |
| Errors              | [Sentry `cody-analytics-dev`](https://sourcegraph.sentry.io/projects/cody-analytics-dev/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [cody-analytics.sgdev.org](https://cody-analytics.sgdev.org)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [dev Terraform Cloud](#dev-terraform-cloud).

#### dev Cloud Run

The Cody Analytics dev service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=cody-analytics-dev-bd34)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=cody-analytics-dev-bd34) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=cody-analytics-dev-bd34)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `cody-analytics-dev`](https://sourcegraph.sentry.io/projects/cody-analytics-dev/)                                                                                                                                                                                                                                            |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs cody-analytics dev
```

#### dev Architecture Diagram

![Architecture Diagram](./cody-analytics-dev.svg)

#### dev Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/cody-analytics/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/cody-analytics/service.yaml), and `sg msp generate cody-analytics dev` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-cody-analytics-dev` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-cody-analytics-dev), or you can use:

```bash
sg msp tfc view cody-analytics dev
```

### prod

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`cody-analytics-prod-da5a`](https://console.cloud.google.com/run?project=cody-analytics-prod-da5a)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **external**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Deployment type     | `manual`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Resources           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Slack notifications | [#alerts-cody-analytics-prod](https://sourcegraph.slack.com/archives/alerts-cody-analytics-prod)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=cody-analytics-prod-da5a), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=cody-analytics-prod-da5a) |
| Errors              | [Sentry `cody-analytics-prod`](https://sourcegraph.sentry.io/projects/cody-analytics-prod/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [cody-analytics.sourcegraph.com](https://cody-analytics.sourcegraph.com)                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GCP project read access  | [Read-only Entitle request for the 'Managed Services ' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYTQ4OWM2MDktNTBlYy00ODAzLWIzZjItMzYzZGJhMTgwMWJhIiwidGhyb3VnaCI6ImE0ODljNjA5LTUwZWMtNDgwMy1iM2YyLTM2M2RiYTE4MDFiYSIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)   |
| GCP project write access | [Write access Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Cody Analytics prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=cody-analytics-prod-da5a)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=cody-analytics-prod-da5a) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=cody-analytics-prod-da5a)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `cody-analytics-prod`](https://sourcegraph.sentry.io/projects/cody-analytics-prod/)                                                                                                                                                                                                                                           |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs cody-analytics prod
```

#### prod Architecture Diagram

![Architecture Diagram](./cody-analytics-prod.svg)

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/cody-analytics/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/cody-analytics/service.yaml), and `sg msp generate cody-analytics prod` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-cody-analytics-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-cody-analytics-prod), or you can use:

```bash
sg msp tfc view cody-analytics prod
```

## Alert Policies

The following alert policies are defined for each of this service's environments.

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
Service is failing to repond on https://cody-analytics.sourcegraph.com - this may be expected if the service was recently provisioned or if its external domain has changed.
```

Severity: CRITICAL
