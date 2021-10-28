# User metrics definitions

We use metrics to guide prioritization and planning. By defining metrics against the kinds of behaviors that we want to drive, we can plan features and measure results against the outcomes we're looking for. The three most important metrics we track are acquisition (of visitors), activation (turning them into active users), and retention (keeping them month to month).

## User states

People using Sourcegraph can be segmented into a number of different states, the following of which are relevant over a measured time period (for example, monthly or weekly):

| Metric      | Description                                                        | Cloud | On-prem |
| ----------- | ------------------------------------------------------------------ | ----- | ------- |
| Visitor     | Anyone who accessed the product                                    | ✔️    |         |
| Active User | Visitors who additionally performed a qualifying event (see below) | ✔️    | ✔️      |
| Retained    | Users who were active last month _and_ this month                  | ✔️    | ✔️      |
| Churned     | Users who were active last month but not this month                | ✔️    | ✔️      |
| Resurrected | Users who were _not_ active last month but are active this month   | ✔️    | ✔️      |
| Created     | Users whose account was created this month                         | ✔️    | ✔️      |
| Deleted     | Users whose account was deleted this month                         | ✔️    | ✔️      |

There is also a special state, **activated**, which is permanent once triggered and can apply to any of the above states. For example, you can have an activated active user.

### What is a visitor?

A visitor is a person (unique to the instance being measured, except in the case of "unique Sourcegraph users" as defined below) who accessed the product, but did not complete any qualifying actions that would turn them into an active user. This is important to measure because each of these visitors is potentially an active user, but it's also important that we don't count everyone who visits the product as an active user so that we can measure success of our features that are intended to convert them.

### What is an active user?

An active user is differentiated from a visitor by performing a qualifying event, which are intended to represent someone who has **engaged with** and **received value** from the product; something that takes a person from their first search to establishing a habit around the core value proposition of the app. Qualifying events are [listed as 'Active' in Amplitude](https://analytics.amplitude.com/sourcegraph/govern/project/333976/events?filter=live), and performing any single activity in that list makes a visitor an active user for the time period being measured.

Qualifying events are not intended to be difficult, or prove that someone is a heavy/power user of the product. They are carefully selected to represent activities that are important to realizing the value of Sourcegraph.

#### Registered or non-registered active users

Active users can be further optionally segmented into **registered** or **non-registered** users, which indicates they are logged in.

#### Unique Sourcegraph active users

For some of our metrics we want to identify unique users across on-prem and cloud instances. For this purpose, unique users of Sourcegraph is a way to correlate registered users who have a common email address across any number of instances. For example, a@b.com on an on-prem instance and a@b.com on Sourcegraph.com would be considered the same user for the purposes of this metric. Note that most measures don't have this constraint, and any that do will include the term "Unique Sourcegraph Users" in the name of the metric.

### What is a retained active user?

An active user is retained if they were performed actions that qualify them as an active user in both the current and previous periods.

### What is an activated user?

Unlike active users, which are terms meaningful within a specific time period, "activated" is a special state for any active user that is permanent once triggered.

An activated user is defined as anyone who has ever done a specific series of actions that we know are highly correlated with retention. This can be broken down further into the setup moment (actions done to set up for the core value prop, such as signing up and adding personal repositories), aha moment (experienced the core value prop the first time, such as an active user's first search over their personal search context) and habit moment (when the habit around the core value proposition is finally established).

Activation is this entire journey, and our current definition is the active user performs a search or code intelligence action [as defined in Amplitude](https://analytics.amplitude.com/sourcegraph/govern/project/333976/events?filter=all&event=ce%3ABecome%20active).

## Time periods

Time periods we track:

- Daily active user (DAU)
- Weekly active user (WAU)
- Monthly active user (MAU)

The different time periods are used depending on the length of the relevant context (for example, a marketing campaign that runs for a week might track DAU while our yearly goals might track MAU.)

## Engagement ratios

| Metric  | Description                                                                                                                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DAU/MAU | The ratio of average DAUs over a month to the number of MAUs in the corresponding month. If the ratio is 0.4 or 40%, the average active user used Sourcegraph 12 days per month (30 days \* .4 = 12). |
| DAU/WAU | The ratio of average DAUs over a week to the number of WAUs in the corresponding week. If the ratio is 0.4 or 40%, the average active user used Sourcegraph 2.8 days per week (7 days \* .4 = 2.8).   |

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
