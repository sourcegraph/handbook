#Terraform Cloud

Sourcegraph uses Terraform Cloud to manage the deployment of cloud infrastructure on multiple
platforms.

In the majority of cases, Terraform Cloud should be transparent to developers: the main change to
our default workflow is that for resources managed by Terraform Cloud, you will no longer be
able to run `terraform apply` locally on your laptop. Instead:

1. Open a pull request on a branch with your intended changes
2. Terraform Cloud should run a `terraform plan` action and post the results as a GitHub status check.
   You can also still run `terraform plan` locally as before (although the plan will now occur in
   the cloud).
3. When approved, merge your changes in.

Terraform Cloud should apply your changes on merge.

# Administration

Details of our Terraform Cloud account, sales contacts, and other administrative information can be
found [here][admin].

[admin]: https://docs.google.com/document/d/14DcNyh9HBH3xxrVB3jc_cBg79fsF72TksSQ9IaHD21c/edit#

# Logging into Terraform Cloud

Access to Terraform Cloud is currently limited to the following teams:

- Cloud
- DevEx
- Security

To access Terraform Cloud, if you are a member of one of these teams, go to your Okta dashboard and
click on the Terraform Cloud tile.

If it's your first login, you might be asked to create a Terraform Cloud account. This is normal –
similar to GitHub, a Terraform Cloud account is separate to access to the organization. Our SSO setup
only grants access to the Sourcegraph Terraform Cloud organization. Create an account and proceed
as normal.

# Creating a new Terraform Cloud workspace

1. Create a new module for your workspace following the example [here][security-module]. The `team_access`
   values can be found [here][tfc-permissions].
1. Request a Terraform Cloud admin to apply the changes in either #cloud or #security.

[security-module]: https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/terraform-cloud/security.tf?L1

# Migrating to Terraform Cloud

To move a folder of Terraform configuration that currently uses the GCS backend:

1. Create a workspace for the folder in the most appropriate file [here][terraform-cloud-folder],
   with `auto_apply` set to `false`. This prevents Terraform Cloud from applying any changes before
   the state has been migrated. See [here][tfc-workspace-creation] for an example of such a change.
   Team permissions are defined [here][tfc-permissions]. 
1. Request a Terraform Cloud admin to apply the changes in either #cloud or #security once they are
   landed.
1. Within the folder that you are looking to migrate, follow the instructions found [here][migration].
1. Once the migration is completed, run a `terraform plan` in the migrated folder to ensure that
   there are no unexpected planned changes.

Migrating to a Terraform Cloud workspace is easy, but migrating back is slightly more convoluted,
so only migrate if you're certain that you are ready to manage the resources in question with
Terraform Cloud.

[terraform-cloud-folder]: https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/tree/terraform-cloud
[tfc-workspace-creation]: https://github.com/sourcegraph/infrastructure/pull/4388
[tfc-permissions]: https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/terraform-cloud/locals.tf
[migration]: https://developer.hashicorp.com/terraform/tutorials/cloud/cloud-migrate

# Slack integration

Terraform Cloud provides a Slack integration, which is also useful to stay notified of changes that
you or your team care about. You can set up the Slack integration (or other notification methods)
in the Notifications section of the relevant workspace's settings.

# OPA policy enforcement

We use Terraform Cloud to scan our IaC. We currently scan Cloud v2-related code through TF Cloud. This is done through [OPA policies](https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/opa) in the `cloud-opa-policy` Policy Set. Every Cloud v2 is automatically added to the Policy Set. The code containing the OPA policies in Rego can be found [here](https://github.com/sourcegraph/infrastructure/tree/main/security/tooling/opa-policies).

# Terraform Cloud state backup

Terraform Cloud workspaces contain all versions of a folder's state – if you delete a workspace, you
also delete all of the previously stored state. Hashicorp doesn't store a backup of workspace or state
data.

In order to have some way of backing up state outside Terraform Cloud in case workspaces are accidentally
destroyed, we have a tool that backs up our Terraform Cloud state into GCS on the completion of runs
in Terraform Cloud. You can read more about it [here][tfc-state-backup].

[tfc-state-backup]: https://github.com/sourcegraph/infrastructure/tree/main/security/terraform/functions-src-code/tfc-state-backup
