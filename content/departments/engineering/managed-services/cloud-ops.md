# Cloud Ops Dashboard infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-05-01 12:30:43.648378 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/d0e016b97b93281abe4e18a9933ef0195d17296c
-->

This document describes operational guidance for Cloud Ops Dashboard infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | `cloud-ops` ([specification](https://github.com/sourcegraph/managed-services/blob/main/services/cloud-ops/service.yaml))   |
| Owners       | **cloud**                                                                                                                  |
| Service kind | Cloud Run service                                                                                                          |
| Environments | [prod](#prod), [dev](#dev)                                                                                                 |
| Docker image | `us-central1-docker.pkg.dev/control-plane-5e9ee072/docker/apiserver`                                                       |
| Source code  | [`github.com/sourcegraph/controller` - `cmd/apiserver`](https://github.com/sourcegraph/controller/tree/HEAD/cmd/apiserver) |

## Environments

### prod

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Project ID          | [`cloud-ops-prod-dd32`](https://console.cloud.google.com/run?project=cloud-ops-prod-dd32)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **internal**                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Deployment type     | `subscription`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Resources           | [prod Redis](#prod-redis)                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Slack notifications | [#alerts-cloud-ops-prod](https://sourcegraph.slack.com/archives/alerts-cloud-ops-prod)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=cloud-ops-prod-dd32), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=cloud-ops-prod-dd32) |
| Errors              | [Sentry `cloud-ops-prod`](https://sourcegraph.sentry.io/projects/cloud-ops-prod/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [cloud-ops.sgdev.org](https://cloud-ops.sgdev.org)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiNzg0M2MxYWYtYzU2MS00ZDMyLWE3ZTAtYjZkNjY0NDM4MzAzIiwidGhyb3VnaCI6Ijc4NDNjMWFmLWM1NjEtNGQzMi1hN2UwLWI2ZDY2NDQzODMwMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZTEyYTJkZDktYzY1ZC00YzM0LTlmNDgtMzYzNTNkZmY0MDkyIiwidGhyb3VnaCI6ImUxMmEyZGQ5LWM2NWQtNGMzNC05ZjQ4LTM2MzUzZGZmNDA5MiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Cloud Ops Dashboard prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=cloud-ops-prod-dd32)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=cloud-ops-prod-dd32) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=cloud-ops-prod-dd32)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `cloud-ops-prod`](https://sourcegraph.sentry.io/projects/cloud-ops-prod/)                                                                                                                                                                                                                                                |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs cloud-ops prod
```

#### prod Redis

| PROPERTY | DETAILS                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------------------- |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=cloud-ops-prod-dd32) |

#### prod Architecture Diagram

![Architecture Diagram](./cloud-ops-prod.svg)

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/cloud-ops/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/cloud-ops/service.yaml), and `sg msp generate cloud-ops prod` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-cloud-ops-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-cloud-ops-prod), or you can use:

```bash
sg msp tfc view cloud-ops prod
```

### dev

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`cloud-ops-dev-caff`](https://console.cloud.google.com/run?project=cloud-ops-dev-caff)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **internal**                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Deployment type     | `manual`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Resources           | [dev Redis](#dev-redis)                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Slack notifications | [#alerts-cloud-ops-dev](https://sourcegraph.slack.com/archives/alerts-cloud-ops-dev)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=cloud-ops-dev-caff), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=cloud-ops-dev-caff) |
| Errors              | [Sentry `cloud-ops-dev`](https://sourcegraph.sentry.io/projects/cloud-ops-dev/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [cloud-ops-dev.sgdev.org](https://cloud-ops-dev.sgdev.org)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiNzg0M2MxYWYtYzU2MS00ZDMyLWE3ZTAtYjZkNjY0NDM4MzAzIiwidGhyb3VnaCI6Ijc4NDNjMWFmLWM1NjEtNGQzMi1hN2UwLWI2ZDY2NDQzODMwMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZTEyYTJkZDktYzY1ZC00YzM0LTlmNDgtMzYzNTNkZmY0MDkyIiwidGhyb3VnaCI6ImUxMmEyZGQ5LWM2NWQtNGMzNC05ZjQ4LTM2MzUzZGZmNDA5MiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [dev Terraform Cloud](#dev-terraform-cloud).

#### dev Cloud Run

The Cloud Ops Dashboard dev service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=cloud-ops-dev-caff)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=cloud-ops-dev-caff) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=cloud-ops-dev-caff)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `cloud-ops-dev`](https://sourcegraph.sentry.io/projects/cloud-ops-dev/)                                                                                                                                                                                                                                                 |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs cloud-ops dev
```

#### dev Redis

| PROPERTY | DETAILS                                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------------------------- |
| Console  | [Memorystore Redis instances](https://console.cloud.google.com/memorystore/redis/instances?project=cloud-ops-dev-caff) |

#### dev Architecture Diagram

![Architecture Diagram](./cloud-ops-dev.svg)

#### dev Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/cloud-ops/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/cloud-ops/service.yaml), and `sg msp generate cloud-ops dev` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-cloud-ops-dev` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-cloud-ops-dev), or you can use:

```bash
sg msp tfc view cloud-ops dev
```

## Alert Policies

The following alert policies are defined for each of this service's environments.

#### High Container CPU Utilization

```md
High CPU Usage - it may be neccessary to reduce load or increase CPU allocation
```

Severity: WARNING

#### High Container Memory Utilization

```md
High Memory Usage - it may be neccessary to reduce load or increase memory allocation
```

Severity: WARNING

#### Container Startup Latency

```md
Service containers are taking longer than configured timeouts to start up.
```

Severity: WARNING

#### Cloud Redis - System CPU Utilization

```md
Redis Engine CPU Utilization goes above the set threshold. The utilization is measured on a scale of 0 to 1.
```

Severity: WARNING

#### Cloud Redis - Standard Instance Failover

```md
Instance failover occured for a standard tier Redis instance.
```

Severity: WARNING

#### Cloud Redis - System Memory Utilization

```md
Redis System memory utilization is above the set threshold. The utilization is measured on a scale of 0 to 1.
```

Severity: WARNING

#### Cloud Run Pending Requests

```md
There are requests pending - we may need to increase Cloud Run instance count, request concurrency, or investigate further.
```

Severity: WARNING

#### Cloud Run Instance Precondition Failed

```md
Cloud Run instance failed to start due to a precondition failure.
This is unlikely to cause immediate downtime, and may auto-resolve if no new instances are created and/or we return to a healthy state, but you should follow up to ensure the latest Cloud Run revision is healthy.
```

Severity: WARNING

#### External Uptime Check

```md
Service is failing to repond on https://cloud-ops-dev.sgdev.org - this may be expected if the service was recently provisioned or if its external domain has changed.
```

Severity: CRITICAL
