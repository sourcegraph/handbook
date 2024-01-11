# MSP Testbed infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-01-11 18:09:55.859758 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/f37cdc8aea65e1197e2d814447ad65c30fccd75b
-->

This document describes operational guidance for MSP Testbed infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | [`msp-testbed`](https://github.com/sourcegraph/managed-services/blob/main/services/msp-testbed/service.yaml)                     |
| Owners       | **core-services**                                                                                                                |
| Service kind | Cloud Run service                                                                                                                |
| Environments | [test](#test)                                                                                                                    |
| Docker image | `us.gcr.io/sourcegraph-dev/msp-example`                                                                                          |
| Source code  | [`github.com/sourcegraph/sourcegraph` - `cmd/msp-example`](https://github.com/sourcegraph/sourcegraph/tree/HEAD/cmd/msp-example) |

## Environments

### test

| PROPERTY   | DETAILS                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Project ID | [`msp-testbed-test-77589aae45d0`](https://console.cloud.google.com/run?project=msp-testbed-test-77589aae45d0)                     |
| Category   | **test**                                                                                                                          |
| Resources  | [test Redis](#test-redis), [test PostgreSQL instance](#test-postgresql-instance), [test BigQuery dataset](#test-bigquery-dataset) |
| Alerts     | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=msp-testbed-test-77589aae45d0)                      |
| Domain     | [msp-testbed.sgdev.org](https://msp-testbed.sgdev.org)                                                                            |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.
Test environments have less stringent requirements.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

#### test Cloud Run

| PROPERTY | DETAILS                                                                                                                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Console  | [Cloud Run service](https://console.cloud.google.com/run?project=msp-testbed-test-77589aae45d0)                                                                                                                                                                                                                                            |
| Logs     | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=msp-testbed-test-77589aae45d0) |

#### test Redis

| PROPERTY | DETAILS                                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=msp-testbed-test-77589aae45d0) |

#### test PostgreSQL instance

| PROPERTY  | DETAILS                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=msp-testbed-test-77589aae45d0) |
| Databases | `primary`                                                                                                   |

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
