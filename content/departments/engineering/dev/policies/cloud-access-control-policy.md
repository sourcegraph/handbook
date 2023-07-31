# Cloud Access Control Policy

## Introduction

This Access Control Policy defines which Sourcegraph employees have access to each production asset and under which conditions. It is not in scope to define how to enforce these policies. It targets the Cloud product (formerly known as Managed Instances), running single-tenant Sourcegraph instances Docker Compose instances on GCP (later to be substituted by Kubernetes deployments on GKE).

This document is divided in sections:

- Infrastructure access (GCP, Cloudflare)
- User access (User and site admin)
- Change management (Terraform, Buildkite)

Each section has a desired end-state and the current state. The desired end-state targets customers with elevated security standards along with providing us more fine-grained access control options.

The policy also differentiates customer instances from instances used internally by Sourcegraph. Customer instances are all Cloud instances containing customer data (customer.sourcegraph.com) and trial instances. These instances have higher security scrutiny. Sourcegraph instances are:

- sourcegraph.sourcegraph.com
- k8s.sgdev.org
- sourcegraph.com
- demo.sourcegraph.com
- devmanaged.sourcegraph.com
- rctest.sourcegraph.com

Access logs will be collected and audited, increasingly for higher levels of access. Defining the logging and alerting methods is out-of-scope for this policy. We are also not considering sharing logs with customers at this time.

Note: Approval processes for elevated access (referenced throughout this doc) will be documented by Security and Tech Ops. The teams are currently evaluating tooling to improve this process.

## Infrastructure access

GCP services (GKE, Cloud SQL, etc) and Cloudflare.

### Current State

#### Customer instances

- Cloud team has elevated access.
- Non-Cloud teammates can request access with regular approval flow.

#### Sourcegraph instances

- All teammates have elevated access.

### Desired end-state

#### Customer instances

- No one has access by default.
- Cloud, Security teams can request read-access with automatic approval.
- Cloud, Security teams can request elevated access with regular approval flow.
- Cloud, Security on-call teammates can request elevated access with automatic approval.
- Cloud, Security on-call teammates can approve elevated access requests for others during incidents.
- Non-Cloud teammates cannot request access.

#### Sourcegraph instances

- No one has access by default.
- All teammates can request read or elevated access with automatic approval.

### Elevated access

In the context of our infrastructure, elevated access encompasses write access to infrastructure. For our current assets, this includes:

- Shell in pods
- Write access to db
- Editor access to the project in GCP, allowing to create/edit resources
- Administrator/Super Administrator role in Cloudflare

## User access

Having access to the instance as a user or site admin.

### Current state

#### Customer instances

- Cloud team with improved OIDC provider.
- CE team pairs with customer site admin when needed.

#### Sourcegraph instances

- All engineers may request and maintain site admin access.
- All current site admins can grant site admin access to others.

### Desired end-state

#### Customer instances

- No teammates have access by default. Service accounts used for management are automatically provisioned with elevated privileges.
- Cloud, CE teams can request user access with automatic approval.
- Cloud, CE teams can request site admin access with regular approval flow.
- Cloud, Security on-call teammates can request site admin access with automatic approval.
- Cloud, Security on-call teammates can approve elevated access requests for others during incidents.
- Non-Cloud teammates cannot request access.

#### Sourcegraph instances

- All teammates have access by default.
- All teammates can request elevated access with automatic approval.

## Change management

Making changes to the infrastructure via Terraform or deployment (Buildkite, ArgoCD).

### Current state

#### Customer instances

- Cloud, Security teams can approve changes.
- Cloud team can apply changes.
- No other teammates have access by default.

#### Sourcegraph instances

- Cloud, Security, DevInfra can approve changes.
- All engineers can apply changes through CD.

### Desired end-state

#### Customer instances

- No one has access by default.
- Changes are performed by a Terraform Cloud-like solution.
- Cloud, Security teams can approve changes to instances (updating terraform code).
- Cloud, Security on-call teammates can request elevated access to apply Terraform changes outside CI with automatic approval.
- Cloud, DevInfra, Security teams can approve changes to CI/CD configurations (ArgoCD, Buildkite).
  Sourcegraph instances
- Changes are performed by a Terraform Cloud-like solution.
- Cloud, DevInfra, Security teams can approve changes.
- Cloud, DevInfra on-call teammates can request elevated access to apply Terraform changes outside. CI with automatic approval.

## Telemetry and monitoring

Access to monitoring and telemetry data such as Grafana, etc.

### Current state

#### Customer instances

- Cloud team has access by default to all logs.
- Non-Cloud teammates can request access to all logs with regular approval flow.
  Sourcegraph instances
- All teammates have access.

### Desired end-state

#### Customer instances

- Docker/k8s logs (contains private repo names): Cloud with automatic approval.
  Prometheus/Grafana (contains private repo names): Cloud with automatic approval, other teams with approval process.
- Jaeger (contains private repo names): Cloud with automatic approval, other teams with approval process.
- Infrastructure metrics: All teammates with automatic approval but need to scrape private repo names.

#### Sourcegraph instances

- All teammates with automatic approval.

## Exceptions

Requests for an exception to this Policy must be submitted to the Security for approval.

## Policy Compliance

Sourcegraph will measure and verify compliance to this policy through various methods, including but not limited to, business tool reports, and both internal and external audits.

## Violations & Enforcement

Any known violations of this policy should be reported to [report-policy-violation@sourcegraph.com](mailto:report-policy-violation@sourcegraph.com). Failure to follow this policy can result in disciplinary action, up to and including termination.

**Policy Owner**: Head of Security

| Version | Date        | Description              | Author          | Approved by |
| ------- | ----------- | ------------------------ | --------------- | ----------- |
| 1.0     | 08-Sep-2022 | First version            | André Eleuterio | Diego Comas |
| 1.1     | 30-May-2023 | 2023 review - no updates | André Eleuterio | Diego Comas |
