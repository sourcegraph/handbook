# User metrics definitions

We use metrics to guide prioritization and planning. By defining metrics against the kinds of behaviors that we want to drive, we can plan features and measure results against the outcomes we're looking for. The three most important metrics we track are acquisition (of visitors), activation (visitor experiences habit creation), and retention (user remains active).

## User states

People using Sourcegraph can be segmented into a number of different states, the following of which are relevant over a measured time period (for example, monthly or weekly). They are not mutually exclusive in some cases—a user can be both registered, activated and churned at the same time.

| Metric                                       | Description                                                                                       | Cloud | On-prem | Pings data point                        | Type\*         |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----- | ------- | --------------------------------------- | -------------- |
| [Visitor](#visitor)                          | Anyone who accessed the product                                                                   | ✔️    | ✔️      | `site_activity.MAU.UserCount`           | Activity       |
| [Active (Cloud)](#active-user-cloud)         | Users who performed a qualifying activation event (see below)                                     | ✔️    | n/a     | n/a                                     | Activity       |
| [Activated (Cloud)](#activated-user-cloud)   | Users who have completed a specific series of actions that indicate they have developed the habit | ✔️    | n/a     | n/a                                     | Characteristic |
| [Registered (Cloud)](#registered-user-cloud) | A user with an account on Cloud                                                                   | ✔️    | n/a     | `site_activity.MAU.RegisteredUserCount` | Characteristic |
| [Account Setup](#account-setup)              | A Registered user OR team on either Cloud or Private Install                                      | ✔️    | ✔️      |                                         | Characteristic |
| Retained                                     | Users who were active last period _and_ this period                                               | ✔️    | ✔️      | `growth_statistics.RetainedUsers`       | MoM activity   |
| Churned                                      | Users who were active last period but not this period                                             | ✔️    | ✔️      | `growth_statistics.ChurnedUsers`        | MoM activity   |
| Resurrected                                  | Users who were _not_ active last period but are active this period                                | ✔️    | ✔️      | `growth_statistics.ResurrectedUsers`    | MoM activity   |
| Created                                      | Users whose account was created this period                                                       | ✔️    | ✔️      | `growth_statistics.CreatedUsers`        | MoM activity   |
| Deleted                                      | Users whose account was deleted this period                                                       | ✔️    | ✔️      | `growth_statistics.DeletedUsers`        | MoM activity   |

\***_Types_**

- Activity: How active a user is
- MoM Activity: Month over month usage activity descriptor
- Characteristic: a permanent user characteristic (except for creation/deletion of an account)

### Visitor

A visitor is a unique person who showed up on the site and did anything, even just viewing the page. Currently a unique person cannot be identified between our on-premises & cloud solution; in other words, when aggregating data across our deployment solution one person could be counted as a "unique person" twice. It is important to measure unique visitors because each of these visitors is potentially an active user. It is equally important that we don't count anyone who visits the product as an active user so that we can measure the success of our features that are intended to convert them into an active user.

### Active user (Cloud)

An active user is differentiated from a visitor by performing a qualifying event. These events are intended to represent someone who has **engaged with** and **received value** from the product; something that takes a person from their first search to establishing a habit around the core value proposition of the app. Qualifying events are [listed as 'Active' in Amplitude](https://analytics.amplitude.com/sourcegraph/govern/project/333976/events?filter=live), and performing any single activity in that list makes a visitor an active user for the time period being measured.

Qualifying events are not intended to be difficult, or prove that someone is a heavy/power user of the product. They are carefully selected to represent activities that indicate realized value from Sourcegraph.

| Metric            | What                                                                                        | Events                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Search            | Search Submitted, Viewed search results,receive a code monitoring/saved search notification | `SearchSubmitted` `SearchResultsFetched` `CodeMonitorEmailLinkClicked` `SavedSearchNotificationSent` `SavedSearchEmailClicked` |
| Navigation        | View a file/repository/tree                                                                 | `ViewBlob` `ViewRepository` `ViewTree` `ViewSearchNotebookPage`                                                                |
| Code intelligence | Hovered                                                                                     | `hover`                                                                                                                        |
| Batch changes     | Created or viewed a batch change                                                            | TBD                                                                                                                            |
| Code insights     | Created or viewed a code insight                                                            | TBD                                                                                                                            |

#### Unique Sourcegraph active users

For some of our metrics we want to identify unique users across on-prem and cloud instances. For this purpose, unique users of Sourcegraph is a way to correlate registered users who have a common email address across any number of instances. For example, a@b.com on an on-prem instance and a@b.com on Sourcegraph.com would be considered the same user for the purposes of this metric. Note that most measures don't have this constraint, and any that do will include the term "Unique Sourcegraph Users" in the name of the metric.

### Activated user

Unlike **active** users, which is a term meaningful within a specific time period, **activated** is a special state that is permanent once triggered.

Cloud:
Becoming activated as user is based on a sequence of events. We found that this sequence of events correlates to longer term retention and usage.

- Signup and account registration completed
- Code host connected
- Search Submitted across code - 3x
- View search results - 3x

As a part of this sequence of events we also developed a new metric. The first two steps of the sequence is Account Setup.

On-Prem and Managed:
Work is currently being done to inform the activated metric for on-prem and managed customers. This will be with analysis ability added by having user level usage data.

### Registered user (Cloud)

Active users can be further optionally segmented into **registered** or **non-registered** users, which indicates they are logged in.

### Account Setup

This identifies users or teams either on Cloud or private install and are not yet customers.
Account Setup is considered having taken place once the following conditions are met:

- Signup and account registration completed
- Code host connected

#### Individual Account Setup

- Signed up for Cloud OR
- Added Admin email on private install OR
- Added user to private install

#### Team Account Setup

- Signed up and onboarded to Cloud beta account and added team members OR
- Set up private install and added users

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

## Net Promotor Score (NPS)

Submission buckets for `How likely is it that you would recommend Sourcegraph to a friend?` on a scale of 0 to 10:

- 0-6: Detractor
- 7-8: Passive/Neutral
- 9-10: Promotor

NPS score = % promotors of total submissions - % detractors of total submissions

## Technical Health Score (Customers)

The technical health score combines high-level, aggregated metrics in order to understand customer engagement with the product, as a means to ensure customers are receiving maximum value from Sourcegraph. We currently include the following metrics:

| Metric                                              | Description                                                                                           |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Adoption measured as: MAU/Total purchased seats (%) | Used as a measure of monthly adoption within a customer’s total licensed user base.                   |
| Usage measured as: DAU/MAU (%)                      | Used as a measure of overall engagement / stickiness of the platform within an account’s active users |
| # of versions behind current Sourcegraph version    | Used as a measure of overall instance health                                                          |

Additional Resources:

- [Project overview](https://docs.google.com/document/d/1AO3o82KN0bIWUNK2Kyc1Rk8Lz6gElBm-6K2ou0dHr-Y/edit#): Describes in more detail how we decided to measure technical health in this way, how scores are calculated, and our plans to re-assess and improve this scoring. This is also a place for ongoing feedback/updates.
- [Dashboard](https://sourcegraph.looker.com/dashboards/179?Customer+Engineer=&Account+Executive=&Customer+Name=&Telemetry+Status=Full+telemetry&Customer+Tenure+%28days%29=%5B0%2C2000%5D): Technical health dashboard is the source of truth for health score

## How are active users calculated?

Our metrics infrastructure (Looker) gets active user counts from our event_logs table (either directly or indirectly).

### On-Prem Instances

In each ping, instances will send a site_activity.DAUs, site_activity.WAUs, and site_activity.MAUs field which represent daily, weekly, and monthly active user counts on an instance. These numbers are taken from the `event_logs` table of the instance, and count the number of distinct active user IDs that executed any action on the instance in a given time period. These are sent back to us in the form of pings, which is what shows up in Looker. See the [`activeUsers` function](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%407eeeb9b+func+activeUsers&patternType=literal) for the implementation and SQL query.

### In-app site admin [usage stats page](https://sourcegraph.com/site-admin/usage-statistics)

In the site admin panel, we have a Usage stats page that displays the number of MAUs. This pulls data from Redis, which gets populated by our `usagestatsdeprecated` package. This was an old way of collecting data, and is not reliable. This is a known issue, and will be fixed to use the `event_logs` table.

## How are metrics calculated

Our metrics infrastructure (Looker) gets active user counts from our event_logs table (either directly or indirectly). We use the same method as on-premise for calculating active user counts, pulling from the Sourcegraph Cloud `event_logs` table. We track unauthenticated active users using their `anonymous_user_id`. This is a separate column which contains an anonymous ID, which is stored in a cookie for active users that visit Sourcegraph.com. Therefore, for all charts that track Cloud active users, unauthenticated users are included in these counts.

There are shortcomings to this. For one, when an active user converts into a registered active user, their events conducted with their anonymous ID are still in the DB, so we would count two different active users rather than a single active user. For analytics purposes in Amplitude, this is also not ideal because we are not able to connect the actions of an active user before and after they've converted.
