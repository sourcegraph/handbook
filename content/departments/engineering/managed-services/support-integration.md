# Support Integration infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-01-11 18:09:55.863516 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/f37cdc8aea65e1197e2d814447ad65c30fccd75b
-->

This document describes operational guidance for Support Integration infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                      |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | [`support-integration`](https://github.com/sourcegraph/managed-services/blob/main/services/support-integration/service.yaml) |
| Owners       | **Customer Support**                                                                                                         |
| Service kind | Cloud Run service                                                                                                            |
| Environments | [prod](#prod)                                                                                                                |
| Docker image | `index.docker.io/sourcegraph/support-integration`                                                                            |
| Source code  | [`github.com/sourcegraph/support-integration` - `.`](https://github.com/sourcegraph/support-integration/tree/HEAD/.)         |

## Environments

### prod

| PROPERTY       | DETAILS                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| Project ID     | [`support-integration-prod-549b`](https://console.cloud.google.com/run?project=support-integration-prod-549b) |
| Category       | **internal**                                                                                                  |
| Resources      |                                                                                                               |
| Alerts         | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=support-integration-prod-549b)  |
| Domain         | [support-integration.sgdev.org](https://support-integration.sgdev.org)                                        |
| Cloudflare WAF | ✅                                                                                                            |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.
Test environments have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GCP project read access  | [Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiNzg0M2MxYWYtYzU2MS00ZDMyLWE3ZTAtYjZkNjY0NDM4MzAzIiwidGhyb3VnaCI6Ijc4NDNjMWFmLWM1NjEtNGQzMi1hN2UwLWI2ZDY2NDQzODMwMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZTEyYTJkZDktYzY1ZC00YzM0LTlmNDgtMzYzNTNkZmY0MDkyIiwidGhyb3VnaCI6ImUxMmEyZGQ5LWM2NWQtNGMzNC05ZjQ4LTM2MzUzZGZmNDA5MiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

#### prod Cloud Run

| PROPERTY | DETAILS                                                                                                                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Console  | [Cloud Run service](https://console.cloud.google.com/run?project=support-integration-prod-549b)                                                                                                                                                                                                                                            |
| Logs     | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=support-integration-prod-549b) |
