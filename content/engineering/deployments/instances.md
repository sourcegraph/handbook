# Instances

Information about Sourcegraph's different instances. For deployments of Sourcegraph we manage for customers, see [managed instances](../distribution/managed/index.md).

## sourcegraph.com

[![Build status](https://badge.buildkite.com/ef1289610fdd05b606bf1e57a034af2365c7b09c95ac6121f9.svg)](https://buildkite.com/sourcegraph/deploy-sourcegraph-dot-com)

This deployment is also colloquially referred to as "Sourcegraph Cloud", "Cloud", and "dot-com". It is the public deployment available to the public at [sourcegraph.com/search](https://sourcegraph.com/search).

- [dot-com cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/cloud?project=sourcegraph-dev)
  ```
  gcloud container clusters get-credentials cloud --zone us-central1-f --project sourcegraph-dev
  ```
- [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)
- [Infrastructure configuration](https://github.com/sourcegraph/infrastructure/tree/main/cloud)
- Alerts: `#alerts-cloud` and [OpsGenie](../incidents/on_call.md)
- [Playbooks](./playbooks.md#sourcegraph-com)

## k8s.sgdev.org

[![Build status](https://badge.buildkite.com/65c9b6f836db6d041ea29b05e7310ebb81fa36741c78f207ce.svg?branch=release)](https://buildkite.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2)

🚨 This deployment contains private code - for demos, use [demo.sourcegraph.com](https://demo.sourcegraph.com) instead.

This deployment is also colloquially referred to as "dogfood", "dogfood-k8s", or just "k8s". It deploys the latest changes in [`deploy-sourcegraph`](https://github.com/sourcegraph/deploy-sourcegraph), and by extension, `sourcegraph/sourcegraph`, via automated updates - learn more in [deployment basics](#deployment-basics).

- [dogfood cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/dogfood?project=sourcegraph-dogfood)
  ```
  gcloud container clusters get-credentials dogfood --zone us-central1-f --project sourcegraph-dogfood
  ```
- [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2)
- [Infrastructure configuration](https://github.com/sourcegraph/infrastructure/tree/main/dogfood)
- Alerts: `#alerts-dogfood-k8s`
- [Playbooks](./playbooks.md#k8s-sgdev-org)

Updates from `deploy-sourcegraph` are performed upon [notification from upstream](#deploy-sourcegraph) by the ["Update from deploy-sourcegraph"](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2/actions?query=workflow%3A%22Update+from+deploy-sourcegraph%22) workflow.

## sourcegraph.sgdev.org

[![Build status](https://badge.buildkite.com/135a00d4fba76ec97944bfb2fc28015d1565e0525853b4de06.svg)](https://buildkite.com/sourcegraph/deploy-sourcegraph-dogfood-server)

🚨 This deployment contains private code - for demos, use [demo.sourcegraph.com](https://demo.sourcegraph.com) instead.

This deployment runs the single-image version of Sourcegraph. It is deployed by the [infrastructure repository](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-server) and uses the shared `dogfood` cluster (also used by [k8s.sgdev.org](#k8s-sgdev-org)).

- [dogfood cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/dogfood?project=sourcegraph-dogfood)
  ```
  gcloud container clusters get-credentials dogfood --zone us-central1-f --project sourcegraph-dogfood
  ```
- [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-server)
- [Infrastructure configuration](https://github.com/sourcegraph/infrastructure/tree/main/dogfood)

## demo.sourcegraph.com

This deployment is a [managed instance](../distribution/managed/index.md) used by Sourcegraph CE for demos.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-managed-demo)
- [Infrastructure configuration](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/master/demo)
- [Operations](../distribution/managed/operations.md)

## devmanaged.sourcegraph.com

This deployment is a [managed instance](../distribution/managed/index.md) used by Distribution for experimenting with managed instances in general.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-managed-dev)
- [Infrastructure configuration](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/master/dev)
- [Operations](../distribution/managed/operations.md)
