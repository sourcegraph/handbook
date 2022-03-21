# How to make updates to sourcegraph.com config

## Why can't I edit the page through the site-admin page anymore

Site configuration for sourcegraph.com is split into two files. One contains non-sensitive configurations and the other production secrets such as GitHub OAuth credentials.

## Making changes to the website configuration

### Non-sensitive configurations

Non-sensitve configurations are stored in a [ConfigMap](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/frontend/non-sensitive-site-config.ConfigMap.yaml).

To update the non-sensitive configuration, follow these steps:

1. After your PR is approved, merge it with the "release" branch.
2. Wait until the Buildkite [build](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud/builds) is green, so your changes are successfully deployed. If you already have access to K8s and to Sourcegraph Cloud, jump to step 5.
3. Confirm that you have access to Sourcegraph Cloud on the Google Cloud Platform (GCP). Go to this [link](https://console.cloud.google.com/kubernetes/list/overview?project=sourcegraph-dev) and verify that you can see a cluster named "cloud".
4. Setup your access to Kubernetes if you haven't done this yet. See the instructions [here](../../process/deployments/kubernetes.md).
5. If you haven't done this yet, configure `kubectl` to point to the right cluster by running: `gcloud container clusters get-credentials cloud --zone us-central1-f --project sourcegraph-dev`. Or just run `kubectl config get-contexts` to check if you are in the Cloud cluster.
6. Finally, run `kubectl rollout restart deployment sourcegraph-frontend -n prod` to restart the frontend.
7. Run `kubectl get pods -n prod -l app=sourcegraph-frontend` and check if the new pods are running.
8. Go to https://sourcegraph.com/site-admin/configuration to confirm that the non-sensitive configuration changes are live.

### Sensitive configurations

Our site configuration contains many secrets like OAuth credentials. It is [stored in GSM](https://console.cloud.google.com/security/secret-manager/secret/SITE_JSON/versions?project=sourcegraph-dev) in the `sourcegraph-dev` project. To update secrets in site config for our Cloud deployment, follow these steps:

1. In GSM, copy the contents of the latest version of the secret and make the necessary changes.
1. Create a new secret version with the updated site configuration. Disable all previous versions.
1. Run `terraform plan` in `sourcegraph/infrastructure/cloud`. You should see only the `frontend-secrets` resource being changed.
1. Run `terraform apply` to apply the changes in our Cloud cluster
1. Run `kubectl rollout restart -n prod deployments/sourcegraph-frontend` and `kubectl rollout restart -n prod deployments/sourcegraph-frontend-internal`. Make sure you are connected to the Cloud cluster with `kubectl config current-context`.

### External services connections

External service connections are handled through the sourcegraph.com UI. The only credentials managed through GSM are for the Cloud default GitHub and GitLab connections. To rotate those tokens follow these steps:

1. Generate a new API token from the code host. Make sure it's properly documented in 1password.
1. On the external service configuration, replace `REDACTED` by the new token and save changes.
1. Ensure that the new token works.
1. Revoke the old token from the code host.

### Note:

Changes to the notices section can be merged by the author without explicit approval from the DevOps team.
