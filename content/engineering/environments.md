# Environment

This page describes our different cloud environments.

## Google Cloud

We utilize multiple Google Cloud projects and folders to organize our workloads and manage access control for our engineers, as well as limit the scope of roles and service accounts across projects.

### Root Projects

These projects contain per-project permissions.

- **TelligentSourcegraph**: Data pipeline and storage for pings and Cloud event logging.
- **Universities**: Sourcegraph instances for universities.
- **sourcegraph-interviews**: Shared project for interviews.

### Folders

#### Engineering Projects

Contains projects used by individual engineers. Engineers are expected to remove all their resources once they are done testing. All projects must be prefixed with `$name-` (the name of the owner).

#### Sourcegraph Cloud

Sourcegraph Cloud projects.

- **Sourcegraph**: Services for sourcegraph.com.
- **Sourcegraph Auxiliary**: Testing clusters, deployments and VMs.
- **sourcegraph-code-intel**: Services for Code Intel code execution that are separated from our production project for extra isolation.
- **Sourcegraph CI**: Services for our CI cluster and temporary CI resources.

#### Other Projects

Misc Projects with permissions set at the project level.

- **sourcegraph-calend**: Owned by @sqs.
- **sourcegraph-orgtool**: Owned by @sqs.

#### Managed Instances

Multiple `sourcegraph-managed-$name` projects, one for each our managed deployments to guarantee separation of privileges and access control.
