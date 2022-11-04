# Cloud trial operations

From 2022-09-27, Sourcegraph Cloud will be the default way of deploying Sourcegraph. All the call to actions (CTAs) on Sourcegraph sites and posts will let users request a 30-day cloud trial. This page describes the workflow and expectations from each team to make sure those trial users get a great experience. It also describes what the role of each team will be in the longer term.

**Note: this page is only for trials that come in inbound through signup.sourcegraph.com. Trials requested directly by Customer Engineers are not affected.**

## Context

Cloud is the default way of deploying Souregraph, but there are some limits to delivering a cloud trial instance today.

- There is a cap on the number of instances we can managed at any given time ([SLA](../../../cloud/index.md#slas-for-managed-instances)). Therefore, when someone requests an instance, we have to qualify them to make sure that we have capacity and that a cloud instance is the best option to meet their needs.
- Cloud instances take some time to provision ([SLA](../../../cloud/index.md#slas-for-managed-instances)), that makes it so signing up for a cloud instance is not instant.
- The workflow for qualifying a user that requests a trial instance, provisioning the instance, handing it off to the requesting user, and helping them onboard is very manual. This last bit will be automated in the short term (next few months).

## Expectations from stakeholders

Here's how every team at Sourcegraph contributes to the trial workflow in the short term, and in the long term. If you want to jump to the details of the piepeline, jump to [workflow](#workflow).

### Growth marketing and SDRs

#### Now

- Drive qualified traffic to the signup page
- SDRs: see the [qualification workflow](#Trial-request-qualification-workflow)
- When a CE call request is received through chilipiper, makes sure a CE gets assigned

### Product growth

#### Now

- After a cloud instance trial request is qualified, raise instance provisioning requests to the cloud team
- When the instance is provisioned, hand it off to the user and make sure they can get started
- 5 days max after the 30-day trial ends, make sure a decision is made to [extend, convert, or terminate](../../../cloud/trial_mi.md#cloud-trial-managed-instances) the trial
- monitor metrics for product qualified leads (PQLs)
- (those are just operational tasks, the product growth team is also working on its usual produc team stuff)

#### Long term

- Automate it all!
- Also see our [broader strategy](../../../../strategy-goals/strategy/growth-team/index.md).

### Customer Engineering (CE)

#### Now

- The onboarding [email](https://docs.google.com/document/d/1k_cunJ4wSj3tl4K7lNiRTd_JERCGoiSWckpVBSI5rfc/edit) sent out when we hand off a trial instance to a trial user will contain a link for them to request a 30-min session with a CE. This is an opt-in, session to answer questions on setup / config if they have them, and offer a demo if needed. This will be booked through chilipiper, and SDRs will make sure CEs get assigned.
- When a trial user becomes a Product Qualified Lead (PQL), it is assigned to an account executive (who will engage CE). This is the usual process for any opportunity.

#### Long term

Long term, we may create more specialised customer success roles to drive high leverage ways to help cloud trial users achieve success. This could include:

- checking-in with trial users regularly
- webinars and 1-to-many sessions
- working with product growth to build self-serve ways to get to value, and address common issues

### Customer Support (CS)

- Cloud trial users that ecounter issues can use our discord, or send an email to support@sourcegraph.com. The support team is expected to address those issues within normal [SLAs](../../../ce-support/support/index.md#sts=SLAs).
- If a user tries to join an existing instance and is blocked, they will request help on support@sourcegraph.com. The support team should reach out to the user and work with #growth to make sure the instance admin knows that user has requested an invite and is blocked. This will be automated.
- If the signup form fails, an email will be sent to support@sourcegraph.com as a stop gap. The support team should reach out to the user and work with #growth to make sure their trial instance gets provisioned. This is a failsafe and shouldn't happen.

### Account Executives

- Engage PQLs!
- We **do not** engage with Cloud trials for commercial discussions, unless they're a Strategic account or are identified as PQLs

### Data and Analytics

- Maintain and/or contribute to the dashboards, data flows and both product and marketing growth iterations. See the [dashboard documentation](https://docs.google.com/document/d/1zwSu0Kyug6VIB6Pm_L5Oprt5FPH8ky8kWDLGt64ryA8/edit) for a list of dashboards and sources.

## Workflow

[Recording of Walkthrough with Malo and Eric](https://drive.google.com/file/d/1tW0NmtW0Vu3UBnRhJnnqKRK0EE5M6_Gr/view?usp=sharing)

## Dashboards

- [Lead pipeline](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000004tI9EAI/view?queryScope=userFolders) (Salesforce)
- [Main lead/funnel/ongoing trial dashboard (Looker)](https://sourcegraph.looker.com/dashboards/341)
  - Ongoing trials
  - Traffic -> lead -> trial instances
  - Lead status breakdown
- [Amplitude instance overview](https://analytics.amplitude.com/sourcegraph/dashboard/isnxhtb?source=workspace)
  - Event-level data from trial instances
- [Server instance overview (Looker)](https://sourcegraph.looker.com/dashboards/167?Unique+Server+ID=Netflix&Salesforce+Unique+ID=)
  - The same dashboard you’re probably used to; cloud trials are still Sourcegraph instances and send pings, so we have the same aggregated data as any on-prem/managed instance

### Trial request qualification workflow

- The workflow starts when a user requests an instance on [signup.sourcegraph.com](http://signup.sourcegraph.com). When that happens:
- A new lead is created in salesforce, in the `PR - Trial - Cloud - 9.27.22` campaign, and an alert is posted in #cloud-trial-alerts
- **A SDR** (`@Daniel Gwyn` or `@Casi Neff`) needs to qualify this request against this [qualification criteria](https://docs.google.com/document/d/1aUfXlt5AGwhG7tIF8dPRmsLhFL8TuvPKFvXlOsxgFws/edit#bookmark=id.gsb6q3dp43wu) AND check if there is alredy an instance on the domain of the requesting user's email. For example, if `bob@acme-corp.com` requests an instance, we should first check if there's already a `acme-corp.sourcegraph.com`. For now, **all trial requests will be qualified by the inbound SDR team**.

  - If the request is qualified **and** there's **no** instance on the domain of the requesting user's email:

    - set the lead status to `Approved trial`
    - if the requesting user is from an existing customer or on the [strat 100](https://docs.google.com/spreadsheets/d/1JFHacGYDIBd4pMSrKC3QV25YFkK2yBfM0dMd9An2sGE/edit#gid=637855099) list, notify the owning Account Executive. If the lead is from an existing account, the AE will be aded to the lead automatically.
    - create a slack channel called `#cloud-trial-<companyname>` and add the owning AE (if any), CE (if any), Greg Bastis, Nick Gage, Andrew Reed, Eric Brody-Moore and Malo Marrec
    - do **not** convert the lead. This will only happen if the trial [becomes a PQL](#pql-qualification-workflow)
    - If the request is **qualified and then unqualified** make sure to quickly comment in [the linked issue](https://github.com/sourcegraph/customer/issues) that the managed instance no longer needs to provisioned and close the issue, and alert the team in #cloud so they see it

    - 🟢 your job as a SDR is done!
    - this will trigger an alert in #cloud-trial-alerts channel and start the [Instance provisioning and hand-off workflow](#instance-provisioning-and-hand-off-workflow)

- If there **is** already an instance for this company, which we know if there is an instance where the admin has the same email domain as the requesting user (eg. there is already `my-acme.sourcegraph.com`, with admin `admin@acme.com`, and a new user `bob@acme.com` requests an instance)
  - 🟢 your job as a SDR is done! Nothing to do!
  - the user will be automatically redirected to the instance(s), and a notification will be sent in slack.
  - the lead status will automatically be set to "Instance Already in Trial"
  - if SSO is setup on that instance, the user can log in. Otherwise, they need to contact their admin. We are building a way for them to request access from the instance admin (see [#42981](https://github.com/sourcegraph/sourcegraph/issues/42981)).
- If the request is **not qualified**:
  - set the lead status to `disqualified`
  - set the lead substatus to `Does not meet trial criteria`
  - 🟢 your job as a SDR is done!
  - this will send an alert in #cloud-trial-alerts and automatically send an [email](https://docs.google.com/document/d/1k_cunJ4wSj3tl4K7lNiRTd_JERCGoiSWckpVBSI5rfc/edit) to the user to let them know that we are experiencing high demand and can't get them an instance at the moment.

This workflow is very manual. We are working hard to automate all of this to improve the user experience massively, and reduce the operational burden. Come [join us](index.md)! All this workflow is powered by salesforce, and [Zapier automation](https://zapier.com/app/zaps/folder/1368159).

Note: all automated email will automatically appear in salesforce (through Malo's account).

### Instance provisioning and hand-off workflow

`@Eric Brody-Moore ` and `@malo` will be monitoring the #cloud-trial-alerts for qualified requests. When a request is sent, they will:

1. self-assign the request by replying "I'm taking it" to the alert
1. raise a trial instance request with the cloud team (this step will be automated soon), which will start the [cloud instance creation flow](../../../cloud/trial_mi.md#trial-managed-instance-creation-flow)

- you will need to [create an issue in the accounts repository](https://github.com/sourcegraph/accounts/issues) to link in the managed instance request issue
- create a license, to be set by the cloud team when they provision the license, that:
- is attached to a user called `customer-name-plg-trial`
- has 1,000 users
- has a **30-day limit**
- has the following tags ([definition of tags](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@main/-/blob/enterprise/internal/licensing/data.go)): `plan:enterprise-1`,`private-extension-registry`,`remote-extensions-allow-disallow`,`monitoring`,`true-up`, `trial`, `plg-trial`. If there is no Salesforce account ID associated with the user, you may leave this blank when creating a user within the license creation flow

1. when the instance is ready
   1. send the admin an onboarding [email](https://docs.google.com/document/d/1k_cunJ4wSj3tl4K7lNiRTd_JERCGoiSWckpVBSI5rfc/edit), **cc-ing the AE and CE** assigned to the account with
      1. an initial password reset link to the instance following [this workflow](../../../cloud/#faq-how-do-i-generate-a-password-reset-link-for-customer-admin)
      2. a link to the onboarding checklist
      3. a link to schedule time with a customer engineer (CE)
   1. set the lead status in salesforce to `Trial Instance Handed Off`
   1. Update the [server_installers_to_company](https://docs.google.com/spreadsheets/d/1Y2Z23-2uAjgIEITqmR_tC368OLLbuz12dKjEl4CMINA/edit#gid=0) spreadsheet so we can map this instance with the account's name (and corresponding Salesforce data). Use the `Company` Salesforce field if it's filled in.

After that workflow, a (manual for now) admin onboarding email campaign will start.

### When trial users schedule time with us

- SDRs will reach out to the CE owner and schedule some time
- we will keep the discussion technical, and focused on onboarding
- the inbound SDR that owns the lead will create a #cloud-trial-companyname channel, if it doesn't exist yet, and add the AE, CE, Greg Bastis, Nick Gage, Andrew Reed, Eric Brody-Moore and Malo Marrec.

### Early termination

If instances never get used at all by the initial admin, which we can define (for now) as "no codehost setup, and no other user joined", we will consider them for early termination.

- 10 days after the initial hand-off, if the instance is not setup, we'll send a [warning email](https://docs.google.com/document/d/1k_cunJ4wSj3tl4K7lNiRTd_JERCGoiSWckpVBSI5rfc/edit#heading=h.vclmg9kbemxu)
- 15 days (10+5) after the initial hand-off, if we don't hear back or the instance status hasn't changed, we'll terminate the instance, and send [an email](https://docs.google.com/document/d/1k_cunJ4wSj3tl4K7lNiRTd_JERCGoiSWckpVBSI5rfc/edit#heading=h.vclmg9kbemxu)

### PQL qualification workflow

The product growth team will be monitoring analytics for trial instances that have usage patterns that show signs that they could convert into a customer: Product Qualified Leads (PQL).

There is a [database query](https://console.cloud.google.com/bigquery/scheduled-queries/locations/us/configs/637002dd-0000-2e61-8eec-582429c887d4/runs?project=telligentsourcegraph) that monitors for the PQL criteria (over 50 users, over 10 MAUs, or a single user that has used Sourcegraph at least 5 times in a 7 day period). When a trial is signaled as hitting the criteria a PQL:

- [Zapier triggers a slack message](https://zapier.com/editor/171548143/published) into #sales-ops prompting someone to change the lead status in Salesforce
- the lead status will be changed to `PQL` in Salesforce, which will trigger an alert in #product-qualified-leads, to be picked up by an Account Executive. This is powered by a [zap](https://zapier.com/editor/169193004/published).
- the inbound SDR that owns the lead will create a #cloud-trial-companyname channel, if it doesn't exist yet, and add the AE, CE, Greg Bastis, Nick Gage, Andrew Reed, Eric Brody-Moore and Malo Marrec.

This will be manually triggered by `@Eric Brody-Moore` for now. See the qualification [here](https://docs.google.com/document/d/1aUfXlt5AGwhG7tIF8dPRmsLhFL8TuvPKFvXlOsxgFws/edit#bookmark=id.qsm8u5uvpib8).
