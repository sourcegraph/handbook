# Cloud Audit Logs

Audit logs for all cloud instances are automatically collected in an audit bucket in the customer project.

## Requesting an Extension to Cloud Audit Logs

By default, audit logs are retained for 30 days. Extensions beyond 30 days are possible upon request from CE or support. To file a request, please use [this issue template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Faudit-log&projects=&template=managed-instance-audit-log.md&title=%24CUSTOMER%3A+Configure%2FRequest+Audit+logs).

## Customer Requests for Audit Logs

Customers can request audit logs via support or CE. Please fill out this [issue template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2Cmi%2Faudit-log&projects=&template=managed-instance-audit-log.md&title=%24CUSTOMER%3A+Configure%2FRequest+Audit+logs).

## Audit Log Export

If a customer requests an export of their audit logs for the default retention of 30 days, a cloud engineer will need to enable audit logs and run the below commands to backfill the logs into the audit bucket.

```bash
# Create a logging export job
gcloud alpha logging copy "_Default" storage.googleapis.com/$AUDIT_STORAGE_BUCKET_NAME --location=global --log-filter="jsonPayload.Attributes.audit.auditId!=\"\" AND resource.type=\"k8s_container\"" --project=$PROJECT_ID
```

Then, view the resulting bucket to ensure the logs have been moved over.

These steps are based on these [GCP Docs](https://cloud.google.com/logging/docs/routing/copy-logs).
