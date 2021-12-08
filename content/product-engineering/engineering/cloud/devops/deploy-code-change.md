# Deploying a code change to Sourcegraph Cloud

_Developers should rarely need to perform these steps since
we have tooling to ensure that code change merged to **main**
are automatically deployed_

These docs are most relevant during a **codefreeze** or if the continuos delivery
pipeline is not working.

## Assumptions

In order to deploy a code change to cloud, an image needs to exist
that has the code change. CI builds images that are merged to main
**and** pass all tests.

In extreme circumstances, you can follow the steps [here](../../deployments/testing.md#building-docker-images-for-a-specific-branch)
to build an image that bypasses tests.

### Deploying the image to Cloud

1. Find the image by either going to the [buildkite CI logs](https://buildkite.com/sourcegraph/sourcegraph) on [Sourcegraph](https://github.com/sourcegraph/sourcegraph) or searching [Dockerhub](https://hub.docker.com/u/sourcegraph) for the correct tag.
1. The Sourcegraph tag format is `[build_number]_[date]_[short git SHA1]`

1. Make the relevant image changes to the YAML files in the [cloud repo](https://github.com/sourcegraph/deploy-sourcegraph-dot-com)

- Typically, the image will be need to be updated in an `deployment` or `statefulset` file

1. Create a pull request against the `release` branch of the cloud repo.
1. Request a review from the cloud-devops github team (preferable) or

- another member of the Cloud organization.
- _In the future, 1 approval may be required before merging_

1. Merge the pull request
1. (Optional) View the CI run on the branch to ensure CI successfully rolls out the change.
