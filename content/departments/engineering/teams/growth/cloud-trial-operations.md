# Cloud trial operations

From 2022-09-27, Sourcegraph Cloud will be the default way of deploying Sourcegraph. All the call to actions (CTAs) on Sourcegraph sites and posts will let users request a 30-day cloud trial. This page describes the workflow and expectations from each team to make sure those trial users get a great experience. It also describes what the role of each team will be in the longer term.

## Context

Cloud is the default way of deploying Souregraph, but there are some limits to delivering a cloud trial instance today.

- There is a cap on the number of instances we can managed at any given time ([SLA](../../../cloud/index.md#slas-for-managed-instances)). Therefore, when someone requests an instance, we have to qualify them to make sure that we have capacity and that a cloud instance is the best option to meet their needs.
- Cloud instances take some time to provision ([SLA](../../../cloud/index.md#slas-for-managed-instances)), that makes it so signing up for a cloud instance is not instant.
- The workflow for qualifying a user that requests a trial instance, provisioning the instance, handing it off to the requesting user, and helping them onboard is very manual. This last bit will be automated in the short term (next few months).

## Workflow

[Recording of Walkthrough with Malo and Eric](https://drive.google.com/file/d/1tW0NmtW0Vu3UBnRhJnnqKRK0EE5M6_Gr/view?usp=sharing)

### Trial request qualification workflow

- The workflow starts when a user requests an instance on [signup.sourcegraph.com](http://signup.sourcegraph.com). When that happens:
- A new lead is created in salesforce, in the `PR - Trial - Cloud - 9.27.22` campaign, and an alert is posted in #cloud-trial-alerts.
- **A SDR** (`@Daniel Gwyn` or `@Casi Neff`) needs to qualify this request against this [qualification criteria](https://docs.google.com/document/d/1aUfXlt5AGwhG7tIF8dPRmsLhFL8TuvPKFvXlOsxgFws/edit#bookmark=id.gsb6q3dp43wu) AND check if there is alredy an instance on the domain of the requesting user's email. For example, if `bob@acme-corp.com` requests an instance, we should first check if there's already a `acme-corp.sourcegraph.com`.
  - If the request is qualified **and** there's **no** instance on the domain of the requesting user's email:
    - set the lead status to `Approved trial`
    - if the requesting user is from an existing customer or on the [strat 100](https://docs.google.com/spreadsheets/d/1JFHacGYDIBd4pMSrKC3QV25YFkK2yBfM0dMd9An2sGE/edit#gid=637855099) list, notify the owning Account Executive. Unassigned accounts will be assigned round-robin.
    - create a slack channel called `#cloud-trial-<companyname>` and add the owning AE, CE, Greg Bastis, Nick Gage, Andrew Reed, Eric Brody-Moore and Malo Marrec
    - 🟢 your job as a SDR is done!
    - this will trigger an alert in #cloud-trial-alerts channel and start the [Instance provisioning and hand-off workflow](#instance-provisioning-and-hand-off-workflow)
- If there **is** already an instance on the domain of the requesting user's email
  - set the lead status to `disqualified`
  - set the lead substatus to `Domain Already in Trial`
  - 🟢 your job as a SDR is done!
  - this will send an alert in #cloud-trial-alerts and automatically send an [email](https://docs.google.com/document/d/1k_cunJ4wSj3tl4K7lNiRTd_JERCGoiSWckpVBSI5rfc/edit) to the user to let them know about the pre-existing instance.
  - if SSO is setup on that instance, the user can log in. If not, they can't. Therefore, `@malo` or `@Eric Brody-Moore` will email the site-admin to let them know someone tried to join. (This is a quick fix until there is a "request an invite" system).
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
2. raise a trial instance request with the cloud team (this step will be automated soon), which will start the [cloud instance creation flow](../../../cloud/trial_mi.md#trial-managed-instance-creation-flow)
3. when the instance is ready
   1. set a license on the instance with 1,000 users, a **30-day limit**, and the following tags ([definition of tags](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@main/-/blob/enterprise/internal/licensing/data.go)): `plan:enterprise-1`,`private-extension-registry`,`remote-extensions-allow-disallow`,`monitoring`,`true-up`, `trial`.
   2. send the admin an onboarding [email](https://docs.google.com/document/d/1k_cunJ4wSj3tl4K7lNiRTd_JERCGoiSWckpVBSI5rfc/edit), **cc-ing the AE and CE** assigned to the account with
      1. an initial password reset link to the instance
      2. a link to the onboarding checklist
      3. a link to schedule time with a customer engineer (CE)
   3. set the lead status in salesforce to `Trial Instance Handed Off`
   4. Update the [server_installers_to_company](<[url](https://docs.google.com/spreadsheets/d/1Y2Z23-2uAjgIEITqmR_tC368OLLbuz12dKjEl4CMINA/edit#gid=0)>) spreadsheet so we can map this instance with the account's name (and corresponding Salesforce data). Use the `Company` Salesforce field if it's filled in.

After that workflow, a (TBD) admin onboarding email campaign will start.

### PQL qualification workflow

The product growth team will be monitoring analytics for trial instances that have usage patterns that show signs that they could convert into a customer: Product Qualified Leads (PQL). For now, the criteria is best judgement and the workflow is manual, but this will be clearly defined and automated in the future.

When a trial becomes a PQL, the lead status will be changed to `PQL` in Salesforce, which will trigger an alert in #product-qualified-leads, to be picked up by an Account Executive.

This will be manually triggered by `@Eric Brody-Moore` for now. See the qualification [here](<[url](https://docs.google.com/document/d/1aUfXlt5AGwhG7tIF8dPRmsLhFL8TuvPKFvXlOsxgFws/edit#bookmark=id.qsm8u5uvpib8)>)

## Expectations from stakeholders

Here's how every team at Sourcegraph contributes to the trial workflow in the short term, and in the long term.

## Growth marketing and SDRs

#### Now

- Drive qualified traffic to the signup page
- SDRs: see the [qualification workflow](#Trial-request-qualification-workflow)
- When a CE call request is received through chilipiper, makes sure a CE gets assigned

# Product growth

#### Now

- After a cloud instance trial request is qualified, raise instance provisioning requests to the cloud team
- When the instance is provisioned, hand it off to the user and make sure they can get started
- 5 days max after the 30-day trial ends, make sure a decision is made to [extend, convert, or terminate](../../../cloud/trial_mi.md/#cloud-trial-managed-instances) the trial
- monitor metrics for product qualified leads (PQLs)
- (those are just operational tasks, the product growth team is also working on its usual produc team stuff)

#### Long term

- Automate it all!
- Also see our [broader strategy](../../../../strategy-goals/strategy/growth-team/index.md).

## Customer Engineering (CE)

### Now

- The onboarding [email](https://docs.google.com/document/d/1k_cunJ4wSj3tl4K7lNiRTd_JERCGoiSWckpVBSI5rfc/edit) sent out when we hand off a trial instance to a trial user will contain a link for them to request a 30-min session with a CE. This is an opt-in, session to answer questions on setup / config if they have them, and offer a demo if needed. This will be booked through chilipiper, and SDRs will make sure CEs get assigned.
- When a trial user becomes a Product Qualified Lead (PQL), it is assigned to an account executive (who will engage CE). This is the usual process for any opportunity.

### Long term

Long term, we may create more specialised customer success roles to drive high leverage ways to help cloud trial users achieve success. This could include:

- checking-in with trial users regularly
- webinars and 1-to-many sessions
- working with product growth to build self-serve ways to get to value, and address common issues

## Customer Support (CS)

- Cloud trial users that ecounter issues can use our discord, or send an email to support@sourcegraph.com. The support team is expected to address those issues within normal [SLAs](../../../ce-support/support/index.md#sts=SLAs).
- If a user tries to join an existing instance and is blocked, they will request help on support@sourcegraph.com. The support team should reach out to the user and work with #growth to make sure the instance admin knows that user has requested an invite and is blocked. This will be automated.
- If the signup form fails, an email will be sent to support@sourcegraph.com as a stop gap. The support team should reach out to the user and work with #growth to make sure their trial instance gets provisioned. This is a failsafe and shouldn't happen.

## Account Executives

- Engage PQLs!
- We **do not** engage with Cloud trials for commercial discussions, unless they're a Strategic account or are identified as PQLs

## Data and Analytics

- Maintain and/or contribute to the dashboards, data flows and both product and marketing growth iterations. See the [dashboard documentation](<[url](https://docs.google.com/document/d/1zwSu0Kyug6VIB6Pm_L5Oprt5FPH8ky8kWDLGt64ryA8/edit)>) for a list of dashboards and sources.
