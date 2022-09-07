# Cloud Trial Managed Instances

Trial Managed Instances (aka PoC) are private, dedicated Sourcegraph instances provisioned and managed by Sourcegraph - [more](https://docs.sourcegraph.com/cloud).
The purpose is to provide free of charge Managed Instances for future customers for trial period (default is 30 days).

All process are same as for production Managed Instances (for paying customers):

- [creation process](./v1.1/mi1-1_creation_process.md)
- [upgrade process](./index.md#release-process)
- [security](./index.md#security)
- [monitoring](./index.md#monitoring-and-alerting)

The difference from production Managed Instances:

1. During the trial period, Sourcegraph is covering all the infrastructure and licence costs.
1. Trial Managed Instances have GCP label `instance-type=trial`, which allows to filter them.
1. Trial Managed Instances are monitored for trila expiration period (default 30 days). When Trial Managed Instance expires, CE has to decide if:

- extend the trial period
  or
- [convert to paying customer](#convert-trial-to-paying-customer)
  or
- [teardown Trial Managed Instance](#teardown-trial-managed-instance)

## Request Trial Managed Instance

[Requesting Trial Managed Instance](../index.md#managed-instance-requests) process is similar to production once, with 2 differences:

- in New Managed Instance Template CE explicitly sign trial via `Is trial/PoC instance? true`
- CE adds Github label `cloud-trial` to New Managed Instance Github issue
  When New Trial Managed Instance is requested and `cloud-trial` Github label is added, [Cloud Team]() is notified and will create Trial Managed Instances under [New Trial Create Request SLA]()

## New Trial Managed Instance create SLA

SLA for create new Trial Managed Instances is XX hours inside [Cloud Team]() operating hours - from XX-YY UTC.
If request is creatd outside of operating hours, new Trial Instance will be created under SLA in first working day following request day.

## Architecture

[Managed Instance architecture](./index.md)

## Monitoring Trial Managed Instances

Trial Managed Instance are [automatically checked daily](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/trials_expire.yml) for expired trials. If Trial Managed Instance period exceeded 30 days, it will notify [Cloud Team]() on Slack channel `#`will notify CE and ask for choosing one of the options:

- extend the trial period
  or
- [convert to paying customer](#convert-trial-to-paying-customer)
  or
- [teardown Trial Managed Instance](#teardown-trial-managed-instance)

## Convert trial to paying customer

## Teardown Trial Managed Instance

when trial expires and customer do not wish to sign the deal, CE will open [Teardown Managed Instance request](../index.md#managed-instance-requests)
