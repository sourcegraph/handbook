# Cloud Observability

## Metrics

Metrics are gathered from all resources using the included Prometheus instance. This instance scrapes and stores the metrics locally.

**Only metrics queried in our [monitoring generator](https://docs.sourcegraph.com/dev/background-information/observability/monitoring-generator) are forwarded - this allowlist is automatically generated.** If you'd like a new metric to be queryable in a centralized manner, you _must_ [create a dashboard panel](https://docs.sourcegraph.com/dev/how-to/add_monitoring#alerts-dashboards-and-documentation) for it.

### Multi-instance dashboard

We no longer support multi-instance dashboards but the cloud-team is working on a replacement.

### Common operations

- To add a new dashboard to all managed instances, follow the [Creating a new individual dashboard](./operations.md#creating-a-new-individual-dashboard) procedure.

## Tracing

Traces from Cloud instances are now all available in GCP tracing. To view a trace, follow the same [How to use traces](https://docs.sourcegraph.com/admin/observability/tracing#how-to-use-traces) procedure. After clicking "View Trace" it may take a minute or two for the trace to become available in GCP. If the trace doesn't immediately render, wait a little bit and refresh the page.

## Logging

Application logs are automatically forwarded from the Cloud instances and made available in Google Cloud Logging. To view logs for a given Cloud instance, visit https://console.cloud.google.com/logs and select the project for the desired instance. Then execute the correct corresponding query.

### Application Logs (Sourcegraph)

```
resource.type="gce_instance"
```

### HTTP Load Balancer Logs

```
resource.type="http_load_balancer"
```

### Postgres Logs

```
resource.type="cloudsql_database"
log_name=~"cloudsql.googleapis.com%2Fpostgres.log"
```

> [!NOTE] to identify the correct GCP project, please refer to [FAQ: How do I figure out the GCP Project ID for a customer?](../../index.md#faq-how-do-i-figure-out-the-gcp-project-id-for-a-customer)
