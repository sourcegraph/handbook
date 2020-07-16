# Sourcegraph monitoring developer guide

**Note:** Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

This document describes how to develop Sourcegraph's monitoring:

![image](https://user-images.githubusercontent.com/3173176/82078081-65c62780-9695-11ea-954a-84e8e9686970.png)

- [Overview](#overview)
  - [What is monitoring?](#what-is-monitoring)
  - [Monitoring technology we use](#monitoring-technology-we-use)
- [The five pillars of monitoring](#the-five-pillars-of-monitoring)
- [How easy is it to add monitoring?](#how-easy-is-it-to-add-monitoring)
  - [(optional) configure panel options](#optional-configure-panel-options)
  - [(optional) add solution documentation](#optional-add-solution-documentation)
- [Grafana](#grafana)
  - [Connecting Grafana to a remote Prometheus instance](#connecting-grafana-to-a-remote-prometheus-instance)
  - [Upgrading Grafana](#upgrading-grafana)
- [Prometheus and Alertmanager](#prometheus-and-alertmanager)
  - [Prometheus wrapper](#prometheus-wrapper)
  - [Upgrading Prometheus or Alertmanager](#upgrading-prometheus-or-alertmanager)
- [Additional reading](#additional-reading)
- [Next steps](#next-steps)

## Overview

### What is monitoring?

Monitoring at Sourcegraph encapsulates:

- How site admins know something _is wrong_ or _may be wrong_.
- Describing the overall health of Sourcegraph to site admins.
- Making it clear to site admins _where to go next if Sourcegraph is not healthy._

It does not include:

- Significant detail about what went wrong: the goal is just to direct the site admin to the next step.
- Solving a problem end-to-end: after looking at monitoring, admins MUST go elsewhere to solve the problem.
- Identifying individual problem cases (e.g. the details of why a single request failed).

Monitoring is just one piece of Sourcegraph's observability. See the [observability developer guide](index.md) for more information.

### Monitoring technology we use

We use [Prometheus](https://prometheus.io) for:

- Collecting high-level, and low-cardinality, metrics from our services.
- Defining alerting rules (we define alerts both as a single Prometheus metric and as Prometheus alert rules, more on this later).
  - Alerts can be [consumed programmatically](https://docs.sourcegraph.com/admin/observability/alerting_custom_consumption) or processed by [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/), which is [bundled into `sourcegraph/prometheus`](#prometheus-and-alertmanager).

We use [Grafana](https://grafana.com) for:

- Displaying dashboards for our Prometheus metrics.
- Sending our Prometheus metric alerts to site admins via email, Slack, etc.

We use a custom [declarative Go generator syntax](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/monitoring) for:

- Defining the services we monitor.
- Describing _what those services do_ to site admins.
- Laying out dashboards in a uniform, consistent, and simple way.
- Asserting constraints and principles that we want to hold ourselves to, such as ["every metric must have a defined alert"](#the-five-pillars-of-monitoring).
- Generating the Prometheus alerting rules and Grafana dashboards.
- Generating documentation in the form of ["possible solutions"](https://docs.sourcegraph.com/admin/observability/alert_solutions) for site admins to follow when alerts are firing.

## The five pillars of monitoring

At Sourcegraph we impose five strict constraints to monitoring which, at first, may seem quite surprising:

1. Creating dashboards that describe something other than a single Sourcegraph service is forbidden.
2. Adding a graph/panel that visualizes a metric, without defining an associated alert, is forbidden.
3. Creating dashboards outside of the monitoring generator, such as with the Grafana WYSIWYG editor, is forbidden. All metrics should be presented in the most plain, mundane, non-fanciful way that every site admin can understand.
4. Creating graphs/panels with more than 5 cardinalities (labels) is forbidden (in most cases there should only be one.)
5. The most useful information should be presented first, the least useful information should be hidden by default.

To understand why we impose these constraints, see [the five pillars of monitoring](monitoring_pillars.md)

## How easy is it to add monitoring?

There are some steps involved, but it's easy and the development process is quite seamless:

1. Get your Prometheus metric merged in our main codebase. You can find [examples](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+prometheus.MustRegister%28&patternType=literal) throughout our code, and [learn about the Proemtheus metric types](https://prometheus.io/docs/concepts/metric_types/).
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

### (optional) configure panel options

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

### (optional) add solution documentation

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

> Tip: In `PossibleSolutions` Markdown, you can use single quotes anywhere you would normally use backticks for code, and indention will automatically be removed for you.


Once you save the file, `doc/admin/observability/alert_solutions.md` will automatically be regenerated and you can even preview your changes at [http://localhost:5080/admin/observability/alert_solutions](http://localhost:5080/admin/observability/alert_solutions).

## Grafana

Sourcegraph uses a custom Grafana image, [`sourcegraph/grafana`](https://github.com/sourcegraph/sourcegraph/tree/master/docker-images/grafana), which contains minor changes from the vanilla Grafana image.

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

### Upgrading Grafana

To upgrade Grafana, make the appropriate version change to the [`sourcegraph/grafana` Dockerfile](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%40master+FROM+grafana/grafana:.*&patternType=regexp) and make sure to:

* Run `dev/start.sh` and verify that all generated Grafana dashboards still render correctly

## Prometheus and Alertmanager

Sourcegraph uses a custom Prometheus image, [`sourcegraph/prometheus`](https://github.com/sourcegraph/sourcegraph/tree/master/docker-images/prometheus), that bundles:

* [Prometheus](https://prometheus.io), which consumes metrics from Sourcegraph services
* [Alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager/), which handles alerts from Prometheus
* [prom-wrapper](https://github.com/sourcegraph/sourcegraph/tree/master/docker-images/prometheus/cmd/prom-wrapper), which subscribes to updates in [site configuration](https://docs.sourcegraph.com/admin/config/site_config) and propagates relevant settings to Alertmanager configuration.

### Prometheus wrapper

The [prom-wrapper](https://github.com/sourcegraph/sourcegraph/tree/master/docker-images/prometheus/cmd/prom-wrapper):

* Handles starting up Prometheus and Alertmanager
* Applies updates to site configuration by [generating a diff and applying changes](https://sourcegraph.com/search?q=repo:%5Egithub.com/sourcegraph/sourcegraph%24+file:docker-images/prometheus+type:symbol+Change+OR+Diff&patternType=literal)
  * Most notably, this includes [configuring notifiers and silences](https://docs.sourcegraph.com/admin/observability/alerting) for Sourcegraph alerts
* [Exposes endpoints for configuration issues, alerts summary statuses, and reverse-proxies Prometheus and Alertmanager](https://sourcegraph.com/search?q=repo:%5Egithub.com/sourcegraph/sourcegraph%24+file:docker-images/prometheus+PathPrefix%28:%5Bpath%5D%29.Handler%28:%5Bhandler%5D%29&patternType=structural)

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

