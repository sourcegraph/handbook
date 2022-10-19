# Prerequisites for Sourcegraph Implementation

This document is intended to gather the prerequisites one must complete before beginning with a Sourcegraph self-hosted Kubernetes deployment. This document does not include configuration requirements of the Sourcegraph instance, but is specifically aimed at capturing what is required to have a healthy, accessible deployment in a cluster.

## Prerequisites List

Before deploying Sourcegraph into an environment, the following actions should be completed or access procured

- Kubernetes cluster provisioned (at least v1.19 or later)
  - Cluster has node autoscaling enabled
  - Cluster supports persistent volumes
- CLI Configuration for your cloud provider (if applicable), Kubernetes Cluster, and Helm
  - Cloud provider CLI installed (ex: AWS CLI, GCloud CLI)
  - Kubectl installed
  - Kube config set for the cluster
  - Helm installed
- User completing Sourcegraph installation has cluster-admin privledges
- Sourcegraph helm charts accessible
- Access to DNS for the domain being used for Sourcegraph instance
  - Access to create a TLS certificate for the hostname chosen for Sourcegraph instance
- Ingress Controller installed on cluster (if applicable)

## Additional Considerations

In addition to the above requirements, there are a few additional considerations dependent on the environment Sourcegraph is being installed into.

- Are there any limitations to the amount of storage that can be requested by PVCs?
  - We recommend roughly 1000Gi + 2x the total size of your repositories
- Are there any limitations to the number of PVCs that can be requested by containers in the namespace?
  - A minimum of 10 PVCs will be made against your storageClass
- What are the default firewall policies for your VPC?
