# Datadog monitoring at Sourcregraph

[Datadog](https://app.datadoghq.com/) is external tool used for monitoring.

[RFC](https://docs.google.com/document/d/1xnAgloZB8sEkyhecjml2ByQl-aUCrJdWDYOBj3asA9g)

Its purpose it not to replace existing [monitoring and alerting](../../../engineering/tools/observability/monitoring.md), but to extend it with more options including:

- metrics
- logs
- APM & traces
- RUM (real user monitoring)
- etc.

## Content

- [Login to Datadog](#login)
- [Use cases for Datadog](#use-cases)
  - [Dashboards](#dasboards)
  - [Metrics](#metrics)
  - [Explore logs](#logs)
  - [APM and traces](#apm-and-traces)
  - [Syntetict (browser) tests](#syntectic-tests)
  - [Real User Monitoring](#real-user-monitoring)

# Login

Datadog can be accessed through Okta at [this link](https://app.datadoghq.com/)

# Use cases

## Dasboards

[Datadog documentaion](https://docs.datadoghq.com/dashboards/)

All available dashboards can be access [here](https://app.datadoghq.com/dashboard/lists).

DevOps team is using [Cloud Uptime](https://app.datadoghq.com/dashboard/xjm-eb6-rdn/cloud-uptime) as overall Cloud Production overview.

## Metrics

[Datadog documentaion](https://docs.datadoghq.com/metrics/)

## Logs

[Datadog documentaion](https://docs.datadoghq.com/logs/explorer/)

## APM and traces

[Datadog documentaion](https://docs.datadoghq.com/tracing/#explore-datadog-apm)

## Syntectic tests

[Datadog documentaion](https://docs.datadoghq.com/synthetics/)

[Cloud production Smoke tests example](https://app.datadoghq.com/synthetics/details/iis-dve-hzw)

## Real User Monitoring

[Datadog documentaion](https://docs.datadoghq.com/real_user_monitoring/)
