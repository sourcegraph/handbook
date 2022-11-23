# Terraform Cloud

Sourcegraph uses Terraform Cloud to manage the deployment of cloud infrastructure on multiple
platforms.

In the majority of cases, Terraform Cloud should be transparent to developers: the main change to
our default workflow is that for resources managed by Terraform Cloud, you will no longer be
able to run `terraform apply` locally on your laptop. Instead:

1. Open a pull request on a branch with your intended changes
2. Terraform Cloud should run a `terraform plan` action and post the results as a GitHub status check.
   You can also still run `terraform plan` locally as before (although the build will now occur in
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

# Migrating to Terraform Cloud

Instructions for migrating a set of Terraform Cloud resources can be found [here][migration]. Migrating
to a Terraform Cloud workspace is easy, but migrating back is slightly more convoluted, so only
migrate if you're certain that you are ready to manage the resources in question with Terraform Cloud.

Look at the configuration of other workspaces, for example the `infrastructure-security` workspace,
to understand some common settings which you might want to apply.

Some recommended settings:

1. In the 'Version control' section of the workspace settings, select `Only trigger runs when files
in specified paths change`, and configure patterns to only trigger when the Terraform files you
   care about are changed.
2. In the same section, also select `Automatic speculative plans`. This enables the GitHub check
   that occurs on opening a pull request.

[migration]: https://developer.hashicorp.com/terraform/tutorials/cloud/cloud-migrate

# Slack integration

Terraform Cloud provides a Slack integration, which is also useful to stay notified of changes that
you or your team care about. You can set up the Slack integration (or other notification methods)
in the Notifications section of the relevant workspace's settings.
