# Deployments

For a complete list of Sourcegraph instances we manage, see our [instances documentation](instances.md).

- [Deployments](#deployments)
  - [Deployment basics](#deployment-basics)
    - [Images](#images)
    - [Renovate](#renovate)
    - [ArgoCD](#argocd)
    - [Infrastructure](#infrastructure)
  - [deploy-sourcegraph](#deploy-sourcegraph)
    - [Merging changes from deploy-sourcegraph](#merging-changes-from-deploy-sourcegraph)
  - [Relationship between deploy-sourcegraph repositories](#relationship-between-deploy-sourcegraph-repositories)
    - [Merging upstream `deploy-sourcegraph` into `deploy-sourcegraph` forks](#merging-upstream-deploy-sourcegraph-into-deploy-sourcegraph-forks)
  - [Sourcegraph Cloud](#sourcegraph-cloud)
    - [Continuous Deployment Process](#continuous-deployment-process)
  - [Deployment observability](#deployment-observability)
    - [Deployment traces](#deployment-traces)

Additional resources:

- [Playbooks](./playbooks.md)
- [Azure DevOps](./azure_devops.md)
- [Testing](./testing.md)
- [Security](./security.md)

## Deployment basics

Changes to [the main `sourcegraph/sourcegraph` repository](https://github.com/sourcegraph/sourcegraph) are automatically built as [images](#images).

- [Sourcegraph Cloud](instances.md#sourcegraph-cloud) will eventually pick up the same changes on a schedule via [Renovate](#renovate). Changes will first be deployed to [preprod](https://preview.sgdev.dev) and eventually released to [production](https://sourcegraph.com/search)
- [k8s.sgdev.org](instances.md#k8s-sgdev-org) will deploy the changes via [ArgoCD](#argocd)

### Images

Each Sourcegraph service is provided as a Docker image. Every commit to `main` in [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph) pushes updated Docker images for all of our services to [Docker Hub](https://hub.docker.com/u/sourcegraph/) as part of our [CI pipeline](https://buildkite.com/sourcegraph/sourcegraph) (i.e. if CI is green, then Docker images have been pushed). Images are first built as "candidate" images that are pushed to GCR to with the tag format `<commit-hash>_<build-number>_candidate`. The pipeline then runs a series of tests and checks against the images. If all pipeline steps pass the images are "promoted" and pushed to DockerHub with the tag format `<build-number>_<date>_<commit-hash>`. These are used by [Sourcegraph Cloud](instances.md#sourcegraph-cloud).

When [a new semver release](../releases/index.md) is cut the pipelines, will build a release image with the same tag as the latest [release version](https://github.com/sourcegraph/sourcegraph/tags) as well. These are used by customer deployments.

For pushing custom images, refer to [building Docker images for specific branches](#building-docker-images-for-a-specific-branch).

### Renovate

Renovate is a tool for updating dependencies. [`deploy-sourcegraph-*`](#deploy-sourcegraph) repositories with Renovate configured check for updated Docker images about every hour. If it finds new Docker images then it opens and merges a PR ([Sourcegraph.com example](https://github.com/sourcegraph/deploy-sourcegraph-cloud/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Aapp%2Frenovate)) to update the image tags in the deployment configuration. This is usually accompanied by a CI job that deploys the updated images to the appropriate deployment.

Renovate configurations are committed in their respective [`deploy-sourcegraph-*`](#deploy-sourcegraph) repositories as `renovate.json5`.

Renovate is not behaving as expected? Visit [renovate dashboard](https://app.renovatebot.com/dashboard) and select the target repo to inspect the job logs.

### ArgoCD

ArgoCD is a continuous delivery tool for Kubernetes applications.
Sourcegraph's ArgoCD instance is available at [argocd.sgdev.org](https://argocd.sgdev.org/).

ArgoCD currently handles deployments for

- [k8s.sgdev.org](instances.md#k8s-sgdev-org).
- [gitlab.sgdev.org](../../tools/infrastructure/index.md#gitlab)

### Infrastructure

The cloud resources (including clusters, DNS configuration, etc.) on which are deployments run should be configured in the [infrastructure repository](https://github.com/sourcegraph/infrastructure), even though Kubernetes deployments are managed by various `deploy-sourcegraph-*` repositories. For information about how our infrastructure is organized, refer to [Infrastructure](../../tools/infrastructure/index.md).

## deploy-sourcegraph

Sourcegraph Kubernetes deployments typically start off as [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) forks. Learn more about how we advise customers to deploy Sourcegraph in Kubernetes in our [admin installation documentation](https://docs.sourcegraph.com/admin/install/kubernetes).

There is automation in place to drive automatic updates for certain deployments from `deploy-sourcegraph`:

- [`deploy-sourcegraph-cloud`](https://github.com/sourcegraph/deploy-sourcegraph-cloud) utilizies an [Buildkite pipeline](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/.buildkite/pipeline.yaml#L27:L33) to deploy applications automatically. On commits, including those from Renovate, this pipeline runs [`kubectl-apply-all.sh`](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/kubectl-apply-all.sh) roll out the new images.

For documentation about developing `deploy-sourcegraph` and cutting releases, refer to the [repository's `README.dev.md`](https://github.com/sourcegraph/deploy-sourcegraph/blob/master/README.dev.md).

### Merging changes from [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph)

We have three Sourcegraph Kubernetes cluster installations that we manage ourselves:

- [deploy-sourcegraph-cloud@preprod](https://github.com/sourcegraph/deploy-sourcegraph-cloud/tree/preprod)
- [deploy-sourcegraph-cloud@release](https://github.com/sourcegraph/deploy-sourcegraph-cloud/tree/release)
- [deploy-sourcegraph-dogfood-k8s](https://github.com/sourcegraph/deploy-sourcegraph-dogfood-k8s)

This section describes how to merge changes from [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph)
(referred to as upstream) into a fork. The `deploy-sourcegraph-dogfood-k8s` configuration is [automatically updated with the latest `deploy-sourcegraph` changes](instances.md#k8s-sgdev-org).

The process is similar to the [process](https://docs.sourcegraph.com/admin/install/kubernetes/configure#fork-this-repository)
we recommend our customers use to merge changes from upstream. The differences in process originate from the dual purpose
of these two installations: they are genuine installations used by us and outside users and in addition
to that they are test installations for new changes in code and in deployment. For that reason they are not pinned down to a version
and the docker images are automatically updated to the latest builds.

## Relationship between deploy-sourcegraph repositories

These steps ensure that the diff between a `deploy-sourcegraph` fork and [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph) is as small as possible so that the changes are easy to review.

In order to mimic the same workflow that we tell our customers to follow:

- Customizations / documentation changes that **apply to all customers** should be merged into [`deploy-sourcegraph@master`](https://github.com/sourcegraph/deploy-sourcegraph/tree/master) (note that this will also [automatically update k8s.sgdev.org](instances.md#k8s-sgdev-org))

- Customizations / documentation changes that **apply to only sourcegraph.com** can be simply merged into the [`deploy-sourcegraph-cloud@preprod`](https://github.com/sourcegraph/deploy-sourcegraph-cloud/tree/preprod) branch.

### Merging upstream `deploy-sourcegraph` into `deploy-sourcegraph` forks

1. Clone your fork or create a new fork and `cd` into it.
1. If you have not already, `git remote add upstream https://github.com/sourcegraph/deploy-sourcegraph`
1. `git checkout master && git pull upstream/master`
   - `master` of this repository strictly tracks `master` of `deploy-sourcegraph`, so there should be no merge conflicts.
   - If there are any merge conflicts in this step, you may `git checkout master && git rev-parse HEAD && git reset --hard upstream/master && git push -f origin master` which should always be 100% safe to do.
1. `git checkout release && git checkout -B merge_upstream` to create a branch where you will perform the merge.
1. `git merge upstream/master` to merge `deploy-sourcegraph@master` into `merge_upstream`
   - This will give you conflicts which you should address manually:
     - On docker image tags conflicts (`image:`), choose the `insiders` tag to allow renovate to deploy new builds.
   - If new services have been added (these generally show up as created files in `base/`), make sure that:
     - `namespace: prod` is applied to all new resource metadata.
   - Use `kubectl apply --dry-run --validate --recursive -f base/` to validate your work.
   - **Before you commit**, ensure the commit message indicates which files had conflicts for reviewers to look at.
     - Using the default merge commit message, you can copy or uncomment the lines following `Conflicts`.
1. Send a PR to this repository for merging `merge_upstream`.
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

## Sourcegraph Cloud

As [Sourcegraph Cloud](instances.md#sourcegraph-cloud) has matured into a core product its needs have diverged from the base `deploy-sourcegraph` repo it initially was a fork of. It no longer maintains `deploy-sourcegraph` as a remote and infrastructure and deployment changes are now manually merged in as-needed by the [Cloud DevOps](../../../teams/devops/index.md) team.

Similarly, the code-release process for Sourcegraph Cloud has changed. Unlike customer instances, Sourcegraph Cloud operates a continuous release cycle and code changes are deployed multiple times a day. To help facilitate this rapid release cycle while still maintaining operation stability, a [preprod environment](../../../teams/devops/preprod.md) has been integrated into the workflow that closely mirrors the deployment of Sourcegraph Cloud.

### Continuous Deployment Process

Code committed to the `sourcegraph/sourcegraph@main` repo will automatically built and deployed to preprod within 10 minutes where a series of smoke tests will be performed. If successful, the images will be promoted and automatically promoted to production within a few hours.In the normal use-case, the deployment process should be invisible. If a manual or urgent change is needed, refer to the [Deploying a code change to Sourcegraph Cloud](../../../teams/devops/deploy-code-change.md) document.

The automatic release process works as follows:

1. Code changes are committed to the mono repo `sourcegraph/sourcegraph@main` following standard procedure
1. On commit, Buildkite will build candidate images
1. Renovate will create a Pull Request to the `preprod` branch of the `sourcegraph/deploy-sourcegraph-cloud` repository with the new container images
1. The PR will be automatically merged by Renovate
1. On commit to the `preprod` branch, another Buildkite [pipeline](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/preprod/.buildkite/pipeline.yaml#L33:L40) will deploy the changes
1. Once deployed, a series of [smoke-tests](https://github.com/sourcegraph/deploy-sourcegraph-cloud/tree/release/smoke-tests) will execute against the preprod environment to determine if the changes were successful
1. A [scheduled action](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/.github/workflows/release-preprod.yaml) will attempt to create a PR to merge `preprod` to `release` on a fixed schedule. This PR will be merged in if `preprod` is stable and the smoke tests pass
1. The PR is merged and a final [Buildkite](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/.buildkite/pipeline.yaml#L37:L43) pipeline is triggered to deploy the changes to production

All infrastructure changes should first be branched off `preprod` and merged into the `preprod` environment first before being manually merged (via PR) to `release`.

## Deployment observability

> NOTE: This section is a work in progres!

### Deployment traces

Traces are emitted by [`deployment-notifier`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/enterprise/dev/deployment-notifier/trace.go) to [HoneyComb.io](https://www.honeycomb.io/) when a deployment happens. The generated traces are structured roughly as follows:

```none
deploy/env ---------
  pr/1 -------------
  -------- service/1
  -------- service/2
      pr/2 ---------
      ---- service/1
      ---- service/2
                 ...
```

The following fields are important in each event:

- `service.name` denotes the type of the span (`deploy/$env`, `pull_request`, `service`)
- `name` denotes an identifying string for the span in the context of `service.name` (e.g. pull request number, Sourcegraph service name)
- `environment` denotes the deploy environment the span is related to (e.g. `preprod`, `cloud`)

Based on these traces, we can create dashboards to monitor the metrics related to how long changes take to roll out from the time a PR is merged, to each service in each environment.

You can see our current dashboards in Honeycomb: [Deployments](https://ui.honeycomb.io/sourcegraph/board/ev4yWqP5h3u/Deployments)

This tooling is operated by the [DevExp team](../../../teams/dev-experience/index.md).
