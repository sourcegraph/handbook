# User metrics definitions

We use metrics to guide prioritization and planning. By defining metrics against the kinds of behaviors that we want to drive, we can plan features and measure results against the outcomes we're looking for. The three most important metrics we track are acquisition (of visitors), activation (turning them into active users), and retention (keeping them month to month).

Specific targets for FY22 can be found on the [product home page](../../product/index.md#goals).

## User states

Users can be in a number of different states. We track the following categories for each month. The descriptions below are framed as though we're talking about MAU, but the same definitions apply to whatever period is being considered.

| Metric      | Description                                                      | Cloud | On-prem |
| ----------- | ---------------------------------------------------------------- | ----- | ------- |
| Visitor     | Users who accessed the site                                      | ✔️    |         |
| Activated   | Users who have established the core habit of the product         | ✔     |         |
| Active      | Users who performed a qualifying event (see below)               | ✔️    | ✔️      |
| Retained    | Users who were active last month _and_ this month                | ✔️    | ✔️      |
| Churned     | Users who were active last month but not this month              | ✔️    | ✔️      |
| Resurrected | Users who were _not_ active last month but are active this month | ✔️    | ✔️      |
| Created     | Users whose account was created this month                       | ✔️    | ✔️      |
| Deleted     | Users whose account was deleted this month                       | ✔️    | ✔️      |

### What is a visitor?

A visitor is a unique person who showed up on the site and did anything (or nothing at all, apart from viewing the page.) This is important to measure because each of these users is potentially an active user, but it's also important that we don't count anyone who uses the product as an active user so that we can measure success of our features that are intended to convert them.
What is an activated user?

An activated user is a user who has established the core habit of the product. This can be broken down further into the setup moment (actions done to set up for the core value prop, such as signing up and adding personal repositories), aha moment (experienced the core value prop the first time, such as a user's first search over their personal search context) and habit moment (when the habit around the core value proposition is finally established). Activation is this entire journey. Our current definition is the user performs a search or code intelligence action [as defined in Amplitude](https://analytics.amplitude.com/sourcegraph/govern/project/333976/events?filter=all&event=ce%3ABecome%20active), but this needs to be iterated on.

### What is an active user?

An active user is differentiated from a visitor by performing a qualifying event, which are intended to represent someone who has actively **engaged with** and **received value** from the product; something that takes a user from their first Search to establishing a habit around the core value proposition of the app. Qualifying events are [listed as 'Active' in Amplitude](https://analytics.amplitude.com/sourcegraph/govern/project/333976/events?filter=live)

Qualifying events are not intended to be difficult, or prove that someone is a heavy user of the product. They are carefully selected to represent activities that are important to realizing the value of Sourcegraph.

Performing any single activity in the above list makes a user "active" for the time period being measured.

## Time periods

Time periods we track:

- Daily active user (DAU)
- Weekly active user (WAU)
- Monthly active user (MAU)

Monthly is the most common reference frame we use.

## Engagement ratios

| Metric  | Description                                                                                                                                                                                    |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DAU/MAU | The ratio of average DAUs over a month to the number of MAUs in the corresponding month. If the ratio is 0.4 or 40%, the average user used Sourcegraph 12 days per month (30 days \* .4 = 12). |
| DAU/WAU | The ratio of average DAUs over a week to the number of WAUs in the corresponding week. If the ratio is 0.4 or 40%, the average user used Sourcegraph 2.8 days per week (7 days \* .4 = 2.8).   |

## Customer Health Score

The customer health score combines high-level, aggregated metrics in order to understand customer engagement with the product, as a means to ensure customers are receiving maximum value from Sourcegraph. We currently include the following metrics:

| Metric                  | Description                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| MAU/Total User Accounts | Used as a measure of monthly adoption within a customer’s total licensed user base     |
| DAU/MAU                 | Used as a measure of overall engagement / stickiness of the platform within an account |
| Net Promoter Score      | Used as a measure of sentiment toward the platform among a customer’s users            |

Additional Resources:

- [Project overview](https://docs.google.com/spreadsheets/d/1D2CJoVdkbXsBwVjgNDziGXBanWBfVhoVs6_kDBRStfA/edit#gid=1229546656): Describes which metrics we view as indicative of customer health along with how scores are calculated, and provides space for ongoing feedback
- [Dashboard](https://sourcegraph.looker.com/dashboards-next/179?Customer%20Engineer=&Account%20Executive=&Unique%20Server%20ID=&Region=): The customer health dashboard is the source of truth for health scores and is updated in real-time

## How are users calculated?

Our metrics infrastructure (Looker) gets user counts from our event_logs table (either directly or indirectly).

### On-Prem Instances

In each ping, instances will send a site_activity.DAUs, site_activity.WAUs, and site_activity.MAUs field which represent daily, weekly, and monthly user counts on an instance. These numbers are taken from the `event_logs` table of the instance, and count the number of distinct user IDs that executed any action on the instance in a given time period. These are sent back to us in the form of pings, which is what shows up in Looker. See the [`activeUsers` function](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%407eeeb9b+func+activeUsers&patternType=literal) for the implementation and SQL query.

### In-app site admin [usage stats page](https://sourcegraph.com/site-admin/usage-statistics)

In the site admin panel, we have a Usage stats page that displays number of MAUs. This pulls data from Redis, which gets populated by our `usagestatsdeprecated` package. This was an old way of collecting data, and is not reliable. This is a known issue, and will be fixed to use the `event_logs` table.

## How are metrics calculated

Our metrics infrastructure (Looker) gets user counts from our event_logs table (either directly or indirectly). We use the same method as on-premise for calculating user counts, pulling from the Sourcegraph Cloud `event_logs` table. We track unauthenticated users using their `anonymous_user_id`. This is a separate column which contains an anonymous ID, which is stored in a cookie for users that visit Sourcegraph.com. Therefore, for all charts that track Cloud active users, unauthenticated users are included in these counts.

There are shortcomings to this. For one, when a user converts into an authed user, their events conducted with their anonymous user ID are still in the DB, so we would count two different users being active rather than a single user. For analytics purposes in Amplitude, this is also not ideal because we are not able to connect the actions of a user before and after they've converted.
