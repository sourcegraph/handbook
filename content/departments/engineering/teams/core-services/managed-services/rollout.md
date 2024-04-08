# MSP Cloud Deploy Rollouts

The Sourcegraph Managed Services Platform supports [GCP Cloud Deploy](https://cloud.google.com/deploy) to provision a delivery pipeline for services. The pipeline can be composed of one or more stages. When a new version of your service is built it is deployed to the first stage of the pipeline and can be manually promoted to the next stage(s).
As such if your service is composed of `development` and `production` environments; new versions can be continuously delivered to `development` and manually promoted to `production` after they have been tested.

## Configuring Rollouts

Configuring rollouts requires making changes to the MSP specifiction for a service and to your CI pipeline which builds and publishes Docker images for your service. For any configuration help reach out in #discuss-core-services.

### MSP Specification

To configure rollouts for a service a top-level `rollout` object defines the stages (environments) and the order through which releases progress. Each service included in the rollout must specify a `deploy.type` of `rollout`.

Below is a minified MSP specification detailing the required configuration to use Cloud Deploy.

```yaml
service:
  id: msp-example
  # ...
build:
  # ...

# Rollout configures how releases should roll out through a set of environments.
rollout:
  # Stages specifies the order and environments through which releases progress.
  stages:
    - environment: development
    - environment: production
  # ServiceAccount is the email address of the service account to provision IAM access to create releases. Can be used to give access to the Service Account used in your CI pipeline
  serviceAccount: sourcegraph-sa@ci-project.iam.gserviceaccount.com

environments:
  - id: development
    projectID: msp-example-development-0000
    category: test
    deploy:
      type: rollout
    # ...

  - id: production
    projectID: msp-example-production-0000
    category: external
    deploy:
      type: rollout
    # ...
```

### CI Configuration

> [!NOTE]
> The recommended CI configuration is subject to change as improvements are made to simplify the process. Any improvements should not break existing configurations

#### Buildkite

In the [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph) monorepo using Buildkite & Bazel the `msp_delivery` Bazel rule can be used.

```bazel
msp_delivery(
    name = "msp_deploy",
    gcp_project = "msp-example-production-0000",
    msp_service_id = "msp-example",
    repository = "us.gcr.io/sourcegraph-dev/msp-example",
)
```

The following must be modifed to match your service:

- `gcp_project`: the GCP `projectID` of the **last** stage of the pipeline
- `msp_service_id`: the `service.id` of your service
- `repository`: the docker image repository where your service images are pushed

The Bazel rule must be specified in the same `BUILD.bazel` file which includes the `oci_push` rule named `candidate_push` for your service.

> [!IMPORTANT]
> When using Bazel + Buildkite the Service Account in the [MSP Specification](#MSP-Specification) must be set to `sourcegraph-aspect-workflow@aspect-dev.iam.gserviceaccount.com`

#### GitHub Action

```yaml
jobs:
  delivery:
    env:
      ARTIFACT_REPOSITORY: us-central1-docker.pkg.dev/sourcegraph-dev/msp-example
      ARTIFACT_HOST: us-central1-docker.pkg.dev
    steps:
      # checkout repo
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      # Compute short sha to use in Docker tag
      - name: Compute short commit SHA
        id: short-sha
        uses: benjlevesque/short-sha@v2.1
      # Authenticate to Google using Workload Identity
      - name: gcloud auth
        uses: google-github-actions/auth@v2
        with:
          # Workload identity should be configured in the `infrastructure` repo
          # See https://github.com/sourcegraph/infrastructure/blob/1a82cd96e84cf329ad5d697d8b349b12bc419ed7/managed-services/sourcegraph-accounts-publishing-pipeline/main.tf for an example
          workload_identity_provider: 'projects/1234567890/locations/global/workloadIdentityPools/msp-example-publishing-provider/providers/msp-example-publishing-provider'
          # Service account must match the service account specified in the MSP rollout specification
          service_account: wi-gh-msp-example-publishing@ci-project.iam.gserviceaccount.com
      # Authenticate to the registry
      - name: gcloud docker auth
        run: gcloud auth configure-docker ${{ env.ARTIFACT_HOST }}
      # Build and push the image using the tag `<short_sha>_<github.run_id>`
      # This tag is used by the rollout
      - name: Build and push images
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: |
            ${{ env.ARTIFACT_REPOSITORY }}:${{ steps.short-sha.outputs.sha }}_${{ github.run_id }}
      # Run the `msp_deploy.sh` script to create a release
      - name: MSP deploy rollout
        working-directory: .github/workflows
        run: |
          export MSP_SERVICE_ID=msp-example
          export GCP_PROJECT=msp-example-production-0000
          export GCP_REGION=us-central1
          export BUILD_NUMBER=${{ github.run_id }}
          export BUILD_AUTHOR=$(echo "${{github.actor}}" | tr "[:upper:]" "[:lower:]")
          export COMMIT=${GITHUB_SHA}
          ./msp_deploy.sh
```

The following must be modifed to match your service:

- `workload_identity_provider`: provider configured in the `infrastructure` repo
- `service_account`: service account configured in the `infrastructure` repo
- `MSP_SERVICE_ID`: the `service.id` of your service
- `GCP_PROJECT`: the GCP `projectID` of the **last** stage of the pipeline

The `msp_deploy.sh` script has the following contents and should be located at `.github/workflows/msp_deploy.sh`

```sh
#!/usr/bin/env bash

set -eux -o pipefail

# Service Specific Parameters
: "${MSP_SERVICE_ID:?"MSP_SERVICE_ID is required"}"
: "${GCP_PROJECT:?"GCP_PROJECT is required"}"
: "${GCP_REGION:?"GCP_REGION is required"}"

# CI Variables
: "${BUILD_NUMBER:?"BUILD_NUMBER is required"}"
: "${COMMIT:?"COMMIT is required"}"
: "${BUILD_AUTHOR:?"BUILD_AUTHOR is required"}"

# Computed Variables
GCP_CLOUDRUN_SKAFFOLD_SOURCE="gs://${GCP_PROJECT}-cloudrun-skaffold/source.tar.gz"
GCP_DELIVERY_PIPELINE="${MSP_SERVICE_ID}-${GCP_REGION}-rollout"
SHORT_SHA="${COMMIT:0:7}"
TAG="${SHORT_SHA}_${BUILD_NUMBER}"
# resource ids must be lower-case letters, numbers, and hyphens,
# with the first character a letter, the last a letter or a number,
# and a 63 character maximum
RELEASE_NAME="deploy-${SHORT_SHA}-${BUILD_NUMBER}"

# Create the Cloud Deploy release
1>&2 gcloud deploy releases create "${RELEASE_NAME}" \
    --project="${GCP_PROJECT}" \
    --region="${GCP_REGION}" \
    --delivery-pipeline="${GCP_DELIVERY_PIPELINE}" \
    --source="${GCP_CLOUDRUN_SKAFFOLD_SOURCE}" \
    --labels="commit=${COMMIT},author=${BUILD_AUTHOR}" \
    --deploy-parameters="customTarget/tag=${TAG}"
```
