# MI 1.1 Upgrade process

## Prereq

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

## Steps

### Ensure we have release a new version of the managed_instance terraform module in `sourcegraph/deploy-sourcegraph-managed`

Check if executors module contains the [latest version](https://github.com/sourcegraph/terraform-google-executors/tags) https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/modules/executors/main.tf, and bump the version as needed

After the change is merged on `main`, tag a new version by following the convention of `mi-module-vx.y.z-va`, e.g. `mi-module-v3.40.1-v1`.

Update `ref` to the `managed_instance` module in `infrastructure.tf` to reference the latest tag.

### Ensure new version of `docker-compose.yaml` file is in the golden directory

If they are not, download the file and open a PR to commit the file prior to upgrade

```sh
curl --fail -s https://raw.githubusercontent.com/sourcegraph/deploy-sourcegraph-docker/vX.Y.Z/docker-compose/docker-compose.yaml > ./golden/docker-compose.X.Y.Z.yaml
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

### Confirm instance health

Follow these [steps](../upgrade_process.md#8-confirm-instance-health)

```
mg --customer $CUSTOMER check
```

### Upgrade executors (optional)

If the instance has executors enabled, we need to apply the new executors module as well

> You should be expecting some `replacement` on the executors docker-mirror compute instance and the instance group

```sh
terraform apply
```

### Wrapping up

Commit your change:

```
git add . && git commit -m "$CUSTOMER: update docker-compose.yaml"
```

Create a pull request.

## Fallback plan

Follow [restore process](./mi1-1_restore_process.md)
