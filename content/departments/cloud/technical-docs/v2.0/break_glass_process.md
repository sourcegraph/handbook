# Cloud Break Glass Process

In the event of emerency, we will need to bypass the usual operation process and restore custom instances in a timely manner.

What events qualify? For example:

- GCP zonal outage and we may need to perform manual failover
- Customer instance is corrupted or deleted somehow - disaster recovery

Make sure you are following our [incident playbook](../../../engineering/dev/process/incidents/index.md) to handle those events.

## How to gain escalated permissions

Use Entitle to assume permission as usual, if it doesn't work, use `/break-glass` slash command on Slack. If Slack is down, page Security Support or Security EM for emergency.

## Break instance out from the control plane

When performing disruptive manual change, you should extract the instance from control plane management.

If `cloud.sourcegraph.com/control-plane-mode=true` is in `config.yaml`, follow the `Extract instance from control plane (break glass)` section from the Ops Dashboard of the instance, go/cloud-ops

## How to apply terraform

We use Terraform Cloud as a terraform state and remote execution platform using the [VCS-driven] model.

During daily operation, human operator usually shouldn't be running terraform manually. However, this should be permited during incident.

Update the `config.yaml` with the following:

```yaml
apiVersion: sourcegraph.com/v1
kind: SourcegraphCloud
metadata:
  name: <>
spec:
  debug:
    tfcRunsMode: cli
```

Then run the command below to generate the updated terraform modules:

```sh
mi2 generate -e $ENVIRONMENT --domain $DOMAIN --slug $SLUG
```

This will configure the TFC workspaces to the [CLI-driven] model and permit a human operator to execute terraform locally:

```sh
cd environments/$ENVIRONMENT/deployments/$INSTANCE_ID/terraform/stacks/tfc
terraform init && terraform apply
```

## Wrapping up

If `cloud.sourcegraph.com/control-plane-mode=true` is in `config.yaml`, follow the `Backfill instance into control plane` section from the Ops Dashboard of the instance, go/cloud-ops, when you're done.

[vcs-driven]: https://developer.hashicorp.com/terraform/cloud-docs/run/ui
[cli-driven]: https://developer.hashicorp.com/terraform/cloud-docs/run/cli
