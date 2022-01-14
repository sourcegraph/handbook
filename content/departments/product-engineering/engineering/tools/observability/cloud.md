# Sourcegraph Cloud observability

We provide some tooling to make [Sourcegraph Cloud](../../process/deployments/instances.md#sourcegraph-cloud) easier to monitor and observe. This includes observability for relevant critical infrastructure such as CI/CD pipeline.

For general observability development, please refer to the [observability development documentation](https://docs.sourcegraph.com/dev/background-information/observability) instead, which includes links to useful how-to guides.

> NOTE: Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

## Built-in dashboards

To view metrics, built-in Grafana dashboards are available in [https://sourcegraph.com/-/debug/grafana](https://sourcegraph.com/-/debug/grafana/). Learn about how these dashboards in the [Grafana documentation](https://docs.sourcegraph.com/admin/observability/metrics#grafana).

> WARNING: These are only available to site admins on Cloud - see [Metrics](#metrics).

## Grafana Cloud

We have a Grafana Cloud instance at [sourcegraph.grafana.net](https://sourcegraph.grafana.net/). Accounts are automatically provisioned by logging in with GSuite oAuth. Quick links:

- [Explore logs](https://sourcegraph.grafana.net/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22grafanacloud-sourcegraph-logs%22,%7B%22refId%22:%22A%22,%22expr%22:%22%7Bdeploy%3D%5C%22sourcegraph%5C%22%7D%22%7D%5D)
- [Explore traces](https://sourcegraph.grafana.net/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22grafanacloud-sourcegraph-traces%22,%7B%22refId%22:%22A%22%7D%5D)
- [CI dashboard](https://sourcegraph.grafana.net/d/iBBWbxFnk/ci?orgId=1)

### Logs

Logs in Grafana Cloud is provided by [Grafana Loki](https://grafana.com/oss/loki/), a logs aggregation system that uses a PromQL-like query language called [LogQL](https://grafana.com/docs/loki/latest/logql/).

Loki allows you to easily query for logs, filter for fields within structured logs, and even generate metrics from logs. The [official LogQL documentation](https://grafana.com/docs/loki/latest/logql/) provides a complete reference, or you can refer to [this cheatsheet](https://megamorf.gitlab.io/cheat-sheets/loki/) for a brief overview.

#### Cloud logs

The Loki instance in Grafana Cloud is currently configured to ingest logs from Sourcegraph Cloud pushed from [`grafana-agent`'s Loki configuration](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/configure/grafana-agent/grafana-agent.ConfigMap.yaml#L58). To query these, you can start with a LogQL query like:

```logql
{deploy="sourcegraph",app="sourcegraph-frontend"}
  | logfmt
  | lvl="warn"
```

#### CI logs

The `sourcegraph/sourcegraph` CI pipeline also [uploads pipeline logs using `sg` to Loki](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/enterprise/dev/upload-build-logs.sh). To query these, you can start with a LogQL query like:

```logql
{app="buildkite",branch="main",state="failed"}
  |~ "FAILED:"
```

Also refer to the [CI dashboard](https://sourcegraph.grafana.net/d/iBBWbxFnk/ci?orgId=1) for more examples—just select a panel and click "Explore" to see the underlying query.

### Metrics

Metrics are not yet available in Grafana Cloud. We are currently investigating avenues for making these dashboards available without requiring site admin access: [sourcegraph/sourcegraph#25407](https://github.com/sourcegraph/sourcegraph/issues/25407)

> NOTE: Some metrics can also be derived from logs - see [Logs](#logs)
