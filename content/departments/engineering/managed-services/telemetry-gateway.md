# Telemetry Gateway infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-02-14 14:10:05.333007 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/f14ec3c2c276bd9935fccb46a9cd73a013a4bbfe
-->

This document describes operational guidance for Telemetry Gateway infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

|   PROPERTY   |                                                                   DETAILS                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Service ID   | [`telemetry-gateway`](https://github.com/sourcegraph/managed-services/blob/main/services/telemetry-gateway/service.yaml)                     |
| Owners       | **core-services**                                                                                                                            |
| Service kind | Cloud Run service                                                                                                                            |
| Environments | [dev](#dev), [prod](#prod)                                                                                                                   |
| Docker image | `index.docker.io/sourcegraph/telemetry-gateway`                                                                                              |
| Source code  | [`github.com/sourcegraph/sourcegraph` - `cmd/telemetry-gateway`](https://github.com/sourcegraph/sourcegraph/tree/HEAD/cmd/telemetry-gateway) |

## Environments

### dev

|  PROPERTY  |                                                  DETAILS                                                  |
|------------|-----------------------------------------------------------------------------------------------------------|
| Project ID | [`telemetry-gateway-dev-0050`](https://console.cloud.google.com/run?project=telemetry-gateway-dev-0050)   |
| Category   | **test**                                                                                                  |
| Resources  |                                                                                                           |
| Alerts     | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=telemetry-gateway-dev-0050) |
| Sentry     | [`telemetry-gateway-dev`](https://sourcegraph.sentry.io/projects/telemetry-gateway-dev/)                  |
| Domain     | [telemetry-gateway.sgdev.org](https://telemetry-gateway.sgdev.org)                                        |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

|          ACCESS          |                                                                                                                                                                 ENTITLE REQUEST TEMPLATE                                                                                                                                                                  |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [dev Terraform Cloud](#dev-terraform-cloud).

#### dev Cloud Run

The Telemetry Gateway dev service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

|   PROPERTY   |                                                                                                                                                                 DETAILS                                                                                                                                                                 |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console      | [Cloud Run service](https://console.cloud.google.com/run?project=telemetry-gateway-dev-0050)                                                                                                                                                                                                                                            |
| Service logs | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=telemetry-gateway-dev-0050) |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs telemetry-gateway dev
```

#### dev Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/telemetry-gateway/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/telemetry-gateway/service.yaml), and `sg msp generate telemetry-gateway dev` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-telemetry-gateway-dev` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-telemetry-gateway-dev), or you can use:

```bash
sg msp tfc view telemetry-gateway dev
```

### prod

|  PROPERTY  |                                                  DETAILS                                                   |
|------------|------------------------------------------------------------------------------------------------------------|
| Project ID | [`telemetry-gateway-prod-acae`](https://console.cloud.google.com/run?project=telemetry-gateway-prod-acae)  |
| Category   | **external**                                                                                               |
| Resources  |                                                                                                            |
| Alerts     | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=telemetry-gateway-prod-acae) |
| Sentry     | [`telemetry-gateway-prod`](https://sourcegraph.sentry.io/projects/telemetry-gateway-prod/)                 |
| Domain     | [telemetry-gateway.sourcegraph.com](https://telemetry-gateway.sourcegraph.com)                             |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

|          ACCESS          |                                                                                                                                                                ENTITLE REQUEST TEMPLATE                                                                                                                                                                |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Entitle request for the 'Managed Services ' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYTQ4OWM2MDktNTBlYy00ODAzLWIzZjItMzYzZGJhMTgwMWJhIiwidGhyb3VnaCI6ImE0ODljNjA5LTUwZWMtNDgwMy1iM2YyLTM2M2RiYTE4MDFiYSIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)  |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Telemetry Gateway prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

|   PROPERTY   |                                                                                                                                                                 DETAILS                                                                                                                                                                  |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console      | [Cloud Run service](https://console.cloud.google.com/run?project=telemetry-gateway-prod-acae)                                                                                                                                                                                                                                            |
| Service logs | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=telemetry-gateway-prod-acae) |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs telemetry-gateway prod
```

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/telemetry-gateway/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/telemetry-gateway/service.yaml), and `sg msp generate telemetry-gateway prod` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-telemetry-gateway-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-telemetry-gateway-prod), or you can use:

```bash
sg msp tfc view telemetry-gateway prod
```
