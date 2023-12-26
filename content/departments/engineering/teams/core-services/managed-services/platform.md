# Sourcegraph Managed Services Platform (MSP)

The Sourcegraph Managed Services Platform (**MSP**) is the standardized tooling and infrastructure for deploying and operating managed Sourcegraph services.
MSP takes a service specification and generates Terraform manifests and adjacent resources required to operate a service, aiming to provide a simple, Heroku-like experience to spin up infrastructure for standalone managed services.

By adopting MSP for your managed service, it will benefit from [an expanding set of features and integrations](#features), alignment with infrastructure and security best practices at Sourcegraph, and support from the [Core Services team](../index.md).

All assets are managed in [sourcegraph/managed-services](https://github.com/sourcegraph/managed-services), and the tooling is being developed in [sourcegraph/sourcegraph/dev/sg/msp](https://github.com/sourcegraph/sourcegraph/tree/main/dev/sg/msp).

> [!WARNING] This project and page is a work in progress. For some context, see [go/rfc-msp](http://go/rfc-msp).

## Features

MSP supports single-container:

- stateless, horizontally scaling services
- scheduled cron jobs

From a simple service configuration YAML ([examples](https://github.com/sourcegraph/managed-services/tree/main/services)) and the `sg msp` toolchain for managing configuration, we currently support:

- Generating infrastructure-as-code, deployed via [Terraform Cloud](#terraform-cloud)
- [Service initialization and runtime boilerplate](#building-a-new-service) via [sourcegraph/lib/managedservicesplatform](https://github.com/sourcegraph/sourcegraph/tree/main/lib/managedservicesplatform), which includes:
  - initialization of OpenTelemetry tracing and metrics, logging, and error reporting
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

See [our GitHub roadmap](https://github.com/orgs/sourcegraph/projects/375/views/1) and [2023 Q3 Managed Services Platform (MSP) proof-of-concept update](https://docs.google.com/document/d/1DSqKqCgXW2m0TCVBmDSasY2Hxb9cp9Uv_NgF4MEfAto/edit) for more details on things we will be adding to MSP.

## Building a new service

Before deploying a service, you will need to build it!
The Core Services team recommends building your service in Go to leverage the service initialization and runtime boilerplate provided by the standalone [github.com/sourcegraph/sourcegraph/lib/managedservicesplatform](https://github.com/sourcegraph/sourcegraph/tree/main/lib/managedservicesplatform) module.

The `runtime.Start` function outlines the expected "contract" the MSP runtime expects services to fulfill:

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

In your implementation of `runtime.Service`, the primary entrypoint `Initialize` provides a `runtime.Contract` that is pre-configured with MSP defaults and offers helpers to connecting to MSP-provisioned resources. For example, to serve your service, you must use `(runtime.Contract).Port`, and to get a securely authenticated PostgreSQL connection, you can use `(runtime.Contract).PostgreSQL.OpenDatabase(...)`.

A full example service is available in [`cmd/msp-example`](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/msp-example) that makes use of most MSP functionality.

## Creating and configuring infrastructure for services

Refer to the [sourcegraph/managed-services README](https://github.com/sourcegraph/managed-services/blob/main/README.md) for all documentation for creating configuring MSP deployments and using `sg msp`.

## Operating services

This is a user/operator-oriented guide.
Guidance for MSP incidents is available in [Managed Services incident response](./incidents.md).

### Infrastructure access

For MSP service environments other than `category: test`, access needs to be requested through Entitle.
The test environment ("Engineering Projects" GCP folder) should have access granted to engineers by default.

Entitle access to a production MSP project is most easily provisioned through the `mspServiceReader` and `mspServiceEditor` custom roles, which provide read-only and editing access respectively.
You can request access to a project in Entitle by following these steps:

- Go to [app.entitle.io/request](https://app.entitle.io/request) and select **Specific Permission**
- Fill out the following:
  - Integration: `GCP Production Projects`
  - Resource types: `Project`
  - Resource: name of MSP project you are interested in
  - Role: `mspServiceReader` (or `mspServiceEditor` if you need additional privileges - use with care!)
  - Duration: choose your own adventure!

These custom roles are configured [in `gcp/org/customer-roles/msp.tf` in the infrastructure repo](https://github.com/sourcegraph/infrastructure/blob/main/gcp/custom-roles/msp.tf).

### Terraform Cloud

Terraform Cloud (TFC) workspaces for MSP [can be found using the `msp` workspace tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp).

To gain access to MSP project TFC workspaces, [request membership to the `Managed Services Platform Operators` TFC team via Entitle](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiRU5URVIgSlVTVElGSUNBVElPTiBIRVJFIiwicm9sZUlkcyI6W3siaWQiOiJiMzg3MzJjYy04OTUyLTQ2Y2QtYmIxZS1lZjI2ODUwNzIyNmIiLCJ0aHJvdWdoIjoiYjM4NzMyY2MtODk1Mi00NmNkLWJiMWUtZWYyNjg1MDcyMjZiIiwidHlwZSI6InJvbGUifV19).
This TFC team has access to all MSP workspaces, and is [configured here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/terraform-cloud/terraform.tfvars?L44:1-48:4).

For more details, also see [creating and configuring services](https://github.com/sourcegraph/managed-services#operations).
