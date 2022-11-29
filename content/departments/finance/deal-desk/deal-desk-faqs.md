# Deal Desk FAQs

Below are answers to common questions we receive in our #deal-desk Slack Channel.

### Agreements, Forms and other templates

#### Where can I find the most recent Order Form templates?

You can download the latest Order Form templates here: [Sales Resources](../../sales/tools/salesresources.md). We have 2 OF templates available:

- [Sourcegraph Pre-4.0 Order Form](https://docs.google.com/document/d/1Oo7vbWoGIaIq72zo7TFH9M4eugJXrvNv/edit)
- [Sourcegraph 4.0 OF: Code Intelligence Platform](https://docs.google.com/document/d/1KOje_f8rc1sx8oxxRR4nwqnzi9WBXqmxisFl85zuDok/edit)

Please download the applicable one and drop your copy in the following g-drive folder: [New Customer in Progress](https://drive.google.com/drive/folders/1o2xBbEp0gy-N1f27RB_vu7CzdSPNRwXQ) (create a new customer folder).

Also, you may use CPQ to create your quote and DealHub will automatically generate the OF for you.

#### How can I validate if a customer has a signed MSA in place?

You can check previous signed agreements in our google drive folder: [Customer Contracts](https://drive.google.com/drive/folders/1ePvVWcZYdd1_3ZlCP5A0lvMbBhBCVfSm) . For renewal and expansion deals, there is no need to reference the executed agreement date in the new order form but you should make sure we have signed Terms in place with the Customer. Here's our standard wording for renewal and expansion deals:

“This Order Form is governed by the terms, along with any applicable addenda and amendments, executed by and between the parties (“Terms”). No terms or conditions of any purchase order will modify this Agreement or affect the obligations of the parties.”

#### Where shall I save the countersigned agreement?

Every countersigned agreement should be archived in our google drive folder: [Customer Contracts](https://drive.google.com/drive/folders/1ePvVWcZYdd1_3ZlCP5A0lvMbBhBCVfSm). For booking purposes, the fully executed Order Form should also be attached to the SFDC Opportunity under “Files” section. Naming convention: Year-Month-Date-Customer-Contract Name.

### Approvals & Processes

#### When shall I submit an Order Form for approval?

When negotiating non-standard terms, please engage Deal Desk through the #deal-desk Slack Channel or at dealdesk@sourcegraph.com for approval. A list of our non-standard deal terms and our deal approval matrix can be found here: [Order Form review Guide](https://docs.google.com/document/d/1xOFBtx3Me592fEVAp6SPDCosGtp--0fdVsaHPFx3SCs/edit)

If the quote was built in CPQ, Deal Desk will review the Order Form once you select “Submit for approval” . Every quote requires Deal Desk approval. Please find additional information on how to use CPQ here: [CPQ JOB AID](https://docs.google.com/document/d/1Lp_0Y6g6AR0p5jpMVXkANQvxWv26Eutik-dTIaeQJfc/edit#)

#### How do I submit a document for signature?

For contract signatures (OFs + MSAs) please create a new envelope in Docusign and add the following recipient's names and email addresses:

1. Deal Desk´s Stamp
   Email: nicky.comber@sourcegraph.com
2. Customer´s Signature
   Email: xxxx
3. Sourcegraph´s Financial Controller´s Signature
   Email: desene@sourcegraph.com

A detailed step by step guide can be found here: [Signature Process](https://docs.google.com/document/d/1ZyD-sWphRdJkzz5fo-aI2pOGv5ZnxABj4v2VWfmqIcc/edit)

#### Can we allow the Customer to submit and initiate the contract signature on their end?

We should avoid having the Customer submit our contracts for signature as we lose visibility and control over the process, specially during Quarter End. If the Customer insists they want to own the process, please send them the Order Form in PDF format with Deal Desk´s stamp on it. You can request the stamped document in our #deal-desk channel.

#### For soft cap expansion deals, do I require a signed Order Form? What documents do I need to book the opportunity?

Customers under a soft cap do not require a new countersigned OF because they agreed to be charged if they exceed their Usage Limitations. However, in practice, we want to avoid sending an invoice unexpectedly to our Customers so we encourage AEs to contact them to request a confirmation prior to closing the opportunity in SalesForce. Please attach this confirmation email to your SFDC Opportunity under the “Files” section.

Additionally, a quote draft can be sent to the Customer. Please request it through our Deal Desk Channel.

#### If the signed Agreement does not include any Excess Usage language, do I need a new Order Form to book an expansion opportunity?

If the agreement does not include any Excess Usage language, we should send them an Order Form prior to invoicing any additional seat (hard cap is assumed in the absence of this wording). The Order Form ensures we have a contractual commitment and allows us to recognize revenue and measure ARR.

#### If the Customer is not willing to sign our Order Form, are we able to book the opportunity with their PO?

A Purchase Order on its own does not constitute a contractual commitment in the absence of a signed order form. To be able to recognize revenue and ARR we require a contract including the Service (s) being sold, Price of service(s) sold, Contract start and end dates, Payment Terms, etc. Without an Order Form in place, we cannot recognize revenue nor ARR until payment is received.

#### Is the Customer able to pay with a Credit Card?

No, we do not accept Credit Cards, only Bank ACH.

### SalesForce

#### What's the main difference between an expansion and a renewal opportunity?

As a general rule of thumb, if we are signing a new agreement where the Contract End Date is changing it is a renewal opportunity. If we are adding seats to a contract and we are co-terming the End Date it is then an expansion opportunity.

#### Do I need any approval to have an account assigned in SFDC?

Yes, Account Owner changes should be requested through the Sales Ops Channel and they require your manager´s approval.

#### How can I build a quote in CPQ?

For additional information on how to use DealHub and create a quote, please review our [CPQ JOB AID](https://docs.google.com/document/d/1Lp_0Y6g6AR0p5jpMVXkANQvxWv26Eutik-dTIaeQJfc/edit#)

### Pricing & Metrics

#### Where can I find our current price list?

Our price list and our discount approval matrix can be found [here](https://docs.google.com/spreadsheets/d/1tJ1eN4leY_O6seGDR2ld8oyMZCFvZa5-CHXX5E6NvNc/edit#gid=1534779432). When creating your quote in CPQ, the approval requests will be triggered automatically to the approvers after submitting the quote.

#### Do I have to maintain the same Price per User per Year upon the contract renewal?

The Price per User per Year on the renewal opportunity will be entirely subject to AEs negotiation. We are not tied to offering the same Per user Price to our Customers upon the contract renewal because our Terms of Service include a renewal clause which states that the subscription will be renewed for a one (1) year term at the then-current fees, unless otherwise stated in an Order Form. Please check the seat count discounting guidance here for additional information on average discounts.

#### Can I sell a Platform fee only deal?

No, Platform Fee only deals are not acceptable. This fee can be assessed at the discretion of the sales team to maximize the deal size and provide flexibility in deal construction, but we must ensure there´s a license fee associated to the deal as revenue has to be re-ocurring.

#### Is it possible to tie discounts in a contract to specific actions, such as logo rights, case study, lunch and learn sessions, etc?

The OF should reflect the price we charge including any discounts but we should not tie those discounts to some specific action required by the Customer. However, under “Other Customers Terms” we should include all the agreed commitments with our Customer - e.g.: "During the first year of the Subscription Period, Customer will participate in a case study of how Sourcegraph helps Customer’s developers meet or exceed internal goals."

Please check our [Order Form review Guide](https://docs.google.com/document/d/1xOFBtx3Me592fEVAp6SPDCosGtp--0fdVsaHPFx3SCs/edit) for additional information on our clauses and deal structuring.

#### For pre 4.0 renewals, can I sell Batch Changes or Code Insights as an Add-On to just some users?

No, our products are not designed to be sold individually. We can sell Batch Changes or Code Insights as an add-on to a Customer but they must purchase the add-on for the total number of seats.

#### Does an early renewal impact the account´s IARR?

Yes, early renewals are used to perform a “Contract reset”. If the customer signs an early renewal contract terminating the original agreement we should calculate the IARR as follows: Early Renewal Contract ARR - Current Contract ARR .

### Reseller Deals

#### Do we have a Reseller Program?

Yes, the goal of our Reseller Program is to to build key partnerships to help drive pipeline and IARR faster. Partners that are reselling a Sourcegraph product will enter into our [Reseller Agreement](https://docs.google.com/document/d/1y8gF3ai8YdDH-iORi_vVeqET9-g11RZxaXurcNmb0-E/edit) , and for every new order they place, they will need to sign our Order Form. The reseller order form can be found in the Reseller Agreement under Exhibit C. Additional information can be found here: [Reseller Program Promotion](../../sales/tools/referral_and_reseller_policy.md)

#### Do we have a list of our active Resellers?

Our active Resellers are inventoried [here](../../sales/tools/referral_and_reseller_policy.md) and the agreements can be found [here](https://drive.google.com/drive/u/0/folders/1BnjAnhqinQ5cLmHjsxuuvWfGVVs_h5Ku)

-For deals through SHI: We do not have a Reseller Agreement in place, but they have accepted to sign our Order Form including pass-through language that incorporates by reference our license agreement to which the Customer is subject, as well as Termination and Limitation of Liability language. Please contact Deal Desk to confirm the Order Form structure and Terms. For Cloud deals, please engage Legal team as liability caps require revision.

-For deals through Insight: We signed a Letter of Agreement (LOA) on September 01st, 2022 that sets forth the terms under which Insight can procure Products from Sourcegraph and is valid for On-Prem deals. Insight does not agree to sign our Order Form and since the PO does not contitute a contractual commitment, we need to sign an Amendment to PO document for every deal. The Amendment to PO document will only be signed after they provide the PO, as we need to confirm it includes: product sold, price, quantity, deployment type, contract dates and payment terms. Please provide a copy of the PO to the Deal Desk team to confirm if it includes all the required information. For Cloud deals, please engage Legal team as liability caps require revision.

#### Do I have to enter into a Reseller Agreement if the Customer wants to add a reseller on a deal to reduce contracting complexity?

No, some Customers may wants to use a reseller for billing purposes or to simplify the contracting process. For those cases, there´s no need to enter into a Reseller Agreement as this program intends to build long-term strategic relationships with the partners. When the Customer wants to add a Partner to reduce complexity and time, and there´s no Reseller Agreement in place, we may sign a standard Order Form adding our reseller terms and pass-through language, that incorporates by reference the license agreement to bind the Customer to the duties and obligations of our agreement.

#### Can the Customer pay through a payment agent?

Yes, as long as the Customer agrees to sign our Order Form and accepts our Terms, they can use a third party solely for payment purposes. When a Customer uses a payment agent, we don´t need the agent to enter into a Reseller Agreement, as the Customer will still be the responsible party, so they can pay us through the bank or third party agent they use. Please contact Deal Desk to check if any special language is required in the Order Form.
