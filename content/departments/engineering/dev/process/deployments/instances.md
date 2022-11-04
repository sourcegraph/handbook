# Instances

Information about Sourcegraph's different instances.

- [sourcegraph.com](instances.md#dotcom) (or 'DotCom') is our public, free-to-use deployment.
- [k8s.sgdev.org](instances.md#k8s-sgdev-org) is a dogfood deployment that replicates the scale of our largest on-prem customers. This deployment also contains all of our private code.
- [Managed instances](../../../../cloud/index.md) are deployments of Sourcegraph we manage for customers.
  - [demo.sourcegraph.com](instances.md#demo-sourcegraph-com) is a managed instance used for CE demos.
  - [devmanaged.sourcegraph.com](instances.md#devmanaged-sourcegraph-com) is a managed instance used for managed instances development.
  - [sourcegraph.sourcegraph.com](instances.md#sourcegraph-sourcegraph-com) is a managed instance used for Sourcegraph's dogfooding needs. Informally referred to as "S2". This instance is jointly owned by #dev-experience and #cloud. We [continously deploy](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/.github/workflows/upgrade-sourcegraph.yaml) the latest unreleased version of Sourcegraph every one hour on weekdays, and you may also [force rolling out a new deployent](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/upgrade-sourcegraph.yaml) by clicking the `run workflow` button.

For deployments of Sourcegraph we manage for customers, see [managed instances](../../../../cloud/index.md).

Also see [playbooks](./playbooks.md) for common actions related to operating our Sourcegraph deployments.

## DotCom

[![Build status](https://badge.buildkite.com/ef1289610fdd05b606bf1e57a034af2365c7b09c95ac6121f9.svg)](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud)

This deployment is also colloquially referred to as 'DotCom' and 'sourcegraph.com'. It is the public deployment available to the public at [sourcegraph.com/search](https://sourcegraph.com/search).

`sourcegraph.com` deploys the latest changes from [`sourcegraph/sourcegraph`](https://github.com/sourcegraph/sourcegraph) on a [daily basis](index.md#continuous-deployment-process).

This deployment also includes our [documentation](https://docs.sourcegraph.com/) and [about](https://about.sourcegraph.com/) sites.

> 🐶 For dogfooding changes, use [k8s.sgdev.org](#k8s-sgdev-org) instead, which generally receives updates faster.

- [DotCom cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/cloud?project=sourcegraph-dev)
  ```
  gcloud container clusters get-credentials cloud --zone us-central1-f --project sourcegraph-dev
  ```
- [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-cloud)
- [Infrastructure configuration](https://github.com/sourcegraph/infrastructure/tree/main/cloud)
- Alerts: #alerts-cloud and [OpsGenie](../incidents/on_call.md)
- [Playbooks](./playbooks.md#sourcegraph-cloud)

## k8s.sgdev.org

[![Build status](https://badge.buildkite.com/65c9b6f836db6d041ea29b05e7310ebb81fa36741c78f207ce.svg?branch=release)](https://buildkite.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2)

**NO LONGER PRIMARY DOGFOODING INSTANCE, SEE [S2](#sourcegraphsourcegraphcom-s2) BELOW**

This deployment is also colloquially referred to as "dogfood", "dogfood-k8s", or just "k8s".
This is the Sourcegraph instance to use for dogfooding changes to Sourcegraph.
It contains Sourcegraph private code, and deploys the latest [Sourcegraph images](./index.md#images) via [ArgoCD](./index.md#argocd)

We are following GitOps practice to handle deployment of `k8s`. The source of truth of the deployment is [sourcegraph/deploy-sourcegraph-dogfood-k8s](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s/blob/release/dogfood-helm/kustomization.yaml).

We use two scheduled GitHub Actions to continuously create PRs to update the images and merge the created PRs on a fixed schedule. If you would like to bypass the schedule, do the following

- Run https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s/actions/workflows/update-tags.yml and wait for completion
- Run https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s/actions/workflows/merge-pr.yml
- Your changes should be up in no time, or you may monitor the rollout status in <argocd.sgdev.org>

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

[Managed instances](../../../../cloud/index.md) are deployments of Sourcegraph we manage for customers.
We also maintain some internal managed instances for various use cases.

### sourcegraph.sourcegraph.com (S2)

This deployment is also colloquially referred to as "dogfood S2", or just "S2", it was spun up as a response to our change in product direction and becoming Cloud (managed instances) first. We use S2 as our primary dogfooding instance now, and feedback gets shared in [#feedback-dogfood](https://sourcegraph.slack.com/archives/C03CSAER9LK).

S2 gets deployed every hour between 8am and 10pm UTC on weekdays using a [GitHub Actions workflow](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/.github/workflows/upgrade-sourcegraph.yaml) that updates the images, creates the PR, and merge the changes. The instance contains Sourcegraph private code, and deploys the latest [Sourcegraph images](./index.md#images).

- [GCP project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-managed-sg)
- [Infrastructure configuration](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/sg)
- [Operations](../../../../cloud/technical-docs/operations.md)

### demo.sourcegraph.com

This deployment is used by Sourcegraph CE for demos.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-managed-demo)
- [Infrastructure configuration](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/demo)
- [Operations](../../../../cloud/technical-docs/operations.md)

### devmanaged.sourcegraph.com

This deployment is a [managed instance](../../../../cloud/index.md) used by Distribution for experimenting with managed instances in general.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-managed-dev)
- [Infrastructure configuration](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/dev)
- [Operations](../../../../cloud/technical-docs/operations.md)
