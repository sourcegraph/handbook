# Cloud Trial Managed Instances

Trial Managed Instances (aka PoC) are private, dedicated Sourcegraph instances provisioned and managed by Sourcegraph - [more](https://docs.sourcegraph.com/cloud).
The purpose is to provide free of charge Managed Instances for future customers for trial period (default is 30 days).

All process are same as for production Managed Instances (for paying customers):

- [creation process](./v1.1/mi1-1_creation_process.md)
- [upgrade process](./index.md#release-process)
- [security](./index.md#security)
- [monitoring](./index.md#monitoring-and-alerting)

## Difference from production instances

The difference from production Managed Instances:

1. During the trial period, Sourcegraph is covering all the infrastructure and licence costs.
1. Trial Managed Instances have GCP label `instance-type=trial`, which allows to filter them.
1. Trial Managed Instances are monitored for trial expiration period (default 30 days). When Trial Managed Instance expires, CE has to decide if:

- extend the trial period
- [convert to paying customer](#convert-trial-to-paying-customer)
- [teardown Trial Managed Instance](#teardown-trial-managed-instance)

## Request Trial Managed Instance

[Requesting Trial Managed Instance](../index.md#managed-instance-requests) process is similar to production one, with 2 differences:

- in New Managed Instance Template CE explicitly mark trial via `Is trial/PoC instance? true`
- CE adds Github label `cloud-trial` to New Managed Instance Github issue
  When New Trial Managed Instance is requested and `cloud-trial` Github label is added. [Cloud Team](../../cloud/index.md#team) is notified and will create Trial Managed Instances under [New Trial Create Request SLA](#new-trial-managed-instance-create-sla)

## New Trial Managed Instance create SLA

SLA for create new Trial Managed Instances is 1 hour within [Cloud Team](../../cloud/index.md#team) office hours - Monday to Friday - 7:00 AM GMT - 10:00 PM GMT.
If request is creatd outside of [Cloud Team](../../cloud/index.md#team) office hours, new Trial Instance SLA is 1 business day.

## Architecture

[Managed Instance architecture](./index.md)

## Trial Managed Instances sizes

For trial Managed Instances we support only 3 options:

- small
- medium
- large

Based on data provided by CE in New Managed Instance Request [Cloud Team](../../cloud/index.md#team) will provision instance with size matching the requirements. When customer sign the deal with Sourcegraph, size can be customised if needed.

[Technical details](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/util/cmd/mg_create.go#L67)

## Monitoring Trial Managed Instances

Trial Managed Instance are [automatically checked daily](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/trials_expire.yml) for expired trials. If Trial Managed Instance period exceeded 30 days, it will notify [Cloud Team](../../cloud/index.md#team) on Slack channel `#cloud-notifications`. [Cloud Team](../../cloud/index.md#team) will notify CE and ask for choosing one of the options:

- extend the trial period
- [convert to paying customer](#convert-trial-to-paying-customer)
- [teardown Trial Managed Instance](#teardown-trial-managed-instance)

## Convert trial to paying customer

When customer has decided to sign the deal, CE will inform [Cloud Team](../../cloud/index.md#team) via comment in Managed Instance Creation issue. [Cloud Team](../../cloud/index.md#team) will modify GCP label `instance-type=production`.

## Teardown Trial Managed Instance

when trial expires and customer do not wish to sign the deal, CE will open [Teardown Managed Instance request](../index.md#managed-instance-requests)

## FAQ

1. How to check trial Managed Instances owned by Customer Engineer

- open [Github Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_info.yml)
- click `Run workflow`
- choose `Instance type` -> `trial` (required)
- type `CE email responsible for Managed Instances` -> CE email (optional, without it will list all trials)

For other questions please use [Managed Instance FAQ](../index.md#faq)
