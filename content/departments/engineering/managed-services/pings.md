# Pings Service infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-01-30 00:36:07.186265 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/5c3790bfdd225d7ce3ccf5dd8818a3f58d85aba2
-->

This document describes operational guidance for Pings Service infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| Service ID   | [`pings`](https://github.com/sourcegraph/managed-services/blob/main/services/pings/service.yaml)                     |
| Owners       | **core-services**                                                                                                    |
| Service kind | Cloud Run service                                                                                                    |
| Environments | [prod](#prod)                                                                                                        |
| Docker image | `index.docker.io/sourcegraph/pings`                                                                                  |
| Source code  | [`github.com/sourcegraph/sourcegraph` - `cmd/pings`](https://github.com/sourcegraph/sourcegraph/tree/HEAD/cmd/pings) |

## Environments

### prod

| PROPERTY   | DETAILS                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| Project ID | [`pings-prod-2f4f73edf1db`](https://console.cloud.google.com/run?project=pings-prod-2f4f73edf1db)      |
| Category   | **external**                                                                                           |
| Resources  |                                                                                                        |
| Alerts     | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=pings-prod-2f4f73edf1db) |
| Sentry     | [`pings-prod`](https://sourcegraph.sentry.io/projects/pings-prod/)                                     |
| Domain     | [pings.sourcegraph.com](https://pings.sourcegraph.com)                                                 |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GCP project read access  | [Entitle request for the 'Managed Services ' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYTQ4OWM2MDktNTBlYy00ODAzLWIzZjItMzYzZGJhMTgwMWJhIiwidGhyb3VnaCI6ImE0ODljNjA5LTUwZWMtNDgwMy1iM2YyLTM2M2RiYTE4MDFiYSIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)  |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Pings Service prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY     | DETAILS                                                                                                                                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Console      | [Cloud Run service](https://console.cloud.google.com/run?project=pings-prod-2f4f73edf1db)                                                                                                                                                                                                                                            |
| Service logs | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=pings-prod-2f4f73edf1db) |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs pings prod
```

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/pings/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/pings/service.yaml), and `sg msp generate pings prod` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-pings-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-pings-prod), or you can use:

```bash
sg msp tfc view pings prod
```
