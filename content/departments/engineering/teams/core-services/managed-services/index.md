# Managed Services

A big part of the Core Services team is developing and maintaining our managed cloud services infrastructure.
Going forward, new managed services - internal and external - should aim to be deployed using [MSP (Managed Services Platform)](./platform.md).

## [Cody Gateway](../../cody/cody-gateway/index.md)

> [!NOTE] Cody Gateway infrastructure is owned by the Core Services team, but the service is owned by #discuss-apis

## [Pings service](./pings.md)

## [Telemetry Gateway](./telemetry-gateway.md)

## Sourcergaph.com Google OIDC

The GCP project that manages our [Google OIDC authentication integration](https://console.cloud.google.com/apis/credentials/oauthclient/394401733494-3ekkk0qr3qvg7b3l1imqcgsh3ej710eq.apps.googleusercontent.com?project=sourcegraph-com-ggl-oidc) ("Sign in with Google") for Sourcergraph.com. We put the integration in a standalone project for a dedicated public-facing [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent?project=sourcegraph-com-ggl-oidc).

> [!NOTE] Please use [Entitle](https://app.entitle.io/request?targetType=resource&duration=10800&justification=Add%20your%20justifications%20here&integrationId=134476cb-0bd6-4c6d-a89f-e1550988bdd7&resourceId=9434ed31-8a2a-425d-a9e7-899b257f3ddf&roleId=5ba5e5cf-53d2-496b-8d25-52b8fc92e637&grantMethodId=5ba5e5cf-53d2-496b-8d25-52b8fc92e637) to request access to this project.
