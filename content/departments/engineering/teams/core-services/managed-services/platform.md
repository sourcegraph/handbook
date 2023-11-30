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
- Service initialization and runtime boilerplate via [sourcegraph/lib/managedservicesplatform](https://github.com/sourcegraph/sourcegraph/tree/main/lib/managedservicesplatform)
- Provisioning of data backends, configured with secure, highly available defaults and regular backups out of the box:
  - [Redis](https://cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview) for ephemereal data and synchronization between instances of a service.
  - [PostgreSQL](https://cloud.google.com/sql/postgresql?hl=en) for persistent, relational data.
- Service-specific features
  - Configuring a domain and TLS through Cloudflare and GCP load balancing
  - Scaling capabilities backed by [Cloud Run](https://cloud.google.com/run?hl=en)
- Job-specific features
  - Executions backed by [Cloud Run Jobs](https://cloud.google.com/run/docs/create-jobs)
  - Cron scheduling

See [our GitHub roadmap](https://github.com/orgs/sourcegraph/projects/375/views/1) and [2023 Q3 Managed Services Platform (MSP) proof-of-concept update](https://docs.google.com/document/d/1DSqKqCgXW2m0TCVBmDSasY2Hxb9cp9Uv_NgF4MEfAto/edit) for more details on things we will be adding to MSP.

## Creating and configuring services

Refer to the [sourcegraph/managed-services README](https://github.com/sourcegraph/managed-services/blob/main/README.md) for all documentation for creating configuring MSP deployments and using `sg msp`.

## Operating services

### Entitle

For MSP service environments other than `category: test`, access needs to be requested through Entitle.
The test environment ("Engineering Projects" GCP folder) should have access granted to engineers by default.

Entitle access to a production MSP project is most easily provisioned through the `mspServiceEditor` custom role.
This role is created org-level [in `gcp/org/customer-roles/msp.tf` in the infrastructure repo](https://github.com/sourcegraph/infrastructure/blob/main/gcp/custom-roles/msp.tf) and available in Entitle by following the steps:

- Go to [app.entitle.io/request](https://app.entitle.io/request) and select **Specific Permission**
- Fill out the following:
  - Integration: `GCP Production Projects`
  - Resource types: `Project`
  - Resource: name of MSP project you are interested in
  - Role: `mspServiceEditor`
  - Duration: choose your own adventure!

### Terraform Cloud

Terraform Cloud workspaces for MSP [can be found using the `msp` workspace tag](https://app.terraform.io/app/sourcegraph/workspaces?tag=msp).
