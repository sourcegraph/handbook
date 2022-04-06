# Datadog monitoring at Sourcregraph

[Datadog](https://app.datadoghq.com/) is external tool used for monitoring.

[RFC](https://docs.google.com/document/d/1xnAgloZB8sEkyhecjml2ByQl-aUCrJdWDYOBj3asA9g)

Its purpose is not to replace existing [monitoring and alerting](../../../engineering/tools/observability/monitoring.md), but to extend it with more options including:

- metrics
- logs
- APM & traces
- RUM (real user monitoring)
- etc.

# Content

- [Login to Datadog](#login)
- [Use cases for Datadog](#use-cases)
  - [Dashboards](#dasboards)
  - [Metrics](#metrics)
  - [Explore logs](#logs)
  - [APM and traces](#apm-and-traces)
  - [Syntetict (browser) tests](#syntectic-tests)
  - [Real User Monitoring](#real-user-monitoring)
  - [Alerting](#monitors)

## Login

Datadog can be accessed through Okta at [this link](https://app.datadoghq.com/)

# Use cases

### Dasboards

[Datadog documentation](https://docs.datadoghq.com/dashboards/)

All available dashboards can be access [here](https://app.datadoghq.com/dashboard/lists).

DevOps team is using [Cloud Uptime](https://app.datadoghq.com/dashboard/xjm-eb6-rdn/cloud-uptime) as overall Cloud Production overview.

### Metrics

[Datadog documentation](https://docs.datadoghq.com/metrics/)

### Logs

[Datadog documentation](https://docs.datadoghq.com/logs/explorer/)

### APM and traces

[Datadog documentation](https://docs.datadoghq.com/tracing/#explore-datadog-apm)

### Syntectic tests

[Datadog documentation](https://docs.datadoghq.com/synthetics/)

[Sourcegraph Cloud production Smoke tests example](https://app.datadoghq.com/synthetics/details/iis-dve-hzw)

### Real User Monitoring

[Datadog documentation](https://docs.datadoghq.com/real_user_monitoring/)

### Monitors

Monitors are used to notify teams and manage alerts at a glance on the Alerting platform.

[Datadog documentation](https://docs.datadoghq.com/monitors/)

[Sample Smoke tests monitor](https://app.datadoghq.com/monitors/61774211)
