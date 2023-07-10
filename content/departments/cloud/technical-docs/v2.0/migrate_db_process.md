# Migrating CloudSQL instance

Semi-automated CloudSQL migration process without explicit downtime - data are not persisted during migration window, but application is working.
The purpose is to perform migration of existing CloudSQL instance to new one i.e. to shrink disk size (feature not supported by GCP).

## CloudSQL modes

Based on the initial state of Cloud instance, CloudSQL migration consist of 3 stages:

1. BlueOnly mode (default) initial state

`Blue Only -> Blue Primary -> Green Only`

2. GreenOnly mode (instance was already migrated some time back) initial state

`Green Only -> Green Primary -> Blue Only`

## Steps for each mode

All steps modify terraform resources and it is recommended to use TFC cli mode:

1. Enable TFC cli mode

```sh
mi2 instance workflow -exec enable-tfc-cli-run-mode
```

2. After migration, switch to TFC VCS mode

```sh
mi2 instance workflow -exec disable-tfc-cli-run-mode
```

### Blue Only - default

Default for instances.

If this mode is used after `Green Primary`, destroy additional Green database and migration bucket.

- in `config.yaml`

```yaml
metadata:
  annotations:
    cloud.sourcegraph.com/cloudsql-mode: blueOnly
```

- generate cdktf and kustomize

```sh
mi2 generate cdktf
cd terraform/stacks/output && terraform apply -auto-approve
```

- generate kustomize

```sh
mi2 generate kustomize
```

- apply kustomize changes (will switch appliation to Blue instance via cloudsql-proxy)

```sh
mi2 instance workon -exec
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm kubernetes/ | kubectl --kubeconfig=$(mi2 instance kubeconfig) apply -f -
```

- remove Green instance via web console
  Note:
  CloudSQL delete protection and schema dependcy is blocking from clean terraform apply.
  Instance can be found via:
  `cd terraform/stacks/sql && terraform state list | grep sql_sqlsecondary_self | xargs terraform state show | grep id`

- cleanup terraform state, since we've removed the instance directly via web console

```sh
cd terraform/stacks/sqlschema
terraform state list | grep secondary | xargs terraform state rm
cd terraform/stacks/sql
terraform state list | grep sql_sqlsecondary_self | xargs terraform state rm
```

- apply stacks in order: app, sql, sqlschema

### Blue Primary

Creates additional Green database and migration bucket.

- in `config.yaml`

```yaml
metadata:
  annotations:
    cloud.sourcegraph.com/cloudsql-mode: bluePrimary
```

- generate cdktf

```sh
mi2 generate cdktf
```

- apply stacks in order: sql, sqlschema, app, output
  Warning: output will change DB connection to new database, but without regenarting kustomize, this change is safe.

Export databases (pgsql, codeintel-db & codeinsights-db) from Blue instance via web console to migration bucket.

Import databases (pgsql, codeintel-db & codeinsights-db) to Green instance via web console from migration bucket (use ServiceAccount name as user).

### Green Only

Destroy Blue database and migration bucket.

- in `config.yaml`

```yaml
metadata:
  annotations:
    cloud.sourcegraph.com/cloudsql-mode: greenOnly
```

- generate cdktf and kustomize

```sh
mi2 generate cdktf
cd terraform/stacks/output && terraform apply -auto-approve
```

- generate kustomize

```sh
mi2 generate kustomize
```

- apply kustomize changes (will switch appliation to Green instance via cloudsql-proxy)

```sh
mi2 instance workon -exec
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm kubernetes/ | kubectl --kubeconfig=$(mi2 instance kubeconfig) apply -f -
```

- remove Blue instance via web console
  Note:
  CloudSQL delete protection and schema dependcy is blocking from clean terraform apply.
  Instance can be found via:
  `cd terraform/stacks/sql && terraform state list | grep sql_self_ | xargs terraform state show | grep id`

- cleanup terraform state, since we've removed the instance directly via web console

```sh
cd terraform/stacks/sqlschema
terraform state list | grep -v secondary | grep -v remote | xargs terraform state rm
cd terraform/stacks/sql
terraform state list | grep sql_self_  | xargs terraform state rm
```

- apply stacks in order: app, sql, sqlschema

### Green Primary

Creates additional Blue database and migration bucket.

- in `config.yaml`

```yaml
metadata:
  annotations:
    cloud.sourcegraph.com/cloudsql-mode: greenPrimary
```

- generate cdktf

```sh
mi2 generate cdktf
```

- apply stacks in order: sql, sqlschema, app, output
  Warning: output will change DB connection to new database, but without regenarting kustomize, this change is safe.

Export databases (pgsql, codeintel-db & codeinsights-db) from Green instance via web console to migration bucket.

Import databases (pgsql, codeintel-db & codeinsights-db) to Blue instance via web console from migration bucket (use ServiceAccount name as user).

Proceed to `Blue Only` step
