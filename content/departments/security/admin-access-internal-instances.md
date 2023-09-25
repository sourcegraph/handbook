# Site-admin access to internal instances

Site-admin access to internal instances (dotcom, s2, rctest, demo, k8s) is provided through an auto-approved Entitle workflow. It will create a short-lived admin account that lasts 1h. Removing long-lived admin accounts largely reduces the risk of compromised credentials across our instances.

## How it works

Internal instances use the same login method for site-admin access to customer Cloud instances: [Sourcegraph Operator Auth Provider (SOAP)](../cloud/technical-docs/oidc_site_admin/.md#sourcegraph-teammate-access-to-cloud-instances). Any employee can request site-admin access for up to 1h with automatic approval.

For sourcegraph.com use the following instructions (or substitute the URL and Entitle request for other instances)

1. In Entitle request the `Dotcom site admin permission`
2. Go to https://sourcegraph.com/sign-in?sourcegraph-operator
3. Click on Other login methods
4. Click on Continue with Sourcegraph Operators
5. Authenticate with Okta

_*Note*: we understand there may be uses for long-lived admin accounts, such as pulling metrics for automation. We have a mechanism to allow this. Please reach out in #discuss-security if needed._

## FAQ

- Q: What happens with my existing Sourcegraph accounts?
  A: If your existing account is a site-admin, it will be demoted to regular user. No existing user accounts will be deleted.

- Q: What happens with tokens created during the elevated privilege window?
  A: Those will get revoked after 1h since the SOAP account with elevated privileges is deleted.

- Q: Will my token survive the 1h TTL if I renew with Entitle?
  A: No, they will be revoked after 1h.

- Q: How can I create a long-lived admin account for automation purposes?
  A: For long-lived admin accounts needed for automation, reach out to in the #discuss-security channel.

- Q: Can I request more than 1h of elevated privileges?
  A: Not at the time. If you have this need please reach out in #discuss-security to discuss your use case.
