# Batch Changes Metrics

We track and report anonymous, non-specific, aggregate metrics from Sourcegraph instances as defined in [pings](https://docs.sourcegraph.com/admin/pings).

## Key success metrics

We track success metrics in a (private) [Looker dashboard](https://sourcegraph.looker.com/dashboards-next/174).

| Outcome                                            | Metric                                                                 |
| -------------------------------------------------- | ---------------------------------------------------------------------- |
| Are developers using Batch Changes?                | number of batch changes created, number of changesets published        |
| Are batch changes successful?                      | merge rate of batch changes (changesets merged / changesets published) |
| Is Batch Changes being adopted [broadly](#Vision)? | number of monthly contributors and MAUs                                |

- **Sourcegraph Batch Changes Property:** TBD
- **Batch Changes MAU:** A [visitor](../../../../bizops/user_definitions.md#visitor) who triggers any GUI event happening on a Sourcegraph Batch Changes page in a given month. We do not yet track CLI events.
- **Batch Changes monthly contributor:** A [registered user](../../../../bizops/user_definitions.md#registered-user) that has previewed, applied, or closed a batch change in a given month. New actions that are added in the future, such as [comment, merge, publish](https://sourcegraph.productboard.com/roadmap/2263724-batch-changes-releases/features/6775792/portal).
