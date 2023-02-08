# Debugging cheat sheet

The following document exists to help CS debug commonly encountered customer issues. It's purpose is to simplify the troubleshooting process in the form of hinting first stops of where to explore when working to solve issues raised by our customers.

<!--
Template table for all sections! :)

| Issue       | Error       | Associated Logs / Files | Action / Notices |
| ----------- | ----------- | --------------- | ----------- |
| Placeholder | Placeholder | Placeholder     | Placeholder |
| Placeholder | Placeholder | Placeholder     | Placeholder |
| Placeholder | Placeholder | Placeholder     | Placeholder |
| Placeholder | Placeholder | Placeholder     | Placeholder |
| Placeholder | Placeholder | Placeholder     | Placeholder |
| Placeholder | Placeholder | Placeholder     | Placeholder |
| Placeholder | Placeholder | Placeholder     | Placeholder |
| Placeholder | Placeholder | Placeholder     | Placeholder |
-->

### Authentication related issues

| Issue                                                   | Error | Associated Logs / Files                                                                                | Action / Notices |
| ------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| Access token creation failure                           | N/A   | Frotend logs, Access token page in SG UI(look for any errors)                                          | N/A              |
| Certificate signed by unknown authority error           | N/A   | Frotend logs, Access token page in SG UI(look for any errors)                                          | N/A              |
| Issues with the connection and authentication to GitHub | N/A   | Access token(permissions scopes)                                                                       | N/A              |
| GitHub permissions not being reinforced                 | N/A   | can't sync GitHub permissions without using GH as the auth provider                                    | N/A              |
| User is linked to multiple emails                       | N/A   | Look at "user_external_account" table in postgres db and make sure data is expected with no duplicates | N/A              |

### Batch Changes related issues

| Issue                                                                      | Error                                                                   | Associated Logs / Files                                                             | Action / Notices                                                      |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Changeset not being applied                                                | N/A                                                                     | Changeset Yaml file, personal access tokens or global service account token(if any) | N/A                                                                   |
| Unable to run Batch Changerun when running a 'src batch preview'           | batch spec yaml file, Gitserver logs,docker logs sourcegraph-frontend   | N/A                                                                                 | N/A                                                                   |
| Src batch preview command sometimes works, sometimes results in 400 error. | Check Personal Access Token scope, check README.md, docker-compose logs | N/A                                                                                 | N/A                                                                   |
| The UI not reflecting updated data of a changeset                          | N/A                                                                     | N/A                                                                                 | Configure Webhooks to get the most accurate data regrding a changeset |

### Code Intel related issues

| Issue                                                  | Error | Associated Logs / Files                       | Action / Notices                                                                                                                        |
| ------------------------------------------------------ | ----- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| LSIF uploads failing                                   | N/A   | Front end, precise code intel worker, grafana | N/A                                                                                                                                     |
| Still showing semantic results after successful upload | N/A   | precise code intel worker                     | N/A                                                                                                                                     |
| Precise code intel worker OOM                          | N/A   | Front end, precise code intel worker          | describe worker pod, request for upload size in postgres by running select upload_size from lsif_uploads order by upload_size limit 50; |
| Slowness during use of code-intel                      | N/A   | N/A                                           | High precise-code-intel-worker usage                                                                                                    |
| Precise-code-intel worker in CrashLoopBackOff status   | N/A   | precise code intel worker logs                | N/A                                                                                                                                     |
| frontend ponds are crash looping                       | N/A   | frontend deployment yaml                      | N/A                                                                                                                                     |
| precise-code-intel worker OOM                          | N/A   | N/A                                           | N/A                                                                                                                                     |

### Cloning / Syncing related issues

| Issue                                                                             | Error | Associated Logs / Files                                                                                                                    | Action / Notices                                                                            |
| --------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Permissions denied when cloning via SSH                                           | N/A   | N/A                                                                                                                                        | Copy .ssh directory into docker-compose folder and chmod 644 for all users to read ssh keys |
| Repositories not found errors                                                     | N/A   | Repo-updater logs, git server logs, frontend logs, grafana dashboard images for git server and index server, CPU/Memory limits(may be low) | N/A                                                                                         |
| Repositories not cloneable due to authentication failure/ SSL certificate failure | N/A   | Git server logs, Repo-updater logs. Pass GIT_SSL_NO_VERIFY to true with manual cloning of failing repo                                     | N/A                                                                                         |
| Repositories suddenly stop working timeout unable to get any results back         | N/A   | gitserver logs, frontend deployment yaml, GitLab Errors                                                                                    | N/A                                                                                         |

### Database related issues

| Issue                                            | Error | Associated Logs / Files                                 | Action / Notices                                         |
| ------------------------------------------------ | ----- | ------------------------------------------------------- | -------------------------------------------------------- |
| Install fresh database/migration/restore failure | N/A   | PGSQL Logs                                              | N/A                                                      |
| Liveness probe too many clients error            | N/A   | Pgsql logs, repo and user count, max_connections config | N/A                                                      |
| Unable to fetch new configuration error          | N/A   | PGSQL Logs                                              | check max_connections config in postgres via SELECT      |
| Signal killed and core dump errors               | N/A   | PGSQL Logs                                              | check disk size consumption by running df -h when exec'd |

### Extension related issues

| Issue                                              | Error                                         | Associated Logs / Files            | Action / Notices                                                                                                       |
| -------------------------------------------------- | --------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| sourcegraph url in web browser extension error     | the string doesn't match the expected pattern | N/A                                | Check if user is using private browsing/incognito mode. Try on regular browsing                                        |
| get extension via a proxy server                   | N/A                                           | N/A                                | Check if user has private extension registry, also check if src cli is installed, then suggest private registry option |
| slow codeintel request error leading to OOM errors | N/A                                           | frontend logs, gitserver yaml file | check for resources and request for increase                                                                           |

### Grafana related issues

| Issue                                                   | Error                                                | Associated Logs / Files                                   | Action / Notices                                                                                              |
| ------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| GRAFANA WARNING: Repo-updater: Less than 0 repos synced | N/A                                                  | Grafana dashboard, repo-updater logs grepped for “error”, | N/A                                                                                                           |
| No data in Grafana                                      | N/A                                                  | N/A                                                       | Check permissions in the datasource folder in grafana service, check promethues targets in http://<host>:9090 |
| Logs not being accessible                               | Logs are not written to /var/log/grafana/grafana.log | N/A                                                       | Check permissions in Promethus logs and docker logs                                                           |
| CSRF Token Invalid                                      | N/A                                                  | N/A                                                       | Check site-admin/configuration page to confirm the alerts have been created                                   |

### Search related issues

| Issue                                               | Error | Associated Logs / Files                       | Action / Notices                                                            |
| --------------------------------------------------- | ----- | --------------------------------------------- | --------------------------------------------------------------------------- |
| Search failure with TCP error connection refused    | N/A   | Frontend logs, screenshot of error from SG UI | N/A                                                                         |
| Capped results for search queries                   | N/A   | N/A                                           | Flags passed in query, count:N flag                                         |
| Archived repos showing up in regular search queries | N/A   | Site config                                   | confirm customer token access scopes/ check site config for exclude configs |
| Connection closed before search complete error      | N/A   | N/A                                           | Check for flags passed in search query e.g. lang, type, count               |

### Upgrading related issues

| Issue                       | Error | Associated Logs / Files | Action / Notices                                                                                                                                                                                                                                                                               |
| --------------------------- | ----- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database corruption         | N/A   | N/A                     | `"BEGIN; SET enable_indexscan = 'off'; SET enable_bitmapscan = 'off'; SELECT id FROM users WHERE username = 'USER' AND deleted_at IS NULL; SET enable_indexscan = 'on'; SET enable_bitmapscan = 'on'; SELECT id FROM users WHERE username = 'martin.sucha' AND deleted_at IS NULL; ROLLBACK;"` |
| Sync issues after upgrading | N/A   | SSH key                 | N/A                                                                                                                                                                                                                                                                                            |
| N/A                         | N/A   | N/A                     | N/A                                                                                                                                                                                                                                                                                            |
