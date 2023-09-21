# Pings service

The Pings service is the service that collects [ping requests](https://docs.sourcegraph.com/admin/pings) from all Sourcegraph instances, and is available at `pings.sourcegraph.com`.

- As of 5.2.0, ping requests are sent to `https://pings.sourcegraph.com/updates` directly.
- For Sourcegraph instances that prior to 5.2.0, all ping requests sent to `https://sourcegraph.com/.api/updates` are being transparently forwarded to `https://pings.sourcegraph.com/updates`.

## Service images

Source code for Pings service is in [sourcegraph/sourcegraph/cmd/pings](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/pings). The image gets built the same way as any other Sourcegraph service, i.e. with ` insiders`, the standard `main`-branch and `main-dry-run` tags.

## Local development

For local development, please refer to its [README](https://github.com/sourcegraph/sourcegraph/blob/main/cmd/pings/README.md).

## Operations

> [!NOTE]
> To get access to most resources, you’ll need to [request infrastructure access](#infrastructure-access).

Here is a list of useful quick links:

- [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?project=prj-7gzvzKCGcKupiA4s)
- [Cloud Run service (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/pings/metrics?project=pings-prod-2f4f73edf1db)
- [Service logs](https://cloudlogging.app.goo.gl/JMmBSAbEceh6onpj8)
- [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=pings-prod-2f4f73edf1db)
- [GCP errors](https://console.cloud.google.com/errors?project=pings-prod-2f4f73edf1db)
- [GCP Cloud Profiler](https://console.cloud.google.com/profiler/pings?project=pings-prod-2f4f73edf1db)

### Infrastructure access

The following Entitle requests are needed to get access to Pings service infrastructure:

- [GCP project - Editor](https://app.entitle.io/request?targetType=resource&duration=10800&justification=Justification%20here&integrationId=134476cb-0bd6-4c6d-a89f-e1550988bdd7&resourceId=d94da8c3-76eb-451a-9cbb-973ac3bc44b1&roleId=2a1e9779-05d6-4f3f-976b-046ab0c91259&grantMethodId=2a1e9779-05d6-4f3f-976b-046ab0c91259)
- [GCP project - Cloud Run Admin](https://app.entitle.io/request?targetType=resource&duration=10800&justification=Justification%20here&integrationId=134476cb-0bd6-4c6d-a89f-e1550988bdd7&resourceId=d94da8c3-76eb-451a-9cbb-973ac3bc44b1&roleId=2d83db53-9330-4778-88b4-a3f1193fc3d1&grantMethodId=2d83db53-9330-4778-88b4-a3f1193fc3d1)

### Deployment

The Pings service infrastructure is defined in [`sourcegraph/managed-services/services/pings`](https://github.com/sourcegraph/managed-services/tree/main/services/pings) utilizing [Managed Services Platform](./platform.md).

#### Modify deployment manifest

> [!WARNING]
> Due to the early-stage shape of Managed Services Platforms, we have yet to roll out standardized playbook. Please reach out to #team-core-services for modifying the deployment manifest. Instructions in this section are generally assumed with an upfront setup.

To modify the deployment manifest:

1. Update `service.yaml` file
1. In the repository root, run `sg msp generate services/pings/service.yaml prod`
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

#### Re-deploy the same manifest

Go to the ["Deploy revision" page](https://console.cloud.google.com/run/deploy/us-central1/pings?project=pings-prod-2f4f73edf1db) of the Cloud Run service and click **DEPLOY** (bottom of the page) without changing any configuration. This will also happen whenever a Terraform change happens to the "cloudrun" stack.

### Observability

#### Metrics

The deployment's [Cloud Run metrics overview page](https://console.cloud.google.com/run/detail/us-central1/pings/metrics?project=pings-prod-2f4f73edf1db) provides basic observability into the service provided out-of-the-box by Cloud Run, such as instance count and resource utilization.

Pings service also pushes [GCP Custom Metrics](https://console.cloud.google.com/monitoring/dashboards/builder/eda5de3e-2bd2-41ad-afe2-7c7dfaeeebba?project=pings-prod-2f4f73edf1db) via OpenTelemetry metrics.
