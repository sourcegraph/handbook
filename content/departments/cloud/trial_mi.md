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

[Trial Managed Instance Issue Template](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request&template=new_managed_instance.md&title=New+Managed+Instance+request%3A+%5BCUSTOMER+NAME%5D)

Only for trials requested from [signup](https://signup.sourcegraph.com/):

[Trial managed instance request issue from signup](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request%2C+cloud-trial&template=new_trial_managed_instance.md&title=New+Trial+Managed+Instance+request%3A+%5Bdomain+name%5D)

> NOTE: The "cloud-trial" label added to the instance creation request GH issue from [signup](https://signup.sourcegraph.com/) is required to deliver for provisioning this instance within 1h SLA during the Cloud team office hours.

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

When a customer has decided to sign the deal, the instance requestor will create a [Managed Instance Convert Trial to Paid](index.md#managed-instance-requests) Github issue. This is important so that the doesn't get terminated after a time period as a trial instance would, and for cost attribution to trial vs production instances. Once the issue is raised, the [Cloud Team](././index.md#team) will:

- cd `deploy-sourcegraph-managed/CUSTOMER`
- modify GCP label '`instanceType: production`' in `config.yaml`
- follow [modify GCP customer label](./technical-docs/operations.md#modify-customer-specific-gcp-managed-instance-labels)

### Requesting to change the subdomain

Self-serve trial instances that come inbound through www.signup.sourcegraph.com and are [prequalified](../engineering/teams/growth/cloud-trial-operations.md#case-2-acme-corpcom-is-pre-qualified) have a random subdomain (eg. `xyz.sourcegraph.com`).
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

1. New [trial managed instance request issue](https://github.com/sourcegraph/customer/issues/new?assignees=&labels=team%2Fcloud%2C+mi%2Cmi%2Fnew-instance-request%2C+cloud-trial&template=new_trial_managed_instance.md&title=New+Trial+Managed+Instance+request%3A+%5Bdomain+name%5D) is open by CE or [Growth Team](../engineering/teams/growth/index.md) (DRI [Malo Marrec](../../team/index.md#sts=Malo%20Marrec))

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
   - need to set the license on the instance (the license key should be added to the issue, unless it is default PLG licence)
     - run `mi set-license -license-key "$LICENSE_KEY"` (for PLG trials flag `--plg-default` instead of `-license-key` should be used - will use shared PLG licence key)
   - obtain customer reset link via `mi reset-customer-password --email <customer admin email>` and paste it into the GitHub issue
   - when [giving customer access](./technical-docs/v1.1/mi1-1_creation_process.md#giving-customer-access) is done via comment in New Trial Managed Instance request issue, alert in `#cloud-notifications` should be closed.
   - (PLG triel only) add the `cloud-trial/instance-ready` label on the instance request issue. This will trigger an alert in #cloud-trial-alerts.

## Automated PLG pre-provisioned Managed Instance flow

For PLG trials (requested by [Signup](https://signup.sourcegraph.com/)), customers from [pre-qualified domain list](https://github.com/sourcegraph/console/blob/afd5ed5e9c24d16c26a6923487f64b0680585844/src/server/api/trial/verify/lib/pre-approved-domains.json) are automatically qualified and given an instance.

The flow:

1. Customer is requesting a trial via [Signup](https://signup.sourcegraph.com/)
2. Signup Application invokes actions on Instance from the pre-provisioned Managed Instance pool:

- creates admin user with customer email
- sends reset password to customer for given instance
- notifies [PLG GitHub Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_plg_create.yml) that instance was given to the customer

3. When notified via webhook, [PLG GitHub Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_plg_create.yml) invokes given steps:

- triggers new PLG trial Managed instance creation via [Managed Instance create GitHub Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_create.yml)
- resets initial admin token in an instance given to the customer
- adds customer email domain to GCP project labels
- opens PR in `deploy-sourcegraph-managed` repository

[Automated PLG Flow](https://excalidraw.com/#json=9j9s-5ByiRR4y5SdcF5F3,fYozCz5zwCEt6QoC_Y_Fww)

> When issue with automated flow occurs, fallback to [manual flow](#trial-managed-instance-creation-flow-manual)

### Automated PLG flow monitoring

As the flow is automated and webhook based, Slack notifications in `#cloud-notifications` are informing about:

- new PLG trial instances was created and sent to [Signup Application](https://signup.sourcegraph.com/) (stored in Signup database)
- PLG trial instance was given to the customer and was finalised (token was re-created and GCP label was added)
- PLG trial pool is below expected number (2 in the begining)

When any of Slack notifications fails:

- check the link in notitifcation to understand the issue

  - for [create new PLG trial](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_create.yml), it is safe to re-run action
  - for [finalise customer instance](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_plg_create.yml), given steps should be invoked
    - checkout main branch from `deploy-sourcegraph-managed`
    - invoke `mi --customer $CUSTOMER reset-init-token` (if not working, `gcloud config unset account` is needed)
    - invoke steps to update GCP label - [steps](https://github.com/sourcegraph/deploy-sourcegraph-managed/blob/main/.github/workflows/mi_plg_create.yml#L118)
    - open Pull Request
  - when pool is too small, pls verify why new instances are not created [here](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_create.yml)

All new PLG trials created by this flow can be listed via:

```sh
gcloud projects list --filter='name~sourcegraph-managed-src' --format="json(projectId,labels)"
```

where `emain-domain=unknown` means instance is not given to the customer yet.

## FAQ

1. How to check trial Managed Instances owned by Customer Engineer

- open [Github Action](https://github.com/sourcegraph/deploy-sourcegraph-managed/actions/workflows/mi_info.yml)
- click `Run workflow`
- choose `Instance type` -> `trial` (required)
- type `CE email responsible for Managed Instances` -> CE email (optional, without it will list all trials)

For other questions please use [Managed Instance FAQ](./index.md#faq)
