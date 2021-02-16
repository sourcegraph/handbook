# Legacy Support Overview

This document captures our legacy process. As the new support team starts in 2021-02, some of this will change. It's nice to have on hand during the transition and will be removed in 2021-03 when the transition is complete (and the information we need here has a new home in the revised handbook). CEs doing support rotations in the meantime, should follow this. 

## How support works for users

### Recommended support path and SLAs

Users have a wide range of methods to communicate with Sourcegraph, but we only provide a support SLA on a single path: **filing a support ticket by emailing us at support@sourcegraph.com**.

### Support tickets vs. issues

Because our code is open source, any user can file an issue on our public issue tracker at any time (and we typically encourage it!). However, we don't encourage customers with enterprise contracts to file issues:

- Your GitHub username is not connected to your company, so we don't know what service level you are covered by and we can't enforce an SLA.
- You may not want to discuss your private deployment or configuration, to share your logs, etc.
- We won't be able to measure (and improve on) our response and resolution times.

### New customer welcome message
When a new customer first comes onboard (i.e. signs a contract with us for the first time), we like to send them a welcome message from the Support team (and support@sourcegraph.com email address), introducing ourselves and the official process for reaching out requesting support. The template is as follows:

>Hello \<Customer Name\>!

>My name is \<CE Rep Name\>, I’m a Customer Engineer here at Sourcegraph, and I want to welcome you to our support family! We’re excited that you’ve joined us and want to let you know we are here to help you be successful in resolving any issues with deploying, operating, and maintaining your Sourcegraph instance. 

>We are truly passionate about helping make your experience with Sourcegraph as successful as possible, so if you ever need assistance or have any questions pertaining to your Sourcegraph instance, please don’t hesitate to reach out to us at support@sourcegraph.com.

>Have a wonderful week, \<Customer Name\>. Please let us know how we can help!

>\<CE Rep Name\>  
Customer Engineer  
support@sourcegraph.com


## How to provide support

- [Support duties](#support-duties)
- [The support process](#the-support-process)
- [Using Jira](#using-jira)
- [SLAs](#slas)
- [Deprecated support channels](#deprecated-support-channels)

### Support duties

There are two roles in the support process:

- Front-line support: the individual who has the responsibility for responding to a support ticket within our [response time SLA](#slas), requesting any necessary information, and assigning a support owner.
- Support owner: the individual who has the responsibility for seeing the ticket through until it is closed (ideally within our [resolution time SLA](#slas)), or until it is reassigned to a different owner.

Front-line support is owned by the CE team by default. See our [CE to Engineering handover](ce_to_eng_handover.md) documentation to understand the rare exceptions to this rule.

Support owners can be anybody at Sourcegraph. In some cases, the front-line support rep may be able to close the issue themselves.

### The support process

#### Support rotation

The CE team maintains an active front-line support rotation for tickets filed in Jira Service Desk. For now, the following week's assignment is named in the weekly internal CE sync.

Once a CE takes over a ticket, their responsibility to see it through or assign an owner doesn't stop when their front-line duty ends. They continue to own those tickets until they're closed.

#### Front-line support

The current front-line support representative should immediately open the support email, determine the severity (see "[How CE hands issues to Engineering](ce_to_eng_handover.md#How-CE-hands-issues-to-Engineering)"), determine how to respond (e.g., if an answer is as simple as providing a link to our docs, or if someone else should be tagged in), and respond to the user in Jira. 

If someone else is taking ownership, assign them in the issue, and notify them in the #ce channel in Slack. If you are unsure who should take ownership of the issue, ask for advice in the #ce channel.

The initial email response should not be delayed while waiting for input. If you don't know who to assign, simply acknowledge receipt of the ticket and promise to follow-up. Responses should be natural, and don't need to fit any formal "voice". Respond how you'd want a support representative to respond to you.

Example response:

>Hi Alice,
>Sorry to hear you ran into that, thanks for reaching out.
>
>I've added Bob and Carol from our distribution team to this chain—they'll follow up shortly to help resolve this!
>
>Best,
>Dan

This response, like all others, should come through Jira, not via a personal email client. "Adding" a teammate to the thread should occur by assigning them ownership of the ticket in Jira and, ideally, sharing a link to the ticket with them in Slack.

#### Support owners

Support owners have the responsibility of ensuring that a ticket is closed, or if necessary, passed off to a more appropriate support owner.

Support owner emails should be natural, and don't need to fit any formal "voice". Email how you'd want a support representative to respond to you.

Since each ticket can take a unique path, there is no single template at this stage. The support owner should determine up front what information to request to debug the issue to minimize the number of back-and-forths required. If, after three responses from the user, the support owner still isn't certain about the issue, they can request a call/liveshare to debug the issue together live. In this scenario, the support owner should notify the account executive (from sales) that works with the company.

### SLAs

We strive to maintain the response and resolution times below.

#### For customers with on-premises/self-hosted Sourcegraph instances:

While Sourcegraph will strive to respond as soon as possible to every issue, we will be responsible for upholding the SLAs below during working hours (9:00a.m. to 5:00p.m.) Pacific Time, Monday through Friday.

||Description|Response time|Resolution time|
|---|---|---|---|
|Severity 1|Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment.|Within 24 hours of becoming aware of the issue|Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.|
|Severity 2|Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.|Within one business week of becoming aware of the issue|When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update.|

#### For customers with managed instances:

||Description|Response time|Resolution time|
|---|---|---|---|
|Severity 1|Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment.|Within 24 hours of becoming aware of the issue|Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.|
|Severity 2|Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.|Within one business week of becoming aware of the issue|When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update.|

We will work with the customer to schedule maintenance downtime at least 24 hours in advance, and will use commercially reasonable efforts to ensure downtimes lasts no longer than 2 hours. In aggregate, Sourcegraph will use commercially reasonable efforts to maintain availability of 99.5% uptime.

#### For customers with custom support agreements:

Enterprise Plus and Elite customers should refer to their contracts if they have custom service-level agreements.

## Finding debugging information

### How to find which Sourcegraph version a company is running

1. Visit the [instances Looker dashboard](https://sourcegraph.looker.com/looks/436).
1. Find the row for the customer's instance. (If you can't find it and it's not an Offline Instance mentioned below, ask in #analytics on Slack.)
1. Look at the version number in the row's **Latest Version** column.

### Offline instances

Some customer instances are offline or only [provide critical telemtry](https://docs.sourcegraph.com/admin/pings#critical-telemetry). The [full list is in Google Drive](https://docs.google.com/document/d/18q-xbHl53hg_y_0xX-buZpD04vMv3vJrqiXd9IeeE64/edit). 

## Getting nice email signatures

1. In Gmail **Settings** > **General** scroll down to signature:

![image](https://user-images.githubusercontent.com/3173176/79911585-73112e80-83d5-11ea-85b3-929c20de72d6.png)

2. Make the first line your name in bold
3. Make the second line your title
4. Choose **Insert image** and then **Web Address (URL)** and enter https://sourcegraphstatic.com/sourcegraph-logo.png then choose **Medium** size after it has been entered.
5. Click the image, then click **Link** and paste https://sourcegraph.com into the **Web Address** field. Now your image links to the website!
6. Your signature should now look something like this, and clicking the Sourcegraph logo should bring you to sourcegraph.com:

![image](https://user-images.githubusercontent.com/3173176/79911829-e450e180-83d5-11ea-9b9b-9c1cc1056740.png)
