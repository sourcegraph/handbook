# User metrics definitions

## On-premise

### Metrics definitions

**On premise**: a user is considered 'active' when they are signed-in and trigger any event over the specified time period. This could be anything from a page view inside the product to a hover using one of Sourcegraph's browser extensions to a code monitoring email notification.

Time periods we track:

- Daily active user (DAU)
- Weekly active user (WAU)
- Monthly active user (MAU)

### Growth metrics user categories

We track the following categories in pings for each month. The explanations are framed as though we're talking about the current month, but apply to any given month.

| Metric      | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| Retained    | Users who were active last month _and_ this month                |
| Churned     | Users who were active last month but not this month              |
| Resurrected | Users who were _not_ active last month but are active this month |
| Created     | Users whose account was created this month                       |
| Deleted     | Users whose account was deleted this month                       |

### Engagement ratios

| Metric  | Description                                                                                                                                                                                    |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DAU/MAU | The ratio of average DAUs over a month to the number of MAUs in the corresponding month. If the ratio is 0.4 or 40%, the average user used Sourcegraph 12 days per month (30 days \* .4 = 12). |
| DAU/WAU | The ratio of average DAUs over a week to the number of WAUs in the corresponding week. If the ratio is 0.4 or 40%, the average user used Sourcegraph 2.8 days per week (7 days \* .4 = 2.8).   |

### Customer Health Score

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

#### Active users

In each ping, instances will send a site_activity.DAUs, site_activity.WAUs, and site_activity.MAUs field which represent daily, weekly, and monthly user counts on an instance. These numbers are taken from the `event_logs` table of the instance, and count the number of distinct user IDs that executed any action on the instance in a given time period. These are sent back to us in the form of pings, which is what shows up in Looker. See the [`activeUsers` function](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%407eeeb9b+func+activeUsers&patternType=literal) for the implementation and SQL query.

#### Total user accounts

Instances also send back `total_user_accounts`, which is the number of user accounts. This number excludes users that have been either soft or hard deleted. It uses [UserStore](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@8c8d7ffd6261c5b884eea6804147cb3425a4601c/-/blob/internal/database/users.go?L777:72), which retrieves all non-deleted users.

#### Discrepencies between MAUs and total user accounts

Some [accounts' reports](https://sourcegraph.looker.com/dashboards-next/167?Unique+Server+ID=Sourcegraph&Salesforce+Unique+ID=) will show a MAU number higher than their number of user accounts. This is typically an indication that their users are tightly managed (deleted and created frequently) through automation by the instance admin, and can be confirmed by looking at the instance overview this account will have a high number of deleted users in the `Number of users added, deleted, retained and churned users` chart.

The reason this happens is when a user is deleted and later added back within the same month, they are counted as two MAUs. MAU reporting relies on user_id and is not unique to users' email addresses.

#### In-app site admin [usage stats page](https://sourcegraph.com/site-admin/usage-statistics)

In the site admin panel, we have a Usage stats page that displays number of MAUs. This pulls data from Redis, which gets populated by our `usagestatsdeprecated` package. This was an old way of collecting data, and is not reliable. This is a known issue, and will be fixed to use the `event_logs` table.

## Sourcegraph Cloud

### User status definitions

| Status      | Description                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| Visitor     | A user who landed on Sourcegraph Cloud                                                                 |
| Active      | A user who performed an active event for the time period (see Amplitude for the list of active events) |
| Retained    | A user who were active last month _and_ this month                                                     |
| Churned     | A user who were active last month but not this month                                                   |
| Resurrected | A user who were _not_ active last month but is active this month                                       |
| Registered  | A user who created an account on Sourcegraph Cloud                                                     |

### Key metrics

We track the following key metrics:

- acquisition: number of visitors
- activation: the percentage of visitors that had a successful initial experience.
- retention: the number of active users retained time period over time period

#### Activation

Understanding what drives a successfull initial experience is currently a work in progress. As a placeholder, we currently define activation as the percentage of users that performed one of those qualifying events:

| Product area              | Qualifying event                   | Description                                                                                         |
| ------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| Searching for code        | `SearchSubmitted`                  | Submit a search                                                                                     |
| Navigating the code graph | `findReferences`, `goToDefinition` | Click on go to definition or fin references. Hovering is excluded as it can be performed passively. |
| Code Insight              | TBD                                | TBD at launch on cloud                                                                              |
| Batch Changes             | TBD                                | TBD at launch on cloud                                                                              |
| API docs                  | TBD                                | TBD                                                                                                 |

### How are metrics calculated

Our metrics infrastructure (Looker) gets user counts from our event_logs table (either directly or indirectly). We use the same method as on-premise for calculating user counts, pulling from the Sourcegraph Cloud `event_logs` table. We track unauthenticated users using their `anonymous_user_id`. This is a separate column which contains an anonymous ID, which is stored in a cookie for users that visit Sourcegraph.com. Therefore, for all charts that track Cloud active users, unauthenticated users are included in these counts.

There are shortcomings to this. For one, when a user converts into an authed user, their events conducted with their anonymous user ID are still in the DB, so we would count two different users being active rather than a single user. For analytics purposes in Amplitude, this is also not ideal because we are not able to connect the actions of a user before and after they've converted.
