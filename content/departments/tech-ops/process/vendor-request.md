# Vendor Request Process

At Sourcegraph we use a variety of vendors to help us with our day-to-day efforts in building the best product for our clients. These third parties can have direct or indirect access to personal, Sourcegraph’s and/or client’s data and hence can pose a security risk. Adequate third party risk management is a best practice that helps mitigate security risks and enables Sourcegraph to meet our contractual obligations as well as stay compliant with security industry standards like SOC. You can learn more about our Third Party Risk Management Program [here](../../../company-info-and-process/policies/third-party-management-policy.md).

### Why should I use this process?

In order for us to be able to evaluate, maintain and monitor vendor relationships to reduce risks, we require everyone to use the below ‘Vendor request process’ when dealing with a vendor engagement.

### When should I use this process?

We have the following rules for which a vendor request needs to be raised:

- If **cost = 0** and classification is **PUBLIC** or **INTERNAL** -> no ticket needs to be raised
- If **cost = 0** and classification is **PRIVATE** or **RESTRICTED** but **LOCALLY\*** -> no ticket needs to be raised
- If **cost = 0** and classification is **PRIVATE** or **RESTRICTED** but **ONLINE\*** -> raise a ticket
- If **cost >0** and classification is **PUBLIC** or **INTERNAL** or **PRIVATE** or **RESTRICTED** -> raise a ticket

**\*Locally** - meaning the data is not leaving your laptop (for instance text editor)

**\*Online** - data is shared with 3rd party (browser extensions that access private or restricted data and are shared back with the service provider)

Please see our [Data Management Policy](../../../company-info-and-process/policies/data-management-policy.md) on further information on data classification and examples.

<br>
  
>**Important: Please check our [Vendor/Systems Inventory](https://docs.google.com/spreadsheets/d/1tzP64dj2CrddDLTZuLFWmpXoNB9lUaOstRUj3FaN_Rs/edit#gid=0) before raising a request in order to avoid duplicate requests and effort.**
<br>

**Please be aware** that the >5k rule for vendors from finance only pertains to the payment mechanism for vendors and does NOT exempt the vendor engagement from the vendor request process explained here.

### What counts as a Vendor?

We categories our vendors into the following groups:

- **Software:** this can be SaaS or non-SaaS products
- **Services:** Consulting services; any company that is commissioned to perform knowledge enhancing project-based work for Sourcegraph. Examples of this include any work that concludes with a report issued to the company, product development work, training development, sales & marketing projects and regulatory consulting work.
- **Temporary contractors :** Individuals that have been contracted for a limited amount of time to enhance/assist/deliver project base work (they are a separate group since their access level to data will most likely be different to a ‘Service’ engagement)

### What kind of vendor requests can I raise?

We define the following vendor request types:

- New Vendor (onboarding)
- Offboarding
- Annual reviews ( more details below)
- Other (license upgrade, contract renewal, etc.)

### How do I submit a request?

#### _Prerequisite_: Budget approval

(Note: If you have not secured budget approval yet please do **not** raise a vendor request ticket as Sourcegraph resources are potentially being wasted for reviews, etc. in case the budget request is denied)

**Step 1:** Visit our [service desk portal](https://sourcegraph.atlassian.net/servicedesk/customer/portal/6)

- You will need to set up an account (username/pw) to submit a ticket
- [How to submit a Jira Service Desk ticket](https://www.loom.com/share/56924569448f4c8cb63bbaf5bd232d2f) Loom video (including how to set up an account)

**Step 2:** Choose the correct request Type
_Options:_ New Vendor, Offboarding, Annual Review, Other

**Step 3:** provide as much information as possible into the Jira ticket fields
_Attention_: System owner - this is by default the requester except otherwise indicated

**Step 4:** Submit the request

<ins>Optional Step:</ins>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Step 5: Contact Vendr to assist with vendor price negotiations

**Step 6:** Keep an eye on the due diligence responses in the Jira ticket and respond to any requests from the reviewers

- [Review submitted requests](https://www.loom.com/share/643ceeb88b8c44fea1ea9a713f64d5e5) Loom video

**Step 7:**

> If ‘Approved’ -
>
> New vendor: get the contract signed ([details on signature requirement](../../legal/process/ContractReviewandSignatureAuthorityPolicy.md)) and [save the signed contract](../../legal/process/ContractReviewandSignatureAuthorityPolicy.md#what-to-do-when-the-contract-is-fully-signed) in the correct place.
>
> Offboarding: no further actions required
>
> Annual review: continue using the vendor
>
> Others: resign the contract (details here) and attach it to the Jira ticket.

> If ‘Rejected’ -
>
> New vendor: research and submit vendor request for alternative vendors
>
> Offboarding: contact Legal and Compliance directly for next steps forward
>
> Annual review: create a new vendor request type ‘Offboarding’ for this vendor
>
> Others: create a new vendor request type ‘Offboarding’ for this vendor

### System/Relationship Owner Responsibilities

Every vendor we use at Sourcegraph has an internal system/relationship owner assigned to them. By assigning a Sourcegraph system owner, we have a designated point of contact for all communication with the vendor, which will facilitate turnaround times on any matters during our engagement with the vendor as well as any internal process that require vendor input/output.

The system/relationship owner is typically the person who initiates the engagement with the vendor (i.e. vendor onboarding requestor), however, in certain cases the vendor request might have been delegated to a team member but the ongoing system owner duties will be taken on by a team lead (please make sure to discuss system/relationship ownership with your team/prospective users before logging a vendor request).

Please see below the responsibilities of a system/relationship owner:

- Liaise with the vendor as the main point of contact for any engagement/partnership matters
- Working with finance to ensure the product or service is accurately budgeted for
- Keeping billing information up to date and uploading receipts as needed into Airbase
- Negotiate and request contracts/upgrades/renewals
- Onboarding and offboarding of users if not behind Okta or supported by Tech Ops (including annual access reviews for systems)
- Produce usage guidance for tool to users (please reach out to compliance about security and compliance guidance on usage)
- Help provide/extract data from vendor when requested (for instance compliance reasons (evidence), security reviews, and other data collection efforts)

### Procurement Partner

You are encouraged to use our procurement partner Vendr to secure advantageous pricing when negotiating with vendors and help with certain commercial aspects. More information on when to engage Vendr and what type of support they offer can be found [here](../tools/Vendr/index.md).

**However, using Vendr for vendor procurements does NOT replace our internal vendor request processes. Please make sure to raise a Vendor Request for any vendor engagements through the process described here.**

### Due Diligence

Once a vendor request is submitted, we perform a set of reviews depending on the sensitivity of the data shared with the third party.

Our due diligence involves the following reviews:

- Security Review: to ensure the third party implements safeguards to enforce data privacy and security; **SLA - 7 business days**
- Tech Ops Review: check on infrastructure capabilities (how to handle access management, etc.) ; **SLA - 10 business days**
- Legal: review of contractual obligations; **SLA - 7 business days**
- Finance: budget approval confirmation; **SLA - 7 business days**

(Please note: reviews happen in parallel and hence the longest SLA is 10 business days)

- If all required reviews have been completed and approval has been granted you can go ahead and sign the contract with the vendor. Please see [signature authority rules](../../legal/process/ContractReviewandSignatureAuthorityPolicy.md) for rules on contract signing and info on where to [save the signed contract](https://drive.google.com/drive/u/2/folders/1hO7wFuvix3QcIDgM6OLNyjfElOUv-s0k).
- If any issues are found during the reviews and the approvers deem the vendor to be too risky to engage with further, any existing engagement will be terminated and the vendor will be offboarded (new vendor request to be raised for ‘Offboarding’) and the new vendor will not be onboarded.

### Budget

The budget discussion and approval sit outside this process. They should be pre-approved before submitting a vendor request. No vendor requests should be submitted before budget approval has been secured. More details on how to secure budget approval can be found [here](../../finance/process/ap.md).

### Annual Reviews

As mentioned above, Sourcegraph rates its vendors by the sensitivity of data that it shares with them. For vendors that are deemed as ‘Critical’ or ‘High’ risk, annual reviews will be performed. The vendor request type ‘ Annual Review’ will be triggered automatically in Jira on the onboarding anniversary of the vendor. The system owner will be notified by the reviewers if any additional information needs to be provided for the vendor during the review.

### Offboarding

When we decide to terminate our contract with a vendor, the system/partnership owner has to raise an ‘Offboarding’ vendor request in order to make sure we can guarantee secure handling of any data that has to be disposed of/retained as per our [Data Management Policy](../../../company-info-and-process/policies/data-management-policy.md). Each request will be handled case by case depending on the data that is stored, transmitted and/or processed by the offboarded vendor.

### Vendor Risk Assessment

As part of our Third Party Risk Management Program, we rate our suppliers in order of their supply chain risk to our business. As part of each completed ‘New vendor’ request, Compliance will perform a vendor risk assessment that will rate each of our vendors according to our predefined ‘Criticality’ scale. This risk assessment is reviewed annually during the ‘Annual review’ process in order to keep accurate records of our most critical suppliers and any risk profile changes within our vendor collection.

### Questions & Contact

For any questions around the vendor request process please use our #vendor-requests slack channel or reach out to the Tech Ops team.
