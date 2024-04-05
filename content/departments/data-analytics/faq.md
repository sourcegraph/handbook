# Data & Analytics FAQs

Below are answers to common questions teammates at Sourcegraph have.

### I can't find a customer's instance anywhere in Looker. What's going on?

You can look up the installer_email on your customer's instance using their license key with [this chart](https://sourcegraph.looker.com/looks/1597?toggle=fil). You can then filter any of our enterprise dashboards by installer_email to see this customer's usage. If you try this and you're still not able to locate their instance, it's possible they haven't input a license key yet, or that they're "[offline](https://sourcegraph.looker.com/looks/1527)" (not sending any telemetry).

### I’m looking for data about….do we have that?

Our most frequently used reporting can be found [here](reports.md#notable-reports). If you don't see what you're looking for there, you can try utilizing Looker's search bar to search for the report you need. If you still can't find anything, feel free to reach out to #discuss-analytics.

### I’m using Looker and want to edit/explore a chart or dashboard, but I don’t have the right permissions. How do I upgrade my permissions?

Manipulating existing looker charts (adding a different filter, changing dimensions, adding a column, etc) requires the view/edit/create role. You can request a view/edit/create role in Looker via Entitle - This will allow you to edit and explore any chart in Looker. A link and instructions can be found [here](reports.md#how-do-i-get-access-to-looker). Your Entitle request should be processed immediately - just be sure to log out and log back in to Looker after your Entitle request goes through.

For tips about how to explore data in Looker - see [here](reports.md#how-to-use-looker).

### What’s the best resource to see my customer’s cody usage?

You can use our [Cody Customer Dashboard](https://sourcegraph.looker.com/dashboards/503?Server+Endpoint=podium.sourcegraphcloud.com&Date=30+day&Minutes+Saved+per+Chat=5&Minutes+Saved+per+Command+=5&Minutes+Saved+per+Completion+=2) to see any customer's cody usage. Locate your customer's instance using the server endpoint filter - the server endpoint is the same as the URL the customer uses to visit their instance. Generally this URL is something along the lines of [customer].sourcegraph.com. One thing to note is that currenlty we don't collect cody web usage from customer instances - so web data cannot be found on this dashboard.

We don't collect user PII from our customers, but if a customer wants to see who their "top" cody users are - this [chart](https://sourcegraph.looker.com/looks/1707?toggle=fil,pik) will generate a query the customer can run against their own instance to see who is using Cody. Be sure to read the description on this chart before using, so you apply the filters appropriately.

### What’s the best resource to see Cody usage, generally?

- This [dashboard](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=&IDE=) contains all of our most frequently cited metrics - DAUs, installs, CAR, latency, retention..etc.
- If you want to do more exploratory analysis, you may also want to leverage [Amplitude](amplitude.md#amplitude), or, if you're SQL-savvy, you can query the dotcom_events.cody table directly in [Redash](reports.md##what-is-redash)

### How often does data in Looker or Amplitude refresh?

It depends on the dataset:

- Cody data / data from sourceraph.com refreshes hourly
- Pings data usually refreshes every few hours, and some lesser used pings data points refresh daily

### Why do I see different results when I look at the same data in Looker and Amplitude?

- Occasionally we perform data cleanup on the tables that load Looker dashboards, but the same cleanup can't easily performed in Amplitude (because data in Amplitude is immutable once ingested). See [here](https://docs.google.com/spreadsheets/d/1VM6sbPZ9sY9lt-ngya706n2dIKZrvMA_0O1FtGj6Qh4/edit#gid=0) for a list of anomalies/cleanup events, and how they might affect metrics in Looker and Amplitude differently.
- Besides that, unlike Looker, Amplitude's calculations are "out of the box" - meaning we don't have control over exactly how they are calculated, the way we do in Looker. When in doubt, Looker is generally the source of truth for our KPIs because we can control exactly how each metrics is calculated

### Do we collect [insert event] on sourcegraph.com?

1. Enable Developer mode
2. Show JavaScript Console
3. Go to sourcegraph.com
4. Enter `localStorage.eventLogDebug = "true"` in the JS console
5. You can just use Sourcegraph normally and in the side or bottom bar it'll show all the events being triggered!

Alternatively, you can always search in Amplitude when creating a chart for what you think the event might be (e.g. submitting a search is `Search Submitted`) and hopefully it pops up. If you can't find what you're looking for, feel free to reach out in #discuss-analytics and we'll take a look!

### My customer wants to disable telemetry entirely. How do they do so?

If they have the appropriate plan and license key, see our ["how to disable usage data collection" page](how-to-airgap-disable-telemetry.md).
