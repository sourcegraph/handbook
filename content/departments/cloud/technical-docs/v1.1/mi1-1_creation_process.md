# Creating a managed instance

> WARNING: This page is **DEPRECATED**, and only retain to provide historical context.

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see [managed instances operations](../operations.md) what if there is some text here.

> If GitHub Actions is not available, we should fallback to [manual creation](#gitHub-action-creating-managed-instance-failed).

1. CE creates an issue with the managed instance template in the `sourcegraph/customer` repository.
1. Cloud Team invoke GitHub Actions with following parameters:

   - `customer` - slug for the customer, e.g. `acme`
   - `ce_email` - email of Customer Engineer from issue
   - `customer_email` - customer admin email (only one from provided in issue), e.g. `logan@acme.com`
   - `email_domain` - initial customer email domain, e.g. `acme.com`
   - `instance_type` - purpose of this instance
     - `trial` - for customer trial
     - `production` - for paying customer
     - `internal` - for internal Sourcegraph usage
   - `instance_size` - bundle size of this intance
   - `user_level_telemetry` - if user-level telemetr is enabled (provided in the issue)

   via command line:

   ```
   gh workflow run mi_create.yml \
     -f customer=$CUSTOMER \
     -f ce_email=$CE_EMAIL \
     -f customer_email=$CUSTOMER_EMAIL \
     -f email_domain=$EMAIL_DOMAIN \
     -f instance_type=[production|trial|internal] \
     -f instance_size=[small|medium|large] \
     -f user_level_telemetry=[true|false]
   ```

   or via [GitHub Actions web console](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_create.yml).

   Important: The `Create Managed Instance` workflow is `idempotent`, so can be safely re-run multiple times with same arguments.

1. PR will be open automatically by GitHub Actions with the name/branch `$CUSTOMER/create-instance` in [deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed/pulls) repository. Approve and merge it.

Note:

- GCP metrics monitoring and alerting is applied automatically via scheduled [GitHub Actions workflow](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/apply_monitoring.yml)
- Security audit logging is applied automatically via a scheduled [GitHub Actions Worflow](https://github.com/sourcegraph/infrastructure/blob/main/.github/workflows/apply_mi_security_logging.yml)

## Wrapping up

### Optional: customise instance size

When based on the issue customer requires customisation (diffferent instance/DB/disk size or more executors), Cloud Team will modify the instance BEFORE giving access for customer!

Customisation is done via:

- modification of `terraform.tfvars` file
- `cd $CUSTOMER && terraform apply`

  in `$CUSTOMER/create-instance` branch of [deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed).

### Giving customer access

An automatic password reset email is always sent out for customers:

1. For standard instances, [managed SMTP](../managed-smtp/index.md) will be configured before a user is created. When the user is created, they will receive an email from the instance to reset their password.

The customer admin can use the delivered password reset link to configure access for themselves.

#cloud usually hands off to CE at this point, they will schedule a call with the customer (including a DevOps team member, if needed) to walk the site admin on the customer's side through performing initial setup of the product including adding the license key, adding repos, configuring SSO, and inviting users. Please notify the CE requested the instance has been created with the following message.

```sh
Hi,

The instance is ready. The customer admin should have received an email to reset their password.
```

#### Manual password reset

If the customer takes too long to reset their password, or if they fail to receive the automated email for whatever reason, a manual password reset is required:

```bash
mi reset-customer-password --email <customer admin email>
```

This should generate a link to the password and also send it via email if [managed SMTP](../managed-smtp/index.md) is enabled.

### Optional: enable "private" mode

Some customers opt to restrict access to Sourcegraph instance to a limitied number of IP ranges (e.g. corporate VPN). Ensure CE has provided the customer IP allowlist. This is a prereq in the instance creation form.

- Set `type=private` in `$CUSTOMER/config.yaml`
- Set `public=false` in `$CUSTOMER/terraform.tfvars`
- Add `allowed_customer_ip_ranges=["1.2.3.4/32"]` in `$CUSTOMER/terraform.tfvars`
- Run `terraform apply`

### Is customers using a private code host?

If the customers' code host is behind a firewall, we will need to provide them the IP of our Cloud NAT

```sh
cd $CUSTOMER
terraform output
```

Provide the value of `cloud_nat_ips` to CE or customers, and instruct them to allow incoming traffic from referenced IP addresses.

## Troubleshooting

### `KeyRing` already exists

```
│ Error: Error creating KeyRing: googleapi: Error 409: KeyRing projects/sourcegraph-managed-$CUSTOMER/locations/global/keyRings/primary-key-ring already exists.
```

You may be trying to re-create an instance in the same project where KMS is only scheduled for deletion instead of being deleted right away. You will need to manuall import below resources

```sh
terraform import 'module.managed_instance.google_kms_key_ring.keyring' projects/sourcegraph-managed-$COMPANY/locations/global/keyRings/primary-key-ring
terraform import 'module.managed_instance.google_kms_crypto_key.key' global/primary-key-ring/primary-key
```

### `Error creating Brand: googleapi: Error 409: Requested entity already exists`

You may be trying to re-create an instance in an existing project. Simply import the resource.

```sh
terraform import module.managed_instance.google_iap_brand.project_brand $(gcloud alpha iap oauth-brands list --project $PROJECT_ID --format json | jq -r '.[0].name')
```

### GitHub Action creating Managed Instance failed

When [GitHub Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_create.yml) creating Managed Instance failed, it can be safely re-run. If error occurs again, verify at which stage failed and:

- checkout [deploy-sourcegraph-managed]https://github.com/sourcegraph/deploy-sourcegraph-managed) and switch to branch `CUSTOMER/create-instance`
- finalise creation of Managed Instance - perform steps from [this flow](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/.github/workflows/mi_create.yml) starting from the one which failed
- ensure to open Pull Request as the last step and add Cloud Team as reviewer
- prepare fix and open Pull Request

### Creating a budget

Budgets are applied as a separate module.
To create a budget you need to run a terraform apply in the `budget` directory.
Budgets are viewable in the [GCP console](https://console.cloud.google.com/billing/budgets).

```sh
# required to access budget APIs in GCP
export GOOGLE_IMPERSONATE_SERVICE_ACCOUNT=mi-creator-github@sourcegraph-secrets.iam.gserviceaccount.com
# in the buget directory
terraform apply -var-file=../terraform.tfvars
```
