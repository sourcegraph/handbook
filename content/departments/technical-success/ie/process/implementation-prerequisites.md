# Prerequisites for Sourcegraph Implementation

This document is intended to document the prerequisites one must complete before beginning with a Sourcegraph self-hosted Kubernetes deployment jointly deployed with the Sourcegraph implementation team. This document does not include configuration requirements of the Sourcegraph instance, but is specifically aimed at documenting what steps should be taken to set the customer and implementation team up for success when entering into an implementation project.

## Internal Prerequisites List

Before entering into an implementation project, the Sourcegraph team (primarily the Account CE, AE, IE, and TPM) should ensure the following steps have been taken:

- TPM creates a dedicated [Implementation Playbook](https://docs.google.com/spreadsheets/d/1k5-jUMnnV8AMBqtQU6-v8YUbzyiqHE1m9LJ0ofL2RtM/edit#gid=1585144457)
- CE completes the 'Discovery' section of the playbook to the best of their ability, pulling in the implementation team as needed
- TPM and IE review the Internal Implementation Log for issues, resolutions, and mitigation tactics encountered by previous implementation with similar requirements and deployments
- TPM builds out the initial project plan based on the expected requirements identified during Discovery
- IE creates a replica environment, aligning as closely as possible to the expected infrastructure of the upcoming deployment and documenting any encountered issues or lessons learned
- CE sends the below customer prerequisites list to the customer team, pulling in the implementation team as needed

## Customer Prerequisites List

Before deploying Sourcegraph into an environment, the following actions should be completed and access procured by the customer team:

- Kubernetes cluster provisioned (at least v1.19 or later)
  - Cluster has node autoscaling enabled
  - Cluster supports persistent volumes
- CLI Configuration for your cloud provider (if applicable), Kubernetes Cluster, and Helm
  - Cloud provider CLI installed (ex: AWS CLI, GCloud CLI)
  - Kubectl installed
  - Kube config set for the cluster
  - Helm installed
- User completing Sourcegraph installation has cluster-admin privileges
- Sourcegraph helm charts accessible
- Access to DNS for the domain being used for Sourcegraph instance
  - Access to create a TLS certificate for the hostname chosen for Sourcegraph instance
- Ingress Controller installed on cluster (if applicable)
  - The Ingress Controller must be able to assign an IP to the ingress resource, making the instance available either over the internet or within the organization's network

## Additional Considerations

In addition to the above requirements, there are a few additional considerations dependent on the environment Sourcegraph is being installed into.

- Are there any limitations to the amount of storage that can be requested by PVCs?
  - We recommend roughly 1000Gi + 2x the total size of your repositories
- Are there any limitations to the number of PVCs that can be requested by containers in the namespace?
  - A minimum of 10 PVCs will be made against your storageClass
- What are the default firewall policies for your VPC?
