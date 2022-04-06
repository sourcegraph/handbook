# Security infrastructure

We maintain multiple flavors of infrastructure with various degrees of management.

## GCP infrastructure basics

GCP infrastructure is configured via [terraform](https://www.terraform.io/) in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/). All configuration for security projects should be stored in the [security subdirectory](https://github.com/sourcegraph/infrastructure/tree/main/security). Please adhere to this [terraform style guide](https://docs.sourcegraph.com/dev/background-information/languages/terraform) when working here.

For instructions on how to deploy this infrastructure, see [GCP Deployment Playbooks](./playbooks.md#gcp-deployment-playbooks).

#### Logging

## Projects

These are security's current GCP projects, and what they do.

### sourcegraph-security-logging

- Currently ingests all stackdriver logs from the projects `sourcegraph-dev`(cloud) and `sourcegraph-dogfood`(dogfood). Will later ingest logs from other sources using additional deployments within the cluster.
- Currently ingests all published SCC (Security Command Center) findings and posts critical / highs to internal slack channel #security-monitoring.
