# Sourcegraph Accounts Managment System (SAMS)

[Sourcegraph Accounts Managment System (SAMS)](https://docs.google.com/document/d/16F6uvfM9EknpcuAQQ8kIPOZ9gHo0Lx4lgprw_5sWJEs/edit) is the centralized accounts system for all of the Sourcegraph-operated systems, it provides:

- Single Sign-On (SSO) experience for users of those systems, and cross-system referenceable user ID.
- Out-of-the-box machine-to-machine authentication and authorization capabilities.

It is compliant with [OAuth 2](https://oauth.net/2/) and [OIDC](https://openid.net/) protocols but only exposes a subset of the full capabilities for security reasons. In particular, only the following flows are allowed:

- [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)
- [Refresh Token Flow](https://cloudentity.com/developers/basics/oauth-grant-types/refresh-token-flow/)
- [Client Credentials Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow)

The [OpenID Discovery](https://accounts.sourcegraph.com/.well-known/openid-configuration) endpoint lays out all the protocol details that a Service Provider (aka. Relay Party) needs to know to integrate with SAMS.

## Security measures

Here is a list of security measures that are notable to systems integrating with SAMS:

1. Access tokens all have expiry with **1 hour**, refresh tokens are always issued together with access tokens.
1. Refresh tokens all have expiry with **30 days**, and each refresh token can only be used **at most once**. A new refresh token is always issued upon refreshing the access token.

## Service images

Images are published to a private image repository, [`us-central1-docker.pkg.dev/sourcegraph-dev/sams/accounts-server`](https://console.cloud.google.com/artifacts/docker/sourcegraph-dev/us-central1/sams/accounts-server?project=sourcegraph-dev), on every commit in `main` using the `insiders` tag. To pull down the published images locally, you need to [request access via Entitle](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IlB1bGwgZG93biBkZXYgaW1hZ2VzIiwicm9sZUlkcyI6W3siaWQiOiJhM2ZmNTQ1ZC0zZGVmLTQxY2ItYjJiNy1lMTM2MDM5Y2YwZGYiLCJ0aHJvdWdoIjoiYTNmZjU0NWQtM2RlZi00MWNiLWIyYjctZTEzNjAzOWNmMGRmIiwidHlwZSI6InJvbGUifV19).

Publishing resources are [provisioned in `sourcegraph/infrastructure`](https://github.com/sourcegraph/infrastructure/tree/main/managed-services/sams-publishing-pipeline).

## Operations

> [!NOTE]
> To get access to most resources, you’ll need to [request infrastructure access](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjQzMjAwIiwianVzdGlmaWNhdGlvbiI6IlRPRE8iLCJyb2xlSWRzIjpbeyJpZCI6IjBiZGZlOTlmLWZlMjYtNDdlMC04NTk2LWYzODUyNTVhOGQ0MSIsInRocm91Z2giOiIwYmRmZTk5Zi1mZTI2LTQ3ZTAtODU5Ni1mMzg1MjU1YThkNDEiLCJ0eXBlIjoicm9sZSJ9XX0%3D).

Here is a list of useful quick links:

- Production instance (https://accounts.sourcegraph.com)
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?project=prj-qWcQcoN16iA6rMfe)
  - [Cloud Run (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/sams/metrics?project=sams-prod-ywuz)
  - [Cloud SQL (system insights)](https://console.cloud.google.com/sql/instances/postgresql-e03b/system-insights?project=sams-prod-ywuz)
  - [Memorystore (monitoring)](https://console.cloud.google.com/memorystore/redis/locations/us-central1/instances/redis/details/monitoring?project=sams-prod-ywuz)
  - [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=sams-prod-ywuz)
  - [GCP errors](https://console.cloud.google.com/errors;service=;version=?project=sams-prod-ywuz)
- Testing instance (https://accounts.sgdev.org)
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?project=prj-XWBtUm77JJRXddoZ)
  - [Cloud Run (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/sams/metrics?project=sams-dev-bfec)
  - [Cloud SQL (system insights)](https://console.cloud.google.com/sql/instances/postgresql-e03b/system-insights?project=sams-dev-bfec)
  - [Memorystore (monitoring)](https://console.cloud.google.com/memorystore/redis/locations/us-central1/instances/redis/details/monitoring?project=sams-dev-bfec)
  - [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=sams-dev-bfec)
  - [GCP errors](https://console.cloud.google.com/errors;service=;version=?project=sams-dev-bfec)

For standard infrastructure operations, see [Sourcegraph Accounts infrastructure operations](../../../managed-services/sams.md).

For common service operations, see [Sourcegraph Accounts operators cheat sheet](https://docs.google.com/document/d/1A0otZhTEmwShhTs2mVUeY_0j-2RvstyXuOsUqapdpEk/edit#heading=h.bkpmj9rym7pw).

### Infrastructure access

The following Entitle requests are needed to get access to SAMS service infrastructure:

- [GCP Project - MSP Service Editor](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IlRPRE8iLCJyb2xlSWRzIjpbeyJpZCI6IjBiZGZlOTlmLWZlMjYtNDdlMC04NTk2LWYzODUyNTVhOGQ0MSIsInRocm91Z2giOiIwYmRmZTk5Zi1mZTI2LTQ3ZTAtODU5Ni1mMzg1MjU1YThkNDEiLCJ0eXBlIjoicm9sZSJ9XX0%3D)

### Deployments

The SAMS service infrastructure is defined in [`sourcegraph/managed-services/services/sams`](https://github.com/sourcegraph/managed-services/tree/main/services/sams) utilizing [Managed Services Platform](../managed-services/platform.md).

#### Update deployment secrets

- For production instance (https://accounts.sourcegraph.com), all secrets are stored in an isolated [GCP project `sams-prod-ywuz-secrets`](https://console.cloud.google.com/home/dashboard?project=sams-prod-ywuz-secrets).
  1. Make an [Entitle request](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkFkZCBzZWNyZXRzIiwicm9sZUlkcyI6W3siaWQiOiJjMDAwYTk5Ny0xZDJkLTRkNTktOGZhZi00MjU0MzRhYWE4YTAiLCJ0aHJvdWdoIjoiYzAwMGE5OTctMWQyZC00ZDU5LThmYWYtNDI1NDM0YWFhOGEwIiwidHlwZSI6InJvbGUifV19) to grant access to the project.
  1. Add/update the secrets in the [GSM](https://console.cloud.google.com/security/secret-manager?project=sams-prod-ywuz-secrets).
  1. Make a pull request to add/update the secrets references under the `id: prod > secretEnv` section in the [`service.yaml` file](https://github.com/sourcegraph/managed-services/blob/main/services/sams/service.yaml).
  1. Once the pull request is merged, roll out a new deployment to pick up the changes to the secrets.
- For testing instance (https://accounts.sgdev.org), all secrets are stored in a shared [GCP project `sourcegraph-dev`](https://console.cloud.google.com/home/dashboard?project=sourcegraph-dev).
  1. Make an [Entitle request](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IlVwZGF0ZSBTQU1TIHNlY3JldHMiLCJyb2xlSWRzIjpbeyJpZCI6IjAzOGYwNjQ4LTllNWYtNDAyMC1hOGNiLTE0NWJmNzQzZjQ2YiIsInRocm91Z2giOiIwMzhmMDY0OC05ZTVmLTQwMjAtYThjYi0xNDViZjc0M2Y0NmIiLCJ0eXBlIjoicm9sZSJ9XX0%3D) to grant access to the project.
  1. Add/update the secrets in the [GSM](https://console.cloud.google.com/security/secret-manager?project=sourcegraph-dev). Because this is shared project, make sure to prefix all secrets with `SAMS_` to avoid naming collisions.
  1. Make a pull request to add/update the secrets references under the `id: dev > secretEnv` section in the [`service.yaml` file](https://github.com/sourcegraph/managed-services/blob/main/services/sams/service.yaml).
  1. Once the pull request is merged, roll out a new deployment to pick up the changes to the secrets.

#### Modify deployment manifest

> [!WARNING]
> Due to the early-stage shape of [Managed Services Platform](../managed-services/platform.md), we have yet to roll out standardized playbook. Please reach out to #team-core-services for modifying the deployment manifest. Instructions in this section are generally assumed with an upfront setup.

To modify the deployment manifest:

1. Update `service.yaml` file
1. In the repository root, run `sg msp generate sams prod`
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
+      tag: insiders@sha256:3a7e1c0dd4e0d7e0c6d3e4d7b3a1
```

#### Re-deploy the same manifest

Go to the ["Deploy revision" page](https://console.cloud.google.com/run/deploy/us-central1/sams?project=sams-prod-ywuz) of the Cloud Run service and click **DEPLOY** (bottom of the page) without changing any configuration. This will also happen whenever a Terraform change happens to the "cloudrun" stack.

### Observability

> [!NOTE]
> To get access to most resources, you’ll need to [request infrastructure access](#infrastructure-access).

#### Alerting

Alerts are sent to Sentry and then forwarded to Slack:

- #alerts-sams-dev for accounts.sgdev.org
- #alerts-sams-prod for accounts.sourcegraph.com

#### Metrics

The deployment's [Cloud Run metrics overview page](https://console.cloud.google.com/run/detail/us-central1/sams/metrics?project=sams-prod-ywuz) provides basic observability into the service provided out-of-the-box by Cloud Run, such as instance count and resource utilization.

## Development

The source code and CI are located in the [sourcegraph/sams](https://github.com/sourcegraph/sams) GitHub repository.
