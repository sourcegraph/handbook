# Deploying a code change to DotCom

_Developers should rarely need to perform these steps since
we have tooling to ensure that code change merged to **release**
are automatically deployed_

To learn more about the continuous delivery process for DotCom, visit the [deployments](../../dev/process/deployments/index.md) documentation.

> [!NOTE] These docs are most relevant during a **codefreeze** or if the continuous delivery
> pipeline is not working.

- [Deploying a code change to DotCom](#deploying-a-code-change-to-dotcom)
  - [Assumptions](#assumptions)
  - [Manually Deploying an image to DotCom](#manually-deploying-an-image-to-dotcom)
  - [Large releases to DotCom (Rollup releases)](#large-releases-to-dotcom-rollup-releases)

### Assumptions

In order to deploy a code change to DotCom, an image needs to exist
that has the code change. CI builds images that are merged to main
**and** pass all tests.

In extreme circumstances, you can follow the steps [here](../../dev/process/deployments/testing.md#building-docker-images-for-a-specific-branch)
to build an image that bypasses tests.

### Manually deploying an image to DotCom

In case an image needs to be deployed faster than the daily release cycle allows, follow these steps:

1. Find the image by either going to the [buildkite CI logs](https://buildkite.com/sourcegraph/sourcegraph) on [Sourcegraph](https://github.com/sourcegraph/sourcegraph) or searching [Dockerhub](https://hub.docker.com/u/sourcegraph) for the correct tag.
1. The Sourcegraph tag format is `[build_number]_[date]_[short git SHA1]`
1. Create a branch off the `release` branch of the [DotCom repo](https://github.com/sourcegraph/deploy-sourcegraph-cloud)
1. Make the relevant image changes in the YAML files

   - Typically, the image will need to be updated in a `Deployment` or `StatefulSet` file

1. Create a pull request
1. Request a review from the devinfra GitHub team (preferable) or another member of the engineering department.

   - Note: _1 approval is required before merging_

1. Merge the pull request
1. Once built and deployed verify change was successful
