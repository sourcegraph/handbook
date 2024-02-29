# Site-admin access to internal instances

Site-admin access to internal instances (dotcom, s2, rctest, demo, k8s) is provided through an auto-approved Entitle workflow. It will create a short-lived admin account that lasts 1h. Removing long-lived admin accounts largely reduces the risk of compromised credentials across our instances.

> [!NOTE]
> This is currently deployed only in the dotcom instance. Other instances are unchanged for the moment.

## How it works

### New direct method
Site-admin access can now be granted instantly using our new Entitler service. You can request the bundle by typing `/access_request` and in the 'Search permission' box type 'dotcom'. You will see the set 'Dotcom direct site-admin'. Set your desired duration, make sure you add a nice justification and you're good to go! Access should be granted within less than a minute.

> [!NOTE]
> This requires users to have a *verified* @Sourcegraph.com email account as their primary email.

If you have any issues with the integration, please drop a message in #discuss-security.

### Deprecated SOAP method

Internal instances use the same login method for site-admin access to customer Cloud instances: [Sourcegraph Operator Auth Provider (SOAP)](../cloud/technical-docs/oidc_site_admin.md#sourcegraph-teammate-access-to-cloud-instances). Any employee can request site-admin access for up to 12h with automatic approval.

For sourcegraph.com use the following instructions (or substitute the URL and Entitle request for other instances)

1. In Entitle request the `Dotcom site admin permission`. You may do this using the `/access_request` Slack command or [this pre-filled request](https://app.entitle.io/request?targetType=resource&duration=3600&justification=PLEASE%20INCLUDE%20A%20JUSTIFICATION%20-%20SOC2%20AUDITORS%20CHECK%20THIS&integrationId=2a973813-5df5-4572-9982-0169d1deca3b&resourceId=ffe6f48e-45d5-456d-a476-07ab3d27163e&roleId=d3818374-f1ea-433b-aa1a-dacc9f07f996&grantMethodId=d3818374-f1ea-433b-aa1a-dacc9f07f996).
2. Go to https://sourcegraph.com/sign-in?sourcegraph-operator
3. Click on Other login methods
4. Click on Continue with Sourcegraph Operators
5. Authenticate with Okta

[Here is a Loom video](https://www.loom.com/share/3664a109ab2c4914b3afd4d47bb8d7a8?sid=7627c7f5-984a-45cd-87c2-48c8633956af) demonstrating the process:

<div style="position: relative; padding-bottom: 64.63195691202873%; height: 0;"><iframe src="https://www.loom.com/embed/3664a109ab2c4914b3afd4d47bb8d7a8?sid=f9d7dd52-3e55-448b-a61c-09279d2736ad" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<br>

> [!NOTE]
> We understand there may be uses for long-lived admin accounts, such as pulling metrics for automation. We have a mechanism to allow this. Please reach out in #discuss-security if needed.

### Troubleshooting

If you use your Sourcegraph email as a verified email in a dotcom account, you may see the following error:

```
The retrieved user account lifecycle has already expired, please re-authenticate.
```

If this is the case, do the following steps:

1. Sign out of sourcegraph.com.
2. [Sign in](https://sourcegraph.com/sign-in?returnTo=/search) using "Continue with Google".
3. Sign out.
4. Follow the steps in the `How it works` section

## FAQ

- Q: What happens with my existing Sourcegraph accounts?

  - A: If your existing account is a site-admin, it will be demoted to regular user. No existing user accounts will be deleted.

- Q: How can I use my regular account as a site-admin?

  - A: Add your Sourcegraph email, matching Okta, as a verified email to your existing account. After requesting SOAP access it will be granted (and later removed) from your account.

- Q: What happens with tokens created during the elevated privilege window?

  - A: Those will get revoked after 1h since the SOAP account with elevated privileges is deleted.

- Q: Will my token survive the 1h TTL if I renew with Entitle?

  - A: No, they will be revoked after 1h.

- Q: How can I create a long-lived admin account for automation purposes?

  - A: For long-lived admin accounts needed for automation, reach out to in the #discuss-security channel.
