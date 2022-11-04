# How we use Salesforce

This document describes how the sales team is using Salesforce.

Note: Please refer to it as Salesforce (instead of SF or SFDC) in accordance with our [content guidelines](../../../company-info-and-process/communication/content_guidelines/style_and_mechanics.md#abbreviations-acronyms-latinisms-jargon).

Jump to:

- [Updating information in Salesforce](#updating-information-in-salesforce)
- [HubSpot and Salesforce connection](#hubspot-and-salesforce)
- [Salesforce automation](#salesforce-automation)

## Salesforce General Principles

1. If it's not in Salesforce, it doesn't exist. Salesforce data will be used to resolve any territory/ownership disputes
1. All Salesforce Users are responsible for keeping Salesforce up-to-date as a [source of truth](../../../company-info-and-process/communication/index.md#sources-of-truth). If you come across incomplete or inaccurate data, take a moment to update it. This will help us keep the system usable and prevent many issues as we scale.
1. All Sales Users will work out of Accounts, Contacts, Opportunites, but the Leads Object should only be used for SDRs

## Salesforce access

Sales, marketing and finance teams have access to Salesforce. Access for those on other teams can be reviewed on a case-by-case basis, usually dependent on how frequently one needs to view customer communcation.

To access Salesforce you will need to log in using your [Okta](https://sourcegraph.okta.com/app/UserHome) credentials. To request access, tag @sales-operations in #it-tech-ops.

## About Salesforce objects

Salesforce has two main categories: leads and opportunity/account/contacts. Leads are single individuals that have not been qualified yet, and therefore are not associated with an account or opportunity. When a lead has revenue potential, they're converted to an opportunity. In this stage, an account (known in HubSpot as a company), a contact, and an opportunity (known in HubSpot as a deal) are created.

Opportunities begin at the [interest](index.md#interest) stage.

## Lead Object

### Lead Creation

Leads are single individuals that have not been qualified yet, and therefore are not associated with an account or opportunity. Leads can be created in Salesforce in a few different ways:

- **Inbound Marketing Lead** - automatically created via Hubspot when a user takes an action on our website
- **SDR Created** - SDR either manually creates a new lead or uploads a list
- **Other Offline Sources** - list uploaded from marketing event, webinar, etc.

### Lead Source

Every Lead should have a value in the Lead Source field. The Lead Source value is set automatically for inbound leads based on the origination of the lead. For other sources (like referrals), this value should be set by the SDR when creating the Lead.

Lead Source values include:

- **Inbound** - any inbound lead generated from a Contact Form, Demo Request, Trial Request, Sourcegraph.com Account Setup, Install, etc.
- **Referral** - any lead that was referred by a partner, investor, customer, employee, etc.
- **SDR Created** - any lead created by an SDR
- **Event** - lead attended an event, webinar, or similar
- **Feedback Form** - NPS Form Submissions
- **Other**

### First Touchpoint

First Touchpoint is a slightly more granular version of Lead Source and is set automatically in Hubspot. First Touchpoint fields hold info about the first marketing interaction a prospect has taken. It is used to reflect an individual’s first interaction with either Sourcegraph’s gated (i.e., email submission required) marketing content _or_ initial sign-up for the free product offering. While we also use cookies to track user behavior prior to email submission, First Touchpoint only reflects the original source of contact info collection by marketing.

The only time these fields should be blank is when a lead or contact has not had any interactions with marketing content (e.g., an SDR uses LeadIQ to import leads from a target account into SFDC for outreach, etc.). We leave First Touchpoint blank for these leads to account for any future marketing site interactions taken after initial sales outreach.

See below for an overview of our current First Touchpoint types:

<table>
  <tr>
   <td><strong>First / Most Recent Touchpoint Types</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
  </tr>
  <tr>
   <td>Batch Changes Demo Request
   </td>
   <td>A prospect <a href="https://about.sourcegraph.com/contact/request-batch-changes-demo/">submitted this form</a> that is linked on this <a href="https://about.sourcegraph.com/batch-changes">landing page</a>.
   </td>
  </tr>
  <tr>
   <td> Contact/Demo Form
   </td>
   <td>A prospect submitted any form on our site related to a “Contact us” or “Request a demo”. Look at the first or most recent content field in the marketing touchpoint section to understand exactly which form submission occurred. 
   </td>
  </tr>
  <tr>
   <td>Content Download
   </td>
   <td>A prospect downloaded a piece of content. Look at the first or most recent content field in the marketing touchpoint section to understand exactly which piece of content was downloaded.
<p>
Example: <a href="https://about.sourcegraph.com/guides/continuous-developer-onboarding/">Guide to Dev Onboarding landing page</a>
   </td>
  </tr>
  <tr>
    <td>Drift
   </td>
   <td>A prospect initiates online chat with our team via the Sourcegraph website.
   </td>
  </tr>
  <tr>
   <td>Event
   </td>
   <td>A prospect has either signed up for a webinar, attended a Sourcegraph hosted event, or interacted with us at a conference.
   </td>
  </tr>
  <tr>
   <td>Feedback Form
   </td>
   <td>A product user has given product feedback from a form within the product. Tread lightly. When this type of lead is created the product team is likely already following up with that product user. You can search using the user’s email address within the <a href="https://about.sourcegraph.com/handbook/product/surfacing_product_feedback">#feedback</a> slack channel to see the user’s specific feedback.
   </td>
  </tr>
  <tr>
   <td>Inbound Email (support, contact)
   </td>
   <td> 
   </td>
  </tr>
  <tr>
    <td>Outbound
   </td>
   <td>
   </td>
  </tr>
  <tr>
    <td>Private Instance
   </td>
   <td>A prospect has installed Sourcegraph locally via docker run instructions from this <a href="https://about.sourcegraph.com/get-started/self-hosted">landing page</a>. For more information on how this person is using product, you can check out the PQL Scoring section on a lead or contact in SFDC.
   </td>
  </tr>
  <tr>
   <td>Referral
   </td>
   <td> 
   </td>
  </tr>
  <tr>
   <td>Sourcegraph.com Account
   </td>
   <td>A prospect has <a href="https://about.sourcegraph.com/get-started/cloud">signed up for a sourcegraph.com cloud account</a>. For more information on how this person is using product, you can check out the PQL Scoring section on a lead or contact in SFDC.
   </td>
  </tr>
  <tr>
   <td>Subscription
   </td>
   <td> 
   </td>
  </tr>
  <tr>
    <td>Third-Party Vendor
   </td>
   <td>A prospect was sourced to us from a third-party vendor. To see which vendor, you can look at the first/most recent source field. 
<p>
Example: SimplyDirect Survey- These prospects filled out a survey offered by SimplyDirect. SimplyDirect will send them swag and send us the prospect. These are considered hot prospects.
   </td>
  </tr>
  <tr>
    <td>Website
   </td>
   <td>A prospect has reached out to support for product help. This is not a hot lead and support is likely already in conversations with this prospect.
   </td>
  </tr>
</table>

### Lead Status

Lead Status indicates the stage of a lead in the workflow process.

Lead Status values include:

- **New**
- **Working** - SDR is actively engaging new lead
- **Nurture** - lead has potential, but is not ready to be converted
- **Self-Service** - lead is best served by our self-service offering
- **Unqualified** - lead is unqualified for our services, used for job candidates, students, etc.
- **Bad-Data**
- **Converted** - auto-set upon conversion of lead
- **Replied** - lead responded from an Outreach sequence
- **Unresponsive** - lead has not responded to an Outreach sequence

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
- SDR uses the "Assign AE" button to automatically assign the correct AE to the Lead. This process handles checking for existing Account ownership and round robin assignment.
- SDR schedules meeting with the Lead and the assigned AE.
- SDR creates the Opportunity in Salesforce by converting the lead to an Account/Contact/Opportunity (Note: be sure to convert into existing Account if one exists vs. creating a new). Salesforce will automatically assign the Account, Contact, and Opportunity based on the assigned AE.
- At this point, the Opportunity will be in Stage 1 - Interest
- SDR schedules meeting with the Contact and the receiving AE.
- SDR logs all pertinent information - call/email notes, research on contact/company, and any additional context that is helpful for the AE to be prepared for the initial call / understand the justification for creating an Opportunity
  SDR joins this initial call to make the AE intro and listen to the call for feedback

### Inbound Lead-to-Opportunity Conversion Workflow

If a Lead meets the “Target Opportunity Profile” criteria, we use the following process for converting the lead and getting an AE connected with the prospect:

- If not alredy completed, the SDR completes the "Qual Interview". [See video tutorial](https://screenrec.com/share/KOEzvMaNWf)
- SDR uses the "Assign AE" button to automatically assign the correct AE to the Lead. This process handles checking for existing Account ownership and round robin assignment.
- SDR schedules meeting with the Lead and the assigned AE.
- SDR creates the Opportunity in Salesforce by converting the lead to an Account/Contact/Opportunity (Note: be sure to convert into existing Account if one exists vs. creating a new). Salesforce will automatically assign the Account, Contact, and Opportunity based on the assigned AE.
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

If a deal comes through a referral or introduction, tell [BizOps](../../bizops/index.md) so an adjustment can be made in the database to reflect this.

### When a deal is won

1. On 'New Business', make sure you have added products to the Opportunity following the linked demo: [Add Products Demo](https://screenrec.com/share/5EQcvILwON)
2. Move the deal to ‘Closed Won’.
3. If you have added Products using Step 1, the Contract End Date will be set for you. If not, mark the ‘End of contract’ field with the last day of the contract. Salesforce will [automatically create a renewal deal](#renewal-deals) based on this date.
4. Ensure the appropriate 'deal won reason' fields reflect the main factors that contributed to the opportunity being won.

### When a deal is lost

1. Update the ‘Closed Lost Dropdown’ property to reflect the reason. If the reason doesn’t exist in the dropdown, you can talk to [BizOps](../../bizops/index.md) about adding one.
1. Expand upon the reason in the longform ‘Closed Lost Reason’ field.

### Opportunity Source

Opportunities in Salesforce can be created either manually from scratch or from converting a lead. In the latter case, Opportunity Source is then populated in Salesforce based upon the following workflow:

1. An AE navigates to a lead in Salesforce and selects “convert”
2. They will then be asked to assign this lead to an account (which can be newly created or selected from pre-existing accounts)
3. This lead will then be automatically converted into a contact
4. The newly created opportunity will populate Opportunity Source to match the converted lead’s Lead Source with one important exception:
   1. If within 60 or fewer days prior to creation of the converted lead any pre-existing contact on the account selected to carry the new opportunity had a Lead Source reflecting outbound efforts (i.e., AE created or SDR created), the Opportunity Source will revert to taking that Lead Source in place of the source of the converted lead. This is to reflect a scenario that we frequently encounter where an SDR or AE will outbound prospect into a specific individual within a company, have no follow-up correspondence with that particular lead, but then receive an inbound inquiry (typically through completion of a marketing form or product sign-up) from a separate individual at the same company that heard about Sourcegraph from the lead originally contacted. Without this rule in Salesforce, we would materially undercount the impact of our outbound prospecting efforts while overstating the influence of marketing content on pipeline generation.
   2. Even with the above, we still retain data on the converted lead and where it was originally sourced - see the "Lead Source" field within an opportunities report.

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
  - To be eligible for the round robin, a rep must first pass the [demo certification](https://docs.google.com/document/d/1P6nzAGfpTNysIi2FIcFY7mHX__q0qZ8955NDnWylF4I/)
- Round robin spots are used when a meeting with a lead is scheduled, the outcome of the meeting does not matter
- Consultants should not count in the round robin, and the SDR team should not convert consultant leads into the round robin queue
  - If a consultant does slip through, the scenario will be assessed on a one-off basis by Sales Ops and Sales Management

## Renewal deals

Upon "Close" of a new deal, a renewal Opportunity is created in the Renewals pipeline.

### Forecast Generation

Company Forecast and related records are generated automatically at 6pm Pacific every week.

### AE/SDR Teams

Outbound SDRs are paired with AEs.

SDRs are automatically assigned as the SDR on any account when an AE is on the account.

If an account becomes unassigned for any reason, the SDR can stay on the account until another AE owns the account.
Any leads / meetings sourced by the SDR for an unowned account will enter the Round Robin, the same as a new inbound lead.

If an account is transferred to another AE who has a different SDR pair
A notification will be sent to both SDRs involved
All existing leads on the account will be transferred to the new SDR
The previous SDR has 14 days to generate a new SAO on any transferred lead, after 14 days any SAO generated will belong to the new SDR.
If an SAO is generated after the lead transfer, but before 14 days has passed, the previous SDR who generated that lead must notify #Sales-Ops, who will verify that the SAO will belong to the previous SDR instead of the new SDR on the account.

Note that notifications will only be generated when an SDR is being removed from an account - a new greenfield account being picked up by an AE/SDR pair or a transfer between AEs with the same SDR will not generate a notification to the SDR.
