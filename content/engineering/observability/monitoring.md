# Sourcegraph monitoring developer guide

> **Note:** Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

This document describes how to develop Sourcegraph's monitoring.

![image](https://user-images.githubusercontent.com/3173176/82078081-65c62780-9695-11ea-954a-84e8e9686970.png)

- [Sourcegraph monitoring developer guide](#sourcegraph-monitoring-developer-guide)
  - [Overview](#overview)
    - [Monitoring pillars](#monitoring-pillars)
    - [Monitoring architecture](#monitoring-architecture)
  - [Finding Monitoring](#finding-monitoring)
    - [Alerts](#alerts)
      - [Sourcegraph instances](#sourcegraph-instances)
      - [Customer instances](#customer-instances)
    - [Find available metrics](#find-available-metrics)
    - [Queries](#queries)
  - [Adding monitoring](#adding-monitoring)
    - [Configure panel options](#configure-panel-options)
    - [Add solution documentation](#add-solution-documentation)
    - [Tracking a new service](#tracking-a-new-service)
  - [Grafana](#grafana)
    - [Connecting Grafana to a remote Prometheus instance](#connecting-grafana-to-a-remote-prometheus-instance)
    - [Creating Cloud only Grafana dashboards](#creating-cloud-only-grafana-dashboards)
    - [Upgrading Grafana](#upgrading-grafana)
  - [Prometheus and Alertmanager](#prometheus-and-alertmanager)
    - [Upgrading Prometheus or Alertmanager](#upgrading-prometheus-or-alertmanager)
  - [Additional reading](#additional-reading)
  - [Next steps](#next-steps)

## Overview

Monitoring at Sourcegraph encapsulates:

- How site admins know something _is wrong_ or _may be wrong_.
- Describing the overall health of Sourcegraph to site admins.
- Making it clear to site admins _where to go next if Sourcegraph is not healthy._

It does not include:

- Significant detail about what went wrong: the goal is just to direct the site admin to the next step.
- Solving a problem end-to-end: after looking at monitoring, admins MUST go elsewhere to solve the problem.
- Identifying individual problem cases (e.g. the details of why a single request failed).

Monitoring is just one piece of Sourcegraph's observability. See the [observability developer guide](index.md) for more information.

### Monitoring pillars

To learn more about our monitoring goals and principles, refer to: [monitoring pillars](monitoring_pillars.md).

### Monitoring architecture

To learn more about our monitoring stack and architecture, refer to: [monitoring architecture](./monitoring_architecture.md).

## Finding Monitoring

### Alerts

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

### Find available metrics

If you need to find where metrics are declared or updated you can use Sourcegraph itself to search if you have a metric name. Sometimes
the metrics are hard to find because their name declarations are not literal strings but are concatenated instead in code from variables.
You can try a specialized tool called `promgrep` to find them. Run the tool in the root `sourcegraph/sourcegraph` source directory.

```
$ go get github.com/sourcegraph/promgrep
$ promgrep <some_partial_metric_name>
```

If you run it in an Emacs shell buffer or in GoLand terminal then the results are clickable and get you to the locations in code
where the metrics are declared.

Running `promgrep` without any arguments lists all declared metrics.

### Queries

The quickest way to test these queries would be to access the Grafana instance exposed to admins at `/-/debug/grafana` via a reverse-proxy. You can then use any of [the Prometheus metric types](https://prometheus.io/docs/concepts/metric_types/) to extract useful information from the prometheus metrics mentioned above. For an example of queries we've found useful, you can see the [frontend monitoring queries here](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@64aa473/-/blob/monitoring/frontend.go#L12-43).

## Adding monitoring

There are some steps involved, but it's easy and the development process is quite seamless:

1. Get your Prometheus metric merged in our main codebase. You can find [examples](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+prometheus.MustRegister%28&patternType=literal) throughout our code, and [learn about the Proemtheus metric types](https://prometheus.io/docs/concepts/metric_types/).
   - If you are doing this for a new service, also refer to [tracking a new service](#tracking-a-new-service).
2. Use the Grafana Explore page [on Sourcegraph.com](https://sourcegraph.com/-/debug/grafana/explore), [k8s.sgdev.org](https://k8s.sgdev.org/-/debug/grafana/explore), or [your local development server](http://localhost:3080/-/debug/grafana/explore) to start writing your Prometheus query.
3. Make a guess about what a good/bad value for your query is. It's OK if this isn't perfect, just do your best. Some examples:
   - `Warning: Alert{GreaterOrEqual: 50}`
   - `Warning: Alert{LessOrEqual: 50}`
4. Run a Sourcegraph `dev/start.sh` server and [visit Grafana](http://localhost:3080/-/debug/grafana).
5. Look for an existing dashboard that your information should go in. Think "when this number shows something bad, which service's logs are likely to be most relevant?"
6. Open that service's monitoring definition (e.g. `monitoring/frontend.go`, `monitoring/git_server.go`) in your editor.
7. Declare your [`Observable`](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40master+file:%5Emonitoring/+type+Observable&patternType=literal) by adding it to [an existing `Row` in the file](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@64aa473/-/blob/monitoring/frontend.go#L12-43), or by adding a new [`Row`](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40master+file:%5Emonitoring/+type+Row&patternType=literal) or [`Group`](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40master+file:%5Emonitoring/+type+Group&patternType=literal) entirely. Here's an example `Observable` to get you started:

```go
{
    Name:        "99th_percentile_search_request_duration",
    Description: "99th percentile successful search request duration over 5m",
    Query:       `histogram_quantile(0.99, sum by (le)(rate(search_request_duration{status="success}[5m])))`,
    Warning:     Alert{GreaterOrEqual: 20},
}
```

As soon as you save the file, everything is regenerated by `dev/start.sh` (Grafana dashboards, Prometheus alerting rules, documentation, etc.) and you can simply refresh on the dashboard you're editing to see your changes.

### Configure panel options

There are not many panel options (intentionally) to keep things simple. The primary thing you'll use is to change the Grafana display from plain numbers to a unit like seconds:

```diff
{
    Name:        "99th_percentile_search_request_duration",
    Description: "99th percentile successful search request duration over 5m",
    Query:       `histogram_quantile(0.99, sum by (le)(rate(search_request_duration{status="success}[5m])))`,
    Warning:     Alert{GreaterOrEqual: 20},
+   PanelOptions: PanelOptions().LegendFormat("duration").Unit(Seconds),
}
```

This step is optional, but highly recommended.

### Add solution documentation

It's best if you also add some Markdown documentation with your best guess of what someone _might consider doing_ if they observe the alert firing (again, just your best guess is good enough here):

```diff
{
    Name:        "99th_percentile_search_request_duration",
    Description: "99th percentile successful search request duration over 5m",
    Query:       `histogram_quantile(0.99, sum by (le)(rate(search_request_duration{status="success}[5m])))`,
    Warning:     Alert{GreaterOrEqual: 20},
    PanelOptions: PanelOptions().LegendFormat("duration").Unit(Seconds),
+	PossibleSolutions: `
+       - Look at the 'frontend' logs for details on the slow search queries.
+   `,
}
```

> **Tip:** In `PossibleSolutions` Markdown, you can use single quotes anywhere you would normally use backticks for code, and indention will automatically be removed for you.

Once you save the file, `doc/admin/observability/alert_solutions.md` will automatically be regenerated and you can even preview your changes at [http://localhost:5080/admin/observability/alert_solutions](http://localhost:5080/admin/observability/alert_solutions).

This step is optional, but highly recommended.

### Tracking a new service

Metrics should be made available over HTTP for [Prometheus](./monitoring_architecture.md#sourcegraph-prometheus) to scrape. By default, Prometheus expects metrics to be exported on `$SERVICEPORT/metrics` - for example, run your local Sourcegraph dev server and metrics should be available on `http://localhost:$SERVICEPORT/metrics`.

In [deploy-sourcegraph](https://github.com/sourcegraph/deploy-sourcegraph), Prometheus uses the Kubernetes API to discover endpoints to scrape. Just add the following annotations to your service definition:

```yaml
metadata:
  annotations:
    prometheus.io/port: "$SERVICEPORT" # replace with the port your service runs on
    sourcegraph.prometheus/scrape: "true"
```

In [deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-docker), Prometheus relies on targets defined in the [`prometheus_targets`](https://github.com/sourcegraph/deploy-sourcegraph-docker/blob/master/prometheus/prometheus_targets.yml) configuration file - you will need to add your service here.

## Grafana

Sourcegraph uses a custom Grafana image, [`sourcegraph/grafana`](https://github.com/sourcegraph/sourcegraph/tree/master/docker-images/grafana), which contains minor changes from the vanilla Grafana image. Learn more about its role in our overall monitoring architecture [here](./monitoring_architecture.md#sourcegraph-grafana).

### Connecting Grafana to a remote Prometheus instance

You may wish to connect Grafana to a remote Prometheus instance, like Sourcegraph.com, to show more real data than is available on your dev server. You may do so by getting `kubectl` connected to a Sourcegraph cluster and then port-forwarding via:

```sh
kubectl port-forward svc/prometheus 30090:30090
```

Then make one of the following changes to the Grafana development datasources:

* `url: http://host.docker.internal:30090` in [`dev/all/prometheus`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@master/-/blob/dev/grafana/all/prometheus.yaml) (non-Linux)
* `url: http://127.0.0.1:30090` in [`dev/linux/prometheus`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@master/-/blob/dev/grafana/linux/prometheus.yaml) (Linux)

and rerun `./dev/start.sh` or `./enterprise/dev/start.sh`.

If you want to avoid spinning up in the entire Sourcegraph stack and just want to look at Grafana, you can also use `./dev/grafana.sh`. You can skip the datasource change above and just use the following port-forward to take the place of the normal development Prometheus instance and run a standalone Grafana instance:

```sh
kubectl port-forward svc/prometheus 9090:30090 -n prod
./dev/grafana.sh
```

### Creating Cloud only Grafana dashboards

While all dashboards required to troubleshoot our product should be shipped to customers, our Cloud deployment might require additional dashboards to the ones we ship to customers, for example:
- When the additional dashboard is not ready yet to graduate to customers
- When the additional dashboard applies only to our Cloud deployment

Dashboards can be deployed to our Cloud deployment by adding them in `json` format to `dashboards/files` in https://github.com/sourcegraph/deploy-sourcegraph-dot-com/. To learn more, reference its [documentation](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/tree/feature/release/dashboards)

Once the dashboard is ready to be shipped to customers, we will need to port it to the [monitoring generator](./monitoring_architecture.md#monitoring-generator) to be included in our next Sourcegraph release.

You can use a [local Grafana](#connecting-grafana-to-a-remote-prometheus-instance) or the Cloud Grafana to create a new dashboard and once its ready, export it by following these steps:

> **Warning**: Cloud Grafana does not allow saving

- Open "Dashboard Settings" (top right cog).
- Select "JSON Model".
- Select the JSON content and save to a `.json` file in `sourcegraph/deploy-sourcegraph-dot-com/dashboards/files`.
- Create a new Pull Request with your changes.

Once deployed, you should be able to see your changes in [sourcegraph.com](https://sourcegraph.com/-/debug/grafana).

### Upgrading Grafana

To upgrade Grafana, make the appropriate version change to the [`sourcegraph/grafana` Dockerfile](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40master+FROM+grafana/grafana:.*&patternType=regexp) and make sure to:

* Run `dev/start.sh` and verify that all generated Grafana dashboards still render correctly

## Prometheus and Alertmanager

Sourcegraph uses a custom Prometheus image, [`sourcegraph/prometheus`](https://github.com/sourcegraph/sourcegraph/tree/master/docker-images/prometheus), that bundles Alertmanager and a wrapper program for managing configuration changes. Learn more about its role in our overall monitoring architecture [here](./monitoring_architecture.md#sourcegraph-prometheus).

### Upgrading Prometheus or Alertmanager

To upgrade Prometheus or Alertmanager, make the appropriate version and sum changes to the [`sourcegraph/prometheus` Dockerfile](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40master+%28FROM+prom/prometheus:%29.*+OR+%28FROM+prom/alertmanager:%29.*&patternType=regexp) and make sure to:

* Upgrade the [Alertmanager and Prometheus Go client dependencies](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40master+file:go.mod+alertmanager+OR+prometheus/client_golang&patternType=literal), and make sure everything still builds
* Run `dev/start.sh` and verify that:
  * all generated Grafana dashboards still render (`localhost:3370`)
  * all Prometheus rules are evaluated (`localhost:9090/rules`)
  * Alertmanager starts up correctly (`localhost:9090/alertmanager/#/status`) and can be configured via `observability.alerts`

## Additional reading

- [How Sourcegraph's high-level alerting metrics work](https://docs.sourcegraph.com/admin/observability/metrics_guide)
- [The difference between Warning and Critical alerts](https://docs.sourcegraph.com/admin/observability/alerting_custom_consumption#the-difference-between-critical-and-warning-alerts)
- [How some organizations query our high-level alerts for integration with their own systems](https://docs.sourcegraph.com/admin/observability/alerting_custom_consumption)
- [Admin documentation for observability](https://docs.sourcegraph.com/admin/observability)

## Next steps

- Look at the monitoring for one of our services: [monitoring/symbols.go](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/monitoring/symbols.go)
- Check out [the API documentation for `Observable`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/monitoring/generator.go#L106-194)
- Send a PR and tag `@slimsag` or `@distribution` for review!
