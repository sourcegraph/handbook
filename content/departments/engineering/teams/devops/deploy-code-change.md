# Deploying a code change to DotCom

_Developers should rarely need to perform these steps since
we have tooling to ensure that code change merged to **release**
are automatically deployed_

To learn more about the continuous delivery process for DotCom, visit the [deployments](../../dev/process/deployments/index.md) documentation.

> NOTE: These docs are most relevant during a **codefreeze** or if the continuous delivery
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

## Large releases to DotCom (Rollup releases)

These releases should not be different from our normal release process as long as
the below assumptions are true:

- The rollup release does not span a 'MAJOR' release (ie v3.32.0 to v3.34.0) would violate
  our [update policy](https://docs.sourcegraph.com/admin/updates#update-policy) of only
  upgrading one major release at a time.
- There are not a large (>2) number of migrations between the previous version and the
  current version of Sourcegraph. This needs to be manually verified by checking the
  [migrations folder](https://github.com/sourcegraph/sourcegraph/tree/main/migrations) of the Sourcegraph repo. The engineer
  performing the release is responsible for getting the sign-off of the engineers who wrote the migrations.

If the above are true, it is safe to simply update **all** images to the new
release.

Else, releases should be staggered. Either update **all** images to the next 'MAJOR'
release or the first release that contains a questionable migration.
