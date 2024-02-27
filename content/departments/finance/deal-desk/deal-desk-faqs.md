# Deal Desk FAQs

Below are answers to common questions we receive in our #deal-desk Slack Channel.

## Agreements, Forms and other templates

#### Where can I find the most recent Order Form template?

Althought the Order Form can still be downloadad and completed manually by the AE, when creating the quote in CPQ DealHub will automatically generate the Order Form with all the required information.

You can download the Order Form templates here: [Sales Resources](../../sales/tools/salesresources.md).

After downloading a copy of the template, or when working on a draft CPQ Order Form, please drop it in the following g-drive folder: [New Customer in Progress](https://drive.google.com/drive/folders/1o2xBbEp0gy-N1f27RB_vu7CzdSPNRwXQ) (create a new customer folder).

#### How can I validate if a customer has a signed MSA in place?

You can check the executed contracts in our google drive folder: [Customer Contracts](https://drive.google.com/drive/folders/1ePvVWcZYdd1_3ZlCP5A0lvMbBhBCVfSm), where we archive every countersigned agreement. Naming convention: Year-Month-Date-Customer-Contract Name.

#### The customer sent me the PO, do I need to save a copy?

Yes, please attach the Customer's PO to the SFDC Opportunity under “Files” section.

#### Do I need to enter into an evaluation agreement with my Prospect?

For free POCs, we do not require to enter into separate evaluation agreements. Instead, at the customer’s request, we can prepare an Order Form governed by our online terms, which cover trials and POCs.

For paid POCs, we do need to enter into an agreement to reflect the fee we'll charge the Prospect, the POC term, the expansion price, among other terms. We can also prepare an Order Form governed by our online terms to cover these elements.

## Approvals & Processes

#### When shall I submit an Order Form for approval?

When negotiating non-standard terms, please engage Deal Desk through the #deal-desk Slack Channel or at dealdesk@sourcegraph.com for approval. A list of our non-standard deal terms and our deal approval matrix can be found here: [Order Form review Guide](https://docs.google.com/document/d/1xOFBtx3Me592fEVAp6SPDCosGtp--0fdVsaHPFx3SCs/edit)

Deal Desk will review the Order Form once you submit the CPQ quote for approval . Every quote requires Deal Desk's approval. Please find additional information on how to use CPQ here: [CPQ JOB AID](https://docs.google.com/document/d/1Lp_0Y6g6AR0p5jpMVXkANQvxWv26Eutik-dTIaeQJfc/edit#)

#### How do I submit a document for signature?

Deal Desk will always provide you with a stamped copy of the document that is under approval. So once you receive your stamped contract, please create a new envelope in Docusign and add the following recipient's names and email addresses:

1. Customer´s Signature
   Email: xxxx
2. Sourcegraph´s Financial Controller´s Signature
   Email: desene@sourcegraph.com

A detailed step by step guide can be found here: [Signature Process](https://docs.google.com/document/d/1ZyD-sWphRdJkzz5fo-aI2pOGv5ZnxABj4v2VWfmqIcc/edit)

#### Can we allow the Customer to submit and initiate the contract signature on their end?

Although we loose visibility and control over the signature process (specilly during Quarter End), the Customer can initiate the signature process. Please send them the Order Form in PDF format with Deal Desk's stamp on it.

#### Is there any minimum package amount for seats increments?

When signing an Order Form, the lowest package size should be 5 users. We should not sell additional seats in increments of 1 user for several reasons:

- Customer experience: Customers that are billed too frequently will have a poor customer experiece.
- Time: Every expansion deal requires admin processing time for both the Sales and Finance teams, so we should not go though the operational process to bill the customer for 1 user.
- Stretegy: We want to land small and grow fast, so allowing True-Ups in increments of 1 seat does not help us expand.

#### For soft cap expansion deals, do I require a signed Order Form? What documents do I need to book the opportunity?

Customers under a soft cap do not require a new countersigned OF because they agreed to be charged when exceeding their Usage Limitations. However, in practice, we want to avoid sending an invoice unexpectedly to our Customers so we encourage AEs to contact them to request a confirmation prior to closing the opportunity in SalesForce, as once the opportunity is set to "Closed won", Finance will issue the invoice and will send it to the Customer . Some Customers will also request a quote to confirm the owed prorated amount - quotes can be requested through our Deal Desk Slack channel. A CPQ quote will always be required for expansion opportunities. DealHub will calculate the exact prorated amount that we will charge the customer for the days of service.

Please attach the customer´s confirmation email to your SFDC Opportunity under the “Files” section.

#### For customers migrating to Cloud, do I need to sign a new Order Form?

Existing Customers migrating to Cloud need to sign a Change Order Form, as they need to accept our Cloud terms. The Change Order is also required per revenue recognition purposes, because we need to make sure the new deployment method is reflected in the contract.

-For customers on our Self-Hosted online terms, we will default to reference our new set of online terms that are valid for Hosted and Self-hosted instances.

-If the customer signed paper terms, please reach out to the Deal Desk team to request a Cloud Addendum, that will amend the customer's existing agreement.

-If the Customer accepted our online terms on or after Feb 15th, 2024, as these terms apply to Cody and Code Search for Hosted and Self-hosted instances, the customer won't be required to accept any other set of terms (but will still need to sign the Change Order per rev rec purposes).

Additional information on the step by step process can be found [here](https://docs.google.com/document/d/1dVbbMmad94eeKHGNqM3IU4h-c4ky2Bdt53EPrGzzB9Y/edit).

#### If the signed Agreement does not include any Excess Usage language, do I need a new Order Form to book an expansion opportunity?

If the agreement does not include any Excess Usage language, we should send them an Order Form prior to invoicing any additional seat (hard cap is assumed in the absence of this wording). The Order Form ensures we have a contractual commitment and allows us to recognize revenue and measure ARR.

#### If the Customer is not willing to sign our Order Form, are we able to book the opportunity with their PO?

A Purchase Order on its own does not constitute a contractual commitment in the absence of a signed order form. To be able to recognize revenue and ARR we require a contract including the Service (s) being sold, Price of service(s) sold, Contract start and end dates, Payment Terms, etc. Without an Order Form in place, we cannot recognize revenue nor ARR until payment is received.

#### Is the Customer able to pay with a Credit Card?

No, we do not accept Credit Cards, only Bank ACH.

## SalesForce

#### What's the main difference between an expansion and a renewal opportunity?

As a general rule of thumb, if we are signing a new agreement where the Contract End Date is changing it is a renewal opportunity. If we are adding seats to a contract and we are co-terming the End Date it is then an expansion opportunity.

#### Do I need any approval to have an account assigned in SFDC?

Yes, Account Owner changes should be requested through the Sales Ops Channel and they require your manager´s approval.

#### How can I build a quote in CPQ?

For additional information on how to use DealHub to create a quote, please review our [CPQ JOB AID](https://docs.google.com/document/d/1Lp_0Y6g6AR0p5jpMVXkANQvxWv26Eutik-dTIaeQJfc/edit#)

## Pricing & Metrics

#### Where can I find our current list price?

Our list price and our discount approval matrix for our Software SKUs can be found [here](https://docs.google.com/spreadsheets/d/1tJ1eN4leY_O6seGDR2ld8oyMZCFvZa5-CHXX5E6NvNc/edit#gid=1534779432) and for Professional Services [here](https://docs.google.com/spreadsheets/d/1tJ1eN4leY_O6seGDR2ld8oyMZCFvZa5-CHXX5E6NvNc/edit#gid=811048933). When creating your quote in CPQ, the discount approval requests will be triggered automatically to the approvers after submitting the quote.

#### Do I have to maintain the same Price per User per Year upon the contract renewal?

The Price per User per Year on the renewal opportunity will be entirely subject to AEs negotiation. We are not tied to offering the same Per user Price to our Customers upon the contract renewal because our Terms of Service include a renewal clause which states that the subscription will be renewed for a one (1) year term at the then-current fees, unless otherwise stated in an Order Form.

#### Can I sell a Platform fee only deal?

No, Platform Fee only deals are not acceptable. This fee can be assessed at the discretion of the sales team to maximize the deal size and provide flexibility in deal construction, but we must ensure there´s a license fee associated to the deal as revenue has to be re-ocurring.

#### Is it possible to tie discounts in a contract to specific actions, such as logo rights, case study, lunch and learn sessions, etc?

The Order Form should reflect the price we charge including any discounts but we should not tie those discounts to some specific action required by the Customer. However, under “Other Customers Terms” we should include all the agreed commitments with our Customer - e.g.: "During the first year of the Subscription Period, Customer will participate in a case study of how Sourcegraph helps Customer’s developers meet or exceed internal goals."

Please check our [Order Form review Guide](https://docs.google.com/document/d/1xOFBtx3Me592fEVAp6SPDCosGtp--0fdVsaHPFx3SCs/edit) for additional information on our clauses and deal structuring.

#### For pre 4.0 renewals, can I sell Batch Changes or Code Insights as an Add-On to just some users?

No, our products are not designed to be sold individually. We can sell Batch Changes or Code Insights as an add-on to a Customer but they must purchase the add-on for the total number of seats.

#### Does an early renewal impact the account's IARR?

Yes, early renewals are used to perform a “Contract reset”. If the customer signs an early renewal contract terminating the original agreement we should calculate the IARR as follows: Early Renewal Contract ARR - Current Contract ARR .
