# Sourcegraph Cloud Continuous Delivery

This is a brief overview of the CD process for Sourcegraph Cloud (sourcegraph.com).

1. New commits pushed to the [mono repo](https://github.com/sourcegraph/sourcegraph) trigger builds by `BuildKite`. The pipelines are all generated [from code](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@main/-/tree/enterprise/dev/ci). To learn more about the build pipelines and the methodology you can read the documentation on [Continuous Integration](https://docs.sourcegraph.com/dev/background-information/continuous_integration).
    * Docker images are built by [BuildKite](https://buildkite.com/sourcegraph/sourcegraph) on commit to `main`. These images are pushed to [`GCR`](https://console.cloud.google.com/gcr/images/sourcegraph-dev?project=sourcegraph-dev) with the tag format `<commit-hash>_<build-number>_candidate`.
    * Buildkite executes the [`sourcegraph-upgrade`](https://github.com/sourcegraph/sourcegraph/blob/main/.buildkite/vagrant-run.sh) build step in which it spins up a VM to test the build starts correctly.
    * Buildkite executes [puppeteer tests](https://github.com/sourcegraph/sourcegraph/blob/main/enterprise/dev/ci/internal/ci/operations.go#L178) to test front-end behavior.
    * If both test suites pass the images are "promoted" and pushed to DockerHub with the tag format `<build-number>_<date>_<commit-hash>`.
3. [Renovate](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/renovate.json5) watches (["after 8am every weekday and before 9am every weekday"](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/renovate.json5#L53)) DockerHub for new images. When a new image is found on DockerHub it creates a commit to the [yaml bases](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release/base) with the new image hash onto the `release` branch.
4. BuildKite executes an [on-commit pipeline](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/.buildkite/pipeline.yaml#L27:L33) to execute [`kubectl-apply-all.sh`](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/kubectl-apply-all.sh) with the new image hash and deploy them to the production cluster.

[ArgoCD](https://argocd.sourcegraph.com/) watches the cluster and the latest images on DockerHub and verifies that the deployed images are currently the most up to date. Currently ArgoCD is only in watch-only mode and does not deploy images.
