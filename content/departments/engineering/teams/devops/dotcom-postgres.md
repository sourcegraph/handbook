# Cloud Postgres

This serves as an informal description of changes to the Postgres database for
Sourcegraph.com and why the change was made. Most changes should be made on the
pre-prod environment before being made on the production environment.

## Changes

04/25/2022 Enabled `pageinspect` extension to analyze BRIN index layout and efficiency for the `lsif_uploads_audit_logs` table.

_MM/DD/YYYY Reason for change_
