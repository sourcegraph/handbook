# Internal infrastructure

## Sourcegraph deployments

Internal deployments are documented in the [deployments](../../process/deployments/instances.md).

## Google Cloud Platform

See [Google Cloud Platform](./gcp.md).

## Buildkite agents

We maintain a fleet of Buildkite agents for continuous integration across all repositories.

- Owner: [Dev Experience](../../enablement/dev-experience/index.md)
- URL: https://buildkite.com/organizations/sourcegraph/agents
- Terraform and Kubernetes manifests: https://github.com/sourcegraph/infrastructure/tree/main/buildkite
- Resources
  - [CI playbook](../../process/incidents/playbooks/ci.md)
  - [`sourcegraph/sourcegraph` CI pipelines](https://docs.sourcegraph.com/dev/background-information/continuous_integration#buildkite-pipelines)

### Buildkite agent queues

We have several different types of agents availables. We recommend explicitly declaring which type of agent you want your jobs to run on with the `agents: { queue: "standard" }` field in your pipeline configuration.

The currently available queues:

- `standard`: our default Buildkite agents, currently Docker-in-Docker agents running in Kubernetes
- `baremetal`: special Buildkite agents running on standalone machines

## Code host testing instances

We maintain a collection of code hosts for testing purposes defined in our [infrastructure/dogfood](https://github.com/sourcegraph/infrastructure/tree/main/dogfood/kubernetes/tooling) cluster.

### GitHub Enterprise

- URL: https://ghe.sgdev.org
- Credentials: [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/bw4nttlfqve3rc6xqzbqq7l7pm)
- [Additional information](./ghe.md)

### Bitbucket Server

- URL: https://bitbucket.sgdev.org
- Credentials: [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/6owvzrgxfva3hn5jxe2253qbwi)

### Phabricator

- URL: http://phabricator.sgdev.org/
- Credentials: [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/bmanarlwknhl5p635wkgxfyd2i)

### Gitolite

- Git URL: git@gitolite.sgdev.org
- Credentials: [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/i5bm6syw45w2c33cvfrrlt4fhu)

### Gerrit

- URL: https://gerrit.sgdev.org
- Git URL: gerrit-ssh.sgdev.org
- Credentials: Google Auth
