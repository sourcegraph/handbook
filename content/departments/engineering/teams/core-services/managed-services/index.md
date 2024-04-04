# Core Services Managed Services

A core part of [Core Services](../index.md) team responsibilities are developing and maintaining our managed cloud services infrastructure.

## Managed Services Platform

The Sourcegraph Managed Services Platform (**MSP**) is the standardized tooling and infrastructure for deploying and operating managed Sourcegraph services.
Going forward, new managed services built by Sourcegraph - internal and external - should aim to be deployed using MSP.
To learn more about, see [the Managed Services Platform page](./platform.md).

For a complete listing of managed services, see [Managed Services infrastructure](../../../managed-services/index.md).

## [Cody Gateway](../../cody/cody-gateway/index.md)

> [!NOTE] Only Cody Gateway infrastructure is owned by the Core Services team, but the service is owned by #discuss-cody-services.

Cody Gateway infrastructure is currently a hand-rolled deployment defined in [`sourcegraph/infrastructure/cody-gateway`](https://github.com/sourcegraph/infrastructure/tree/main/cody-gateway).
This infrastructure setup was a [direct precursor to Managed Services Platform](https://docs.google.com/document/d/1w4ZKg4R05mZGJwGTMBkUWfrFtg4sgwHO4hm-tc0g12w/edit).

## [Pings service](./pings.md)

> [!NOTE] Only Pings infrastructure is owned by the Core Services team, but the service is owned by #discuss-analytics.

The Pings service is the service that collects [ping requests](https://docs.sourcegraph.com/admin/pings) from all Sourcegraph instances, and is available at `pings.sourcegraph.com`.

## [Telemetry Gateway](../../../managed-services/telemetry-gateway.md)

The Telemetry Gateway service is the service that ingests [telemetry v2 events](https://sourcegraph.com/doc/dev/background-information/telemetry) from all Sourcegraph instances, as well as other managed services.

## [Sourcegraph Accounts Management System](../sams/index.md)

[Sourcegraph Accounts Management System (SAMS)](https://docs.google.com/document/d/16F6uvfM9EknpcuAQQ8kIPOZ9gHo0Lx4lgprw_5sWJEs/edit) is the centralized accounts system for all of the Sourcegraph-operated systems.

## Sourcergaph.com Google OIDC

> [!WARNING] This has been replaced by [Sourcegraph Accounts Management System](../sams/index.md), which is now the identity provider for Sourcegraph.com logins.

The GCP project that manages our [Google OIDC authentication integration](https://console.cloud.google.com/apis/credentials/oauthclient/394401733494-3ekkk0qr3qvg7b3l1imqcgsh3ej710eq.apps.googleusercontent.com?project=sourcegraph-com-ggl-oidc) ("Sign in with Google") for Sourcergraph.com. We put the integration in a standalone project for a dedicated public-facing [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent?project=sourcegraph-com-ggl-oidc).

> [!NOTE] Please use [Entitle](https://app.entitle.io/request?targetType=resource&duration=10800&justification=Add%20your%20justifications%20here&integrationId=134476cb-0bd6-4c6d-a89f-e1550988bdd7&resourceId=9434ed31-8a2a-425d-a9e7-899b257f3ddf&roleId=5ba5e5cf-53d2-496b-8d25-52b8fc92e637&grantMethodId=5ba5e5cf-53d2-496b-8d25-52b8fc92e637) to request access to this project.
