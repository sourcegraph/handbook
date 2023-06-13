## How to triage like a pro

**Step 1:** Conversation initiated by the customer

**Step 2:** Notification is in Slack under Support Agent or in Zendesk

**Step 3:** While under Support Agent select _Home_ and see incoming tickets under _Waiting for Help_ or in Zendesk in the _unassigned tickets_ queue.

**Step 4:** To assign the ticket to yourself in Slack select ‘…’ and then select Start. In Zendesk select the ticket and update the Assignee.

**Step 5:** Identify if there is action for CS or not if it's not clear, post in #team-customer-support and brainstorm the best path.

If there is an action for CS, go to Step **6**.
There is an action for CS if the action is to:

- troubleshoot
- explain how a feature works in the product/how to do something in the product
- handle incident customer communication
- handle anything related to security for a customer without a TA
- handle a feature request for a customer without a TA

If there is no action for CS go to **Step 9**, There is no action for CS if the action is to:

- handle anything related to security for a customer with a TA
- handle a feature request for a customer with a TA
- provide guidance on how to think about using Sourcegraph/drive adoption (ie more proactive in nature guidance)
- for employment verifications, we can reply and send the requestor to [our Truework landing page](https://www.truework.com/verifications/sourcegraph-employment-verification/) where they can get what they need.

**Step 6:** Update the Ticket Subject in Zendesk, the subjects needs to highlight the root of the question/issue submitted, this can always be updated later if changes need to be made.

**Step 7:** Selecting _View Thread_ within the Slack Agent or selecting the url in the Zendesk ticket wiin will allow you to respond to the customer within the slack thread.

**Step 8:** Take appropraite actions on the ticket and update with the proper Zendesk [status](https://handbook.sourcegraph.com/departments/technical-success/support/process/support-workflow/#zendesk-statuses-and-what-they-mean)
**Step 9:** If there is no action for CS, use the "no action for CS macro" in Zendesk and leave a reason why not then submit the ticket as solved.

## FAQs

### 1. What if a new ticket is related to another ticket?

If the other ticket is still open, reach out to the SE who is currently assigned notifiy them of the new ticket and if applicable merge the new ticket into the exsisting ticket.

### 2. Can I merge a ticket into one that I closed in the past?

No. Hopefully in the future, Zendesk will give us this feature; for now, we can link to the other ticket and be sure the requestor is correct.

### 3. What do I do when I see a company update or solicitation in the triage queue?

We sometimes get all company updates or solicitation emails delivered to support mailbox. When you come across these, please go ahead and delete them.

If the email is clearly spam mark them as such (this can be done by clicking the three vertical dots on a ticket and selecting `Mark as Spam`) which will delete the ticket and make sure we don't get a similar email again.

If the email is around something that could be of interest to another team (examples could be a bill for a service that is about to expire or some security update) forward those to the appropriate team via Slack (or email group if its known).
For employment verification emails see above for steps.

### 4.What if we are close to missing SLA?

When SLA is close to expiring, we will see a notification posted from Zendesk Notifier in the #team-customer-support channel that will provide a link to the ticket that is close to breach.

### 5. How to triage post in the customer support channel.

When we see post in the Customer Support channel, we need to make sure whether or not a ticket needs to be created for the SE's following the same processes as listed above. There may be circumstances that involve additional action. Please view those [here](customer-exceptions.md).

### 6. Customer request on custom scripts.

Sometimes custom scripts are developed by the CE or TA team, if the customer reaches out regarding any issues with running the script. It would be no action for the CS team.

### 7. How to handle follow up tickets.

When a customer replies to a solved Zendesk ticket a new ticket will be created. You will want to remove all the tags and triage following the same steps listed above.

### 8. How to handle Hubspot emails?

If it's from the Hubspot form and for marketing, engage them in the #marketing Slack channel and @ mention @marketing-operations.

If it's from Hubspot, change the subject to "Sourcegraph help request".

For the Hubspot form, we will need to email the person from our work Gmail account with a subject like "Sourcegraph inquiry" and support@sourcegraph.com in cc and let them know a member of the team will help them. We do this so that we can ensure the customer gets the email since Zendesk could block it.
