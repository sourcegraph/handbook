# Cloud Break Glass Process

In the event of emerency, we will need to bypass the usual operation process and restore custom instances in a timely manner.

What events qualify? For example:

- GCP zonal outage and we may need to perform manual failover
- Customer instance is corrupted or deleted somehow - disaster recovery

Make sure you are following our [incident playbook](../../../engineering/dev/process/incidents/index.md) to handle those events.

## How to gain escalated permissions

<!-- TODO(@michaellzc) -->

> WARNING: we are revamping our access control process

## How to apply terraform

We use Terraform Cloud as a terraform state and remote execution platform using the [VCS-driven] model.

During daily operation, human operator usually shouldn't be running terraform manually. However, this should be permited during incident.

Update the `config.yaml` with the following

```yaml
apiVersion: sourcegraph.com/v1
kind: SourcegraphCloud
metadata:
  name: <>
spec:
  debug:
    tfcRunsMode: cli
```

Then run command below to generate the updated terraform modules

```sh
mi2 generate -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

This will configure the TFC workspaces to the [CLI-driven] model and permit a human operator to execute terraform locally:

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/terraform/stacks/tfc
terraform init && terraform apply
```

[vcs-driven]: https://developer.hashicorp.com/terraform/cloud-docs/run/ui
[cli-driven]: https://developer.hashicorp.com/terraform/cloud-docs/run/cli
