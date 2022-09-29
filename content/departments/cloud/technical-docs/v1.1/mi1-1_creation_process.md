# Creating a managed instance

Creating a new [managed instance](./index.md) involves following the steps below.
For basic operations like accessing an instance for these steps, see [managed instances operations](../operations.md) what if there is some text here.

1. CE creates an issue with the managed instance template in the `sourcegraph/customer` repository.
1. Cloud Team invoke Github Actions with following parameters:

- `customer` - name of customer
- `ce_email` - email of Customer Engineer from issue
- `customer_email` - customer admin email (only one from provided in issue)
- `instance_type` - purpose of this instance

      trial - for customer trial

      production - for paying customer

      internal - for internal Sourcegraph usage

  via command line:

  ```
  gh workflow run mi_create.yml \
    -f customer=$CUSTOMER \
    -f ce_email=$CE_EMAIL \
    -f customer_email=$CUSTOMER_EMAIL \
    -f instance_type=[production|trial|internal] \
    -f instance_size=[small|medium|large]
  ```

  or via [Github Actions web console](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_create.yml)

  Important: The `Create Managed Instance` workflow is `idempotent`, so can be safely re-run multiple times with same arguments.

1. PR will be open automatically by Github Actions with the name/branch `$CUSTOMER/create-instance` in [deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed/pulls) repository. Approve and merge it.

Note:

- GCP metrics monitoring and alerting is applied automatically via scheduled [Github Actions workflow](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/apply_monitoring.yml)
- Security audit logging is applied automatically via a scheduled [GitHub Actions Worflow](https://github.com/sourcegraph/infrastructure/blob/main/.github/workflows/apply_mi_security_logging.yml)

## Optional: customise instance size

When based on the issue customer requires customisation (diffferent instance/DB/disk size or more executors), Cloud Team will modify the instance BEFORE giving access for customer!

Customisation is done via:

- modification of `terraform.tfvars` file
- `cd $CUSTOMER && terraform apply`

  in `$CUSTOMER/create-instance` branch of [deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed).

### Giving customer access

Generate password reset link for customer:

```bash
mg reset-customer-password --email <customer admin email>
```

#cloud usually hands off to CE at this point, they will schedule a call with the customer (including a DevOps team member, if needed) to walk the site admin on the customer's side through performing initial setup of the product including adding the license key, adding repos, configuring SSO, and inviting users. Please notify the CE requested the instance has been created with the following message.

```
Hi,

The instance is ready. Would you kindly add 10 extra seats to the license so we can have a few extra seats for Sourcegraph management access?

Here's the link to the password reset link <>. Please note the link will expire after 24 hours
```

### Enable "private" mode

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
