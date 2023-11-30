# Cloud Audit Logs

Audit logs for all cloud instances are automatically collected in an audit bucket in the customer project.

## Requesting an Extension to Cloud Audit Logs

By default, audit logs are retained for 30 days. Extensions beyond 30 days are possible upon request from CE or support. To file a request, please use [this issue template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Faudit-log&projects=&template=managed-instance-audit-log.md&title=%24CUSTOMER%3A+Configure%2FRequest+Audit+logs).

## Customer Requests for Audit Logs

Customers can request audit logs via support or CE. Please fill out this [issue template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Faudit-log&projects=&template=managed-instance-audit-log.md&title=%24CUSTOMER%3A+Configure%2FRequest+Audit+logs).

## Audit Log Export

### If a customer has audit logs enabled:

Find the customer audit log bucket: `gcloud logging sinks describe "audit_log_sink_gcs" --project=$CUSTOMER_PROJECT --format "value(destination)" | awk -F/ '{print $2}'`

Then, export the logs from the resulting bucket:

```bash
gcloud storage cp --recursive gs://src-5c4a20ed462d4919/stderr/$YEAR/$MONTH/$DAY ./$LOCAL_DIR --project=$CUSTOMER_PROJECT
zip -r audit_logs.zip ./$LOCAL_DIR
```

Then ask the customer how they would like to receive the logs (typically via email)

### How to backfill audit logs for a customer to a specific bucket

To backfill logs from a Log Bucket to an arbitrary GCS bucket, you can use the following command:

```bash
# Create a logging export job
gcloud alpha logging copy "$AUDIT_STORAGE_BUCKET" storage.googleapis.com/$TARGET_BUCKET --location=global --log-filter="jsonPayload.Attributes.audit.auditId!=\"\" AND resource.type=\"k8s_container\"" --project=$PROJECT_ID
```

Then, view the resulting bucket to ensure the logs have been moved over.

These steps are based on these [GCP Docs](https://cloud.google.com/logging/docs/routing/copy-logs).

## Cloud Audit Log Pricing

See this google doc for our raw audit log pricing to help our Sales team structure costs
[Sheet](https://docs.google.com/spreadsheets/d/1ikRo-HjvJ-TFJ92aFKqbILAliF0dw2SNyy01UDA8feI/edit?usp=sharing)
