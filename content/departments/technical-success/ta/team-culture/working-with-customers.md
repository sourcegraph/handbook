# Technical Advisors: Working with Customers

A TA, being a post-sales technical account manager, works with customers in a number of different ways throughout the customer journey. This page captures high-level descriptions of the ways in which we work with or on behalf of our customers. Each section contains links to some supporting documents, templates, processes, playbooks, and recordings.

- [Technical Advisors: Working with Customers](#technical-advisors-working-with-customers)
<!-- - [Recurring Daily Responsibilities](#recurring-daily-responsibilities)
  - [Internal](#internal)
  - [External](#external) -->
- [Processes](#processes)
  - [Pre-to-Post-Sales Handoff](#post-sales-handoff)
    - [TA Assignment](#ta-assignment)
    - [Hand-off from pre-to-post sales](#hand-off-from-pre-to-post-sales)
  - [Renewal Process](#renewal-process)
    - [Process Overview](#process-overview)
    - [Renewal Process Phases](#renewal-process-phases)
  - [Red Accounts](#red-accounts)
- [Customer Health](#customer-health)
  - [Processes](#processes-1)
- [Post-Sales Customer Journey](#post-sales-customer-lifecycle)
  - [User Onboarding](#user-onboarding)
    - [Resources](#resources)
  - [Developer Enablement](#developer-enablement)
    - [Standard trainings](#standard-trainings)
    - [Resources](#resources-1)
- [Account Management](#account-management)
  - [Customer Data & Analytics](#customer-data-analytics)
  - [Voice of the Customer](#voice-of-the-customer)
  - [Champion Building & Relationship Management](#champion-building--relationship-management)
  - [QBRs](#qbrs)

---

# Recurring Responsibilities

- see [TA Cadence](../ta-playbooks/ta-cadence.md)

<!-- # Recurring Daily Responsibilities

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
- Usage & Value Reporting on a quarterly basis -->

# Processes

Similar to playbooks, processes exist to ensure consistent practices amongst teams. Processes that the TA team either drives or heavily contributes to are outlined below.

## Post Sales Handoff

This process occurs through both Salesforce and Vitally. Below is an overview of the process along with additional details about tooling automation that facilitates the process.

### Process Overview

The pre-to-post sales handoff process consists of the following steps:

1. Technical Advisor Support Level is [manually assigned](#ta-assignment) on the Salesforce Account by TA leadership
2. The account is created in Vitally automatically once Support Level is set
3. Customer Segmentation Assignment Vitally Playbook runs to assign account segment attribute of: Strategic, Enterprise, or Commercial.
4. Assign Scaled Success Accounts Vitally Playbook runs to check if Account is in the commercial segment and is less than $50k ARR. If so, account is assigned segment of "Scaled Success"
5. Customer Lifecycle Stages Vitally Playbook runs to assign account as "0. Propsect", the first step in the customer lifecycle. At this point the account is created and all initial attributes about the new customer are assigned in Vitally.
6. 30 days out from expected close date from the Salesforce new business opportunity, the Pre to Post-Sales Hand-off and Planning Vitally Playbook initiates to facilitate [the handoff process](#hand-off-process).
7. Once the deal closes, the TA issues a [production license](#production-license) and initiates their onboarding.

You can read more about each step below.

### TA Assignment

Approximately 45 days before closure, TA leadership will assign the Technical Advisor Support Level on the Salesforce account to determine the customer segmentation for the customer. Once assigned, an account is created in Vitally and segmented as a Prospect. 35 days before closure, TA leadership assigns a TA to the Salesforce account record which is then updated on the Vitally record. The TA is notified of the assignment via Vitally.

### Hand-off process

35 days before closure the Pre to Post-Sales Hand-off and Planning Vitally playbook runs which creates the Handoff Doc template in Vitally and assigns the CE a task to fill out and schedule the knowledge transfer / handoff with the assigned TA and AE. If IE will be helping with the production implementation, they should attend too.

After the knowledge transfer session, either the TPM will be introduced to the customer to being planning their production deployment or if IE will not be involved, the TA begins to plan and prepare for the [partnership kick-off](https://docs.google.com/presentation/d/1q2oPqCOO8XuCC0F2DuVdNpDh30OuIdMpKz9gNAqHces/edit#slide=id.g1e638d9bd88_1_379) and begins to prepare for new user onboarding. They do this by working with the AE and CE to understand how many seats have been purchased, where these teams are located, and by identifying customer contacts to help coordinate onboarding.

### Production License

Once a customer signs on with Sourcegraph, the TA will [generate a full license key](../../ce/process/license_keys.md) via Sourcegraph.com site admin based on the details of the contract.

## Renewal Process

Finance, TA, Sales, and Value Engineering all play a key role in customer renewals. While the customer renewal is a single event, our teams are constantly assessing the health of our customers and taking corrective action as necessary.

### Process Overview

Our renewal process is a 5 step process that begins 120 days prior to renewal date. The process lifecycle is as follows:
![Renewal Process](https://user-images.githubusercontent.com/7228359/220760306-60b90fc3-3701-44e2-aad9-f61c386ffee8.jpg). The Renewal Playbook Vitally playbook triggers the renewal process.

### Renewal Process Phases

| Phase                                  | Event                                                                                                                     | Steps                                                                                                                                                                  | Output                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Health Assessment                      | Vitally triggers Health Assessment doc 120 days before renewal                                                            | 1) TA completes Health Assessment doc template in Vitally with AE <br> 2) review with TA and AE Mgr; align on Renewal Health Assessment rating (green or yellow / red) | If yellow / red, elevate to Lighthouse program <br> If green, monitor        |
| Lighthouse Program (Yellow / Red only) | To be filled in                                                                                                           | To be filled in                                                                                                                                                        | To be filled in <br> Monitor green accounts                                  |
| Renewal Plan                           | AE leadership: weekly forecast <br> Leadership: bi-weekly inspection to monitor progress of Lighthouse program save plans | Yellow / Red: <br> - TA: Check-in on plan progress, additional corrective action weekly <br> Green: <br> - Continue monitoring                                         | AE: Project initial renewal outcome: Full churn, partial churn, flat renewal |
| Renewal Forecast                       | AE & TA leadership: weekly forecast                                                                                       | Yellow / Red: <br> - AE: Renewal outcome negative (Full or partial churn) <br> Green: <br> - AE: Renewal outcome neutral or positive (Flat or incremental)             | Quarterly forecast                                                           |
| Process Renewal                        | AE & TA leadership: weekly forecast                                                                                       | AE: Renewal opportunity processed accordingly                                                                                                                          | Renewal event complete                                                       |

## Red Accounts

** To be updated, Lighthouse program to succeed this **

# Customer Health

A Customer Health Score is used to give us a view into the wellbeing of our customer base.

Vitally is the tool we use to calculate this score. Vitally will update this score once an hour, but the underlying traits still need to be maintained.
The customer health score is calculated using the following standard categories:

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
| Precise Intel Status | Whether or not precise code navigation is enabled on at least one language. This is either active or inactive. | Sourcegraph generated (BigQuery) |
Last 90 Days Defect Tickets | The number of defect support tickets in the last 90 days. Less than 2 is considered healthy, 5 or more is considered poor. | Sourcegraph generated (BigQuery) |
Last 90 Days Help Tickets | The number of questions or general help support tickets in the last 90 days. Less than 10 is considered healthy, 15 or more is considered poor. | Sourcegraph generated (BigQuery) |

**Relationships & Engagements**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Relationship - Active Champion? | This trait indicates that we have an [active champion](#champion-building--relationship-management) built inside the customer. | Manually set by TA |
| Relationship - Access to buyer? | This trait indicates that we currently have a line of communication to the buyer of Sourcegraph or the buyer for the renewal. | Manually set by TA |
| Last Activity | Looks at last contact as logged in by Salesforce. 14 or less days is considered healthy, 30 or more days of inactivity is considered poor. | Salesforce |

**Utilization**
| Trait | Description | Source |
| ---------------- | ---------------------------------------------- | --- |
| Usage Score (Last 4 Wk DAU / Last Month MAU) | This looks at the rolling 4 week average of daily active users over last months monthly active users. 30% or higher (.3) is considered healthy, 20% or less is considered poor (.2). | Sourcegraph generated (BigQuery) |
| Last Month Mau Over Seats | At the end of each calendar month we look at the Monthly Active Users of an instance for that month. We then divide that by the number of seats they have purchased. 80% is considered healthy (.8), less than 50% (.5) is considered poor. | Sourcegraph generated (BigQuery) |

# Post-Sales Customer Lifecycle

Our customer lifecycle is set and maintained through the Customer Lifecycle Stages playbook in Vitally.

Our customer lifecycle is comprised of the following stages:
`0. Prospect` - a late-stage new business prospect that is 45- days out from closing. During this phase, CE is handing off and transferring knowledge to TA, if IE will be helping with the production deployment they will begin planning for that, the TA is preparing for partnership kick-off.
`1. Onboarding` - when the deal closes, the account enters the [onboarding phase](#user-onboarding) of the lifecycle. Customers remain in this phase for the first 60 days of the partnership. During this time, the team is focused on ensuring their production instance is complete and onboarding end users. The goal is to get to 80% consumption of seats by the end of the first 60 days.
`2. Adopting` - after the initial onboarding phase, the account enters the [adoption](#adoption) phase. The focus in this phase is on driving greater consumption and engagement with the product. The team works with the customer to identify and implement best practices & enable on use cases that drive greater adoption and daily use. Customers remain in this phase until they hit our utilization targets of 30% Daily Active Use / Monthly Active use and 80% Monthly Active use / Total seats purchased.
`3. Nurturing` - once the customer hits their utilization targets, % consumption, they enter the nurturing phase. The focus in this phase shifts to maximizing the value the customer is getting from Sourcegraph. This includes identifying and implementing advanced product features, custom integrations, or new use cases. At this point in the journey we want to also be looking for co-marketing opportunities.
`4. Renewing` - 120 days out from contract renewal, the account transitions into the renewing phase. The team focuses on ensuring the customer remains happy with the product and we are well-positioned for a strong renewal. The [renewal process](#renewal-process) kicks off to facilitate the renewal.

## User Onboarding

A critical part of the customer experience is user onboarding. After deal close, and once the customers' production infrastructure is setup and configured, TAs are responsible for driving adoption of users onto Sourcegraph. During this phase, the TA is executing a user roll out plan to onboard the users onto Sourcegraph.

### Resources

- [Customer Health Dashboard](https://sourcegraph.looker.com/dashboards-next/194)

## Adoption

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

# Voice of the Customer

A key role we play for our customers is serving as an advocate on their behalf back to internal product teams. As requests or feedback is shared from our customers, we share that with our product teams serving as a liaison on the customers' behalf. We do so by logging their feedback in Salesforce on the [Product Feedback Dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000015UGhEAM/view?queryScope=userFolders).

# Account Management

As TAs we are responsible for the technical success of our customers. Post-sales we nurture these relationships and manage the accounts by paying attention to customer health metrics. Usage, adoption, and customer sentiment are important indicators that we monitor and address. It is recommended that TAs routinely monitor this to keep a pulse on customer metrics. There is also a link to this from the Salesforce Account record.

## Customer Data & Analytics

Looker is our source for customer data & analytics. Two key dashboards we use are:

- [Customer Health TS Dashboard](https://sourcegraph.looker.com/dashboards/484)
- [Instance Overview Dashboard](https://sourcegraph.looker.com/dashboards/409?Account+name=Apex+Clearing+Corp&Installer+email=))

## Champion Building & Relationship Management

A core responsibility of the TA is to identify, build, and maintain strong relationships with customers. We define a champion as someone who:

1. Has power and influence within their company
2. Actively sells and promotes on our behalf
3. Has a vested interest in our success, and see it as their success

All three of these aspects must be true in order to be a true champion. TAs must constantly be testing their champions to ensure they remain true champions, and where necessary either build up existing champions or identify new ones.

See more of our champion training [here](https://docs.google.com/presentation/d/1RPqSkCgKU0za85fe2QCOuhlzoy6a2fJBlRgZbbz6ceU/edit#slide=id.g1eeb416435b_0_56) and on [Highspot](https://sourcegraph.highspot.com/).

## QBRs

An important dimension of relationship management and ensuring that our customers are getting the expected value and outcomes from Sourcegraph is understood and shared through Quarterly Business Reviews (QBRs). We ideally want to lead these conversations with customers on a quarterly basis, but at times may hold them bi-annually. TAs are responsible for leading the planning and execution of customer QBRs with close input from internal team members such as Sales.

The format of QBRs is as follows:

- Intros
- Partnership reap
- Understanding customer upcoming strategy, initiatives, and priorities
- Past quarter progress & outcomes
- Value realization & capability maturity model
- Product roadmap, demo, & feedback

[(Deck)](https://docs.google.com/presentation/d/1PMd0_nuPrhM7m_vKp9eW-GYDbhwUk1D4DQHy8-smObE/edit#slide=id.g239a2137c1c_0_2240)
