# Adding or changing pings

This page outlines the process for adding or changing the data collected from Sourcegraph instances through pings.

## Ping philosophy

Pings are the only data Sourcegraph receives from installations. Our users and customers trust us with their most sensitive data. We must preserve and build this trust through only careful additions and changes to pings.

All ping data must be:

- Anonymous (with only one exception—the email address of the initial site installer)
- Aggregated (e.g. number of times a search filter was used per day, instead of the actual search queries)
- Non-specific (e.g. no repo names, no usernames, no file names, no specific search queries, etc.)

## Adding data to pings

Treat adding new data to pings as having a very high bar. Would you be willing to send an email to all Sourcegraph users explaining and justifying why we need to collect this additional data from them? If not, don’t propose it.

1. Write an RFC describing the problem, data that will be added, and how Sourcegraph will use the data to make decisions. The Business Operations team must be a required reviewer (both @Dan and @EricBM). 
You will be asked the following questions:
    - Why was this particular metric/data chosen?
    - What business problem does collecting this address?
    - What specific product or engineering decisions will be made by having this data?
    - Will this data be needed from every single installation, or only from a select few? Will it be needed forever, or only for a short time?
    - Have you considered alternatives? E.g., collecting this data from Sourcegraph.com, or adding a report for admins that we can request from some number of friendly customers?
2. When the RFC is approved, use the [life of a ping documentation](https://docs.sourcegraph.com/dev/architecture/life-of-a-ping) to implement the change. At least one member of the Business Operations team must approve the resulting PR before it can be merged.
    - Ensure a CHANGELOG entry is added, and that the two sources of truth for ping data are updated along with your PR:
      - Pings documentation: https://docs.sourcegraph.com/admin/pings
      - The Site-admin > Pings page, e.g.: https://sourcegraph.com/site-admin/pings
3. Request help from the Business Operations team to add the new field(s) to BigQuery and Looker. 
