# Creating a managed instance

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see [managed instances operations](operations.md).

1. Create a issue with the managed instance template in the `sourcegraph/customer` repository.
1. Create a new GCP project for the instance by adding it to the [`managed_projects` tfvar in the infrastructure repo's `gcp/projects/terraform.tfvars`](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/infrastructure%24%40main+managed_projects+%3D+%7B+:%5B_%5D+%7D&patternType=structural)
   - It will look something like `sourcegraph-managed-$COMPANY = { ... }` - refer to the existing variables for more details
   - Ensure when you run `terraform apply` that you commit and push the `terraform.tfstate` file to github
1. Clone and `cd deploy-sourcegraph-managed/`
1. Set variables:
   - `export VERSION=vMAJOR.MINOR.PATH`
   - `export COMPANY=$COMPANY`
   - `export PROJECT_ID=sourcegraph-managed-$COMPANY`
1. Check out a new branch: `git checkout -b $COMPANY/create-instance`
1. `./util/create-managed-instance.sh $COMPANY/` and **commit the result**. Make sure that the version exists in [deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-docker/tags).
1. Open and edit `deploy-sourcegraph-managed/$COMPANY/gcp-tfstate/gcp-tfstate.tf` according to the TODO comments within, commit the result.
1. Ensure you are using the version of Terraform indicated in `.tool-versions` using `tfenv`
1. In `gcp-tfstate` run `terraform init && terraform apply && git add . && git commit -m 'initialize GCP tfstate bucket'`
1. Open and edit `infrastructure.tf` according to the TODO comments within and commit the result.
1. Open and edit `terraform.tfvars` according to the TODO comments within and commit the result.
1. In `deploy-sourcegraph-managed/$COMPANY` run `./enable-apis.sh`
1. In `deploy-sourcegraph-managed/$COMPANY` run `terraform init && terraform plan && terraform apply`
1. Access the instance over SSH and confirm all containers are healthy ([instructions](operations.md#ssh-access)). You may find `docker ps` reports no containers, that indicates it is still installing Docker, etc. To watch this progress see [debugging startup scripts](operations.md#debugging-startup-scripts), it usually takes <10m.
1. In the infrastructure repository, [create a DNS entry](https://github.com/sourcegraph/infrastructure/blob/main/dns/sourcegraph.managed.tf) that points `$COMPANY.sourcegraph.com` to the `default-global-address` IP (see ["Finding the external load balancer IP"](operations.md#finding-the-external-ips)) and follow the process there to `asdf exec terraform apply` it.
1. Confirm all containers come up healthy (`docker ps` should report them as such)
1. Create a PR for review.
1. Create admin credentials in 1password:
   - Open the 1password [Managed instances vault](https://my.1password.com/vaults/l35e5xtcfsk5suuj4vfj76hqpy/allitems) (ask @stephen, @bill, or @beyang to grant you access)
   - **Add** > **Login** > enter **$COMPANY sourcegraph-admin** as the title
     - **User:** `managed+$COMPANY@sourcegraph.com`
     - **Password:** Change **length** to 40 and turn on symbols and digits > **Save**
1. Access the Sourcegraph web UI ([instructions for port-forwarding](operations.md#port-forwarding-direct-access-to-caddy-jaeger-and-grafana))
1. Set up the initial admin account (for use by the Sourcegraph team only)
   - Email: `managed+$COMPANY@sourcegraph.com` (note `+` sign not `-`)
   - Username: `sourcegraph-admin`
   - Password: Use the password previously created and stored in 1password.
1. Create a token for the account under `/users/sourcegraph-admin/settings/tokens` called `managed-instances` and add it as "token" under the 1password entry for the admin account.
1. Navigate to Grafana and confirm the instance looks healthy.
1. Configure `externalURL` in the site configuration, and use SSH to restart the server (`sudo su`, `shutdown -r`) wait for it to come back up and access it again.
1. In the **global user settings** (not site config), set `"alerts.showPatchUpdates": false`
1. In the GCP web UI under **Network services** > **Load balancers** > select the load balancer > watch the SSL certificate status. It may take some time for it to become active (~1h41m) / for Google to see the DNS change from Cloudflare. Confirm it is active by following ["Access through the GCP load balancer as a user would"](#access-through-the-gcp-load-balancer-as-a-user-would).
1. In the site configuration, configure alerting to go to our #alerts-managed-instances Slack channel, for example (replace `$COMPANY` with the actual company name, and `$WEBHOOK_URL` with the actual webhook URL from 1password **Managed instances** > `#alerts-managed-instances Slack webhook URL`):
   ```
   	"observability.alerts": [
   		{
   			"level": "critical",
   			"notifier": {
   				"type": "slack",
   				"username": "$COMPANY",
   				"url": "$WEBHOOK_URL"
   			}
   		},
   	],
   ```
1. Add an entry for the customer by adding their HubSpot link to the checklist in the [managed instances upgrade issue template](../../../releases/upgrade_managed_issue_template.md).
1. Contact #ce and ask that they generate / provide the relevant license key for the customer's instance, then set it in the site config.

## Giving the customer access

To provide the customer access to the instance:

1. Work with [#ce](../../../../ce/index.md) to ask the customer:
   1. If their instance should be protected by SSO only, or SSO + IP-restricted access. If the latter, what IP addresses / CIDR ranges should be allowed (e.g. the source IPs of their corporate VPN, usually their infrastructure or IT teams can provide this).
   1. Who should be the recipient of the initial site admin account creation link? This will let them configure the admin password, which they will need to store somewhere securely, and is used for them to set up SSO as well as for them to get access if at any point SSO is not working. They can create more password or SSO-based admin accounts later as desired.
1. Create and apply the Terraform change that grants their IP/CIDR ranges access to the instance, or makes it public/SSO-only, by following the [operations guide](operations.md).
1. Prepare the initial admin account for the customer:
   1. Go to `/site-admin/users` and hit "Create user", and fill in the appropriate values.
   1. Copy the generated link and send it to the customer. Managed instances usually won't have email set up, so a link will not be sent automatically.
   1. Go to `/site-admin/users` and promote the created account to site admin.

## Configuring SSO and repositories

Distribution usually hands off to CE at this point, they will schedule a call with the customer (including a distribution member, if needed) to walk the site admin on the customer's side through performing initial setup of the product including adding repos, configuring SSO, and inviting users.
