# Continuous integration infrastructure

This page consolidates resources regarding our CI _infrastucture_, namely our [Buildkite agents fleet](#buildkite-agents).
This infrastructure is maintained by the [DevX team](../../../enablement/dev-experience/index.md).

Related resources:

- [CI playbook](../../../process/incidents/playbooks/ci.md)
- [`sourcegraph/sourcegraph` CI pipelines](https://docs.sourcegraph.com/dev/background-information/continuous_integration)
  - [`sourcegraph/sourcegraph` CI dashboard and logs](https://sourcegraph.grafana.net/d/iBBWbxFnk/ci?orgId=1)
  - [Sentry project for CI pipelines](https://sentry.io/organizations/sourcegraph/issues/?project=6110304)

## Buildkite agents

We maintain a shared fleet of Buildkite agents for continuous integration across all repositories.

- [Active agents](https://buildkite.com/organizations/sourcegraph/agents)
- [Terraform and Kubernetes manifests](https://github.com/sourcegraph/infrastructure/tree/main/buildkite)
- Images:
  - [`buildkite-agent`](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/buildkite-agent)
  - [`buildkite-agent-stateless`](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/buildkite-agent-stateless)
  - [`buildkite-job-dispatcher`](https://sourcegraph.com/github.com/sourcegraph/infrastructure/-/tree/docker-images/buildkite-job-dispatcher)
- Specific resources:
  - [Gain access to the CI cluster](../../../process/deployments/debugging/tutorial.md#ci-cluster)
  - [CI playbook](../../../process/incidents/playbooks/ci.md)

### Buildkite agent queues

We have several different types of agents availables. We recommend explicitly declaring which type of agent you want your jobs to run on with the `agents: { queue: "standard" }` field in your pipeline configuration.

The currently available queues:

- `standard`: our default Buildkite agents, currently Docker-in-Docker agents running in Kubernetes
- `vagrant`: special Buildkite agents desgined to run resource intensive test on docker deployments.
