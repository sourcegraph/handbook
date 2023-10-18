# Site-admin access to internal instances

Site-admin access to internal instances (dotcom, s2, rctest, demo, k8s) is provided through an auto-approved Entitle workflow. It will create a short-lived admin account that lasts 1h. Removing long-lived admin accounts largely reduces the risk of compromised credentials across our instances.

> [!NOTE]
> This is currently deployed only in the dotcom instance. Other instances are unchanged for the moment.

## How it works

Internal instances use the same login method for site-admin access to customer Cloud instances: [Sourcegraph Operator Auth Provider (SOAP)](../cloud/technical-docs/oidc_site_admin.md#sourcegraph-teammate-access-to-cloud-instances). Any employee can request site-admin access for up to 1h with automatic approval.

For sourcegraph.com use the following instructions (or substitute the URL and Entitle request for other instances)

1. In Entitle request the `Dotcom site admin permission`. You may do this using the `/access_request` Slack command or [this pre-filled request](https://app.entitle.io/request?targetType=resource&duration=3600&justification=PLEASE%20INCLUDE%20A%20JUSTIFICATION%20-%20SOC2%20AUDITORS%20CHECK%20THIS&integrationId=2a973813-5df5-4572-9982-0169d1deca3b&resourceId=ffe6f48e-45d5-456d-a476-07ab3d27163e&roleId=d3818374-f1ea-433b-aa1a-dacc9f07f996&grantMethodId=d3818374-f1ea-433b-aa1a-dacc9f07f996).
2. Go to https://sourcegraph.com/sign-in?sourcegraph-operator
3. Click on Other login methods
4. Click on Continue with Sourcegraph Operators
5. Authenticate with Okta

[Here is a Loom video](https://www.loom.com/share/3664a109ab2c4914b3afd4d47bb8d7a8?sid=3cd5b0dc-988b-4ce3-b7f4-e36b983d9e06) demonstrating the process.

_*Note*: we understand there may be uses for long-lived admin accounts, such as pulling metrics for automation. We have a mechanism to allow this. Please reach out in #discuss-security if needed._

## FAQ

- Q: What happens with my existing Sourcegraph accounts?

  - A: If your existing account is a site-admin, it will be demoted to regular user. No existing user accounts will be deleted.

- Q: What happens with tokens created during the elevated privilege window?

  - A: Those will get revoked after 1h since the SOAP account with elevated privileges is deleted.

- Q: Will my token survive the 1h TTL if I renew with Entitle?

  - A: No, they will be revoked after 1h.

- Q: How can I create a long-lived admin account for automation purposes?

  - A: For long-lived admin accounts needed for automation, reach out to in the #discuss-security channel.

- Q: Can I request more than 1h of elevated privileges?
  - A: Not at the time. If you have this need please reach out in #discuss-security to discuss your use case.
