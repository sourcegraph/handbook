# Sourcegraph teammate access to Cloud instances

Sourcegraph teammates access to Cloud instances application interface (Web UI) is restricted to essential personnel only. This ensures Sourcegraph is able to help customers troubleshoot issues and deliver a smooth experience. We utilize [Sourcegraph Operator Authentication Provider (SOAP)](#what-is-sourcegraph-operator-authentication-provider) which implements OpenID Connect to enable Sourcegraph employees access to customer instance to make sure there is an audit trail for every access.

The Cloud team manages a separate Cloud Okta account (separate from the company-wide Sourcegraph Okta account) to manage UI access to Cloud instances. The Cloud Okta account is federated by the parent Sourcegraph Okta account to ensure access control is consistent across all our systems. For example, if an account is deactivated from the Sourcegraph Okta account, the user will loss access to Cloud Okta as well.

Each Cloud instance equals to an Okta OAuth application. For each Okta application, an Okta group is created and assign access to the Okta application. By default, no teammate has UI access to any customer Cloud instances, hence the Okta group is empty. We will then grant time-bound access to the group as needed.

You can learn more about the detail from the following RFCs:

- [RFC 750 PRIVATE](https://docs.google.com/document/d/1Ia9sjW_KQ6BeJ28xJl3VvLIy7M9Ko7A1sBnTXkZ3W9o/edit#heading=h.trqab8y0kufp)
- [RFC 682 PRIVATE](https://docs.google.com/document/d/1Ot9o1emIjoegi7_OICXbcCqiGx-SebWvAtz_tp1E1wo/edit#heading=h.x2vmqaiitlnw)

## The default admin user on managed instances

Every instance has a default Sourcegraph admin user added during the [instance initialisation](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/7e9066e537b02feb6013585d443fc27514b71a71/util/cmd/mg_init_instance.go#L51-L54). The [username, password and access token](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/36db9bb65ec72ffa470752461b82c6999c00b969/util/pkg/config/config.go#L47-L49) of the admin user is stored in Google Secret Manager (GSM) in the GCP project of the managed instance. The access token is used to access the managed instance by our services programmatically.

## Request UI access to managed instances

> WARNING: Always have the customer consent prior to request UI access to a managed instance.

> WARNING: Time-bound UI access creates temporary users on a managed instance, all resources (user settings, Notebooks, Code Insights, Batch Changes, etc.) created by these temporary users will be permanently deleted along with them once the access is expired.

> NOTE: To make your life eaiser, you can install the browser extension [requestly](https://requestly.io/) and import the [rule to automatically append the `sourcegraph-operator` query parameter](https://app.requestly.io/rules/#sharedList/1670019946529-Michael-shared-list-12-2-2022) on the sign-in page of any managed instance.

Please visit go/cloud-ops to locate the instance you would like to access, and follow the instruction under `Log in to the instance UI` section.

### UI access to private managed instances

> NOTE: The steps described here is a current workaround until we have properly implemented an auth proxy solution.

Private managed instances refer to managed instances that [have enabled private mode](./v1.1/mi1-1_creation_process.md#optional-enable-private-mode), additonal steps are required to be able to visit the instance UI after you have completed the steps to grant UI access.

1. [Set up a port forwarding to the managed instance](./operations.md#port-forwarding):

   ```sh
   mi forward 80 4444
   ```

1. Visit http://localhost:4444/sign-in?sourcegraph-operator
1. Click on the **Continue with Sourcegraph Operators** sign-in option
1. Complete the authentication flow with Okta
1. Encounter an error about `no state cookie found`
1. Replace the beginning part of URL from `https://company.sourcegraph.com` to `http://localhost:4444`

## FAQ

### What is Sourcegraph Operator Authentication Provider?

Sourcegraph Operator Authentication Provider (SOAP) is an OpenID Connect-based authentication provider that is designed specifically for Sourcergaph Cloud managed instances. In combination with the Okta application and Entitle access request workflow, it allows time-bound, audit-trailed UI access to managed instances for Sourcegraph employees in the events of instance maintenance, issue troubleshooting, and customer assistance.

SOAP creates special user accounts that are refered as "Sourcegraph operators", which has the following traits:

- Sourcegraph operators are _only_ available on Sourcergaph Cloud managed instances.
- Sourcegraph operators are temporary user accounts. By default, they'll be hard-deleted from the instances after 60 minutes.
- Sourcegraph operators are _not_ counting towards the customer license seats.
- Sourcegraph operators are invisible from the application UI, site admins are _not_ able to see them.
- All activities of Sourcegraph operators are logged and attributed in the database, and _excluded_ from both in-product analytics and usage stats in pings.

> NOTE: In some internal managed instances (including `rctest.sourcegraph.com` and `sourcegraph.sourcegraph.com`), Sourcegraph operators may also be regular users on the instance that have other external accounts connected (e.g. Google Workspace, GitHub). In such cases, Sourcegraph operators will not be hard-deleted.

### How to identify Sourcegraph operators on a managed instance?

Sourcegraph operators often have the prefix `sourcegraph-operator-` in their usernames, however, having such username prefix does not automatically make those users become Sourcegraph operators.

To pull out the list of Sourcegraph operators on a given managed instance, [set up a Cloud SQL proxy to the managed instance](./operations.md#accessing-the-cloud-sql).

Run the following SQL query:

```sql
SELECT * FROM users
WHERE users.id IN (
    SELECT user_id FROM user_external_accounts WHERE service_type = 'sourcegraph-operator'
);
```

### How to identify user activities of Sourcegraph operators on a managed instance?

To pull out user activities of Sourcegraph operators on a given managed instance, [set up a Cloud SQL proxy to the managed instance](./operations.md#accessing-the-cloud-sql).

Run the following SQL query for event logs:

```sql
SELECT * FROM event_logs WHERE public_argument @> '{"sourcegraph_operator": true}';
```

Run the following SQL query for security event logs:

```sql
SELECT * FROM security_event_logs WHERE argument @> '{"sourcegraph_operator": true}';
```

### How to enable/disable SOAP for a managed instance?

Go to the `$CUSTOMER` direcotry.

For v1 instances:

1. Remove or add the following line in the `config.yaml` file to enable or disable SOAP respectively:

   ```yaml
   disableSourcegraphManagementAccess: true
   ```

1. Update the GSM value of the secret `CLOUD_SITE_CONFIG` by running `mi sync cloud-site-config`.
1. Pull down the new GSM value to the VM by running `terraform apply` or trigger an apply on the Terraform Cloud.
1. [Reload the manage instance](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/reload_instance.yml).

For v2 instances:

<!-- TODO(@michaellzc): update docs after it is implemented -->

Disabling SOAP is currently not supported on v2.

### How to enable SOAP locally?

1. Create a temporary JSON file (`site-config.json`) with the following content, the credentials can be obtained from the **Okta test instance admin** in 1Password and the [OpenID Connect (sourcegraph.test:3443)](https://dev-433675-admin.oktapreview.com/admin/app/oidc_client/instance/0oa1ecwm8ttNnJggl0h8) Okta application :

   ```json
   {
     "authProviders": {
       "sourcegraphOperator": {
         "issuer": "https://dev-433675.oktapreview.com",
         "clientID": "<REDACTED>",
         "clientSecret": "<REDACTED>",
         "lifecycleDuration": 60
       }
     }
   }
   ```

2. Sign the Cloud site config:

   ```sh
   mi sign-cloud-site-config --config-file site-config.json
   ```

3. Set the output of the above command as the value of the environment variable `SRC_CLOUD_SITE_CONFIG` in your `sg.config.overwrite.yaml`:

   ```yaml
   env:
     SRC_CLOUD_SITE_CONFIG: 'eyJzaWduYXR1cmUiOnsiRm9ybWF0Ijoic3NoLWVkMjU1M...'
   ```

4. Start the local Sourcegraph instance and sign in with **Continue with Sourcergaph Operators** using the same Okta account used in the step 1.

> NOTE: If you are not using `sg` to start your Sourcegraph instance, make sure the environment variable `SRC_CLOUD_SITE_CONFIG` is set for `frontend`/`sourcegraph-frontend` and `worker` services.

### How debug SOAP configuration?

> WARNING: Do not use any online base64 tool to decode `SRC_CLOUD_SITE_CONFIG` because its value is only encoded but not encrypted!

1. Grab the value of the environment variable `SRC_CLOUD_SITE_CONFIG`, e.g. `eyJzaWduYXR1cmUiOnsiRm9ybWF0Ijoic3NoLWVkMjU1M...`.
2. Use `base64` to decode to get its signature and signed content (`siteConfig`):

   ```sh
   echo "eyJzaWduYXR1cmUiOnsiRm9ybWF0Ijoic3NoLWVkMjU1M..." | base64 --decode
   ```

3. Use `base64` to decode the `siteConfig` field again to get the actual content.
