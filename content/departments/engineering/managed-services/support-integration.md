# Support Integration infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-05-01 12:30:44.893284 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/d0e016b97b93281abe4e18a9933ef0195d17296c
-->

This document describes operational guidance for Support Integration infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Service ID   | `support-integration` ([specification](https://github.com/sourcegraph/managed-services/blob/main/services/support-integration/service.yaml)) |
| Owners       | **Customer Support**                                                                                                                         |
| Service kind | Cloud Run service                                                                                                                            |
| Environments | [prod](#prod)                                                                                                                                |
| Docker image | `index.docker.io/sourcegraph/support-integration`                                                                                            |
| Source code  | [`github.com/sourcegraph/support-integration` - `.`](https://github.com/sourcegraph/support-integration/tree/HEAD/.)                         |

## Environments

### prod

| PROPERTY            | DETAILS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project ID          | [`support-integration-prod-549b`](https://console.cloud.google.com/run?project=support-integration-prod-549b)                                                                                                                                                                                                                                                                                                                                                                                            |
| Category            | **internal**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Deployment type     | `manual`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Resources           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Slack notifications | [#alerts-support-integration-prod](https://sourcegraph.slack.com/archives/alerts-support-integration-prod)                                                                                                                                                                                                                                                                                                                                                                                               |
| Alert policies      | [GCP Monitoring alert policies list](https://console.cloud.google.com/monitoring/alerting/policies?project=support-integration-prod-549b), [Dashboard](https://console.cloud.google.com/monitoring/dashboards?pageState=%28%22dashboards%22%3A%28%22t%22%3A%22All%22%29%2C%22dashboardList%22%3A%28%22f%22%3A%22%255B%257B_22k_22_3A_22Type_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22Custom_5C_22_22_2C_22s_22_3Atrue_2C_22i_22_3A_22category_22%257D%255D%22%29%29&project=support-integration-prod-549b) |
| Errors              | [Sentry `support-integration-prod`](https://sourcegraph.sentry.io/projects/support-integration-prod/)                                                                                                                                                                                                                                                                                                                                                                                                    |
| Domain              | [support-integration.sgdev.org](https://support-integration.sgdev.org)                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Cloudflare WAF      | ✅                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiNzg0M2MxYWYtYzU2MS00ZDMyLWE3ZTAtYjZkNjY0NDM4MzAzIiwidGhyb3VnaCI6Ijc4NDNjMWFmLWM1NjEtNGQzMi1hN2UwLWI2ZDY2NDQzODMwMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZTEyYTJkZDktYzY1ZC00YzM0LTlmNDgtMzYzNTNkZmY0MDkyIiwidGhyb3VnaCI6ImUxMmEyZGQ5LWM2NWQtNGMzNC05ZjQ4LTM2MzUzZGZmNDA5MiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Support Integration prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=support-integration-prod-549b)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=support-integration-prod-549b) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=support-integration-prod-549b)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `support-integration-prod`](https://sourcegraph.sentry.io/projects/support-integration-prod/)                                                                                                                                                                                                                                      |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs support-integration prod
```

#### prod Architecture Diagram

![Architecture Diagram](./support-integration-prod.svg)

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/support-integration/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/support-integration/service.yaml), and `sg msp generate support-integration prod` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-support-integration-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-support-integration-prod), or you can use:

```bash
sg msp tfc view support-integration prod
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
Service is failing to repond on https://support-integration.sgdev.org - this may be expected if the service was recently provisioned or if its external domain has changed.
```

Severity: CRITICAL
