# Time-to-Pull-Request Metric

Time-to-Pull-Request (TTPR) is a metric that measures the average time between start date and first Pull Request merge (or Nth merge for some other number N).

## Purpose

We measure TTPR as an aggregate metric to determine the effectiveness of onboarding. It gives an indication of how quickly new teammates can get up to speed and get productive.

TTPR tells us if we're doing a good job of setting up new teammates up for success and giving them all the knowledge and context they need to start producing meaningful contributions to the codebase.

## Assumptions

The assumption is that the time of the first merged PRs by an given contributor is a good indicator of how fast they start contributing meaningfully to a codebase. Although it's not a perfect measure, we believe this is a good enough proxy when used as an average across an entire cohort.

## Non-goals of the metric

TTPR does not aim to measure:

- The content or quality of Pull Request
- Individual contributor metrics; it's only measured in aggregate

## Algorithm to calculate TTPR

The algorithm for TTPR is as follows.

### Algorithm inputs

1. A list of GitHub usernames and corresponding start dates
2. A number N reprsenting the ordinal of the Pull Request to measure (N=1 for "first PR", or e.g. N=10 for "tenth PR")

### Algorithm steps

1. For each pair (username, start date) in the input list:
   1. Obtain a list of PRs sorted by merge date in ascending chronological order, authored by the given username
   2. Pick the Nth PR from the list
   3. Calculate the duration, in days, between:
      1. The picked PR's merge date
      2. The given start date
2. Calculate the mean, minimum, maximum, and median of the list of durations (in days) obtained in #1.

## Usage

The TTPR metric is used by the [Engineering Education](./index.md) team.
