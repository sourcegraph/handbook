# Cloud Observability Operations

## Requesting access to Grafana

Users who do not automatically have access to the Grafana instance can request access through [Entitle](https://entitle.io/). On Slack, type `/access_request` and hit enter. Fill out the form wil the following values:
![Entitle Request Form](https://storage.googleapis.com/sourcegraph-assets/handbook/engineering/cloud/entitle-iap-request.png)

A Cloud team or Security team member will then need to approve the request. If you require permanent access to Grafana, please post a message in the [#cloud channel](https://sourcegraph.slack.com/archives/C03JR7S7KRP) on Slack and request a Cloud team member provision you access.

## Granting a user permanent access to Grafana

User management is provisioned within GCP. To grant a new user permanent access to Grafana they will need to either be added to an approved group or have their identity specifically added to the IAP proxy.

To add a user, navigate to the [GCP Console IAP management page](https://console.cloud.google.com/security/iap?project=control-plane-5e9ee072) for Grafana. Click the check box and the provisioning page should appear on the right. From there, click "Add Principal" and add the user.

## Manually regenerate Grafana dashboards

Grafama dashboards are [generated when the `centralized-o11y` invariant](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/controller/-/blob/internal/invariants/centralized_o11y.go) is run against an instance:

1. Cloud team members can run `mi2 instance check -e $ENVIRONMENT -s $SLUG -enforce centralized-o11y` locally. This will automatically generate an ID token, generate, and upload the dashboards to Grafana.

## Creating a new individual dashboard

The dashboards for Cloud customers are generated from the same [dashboard definitions](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/monitoring/definitions) that are create the bundled dashboards included with all Sourcegraph distributions. To create a new dashboard that will be rolled out to all managed instances, follow the [Developing Observability](https://docs.sourcegraph.com/dev/background-information/observability) guidelines.

## Creating a new multi-instance dashboard

We are now able to see the value of a query applied to multiple instances at once. To create a dashboard that queries multiple customers at once, log into Grafana and use the native creation tools. It's recommended to start with an existing dashboard panel, click the title, and selecct "Explore". This will allow you to modify the prewritten query. All Cloud instances support the same set of metrics and are tagged with additional metadata to denote the customer.

To view the results for a specific subset of customers, duplicate the query and filter each result for a given customer by changing the `project_id=` label selector.

If the `project_id` is unknown for a given customer, follow the [FAQ: How do I figure out the GCP Project ID for a customer?](../../index.md#faq-how-do-i-figure-out-the-gcp-project-id-for-a-customer) instructions.

> **NOTE**: Custom created dashboards _should_ persist through restarts however the Cloud team guarantees no SLAs. If a dashboard is mission-critical, please communicate with the Cloud team on getting it added as a permanent fixture. It's preferred that all dashboards are created in code and distributed as part of Sourcegraph itself.

Metrics that use Prometheus aggregation functions (like `sum by`) will need to be updated to include the `project_id` as a a grouping field, e.g.:

```
sum by (job) (pg_stat_activity{project_id="sourcegraph-managed-sg"})
```

would become

```
sum by (job, project_id) (pg_stag_activity)
```

to show the metric for all instances, labeled by their `project_id`.

These dashboards will be pregenerated [in the future](https://github.com/sourcegraph/customer/issues/1610).
