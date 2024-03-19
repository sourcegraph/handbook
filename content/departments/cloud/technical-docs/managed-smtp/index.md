# Managed SMTP

Managed SMTP allows Sourcegraph Cloud instances to have email delivery services configured out-of-the-box, and is enabled on all Sourcegraph Cloud instances by default.
SMTP services are currently backed by [SparkPost EU](https://app.eu.sparkpost.com).

Customer-facing documentation is available [here](https://docs.sourcegraph.com/cloud#managed-smtp).

In this document:

- [Enabling managed SMTP for a Cloud instance](#enabling-managed-smtp-for-a-cloud-instance) - links to guides
- [Vendor management](#vendor-management) - management details for the SMTP vendor
- [Monitoring](#monitoring) - monitoring SMTP capabilities
- [Vendor integration](#vendor-integration) - high-level overview of how the integration with the vendor works

## Enabling managed SMTP for a Cloud instance

Generally, managed SMTP will be enabled by default.

To manually enable SMTP, enforce the `smtp` invariant with:

```sh
mi2 instance check -enforce smtp
```

## Disabling managed SMTP for a Cloud instance

A customer should reach out to the account representative to have managed SMTP disabled.

Sourcegraph engineers can disable SMTP by setting the `.spec.managedSMTP.disabled` to `true` in the instance's `config.yaml`.

## Vendor management

- **Account**
  - Okta and Entitle: Accounts are provisioned via Okta SSO using Entitle. Accounts should generally only be granted only [Reporting access](https://support.sparkpost.com/docs/user-guide/managing-users) by default. [Developer access](https://support.sparkpost.com/docs/user-guide/managing-users) accounts can be granted through Entitle for development purposes.
- **Billing**: [Airbase Virtual Corporate Card](https://dashboard.airbase.io/services/323464)
  - We are billed based on emails delivered according to our usage plan, included currently up to 250,000 (as of Dec 2022), after which we are billed for overages.
- **API Keys**: [list](https://app.eu.sparkpost.com/account/api-keys) - see [vendor integration](#vendor-integration) for more details

## Monitoring

### Application-side

- Alerting: [frontend: email_delivery_failures](https://docs.sourcegraph.com/admin/observability/alerts#frontend-email-delivery-failures)
- Dashboards: [Frontend: Email delivery](https://docs.sourcegraph.com/admin/observability/dashboards#frontend-email-delivery)

### Vendor-side

Dashboards are available [in the SparkPost web application](https://app.eu.sparkpost.com/signals/analytics?range=day&timezone=America/Vancouver&precision=hour&metrics%5B0%5D=count_targeted&metrics%5B1%5D=count_rendered&metrics%5B2%5D=count_accepted&metrics%5B3%5D=count_bounce&report=summary). Relevant metrics to look at:

- Accepted count: we are billed for this based on our usage plans, up to 250,000 (as of Dec 2022).
- Bounce rates: this indicates emails that are being rejected by recipients due to misconfiguration (invalid recipients) or spam filters.
  - Note that the Sourcegraph application and features should be responsible for ensuring recipients are valid, for example via confirmation emails.
  - High bounce rates at high email volumes may impact our sender reputation. We may be able to reduce the impact of an customer's email delivery patterns by:
    - Disabling managed SMTP for the account.
    - Provisioning a [custom sending domain](#custom-sending-domains) or [dedicated IP pool](#dedicated-ip-pools).

No alerting is available yet - see [future work: vendor-side alerting](#vendor-side-alerting).

## Vendor integration

All integrations will send emails from the same sending domain, `@cloud.sourcegraph.com`, and default IP pool provided by SparkPost.

Operations are managed with the API key named `managed-smtp-operator`. This is available in `sourcegraph-secrets` GSM under `SPARKPOST_API_KEY`, and [the account's 1Password entry](#vendor-management). It only has the following permissions:

- `Metrics: Read-only`
- `Subaccounts: Read/Write`
- `Sending Domains: Read/Write`

For each Cloud instance, we create the following in Sparkpost:

- A [subaccount](https://support.sparkpost.com/docs/user-guide/subaccounts) corresponding to the instance
- An API key named `send_key` associated with the subaccount, with only 1 permission: `Send via SMTP`

The Cloud instance is then configured with the following:

1. A default sender address, `noreply+$CUSTOMER@cloud.sourcegraph.com`, and [SMTP configuration](https://app.eu.sparkpost.com/account/smtp)
2. A GSM entry in the instance project to store the `send_key`

## Security

SparkPost is a [SOC2-certified provider](https://www.sparkpost.com/policies/security/), and leverages a variety of security practices that our security team has deemed satisfactory - for more details, refer to the [SparkPost DPA](https://www.sparkpost.com/policies/dpa/).

Additionally, SparkPost has limited retention for most data - see its [GDPR compliance documentation](https://www.sparkpost.com/gdpr/) and [events data retention (10 days)](https://developers.sparkpost.com/api/events/#header-data-retention). Support for [data privacy requests](#data-privacy-requests) is also available.

### Email data access

[Reporting access](https://support.sparkpost.com/docs/user-guide/managing-users) (also see [vendor management](#vendor-management)) via the web application and the [message events API](https://developers.sparkpost.com/api/events/#header-event-types) can be used to access:

- Aggregate numbers (deliveries, bounces, etc)
- Specific email events, including receipients, subjects, message sizes, and other diagnostic data (but **not** email contents)

### Account isolation

Our [vendor integration](#vendor-integration) is designed such that all usage and access can be constrolled on a per-subaccount (i.e. per-customer) basis. API tokens distributed to Cloud instances are scoped to individual subaccounts with very limited permissions, and can be disabled individually.

### Employee Access Provisioning

Sourcegraph Employee access to SparkPost is exclusively granted through Entitle on a per-use basis. By default, accounts should be granted [`Reporting`](https://support.sparkpost.com/docs/user-guide/managing-users) level access. For development purposes, Employees can request [`Developer`](https://support.sparkpost.com/docs/user-guide/managing-users) level access.

To begin an access request, open Slack and type `/access_request`. Complete the dialog as follows:

![Entitle Request Form](https://storage.googleapis.com/sourcegraph-assets/handbook/engineering/cloud/entitle-sparkpost-reporting-request.png)

A member of Security or Cloud will then approve the request. Once approved, users can log in at https://app.eu.sparkpost.com/auth or by clicking the SparkPost icon on the Okta applications dashboard.

## Future features

These are unimplemented, but are noted here as potential starting points for accomodating additional features and/or requests.

### Vendor-side alerting

Vendor-side alerting can be set up by spinning up a service that can receive and process [SparkPost webhook events](https://developers.sparkpost.com/api/webhooks/), or a cron job to [query deliverability metrics](https://developers.sparkpost.com/api/metrics/#metrics) (also see [monitoring](#monitoring)).

### Data privacy requests

We can list recipients and delete all data associated with the [SparkPost data privacy API](https://developers.sparkpost.com/api/data-privacy/). Note that SparkPost has limited retention and access for most data - see [security](#security).

### Custom sending domains

Additional sending domains can be provisioned following [this guide](https://support.sparkpost.com/docs/getting-started/setting-up-domains). These domains can be assigned to specific subaccounts, which can be configured to use them as needed.

### Dedicated IP pools

_Very_ high-volume senders can impact the default sender's deliverability (see [monitoring](#monitoring)). They can be created following [this guide](https://support.sparkpost.com/docs/deliverability/dedicated-ip-pools) (note caveats such as reputation warm-up), and subaccounts can be configured to use them as needed.
