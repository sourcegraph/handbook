# Cloud trial operations

From 2022-09-27, Sourcegraph Cloud has been the default way of deploying Sourcegraph. We are also iterating towards a Product Led Growth motion. There are 3 main ways to try Sourcegraph:

- Try a self-hosted instance, self-serve
- Contact us and scope a custom trial:
  - Talk to an Account Executive and Customer Engineer (CE) to get help setting up a self-hosted instance.
  - Talk to an Account Executive and CE to get a cloud instance trial (hereafter called "a CE-requested trial"). Those instances can be setup to match customer needs (scale, )
- **(NEW!) Signup for a self-serve trial from signup.sourcegraph.com** (hereafter called "self-serve trial"). This page zooms in only on this option.

> NOTE: This Handbook page describes the workflow **for self-serve trials only**.

Most call to actions (CTAs) on Sourcegraph sites and posts will either let users request a PLG trial, or contact us to discuss one of the other options.

## Context

Cloud is the default way of deploying Sourcegraph, but there are some limits to delivering a cloud trial instance today.

- There is a cap on the number of instances we can managed at any given time ([SLA](../../../cloud/index.md#slas-for-managed-instances)). Therefore, when someone requests an instance, we have to qualify them to make sure that we have capacity and that a cloud instance is the best option to meet their needs.
- Cloud instances take some time to provision ([SLA](../../../cloud/index.md#slas-for-managed-instances)), that makes it so signing up for a cloud instance is not instant. To work around this limitation, we pre-provision instances in some cases, with the trade-off that they have random subdomains (eg. `hjbkn.sourcegraph.com`).
- The workflow for qualifying a user that requests a trial instance, provisioning the instance, handing it off to the requesting user, and helping them onboard is very manual. This last bit will be automated in the short term (next few months).
- The onboarding on Sourcegraph instances is very rudimentary. The Product Growth team is working on that next.
- We aim to give all self-serve trials a white-glove experience through custom onboarding emails, sessions with Customer Engineers, etc. Most of this will eventually be automated.

## Workflow

Here is an overview of the workflow and the role of any and all Sourcegraph teams.

TLDR:

- We maintain a list of prequalified target accounts, that will instantly get an instance in-product
- All others go through manual qualification by inbound SDRs, and if qualified, an instance is provisioned by the Cloud team and handed-off to the reqester by a CE
- Instance hand-off (if not automated), white-glove onboarding, and trial extension/termination/conversion are owned by the CE assigned to the Opportunity.
- Trials should be terminated after 15 days if there's no activity on the instance, and extented to 30 days if there's any activity.

![Workflow](https://storage.googleapis.com/sourcegraph-assets/growth/flow-v2.svg)
(You can also view this flow [here](https://app.excalidraw.com/l/4Dr1S6qmmY7/4S6Sc9L2aDO))

Now let's dive into the details of the workflow. CE or AE actions are highlighted by 🟢, inbound SDR actions by 🟡, and named SDR actions by 🟠.

Assume `bob@acme-corp.com` signs up for an instance on signup.sourcegraph.com.

### First step: signup, qualification and instance delivery

#### Case 1: acme-corp.come already has a cloud instance

If there is already a cloud instance owned by `acme-corp`, which is defined as a cloud instance whose initial admdin has an `@acme-corp.com` email, then:

1. `bob` is automatically redirected to that instance.
1. a notification is sent in #cloud-trial-alerts, powered by this [zap](https://zapier.com/editor/167443639/published)
1. 🟢 the AE/CE should reach out to the instance admin and user to understand if they should be added to the instance

Limitations: unless SSO is setup on the instance, `bob@acme-corp.com` may not join it. Product growth will be working on an improvement soon ([#42981](https://github.com/sourcegraph/sourcegraph/issues/42981)).

#### Case 2: the email domain is pre-qualified

If the domain name is pre-qualified and there's no cloud instance linked to it, then there are two cases:

##### Case 2.1 the account is a named account in SFDC

1. `bob` is automatically and instantly redirected to a pre-provisioned instance and given a password reset link. That instance has a random domain (eg. `xyz.sourcegraph.com`). From now on, all `@acme-corp.com` emails will be redirected to that instance (see Case 1).
2. An alert is sent in #cloud-trial-alerts, powered by this [zap](https://zapier.com/editor/167443639/published)
3. 🟡 inbound SDR routes to the Named SDR
4. 🟠 Named SDR converts to Opp
5. Named SDR notifies assigned AE/CE
   1.Auto email from Salesforce upon Conversion
   1. [INTERNAL] 🟠 Named SDR notifies assigned AE/CE in the #cloud-trial-alerts, and creates a slack channel #cloud-trial-<acme-corp> and adds CE + AE.
6. 🟢 The customer engineers takes over from here, go to[Second step: onboarding, and trial extend, terminate, convert](#second-step-onboarding-and-trial-extend-terminate-convert)

##### Case 2.2 the account is NOT a named account in SFDC

1. `bob` is automatically and instantly redirected to a pre-provisioned instance and given a password reset link. That instance has a random domain (eg. `xyz.sourcegraph.com`). From now on, all `@acme-corp.com` emails will be redirected to that instance (see Case 1).
1. An alert is sent in #cloud-trial-alerts, powered by this [zap](https://zapier.com/editor/167443639/published)
1. 🟡 Inbound SDR converts to Opp
1. 🟡 Inbound SDR uses Round Robin to assign AE/CE
1. 🟡 Inbound SDR notifies assigned AE/CE
   1.Auto-email from Salesforce upon Conversion
   1. [INTERNAL] 🟠 Named SDR notifies assigned AE/CE in the #cloud-trial-alerts, and creates a slack channel #cloud-trial-<acme-corp> and adds CE + AE.
1. 🟢 from there, this is similar to Case 2.1 from **step 6**.

#### Case 3: the email domain is NOT pre-qualified

In that case, `bob@acme-corp.com` does NOT instantly and automatically get a pre-provisioned instance. We need to request an instance for them and give them a reset password link. It also means that the account is NOT a named account in SFDC because all named accounts are prequalified.

There are two cases. It all starts with:

1. An alert is sent in #cloud-trial-alerts, powered by this [zap](https://zapier.com/editor/167443639/published) asking Inbound SDR to triage the lead.

##### Case 3.1: the lead is not qualified

1. 🟡 inbound SDR disqualifies.
1. the user gets an automated email recommending to self-host Sourcegraph

##### Case 3.2: the lead is qualified

1. 🟡 Inbound SDR converts to Opp
1. 🟡 Inbound SDR uses Round Robin to assign AE/CE
1. 🟡 Inbound SDR notifies assigned AE/CE
   1. Auto-email from Salesforce upon Conversion
   2. 🟠 Named SDR notifies assigned AE/CE in the #cloud-trial-alerts, and creates a slack channel #cloud-trial-<acme-corp> and adds CE + AE.
1. An instance request GitHub issue is raised automatically and posted in channel. This is powered by this [zap](https://zapier.com/editor/173098650/published).
1. 🟡 Inbound SDR adds the assigned CE email in the GitHub issue. This is very important: otherwise the CE will not be able to access the instance to generate `bob`'s initial password reset link. There is a `TODO` field in the GitHub issue that just needs to be replaced by the assigned CE's Sourcegraph email.
1. 🟡 Inbound SDR sends a “welcome” email, letting the prospect know that their instance is being provisioned, and introducing the CE who will be able to help with questions (AE in cc).
1. The Cloud team is paged, provisions cloud instance. A default, generic license key will be automatically added (shared by all trial instances in a cohort). This key is owned and rotated by Malo Marrec every 7 days. This license key has tags `plan:enterprise-1`,`private-extension-registry`,`remote-extensions-allow-disallow`,`monitoring`,`true-up`, `trial`, `plg-trial` and 1,000 users.
1. When the instance is ready, a notification is sent in slack (#cloud-trial-alerts). This is powered by a [zap](https://zapier.com/editor/168695381/published). A comment will also be added in the instance request issue.
1. 🟢 CE logs in, creates a password
1. 🟢 CE responds to initial SDR email, with the password/login information offering to help with white glove setup (AE in cc).
1. 🟢 from there, CE-led white-glove onboarding starts: see [Second step: onboarding, and trial extend, terminate, convert](#second-step-onboarding-and-trial-extend-terminate-convert). The CE owns this instance from that point.

### Second step: onboarding, and trial extend, terminate, convert

1. 🟢 CE sends welcome email offering to help with white glove setup (AE in cc)
   1. Tip: Google the prospect to see if they have any OSS code or interesting projects to mention in the first outreach email.
2. large_green_circle: CE leads white-glove onboarding email campaigns. Exact messaging are up to the CE (with support from AE) as long as it’s helpful to the prospect. This needs to be onboarding related, helpful tips, offers to help, and check-in about commercial next steps towards the end of the trial.
3. large_green_circle: From there, the assigned CE is responsible for [trial extend, terminate, convert](#trial-extend-terminate-convert) after 15 days and until the instance is terminated or converted to a paid customer. Any trial with activity should be extended to 15 more days by raising a [trial extend request GitHub issue](../../cloud/trial_mi/#monitoring-trial-managed-instances). There is no need to change the license unless extending by more than 15 days.
4. For unsuccessful trials, Malo Marrec will send feedback request email upon request by CE.
5. Opportunities follow the same process for qualification as they do today (Stage 2 criteria). We will track “activation” in-product (Eric Brody-Moore will make sure this links to SFDC).

### Email rules of engagement

In the easrly stages of the trial, emails should be focused on offers for help, onboarding, tips, setting up sessions etc. After there is usage on the instance, feel free to start checking-in.

### Upgrading from a random domain to a custom domain name

All-prequalified leads get a pre-provisioned instance instantly. That instance has a random subdomain name (`ghjsdc.sourcegraph.com`) for technical reasons. We expect users to want to change that domain to be a vanity domain (`acme-corp.sourcegraph.com`) either when they convery, or earlier (which would be a good sign to start commercial discussions).

To do so:

- Request a domain name change from the cloud team by raising this issue
- Note that changing the domain name will require the admin to:
  - Reconfigure the auth provider (if using SSO). Auth will be broken until they do that.
  - Reconfigure the auth provider (if using permission syncing). Repository syncing will be broken until they do that.
  - Reconfigure webhooks if they've set those up.
  - It will also break all hardcoded links to their sourcegraph instance

## Expectations from stakeholders

### Growth marketing and SDRs

#### Now

- Drive qualified traffic to the signup page
- SDRs: see the [qualification workflow](#workflow)

### Product growth

#### Now

- Own and iterate on the overall signup, onboarding and activation experience. Other teams operate that workflow, but the Product Growth team makes it better and supports when things break.
  - We are currently focused on automating instance hand-off and increasing `trial start`/`trial request`
  - Next, we will focus on improving and automating the onboarding experience
- Monitor and improve the `trial start`/`trial request` ratio, activation, conversion.
- Support customers as needed
- Rotate the generic license used for self-serve trial instances every 30 days

#### Long term

- Also see our [broader strategy](../../../../strategy-goals/strategy/growth-team/index.md).

### Customer Engineering (CE)

#### Now

- Own instance hand-off (except for pre-qualified domains where this is automated)
- Own white-glove onboarding
- Own instance termination, trial extension after 15 days and beyond, and conversion, and raise the appropriate [GitHub issues](../../cloud/trial_mi/#monitoring-trial-managed-instances)

#### Long term

Long term, we may create more specialised customer success roles to drive high leverage ways to help cloud trial users achieve success. This could include:

- checking-in with trial users regularly
- webinars and 1-to-many sessions
- working with product growth to build self-serve ways to get to value, and address common issues

We also expect to automate most of the manual steps in the signup workflow to take CEs out of that loop.

### Customer Support (CS)

- Cloud trial users that ecounter issues can use our discord, or send an email to support@sourcegraph.com. The support team is expected to address those issues within normal [SLAs](../../../ce-support/support/index.md#sts=SLAs).
- If a user tries to join an existing instance and is blocked, they might request help on support@sourcegraph.com. The support team should reach out to the user and work with #growth to make sure the instance admin knows that user has requested an invite and is blocked. This will be automated.
- If the signup form fails, an email will be sent to support@sourcegraph.com as a stop gap. The support team should reach out to the user and work with #growth to make sure their trial instance gets provisioned. This is a failsafe and shouldn't happen.

### Account Executives (AE)

- Engage Product Qualified Leads
- Support CEs as neeed

### Data and Analytics

- Maintain and/or contribute to the dashboards, data flows and both product and marketing growth iterations. See the [dashboard documentation](https://docs.google.com/document/d/1zwSu0Kyug6VIB6Pm_L5Oprt5FPH8ky8kWDLGt64ryA8/edit) for a list of dashboards and sources.

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

## Known limitations

Known limitations of the self-serve trials flow include:

- there is no onboarding experience in-product [#42339](https://github.com/sourcegraph/sourcegraph/issues/42339)
- instances delivered to pre-qualified leads have random subdomains
- there is no way for a user to join a pre-existing instance unless SSO is setup [#42891](https://github.com/sourcegraph/sourcegraph/issues/42981)

The Product Growth team is iterating on those! There are probably many other great ideas out there, reach out to us in #growth if you want to share them.
