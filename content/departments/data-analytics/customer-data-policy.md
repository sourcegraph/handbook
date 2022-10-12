# Customer data policy

This document explains how Sourcegraph handles user data and information.

## Product data

| Source/platform                                            | Sourcegraph Cloud | Self-hosted | How long is this data kept for?                                                                      | Who has access?                 |
| ---------------------------------------------------------- | ----------------- | ----------- | ---------------------------------------------------------------------------------------------------- | ------------------------------- |
| [Ping telemetry](https://docs.sourcegraph.com/admin/pings) |                   | ✔️          | Delete data for any instance that’s been offline for over 3 years. All active instance data are kept | All Sourcegraph teammates       |
| Monitoring and observability tools (Sentry, Honeycomb)     | ✔️                |             | 90 days (Sentry) and 60 days (Honeycomb)                                                             | Engineering teams               |
| Sourcegraph Cloud Postgres database                        | ✔️                |             | Retain indefinitely unless deletion request is received                                              | Analytics and engineering teams |
| Sourcegraph.com event logs                                 | ✔️                |             | 10 years                                                                                             | All Sourcegraph teammates       |
| Amplitude                                                  | ✔️                |             | Retain indefinitely                                                                                  | All Sourcegraph teammates       |
| Google Analytics                                           | ✔️                |             | Retain indefinitely                                                                                  | All Sourcegraph teammates       |

## Data pipelines

| Source/platform                                                  | Sourcegraph Cloud | Self-hosted | How long is this data kept for?                                                                                                                                                                                         | Who has access?                 |
| ---------------------------------------------------------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Google Cloud Platform data pipeline (Buckets, Dataflow, Pub/Sub) | ✔️                | ✔️          | These GCP services only manage the data pipelines for select data sources on this policy. GCP buckets follow the same rules as the data they backup (i.e. Sourcegraph.com data backed up in buckets is kept for a year) | Analytics and engineering teams |

## User communications

| Source/platform                                                               | Sourcegraph Cloud | Self-hosted\* | How long is this data kept for?                                                                                                                                                                             | Who can access it?        |
| ----------------------------------------------------------------------------- | ----------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| HubSpot and Salesforce (CRM/marketing automation)                             | ✔️                | ✔️            | Retain all customer information                                                                                                                                                                             | All Sourcegraph teammates |
| Communication tools (Jira, Productboard)                                      | ✔️                | ✔️            | Retain all inbound customer communication                                                                                                                                                                   | All Sourcegraph teammates |
| Slack shared channels                                                         | ✔️                | ✔️            | Customer support channels and private messages are maintained indefinitely. See our full [Slack retention policy](../../company-info-and-process/communication/team_chat.md#retention) for more information | All Sourcegraph teammates |
| View full [list of sales tools](../sales/onboarding/index.md#getting-started) | ✔️                | ✔️            | Retain all outbound customer communication                                                                                                                                                                  | All Sourcegraph teammates |

**For self-hosted, Sourcegraph can only view instance admin and opted-in users' contact information.**

## FAQs

### Where is my data stored?

All outside tools listed above are cloud products and therefore the data is hosted by the service provider. All product data and any internally-built tools are stored in the Postgres database that hosts Sourcegraph Cloud, as well as data pipelines and warehouses in Google Cloud Platform.

### Can Sourcegraph developers or admins see my private code?

No. Only you can see or edit your private code. Code host permissions are enforced and not even Sourcegraph’s admin accounts can see private code. Manage your permissions in the code host and they will be automatically replicated in Sourcegraph.

### Can Sourcegraph developers or admins see my private settings and Sourcegraph configuration?

No. Only you can see or edit your private settings and Sourcegraph configuration.

### Is my data encrypted?

Yes, our dedicated security team follows best-practices for data encryption, both at-rest and in-transit. The following documents outline our practices in details:

- [Security Policy](https://about.sourcegraph.com/security/)
- [Privacy Policy](https://about.sourcegraph.com/privacy/)
- [Terms of Service](https://about.sourcegraph.com/terms-dotcom)

If you have further questions, reach out to us at [security@sourcegraph.com](mailto:security@sourcegraph.com).

### What is my private data used for?

Your in-product data (e.g. your user settings) are used to deliver you the product. This data is not accessible by most Sourcegraph teammates (see 'Can you see my private code?'). All other non-sensitive, personally identifiable information and product usage data is used to support our teams in delivering and improving Sourcegraph for you and your team.
