# CE Management of the Technical Win

- [Background](#background)
- [Assets](#assets)
- [Process](#process)
  - [Gates for Progressing Through Technical Win Phases](#gates-for-progressing-through-technical-win-phases)
  - [Surfacing Product Feedback](#surfacing-product-feedback)
  - [Weekly Tech Win Review](#weekly-tech-win-review)
  - [Engaging Subject Matter Experts](#engaging-subject-matter-experts)

## Background

CEs are tightly aligned with the sales team and serve as technical experts, providing strategy and guidance to AEs during the sales cycle. Ultimately it is the CE that owns the “technical win” associated with an opportunity.

To be successful in driving technical wins requires the ability to:

1. Help define and document customers’ use cases as confirmed during the qualification stage of the sales process
2. Validate the technical viability of our solution against customers’ use cases using criteria provided by Engineering
3. Understand how to leverage resources across the CE organization and other internal teams to secure the win
4. Track and communicate the technical win status with the sales organization and other teams in a way that aligns with Sourcegraph’s [company culture of remote and asynchronous](../../../../company-info-and-process/communication/asynchronous-communication.md) communication

For the sales organization to scale effectively as our business grows, it needs to engage not only with opportunities that meet the [Target Opportunity Profile](../../../sales/index.md#target-opportunity-profile) criteria as already defined. It also needs to understand whether or not a customer’s use cases can be met by our product based on a set of defined technical qualification criteria and customer-defined success criteria.

## Assets

<table>
  <tr>
   <td><strong>Name</strong>
   </td>
   <td><strong>Purpose</strong>
   </td>
   <td><strong>Sales Stage</strong>
   </td>
   <td><strong>Status</strong>
   </td>
  </tr>
  <tr>
   <td>Salesforce Opportunity
   </td>
   <td>The official record of activity associated with a sales opportunity in Salesforce. Opportunities are typically created at the interest stage (Stage 1) of the sales cycle.
   </td>
   <td>1-7
   </td>
   <td>Published
   </td>
  </tr>
  <tr>
   <td>Customer Engagement Process (Pre-Sales)
   </td>
   <td>This document outlines the process for engaging with a customer or prospective customer from the early stages of the sales cycle (Stage 0 - Prospecting) to when a deal is closed. It covers the objective, key players, verifiable outcomes and resources at each stage of the sales process.
<p>
<a href="https://docs.google.com/spreadsheets/d/1nhxUAkooEx1JZV4ZAwyN0Ck9BrK-VUzObNp_IRAf_OE/edit#gid=0">Link to Customer Engagement Process - Pre-Sales</a>
   </td>
   <td>1-7
   </td>
   <td>Published
   </td>
  </tr>
  <tr>
   <td>Customer Discovery Playbook
   </td>
   <td>Provides CEs with a framework and tools to successfully prepare for and conduct your initial meetings with prospective customers (or even new stakeholders within existing customer organizations).
<p>
It also provides key areas for CEs to consider and specific steps to take to ensure the CE has the correct context and knowledge to properly support a successful customer engagement beyond the initial meetings.
<p>
<a href="https://docs.google.com/document/d/14iSqJBtiM32D1zSVVvtZGZmWVLuQ7S7MoJDM6wAhkyQ/edit#heading=h.12q3mtuawsny">Link to Playbook</a>
   </td>
   <td>2-3
   </td>
   <td>Published
   </td>
  </tr>
  <tr>
   <td>The Sourcegraph Trial</td>
   <td>Guiding principles for the Sourcegraph trial, including information about how to define success criteria.
<p>
<a href="https://docs.google.com/document/d/1O8Tjx9diPg0_Qb4nWY1HUgFcvJFFBD371KSGlfa8l5M/edit?usp=sharing">Link to Document</a>
</p>
   </td>
   <td>2-4
   </td>
   <td>Published
   </td>
  </tr>
  <tr>
   <td>Joint Success Plan
<p>
<strong>(External)</strong>
   </td>
   <td>This document serves as a single source of truth for both the Sourcegraph Account Team and a prospective Sourcegraph customer during the evaluation and buying process. It includes sections maintained by the sales team around a mutually agreed upon action plan and by the customer engineering team to document technical success criteria and the trial process.
<p>
<a href="https://docs.google.com/spreadsheets/d/1iC-t6oSevGxiwDQfe-7rMewJn929OC9I3GkDnzFvnHs/edit#gid=1991584268">Link to Template</a>
<p>
Store Completed Success Plans in the Customer folder.
   </td>
   <td>3-7
   </td>
   <td>Published
   </td>
  </tr>
  <tr>
   <td>Product Feature Compatibility Documentation
   </td>
   <td>This page is intended as a reference of features by code host compatibility; each item will link to further documentation on the feature.
<p>
<a href="../../../product/tools/feature_compatibility.md">Link to Product Feature Compatibility Page</a>
   </td>
   <td>3
   </td>
   <td>Published
   </td>
  </tr>
  <tr>
   <td>Product Feature Maturity Documentation
   </td>
   <td>This page is intended as a reference of features by maturity level; each item will link to further documentation on the feature.
<p>
  </tr>
</table>

## Process

### Gates for Progressing Through Technical Win Phases

Customer Engineering has defined five (5) phases across which we will be tracking the status of the technical win. These five phases map to one or more of the seven (7) defined sales stages.

The following criteria are used to determine whether a technical win should progress from one phase to the next in the process. All criteria should be answered “yes” before progressing to the next phase.

#### Initial Conversations (Sales Stages: 0-2)

- Has the account team identified a champion in the account?
  - A champion is a contact in the account with power and influence who will be selling internally on our behalf and has a vested interest in our success.
  - As defined by the [Customer Engagement Process](https://docs.google.com/spreadsheets/d/1nhxUAkooEx1JZV4ZAwyN0Ck9BrK-VUzObNp_IRAf_OE/edit#gid=0), the champion typically confirms use cases, identifies the business/technical validation process and confirms the technical win.
- Has the CE confirmed the top 2-3 use cases for the customer?
- Does the CE understand the customer’s technical landscape and current tools?

#### Tech Design & Trial Design (Sales Stage: 3)

- Has the CE completed technical qualification of the customer’s usage scenario?
- Has the CE recorded the technical landscape information (on the account level) and the trial technical landscape information (on the opportunity level) in Salesforce?
- Has the CE defined the technical validation plan (demo, self eval, trial, etc.) which will be used to determine whether they have achieved the technical win?
- If the opportunity has non-standard or high-risk technical requirements as defined by the technical qualification criteria, has the CE documented risks and raised to leadership? _Note: the definitions of non-standard and high-risk change with each release of Sourcegraph, and it is the responsibility of the CE to be aware of the definitions at any point in time._

Not all opportunities will require a trial of Sourcegraph. The CE should be prepared to achieve a technical win by performing customized demos or workshops when possible. If the customer _must_ perform a trial, use the criteria below.

##### Additional Criteria for all trials

- Has the CE designed the trial according to [The Sourcegraph Trial](https://docs.google.com/document/d/1O8Tjx9diPg0_Qb4nWY1HUgFcvJFFBD371KSGlfa8l5M/edit?usp=sharing) guidelines?

Most trials should be on Sourcegraph-managed Cloud instances. If the trial _must_ be performed on a customer's self-hosted environment (whether cloud or on-prem), see below for additional requirements.

Any artifacts created to support a prospective customer's Sourcegraph deployment (i.e. architecture diagrams, custom Kubernetes configurations, etc). should be stored in the shared [Technical Design Documents](https://drive.google.com/drive/folders/1o-4rB24vcYsOiUzSEr_vzJsC7pE03yYC) folder and linked from the "Trial Technical Landscape" information in Salesforce.

##### Additional Criteria for Self-hosted trials

- Has the CE completed the [Implementation Discovery Questions (copy & rename to Sourcegraph/Technical Success/Customer engineering/Technical Design Documents/{CustomerName - Implementation Discovery Questions})](https://docs.google.com/document/d/1vjETRXdUtLSTRrnMAuN6aEbR_Xx0qHacONrnI0zoPyc/) and linked to the document from the "Trial Technical Landscape" field of Salesforce?
- Has the CE provided the prospect with a Reference Sandbox environment?

#### Trial Deployment (Sales Stages: 3-4)

- Do the success criteria adhere to the recommendations in [The Sourcegraph Trial](https://docs.google.com/document/d/1O8Tjx9diPg0_Qb4nWY1HUgFcvJFFBD371KSGlfa8l5M/edit?usp=sharing)?
- Has the CE updated Salesforce with trial technical landscape information, with links to any supporting artifacts?
- If the AE is using the [Joint Success Plan](https://docs.google.com/spreadsheets/d/10nXs7INmzvKxGb5xPOTju8yxnkQXcBc3SEYdu20xFtM/edit#gid=1991584268), has the CE completed the Trial and Deployment portions of the document?
- Is the trial or evaluation environment successfully deployed?

#### Trial Execution (Stage 4)

- Has the CE established a regular check-in with the customer champion?
- Has the account team delivered a trial/POC readout for the customer?
- Has the customer confirmed that we have achieved the technical win?

#### Post-Trial (Stages 5-7)

- Tag TA leadership for TA assignment
- Confirm whether IE will be performing the Production Implementation
- For complex deployments, CE has updated artifacts in the the [Technical Design Documents](https://drive.google.com/drive/folders/1o-4rB24vcYsOiUzSEr_vzJsC7pE03yYC) folder with details about the customer’s production deployment plans (unless IE is leading the Production Implementation)
- Introduce TA to the customer

### Surfacing Product Feedback

Because CEs work directly with Sourcegraph users in the course of assessing the technical fit of the product for a prospective customer, they will likely receive feedback about the product and identify product gaps which might potentially block adoption. All such feedback should be shared with the Product Team.

It is important to distinguish all customer feedback CEs receive from what would be considered a product gap. A product gap would be some feedback a CE collects from a prospect during the initial sales cycle, or from an existing customer, that could be within the expected scope of work for Engineering. This especially pertains to either new feature requests or enhancements to existing features that could likely be incorporated into our roadmap. In contrast, a product feature or functionality that does not perform as documented might be a bug and should be handled through Product Support.

All feedback and product gaps identified by CEs must be registered as a Product Gap in Salesforce with the appropriate taxonomy and documented impact. The Sourcegraph Handbook outlines [how to document Product Gaps appropriately](../../../product/process/feedback/surfacing_product_requests.md).

### Weekly Tech Win Review

CE Leadership conducts a weekly review of the technical win status in all Stage 2-4 opportunities in the current Fiscal Quarter (FQ) and all Stage 3-4 opportunities in the next FQ. This review is executed either as a “stand up” style meeting where CE Leadership reviews each opportunity with the CE owner or it can be done asynchronously based on updates the CE makes to the status of the technical win in Salesforce. Each CE Manager will determine how Weekly Tech Win Review will be executed for their team.

#### Salesforce Technical Win Dashboard

For each CE, the Technical Win Dashboard in Salesforce shows a summary of all S2+ opportunities in the current FQ and all Stage 3+ opportunities in the next FQ assigned to that CE. Each opportunity is displayed on the dashboard with information specific to the technical win status of that opportunity:

<table>
  <tr>
   <td><strong>Salesforce Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Opportunity Name
   </td>
   <td>Name of the opportunity.
   </td>
  </tr>
  <tr>
   <td>Customer Engineer
   </td>
   <td>This is the Customer Engineer assigned to the opportunity.
   </td>
  </tr>
  <tr>
   <td>Account Executive
   </td>
   <td>This is the Account Executive who is assigned as the owner of the opportunity.
   </td>
  </tr>
  <tr>
   <td>Sales Stage
   </td>
   <td>This is the sales stage of the opportunity. CEs are most active during Stages 2-4.
   </td>
  </tr>
  <tr>
   <td>Close Date
   </td>
   <td>The date by which the Account Executive expects the opportunity to close.
   </td>
  </tr>
  <tr>
   <td>Tech Win Phase
   </td>
   <td>Current Tech Win Phase for the opportunity which is one of five (5) selections: Initial Conversations, Tech Design & Trial Planning, Trial Deployment, Trial Execution, and Post-Trial. Starting as early as Stage 2, CEs should keep this field updated to reflect the phase of the technical evaluation.
   </td>
  </tr>
  <tr>
   <td>Technical Win Due Date
   </td>
   <td>Upon trial execution starting, this is the date by which the Customer Engineer expects to receive customer confirmation of the technical win.
   </td>
  </tr>
  <tr>
   <td>Technical Win Next Step
   </td>
   <td>What next action or step? This should be updated weekly to give an overview of next steps.
   </td>
  </tr>
  <tr>
   <td>Mutual Action Plan
   </td>
   <td>URL for the Joint Success Plan which includes the Mutual Action Plan (AE) as well as the Trial Success Criteria and Deployment Plan (CE).
   </td>
  </tr>
  <tr>
   <td>Trial Success Criteria Complete
   </td>
   <td>Yes/No - The CE and customer have agreed upon trial success criteria that will be used in the evaluation and it is captured in the Joint Success Plan (also referred to as Mutual Action Plan),
   </td>
  </tr>
  <tr>
   <td>Technical Win Achieved
   </td>
   <td>Yes/No - Customer champion has confirmed that we have met their technical validation criteria and we have the technical win.
   </td>
  </tr>
  <tr>
   <td>Weekly Check-In w/Champion
   </td>
   <td>Yes/No - Does the CE have a regular (weekly) check-in established with the customer during the trial execution?
   </td>
  </tr>
  <tr>
   <td>Non-Standard Requirements
   </td>
   <td>Yes/No - Does the customer’s configuration or use cases fall outside of the supported features or limitations of the product?
   </td>
  </tr>
  <tr>
   <td>Tech Review Link
   </td>
   <td>If this is a non-standard configuration, a link to the submission for Tech Review.
   </td>
  </tr>
  <tr>
   <td>Open Risks/Issues
   </td>
   <td>Throughout this technical win process, the Customer Engineer should be updating the opportunity to reflect the current state of technical or business risks and issues that pertain to the opportunity. As a best practice, for each risk or issue the CE should provide a description, mitigation path, and status.
   </td>
  </tr>
  <tr>
   <td>Deployment Method
   </td>
   <td>The expected trial deployment method: on-prem, cloud (managed instance), offline.
   </td>
  </tr>
  <tr>
   <td>Cloud Disqualifiers
   </td>
   <td>If the Trial Deployment Method is not Cloud (managed instance), why: company policy, technical limitation, other.
   </td>
  </tr>
  <tr>
   <td>Cloud Disqualifier Description
   </td>
   <td>If the Trial Deployment Method is not Cloud (managed instance), explain more about why. If there's a technical limitation what is it? If it's a company or security policy reason, what is the policy? This is helpful information for our Cloud teams.
   </td>
  </tr>
<tr>
   <td>Trial Technical Landscape Section
   </td>
   <td>This section at the bottom of the Salesforce opportunity captures technical details about the prospect. The CE should fill in as much information as possible (as known) during Stage 2 and Stage 3.
   </td>
  </tr>
</table>

### Engaging Subject Matter Experts

Given the breadth of technical information and problems CEs face, it’s unrealistic to expect all CEs to be experts in everything. CE Subject Matter Experts (SMEs) will play a crucial role in engaging in more complex engagements where a deeper understanding of a particular technology, product, or industry is required. When the level of complexity of an opportunity starts to become too deep for a generalist CE, it is crucial that they engage the appropriate SME.

When engaging a SME, the CE does not abdicate ownership of managing the technical win for the opportunity. They are to remain assigned as the Customer Engineer on the opportunity in Salesforce and are responsible for coordinating the activity of SMEs and communicating the status of the technical win while SMEs are engaged.

#### When to Pull in Subject Matter Experts (SMEs)

- CEs should engage a SME when they need **help to achieve the technical win.**
- The opportunity **should be properly qualified (sales stage S3+)** before a CE engages a SME in the opportunity.
- The contributions needed from the SME should be **well-defined** and **time-bound**.
- CEs should **first exhaust the resources available to them** (product documentation, CE StackOverflow instance, Slack channels, etc.) before engaging a SME.

#### Types of Subject Matter Experts (SMEs)

- Peer CEs with expertise in a specific area of the product, a deployment methodology, or a 3rd-party solution which is being integrated with Sourcegraph
- Product Managers with more in-depth knowledge of a feature or capability of Sourcegraph and who can provide information around future plans

#### Engaging SMEs - Examples

##### Technology SME Example

Alex is a CE assigned to work an opportunity with XYZ Company and has a fruitful demo with them and things are moving towards a trial. During the trial-planning process, Alex discovers that XYZ Company has a strongly opinionated and very technical devops team, and that **high availability** for the Sourcegraph deployment will be required to get the technical win. They have questions about customizing their Kubernetes deployment and Alex doesn’t have deep Kubernetes experiences. In this case, they may choose to pull in a peer CE with that knowledge to talk with the customer.

- Does the effort directly contribute to the technical win? **Yes**.
- Is the opportunity qualified? **Yes - Moving to trial.**
- Is the request well-defined and time-bound? **Yes - Single meeting w/customer**.

##### Product SME Example

For ABC Company’s trial, Sourcegraph’s batch changes feature is a critical part of the deal. A few of the customer’s most influential developers asked a lot of challenging questions during the first demo. Alex thinks that setting up a special batch changes training session would be especially helpful to earn the technical win. Alex engages a batch changes SME to co-run the session with him so that he is well-equipped to give the best customer experience around batch changes.

- Does the effort directly contribute to the technical win? **Yes.**
- Is the opportunity qualified? **Yes - Solution mapped to batch changes (S2+).**
- Is the request well-defined and time-bound? **Yes - Single meeting w/customer.**

#### How to Pull in SMEs

There is no formal process today for engaging a SME. For engaging a peer CE as a SME in an opportunity, sending a message to **ce-internal** in Slack will likely help find the right resources.

Product Managers are a great option for a SME for product areas. It’s worthwhile to consider pulling them in for feature feedback, after the rollout of major updates, or for especially large opportunities. <span style="text-decoration:underline;">However, pulling in PMs for every opportunity is not a scalable process. CEs should default to peer CE SMEs whenever possible.</span>
