# Cloud Trial Managed Instances

Trial Managed Instances (aka PoC) are private, dedicated Sourcegraph instances provisioned and managed by Sourcegraph - [more](https://docs.sourcegraph.com/cloud).
The purpose is to provide free of charge Managed Instances for future customers for a trial period (default is 30 days).

All processes are the same as for paid Managed Instances (for paying customers):

- [creation process](./technical-docs/v1.1/mi1-1_creation_process.md)
- [upgrade process](./technical-docs/index.md#release-process)
- [security](./technical-docs/index.md#security)
- [monitoring](./technical-docs/index.md#monitoring-and-alerting)

## Difference from paid instances

The difference from paid Managed Instances:

1. During the trial period, Sourcegraph is covering all the infrastructure and licence costs.
1. Trial Managed Instances have the GCP label `instance-type=trial`, which allows to filter them.
1. Trial Managed Instances are monitored for trial expiration period (default 30 days). When a Trial Managed Instance expires, the instance requestor has to decide to:

- [extend the trial period](#extend-trial-managed-instance)
- [convert to paying customer](#convert-trial-to-paying-customer)
- [teardown the Trial Managed Instance](#teardown-trial-managed-instance)

## Request Trial Managed Instance

The [requesting Trial Managed Instance](./index.md#managed-instance-requests) process is similar to paid one, except it's raised by opening a [trial managed instance request issue](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request%2C+cloud-trial&template=new_trial_managed_instance.md&title=New+Trial+Managed+Instance+request%3A+%5Bdomain+name%5D)

> NOTE: The "cloud-trial" label added to the instance creation request GH issue is required to deliver for provisioning this instance within 1h SLA during the Cloud team office hours.

## New Trial Managed Instance create SLA (since 27th of September 2022)

[SLA for trial Managed Instance creation](./index.md#slas-for-managed-instances)

## Architecture

[Managed Instance architecture](./technical-docs/index.md)

## Trial Managed Instances sizes

Trial managed instances default to **small** and reasonable defaults (see issue template):

| Size  | Virtual Machine | CloudSQL instance |
| ----- | --------------- | ----------------- |
| small | n2-highmem-4    | db-custom-1-4096  |

[Technical details](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/util/cmd/mg_create.go#L67)

## Monitoring Trial Managed Instances

Trial Managed Instance are [automatically checked daily](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/trials_expire.yml) for expired trials. If Trial Managed Instance period exceeded 30 days, it will notify [Cloud Team](././index.md#team) on Slack channel `#cloud-notifications`. [Cloud Team](././index.md#team) will notify instance requestor and ask for choosing one of the options:

- [extend the trial period](#extend-trial-managed-instance)
- [convert to paying customer](#convert-trial-to-paying-customer)
- [teardown Trial Managed Instance](#teardown-trial-managed-instance)

## End of trial

After 30 days of trial, the [Growth Team](../engineering/teams/growth/index.md) (DRI [Malo Marrec](../../team/index.md#sts=Malo%20Marrec)) will be responsible for making sure one of the three following next step is triggered, after consultation with the account owner (if any):

- extend trial managed instance
- convert trial to paid customer
- teardown the managed instance

Picking one of those three next steps is due with 5 days after the end of the 30 day trial period. In the future, this process will be automated.

## Extend Trial Managed Instance

When trial expires and should be extended (by default 30 days), the instance requestor will create [Managed Instance Trial Extend](index.md#managed-instance-requests) Github issue. [Cloud Team](././index.md#team) will add `trialAdditionalDays` to customer `config.yaml` to ensure extended trial period is monitored.

## Convert trial to paying customer

When customer has decided to sign the deal, instance requestor will create [Managed Instance Convert Trial to Paid](index.md#managed-instance-requests) Github issue. [Cloud Team](././index.md#team) will modify GCP label `instance-type=production`.

## Teardown Trial Managed Instance

When trial expires and customer do not wish to sign the deal, instance requestor will open [Teardown Managed Instance request](./index.md#managed-instance-requests)

## Trial Managed Instance creation flow

1. New [trial managed instance request issue](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request%2C+cloud-trial&template=new_trial_managed_instance.md&title=New+Trial+Managed+Instance+request%3A+%5Bdomain+name%5D) is open by CE or [Growth Team](../engineering/teams/growth/index.md) (DRI [Malo Marrec](../../team/index.md#sts=Malo%20Marrec))
2. Based on the time of issue creation:

   - Within Cloud Team working hours (`Monday to Friday - 7:00 AM GMT - 10:00 PM GMT`)
     - [GitHub Integration](https://sourcegraph.app.opsgenie.com/settings/integration/edit/GitHub/f69b65ee-8cbe-4557-8ed8-13b294c45667?teamId=9ec2825d-38da-4e2b-bdec-a0c03d11d420) will send alert to [cloud-trial-creator Opsgenie route](https://sourcegraph.app.opsgenie.com/teams/dashboard/9ec2825d-38da-4e2b-bdec-a0c03d11d420/main)
     - This alert will notify Cloud Team member, who should Acknowledge the alert and proceed to p.3
   - Outside of Cloud Team working hours
     - Cloud Team will receive new Trial Managed Instance request via email and on-call person should proceed to p.3 withing 1 working day

3. Create Trial Managed Instance

   Trial Managed Instance should be created according to the [Managed Instance create process](./technical-docs/v1.1/mi1-1_creation_process.md).

   Important:

   - Instance type should be trial
   - Instance size should be small
   - Customer name has to be max 10 characters (GCP project name limit - `sourcegraph-managed-SLUG` cannot execeed 30 characters). If customer SLUG has more characters:
     - set `customer endpoint` to `SLUG.sourcegraph.com`
     - set `customer` with SLUG trimmed to 10 characters
   - Other parameters should be used from New Trial Managed Instance request.

4. Finalisation

   - A Cloud team member needs to sign in to the instance through basic authentication to apply the license key in order to have the SSO option available. Credentials of the default admin users of each instance could be found in the GSM of the respective GCP projects.
   - When [giving customer access](./technical-docs/v1.1/mi1-1_creation_process.md#giving-customer-access) is done via comment in New Trial Managed Instance request issue, alert in `#cloud-notifications` should be closed.
   - Also add the `cloud-trial/instance-ready` label on the instance request issue. This will trigger an alert in #cloud-trial-alerts.

## FAQ

1. How to check trial Managed Instances owned by Customer Engineer

- open [Github Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_info.yml)
- click `Run workflow`
- choose `Instance type` -> `trial` (required)
- type `CE email responsible for Managed Instances` -> CE email (optional, without it will list all trials)

For other questions please use [Managed Instance FAQ](./index.md#faq)
