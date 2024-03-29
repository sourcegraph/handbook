# Sourcegraph.com observability

We provide some tooling to make [Sourcegraph.com instance](../../process/deployments/instances.md#dotcom) easier to monitor and observe.

For general observability development, please refer to the [observability development documentation](https://docs.sourcegraph.com/dev/background-information/observability) instead, which includes links to useful how-to guides.

> [!NOTE] Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

## Metrics and alerting

For metrics and alerting, see the [Sourcegraph monitoring guide](./monitoring.md).

## Logging

Service logs are available in GCP logging in the `sourcegraph-dev` project.
The quick-and-easy way is to go to the [GCP console workloads page](https://console.cloud.google.com/kubernetes/workload/overview?project=sourcegraph-dev), select the workload of interest, and head over to the "Logs" tab.

Sourcegraph service logs [follow a standardized JSON format](https://sourcegraph.com/docs/admin/observability/logs#logs) - you can use [this Logs Explorer view](https://cloudlogging.app.goo.gl/WXpyV1uSzDWnLMg7A) which is preconfigured with important attributes extracted to the log summary line, and uncomment the `labels.k8s-pod/app` filter to target your workload of choice.
The resulting log filter should look something like this:

```none
labels.k8s-pod/app="sourcegraph-frontend"
resource.type="k8s_container"
resource.labels.project_id="sourcegraph-dev"
resource.labels.location="us-central1-f"
resource.labels.cluster_name="cloud"
resource.labels.namespace_name="prod"
```

You can also use `kubectl` to work with service log output in the command line - see the [Kubernetes guide](../../process/deployments/kubernetes.md) to get started.

## Tracing

Traces are available in [Cloud Trace](https://console.cloud.google.com/traces/list?project=sourcegraph-dev) and an [in-cluster Jaeger deployment](https://sourcegraph.com/-/debug/jaeger/).
The latter is only accessible with site admin permissions - see [Site-admin access to internal instances](../../../../security/admin-access-internal-instances.md).

Trace spans meeting certain criteria are also exported to [Honeycomb](https://ui.honeycomb.io/sourcegraph) via our OpenTelemetry Collector deployment - see [`otel-collector.ConfigMap.yaml`](https://github.com/sourcegraph/deploy-sourcegraph-cloud/blob/release/base/otel-collector/otel-collector.ConfigMap.yaml) for our current configuration.

Also refer to [how to use traces](https://sourcegraph.com/docs/admin/observability/tracing#how-to-use-traces).

## Cloudflare

[Cloudflare Analytics](https://www.cloudflare.com/analytics/) is used to extract useful data about the performance of our WAF, as well as the overall traffic distribution to our instances. Note that the retention of analytics data is relatively short due to the [limits](https://developers.cloudflare.com/analytics/graphql-api/limits) on our plan.

This section gives a quick overview of how to access Cloudflare analytics, and how to interface with their GraphQL API. Note that in most cases, you'll be able to get much richer metrics by accessing our [existing monitoring dashboards](monitoring.md) on our own internal monitoring.

### GraphQL API

Cloudflare Analytics provides a somewhat [limited](https://developers.cloudflare.com/analytics/graphql-api/limits) API for retrieving monitoring data. Note that you can only retrieve relatively recent data, and have a limited number of operations.

Cloudflare recommends using [GraphiQL](https://www.electronjs.org/apps/graphiql), a lightweight electron app, to interface with their API due to its relative ease of use. Configuration instructions are [here](https://developers.cloudflare.com/analytics/graphql-api/getting-started). The auth key and email can be found [here](https://github.com/sourcegraph/infrastructure/blob/main/dns/providers.tf). The tool also helps enumerate the available parameters, and is quite useful for exploring the API.

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

### Cloudflare logs in Elasticsearch

Cloudflare logs are streamed to an Elasticsearch deployment managed by the Security team.
Reach out to #discuss-security to provision access.

See [the Cloudflare logs reference](https://developers.cloudflare.com/logs/reference/) and related pages for documentation on various fields.
