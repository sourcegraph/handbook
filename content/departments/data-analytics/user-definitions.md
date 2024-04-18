# User metrics definitions

We use metrics to guide prioritization and planning. By defining metrics against the kinds of behaviors that we want to drive, we can plan features and measure results against the outcomes we're looking for. The three most important metrics we track are acquisition (of visitors), activation (visitor experiences habit creation), and retention (user remains active).

## User states

People using Sourcegraph can be segmented into a number of different states, the following of which are relevant over a measured time period (for example, monthly or weekly). They are not mutually exclusive in some cases—a user can be both registered, activated and churned at the same time.

| Metric                                                                                | Description                                                        | Cloud | On-prem | Pings data point                        | Type\*         |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----- | ------- | --------------------------------------- | -------------- |
| [Active User](https://docs.sourcegraph.com/admin/faq#how-are-active-users-calculated) | Users who performed a qualifying activation event (see below)      | ✔️    | ✔️      | ✔️                                      | Activity       |
| [Registered](#registered-user)                                                        | A user with an account on the instance                             | ✔️    | n/a     | `site_activity.MAU.RegisteredUserCount` | Characteristic |
| Retained                                                                              | Users who were active last period _and_ this period                | ✔️    | ✔️      | `growth_statistics.RetainedUsers`       | MoM activity   |
| Churned                                                                               | Users who were active last period but not this period              | ✔️    | ✔️      | `growth_statistics.ChurnedUsers`        | MoM activity   |
| Resurrected                                                                           | Users who were _not_ active last period but are active this period | ✔️    | ✔️      | `growth_statistics.ResurrectedUsers`    | MoM activity   |
| Created                                                                               | Users whose account was created this period                        | ✔️    | ✔️      | `growth_statistics.CreatedUsers`        | MoM activity   |
| Deleted                                                                               | Users whose account was deleted this period                        | ✔️    | ✔️      | `growth_statistics.DeletedUsers`        | MoM activity   |

\***_Types_**

- MoM Activity: Month over month usage activity descriptor
- Characteristic: a permanent user characteristic (except for creation/deletion of an account)

### Registered user

Active users can be further optionally segmented into **registered** or **non-registered** users, which indicates they are logged in.

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

| Metric                                              | Description                                                                                                                                                                                                                                                           |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adoption measured as: <br />MAU/Purchased seats (%) | Used as a measure of monthly adoption within a customer’s total licensed user base. <br />This applies to most deals that do not have an unlimited deal contract (unlimited licensed seats).                                                                          |
| Adoption measured as: <br />MAU/TAM (%)             | When a customer is on an unlimited deal contract (unlimited licensed seats), the account team will use TAM (Total Addressable Market) as a denominator. <br />TAM is the total amount of possible end-users that can use the Sourcegraph platform at a given company. |
| Usage measured as: <br />DAU/MAU (%)                | Used as a measure of overall engagement / stickiness of the platform within an account’s active users                                                                                                                                                                 |
| # of versions behind current Sourcegraph version    | Used as a measure of overall instance health                                                                                                                                                                                                                          |

Additional Resources:

- [Project overview](https://docs.google.com/document/d/1AO3o82KN0bIWUNK2Kyc1Rk8Lz6gElBm-6K2ou0dHr-Y/edit#): Describes in more detail how we decided to measure technical health in this way, how scores are calculated, and our plans to re-assess and improve this scoring. This is also a place for ongoing feedback/updates.
- [Dashboard](https://sourcegraph.looker.com/dashboards/179?Customer+Engineer=&Account+Executive=&Customer+Name=&Telemetry+Status=Full+telemetry&Customer+Tenure+%28days%29=%5B0%2C2000%5D): Technical health dashboard is the source of truth for health score

### On-Prem Instances

In each ping, instances will send a site_activity.DAUs, site_activity.WAUs, and site_activity.MAUs field which represent daily, weekly, and monthly active user counts on an instance. These numbers are taken from the `event_logs` table of the instance, and count the number of distinct active user IDs that executed any action on the instance in a given time period. These are sent back to us in the form of pings, which is what shows up in Looker. See the [`activeUsers` function](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%407eeeb9b+func+activeUsers&patternType=literal) for the implementation and SQL query.

## How are metrics calculated

Our metrics infrastructure (Looker) gets active user counts from our event_logs table (either directly or indirectly). We use the same method as on-premise for calculating active user counts, pulling from the Sourcegraph Cloud `event_logs` table. We track unauthenticated active users using their `anonymous_user_id`. This is a separate column which contains an anonymous ID, which is stored in a cookie for active users that visit Sourcegraph.com. Therefore, for all charts that track Cloud active users, unauthenticated users are included in these counts.

There are shortcomings to this. For one, when an active user converts into a registered active user, their events conducted with their anonymous ID are still in the DB, so we would count two different active users rather than a single active user. For analytics purposes in Amplitude, this is also not ideal because we are not able to connect the actions of an active user before and after they've converted.

### Sourcegraph Operators

See the [Sourcegraph Operators page](../cloud/technical-docs/oidc_site_admin.md) for specifics on how Sourcegraph teammates access managed instances.

- All metrics (MAUs, user accounts) EXCLUDE Sourcegraph Operators (internal Sourcegraph teammates who are admins on a managed instance)
- Events (eventLogger) are triggered by Sourcegraph Operators with `"sourcegraph_operator": true` logged in the `public_argument` field

This update was part of 4.3, so any managed instance on 4.3+ will have this new methodology.
