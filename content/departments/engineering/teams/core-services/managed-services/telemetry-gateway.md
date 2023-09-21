# Telemetry Gateway

The Telemetry Gateway service is the service that ingests [telemetry v2 events](https://docs.sourcegraph.com/dev/background-information/telemetry) from all Sourcegraph instances, and is available at `telemetry-gateway.sourcegraph.com`.

- As of 5.2.0, [certain flags can be configured](https://docs.sourcegraph.com/dev/background-information/telemetry#enabling-telemetry-export) to export events that have been instrumented with the new APIs to Telemetry Gateway.
- For Sourcegraph instances that prior to 5.2.0, no events are exported.
  A [custom mechanism did exist for exporting events specifically from Cloud instances](https://docs.sourcegraph.com/dev/background-information/data-usage-pipeline) based on individual service agreements with customers - the new telemetry events will supersede this mechanism.

## Service images

Source code for Telemetry Gateway service is in [sourcegraph/sourcegraph/cmd/telemetry-gateway](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/telemetry-gateway).
The image gets built the same way as any other Sourcegraph service, i.e. with `insiders`, the standard `main`-branch and `main-dry-run` tags.

## Local development

For local development, please refer to its [How to set up Telemetry Gateway locally](https://docs.sourcegraph.com/dev/how-to/telemetry_gateway).

## Operations

> [!NOTE]
> To get access to most resources, you’ll need to [request infrastructure access](#infrastructure-access).

Here is a list of useful quick links:

- Prod instance: `telemetry-gateway.sourcegraph.com` - currently only accepts real Sourcegraph licenses.
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?project=prj-9XNnACvkeM1VWteC)
  - [Cloud Run service (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/telemetry-gateway/metrics?project=telemetry-gateway-prod-acae)
  - [Service logs](https://cloudlogging.app.goo.gl/kficDmGcZdMJHPQL9)
  - [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=telemetry-gateway-prod-acae)
  - [GCP errors](https://console.cloud.google.com/errors?project=telemetry-gateway-prod-acae)
- Dev instance: `telemetry-gateway.sgdev.org` - currently only accepts `dev-private` licenses.
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?project=prj-nxL7Ti7x8xp6oZTU)
  - [Cloud Run service (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/telemetry-gateway/metrics?project=telemetry-gateway-dev-0050)
  - [Service logs](https://cloudlogging.app.goo.gl/4oVGWGz1FQKVt5vm9)
  - [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=telemetry-gateway-dev-0050)
  - [GCP errors](https://console.cloud.google.com/errors?project=telemetry-gateway-dev-0050)

### Infrastructure access

The following Entitle requests are needed to get access to Telemetry Gateway service infrastructure:

- [GCP project - Prod Editor](https://app.entitle.io/request?targetType=resource&duration=21600&justification=Justification%20here&integrationId=134476cb-0bd6-4c6d-a89f-e1550988bdd7&resourceId=271c1799-6172-4099-8fe1-b186ac05aa06&roleId=da83e573-1cae-4e83-a132-3d2c6065ecbb&grantMethodId=da83e573-1cae-4e83-a132-3d2c6065ecbb)

All engineers should have access to the dev project by default.

### Deployment

The Telemetry Gateway service infrastructure is defined in [`sourcegraph/managed-services/services/telemetry-gateway`](https://github.com/sourcegraph/managed-services/tree/main/services/telemetry-gateway) utilizing [Managed Services Platform](./platform.md).

#### Modify deployment manifest

> [!WARNING]
> Due to the early-stage shape of Managed Services Platforms, we have yet to roll out standardized playbook. Please reach out to #team-core-services for modifying the deployment manifest. Instructions in this section are generally assumed with an upfront setup.

To modify the deployment manifest:

1. Update `service.yaml` file
1. Anywhere in the repository, run `sg msp generate telemetry-gateway prod`
1. Stage changes and make a pull request
1. The Terraform Cloud rolls out changes

#### Use a different image tag

To specify a Docker image tag other than the default, update the `service.yaml`:

```diff
 - id: prod
   ...
   deploy:
     type: manual
+    manual:
+      tag: 218287_2023-05-10_5.0-5bd03cd18e71
```

### Observability

> [!NOTE] More stuff coming soon on this front

#### Metrics

The deployment's [Cloud Run metrics overview page](https://console.cloud.google.com/run/detail/us-central1/telemetry-gateway/metrics?project=telemetry-gateway-prod-acae) provides basic observability into the service provided out-of-the-box by Cloud Run, such as instance count and resource utilization.
