# Cloud Trial Managed Instances

Trial Managed Instances (aka PoC) are private, dedicated Sourcegraph instances provisioned and managed by Sourcegraph - [more](https://docs.sourcegraph.com/cloud).
The purpose is to provide free of charge Managed Instances for future customers for trial period (default is 30 days).

All process are same as for paid Managed Instances (for paying customers):

- [creation process](./technical-docs/v1.1/mi1-1_creation_process.md)
- [upgrade process](./technical-docs/index.md#release-process)
- [security](./technical-docs/index.md#security)
- [monitoring](./technical-docs/index.md#monitoring-and-alerting)

## Difference from paid instances

The difference from paid Managed Instances:

1. During the trial period, Sourcegraph is covering all the infrastructure and licence costs.
1. Trial Managed Instances have GCP label `instance-type=trial`, which allows to filter them.
1. Trial Managed Instances are monitored for trial expiration period (default 30 days). When Trial Managed Instance expires, instance requestor has to decide if:

- [extend the trial period](#extend-trial-managed-instance)
- [convert to paying customer](#convert-trial-to-paying-customer)
- [teardown Trial Managed Instance](#teardown-trial-managed-instance)

## Request Trial Managed Instance

[Requesting Trial Managed Instance](./index.md#managed-instance-requests) process is similar to paid one, with 2 differences:

- in New Managed Instance Template instance requestor explicitly mark trial via `Is trial/PoC instance? true`
- instance requestor adds Github label `cloud-trial` to New Managed Instance Github issue
  When New Trial Managed Instance is requested and `cloud-trial` Github label is added. [Cloud Team](././index.md#team) is notified and will create Trial Managed Instances under [New Trial Create Request SLA](#new-trial-managed-instance-create-sla)

> NOTE: The "cloud-trial" label added to the instance creation request GH issue is required to deliver for provisioning this instance within 1h SLA during the Cloud team office hours.

## New Trial Managed Instance create SLA

[SLA for trial Managed Instance creation](./index.md#slas-for-managed-instances)

## Architecture

[Managed Instance architecture](./technical-docs/index.md)

## Trial Managed Instances sizes

For trial Managed Instances we support only 3 options:

| Size   | Virtual Machine | CloudSQL instance |
| ------ | --------------- | ----------------- |
| small  | n2-highmem-4    | db-custom-1-4096  |
| medium | n2-highmem-8    | db-custom-2-8192  |
| large  | n2-highmem-16   | db-custom-4-26624 |

Based on data provided by instance requestor in New Managed Instance Request [Cloud Team](././index.md#team) will provision instance with size matching the requirements. When customer sign the deal with Sourcegraph, size can be customised if needed.

[Technical details](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/util/cmd/mg_create.go#L67)

## Monitoring Trial Managed Instances

Trial Managed Instance are [automatically checked daily](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/trials_expire.yml) for expired trials. If Trial Managed Instance period exceeded 30 days, it will notify [Cloud Team](././index.md#team) on Slack channel `#cloud-notifications`. [Cloud Team](././index.md#team) will notify instance requestor and ask for choosing one of the options:

- [extend the trial period](#extend-trial-managed-instance)
- [convert to paying customer](#convert-trial-to-paying-customer)
- [teardown Trial Managed Instance](#teardown-trial-managed-instance)

## Extend Trial Managed Instance

When trial expires and should be extended (by default 30 days), instance requestor will create `Managed Instance Trial Extend` Github issue.

## Convert trial to paying customer

When customer has decided to sign the deal, instance requestor will inform [Cloud Team](././index.md#team) via comment in Managed Instance Creation issue. [Cloud Team](././index.md#team) will modify GCP label `instance-type=production`.

## Teardown Trial Managed Instance

When trial expires and customer do not wish to sign the deal, instance requestor will open [Teardown Managed Instance request](./index.md#managed-instance-requests)

## FAQ

1. How to check trial Managed Instances owned by Customer Engineer

- open [Github Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_info.yml)
- click `Run workflow`
- choose `Instance type` -> `trial` (required)
- type `CE email responsible for Managed Instances` -> CE email (optional, without it will list all trials)

For other questions please use [Managed Instance FAQ](./index.md#faq)
