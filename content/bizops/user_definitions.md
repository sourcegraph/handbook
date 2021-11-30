# User metrics definitions

We use metrics to guide prioritization and planning. By defining metrics against the kinds of behaviors that we want to drive, we can plan features and measure results against the outcomes we're looking for. The three most important metrics we track are acquisition (of visitors), activation (visitor experiences habit creation), and retention (user remains active).

## User states

People using Sourcegraph can be segmented into a number of different states, the following of which are relevant over a measured time period (for example, monthly or weekly). They are not mutually exclusive in some cases - a user can be both registered, activated and churned at the same time.

| Metric                               | Description                                                                                       | Cloud | On-prem | Pings data point                        | Type\*         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- | ----- | ------- | --------------------------------------- | -------------- |
| [Visitor](#visitor)                  | Anyone who accessed the product                                                                   | ✔️    | ✔️      | `site_activity.MAU.UserCount`           | Activity       |
| [Active (Cloud)](#active-user)       | Users who performed a qualifying activation event (see below)                                     | ✔️    | n/a     | n/a                                     | Activity       |
| [Activated (Cloud)](#activated-user) | Users who have completed a specific series of actions that indicate they have developed the habit | ✔️    | n/a     | n/a                                     | Characteristic |
| [Registered](#registered-user)       | A user with a created an account                                                                  | ✔️    | ✔️      | `site_activity.MAU.RegisteredUserCount` | Characteristic |
| Retained                             | Users who were active last month _and_ this month                                                 | ✔️    | ✔️      | `growth_statistics.RetainedUsers`       | MoM activity   |
| Churned                              | Users who were active last month but not this month                                               | ✔️    | ✔️      | `growth_statistics.ChurnedUsers`        | MoM activity   |
| Resurrected                          | Users who were _not_ active last month but are active this month                                  | ✔️    | ✔️      | `growth_statistics.ResurrectedUsers`    | MoM activity   |
| Created                              | Users whose account was created this month                                                        | ✔️    | ✔️      | `growth_statistics.CreatedUsers`        | MoM activity   |
| Deleted                              | Users whose account was deleted this month                                                        | ✔️    | ✔️      | `growth_statistics.DeletedUsers`        | MoM activity   |

\***_Types_**

- Activity: How active a user is
- MoM Activity: Month over month usage activity descriptor
- Characteristic: a permanent user characteristic (except for creation/deletion of an account)

### Visitor

A visitor is a unique person who showed up on the site and did anything, even just viewing the page. Currently a unique person cannot be identified between our on-premises & cloud solution; in other words, when aggregating data across our deployment solution one person could be counted as a "unique person" twice. It is important to measure unique visitors because each of these visitors is potentially an active user. It is equally important that we don't count anyone who visits the product as an active user so that we can measure success of our features that are intended to convert them into an active user.

### Active user (Cloud)

An active user is differentiated from a visitor by performing a qualifying event. These events are intended to represent someone who has **engaged with** and **received value** from the product; something that takes a person from their first search to establishing a habit around the core value proposition of the app. Qualifying events are [listed as 'Active' in Amplitude](https://analytics.amplitude.com/sourcegraph/govern/project/333976/events?filter=live), and performing any single activity in that list makes a visitor an active user for the time period being measured.

Qualifying events are not intended to be difficult, or prove that someone is a heavy/power user of the product. They are carefully selected to represent activities that indicate realized value from Sourcegraph.

| Metric            | What                                                                       | Events                                                                                                          |
| ----------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Search            | Viewed search results, receive a code monitoring/saved search notification | `SearchResultsFetched` `CodeMonitorEmailLinkClicked` `Saved Search Notification Sent` `SavedSearchEmailClicked` |
| Navigation        | View a file/repository/tree                                                | `ViewBlob` `ViewRepository` `ViewTree` `ViewSearchNotebookPage`                                                 |
| Code intelligence | Hovered                                                                    | `hover`                                                                                                         |
| API docs          | Using Sourcegraph outside of the app                                       | `ViewRepositoryDocs`                                                                                            |
| Batch changes     | Created or viewed a batch change                                           | TBD                                                                                                             |
| Code insights     | Created or viewed a code insight                                           | TBD                                                                                                             |

#### Unique Sourcegraph active users

For some of our metrics we want to identify unique users across on-prem and cloud instances. For this purpose, unique users of Sourcegraph is a way to correlate registered users who have a common email address across any number of instances. For example, a@b.com on an on-prem instance and a@b.com on Sourcegraph.com would be considered the same user for the purposes of this metric. Note that most measures don't have this constraint, and any that do will include the term "Unique Sourcegraph Users" in the name of the metric.

### Registered user

Active users can be further optionally segmented into **registered** or **non-registered** users, which indicates they are logged in.

### Activated user

Unlike **active** users, which is a term meaningful within a specific time period, **activated** is a special state that is permanent once triggered.

An activated user is defined as anyone who has ever done a specific series of actions that ends in habit creation using Sourcegraph within their workflows. This can be broken down further into the setup moment (actions done to set up for the core value prop, such as signing up and adding personal repositories), aha moment (experienced the core value prop the first time, such as an active user's first search over their personal search context) and habit moment (when the habit around the core value proposition is finally established).

Activation is this entire journey, and our current definition is that someone has performed a search or code intelligence action [as defined in Amplitude](https://analytics.amplitude.com/sourcegraph/govern/project/333976/events?filter=all&event=ce%3ABecome%20active).

**Note**: There can be a ton of improvement in this definition. It will be more like they've completed 20 searches across repositories they've added to Sourcegraph, but we need to do some research into what correlates highly with retention.

## Time periods

Time periods we track:

- Daily active user (DAU)
- Weekly active user (WAU)
- Monthly active user (MAU)

The different time periods are used depending on the length of the relevant context (for example, a marketing campaign that runs for a week might track DAU while our yearly goals might track MAU.)

## Engagement ratios

| Metric     | Description                                                                                                                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DAU/MAU    | The ratio of average DAUs over a month to the number of MAUs in the corresponding month. If the ratio is 0.4 or 40%, the average active user used Sourcegraph 12 days per month (30 days \* .4 = 12).                                              |
| DAU/WAU    | The ratio of average DAUs over a week to the number of WAUs in the corresponding week. If the ratio is 0.4 or 40%, the average active user used Sourcegraph 2.8 days per week (7 days \* .4 = 2.8).                                                |
| Saturation | The ratio of the number of specific feature users to the total number users with access to the feature. If a feature's ratio is 0.2 or 20%, the saturation for the feature means that 1 in 5 users (in the cohort and timeframe) used the feature. |

## Customer Health Score

The customer health score combines high-level, aggregated metrics in order to understand customer engagement with the product, as a means to ensure customers are receiving maximum value from Sourcegraph. We currently include the following metrics:

| Metric                  | Description                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| MAU/Total User Accounts | Used as a measure of monthly adoption within a customer’s total licensed active user base             |
| DAU/MAU                 | Used as a measure of overall engagement / stickiness of the platform within an account's active users |
| Net Promoter Score      | Used as a measure of sentiment toward the platform among a customer’s active users of Sourcegraph     |

Additional Resources:

- [Project overview](https://docs.google.com/spreadsheets/d/1D2CJoVdkbXsBwVjgNDziGXBanWBfVhoVs6_kDBRStfA/edit#gid=1229546656): Describes which metrics we view as indicative of customer health along with how scores are calculated, and provides space for ongoing feedback
- [Dashboard](https://sourcegraph.looker.com/dashboards-next/179?Customer%20Engineer=&Account%20Executive=&Unique%20Server%20ID=&Region=): The customer health dashboard is the source of truth for health scores and is updated in real-time

## How are active users calculated?

Our metrics infrastructure (Looker) gets active user counts from our event_logs table (either directly or indirectly).

### On-Prem Instances

In each ping, instances will send a site_activity.DAUs, site_activity.WAUs, and site_activity.MAUs field which represent daily, weekly, and monthly active user counts on an instance. These numbers are taken from the `event_logs` table of the instance, and count the number of distinct active user IDs that executed any action on the instance in a given time period. These are sent back to us in the form of pings, which is what shows up in Looker. See the [`activeUsers` function](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%407eeeb9b+func+activeUsers&patternType=literal) for the implementation and SQL query.

### In-app site admin [usage stats page](https://sourcegraph.com/site-admin/usage-statistics)

In the site admin panel, we have a Usage stats page that displays number of MAUs. This pulls data from Redis, which gets populated by our `usagestatsdeprecated` package. This was an old way of collecting data, and is not reliable. This is a known issue, and will be fixed to use the `event_logs` table.

## How are metrics calculated

Our metrics infrastructure (Looker) gets active user counts from our event_logs table (either directly or indirectly). We use the same method as on-premise for calculating active user counts, pulling from the Sourcegraph Cloud `event_logs` table. We track unauthenticated active users using their `anonymous_user_id`. This is a separate column which contains an anonymous ID, which is stored in a cookie for active users that visit Sourcegraph.com. Therefore, for all charts that track Cloud active users, unauthenticated users are included in these counts.

There are shortcomings to this. For one, when an active user converts into a registered active user, their events conducted with their anonymous ID are still in the DB, so we would count two different active users rather than a single active user. For analytics purposes in Amplitude, this is also not ideal because we are not able to connect the actions of an active user before and after they've converted.
