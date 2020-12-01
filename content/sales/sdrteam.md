# SDR Team

The SDR Team (fill in the blanks)

## Members

- [Gregg Stone](../../../../company/team/index.md#gregg-stone) - VP of Sales
- [Quin Keough](../../../../company/team/index.md#quin-keough) - West
- [Mark Muldez](../../../../company/team/index.md#mark-muldez-he-him) - East

## Quick Links

- [Outbound Account Strategy](#outbound-account-strategy)
- [SDR Playbook](#sdr-playbook)
- [SDR Handoff Guide](#sdr-to-ae-handoff)
- [Best Practices](#best-practices)
- [Tech Stack](#tech-stack)

## Outbound Strategy
(TBD)

## SDR Playbook

### Lead Management 

#### Lead Creation

Leads are single individuals that have not been qualified yet, and therefore are not associated with an account or opportunity. Leads can be created in Salesforce in a few different ways:

1. Inbound Marketing Lead - automatically created via Hubspot when a user takes an action on our website
2. SDR Created - SDR either manually creates a new lead or uploads a list
3. Other Offline Sources - list uploaded from marketing event, webinar, etc.

#### Lead Source

Every Lead should have a value in the Lead Source field. The Lead Source value is set automatically for inbound leads based on the origination of the lead. For other sources (like referrals), this value should be set by the SDR when creating the Lead. Lead Source includes:

- Inbound - any inbound lead generated from a Contact Form, Demo Request, Trial Request, Sourcegraph.com Account Setup, Install, etc.
- Referral - any lead that was referred by a partner, investor, customer, employee, etc.
- SDR Created - any lead created by an SDR
- Event - lead attended an event, webinar, or similar
- Feedback Form - NPS Form Submissions
- Other

#### First Touch Point

This is a slightly more granular version of Lead Source and is set automatically in Hubspot. First Touchpoint includes: 

- Private Instance - installs
- Sourcegraph.com Account
- Contact/Demo Form
- Inbound Email (support, contact)
- Feedback Form
- Referral
- Event
- Other

#### Lead Status

Indicates the stage of a lead in the workflow process. Lead Status includes:

- New
- Working - SDR is actively engaging new lead
- Replied - lead has responded to the SDR
- Nurture - lead has potential, but is not ready to be converted
- Self-Service - lead is best served by our self-service offering
- Unqualified - lead is unqualified for our services, used for job candidates, students, etc.
- Bad-Data
- Unresponsive 
- Converted - auto-set upon conversion of lead

#### Lead Assignment

New Inbound Leads are round-robined automatically to SDRs. 

#### New Lead Workflow

SDR monitors new inbound lead using a **lead view** in *Salesforce*

- SDR will also receive an email/slack notification upon new high-priority lead (demo request, contact form, etc)
- SDR scrubs the Lead to confirm / enrich contact info fields - Name, Company, Title, Email, etc. 
- SDR dedupes the lead to look for existing activity, open/recently closed opportunities, etc. to determine eligibility to work based on the Rules of Engagement
  - If eligible to work, SDR should update Lead Status to “Working” and push lead to Outreach.io to begin outreach. 
  - **NOTE:** we target <5 mins from new Lead Creation to First Touch during working hours, with a firm SLA of 24 hours for updating the Lead Status of any New Lead

#### Inbound Lead to Opportunity Conversion Workflow

If a Lead meets the “Target Opportunity Profile” criteria, we use the following process for converting the lead and getting an AE connected with the prospect:

- SDR confirms the receiving AE of the Opportunity using the AE Round-Robin Tracker
- SDR schedules meeting with the Lead and the receiving AE
- SDR creates the Opportunity in Salesforce by converting the lead to an Account/Contact/Opportunity (Note: be sure to convert into existing Account if one exists vs. creating a new)
  - At this point, the Opportunity will be in Stage 1 - Interest
- SDR logs all pertinent information - call/email notes, research on contact/company, and any additional context that is helpful for the AE to be prepared for the initial call / understand the justification for creating an Opportunity
- SDR joins this initial call to make the AE intro and listen to the call for feedback

#### Rules of Engagement (ROE)

- If it’s not in Salesforce it doesn’t exist - make sure all activity is in Salesforce
- You can only prospect into accounts in your name (if you want to add an unassigned account to your list, just ping me)
- **For Inbound Leads:** If lead comes in for an account that has an open opportunity, the SDR should connect with the AE to determine whether the SDR should work (entirely new contact/business unit/etc.) or convert to the AE (related to the existing opp)
- If an SDR has touch (any email, call, etc.) within the past 30 days on an account/lead/contact for a new Inbound Lead, that lead should be routed to that SDR to work
- **For Assigning Opps:** All Opportunities being converted from Inbound Leads will be round-robined unless:
- AE/SDR pair has touch within the past 30 days on the account
- AE has a closed opp within the past 90 days on the account

**Note:** just being a target account / owned by an AE does not mean you automatically get an inbound lead, you have to be working the account

#### Outbound Opportunity Creation Workflow (TBD)

#### AE - New Opportunity Workflow post Creation by SDR

AE leads initial call and dispositions the opportunity accordingly: 

- **Sales Accepted Opportunity (SAO):** - if the Opportunity meets the minimum requirements for a “Sales Accepted Opportunity”, the AE updates the Stage to “Qualification” or beyond in Salesforce

  - **Note:** this action will trigger a checkbox field to be checked on the Opportunity Record called “Sales Accepted Opportunity”
  - This is how SDR Quota is tracked and is the ultimate metric we are driving towards
  
- **Closed-Lost** - if the Opportunity doesn’t meet the requirements of a Sales Accepted Opportunity and we don’t reasonably feel that we can reach that stage with this given contact/account, the AE moves the Opportunity to Closed-Lost and no SDR credit is awarded

- **Needs More Work** - if the Opportunity doesn’t meet the requirements of a Sales Accepted Opportunity, but we believe that it has the potential to reach this stage with additional progress, keep it in the initial stage and devise a plan b/t the AE & SDR to get it to Sales Accepted Opportunity.

  - Examples here: great account/need, but we have to get into a different contact or great opportunity but no next steps could be confirmed


## SDR to AE Handoff

Before the first call with the prospect:

- The SDR sets the initial meeting (i.e., a calendar invite is sent out by the SDR to the prospect and AE).
- SDR sends a summary of the opportunity to the AE, and gets confirmation of the proposed agenda and any additional attendees to be included from Sourcegraph (CE, Manager, etc.).
- SDR sends the initial follow-up email to the prospect to:
  - Introduce the AE (& anyone else) who is joining the call.
  - Provide a proposed agenda (pricing, use case, quick tour, etc.) that is confirmed first by the AE.
  - Encourage the prospect to provide more context as it relates to their interest and feedback on the proposed agenda.
  - Provide value by including any relevant case studies, docs, 1-pagers, etc.
  - End the note with excitement: "We look forward to speaking with you soon!"

On the actual call with the prospect:

- SDR starts the call, sets the tone by giving a quick overview on how the SDR and the prospect got connected, and then transitions to something like, "I've caught (AE/CE) up to speed on our conversation, I'll go ahead and pass the mic to AE to introduce themselves."
- AE jumps in, introduces themselves and CE (if there is one on the call), and takes over from there.

At the end of the call:

- AE wraps up the call and confirms next steps.
  - Note: If towards the end of the call, the AE can't solidify next steps, the SDR may choose to step in as a *"second voice"* and attempt to pencil down next steps, but only if it makes sense.

After the call:

- AE will follow up via email, cc'ing the SDR and CE.
  - Note: SDRs don't need to be cc'ed on all prospect emails, just the initial ones.
- At this point, **the handoff to AE is now complete.**

The purpose of this framework is to encourage a much more fluid introduction and transition from SDR to AE; this isn't meant to be a strict and rigid process, but rather a guide.

Sending the initial email opens the communication line between all parties, instead of having the proposed agenda appear only in the calendar invite.

This process helps build a continuous rapport between the prospect and the SDRs. And in the event the prospect becomes unresponsive, the SDR can step in and attempt to revive the conversation. Or if the prospect has a question, and the AE isn't available, SDRs can provide back up support. 

Finally, this process is a proactive way to ensure that SDRs are setting high-quality meetings for their AEs.

## Best Practices
(TBD)

## Tech Stack

- Salesforce - Customer Relationship Management
- Outreach.io - Sales Engagement Platform
- Linkedin Sales Navigator - Prospecting Tool
- Zoominfo - Data Intelligence Tool
- LeadiQ - Data Intelligence Tool
