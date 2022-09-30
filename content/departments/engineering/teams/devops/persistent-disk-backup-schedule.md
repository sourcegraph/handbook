# Persistent Disk Backup Schedule

We use Velero to backup persistent disks. Velero accomplishes this by snapshotting
the persistent disks in GCP which stores the snapshots in regional storage.

The schedule is configured via a Velero CRD `schedules.velero.io` defined in
our [deploy cloud repo](https://sourcegraph.com/search?q=context:global+repo:%5Egithub%5C.com/sourcegraph/deploy-sourcegraph-cloud%24+velero.io/v1&patternType=literal)
