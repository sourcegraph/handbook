# Managed Instance multi-region support

Every [v2.0 Cloud Instance](../v2.0/index.md) can be deployed to selected GCP region.
Region must be selected during instance creation, as modifying it aftewards would cause re-creation of all infrastructure resources incl. CloudSQL instance and GKE cluster, so all customer data would be gone and backups might not work.

## Supported GCP regions

1. North America (United States, Iowa) - `us-central1`

1. Europe

   - European Union (Germany, Frankfurt) - `europe-west3`
   - United Kingdom (London) - `europe-west2`

1. Asia (Tokyo, Japan) - `asia-northeast1`

1. Australia (Sydney) - `australia-southeast1`

If there's a specific need (regulations, latency) to support regions other than the ones listed above please let us know in #ask-cloud.

## Storing data outside of deployment region

Although Cloud Instance is deployed to selected region (country), Sourcegraph uses different external tools, which might keep some of customer data outside of instance deployment country:

1. Metrics

   Sourcegraph uses [GCP scoped project](https://cloud.google.com/monitoring/settings) to collect aggregated metrics from all dedicated customer GCP projects.

1. Audit logs

   Audit logs from customer instances are collected and exported to a single dedicated GCP Project in US.

1. Emails

   All Cloud instances uses [Managed SMTP](../managed-smtp/index.md), which stores emails by [PostMark](https://postmarkapp.com/support/article/917-is-postmark-secure-and-redundant) in Europe.
