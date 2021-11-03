# How to make updates to sourcegraph.com

## Why can't I edit the page through the site-admin page anymore

Site configuration for sourcegraph.com is split into two files. One contains non-sensitive configurations and the other production secrets such as GitHub OAuth credentials.

## Making changes to the website configuration

### Non-sensitive configurations

Non-sensitve configurations are stored in a [ConfigMap](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/base/frontend/non-sensitive-site-config.ConfigMap.yaml) and are updated through our standard git flow.

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

Changes to the notices section can be merged by the author without explicit approval from the Distribution team.
