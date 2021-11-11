# Environment

This page describes our different cloud environments.

## Google Cloud

We utilize multiple Google Cloud projects and folders to organize our workloads and manage access control for our engineers, as well as limit the scope of roles and service accounts across projects.

All **Permanent** Projects and permissions are defined in [infrastructure/gcp](https://github.com/sourcegraph/infrastructure/tree/main/gcp).
Temporary projects should be created as needed in [Engineering Projects](#engineering-projects)

### Root Projects

These projects contain per-project permissions.

- **TelligentSourcegraph**: Data pipeline and storage for pings and Cloud event logging.
- **Universities**: Sourcegraph instances for universities.
- **sourcegraph-interviews**: Shared project for interviews.

### Folders

#### Engineering Projects

Contains projects used by individual engineers. Engineers are expected to remove all their resources once they are done testing. All projects must be prefixed with `$name-` (the name of the owner).

Generally, these projects should be short-lived and shutdown by the engineer when it is no longer needed (this will delete all resources in the project). Longer lived projects should be put in another folder and distribution should be contacted for review.

_Note: Customer Support team members should provision clusters within the cse-k8s project._

#### Sourcegraph Cloud

Sourcegraph Cloud projects.

- **Sourcegraph**: Services for sourcegraph.com.
- **Sourcegraph Auxiliary**: Testing clusters, deployments and VMs.
- **sourcegraph-code-intel**: Services for Code Intel code execution that are separated from our production project for extra isolation.
- **Sourcegraph CI**: Services for our CI cluster and temporary CI resources.

#### Sourcegraph Security

[Sourcegraph Security projects](./cloud/security/infrastructure/index.md#projects).

- **[sourcegraph-security-logging](./cloud/security/infrastructure/index.md#logging)**: Infrastructure required for centralized security logging.
- **[sourcegraph-security-logging-stage](./cloud/security/infrastructure/index.md#logging-stage)**: Staging environment for logging infrastructure.

#### Other Projects

Misc Projects with permissions set at the project level.

- **sourcegraph-calend**: Owned by @sqs.
- **sourcegraph-orgtool**: Owned by @sqs.

#### Managed Instances

Multiple `sourcegraph-managed-$name` projects, one for each our managed deployments to guarantee separation of privileges and access control.
