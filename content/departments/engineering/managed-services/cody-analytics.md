# Cody Analytics infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-01-11 18:09:55.857756 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/f37cdc8aea65e1197e2d814447ad65c30fccd75b
-->

This document describes operational guidance for Cody Analytics infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

|   PROPERTY   |                                                      DETAILS                                                       |
|--------------|--------------------------------------------------------------------------------------------------------------------|
| Service ID   | [`cody-analytics`](https://github.com/sourcegraph/managed-services/blob/main/services/cody-analytics/service.yaml) |
| Owners       | **cody-strat**                                                                                                     |
| Service kind | Cloud Run service                                                                                                  |
| Environments | [dev](#dev)                                                                                                        |
| Docker image | `us-central1-docker.pkg.dev/sourcegraph-dev/cody-analytics/service`                                                |
| Source code  | [`github.com/sourcegraph/cody-analytics` - `.`](https://github.com/sourcegraph/cody-analytics/tree/HEAD/.)         |

## Environments

### dev

|    PROPERTY    |                                                DETAILS                                                 |
|----------------|--------------------------------------------------------------------------------------------------------|
| Project ID     | [`cody-analytics-dev-bd34`](https://console.cloud.google.com/run?project=cody-analytics-dev-bd34)      |
| Category       | **test**                                                                                               |
| Resources      |                                                                                                        |
| Alerts         | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=cody-analytics-dev-bd34) |
| Domain         | [cody-analytics.sgdev.org](https://cody-analytics.sgdev.org)                                           |
| Cloudflare WAF | ✅                                                                                                     |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.
Test environments have less stringent requirements.

|          ACCESS          |                                                                                                                                                                 ENTITLE REQUEST TEMPLATE                                                                                                                                                                  |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

#### dev Cloud Run

| PROPERTY |                                                                                                                                                               DETAILS                                                                                                                                                                |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console  | [Cloud Run service](https://console.cloud.google.com/run?project=cody-analytics-dev-bd34)                                                                                                                                                                                                                                            |
| Logs     | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=cody-analytics-dev-bd34) |
