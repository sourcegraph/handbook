# Managed SMTP

> NOTE: **Managed SMTP is currently an opt-in feature**, and is undergoing a gradual rollout. For more details, refer to [RFC 705](https://docs.google.com/document/d/1eaShaXlpMEezawuwTZ26nuo5g_1MjQmjpp8VvQTokzw/edit) and [the tracking issue](https://github.com/sourcegraph/customer/issues/1408). The goal is to eventually provide managed SMTP to all instances by default.

Managed SMTP allows Sourcegraph Cloud instances to have email delivery services configured out-of-the-box.
SMTP services are currently backed by [SparkPost EU](https://app.eu.sparkpost.com).

In this document:

- [Enabling managed SMTP for a Cloud instance](#enabling-managed-smtp-for-a-cloud-instance) - links to guides
- [Vendor management](#vendor-management) - management details for the SMTP vendor
- [Monitoring](#monitoring) - monitoring SMTP capabilities
- [Vendor integration](#vendor-integration) - high-level overview of how the integration with the vendor works

## Enabling managed SMTP for a Cloud instance

Managed SMTP is currently only available for Cloud v1.1 - see [the guide here](../v1.1/mi1-1_managed_smtp.md).

## Vendor management

- **Account**
  - Okta: WIP
  - Root account credentials: [Cloud Team - SparkPost](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&h=team-sourcegraph.1password.com&i=k5oim4jlnqnuqsqsjrs344nhsi&v=qxzajcksgc3givogl3r6qjbimu) (note that you must log in via [SparkPost EU](https://app.eu.sparkpost.com))
- **Billing**: [Airbase Virtual Corporate Card](https://dashboard.airbase.io/services/323464)
  - We are billed based on emails delivered according to our usage plan, included currently up to 250,000 (as of Dec 2022), after which we are billed for overages.
- **API Keys**: [list](https://app.eu.sparkpost.com/account/api-keys) - see [vendor integration](#vendor-integration) for more details

## Monitoring

### Application-side

- Alerting: [frontend: email_delivery_failures](https://docs.sourcegraph.com/admin/observability/alerts#frontend-email-delivery-failures)
- Dashboards: [Frontend: Email delivery](https://docs.sourcegraph.com/admin/observability/dashboards#frontend-email-delivery)
- [Multi-instance dashboard](../observability/index.md#multi-instance-dashboard): [Frontend: Total emails successfully delivered every 5 minutes](https://monitoring.sgdev.org/d/multi-instance-overviews/multi-instance-overviews?orgId=1)

### Vendor-side

Dashboards are available [in the SparkPost web application](https://app.eu.sparkpost.com/signals/analytics?range=day&timezone=America/Vancouver&precision=hour&metrics%5B0%5D=count_targeted&metrics%5B1%5D=count_rendered&metrics%5B2%5D=count_accepted&metrics%5B3%5D=count_bounce&report=summary). Relevant metrics to look at:

- Accepted count: we are billed for this based on our usage plans, up to 250,000 (as of Dec 2022).
- Bounce rates: this indicates emails that are being rejected by recipients due to misconfiguration (invalid recipients) or spam filters.
  - Note that the Sourcegraph application and features should be responsible for ensuring recipients are valid, for example via confirmation emails.
  - High bounce rates at high email volumes may impact our sender reputation. We may be able to reduce the impact of an customer's email delivery patterns by:
    - Disabling managed SMTP for the account.
    - Provisioning a [custom sending domain](#custom-sending-domains) or [dedicated IP pool](#dedicated-ip-pools).

For MI 1.1, `mi check` will also report some statistics - see [MI 1.1 managed SMTP](../v1.1/mi1-1_managed_smtp.md).

## Vendor integration

A reference implementation for MI v1.1 is available under `mi sync smtp`.

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

## Future features

These are unimplemented, but are noted here as potential starting points for accomodating additional features and/or requests.

### Vendor-side alerting

Vendor-side alerting can be set up by spinning up a service that can receive and process [SparkPost webhook events](https://developers.sparkpost.com/api/webhooks/), or a cron job to [query deliverability metrics](https://developers.sparkpost.com/api/metrics/#metrics) (also see [monitoring](#monitoring)).

### Data privacy

We can list recipients and delete all data associated with the [SparkPost data privacy API](https://developers.sparkpost.com/api/data-privacy/). Note that SparkPost has limited retention for most data - see its [GDPR compliance documentation](https://www.sparkpost.com/gdpr/) and [events data retention](https://developers.sparkpost.com/api/events/#header-data-retention).

### Custom sending domains

Additional sending domains can be provisioned following [this guide](https://support.sparkpost.com/docs/getting-started/setting-up-domains). These domains can be assigned to specific subaccounts, which can be configured to use them as needed.

### Dedicated IP pools

_Very_ high-volume senders can impact the default sender's deliverability (see [monitoring](#monitoring)). They can be created following [this guide](https://support.sparkpost.com/docs/deliverability/dedicated-ip-pools) (note caveats such as reputation warm-up), and subaccounts can be configured to use them as needed.
