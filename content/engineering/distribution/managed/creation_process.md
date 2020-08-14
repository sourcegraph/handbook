# Creating a managed instance

Creating a new managed instance involves following the steps below.

1. Ask @stephen or @beyang to create a new GCP project `sourcegraph-managed-$COMPANY` and grant you IAM **Editor** role access.
1. Ask @beyang to enable billing in the GCP project.
1. Create GCP service account credentials:
    - From console.cloud.google.com select the project > **APIs & Services** > **Credentials** > **Create credentials** > **Service account**
    - Service account name: `deploy`
    - Service account description: blank
    - On the **Service account permissions (optional)** page add the **Compute Admin**, **Storage admin**.
    - **Done** > ignore **Grant users access to this service account (optional)** and choose **Done**
    - Select **Edit** (pencil) on the service account we just created
    - **Add key** > **Create new key** > **JSON** > **Create**
1. Upload the service account key and create admin credentials in 1password:
    - Open the 1password [Managed instances vault](https://my.1password.com/vaults/l35e5xtcfsk5suuj4vfj76hqpy/allitems) (ask @stephen, @gonza, or @beyang to grant you access)
    - **Add** > **Document** > enter **$COMPANY service account** as the title > Upload the service account JSON  file previously downloaded > **Save**
    - **Add** > **Password** > enter **$COMPANY sourcegraph-admin** as the title > Change **length** to 40 and turn on symbols and digits >> **Save**
1. In GCP, enable the **Compute Engine API**:
   - Under **APIs & Services** > **Library** search for "Compute"
   - Select **Compute Engine API** and choose **Enable**
1. `export GOOGLE_APPLICATION_CREDENTIALS=~/Downloads/sourcegraph-managed-company-220df65550d4.json`
1. Clone and `cd deploy-sourcegraph-managed/`
1. `VERSION=v3.17.2 ./create-deployment.sh $COMPANY/` and **commit the result.**
1. Open and edit `deploy-sourcegraph-managed/$COMPANY/gcp-tfstate/gcp-tfstate.tf` according to the comments within, commit the result.
1. In `gcp-tfstate` run `terraform init && terraform apply && git add . && git commit -m 'initialize GCP tfstate bucket'`
1. Open and edit `infrastructure.tf` according to the comments within and commit the result.
1. In `deploy-sourcegraph-managed/$COMPANY` run `terraform init && terraform plan && terraform apply`
1. Access the instance over SSH and confirm all containers are healthy (instructions below).
1. In the infrastructure repository, [create a DNS entry](https://github.com/sourcegraph/infrastructure/blob/master/dns/sourcegraph-managed.tf) that points `$COMPANY.sourcegraph.com` to the `default-global-address` IP (see "Finding the external load balancer IP" below) and follow the process there to `asdf exec terraform apply` it.
1. Confirm all containers come up healthy (`docker ps` should report them as such)
1. Create a PR for review.
1. Access the Sourcegraph web UI (instructions for port-forwarding below)
1. Navigate to Grafana and confirm the instance looks healthy.
1. Set up the initial admin account (for use by the Sourcegraph team only)
   - Email: `managed+$COMPANY@sourcegraph.com` (note `+` sign not `-`)
   - Username: `sourcegraph-admin`
   - Password: Use the password previously created and stored in 1password.
1. Configure `externalURL` in the site configuration, and use SSH to restart the server (`sudo su`, `shutdown -r`) wait for it to come back up and access it again.
1. In the global user settings, set `"alerts.showPatchUpdates": false`
1. In the GCP web UI under **Network services** > **Load balancers** > select the load balancer > watch the SSL certificate status. It may take some time for it to become active (~1h41m) / for Google to see the DNS change from Cloudflare. Confirm it is active by following ["Access through the GCP load balancer as a user would"](#access-through-the-gcp-load-balancer-as-a-user-would).
1. In the site configuration, configure alerting to go to our `#alerts-managed-instances` Slack channel, for example (replace `$COMPANY` with the actual company name, and `$WEBHOOK_URL` with the actual webhook URL from 1password **Managed instances** > `#alerts-managed-instances Slack webhook URL`):
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
			{
				"level": "warning",
				"notifier": {
					"type": "slack",
					"username": "$COMPANY",
					"url": "$WEBHOOK_URL"
				}
			}
		],
	```
1. Contact #ce and ask that they generate / provide the relevant license key for the customer's instance, then set it in the site config.

## Giving the customer access

To provide the customer access to the instance:

1. Work with #ce to ask the customer:
   a. If their instance should be protected by SSO only, or SSO + IP-restricted access. If the latter, what IP addresses / CIDR ranges should be allowed (e.g. the source IPs of their corporate VPN, usually their infrastructure or IT teams can provide this).
   b. Who should be the recipient of the initial site admin account creation link? This will let them configure the admin password, which they will need to store somewhere securely, and is used for them to set up SSO as well as for them to get access if at any point SSO is not working. They can create more password or SSO-based admin accounts later as desired.
2. Create and apply the Terraform change that grants their IP/CIDR ranges access to the instance, or makes it public/SSO-only, by following the [operations guide](operations.md).
3. Work with #ce to provide the initial site admin account creation link to the relevant person (do this securely in a private channel with only that one person).  Confirm that they are able to access the instance and sign in OK.

## Configuring SSO and repositories

Distribution usually hands off to CE at this point, they will schedule a call with the customer (including a distribution member, if needed) to walk the site admin on the customer's side through performing initial setup of the product including adding repos, configuring SSO, and inviting users.
