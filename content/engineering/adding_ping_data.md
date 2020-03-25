
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

1. Write an RFC describing the problem, data that will be added, and how Sourcegraph will use the data to make decisions. The Business Operations team must be a required reviewer (both @Dan and @EricBM). Please use [these guidelines](../bizops/index.md#submitting-a-data-request) and the following questions to inform the contents of the RFC:
    - Why was this particular metric/data chosen?
    - What business problem does collecting this address?
    - What specific product or engineering decisions will be made by having this data?
    - Will this data be needed from every single installation, or only from a select few? Will it be needed forever, or only for a short time?
    - Have you considered alternatives? E.g., collecting this data from Sourcegraph.com, or adding a report for admins that we can request from some number of friendly customers?
2. When the RFC is approved, use the [life of a ping documentation](https://docs.sourcegraph.com/dev/architecture/life-of-a-ping) with help of [an example PR](https://github.com/sourcegraph/sourcegraph/pull/8374) to implement the change. At least one member of the Business Operations team must approve the resulting PR before it can be merged. DO NOT merge your PR yet. Steps 3, 4, and 5 must be completed before merging.
    - Ensure a CHANGELOG entry is added, and that the two sources of truth for ping data are updated along with your PR:
      - Pings documentation: https://docs.sourcegraph.com/admin/pings
      - The Site-admin > Pings page, e.g.: https://sourcegraph.com/site-admin/pings
3. Determine if any transformations/ETL jobs are required, and if so, add them to the [script](https://github.com/sourcegraph/analytics/blob/master/BigQuery%20Schemas/transform.js). The script is primarily for edge cases. Primarily,  as long as zeroes or nulls are being sent back instead of `""` in the case where the data point is empty.
4. Open a PR to change [the schema](https://github.com/sourcegraph/analytics/tree/master/BigQuery%20Schemas) with Business Operations (EricB and Dan) as approvers. Keep in mind:
	- Check the data types sent in the JSON match up with the BigQuery schema (e.g. a JSON '1' will not match up with a BigQuery integer).
	- Every field in the BigQuery schema should not be non-nullable (i.e. `"mode": "NULLABLE"` and `"mode": "REPEATED"` are acceptable). There will be instances on the older Sourcegraph versions that will not be sending new data fields, and this will cause pings to fail.
5. Once the schema change PR is merged, test the new schema. Schedule a meeting with @EricBM for this part.
  - Delete the [test table](https://bigquery.cloud.google.com/table/telligentsourcegraph:sourcegraph_analytics.update_checks_test?pli=1) (`$DATASET.$TABLE_test`), create a new table with the same name (`update_checks_test`), and then upload the schema with the newest version (see "Changing the BigQuery schema" for commands). This is done to wipe the data in the table and any legacy configurations that could trigger a false positive test, but keep the connection with Pub/Sub.
	- [Publish a message](https://console.cloud.google.com/cloudpubsub/topic/detail/server-update-checks-test?project=telligentsourcegraph) to Pub/Sub, which will go through [Dataflow](https://console.cloud.google.com/dataflow/jobs/us-central1/2020-02-28_09_44_54-15810172927534693373?project=telligentsourcegraph&organizationId=1006954638239) to the BigQuery test table. The message can use [this example](https://github.com/sourcegraph/analytics/blob/master/BigQuery%20Schemas/pubsub_message) as a baseline, and add sample data for the new ping data points.
  - To see if it worked, go to the [`update_checks_test`](https://bigquery.cloud.google.com/table/telligentsourcegraph:sourcegraph_analytics.update_checks_test?pli=1) table, and run a query against it checking for the new data points. Messages that fail to publish are added to the [error records table](https://bigquery.cloud.google.com/table/telligentsourcegraph:sourcegraph_analytics.update_checks_test_error_records?pli=1).

6. Once the test is successful, merge your PR from step 2.

## Changing the BigQuery schema

Commands:
- To update schema: `bq --project_id=$PROJECT update --schema $SCHEMA_FILE $DATASET.$TABLE`, replacing `$PROJECT` with the project ID, `$SCHEMA_FILE` with the path to the schema JSON file generated above, and `$DATASET.$TABLE` with the dataset and table name, separated by a dot.
- To retrieve the current schema : `bq --project_id=$PROJECT --format=prettyjson show $DATASET.$TABLE > schema.json` with the same replacements as above.

To update the schema:
1. Run the update schema command on a test table.
2. Once the test is complete, run the update schema command on the production table.

## Changing the BigQuery scheduled queries

Part 1: Add the fields you'd like to bring into BigQuery/Looker to the [instances scheduled queries 1 and 2](https://bigquery.cloud.google.com/scheduledqueries/telligentsourcegraph). 
Part 2: If day-over-day (or similar) data is necessary, create a new table/scheduled query. For example, daily active users needs a [separate table](https://bigquery.cloud.google.com/table/telligentsourcegraph:sourcegraph_analytics.server_daily_usage) and [scheduled query](https://bigquery.cloud.google.com/scheduledqueries/telligentsourcegraph/location/us/runs/5c51773a-0000-2fc8-bf1f-089e08266748).