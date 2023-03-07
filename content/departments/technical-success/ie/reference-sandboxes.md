# Customer Reference Sandbox Environments

## Purpose & Use

The IE team is creating and maintaining snapshots of Sourcegraph configurations and cloned/indexed code to quickly and efficiently be able to spin up replicas of customer environments in tandem with Terraform repos for quickly deploying clusters.

These instances will be, by default, limited in the resourcing allocated to them, and will be based on the Terraform repos managed by the Delivery team in the [Sourcegraph GitHub organization](https://github.com/sourcegraph). The Terraform deployments can be adjusted to be scalable to the customer's required specs on GCP and AWS, should proof of infrastructure be required. The Terraform shown in these repos is intended to quickly stand up the infrastructure to install Sourcegraph on. If the prospective customer does not want to install into their own cloud, a CE can share login details with prospective customers and allow access to explore a replica environment hosted by Sourcegraph.

In addition to customer use cases, IE and Customer Support may wish to leverage these Terraform repos to build out environments to troubleshoot customer issues in a close replica setting.

### Lifecycle of Sandboxes

By default, sandboxes being used on a prospective customer use case and deployed in Sourcegraph's cloud will be time-boxed for 2 weeks. In these cases, sandboxes are employed to give a customer a quick example of what a private Sourcegraph instance will look and feel like.

For customer troubleshooting use cases, sandboxes should be destroyed after each deployment, and Velero backups will be available in the Implementation AWS account and GCP project for quick configuration of an instance after the infrastructure is deployed.

## Environments

Terraform repos are available to deploy clusters on EKS (AWS), GKE (GCP), and AKS (Azure). There are snapshots in the Implementation GCP and AWS accounts for GitHub, GitLab, BitBucket, and Perforce. At the current moment, there are no snapshots available for AKS.
