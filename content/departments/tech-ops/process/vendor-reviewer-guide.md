# Vendor Reviewer Guide

This page describes the different vendor management process flows from a reviewer's perspective , including roles and responsibilities for each step within the flows.

# Background

Our current vendor management process is bulky and poorly documented. We need to centralize our process so that our teammates and reviewers have all the information in one system and can better prepare for onboarding, reviewing and offboarding systems and services. For compliance reasons - as well as better traceability/decision log - we need to have an auditable record for each SaaS vendor, from its initial onboarding to the annual risk reviews. At the moment we have many different workflows (Slack, DMs) for our vendor management process but are aiming to implement a unified process in Jira as our source of truth.

# Who is responsible for what?

This procedure applies to all third party providers that access, store, process or transmit Sourcegraph’s data.

<table>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Responsibility</strong>
   </td>
  </tr>
  <tr>
   <td>Tech Ops
   </td>
   <td>
<ul>

<li>Maintain a mechanism to intake and respond to vendor requests

<li>Perform system setup with internal access control mechanism

<li>Inform requester/system owner of result of vendor assessment
</li>
</li>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Reviewers
   </td>
   <td>
<ul>
<li>Perform due diligence as requested by routing logic

<li>Work with the system owner/requestor to get all vendor information necessary for the review

<li>Maintain a set of evaluation standards for the review
</li>
</li>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>System Owner or Requestor
   </td>
   <td>
<ul>

<li>Describe the nature of the Vendor Relationship and provide details for the request

<li>Work with the review teams to facilitate the assessment review

<li>Ensure the responsiveness of the vendor as part of the review requirements
</li>
</li>
</li>
</ul>
   </td>
  </tr>
</table>

# Process Elements

## System

The vendor management process will be supported by our [‘Vendor Management’ Jira project](https://sourcegraph.atlassian.net/servicedesk/customer/portal/6), where all vendor requests will be handled through a service desk ticket. The Jira service desk form will collect information needed by all teams typically involved in vendor approvals and fire off sub-ticket review tasks linked to the review team’s Jira project boards.

## Vendor Types

- **Software:** this can be SaaS or non-SaaS products
- **Services:** Consulting services; any company that is commissioned to perform knowledge enhancing project-based work for Sourcegraph. Examples of this include any work that concludes with a report issued to the company, product development work, training development, sales & marketing projects and regulatory consulting work.
- **Temporary contractors :** Individuals that have been contracted for a limited amount of time to enhance/assist/deliver project base work (they are a separate group since their access level to data will most likely be different to a ‘Service’ engagement)
  - For temporary contractors, we use our standard forms, which you can find in the Vendor contracts section of our [Contract review and signature policy.](../../legal/process/ContractReviewandSignatureAuthorityPolicy.md#vendor-contracts-sourcegraph-pays-a-third-party-for-products-or-services)

## Request type

There are four types of request tickets that we support:

- New vendor onboarding - new contracts/services/tools
- Annual review - annual risk review that helps us keep track of vendor risk (i.e. are their certifications still in place, did any of their policies change, etc.)
- Offboarding - when we want to terminate or sunset a vendor we have previously engaged with

## Data

Our process captures the baseline information needed to process vendor requests :

- Vendor Name
- Vendor Description
- Vendor Web Link
- Vendor Type
- Data Classification and Description
- Budget Requirements
- Cost Center Information
- System/Relationship Owner
- Documentation (incl. DPA, MSA, etc.)

As we improve our process, additional information will be captured during the ticket creation that will facilitate due diligence reviews (for instance requestors will be asked for specific security review related information at time of vendor request creation)

## Reviewer Teams

The teams involved in the due diligence process for the vendor review will be notified about new reviews through a Jira sub-ticket, which will be triggered and created according to our triage/review logic (see below). Each team is responsible for monitoring their Jira boards for new review tickets that need to be resolved in a timely manner (see SLAs below). There is no particular order in which the reviews need to be done (i.e. they can be worked on in parallel). Once a vendor has been reviewed please mark your sub-ticket as approved/rejected as appropriate (and provide as much information in the ticket comments on why this decision has been made). This will automatically reflect in the status of the parent ticket (i.e. the original vendor request ticket):

- Security: 7 business days SLA (from sub-ticket creation date)
- Legal : 7 business days SLA (from sub-ticket creation date)
- Finance : 7 business days SLA (from sub-ticket creation date)
- Tech Ops : 10 business days SLA (from ticket creation date)

## Triage and Review Logic

From a vendor management perspective we base our review requirements on the sensitivity of data that is shared with the vendor. According to our [Data management policy](../../../company-info-and-process/policies/data-management-policy.md) we will route each of the classifications for reviews as follows:

- **Restricted:** Security, Legal, Tech Ops
- **Private:** Security, Legal, Tech Ops
- **Internal:** Security, Legal, Tech Ops
- **Public:** Tech Ops, Legal

From a procurement standpoint, we have an additional decision factor of ‘budget’, which determines if a finance review happens as part of the vendor request.

_<span style="text-decoration:underline;">Note:</span>_ Any budget approvals and discussions sit outside the vendor management process. They are a part of the [procurement process](../../finance/process/ap.md) and are a prerequisite for vendor requests.

Please see below matrix for review requirements for ANY type of vendor:

<table>
  <tr>
   <td>
   </td>
   <td><strong>Cost < 1000</strong>
   </td>
   <td><strong>Cost >= 1000</strong>
   </td>
    <td><strong>Cost >= 10 000 </strong>

   </td>
  </tr>
  <tr>
  <td><strong>Restricted</strong>

   </td>
   <td><p>- Security
     <p> - Tech Ops

   </td>
   <td><p>- Security

<p>- Legal

<p>- Tech Ops

<p>- Finance

   </td>
   <td><p>- Security

<p>- Legal

<p>- Tech Ops

<p>- Finance

   </td>
  </tr>
  <tr>
   <td><strong>Private</strong>

   </td>
   <td><p>- Security

<p>- Tech Ops

   </td>
   <td><p>- Security

<p>- Legal

<p>- Tech Ops

<p>- Finance

   </td>
   <td><p>- Security

<p>- Legal

<p>- Tech Ops

<p>- Finance

   </td>
  </tr>
  <tr>
   <td><strong>Internal</strong>

   </td>
   <td><p>- Security

<p>- Tech Ops

   </td>
   <td><p>- Security
     
<p>- Legal (if personal data)

<p>- Tech Ops

<p>- Finance

   </td>
   <td><p>- Security

<p>- Legal (if personal data)

<p>- Tech Ops

<p>- Finance

   </td>
  </tr>
  <tr>
   <td><strong>Public</strong>

   </td>
   <td><p>- Tech Ops

   </td>
   <td><p>- Tech Ops

<p>- Legal (if personal data)
  
<p>- Finance

   </td>
   <td><p>- Tech Ops

<p>- Legal (if personal data)

<p>- Finance

   </td>
  </tr>

As we improve the form and capture more details for the request, we will be able to build more sophisticated routing rules and pre-checks for the review teams to minimize manual input, specifically for recurring standard requests.

# Review Requirements

Each reviewer team has the responsibility to create and maintain their own predefined vendor questionnaire or a set of questions that cover all aspects of their due diligence remit. This will guarantee a consistent review process across all our vendors and create a benchmark for vendor acceptance/rejection. It is up to the review team to make a decision on the review outcome depending on the answers provided by the vendor to those questions.

## Security

Security approval - information needed and reviewed:

- What type of information is being shared with the vendor: customer data, sourcegraph data, both?
- Security compliance certifications like ISO27001 or SOC 2.
- Encryption standards of data at rest and in transit (transport layer security).
- Clear measures around confidentiality, integrity, availability, and resilience of processing systems and services.
- Clear process in case of a security incident and the reporting to Sourcegraph.
- Ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident.
- Periodic testing on security, assessing and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing.

## Legal

### Legal review required for all new and renewal/expansion vendors when:

- annual spend is over $100,000, or
- annual spend is over $1,000 and vendor receives (a) customer data or (b) teammate personal data

Typical customer data includes customer source code, repo names, support tickets, customer logs, incident data, etc.

Typical teammate personal data includes login information, username, email, name, address, etc.

### Legal approval - docs and information needed:

**New vendors:**

- MSA (word doc)
- DPA (word doc)
- Order form or SOW (word doc)
- Whether vendor receives teammate personal data
- Whether vendor receives customer data
  - If customer data, flag to legal@sourcegraph.com or the #legal Slack channel to update our [Subprocessor list](https://about.sourcegraph.com/terms/subprocessors)

**Renewal/expansion vendors:**

- Link to [Suppliers drive](https://drive.google.com/drive/folders/1hO7wFuvix3QcIDgM6OLNyjfElOUv-s0k) folder containing existing contracts
- If none, provide the docs and information listed under **New vendors** above.

See our handbook page on vendor contracts [here](../../legal/process/ContractReviewandSignatureAuthorityPolicy.md#vendor-contracts).

## Tech Ops

Tech Ops approval - information needed and reviewed:

- Okta provisioning and/or SAML available?
- If no, how is access protected

## Finance

Finance approval - information needed and reviewed:

- Airbase CC and/or PO# based on [paying bills policy](../../finance/process/payables.md#airbase-limits)
- Contract & commercial terms
- W-9

# Additional information

Please see ‘How To Do A Vendor Request’ handbook documentation [here](../process/vendor-request.md).

Please see a short [Loom video guide](https://www.loom.com/share/2bdd2a7ee2d549a9b15acdd74072da32) on how to use Jira to review vendors.
