# Sourcegraph monitoring pillars

This document describes the background and pillars that drive development of our monitoring infrastructure at Sourcegraph.
For further information, see the [Sourcegraph monitoring guide](./monitoring.md) and the [observability developer documentation](https://docs.sourcegraph.com/dev/background-information/observability) for development-related documentation.

- [Overview](#overview)
- [Long-term vision](#long-term-vision)
  - [History](#history)
- [Monitoring pillars](#monitoring-pillars)
  - [Dashboards should be created only with the monitoring generator](#dashboards-should-be-created-only-with-the-monitoring-generator)
    - [Explanation](#explanation)
    - [What you should do](#what-you-should-do)
  - [Dashboards should describe a single service](#dashboards-should-describe-a-single-service)
    - [Explanation](#explanation-1)
    - [What you should do](#what-you-should-do-1)
  - [Graphs should have less than 5 cardinality](#graphs-should-have-less-than-5-cardinality)
    - [Explanation](#explanation-2)
    - [Exceptions](#exceptions)
    - [What you should do](#what-you-should-do-2)
  - [Only the most useful and simple graphs should be visible by default](#only-the-most-useful-and-simple-graphs-should-be-visible-by-default)
    - [Explanation](#explanation-3)
    - [What you should do](#what-you-should-do-3)
- [Next steps](#next-steps)

> [!NOTE] Looking for _how to monitor Sourcegraph?_ See the [observability documentation](https://docs.sourcegraph.com/admin/observability). For Sourcegraph.com-specific documentation see the [Sourcegraph.com monitoring documentation](./dotcom.md), and for Cloud Observability see [Sourcegraph Cloud Observability](../../../../cloud/technical-docs/observability/index.md).

## Overview

Monitoring at Sourcegraph encapsulates:

- How site admins know something _is wrong_ or _may be wrong_.
- Describing the overall health of Sourcegraph to site admins.
- Making it clear to site admins _where to go next if Sourcegraph is not healthy_.

It does _not_ include:

- Significant detail about what went wrong or the ability to identify individual problem cases: the goal is just to direct the site admin to the next step.
- Solving a problem end-to-end: after looking at monitoring, admins MUST go elsewhere to solve the problem.

Because of this, monitoring is just one piece of Sourcegraph's observability—see the [observability developer guide](index.md) for more information.

## Long-term vision

The traditional user of a monitoring stack is going to have a lot of context about things like what dashboards are showing, what metrics and alerts mean, and how to use the components in the stack, since they will either have set up the stack themselves or work with the people who did.

In stark contrast, we're putting together a monitoring system for people with zero context about how Sourcegraph works, what our metrics and alerts mean, and in many cases it may be their first time interacting with components used in our monitoring stack at all. In many cases, our metrics and alerts may not give the site admin any useful information that they themselves can act on other than "I should contact support and ask why this is happening".

To achieve this, our monitoring architecture is designed with the goal of providing a robust out-of-the-box monitoring experience that deployment admins can easily leverage. This goal includes:

- **Ship understandable and actionable signals** - we want ensure that the metrics and dashboards we ship provide a clear indicator of whether something is wrong and what admins or Sourcegraph engineers can do to diagnose issues.
- **Provide engineers at Sourcegraph the tooling to easily build monitoring** - our monitoring tooling is not just for customers or the Distribution team: they should also serve the engineers by making it easy to create consistent and useful insights into the behaviour of both Sourcegraph Cloud and customer instances.
- **Make alert notifications painless to configure** - we want to minimize the number of Sourcegraph instances that lack alerting. Alerts directly indicate issues that might impact user experience, and we want to ensure that deployment admins are equipped with the signals to help them provide their users with the best experience. This includes not requiring steps like port-forwarding or custom ConfigMaps for configuration.
- **Dogfood the monitoring we ship as much as possible** - without the heavy reliance brought about by dogfooding, monitoring components have proven to be difficult to use or completely broken.

To see the architectural decisions made to support these goals, refer to the [Sourcegraph monitoring architecture](./monitoring_architecture.md#metrics).

### History

Before the recommendations we make start to make sense, you need to understand the history of monitoring at Sourcegraph and the (extremely difficult) problem we're trying to solve with it.

For the first five years of Sourcegraph:

- Metrics were too numerous for anyone to reason about on their own
- Dashboards were completely broken for customers because we did not rely on them heavily.
- Dashboards were so complex that only the author of the dashboard could interpret it.
- We recieved support requests like "is this dashboard showing it is healthy or not?" and it was difficult to answer
- It was impossible/painful for site admins to define meaningful alerting for Sourcegraph. Many admins would fall back to poor external checks like "does a search query work and is it fast?"
- It was impossible for us to debug customer's instances through monitoring, and often we would just write one-off Prometheus queries for customers to run.

We can and should do better with monitoring than we have in the past, so we introduced strict restrictions on how we develop monitoring. This helps keep the entire engineering team aligned with what our customers and users need from us — even if monitoring is often an afterthought or the last thing an engineer working on some feature adds.

You can think of the restrictions we impose as a linter for preventing the issues described above. And, in many cases, our tooling does already prevent these issues by imposing these restrictions!

## Monitoring pillars

Monitoring tooling at Sourcegraph supports the following pillars:

- [Dashboards should be created only with the monitoring generator](#dashboards-should-be-created-only-with-the-monitoring-generator)
- [Dashboards should describe a single service](#dashboards-should-describe-a-single-service)
- [Graphs should have less than 5 cardinality](#graphs-should-have-less-than-5-cardinality)
- [Only the most useful and simple graphs should be visible by default](#only-the-most-useful-and-simple-graphs-should-be-visible-by-default)

Before trying to circumvent the guidelines enforced by our monitoring tooling, please keep in mind that these pillars are defined to help us achieve our [goals](#long-term-vision) and eliminate [pain points we have encountered in the past](#history). Each of the above pillars are documented with detailed explanations, recommendations for what you can do, and exceptions where applicable.

To make significant changes to the monitoring tooling, please reach out to the DevExp team or open a PR to this page!

### Dashboards should be created only with the monitoring generator

Creating dashboards outside of the monitoring generator, such as with the Grafana WYSIWYG editor, is discouraged. All metrics should be presented in a set of uniform, standard ways that every site admin can understand.

#### Explanation

Using the Grafana WYSIWYG editor, or otherwise operating outside the constraints of [the monitoring generator](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/monitoring) makes it:

- Much harder to integrate with our [monitoring architecture](./monitoring_architecture.md): generated dashboard integration, generated documentation, alerting support, and more.
- Extremely easy to introduce dashboards that have inconsistency errors through mistakes that are easy to make (e.g. not using UTC time on dashboards, the preset timeframe being inconsistent, it not self-describing to admins what it does, etc...)
- Difficult for others to modify and review without introducing regressions (e.g. due to Grafana schema version changes, which happen frequently, producing large diffs)

#### What you should do

You might be thinking:

> But writing code for dashboards is quite painful, let alone a bunch of generation code that I now need to understand!

In truth, we are only using Go as a nice type-checked declarative syntax, which provides auto-completion, documentation on hover, and more for free. It's simpler to use than a configuration file, and provides safety guarantees along with document generator, alert integration, default styling and other features which make creating panels easier. This means you are only required to write a Prometheus query, a description and barely any layout or styling.

To learn more about what it takes to add dashboards, see [adding monitoring](monitoring.md#adding-monitoring).

### Dashboards should describe a single service

Creating dashboards that describe something other than a single Sourcegraph service is strongly discouraged. This includes ad-hoc dashboards, like a catch-all "HTTP" dashboard.

#### Explanation

Pretend you are a site admin and looking at Sourcegraph's monitoring:

- You go to the overview dashboard and find out the issue is in some subsystem of Sourcegraph.
- That dashboard shows you a problem with HTTP requests, or a problem with repository permission synching, or search performance

What do you do now? Where do you go next with this information? How do you resolve the issue? When dashboards are not associated with a single Sourcegraph service, it makes it effectively impossible to know where the problem is.

Consider for example an admin who finds on a "Search" dashboard that "search query performance is bad":

- "Do I look at Searcher's logs?" Well.. no, because that's for unindexed search (was the query unindexed?)
- "Do I look at zoekt's logs?" Also no, because even thought that's for indexed search, the logs for slow queries are actually in the frontend.

If instead this information is communicated only on a "Frontend" dashboard, it becomes immediately clear they can check the frontend logs first, which is where they will find next steps.

#### What you should do

Consider "when the metric I am monitoring is bad, where do I want the site admin to look?" Usually, this is just the service that emits the metric itself.

In other words, you should add the metric you are monitoring to an existing service's dashboard.

This also allows our [high-level alerting metrics](https://docs.sourcegraph.com/admin/observability/metrics_guide), which are generated from the same observables that each dashboard is generated from, to describe the health of Sourcegraph per-service (instead of per-service + topic like "HTTP").

### Graphs should have less than 5 cardinality

Creating graphs/panels with more than 5 cardinality (labels) is discouraged. In most cases there should only be one label per graph.

#### Explanation

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

#### Exceptions

Some graphs will require more granularity. For example, per-container or per-Gitserver replica graphs might be rendered entirely unhelpful if we do not have the ability to observe the behaviour of each individual instance.

When creating high-cardinality graphs, please consider how understandable the graph is in terms of how easy it is to grok as a human.

#### What you should do

If the information you are presenting is important enough to warrant being shown independently, it should be shown in its own panel. In other words, declare a separate `Query` all-together with a Prometheus selector like `{method="update_commits"}`.

If the information you are presenting is not important enough to warrant being shown independently, or if you're not sure, then aggregate it! It's far better that we have clear panels showing individual numbers and learn we need to add more for specific cases, than it is for us to have every bit of information present such that it is impossible to interpret. We want a low signal-to-noise ratio.

For _instances of services_ in particular, you might be thinking "surely that is an exception?" But no, it is not generally. It is better that an admin knows there is an issue with _a searcher_, or _a gitserver_ and that admin looks through the logs of each to determine the issue than it is to give an information overload which makes it hard to interpret individual panels at all.

### Only the most useful and simple graphs should be visible by default

The most useful information should be presented first, the least useful information should be hidden by default. This means that in the monitoring generator, most groups of graphs should default to hidden.

#### Explanation

Similar to ["Graphs should have less than 5 cardinality"](#graphs-should-have-less-than-5-cardinality), having all information by default prevents site admins from looking at the information that is actually most important.

Additionally, it's easier for us to say:

> Go to the **Searcher** dashboard, scroll down and expand the **Internal service requests** panel and send us a screenshot.

Than it is for us to say:

> On the **Searcher** dashboard, send us a screenshot of the whole page (I know it's really long, sorry about that, if you could just make sure to include the "Frontend request failures over 5m" panel and the [...] panels, that is all we should need)

#### What you should do

If it can't fit on a normal laptop screen, it should generally be hidden!

## Next steps

Continue reading: [Sourcegraph monitoring developer guide](monitoring.md)
