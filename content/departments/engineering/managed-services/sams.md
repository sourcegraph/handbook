# Sourcegraph Accounts infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-01-11 18:09:55.862162 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/f37cdc8aea65e1197e2d814447ad65c30fccd75b
-->

This document describes operational guidance for Sourcegraph Accounts infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

|   PROPERTY   |                                                                              DETAILS                                                                               |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Service ID   | [`sams`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/service.yaml)                                                                     |
| Owners       | **core-services**                                                                                                                                                  |
| Service kind | Cloud Run service                                                                                                                                                  |
| Environments | [dev](#dev)                                                                                                                                                        |
| Docker image | `us-central1-docker.pkg.dev/sourcegraph-dev/sams/accounts-server`                                                                                                  |
| Source code  | [`github.com/sourcegraph/accounts.sourcegraph.com` - `cmd/accounts-server`](https://github.com/sourcegraph/accounts.sourcegraph.com/tree/HEAD/cmd/accounts-server) |

## Environments

### dev

|    PROPERTY    |                                                           DETAILS                                                           |
|----------------|-----------------------------------------------------------------------------------------------------------------------------|
| Project ID     | [`sams-dev-bfec`](https://console.cloud.google.com/run?project=sams-dev-bfec)                                               |
| Category       | **test**                                                                                                                    |
| Resources      | [dev Redis](#dev-redis), [dev PostgreSQL instance](#dev-postgresql-instance), [dev BigQuery dataset](#dev-bigquery-dataset) |
| Alerts         | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=sams-dev-bfec)                                |
| Domain         | [accounts.sgdev.org](https://accounts.sgdev.org)                                                                            |
| Cloudflare WAF | ✅                                                                                                                          |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.
Test environments have less stringent requirements.

|          ACCESS          |                                                                                                                                                                 ENTITLE REQUEST TEMPLATE                                                                                                                                                                  |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

#### dev Cloud Run

| PROPERTY |                                                                                                                                                          DETAILS                                                                                                                                                           |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console  | [Cloud Run service](https://console.cloud.google.com/run?project=sams-dev-bfec)                                                                                                                                                                                                                                            |
| Logs     | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=sams-dev-bfec) |

#### dev Redis

| PROPERTY |                                                      DETAILS                                                      |
|----------|-------------------------------------------------------------------------------------------------------------------|
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=sams-dev-bfec) |

#### dev PostgreSQL instance

| PROPERTY  |                                           DETAILS                                           |
|-----------|---------------------------------------------------------------------------------------------|
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=sams-dev-bfec) |
| Databases | `accounts`, `cody_management`                                                               |

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect sams dev

# For write access - use with caution!
sg msp pg connect -write-access sams dev
```

#### dev BigQuery dataset

|    PROPERTY     |                                                                                                                DETAILS                                                                                                                 |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Dataset Project | `sams-dev-bfec`                                                                                                                                                                                                                        |
| Dataset ID      | `sams`                                                                                                                                                                                                                                 |
| Tables          | [`user_emails`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/user_emails.bigquerytable.json), [`events`](https://github.com/sourcegraph/managed-services/blob/main/services/sams/events.bigquerytable.json) |
