## How do I get started?
1. [Take a look at what data is in Amplitude](#data)
1. Read the Amplitude documentation for [building analyses](https://help.amplitude.com/hc/en-us/categories/360003165371-Build-and-share-your-analysis)
1. Ask BizOps for help if you have any questions!

## Why are we using Amplitude?
Amplitude is a product analytics tool that specializes in turning event data into actionable insights and dashboards. Any question about how our product is used is probably easiest to answer in Amplitude because they're built specifically to answer these questions.

### Why aren’t we using Looker for this?
Looker is very flexible in that we have the ability to set it up for any purpose we'd like. The downside of this is that to provide a great self-service experience for questions about product usagee, this would take a LOT of work. We get these capabilities out of the box with Amplitude. 

### What is in Looker vs. Amplitude?

Anything not based directly on analyzing Sourcegraph Cloud events is in Looker. This includes [pings from on-prem instances](https://docs.sourcegraph.com/admin/pings), anything we get from the [Cloud Postgres database](https://github.com/sourcegraph/sourcegraph/blob/main/internal/database/schema.md) and any data from third-parties tools (such as Google Analytics and Salesforce). 

| Type of analysis        | Tool      | Example |
|-------------------------|-----------|---------|
| Retention/engagement    | Amplitude | [Link](https://analytics.amplitude.com/sourcegraph/chart/7l5vdg4?source=workspace)    |
| Adoption of public code | Looker    | [Link](https://sourcegraph.looker.com/dashboards-next/175)    |
| Progress towards OKRs   | Looker    | [Link](https://sourcegraph.looker.com/dashboards-next/166)    |
| On-prem instances/pings | Looker    | [Link](https://sourcegraph.looker.com/dashboards-next/174)    |
| Signup funnel on Cloud  | Amplitude | [Link](https://analytics.amplitude.com/sourcegraph/chart/jumvevm?source=workspace)    |

Any analysis that was conducted in Looker prior to the implementation of Amplitude can still be done in Looker, and existing Looker dashboards and visualizations will still be maintained. Amplitude will help us conduct new and different analysis regarding product analytics. 
### Data
Most Sourcegraph Cloud events are being sent to Amplitude. The events not being sent are extremely low traffic events, non-UI events (e.g. backend events for a search that we capture) or ones we have explicitly decided to exclude (such as code insights events because we’re focused on enterprise and Cloud data won’t inform any decisions). The [full data map is in Drive](https://docs.google.com/spreadsheets/d/171up68LIY1xQZTgBoA5FQpGO62Wg0a0wNNrm8ksVm4A/edit#gid=0).

The data in Amplitude starts on 2020-12-01. 

It’s sent through a script that runs every hour and pulls from ```sourcegraph_analytics.amplitude_events```, which is loaded by [this scheduled query](https://console.cloud.google.com/bigquery/scheduled-queries/locations/us/configs/609f8a27-0000-287c-9f20-f403043cb328/runs?project=telligentsourcegraph).
