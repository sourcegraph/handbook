# Customer Engineering: Working with Customers

A CE, being both a pre-sales engineer and a post-sales technical account manager, works with customers in a number of different ways throughout the customer journey. This page captures high-level descriptions of the ways in which we work with or on behalf of our customers. Each section contains links to some supporting documents, templates, processes, playbooks, and recordings.

- [Pre-Sales Customer Touchpoints](#pre-sales-customer-touchpoints)
  - [Discovery and Demo](#discovery-and-demo)
  - [Technical Design](#technical-design)
  - [Customer Trials](#customer-trials)
  - [Security Reviews](#security-reviews)
  - [License Keys](#license-keys)
- [Post-Sales Customer Touchpoints](#post-sales-customer-touchpoints)
  - [Post-Sales Engagement Kickoff](#post-sales-engagement-kickoff)
  - [Webinars / Trainings / Q&A Sessions](#webinars--trainings--qa-sessions)
  - [Check-in calls](#check-in-calls)
  - [QBRs](#qbrs)
  - [Expansions and Renewals](#expansions-and-renewals)
  - [Ongoing Customer Support](#ongoing-customer-support)
  - [Account Management](#account-management)
- [Playbooks](#playbooks)
  - [Customer Discovery](#customer-discovery)
  - [Account Health](#account-health)
- [Processes](#processes)
  - [CE Technical Win Management](#ce-technical-win-management)
  - [Red Accounts](#red-accounts)
  - [Technical Deal Reviews](#technical-deal-reviews)

---

# Pre-Sales Customer Touchpoints

## Discovery and Demo

The initial conversation(s) with a customer can vary in length and scope, but always involve discovery, that is uncovering their needs and motivations, and demonstrating product capabilities. This could range from an abbreviated 30-minute intro call with a smaller prospect, or multiple hour-long calls across various stakeholders and teams at an enterprise organization.

### Resources

- [Customer discovery playbook](#customer-discovery)
- [Demo education resources](../onboarding/education.md#trainings-and-demos)

## Technical Design

Early on in the process, we begin to understand the needs of our prospective customers. As we learn about them - their needs, their tech stack, their business, etc. we begin to document both the product and technical requirements and the business context of the deal. Every single prospective customer must have a technical design document established, starting as early as Stage 2 - Qualification and completed into Stage 4 - Technical and Business Validation. We begin by capturing details about their pre-Sourcegraph business and document first their Trial design and configuration, and subsequently their Production design and setup. These TDDs should be stored [here](https://drive.google.com/drive/folders/1o-4rB24vcYsOiUzSEr_vzJsC7pE03yYC) and you should also link to the TDD from within your respective prospective customer [folder](https://drive.google.com/drive/folders/1gjXWQ1l0Fnt2pVS2ohx3w0cw-gaJ_Ez0) by creating a [shortcut](https://support.google.com/drive/answer/9700156?hl=en&co=GENIE.Platform%3DDesktop) in Drive.

For complex engagements, we have internal technical reviews with cross-functional teams (see [technical deal reviews](#technical-deal-reviews) below) that occur before approval to proceed to a trial deployment, to ensure we at Sourcegraph are collectively aligned on their needs and expectations, and so that the customer has the right expectations set and is positioned for success.

### Resources

- [Technical Design Document Template](https://docs.google.com/document/d/19qcdFcFpqHNE6OTgO8SwdTF7FfB4AJH6Hlqeywgv6Yc/edit)

## Customer Trials

Trials are an important and strategic part of our sales cycles because when developers start to use Sourcegraph, they love it and want to use it forever. Seriously! Typically, our trials run for about a month but sometimes longer. Before, during and after, you collaborate closely with your account executive to ensure a successful experience for the customer.

Before the trial, you're working with the AE to scope and plan the trial - both use cases they'll test (which you'll enable them on) and technically how they plan to deploy Sourcegraph for the trial.

CE and AE should use the [Trial and Deployment Planning Template](https://docs.google.com/spreadsheets/d/1mi_540InPEs6_xmCE2gHzw6Vt9QHDx-IdGogQZN6Ezw/edit?usp=sharing) to complete planning activities in advance of trial start. Here's a breakdown of who leads which aspects:

- Documenting their technical landscape (CE-led)
- Trial use cases / metrics for success (CE-led)
- Business value assessment planning (AE-led)
- User survey planning (AE-led)
- Deployment support and checklist (CE-led)
- Technical configuration review (CE-led)
- Trial rollout plan (CE-led)
- Communication and ongoing support (CE-led)

During the trial, CE is enabling and educating the customer on how to use Sourcegraph. CEs orient our activities during the trial against the defined use cases and metrics for success to ensure developers are set up for success. It is the CE's responsibility to deliver the technical win for the trial.

### Resources

- [Trial and Deployment Planning Template](https://docs.google.com/spreadsheets/d/1mi_540InPEs6_xmCE2gHzw6Vt9QHDx-IdGogQZN6Ezw/edit?usp=sharing)
- [Mid-trial check-in Q&A recording](https://chorus.ai/meeting/CEA97B5EA976491E97AED80A2EAE45D5)

## Security Reviews

Many customers send security questionnaires to complete. They are required to proceed with the partnership. The current process for completing them is:

1. Work with the AE to get access to the security questionnaire.
2. Note the customer preferred deployment type (self-hosted, managed, or cloud).
3. If you (the CE) feel comfortable doing so, take a first pass at the questionnaire. Use the [source of truth document](https://docs.google.com/spreadsheets/d/1xtjGzKExX9bEYBrsSyOcHFa-rm0SmB53hWnDKueVJjI/edit?usp=sharing).
4. Talk to your region's CE in charge of security reviews. Have them take a pass at it and review it. Please ensure timelines are properly communicated and enough notice is given to all involved stakeholders.
5. If the Security CE feels it necessary, they may involve the product manager on the security team. Typically this involves asking one-off questions in the security [source of truth document](https://docs.google.com/spreadsheets/d/1xtjGzKExX9bEYBrsSyOcHFa-rm0SmB53hWnDKueVJjI/edit?usp=sharing), but they may also request full security questionnaire reviews. Note that full reviews may require extra time to get prioritized and worked on by the security team.

The current CE's in charge of security questionnaires are [Max Wiederholt](../../../team/index.md#max-wiederholt) for US West / APAC and [Shawn King](../../../team/index.md#shawn-king) for US East / EMEA. We occasionally rotate team members in this role.

## License Keys

CEs are the team responsible for generating and maintaining license keys for customers. Here's some useful resources on how to do that:

- [Creating and maintaining license keys for customers](license_keys.md)
- [Recording of creating a new key for demo.sourcegraph.com](https://drive.google.com/file/d/1fYsBqdzdBLd0mzAu2FJxrWznRX0k-iqr/view?usp=sharing)

# Post-Sales Customer Touchpoints

## Post-Sales Engagement Kickoff

Once a customer signs on with Sourcegraph, we need to:

- Generate a full license key.
- Plan a kickoff call with our main contact(s) to plan the engagement.

On the kickoff call we plan our ongoing engagement with the customer. Different customers have different needs, so it's important to talk through topics such as:

- How often do they want to have check-in calls?
- What types of trainings, webinars, or Q&A sessions could their team use? When?
- Would they like any assistance or resources to integrate Sourcegraph into their developer onboarding process?
- Anything else we can look to help them out with? Upcoming initiatives they could use Sourcegraph for?

### Resources

- [Post Sales Engagement Sheet Template](https://docs.google.com/spreadsheets/d/18DjSYXOnALOHYN-zrMhOGUWGFCaXYShqcKt477tj3LU/edit#gid=0)
- [Post-Sales Kickoff Deck Template](https://docs.google.com/presentation/d/1eTis1XiS3U1M1M1a35wBw5qwTnJSMozXcz_gXJcGXhk/edit)
- [Sample Chorus Recording](https://chorus.ai/meeting/066B000C659C4F1D83AA465576444924)

## Webinars / Trainings / Q&A Sessions

The webinar you will most-often run is a Sourcegraph 101/102 (basically a longer and more in-depth version of the typical demo flow). It's important to relate use cases to customer needs.

We may also hold specific topic trainings or Q&A sessions, depending on customer need.

### Resources

- [Training Webinar Recording](https://chorus.ai/meeting/8FEAE02538644AA3ABB22149750E6308?)

## Check-in calls

Check-in calls may be weekly, bi-weekly, monthly, or as-needed. Going into a check-in call you should be familiar with:

- Usage data
- Current Sourcegraph version & upgrade info
- New features in the latest version(s) and/or the product roadmap
- Any recent or active questions or support issues or feature requests from the customer

### Resources

- [Chorus recording of a typical check-in call](https://chorus.ai/meeting/84885A7398C943A3AFD32327F06A3F12?)

## QBRs

We often hold QBRs, or Quarterly Business Reviews (sometimes referred to as an Executive Business Review), with our customers which recaps how Sourcegraph has been integrated into and creating value for their organization over the past quarter. These QBRs are typically created and presented by the CE assigned to the account, in conjunction with the account’s AE. They are typically presented in a slide deck format to executive-level leadership, and highlight usage metrics and use cases for their org. Additionally, they are used to gather feedback and comments from leadership regarding Sourcegraph.

### Resources

- The [QBR Guide](https://docs.google.com/document/d/1gFRn2SkX19sU0GSMGndNkk-I9cFe7FlN3xlZ2UX3Frs/edit#) details how CEs should execute a QBR.
- [QBR Quickstart video](https://www.loom.com/share/fb63d3286cda43a3b57913c5bdcc9806)
- [QBR Deck Template](https://docs.google.com/presentation/d/10TTvP3_U9-z_40vyqo1Bi_f0lD2s8TclFLnqvXIdU1s/edit#slide=id.gc868ddee9e_0_0)
- [Example QBR Deck](https://docs.google.com/presentation/d/1bWjDHA5U6luV4h6jNDo9fyj11tkpf_nHi9DhbLsPxr0/edit#slide=id.g96a3fc9b53_0_0)
- [Example QBR Survey](https://www.surveymonkey.com/results/SM-K6LMJQMZ7/)
- [Sample QBR Recording on Chorus](https://chorus.ai/meeting/36928A0D99694DCB8E0AC9D028E44A1D?search=qbr&recordingsOnly=true&transcript=false)

## Expansions and Renewals

Expanding Sourcegraph to a new team or unlocking new enterprise features could involve a full cycle of CE discovery and demos and value mapping. It could also include a trial for a new user group or with that new feature. A basic renewal or seat expansion may not involve CE beyond generating a new license key.

## Ongoing Customer Support

While our CS team is primarily responsible for reactive technical support, we help keep an eye out on Slack for any questions or issues that come through. You can view any support issues in Zendesk by using our SFDC <> Zendesk integration. Go to the Account page in Salesforce and click the "Zendesk" tab to view.

At times a customer may raise a feature request or provide product feedback. It is our responsibility as CEs to gather that feedback and share with the product teams.

### Resources

- [Product Gaps Dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000015UGhEAM/view?queryScope=userFolders)

## Account Management

As CEs we are responsible for the technical success of our customers. Post-sales we nurture these relationships and manage the accounts by paying attention to customer health metrics. Usage, adoption, and customer sentiment are important indicators that we monitor and address. It is recommended that CEs routinely monitor this to keep a pulse on customer metrics. There is also a link to this from the Salesforce Account record.

In addition to routine monitoring, CE should be collaborating with their AE to create and maintain [account plans](https://drive.google.com/drive/folders/1EoKl4lFeR8VvM6LyubMocxN4Z4OHPoNl) for each customer. These should be revisited on a quarterly basis.

### Resources

- [Customer Health Dashboard](https://sourcegraph.looker.com/dashboards-next/194)
- [Instance overview dashboard](https://sourcegraph.looker.com/dashboards-next/167)

---

# Playbooks

To enable CEs and ensure consistent practices, our team may produce playbooks from time-to-time. These playbooks should serve as a useful onboarding resource to new CEs and a helpful refresher for CEs as well.

## Customer Discovery

The [customer discovery playbook](https://docs.google.com/document/d/14iSqJBtiM32D1zSVVvtZGZmWVLuQ7S7MoJDM6wAhkyQ/edit) provides CEs with a framework and tools to successfully prepare for and conduct your first meetings with prospective customers (or even new stakeholders within existing customer organizations). These inputs should serve as the prerequisites to any customer demo because it enables you to tailor your content and talk track to what’s most relevant to the customer. It also provides key areas for CEs to consider and specific steps to take to ensure the CE has the correct context and knowledge to properly support a successful customer engagement beyond the initial meetings

## Account Health

The [account health playbook](https://docs.google.com/document/d/1YeuwtlplEkZEnmLMXZ1vKjJGImUZCIb1x4aCLXcNavc/edit) offers a repeatable framework for mitigating the risk of low adoption scores by offering suggestions for engagement as well as repeatable training and reusable content. This is a living document that should change to reflect available components in the [Customer Health Dashboard - Individual Customer](https://sourcegraph.looker.com/dashboards-next/194?Unique+Server+ID=Eventbrite) and mature over time to provide more refined resources to support Customer Engineers.

---

# Processes

Similar to playbooks, processes exist to ensure consistent practices amongst teams. Processes that the CE team either drives or heavily contributes to are outlined below.

## CE Technical Win Management

CEs are tightly aligned with the sales team and serve as technical experts, providing strategy and guidance to AEs during the sales cycle. Ultimately it is the CE that owns the “technical win” associated with an opportunity. The [CE Technical Win Management Process](tech-win-process.md) outlines expectations around how Customer Engineering tracks and communicates the status of the technical win as part of all sales opportunities.

## Red Accounts

As the team accountable for our customers' technical success, usage, and adoption of our products, CEs must keep a close pulse on the health of our customers. The Red Accounts Program exists to ensure we as a company are assessing customer health at all times.

### Overview

For any account that is designated as having a health rating of red - either via [calculated score](https://sourcegraph.looker.com/dashboards-next/179?Customer+Engineer=&Account+Executive=&Unique+Server+ID=&Region=) or by a member of the account team - the AE and CE will jointly provide a current status of the account, identify any necessary asks of the business in order to best serve the customer, create an appropriate action plan, and track through to resolution (ideally promotion of the health from red to yellow or green).

### Red Accounts Process

In slack, the #red-accounts channel has been created so that when the Customer Health field on the Salesforce Account record is set to Red, a post is auto-triggered in the slack channel and a corresponding row will be automatically added to the Account Tracker tab of the [Red Accounts](https://docs.google.com/spreadsheets/d/1eVgWhrtgH8WQGo_pRuMseqz-Bk1P1Bymrlkutzz5jEA/edit#gid=0) Google Sheet. The AE / CE will jointly fill in relevant information to understand current state, needs, and the intended actions. Any asks or needs against the intended action plan should be initiated via a thread on the auto-generated slack post; this allows for visibility and transparency.

### Roles and Responsibilities

The CE will monitor the Customer Health dashboard and where appliable update the Customer Health field on the Salesforce Account record to red.

Should an AE or CE feel that an account which isn't designated as red via the health dashboard, is in fact red for any reason (eg a champion leaves, etc) they should align, and the CE should update the Salesforce Account record to red.

Both the AE and CE are responsible for participating in the creation of the action plan, and overseeing the action plan through to resolution.

## Tech Reviews

Tech Reviews are documented as part of the [CE Technical Win Management Process](tech-win-process.md).
