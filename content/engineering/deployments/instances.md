# Instances

Information about Sourcegraph's different instances.

- [sourcegraph.com](instances.md#sourcegraph-com) is our production deployment.
- [k8s.sgdev.org](instances.md#k8s-sgdev-org) is a dogfood deployment that replicates the scale of our largest customers.
  This deployment also contains all of our private code.
- [Managed instances](../enablement/delivery/managed/index.md) are deployments of Sourcegraph we manage for customers.
  - [demo.sourcegraph.com](instances.md#demo-sourcegraph-com) is a managed instance used for CE demos.
  - [devmanaged.sourcegraph.com](instances.md#devmanaged-sourcegraph-com) is a managed instance used for managed instances development.

For deployments of Sourcegraph we manage for customers, see [managed instances](../enablement/delivery/managed/index.md).

Also see [playbooks](./playbooks.md) for common actions related to operating our Sourcegraph deployments.

## sourcegraph.com

[![Build status](https://badge.buildkite.com/ef1289610fdd05b606bf1e57a034af2365c7b09c95ac6121f9.svg)](https://buildkite.com/sourcegraph/deploy-sourcegraph-dot-com)

This deployment is also colloquially referred to as "Sourcegraph Cloud", "Cloud", and "dot-com". It is the public deployment available to the public at [sourcegraph.com/search](https://sourcegraph.com/search).

`sourcegraph.com` deploys the latest changes from [`sourcegraph/sourcegraph`](https://github.com/sourcegraph/sourcegraph) on a schedule via [Renovate](./index.md#renovate)

This deployment also includes our [documentation](https://docs.sourcegraph.com/) and [about](https://about.sourcegraph.com/) sites.

> 🐶 For dogfooding changes, use [k8s.sgdev.org](#k8s-sgdev-org) instead, which generally receives updates faster.

- [dot-com cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/cloud?project=sourcegraph-dev)
  ```
  gcloud container clusters get-credentials cloud --zone us-central1-f --project sourcegraph-dev
  ```
- [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)
- [Infrastructure configuration](https://github.com/sourcegraph/infrastructure/tree/main/cloud)
- Alerts: #alerts-cloud and [OpsGenie](../incidents/on_call.md)
- [Playbooks](./playbooks.md#sourcegraph-com)

## k8s.sgdev.org

[![Build status](https://badge.buildkite.com/65c9b6f836db6d041ea29b05e7310ebb81fa36741c78f207ce.svg?branch=release)](https://buildkite.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2)

This deployment is also colloquially referred to as "dogfood", "dogfood-k8s", or just "k8s".
This is the Sourcegraph instance to use for dogfooding changes to Sourcegraph.
It contains Sourcegraph private code, and deploys the latest [Sourcegraph images](./index.md#images) via [ArgoCD](./index.md#argocd)

Learn more in [deployment basics](./index.md#deployment-basics).

> 🚨 This deployment contains private code - for demos, use [demo.sourcegraph.com](#demo-sourcegraph-com) instead.

- [dogfood cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/dogfood?project=sourcegraph-dogfood)
  ```
  gcloud container clusters get-credentials dogfood --zone us-central1-f --project sourcegraph-dogfood
  ```
- [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2)
- [Infrastructure configuration](https://github.com/sourcegraph/infrastructure/tree/main/dogfood)
- Alerts: #alerts-dogfood-k8s
- [Playbooks](./playbooks.md#k8s-sgdev-org)

## Managed instances

[Managed instances](../enablement/delivery/managed/index.md) are deployments of Sourcegraph we manage for customers.
We also maintain some internal managed instances for various use cases.

### demo.sourcegraph.com

This deployment is used by Sourcegraph CE for demos.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-managed-demo)
- [Infrastructure configuration](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/demo)
- [Operations](../enablement/delivery/managed/operations.md)

### devmanaged.sourcegraph.com

This deployment is a [managed instance](../enablement/delivery/managed/index.md) used by Distribution for experimenting with managed instances in general.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-managed-dev)
- [Infrastructure configuration](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/dev)
- [Operations](../enablement/delivery/managed/operations.md)
