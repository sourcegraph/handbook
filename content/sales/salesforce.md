# How we use Salesforce

This document describes how the sales team is using Salesforce.

Note: Please refer to it as Salesforce (instead of SF or SFDC) in accordance with our [content guidelines](../communication/content_guidelines/style_and_mechanics.md#abbreviations-acronyms-latinisms-jargon).

Jump to:

- [Updating information in Salesforce](#updating-information-in-salesforce)
- [HubSpot and Salesforce connection](#hubspot-and-salesforce)
- [Salesforce automation](#salesforce-automation)

## Salesforce General Principles

1. If it's not in Salesforce, it doesn't exist. Salesforce data will be used to resolve any territory/ownership disputes
1. All Salesforce Users are responsible for keeping Salesforce up-to-date as a [source of truth](../communication/index.md#sources-of-truth). If you come across incomplete or inaccurate data, take a moment to update it. This will help us keep the system usable and prevent many issues as we scale.
1. All Sales Users will work out of Accounts, Contacts, Opportunites, but the Leads Object should only be used for SDRs

## Salesforce access

Sales, marketing and finance teams have access to Salesforce. Access for those on other teams can be reviewed on a case-by-case basis, usually dependent on how frequently one needs to view customer communcation. To request access, tag @sales-operations in #it-tech-ops.

## About Salesforce objects

Salesforce has two main categories: leads and opportunity/account/contacts. Leads are single individuals that have not been qualified yet, and therefore are not associated with an account or opportunity. When a lead has revenue potential, they're converted to an opportunity. In this stage, an account (known in HubSpot as a company), a contact, and an opportunity (known in HubSpot as a deal) are created.

Opportunities begin at the [interest](index.md#interest) stage.

## Lead Object

### Lead Creation

Leads are single individuals that have not been qualified yet, and therefore are not associated with an account or opportunity. Leads can be created in Salesforce in a few different ways:

- Inbound Marketing Lead - automatically created via Hubspot when a user takes an action on our website
- SDR Created - SDR either manually creates a new lead or uploads a list
- Other Offline Sources - list uploaded from marketing event, webinar, etc.

### Lead Source

Every Lead should have a value in the Lead Source field. The Lead Source value is set automatically for inbound leads based on the origination of the lead. For other sources (like referrals), this value should be set by the SDR when creating the Lead.

Lead Source values include:

- Inbound - any inbound lead generated from a Contact Form, Demo Request, Trial Request, Sourcegraph.com Account Setup, Install, etc.
- Referral - any lead that was referred by a partner, investor, customer, employee, etc.
- SDR Created - any lead created by an SDR
- Event - lead attended an event, webinar, or similar
- Feedback Form - NPS Form Submissions
- Other

### First Touchpoint

First Touchpoint is a slightly more granular version of Lead Source and is set automatically in Hubspot.

First Touchpoint values include:

- Private Instance/Install (leads will go into "PP-Private Instance Markie" sequence)
- Sourcegraph.com Account/Cloud Sign-ups (leads will go into "CC-Cloud Signup Markie" sequence)
- Contact/Demo Form
- Inbound Email (support, contact)
- Feedback Form
- Referral
- Event
- Other
- Content download
- Subscription

### Lead Status

Lead Status indicates the stage of a lead in the workflow process.

Lead Status values include:

- New
- Working - SDR is actively engaging new lead
- Nurture - lead has potential, but is not ready to be converted
- Self-Service - lead is best served by our self-service offering
- Unqualified - lead is unqualified for our services, used for job candidates, students, etc.
- Bad-Data
- Converted - auto-set upon conversion of lead
- Replied - lead responded from an Outreach sequence
- Unresponsive - lead has not responded to an Outreach sequence

### Lead Assignment

New Inbound leads are round-robined automatically to SDRs.

### New Lead Workflow

SDR monitors new inbound Leads using a [Lead View](https://sourcegraph2020.lightning.force.com/lightning/o/Lead/list?filterName=00B3t00000DWfRpEAL) in Salesforce. SDR will also receive email/slack notification upon new high-priority lead (demo request, contact form, etc.)

SDR scrubs the Lead to confirm / enrich contact info fields - Name, Company, Title, Email Address, Phone Number, etc.

SDR dedupes the lead to look for recent activity, open/recently closed opportunities, etc. to determine eligibility to work based on the Rules of Engagement

- If eligible to work, SDR should update Lead Status to “Working” and begin outreach
- NOTE: we target <5 mins from new Lead Creation to First Touch during working hours, with a firm SLA of 24 hours for updating the Lead Status of any New Lead

### Outbound Lead-to-Opportunity Conversion Workflow

If an Outbound Lead meets the “Target Opportunity Profile” criteria, we use the following process for converting the lead and getting an AE connected with the prospect:

- If not alredy completed, the SDR completes the "Qual Interview". [See video tutorial](https://screenrec.com/share/KOEzvMaNWf)
- SDR creates the Opportunity in Salesforce by converting the lead to an Account/Contact/Opportunity (Note: be sure to convert into existing Account if one exists vs. creating a new). Salesforce will automatically assign the Account, Contact, and Opportunity based on a round-robin of their supported AEs.
- At this point, the Opportunity will be in Stage 1 - Interest
- SDR schedules meeting with the Contact and the receiving AE.
- SDR logs all pertinent information - call/email notes, research on contact/company, and any additional context that is helpful for the AE to be prepared for the initial call / understand the justification for creating an Opportunity
  SDR joins this initial call to make the AE intro and listen to the call for feedback

### Inbound Lead-to-Opportunity Conversion Workflow

If a Lead meets the “Target Opportunity Profile” criteria, we use the following process for converting the lead and getting an AE connected with the prospect:

- If not alredy completed, the SDR completes the "Qual Interview". [See video tutorial](https://screenrec.com/share/KOEzvMaNWf)
- SDR confirms the receiving AE of the Opportunity using the [AE Round-Robin Tracker](https://docs.google.com/spreadsheets/d/1Uqx3GSLFzzAptrMaowVJLkViAdOQ3gimUL8PVBm8EkQ/edit#gid=0)
- SDR schedules meeting with the Lead and the receiving AE
- SDR creates the Opportunity in Salesforce by converting the lead to an Account/Contact/Opportunity (Note: be sure to convert into existing Account if one exists vs. creating a new)
- At this point, the Opportunity will be in Stage 1 - Interest
- SDR logs all pertinent information - call/email notes, research on contact/company, and any additional context that is helpful for the AE to be prepared for the initial call / understand the justification for creating an Opportunity
  SDR joins this initial call to make the AE intro and listen to the call for feedback

### Rules of Engagement (ROE)

- If it’s not in Salesforce it doesn’t exist - make sure all activity is in Salesforce
- You can only prospect into accounts in your name (if you want to add an unassigned account to your list, just ping me)
- **For Inbound Leads:** If lead comes in for an account that has an open opportunity, the SDR should connect with the AE to determine whether the SDR should work (entirely new contact/business unit/etc.) or convert to the AE (related to the existing opp)
- If an SDR has touch (any email, call, etc.) within the past 30 days on an account/lead/contact for a new Inbound Lead, that lead should be routed to that SDR to work
- **For Assigning Opps:** All Opportunities being converted from Inbound Leads will be round-robined unless:
- AE/SDR pair has touch within the past 30 days on the account
- AE has a closed opp within the past 90 days on the account

**NOTE:** just being a target account / owned by an AE does not mean you automatically get an inbound lead, you have to be working the account

## Account Object

### Requesting to Add, Remove, or Exchange your Target Accounts

##### To add an account to your Target Accounts (assumes you are not at your maximum targets):

1. Find the Account in Salesforce.
2. Using the Button Bar at the top right, select “Change Target Account”.
3. It will display the number of Target Accounts you have out of your total allowed. Click Next.
4. Confirm the Request and click Next.
5. The request has been submitted to your manager for approval. Click Finish.
6. Once your manager approves the change, the Account will be added to your name and marked as a Target Account.

- [Add Account Video Example](https://screenrec.com/share/4NxOzujFbT)

##### To remove an account to your Target Accounts:

1. Find the Account in Salesforce.
2. Using the Button Bar at the top right, select “Change Target Account”.
3. It will display the number of Target Accounts you have out of your total allowed. Click Next.
4. Confirm the Request and click Next.
5. The request has been submitted to your manager for approval. Click Finish.
6. Once your manager approves the change, the Account will be removed from your name and unmarked as a Target Account.

- [Remove Account Video Example](https://screenrec.com/share/IMZG1ntb85)

##### To exchange an account from your Target Accounts (exchanging is only necessary if you are at your max of 25 accounts):

1. Find the Account in Salesforce.
2. Using the Button Bar at the top right, select “Change Target Account”.
3. It will display the number of Target Accounts you have out of your total allowed and ask you to provide the Name of the Account you are giving up in order to add the new Account. It is important that you provide the exact name of the Account to be given up. After entering the surrendered Account’s name, click Next.
4. Confirm the Request and click Next.
5. The request has been submitted to your manager for approval. Click Finish.
6. Once your manager approves the change, the surrendered Account will be removed from your name and unmarked as a Target Account while the new Account will be added to your name and marked as a Target Account.

- [Exchange Account Video Example](https://screenrec.com/share/dxoK5HG1iR)

## Opportunity Object

### New Business Meetings

An important metric for tracking Sales performance is "New Business Meetings" or NBMs. The target for NBMs is 7 a month for a ramped AE.

New Business Meetings are considered to be the initial meeting for a new business opportunity -- these can be net new customers or expansions on existing customers, but there can only be 1 NBM for a given sales opportunity. That means that every opportunity at Stage 1 or beyond counts as a New Business Meeting for tracking purposes in Salesforce.

This also means that if a meeting is held, but no Opportunity is created, it doesn't count as a new NBM. For reporting and tracking purposes, the date of the NBM is not the date the actual meeting took place, but the date when an opportunty reached (or was created in) stage 1 or beyond.

### Qualified Pipeline

Any opportunity in Salesforce that reaches stage 2 or beyond is considered to be a Qualified Opportunity. Our pipeline metrics and reporting only consider Qualified Opportunities -- opportunities in Stage 0 or 1 do not count in our pipeline metrics.

The date an opportunity becomes qualified is the date it moves into Stage 2 or beyond -- this date, and not the create date of the opportunity, is the date that is used for cycle time and other pipeline analysis.

### Associating contacts to opportunities

All of the contacts important to an opportunity should be linked. This should include the technical decision-maker, the economic decision-maker (if they are different) and the original member who introduced Sourcegraph to the organization.

This ensures that all deal-related communication is visible within the deal timeline for teammates to quickly get context surrounding the deal. This also allows us to evaluate the effectiveness of marketing channels and sales touchpoints that our team has with an organization. How we reached the person(s) who introduced Sourcegraph to their organization is one of the most important factors in evaluating the success of marketing activities.

If a deal comes through a referral or introduction, tell [BizOps](../bizops/index.md) so an adjustment can be made in the database to reflect this.

### When a deal is won

1. On 'New Business', make sure you have added products to the Opportunity following the linked demo: [Add Products Demo](https://screenrec.com/share/5EQcvILwON)
2. Move the deal to ‘Closed Won’.
3. If you have added Products using Step 1, the Contract End Date will be set for you. If not, mark the ‘End of contract’ field with the last day of the contract. Salesforce will [automatically create a renewal deal](#renewal-deals) based on this date.
4. Ensure the appropriate 'deal won reason' fields reflect the main factors that contributed to the opportunity being won.

### When a deal is lost

1. Update the ‘Closed Lost Dropdown’ property to reflect the reason. If the reason doesn’t exist in the dropdown, you can talk to [BizOps](../bizops/index.md) about adding one.
1. Expand upon the reason in the longform ‘Closed Lost Reason’ field.

### Recording outbound activity

TBD

## HubSpot and Salesforce

### HubSpot to Salesforce sync

All HubSpot contacts are synced to Salesforce, usually within 15 minutes. The [complete settings are in HubSpot](https://app.hubspot.com/integrations-settings/2762526/installed/salesforce/contacts), but the most important of the synced fields are:

- Basic contact info (name, email)
- Their lead source based on First Page Seen
- Most ZoomInfo enriched fields
- MQL date and checkbox
- NPS survey results attached to the contact

Contacts are synced as Leads in Salesforce, and become Opportunity/Account/Contact if the Lead is an MQL (based on MQL_checkbox = TRUE/YES)

### Salesforce to HubSpot sync

Any update on the lead/contact in Salesforce will sync back to HubSpot (name, email, MQL checkbox, etc...). Companies and opportunities will not be synced back; Salesforce is the source of truth for these objects.

### What HubSpot still does

- Everything marketing (email campaigns, workflows, lead capture/forms, including NPS, MQL, and PQL scores)
- Links to customers from RFCs, GitHub issues, etc. are still accessible. This will eventually be deprecated

## Salesforce Automation

### Leads to Accounts/Contacts/Opportunities

- All leads are put into an automated round robin process when they are converted in order to identify the AE owner
  - There are seperate queues for Inbound leads (by Region) and unassigned Outbound leads (by SDR / AE pairing)
- Round robin spots are used when a meeting with a lead is scheduled, the outcome of the meeting does not matter
- Consultants should not count in the round robin, and the SDR team should not convert consultant leads into the round robin queue
  - If a consultant does slip through, the scenario will be assessed on a one-off basis by Sales Ops and Sales Management

## Renewal deals

Upon "Close" of a new deal, a renewal Opportunity is created in the Renewals pipeline.

### Forecast Generation

Company Forecast and related records are generated automatically at 6pm Pacific every week.

### AE/SDR Teams

When the SDR field on the User is updated to a new SDR (or from blank), all Accounts owned by the User will have that SDR added to them.
