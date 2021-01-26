# Security infrastructure

We maintain multiple flavors of infrastructure with various degrees of management. 



## GCP infrastructure basics

GCP infrastructure is configured via [terraform](https://www.terraform.io/) in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/). All configuration for security projects should be stored in the [security subdirectory](https://github.com/sourcegraph/infrastructure/tree/main/security). Please adhere to this [terraform style guide](../../languages/terraform.md) when working here.

For instructions on how to deploy this infrastructure, see [GCP Deployment Playbooks](./playbooks.md#gcp-deployment-playbooks).



#### Logging

To deploy logging infrastructure, see the [Deploying logging infrastructure](./playbooks.md#deploying-logging-infrastructure) playbook. 

Logging configuration exists in many different places at present, which makes it complex.

* `pubsub.tf` in the [cloud](https://github.com/sourcegraph/infrastructure/blob/main/cloud/pubsub.tf) and [dogfood](https://github.com/sourcegraph/infrastructure/blob/main/dogfood/pubsub.tf) directories of the infrastrucutre repository.

  * This should remain mostly static, but the filter may change as filtering rules are refined, and additional logging sinks may be added for the [staging environment](#logging-stage).

  * Note that not all cloud pubsub configuration belongs to security.
  * This creates a logging sink for cloud and dogfood which sends logs via pub/sub to the security project.

* `gke-logging.tf` in the [cloud](https://github.com/sourcegraph/infrastructure/blob/main/cloud/pubsub.tf) and [dogfood](https://github.com/sourcegraph/infrastructure/blob/main/dogfood/pubsub.tf) directories of the infrastrucutre repository.

  * This should remain static.
  * This deploys the gke-logging module to the k8s cluster.

* The `gke-logging` module in the [modules folder](https://github.com/sourcegraph/infrastructure/tree/main/modules/gke-logging).

  * This should remain static.
  * This module pushes GKE node audit logs to stackdriver.
  * [Reference configuration](https://github.com/GoogleCloudPlatform/k8s-node-tools/blob/master/os-audit/cos-auditd-logging.yaml)

* The [logging folder](https://github.com/sourcegraph/infrastructure/tree/main/security/logging) in the security project.

  * This contains the GCP configuration for the logging projects owned by security.

* The [helm directory](https://github.com/sourcegraph/infrastructure/tree/main/security/logging/helm/) in the security project.

  * This contains the configuration for all helm deployments for security.
  * Currently, this is only pubsubbeats.

* Elastic cloud's [production logging deployment](#elastic-logging)

  * Elastic manages our logs, as well as our retention policy on our log data.
  * Expected to be re-configured whenever new sources of logs are added, as well as monitored to ensure it doesn't run out of disk space.

#### Logging stage

To implement in [#17281](https://github.com/sourcegraph/sourcegraph/issues/17281).

Will likely be similar to the above [logging infrastructure](#logging).



## GKE deployment basics

This section explains how to use various tools used to generate and deploy kubernetes configuration to GKE.

### Helmfile

Instead of using helm, we use [helmfile](https://github.com/roboll/helmfile). The reasoning for doing this is that helmfile allows basic script execution as part of the templating process, which is used to decrypt the secrets used for pubsubbeats. Additionally, it supports conditional configuration based on the deployment environment, which makes it harder to accidentally desynchronize the staging and production configurations.

### Kubectl

Kubectl is used to interact with kubernetes clusters. For basic information see the existing [kubectl tips and tricks document](../../deployments/kubernetes.md). See the linked documents for examples of how kubectl is used to [configure](./playbooks.md#gke-deployment-playbooks) or [debug](./playbooks.md#debugging-logging).

## Projects

These are security's current GCP projects, and what they do. 

For instructions on how to deploy these projects, see [GKE Deployment Playbooks](./playbooks.md#gke-deployment-playbooks).



### sourcegraph-security-logging

Currently ingests all stackdriver logs from the projects `sourcegraph-dev`(cloud) and `sourcegraph-dogfood`(dogfood). Will later ingest logs from other sources using additional deployments within the cluster.



### sourcegraph-security-logging-stage

To implement in [#17281](https://github.com/sourcegraph/sourcegraph/issues/17281).

This is a testbed to allow us to test changes to logs without risking production logs. This pushes logs to the [stage logging environment](#elastic-logging-stage), so that they don't pollute production logs in [elastic](#elastic-cloud).



### sourcegraph-security-vault

Currently unused. Will eventually contain a [HashiCorp Vault](https://www.vaultproject.io/) instance for secret management. This may change depending on the state of [Managed Vault](https://www.hashicorp.com/cloud-platform). We may transition to using a [managed vault service](#hashicorp-vault).



### sourcegraph-vault-stage

Unmaintained and [to be deleted](https://github.com/sourcegraph/sourcegraph/issues/17046) - purely used as a testbed for vault. Do not add production secrets to this instance.



## Managed services

### Elastic cloud

We currently use elastic cloud to store centralized security logs. This allows us to avoid the overhead of managing it ourselves, while getting something that's reasonably performant and stable. 

Elastic cloud web portal is [here](https://cloud.elastic.co/home). Credentials are stored in 1Password.

#### Elastic logging

Currently contains all stackdriver logs from the GCP projects `sourcegraph-dogfood` and `sourcegraph-dev`. Note that stackdriver also contains OS audit logs from GKE nodes on the primary GKE clusters for those projects. This is due to the afforementioned `gke-logging` module being deployed in them as part of our [logging infrastructure](#logging).



Note that the pubsubbeat index lifecycle policy is set to a maximum index size is 50GB, and rollover is enabled. 

Note that the index refresh interval is 30 seconds.



#### Elastic logging stage

To implement in [#17281](https://github.com/sourcegraph/sourcegraph/issues/17281).



### HashiCorp Vault

This section is a placeholder, since we may or may not use this service.