# LLM proxy

> WARNING: This project is currently a work in progress - reach out to #wg-llm-proxy for more information.

LLM Proxy is a managed proxy service that routes requests to various LLM backends such as Anthropic and OpenAI (coming soon).
It is intended for use by both Sourcegraph.com and individual Sourcegraph instances such as Sourcegraph Cloud and on-premises instances.
In general, we have two LLM Proxy instances running:

- `completions.sourcegraph.com` - for production usage
- `completions.sgdev.org` - for development and testing

Contents:

- [Architecture](#architecture)
- [Service images](#service-images)
- [Access](#access)
- [Operation](#operation)

## Architecture

See [LLM Proxy: working design](https://docs.google.com/document/d/1fAKuYM02vRfn-QAmcu38QWmtQ797g1TA3L6CNs0rFps/edit#) for the current state of LLM proxy architecture.

## Service images

Source code for LLM Proxy is in [`sourcegraph/sourcegraph/enterprise/cmd/llm-proxy`](https://github.com/sourcegraph/sourcegraph/tree/main/enterprise/cmd/llm-proxy).
The image gets built the same as any other Sourcegraph service, i.e. with `insiders` and the standard `main`-branch tags.

## Access

Access to `completions.sourcegraph.com` can be provisioned with the following steps:

1. Go to [**Site admin > Subscriptions**](https://sourcegraph.com/site-admin/dotcom/product/subscriptions)
2. Find and open a subscription of interest
3. Under "Cody services":
   1. Enable access to hosted completions
   2. If desired, configure a custom rate limit
   3. Copy the generated access token

On the Sourcegraph instance, configure `llmproxy` as the completions provider:

```json
{
  "completions": {
    "accessToken": "REDACTED",
    "enabled": true,
    "model": "claude-v1",
    "provider": "llmproxy"
  }
}
```

> NOTE: Changes in product subscription, such as enabling access and configuring custom rate limits, may take some time to propagate.

Access to `completions.sgdev.org` is the same as the above, but requires that the product subscription's associated license have the `dev` tag.

## Operation

LLM Proxy infrastructure is defined in Terraform in [`sourcegraph/infrastructure/llm-proxy/envs`](https://github.com/sourcegraph/infrastructure/tree/main/llm-proxy/envs), corresponding to each of the long-running LLM Proxy instances:

- `llm-proxy/envs/prod`: `completions.sourcegraph.com`
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?tag=llm-proxy,prod)
  - [Cloud Run service](https://console.cloud.google.com/run/detail/us-central1/llm-proxy/metrics?project=llm-proxy-prod)
  - [Service logs](https://cloudlogging.app.goo.gl/M9Kcbue8zGtMwpdf8)
- `llm-proxy/envs/dev`: `completions.sgdev.org`
  - [Terraform Cloud workspaces](https://app.terraform.io/app/sourcegraph/workspaces?tag=llm-proxy,dev)
  - [Cloud Run service](https://console.cloud.google.com/run/detail/us-central1/llm-proxy/metrics?project=llm-proxy-dev)
  - [Service logs](https://cloudlogging.app.goo.gl/yFRNbj3pKjtZZqb2A)

To roll out a new LLM Proxy build:

- `completions.sourcegraph.com`: Make a PR that updates [`llm-proxy/envs/prod/cloudrun/main.tf`](https://github.com/sourcegraph/infrastructure/blob/main/llm-proxy/envs/prod/cloudrun/main.tf) to point to the new build. The image must be in the standard `main`-branch tag format e.g. `218287_2023-05-10_5.0-5bd03cd18e71`.
- `completions.sgdev.org`: [Go to the "Deploy revision" page of the Cloud Run service](https://console.cloud.google.com/run/deploy/us-central1/llm-proxy?project=llm-proxy-dev) and click "Deploy" without changing any configuration - this will redeploy the service with the latest `llm-proxy:insiders` image.
  - This will also happen whenever a Terraform change happens to the `cloudrun` module.

### Service accounts

LLM-proxy access Sourcegraph.com through standard Sourcegraph.com users that are configured with feature flags to enable special access to GraphQL queries and mutations related to product subscriptions.

The current accounts are as follows:

- [`llm-proxy-readonly`](https://team-sourcegraph.1password.com/vaults/all/allitems/3pedoq4kuocyey273nxykwlecy) - this account is the default one provisioned for LLM-proxy instances, and should have read-only access to product subscriptions.
  - Feature flag: [`product-subscriptions-reader-service-account`](https://sourcegraph.com/site-admin/feature-flags/configuration/product-subscriptions-reader-service-account)
- [`llm-proxy`](https://team-sourcegraph.1password.com/vaults/all/allitems/gkxxq4jdpgfu2zoynwtjjf3vxy) - this account should have read and write access on LLM-proxy-related resources. This is primarily used for Sourcegraph Cloud integration, where we ened to be able to manage LLM-proxy access for product subscriptions.
  - Feature flag: [`product-subscriptions-service-account`](https://sourcegraph.com/site-admin/feature-flags/configuration/product-subscriptions-service-account)

More details for each account are available in the 1password entries linked above.

> WARNING: All the above feature flags should be configured as **boolean, default off**.
