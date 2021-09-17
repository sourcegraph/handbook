# Batch Changes Metrics

We track and report anonymous, non-specific, aggregate metrics from Sourcegraph instances as defined in [pings](https://docs.sourcegraph.com/admin/pings).

## Key success metrics

We track success metrics in a (private) [Looker dashboard](https://sourcegraph.looker.com/dashboards-next/174).

| Outcome                                            | Metric                                                                 |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| Are developers using Batch Changes?                | number of batch changes created, number of changesets published        |
| Are batch changes successful?                      | merge rate of batch changes (changesets merged / changesets published) |
| Is Batch Changes being adopted [broadly](#Vision)? | number of monthly contributors and MAUs                                |

## Definitions

- **Batch Changes MAU:** A visitor who triggers any event happening on a Sourcegraph Batch Changes property in a given month. In practice, we do not track CLI events, so this effectively only includes events in the GUI, or uploading a spec.
- **Batch Changes monthly contributor:** A user that has taken an action to create or manage a batch change in a given month. In practice, a user that has previewed, or applied or closed a batch change in a given month. New actions that are added in the future, such as [comment, merge, publish](https://sourcegraph.productboard.com/roadmap/2263724-batch-changes-releases/features/6775792/portal) will be added.
