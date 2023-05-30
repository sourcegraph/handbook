# Cody Gateway

> WARNING: This project is currently a work in progress - reach out to #wg-cody-gateway for more information.

Cody Gateway is a managed proxy service that routes requests to various LLM backends such as Anthropic and OpenAI (coming soon).
Additionally, the service is slated to serve embeddings backends too - [learn more](https://docs.google.com/document/d/1N1S-WUejRIwyJlM5wCxX6vFTrYX-hW6ITX-kvBKggl8/edit).
It is intended for use by both Sourcegraph.com and individual Sourcegraph instances such as Sourcegraph Cloud and on-premises instances.
In general, we have two Cody Gateway instances running:

- `cody-gateway.sourcegraph.com` - for production usage
- `cody-gateway.sgdev.org` - for development and testing

Contents:

- [Architecture](#architecture)
- [Service images](#service-images)
- [Access](#access)
- [Operation](#operation)
  - [Alerting](#alerting)
  - [Observability](#observability)
  - [Deployment](#deployment)
  - [Service accounts](#service-accounts)

## Architecture

See [Cody Gateway: working design](https://docs.google.com/document/d/1fAKuYM02vRfn-QAmcu38QWmtQ797g1TA3L6CNs0rFps/edit#) for the current state of Cody Gateway architecture.

## Service images

Source code for Cody Gateway is in [`sourcegraph/sourcegraph/enterprise/cmd/cody-gateway`](https://github.com/sourcegraph/sourcegraph/tree/main/enterprise/cmd/cody-gateway).
The image gets built the same as any other Sourcegraph service, i.e. with `insiders` and the standard `main`-branch tags.

## Access

Access to the production Cody Gateway instance can be provisioned with the following steps:

1. Go to [**Site admin > Subscriptions**](https://sourcegraph.com/site-admin/dotcom/product/subscriptions)
2. Find and open a subscription of interest
3. Under "Cody services":
   1. Enable access to Cody Gateway
   2. If desired, configure a custom rate limit for the desired features
   3. Copy the generated access token

On the Sourcegraph instance, configure `sourcegraph` as the completions provider:

```json
{
  "completions": {
    "enabled": true,
    "provider": "sourcegraph",
    "accessToken": "<replace with token here>",
    "chatModel": "anthropic/claude-v1",
    "completionModel": "anthropic/claude-instant-v1"
  }
}
```

> NOTE: Changes in product subscription, such as enabling access and configuring custom rate limits, may take around 2 minutes to propagate.

Access to `cody-gateway.sgdev.org` is the same as the above, but requires that the product subscription's associated license have the `dev` or `internal` tag.

## Operation

Cody Gateway infrastructure is defined in Terraform in [`sourcegraph/infrastructure/cody-gateway/envs`](https://github.com/sourcegraph/infrastructure/tree/main/cody-gateway/envs), corresponding to each of the long-running Cody Gateway instances:

- `cody-gateway/envs/prod`: `cody-gateway.sourcegraph.com`
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?tag=cody-gateway,prod)
  - [Cloud Run service (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/cody-gateway/metrics?project=cody-gateway-prod)
  - [Service logs](https://cloudlogging.app.goo.gl/M9Kcbue8zGtMwpdf8)
  - [Service traces](https://console.cloud.google.com/traces/overview?project=cody-gateway-prod)
  - [Sentry events](https://sourcegraph.sentry.io/projects/cody-gateway-prod/)
  - [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=cody-gateway-prod)
  - [GCP errors](https://console.cloud.google.com/errors?project=cody-gateway-dev)
- `cody-gateway/envs/dev`: `cody-gateway.sgdev.org`
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?tag=cody-gateway,dev)
  - [Cloud Run service (metrics overview)](https://console.cloud.google.com/run/detail/us-central1/cody-gateway/metrics?project=cody-gateway-dev)
  - [Service logs](https://cloudlogging.app.goo.gl/yFRNbj3pKjtZZqb2A)
  - [Service traces](https://console.cloud.google.com/traces/overview?project=cody-gateway-dev)
  - [Sentry events](https://sourcegraph.sentry.io/projects/cody-gateway-dev/)
  - [GCP alerts](https://console.cloud.google.com/monitoring/alerting?project=cody-gateway-dev)
  - [GCP errors](https://console.cloud.google.com/errors?project=cody-gateway-dev)

### Alerting

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

> NOTE: OpsGenie alerts to #ask-cloud are slated to be configured for the production instance.
> For now, #wg-cody-gateway will monitor alerts for any issues.

### Observability

See [above for links](#operation) to each resource for each of the following resources for each deployment.

#### Metrics

Each deployment's Cloud Run metrics overview provides basic observability into the service provided out-of-the-box by Cloud Run. Logs are also available in Cloud Logging.

#### Tracing

Each instance also collects and exports traces to Google Cloud Trace.
Common ways of approaching traces:

- Each HTTP request trace can be correlated with the corresponding originating Sourcegraph.com trace through a span link - this will give you the trace ID that you can use to find the corresponding trace in the `sourcegraph-dev` project for Sourcegraph.com.
  - Note: For now, ignore the automatically generated traces from `/component: AppServer`, as those currently aren't attached to our application spans.
- Log entries and Sentry error events will generally have trace IDs attached to them, which can be used to find the corresponding trace in Cloud Trace.

### Deployment

To roll out a new Cody Gateway build:

- `cody-gateway.sourcegraph.com`: Make a PR that updates [`cody-gateway/envs/prod/cloudrun/main.tf`](https://github.com/sourcegraph/infrastructure/blob/main/cody-gateway/envs/prod/cloudrun/main.tf) to point to the new build. The image must be in the standard `main`-branch tag format e.g. `218287_2023-05-10_5.0-5bd03cd18e71`.
- `cody-gateway.sgdev.org`: [Go to the "Deploy revision" page of the Cloud Run service](https://console.cloud.google.com/run/deploy/us-central1/cody-gateway?project=cody-gateway-dev) and click "Deploy" without changing any configuration - this will redeploy the service with the latest `cody-gateway:insiders` image.
  - This will also happen whenever a Terraform change happens to the `cloudrun` module.

To configure [alerting](#alerting), some initial setup outside of the Terraform module are required as Terraform modules may not be available or configured:

1. In Sentry, under each Project, set up an alert rule for all issues that sends notifications to the desired channels.
2. In GCP Error Reporting, set up alerting through the notification channel(s) provisioned through Terraform.

### Service accounts

cody-gateway access Sourcegraph.com through standard Sourcegraph.com users that are configured with feature flags to enable special access to GraphQL queries and mutations related to product subscriptions.

The current accounts are as follows:

- [`cody-gateway-readonly`](https://team-sourcegraph.1password.com/vaults/all/allitems/3pedoq4kuocyey273nxykwlecy) - this account is the default one provisioned for cody-gateway instances, and should have read-only access to product subscriptions.
  - Feature flag: [`product-subscriptions-reader-service-account`](https://sourcegraph.com/site-admin/feature-flags/configuration/product-subscriptions-reader-service-account)
- [`cody-gateway`](https://team-sourcegraph.1password.com/vaults/all/allitems/gkxxq4jdpgfu2zoynwtjjf3vxy) - this account should have read and write access on cody-gateway-related resources. This is primarily used for Sourcegraph Cloud integration, where we ened to be able to manage cody-gateway access for product subscriptions.
  - Feature flag: [`product-subscriptions-service-account`](https://sourcegraph.com/site-admin/feature-flags/configuration/product-subscriptions-service-account)

More details for each account are available in the 1password entries linked above.

> WARNING: All the above feature flags should be configured as **boolean, default off**.
