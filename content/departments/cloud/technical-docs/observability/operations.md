# Cloud Observability Operations

## Requesting access to Grafana

<!-- Describe how to access grafana for a non-cloud teammate today directly to the instance -->

To access the grafana dashboard for a single cloud customer:

1. Find the customer on https://cloud-ops.sgdev.org/, go to the specific customer page
1. Goto "View monitoring dashboards" for the specific instance
1. When you attempt to access the dashboard with the given command you may receive about access
1. You should use Entitle to request access to the specific instance using this [form](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiQWNjZXNzIHRvIGNsb3VkIGluc3RhbmNlICQkSU5TRVJUIENMT1VEIElOU1RBTkNFIEhFUkUkJCQgZm9yIEdyYWZhbmEgZGFzaGJvYXJkIiwiYnVuZGxlSWRzIjpbImNlNTZlMGU2LTE1ZDYtNGYzYS05M2RmLWRkMjQxOGQzNzhlYyJdfQ%3D%3D)

## Multi-instance dashboard

We not longer support multi-instance dashboards but the cloud-team is working on a replacement.

## Creating a new individual dashboard

The dashboards for Cloud customers are generated from the same [dashboard definitions](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/monitoring/definitions) that are create the bundled dashboards included with all Sourcegraph distributions. To create a new dashboard that will be rolled out to all managed instances, follow the [Developing Observability](https://docs.sourcegraph.com/dev/background-information/observability) guidelines.
