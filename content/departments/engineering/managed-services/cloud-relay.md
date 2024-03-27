# Cloud Relay infrastructure operations

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-03-27 07:28:50.834725 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/ad2cd63ae14c7e14f463f42dc3247b681dfbb925
-->

This document describes operational guidance for Cloud Relay infrastructure.
This service is operated on the [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md).

> [!IMPORTANT]
> If this is your first time here, you must follow the [sourcegraph/managed-services 'Tooling setup' guide](https://github.com/sourcegraph/managed-services/blob/main/README.md) as well to clone the service definitions repository and set up the prerequisite tooling.

If you need assistance with MSP infrastructure, reach out to the [Core Services](../teams/core-services/index.md) team in #discuss-core-services.

## Service overview

| PROPERTY     | DETAILS                                                                                                              |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| Service ID   | [`cloud-relay`](https://github.com/sourcegraph/managed-services/blob/main/services/cloud-relay/service.yaml)         |
| Owners       | **cloud**                                                                                                            |
| Service kind | Cloud Run service                                                                                                    |
| Environments | [prod](#prod)                                                                                                        |
| Docker image | `us-central1-docker.pkg.dev/control-plane-5e9ee072/docker/cloud-relay`                                               |
| Source code  | [`https://github.com/sourcegraph/cloud-relay` - `.`](https://https://github.com/sourcegraph/cloud-relay/tree/HEAD/.) |

## Environments

### prod

| PROPERTY            | DETAILS                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| Project ID          | [`cloud-relay-prod-bd4c`](https://console.cloud.google.com/run?project=cloud-relay-prod-bd4c)        |
| Category            | **internal**                                                                                         |
| Resources           |                                                                                                      |
| Slack notifications | [#alerts-cloud-relay-prod](https://sourcegraph.slack.com/archives/alerts-cloud-relay-prod)           |
| Alerts              | [GCP monitoring](https://console.cloud.google.com/monitoring/alerting?project=cloud-relay-prod-bd4c) |
| Errors              | [Sentry `cloud-relay-prod`](https://sourcegraph.sentry.io/projects/cloud-relay-prod/)                |
| Domain              | [cloud-relay.sgdev.org](https://cloud-relay.sgdev.org)                                               |
| Cloudflare WAF      | ✅                                                                                                   |

MSP infrastructure access needs to be requested using Entitle for time-bound privileges.

| ACCESS                   | ENTITLE REQUEST TEMPLATE                                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GCP project read access  | [Read-only Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiNzg0M2MxYWYtYzU2MS00ZDMyLWE3ZTAtYjZkNjY0NDM4MzAzIiwidGhyb3VnaCI6Ijc4NDNjMWFmLWM1NjEtNGQzMi1hN2UwLWI2ZDY2NDQzODMwMyIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)    |
| GCP project write access | [Write access Entitle request for the 'Internal Services' folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkVOVEVSIEpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZTEyYTJkZDktYzY1ZC00YzM0LTlmNDgtMzYzNTNkZmY0MDkyIiwidGhyb3VnaCI6ImUxMmEyZGQ5LWM2NWQtNGMzNC05ZjQ4LTM2MzUzZGZmNDA5MiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D) |

For Terraform Cloud access, see [prod Terraform Cloud](#prod-terraform-cloud).

#### prod Cloud Run

The Cloud Relay prod service implementation is deployed on [Google Cloud Run](https://cloud.google.com/run).

| PROPERTY       | DETAILS                                                                                                                                                                                                                                                                                                                            |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Console        | [Cloud Run service](https://console.cloud.google.com/run?project=cloud-relay-prod-bd4c)                                                                                                                                                                                                                                            |
| Service logs   | [GCP logging](https://console.cloud.google.com/logs/query;query=resource.type%20%3D%20%22cloud_run_revision%22%20-logName%3D~%22logs%2Frun.googleapis.com%252Frequests%22;summaryFields=jsonPayload%252FInstrumentationScope,jsonPayload%252FBody,jsonPayload%252FAttributes%252Ferror:false:32:end?project=cloud-relay-prod-bd4c) |
| Service traces | [Cloud Trace](https://console.cloud.google.com/traces/list?project=cloud-relay-prod-bd4c)                                                                                                                                                                                                                                          |
| Service errors | [Sentry `cloud-relay-prod`](https://sourcegraph.sentry.io/projects/cloud-relay-prod/)                                                                                                                                                                                                                                              |

You can also use `sg msp` to quickly open a link to your service logs:

```bash
sg msp logs cloud-relay prod
```

#### prod Terraform Cloud

This service's configuration is defined in [`sourcegraph/managed-services/services/cloud-relay/service.yaml`](https://github.com/sourcegraph/managed-services/blob/main/services/cloud-relay/service.yaml), and `sg msp generate cloud-relay prod` generates the required infrastructure configuration for this environment in Terraform.
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

The Terraform Cloud workspaces for this service environment are [grouped under the `msp-cloud-relay-prod` tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp-cloud-relay-prod), or you can use:

```bash
sg msp tfc view cloud-relay prod
```
