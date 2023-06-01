# Using Cody Gateway

Cody Gateway can be configured as a provider for [Cody completions](https://docs.sourcegraph.com/cody/completions) and Cody embeddings (coming soon).

> NOTE: Cody Gateway is only available to instances on Sourcegraph 5.1.0 and above.

## Provisioning access

Access to the production Cody Gateway instance can be provisioned with the following steps:

1. Go to [**Site admin > Subscriptions**](https://sourcegraph.com/site-admin/dotcom/product/subscriptions)
2. Find and open a subscription of interest
   1. If you have the license key on hand, you can also use the [license key lookup tool](https://sourcegraph.com/site-admin/dotcom/product/licenses).
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

## Analyzing usage

A brief summary of Cody Gateway usage is available in each subscription's "Cody services" section:

1. Go to [**Site admin > Subscriptions**](https://sourcegraph.com/site-admin/dotcom/product/subscriptions)
2. Find and open a subscription of interest
   1. If you have the license key on hand, you can also use the [license key lookup tool](https://sourcegraph.com/site-admin/dotcom/product/licenses).
3. View data in "Cody services" section

Usage data is collected on a variety of events going through Cody Gateway, which is then sent to BigQuery. To learn more, see [Usage events](./index.md#usage-events).
