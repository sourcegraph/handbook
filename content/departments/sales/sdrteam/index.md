# SDR Team

The SDR team at Sourcegraph is built to source high quality pipeline for the broader sales org.

## Members

{{generator:reporting_structure.vp_sales}}

{{generator:reporting_structure.head_sales_development}}

## Quick Links

- [SDR Team](#sdr-team)
  - [Members](#members)
  - [Quick Links](#quick-links)
  - [Inbound Workflow](#inbound-workflow)
  - [Outbound Workflow](#outbound-workflow)
  - [AE - New Opportunity Workflow Post Creation by SDR](#ae---new-opportunity-workflow-post-creation-by-sdr)
  - [SDR to AE Handoff](#sdr-to-ae-handoff)
  - [Best Practices](#best-practices)
  - [Tech Stack](#tech-stack)
  - [SDR Promotion Process](#sdr-promotion-process)
  - [Reccomended SDR Team readings & podcasts](#recommended-sdr-team-reads--podcasts)
  - [SDR Ramp and quota structure](#sdr-ramp-and-quota-structure)

## Inbound Workflow

See [How we use Salesforce](../tools/salesforce.md#how-we-use-salesforce) to learn more about SDR Inbound Workflow.

## Outbound Workflow

Description of how the sales team prospects into an account:

**Outbounding General Principles**

- We outbound using an account-based strategy. We engage prospects within the same company for a specific reason in order to determine if Sourcegraph will add value to their organization.
- Use a copy of the AE/SDR Acct Planning Template doc [here](https://docs.google.com/spreadsheets/d/1pJiaUFk-KcRmEf9jfMjniHfyu6xsV--W/edit#gid=263328937). This document allows you to ensure constant communication between your sales counterpart (SDR/AE), and stay organized with building out your account list.
- Outbounding is a never-ending process of learning how best to generate conversations with prospects. Constantly iterate the messages you use to start a conversation and don’t be afraid to try new things.

**Workflow Videos**

- Steps of how to build out an account: [link](https://drive.google.com/file/d/1E7KzzJlmuDNSALyChhpRGs05i91ENH43/view)
- Using Vidyard and GitHub to tailor messaging: Link (TBD)
- Call workflow: Link (TBD)

## AE - New Opportunity Workflow Post Creation by SDR

AE leads initial call and dispositions the opportunity accordingly:

- **Sales Accepted Opportunity (SAO):** - if the Opportunity meets the minimum requirements for a “Sales Accepted Opportunity”, the AE updates the Stage to “Qualification” or beyond in Salesforce

  - **NOTE:** this action will trigger a checkbox field to be checked on the Opportunity Record called “Sales Accepted Opportunity”
  - This is how SDR Quota is tracked and is the ultimate metric we are driving towards

- **Closed-Lost** - if the Opportunity doesn’t meet the requirements of a Sales Accepted Opportunity and we don’t reasonably feel that we can reach that stage with this given contact/account, the AE moves the Opportunity to Closed-Lost and no SDR credit is awarded

- **Needs More Work** - if the Opportunity doesn’t meet the requirements of a Sales Accepted Opportunity, but we believe that it has the potential to reach this stage with additional progress, keep it in the initial stage and devise a plan b/t the AE & SDR to get it to Sales Accepted Opportunity.

  - Examples here: great account/need, but we have to get into a different contact or great opportunity but no next steps could be confirmed.

## SDR to AE Handoff

See [CEP - Pre-Sale Process](https://docs.google.com/spreadsheets/d/1z4LPeKmqCiIi92EchKBZMR8kVIGeTnOwhukYZCX2A0M/edit#gid=0) for more info.
See [SDR/AE Meeting ROE](https://docs.google.com/document/d/1KP1ao_UBZS80s4o0lOM3xs9ldJkl_iD_0cAS3CoXxqc/edit?usp=sharing) for detailed guide on expectations for the AE/SDR roles Pre/During/Post meeting.

**Before the first call with the prospect:**

- The SDR sets the initial meeting (i.e., a calendar invite is sent out by the SDR to the prospect and AE).
- SDR sends a summary of the opportunity to the AE, and gets confirmation of the proposed agenda and any additional attendees to be included from Sourcegraph (CE, Manager, etc.). CEs should generally be excluded from initial calls unless 1) the AE is new and would like support or 2) the customer has already provided enough technical information that a demo is on the agenda or has otherwised raised specific technical questions when interacting with the SDR.
- SDR sends the initial follow-up email to the prospect to:
  - Introduce the AE (& anyone else) who is joining the call.
  - Provide a proposed agenda (pricing, use case, quick tour, etc.) that is confirmed first by the AE.
  - Encourage the prospect to provide more context as it relates to their interest and feedback on the proposed agenda.
  - Provide value by including any relevant case studies, docs, 1-pagers, etc.
  - End the note with excitement: "We look forward to speaking with you soon!"

**On the actual call with the prospect:**

- SDR starts the call, sets the tone by giving a quick overview on how the SDR and the prospect got connected, and then transitions to something like, "I've caught (AE/CE) up to speed on our conversation, I'll go ahead and pass the mic to AE to introduce themselves."
- AE jumps in, introduces themselves and CE (if there is one on the call), and takes over from there.

**At the end of the call:**

- AE wraps up the call and confirms next steps.
  - Note: If towards the end of the call, the AE can't solidify next steps, the SDR may choose to step in as a _"second voice"_ and attempt to pencil down next steps, but only if it makes sense.

**After the call:**

- AE will follow up via email, cc'ing the SDR and CE.
  - Note: SDRs don't need to be cc'ed on all prospect emails, just the initial ones.
- At this point, **the handoff to AE is now complete.**

  - The purpose of this framework is to encourage a much more fluid introduction and transition from SDR to AE; this isn't meant to be a strict and rigid process, but rather a guide.

  - Sending the initial email opens the communication line between all parties, instead of having the proposed agenda appear only in the calendar invite.

  - This process helps build a continuous rapport between the prospect and the SDRs. And in the event the prospect becomes unresponsive, the SDR can step in and attempt to revive the conversation. Or if the prospect has a question, and the AE isn't available, SDRs can provide back up support.

  - Finally, this process is a proactive way to ensure that SDRs are setting high-quality meetings for their AEs.

## Best Practices

- Sourcegraph + Prospect GitHub Demo
  - Explanation of Vidyard Flow Video [link](https://drive.google.com/file/d/1rUJ32z2kzrzRhUGHIw_eDTgO55l1VzIt/view?usp=sharing)
  - Adobe Example Video [link](https://drive.google.com/file/d/1lRM5PL9R5oqM-RD4NhSGN2ahvED_fQwA/view?usp=sharing)
  - Script and Click Path [link](https://docs.google.com/document/d/1vL2gqp1-xlFkhIO4dNePA8lT0_T96W9fZFWAZkM9Vbo/edit?usp=sharing)

## Tech Stack

- **Salesforce** - Customer Relationship Management
- **Outreach.io** - Sales Engagement Platform
- **Linkedin Sales Navigator** - Prospecting Tool
- **Zoominfo** - Data Intelligence Tool
- **LeadiQ** - Data Intelligence Tool
- **Postal.Io** - B2B Gifting Tool [link](https://drive.google.com/file/d/1qxd23iXgOiiHjAEHFbN5Z8Ojp119Lg4O/view?usp=sharing)

## SDR Promotion Process

The SDR promotion path and process is designed to serve as a pipeline of top talent into other parts of the sales organization and business at large. It is highly objective and provides clear visibility into what expectations should be for career advancement within the SDR team.

**Process overview:**

- Headcount openings/start dates are communicated to SDR team
- Candidates submit application to interview
- Applications are approved based on requirements
- Interview dates are scheduled
- Candidates are given live feedback and notified of decision
- Transition planning begins for approved promotions

**Interview process:**

**Requirements to interview**

- Approval from direct manager on performance and values alignment
  - 3 consecutive quarters of proven delivery and performance in sales development, resulting in quota attainment.
  - Any exception will be on a ‘needs of the business’ basis and require SVP approval
    - e.g. a rep is on track and has an unexpected life event that requires time off that was unexpected
    - e.g. a rep has been on track and has a change in support structure that requires a ‘mini-ramp” (moving territories/segments/etc.)
- [Consistent demonstrations of Sourcegraph Core Values](../../../company-info-and-process/values/index.md#sourcegraph-values)

  **Interview-** a one hour presentation including a mock sales meeting

- Attendees (mock presentation roles):
  - Hiring Manager (Decision Maker)
  - VP of Sales (Engineer)
  - CE leader (Engineering Leader)
  - Current manager (no role, observer only)
- 1 Hour presentation that covers the following:
  - Why are you ready to be an AE at Sourcegraph? 1–2 slides (5 mins)
    - About you
    - Why sales?
  - Performance in SDR role to date 2~ slides (10 mins)
    - Results/KPIs/Partnering with your AE
    - Pipeline generation process
  - Mock Discovery Call- (45 mins)
    - Based on customer prompt, position Sourcegraph to a group evaluating bringing in the tool (25 mins)
  - Q&A + Feedback (20 mins)
    **Decision meeting**
- Candidate will receive prompt feedback on strengths and areas for improvement
  - Decision will be delivered including preliminary start date
  - If candidate does not pass through, documented plan for areas to improve will be delivered by current manager
  - If candidate does pass through, transition planning will begin
- Start dates will be semi-annual on 2/1 and 8/1

**Scoring Criteria for Presentation:**

- **Communication** - candidate presentation is paced well, transitions are smooth, concepts are clear, everyone is included and heard, filler words are minimal, confidence is apparent
- **Problem Discovery** - candidate uses active listening and curiosity to uncover customer pain points
- **Solution Mapping** - candidate aligns specific aspects of the Sourcegraph solution to expressed customer needs with an eye towards collecting information that will inform a subsequent demo
- **Objection handling** - candidate clarifies and responds to objections without derailing the presentation
- **Next Steps** - candidate concludes with next steps that overcome objections and initiates a process that will conclude with a timely close.

[Example prompt and call recordings are located here.](https://docs.google.com/document/d/1SbXuR_Eo42KOXJZBAICr84dXQrBFKHE5Q8ZQFsRlLvE/edit?usp=sharing)

This above process is the template for progression from SDR to Commercial AE. Further iterations will be forthcoming and outlined in this section of the handbook. This page also serves as a framework for the SDR promotion process into other parts of the business (e.g. Marketing).

## Recommended SDR Team Reads & Podcasts

**Books**

- Never Split the Difference
- The Infinite Game
- Leaders Eat Last
- Challenger Sale
- Blockchain Revolution
- GAP Selling
- PLG- Product Led Growth
- GRIT
- Start with Why
- Turning the Flywheel
- The New Kingmakers
- The Compound Effect
- Smarter, Faster, Better
- So Good They Can't Ignore You
- Think Again
- Give and Take
- The Most Excellent Way to Lead
- Seven Habits of Highly Successful People
- How to Win Friends and Influence People

**Podcasts**

- This Week in Startups
- A Time Shared
- 30 Minutes to President's Club

## SDR ramp and quota structure

SDRs at Sourcegraph are most often the first people to interact with engineers and developers at companies across the globe. Learning to articulate and position the power of code search is a core component of the role. The ramp period accommodates the learning and practice necessary to engage with engineering organizations and provide value. The ramp period will be four months. The first month begins your first whole month after an SDR’s start date (e.g., the start date is 2/17, the first month of ramp begins 3/1).

**First three weeks:**

- Meet lots of people, start building relationships internally
- Learn Sourcegraph offerings
- Understand the use cases that Sourcegraph solves for
- Practice using the systems used by SDRs every day
- Conduct demonstrations of different components of the Sourcegraph offering
- Begin engaging with engineers and developers

**Mont 1 of ramp:**

- Inbound- 2 SAO
- Outbound- 1 SAOs

  **Month 2:**

- Inbound- 4 SAOs
- Outbound- 2 SAOs

  **Month 3:**

- Inbound- 6 SAOs
- Outbound- 3 SAOs

  **Month 4:**

- Inbound- 10 SAOs
- Outbound- 5 SAOs

  **Fully ramped monthly target:**

- Inbound- 10 SAOs
- Outbound- 5 SAOs
