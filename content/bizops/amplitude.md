# Amplitude

## How do I get started?

1. Login to [our workspace](https://analytics.amplitude.com/sourcegraph) (named `Sourcegraph`). If you don't have an account, shoot a message to @ericbm or request one during login.
1. Watch this [short walkthrough](https://drive.google.com/file/d/1J_xSAd1SevMcM0wv3RD_uxtuv8UF8etA/view?usp=sharing) by @ericbm with a couple members of our marketing team. It goes over the data in Amplitude and how to build many different kinds of analyses. You can also read the Amplitude documentation for [building analyses](https://help.amplitude.com/hc/en-us/categories/360003165371-Build-and-share-your-analysis) and/or check out some of our [tutorials](https://drive.google.com/drive/folders/1cdcUe2e4bnYjxr9xqV6-pCsOOPIEMqGI).
1. Check out the [Product team space](https://analytics.amplitude.com/sourcegraph/space/nldziax/all) for existing dashboards.
1. Ask BizOps for help if you have any questions, and/or post in #analytics-review if you have a work-in-progress analysis you want someone else's eyes on.

## Why are we using Amplitude?

Amplitude is a product analytics tool that specializes in turning event data into actionable insights and dashboards. Any question about how our product is used is probably easiest to answer in Amplitude because they're built specifically to answer these questions.

### Why aren’t we using Looker for this?

Looker is very flexible in that we have the ability to set it up for any purpose we'd like. The downside of this is that to provide a great self-service experience for questions about product usagee, this would take a LOT of work. We get these capabilities out of the box with Amplitude.

### What is in Looker vs. Amplitude?

Anything not based directly on analyzing Sourcegraph Cloud events is in Looker. This includes [pings from on-prem instances](https://docs.sourcegraph.com/admin/pings), anything we get from the [Cloud Postgres database](https://github.com/sourcegraph/sourcegraph/blob/main/internal/database/schema.md) and any data from third-parties tools (such as Google Analytics and Salesforce).

| Type of analysis        | Tool      | Example                                                               |
| ----------------------- | --------- | --------------------------------------------------------------------- |
| Retention/engagement    | Amplitude | [Link](https://analytics.amplitude.com/sourcegraph/chart/zlj82e0)     |
| Adoption of public code | Looker    | [Link](https://sourcegraph.looker.com/dashboards-next/175)            |
| Progress towards OKRs   | Looker    | [Link](https://sourcegraph.looker.com/dashboards-next/166)            |
| On-prem instances/pings | Looker    | [Link](https://sourcegraph.looker.com/dashboards-next/174)            |
| Signup funnel on Cloud  | Amplitude | [Link](https://analytics.amplitude.com/sourcegraph/dashboard/f9c1g6c) |

Any analysis that was conducted in Looker prior to the implementation of Amplitude can still be done in Looker, and existing Looker dashboards and visualizations will still be maintained. Amplitude will help us conduct new and different analysis regarding product analytics.

## Data

### Overview

Most Sourcegraph Cloud events are being sent to Amplitude. The events not being sent are extremely low traffic events, non-UI events (e.g. backend events for a search that we capture) or ones we have explicitly decided to exclude (such as code insights events because we’re focused on enterprise and Cloud data won’t inform any decisions). The [full data map is in Drive](https://docs.google.com/spreadsheets/d/171up68LIY1xQZTgBoA5FQpGO62Wg0a0wNNrm8ksVm4A/edit#gid=0).

The data is currently backfilled from 2021-10-01.

It’s sent through a [script](https://github.com/sourcegraph/Amplitude/blob/main/main.py) that runs every hour and pulls from `sourcegraph_analytics.amplitude_events_v5`, which is loaded by [this scheduled query](https://console.cloud.google.com/bigquery/scheduled-queries/locations/us/configs/61cbb857-0000-2751-bbf2-94eb2c039f64/runs?project=telligentsourcegraph).

### Adding event properties

Event properties are attributes of a particular event. These are added to the `amplitude_events_v5` table as individual columns from this scheduled query. For example, here's a snippet that extracts event properties from both the argument field of an event, as well as an event itself.

The steps to adding additional event properties to the query/table:

1. Create a [PR](https://github.com/sourcegraph/analytics/pull/266) to update the `amplitude_events_v5` [scheduled query](https://console.cloud.google.com/bigquery/scheduled-queries/locations/us/configs/61cbb857-0000-2751-bbf2-94eb2c039f64/runs?project=telligentsourcegraph) with the new event properties.
2. Once another member of the team approves, open a blank BigQuery query editor, run the query, and then save the results to a new test table (e.g. amplitude_test_20210812).
3. Create an [issue](https://github.com/sourcegraph/analytics/issues/271) for Data Engineering to upload a sample of the new test table to a test project in Amplitude.
4. If the data shows up as expected in Amplitude, go ahead and update the `amplitude_events_v5` query with your PR.
5. Update the INSERT statement with the new event properties. You can't backfill event properties to events that already exist in Amplitude; however, you can backfill event properties if you're backfilling events also.

If you're adding a new event property, please add it to the [data map](https://docs.google.com/spreadsheets/d/1wz958I67BKWWY0jKY3oXKhlrGZ9ucKmv0CM94K-5NVs/edit#gid=408201559).

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

### Adding user properties

User properties are the attributes of individual users. The `amplitude_user_characteristics` table defines all user properties, and this table is joined in with every event that is passed to Amplitude. These user properties include every A/B test from `ab_test_users`. See more in the A/B testing doc (coming soon).

If an additional user property is added to this table, it will only be applied to events and users going forward. User properties are sent to Amplitude along with events, so new properties will only be added when a user triggers an event that is sent to Amplitude. When adding a user property, please add it to the [data map](https://docs.google.com/spreadsheets/d/1wz958I67BKWWY0jKY3oXKhlrGZ9ucKmv0CM94K-5NVs/edit#gid=735397811)

### Adding events to Amplitude

Amplitude is built on top of our existing [eventLogger infrastructure](https://sourcegraph.com/search?q=context:global+eventLogger.log%28+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+&patternType=literal), so we consider an event to be anything logged by this. We use [object action framework in Proper Case](https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/) for our naming. For example, in eventLogger this would show up as 'SearchSubmitted', and in Amplitude it's converted to 'Search Submitted'.

All events from eventLogger are sent to Amplitude except if explicitely added to a denylist in the scheduled query.

## A/B testing in Amplitude

Each A/B test has a user property where the A/B test is true or false (true = they saw the variant, false = they saw the original). See the page on [A/B testing](ab-testing.md) for more information about experimentation at Sourcegraph.
