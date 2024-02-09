# Cloud Audit Logs

Audit logs for all cloud instances are automatically collected in a GCP log bucket in the customer project. By default, these
logs are retained for 30 days. When the cloud team receive a request for audit logs, the cloud team typically exports these logs into a zip file and shares them with the customer.

How quickly the cloud team can provide audit logs is covered under our [Support SLA ](https://sourcegraph.com/docs/sla).

## Requesting an Extension to Cloud Audit Logs

By default, audit logs are retained for 30 days. Extensions beyond 30 days are possible upon request from CE or support. To file a request, please use [this issue template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Faudit-log&projects=&template=managed-instance-audit-log.md&title=%24CUSTOMER%3A+Configure%2FRequest+Audit+logs).

Longer audit log retentions may be subject to additional costs. CE should refer to the pricing document at the end of this doc
and discuss with the cloud team.

## Customer Requests for Audit Logs

Customers can request audit logs via support or CE. Please fill out this [issue template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Faudit-log&projects=&template=managed-instance-audit-log.md&title=%24CUSTOMER%3A+Configure%2FRequest+Audit+logs).

## Audit Log Export

### If a customer has previously requested audit logs or an extension to audit logs

Find the customer audit log bucket: `gcloud logging sinks describe "audit_log_sink_gcs" --project=$CUSTOMER_PROJECT --format "value(destination)" | awk -F/ '{print $2}'`

Then, export the logs from the resulting bucket:

```bash
gcloud storage cp --recursive gs://src-5c4a20ed462d4919/stderr/$YEAR/$MONTH/$DAY ./$LOCAL_DIR --project=$CUSTOMER_PROJECT
zip -r audit_logs.zip ./$LOCAL_DIR
```

Then ask the customer how they would like to receive the logs (typically via email)

### How to backfill audit logs for a customer to a specific bucket (for Sourcegraph internal use)

If a customer has never requested audit logs before, or if the cloud team need to backfill logs for a customer, the cloud team can use the following steps:

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
