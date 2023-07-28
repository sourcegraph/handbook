# Upgrading a Cloud instance

<span class="badge badge-note">SOC2/CI-108</span>

First, create the upgrade tracking issue. Following the instruction provided by the command below.

```sh
mi2 env create-tracking-issue -e prod $TARGET_VERSION
```

## Option 1 - GitHub Action

An automated upgrade can be initiated via the [Upgrade Instance](https://github.com/sourcegraph/cloud/actions/workflows/mi_upgrade.yml) GitHub action workflow.

A pull request will be created and link to the upgrade tracking issue automatically upon successful completion of the job run.

## Option 2 - Batch automate upgrade

### To upgrade a specific instance

```sh
export SLUG=company
export ENVIRONMENT=prod
export TARGET_VERSION=4.1.0
```

```sh
gh workflow run mi_upgrade.yml -f customer=$SLUG -f environment=$ENVIRONMENT -f target_src_version=$TARGET_VERSION
```

### To upgrade all instances within an environment

Using `mi2` you can generate commands to trigger automated upgrades for all instances:

for internal instances:

```sh
mi2 env workflow run -e prod -filter '.metadata.labels."instance-type" == "internal" and .spec.sourcegraphVersion != "'$TARGET_VERSION'" and .spec.releaseChannel != "insiders" and .spec.releaseChannel != "pause"' -format text upgrade-instance
```

for production instances:

```sh
mi2 env workflow run -e prod -filter '.metadata.labels."instance-type" == "production" and .spec.sourcegraphVersion != "'$TARGET_VERSION'" and .spec.releaseChannel != "insiders" and .spec.releaseChannel != "pause"' -format text upgrade-instance
```

for trial instances:

```sh
mi2 env workflow run -e prod -filter '.metadata.labels."instance-type" == "trial" and .spec.sourcegraphVersion != "'$TARGET_VERSION'" and .spec.releaseChannel != "insiders" and .spec.releaseChannel != "pause"' -format text upgrade-instance
```

all instances

```sh
mi2 env workflow run -e prod -filter '.spec.sourcegraphVersion != "'$TARGET_VERSION'" and .spec.releaseChannel != "insiders" and .spec.releaseChannel != "pause"' -format text upgrade-instance
```

This automated workflow will generate a pull request for each instance to represent the upgrade that:

1. Links to full logs of the automated upgrade process (retained for 90 days)
2. Embeds a summary of an automated [full instance healthcheck](#upgrade-instance---health-check) (retained permanently)
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

If an upgrade fails, follow the logs and figure out which step went wrong, then follow the [manual upgrade](#option-2---maual-upgrade) to finish the upgrade.

If all is well, approve and merge each instance upgrade:

```sh
# Approve each PR
cat upgrade-prs.txt | xargs -n1 gh pr review --approve

# Merge each PR
cat upgrade-prs.txt | xargs -n1 gh pr merge --squash --auto
```

Finally, update the tracking issue.

## Option 3 - Manual upgrade

### Prereq

Follow https://github.com/sourcegraph/controller#installation to install `mi2`

### Set environment variables

> Sharing `TF_TOKEN_app_terraform_io` is only temporary, this is expected to change in the future.

> `TARGET_VERSION` could be one of, release version, release candidate version, or `latest`.
> When `latest` is provided, `mi2` will automatically figure out the latest main branch tag and persist it in `config.yaml`

Bash

```sh
export SLUG=company
export ENVIRONMENT=dev
export TF_TOKEN_app_terraform_io=$(gcloud secrets versions access latest --project=sourcegraph-secrets --secret=TFC_TEAM_TOKEN)
export TARGET_VERSION=4.1.0
```

Fish

```sh
set -x SLUG company
set -x ENVIRONMENT dev
set -x TF_TOKEN_app_terraform_io (gcloud secrets versions access latest --project=sourcegraph-secrets --secret=TFC_TEAM_TOKEN)
set -x TARGET_VERSION 4.1.0
```

### Check out a new branch

```sh
git checkout -b $SLUG/upgrade-instance
```

All commands below are executed under the instance root and use auto inference to locate the instance, hence `-e` and `-slug` flags are omitted.

```sh
export INSTANCE_ID=$(mi2 instance get -e $ENVIRONMENT --slug $SLUG | jq -r '.metadata.name')
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/
```

### Upgrade instance - database migration

This will perform

- health check
- bump version in `config.yaml` and regenerate deployment artifacts (e.g. kustomize, cdktf)
- backup both the GKE cluster state (e.g. manifest, disks) and Cloud SQL to create a checkpoint
- deploy migrator as a k8s Job to perform database migration

```sh
mi2 instance upgrade -target-version $TARGET_VERSION
```

Confirm workload are healthy

```sh
mi2 instance check pods-health
```

### Upgrade instance - workload update

Switch to the right gke cluster and configure `kubectl` context

```sh
mi2 instance workon -exec
```

Deploy the new workload

```sh
cd kubernetes
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

### Upgrade instance - health check

Confirm workload are healthy and remote version is the same as target version

```sh
mi2 instance check pods-health src-application-version
```

### Open a pull request

You should expected changes are made to

- `config.yaml`
- `kubernetes/*`
- `terraform/stacks/*`
- `charts/*`

Commit all changes

```sh
git add .
git commit -m "$SLUG: upgrade to $TARGET_VERSION"
gh pr create --title "$SLUG: upgrade to $TARGET_VERSION"
```

In the PR, include output of

```sh
mi2 instance check pods-health
```

### Merge the pull request

Make sure to merge the pull request in time so we can rollout changes to `executors` terraform module.

The module is configured to be auto-apply, hence no action is required.

## Rollback

Depending on the failure scenario, we have different fallback strategy

### Database migration failed

Our database schema is supposed to be at least `n-2` (where `n` is the current minor version) compatible.

A failing database migration usually does not result in direct impact on customers and we do not rollout workload
until database migration goes through.

For now, follow [how to troubleshoot dirty databases](https://docs.sourcegraph.com/admin/how-to/dirty_database) to resolve the issue.

In the future, we will add more commands to `mi2` cli to interact with migrator directlly or even provide auto-fix solution in the `mi2 instance upgrade` command.

### New workload failed to start

We use rolling update, and usually the older pod will still be serving traffic untill the new pod is healthy.
Of course, with the exception of statefulset.

If it is causing breakage to the services (e.g. uptime check is failing), we should aim to rollback as soon as possible.

It could be as simple as reverting changes to the generated k8s manifest

```sh
git restore --source=origin/main --worktree kubernetes
kustomize build --load-restrictor LoadRestrictionsNone --enable-helm . | kubectl apply -f -
```

or you can also rollback individual deploy/sts

```sh
kubectl rollout undo deploy <>
kubectl rollout undo sts <>
```

If there is a data corruption or some other more complicated cases, follow [the restore process](./restore_process.md).
