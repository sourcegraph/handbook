# Creating a managed instance

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see [managed instances operations](../operations.md) what if there is some text here.

1. CE creates an issue with the managed instance template in the `sourcegraph/customer` repository.
1. Create a new GCP project for the instance by adding it to the [`managed_projects` tfvar in the infrastructure repo's `gcp/projects/terraform.tfvars`](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/infrastructure%24%40main+managed_projects+%3D+%7B+:%5B_%5D+%7D&patternType=structural)
   - It will look something like `sourcegraph-managed-$COMPANY = { ... }` - refer to the existing variables for more details. If you customize the `sourcegraph-managed` prefix, make sure to update the PROJECT_PREFIX variable in the below instructions.
   - Due to the amount of service APIs that are defined in this project, run Terraform with increased parallelism to prevent waiting a long time for the plan to form:
     `terraform apply -parallelism=100`
   - Ensure that you commit and push the `terraform.tfstate` file to GitHub after running Terraform!
1. Clone and `cd deploy-sourcegraph-managed/`
1. Prepare your environment:

- `export VERSION=v<MAJOR.MINOR.PATCH>`
- `export COMPANY=$COMPANY`
- `export PROJECT_PREFIX=sourcegraph-managed` (should match GCP project prefix)
- `export PROJECT_ID=$PROJECT_PREFIX-$COMPANY`
- `export PROJECT_SLUG=<prefix>.sourcegraph.com` (the customer issue mentions it)
- `export TF_VAR_opsgenie_webhook=<OpsGenie Webhook value>`
  - This can be found in the [Managed Instances vault](https://my.1password.com/vaults/nwbckdjmg4p7y4ntestrtopkuu/allitems/d64bhllfw4wyybqnd4c3wvca2m)

1. Check out a new branch: `git checkout -b $COMPANY/create-instance`
1. Ensure the target version of docker-compose file is in the golden directory, it should be named `docker-compose.x.y.z.yaml`
1. ` ./util/create-managed-instance-new.sh $COMPANY` and **commit the result**. Make sure that the version exists in [deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-docker/tags).
1. Replace base `docker-compose.yaml` to use golden symlink: `cd $COMPANY/red/docker-compose && rm docker-compose.yaml && ln -s ../../../golden/docker-compose.<MAJOR.MINOR.PATCH>.yaml docker-compose.yaml && rm ../VERSION && cd ../../`
1. Open and edit `terraform.tfvars` according to the TODO comments within and commit the result.

   > NOTE: ⚠️ Do not set `enable_alerting` to `true` yet as this will cause false alerts to fire until the MI creation process has been completed!

1. Ensure you are using the version of Terraform indicated in `.tool-versions` using `tfenv`
1. In `deploy-sourcegraph-managed/$COMPANY/gcp-tfstate` run `terraform init && terraform apply -var-file=../terraform.tfvars && git add . && git commit -m 'initialize GCP tfstate bucket'`

   > NOTE: You can safely ignore the warnings from `terraform apply`.

1. Open and edit `deploy-sourcegraph-managed/$COMPANY/red/docker-compose/docker-compose.override.yaml`, increase `gitserver-0`'s `cpus: 8` if the instance size is larger than "n1-standard-8".
1. In `deploy-sourcegraph-managed/$COMPANY` run `terraform init && terraform apply`
1. In the infrastructure repository, [create a DNS entry](https://github.com/sourcegraph/infrastructure/blob/main/dns/sourcegraph.managed.tf) that points `$PROJECT_SLUG` to the `default-global-address` (`gcloud compute addresses list --filter="name:( default-global-address )" --project=$PROJECT_ID`) and follow the process there to `asdf exec terraform apply` it. If the instance is Public, set `proxied` to `true`. If it's Private, set it to `false`.
1. In the GCP web UI under **Network services** > **Load balancers** > select the load balancer > watch the SSL certificate status. It may take some time for it to become active (~1h41m) / for Google to see the DNS change from Cloudflare. Confirm it is active by following ["Access through the GCP load balancer as a user would"](../operations.md#access-through-the-gcp-load-balancer-as-a-user-would).
1. Create a PR for review, apply and merge
1. Check if all is running

   ```bash
   mg --customer=$COMPANY check
   ```

1. In the `$COMPANY` GCP project, create [Google Oauth credentials](https://console.cloud.google.com/apis/credentials?project=sourcegraph-managed-$COMPANY) with the following parameters:

- type: Web Application
- name: `managed-instance-$COMPANY`
- Authorized redirect URIs:
  - Is the instance **public**, then add **only** `https://$PROJECT_SLUG/.auth/callback`
  - Is the instance **private**, then add **both** `https://$PROJECT_SLUG/.auth/callback` AND `http://localhost/.auth/callback`

1. Create a GCS secret to be used by OIDC authentication

   ```bash
   mg create-oidc-secret --client-id=<CLIENT_ID_FROM_OAUTH_CREDENTIALS> --client-secret=<CLIENT_SECRET_FROM_OAUTH_CREDENTIALS>
   ```

1. Initialise the instance and copy the password reset link that is generated

   ```bash
   mg init-instance $CUSTOMER_ADMIN_EMAIL
   ```

1. Go back to `terraform.tfvars` and set `enable_alerting` to `true`. Run `terraform apply` and verify that only `google_monitoring_alert_policy.primary` is created.
1. Enable application performance metrics via

```bash
mg --customer=$COMPANY sync-alerts
```

1. Enable metrics collection and GCP alerts for the new instance by following [these instructions](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/monitoring#2-add-new-managed-instances-project-to-be-monitored).
1. Add an entry for the customer by adding their [accounts](https://github.com/sourcegraph/accounts/) link to the checklist in the [managed instances upgrade issue template](../../../../process/releases/upgrade_managed_issue_template.md).

## Giving the customer access

> NOTE: ⚠️ Before providing access to the customer, make sure that the GCP alerting policy has been created!

To provide the customer access to the instance:

1. If IP restrictions are requested, create and apply the Terraform change that grants their IP/CIDR ranges access to the instance, or makes it public/SSO-only, by following the [operations guide](../operations.md).
2. Copy the generated link and provide it to the CE to provide to the customer. Managed instances usually won't have email set up, so a link will not be sent automatically. Inform the CE this link will expire after 24 hours. If the link expires before the customer was able to sign up, you can generate a new link with
   ```bash
   mg reset-customer-password --email <customer admin email>
   ```
3. Ask the CE to add 10 extra seats to the license, as we currently do not exclude DevOps admin accounts from the license usage.

## Configuring License, SSO, and repositories

Delivery usually hands off to CE at this point, they will schedule a call with the customer (including a DevOps team member, if needed) to walk the site admin on the customer's side through performing initial setup of the product including adding the license key, adding repos, configuring SSO, and inviting users.

## Is customers using a private code host?

If the customers' code host is behind a firewall, we will need to provide them the IP of our Cloud NAT

```sh
cd $CUSTOMER
terraform output
```

Provide the value of `cloud_nat_ips` to CE or customers, and instruct them to allow incoming traffic from referenced IP addresses.
