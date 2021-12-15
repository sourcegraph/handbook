# Deploying a code change to Sourcegraph Cloud

_Developers should rarely need to perform these steps since
we have tooling to ensure that code change merged to **main**
are automatically deployed_

To learn more about the continuous delivery process for Sourcegraph
Cloud, visit the [deployments](../../process/deployments/index.md) documentation.

> NOTE: These docs are most relevant during a **codefreeze** or if the continuous delivery
> pipeline is not working.

- [Deploying a code change to Sourcegraph Cloud](#deploying-a-code-change-to-sourcegraph-cloud)
  - [Assumptions](#assumptions)
  - [Deploying the image to Cloud](#deploying-the-image-to-cloud)
  - [Large releases to Cloud (Rollup releases)](#large-releases-to-cloud-rollup-releases)

### Assumptions

In order to deploy a code change to cloud, an image needs to exist
that has the code change. CI builds images that are merged to main
**and** pass all tests.

In extreme circumstances, you can follow the steps [here](../../process/deployments/testing.md#building-docker-images-for-a-specific-branch)
to build an image that bypasses tests.

### Deploying the image to Cloud

1. Find the image by either going to the [buildkite CI logs](https://buildkite.com/sourcegraph/sourcegraph) on [Sourcegraph](https://github.com/sourcegraph/sourcegraph) or searching [Dockerhub](https://hub.docker.com/u/sourcegraph) for the correct tag.
1. The Sourcegraph tag format is `[build_number]_[date]_[short git SHA1]`

1. Make the relevant image changes to the YAML files in the [cloud repo](https://github.com/sourcegraph/deploy-sourcegraph-cloud)

   - Typically, the image will be need to be updated in an `deployment` or `statefulset` file

1. Create a pull request against the `release` branch of the cloud repo.
1. Request a review from the cloud-devops github team (preferable) or

   - another member of the Cloud organization.
   - _In the future, 1 approval may be required before merging_

1. Merge the pull request
1. (Optional) View the CI run on the branch to ensure CI successfully rolls out the change.

## Large releases to Cloud (Rollup releases)

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
