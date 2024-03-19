# Using Cody Gateway

> [!NOTE] This page is for internal Sourcegraph reference - for customer-facing documentation, please refer to [**Sourcegraph Cody Gateway docs**](https://docs.sourcegraph.com/cody/explanations/cody_gateway) instead.

Cody Gateway can be configured as a provider for [Cody completions](https://docs.sourcegraph.com/cody/completions) and [Cody embeddings](https://docs.sourcegraph.com/cody/explanations/code_graph_context#embeddings).
This page provides enablement to help Sourcegraph teammates grant customers access to Cody Gateway and analyze usage.
If you prefer a video format, you can also check out the [Intro to Sourcegraph Cody Gateway (5.1) video](https://www.loom.com/share/6b944060a0fb40dcb4499751c54bd316), which includes some background context as well.

For customers who adopted Cody completions prior to Sourcegraph 5.1.0, see [Migrating from Anthropic/OpenAI completions](#migrating-from-anthropicopenai-completions).

To learn more about Cody Gateway, refer to the [main Cody Gateway page](./index.md) and the [customer-facing documentation](https://docs.sourcegraph.com/cody/explanations/cody_gateway).

> [!NOTE] Cody Gateway is only available to instances on Sourcegraph 5.1.0 and above. This guidance is not relevant to customers on any previous Sourcegraph release.

## Provisioning access

Access to the production Cody Gateway instance can be provisioned with the following steps:

1. On sourcegraph.com, go to [**Site admin > Enterprise subscriptions**](https://sourcegraph.com/site-admin/dotcom/product/subscriptions)
2. Find and open a subscription of interest
   1. If you have the license key on hand, you can also use the [license key lookup tool](https://sourcegraph.com/site-admin/dotcom/product/licenses).
3. Under "Cody services":
   1. Enable access to Cody Gateway
   2. If desired, configure custom rate limits to allow more/less usage
   3. **Customers can only use the models listed under "Cody services"**. To configure other models:
      1. Adding the `gpt` tag to the latest license will enable access to all OpenAI GPT models. It is not required, this is only a convenience mechanism - overrides will always take precedence.
      2. Adding a custom rate limit (override) allows you to configure other models to allow the customer to use

Once access is provisioned (i.e. enabled via Cody Gateway), the Sourcegraph instance must be [configured](#configuration) as well.

> [!WARNING] Changes in Enterprise subscriptions, such as enabling access and configuring custom rate limits, may take around 2 minutes to propagate.

<br />

> [!NOTE] Access to `cody-gateway.sgdev.org` is the same as the above, but requires that the Enterprise subscription's associated license have the `dev` or `internal` tag.

## Configuration

> [!WARNING] **For Sourcegraph Cloud customers, please use the [Cody enablement issue](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Cmi%2Fenable-cody-request&projects=&template=managed-instance-configure-cody.yml&title=Managed+Instance+enable+Cody+for+%5BCUSTOMER+NAME%5D) to request configuration** instead of applying configuration changes yourself or asking the customer to do so.
> If using custom models, please ensure [the subscription has the prerequisite access to the desired models](#provisioning-access).

First, [provision access](#provisioning-access) for the customer.
Once access has been provisioned, for self-hosted customers please point them to the [customer-facing Sourcegraph Cody Gateway docs](https://docs.sourcegraph.com/cody/explanations/cody_gateway) to enable Cody and self-serve configuration for completions and embeddings.

> [!NOTE] The generated access token from [provisioning access](#provisioning-access) is generally not required - tokens are automatically generated based on the Sourcegraph instance's license token.
> In site configuration, we recommend _not_ setting an access token explicitly when using Cody Gateway to take advantage of automatic defaults.

## Analyzing usage

A brief summary of Cody Gateway usage is available in each Enterprise subscriptions's "Cody services" section:

1. On sourcegraph.com, go to [**Site admin > Enterprise subscriptions**](https://sourcegraph.com/site-admin/dotcom/product/subscriptions)
2. Find and open a subscription of interest
   1. If you have the license key on hand, you can also use the [license key lookup tool](https://sourcegraph.com/site-admin/dotcom/product/licenses).
3. View data in "Cody services" section

Usage data is collected on a variety of events going through Cody Gateway, which is then sent to BigQuery. For more advanced use cases, see [Usage events](./index.md#usage-events) for more details.

### Quota usage notifications

We have quota usage notifications when a customer consumes various percentages of their rate limit quota (currently 90, 95, 100) delivered to Slack in #cody-usage-notifications.

## Migrating from Anthropic/OpenAI completions

> [!NOTE] This is most relevant for customers who adopted Cody completions prior to Sourcegraph 5.1.0.

Customers using another provider for completions can be migrated to Cody Gateway by first [provisioning access](#provisioning-access), then configuring `sourcegraph` as the completions provider and replacing `accessToken` with the provisioned Enterprise subscription access token.

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
  "cody.enabled": true,
  "completions": {
    "provider": "anthropic",
    "accessToken": "REDACTED",
    "chatModel": "claude-v1",
    "completionModel": "claude-instant-v1"
  },
  "embeddings": {
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
  "cody.enabled": true,
  "completions": {
    "provider": "sourcegraph",
    "chatModel": "anthropic/claude-v1",
    "completionModel": "anthropic/claude-instant-v1"
  },
  "embeddings": {
    "provider": "sourcegraph",
    "model": "openai/text-embedding-ada-002",
    "dimensions": 1536
  }
}
```

</td>
</tr>
</table>

## Adjusting sourcegraph.com user quota

> [!NOTE] This assumes you can get site-admin priviledges on sourcegraph.com - see [how](../../../../security/admin-access-internal-instances.md#how-it-works)

If you want to adjust quota for yourself / someone else, and you have Site Admin priviledges on sourcegraph.com, do the following:

1. Got to Quotas page for the user that you want to modify
   1. Located in Settings -> Quotas (for yourself)
   2. [User list](https://sourcegraph.com/site-admin/users) -> find the user you want to modify -> click on their username -> click Settings tab -> click Quotas
2. Adjust the right quota - _Custom completions quota_ for Chat, _Custom code completions quota_ for code completions and Click save.

Changes should be effective immediately (next Cody request).
