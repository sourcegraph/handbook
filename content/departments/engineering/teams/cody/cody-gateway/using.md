# Using Cody Gateway

Cody Gateway can be configured as a provider for [Cody completions](https://docs.sourcegraph.com/cody/completions) and [Cody embeddings](https://docs.sourcegraph.com/cody/explanations/code_graph_context#embeddings).
This page provides enablement to help Sourcegraph teammates grant customers access to Cody Gateway and analyze usage.

For customers who adopted Cody completions prior to Sourcegraph 5.1.0, see [Migrating from Anthropic/OpenAI completions](#migrating-from-anthropicopenai-completions).

> NOTE: Cody Gateway is only available to instances on Sourcegraph 5.1.0 and above.

## Provisioning access

Access to the production Cody Gateway instance can be provisioned with the following steps:

1. On sourcegraph.com, go to [**Site admin > Subscriptions**](https://sourcegraph.com/site-admin/dotcom/product/subscriptions)
2. Find and open a subscription of interest
   1. If you have the license key on hand, you can also use the [license key lookup tool](https://sourcegraph.com/site-admin/dotcom/product/licenses).
3. Under "Cody services":
   1. Enable access to Cody Gateway
   2. If desired, configure a custom rate limit for the desired features
   3. Copy the generated access token

> NOTE: Changes in product subscription, such as enabling access and configuring custom rate limits, may take around 2 minutes to propagate.

Access to `cody-gateway.sgdev.org` is the same as the above, but requires that the product subscription's associated license have the `dev` or `internal` tag.

## Configuration

> WARNING: **For Sourcegraph Cloud customers, please use the [Cody enablement issue](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fenable-cody-request&projects=&template=managed-instance-enable-cody.md&title=Managed+Instance+enable+Cody+for+%5BCUSTOMER+NAME%5D) to request configuration** instead of applying configuration changes yourself or asking the customer to do so.

### Configuring completions

First, [provision access](#provisioning-access) for the customer.
Then, on the Sourcegraph instance, configure `sourcegraph` as the completions provider:

```json
{
  "completions": {
    "enabled": true,
    "provider": "sourcegraph",
    "chatModel": "anthropic/claude-v1",
    "completionModel": "anthropic/claude-instant-v1"
  }
}
```

For `cody-gateway.sgdev.org`, the `endpoint` should be `https://cody-gateway.sgdev.org`.

> NOTE: The generated access token from [provisioning access](#provisioning-access) is not required, but can optionally be configured as `accessToken` if explicitness is desired.

### Configuring embeddings

First, [provision access](#provisioning-access) for the customer.
Then, on the Sourcegraph instance, configure `sourcegraph` as the embeddings provider:

```json
{
  "embeddings": {
    "enabled": true,
    "provider": "sourcegraph",
    "model": "openai/text-embedding-ada-002",
    "dimensions": 1536
  }
}
```

For `cody-gateway.sgdev.org`, the `endpoint` should be `https://cody-gateway.sgdev.org/v1/embeddings`.

> NOTE: The generated access token from [provisioning access](#provisioning-access) is not required, but can optionally be configured as `accessToken` if explicitness is desired.

## Analyzing usage

A brief summary of Cody Gateway usage is available in each subscription's "Cody services" section:

1. On sourcegraph.com, go to [**Site admin > Subscriptions**](https://sourcegraph.com/site-admin/dotcom/product/subscriptions)
2. Find and open a subscription of interest
   1. If you have the license key on hand, you can also use the [license key lookup tool](https://sourcegraph.com/site-admin/dotcom/product/licenses).
3. View data in "Cody services" section

Usage data is collected on a variety of events going through Cody Gateway, which is then sent to BigQuery. To learn more, see [Usage events](./index.md#usage-events).

## Migrating from Anthropic/OpenAI completions

> NOTE: This is most relevant for customers who adopted Cody completions prior to Sourcegraph 5.1.0.

Customers using another provider for completions can be migrated to Cody Gateway by first [provisioning access](#provisioning-access), then configuring `sourcegraph` as the completions provider and replacing `accessToken` with the provisioned product subscription access token.

Models (`completions.chatModel`, `completions.completionModel`, `embeddings.model`, and so on) should be updated such that they are prefixed with the previous provider, either `anthropic/` or `openai/`. For example, `"chatModel": "anthropic/claude-v1"` should be updated to `"chatModel": "anthropic/claude-v1"`.

A full migration example:

<table>
<tr>
<th><b>Before</b></th>
<th><b>After</b></th>
</tr>
<tr>
<td>

```json
{
  "completions": {
    "enabled": true,
    "provider": "anthropic",
    "accessToken": "REDACTED",
    "chatModel": "claude-v1",
    "completionModel": "claude-instant-v1"
  },
  "embeddings": {
    "enabled": true,
    "provider": "openai",
    "accessToken": "REDACTED",
    "model": "text-embedding-ada-002",
    "dimensions": 1536
  }
}
```

</td>
<td>

```json
{
  "completions": {
    "enabled": true,
    "provider": "sourcegraph",
    "chatModel": "anthropic/claude-v1",
    "completionModel": "anthropic/claude-instant-v1"
  },
  "embeddings": {
    "enabled": true,
    "provider": "sourcegraph",
    "model": "openai/text-embedding-ada-002",
    "dimensions": 1536
  }
}
```

</td>
</tr>
</table>
