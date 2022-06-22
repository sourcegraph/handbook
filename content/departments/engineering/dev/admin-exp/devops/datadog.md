# Datadog monitoring at Sourcegraph

[Datadog](https://app.datadoghq.com/) is external tool used for monitoring.

[RFC](https://docs.google.com/document/d/1xnAgloZB8sEkyhecjml2ByQl-aUCrJdWDYOBj3asA9g)

Its purpose is not to replace existing [monitoring and alerting](../../../dev/tools/observability/monitoring.md), but to extend it with more options including:

- metrics
- logs
- APM & traces
- RUM (real user monitoring)
- etc.

See a short demo of our Datadog [integration](https://www.loom.com/share/27ae324f095a4a0f8a25261a86274ba4)

# Content

- [Datadog monitoring at Sourcegraph](#datadog-monitoring-at-sourcegraph)
- [Content](#content)
  - [Login](#login)
- [Use cases](#use-cases)
  - [Dashboards](#dashboards)
  - [Metrics](#metrics)
  - [Logs](#logs)
  - [APM and traces](#apm-and-traces)
  - [Synthetic tests](#synthetic-tests)
  - [Real User Monitoring](#real-user-monitoring)
  - [Monitors](#monitors)
  - [Managing Datadog resources](#managing-datadog-resources)
  - [FAQ](#faq)
    - [Running Datadog](#running-datadog)
    - [Enabling Datadog on Cloud](#enabling-datadog-on-cloud)

## Login

Datadog can be accessed through Okta at [this link](https://app.datadoghq.com/)

# Use cases

### Dashboards

[Datadog documentation](https://docs.datadoghq.com/dashboards/)

All available dashboards can be access [here](https://app.datadoghq.com/dashboard/lists).

DevOps team is using [Cloud Uptime](https://app.datadoghq.com/dashboard/xjm-eb6-rdn/cloud-uptime) as overall Cloud Production overview.

### Metrics

[Datadog documentation](https://docs.datadoghq.com/metrics/)

### Logs

[Datadog documentation](https://docs.datadoghq.com/logs/explorer/)

[Facets](https://docs.datadoghq.com/logs/explorer/facets/) are are user-defined tags and attributes from indexed logs.
They allow to query, group and aggregate logs by faceted fields.

### APM and traces

[Datadog documentation](https://docs.datadoghq.com/tracing/#explore-datadog-apm)

### Synthetic tests

[Datadog documentation](https://docs.datadoghq.com/synthetics/)

[Sourcegraph Cloud production Smoke tests example](https://app.datadoghq.com/synthetics/details/iis-dve-hzw)

### Real User Monitoring

[Datadog documentation](https://docs.datadoghq.com/real_user_monitoring/)

### Monitors

Monitors are used to notify teams and manage alerts at a glance on the Alerting platform.

[Datadog documentation](https://docs.datadoghq.com/monitors/)

[Sample Smoke tests monitor](https://app.datadoghq.com/monitors/61774211)

## Managing Datadog resources

The long term idea is to use [terraform datadog provider](https://registry.terraform.io/providers/DataDog/datadog/latest/docs) to persist state of all resources.
During the first part of trial period, terraform will be only importing changes made via UI, to allow people explore Datadog capabilities.

[Terraform implementation](https://github.com/sourcegraph/infrastructure/tree/main/datadog)

## FAQ

1. Cannot search and group logs by field from the log.
   - Ensure that field is a [facet](https://docs.datadoghq.com/logs/explorer/facets/#create-facets).

### Running Datadog

To run the agent locally, you can run the agent in docker with the following command:

```
docker run -d --cgroupns host \
              -v /var/run/docker.sock:/var/run/docker.sock:ro \
              -v /proc/:/host/proc/:ro \
              -v /sys/fs/cgroup/:/host/sys/fs/cgroup:ro \
              -p 127.0.0.1:8126:8126/tcp \
              -e DD_API_KEY=<DD_API_KEY>     \
              -e DD_APM_ENABLED=true \
            gcr.io/datadoghq/agent:latest
```

You will also need to modify the site-config (typically dev-private) to specify the other tracer

```patch
   "observability.tracing": {
     "sampling": "selective",
-    "type": "opentracing"
+    "type": "datadog"
   },
```

Lastly, run Sourcegraph with the following command:
`DD_ENV=dev DD_PROFILE_ALL=true sg start`
These env vars are need to ensure Zoekt uses the Datadog agent.

You can access the traces the same way as specified [here](https://docs.sourcegraph.com/admin/observability/tracing)

### Enabling Datadog on Cloud

To enable Datadog on Cloud, you need to:

1. Configure the site-config to contain the following:

```
   "observability.tracing": {
     "type": "datadog"
   },
```

1. Set the env var "DD_ENV" on the indexed-search service. This should be set to the environment its being deployed to, ie "dev", "staging", "prod".
