# On-call

We have an ops on-call rotation managed through [OpsGenie](https://opsgenie.com). This rotation covers operation of our public site sourcegraph.com.

## Responsibilities

1.  Know when you are going to be on call. If you can't fulfill the responsibilities of on-call for any reason that week, swap with a teammate.
1.  Acknowledge pages promptly. If you do not acknowledge within 10 minutes, someone else will get paged.
1.  Identify the issue and collect information that might be useful for preventing the problem in the future (e.g. if a disk was full, what was it full with?).
    - This frequently involves running kubectl commands against our production cluster.
    - Make sure you have [setup access to kubernetes](../deployments/index.md#how-to-set-up-access-to-kubernetes) and know [how to perform operations](../deployments/index.md#kubectl-cheatsheet) like: looking at logs for a service, restarting a service, getting a command shell in a running pod (e.g. to look at what is on disk).
1.  If `about`, `/search`, or `docs` is fully unreachable, page Customer Support so they can help with customer and broader internal communication. You can do this from Slack with `/genie alert "______ is down" for customer-support`. Support assisting with communication will let you focus on solving the issue.
1.  Take steps to resolve the issue (e.g. if a disk was full, delete any data that is safe to delete to resolve the immediate issue) if you can.
    - Don't mark pages as "resolved". Wait for the underlying alert to auto resolve.
    - If you have unsuccessfully attempted to figure out how to resolve a page, the page hasn't auto resolved (many do), and the issue appears important (e.g. impacts users), then get help from someone else. Prefer to contact people who you know are already awake/working.
1.  Add an entry to the [incidents log](https://docs.google.com/document/d/1dtrOHs5STJYKvyjigL1kMm6u-W0mlyRSyVxPfKIOfEw/edit?usp=sharing)
1.  File issues for any followup work that needs to happen.
1.  If alerts are too noisy and/or inactionable, take actions to fix or disable alerts.

## Ops incidents log

All significant incidents that occur on Sourcegraph.com are recorded in the [ops incidents log](https://docs.google.com/document/d/1dtrOHs5STJYKvyjigL1kMm6u-W0mlyRSyVxPfKIOfEw/edit?usp=sharing). This helps us keep track of what has happened historically, discuss follow-up work, and gives insight into what types of incidents we see.

False incidents (flaky alerts, etc.) should be tracked directly in GitHub issues and do not need a log entry.

## Slack channels

Most of the work you do as the on-call engineer should be discussed in #dev-ops but check our [Slack channels](../../../../../company-info-and-process/communication/team_chat.md#engineering) to discover alert and troubleshooting channels which you might find useful.

## Getting help

In some cases you may not know how to resolve an incident on your own, or the incident may be due to something you are not familiar with. In such cases, it is your responsibility to pull in more people or teams as needed to resolve the incident.

If the incident is not urgent (use your best judgement) and can be handled asynchronously over the course of a few days, file a GitHub issue and pull in teams that way by cc'ing them with e.g. `@sourcegraph/cloud` `@sourcegraph/distribution`.

If the incident is urgent, start a new thread in the #dev-ops Slack channel and cc the on-call person from the relevant team. You can find this in Slack using the `/genie` command:

```
/genie whoisoncall
```

If that person is unavailable, feel free to ping the entire team `@cloud`, `@distribution`, etc. to get help.

## Schedule

The authoritative schedule is in OpsGenie:
https://app.opsgenie.com/schedule#/190e2873-1e3b-4350-b67b-2e681d542970

It is recommended to import the schedule into your calendar.

- You can subscribe to only your on-call weeks here: https://app.opsgenie.com/user/profile#/onCallSchedule/
- You can subscribe to the entire on-call schedule here: https://app.opsgenie.com/schedule#/190e2873-1e3b-4350-b67b-2e681d542970

To import to Google Calendar:

1. Copy the webcal url from OpsGenie:

   <video autoplay muted loop playsinline src="https://sourcegraphstatic.com/handbook/engineering/on_call/copy-schedule-link.mp4" width="1038" height="266"></video>

2. Add calendar from URL:

   <video autoplay muted loop playsinline src="https://sourcegraphstatic.com/handbook/engineering/on_call/gcal.mp4" width="1440" height="900"></video>

## Resources

Note: Most of our internally hosted services (\*.sgdev.org) use SSO with your
Sourcegraph Google account. External services are stored in 1Password.

- [Playbook](playbooks/index.md)
- [Opsgenie](https://app.opsgenie.com/alert) - Paging account
- [Prometheus](https://prometheus.sgdev.org/) - Service-level instrumentation/metrics. Also consumes other metrics since Kubernetes exports Prometheus metrics from cAdvisor and Kubernetes services.
- [Grafana](https://grafana.sgdev.org/) - dashboard for graphing metrics
- [Kubernetes](https://github.com/sourcegraph/infrastructure/blob/master/kubernetes/README.md) Container management. Sourcegraph is run and managed by Kubernetes.
- [AlertManager](https://alertmanager.sgdev.org/) - Manages alerts from Prometheus.
- [Site24x7](https://www.site24x7.com/app/client#/home/monitors) - Graphs of uptime and response time for specific endpoints.

## Alerts

NOTE: Before adding any _critical_ alert, please ensure it is good enough to wake you up
at 3:30am. Good practice is to instrument first for a few days/week and check
if your alert would fire only when it should.

To create an alert you must first decide on the best place to instrument/get
data from.

- Can you measure it with a simple HTTP request succeeding? Then use
  Site24x7. We store the checks in the infrastructure repository. See the
  [Site24x7 README](https://github.com/sourcegraph/infrastructure/blob/master/site24x7/README.md).
- Is it a service level metric that already exists or you could add to the
  Sourcegraph codebase? eg p95 open connections to pgsql. Then see [adding monitoring](../../tools/observability/monitoring.md#adding-monitoring).
- Do you need to validate a core user flow? Use
  [e2etest](https://github.com/sourcegraph/sourcegraph/blob/main/test/e2e/README.md)
