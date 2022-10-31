# MI 1.1 Upgrade process

## Prereq

> NOTE: For [automated upgrades](#automated-upgrade-recommended), these pre-reqs are not required.

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

### Create the instance upgrade tracking issue

Open the output link in your browser to create the tracking issue

```sh
mi create-tracking-issue -target $VERSION // e.g. 4.0.0
```

### Ensure new version of `docker-compose.yaml` file is in the golden directory

If they are not, download the file and open a PR to commit the file prior to upgrade

```sh
mi update-golden -target $VERSION // e.g. 4.0.0
```

### Ensure `config.yaml` file in customer directory is up-to-date

Check `$CUSTOMER/config.yaml` and make sure the file is present

### Upgrade

Configure facts

```sh
export CUSTOMER=demo
export VERSION=3.40.0
```

#### Automated Upgrade (recommended)

```sh
gh workflow run mi_upgrade.yml -f customer=$CUSTOMER -f version=$VERSION
```

Follow the notification in #cloud-notifications.

Command can be generated using `mi` as well, which will list commands for instances that are not yet upgraded:

```sh
mi workflow upgrade -target $VERSION -instance-type=trial
mi workflow upgrade -target $VERSION -instance-type=production
```

The above commands can then be run in bulk.

> NOTE: You should not upgrade more than 5 instances at a time.

If the upgrade succeeds, followed the instruction in the generated PR, and follow the steps below to trigger CI check in order to merge the PR:

- close PR
- delete branch
- restore the branch
- re-open the PR

Alternatively, simply updating the branch via the PR prompt will also trigger CI checks.

Finally, update the tracking issue

If the upgrade fail, follow the logs and figure out which step went wrong, then follow the [manual upgrade](#manual-upgrade-deprecated) to finish the upgrade.

#### Manual Upgrade (deprecated)

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
mi --customer $CUSTOMER upgrade --target $VERSION
```

(Optional) If the instance has executors enabled (search for `enable_executors = true` in `$CUSTOMER/terraform.tfvars`), make sure the terraform module is [up-to-date](##upgrade-managed_instance-terraform-module), then apply the terraform module

> You should be expecting some `replacement` on the executors docker-mirror compute instance and the instance group

```sh
# Found in the [Managed Instances vault](https://my.1password.com/vaults/nwbckdjmg4p7y4ntestrtopkuu/allitems/d64bhllfw4wyybqnd4c3wvca2m)
export TF_VAR_opsgenie_webhook=<OpsGenie Webhook value>
terraform apply
```

### Confirm instance health

<span class="badge badge-note">SOC2/CI-108</span>

```
mi --customer $CUSTOMER check
```

### Wrapping up

Commit your change:

```
git add . && git commit -m "$CUSTOMER: update docker-compose.yaml"
```

### Create a pull request.

<span class="badge badge-note">SOC2/CI-108</span>

You MUST link the pull request to the Github issue that caused the upgrade.

```sh
gh pr create --title "$CUSTOMER: upgrade to $NEW_VERSION" --body "Part of <link to release tracking Github ticket>\n## Test plan No review required: normal upgrade\n"
```

## Fallback plan

Follow [restore process](./mi1-1_restore_process.md)

## Automated upgrades

For patch release, which contains only images version upgrade, without executor upgrades, [Upgrade Managed Instance Github Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_upgrade.yml) can be used.
It will perform all mandatory steps from [Upgrade section](#upgrade) and open Pull Request. After Pull Request is open, please add link to upgrade issue and Github Action performing the upgrade to have history of performed steps.
