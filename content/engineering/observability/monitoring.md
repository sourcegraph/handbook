# Sourcegraph monitoring guide

This page documents Sourcegraph-specific guides on developing monitoring for Sourcegraph.
For general observability development, refer to the [observability developer documentation](https://docs.sourcegraph.com/dev/background-information/observability).

For more context on monitoring at Sourcegraph, you should refer to:

- [Sourcegraph monitoring pillars](./monitoring_pillars.md)
- [Sourcegraph monitoring architecture](./monitoring_architecture.md)

> **Note:** Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

![image](https://user-images.githubusercontent.com/3173176/82078081-65c62780-9695-11ea-954a-84e8e9686970.png)

## Finding monitoring

This section outlines how to leverage existing Sourcegraph monitoring for scenarios specific to engineers at Sourcegraph.

For general documentation on finding monitoring, refer to [how to find monitoring](https://docs.sourcegraph.com/dev/how-to/find_monitoring).

For documentation on how site administrators find monitoring, refer to the [Sourcegraph observability documentation](https://docs.sourcegraph.com/admin/observability).

### Alerts

This section describes where Sourcegraph employees can find active alerts for Sourcegraph instances.

#### Sourcegraph instances

Instances managed by Sourcegraph (Sourcegraph Cloud, k8s.sgdev.org, etc.) have alerts redirected to Slack and Opsgenie as documented in the [instances page](../deployments/instances.md).
Additional details can be found in each instance's Grafana dashboards (`/-/debug/grafana`).

If you wish, you can set up Slack alerts for your own team on various instances by adding something like the following to the site configuration (`site-admin/configuration`) of that instance:

```json
  "observability.alerts": [
    {
      "level": "critical",
      "notifier": {
        "type": "slack",
        "username": "$TEAM - Sourcegraph Cloud",
        "url": "https://hooks.slack.com/services/..."
      },
      "owners": [
        "$TEAM"
      ]
    },
  ]
```

To silence an alert on a Sourcegraph instance you need to edit the deployed ConfigMap. For example, for Sourcegraph Cloud you need to edit [this file](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/base/frontend/sourcegraph-frontend.ConfigMap.yaml) and push to the `release` branch.

#### Customer instances

The bug report page (`/site-admin/report-bug`) for each Sourcegraph instance has a page that provides useful information about an instance's configuration. In this page, there is a field `"alerts":` that can be used to request recent alert data from customer instances:

```json
  "alerts": [
    {
      "serviceName": "executor-queue",
      "name": "warning: executor_queue_growth_rate",
      "timestamp": "2020-11-28T14:00:00Z",
      "average": 0.6504517025712306, // % of last 12 hours during which this alert was firing
      "owner": "code-intel"
    },
    // ...
  ]
```

Data for recent alerts and metrics can be requested from customers from their Grafana dashboards (`/-/debug/grafana`).

## Adding monitoring

See the [how to add monitoring guide](https://docs.sourcegraph.com/dev/how-to/add_monitoring) for most use cases.
This section describes guides specific to engineers at Sourcegraph.

### Creating Cloud-only Grafana dashboards

While all dashboards required to troubleshoot our product should be shipped to customers, our Cloud deployment might require additional dashboards to the ones we ship to customers, for example:

- When the additional dashboard is not ready yet to graduate to customers
- When the additional dashboard applies only to our Cloud deployment

Dashboards can be deployed to our Cloud deployment by adding them in `json` format to `dashboards/files` in [deploy-sourcegraph-dot-com](https://github.com/sourcegraph/deploy-sourcegraph-dot-com).
To learn more, reference the [dashboard generator documentation](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/release/dashboards).

Once the dashboard is ready to be shipped to customers, we will need to port it to the [monitoring generator](https://docs.sourcegraph.com/dev/background-information/observability/monitoring-generator) to be included in our next Sourcegraph release.
Custom dashboards cannot be added to the `sourcegraph/grafana` except through the generator.

You can use a [local Grafana](#connecting-grafana-to-a-remote-prometheus-instance) or the Cloud Grafana to create a new dashboard and once its ready, export it by following these steps:

- Open "Dashboard Settings" (top right cog).
- Select "JSON Model".
- Select the JSON content and save to a `.json` file in `sourcegraph/deploy-sourcegraph-dot-com/dashboards/files`.
- Create a new Pull Request with your changes.

Once deployed, you should be able to see your changes in [sourcegraph.com](https://sourcegraph.com/-/debug/grafana).

> **Warning**: Sourcegraph's Grafana UI does not allow direct changes due to a CSRF issue ([sourcegraph#6075](https://github.com/sourcegraph/sourcegraph/issues/6075)).

## Grafana

Sourcegraph uses a custom Grafana image, [`sourcegraph/grafana`](https://github.com/sourcegraph/sourcegraph/tree/master/docker-images/grafana), which contains minor changes from the vanilla Grafana image.
Learn more about its role in our overall monitoring architecture [here](./monitoring_architecture.md#sourcegraph-grafana), and also see the dev documentation [here](https://docs/sourcegraph.com/dev/background-information/observability/grafana).

## Prometheus and Alertmanager

Sourcegraph uses a custom Prometheus image, [`sourcegraph/prometheus`](https://github.com/sourcegraph/sourcegraph/tree/master/docker-images/prometheus), that bundles Alertmanager and a wrapper program for managing configuration changes.
Learn more about its role in our overall monitoring architecture [here](./monitoring_architecture.md#sourcegraph-prometheus), and also see the dev documentation [here](https://docs/sourcegraph.com/dev/background-information/observability/prometheus).

## Additional reading

- [Observability development guide](https://docs.sourcegraph.com/dev/background-information/observability)
- [Sourcegraph's high-level alerting metrics](https://docs.sourcegraph.com/admin/observability/metrics#high-level-alerting-metrics)
- [The difference between Warning and Critical alerts](https://docs.sourcegraph.com/admin/observability/alerting#understanding-alerts)
- [How some organizations query our high-level alerts for integration with their own systems](https://docs.sourcegraph.com/admin/observability/alerting_custom_consumption) and the related FAQ item, ["Can I consume Sourcegraph's metrics in my own monitoring system?"](https://docs.sourcegraph.com/admin/faq#can-i-consume-sourcegraph-s-metrics-in-my-own-monitoring-system-datadog-new-relic-etc)
- [Admin documentation for observability](https://docs.sourcegraph.com/admin/observability)

## Next steps

- Look at the monitoring for one of our services: [monitoring/symbols.go](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/monitoring/symbols.go)
- Check out [the API documentation for `Observable`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/monitoring/generator.go#L106-194)
- Send a PR and tag `@slimsag` or `@distribution` for review!
