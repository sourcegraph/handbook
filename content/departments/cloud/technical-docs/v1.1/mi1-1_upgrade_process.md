# MI 1.1 Upgrade process

## Prereq

### Environment

You have `go` installed

You have `gcloud-cli` (and you're authenticated!)

Configure required env var

```sh
export MG_DEPLOY_SOURCEGRAPH_MANAGED_PATH=/path/to/deploy-sourcegraph-managed/repo
```

Install `mg` (or run `go run ./util/cmd/.` for all subsequent `mg` commands)

```sh
make install

# if you don't have $GOBIN
# add $HOME/.bin to your path
GOBIN=~/.bin make install
```

### Upgrade `managed_instance` terraform module

- Retrieve the latest executors module release version from https://github.com/sourcegraph/terraform-google-executors/tags
- `git checkout -b upgrade-executors-$version`
- Open [modules/executors/main.tf](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/modules/executors/main.tf) and bump referenced upstream module version if it is outdated
- Determine the next tag of `mi-module-vx.y.z-va`, e.g. `mi-module-v3.40.1-v1`.
  - `vx.y.z` should match the sourcegraph release version
  - `va` is used to track revision to the module in between the same sourcegraph release
- Do a global string replacement of the referenced module `source` to the next tag for every instances
  - the reference exists in each `$CUSTOMER/infrastructure.tf` in the `managed_instance` module
- Open a Pull Request, tag the latest `main` with the above tag

## Steps

### Ensure new version of `docker-compose.yaml` file is in the golden directory

If they are not, download the file and open a PR to commit the file prior to upgrade

```sh
curl --fail -s https://raw.githubusercontent.com/sourcegraph/deploy-sourcegraph-docker/vX.Y.Z/docker-compose/docker-compose.yaml > ./golden/docker-compose.X.Y.Z.yaml || echo "failed to download"
```

Upgrading to a RC build?

```sh
curl --fail -s https://raw.githubusercontent.com/sourcegraph/deploy-sourcegraph-docker/master/docker-compose/docker-compose.yaml > ./golden/docker-compose.X.Y.Z.yaml || echo "failed to download"
go run ./util/enforce-tags.go X.Y.Z golden/docker-compose.X.Y.Z.yaml
```

### Ensure `config.yaml` file in customer directory is up-to-date

Check `$CUSTOMER/config.yaml` and make sure the file is present

### Upgrade

Configure facts

```sh
export CUSTOMER=demo
export VERSION=3.40.0
```

Create branch

```
git checkout -b $CUSTOMER/upgrade-v$VERSION
```

Upgrade the deployment. At a high level, this will perform the following steps

- update the symbolic link of `$CUSTOMER/$CURRENT_DEPLOYMENT/docker-compose/docker-compose.yaml` to the target golden file `golden/docker-compose.X.Y.Z.yaml`
- sync the updated deployment artifact (e.g. docker-compose.yaml, prometheus_targets.yaml) to the VM
- backup the Cloud SQL instance
- run `docker-compose up -d` on the VM

```sh
mg --customer $CUSTOMER upgrade --target $VERSION
```

(Optional) If the instance has executors enabled (search for `enable_executors = true` in `$CUSTOMER/terraform.tfvars`), make sure the terraform module is [up-to-date](##upgrade-managed_instance-terraform-module), then apply the terraform module

> You should be expecting some `replacement` on the executors docker-mirror compute instance and the instance group

```sh
# Found in the [Managed Instances vault](https://my.1password.com/vaults/nwbckdjmg4p7y4ntestrtopkuu/allitems/d64bhllfw4wyybqnd4c3wvca2m)
export TF_VAR_opsgenie_webhook=<OpsGenie Webhook value>
terraform apply
```

### Confirm instance health

Follow these [steps](../upgrade_process.md#8-confirm-instance-health)

```
mg --customer $CUSTOMER check
```

### Wrapping up

Commit your change:

```
git add . && git commit -m "$CUSTOMER: update docker-compose.yaml"
```

Create a pull request.

## Fallback plan

Follow [restore process](./mi1-1_restore_process.md)
