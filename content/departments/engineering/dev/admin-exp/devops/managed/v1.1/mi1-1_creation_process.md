# Creating a managed instance

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see [managed instances operations](../operations.md) what if there is some text here.

1. CE creates an issue with the managed instance template in the `sourcegraph/customer` repository.
1. Clone and `cd deploy-sourcegraph-managed/`
1. Prepare your environment:

   - `export MG_DEPLOY_SOURCEGRAPH_MANAGED_PATH=$(pwd)`
   - `export VERSION=v<MAJOR.MINOR.PATCH>`
   - `export COMPANY=$COMPANY`
   - `export PROJECT_PREFIX=sourcegraph-managed` (should match GCP project prefix)
   - `export PROJECT_ID=$PROJECT_PREFIX-$COMPANY`
   - `export PROJECT_SLUG=<prefix>.sourcegraph.com` (the customer issue mentions it)
   - `export TF_VAR_opsgenie_webhook=<OpsGenie Webhook value>`
     - This can be found in the [Managed Instances vault](https://my.1password.com/vaults/nwbckdjmg4p7y4ntestrtopkuu/allitems/d64bhllfw4wyybqnd4c3wvca2m)

1. Check out a new branch: `git checkout -b $COMPANY/create-instance`
1. Create a new GCP project for the instance by:

- Adding it to the [`managed_projects` tfvar in `gcp/projects/terraform.tfvars`](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/gcp/projects/terraform.tfvars)
- Apply terraform in `gcp/projects` folder - due to the amount of service APIs that are defined in this project, run Terraform with increased parallelism to prevent waiting a long time for the plan to form:
  `terraform apply -parallelism=100`

1. Ensure the target version of docker-compose file is in the golden directory, it should be named `docker-compose.x.y.z.yaml`
1. ` ./util/create-managed-instance-new.sh $COMPANY` and **commit the result**. Make sure that the version exists in [deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-docker/tags).
1. Replace base `docker-compose.yaml` to use golden symlink: `cd $COMPANY/red/docker-compose && rm docker-compose.yaml && ln -s ../../../golden/docker-compose.<MAJOR.MINOR.PATCH>.yaml docker-compose.yaml && rm ../VERSION && cd ../../`
1. Open and edit `terraform.tfvars` according to the TODO comments within and commit the result.

   > NOTE: ⚠️ Do not set `enable_alerting` to `true` yet as this will cause false alerts to fire until the MI creation process has been completed!

1. Open and edit `deploy-sourcegraph-managed/$COMPANY/red/docker-compose/docker-compose.override.yaml`, increase `gitserver-0`'s `cpus: 8` if the instance size is larger than "n2-standard-8".
1. In `deploy-sourcegraph-managed/$COMPANY` run `terraform init && terraform apply`
1. Check if all is running

   ```bash
   mg check
   ```

1. In the `$COMPANY` directory run `terraform fmt` and commit any changes

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

1. Initialize the instance and copy the password reset link that is generated

Note: if added in MI template, add CE email in `config.yaml`:

```
additionalAdmins:
- CE_NAME@sourcegraph.com
```

```bash
mg init-instance $CUSTOMER_ADMIN_EMAIL
```

1. Go back to `terraform.tfvars` and set `enable_alerting` to `true`. Run `terraform apply` and verify that only `google_monitoring_alert_policy.primary` is created.
1. Commit all changes
1. Enable application performance metrics via

```bash
mg sync-alerts
```

1. Enable metrics collection and GCP alerts for the new instance by following [these instructions](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/monitoring#2-add-new-managed-instances-project-to-be-monitored)

- cd `monitoring`
- add new map entry to `monitored_projects` in `variables.tf`
- run `terraform apply`

1. Commit the last changes, create a PR for review, apply and merge

1. Enable security audit logging via `terraform apply` in [infrastructure repository](https://github.com/sourcegraph/infrastructure/tree/main/security/auto-discovery) - this will create required resources dynamically, based on project label.
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
