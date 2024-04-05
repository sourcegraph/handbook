# How to disable usage data or telemetry for (or how to "airgap") a customer instance

## Types of usage data we collect

There are two primary ways that we collect usage data from self-hosted Sourcegraph instances:

1. [Pings](https://sourcegraph.com/docs/admin/pings#pings): anonymous and pre-aggregated data packets).
2. [Event-level telemetry](https://sourcegraph.com/docs/dev/background-information/telemetry): still fully anonymous, but includes full user event/activity stream.

## How to disable collection

For recent versions of Sourcegraph, disabling either form of usage data collection requires a license key tag that permits it.

1. First, the customer must receive a [license key that has the appropriate tag(s) that permit "air gapped" usage](../technical-success/ce/process/license_keys.md). Currently, the options that permit portions of this are "Allow air gapped", "Allow disable telemetry export", and any enterprise plans that explicitly permit "air gapped" usage.

- When this license key tag is applied to the customer instance, event-level telemetry exports (#2 in the [list above](#types-of-usage-data-we-collect)) will be automatically stopped.

2. Second, the customer may actually "air gap" their instance at this point. If they do so (e.g., via networking rules that disallow connections to Sourcegraph.com and other Sourcegraph-managed URLs), then by default all forms of usage data collection will be stopped.

- Note that if the customer doesn't have a license key that permits this, their instance will shut down and not allow further usage. Without the appropriate "air gap" license key tags, licenses are continuously validated by pinging Sourcegraph.com.

3. Alternatively, the customer may choose to leave their connection to Sourcegraph.com open, but disable pings manually. This is done by adding (or updating) the following in their [site configuration](https://sourcegraph.com/docs/admin/config/site_config#reference):

```
...
"update.channel": "none"
...
```

Once the appropriate license key tags are applied and pings are disabled (via site configuration or networking), the customer will effectively no longer send usage data to Sourcegraph.
