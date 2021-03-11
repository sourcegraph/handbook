# User metrics definitions

## Active user

A user is considered 'active' when they trigger any event over the specified time period. This could be anything from a page view inside the product to a hover using one of Sourcegraph's browser extensions to a code monitoring email notification.

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
