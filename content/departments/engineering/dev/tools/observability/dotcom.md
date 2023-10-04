# Sourcegraph.com observability

We provide some tooling to make [Sourcegraph.com](../../process/deployments/instances.md#sourcegraph-cloud) easier to monitor and observe. This includes observability for relevant critical infrastructure such as our [CI/CD pipelines](#ci-logs).

For general observability development, please refer to the [observability development documentation](https://docs.sourcegraph.com/dev/background-information/observability) instead, which includes links to useful how-to guides.

> [!NOTE] Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

## Monitoring

For metrics and alerting, see the [Sourcegraph monitoring guide](./monitoring.md).

## Grafana Cloud

We have a Grafana Cloud instance at [sourcegraph.grafana.net](https://sourcegraph.grafana.net/). Accounts are automatically provisioned by logging in with GSuite oAuth. Quick links:

- [Explore logs](https://sourcegraph.grafana.net/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22grafanacloud-sourcegraph-logs%22,%7B%22refId%22:%22A%22,%22expr%22:%22%7Bdeploy%3D%5C%22sourcegraph%5C%22%7D%22%7D%5D)
- [Explore traces](https://sourcegraph.grafana.net/explore?orgId=1&left=%5B%22now-1h%22,%22now%22,%22grafanacloud-sourcegraph-traces%22,%7B%22refId%22:%22A%22%7D%5D)
- [CI dashboard](https://sourcegraph.grafana.net/d/iBBWbxFnk/ci?orgId=1)

### Logs

Logs in Grafana Cloud is provided by [Grafana Loki](https://grafana.com/oss/loki/), a logs aggregation system that uses a PromQL-like query language called [LogQL](https://grafana.com/docs/loki/latest/logql/).

Loki allows you to easily query for logs, filter for fields within structured logs, and even generate metrics from logs. The [official LogQL documentation](https://grafana.com/docs/loki/latest/logql/) provides a complete reference, or you can refer to [this cheatsheet](https://megamorf.gitlab.io/cheat-sheets/loki/) for a brief overview.

#### Cloud logs

The Loki instance in Grafana Cloud is currently configured to ingest logs from Sourcegraph.com pushed from [`grafana-agent`'s Loki configuration](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/configure/grafana-agent/grafana-agent.ConfigMap.yaml#L58). To query these, you can start with a LogQL query like:

```logql
{deploy="sourcegraph",app="sourcegraph-frontend"}
  | logfmt
  | lvl="warn"
```

#### CI logs

The `sourcegraph/sourcegraph` CI pipeline also [uploads pipeline logs using `sg` to Loki](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/enterprise/dev/upload-build-logs.sh).
These uploads only happen for _failed builds_ on `main` - we do not publish data for successful builds or branch builds (for those, you can refer to our [build traces](https://docs.sourcegraph.com/dev/background-information/ci/development#pipeline-command-tracing)).
To query logs, you can start with a [LogQL query](#logs) like:

```logql
{app="buildkite",branch="main",state="failed"}
  |~ "FAILED:"
```

Also refer to the [CI dashboard](https://sourcegraph.grafana.net/d/iBBWbxFnk/ci?orgId=1), which is a set of graphs based on the contents of uploaded logs, for more examples—just select a panel and click "Explore" to see the underlying query.

A demo is also available that demonstrates one of the most common use cases of this functionality, assessing [flakes](https://docs.sourcegraph.com/dev/background-information/ci#flakes): [how to find out if a build is a recurring flake](https://www.loom.com/share/58cedf44d44c45a292f650ddd3547337).

Additional resources:

- [CI observability](https://docs.sourcegraph.com/dev/background-information/ci/development#observability)
- [CI playbook](../../process/incidents/playbooks/ci.md)

## Cloudflare

[Cloudflare Analytics](https://www.cloudflare.com/analytics/) is used to extract useful data about the performance of our WAF, as well as the overall traffic distribution to our instances. Note that the retention of analytics data is relatively short due to the [limits](https://developers.cloudflare.com/analytics/graphql-api/limits) on our plan.

This section gives a quick overview of how to access Cloudflare analytics, and how to interface with their GraphQL API. Note that in most cases, you'll be able to get much richer metrics by accessing our [existing monitoring dashboards](monitoring.md) on our own internal monitoring.

### GraphQL API

Cloudflare Analytics provides a somewhat [limited](https://developers.cloudflare.com/analytics/graphql-api/limits) API for retrieving monitoring data. Note that you can only retrieve relatively recent data, and have a limited number of operations.

### Tools

Cloudflare recommends using [GraphiQL](https://www.electronjs.org/apps/graphiql), a lightweight electron app, to interface with their API due to its relative ease of use. Configuration instructions are [here](https://developers.cloudflare.com/analytics/graphql-api/getting-started). The auth key and email can be found [here](https://github.com/sourcegraph/infrastructure/blob/main/dns/providers.tf). The tool also helps enumerate the available parameters, and is quite useful for exploring the API.

### Available data

The Cloudflare API mainly contains network layer information about communications to and from the service. The entire list of datasets is enumerated [here](https://developers.cloudflare.com/analytics/graphql-api/features/data-sets). For an example, the number of requests and page views per minute, along with the number of unique accessors can be found with the following query. Note that the results are ordered by `datetimeMinute_ASC`, since the default response ordering does not rely on time.

```{
viewer {
    zones(filter: {zoneTag: [ZONE_TAG]}) {
      httpRequests1mGroups(limit: 10000,  filter: {datetime_gt: "2020-10-29T10:00:00Z", datetime_lt: "2020-10-29T20:10:00Z"}, orderBy: [datetimeMinute_ASC]) {
        sum {
          requests
          pageViews
        }
        uniq {
          uniques
        }
        dimensions {
          datetimeMinute
        }
      }
    }
  }
}
```
