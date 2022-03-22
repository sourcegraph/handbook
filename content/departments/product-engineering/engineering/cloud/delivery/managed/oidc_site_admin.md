# Purpose and Background

An increasing number of customers have tight security controls and requirements for Sourcegraph Managed Instances. Sourcegraph Teammates may have the need for Site Admin access to a customer's Managed Instance. This was accomplished in the past by using a shared service user account using the `built-in` auth provider. This auth provider method lacks two-factor authentication (2FA) and has been considered unacceptable by a few customers.

[RFC 576: Allow disabling sign-up for OpenID Connect auth providers](https://docs.google.com/document/d/1Op6jum_SQJSU5KeJlJJEED1QYFdXOO30botb3BgEO6U/edit) provided the necessary changes to allow Sourcegraph to use their internal Okta Auth provider as a way to grant Site Admin access to managed instances. Okta provides 2FA enforcement and audit logs which help improve the security posture of Managed Instance access.

# Procedure

These instructions are adapted from [Sourcegraph Docs Site - User authentication (SSO) instructions](https://docs.sourcegraph.com/admin/auth#openid-connect).

## Accessing the managed instance

Log into the managed instance using [SSH via IAP Tunneling](./operations.md/#ssh-access)

Create a shell session into the `sourcegraph-frontend-internal` container

```
docker exec -it sourcegraph-frontend-internal /bin/sh
```

## Initial configuration of the OpenID Connect (OIDC) Auth Provider

Edit /home/sourcegraph/site-config.json, add this auth provider configuration to “auth.providers”. OpenID connect information is available in 1Password > Customer managed instances > “Okta OIDC - Managed Instance”

```json
{
  "allowSignup": true, // this value is temporary
  "clientID": "<value from 1password>",
  "clientSecret": "<value from 1password>",
  "displayName": "Sourcegraph Management",
  "issuer": "https://sourcegraph.okta.com",
  "requireEmailDomain": "sourcegraph.com",
  "type": "openidconnect"
}
```

## Restart frontend containers

```
docker ps | grep frontend | awk '{print $1}' | xargs -n1 docker restart
```

## Creating the initial management user account

Log into the managed instance through the Sign In page. Click “Continue with Sourcegraph Management” to begin the authentication flow and create the initial account.

## Promote initial management user to Site Admin

Create a psql session into the pgsql container.

```bash
docker exec -it pg psql -U sg
```

Promote the initial account to Site Admin. Replace `<first>` and `<last>` with your first and last name respectively. Replace `<id>` using the output from the first SQL command.

```sql
// Find the initial management user account, note the id (first column)
SELECT * FROM users WHERE username like '%<first>.<last>%';


// Promote user to site admin, replace <id> with the
UPDATE  users SET site_admin=’t’ WHERE id=<id>;
```

## Disable automatic account creation

The initial management account should now be a site admin. Navigate to the Site Admin UI > Site Configuration and change `“allowSignup”: true` to `“allowSignup”: false` for the Sourcegraph Management auth provider. This requires other Site Admins to explicitly add users to a managed instance through the UI in order to delegate access. Save the changes.

```json
{
  "allowSignup": false, // disable automatic creation
  "clientID": "<value from 1password>",
  "clientSecret": "<value from 1password>",
  "displayName": "Sourcegraph Management",
  "issuer": "https://sourcegraph.okta.com",
  "requireEmailDomain": "sourcegraph.com",
  "type": "openidconnect"
}
```

## Apply configuration changes

Restart frontend containers to apply changes.

```bash
docker ps | grep frontend | awk '{print $1}' | xargs -n1 docker restart
```

## Fix the initial account username

Edit the initial account username to follow the “`sourcegraph-management-<first>-<last>`” convention. This allows the customer Site Admins to audit Sourcegraph Internal Teammate access.

## Onboard Sourcegraph Teammates

> **NOTE:** The convention for Sourcegraph Management usernames is `sourcegraph-management-<first>-<last>`.

Add Sourcegraph Teammates as required. Use the convention for usernames and use their corresponding @sourcegraph.com email address.

- Customer Support - Application Engineers
- Customer Engineers
- Delivery Team
  - All members, for on-call rotation
