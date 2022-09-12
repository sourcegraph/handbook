# Using OpenID Connect for Site Admin Access

Sourcegraph employees access to managed instances application interface (Web UI) is restricted to essential personnel only. This ensures Sourcegraph is able to help customers troubleshoot issues and deliver a smooth experience. We utilize OpenID Connect to enable Sourcegraph employees access to customer instance to make sure there is an audit trail for every access.

## Enable OIDC for Managed Instance

All internal, trial and paid Managed Instances has enabled OIDC OKTA access in steps:

1. OKTA web application is created via [terraform code](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/modules/terraform-managed-instance-new/security.tf#L13) for each Managed Instance module.
2. OIDC OKTA configuration is added to Managed Instance during [initialisation process](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/.github/workflows/mi_create.yml#L179) from [GSM](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/modules/terraform-managed-instance-new/security.tf#L32).
3. [Sourcegraph employees](#admin-users-on-managed-instance) accounts are created and promoted to site admins for given instance.
4. Every hour configuration is synchronised via [Github Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/.github/workflows/sync_instance_config.yml#L71).

## Admin users on Managed Instance

1. Every instance has added Sourcegraph Admin user during [intialisation](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/7e9066e537b02feb6013585d443fc27514b71a71/util/cmd/mg_init_instance.go#L51) of Managed Instance. This admin user has [username, password and token](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/36db9bb65ec72ffa470752461b82c6999c00b969/util/pkg/config/config.go#L47) stored in Managed Instance GCP Secret Manager. This token is used to access Managed Instance from `mg cli`. For customers, who [not disabled OIDC](#disabling-okta-oidc-on-managed-instance), token is used to impersonate user invoking action on Managed Instance, otherwise action is invoked as Sourcegraph Admin user.

Unless customer explicitly [disabled OIDC on Managed Instance](#disabling-okta-oidc-on-managed-instance)

2. All [Cloud Team members](https://github.com/sourcegraph/infrastructure/blob/main/security/managed-instance-okta/variables.tf#L1)
3. Additonal Customer Engineeger(s) from [CE List](https://github.com/sourcegraph/infrastructure/blob/main/security/managed-instance-okta/variables.tf#L13) added to `config.yaml` via `additionalAdmins` - [sample](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/7e9066e537b02feb6013585d443fc27514b71a71/addepar/config.yaml#L5)

## Disabling OKTA OIDC on Managed Instance

OIDC OKTA access is disabled on instance when explictly asked by customer via configuration flag `disableSourcegraphManagementAccess: true` in `config.yaml`.

## FAQ

### Does it affect the number of seats customers pay for in the license?

Every essential Sourcegraph personnel will effectively be an actual user in the customer instance, so they will be counted toward in the license seat count. However, we allocated addition 10 seats in the license to accommodate the seats used by internal Sourcegraph teammates with Site Admin access.
