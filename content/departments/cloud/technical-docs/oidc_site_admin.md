# Sourcegraph teammate access to Cloud instances

Sourcegraph temmates access to Cloud instances application interface (Web UI) is restricted to essential personnel only. This ensures Sourcegraph is able to help customers troubleshoot issues and deliver a smooth experience. We utilize Sourcegraph Operator Authentication Provider (SOAP) which implements OpenID Connect to enable Sourcegraph employees access to customer instance to make sure there is an audit trail for every access.

The Cloud team manages a separate Cloud OKTA account (separate from the company-wide Sourcegraph OKTA account) to manage UI access to Cloud instances. The Cloud OKTA account is federated by the parent Sourcegraph OKTA account to ensure access control is consistent across all our systems. For example, if an account is deactivated from the Sourcegraph OKTA account, the user will loss access to Cloud OKTA as well.

Each Cloud instance equals to an OKTA Oauth application. For each OKTA application, a OKTA group is created and assign access to the OKTA application. By default, no teammate has UI access to any customer Cloud instances, hence the OKTA group is empty. We will then grant time-bound access to the OKTA group as needed.

You can learn more about the detail from:

- [RFC 750 PRIVATE](https://docs.google.com/document/d/1Ia9sjW_KQ6BeJ28xJl3VvLIy7M9Ko7A1sBnTXkZ3W9o/edit#heading=h.trqab8y0kufp)
- [RFC 682 PRIVATE](https://docs.google.com/document/d/1Ot9o1emIjoegi7_OICXbcCqiGx-SebWvAtz_tp1E1wo/edit#heading=h.x2vmqaiitlnw).

## Admin users on Managed Instance

Every instance has a Sourcegraph Admin user added during [initialisation](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/7e9066e537b02feb6013585d443fc27514b71a71/util/cmd/mg_init_instance.go#L51) of Managed Instance. This admin user has [username, password and token](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/36db9bb65ec72ffa470752461b82c6999c00b969/util/pkg/config/config.go#L47) stored in Managed Instance GCP Secret Manager. This token is used to access Managed Instance from our services programmatically.

## Request access to Cloud instances UI

Unless customer explicitly [disabled OIDC on Managed Instance](#disabling-okta-oidc-on-managed-instance), authorized Sourcegraph Employee can request time-bound access to customer instances.

> WARN: Before requesting access to an instance, ensure you have consent from the customer.

Use the slash command in Slack, type `/access_request` anywhere.

Select the following and click `Send Request`.

- **Request type**: `Permission set`
- **Permissions set**: `Sourcegraph Cloud Org2Org`
- **Permission duration**: `1 Hour`
- **Add justification**: I need access to the cloud instance UI (Yes, you can just use canned response here)

The request will be approved automatically. Once you have received confirmation from the `Entitle` slack app, process to the next step.

Use the `/access_request` slash command on Slack again, and select the following

- **Request type**: `Specific permission`
- **Permissions set**: `Sourcegraph Cloud OKTA`
- **Resource Type**: `groups`
- **Resource**: Filter by the domain name of the cloud instance url, e.g. `company.sourcegraph.com`
- **Role**: `Group Member`
- **Grant Type**: `Direct`
- **Permission duration**: `1 Hour`
- **Add justification**: Please explain in detail why do you need access to the Cloud instance UI. It will be best to include relevant links to issues, slack thread to provide more context.

The request will be routed to #cloud, #security, or your direct manager for approval. We will review the request and approve the access request.

Please tag `@cloud-support` or `@security-support` in #cloud for immediate attention if it is time sensitive. If the request is related to an ongoing [incident](../../engineering/dev/process/incidents/index.md), please [page Cloud on-call engineer using OpsGenie](../../engineering/dev/process/incidents/index.md#incident-lead).

- `/genie alert I need UI access to company.sourcegraph.com for cloud`

Once the `Entitle` slack app has confirmed the permission is granted, you will have access to the instance for **1 hour**. Once it's expired, you will be logged-out and you will have to request access again from the beginning.

> Consider installing [requestly](https://requestly.io/) and use this [rule](https://app.requestly.io/rules/#sharedList/1670019946529-Michael-shared-list-12-2-2022) to automatically append the `sourcegraph-operator` query param on any instance signin page.

To login to the Cloud instance UI, open `https://company.sourcegraph.com/sign-in?sourcegraph-operator`, and click `Continoue with Sourcegraph Operator` to authenticate.

## Disabling OKTA OIDC on Managed Instance

SOAP access cane be disabled on instance when explictly asked by customer via configuration flag `disableSourcegraphManagementAccess: true` in `config.yaml`.

## FAQ

### Does it affect the number of seats customers pay for in the license?

No, users login through SOAP is a special account type, and they are excluded from license count.
