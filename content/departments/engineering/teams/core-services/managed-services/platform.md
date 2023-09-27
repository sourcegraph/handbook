# Sourcegraph Managed Services Platform (MSP)

The Sourcegraph Managed Services Platform (**MSP**) is the standardized tooling and infrastructure for deploying and operating managed Sourcegraph services.
It takes a service specification and generates Terraform manifests and adjacent resources required to operate a service.

All assets are managed in [sourcegraph/managed-services](https://github.com/sourcegraph/managed-services), and the tooling is being developed in [sourcegraph/sourcegraph/dev/sg/msp](https://github.com/sourcegraph/sourcegraph/tree/main/dev/sg/msp).

> [!WARNING] This project and page is a work in progress. For some context, see [go/rfc-msp](http://go/rfc-msp).

## Entitle

For MSP service environments using `category: external` (or without configuring `category`), access needs to be requested through Entitle.
Other environments should have access granted to engineers by default.

Entitle access to a production MSP project is most easily provisioned through the `mspServiceEditor` custom role.
This role is created org-level [in `gcp/org/customer-roles/msp.tf` in the infrastructure repo](https://github.com/sourcegraph/infrastructure/blob/main/gcp/custom-roles/msp.tf) and available in Entitle by following the steps:

- Go to [app.entitle.io/request](https://app.entitle.io/request) and select **Specific Permission**
- Fill out the following:
  - Integration: `GCP Production Projects`
  - Resource types: `Project`
  - Resource: name of MSP project you are interested in
  - Role: `mspServiceEditor`
  - Duration: choose your own adventure!
