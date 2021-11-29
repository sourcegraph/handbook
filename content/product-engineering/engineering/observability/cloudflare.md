# Sourcegraph Cloudflare monitoring developer guide

> **Note:** Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

This document gives a quick overview of how to access Cloudflare analytics, and how to interface with their GraphQL API. Note that in most cases, you'll be able to get much richer metrics by accessing our [existing monitoring dashboards](monitoring.md) on our own internal monitoring.

## GraphQL API

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
