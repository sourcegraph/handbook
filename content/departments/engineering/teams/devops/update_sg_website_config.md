# How to make updates to sourcegraph.com config

## Why can't I edit the page through the site-admin page anymore

Site configuration for sourcegraph.com is split into two files. One contains non-sensitive configurations and the other production secrets such as GitHub OAuth credentials.

## Making changes to the website configuration

### Non-sensitive configurations

Non-sensitive configurations and env vars are stored in an [overlay](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/deploy-sourcegraph-cloud/-/blob/overlays/prod/frontend/files/site.json).
Other config files can be found in the [overlay folder](https://sourcegraph.sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph-cloud%24+file:%5Eoverlays/prod/frontend&patternType=literal).

To update the non-sensitive configuration, follow these steps:

1. After your PR is approved, merge it with the "release" branch.
1. Wait until the Buildkite [build](https://buildkite.com/sourcegraph/deploy-sourcegraph-cloud/builds) is green, so your changes are successfully deployed.
1. Your changes will be result in the frontend being redeployed with a unique hash for the configuration change. See [ConfigMapGeneration](https://github.com/kubernetes-sigs/kustomize/blob/master/examples/configGeneration.md#configmap-generation-and-rolling-updates)

1. Go to https://sourcegraph.com/site-admin/configuration to confirm that the non-sensitive configuration changes are live.

### Sensitive configurations

Our site configuration contains many secrets like OAuth credentials. It is [stored in GSM](https://console.cloud.google.com/security/secret-manager/secret/SITE_JSON/versions?project=sourcegraph-dev) in the `sourcegraph-dev` project. The secrets are synced to the cluster using [Terraform](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/gsm-secrets.tf), and is managed in the [dotcom workspace](https://app.terraform.io/app/sourcegraph/workspaces/dotcom) on Terraform Cloud.

> [!NOTE] syncing new secret versions requires access to Terraform Cloud. You can request access via Entitle, use "Terraform Cloud: Infrastructure - Core Services - Member". Or, kindly request someone from #discuss-core-services or #discuss-security to run the workspace for you.

To update secrets in site config for our Dotcom deployment, follow these steps:

1. In GSM, copy the contents of the latest version of the secret and make the necessary changes.
1. Create a new secret version with the updated site configuration. Disable all previous versions.
1. Start a new run in the [dotcom workspace](https://app.terraform.io/app/sourcegraph/workspaces/dotcom)
   1. Click **Actions** &rarr; **Start a new run**
   1. Specify that the reason for running is to sync secrets
   1. Select the run type **Plan and apply (standard)**
   1. Press **Start run**
1. Request access to the permissions set **Sourcegraph Dot Com projects** using Entitle
1. Once the Terraform run has applied and the Entitle request has been approved, make sure you are connected to the Dotcom cluster with `kubectl config current-context`, then run the following commands:
   ```shell
   kubectl rollout restart -n prod deployments/sourcegraph-frontend
   kubectl rollout restart -n prod deployments/sourcegraph-frontend-internal
   ```

### External services connections

External service connections are handled through the sourcegraph.com UI. The only credentials managed through GSM are for the Dotcom default GitHub and GitLab connections. To rotate those tokens follow these steps:

1. Generate a new API token from the code host. Make sure it's properly documented in 1password.
1. On the external service configuration, replace `REDACTED` by the new token and save changes.
1. Ensure that the new token works.
1. Revoke the old token from the code host.

### Note:

Changes to the notices section can be merged by the author without explicit approval from the DevEx team.
