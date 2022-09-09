# ScaleTesting Instance

This page documents resources that are relevant for engineers looking to run Sourcegraph at scale as a preemptive measure to uncover bugs that 
may only be caught when operating under particular scale. Typically, this enables to approximate a customer instance usage pattern to ensure 
that our application will perform within acceptable boundaries in that context. 

Join the [#wg-test-at-scale](https://sourcegraph.slack.com/archives/C040LV3PS4C) Slack channel to join conversations about its use, both from theperspective of an engineer using it to test things or to follow or contribute to its development.

## Scaling VS Customer Tiers

It is important to make the distinction that by scale here, we're referring to the scale of operations from the perspective of a customer. So we're talking in terms of number of repositories, their size and the number of users. This is not directly about observing far we can scale horizontally or vertically a given service, though this can be achieved though the same mean.

The common vocabulary being used to talk about scaling from the persective of a customer is described in details over [tiers of strategic accounts](https://docs.google.com/spreadsheets/d/1n-KfGc8m1w09rIzNKm5tRxAYmP4-w11CVOCplMvVazk/edit#gid=1172385107). Therefore, we it's best to use it (_LARGE_, _XL_, _2XL_ and _3XL_) to frame which kind of customer a test would target.

## ScaleTesting Instance

This instance is entirely dedicated to peform manual testing at this stage and should not be used for other purpose. It is assumed that all the data associated with that instance can be discarded at the discretion of engineers performing tests on it or by the Dev Experience team. 

:right_arrow: If you plan to run a test, announce yourself on [#wg-test-at-scale](https://sourcegraph.slack.com/archives/C040LV3PS4C) to ensure you're the only one using it at the moment.

It is deployed in its own Google Cloud Project and is maintained by the Developer Experience team. This is very much a collaborative effort and any help to improve it is welcomed. 

> :bulb: There are zero alerting enabled on that instance, you are on your own and are expected to reach out for help if you notice something erratical with the deployment itself.

## TL;DR to conduct a test

> :warning: Do not ever populate that instance with customer data. **Only use open source or synthetic data.**

1. Have access to the Google Project: TODO
2. Be familiar with our Observability stack.
3. Be familiar with our Infrastructure code. 
4. Join [#wg-test-at-scale](https://sourcegraph.slack.com/archives/C040LV3PS4C) and announce yourself.
5. Adjust the infrastructure to the customer tier you're targeting. 
  - Open a PR against [the Terraform definitons](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/scaletesting) for that cluster.
6. Make sure to deploy the right commit you want to test on that intance. 
  - `sg ops ... TODO `
7. Populate the code hosts with your test data. 
  - `TODO`
8. Perform actions to test that deployment, from the perpective of your business domain.
9. Announce on the channel that you're finished with your test. 
10. Share your experience and results on that channel to help others to understand how we can improve the scale testing process.
11. Downscale the cluster to zero nodes. 

### Deploying code 

TODO `sg ops`

### Infrastructure

In order to make changes on the infrastructure itself, to adjust the infrastructure scaling of the customer tier you're seeking to test against, you can make a PR against the [scaletesting folder](https://github.com/sourcegraph/deploy-sourcegraph-managed/tree/main/scaletesting) of the [sourcegraph/deploy-sourcegraph-managed](https://github.com/sourcegraph/deploy-sourcegraph-managed) repository. 

> :bulb: Please note that at this stage, it is expected for you to be familiar with the various manifests defining how Sourcegraph is being deployed in Kubernetes. 

### Code Hosts

In order to reproduce accurately a customer scenario, you'll need access to the various code hosts that are available for testing purposes. The possibility of using isolated code hosts solely for the purpose of these tests is currently being explored. 

Are available right now: 
 
- GHE TODO
- GitLab TODO
- TODO

### Observability

In order to gather meaningful results of running tests against the scale testing instance, you can gather the following resources to help you come to a conclusion: 

- Tracing: TODO
- Sentry: TODO
- Logs: TODO
- Infrastructure Logs: TODO

You can of course connect directly to the cluster with `kubectx ...TODO` in order to directly observe the the cluster. An alternative is to use the Google Cloud console. 
