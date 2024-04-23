# Instances

Information about Sourcegraph's different instances.

- [sourcegraph.com](instances.md#dotcom) (or 'DotCom') is our public, free-to-use deployment.
- [k8s.sgdev.org](instances.md#k8ssgdevorg) is a dogfood deployment that replicates the scale of our largest on-prem customers. This deployment also contains all of our private code.
- [Managed instances](../../../../cloud/index.md) are deployments of Sourcegraph we manage for customers.
  - [demo.sourcegraph.com](instances.md#demosourcegraphcom) is a managed instance used for CE demos.
  - [devmanaged.sourcegraph.com](instances.md#devmanagedsourcegraphcom) is a managed instance used for managed instances development.
  - [sourcegraph.sourcegraph.com](instances.md#sourcegraphsourcegraphcom-s2) is a managed instance used for Sourcegraph's dogfooding needs. Informally referred to as "S2". This instance is jointly owned by #team-dev-infra and #team-cloud. We [continously deploy](https://golinks.io/s2-deploy) the latest unreleased version of Sourcegraph every one hour on weekdays, and you may also [force rolling out a new deployment](https://golinks.io/s2-deploy) by clicking the `run workflow` button and using `sg` as the customer slug.
  - [cody-dev.sgdev.dev](instances.md#cody-dev) is a dogfood deployment that always runs the latest patch release. It was originally created for Cody testing but can be used for any patch release testing.

For deployments of Sourcegraph we manage for customers, see [managed instances](../../../../cloud/index.md).

Also see [playbooks](./playbooks.md) for common actions related to operating our Sourcegraph deployments.

## DotCom

[![Build status](https://badge.buildkite.com/ef1289610fdd05b606bf1e57a034af2365c7b09c95ac6121f9.svg)](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud)

This deployment is also colloquially referred to as 'DotCom' and 'sourcegraph.com'.
It is the public deployment available to the public at [sourcegraph.com/search](https://sourcegraph.com/search), and is currently operated by the [Core Services team](../../../teams/core-services/index.md).

`sourcegraph.com` deploys the latest changes from [`sourcegraph/sourcegraph`](https://github.com/sourcegraph/sourcegraph) on a [daily basis](index.md#continuous-deployment-process).

This deployment **does not** include the [about](https://about.sourcegraph.com/) site and the [new documentation site at sourcegraph.com/docs](https://sourcegraph.com/docs).
It currently still includes the legacy [docs.sourcegraph.com](https://docs.sourcegraph.com/) site, however.

> [!NOTE] 🐶 For dogfooding changes, use [sourcegraph.sourcegraph.com](#sourcegraphsourcegraphcom-s2) instead, which generally receives updates faster.

- [DotCom cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/cloud?project=sourcegraph-dev)
  ```
  gcloud container clusters get-credentials cloud --zone us-central1-f --project sourcegraph-dev
  ```
- [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-cloud)
- [Infrastructure configuration](https://github.com/sourcegraph/infrastructure/tree/main/cloud)
- Alerts: #alerts-cloud and [OpsGenie](../incidents/on_call.md)
- [Playbooks](./playbooks.md#sourcegraphcom)
- [Observability](../../tools/observability/dotcom.md)
- [Domain routing rules](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/gfe/envs/prod/project/routes.tf)

## k8s.sgdev.org

[![Build status](https://badge.buildkite.com/65c9b6f836db6d041ea29b05e7310ebb81fa36741c78f207ce.svg?branch=release)](https://buildkite.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2)

> [!WARNING] **THIS IS NO LONGER PRIMARY DOGFOODING INSTANCE, SEE [S2](#sourcegraphsourcegraphcom-s2) BELOW**

This deployment is also colloquially referred to as "dogfood", "dogfood-k8s", or just "k8s".
This is the Sourcegraph instance to use for dogfooding changes to Sourcegraph.
It contains Sourcegraph private code, and deploys the latest [Sourcegraph images](./index.md#images) via [ArgoCD](./index.md#argocd)

We are following GitOps practice to handle deployment of `k8s`. The source of truth of the deployment is [sourcegraph/deploy-sourcegraph-dogfood-k8s](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s/blob/release/dogfood-helm/kustomization.yaml).

We use two scheduled GitHub Actions to continuously create PRs to update the images and merge the created PRs on a fixed schedule. If you would like to bypass the schedule, do the following

- Run https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s/actions/workflows/update-tags.yml and wait for completion
- Run https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s/actions/workflows/merge-pr.yml
- Your changes should be up in no time, or you may monitor the rollout status in <argocd.sgdev.org>

Learn more in [deployment basics](./index.md#deployment-basics).

> 🚨 This deployment contains private code - for demos, use [demo.sourcegraph.com](#demosourcegraphcom) instead.

- [dogfood cluster on GCP](https://console.cloud.google.com/kubernetes/clusters/details/us-central1-f/dogfood?project=sourcegraph-dogfood)
  ```
  gcloud container clusters get-credentials dogfood --zone us-central1-f --project sourcegraph-dogfood
  ```
- [Kubernetes configuration](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2)
- [Infrastructure configuration](https://github.com/sourcegraph/infrastructure/tree/main/dogfood)
- Alerts: #alerts-dogfood-k8s
- [Playbooks](./playbooks.md#k8ssgdevorg)

## Managed instances

[Managed instances](../../../../cloud/index.md) are deployments of Sourcegraph we manage for customers.
We also maintain some internal managed instances for various use cases.

### sourcegraph.sourcegraph.com (S2)

This deployment is also colloquially referred to as "dogfood S2", or just "S2", it was spun up as a response to our change in product direction and becoming Cloud (managed instances) first. We use S2 as our primary dogfooding instance now, and feedback gets shared in [#feedback-dogfood](https://sourcegraph.slack.com/archives/C03CSAER9LK).

S2 gets deployed every hour between 8am and 10pm UTC on weekdays using a [GitHub Actions workflow](https://golinks.io/s2-deploy) that updates the images, creates the PR, and merge the changes. The instance contains Sourcegraph private code, and deploys the latest [Sourcegraph images](./index.md#images).

- [GCP project](https://console.cloud.google.com/home/dashboard?project=src-747bc765eb31a4873e4b)
- [Infrastructure configuration](https://github.com/sourcegraph/cloud/tree/main/environments/prod/deployments/src-bd02273f6b90d1d1beee)
- [Operations](https://golinks.io/s2-ops)

### demo.sourcegraph.com

This deployment is used by Sourcegraph CE for demos.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=src-5cfbf5b26a15d81a2b89)
- [Infrastructure configuration](https://github.com/sourcegraph/cloud/tree/main/environments/prod/deployments/src-7fd1fea1fa73202e8bda)
- [Operations](https://github.com/sourcegraph/cloud/blob/main/environments/prod/deployments/src-7fd1fea1fa73202e8bda/dashboard.md)

### clouddev.horsegraph.com

This deployment is a [managed instance](../../../../cloud/index.md) used by the Cloud team as a sandbox for experimenting with managed instances.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=src-51df2b4222042ecd2ff9)
- [Infrastructure configuration](https://github.com/sourcegraph/cloud/tree/main/environments/prod/deployments/src-96ed006bb45d673944e4)
- [Operations](https://github.com/sourcegraph/cloud/blob/main/environments/prod/deployments/src-96ed006bb45d673944e4/dashboard.md)

### Cody Dev

This deployment was spun up to provide an instance that is always on our latest patch release. Because of Cody, the amount of functionality included in patch releases was more substantial, so we needed to be able to do more robust testing.

Cody Dev gets deployed hourly with the latest commit on the current release branch. It is set up to have access to various LLM providers so it can be used for Cody testing.

- [Cody Dev](https://rctest.sgdev.dev/) - also at [go/cody-dev](https://go/cody-dev)
- [Troubleshoot and access](https://github.com/sourcegraph/cloud/blob/main/environments/prod/deployments/src-35c4eac008b3c659327c/dashboard.md) - also at [go/cody-dev-ops](https://go/cody-dev-ops)
- [Monitor rollout or forceully trigger an upgrade](https://github.com/sourcegraph/cloud/actions/workflows/mi_upgrade_cody.yml) - also at [go/cody-dev-deploy](https://go/cody-dev-deploy)
- [GCP project](https://console.cloud.google.com/home/dashboard?project=cody-dev)

### rctest.sourcegraph.com

This deployment is a [managed instance](../../../../cloud/index.md) used by the Cloud team to test release candidate images into.

- [GCP project](https://console.cloud.google.com/home/dashboard?project=src-51df2b4222042ecd2ff9)
- [Infrastructure configuration](https://github.com/sourcegraph/cloud/tree/main/environments/prod/deployments/src-96ed006bb45d673944e4)
- [Operations](https://github.com/sourcegraph/cloud/blob/main/environments/prod/deployments/src-175b55452764019c9455/dashboard.md)
