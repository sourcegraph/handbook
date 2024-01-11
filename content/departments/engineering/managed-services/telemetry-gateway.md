# Telemetry Gateway infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-01-11 18:09:55.864583 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/f37cdc8aea65e1197e2d814447ad65c30fccd75b
-->

This document describes operational guidance for Telemetry Gateway infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | [`telemetry-gateway`](https://github.com/sourcegraph/managed-services/blob/main/services/telemetry-gateway/service.yaml)                     |
| Owners       | **core-services**                                                                                                                            |
| Service kind | Cloud Run service                                                                                                                            |
| Environments | [dev](#dev), [prod](#prod)                                                                                                                   |
| Docker image | `index.docker.io/sourcegraph/telemetry-gateway`                                                                                              |
| Source code  | [`github.com/sourcegraph/sourcegraph` - `cmd/telemetry-gateway`](https://github.com/sourcegraph/sourcegraph/tree/HEAD/cmd/telemetry-gateway) |

## Environments

### dev

| PROPERTY   | DETAILS                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| Project ID | [`telemetry-gateway-dev-0050`](https://console.cloud.google.com/run?project=telemetry-gateway-dev-0050)   |
| Category   | **test**                                                                                                  |
| Resources  |                                                                                                           |
| Alerts     | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=telemetry-gateway-dev-0050) |
| Domain     | [telemetry-gateway.sgdev.org](https://telemetry-gateway.sgdev.org)                                        |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.
Test environments have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

#### dev Cloud Run

| PROPERTY | DETAILS                                                                                                                                                                                                                                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console  | [Cloud Run service](https://console.cloud.google.com/run?project=telemetry-gateway-dev-0050)                                                                                                                                                                                                                                            |
| Logs     | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=telemetry-gateway-dev-0050) |

### prod

| PROPERTY   | DETAILS                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Project ID | [`telemetry-gateway-prod-acae`](https://console.cloud.google.com/run?project=telemetry-gateway-prod-acae)  |
| Category   | **external**                                                                                               |
| Resources  |                                                                                                            |
| Alerts     | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=telemetry-gateway-prod-acae) |
| Domain     | [telemetry-gateway.sourcegraph.com](https://telemetry-gateway.sourcegraph.com)                             |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.
Test environments have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GCP project read access  | [Entitle request for the 'Managed Services ' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYTQ4OWM2MDktNTBlYy00ODAzLWIzZjItMzYzZGJhMTgwMWJhIiwidGhyb3VnaCI6ImE0ODljNjA5LTUwZWMtNDgwMy1iM2YyLTM2M2RiYTE4MDFiYSIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Managed Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)  |

#### prod Cloud Run

| PROPERTY | DETAILS                                                                                                                                                                                                                                                                                                                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console  | [Cloud Run service](https://console.cloud.google.com/run?project=telemetry-gateway-prod-acae)                                                                                                                                                                                                                                            |
| Logs     | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=telemetry-gateway-prod-acae) |
