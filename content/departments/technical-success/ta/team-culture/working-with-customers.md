# Technical Advisors: Working with Customers

A TA, being a post-sales technical success manager, works with customers in a number of different ways throughout the customer journey. This page captures high-level descriptions of the ways in which we work with and on behalf of our customers

<!-- - [Recurring Daily Responsibilities](#recurring-daily-responsibilities)
  - [Internal](#internal)
  - [External](#external) -->

- [TA Processes](#ta-processes)
  - [Pre-to-Post-Sales Handoff](#post-sales-handoff)
    - [TA Assignment](#ta-assignment)
    - [Hand-off from pre-to-post sales](#hand-off-process)
  - [Renewal Process](#renewal-process)
    - [Process Overview](#process-overview)
    - [Renewal Process Phases](#renewal-process-phases)
  - [Success Plans](#success-plans)
  - [Churn Save Lighthouse Program](#lighthouse-program)
- [Post-Sales Customer Journey](#post-sales-customer-lifecycle)
  - [User Onboarding](#user-onboarding)
    - [Resources](#resources)
  - [Adoption](#adoption)
    - [Standard trainings](#standard-trainings)
    - [Resources](#resources-1)
- [Account Management Activities](#account-management)
  - [Customer Health](#customer-health)
  - [Customer Data & Analytics](#customer-and-data-analytics)
  - [Voice of the Customer](#voice-of-the-customer)
  - [Champion Building & Relationship Management](#champion-building--relationship-management)
  - [BRs](#brs)
  - [TA to TA Account Handoff](#ta-to-ta-account-handoff)
- [Playbooks](#playbooks)
  - [Recurring TA Responsibilities](#ta-cadence)
  - [TA Scenarios](#ta-scenarios)

---

# TA Processes

Processes exist to ensure consistent practices amongst teams. Processes that the TA team either drives or heavily contributes to are outlined below.

## Post Sales Handoff

This process occurs through both Salesforce and Vitally. Below is an overview of the process along with additional details about tooling automation that facilitates the process.

### Process Overview

The pre-to-post sales handoff process consists of the following steps:

1. Technical Advisor Support Level is [manually assigned](#ta-assignment) on the Salesforce Account by TA leadership
2. The account is created in Vitally automatically once Support Level is set
3. Customer Segmentation Assignment Vitally Playbook runs to assign account segment attribute of: Strategic, Enterprise, or Commercial.
4. Assign Scaled Success Accounts Vitally Playbook runs to check if Account is in the commercial segment and is less than $50k ARR. If so, the account is assigned segment of "Scaled Success"
5. Customer Lifecycle Stages Vitally Playbook runs to assign account as "0. Prospect", the first step in the customer lifecycle. At this point, the account is created and all initial attributes about the new customer are assigned in Vitally.
6. 30 days out from the expected close date from the Salesforce new business opportunity, the Pre to Post-Sales Hand-off and Planning Vitally Playbook initiates to facilitate [the handoff process](#hand-off-process).
7. Once the deal closes, the TA issues a [production license](#production-license) and initiates their onboarding.

You can read more about each step below.

### TA Assignment

Approximately 45 days before closure, TA leadership will assign the Technical Advisor Support Level on the Salesforce account to determine the customer segmentation for the customer. Once assigned, an account is created in Vitally and segmented as a Prospect. 35 days before closure, TA leadership assigns a TA to the Salesforce account record which is then updated on the Vitally record. The TA is notified of the assignment via Vitally.

[AEs: Please use this copy to introduce the assigned TA to the customer](https://docs.google.com/document/d/1yM0k8zt1xRIawkAPLyIqTH57ZsfcxgJFEb_ScguzAWk/edit#bookmark=id.9sdtyjj0kjrr)

### Hand-off process

35 days before closure the Pre to Post-Sales Hand-off and Planning Vitally playbook runs which creates the Handoff Doc template in Vitally and assigns the CE a task to fill out and schedule the knowledge transfer / handoff with the assigned TA and AE. If IE will be helping with the production implementation, they should attend too.

After the knowledge transfer session, either the TPM will be introduced to the customer to begin planning their production deployment or if IE will not be involved, the TA begins to plan and prepare for the [partnership kick-off](https://docs.google.com/presentation/d/1q2oPqCOO8XuCC0F2DuVdNpDh30OuIdMpKz9gNAqHces/edit#slide=id.g1e638d9bd88_1_379) and begins to prepare for new user onboarding. They do this by working with the AE and CE to understand how many seats have been purchased, where these teams are located, and by identifying customer contacts to help coordinate onboarding.

### Production License

Once a customer signs on with Sourcegraph, the TA will [generate a full license key](../../ce/process/license_keys.md) via Sourcegraph.com site admin based on the details of the contract.

## Renewal Process

Finance, TA, Sales, and Value Engineering all play a key role in customer renewals. While the customer renewal is a single event, our teams are constantly assessing the health of our customers and taking corrective action as necessary.

### Process Overview

Our renewal process is a 5 step process that begins 120 days prior to the renewal date. The process lifecycle is as follows:
![Renewal Process](https://user-images.githubusercontent.com/7228359/220760306-60b90fc3-3701-44e2-aad9-f61c386ffee8.jpg). The Renewal Playbook Vitally playbook triggers the renewal process.

### Renewal Process Phases

| Phase                         | Event                                                                                                                                                | Steps                                                                                                                                                                   | Output                                                                                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Health Assessment             | Vitally triggers Health Assessment doc 120 days before renewal                                                                                       | 1) TA completes Health Assessment doc template in Vitally with AE <br> 2) review with TA and AE Mgr; align on Renewal Health Assessment rating (green or yellow or red) | If red, elevate to the [Lighthouse program](#lighthouse-program) <br> If yellow, a save plan needs to be created in Vitally. <br> If green, monitor |
| Lighthouse Program (Red only) | Bi-weekly program to correct customer health issues.                                                                                                 | As outlined [here](#lighthouse-program-cadence)                                                                                                                         | Red actioned through Lighthouse Program to healhty. <br> Yellow actioned through 1:1s with manager to healthy. <br> Monitor green accounts          |
| Renewal Plan                  | AE leadership: weekly forecast <br> Leadership: bi-weekly inspection to monitor the progress of [Lighthouse program](#lighthouse-program) save plans | Yellow / Red: <br> - TA: Check-in on plan progress, additional corrective action weekly <br> Green: <br> - Continue monitoring                                          | AE: Project initial renewal outcome: Full churn, partial churn, flat renewal                                                                        |
| Renewal Forecast              | AE & TA leadership: weekly forecast                                                                                                                  | Yellow / Red: <br> - AE: Renewal outcome negative (Full or partial churn) <br> Green: <br> - AE: Renewal outcome neutral or positive (Flat or incremental)              | Quarterly forecast                                                                                                                                  |
| Process Renewal               | AE & TA leadership: weekly forecast                                                                                                                  | AE: Renewal opportunity processed accordingly                                                                                                                           | Renewal event complete                                                                                                                              |

## Success Plans

Account Success Plans are a key part of internal account strategy and goal-setting within the account team. TAs update account-level Success Plans in Vitally on a quarterly basis outlining their proactive plan for each customer. Throughout the quarter, the TA should action their success plan and review progress with their AE and TA leadership throughout. A subset of success plans are reviewed during internal QBRs with the broader Revenue organization.

A success plan contains the following:

- North Star Goals: What are the measurable goals for this account for the next quarter?
- Success Action Plan: What needs to happen for us to be successful in achieving the above goals? For each goal capture the action plan and steps necessary to accomplish those outcomes. Create tasks in Vitally and link to them.
- Relationships: What relationships do we have, with whom, and what is their sentiment? What people do we need to turn into champions, why them? What is the “win” that will develop them into a champion?
- Asks from the Business: Are there dependencies on other parts of the business (requisite product enhancements, for example)? Describe how they could jeopardize the milestones or north star. What is the plan to resolve the dependency? Where do you need help?

## Lighthouse Program

The Lighthouse Program is our Churn Save program. Through this program, we will closely and consistently inspect the health of our customers to detect risk & problems, which we will successfully overcome through company-wide support.

Customers may enter the Lighthouse Program in two ways:

1. As part of our renewal process, an account may be tagged for the Lighthouse program. Read more about that process [here](#renewal-process-phases).
2. Ad-hoc. AE, TA, or Sales / TS leadership can trigger an existing customer to enter the program at any time if they are concerned about their health.

### Entering the Lighthouse Program

1. When elevated to the Lighthouse program, the account TA is prompted to fill out an Account Save Plan document in Vitally
2. TA immediately meets with and reviews the plan with their AE counterpart, and shares with RSD and TA Director.
3. At the next Lighthouse program meeting, the TA presents the initial plan, with AE support. [(Vitally master list)](https://sourcegraph.vitally.io/work/team/docs/views/ac920f3d-d1bd-44aa-a74d-dd7949de22ce) An exec sponsor is assigned to each account to directly support the account team in their efforts.

### Lighthouse Program Cadence

On a weekly basis, the TA is quarterbacking the save plan. The TA is expected to maintain updates on the Save Plan in Vitally and review with their manager in their weekly 1:1s.

On a bi-weekly basis, the Lighthouse program sync occurs with cross-functional representation across the business including Sales, TS, Product, Eng, and Marketing. During the meeting, new entrants to the program are presented by the account TA and updates are provided for existing customers in the program.

- For new entrants, the TA presents the following:
  - The problem statement & goal: Why are they entering the program, what’s the current problem, what’s the result or results we want to achieve
  - Success criteria: It’s important to know when we’re done. What conditions, as quantitative as possible, need to be true to exit the program?
  - Save Plan: For each success criteria, what are the steps that need to be taken and by whom?
- For updates on existing customers, the TA presents the following:
  - Updates in the last 2 weeks
  - Blockers, risks, or asks

### Exiting the Lighthouse Program

Once the goals of the save plan are met, as measured by the success criteria, Sales and TS leadership will collectively agree that the customer is in a healthy spot and they’ll exit the lighthouse program.

# Customer Health

A Customer Health Score is used to give us a view into the well-being of our customer base.

Vitally is the tool we use to calculate this score. Vitally will update this score once an hour, but the underlying traits still need to be maintained.
The customer health score is calculated using the following standard categories:

| Customer Tier              | Weight |
| -------------------------- | ------ |
| TA Pulse                   | 5%     |
| Technical Health           | 15%    |
| Relationships & Engagement | 25%    |
| Utilization                | 55%    |

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
| Usage Score (Last 4 Wk DAU / Last Month MAU) | This looks at the rolling 4 week average of daily active users over last month's monthly active users. 30% or higher (.3) is considered healthy, 20% or less is considered poor (.2). | Sourcegraph generated (BigQuery) |
| Last Month Mau Over Seats | At the end of each calendar month we look at the Monthly Active Users of an instance for that month. We then divide that by the number of seats they have purchased. 80% is considered healthy (.8), less than 50% (.5) is considered poor. | Sourcegraph generated (BigQuery) |

# Post-Sales Customer Lifecycle

Our customer lifecycle is set and maintained through the Customer Lifecycle Stages playbook in Vitally.

Our customer lifecycle is comprised of the following stages:

- `0. Prospect` - a late-stage new business prospect that is 45- days out from closing. During this phase, CE is handing off and transferring knowledge to TA, if IE will be helping with the production deployment they will begin planning for that, the TA is preparing for partnership kick-off.
- `1. Onboarding` - when the deal closes, the account enters the [onboarding phase](#user-onboarding) of the lifecycle. Customers remain in this phase for the first 60 days of the partnership. During this time, the team is focused on ensuring their production instance is complete and onboarding end users. The goal is to get to 80% consumption of seats by the end of the first 60 days.
- `2. Adopting` - after the initial onboarding phase, the account enters the [adoption](#adoption) phase. The focus in this phase is on driving greater consumption and engagement with the product. The team works with the customer to identify and implement best practices & enable on use cases that drive greater adoption and daily use. Customers remain in this phase until they hit our utilization targets of 30% Daily Active Use / Monthly Active Use and 80% Monthly Active Use / Total seats purchased.
- `3. Nurturing` - once the customer hits their utilization targets, % consumption, they enter the nurturing phase. The focus in this phase shifts to maximizing the value the customer is getting from Sourcegraph. This includes identifying and implementing advanced product features, custom integrations, or new use cases. At this point in the journey we want to also be looking for co-marketing opportunities.
- `4. Renewing` - 120 days out from contract renewal, the account transitions into the renewing phase. The team focuses on ensuring the customer remains happy with the product and we are well-positioned for a strong renewal. The [renewal process](#renewal-process) kicks off to facilitate the renewal.

## User Onboarding

A critical part of the customer experience is user onboarding. After the deal close, and once the customers' production infrastructure is setup and configured, TAs are responsible for driving adoption of users onto Sourcegraph. During this phase, the TA is executing a user roll out plan to onboard the users onto Sourcegraph.

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

## Customer and Data Analytics

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

## BRs

An important dimension of relationship management and ensuring that our customers are getting the expected value and outcomes from Sourcegraph is understood and shared through Business Reviews (BRs). We ideally want to lead these conversations with customers on a quarterly basis, but at times may hold them bi-annually. TAs are responsible for leading the planning and execution of customer BRs with close input from internal team members such as Sales.

The format of BRs is as follows:

- Intros
- Business Strategy & Key Initiatives
- Previous Progress & Outcomes
- Usage Summary
- Value Realization & Maturity Model
- Product Roadmap & Feedback
- Next Steps

[(Deck)](https://docs.google.com/presentation/d/1H0Hefg-0KZJejhmR5o-oks7TcruW3g4v0xP8CgdK7Fc/edit?usp=sharing)

## TA to TA Account Handoff

**Outgoing TA:** Complete the following steps when transitioning an assigned account to a new TA

1. Create a new Document in Vitally using the [TA to TA Account Handoff template](https://sourcegraph.vitally.io/settings/templates/docs/897ed501-2e7c-42c8-a359-6b8513bf5d9e) and complete all the information required in the placeholders.
2. Inform the TA manager upon completing the [TA to TA Account Handoff template](https://sourcegraph.vitally.io/settings/templates/docs/897ed501-2e7c-42c8-a359-6b8513bf5d9e).

**New TA:** Complete the following steps after the outgoing TA has completed the steps above

1. Review the [TA to TA Account Handoff template](https://sourcegraph.vitally.io/settings/templates/docs/897ed501-2e7c-42c8-a359-6b8513bf5d9e) and inform the TA manager, who will make the assignment changes in our CRM systems upon completion.
2. Notify the account team (AE, CE, IE) about the transfer on the Customer Slack channel (#customer-NAME).
3. Work with your AE to notify/email the customer using the [Existing Customer - TA account transfer template](https://docs.google.com/document/d/1yM0k8zt1xRIawkAPLyIqTH57ZsfcxgJFEb_ScguzAWk/edit#bookmark=id.qoc9l1gl4bt6).

# Playbooks

## TA Cadence

To learn more about the kinds of activities TAs perform daily, weekly, monthly, quarterly, and on an ad-hoc basis see the [TA Cadence Playbook](../ta-playbooks/ta-cadence.md).

<!-- # Recurring Daily Responsibilities

The following are a sample of the activities that a TA is responsible for on a daily basis:

## Internal

- Establish up-to-date account map / plan
  - Org, roles & responsibilities, learn the state of things, intros to folks
- Account Monitoring: flag and schedule internal meetings, work with customers on corrective action, customer health

## External

- Account Monitoring: flag and schedule internal meetings, work with customers on corrective action, customer health
- Relationship building
  - Champion identification/building/nurture activities
  - Tech advocate identification/building/nurture activities
- Standardized customer communications
  - Incident response
  - Product updates
  - Product research
- Usage & Value Reporting on a quarterly basis -->

## TA Scenarios

To learn more about best practices and how to handle certain situations that may arise on your accounts, see the [TA Scenarios Playbook](../ta-playbooks/ta-scenarios.md).
