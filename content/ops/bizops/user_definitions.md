# User metrics definitions

## Active user

**On premise**: A user is considered 'active' when they are signed-in and trigger any event over the specified time period. This could be anything from a page view inside the product to a hover using one of Sourcegraph's browser extensions to a code monitoring email notification.

**On Sourcegraph.com**: A user is considered 'active' when they trigger any event over the specified time period, regardless of whether they are signed in or not.

Time periods we track:

- Daily active user (DAU)
- Weekly active user (WAU)
- Monthly active user (MAU)

## Growth metrics user categories

We track the following categories in pings for each month. The explanations are framed as though we're talking about the current month, but apply to any given month.

| Metric      | Description                                                      |
|-------------|------------------------------------------------------------------|
| Retained    | Users who were active last month *and* this month                |
| Churned     | Users who were active last month but not this month              |
| Resurrected | Users who were *not* active last month but are active this month |
| Created     | Users whose account was created this month                       |
| Deleted     | Users whose account was deleted this month                       |

## Engagement ratios

| Metric  | Description                                                                                                                                                                                   |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DAU/MAU | The ratio of average DAUs over a month to the number of MAUs in the corresponding month. If the ratio is 0.4 or 40%, the average user used Sourcegraph 12 days per month (30 days * .4 = 12). |
| DAU/WAU | The ratio of average DAUs over a week to the number of WAUs in the corresponding week. If the ratio is 0.4 or 40%, the average user used Sourcegraph 2.8 days per week (7 days * .4 = 2.8).   |

# How are users calculated?


Our metrics infrastructure (Looker, Amplitude) gets user counts from our event_logs table (either directly or indirectly).

### On-Prem Instances
In each ping, instances will send a site_activity.DAUs, site_activity.WAUs, and site_activity.MAUs field which represent daily, weekly, and monthly user counts on an instance. These numbers are taken from the `event_logs` table of the instance, and count the number of distinct user IDs that executed any action on the instance in a given time period. These are sent back to us in the form of pings, which is what shows up in Looker. See the [`activeUsers` function](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24%407eeeb9b+func+activeUsers&patternType=literal) for the implementation and SQL query.

### Sourcegraph Cloud

For Sourcegraph Cloud, we use the same method for calculating user counts, pulling from the Sourcegraph Cloud `event_logs` table. For Cloud, we track unauthenticated users using their `anonymous_user_id`. This is a separate column which contains an anonymous ID, which is stored in a cookie for users that visit Sourcegraph.com. Therefore, for all charts that track Cloud active users, unauthenticated users are included in these counts. 

There are shortcomings to this. For one, when a user converts into an authed user, their events conducted with their anonymous user ID are still in the DB, so we would count two different users being active rather than a single user.For analytics purposes in Amplitude, this is also not ideal because we are not able to connect the actions of a user before and after they've converted.

### In-app site admin [usage stats page](https://sourcegraph.com/site-admin/usage-statistics)

In the site admin panel, we have a Usage stats page that displays number of MAUs. This pulls data from Redis, which gets populated by our `usagestatsdeprecated` package. This was an old way of collecting data, and is not reliable. This is a known issue, and will be fixed to use the `event_logs` table. 
