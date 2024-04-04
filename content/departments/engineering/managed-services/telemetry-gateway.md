# Telemetry Gateway infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-04-03 20:09:13.699424 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/05e843e1e494d583b307906a36d4a49b4fb655de
-->

This document describes operational guidance for Telemetry Gateway infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

|     PROPERTY     |                                                                                          DETAILS                                                                                          |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Service ID       | `telemetry-gateway` ([specification](https://github.com/sourcegraph/managed-services/blob/main/services/telemetry-gateway/service.yaml))                                                  |
| Owners           | **core-services**                                                                                                                                                                         |
| Service kind     | Cloud Run service                                                                                                                                                                         |
| Environments     | [dev](#dev), [prod](#prod)                                                                                                                                                                |
| Docker image     | `index.docker.io/sourcegraph/telemetry-gateway`                                                                                                                                           |
| Source code      | [`github.com/sourcegraph/sourcegraph` - `cmd/telemetry-gateway`](https://github.com/sourcegraph/sourcegraph/tree/HEAD/cmd/telemetry-gateway)                                              |
| Rollout Pipeline | [telemetry-gateway-us-central1-rollout](https://console.cloud.google.com/deploy/delivery-pipelines/us-central1/telemetry-gateway-us-central1-rollout?project=telemetry-gateway-prod-acae) |

<!--
Automatically generated from the service README: https://github.com/sourcegraph/managed-services/blob/main/services/telemetry-gateway/README.md
-->

The Telemetry Gateway service is the service that ingests [telemetry v2 events](https://sourcegraph.com/doc/dev/background-information/telemetry) from all Sourcegraph instances, as well as other managed services.

- For Sourcegraph instances that prior to 5.2.0, no events are exported to Telemetry Gateway, though legacy mechanisms may exist, e.g. for Cloud instances.
- As of 5.2.0, [certain flags can be configured](https://docs.sourcegraph.com/dev/background-information/telemetry#enabling-telemetry-export) to export events that have been instrumented with the new APIs to Telemetry Gateway.
- As of 5.2.1, for existing licenses, export is enabled by default for Cody events only - for new licenses, export is enabled for all events. Some license tags can be configured to disable telemetry export in various degrees - see the original [Telemetry Export rollout plan](https://docs.google.com/document/d/1Z1Yp7G61WYlQ1B4vO5-mIXVtmvzGmD7PqYHNBQV-2Ik/edit).

For discussion around telemetry V2 adoption, please reach out to #wg-v2-telemetry.
For discussion around the Telemetry Gateway service, please reach out to #discuss-core-services.
For more information, also see:

- Service API: [`telemetrygateway.proto`](https://github.com/sourcegraph/sourcegraph/blob/main/internal/telemetrygateway/v1/telemetrygateway.proto)
- [Docs: Admin: Telemetry](https://sourcegraph.com/docs/admin/telemetry#telemetry)
- [Docs: Dev: Background Information: Telemetry](https://sourcegraph.com/docs/dev/background-information/telemetry)
- [Docs: Dev: How to set up Telemetry Gateway locally](https://sourcegraph.com/docs/dev/how-to/telemetry_gateway)

### Querying events

Please reach out to #discuss-analytics for assistance in querying the dataset - Telemetry Gateway only handles ingestion and forwarding data to pipelines operated by the Data Analytics team.

### Debugging missing Sourcegraph instance events

1. Check for a license tag on the instance's license that disables events - see the original [Telemetry Export rollout plan](https://docs.google.com/document/d/1Z1Yp7G61WYlQ1B4vO5-mIXVtmvzGmD7PqYHNBQV-2Ik/edit).
   1. Note that [`external_url` export](https://github.com/sourcegraph/sourcegraph/pull/59014) was not added until 5.2.6+ - finding events for older instances require searching events by instance ID.
2. Check for pings, as that mechanism has not changed, and validate that the instance is is on 5.2.1+
3. If the above don't reveal anything, reach out to #discuss-core-services for further debugging at the Telemetry Gateway level.

## Environments

### dev

|      PROPERTY       |                                                  DETAILS                                                  |
|---------------------|-----------------------------------------------------------------------------------------------------------|
| Project ID          | [`telemetry-gateway-dev-0050`](https://console.cloud.google.com/run?project=telemetry-gateway-dev-0050)   |
| Category            | **test**                                                                                                  |
| Deployment Type     | rollout                                                                                                   |
| Resources           |                                                                                                           |
| Slack notifications | [#alerts-telemetry-gateway-dev](https://sourcegraph.slack.com/archives/alerts-telemetry-gateway-dev)      |
| Alerts              | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=telemetry-gateway-dev-0050) |
| Errors              | [Sentry `telemetry-gateway-dev`](https://sourcegraph.sentry.io/projects/telemetry-gateway-dev/)           |
| Domain              | [telemetry-gateway.sgdev.org](https://telemetry-gateway.sgdev.org)                                        |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

|          ACCESS          |                                                                                                                                                                        ENTITLE REQUEST TEMPLATE                                                                                                                                                                        |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Read-only Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [dev Terraform Cloud](#dev-terraform-cloud).

#### dev Cloud Run

The Telemetry Gateway dev service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

|    PROPERTY    |                                                                                                                                                                 DETAILS                                                                                                                                                                 |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=telemetry-gateway-dev-0050)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=telemetry-gateway-dev-0050) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=telemetry-gateway-dev-0050)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `telemetry-gateway-dev`](https://sourcegraph.sentry.io/projects/telemetry-gateway-dev/)                                                                                                                                                                                                                                         |

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

|      PROPERTY       |                                                  DETAILS                                                   |
|---------------------|------------------------------------------------------------------------------------------------------------|
| Project ID          | [`telemetry-gateway-prod-acae`](https://console.cloud.google.com/run?project=telemetry-gateway-prod-acae)  |
| Category            | **external**                                                                                               |
| Deployment Type     | rollout                                                                                                    |
| Resources           |                                                                                                            |
| Slack notifications | [#alerts-telemetry-gateway-prod](https://sourcegraph.slack.com/archives/alerts-telemetry-gateway-prod)     |
| Alerts              | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=telemetry-gateway-prod-acae) |
| Errors              | [Sentry `telemetry-gateway-prod`](https://sourcegraph.sentry.io/projects/telemetry-gateway-prod/)          |
| Domain              | [telemetry-gateway.sourcegraph.com](https://telemetry-gateway.sourcegraph.com)                             |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

|          ACCESS          |                                                                                                                                                                      ENTITLE REQUEST TEMPLATE                                                                                                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Read-only Entitle request for the 'Managed Services ' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYTQ4OWM2MDktNTBlYy00ODAzLWIzZjItMzYzZGJhMTgwMWJhIiwidGhyb3VnaCI6ImE0ODljNjA5LTUwZWMtNDgwMy1iM2YyLTM2M2RiYTE4MDFiYSIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)   |
| GCP project write access | [Write access Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Telemetry Gateway prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

|    PROPERTY    |                                                                                                                                                                 DETAILS                                                                                                                                                                  |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=telemetry-gateway-prod-acae)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=telemetry-gateway-prod-acae) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=telemetry-gateway-prod-acae)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `telemetry-gateway-prod`](https://sourcegraph.sentry.io/projects/telemetry-gateway-prod/)                                                                                                                                                                                                                                        |

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
