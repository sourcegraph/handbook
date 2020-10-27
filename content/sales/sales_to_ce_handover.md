# Sales-to-CE new customer handover process

When a new deal is signed, the Account Executive, Customer Engineer, and finance and operations teammates should follow the steps below to ensure the new customer is successful.

## Sales responsibilities

1. Copy the [new customer questionnaire template](https://docs.google.com/document/d/1FiuD-F3rMnTWRkLJizYPgGnpRDRYI1gEB0RAoV8i4AQ/edit#) to a new file (in the same Google Drive folder) and fill it out for the new customer.
1. Post in the #sales Slack channel to announce the sale, and link to the completed new customer questionnaire.
    1. Notify CE by tagging @ce-team.
    1. Notify finance and operations by tagging @business-team.
1. Send a welcome email to the new customer to introduce the CE and to indicate that the CE is their new main point of contact. 

>Hi $COMPANY team,
>Great news—the final docs were just signed. We're thrilled to make this partnership official! 
>
>I wanted to introduce $CE, a member of our Customer Engineering team. $CE will be your primary point of contact now that we are past the paperwork and onto the release and rollout, but I'll still be here for you wherever I can help. If you run into any product bugs or have any technical questions, please use our support@sourcegraph.com email (which will go directly to $CE as well).
>
>How is $DATE for a quick check-in to discuss next steps? $CE and I will join to sketch out next steps and prepare for the full rollout. 
>
>Best,
>$NAME

1. Update the deal status to "Closed" in Salesforce.

## CE responsibilities

1. The CE team will assign an account owner. If the account owner is different than the CE who worked the deal, the Customer Engineer field needs to be updated in Salesforce. 
1. Rename the shared customer Slack channel from #trial-customer to #support-customer (if applicable).
1. [Create a new license key](../ce/license_keys.md) that reflects the terms of the deal.
1. Once the AE has sent the welcome email, CE is responsible for:
    1. Responding to that email with the new license key (or sending it directly to the administrator, e.g. in Slack).
    1. Following up on any responses and getting the next check-in call on the calendar.
1. If the customer is or has potential to be a [Tier 1 customer](index.md#segmentation), create a success plan using the AE's new customer questionnaire and, if needed, organizing time to discuss plans with the AE.

## Finance and operations responsibilities

_See the finance team's [monthly closing process](../ops/finance/arr.md#monthly-closing-process) to understand how the deal's IARR gets booked._

1. Once notified by the AE, the finance team will create an invoice and send it via email to the "Point of contact for invoicing/billing" from the new customer questionnaire.
1. Once notified by the AE, the operations team will update the customer status in the [installers-to-company spreadsheet](https://docs.google.com/spreadsheets/d/1Y2Z23-2uAjgIEITqmR_tC368OLLbuz12dKjEl4CMINA/edit#gid=0).
1. The operations team will update the [sources of truth](../ops/bizops/index.md#sources-of-truth) to reflect the new deal.
