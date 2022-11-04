# MI 1.1 Upgrade process

## Prerequisites

- install `go`
- install [`gcloud`](https://cloud.google.com/sdk/gcloud) and authenticate
- install [`gh`](https://cli.github.com/) (the GitHub CLI) and authenticate

Install `mi` (or run `go run ./util/cmd/mi` for all subsequent `mi` commands):

```sh
make install

# if you don't have $GOBIN
# add $HOME/.bin to your path
GOBIN=~/.bin make install
```

## Steps

### Create the instance upgrade tracking issue

Open the output link in your browser to create the tracking issue

```sh
mi create-tracking-issue -target $VERSION # e.g. 4.0.0
```

### Prepare new resources

Ensure new version of `docker-compose.yaml` file is in the golden directory.
If they are not, download the file and open a PR to commit the file prior to upgrade:

```sh
mi update-golden -target $VERSION # e.g. 4.0.0
```

Then, upgrade the executors module: [`modules/executors/main.tf`](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/modules/executors/main.tf), replace all `version` fields values with `$VERSION`.

Then, create a pull request with your changes, and include a reference to the upgrade tracking issue.

Example pull request: https://github.com/sourcegraph/deploy-sourcegraph-managed/pull/1778

### Upgrade instances

#### Automated Upgrade (recommended)

<span class="badge badge-note">SOC2/CI-108</span>

Configure facts:

```sh
export VERSION=3.40.0
```

Using `mi` you can generate commands to trigger automated upgrades for instances that are not yet upgraded:

```sh
# For trial instances
mi workflow upgrade -target $VERSION -instance-type=trial
# For customer instances
mi workflow upgrade -target $VERSION -instance-type=production
```

> NOTE: To explicitly trigger a single upgrade, the generated command is effectively:
>
> `gh workflow run mi_upgrade.yml -f customer=$CUSTOMER -f version=$VERSION`

The generated commands can then be run in bulk, and you can check #cloud-notifications for the results of each workflow run, or using `gh`:

```sh
gh run list --workflow=mi_upgrade.yml
```

> NOTE: You should not upgrade more than 5 instances at a time, to limit the blast radius of issues.

<span class="badge badge-note">SOC2/CI-108</span>

This automated workflow will generate a pull request for each instance to represent the upgrade that:

1. Links to full logs of the automated upgrade process (retained for 90 days)
2. Embeds a summary of an automated [full instance healthcheck](#post-upgrade-healthcheck) (retained permanently)
3. Links to the tracking issue associated with the upgrade

To review currently open PRs for successful instance upgrades using `gh`:

```sh
# Sanity check to see that the PRs correspond to instances you have upgraded
gh pr list --label 'mi-upgrade'

# Save the list of PRs you are going to work with
gh pr list --label 'mi-upgrade' --json number --jq '.[].number' > upgrade-prs.txt

# Review the test plan of each PR (press 'q' to review the next one)
cat upgrade-prs.txt | xargs -n1 gh pr view
```

If an upgrade fails, follow the logs and figure out which step went wrong, then follow the [manual upgrade](#manual-upgrade-deprecated) to finish the upgrade.

If all is well, approve and merge each instance upgrade:

```sh
# Approve each PR
cat upgrade-prs.txt | xargs -n1 gh pr review --approve

# Merge each PR
cat upgrade-prs.txt | xargs -n1 gh pr merge --squash
```

Finally, update the tracking issue.

#### Manual Upgrade (deprecated)

Configure facts:

```sh
export CUSTOMER=demo
export VERSION=3.40.0
```

Check `$CUSTOMER/config.yaml` and make sure the file is present

Create branch:

```sh
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

<span class="badge badge-note">SOC2/CI-108</span>

Conduct a [full instance healthcheck](#post-upgrade-healthcheck).

Commit your change:

```sh
git add . && git commit -m "$CUSTOMER: update docker-compose.yaml"
```

Create a pull request:

```sh
gh pr create --title "$CUSTOMER: upgrade to $NEW_VERSION" --body "Part of <link to release tracking Github ticket>\n## Test plan: <paste mi check results>\n"
```

## Post-upgrade healthcheck

<span class="badge badge-note">SOC2/CI-108</span>

An automated healthcheck is conducted via the following command:

```sh
mi --customer $CUSTOMER check --executors
```

This healthcheck generates a summary that denotes whether:

1. All containers are running and healthy
2. The Sourcegraph `frontend` service is accessible
3. Executor instances are configured correctly and can be scaled up to a non-zero count

## Fallback plan

Follow [restore process](./mi1-1_restore_process.md)
