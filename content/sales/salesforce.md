# How we use Salesforce

This document describes how the sales team using Salesforce. 

Note: Please refer to it as Salesforce (instead of SF or SFDC) in accordance with our [style guide](../communication/style_guide.md#jargon-and-acronyms). 

Jump to:
- [Updating information in Salesforce](#updating-information-in-salesforce)
- [HubSpot and Salesforce connection](#hubspot-and-salesforce)
- [Salesforce automation](#salesforce-automation)

## Updating information in Salesforce

AEs and SDRs are responsible for keeping Salesforce up-to-date as a [source of truth](https://about.sourcegraph.com/handbook/communication#sources-of-truth).

### Associating contacts to opportunities

All of the contacts important to an opportunity should be linked. This should include the technical decision-maker, the economic decision-maker (if they are different) and the original member who introduced Sourcegraph to the organization.

This ensures that all deal-related communication is visible within the deal timeline for teammates to quickly get context surrounding the deal. This also allows us to evaluate the effectiveness of marketing channels and sales touchpoints that our team has with an organization. How we reached the person(s) who introduced Sourcegraph to their organization is one of the most important factors in evaluating the success of marketing activities.

If a deal comes through a referral or introduction, tell [BizOps](../bizops/index.md) so an adjustment can be made in the database to reflect this.

### When a deal is won
1. Move the deal to ‘Closed Won’. 
1. Mark the column ‘End of contract’ with the last day of the contract. Salesforce will [automatically create a renewal deal](#renewal-deals) based on this date. 
1. Ensure the appropriate 'deal won reason' fields reflect the main factors that contributed to the opportunity being won. 

### When a deal is lost
1. Update the ‘Closed Lost Dropdown’ property to reflect the reason. If the reason doesn’t exist in the dropdown, you can talk to [BizOps](../bizops/index.md) about adding one. 
1. Expand upon the reason in the longform ‘Closed Lost Reason’ field.

### About Salesforce objects

Salesforce has two main categories: leads and opportunity/account/contacts. Leads are single individuals that have not been qualified yet, and therefore are not associated with an account or opportunity. When a lead has revenue potential, they're converted to an opportunity. In this stage, an account (known in HubSpot as a company), a contact, and an opportunity (known in HubSpot as a deal) are created.

Opportunities begin at the [interest](/index.md#interest) stage.

### Recording outbound activity

TBD

## HubSpot and Salesforce

### HubSpot to Salesforce sync

All HubSpot contacts are synced to Salesforce, usually within 15 minutes. The [complete settings are in HubSpot](https://app.hubspot.com/integrations-settings/2762526/installed/salesforce/contacts), but the most important of the synced fields are:
- Basic contact info (name, email)
- Their lead source based on First Page Seen
- Most ZoomInfo enriched fields
- MQL date and checkbox
- NPS survey results attached to the contact

Contacts are synced as Leads in Salesforce, and become Opportunity/Account/Contact if the Lead is an MQL (based on MQL_checkbox = TRUE/YES)

### Salesforce to HubSpot sync

Any update on the lead/contact in Salesforce will sync back to HubSpot (name, email, MQL checkbox, etc...). Companies and opportunities will not be synced back; Salesforce is the source of truth for these objects. 

### What HubSpot still does

- Everything marketing (email campaigns, workflows, lead capture/forms, including NPS scores)
- Links to customers from RFCs, GitHub issues, etc. are still accessible. This will eventually be deprecated

## Salesforce automation

### Leads to Opportunities

Leads are put into a round robin process when either the MQL, SDR or Referral checkbox is checked. 

## Renewal deals

6 month before the end of a contract, a renewal deal with the Customer Engineer as owner is created in the Renewals pipeline.
