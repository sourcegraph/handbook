# Deployments

We maintain multiple [instances](instances.md) of Sourcegraph:

- [Instances](./instances.md): information about our different instances
  - [sourcegraph.com](instances.md#sourcegraph-com) is our production deployment for open source code.
  - [sourcegraph.sgdev.org](instances.md#sourcegraph-sgdev-org) is our private deployment of Sourcegraph that contains some of our private code.
  - [k8s.sgdev.org](instances.md#k8s-sgdev-org) is a dogfood deployment that replicates the scale of our largest customers. Note that this also contains all of our private code. - [Managed instances](../distribution/managed/index.md) are deployments of Sourcegraph we manage for customers.
  - [demo.sourcegraph.com](instances.md#demo-sourcegraph-com) is a managed instance used for CE demos.
  - [devmanaged.sourcegraph.com](instances.md#devmanaged-sourcegraph-com) is a managed instance used for managed instances development.

Learn more about how these work in:

- [Deployment basics](#deployment-basics)
  - [Kubernetes](./kubernetes.md): setting up access, tips, and more
  - [Security](./security.md): TLS configuration,
  - [Testing](./testing.md): deploying test instances of Sourcegraph
  - [PostgresSQL](./postgresql.md): Tips for working with Postgres and our deployments]
  - [Playbooks](./playbooks.md): how-to guides for common tasks
  - [Images](#images)
  - [Renovate](#renovate)
  - [Infrastructure](#infrastructure)
  - [Debugging](./debugging.md)
  - [deploy-sourcegraph](#deploy-sourcegraph)
    - [Merging changes from deploy-sourcegraph](#merging-changes-from-deploy-sourcegraph)
  - [Relationship between the repositories](#relationship-between-the-repositories)
    - [Merging upstream `deploy-sourcegraph` into `deploy-sourcegraph-dot-com`](#merging-upstream-deploy-sourcegraph-into-deploy-sourcegraph-dot-com)
  - [Azure DevOps](azure_devops.md)

## Deployment basics

Changes to `sourcegraph/sourcegraph` are automatically built as [images](#images), which are then:

- [Automatically pushed to `deploy-sourcegraph`](#deploy-sourcegraph), which runs deployment checks on the new images and merges the changes. Updates for `deploy-sourcegraph` are performed upon CI passing in `sourcegraph/sourcegraph@main`.
  - `sourcegraph-bot` will mention your pull request in the `deploy-sourcegraph` change - you will be able to find a link in your pull request.
- `deploy-sourcegraph` changes are [automatically deployed in k8s.sgdev.org](instances.md#k8s-sgdev-org), our Kubernetes dogfooding environment.
  - `sourcegraph-bot` will mention the relevant `deploy-sourcegraph` pull request in the `deploy-sourcegraph-dogfood-k8s-2` change.
- [Sourcegraph Cloud](instances.md#sourcegraph-com) will eventually pick up the same changes on a schedule via [Renovate](#renovate)

### Images

Each Sourcegraph service is provided as a Docker image. Every commit to `main` in [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph) pushes updated Docker images for all of our services to [Docker Hub](https://hub.docker.com/u/sourcegraph/) as part of our [CI pipeline](https://buildkite.com/sourcegraph/sourcegraph) (i.e. if CI is green, then Docker images have been pushed).

For pushing custom images, refer to [building Docker images for specific branches](#building-docker-images-for-a-specific-branch).

### Renovate

Renovate is a tool for updating dependencies. [`deploy-sourcegraph-*`](#deploy-sourcegraph) repositories with Renovate configured check for updated Docker images about every hour. If it finds new Docker images then it opens and merges a PR ([Sourcegraph.com example](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Aapp%2Frenovate)) to update the image tags in the deployment configuration. This is usually accompanied by a CI job that deploys the updated images to the appropriate deployment.

### Infrastructure

The cloud resources (including clusters, DNS configuration, etc.) on which are deployments run should be configured in the [infrastructure repository](https://github.com/sourcegraph/infrastructure), even though Kubernetes deployments are managed by various `deploy-sourcegraph-*` repositories. For information about how our infrastructure is organized, refer to [Environments](../environments.md).

## deploy-sourcegraph

![Renovate downstream](https://github.com/sourcegraph/sourcegraph/workflows/Renovate%20downstream/badge.svg) [![master build status](https://badge.buildkite.com/018ed23ed79d7297e7dd109b745597c58d875323fb06e81786.svg?branch=master)](https://buildkite.com/sourcegraph/deploy-sourcegraph) ![Dispatch update](https://github.com/sourcegraph/deploy-sourcegraph/workflows/Dispatch%20update/badge.svg)

Sourcegraph Kubernetes deployments typically start off as [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) forks. Learn more about how we advise customers to deploy Sourcegraph in Kubernetes in our [admin installation documentation](https://docs.sourcegraph.com/admin/install/kubernetes).

There is automation in place to drive automatic updates for certain deployments from `deploy-sourcegraph`:

- the ["Renovate downstream"](https://github.com/sourcegraph/sourcegraph/actions?query=workflow%3A%22Renovate+downstream%22) workflow performs a manual [Renovate run](#renovate) on `deploy-sourcegraph` as soon as [Sourcegraph images are published](#images).
- the ["Dispatch Update"](https://github.com/sourcegraph/deploy-sourcegraph/actions?query=workflow%3A%22Dispatch+update%22) workflow notifies deployments like [k8s.sgdev.org](instances.md#k8s-sgdev-org) to perform a merge from `deploy-sourcegraph`.

For documentation about developing `deploy-sourcegraph` and cutting releases, refer to the [repository's `README.dev.md`](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/README.dev.md).

### Merging changes from [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph)

We have two Sourcegraph Kubernetes cluster installations that we manage ourselves:

- [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)
- [deploy-sourcegraph-dogfood-k8s-2](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s-2)

This section describes how to merge changes from [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph)
(referred to as upstream) into `deploy-sourcegraph-dot-com`. The `deploy-sourcegraph-dogfood-k8s-2` configuration is [automatically updated with the latest `deploy-sourcegraph` changes](instances.md#k8s-sgdev-org).

The process is similar to the [process](https://docs.sourcegraph.com/admin/install/kubernetes/configure#fork-this-repository)
we recommend our customers use to merge changes from upstream. The differences in process originate from the dual purpose
of these two installations: they are genuine installations used by us and outside users (in the case of dot-com) and in addition
to that they are test installations for new changes in code and in deployment. For that reason they are not pinned down to a version
and the docker images are automatically updated to the latest builds.

> Note: What is said about `deploy-sourcegraph-dot-com` also applies to `deploy-sourcegraph-dogfood-k8s` unless otherwise specified.

## Relationship between the repositories

1. [`deploy-sourcegraph-dot-com@master`](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master) strictly tracks the upstream https://github.com/sourcegraph/deploy-sourcegraph/tree/master.
1. [`deploy-sourcegraph-dot-com@release`](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release) _only_ contains the customizations required to deploy/document sourcegraph.com from the base deployment of Sourcegraph.
   - This is the default branch for this repository, since all customizations to sourcegraph.com should be merged into this branch (like we tell our customers to).

These steps ensure that the diff between [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com) and [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) is as small as possible so that the changes are easy to review.

In order to mimic the same workflow that we tell our customers to follow:

- Customizations / documentation changes that **apply to all customers (not just sourcegraph.com)** should be:

  1. Merged into [`deploy-sourcegraph@master`](https://github.com/sourcegraph/deploy-sourcegraph/tree/master) (note that this will also [automatically update k8s.sgdev.org](instances.md#k8s-sgdev-org))
  1. Pulled into [`deploy-sourcegraph-dot-com@master`](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master):
  <pre>
  git checkout master
  git fetch upstream
  git merge upstream/master
  </pre>

  1. Merged into [`deploy-sourcegraph-dot-com@release`](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release) by merging from[`deploy-sourcegraph-dot-com@master`](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/master)—see [merging upstream](#merging-upstream-deploy-sourcegraph-into-deploy-sourcegraph-dot-com) for more details.

- Customizations / documentation changes that **apply to only sourcegraph.com** can be simply merged into the [`deploy-sourcegraph-dot-com@release`](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release) branch.

### Merging upstream `deploy-sourcegraph` into `deploy-sourcegraph-dot-com`

1. Clone this repository and `cd` into it.
1. If you have not already, `git remote add upstream https://github.com/sourcegraph/deploy-sourcegraph`
1. `git checkout master && git pull upstream/master`
   - `master` of this repository strictly tracks `master` of `deploy-sourcegraph`, so there should be no merge conflicts.
   - If there are any merge conflicts in this step, you may `git checkout master && git rev-parse HEAD && git reset --hard upstream/master && git push -f origin master` which should always be 100% safe to do.
1. `git checkout release && git checkout -B merge_upstream` to create a branch where you will perform the merge.
1. `git merge upstream/master` to merge `deploy-sourcegraph@master` into `merge_upstream`
   - This will give you conflicts which you should address manually:
     - On docker image tags conflicts (`image:`), choose the `insiders` tag to allow renovate to deploy new builds.
     - On script conflicts (`create-new-cluster.sh`, `kubectl-apply-all.sh`, etc.), look for comments like `This is a custom script for dot-com` that indicate you should choose the current state over incoming changes.
   - If new services have been added (these generally show up as created files in `base/`), make sure that:
     - `namespace: prod` is applied to all new resource metadata.
   - Use `kubectl apply --dry-run --validate --recursive -f base/` to validate your work.
   - **Before you commit**, ensure the commit message indicates which files had conflicts for reviewers to look at.
     - Using the default merge commit message, you can copy or uncomment the lines following `Conflicts`.
1. Send a PR to this repository for merging `merge_upstream` into `release`.
1. Reviewers should review:
   - The conflicting files.
   - If there are any risks associated with merging that should be watched out for / addressed,
     such as [documented manual migrations](https://docs.sourcegraph.com/admin/updates/kubernetes)
     that will need to be performed as part of merging the PR.
1. If there are any manual migrations needed, coordinate with the distribution team and apply those first.
   - For example, new services that require elevated permissions might not be deployed by Buildkite - this must be done manually.
1. Once approved, **squash merge your PR so it can be easily reverted if needed**.
   - In general, it might be a good idea to avoid doing this at the end of a PDT workday - if something goes wrong, it is easier to get help if other people are around.
1. Watch CI, which will deploy the change automatically.
1. Check the deployment is healthy afterwards (`kubectl get pods` should show all healthy, searching should work).
