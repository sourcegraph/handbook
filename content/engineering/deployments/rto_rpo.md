# Recovery Time Objective (RTO)

This defines the maximum disruption we have agreed is allowable.
We currently define this as 4-Hours across all public facing sites.
For example, about.sourcegraph.com, sourcegraph.com & sourcegraph.com/search.
This does not currently include managed services which have RTO & RPO defined seperately.

# Recovery Point Time (RPO)

This defines the point to which we can restore to after an incident. For the sourcegraph cloud primary database,
**1 Hour** is the agreed upon value for the primary Sourcegraph Postgres database.
For other services we define a recovery point maximum of **24 Hours**.
For example, LSIF data, gitserver persistent disks have daily snapshots taken.

## Takeaways

Engineers working on business critical applications on Sourcegraph should ensure
that they are able to meet these requirements. If not, please bring it to the attention
of the distribution team so we document that service here.

### Further reading

See RFC 281 for further details.
