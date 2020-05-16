# Sourcegraph: The five pillars of monitoring

**Note:** Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability).

This document describes in-depth the five pillars / constraints that we impose at Sourcegraph when developing our monitoring infrastructure and, in specific, why we impose them.

See [the monitoring developer guide](monitoring.md) for information on how to develop monitoring once you're convinced.

- [The five pillars of monitoring](#the-five-pillars-of-monitoring)
- [Monitoring at Sourcegraph: a brief history](#monitoring-at-sourcegraph-a-brief-history)
- [Frequently asked questions](#frequently-asked-questions)
  - [Why can't I create an ad-hoc dashboard (e.g. an "HTTP" dashboard)?](#faq-why-cant-i-create-an-ad-hoc-dashboard-e-g-an-http-dashboard)
  - [I have a purely information metric, I don't want to define an alert for it. How do I do that?](#faq-i-have-a-purely-information-metric-i-dont-want-to-define-an-alert-for-it-how-do-i-do-that)
  - [Why can't I create a dashboard in the WYSIWYG Grafana editor?](#faq-why-cant-i-create-a-dashboard-in-the-wysiwyg-grafana-editor)
  - [Why can't I create a graph/panel with more than 5 cardinality (labels)?](#faq-why-cant-i-create-a-graph-panel-with-more-than-5-cardinality-labels)
  - [Why can't I have all information expanded by default on the dashboard?](#faq-why-cant-i-have-all-information-expanded-by-default-on-the-dashboard)

## The five pillars of monitoring

At Sourcegraph we impose five strict constraints to monitoring which, at first, may seem quite surprising:

1. Creating dashboards that describe something other than a single Sourcegraph service is forbidden.
2. Adding a graph/panel that visualizes a metric, without defining an associated alert, is forbidden.
3. Creating dashboards outside of the monitoring generator, such as with the Grafana WYSIWYG editor, is forbidden. All metrics should be presented in the most plain, mundane, non-fanciful way that every site admin can understand.
4. Creating graphs/panels with more than 5 cardinality (labels) is forbidden (in most cases there should only be one.)
5. The most useful information should be presented first, the least useful information should be hidden by default.

To understand why we impose these constraints, see [the five pillars of monitoring](monitoring_pillars.md)

## Monitoring at Sourcegraph: a brief history

Before the constraints we impose will start to make sense, you need to understand the history of monitoring at Sourcegraph and the (extremely difficult) problem we're trying to solve with it. For the first five years of Sourcegraph:

- Metrics have been too numerous for anyone to reason about on their own
- Dashboards have been completely broken for customers because we do not rely on them heavily.
- Dashboards have been so complex that only the author of the dashboard could interpret what it means.
- We recieved support requests like "is this dashboard showing it is healthy or not?" and it was difficult to answer
- It has been impossible/painful for site admins to define meaningful alerting for Sourcegraph. Many admins would fall back to poor external checks like "does a search query work and is it fast?"
- It has been impossible for us to debug customer's instances through monitoring, and often we would just write one-off Prometheus queries for customers to run.

### The linter of monitoring

We can and should do better with monitoring than we have in the past, so we introduce strict restrictions on how we develop monitoring. This helps keep the entire engineering team aligned with what our customers and users need from us -- even if monitoring is often an afterthought or the last thing an engineer working on some feature adds.

You can think of the restrictions we impose as a linter for preventing the issues described above. And, in many cases, our tooling does already prevent these issues by imposing these restrictions!

## Frequently asked questions

### FAQ: Why can't I create an ad-hoc dashboard (e.g. an "HTTP" dashboard)?

This violates the first pillar of monitoring at Sourcegraph:

> Creating dashboards that describe something other than a single Sourcegraph service is forbidden.

#### Why this is bad

Pretend you are a site admin and looking at Sourcegraph's monitoring:

- You go to the overview dashboard and find out the issue is in some subsystem of Sourcegraph.
- That dashboard shows you a problem with HTTP requests, or a problem with repository permission synching, or search performance

What do you do now? Where do you go next with this information? How do you resolve the issue? When dashboards are not associated with a single Sourcegraph service, it makes it effectively impossible to know where the problem is. For this reason, it is forbidden to do this.

Consider for example an admin who finds on a "Search" dashboard that "search query performance is bad":

- "Do I look at Searcher's logs?" Well.. no, because that's for unindexed search (was the query unindexed?)
- "Do I look at zoekt's logs?" Also no, because even thought that's for indexed search, the logs for slow queries are actually in the frontend.

If instead this information is communicated only on a "Frontend" dashboard, it becomes immediately clear they can check the frontend logs first, which is where they will find next steps.

#### What you should do instead

Consider "when the metric I am monitoring is bad, where do I want the site admin to look?" Usually, this is just the service that emits the metric itself.

In other words, you should add the metric you are monitoring to an existing service's dashboard.

This also allows our [high-level alerting metrics](https://docs.sourcegraph.com/admin/observability/metrics_guide), which are generated from the same observables that each dashboard is generated from, to describe the health of Sourcegraph per-service (instead of per-service + topic like "HTTP").

### FAQ: I have a purely information metric, I don't want to define an alert for it. How do I do that?

This violates the second pillar of monitoring at Sourcegraph:

> Adding a graph/panel that visualizes a metric, without defining an associated alert, is forbidden.

#### Why this is bad

There is nothing worth monitoring that cannot have _some_ explanation of what a bad or good value is.

By saying "I do not want to define an alert" what we are actually doing is shying away from the question of "how should someone interpret what this number means?" and instead saying "I will keep this information private, just for myself"

Our monitoring infrastructure _forces_ you to declare at least a _Warning_ alert. It's OK if this is flaky, or even if it fires when something is not wrong.

The point is _you have to give a best-guess at what a bad or good value looks like because you are the only one who can answer that question._ Otherwise, the information you are 'monitoring' cannot be interpreted by anyone else and is inherently useless to anyone except you: it should not exist in a dashboard then.

See also ["the difference between Warning and Critical alerts"](https://docs.sourcegraph.com/admin/observability/alerting_custom_consumption#the-difference-between-critical-and-warning-alerts) for how we communicate this to site admins.

#### What you should do instead

Declare a `Warning` alert, and give it your best guess at what a threshold would look like. It's OK if it's flaky, or fires when there isn't a problem sometimes or on some Sourcegraph instances.

Over time, we will adjust the alert so it becomes more reliable and becomes the baseline number that most Sourcegraph instances observe. Once it becomes really reliable (and empirically proven to be so, based on pings we get from customer instances), it can be promoted to a `Critical` alert as well if it speaks of a critical part of Sourcegraph.

### FAQ: Why can't I create a dashboard in the WYSIWYG Grafana editor?

This violates the third pillar of monitoring at Sourcegraph:

> Creating dashboards outside of the monitoring generator, such as with the Grafana WYSIWYG editor, is forbidden. All metrics should be presented in the most plain, mundane, non-fanciful way that every site admin can understand.

#### Why this is bad

Using the Grafana WYSIWYG editor, or otherwise operating outside the constraints of [the monitoring generator](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/monitoring) makes it:

- Extremely easy to introduce dashboards that do not comply with the constraints we want to impose.
- Extremely easy to introduce dashboards that have inconsistency errors through mistakes that are easy to make (e.g. not using UTC time on dashboards, the preset timeframe being inconsistent, it not self-describing to admins what it does, etc.)
- Difficult for others to modify and review without introducing regressions (e.g. due to Grafana schema version changes, which happen frequently, producing large diffs)
- Much harder to declare proper alerts in our regular high-level alerting architecture.

#### What you should do instead

You might be thinking:

> But writing code for dashboards is quite painful, let alone a bunch of generation code that I now need to understand!

In truth, we are only using Go as a nice type-checked declarative syntax. It's as simple to use as a configuration file, and the constraints we impose in monitoring means that we do not allow doing any fanciful dashboards intentionally -- which means you are basically _just_ writing a Prometheus query, and barely any layout or styling.

See: [How easy is it to add monitoring?](monitoring.md#how-easy-is-it-to-add-monitoring)

### FAQ: Why can't I create a graph/panel with more than 5 cardinality (labels)?

This violates the fourth pillar of monitoring at Sourcegraph:

> Creating graphs/panels with more than 5 cardinality (labels) is forbidden (in most cases there should only be one.)

#### Why this is bad

It is the case that:

1. We get screenshots of dashboards from customers in our support process.
2. Inexperienced admins need to understand what our metrics mean.

Consider, then, the following.

Is it `set-info` or `get-email` causing the blips below?

![](https://user-images.githubusercontent.com/3173176/78830054-35a3ae80-799c-11ea-89ed-dfce5faf70fc.png)

Which searcher instance has the spike going to ~400 errors below?

![](https://user-images.githubusercontent.com/3173176/78832251-c465fa80-799f-11ea-9f8a-2d775253c770.png)

We expect `update_commits` to be taking ~50ms and need to confirm that. Is it ~50ms below?

![](https://user-images.githubusercontent.com/3173176/81974154-03f4b780-95da-11ea-8988-069dbdc3ef92.png)

#### What you should do instead

If the information you are presenting is important enough to warrant being shown independently, it should be shown in its own panel. In other words, declare a separate `Query` all-together with a Prometheus selector like `{method="update_commits"}`.

If the information you are presenting is not important enough to warrant being shown independently, or if you're not sure, then aggregate it! It's far better that we have clear panels showing individual numbers and learn we need to add more for specific cases, than it is for us to have every bit of information present such that it is impossible to interpret. We want a low signal-to-noise ratio.

For _instances of services_ in particular, you might be thinking "surely that is an exception?" But no, it is not generally. It is better that an admin knows there is an issue with _a searcher_, or _a gitserver_ and that admin looks through the logs of each to determine the issue than it is to give an information overload which makes it hard to interpret individual panels at all.

### FAQ: Why can't I have all information expanded by default on the dashboard?

This violates the fifth pillar of monitoring at Sourcegraph:

> The most useful information should be presented first, the least useful information should be hidden by default.

#### Why this is bad

Similar to "[Why can't I create a graph/panel with more than 5 cardinality (labels)?](#faq-why-cant-i-create-a-graph-panel-with-more-than-5-cardinality-labels)", having all information by default prevents site admins from looking at the information that is actually most important.

Additionally, it's easier for us to say:

> Go to the **Searcher** dashboard, scroll down and expand the **Internal service requests** panel and send us a screenshot.

Than it is for us to say:

> On the **Searcher** dashboard, send us a screenshot of the whole page (I know it's really long, sorry about that, if you could just make sure to include the "Frontend request failures over 5m" panel and the [...] panels, that is all we should need)

#### What you should do instead

If it can't fit on a normal laptop screen, it should generally be hidden!

Additionally, admins will still see your metric if something is going wrong by nature of the fact that we enforce "there must be a defined alert per metric we are displaying." By hiding it, we're just being honest that most people aren't going to see it and making sure the most important information is front-and-center!
