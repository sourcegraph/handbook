# Cloud Trial Managed Instances

Trial Managed Instances (aka PoC) are private, dedicated Sourcegraph instances provisioned and managed by Sourcegraph - [more](https://docs.sourcegraph.com/cloud).
The purpose is to provide free of charge Managed Instances for future customers for a trial period (default is 30 days).

All processes are the same as for paid Managed Instances (for paying customers):

- [creation process](./technical-docs/v1.1/mi1-1_creation_process.md)
- [upgrade process](./technical-docs/index.md#release-process)
- [security](./technical-docs/index.md#security)
- [monitoring](./technical-docs/index.md#monitoring-and-alerting)
- [list trials](./technical-docs/index.md#list-trials)

## Difference from paid instances

The difference from paid Managed Instances:

1. During the trial period, Sourcegraph is covering all the infrastructure and licence costs.
1. Trial Managed Instances have the GCP label `instance-type=trial`, which allows to filter them.
1. Trial Managed Instances are monitored for trial expiration period (default 30 days). When a Trial Managed Instance expires, the instance requestor has to decide to:

- [extend the trial period](#extend-trial-managed-instance)
- [convert to paying customer](#convert-trial-to-paying-customer)
- [teardown the Trial Managed Instance](#teardown-trial-managed-instance)

## Cloud Trial Requests

Due to the high costs of infrastructure & human resources, along with the low activation rates in the self-service cloud trial experiment, we are no longer automatically provisioning cloud trial instances.
Effective February 1, 2023, SDRs are responsible for the initial follow up and qualification for cloud trial requests. SDRs should seek to schedule an introduction meeting between the prospective Sourcegraph cloud customer and the Sourcegraph account team (appropriate AE & CE) to qualify the technical and security requirements. If, following that conversation, there is mutual fit for a Sourcegraph cloud trial, CEs are responsible for requesting the trial via the workflow documented below:

1. Prospect fills out web form requesting trial at [about.sourcegraph.com/get-started](https://about.sourcegraph.com/get-started?t=enterprise).
2. Request is captured, and lead is generated and tagged with appropriate campaign info (PR - Trial - Cloud - 9.27.22).
3. If lead is from AE-owned/named account, lead is routed to the Outbound SDR owner of that account.
4. If lead is from unnamed account, lead is routed to Inbound SDR.
5. SDR lead owner follows up with lead to qualify interest and schedule introductory call with appropriate AE & CE.
6. If it is determined that a trial managed instance is appropriate for the prospect, the CE requests a trial via the [Trial Managed Instance Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request&template=new_managed_instance.md&title=New+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)

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

## Extend Trial Managed Instance

When trial expires and should be extended (by default 30 days), the instance requestor will create [Managed Instance Trial Extend](index.md#managed-instance-requests) GitHub issue. [Cloud Team](././index.md#team) will add `trialAdditionalDays` to customer `config.yaml` to ensure extended trial period is monitored.

## Convert trial to paying customer

When a customer has decided to sign the deal, the instance requestor will create a [Managed Instance Convert Trial to Paid](index.md#managed-instance-requests) GitHub issue. This is important so that the doesn't get terminated after a time period as a trial instance would, and for cost attribution to trial vs production instances. Once the issue is raised, the [Cloud Team](././index.md#team) will:

- cd `deploy-sourcegraph-managed/CUSTOMER`
- modify GCP label '`instanceType: production`' in `config.yaml`
- follow [modify GCP customer label](./technical-docs/operations.md#modify-customer-specific-gcp-managed-instance-labels)

### Requesting to change the subdomain

Upon conversion (or potentially earlier), you can request to change the domain name to a vanity subdomain (eg. `acme-corp.sourcegraph.com`). To do so, raise a [Change cloud instance subdomain request](https://github.com/sourcegraph/customer/issues/new/choose).

Note that changing the subdomain will require the admin to:

- reconfigure the auth provider (if using SSO). Auth will be broken until they do that.
- reconfigure the auth provider (if using permission syncing). Repository syncing will be broken until they do that.
- reconfigure webhooks if they've set those up.
- it will also break all hardcoded links to their sourcegraph instance
- cause some brief downtime

Be sure to set expectations with the site admin ahead of raising the issue and indicate the configuration steps required.

## Teardown Trial Managed Instance

When trial expires and customer do not wish to sign the deal, instance requestor will open [Teardown Managed Instance request](./index.md#managed-instance-requests)

## Trial Managed Instance creation flow (manual)

1. New [trial managed instance request issue](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request%2C+cloud-trial&template=new_trial_managed_instance.md&title=New+Trial+Managed+Instance+request%3A+%5Bdomain+name%5D) is opened by CE.

2. Cloud Team will receive new Trial Managed Instance request via email and on-call person should proceed to p.3 within 1 working day

3. Create Trial Managed Instance

   Trial Managed Instance should be created according to the [Managed Instance create process](./technical-docs/v1.1/mi1-1_creation_process.md).

   Important:

   - Instance type should be trial
   - Instance size should be small
   - Customer name has to be max 10 characters (GCP project name limit - `sourcegraph-managed-SLUG` cannot execeed 30 characters). If customer SLUG has more characters:
     - set `customer endpoint` to `SLUG.sourcegraph.com`
     - set `customer` with SLUG trimmed to 10 characters
   - Other parameters should be used from New Trial Managed Instance request.

4. Finalisation (Cloud Team member)

   - checkout `<CUSTOMER>/create-instance` branch in`deploy-sourcegraph-managed` repository
   - need to set the license on the instance (the license key should be added to the issue)
     - run `mi set-license --license-key "$LICENSE_KEY"`
   - when [giving customer access](./technical-docs/v1.1/mi1-1_creation_process.md#giving-customer-access) is done via comment in New Trial Managed Instance request issue, alert in `#cloud-notifications` should be closed.
   - you can check if the password reset email was sent using SMTP provider [dashboard](https://app.eu.sparkpost.com/reports/message-events)

## FAQ

1. How to check trial Managed Instances owned by Customer Engineer

- open [GitHub Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_info.yml)
- click `Run workflow`
- choose `Instance type` -> `trial` (required)
- type `CE email responsible for Managed Instances` -> CE email (optional, without it will list all trials)

For other questions please use [Managed Instance FAQ](./index.md#faq)
