# TA Processes

Processes exist to ensure consistent practices amongst teams. Processes that the TA team either drives or heavily contributes to are outlined below.

- [Pre-to-Post-Sales Handoff](#post-sales-handoff)
  - [TA Assignment](#ta-assignment)
  - [Hand-off from pre-to-post sales](#hand-off-process)
- [Renewal Process](#renewal-process)
  - [Process Overview](#process-overview)
  - [Renewal Process Phases](#renewal-process-phases)
- [Success Plans](#success-plans)
- [Churn Save Lighthouse Program](#lighthouse-program)
- [Churn Retro Process](#churn-retro-process)
- [Customer Stakeholder role tagging](#customer-stakeholder-role-tagging)

## Post Sales Handoff

This process occurs through both Salesforce and Vitally. Below is an overview of the process along with additional details about tooling automation that facilitates the process.

### Process Overview

The pre-to-post sales handoff process consists of the following steps:

1. Technical Advisor Support Level is [manually assigned](#ta-assignment) on the Salesforce Account by TA leadership
2. The account is created in Vitally automatically once the Support Level is set
3. Customer Segmentation Assignment Vitally Playbook runs to assign account segment attribute of: Strategic, Enterprise, Mid-Market, or SMB.
4. If customer is a digital or scaled customer, the digital or scaled segment is set on the account.
5. Customer Lifecycle Stages Vitally Playbook runs to assign account as "0. Prospect", the first step in the customer lifecycle. At this point, the account is created and all initial attributes about the new customer are assigned in Vitally.
6. 30 days out from the expected close date from the Salesforce new business opportunity, the Pre to Post-Sales Hand-off and Planning Vitally Playbook initiates to facilitate [the handoff process](#hand-off-process).
7. If a Digital or Scaled customer, the CE tags customer contacts with the appropriate `role` on their contact card in Salesforce (it is multi-select).

| Role            | Definition                                                                                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Champion        | An individual with: 1) Power and influence, 2) willing and actively selling on our behalf, 3) view our success as their success                                                                       |
| Deal Contact    | A contact or owner who is helping to navigate the deal. This would be someone specific to the transaction not necessarily ongoing contact outside of the transaction (either initial deal or renewal) |
| Instance Admin  | Someone who is more about the technical logistics and management of the solution, manages the instance                                                                                                |
| Executive       | Exec-level sponsor who supports the deal/relationship                                                                                                                                                 |
| Economic Buyer  | The ultimate decision maker to sign off on any deal                                                                                                                                                   |
| End User        | End user of the Sourcegraph product                                                                                                                                                                   |
| Program Contact | Someone focused on the use case(s), adoption and value of SG within the company.                                                                                                                      |

8. Once the deal closes, the CE issues a [production license](#production-license) and informs the TA to initiate their kick-off.

You can read more about each step below.

### TA Assignment

Approximately 45 days before closure, TA leadership will assign the Technical Advisor Support Level on the Salesforce account to determine the customer segmentation for the customer. Once assigned, an account is created in Vitally and segmented as a Prospect. 35 days before closure, TA leadership assigns a TA to the Salesforce account record which is then updated on the Vitally record. The TA is notified of the assignment via Vitally.

[AEs: Please use this copy to introduce the assigned TA to the customer](https://docs.google.com/document/d/1yM0k8zt1xRIawkAPLyIqTH57ZsfcxgJFEb_ScguzAWk/edit#bookmark=id.9sdtyjj0kjrr)

### Hand-off process

35 days before closure the Pre to Post-Sales Hand-off and Planning Vitally playbook runs which creates the Handoff Doc template in Vitally and assigns the CE a task to fill out and schedule the knowledge transfer / handoff with the assigned TA and AE. If IE will be helping with the production implementation, they should attend too.

After the knowledge transfer session, either the TPM will be introduced to the customer to begin planning their production deployment or if IE will not be involved, the TA begins to plan and prepare for the [partnership kick-off](https://docs.google.com/presentation/d/1q2oPqCOO8XuCC0F2DuVdNpDh30OuIdMpKz9gNAqHces/edit#slide=id.g1e638d9bd88_1_379) and begins to prepare for new user onboarding. They do this by working with the AE and CE to understand how many seats have been purchased, where these teams are located, and by identifying customer contacts to help coordinate onboarding.

### Production License

Once a customer signs on with Sourcegraph, the CE will [generate a full license key](../../../ce/process/license_keys.md) via Sourcegraph.com site admin based on the details of the contract. CE handles production licenses for net new business and expansions. TA is only responsible for licensing at time of renewal.

## Renewal Process

Finance, TA, and Sales all play a key role in customer renewals. While the customer renewal is a single event, our teams are constantly assessing the health of our customers and taking corrective action as necessary.

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

## Churn Retro Process

The TA team will run a retrospective of all customer churn above $150,000 ARR. This includes Full Churn and Partial Churn.

> [!NOTE] If the ARR churn does not result in a decrease in seats purchased, we do not need to do a churn retro.

Once the churn is officially realized, the TS Churn Retro Sponsor will contact the assigned TA to have them begin the process using the Churn Retro template in Vitally.

To start this doc go to - Account -> Docs -> Create New -> Churn retro for >$150k ARR

After TA completes, they will book a call with AE and TS Churn Retro Sponsor to review the doc together.

During this process, the account team will review the closed lost opportunity in SFDC and agree on the Closed Lost category and reason.

The TS Churn Retro Sponsor will post a PDF Version of this doc in #gtm-operations-review and be responsible for acting on the Lessons Learned and Call to Action outcomes.

## Customer Stakeholder role tagging

Besides the basic customer information available in the customer contact card in SFDC & Vitally, the most important properties required for TA are:
| Property | Values | Description |
| --------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Title | Free form alphanumeric | Matches the LinkedIn title when created. Should be edited as contacts change titles. |
| Role | Instance Admin, Deal Contact, Economic Buyer, Champion, End User, Executive, Program Contact | Multi-select. If the customer holds more than one role, add them to the multi-select. |
| Instance Admin | Yes, No | Single-select. Should be also marked if the `Role` value has Instance Admin selected. |
| Email | Free form alphanumeric | The email address is used by Vitally to send email campaigns. |

### Pre-sales

- CE is expected to tag all known contacts during the pre-sales cycle no more than 7 days after the new customer contract is signed.
- CE should ensure that all properties above are defined.
- CE should create customer contact cards as necessary if they don't currently exist.

### Post-sales

- During the [renewal process](#renewal-process), TA should work with the AE to maintain the required properties above for customer contacts.
- In case of expansions where a CE was involved (demo, trial, POC), CE should tag newly identified contacts.
- TA/CE should create customer contact cards as necessary if they don't currently exist.

### Role property definition

| Role            | Definition                                                                                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Instance Admin  | Someone who is more about the technical logistics and management of the solution, manages the instance                                                                                                |
| Deal Contact    | A contact or owner who is helping to navigate the deal. This would be someone specific to the transaction not necessarily ongoing contact outside of the transaction (either initial deal or renewal) |
| Economic Buyer  | The ultimate decision maker to sign off on any deal                                                                                                                                                   |
| Champion        | An individual with 1) Power and influence, 2) willing and actively selling on our behalf, 3) view our success as their success                                                                        |
| End User        | End user of the Sourcegraph product                                                                                                                                                                   |
| Executive       | Exec-level sponsor who supports the deal/relationship                                                                                                                                                 |
| Program Contact | Someone focused on the use case(s), adoption and value of SG within the company.                                                                                                                      |
