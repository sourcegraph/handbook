# Scale testing

This page documents resources that are relevant for engineers looking to run Sourcegraph at scale as a preemptive measure to uncover bugs that
may only be caught when operating under particular scale. Typically, this enables to approximate a customer instance usage pattern to ensure
that our application will perform within acceptable boundaries in that context.

Join the [#wg-test-at-scale](https://sourcegraph.slack.com/archives/C040LV3PS4C) Slack channel to join conversations about its use, both from the perspective of an engineer using it to test things or to follow or contribute to its development.

## Scaling VS customer tiers

It is important to make the distinction that by scale here, we're referring to the scale of operations from the perspective of a customer. So we're talking in terms of number of repositories, their size and the number of users. This is not directly about observing how far we can scale horizontally or vertically a given service, though this can be achieved though the same mean.

The common vocabulary being used to talk about scaling from the persective of a customer is described in details over at [tiers of strategic accounts](https://docs.google.com/spreadsheets/d/1n-KfGc8m1w09rIzNKm5tRxAYmP4-w11CVOCplMvVazk/edit#gid=1172385107). Therefore, it's best to use the terminology _LARGE_, _XL_, _2XL_ and _3XL_ to frame which kind of customer a test would target.

## ScaleTesting deployment

`scaletesting.sgdev.org` is entirely dedicated to peform manual testing at this stage and should not be used for other purpose. It is assumed that all the data associated with that instance can be discarded at the discretion of engineers performing tests on it or by the Dev Experience team.

:right_arrow: If you plan to run a test, announce yourself on [#wg-test-at-scale](https://sourcegraph.slack.com/archives/C040LV3PS4C) to ensure you're the only one using it at the moment.

It is deployed in its own Google Cloud Project and is maintained by the Developer Experience team. This is very much a collaborative effort and any help to improve it is welcomed.

> :bulb: There are zero alerting enabled on that instance, you are on your own and are expected to reach out for help if you notice something erratic with the deployment itself.

## TL;DR to conduct a test

> :warning: Under no circumstances should the instance ever be populated with customer data. **Only use open source or synthetic data.**

1. Have access to the Google Project: TODO
2. Be familiar with our Observability stack.
3. Be familiar with our Infrastructure code.
4. Join [#wg-test-at-scale](https://sourcegraph.slack.com/archives/C040LV3PS4C) and announce yourself.
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

> :bulb: Please note that at this stage, it is expected for you to be familiar with the various manifests defining how Sourcegraph is being deployed in Kubernetes. For more information about interacting with the deployment, see the [Kubernetes](../process/deployments/kubernetes.md#scaling-kubernetes-clusters) handbook page.

### Code hosts

In order to reproduce a customer scenario accurately, you'll need access to the various code hosts that are available for testing purposes.

The following code hosts are available for testing:

- [ghe.sgdev.org](https://ghe.sgdev.org)
  - See [here](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&h=team-sourcegraph.1password.com&i=bw4nttlfqve3rc6xqzbqq7l7pm&v=dnrhbauihkhjs5ag6vszsme45a) for token details.
- [gitlab.sgdev.org](https://gitlab.sgdev.org)
  - See [here](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&h=team-sourcegraph.1password.com&i=ohorqvirgq5t2h5cpo4hwafpuy&v=dnrhbauihkhjs5ag6vszsme45a) for token details.

The possibility of using isolated code hosts solely for the purpose of these tests is currently being explored, depending on test types and demand.

### Observability

In order to gather meaningful results of running tests against the scale testing instance, you can gather the following resources to help you come to a conclusion:

- Tracing: TODO
- Sentry: [`scaletesting`](https://sentry.io/organizations/sourcegraph/issues/?project=6735436)
- Infrastructure and Application logs: GKE logs are currently available for viewing in the `Google Cloud Logs Explorer`. See the [official documentation](https://cloud.google.com/logging/docs/view/building-queries) for further information on how to use the logging platform.

If you have already configured and authenticated to the cluster, you can of course interact directly with the deployment to observe logs or other behaviours. See the [cheatsheet](../process/deployments/kubernetes.md#kubectl-cheatsheet) for useful `kubectl` commands.

## Playbook

## Prerequisites

- Access to the `sourcegraph-scaletesting` google project.
- [kubectl](../process/deployments/kubernetes.md#how-to-set-up-access-to-kubernetes) and [helm](../../teams/delivery/deployment/helm.md#helm) configured.

Below you can find a subset of the common tasks and how to complete them:

### Deploying code

To make changes to images, environment variables or other configuration, all udpates should be made in [values.yaml](https://github.com/sourcegraph/deploy-sourcegraph-scaletesting/blob/main/helm/sourcegraph/values.yaml).c

Merge your changes via a pull request, and run the following from the base of the `deploy-sourcegraph-scaletesting` repository:

`helm upgrade --install --values ./helm/sourcegraph/values.yaml --version 3.43.2-insiders.3e3f9e9 sourcegraph insiders/sourcegraph -n scaletesting`

### Scale the infrastructure down when not in use

To ensure the cluster is not left running, set the `min_num_nodes` and `max_num_nodes` to `0` in the [`terraform` config](https://github.com/sourcegraph/infrastructure/blob/main/scaletesting/main.tf#L39-L40)

Create a pull request with your changes, and apply them once merged by running `terraform apply` in the `infrastructure/scaletesting` directory.

To stop the `devx` compute instance when it is not in use, run the following:

`gcloud compute instances stop devx --zone us-central1-a --project sourcegraph-scaletest`

or to start it:

`gcloud compute instances start devx --zone us-central1-a --project sourcegraph-scaletest`

## Testing Data

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

#### Large depot

WIP See `RacoonTest` (name to be changed) over https://github.com/sourcegraph/sourcegraph/issues/42091

### GitLab

#### Large amount of commits

The following repositories are available to test against repositories with a massive amount of commits:

- `https://gitlab.sgdev.org/sgtest/megarepo1` (>700k commits)
