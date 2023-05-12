# Technical Advisors: Working with Customers

A TA, being a post-sales technical account manager, works with customers in a number of different ways throughout the customer journey. This page captures high-level descriptions of the ways in which we work with or on behalf of our customers. Each section contains links to some supporting documents, templates, processes, playbooks, and recordings.

- [Technical Advisors: Working with Customers](#technical-advisors-working-with-customers)
- [Recurring Daily Responsibilities](#recurring-daily-responsibilities)
  - [Internal](#internal)
  - [External](#external)
- [Processes](#processes)
  - [Renewal Process](#renewal-process)
    - [Process Overview](#process-overview)
    - [Renewal Process Phases](#renewal-process-phases)
  - [Red Accounts](#red-accounts)
    - [Criteria](#criteria)
    - [Process](#process)
    - [Roles and Responsibilities](#roles-and-responsibilities)
  - [Customer Health](#customer-health)
    - [Processes](#processes-1)
- [Post-Sales Customer Touchpoints](#post-sales-customer-touchpoints)
  - [Post-Sales Partnership Kickoff](#post-sales-partnership-kickoff)
    - [TA Assignment](#ta-assignment)
    - [Hand-off from pre-to-post sales](#hand-off-from-pre-to-post-sales)
  - [User Onboarding](#user-onboarding)
    - [Resources](#resources)
  - [Developer Enablement](#developer-enablement)
    - [Standard trainings](#standard-trainings)
    - [Resources](#resources-1)
  - [Expansions and Renewals](#expansions-and-renewals)
  - [Voice of the Customer](#voice-of-the-customer)
    - [Resources](#resources-2)
  - [Account Management](#account-management)
    - [Resources](#resources-3)
  - [QBRs](#qbrs)
    - [Resources](#resources-4)
- [Playbooks](#playbooks)
  - [Low Utilization](#low-utilization)
    - [Planning](#planning)
    - [Execution](#execution)
  - [Account Health](#account-health)

---

# Recurring Daily Responsibilities

The following are a sample of the activities that a TA is responsible for on a daily basis:

## Internal

- Establish up-to-date account map / plan
  - Org, roles & responsibilities, learn the state of things, intros to folks
- Account Monitoring: flag and schedule internal meetings, work with customer on corrective action, customer health

## External

- Account Monitoring: flag and schedule internal meetings, work with customer on corrective action, customer health
- Relationship building
  - Champion identification/building/nurture activities
  - Tech advocate identification/building/nurture activities
- Standardized customer communications
  - Incident response
  - Product updates
  - Product research
- Usage & Value Reporting on a quarterly basis

# Processes

Similar to playbooks, processes exist to ensure consistent practices amongst teams. Processes that the TA team either drives or heavily contributes to are outlined below.

## Renewal Process

Finance, TA, Sales, and Value Engineering all play a key role in customer renewals. While the customer renewal is a single event, our teams are constantly assessing the health of our customers and taking corrective action as necessary.

### Process Overview

Our renewal process is a 5 step process that begins 120 days prior to renewal date. The process lifecycle is as follows:
![Renewal Process](https://user-images.githubusercontent.com/7228359/220760306-60b90fc3-3701-44e2-aad9-f61c386ffee8.jpg)

### Renewal Process Phases

| Phase                        | Event                                                                                                         | Steps                                                                                                                                                                                                  | Output                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Health Assessment            | Vitally triggers Health Assessment project 120 days before renewal                                            | 1) TA completes Health Assessment note template in Vitally with AE <br> 2) review with TA and AE Mgr; align on Renewal Health Assessment rating (green, yellow, red)                                   | If red or yellow, elevate to Get Well track <br> If green, monitor                                                             |
| Get Well (Yellow & Red only) | TA leadership hosts weekly deep dives for Sales/TA leadership and account team                                | 1) Prior to meeting, TA & AE fill-in Customer Renewal Health Assessment <br> 2) TA Mgr reviews with TA prior to meeting <br> 3) During meeting, TA presents assessment and plan, with input from AE, aligning on risk, opportunity, needs, and next steps | Follow up on action plans from meeting for yellow & red accounts <br> - Review again 30 days later <br> Monitor green accounts |
| Renewal Plan                 | AE leadership: weekly forecast <br> TA leadership: bi-weekly inspection to monitor progress of get-well plans | Yellow & Red: <br> - TA: Check-in on plan progress, additional corrective action as required <br> Green: <br> - Continue monitoring                                                                    | AE: Project initial renewal outcome: Full churn, partial churn, flat renewal                                                   |
| Renewal Forecast             | AE & TA leadership: weekly forecast                                                                           | Yellow & Red: <br> - AE: Renewal outcome negative (Full or partial churn) <br> Green: <br> - AE: Renewal outcome neutral or positive (Flat or incremental)                                             | Quarterly forecast                                                                                                             |
| Process Renewal              | AE & TA leadership: weekly forecast                                                                           | AE: Renewal opportunity processed accordingly                                                                                                                                                          | Renewal event complete                                                                                                         |

## Red Accounts

As the team accountable for our customers' technical success, including consumption and utilization, TAs must keep a close pulse on the overall health of our customers. The Red Accounts Program exists to ensure we are assessing customer health at all times and collectively taking corrective steps to improve customer health as needed.

### Criteria

A customer may become a Red Account based on events or account-level characteristics that elevate it to a concerning state.

Events within the company that trigger elevation to a Red Account, include but aren't limited to:

- Macro
  - Massive Layoffs (manually tracked)
  - Budget Cuts (manually tracked)
- Champion Departure (manually tracked)
- Major Acquisition (manually tracked)
- Migration to GitHub (specifically, GitHub Cloud) (manually tracked)

Account-level characteristics that trigger elevation to a Red Account, include but aren't limited to:

- Customer fails to deploy their Production Infrastructure within 60 days of contract signature (automatically tracked)
- Health Score at or below 5 (automatically tracked)
- No interaction with customer within the last 40 days based on Salesforce (automatically tracked)
- 5%+ decline in search and code intelligence across two consecutive months (automatically tracked)
- Non-use (or inconsistent/infrequent use) of products purchased (manual; automatic in the future)
  - Code Insights
  - Batch Changes

### Process

An account may trigger for the Red Accounts program manually or programmatically based on attributes about the account. A TA or AE may elevate an account to the Red Account program at anytime by updating the `ACCOUNT - RED ACCOUNT?` field in Vitally to true.

For any customer that is tagged as a Red Account, a notification will be posted in #red-accounts via the Vitally integration. The account TA, in close partnership with the AE, will initiate a thread on the post in the #red-accounts channel providing relevant information about the current state of the account, needs, and the intended action plan. Any asks or needs against the intended action plan should be initiated via a thread on the slack post to allow for visibility and transparency.

Based on the needs of the situation, Technical Success and Sales leadership will review the request and the account team will align on the action plan forward.

### Roles and Responsibilities

The TA will monitor the overall account and where applicable update the Vitally account record to indicate a `ACCOUNT - RED ACCOUNT?` is true.

Should either an AE or TA feel that an account which isn't automatically categorized as red, is in fact red for any reason, they should align and the TA should update the Vitally account record.

Both the AE and TA are responsible for participating in the creation of the action plan, and overseeing the action plan through to resolution.

If and where Engineering work is required, an Engineering Technical Project Manager (TPM) will manage the action plan and coordinate resources.

## Customer Health

A Customer Health Score is used to give us a view into the wellbeing of our customer base.

Vitally is the tool we use to calculate this score using the following categories:

| Customer Tier              | Weight |
| -------------------------- | ------ |
| TA Pulse                   | 5%     |
| Technical Health           | 5%     |
| Relationships & Engagement | 15%    |
| Utilization                | 75%    |

Those categories are made up of the following data points:

**TA Pulse**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Relationship - CE Pulse | This is the TA's opinion of the account health. Healthy, Concerning, or Poor | Manually set by TA |

**Technical Health**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Last Month Versions Behind | At the end of each calendar month, we look at the version that the instance is currently on compared to the most recent version of Sourcegraph. This is that difference. | Sourcegraph generated (BigQuery) |

**Relationships & Engagements**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Relationship - Active Champion? | This trait indicates that we have an active champion built inside the customer. | Manually set by TA |
| Relationship - Access to buyer? | This trait indicates that we currently have a line of communication to the buyer of Sourcegraph or the buyer for the renewal. | Manually set by TA |
| Last Activity | Looks at last contact as logged in by Salesforce | Salesforce |

**Utilization**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Usage Score | This is a metric generated by the Sourcegraph analytics team | Sourcegraph generated (BigQuery) |
| Last Month Mau Over Seats | At the end of each calendar month we look at the Monthly Active Users of an instance for that month. We then divide that by the number of seats they have purchased. Number between 0 (bad) and 1 (good)| Sourcegraph generated (BigQuery) |

### Processes

Vitally will update this score once an hour, but the underlying traits still need to be maintained.

This [Project](https://sourcegraph.vitally.io/settings/projects/project-templates/23608733-771d-46f4-ae7f-f2f9fd603b39) will remind the TA team once a month to keep these traits up to date.

The remaining traits will be automatically imported to Vitally from BigQuery and Salesforce.

This [View](https://sourcegraph.vitally.io/views/598e039e-947e-4c04-9b0d-b98f38821159) can be used to see the current state of these traits for your accounts all in one spot.

# Post-Sales Customer Touchpoints

## Post-Sales Partnership Kickoff

### TA Assignment

Approximately 45 days before closure, TA leadership will assign the Technical Advisor Support Level on the Salesforce account to determine the customer segmentation for the customer. Once assigned, an account is created in Vitally, segmented as a Prospect. 35 days before closure, TA leadership assigns a TA to the Salesforce account record and to the Vitally record.

### Hand-off from pre-to-post sales

35 days before closure, a Vitally playbook initiates and tasks the CE to create a pre-to-post sales handoff note. Once created, the CE scheduled a hand-off meeting with the AE, TA, and IE (if IE will be helping with the production implementation).

The TA begins to plan and prepare for the kick-off and begins to prepare for new user onboarding. They do this by working with the AE and CE to understand how many seats have been purchased, where these teams are located, and by identifying customer contacts to help coordinate onboarding.

Once a customer signs on with Sourcegraph, the TA will

- Generate a full license key.
- Schedule a kickoff call with our main contact(s) to plan the engagement.

The TA uses [this deck](https://docs.google.com/presentation/d/1q2oPqCOO8XuCC0F2DuVdNpDh30OuIdMpKz9gNAqHces/edit#slide=id.g1e638d9bd88_1_379) for the partnership kick-off.

## User Onboarding

A critical part of the customer experience is user onboarding. After deal close, and once the customers' production infrastructure is setup and configured, TAs are responsible for driving adoption of users onto Sourcegraph. During this phase, the TA is executing a user roll out plan to onboard the users onto Sourcegraph.

### Resources

- [Customer Health Dashboard](https://sourcegraph.looker.com/dashboards-next/194)

## Developer Enablement

We have a 6-prong approach to developer enablement so that are able to meet each customer and each dev culture where they are. You can see an overview of our methods below:
![enablement program](https://user-images.githubusercontent.com/7228359/220773126-cbd243f0-045f-4072-83ce-e31839e836cf.jpg)

For synchronous webinars, a standard customer engagement should include three core trainings, as well as optional topics customized to customer needs or requests, or demos of new features or use cases that are relevant to the team. These webinars may be run repeatedly if, for example, you're expanding into a new business unit within an existing customer.

### Standard trainings

- [Sourcegraph 101](https://github.com/sourcegraph/customer-training/tree/main/trainings/sourcegraph-101) ([Video training](https://drive.google.com/file/d/1emSuz6Q871OC2YOadcfkrUXfuopn6JCB/view?usp=sharing)) - The basic "how to use Sourcegraph search" webinar. This should take a new users from 0 to able to use the tool competently. The repo includes a fully scripted talk track, a lesson plan version of the talk track for those who prefer that format to a script, a Slack follow up message to send to customers, test exercises for customers to run, and the content formatted for inclusion in a customer's LMS for self-directed learning.
- [Sourcegraph 102](https://github.com/sourcegraph/customer-training/tree/main/trainings/sourcegraph-102) ([Video training](https://drive.google.com/file/d/1813s6MTmFqtWJ5IYVc6ivkX3mKlY6X7T/view?usp=sharing)) - This should take a customer from being a general Sourcegraph user through being able to use the majority of Sourcegraph's advanced search features.
- [Admin training webinar](https://github.com/sourcegraph/customer-training/tree/main/trainings/admin-webinar) - This should take an admin for the instance through all of the elements of the admin area of the app, and leave them feeling confident with instance and user management training. This is not intended for cluster admins, and so does not cover sizing the cluster, etc.

### Resources

- [Training Webinar Recording](https://chorus.ai/meeting/8FEAE02538644AA3ABB22149750E6308?)
- [Customer Training Engineer repo](https://github.com/sourcegraph/customer-training/tree/main/trainings)
- [Working with the Sourcegraph GraphQL API](working-with-the-sourcegraph-graphql-api.md)

## Expansions and Renewals

Expanding Sourcegraph to a new team or unlocking new enterprise features could involve a full cycle of CE discovery and demos and value mapping. The TA is not expected to directly lead the expansion opportunity itself,as that is a CE responsibility. However, the TA will be engaged and consulted throughout.

A basic renewal (no expansion) would not involve a CE. The TA will assist the Account Executive through the renewal activities and process.

## Voice of the Customer

A key role we play for our customers is serving as an advocate on their behalf back to internal product teams. As requests or feedback is shared from our customers, we share that with our product teams serving as a liaison on the customers' behalf.

### Resources

- [Product Feedback Dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000015UGhEAM/view?queryScope=userFolders)

## Account Management

As TAs we are responsible for the technical success of our customers. Post-sales we nurture these relationships and manage the accounts by paying attention to customer health metrics. Usage, adoption, and customer sentiment are important indicators that we monitor and address. It is recommended that TAs routinely monitor this to keep a pulse on customer metrics. There is also a link to this from the Salesforce Account record.

### Resources

- [Customer Health Dashboard](https://sourcegraph.looker.com/dashboards-next/194)
- [Instance overview dashboard](https://sourcegraph.looker.com/dashboards-next/167)

## QBRs

_This section contains information from when CE / pre-sales owned the process. It will be updated as these processes are redefined_

We often hold QBRs, or Quarterly Business Reviews (sometimes referred to as an Executive Business Review), with our customers which recaps how Sourcegraph has been integrated into and creating value for their organization over the past quarter. These QBRs are typically created and presented by the CE assigned to the account, in conjunction with the account’s AE. They are typically presented in a slide deck format to executive-level leadership, and highlight usage metrics and use cases for their org. Additionally, they are used to gather feedback and comments from leadership regarding Sourcegraph.

### Resources

- The [QBR Guide](https://docs.google.com/document/d/1gFRn2SkX19sU0GSMGndNkk-I9cFe7FlN3xlZ2UX3Frs/edit#) details how CEs should execute a QBR.
- [QBR Quickstart video](https://www.loom.com/share/fb63d3286cda43a3b57913c5bdcc9806)
- [QBR Deck Template](https://docs.google.com/presentation/d/10TTvP3_U9-z_40vyqo1Bi_f0lD2s8TclFLnqvXIdU1s/edit#slide=id.gc868ddee9e_0_0)
- [QBR Deck Template (with value realization)](https://docs.google.com/presentation/d/1PMd0_nuPrhM7m_vKp9eW-GYDbhwUk1D4DQHy8-smObE)
- [Example QBR Deck](https://docs.google.com/presentation/d/1bWjDHA5U6luV4h6jNDo9fyj11tkpf_nHi9DhbLsPxr0/edit#slide=id.g96a3fc9b53_0_0)
- [Example QBR Survey](https://docs.google.com/document/d/1v3JhUOECfBmE9HHEEYZKPQY_jLllcismWZoaRPkVei4/edit?usp=sharing)
- [Sample QBR Recording on Chorus](https://chorus.ai/meeting/36928A0D99694DCB8E0AC9D028E44A1D?search=qbr&recordingsOnly=true&transcript=false)

# Playbooks

To enable TAs and ensure consistent practices, our team may produce playbooks from time-to-time. These playbooks should serve as a useful onboarding resource to new TAs and a helpful refresher for TAs as well.

## Low Utilization

Any customer whose utilization score (Monthly Active Users / Total Seats Purchased) is below 80% 45+ days into their tenure as a customer triggers a Low Utilization Project in [Vitally](https://sourcegraph.vitally.io/) and is assigned to the TA. The projects consists of two parts: planning and execution.

### Planning

The TA fills out the `Account - Context on Low Utilization field` in Vitally, providing a brief overview about: Why is utilization below 80%? Are there any in-progress activities occurring right now to directly impact adoption? The TA also completes a Get Well Plan to align with the Account Team and Sales and TS leadership on the go forward plan. The TA provides the following as part of the initial plan:

- Current State of the Account, Relationship
  - Description: What's the overall pulse of the account? Who do we have relationships with and how have things been going?
- Are we in their dev onboarding flow?
  - Description: We want every new dev to learn about Sourcegraph as they onboard to their company so it's important that we try and get our stakeholders to include links and licensing provisioning for Sourcegraph as part of their new employee onboarding program.
- Do we have documentation in their CMS?
  - Description: We want to meet our customers where they are at. Most every company have their own internal documentation solution and we want Sourcegraph to be linked and referenced there to make it easy for devs to learn about and self-service their questions and needs.
- Do you have recurring syncs with biz stakeholders?
  - Description: How actively engaged are we and the stakeholders that we are talking to, are they able to connect us and help us with enablement and training?
- What are your plans for driving Utilization?
  - Description: This asks the TA and Account Team to lay out their specific plan and actions for increasing utilization to the 80% threshold or above.
- Where are you stuck / where do you need help?
  - Description: This is an opportunity for the TA and Account Team to call out risks or blockers and ask for help from other teams or leadership in order to execute the plan successfully.

### Execution

After plan creation, the execute phase of the projects consists of bi-weekly updates from the TA via the Get Well Plan in Vitally which is reviewed by TA leadership.

## Account Health

The [account health playbook](https://docs.google.com/document/d/1YeuwtlplEkZEnmLMXZ1vKjJGImUZCIb1x4aCLXcNavc/edit) offers a repeatable framework for mitigating the risk of low adoption scores by offering suggestions for engagement as well as repeatable training and reusable content. This is a living document that should change to reflect available components in the [Customer Health Dashboard - Individual Customer](https://sourcegraph.looker.com/dashboards-next/194?Unique+Server+ID=Eventbrite) and mature over time to provide more refined resources to support Customer Engineers.
