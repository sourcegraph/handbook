# Technical Advisors: Working with Customers

A TA, being both a post-sales technical account manager, works with customers in a number of different ways throughout the customer journey. This page captures high-level descriptions of the ways in which we work with or on behalf of our customers. Each section contains links to some supporting documents, templates, processes, playbooks, and recordings.

- [Recurring Daily Responsibilities](#recurring-daily-responsibilities)
  - [Internal](#internal)
  - [External](#external)
- [Process](#processes)
  - [Renewals](#renewal-process)
  - [Red Accounts](#red-accounts)
  - [Customer Health](#customer-health)
- [Post-Sales Customer Touchpoints](#post-sales-customer-touchpoints)
  - [Post-Sales Engagement Kickoff](#post-sales-engagement-kickoff)
  - [New User Onboarding](#user-onboarding)
  - [Webinars / Trainings / Q&A Sessions](#webinars--trainings--qa-sessions)
  - [QBRs](#qbrs)
  - [Expansions and Renewals](#expansions-and-renewals)
  - [Account Management](#account-management)
- [Playbooks](#playbooks)
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

### Process and Roles & Responsibilities

Our renewal process is a 5 step process that begins 180 days prior to renewal date.

You can read about the process and roles & responsibilities [here](https://docs.google.com/presentation/d/1TguV96BTdC6AuXX5DLoMDG1yWLe5HU5qmyWZD79Odjo/edit?usp=sharing).

## Red Accounts

_This section contains information from when CE / pre-sales owned the process. It will be updated as these processes are redefined_

As the team accountable for our customers' technical success, usage, and adoption of our products, TAs must keep a close pulse on the health of our customers. The Red Accounts Program exists to ensure we as a company are assessing customer health at all times.

### Overview

For any account that is designated as having a health rating of red - either via [calculated score](https://sourcegraph.looker.com/dashboards-next/179?Customer+Engineer=&Account+Executive=&Unique+Server+ID=&Region=) or by a member of the account team - the AE and TA will jointly provide a current status of the account, identify any necessary asks of the business in order to best serve the customer, create an appropriate action plan, and track through to resolution (ideally promotion of the health from red to yellow or green).

### Red Accounts Process

In slack, the #red-accounts channel has been created so that when the Customer Health field on the Salesforce Account record is set to Red, a post is auto-triggered in the slack channel and a corresponding row will be automatically added to the Account Tracker tab of the [Red Accounts](https://docs.google.com/spreadsheets/d/1eVgWhrtgH8WQGo_pRuMseqz-Bk1P1Bymrlkutzz5jEA/edit#gid=0) Google Sheet. The AE / CE will jointly fill in relevant information to understand current state, needs, and the intended actions. Any asks or needs against the intended action plan should be initiated via a thread on the auto-generated slack post; this allows for visibility and transparency.

### Roles and Responsibilities

The TA will monitor the Customer Health dashboard and where applicable update the Customer Health field on the Salesforce Account record to red.

Should an AE or TA feel that an account which isn't designated as red via the health dashboard, is in fact red for any reason (eg a champion leaves, etc) they should align, and the CE should update the Salesforce Account record to red.

Both the AE and TA are responsible for participating in the creation of the action plan, and overseeing the action plan through to resolution.

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
| Relationship - Access to buyer? | This trait indicates that we currenly have a line of communication to the buyer of Sourcegraph or the buyer for the renewal. | Manually set by TA |
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

## Post-Sales Engagement Kickoff

_This section contains information from when CE / pre-sales owned the process. It will be updated as these processes are redefined_

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

## User Onboarding

_This section contains information from when CE / pre-sales owned the process. It will be updated as these processes are redefined_

A critical part of the customer experience is user onboarding. After deal close, once the customers' production infrastructure is setup and configured, CEs are responsible for driving adoption of users onto Sourcegraph. During engagement kick-off, CE works with our customer stakeholders to create a plan to onboard their users.

### Resources

- [Customer Health Dashboard](https://sourcegraph.looker.com/dashboards-next/194)

## Webinars / Trainings / Q&A Sessions

_This section contains information from when CE / pre-sales owned the process. It will be updated as these processes are redefined_

A standard customer engagement should include three core trainings, as well as optional topics customized to customer needs or requests, or demos of new features or use cases that are relevant to the team. These webinars may be run repeatedly if, for example, you're expanding into a new business unit within an existing customer.

### Standard trainings

- [Sourcegraph 101](https://github.com/sourcegraph/customer-training/tree/main/trainings/sourcegraph-101) ([Video training](https://drive.google.com/file/d/1emSuz6Q871OC2YOadcfkrUXfuopn6JCB/view?usp=sharing)) - The basic "how to use Sourcegraph search" webinar. This should take a new users from 0 to able to use the tool competently. The repo includes a fully scripted talk track, a lesson plan version of the talk track for those who prefer that format to a script, a Slack follow up message to send to customers, test exercises for customers to run, and the content formatted for inclusion in a customer's LMS for self-directed learning.
- [Sourcegraph 102](https://github.com/sourcegraph/customer-training/tree/main/trainings/sourcegraph-102) ([Video training](https://drive.google.com/file/d/1813s6MTmFqtWJ5IYVc6ivkX3mKlY6X7T/view?usp=sharing)) - This should take a customer from being a general Sourcegraph user through being able to use the majority of Sourcegraph's advanced search features.
- [Admin training webinar](https://github.com/sourcegraph/customer-training/tree/main/trainings/admin-webinar) - This should take an admin for the instance through all of the elements of the admin area of the app, and leave them feeling confident with instance and user management training. This is not intended for cluster admins, and so does not cover sizing the cluster, etc.

### Other trainings

- Security use case training - Currently in progress with ETA for completion of EOQ Q2FY23. This should walk customers through how to use Sourcegraph for the [security use case](https://about.sourcegraph.com/use-cases#find-and-fix-security-vulnerabilities).

### Resources

- [Training Webinar Recording](https://chorus.ai/meeting/8FEAE02538644AA3ABB22149750E6308?)
- [Customer Training Engineer repo](https://github.com/sourcegraph/customer-training/tree/main/trainings)

## QBRs

_This section contains information from when CE / pre-sales owned the process. It will be updated as these processes are redefined_

We often hold QBRs, or Quarterly Business Reviews (sometimes referred to as an Executive Business Review), with our customers which recaps how Sourcegraph has been integrated into and creating value for their organization over the past quarter. These QBRs are typically created and presented by the CE assigned to the account, in conjunction with the account’s AE. They are typically presented in a slide deck format to executive-level leadership, and highlight usage metrics and use cases for their org. Additionally, they are used to gather feedback and comments from leadership regarding Sourcegraph.

### Resources

- The [QBR Guide](https://docs.google.com/document/d/1gFRn2SkX19sU0GSMGndNkk-I9cFe7FlN3xlZ2UX3Frs/edit#) details how CEs should execute a QBR.
- [QBR Quickstart video](https://www.loom.com/share/fb63d3286cda43a3b57913c5bdcc9806)
- [QBR Deck Template](https://docs.google.com/presentation/d/10TTvP3_U9-z_40vyqo1Bi_f0lD2s8TclFLnqvXIdU1s/edit#slide=id.gc868ddee9e_0_0)
- [QBR Deck Template (with value realization)](https://docs.google.com/presentation/d/1PMd0_nuPrhM7m_vKp9eW-GYDbhwUk1D4DQHy8-smObE)
- [Example QBR Deck](https://docs.google.com/presentation/d/1bWjDHA5U6luV4h6jNDo9fyj11tkpf_nHi9DhbLsPxr0/edit#slide=id.g96a3fc9b53_0_0)
- [Example QBR Survey](https://www.surveymonkey.com/results/SM-K6LMJQMZ7/)
- [Sample QBR Recording on Chorus](https://chorus.ai/meeting/36928A0D99694DCB8E0AC9D028E44A1D?search=qbr&recordingsOnly=true&transcript=false)

## Expansions and Renewals

Expanding Sourcegraph to a new team or unlocking new enterprise features could involve a full cycle of CE discovery and demos and value mapping. The TA is not expected to directly lead the expansion opportunity itself,as that is a CE responsibility. However, the TA will be engaged and consulted throughout.

A basic renewal (no expansion) would not involve a CE. The TA will assist the Account Executive through the renewal activities and process.

## Voice of the Customer

A key role we play for our customers is serving as an advocate on their behalf back to internal product teams. As requests or feedback is shared from our customers, we share that with our product teams serving as a liasion on the customers' behalf.

### Resources

- [Product Feedback Dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000015UGhEAM/view?queryScope=userFolders)

## Account Management

As TAs we are responsible for the technical success of our customers. Post-sales we nurture these relationships and manage the accounts by paying attention to customer health metrics. Usage, adoption, and customer sentiment are important indicators that we monitor and address. It is recommended that TAs routinely monitor this to keep a pulse on customer metrics. There is also a link to this from the Salesforce Account record.

### Resources

- [Customer Health Dashboard](https://sourcegraph.looker.com/dashboards-next/194)
- [Instance overview dashboard](https://sourcegraph.looker.com/dashboards-next/167)

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
