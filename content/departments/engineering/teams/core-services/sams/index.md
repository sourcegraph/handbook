# Sourcegraph Accounts Management System (SAMS)

[Sourcegraph Accounts Management System (SAMS)](https://docs.google.com/document/d/16F6uvfM9EknpcuAQQ8kIPOZ9gHo0Lx4lgprw_5sWJEs/edit) is the centralized accounts system for all of the Sourcegraph-operated systems, it provides:

- Single Sign-On (SSO) experience for users of those systems, and cross-system referenceable user ID.
- Out-of-the-box machine-to-machine authentication and authorization capabilities.

It is compliant with [OAuth 2](https://oauth.net/2/) and [OIDC](https://openid.net/) protocols but only exposes a subset of the full capabilities for security reasons. In particular, only the following flows are allowed:

- [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)
- [Refresh Token Flow](https://cloudentity.com/developers/basics/oauth-grant-types/refresh-token-flow/)
- [Client Credentials Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow)

The [OpenID Discovery](https://accounts.sourcegraph.com/.well-known/openid-configuration) endpoint lays out all the protocol details that a Service Provider (aka. Relay Party) needs to know to integrate with SAMS.

## System designs

- [Token scope specification](./token_scope_specification.md)

## Security measures

Here is a list of security measures that are notable to systems integrating with SAMS:

1. Access tokens all have expiry with **1 hour**, refresh tokens are always issued together with access tokens.
1. Refresh tokens all have expiry with **30 days**, and each refresh token can only be used **at most once**. A new refresh token is always issued upon refreshing the access token.

## Internal documents

- [Sourcegraph Accounts Launch FAQs](https://docs.google.com/document/d/16rRFVDX_GQ00ZanOD-xD0gK9fODURev8bLsv6tqjwSY/edit)

## Service images

Images are published to a private image repository, [`us-central1-docker.pkg.dev/sourcegraph-dev/sourcegraph-accounts/accounts-server`](https://console.cloud.google.com/artifacts/docker/sourcegraph-dev/us-central1/sourcegraph-accounts/accounts-server?project=sourcegraph-dev), on every commit in `main` using the `insiders` tag. To pull down the published images locally, you need to [request access via Entitle](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IlB1bGwgZG93biBkZXYgaW1hZ2VzIiwicm9sZUlkcyI6W3siaWQiOiJhM2ZmNTQ1ZC0zZGVmLTQxY2ItYjJiNy1lMTM2MDM5Y2YwZGYiLCJ0aHJvdWdoIjoiYTNmZjU0NWQtM2RlZi00MWNiLWIyYjctZTEzNjAzOWNmMGRmIiwidHlwZSI6InJvbGUifV19).

Publishing resources are [provisioned in `sourcegraph/infrastructure`](https://github.com/sourcegraph/infrastructure/tree/main/managed-services/sourcegraph-accounts-publishing-pipeline).

## Operations

> [!NOTE]
> To get access to most resources, you’ll need to [request infrastructure access](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjQzMjAwIiwianVzdGlmaWNhdGlvbiI6IlRPRE8iLCJyb2xlSWRzIjpbeyJpZCI6ImRlMjdlNzIzLTVmMzMtNDg3My1hNzA1LWM3MzBkOGQxMjFiYyIsInRocm91Z2giOiJkZTI3ZTcyMy01ZjMzLTQ4NzMtYTcwNS1jNzMwZDhkMTIxYmMiLCJ0eXBlIjoicm9sZSJ9XX0%3D).

For standard infrastructure operations, see [Sourcegraph Accounts infrastructure operations](../../../managed-services/sourcegraph-accounts.md).

### Deployments

The SAMS service infrastructure is defined in [`sourcegraph/managed-services/services/sourcegraph-accounts`](https://github.com/sourcegraph/managed-services/tree/main/services/sourcegraph-accounts) utilizing [Managed Services Platform](../managed-services/platform.md).

#### Update deployment secrets

- For production instance (https://accounts.sourcegraph.com), all secrets are stored in the same GCP project `sourcegraph-accounts-prod-csvc`.
  1. Make an [Entitle request](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjQzMjAwIiwianVzdGlmaWNhdGlvbiI6IlRPRE8iLCJyb2xlSWRzIjpbeyJpZCI6ImRlMjdlNzIzLTVmMzMtNDg3My1hNzA1LWM3MzBkOGQxMjFiYyIsInRocm91Z2giOiJkZTI3ZTcyMy01ZjMzLTQ4NzMtYTcwNS1jNzMwZDhkMTIxYmMiLCJ0eXBlIjoicm9sZSJ9XX0%3D) to grant access to the project.
  1. Add/update the secrets in the [GSM](https://console.cloud.google.com/security/secret-manager?project=sourcegraph-accounts-prod-csvc).
  1. Make a pull request to add/update the secrets references under the `id: prod > secretEnv` section in the [`service.yaml` file](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/service.yaml).
  1. Once the pull request is merged, roll out a new deployment to pick up the changes to the secrets.
- For testing instance (https://accounts.sgdev.org), all secrets are stored in a shared GCP project `sourcegraph-dev`.
  1. Make an [Entitle request](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IlVwZGF0ZSBTQU1TIHNlY3JldHMiLCJyb2xlSWRzIjpbeyJpZCI6IjAzOGYwNjQ4LTllNWYtNDAyMC1hOGNiLTE0NWJmNzQzZjQ2YiIsInRocm91Z2giOiIwMzhmMDY0OC05ZTVmLTQwMjAtYThjYi0xNDViZjc0M2Y0NmIiLCJ0eXBlIjoicm9sZSJ9XX0%3D) to grant access to the project.
  1. Add/update the secrets in the [GSM](https://console.cloud.google.com/security/secret-manager?project=sourcegraph-dev). Because this is shared project, make sure to prefix all secrets with `SAMS_` to avoid naming collisions.
  1. Make a pull request to add/update the secrets references under the `id: dev > secretEnv` section in the [`service.yaml` file](https://github.com/sourcegraph/managed-services/blob/main/services/sourcegraph-accounts/service.yaml).
  1. Once the pull request is merged, roll out a new deployment to pick up the changes to the secrets.

#### Modify deployment manifest

> [!WARNING]
> Due to the early-stage shape of [Managed Services Platform](../managed-services/platform.md), we have yet to roll out standardized playbook. Please reach out to #team-core-services for modifying the deployment manifest. Instructions in this section are generally assumed with an upfront setup.

To modify the deployment manifest:

1. Update `service.yaml` file
1. In the repository root, run `sg msp generate sourcegraph-accounts prod`
1. Stage changes and make a pull request
1. The Terraform Cloud rolls out changes

#### Re-deploy the same manifest

Go to the ["Deploy revision" page](https://console.cloud.google.com/run/deploy/us-central1/sourcegraph-accounts-prod-us-central1?project=sourcegraph-accounts-prod-csvc) of the Cloud Run service and click **DEPLOY** (bottom of the page) without changing any configuration. This will also happen whenever a Terraform change happens to the "cloudrun" stack.

### Observability

#### Alerting

Alerts are sent to Sentry and then forwarded to Slack:

- #alerts-sourcegraph-accounts-dev for accounts.sgdev.org
- #alerts-sourcegraph-accounts-prod for accounts.sourcegraph.com

#### Metrics

The deployment's [Cloud Run metrics overview page](https://console.cloud.google.com/run/detail/us-central1/sourcegraph-accounts-prod-us-central1/metrics?project=sourcegraph-accounts-prod-csvc) provides basic observability into the service provided out-of-the-box by Cloud Run, such as instance count and resource utilization.

## Development

The source code and CI are located in the [sourcegraph/sourcegraph-accounts](https://github.com/sourcegraph/sourcegraph-accounts) GitHub repository.
