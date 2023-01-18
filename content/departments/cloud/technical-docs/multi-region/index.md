# Managed Instance multi-region support

Every [v2.0 Cloud Instance](../v2.0/index.md) can be deployed to selected GCP region.
Region must be selected during instance creation, as modifying it aftewards would cause re-creation of all infrastructure resources incl. CloudSQL instance and GKE cluster, so all customer data would be gone and backups might not work.

## Supported GCP regions

[List of GCP regions supported by Sourcegraph](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/controller/-/blob/internal/apis/sourcegraphcloud/types.go?L28)

## Storing data outside of deployment region

Although Cloud Instance is deployed to selected region (country), Sourcegraph uses different external tools, which might keep some of customer data outside of instance deployment country:

1. Metrics
   Sourcegraph uses [GCP scoped project](https://cloud.google.com/monitoring/settings) to collect aggregated metrics from all dedicated customer GCP projects.
   Sourcegraph uses [Federated GCP Prometheus]() to collect Sourcegraph application metrics from all dedicated customer GCP projects
1. Logs
   Audit logs from customer instances are collected and exported to a single dedicated GCP Project.
1. Emails
   All Cloud instances uses [Managed SMTP](../managed-smtp/index.md), which stores emails by [PostMark](https://postmarkapp.com/support/article/917-is-postmark-secure-and-redundant).
1. Instance customer data (customer email domain, customer Sourcegraph subdomain)
   Every customer instance has generated `config.yaml` file, stored in [sourcegraph/cloud](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/cloud) repository. This file contains customer `displayName`, `domain`
