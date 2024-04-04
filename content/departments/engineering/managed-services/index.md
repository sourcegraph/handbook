# Managed Services infrastructure

<!--
Generated documentation; DO NOT EDIT. Regenerate using this command: 'sg msp operations generate-handbook-pages'

Last updated: 2024-04-04 18:45:01.553025 +0000 UTC
Generated from: https://github.com/sourcegraph/managed-services/tree/6d96fe3d4aed2366f4accae010febe949ecaefdf
-->

These pages contain generated operational guidance for the infrastructure of the 13 [Managed Services Platform (MSP)](../teams/core-services/managed-services/platform.md) services (across 19 environments) currently in operation at Sourcegraph.
This includes information about each service, configured environments, Entitle requests, common tasks, monitoring, custom documentation provided by service operators, and so on.
In addition to service-specific guidance, [General guidance](#general-guidance) is also available.

MSP is owned by [Core Services](../teams/core-services/index.md), but individual teams are responsible for the services they operate on the platform.

Services are defined in [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services), though service source code may live elsewhere.

> [!NOTE]
> This page may be out of date if a service or environment was recently added or updated - reach out to #discuss-core-services for help updating these pages, or use `sg msp operations $SERVICE_ID` to view the generated documentation in your terminal.

## Customer Support

Managed Services Platform services owned by `Customer Support`:

- [Support Integration](./support-integration.md)

## cloud

Managed Services Platform services owned by `cloud`:

- [Cloud Ops Dashboard](./cloud-ops.md)
- [Cloud Relay](./cloud-relay.md)

## cody-plg

Managed Services Platform services owned by `cody-plg`:

- [Self-Serve Cody](./sams.md)

## cody-services

Managed Services Platform services owned by `cody-services`:

- [Cody Gatekeeper](./gatekeeper.md)

## cody-strat

Managed Services Platform services owned by `cody-strat`:

- [Cody Analytics](./cody-analytics.md)

## core-services

Managed Services Platform services owned by `core-services`:

- [MSP Testbed](./msp-testbed.md)
- [Pings Service](./pings.md)
- [Sourcegraph Accounts](./sourcegraph-accounts.md)
- [Telemetry Gateway](./telemetry-gateway.md)

## dev-experience

Managed Services Platform services owned by `dev-experience`:

- [Build Tracker](./build-tracker.md)
- [Release Registry](./releaseregistry.md)

## security

Managed Services Platform services owned by `security`:

- [Entitler](./entitler.md)

## General guidance

### Infrastructure access

For MSP service environments other than `category: test`, access needs to be requested through Entitle.
Test environments are placed in the "Engineering Projects" GCP folder, which should have access granted to engineers by default.

Entitle access to a production MSP project is generally provisioned through the `mspServiceReader` and `mspServiceEditor` custom GCP roles, which provide read-only and editing access respectively.
Convenience links for requesting these roles are available in the per-service operation pages above, based on each environment.

You can also choose to request access to an individual project in Entitle by following these steps:

- Go to [app.entitle.io/request](https://app.entitle.io/request) and select **Specific Permission**
- Fill out the following:
  - Integration: **GCP Production Projects**
  - Resource types: **Project**
  - Resource: name of MSP project you are interested in
  - Role: `mspServiceReader` (or `mspServiceEditor` if you need additional privileges - use with care!)
  - Duration: choose your own adventure!

The custom roles used for MSP infrastructure access are [configured in `sourcegraph/infrastructure`](https://github.com/sourcegraph/infrastructure/blob/main/gcp/custom-roles/msp.tf).

### Terraform Cloud access

Terraform Cloud (TFC) workspaces for MSP [can be found using the `msp` workspace tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp).

To gain access to MSP project TFC workspaces, [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) and _then_ [request membership to the `Managed Services Platform Operators` TFC team via Entitle](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiRU5URVIgSlVTVElGSUNBVElPTiBIRVJFIiwicm9sZUlkcyI6W3siaWQiOiJiMzg3MzJjYy04OTUyLTQ2Y2QtYmIxZS1lZjI2ODUwNzIyNmIiLCJ0aHJvdWdoIjoiYjM4NzMyY2MtODk1Mi00NmNkLWJiMWUtZWYyNjg1MDcyMjZiIiwidHlwZSI6InJvbGUifV19).
This TFC team has access to all MSP workspaces, and is [configured here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/terraform-cloud/terraform.tfvars?L44:1-48:4).

Note that you **must [log in to Terraform Cloud](https://app.terraform.io/app/sourcegraph) before making your Entitle request**.
If you make your Entitle request, then log in, you will be removed from any team memberships granted through Entitle by Terraform Cloud's SSO implementation.

For more details, also see [creating and configuring services](https://github.com/sourcegraph/managed-services#operations).
