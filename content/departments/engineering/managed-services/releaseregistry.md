# Release Registry infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-03-25 08:14:01.833463 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/e6c6ad2da61a21e1719b2a38cd5913228ae91df4
-->

This document describes operational guidance for Release Registry infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

|   PROPERTY   |                                                       DETAILS                                                        |
|--------------|----------------------------------------------------------------------------------------------------------------------|
| Service ID   | [`releaseregistry`](https://github.com/sourcegraph/managed-services/blob/main/services/releaseregistry/service.yaml) |
| Owners       | **dev-experience**                                                                                                   |
| Service kind | Cloud Run service                                                                                                    |
| Environments | [prod](#prod), [dev](#dev)                                                                                           |
| Docker image | `us.gcr.io/sourcegraph-dev/releaseregistry`                                                                          |
| Source code  | [`github.com/sourcegraph/releaseregistry` - `.`](https://github.com/sourcegraph/releaseregistry/tree/HEAD/.)         |

## Environments

### prod

|    PROPERTY    |                                                 DETAILS                                                  |
|----------------|----------------------------------------------------------------------------------------------------------|
| Project ID     | [`releaseregistry-prod-5421`](https://console.cloud.google.com/run?project=releaseregistry-prod-5421)    |
| Category       | **test**                                                                                                 |
| Resources      | [prod PostgreSQL instance](#prod-postgresql-instance)                                                    |
| Alerts         | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=releaseregistry-prod-5421) |
| Sentry         | [`releaseregistry-prod`](https://sourcegraph.sentry.io/projects/releaseregistry-prod/)                   |
| Domain         | [releaseregistry.sourcegraph.com](https://releaseregistry.sourcegraph.com)                               |
| Cloudflare WAF | ✅                                                                                                       |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

|          ACCESS          |                                                                                                                                                                 ENTITLE REQUEST TEMPLATE                                                                                                                                                                  |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Release Registry prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

|   PROPERTY   |                                                                                                                                                                DETAILS                                                                                                                                                                 |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console      | [Cloud Run service](https://console.cloud.google.com/run?project=releaseregistry-prod-5421)                                                                                                                                                                                                                                            |
| Service logs | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=releaseregistry-prod-5421) |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs releaseregistry prod
```

#### prod PostgreSQL instance

| PROPERTY  |                                                 DETAILS                                                 |
|-----------|---------------------------------------------------------------------------------------------------------|
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=releaseregistry-prod-5421) |
| Databases | `releaseregistry`                                                                                       |

> [!NOTE]
> The ['write access' Entitle permissions grant]([Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)) is required for BOTH read-only and write access to the database.

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect releaseregistry prod

# For write access - use with caution!
sg msp pg connect -write-access releaseregistry prod
```

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/releaseregistry/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/releaseregistry/service.yaml), and `sg msp generate releaseregistry prod` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-releaseregistry-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-releaseregistry-prod), or you can use:

```bash
sg msp tfc view releaseregistry prod
```

### dev

|    PROPERTY    |                                                 DETAILS                                                 |
|----------------|---------------------------------------------------------------------------------------------------------|
| Project ID     | [`releaseregistry-dev-6bac`](https://console.cloud.google.com/run?project=releaseregistry-dev-6bac)     |
| Category       | **test**                                                                                                |
| Resources      | [dev PostgreSQL instance](#dev-postgresql-instance)                                                     |
| Alerts         | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=releaseregistry-dev-6bac) |
| Sentry         | [`releaseregistry-dev`](https://sourcegraph.sentry.io/projects/releaseregistry-dev/)                    |
| Domain         | [releaseregistry.sgdev.org](https://releaseregistry.sgdev.org)                                          |
| Cloudflare WAF | ✅                                                                                                      |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges. Test environments may have less stringent requirements.

|          ACCESS          |                                                                                                                                                                 ENTITLE REQUEST TEMPLATE                                                                                                                                                                  |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCP project read access  | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZGY3NWJkNWMtYmUxOC00MjhmLWEzNjYtYzlhYTU1MGIwODIzIiwidGhyb3VnaCI6ImRmNzViZDVjLWJlMTgtNDI4Zi1hMzY2LWM5YWE1NTBiMDgyMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |
| GCP project write access | [Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [dev Terraform Cloud](#dev-terraform-cloud).

#### dev Cloud Run

The Release Registry dev service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

|   PROPERTY   |                                                                                                                                                                DETAILS                                                                                                                                                                |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Console      | [Cloud Run service](https://console.cloud.google.com/run?project=releaseregistry-dev-6bac)                                                                                                                                                                                                                                            |
| Service logs | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=releaseregistry-dev-6bac) |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs releaseregistry dev
```

#### dev PostgreSQL instance

| PROPERTY  |                                                DETAILS                                                 |
|-----------|--------------------------------------------------------------------------------------------------------|
| Console   | [Cloud SQL instances](https://console.cloud.google.com/sql/instances?project=releaseregistry-dev-6bac) |
| Databases | `releaseregistry`                                                                                      |

> [!NOTE]
> The ['write access' Entitle permissions grant]([Entitle request for the 'Engineering Projects' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjIxNjAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiYzJkMTUwOGEtMGQ0ZS00MjA1LWFiZWUtOGY1ODg1ZGY3ZDE4IiwidGhyb3VnaCI6ImMyZDE1MDhhLTBkNGUtNDIwNS1hYmVlLThmNTg4NWRmN2QxOCIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)) is required for BOTH read-only and write access to the database.

To connect to the PostgreSQL instance in this environment, use `sg msp` in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository:

```bash
# For read-only access
sg msp pg connect releaseregistry dev

# For write access - use with caution!
sg msp pg connect -write-access releaseregistry dev
```

#### dev Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/releaseregistry/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/releaseregistry/service.yaml), and `sg msp generate releaseregistry dev` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-releaseregistry-dev` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-releaseregistry-dev), or you can use:

```bash
sg msp tfc view releaseregistry dev
```
