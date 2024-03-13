# Cody Gateway

Sourcegraph Cody Gateway powers the default `"provider": "sourcegraph"` Cody completions and embeddings for Sourcegraph Enterprise customers on Sourcegraph 5.1 or later, both on-prem and in Sourcegraph Cloud.
It supports a variety of upstream LLM providers, such as Anthropic and OpenAI, with rate limits, quotas, and model availability tied to Sourcegraph Enterprise product subscriptions.
Sourcegraph App users with Sourcegraph.com accounts will also be able to use Sourcegraph Cody Gateway.

In general, we have two Cody Gateway deployments running:

- `cody-gateway.sourcegraph.com` - for production usage
- `cody-gateway.sgdev.org` - for development and testing

> [!NOTE] This page primarily contains operational and development information for Cody Gateway. To learn more about _using_ Cody Gateway, see [**Using Cody Gateway**](./using.md), or refer to the [**customer-facing Sourcegraph Cody Gateway docs**](https://docs.sourcegraph.com/cody/explanations/cody_gateway).
>
> If you need any assistance, please reach out to #wg-cody-gateway.

Contents:

- [Architecture](#architecture)
- [Service images](#service-images)
  - [Local development](#local-development)
- [Operation](#operation)
  - [Infrastructure access](#infrastructure-access)
  - [Observability](#observability)
    - [Alerting](#alerting)
    - [Metrics](#metrics)
    - [Tracing](#tracing)
      - [Tracing from a Sourcegraph instance](#tracing-from-a-sourcegraph-instance)
  - [Deployment](#deployment)
  - [Usage events](#usage-events)
  - [Service accounts](#service-accounts)
  - [Redis](#redis)

## Architecture

See [Cody Gateway: 1-pager](https://docs.google.com/document/d/1R6Ew_y5TDhwCMktOin6pemX6UeLsx0plLUfqBBmYCkk/edit#heading=h.eksk0kbbz0ul) for a recent overview of Cody Gateway architecture and details.

## Service images

Source code for Cody Gateway is in [`sourcegraph/sourcegraph/cmd/cody-gateway`](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/cody-gateway).
The image gets built the same as any other Sourcegraph service, i.e. with `insiders` and the standard `main`-branch tags.

### Local development

For local development, refer to [How to set up Cody Gateway locally](https://docs.sourcegraph.com/dev/how-to/cody_gateway).

## Operation

Cody Gateway infrastructure is defined in Terraform in [`sourcegraph/infrastructure/cody-gateway/envs`](https://github.com/sourcegraph/infrastructure/tree/main/cody-gateway/envs), corresponding to each of the long-running Cody Gateway instances:

- `cody-gateway/envs/prod`: `cody-gateway.sourcegraph.com`
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?tag=cody-gateway,prod)
  - [Cloud Run service (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/cody-gateway/metrics?project=cody-gateway-prod)
  - [Service logs](https://cloudlogging.app.goo.gl/pJbPob8qMtiYDvCX6)
  - [Service traces](https://console.cloud.google.com/traces/overview?project=cody-gateway-prod)
  - [Sentry events](https://sourcegraph.sentry.io/projects/cody-gateway-prod/)
  - [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=cody-gateway-prod)
  - [GCP errors](https://console.cloud.google.com/errors?project=cody-gateway-dev)
- `cody-gateway/envs/dev`: `cody-gateway.sgdev.org`
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?tag=cody-gateway,dev)
  - [Cloud Run service (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/cody-gateway/metrics?project=cody-gateway-dev)
  - [Service logs](https://cloudlogging.app.goo.gl/gAjAkwaQodgdKH587)
  - [Service traces](https://console.cloud.google.com/traces/overview?project=cody-gateway-dev)
  - [Sentry events](https://sourcegraph.sentry.io/projects/cody-gateway-dev/)
  - [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=cody-gateway-dev)
  - [GCP errors](https://console.cloud.google.com/errors?project=cody-gateway-dev)

To get access to most resources, you'll need to [request infrastructure access](#infrastructure-access).

### Infrastructure access

The following Entitle requests can be used to get access to Cody Gateway infrastructure:

- [Cody Gateway Prod](https://app.entitle.io/request?targetType=bundle&duration=10800&justification=Justification%20here&bundleId=63869d4c-ed13-402d-86c4-8e8c4e55ef61)
  - [Prod BigQuery events](https://app.entitle.io/request?targetType=resource&duration=10800&justification=Justification%20here&integrationId=52e29e01-d551-4186-88a3-65ff4f28b8c3&resourceId=9f4053b0-1c5d-41a4-9ec7-ec6d49e51559&roleId=a13816c2-dd8e-4f1b-a61f-342c5f9af546&grantMethodId=000ea096-f19c-4e70-9300-976acccf1054)
- [Cody Gateway Dev](https://app.entitle.io/request?targetType=bundle&duration=10800&justification=Justification%20here&bundleId=e6e88341-bbfd-4b2f-9ece-633ac873725a)
  - [Dev BigQuery events](https://app.entitle.io/request?targetType=resource&duration=10800&justification=Justification%20here&integrationId=52e29e01-d551-4186-88a3-65ff4f28b8c3&resourceId=e8c5df92-b494-4668-b53a-61c8b309c1fd&roleId=b8c397ee-0527-4e0f-8188-598340742669&grantMethodId=b8c397ee-0527-4e0f-8188-598340742669)

### Observability

See [above for links](#operation) to each resource for each of the following resources for each deployment.
In all cases, you'll need to [request infrastructure access](#infrastructure-access).

#### Alerting

We have several tiers of alerting for each Cody Gateway instance to help notify engineers if something has gone wrong:

1. **Error reporting**
   1. **Sentry**: All error-level application logs with errors attached, such as:
      1. Internal or background errors
      2. 5xx response details
   2. **GCP Error Reporting**: All GCP-generated events, such as:
      1. Cloud Run instance panics or failure to start
      2. Unable to route request to a Cloud Run instance (e.g. if no instance is available)
2. **Metrics alerting**
   1. **GCP Alerting Policies**: [Policies provisioned through Terraform](https://github.com/sourcegraph/infrastructure/tree/main/cody-gateway/modules/monitoring), covering facets such as:
      1. Cloud Run service health: startup latency, CPU utilization, memory utilization, instance count, request latency, etc.
      2. Cloud Redis service health: CPU utilization, memory utilization, etc.

All alerts from all environments currently go to #alerts-cody-gateway.

> [!NOTE] OpsGenie alerts to #ask-cloud are slated to be configured for the production instance.
> For now, #wg-cody-gateway will monitor alerts for any issues.

#### Metrics

Each deployment's Cloud Run metrics overview page provides basic observability into the service provided out-of-the-box by Cloud Run, such as instance count and resource utilization.
Similarly, we depend on out-of-the-box dashboards and metrics from Managed Redis as well.

Cody Gateway does push a few custom metrics via its OpenTelemetry metrics - hand-made dashboards for the prod instance are available [here](https://console.cloud.google.com/monitoring/dashboards/builder/cf5035d1-6aa7-4f85-be46-8abaac9790a0%3Bduration=P7D?project=cody-gateway-prod), including our concurrent upstream requests graph.

#### Tracing

Each instance also collects and exports traces to Google Cloud Trace.
Common ways of approaching traces:

- Each HTTP request trace can be correlated with the corresponding originating Sourcegraph.com trace through a span link - this will give you the trace ID that you can use to find the corresponding trace in the `sourcegraph-dev` project for Sourcegraph.com.
  - Note: For now, ignore the automatically generated traces from `/component: AppServer`, as those currently aren't attached to our application spans.
- Log entries and Sentry error events will generally have trace IDs attached to them, which can be used to find the corresponding trace in Cloud Trace.

Cody Gateway traces can give you tons of useful information about a request, including:

- Rate limit information (concurrent requests, consumed quota, current consumption, reason for rejection, and more)
- What happened in requests to upstream providers
- Full [BigQuery event](#usage-events) that was collected
- Whether a [quota usage notification](./using.md#quota-usage-notifications) was sent

See [above for links to Cloud Trace](#operation).

##### Tracing from a Sourcegraph instance

Cody Gateway is configured to accept all incoming trace contexts as its parent.
For Sourcegraph instances in GCP, this means that simply collecting a trace for a request will automatically link up with any corresponding trace in Cloud Trace for Cody Gateway when a trace is viewed in GCP.

The trace that Cody Gateway collects is returned as `x-trace` and `x-span` headers in all requests - these are also set as attributes (`cody-gateway.x-trace` and `cody-gateway.x-span` respecitvely) on one of the outgoing spans in Sourcegraph. This can be used to find the Cody Gateway side of the trace in Cloud Trace.

### Deployment

To roll out a new Cody Gateway build:

- `cody-gateway.sourcegraph.com`: Make a PR that updates [`cody-gateway/envs/prod/cloudrun/main.tf`](https://github.com/sourcegraph/infrastructure/blob/main/cody-gateway/envs/prod/cloudrun/main.tf) to point to the new build. The image must be in the standard `main`-branch tag format e.g. `218287_2023-05-10_5.0-5bd03cd18e71`.
- `cody-gateway.sgdev.org`: [Go to the "Deploy revision" page of the Cloud Run service](https://console.cloud.google.com/run/deploy/us-central1/cody-gateway?project=cody-gateway-dev) and click "Deploy" without changing any configuration - this will redeploy the service with the latest `cody-gateway:insiders` image.
  - This will also happen whenever a Terraform change happens to the `cloudrun` module.

To configure [alerting](#alerting), some initial setup outside of the Terraform module are required as Terraform modules may not be available or configured:

1. In Sentry, under each Project, set up an alert rule for all issues that sends notifications to the desired channels.
2. In GCP Error Reporting, set up alerting through the notification channel(s) provisioned through Terraform.

### Usage events

Usage data is collected on a variety of events going through Cody Gateway, which is then sent to BigQuery.
BigQuery data can be found in the `events` table of the following datasets:

- Prod: [`TelligentSourcegraph/cody_gateway`](https://console.cloud.google.com/bigquery?referrer=search&project=telligentsourcegraph&ws=!1m4!1m3!3m2!1stelligentsourcegraph!2scody_gateway)
- Dev: [`cody-gateway-dev/cody_gateway`](https://console.cloud.google.com/bigquery?project=cody-gateway-dev&ws=!1m4!1m3!3m2!1scody-gateway-dev!2scody_gateway)

See [`internal/codygateway`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/internal/codygateway/consts.go) for the list of events types that are currently tracked.

Data can be queried directly in BigQuery tables above (requires [infrastructure access](#infrastructure-access)), or in [Redash](../../../../data-analytics/reports.md#redash) by querying the `cody_gateway.events` table for production events. Some sample Redash queries you can use or fork and edit:

- [Cody Gateway Events](https://redash.sgdev.org/queries/52?p_Event=%5B%22CompletionsFinished%22%5D&p_Feature=%5B%22chat_completions%22,%22code_completions%22%5D&p_Identifier=all&p_Source=%5B%22dotcom-product-subscriptions%22%5D#72)
- [Embeddings Tokens Generated](https://redash.sgdev.org/queries/82#151)
- [Completions Usage](https://redash.sgdev.org/queries/106)

A simple overview can also be seen in each product subscription's licenses page - see [Using Cody Gateway: Analyzing usage](./using.md#analyzing-usage).

> [!WARNING] Because the dev Cody Gateway instance sends data to a different dataset, usage of dev subscriptions (for example, during in local Sourcegraph developmenmt) will not render in Sourcegraph.com's product subscription pages, which queries the production dataset.

### Redis

A [Google managed Redis instance](https://cloud.google.com/memorystore) is provisioned alongside each Cody Gateway deployment to handle caching and rate limiting.
The Cody Gateway Cloud Run service connects to this Redis instance via a VPC network - the Redis instance is not directly accessible over the public internet, so you cannot connect to it locally like the Redis that is bundled with Sourcegraph deployments.

To connect to the Redis instance locally for investigative or debugging purposes:

> [!WARNING] The Cody Gateway Redis instance **contains sensitive data**.
> Only enable the infrastructure required to connect to it if absolutely necessary, and disable access when done.

In [`sourcegraph/infrastructure`](https://github.com/sourcegraph/infrastructure), update `cody-gateway/envs/$ENVIRONMENT/cloudrun/main.tf`:

```tf
module "cloudrun" {
  # ...
  deploy_network_compute_instance = true
}
```

Create a PR and merge it for Terraform Cloud to apply.

Once applied, you can SSH via an IAP tunnel into the compute instance provisioned in the same VPC as the Cloud Run service and Redis instance:

```sh
export PROJECT=""
export REDIS_HOST="" # find the address of Redis instance in GCP Console
gcloud compute ssh cody-gateway-network-connector --project=$PROJECT --zone=us-central1-c --tunnel-through-iap -- -N -L 6378:$REDIS_HOST:6378
```

In another terminal, you can then connect to Redis locally on port 6378:

```sh
export REDISCLI_AUTH="" # find the auth string of Redis instance in GCP Console
redis-cli -p 6378 --tls --insecure
```

When done, make sure to set `deploy_network_compute_instance = false` again.

### Service accounts

cody-gateway access Sourcegraph.com through standard Sourcegraph.com users that are configured with feature flags to enable special access to GraphQL queries and mutations related to product subscriptions.

The current accounts are as follows:

<!--
Renaming accounts is a bit tricky on Sourcegraph.com, so let's just leave them with the legacy names for now,
there should be no need to interact with the accounts directly for the most part.
-->

- [`llm-proxy-readonly`](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&h=team-sourcegraph.1password.com&i=33qlfie6epzm7vxa24ixrczcfi&v=dnrhbauihkhjs5ag6vszsme45a) - this account is the default one provisioned for cody-gateway instances, and should have **read-only** access to product subscriptions.
  - Required RBAC permission: `Product Subscriptions: Read`
  - RBAC role: [`Product Subscriptions Reader`](https://sourcegraph.com/site-admin/roles)
- [`llm-proxy`](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&h=team-sourcegraph.1password.com&i=gkxxq4jdpgfu2zoynwtjjf3vxy&v=dnrhbauihkhjs5ag6vszsme45a) - this account should have **read and write** access on cody-gateway-related resources. This is primarily used for Sourcegraph Cloud integration, where we ened to be able to manage cody-gateway access for product subscriptions.
  - Required RBAC permission: `Product Subscriptions: Write`
  - RBAC role: [`Product Subscriptions Writer`](https://sourcegraph.com/site-admin/roles)

More details for each account are available in the 1password entries linked above.

> [!WARNING] Do not delete the RBAC roles used by these service accounts.
