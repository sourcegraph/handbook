# Sourcegraph Managed Services Platform (MSP)

The Sourcegraph Managed Services Platform (**MSP**) is the standardized tooling and infrastructure for deploying and operating managed Sourcegraph services.
MSP takes a service specification and generates Terraform manifests and adjacent resources required to operate a service, aiming to provide a simple, Heroku-like experience to spin up infrastructure for standalone managed services.

By adopting MSP for your managed service, it will benefit from [an expanding set of features and integrations](#features), alignment with infrastructure and security best practices at Sourcegraph, and support from the [Core Services team](../index.md).

For interacting with existing MSP services, see [operating services](#operating-services).
Ready to spin up a new service? Check out our [Getting started](#getting-started) guide!

## Use cases

Any "managed service" - internal or customer-facing, for testing or for production - can be operated on Managed Services Platform!
Today, MSP operates both internal and external services from many teams across Sourcegraph - see the [Managed Services infrastructure page](../../../managed-services/index.md) for a generated listing.

For an intro on what "managed services" are and how MSP can help you, check out this Loom introduction: [Creating and Operating Managed Services at Sourcegraph (Merge 2024)](https://www.loom.com/share/be0a6de474de453b80c6a4e7beaed9c2?sid=94784206-e62d-48a6-9ea4-e342ebfcaab0), and refer to [features](#features) to see what MSP can offer.

> [!NOTE] ✨ Ready to spin up a new service? Check out our [Getting started](#getting-started) guide!

## Features

MSP supports single-container:

- stateless, horizontally scaling services
- scheduled cron jobs

From a simple service configuration YAML ([examples](https://github.com/sourcegraph/managed-services/tree/main/services)) and the `sg msp` toolchain for managing configuration, we currently support:

- Generating infrastructure-as-code, deployed via Terraform Cloud
- [Service initialization and runtime boilerplate](#service-code) via [sourcegraph/lib/managedservicesplatform](https://github.com/sourcegraph/sourcegraph/tree/main/lib/managedservicesplatform), which includes:
  - initialization of OpenTelemetry tracing and metrics, logging, and error reporting (Sentry)
  - integration guidance for provisioned data backends like Redis and PostgreSQL
- Provisioning of data backends, configured with secure, highly available defaults and regular backups out of the box where applicable:
  - [Redis](https://cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview) for ephemereal data and synchronization between instances of a service.
  - [PostgreSQL](https://cloud.google.com/sql/postgresql?hl=en) for persistent, relational data.
  - [BigQuery](https://cloud.google.com/bigquery?hl=en) dataset and tables for high-volume analytics and usage data specific to your feature.
- Service-specific features
  - Configuring a domain and TLS through Cloudflare and GCP load balancing
  - Scaling capabilities backed by [Cloud Run](https://cloud.google.com/run?hl=en)
- Job-specific features
  - Executions backed by [Cloud Run Jobs](https://cloud.google.com/run/docs/create-jobs)
  - Cron scheduling
- Commands for easy access to infrastructure
  - Shortcuts to relevant UIs in `sg msp tfc view`, `sg msp logs`, etc.
  - Securely connect to your PostgreSQL instance using `sg msp pg connect`
- Generated infrastructure guidance, rendered in the [Managed Services infrastructure](../../../managed-services/index.md) pages.
- Continuous delivery via [Cloud Deploy delivery pipelines](./rollout.md)

See [our GitHub roadmap](https://github.com/orgs/sourcegraph/projects/375/views/1) and [2023 Q3 Managed Services Platform (MSP) proof-of-concept update](https://docs.google.com/document/d/1DSqKqCgXW2m0TCVBmDSasY2Hxb9cp9Uv_NgF4MEfAto/edit) for more details on things we will be adding to MSP.

## Operating services

All infrastructure manifests are managed in [sourcegraph/managed-services](https://github.com/sourcegraph/managed-services), and the tooling is being developed in [sourcegraph/sourcegraph/dev/sg/msp](https://github.com/sourcegraph/sourcegraph/tree/main/dev/sg/msp).

- **Guidance for service operators** is available in the [Managed Services infrastructure](../../../managed-services/index.md) pages.
- **Guidance for broad MSP incidents** is available in [Managed Services incident response](./incidents.md) - this is generally intended for Core Services.

## Getting started

To get started, you will need to [write some code](#service-code) and [build the service for distribution in MSP](#service-images).
Then, you can refer to [creating and configuring infrastructure](#creating-and-configuring-infrastructure) to get your service up and running!

### Service code

The Core Services team recommends building your service in Go to leverage the service initialization and runtime boilerplate provided by the standalone [github.com/sourcegraph/sourcegraph/lib/managedservicesplatform](https://github.com/sourcegraph/sourcegraph/tree/main/lib/managedservicesplatform) module.

The `runtime.Start` function outlines the expected "contract" the MSP runtime expects services to fulfill, and ensures your service is compatible with MSP infrastructure:

```go
import (
  "github.com/sourcegraph/sourcegraph/lib/managedservicesplatform/runtime"

  // Your implementation!
  "github.com/sourcegraph/my-service/service"
)

func main() {
  runtime.Start[service.Config](service.Service{})
}
```

In your implementation of `runtime.Service`, the primary entrypoint `Initialize` provides a `runtime.Contract` that is pre-configured with MSP defaults and offers helpers to integrating with MSP-provisioned resources. For example:

- to serve your service, you must use `(runtime.Contract).Port`, listening on all network interfaces, i.e. `0.0.0.0:$PORT`, or `:$PORT`.
  - **do not use** `localhost:$PORT` or `127.0.0.1:$PORT`.
- to get a securely authenticated PostgreSQL connection, you should use `(runtime.Contract).PostgreSQL.OpenDatabase(...)`
- Sentry error reporting integration for error-level logs is automatically configured when using the provided logger instance

A full example service is available in [`cmd/msp-example`](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/msp-example) that makes use of most MSP functionality.

### Service images

Every MSP service requires a runnable server in a Docker image whose platform is `linux/amd64`.

> [!WARNING]
> If you are building the Docker image locally or not on a `linux/amd64` platform, make sure to use [Docker buildx](https://github.com/docker/buildx), e.g.
>
> ```zsh
> docker buildx --platform linux/amd64 .
> ```
>
> The exception is that building in the [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph) monorepo using `bazel build` would build the correct platform.

When publishing images for MSP to consume, you can use the public Docker registry, or an [Artifact Registry](https://cloud.google.com/artifact-registry) repository within the Sourcegraph GCP organization.
Image repositories published by the [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph) monorepo work as well.

When using a private image registry within GCP, MSP will automatically provision the prerequisite permissions for MSP to access your images.

> [!WARNING] More guidance coming soon! For now, refer to the [SAMS publishing pipeline infrastructure](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure@c755ada5fdbfecc287b11722841f21c39b381f73/-/blob/managed-services/sams-publishing-pipeline/main.tf) for an example on how to set up a private repository and a GitHub Actions workload identity.

### Creating and configuring infrastructure

Refer to the [sourcegraph/managed-services README](https://github.com/sourcegraph/managed-services/blob/main/README.md) for all documentation related to creating configuring MSP deployments and getting started with `sg msp`.

> [!NOTE] MSP service and environment configurations live in the [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services) repository, where generated configuration is managed under an infrastructure-as-code model.
> MSP tooling like the `sg msp` toolchain will generally require you to be operating from a local clone of this repository.
> Refer to the [sourcegraph/managed-services README](https://github.com/sourcegraph/managed-services/blob/main/README.md) to get started!
