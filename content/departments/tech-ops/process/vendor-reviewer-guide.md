# Vendor Reviewer Guide

This page describes the different vendor management process flows from a reviewer's perspective , including roles and  responsibilities for each step within the flows. 


# Background

Our current vendor management process is bulky and poorly documented. We need to centralize our process so that our teammates and reviewers have all the information in one system and can better prepare for onboarding, reviewing and offboarding systems and services. For compliance reasons - as well as better traceability/decision log -  we need to have an auditable record for each SaaS vendor, from its initial onboarding to the annual risk reviews. At the moment we have many different workflows (Slack, Vendr, DMs) for our vendor management process but are aiming to implement a unified process in Jira as our source of truth, by leveraging Slack and Vendr.  


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
<ul>

<li>Perform system setup with internal access control mechanism 
<ul>

<li>Inform requester/system owner of result of vendor assessment
</li>
</ul>
</li>
</ul>
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
<ul>

<li>Work with the system owner/requestor to get all vendor information necessary for the review
<ul>

<li>Maintain a set of evaluation standards for the review
</li>
</ul>
</li>
</ul>
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
<ul>

<li>Work with the review teams to facilitate the assessment review
<ul>

<li>Ensure the responsiveness of the vendor as part of the review requirements
</li>
</ul>
</li>
</ul>
</li>
</ul>
   </td>
  </tr>
</table>



# Process Elements


## System

The vendor management process will be supported by our [‘Vendor Management’ Jira project](https://sourcegraph.atlassian.net/servicedesk/customer/portal/6), where all vendor requests will be handled through a service desk ticket.  The Jira service desk form will collect information needed by all teams typically involved in vendor approvals and fire off sub-ticket review tasks linked to the review team’s Jira project boards. 


## Vendor Types



* **Software:** this can be SaaS or non-SaaS products
* **Services:** Consulting services; any company that is commissioned to perform knowledge enhancing project-based work for Sourcegraph. Examples of this include any work that concludes with a report issued to the company, product development work, training development, sales & marketing projects and regulatory consulting work.
* **Temporary contractors :** Individuals that have been contracted for a limited amount of time to enhance/assist/deliver project base work (they are a separate group since their access level to data will most likely be different to a ‘Service’ engagement)
    * For temporary contractors, we use our standard forms, which you can find in the Vendor contracts section of our [Contract review and signature policy.](https://handbook.sourcegraph.com/departments/legal/process/contractreviewandsignatureauthoritypolicy/#vendor-contracts-sourcegraph-pays-a-third-party-for-products-or-services) 


## Request type

There are four types of request tickets that we support:



* New vendor onboarding - new contracts/services/tools
* Annual review - annual risk review that helps us keep track of vendor risk (i.e. are their certifications still in place, did any of their policies change, etc.)
* Offboarding - when we want to terminate or sunset a vendor we have previously engaged with
* Other (eg. upgrades/renewals) - anything that doesn’t fit in the above categories 


## Data

Our process captures the baseline information needed to process vendor requests :



* Vendor Name
* Vendor Description
* Vendor Web Link
* Vendor Type
* Data Classification and Description
* Budget Requirements 
* Cost Center Information
* Procurement Partner Engagement (i.e. Vendr )
* System/Relationship Owner 
* Documentation (incl. DPA, MSA, etc.)

**Please see Appendix for full list of data fields in the request ticket. **

As we improve our process, additional information will be captured during the ticket creation that will facilitate due diligence reviews (for instance requestors will be asked for specific security review related information at time of vendor request creation) 


## Reviewer Teams

The teams involved in the due diligence process for the vendor review will be notified about new reviews through a Jira sub-ticket, which will be triggered and created according to our triage/review logic (see below). Each team is responsible for monitoring their Jira boards for new review tickets that need to be resolved in a timely manner (see SLAs below). There is no particular order in which the reviews need to be done (i.e. they can be worked on in parallel). Once a vendor has been reviewed please mark your sub-ticket as approved/rejected as appropriate (and provide as much information in the ticket comments on why this decision has been made). This will automatically reflect in the status of the parent ticket (i.e. the original vendor request ticket): 



* Security: 7 business days SLA (from sub-ticket creation date)
* Legal : 7 business days SLA (from sub-ticket creation date)
* Finance   : 7 business days SLA (from sub-ticket creation date)
* Tech Ops : 10 business days SLA (from ticket creation date)


## Triage and Review Logic 

From a vendor management perspective we base our review requirements  on the sensitivity of data that is shared with the vendor. According to our [Data management policy](https://docs.google.com/document/d/1EteK_ftNhF8B_2G8BdSrW7xlehba_6yq/edit) we will route each of the classifications for reviews as follows: 

 



* **Restricted:** Security, Legal, Tech Ops
* **Private:** Security, Legal, Tech Ops 
* **Internal:** Security, Tech Ops 
* **Public:** Tech Ops

From a procurement standpoint, we have an additional decision factor of ‘budget’, which determines if a finance review happens as part of the vendor request: 



* >5k: no fiance review
* &lt;5k: finance review
* >100k: legal review

_<span style="text-decoration:underline;">Note:</span>_ Any budget approvals and discussions sit outside the vendor management process. They are a part of the [procurement process](https://handbook.sourcegraph.com/departments/finance/process/ap/) and are a prerequisite for vendor requests. 

Please see below matrix for review requirements for ANY type of vendor: 


<table>
  <tr>
   <td>
   </td>
   <td><strong>=0k</strong>
   </td>
   <td><strong>>0K</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Restricted</strong>
   </td>
   <td>Security
<p>
Tech Ops
   </td>
   <td>Security
<p>
Legal
<p>
Tech Ops
<p>
Finance
   </td>
  </tr>
  <tr>
   <td><strong>Private</strong>
   </td>
   <td>Security
<p>
Tech Ops
   </td>
   <td>Security
<p>
Legal
<p>
Tech Ops
<p>
Finance
   </td>
  </tr>
  <tr>
   <td><strong>Internal</strong>
   </td>
   <td>Security
<p>
Tech Ops
   </td>
   <td>Security
<p>
Legal
<p>
Tech Ops
<p>
Finance
   </td>
  </tr>
  <tr>
   <td><strong>Public</strong>
   </td>
   <td>Tech Ops
   </td>
   <td>Tech Ops
<p>
Finance
   </td>
  </tr>
</table>


As we improve the form and capture more details for the request, we will be able to build more sophisticated routing rules and pre-checks for the review teams to minimize manual input, specifically for recurring standard requests. 


# Review Requirements

Each reviewer team has the responsibility to create and maintain their own predefined vendor questionnaire or a set of questions that cover all aspects of their due diligence remit. This will guarantee a consistent review process across all our vendors and create a benchmark for vendor acceptance/rejection. It is up to the review team to make a decision on the review outcome depending on the answers provided by the vendor to those questions. 


## Security

Security approval - information needed and reviewed:

    * What type of information is being shared with the vendor: customer data, sourcegraph data, both?
    
    * Security compliance certifications like ISO27001 or SOC 2.
    * Encryption standards of data at rest and in transit (transport layer security).
    * Clear measures around confidentiality, integrity, availability, and resilience of processing systems and services.
    * Clear process in case of a security incident and the reporting to Sourcegraph.
    * Ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident.
    * Periodic testing on security, assessing and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing.


## Legal

_ _

Legal approval - information needed and reviewed:



    * DPA (word doc)
    * MSA (word doc)
    * Order form or SOW (word doc)
    * Depending on the data store, transmitted and/or processed Legal will do the following: 
        * Confirm whether the vendor will receive or access the following: 
            * customer data (including customer code, repo names, pings or personal data of customer personnel)
            * If so, ask vendor for a DPA and attach for legal review
            * Flag to legal@sourcegraph.com or the #legal Slack channel to update the subprocessor list and notify customers who have signed up for updates of new subprocessor
        * teammate data (including logins), or 
            * If so, ask vendor for a DPA and attach for legal review
        * other sensitive data (including incident data, security logs, core IT infrastructure or data storage)

Please also see our handbook page on vendor contracts [here](https://handbook.sourcegraph.com/departments/legal/process/contractreviewandsignatureauthoritypolicy/#vendor-contracts). 


## Tech Ops


    Tech Ops approval - information needed and reviewed:



    * Okta provisioning and/or SAML available? 
    * If no, how is access protected


## Finance


    Finance approval - information needed and reviewed:



    * Airbase CC and/or PO# based on [paying bills policy](https://handbook.sourcegraph.com/departments/finance/process/payables/#airbase-limits)
    * Contract & commercial terms
    * W-9


# Vendr 

We currently don’t support an integration between Jira and our procurement partner Vendr. 

Please make sure to manually check any updates/documents in Vendr itself  when performing a vendor review in Jira to make sure no up-to-date information is missed. 

More information on Vendr can be found [here](https://handbook.sourcegraph.com/departments/tech-ops/tools/vendr/). 


# Additional information

Please see ‘How To Do A Vendor Request’  handbook documentation here. 

Please see a short Loom video guide on how to use Jira to review vendors. 
