# Deploying a code change to Sourcegraph Cloud

_Developers should rarely need to perform these steps since
we have tooling to ensure that code change merged to **main**
are automatically deployed_

To learn more about the continuous delivery process for Sourcegraph
Cloud, visit the [deployments](../../dev/process/deployments/index.md) documentation.

> NOTE: These docs are most relevant during a **codefreeze** or if the continuous delivery
> pipeline is not working.

- [Deploying a code change to Sourcegraph Cloud](#deploying-a-code-change-to-sourcegraph-cloud)
  - [Assumptions](#assumptions)
  - [Manually Deploying an image to Cloud](#manually-deploying-an-image-to-cloud)
  - [Large releases to Cloud (Rollup releases)](#large-releases-to-cloud-rollup-releases)

### Assumptions

In order to deploy a code change to cloud, an image needs to exist
that has the code change. CI builds images that are merged to main
**and** pass all tests.

In extreme circumstances, you can follow the steps [here](../../dev/process/deployments/testing.md#building-docker-images-for-a-specific-branch)
to build an image that bypasses tests.

### Manually deploying an image to Cloud

All changes deployed to Cloud should be staged and tested in `preprod` first before releasing to production.

1. Find the image by either going to the [buildkite CI logs](https://buildkite.com/sourcegraph/sourcegraph) on [Sourcegraph](https://github.com/sourcegraph/sourcegraph) or searching [Dockerhub](https://hub.docker.com/u/sourcegraph) for the correct tag.
1. The Sourcegraph tag format is `[build_number]_[date]_[short git SHA1]`

1. Make the relevant image changes to the YAML files in the [cloud repo](https://github.com/sourcegraph/deploy-sourcegraph-cloud)

   - Typically, the image will need to be updated in an `deployment` or `statefulset` file

1. Create a pull request against the `preprod` branch of the cloud repo
1. Request a review from the cloud-devops github team (preferable) or

   - another member of the Cloud organization.
   - Note: _1 approval is required before merging_

1. Merge the pull request
1. (Optional) View the CI run on the branch to ensure CI successfully rolls out the change.
1. Once deployed, verify change is live and successful in [preprod](https://preview.sgdev.dev)

Changes deployed to `preprod` will be automatically released to production on a [fixed schedule](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/.github/workflows/release-preprod.yaml#L4). If a change is urgent and needs to be deployed to production quickly:

1. Create a branch off the `release` branch of the cloud repo
1. Create a pull request against the `release` branch of the cloud repo
1. Request a review from the cloud-devops github team (preferable) or

   - another member of the Cloud organization.
   - Note: _1 approval is required before merging_

1. Merge the pull request
1. Once built and deployed verify change was successful
1. Then create a branch off `preprod`
1. Cherry-pick your changes onto this branch
1. Submit a PR to merge those changes to `preprod`. Note in the PR that the changes are already live on Cloud.

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
