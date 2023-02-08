# Security infrastructure

The team runs most of the infrastructure that it manages itself on GCP, while Elastic
Cloud is used for centralized logging and monitoring.

Further technical information on the security team's infrastructure can be found
[here](https://github.com/sourcegraph/infrastructure/tree/main/security/docs).

## GCP infrastructure

GCP infrastructure is configured via [Terraform](https://www.terraform.io/) in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/). All configuration for security projects should be stored in the [security subdirectory](https://github.com/sourcegraph/infrastructure/tree/main/security). Please adhere to this [Terraform style guide](https://docs.sourcegraph.com/dev/background-information/languages/terraform) when working here.

For instructions on how to deploy this infrastructure, see [GCP Deployment Playbooks](./playbooks.md#gcp-deployment-playbooks).

### GCP projects

These are the security team's current GCP projects, and what they do:

#### sourcegraph-security-logging

- Ingests audit logging from various sources for monitoring and review. See the
  GitHub documentation linked above for detailed technical documentation of
  exactly which sources are consumed, through which pipelines, and how the data
  is managed and monitored once it is in the cluster.
- Currently ingests all published SCC (Security Command Center) findings and posts critical / highs to internal slack channel #security-monitoring.

## Elastic Cloud

Elastic Cloud can be accessed via the Okta [app dashboard](https://sourcegraph.okta.com/app/UserHome).
Ask Tech Ops to grant you access to the application; only Security team members
will be granted access to the platform.

The process to gain administrative access to the cluster is described in more detail
in the technical documentation linked at the top of this page.
