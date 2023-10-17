# Batch Changes Metrics

We track and report anonymous, non-specific, aggregate metrics from Sourcegraph instances as defined in [pings](https://docs.sourcegraph.com/admin/pings).

## Revenue

We track revenue associated with add-on features in this (private) [dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000015UPZEA2/view).

## Key usage metrics

We track key usage metrics in this private [Looker dashboard](https://sourcegraph.looker.com/dashboards/279). We also track more granular metrics in this private [drilldown looker dashboard](https://sourcegraph.looker.com/dashboards-next/174).

| Outcome                                                    | Metric                                                                       |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Are batch changes customers active?                        | number of active batch changes customers / number of batch changes customers |
| How much value are customers getting out of batch changes? | number of batch changes merged                                               |
| Are batch changes successful?                              | merge rate of batch changes (changesets merged / changesets published)       |
| Is Batch Changes being adopted broadly?                    | Batch Changes MAUs / Sourcegraph MAUs                                        |
| Time to value                                              | TBD                                                                          |

## Definitions

- **Batch Changes visitors:** A visitor who triggers any event happening on a Sourcegraph Batch Changes property in a given month. In practice, we do not track CLI events, so this effectively only includes events in the GUI, or uploading a spec.
- **Batch Changes MAU:** A user that has taken an action to create or manage a batch change in a given month. In practice, a user that has previewed, or applied or closed a batch change in a given month. New actions that are added in the future, such as [comment, merge, publish](https://sourcegraph.productboard.com/roadmap/2263724-batch-changes-releases/features/6775792/portal) will be added.
- **Active Batch Changes customer**: A customer is considered as actively using Batch Changes if either:
  - they have created more than 5 batch changes in the last 90 days
  - or, they merged 100 changesets opened by Batch Changes in the last 90 days

_Technical note: what is called a MAU here is called a "monthly_contributor" in the pings and what is called a monthly viewer here is called an MAU in the pings._
