## How to triage like a pro

**Step 1:** Conversation initiated by the customer

**Step 2:** Notification is in Slack under Support Agent

**Step 3:** While under Support Agent select _Home_ and see incoming tickets under _Waiting for Help_

**Step 4:** To assign the ticket to yourself select ‘…’ and then select Start.

**Step 5:** Identify if there is action for CS or not if it's not clear, post in #customer-support-triage and brainstorm the best path.

If there is an action for CS, got to Step 6. There is an action for CS if the action is to:

- troubleshoot
- explain how a feature works in the product/how to do something in the product
- handle incident customer communication
- handle anything related to security for a customer without a CE
- handle a feature request for a customer without a CE

If there is no action for CS, go to back to step 4 select ‘…’ and then select _Ignore_ then proceed to step 8. There is no action for CS if the action is to:

- handle anything related to licensing
- handle anything related to security for a customer with a CE
- handle a feature request for a customer with a CE
- provide guidance on how to think about using Sourcegraph/drive adoption (ie more proactive in nature guidance)
- for employment verifications, we can reply and send the requestor to [our Truework landing page](https://www.truework.com/verifications/sourcegraph-employment-verification/) where they can get what they need.

**Step 6:** Selecting _View Thread_ will allow you to respond to the customer within the slack thred.

**Step 7:** Once done communicating with the customer in the Slack Thread, you will go back to support agent and from there you can put the thread on Hold with Notes or End Chat.

- **Hold:** Chat can be placed on hold while you are working on stuff in the
  background. When you are not interacting with the customer. To Resume communication you will go to Support Agent, Hold ‘…’, select Resume.
- **End Chat:** This is the same information that is filled out when closing a Zendesk ticket and is automatically transferred over to the Zendesk.

**Step 8:** If there is no action for CS, use the "no action for CS macro" in Zendesk and leave a reason why not then submit the ticket as solved.

## FAQs

### 1. What should I do when I see a ticket originating from Slack with an internal user as the post owner?

The first step would be to open up the slack channel in which the Sourcegraph colleague posted, which is linked in the Zendesk ticket. In here we can see what happened in the conversation. This helps build context as to whether similar tickets correspond to this as well (may or may not necessitate a merge). Based on a slack channel, tickets can be created in Zendesk that are related to the challenge that the customer is facing. For this, it would be great to merge them and associate them to the customer. Also great to note that the ticket can be closed if the colleague in the thread doesn’t need our help.

### 2. What if a new ticket is related to another ticket?

If the other ticket is still open, merge the new ticket into it and alert our teammates who is responsible for the active ticket. This is easiest to see for tickets that originate from Slack. If you catch it for those that come in via email, that is great, but it can be harder to do.

### 3. Can I merge a ticket into one that I closed in the past?

No. Hopefully in the future, Zendesk will give us this feature; for now, we can link to the other ticket and be sure the requestor is correct.

### 4. What do I do when I see a company update in the triage queue?

We sometimes get all company updates coming to the support mailbox. Company updates could be meeting updates etc. When you come across these updates, from a data integrity perspective, please go ahead and delete them.

### 5.What if we are close to missing SLA?

When SLA is close to expiring, we view the teams' cases we ask those AERs with less than 5 open/active tickets (pending or open ... on hold = not active) if they have capacity to take it.

### 6. How to triage post in the customer support channel.

When we see post in the Customer Support channel, we need to make sure whether or not a ticket needs to be created for the AER's following the same processes as listed above. There may be circumstances that involve additional action. Please view those [here](customer-exceptions.md).

### 7. Customer request on custom scripts.

Sometimes custom scripts are developed by the CE team, if the customer reaches out regarding any issues with running the script. It would be no action for the CS team.

### 8. How to handle follow up tickets.

When a customer replies to a solved Zendesk ticket a new ticket will be created. You will want to remove all the tags and triage following the same steps listed above.

### 9. How to handle Hubspot emails?

If it's from the Hubspot form and for marketing, engage them in the #marketing Slack channel and @ mention @marketing-operations.

If it's from Hubspot, change the subject to "Sourcegraph help request".

For the Hubspot form, we will need to email the person from our work Gmail account with a subject like "Sourcegraph inquiry" and support@sourcegraph.com in cc and let them know a member of the team will help them. We do this so that we can ensure the customer gets the email since Zendesk could block it.

### 10. How to add the support agent integration to a customer Slack channel.

Simply navigate to the support agent app in Slack and at the top expand the title with the drop-down arrow. Choose the first option, `Add this app to a channel` and either search out or type the channel you'd like to add the integration to. Here's a quick [video](https://www.loom.com/share/6f5b7191a8fa49478318b9ce81dd9cc8) on how to do it.
