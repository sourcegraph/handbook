# Cody Gatekeeper infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'
-->

This document describes operational guidance for Cody Gatekeeper infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

|   PROPERTY   |                                                  DETAILS                                                   |
|--------------|------------------------------------------------------------------------------------------------------------|
| Service ID   | [`gatekeeper`](https://github.com/sourcegraph/managed-services/blob/main/services/gatekeeper/service.yaml) |
| Owners       | **cody-services**                                                                                          |
| Service kind | Cloud Run job                                                                                              |
| Environments | [prod environment](#prod-environment)                                                                      |
| Docker image | `us.gcr.io/sourcegraph-dev/abuse-ban-bot`                                                                  |
| Source code  | [`github.com/sourcegraph/abuse-ban-bot` - `.`](https://github.com/sourcegraph/abuse-ban-bot/tree/HEAD/.)   |

## Environments

### prod environment

|  PROPERTY  |                                               DETAILS                                               |
|------------|-----------------------------------------------------------------------------------------------------|
| Project ID | [`gatekeeper-prod-1c93`](https://console.cloud.google.com/run/jobs?project=gatekeeper-prod-1c93)    |
| Category   | **test**                                                                                            |
| Resources  |                                                                                                     |
| Alerts     | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=gatekeeper-prod-1c93) |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.
Test environments have less stringent requirements.

|          ACCESS          |                                                                                                                                                                 ENTITLE REQUEST TEMPLATE                                                                                                                                                                  |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

#### prod Cloud Run

| PROPERTY |                                                                                                                                                           DETAILS                                                                                                                                                            |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console  | [Cloud Run job](https://console.cloud.google.com/run/jobs?project=gatekeeper-prod-1c93)                                                                                                                                                                                                                                      |
| Logs     | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_job%22;summaryFields=labels%252F%2522run.googleapis.com%252Fexecution_name%2522,jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=gatekeeper-prod-1c93) |
