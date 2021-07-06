# Amplitude

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

#### Overview

Most Sourcegraph Cloud events are being sent to Amplitude. The events not being sent are extremely low traffic events, non-UI events (e.g. backend events for a search that we capture) or ones we have explicitly decided to exclude (such as code insights events because we’re focused on enterprise and Cloud data won’t inform any decisions). The [full data map is in Drive](https://docs.google.com/spreadsheets/d/171up68LIY1xQZTgBoA5FQpGO62Wg0a0wNNrm8ksVm4A/edit#gid=0).

It’s sent through a [script](https://github.com/sourcegraph/Amplitude/blob/main/main.py) that runs every hour and pulls from ```sourcegraph_analytics.amplitude_events_prod```, which is loaded by [this scheduled query](https://console.cloud.google.com/bigquery/scheduled-queries/locations/us/configs/609f8a27-0000-287c-9f20-f403043cb328/runs?project=telligentsourcegraph).

#### Adding event properties

Event properties are attributes of a particular event. These are added to the ```amplitude_events``` table as individual columns from this scheduled query. For example, here's a snippet that extracts event properties from both the argument field of an event, as well as an event itself. If you're adding a new event property, please add it to the [data map](https://docs.google.com/spreadsheets/d/1wz958I67BKWWY0jKY3oXKhlrGZ9ucKmv0CM94K-5NVs/edit#gid=408201559). 

```
JSON_EXTRACT(argument,
  '$.code_search.results.results_count') AS results_count,
JSON_EXTRACT(argument,
  '$.code_search.results.alert') AS alert,
CASE
  WHEN name = 'ViewRepogroup:python' THEN 'python'
  WHEN name = 'ViewRepogroup:golang' THEN 'golang'
  WHEN name = 'ViewRepogroup:android' THEN 'android'
  WHEN name = 'ViewRepogroup:kubernetes' THEN 'kubernetes'
  WHEN name = 'ViewRepogroup:kubernetes' THEN 'kubernetes'
  WHEN name = 'ViewRepogroup:kubernetes' THEN 'kubernetes'
  WHEN name = 'ViewRepogroup:stanford' THEN 'stanford'
  WHEN name = 'ViewRepogroup:cncf' THEN 'cncf'
ELSE
NULL
END
repogroup_name,
```

#### Adding user properties

User properties are the attributes of individual users. The ```amplitude_user_characteristics``` table defines all user properties, and this table is joined in with every event that is passed to Amplitude. These user properties include every A/B test from ```ab_test_users```. See more in the A/B testing doc (coming soon). 

If an additional user property is added to this table, it will only be applied to events and users going forward. User properties are sent to Amplitude along with events, so new properties will only be added when a user triggers an event that is sent to Amplitude. When adding a user property, please add it to the [data map](https://docs.google.com/spreadsheets/d/1wz958I67BKWWY0jKY3oXKhlrGZ9ucKmv0CM94K-5NVs/edit#gid=735397811)

#### Adding events to Amplitude

Amplitude is built on top of our existing [eventLogger infrastructure](https://sourcegraph.com/search?q=context:global+eventLogger.log%28+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+&patternType=literal), so we consider an event to be anything logged by this. We use [object action framework in Proper Case](https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/) for our naming. For example, in eventLogger this would show up as 'SearchSubmitted', and in Amplitude it's converted to 'Search Submitted'. 

1. A product/engineering team member should let BizOps/DataOps know if there's an event they would like added to Amplitude. 
2. Since Amplitude events are based on the ```sourcegraph_analytics.amplitude_events_prod``` table, an [INSERT statement](https://console.cloud.google.com/bigquery?pli=1&project=telligentsourcegraph&ws=!1m14!1m4!1m3!1stelligentsourcegraph!2sbquxjob_3a38e2f8_179cb5027f7!3sUS!1m4!4m3!1stelligentsourcegraph!2sdotcom_events!3samplitude_events_v2!1m3!8m2!1s839055276916!2sed7433a9cf0646a8a7c186c907b9accb&jobFilter=%255B%257B_22k_22_3A_22User%2520email_22_2C_22t_22_3A10_2C_22v_22_3A_22_5C_22ericbm%2540sourcegraph.com_5C_22_22_2C_22s_22_3Atrue%257D%255D&sq=839055276916:ed7433a9cf0646a8a7c186c907b9accb) needs to be run to add or backfill events into the table. When this is run, all prior occurrences of the new event will be added to the table. When the scheduled query to update `sourcegraph_analytics.amplitude_events_v2` is next run, all new occurrences of the event will be populated to the table. A BizOps/DataOps team member will run this INSERT statement.
3. Add the event to the [data map](https://docs.google.com/spreadsheets/d/171up68LIY1xQZTgBoA5FQpGO62Wg0a0wNNrm8ksVm4A/edit#gid=0).
4. Within an hour or two of the INSERT statement, the [automated script](https://github.com/sourcegraph/Amplitude/blob/main/main.py) will load these events into Amplitude.
