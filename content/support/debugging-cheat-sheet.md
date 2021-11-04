# Debugging cheat sheet

The following document exists to help CS debug commonly encountered customer issues. It's purpose is to simplify the troubleshooting process in the form of step-by-step processes to take when working with folks who need our help.

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
| Access token creation failure                           | N/A   | Frotend logs, Access token page in SG UI(look for any errors)                                          | Placeholder      |
| Certificate signed by unknown authority error           | N/A   | Frotend logs, Access token page in SG UI(look for any errors)                                          | Placeholder      |
| Issues with the connection and authentication to Github | N/A   | Access token(permissions scopes)                                                                       | Placeholder      |
| Github permissions not being reinforced                 | N/A   | can't sync GitHub permissions without using GH as the auth provider                                    | Placeholder      |
| User is linked to multiple emails                       | N/A   | Look at "user_external_account" table in postgres db and make sure data is expected with no duplicates | Placeholder      |

### Batch Changes related issues

| Issue                                                                      | Error                                                                   | Associated Logs / Files                                                             | Action / Notices                                                      |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Changeset not being applied                                                | N/A                                                                     | Changeset Yaml file, personal access tokens or global service account token(if any) | Placeholder                                                           |
| Unable to run Batch Changerun when running a 'src batch preview'           | batch spec yaml file, Gitserver logs,docker logs sourcegraph-frontend   | Placeholder                                                                         | Placeholder                                                           |
| Src batch preview command sometimes works, sometimes results in 400 error. | Check Personal Access Token scope, check README.md, docker-compose logs | Placeholder                                                                         | Placeholder                                                           |
| The UI not reflecting updated data of a changeset                          | N/A                                                                     | Placeholder                                                                         | Configure Webhooks to get the most accurate data regrding a changeset |

### Code Intel related issues

| Issue                                                  | Error       | Associated Logs / Files                       | Action                                                                                                                                  |
| ------------------------------------------------------ | ----------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| LSIF uploads failing                                   | Placeholder | Front end, precise code intel worker, grafana | Placeholder                                                                                                                             |
| Still showing semantic results after successful upload | Placeholder | precise code intel worker                     | Placeholder                                                                                                                             |
| Precise code intel worker OOM                          | Placeholder | Front end, precise code intel worker          | describe worker pod, request for upload size in postgres by running select upload_size from lsif_uploads order by upload_size limit 50; |
| Slowness during use of code-intel                      | Placeholder | Placeholder                                   | High precise-code-intel-worker usage                                                                                                    |
| Precise-code-intel worker in CrashLoopBackOff status   | Placeholder | precise code intel worker logs                | Placeholder                                                                                                                             |
| frontend ponds are crash looping                       | Placeholder | frontend deployment yaml                      | Placeholder                                                                                                                             |
| precise-code-intel worker OOM                          | Placeholder | Placeholder                                   | Placeholder                                                                                                                             |

### Cloning / Syncing related issues

| Issue                                                                             | Error       | Associated Logs / Files                                                                                                                    | Action / Notices                                                                            |
| --------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Permissions denied when cloning via SSH                                           | Placeholder | Placeholder                                                                                                                                | Copy .ssh directory into docker-compose folder and chmod 644 for all users to read ssh keys |
| Repositories not found errors                                                     | Placeholder | Repo-updater logs, git server logs, frontend logs, grafana dashboard images for git server and index server, CPU/Memory limits(may be low) | Placeholder                                                                                 |
| Repositories not cloneable due to authentication failure/ SSL certificate failure | Placeholder | Git server logs, Repo-updater logs. Pass GIT_SSL_NO_VERIFY to true with manual cloning of failing repo                                     | Placeholder                                                                                 |
| Repositories suddenly stop working timeout unable to get any results back         | Placeholder | gitserver logs, frontend deployment yaml, GitLab Errors                                                                                    | Placeholder                                                                                 |

### Database related issues

| Issue                                            | Error       | Associated Logs / Files                                 | Action / Notices                                         |
| ------------------------------------------------ | ----------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Install fresh database/migration/restore failure | Placeholder | PGSQL Logs                                              | Placeholder                                              |
| Liveness probe too many clients error            | Placeholder | Pgsql logs, repo and user count, max_connections config | Placeholder                                              |
| Unable to fetch new configuration error          | Placeholder | PGSQL Logs                                              | check max_connections config in postgres via SELECT      |
| Signal killed and core dump errors               | Placeholder | PGSQL Logs                                              | check disk size consumption by running df -h when exec'd |

### Extension related issues

| Issue                                              | Error                                         | Associated Logs / Files            | Action / Notices                                                                                                       |
| -------------------------------------------------- | --------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| sourcegraph url in web browser extension error     | the string doesn't match the expected pattern | Placeholder                        | Check if user is using private browsing/incognito mode. Try on regular browsing                                        |
| get extension via a proxy server                   | Placeholder                                   | Placeholder                        | Check if user has private extension registry, also check if src cli is installed, then suggest private registry option |
| slow codeintel request error leading to OOM errors | Placeholder                                   | frontend logs, gitserver yaml file | check for resources and request for increase                                                                           |

### Grafana related issues

| Issue                                                   | Error                                                | Associated Logs / Files                                   | Action / Notices                                                                                              |
| ------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| GRAFANA WARNING: Repo-updater: Less than 0 repos synced | Placeholder                                          | Grafana dashboard, repo-updater logs grepped for “error”, | Placeholder                                                                                                   |
| No data in Grafana                                      | Placeholder                                          | Placeholder                                               | Check permissions in the datasource folder in grafana service, check promethues targets in http://<host>:9090 |
| Logs not being accessible                               | Logs are not written to /var/log/grafana/grafana.log | Placeholder                                               | Check permissions in Promethus logs and docker logs                                                           |
| CSRF Token Invalid                                      | Placeholder                                          | Placeholder                                               | Check site-admin/configuration page to confirm the alerts have been created                                   |

### Search related issues

| Issue                                               | Error       | Associated Logs / Files                       | Action / Notices                                                            |
| --------------------------------------------------- | ----------- | --------------------------------------------- | --------------------------------------------------------------------------- |
| Search failure with TCP error connection refused    | Placeholder | Frontend logs, screenshot of error from SG UI | Placeholder                                                                 |
| Capped results for search queries                   | Placeholder | Placeholder                                   | Flags passed in query, count:N flag                                         |
| Archived repos showing up in regular search queries | Placeholder | Site config                                   | confirm customer token access scopes/ check site config for exclude configs |
| Connection closed before search complete error      | Placeholder | Placeholder                                   | Check for flags passed in search query e.g. lang, type, count               |

### Upgrading related issues

| Issue                       | Error       | Associated Logs / Files | Action / Notices                                                                                                                                                                                                                                                                               |
| --------------------------- | ----------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Database corruption         | Placeholder | Placeholder             | `"BEGIN; SET enable_indexscan = 'off'; SET enable_bitmapscan = 'off'; SELECT id FROM users WHERE username = 'USER' AND deleted_at IS NULL; SET enable_indexscan = 'on'; SET enable_bitmapscan = 'on'; SELECT id FROM users WHERE username = 'martin.sucha' AND deleted_at IS NULL; ROLLBACK;"` |
| Sync issues after upgrading | Placeholder | SSH key                 | Placeholder                                                                                                                                                                                                                                                                                    |
| Placeholder                 | Placeholder | Placeholder             | Placeholder                                                                                                                                                                                                                                                                                    |
