# Contract review and signature authority policy

Effective and last modified June 21, 2021

The purpose of this policy is to help you direct your contracts to the right team or teammate to review, approve, and sign.

This policy covers the following types of contracts:

1. NDAs
1. Customer contracts
1. Vendor contracts
1. Partner contracts

If you are not sure where to direct a contract for review, approval, or signature, you can reach out to the legal team.

## How to submit requests for review

Legal:

- [legal@sourcegraph.com](mailto:legal@sourcegraph.com) or
- #legal slack channel

Give us about 1 business day to acknowledge receipt and give you an estimated turnaround time. If you don’t hear back from us in about 1 business day, follow up to make sure we saw your request. If your request is time-sensitive, let us know the ideal turnaround time.

Finance:

- [finance@sourcegraph.com](mailto:finance@sourcegraph.com) or
- #finance slack channel

If you submit a request via #legal or #finance slack channels, no need to duplicate your request in each channel. You can just post your request in one channel and tag the other team.

## What to include in your requests

### NDAs

1. Nature of business opportunity (prospective customer, vendor, partner)
1. Approximate contract value

SLAs - Turnaround time for legal review:

- Sourcegraph Form - 2 business days
- Third-party Form - 3 business days

### Customer contracts

1. What are you selling (on prem, managed instance, offline ("air-gapped"))
1. Approximate contract value
1. Any other relevant context

SLAs - Turnaround time for legal review:

- Sourcegraph Form - 3 business days
- Customer Form - not accepted, requires a legal-to-legal call if customer pushes back
- EOQ - Legal will attempt to expedite reviews in the last week of the quarter

### Vendor contracts

1. Purpose of the contract (1-2 sentences)
1. Data: Confirm whether the vendor will access customer data, teammate data, or other sensitive data
1. Approximate contract value
1. Budget: Confirm whether the contract is included in the budget. Attach budget file referencing where the spend is listed.
1. Any other relevant context
1. Cc the VP Budget Owner

SLAs - Turnaround time for legal review:

- Sourcegraph Form - 5 business days
- Vendor Form - 7 business days
- EOQ - expect delays during the last two weeks of each sales quarter

### Partner contracts

1. Purpose of the contract (1-2 sentences)
1. Data: Confirm whether the vendor will access customer data, teammate data, or other sensitive data
1. Fees: If the contract includes fees payable by or to Sourcegraph, include written approval from the VP Budget Owner
1. Marketing rights: Propose any changes to the marketing, publicity, and logo terms or confirm that you have no changes
1. Responsibilities and Restrictions on Sourcegraph (for product integrations): Propose any changes or confirm that you have no changes
1. Any other relevant context

SLAs - Turnaround time for legal review:

- 7 business days
- EOQ - expect delays during the last two weeks of each sales quarter

## What to do when the contract is fully signed

Save a copy of the fully signed contract in (1) the appropriate **Google Drive** folder and (2) **Salesforce** (for customer contracts):

- [NDAs](https://drive.google.com/drive/folders/1kwsephGh0quiOIgvLBE_XU3DEfe97Z78) as Party Name-NDA-Year-Month-Date
- [Customer contracts](https://drive.google.com/drive/folders/1ePvVWcZYdd1_3ZlCP5A0lvMbBhBCVfSm) as Year-Month-Date-Customer-Contract Name
- [Suppliers](https://drive.google.com/drive/folders/1hO7wFuvix3QcIDgM6OLNyjfElOUv-s0k) as Year-Month-Date-Vendor-Contract Name
- [Partner contracts](https://drive.google.com/drive/folders/1Cl3B560wT85Zj4crlvZ7ngRoHCTqdn6q) as Year-Month-Date-Partner-Contract Name

For example, save customer contracts as 2021-06-21 Customer-OF and MSA. Save NDAs as Customer-NDA-2021-06-21.

For click-through agreements, forward confirmation emails to legal@sourcegraph.com. If none, then email legal@sourcegraph.com confirming that you accepted the click-through terms.

For Salesforce, complete the opportunity with the following steps: 1) go to the opportunity and click on the "Files" link near the top of the page. On the far right of the "Files" page is "Add Files". 2) Go back to the opportunity and at the top right click the "Add Products" link. Fill out the info in the link and pay attention to the monthly/yearly period options so that they are consistent. 3) Go back to the opportunity and complete the other fields in the opportunity as follows: switch the Stage to "7 - Closed Won"; next scroll down to the "Financial Details" and "Opportunity Close Out" sections and add the appropriate "ACV", "Closed Won Reason", "Start of Contract" and "End of Contract". Save and you should be done.

## Who reviews, approves, and signs each contract type

### NDAs (for customers, vendors, partners)

- [Sourcegraph Form - Standard Terms](https://powerforms.docusign.net/a07dd347-371d-4a15-b29e-580ace414b5c?env=na2&acct=9afaa898-f274-476c-a511-6317f8d11239&accountId=9afaa898-f274-476c-a511-6317f8d11239) (no redlines)
  - Review: None
  - Approve: None
  - Sign: Director of Legal, VP, or Director
- Sourcegraph Form - Non-standard Terms (redlined)

  - Review: Legal
  - Approve: Legal
  - Sign: Director of Legal, VP, or Director

- Third-party Form
  - Review: Legal
  - Approve: Legal
  - Sign: Director of Legal, VP, or Director

Do we already have a signed NDA in effect?
Check the [NDAs](https://drive.google.com/drive/folders/1kwsephGh0quiOIgvLBE_XU3DEfe97Z78) folder.

### Customer contracts (master agreements, order forms, SOWs)

- Sourcegraph Form - Standard Terms (no redlines)

  - Review: None
  - Approve: None
  - Sign: Director of Legal or VP Finance/Operations

- Sourcegraph Form - Non-standard Terms (redlined)

  - Review: (a) Legal and (b) Customer Engineer (CE) for security addenda or questionnaires
  - Approve: (a) Legal and (b) Finance for any non-standard payment terms including termination
  - Sign: Director of Legal or VP Finance/Operations

- Customer Form

  - Review: (a) Legal and (b) Customer Engineer (CE) for security addenda or questionnaires
  - Approve: (a) Legal and (b) Finance for any non-standard payment terms including termination
  - Sign: Director of Legal or VP Finance/Operations

Templates:

- See [Sales Resources Templates](../sales/salesresources.md#sales-templates)
- For other templates, reach out to Legal

### Vendor contracts (Sourcegraph pays a third party for products or services)

- Sourcegraph Form - Standard Terms (no redlines)

  - Review: None
  - Approve: (a) VP Budget Owner and (b) Finance for any purchases outside of the team budget and contracts requiring Finance approval per [Paying Bills](../finance/payables.md)
  - Sign: VP Budget Owner

- Sourcegraph Form - Non-standard Terms (redlined)

  - Review: (a) Finance for changes to fees, termination, or tax terms and (b) Legal for any other changes
  - Approve: (a) VP Budget Owner and (b) Finance for any purchases outside of the team budget and any contracts requiring Finance approval per [Paying Bills](../finance/payables.md)
  - Sign: VP Budget Owner

- Vendor Form (including online click-through agreements)
  - Review: (a) Legal and (b) Finance for payment terms such as fees, termination, and tax terms
  - Approve: (a) VP Budget Owner and (b) Finance for any purchases outside of the team budget and any contracts requiring Finance approval per [Paying Bills](../finance/payables.md)
  - Sign: VP Budget Owner

Templates:

- [Services contract with a separate SOW](https://drive.google.com/file/d/1zs5DGm1p_ZMjYjBwYDDuf2vITS74qUMC/view) - use this form if vendor has already prepared a separate SOW with payment amounts and due dates
- [Services contract with pre-populated SOW exhibits](https://drive.google.com/file/d/1rhgTUoaj0BBhACRkCnMom8BAXxaLWYDo/view) - use this form if you don’t have a separate SOW with payment amounts or due dates
- For software contracts, ask vendor for its template

### Partner contracts (for product integrations, joint-marketing, and other partnerships with third parties)

- We don’t have Sourcegraph forms for partner contracts yet
- Partner Form (including online click-through agreements)
  - Review: Legal
  - Approve: VP and Finance
  - Sign: Director or VP

## Changes and delegation authority

Changes to the signing authorities above require written approval by the CEO.

Exception: for vendor and partner contracts, authorized signers may delegate such authority to teammates in manager-level roles or above, in writing with a copy to [legal@sourcegraph.com](mailto:legal@sourcegraph.com).
