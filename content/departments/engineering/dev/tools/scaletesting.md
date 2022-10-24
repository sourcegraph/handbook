# Scale testing

This page documents resources that are relevant for engineers looking to run Sourcegraph at scale as a preemptive measure to uncover bugs that
may only be caught when operating under particular scale. Typically, this enables to approximate a customer instance usage pattern to ensure
that our application will perform within acceptable boundaries in that context.

Join the #wg-test-at-scale Slack channel to join conversations about its use, both from the perspective of an engineer using it to test things or to follow or contribute to its development.

## Scaling VS customer tiers

It is important to make the distinction that by scale here, we're referring to the scale of operations from the perspective of a customer. So we're talking in terms of number of repositories, their size and the number of users. This is not directly about observing how far we can scale horizontally or vertically a given service, though this can be achieved though the same mean.

The common vocabulary being used to talk about scaling from the persective of a customer is described in details over at [tiers of strategic accounts](https://docs.google.com/spreadsheets/d/1n-KfGc8m1w09rIzNKm5tRxAYmP4-w11CVOCplMvVazk/edit#gid=1172385107). Therefore, it's best to use the terminology _LARGE_, _XL_, _2XL_ and _3XL_ to frame which kind of customer a test would target.

## ScaleTesting deployment

`scaletesting.sgdev.org` is entirely dedicated to peform manual testing at this stage and should not be used for other purpose. It is assumed that all the data associated with that instance can be discarded at the discretion of engineers performing tests on it or by the Dev Experience team.

➡️ If you plan to run a test, announce yourself on #wg-test-at-scale to ensure you're the only one using it at the moment.

It is deployed in its own Google Cloud Project and is maintained by the Developer Experience team. This is very much a collaborative effort and any help to improve it is welcomed.

> 💡 There are zero alerting enabled on that instance, you are on your own and are expected to reach out for help if you notice something erratic with the deployment itself.

## TL;DR to conduct a test

> ⚠️ Under no circumstances should the instance ever be populated with customer data. **Only use open source or synthetic data.**

1. Have access to the Google Project: TODO
2. Be familiar with our Observability stack.
3. Be familiar with our Infrastructure code.
4. Join #wg-test-at-scale and announce yourself.
5. Adjust the infrastructure to the customer tier you're targeting.
   1. Open a PR against [the Terraform definitions](https://github.com/sourcegraph/infrastructure/tree/main/scaletesting) for that cluster. In particular the nodes count, which is often set to the lowest value to avoid consuming resouces when not using the instance.
   2. See the [Environment](#Environment) section for more details about how and where to make configuration changes.
6. Make sure to deploy the right commit you want to test on that intance.
   1. When testing a specific verison, manually trigger the update docker images github action with a pin tag for the version you would like to use. This will create a pull request that you can merge.
   2. NOTE: pin-tag input field accepts both semver format `$MAJOR.$MINOR.$PATCH` as well as sourcegraph tag format `[build_number]_[date]_[short git SHA1]`
   3. See [Deploying code](#deploying-code) section for more details about to how to deploy these code changes.
7. Populate the code hosts with your test data.
   1. `TODO`
8. Perform actions to test that deployment, from the perpective of your business domain.
9. Announce on the channel that you're finished with your test.
10. Share your experience and results on that channel to help others to understand how we can improve the scale testing process.
11. Downscale the cluster to zero nodes.

### Environment

The code for this environment can be found in the following locations, depending on which part of the scale testing cluster you need to change.

#### Infrastructure

The configuration for the Google Cloud infrastructure can be found be found in the [sourcegraph/infrastructure](https://github.com/sourcegraph/infrastructure/tree/main/scaletesting) repository. Here you will find configuration for the project, GKE cluster, Cloud SQL instances, secrets and anything else related to the configuraion of underlying components. It is not expected that these values will change often, nor should testing engineers be expected to manage this code, however contributions are always welcomed.

A seperate compute instance also exists for the purpose of running long running and/or client-side intensive tests. The configration for which exists in the same [sourcegraph/infrastructure](https://github.com/sourcegraph/infrastructure/tree/main/scaletesting) repository.

To access this instance, run the following command:
`gcloud compute ssh --zone "us-central1-a" "devx" --tunnel-through-iap --project "sourcegraph-scaletesting"`

#### Application

All code related the deployment of the application is found at [`sourcegraph/deploy-sourcegraph-scalesting`](https://github.com/sourcegraph/deploy-sourcegraph-scaletesting). This deployment leverages [deploy-sourcegraph-helm](https://github.com/sourcegraph/deploy-sourcegraph-helm) so some familiarity will be useful, however all configuration changes can be made in the [values.yaml](https://github.com/sourcegraph/deploy-sourcegraph-scaletesting/blob/main/helm/sourcegraph/values.yaml)

> 💡 Please note that at this stage, it is expected for you to be familiar with the various manifests defining how Sourcegraph is being deployed in Kubernetes. For more information about interacting with the deployment, see the [Kubernetes](../process/deployments/kubernetes.md#scaling-kubernetes-clusters) handbook page.

### Code hosts

In order to reproduce a customer scenario accurately, you'll need access to the various code hosts that are available for testing purposes.

The following code hosts are available for testing:

#### GitHub Enterprise

- [ghe.sgdev.org](https://ghe.sgdev.org)
  - See [here](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&h=team-sourcegraph.1password.com&i=bw4nttlfqve3rc6xqzbqq7l7pm&v=dnrhbauihkhjs5ag6vszsme45a) for token details.
- [ghe-scaletesting.sgdev.org](https://ghe-scaletesting.sgdev.org)
  - see [GHE-Scaletesting](#GitHub-Enterprise-for-Scale-Testing)

#### Gitlab Enterprise

- [gitlab.sgdev.org](https://gitlab.sgdev.org)
  - See [here](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&h=team-sourcegraph.1password.com&i=ohorqvirgq5t2h5cpo4hwafpuy&v=dnrhbauihkhjs5ag6vszsme45a) for token details.

The possibility of using isolated code hosts solely for the purpose of these tests is currently being explored, depending on test types and demand.

### Observability

In order to gather meaningful results of running tests against the scale testing instance, you can gather the following resources to help you come to a conclusion:

- Tracing: Selective tracing is enabled and traces are exported to GCP. You can see all traces by going to the [GCP tracing dashboard](https://console.cloud.google.com/traces/overview?project=sourcegraph-scaletesting). To use tracing all you have to add is `&trace=1` to you url the UI will show a `View trace` link, which takes you to the GCP dashboard for your particular trace.
- Sentry: [`scaletesting`](https://sentry.io/organizations/sourcegraph/issues/?project=6735436)
- Infrastructure and Application logs: GKE logs are currently available for viewing in the `Google Cloud Logs Explorer`. See the [official documentation](https://cloud.google.com/logging/docs/view/building-queries) for further information on how to use the logging platform.
- You can authenticate yourself to the cluster using the following command:

```shell
gcloud container clusters get-credentials scaletesting --region us-central1 --project sourcegraph-scaletesting
```

If you have already configured and authenticated to the cluster, you can of course interact directly with the deployment to observe logs or other behaviours. See the [cheatsheet](../process/deployments/kubernetes.md#kubectl-cheatsheet) for useful `kubectl` commands.

## Playbook

## Prerequisites

- Access to the `sourcegraph-scaletesting` google project.
- [kubectl](../process/deployments/kubernetes.md#how-to-set-up-access-to-kubernetes) and [helm](../../teams/delivery/deployment/helm.md#helm) configured.

Below you can find a subset of the common tasks and how to complete them:

### Deploying code

To make changes to images, environment variables or other configuration, all udpates should be made in [values.yaml](https://github.com/sourcegraph/deploy-sourcegraph-scaletesting/blob/main/helm/sourcegraph/values.yaml)

Merge your changes via a pull request, and run the following from the base of the `deploy-sourcegraph-scaletesting` repository:

`helm upgrade --install --values ./helm/sourcegraph/values.yaml --version 3.43.2-insiders.3e3f9e9 sourcegraph insiders/sourcegraph -n scaletesting`

### Scale the infrastructure down when not in use

To ensure the cluster is not left running, set the `node_count` to `0` in the [`terraform` config](https://github.com/sourcegraph/infrastructure/blob/main/scaletesting/main.tf#L39)

Create a pull request with your changes, and apply them once merged by running `terraform apply` in the `infrastructure/scaletesting` directory.

Once the cluster has been scaled down please make an announcement in [#wg-test-at-scale](https://sourcegraph.slack.com/archives/C040LV3PS4C) that the cluster has been scaled down.

To stop the `devx` compute instance when it is not in use, run the following:

`gcloud compute instances stop devx --zone us-central1-a --project sourcegraph-scaletest`

or to start it:

`gcloud compute instances start devx --zone us-central1-a --project sourcegraph-scaletest`

## Testing Data

## GitHub Enterprise for Scale Testing

A GitHub enterprise instance has been deployed in the same project as [`sourcegraph-scaletesting`](https://console.cloud.google.com/welcome?project=sourcegraph-scaletesting) and can be accessed at https://ghe-scaletesting.sgdev.org. It is initially set up to handle 10k users, with the ability to scale up and down as needed. Please shut down the instance if you are done with testing and is not needed anymore.

### Instance start up and shut down

The instance can be started/shut down with the following commands:

- Start up: `gcloud compute instances start ghe-scaletesting --zone=us-central1-f --project sourcegraph-scaletesting`
- Shut down: `gcloud compute instances stop ghe-scaletesting --zone=us-central1-f --project sourcegraph-scaletesting`

When starting the instance, it could take up to 5 mins for the application to set up before fully operational. The UI will indicate when it is ready to be used.

### Scaling the instance

The instance has been set up to handle 10k users based off of the [recommended specs](https://docs.github.com/en/enterprise-server@3.6/admin/installation/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-google-cloud-platform#minimum-requirements) from GitHub.

It can also be scaled up or down with the following steps:

**Note:** Be cautious when scaling up, as we can only scale up and down CPU/Mem but not disk. To avoid overprovisioning, only increase disk size when needed.

#### Increase/Decrease CPU and Memory

1. Ensure the instance has been stopped by going into the GCP Console or running the shutdown command
   `gcloud compute instances stop ghe-scaletesting --zone=us-central1-f --project sourcegraph-scaletesting`.
2. Edit the machine type in [terraform](https://github.com/sourcegraph/infrastructure/blob/main/scaletesting/github-enterprise.tf#L40) - We recommended staying within the `n2-highmem-xx` [family](https://cloud.google.com/compute/docs/general-purpose-machines#n2-high-mem) as it's configuration best suits GitHub's requirements.
3. Create a PR and tag [dev-experience](https://github.com/orgs/sourcegraph/teams/dev-experience/members) for review.

#### Increase Disk

> NOTE: Downsizing disk is not supported at the moment, please proceed with caution before increasing disk size.

Increasing disk is a 2 part process - you have to increase disk on the VM, and then expand the ghe filesystem for the changes to be applied.

1. Ensure the instance has been stopped by going into the GCP Console or running the shutdown command
   `gcloud compute instances stop ghe-scaletesting --zone=us-central1-f --project sourcegraph-scaletesting`.
2. Identify which disk you want to increase in [terraform](https://github.com/sourcegraph/infrastructure/blob/main/scaletesting/github-enterprise.tf#L19)
   ![increase-disk](https://storage.googleapis.com/sourcegraph-assets/handbook/increase-disk-terraform.png)
3. Create a PR and tag [dev-experience](https://github.com/orgs/sourcegraph/teams/dev-experience/members) for review.
4. After it has been approved and applied, follow the [instructions](https://docs.github.com/en/enterprise-server@3.6/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity#increasing-the-data-partition-size) from GitHub on how to expand the filesystem.

### Logging in

The instance has been set up with an admin account, please find the credentials in our [1Pass vault](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&v=cjfb3n4rqj6s7mu3dkbci4dk2u&i=q3g4ywrebjiqmti2xro5tq5jwa&h=team-sourcegraph.1password.com).

### Data Safety

This instance has no guarantees regarding permanence, security, or stability. **Do not add any sensitive or private data to this instance!** Assume that this instance can be wiped or torn down at any given moment.

## Long running task machine

Creating some of the data can take a long time, we've therefore added a machine in the scaletesting cluster to run these long running tasks.

To access the machine execute the following command:

```
gcloud compute ssh --zone "us-central1-a" "devx"  --tunnel-through-iap --project "sourcegraph-scaletesting"
```

### Git

#### Over 100k repositories

The `rctest.sgdev.org` uses the following list of GitHub organizations to populate an instance with over 100k repositories:

- `github.com/pld-linux` (22k repos)
- `github.com/londonappbrewery` (28k repos)
- `github.com/wp-plugins` (52k repos)

In order to add them to a scale testing instance, you can run the following command:

```
sg client codehost add-github \
  --display-name "repos-gh-100k" \
  --baseurl "https://scaletesting.sgdev.org" \
  --email "REDACTED" --password "REDACTED" \
  --github.token REDACTED \
  pld-linux londonappbrewery wp-plugins
```

#### Organization with 10k repositories with write access

See https://ghe.sgdev.org/testing which is a replica of https://github.com/londonappbrewery on our GitHub instance.
They are owned by the `testing` user, who can write on those repos.

#### Organization with 200k blank repos (single initial commit with `README.md`) 

See https://ghe.sgdev.org/scaletesting-blank200k for the repos. 
See https://sourcegraph.sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/dev/scaletesting/bulkrepocreate/README.md for the tool powering the creation.

#### Large binary files

A repository with large binary files (Ubuntu isos) is available at https://ghe.sgdev.org/scaletesting/large-binary-files

#### Large amount of commits

The following repositories are available to test against repositories with a massive amount of commits:

- `github.com/sgtest/megarepo` (>700k commits)
- `gigarepo`, served through `git-combine` (> 1.8M commits)

```
{
  // See the git-combine service and statefulset
  "url": "http://git-combine",
  // Do not change this. Sourcegraph uses this as a signal that url is 'src serve'.
  "repos": [
    "src-serve"
  ]
}
```

### Perforce

A small tool named [Synthforce](https://github.com/sourcegraph/synthforce) has been created to generated synthetic repos (depots) in Perforce. For more details on how to use the tool to generate more synthetic files or history on a particular depot please see the [README](https://github.com/sourcegraph/synthforce/blob/main/README.md).

#### Depots (repos)

##### `devx-small-10GB

- Size ~10 GB
- Change count 589 (commits)

##### `devx-large-20GB`

- Size ~20 GB
- Change count 2937 (commits)

### GitLab

#### Large amount of commits

The following repositories are available to test against repositories with a massive amount of commits:

- `https://gitlab.sgdev.org/sgtest/megarepo1` (>700k commits)
