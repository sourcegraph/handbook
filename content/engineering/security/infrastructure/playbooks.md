# Security infrastructure playbooks

Contains playbooks for GCP project deployments, GKE project deployments, 



## GKE deployment playbooks

This section contains playbooks for how to deploy our k8s infrastructure



### Logging

How to deploy and update logging k8s deployments.

#### Deploy pubsubbeats

This deploys pubsubbeats. Currently this will deploy it to production, but these documents will be updated to reflect environment-specific deployments in  [#17281](https://github.com/sourcegraph/sourcegraph/issues/17281). Note that this will update an existing k8s deployment if one already exists.

1. Install [helmfile](https://github.com/roboll/helmfile)
2. Get access to the logging cluster by running `gcloud container clusters get-credentials --region us-central1-f --project sourcegraph-security-logging logging`
3. From `security/logging/helm/pubsubbeat` run the command `helmfile template | kubectl --context gke_sourcegraph-security-logging_us-central1-f_logging apply -f -`

### Logging staging

To implement in [#17281](https://github.com/sourcegraph/sourcegraph/issues/17281).

## GCP deployment playbooks

Playbooks and step-by-step instructions on how to deploy our projects. It's assumed that you already have [terraform](https://www.terraform.io/) installed.

It's recommended that you use [tfenv](https://github.com/tfutils/tfenv) to help manage terraform versions.

For basic terraform issues, see [debugging terraform](#debugging-terraform)



### Creating a new GCP project

This is done via terraform from `gcp/projects` in the [Sourcegraph infrastructure repository](https://github.com/sourcegraph/infrastructure). Unless you're a GCP admin, you'll be blocked on permissions here. 

1. Update the `security_projects` collection to include a new project.
   1. The fields `name`, `billing_account`, and `services` must be set.
   2. The name of the object should be the same as the `name` field.
   3. `billing_account` should always be set to `"default"`.
   4. `services` is a list of non-default APIs required by the project.
2. At this point, you will very likely be blocked on IAM Permissions. If you're not, then... Hi Chayim or Gonza, hope you're well today!
3. To verify that your change is correct, run `terraform plan` from `gcp/projects` in our infrastructure repository.
4. If the change is purely additive, you're free to apply it by running `terraform apply` and entering `yes` at the prompt. If anything is updated or deleted, check with the project owner to see what's out of sync, and whether it's ok to still apply the change.
5. Assuming `terraform apply` succeeds, update the [security infrastructure](./index.md) page and the [environments](../../environments.md#sourcegraph-security) page of the handbook to reflect the new project.
6. Create an empty folder under `security` in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/tree/main/security) to store future terraform configuration.



### Deploying logging infrastructure

These should be one-offs. Never do this unless the project is irretrievably broken, or we need a new copy somewhere.

#### Staging infrastructure

To implement in [#17281](https://github.com/sourcegraph/sourcegraph/issues/17281).

#### Production infrastructure

This requires multiple steps to properly configure. Most of these are going to be conditional on changing things that aren't expected to change. Usually you'll want [deploy pubsubbeats](#deploy-pubsubbeats)

##### From scratch

1. Configure the `sourcegraph-security-logging` project by running `terraform apply` from `/security/logging`.
2. Configure the pub/sub logging sinks, as well as GKE workload audit logs  in cloud and dogfood by running `terraform apply` from `/cloud` and `/dogfood`
   1. This would only be needed on config changes for the logging sinks or the audit log module.
3. [Create a service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) for the subscriber `pubsubbeat-subscriber@sourcegraph-security-logging.iam.gserviceaccount.com` in the `sourcegraph-security-logging` project.
4. [Create our elastic instance](#elastic-cloud-logging).
   1. Note that the following instructions are part of creating the Elastic instance, since pubsubbeats perform some Elastic configuration
5. [Encrypt elastic secrets](#encrypt-deployment-secrets) and add them to the repository.
6. [Deploy pubsubbeats](#deploy-pubsubbeats).



#### Encrypt deployment secrets

This should never need to happen after initial cluster creation.

Currently only documented for production logging, but these documents will be updated to reflect environment-specific deployments in  [#17281](https://github.com/sourcegraph/sourcegraph/issues/17281).

This assumes that you have the json-formatted [service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) for the `pubsubbeat-subscriber`service account, the username & password for the elastic `pubsubbeat` user, and the [elastic cloud ID](https://www.elastic.co/guide/en/cloud/current/ec-cloud-id.html) on hand.

Pipe a file of format:

```
CREDENTIALS_PUBSUB:
  [service_account_key]
CLOUD_ID: "[cloud_id]"
CLOUD_AUTH: "[pubsubbeat_username]:[pubsubbeat_password]"
```

Note that the format of `CREDENTIALS_PUBSUB` needs to have the opening `{` indented, but does not need the closing `}` indented.

```
CREDENTIALS_PUBSUB:
	{
	"Foo": "Bar",
	...
	"Alpha": "Beta"
}
```

Into the command `gcloud --project sourcegraph-security-logging kms encrypt --location us-central1 --keyring=encryption-keyring --key helm-secrets --ciphertext-file=- --plaintext-file=-`, and store the output in `security/logging/helm/pubsubbeat/private/pubsubbeat_secrets.yaml.enc`



### Ingesting logs from a new GCP project

From the project directory in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/), create the file `security_pubsub.tf` with the following default configuration. This lets all relevant logs through.

```# Project log sink
# Sends all logs with a severity of >= default to the security topic
resource "google_logging_project_sink" "security_logging_sink" {
  name        = "log-sink"
  destination = "pubsub.googleapis.com/${var.security_logging_topic_id}"
  # Ingest any log of level default or above
  # We need to ingest default logs, since that's the level of our audit logs
  filter = "severity >= DEFAULT"

  unique_writer_identity = true
}
```

Add an entry to `variables.tf`

```
variable "security_logging_topic_id" {
  description = "security logging topic id"
}
```

Add an entry to `terraform.tfvars`

```
security_logging_topic_id = "[SECURITY_TOPIC_ID]"
```

Note that the production topic ID is `"projects/sourcegraph-security-logging/topics/logs"`

Add an entry to `output.tf`

```
output "security_logging_sink_writer_id" {
  value       = google_logging_project_sink.security_logging_sink.writer_identity
  description = "Security logging sink writer ID"
}
```

Once you apply the changes, copy down the logging sink writer ID. Now, the project has been configured to send its logs to the security logging topic. However, it needs to be granted permission to write to this topic. To do this, go to `security/logging`, and make the following changes.

Add an entry to  `pubsub.tf`

```
# Grant the IAM account used by the [PROJECT_NAME] logging sink permissions to write to the pubsub topic
resource "google_pubsub_topic_iam_member" "sink_permission_[PROJECT_NAME]" {
  topic  = google_pubsub_topic.logs.name
  role   = "roles/pubsub.publisher"
  member = var.[PROJECT_NAME]_project_writer_identity
}
```

Add an entry to `variables.tf`

```
variable "[PROJECT_NAME]_project_writer_identity" {
  description = "writer identity from [PROJECT_NAME] sink"
}
```

Add an entry to `terraform.tfvars`

```
[PROJECT_NAME]_project_writer_identity  = "[SINK_WRITER_ID]"
```

Apply the changes via `terraform plan` and `terraform apply`.

Validate that the logs are being ingested into elastic by searching `json.resource.labels.project_id :[PROJECT_ID]` in Kibana. Give it a minute or two to propagate the changes.



### Ingesting audit logs from a new GKE cluster

This assumes that stackdriver logs are already ingested by pubsubbeats. If not, [do this first](#ingesting-logs-from-a-new-gcp-project).

All of this is done from the project directory in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/).

Note: if any of these objects already exist, make sure the specified fields are a superset of the fields defined here. If the provided fields are not a superset of the fields specified here, add fields until it contains a superset of the fields defined in this document.

Create the file `gke-logging.tf`

```
module "gke_logging" {
  source = "[PATH_TO_MODULES]/modules/gke-logging/"

  # Explicitly pass down the configured k8s provider
  providers = {
    kubernetes = kubernetes
  }
}

```

Add an entry to `main.tf`. This is what is used to authenticate to the cluster.

```
# Query the client configuration for our current service account, which should
# have permission to talk to the GKE cluster.
data "google_client_config" "current" {}
```

Add an entry to `providers.tf`. If a `kubernetes` provider already exists, add any missing configuration until this configuration is a subset of the existing `kubernetes` provider. 

```
# Declare the k8s provider used by the gke-logging module
# Authenticate to the relevant cluster
provider "kubernetes" {
  load_config_file = false
  host             = google_container_cluster.[CLUSTER_WE_WANT_LOGS_FROM].endpoint

  cluster_ca_certificate = base64decode(
    google_container_cluster.[CLUSTER_WE_WANT_LOGS_FROM].master_auth[0].cluster_ca_certificate,
  )
  token = data.google_client_config.current.access_token
}
```



Run `terraform plan`, then `terraform apply` if the plan is as expected.

To validate that we succeeded, run `kubectl get pods -n cos-auditd ` and verify that there is one pod per node. Additionally, go to the [log explorer](https://cloud.google.com/logging/docs/view/logs-viewer-interface) and search for logs with the query `jsonPayload._AUDIT_FIELD_A0: *`.



## Managed service deployment playbooks

Playbooks for deploying and configuring our managed services.



### Scaling elastic cloud

Assuming Elastic Cloud is in Healthy state, or in Warn state because it hasn't had a snapshot in a few hours, scaling Elastic should be trivial. To scale Elastic, follow [these instructions](https://www.elastic.co/guide/en/cloud-enterprise/current/ece-resize-deployment.html) to edit the deployment, and increase the number of nodes. If Elastic is already out of disk, and in red state, follow the instructions in [Debugging Elastic](#debugging-elastic)



### Elastic cloud logging

How to configure a production-ready Elastic Cloud deployment for pubsubbeats logging.

1. Create an Elastic deployment

   1. This should never happen unless the entire project is re-created.

   2. Basic Configuration:
      Elastic stack
      I/O optimized
      AWS cloud provider on US East

   3. Open advanced configuration before creating the deployment
      6*58GB nodes for Elasticsearch, 2 zones.
      4GB master node
      4GB Kibana node

   4. Open security configuration in Kibana
      Click `launch kibana` then click `manage` on the main page. Then click `Roles` on the sidebar

      Create two roles. 
      	`pubsubbeat_setup` with the cluster privileges `monitor, manage_ilm, manage_ml`

      ​	`pubsubbeat_writer` with the cluster privileges `cluster:admin/ingest/pipeline/get, monitor` and give it index privileges `all` on indicies `pubsubbeat*`
      Create a user `pubsubbeat`. Give it the roles `pubsubbeat_setup` and `pubsubbeat_writer`
      Give it a secure password, and keep track of this value.

2. Update and re-encrypt the secret values stored in `security/logging/helm/pubsubbeat/private/pubsubbeat_secrets.yaml.enc`. See [these instructions](#encrypt-deployment-secrets)

3. [Deploy pubsubbeats](#deploy-pubsubbeats)

   1. This allows pubsubbeats to perform the majority of the initial Elasticsearch configuration.

4. Add additional index configuration

   1. Configure the Kibana index (Pubsubbeats will create this index)

      1. Open index management in Kibana
         Update the pubsubbeat index template
         Update the `lifecycle` field to contain `"refresh_interval": "30s"` 

         ```
         lifecycle {
         	[...],
         	"refresh_interval": "30s"
         }
         ```

   2. Configure the index lifecycle policy `pubsubbeat`

      1. Update the maximum index size to be 50 GB.

## Debugging playbooks

Playbooks for debugging GCP projects, GKE projects, and managed services.

### Debugging logging

If no pubsubbeat logs are are being sent to Elastic `logging/helm/pubsubbeat/charts/pubsubbeat/templates/deployment.yaml` to run with arguments ` args: ["-c", "/usr/local/bin/pubsubbeat -c /etc/configmap/pubsubbeat.yml -e -d \"*\"]`. This enables debug logging. Then, search through the output logs for `connection` `error`, and other things that might indicate why the logs aren't reaching Elastic. Also check to see that Elastic disk usage is below ~80% in at least two different nodes. If it's not, scale Elastic immediately.



If some pubsubbeat logs aren't being sent to elastic, try to find the logs in the [gcp logs explorer](https://cloud.google.com/logging/docs/view/logs-viewer-interface). Note that you should look in the project generating the logs, not the security project. If they're not there, then you need to determine why they're not being ingested by stackdriver. Otherwise, verify that the logging sink is properly configured for that project, and that it's not filtering out the logs you're expecting.

### Debugging logging stage

To implement in [#17281](https://github.com/sourcegraph/sourcegraph/issues/17281).

#### 

### Debugging elastic

Note that Elastic will often be in `Warn` state since we create snapshots on a daily basis, not an hourly basis, since each snapshot takes an hour or two to create. This is intentional, and we should only be concerned if the last snapshot was more than ~26 hrs ago.



While Elastic shouldn't need too much debugging, occasionally it can get itself stuck into bad states when running out of disk, or when its resources are overloaded. A good utility to manage Elastic is [cerebro](https://github.com/lmenezes/cerebro), which can easily be run via [docker](https://github.com/lmenezes/cerebro-docker). You'll want to have an Elastic superuser for this, which can be created by a similar process as used in [elastic cloud configuration](#elastic-cloud-logging) step 1.4.



If you run out of disk space and can't scale the cluster because shards aren't getting scheduled due to each node hitting the low or high watermarks

1. Set `              cluster.routing.allocation.disk.watermark.low                 ` to `92%` and `              cluster.routing.allocation.disk.watermark.high                 ` to `94%`.
2. Scale the cluster _immediately_ in extended maintenance mode. In this condition, it's also fine to skip making a new snapshot, since the cluster is in an extremely unhealthy status anyways.
3. Once scaling succeeds, set `              cluster.routing.allocation.disk.watermark.low                 ` back to `85%` and `              cluster.routing.allocation.disk.watermark.high                 ` back to `90%`.

If Elastic runs out of disk, the [alias may be deleted](https://discuss.elastic.co/t/failed-to-connect-to-backoff-elasticsearch-http-es01-9200-connection-marked-as-failed-because-the-onconnect-callback-failed-resource-apm-7-5-2-error-exists-but-it-is-not-an-alias/236088/2), which leads to pubsubbeat being unable to write to Elastic. A workaround is identified in [this GitHub issue](https://github.com/elastic/apm-server/issues/3698#issuecomment-620882797). These commands can be run from the [API console](https://www.elastic.co/guide/en/cloud-enterprise/current/ece-api-console.html).



### Debugging terraform

Basic Terraform errors that are common to run into. See [terraform playbooks](https://about.sourcegraph.com/handbook/engineering/languages/extended_guide/terraform) for uncommon terraform issues. 



If you get the error `Unsupported Terraform Core version [...] required_version = "A.B.C"`, or the error `Error: Error loading state: state snapshot was created by Terraform vA.B.C, which is newer than current vX.Y.Z; upgrade to Terraform vA.B.C or greater to work with this state`, that means you need to use the specific terraform version `A.B.C`. An easy solution is to run `tfenv use A.B.C`. 

1. If you get the error `No installed versions of terraform matched 'A.B.C `, then you need to install `A.B.C`. To do this, run `tfenv install A.B.C` before running `tfenv use A.B.C`.



You may need to run `terraform init` if you've added a new plugin to your configuration, or if you haven't run terraform commands from this directory before.



If `terraform plan` results in more changes than expected, try merging in the most recent `main` branch. 

1. If this still shows unexpected changes, try running `terraform plan` from the main branch. If the unexpected changes are gone, then it's an issue with your PR. However, if the unexpected delta is still present from the main branch, it could mean one of a few things.
   1. Someone has an approved PR and is applying some changes before merging. Check in #distributioneers or the PRs on the infrastructure repository.
   2. GCP has updated how things are configured. This is somewhat common with large projects like dogfood and cloud. This is usually means that GCP switched the default "true" value of a field (ex. `"on" ->"true"`). This results in terraform detecting a change between the local and remote state, despite there not actually being one. This is annoying and confusing, but usually harmless. Usually not something we'd need to deal with, since we don't have large projects, but this often occurs when modifying dogfood or dotcom. Go bug the owner of the project, or verify that GCP did make an unexpected change.



If `terraform plan` or `terraform apply` fails on acquiring state lock, look at the `who` field of the error.

* If the `who` field is obviously a developer, they're probably also running `terraform plan` or `terraform apply` on the same GCP resources. You'll probably have a merge conflict at some point, so it's a good idea to sync with them on what the two of you are doing, and how it could interact.
* If the `who` field is buildkite, then we may have a stuck pipeline. A good heuristic is to see if the lock was created more than ~10 minutes ago. If it was, it's a good idea to start hunting through PRs on the infrastructure repo for a stuck pipeline so you can ping the PR author, or to ping #distributrioneers if you can't find the source. You may need to force unlock the state after killing the stuck pipeline.
