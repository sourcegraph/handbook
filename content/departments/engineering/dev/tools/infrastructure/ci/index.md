# Continuous integration infrastructure

This page consolidates resources regarding our CI _infrastucture_, namely our [Buildkite agents fleet](#buildkite-agents).
This infrastructure is maintained by the [DevX team](../../../../teams/dev-experience/index.md).

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

We have several different types of agents available. We recommend explicitly declaring which type of agent you want your jobs to run on with the `agents: { queue: "standard" }` field in your pipeline configuration.

The currently available queues:

- `standard`: our default Buildkite agents, currently Docker-in-Docker agents running in Kubernetes
- `vagrant`: special Buildkite agents desgined to run resource intensive test on docker deployments.

### `buildkite-job-dispatcher`

> NOTE: This section serves only as an intro and overview to `buildkite-job-dispatcher`. Detailed documentation and guides should go in the [CI playbook](../../../process/incidents/playbooks/ci.md) or as close to the source code as possible.

Our Buildkite agents are stateless, and are deployed in batches as Kubernetes jobs where each agent runs its workload and exits based on the size of the Buildkite backlog.
This is managed by the `buildkite-job-dispatcher`:

- [Source code](https://sourcegraph.com/github.com/sourcegraph/infrastructure/-/tree/docker-images/buildkite-job-dispatcher)
- [Documentation, dashboards, and deployment manifests](https://github.com/sourcegraph/infrastructure/blob/main/buildkite/kubernetes/buildkite-job-dispatcher)

Another potentially fragile component of this system is `buildkite-git-references`, which is a cron job and set of GCP disks that speed up pipelines by reducing the amount of cloning required.

- [Source code](https://github.com/sourcegraph/infrastructure/tree/main/buildkite/buildkite-git-references)
- [Pipeline](https://buildkite.com/sourcegraph/buildkite-git-references)

Relevant runbooks:

- [Replacing agents](../../../process/incidents/playbooks/ci.md#replacing-agents)
- [Agent availability issues](../../../process/incidents/playbooks/ci.md#agent-availability-issues)

A diagram overview of how the `buildkite-job-dispatcher` works (diagram adapted from [here](https://bobheadxi.dev/stateless-ci/#dynamic-kubernetes-jobs)):

```mermaid
sequenceDiagram
    participant ba as buildkite-job-dispatcher
    participant k8s as CI Kubernetes cluster
    participant bk as Buildkite.com
    participant gh as GitHub.com

    loop
      gh->>bk: enqueue jobs
      activate bk

      ba->>bk: list queued jobs and total agents
      bk-->>ba: queued jobs, total agents

      activate ba
      ba->>ba: determine required agents
      alt queue needs agents
        ba->>k8s: get template Job
        activate k8s
        k8s-->>ba: template Job
        deactivate k8s

        ba->>k8s: get buildkite-git-references volume
        activate k8s
        k8s-->>ba: volume
        deactivate k8s

        ba->>ba: modify Job template

        ba->>k8s: dispatch new Job
        activate k8s
        k8s->>bk: register agents
        bk-->>k8s: assign jobs to agents

        loop while % of Pods not online or completed
          par deployed agents process jobs
            k8s-->>bk: report completed jobs
            bk-->>gh: report pipeline status
            deactivate bk
          and check previous dispatch
            ba->>k8s: list Pods from dispatched Job
            k8s-->>ba: Pods states
          end
        end
      end
      deactivate ba

      k8s->>k8s: Clean up completed Jobs

      deactivate k8s
    end
```
