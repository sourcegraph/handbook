# Customer Support Triaging

According to the Oxford dictionary, _triaging_ or _triage_ is the act of deciding the order of treatment. As customer support, we are the ‘doctors’ to our customers. We provide solutions to them when they have a problem. They are the ‘patients’.

When a customer posts a question/issue/problem in our shared slack channel or email, they end up in the _triage tickets_ view in Zendesk.
What this means is that the customer issue needs to be understood before it’s assigned/picked up by a customer support engineer, which happens in the _Unassigned tickets_ view.

## The speed at which to triage

In order to set-up the team for success meeting our internal 1-hour SLA, it is critical that the triage team triages every ticket that comes in within ~10 minutes of it coming in.

That said, there may be times when we have unusually large amount of work or more folks are out than normal and it is fine customers have to wait. In such situations, we follow [support capacity levels and contingencies](support-capacity-levels-and-contingencies.md). It is part of triage's role to understand the team's capacity and facilitate accordingly.

## How to triage like a pro

- **Step 1:** In the triage view, the first step is to open a ticket and understand the context of the message. Slow down and have a closer look at the content and the medium from which the message originated (emails tend to be rare). Is this related to another open issue? Is this a new issue? Is this not an issue at all?

- **Step 2:** If the case came in via Slack (whether or primary account and the support- or trial- channels, or our Community account and the #help channel, or the Hubspot "talk to a dev" form), change the requestor to the person who requested it. This is not necessary if the ticket came in via email.

  - Sometimes it may be an internal person and that would be correct, unless our teammate is posting on behalf of the customer and then we would want to change it to the customer.
  - When an application engineer is assigned to a customer, this step will also trigger that application engineer and their backup to appear as a follower (you don't see these auto populate until after you save the ticket (ie "submit as open").
  - For the Hubspot form, we will need to email the person from our work Gmail account with a subject like "Sourcegraph inquiry" and support@sourcegraph.com in cc and let them know a member of the team will help them. We do this so that we can ensure the customer gets the email since Zendesk could block it.

- **Step 3:** Identify if there is action for CS or not

  If there is an action for CS, got to Step 4. There is an action for CS if the action is to:

  - troubleshoot
  - explain how a feature works in the product/how to do something in the product
  - handle incident customer communication
  - handle anything related to security for a customer without a CE
  - handle a feature request for a customer without a CE

  If there is no action for CS, go to step 9. There is no action for CS if the action is to:

  - handle anything related to licensing
  - handle anything related to security for a customer with a CE
  - handle a feature request for a customer with a CE
  - provide guidance on how to think about using Sourcegraph/drive adoption (ie more proactive in nature guidance)
  - for employment verifications, we can reply and send the requestor to [our Truework landing page](https://www.truework.com/verifications/sourcegraph-employment-verification/) where they can get what they need.

  If it's not clear, post in #customer-support-triage and brainstorm the best path.

  If it's from the Hubspot form and for marketing, engage them in the #marketing Slack channel and @ mention @marketing-operations.

- **Step 4:** If it's from Hubspot, change the subject to "Sourcegraph help request"

- **Step 5:** Leave an internal note that says "In CS queue for helping" and share any other context for the team. This note also syncs to Salesforce so that CEs know our triaging decision.

- **Step 6:** On the left panel, under _Tags_, select, _triaged_.

- **Step 7:** On the left panel, under the _Select Assignee_ tab, pick _Assign to this group_ and submit the ticket as open -- this will make sure the ticket lands in the _Unassigned queue_ (which requires that ticket have the tag “triaged,” status of “open” and assignee of the Support group).

- **Step 8:** Create a post in our #customer-support-internal Slack channel altering the team that there is a new ticket available to take. Remember to facilitate if necessary, @ mentioning folks who have capacity to take it if we are at level 2 capacity.

- **Step 9:** If there is no action for CS, use the "no action for CS macro" and leave a reason why not -- remember, these internal notes sync to Salesforce so CEs know our decision making. These tickets don't count in the support metric data. You may then submit the ticket as solved.

## FAQs

### 1. Whose responsible for triaging?

- Nonso 08:00–14:00 UTC (Stompy as backup)
- Shawnteé 14:00-21:00 UTC (Brielle as backup)
- Brielle 21:00–22:00 UTC (Warren as backup)
- Gabe/Warren 22:00-1:00 UTC

### 2. What should I do when I see a ticket originating from Slack with an internal user as the post owner?

The first step would be to open up the slack channel in which the Sourcegraph colleague posted, which is linked in the Zendesk ticket. In here we can see what happened in the conversation. This helps build context as to whether similar tickets correspond to this as well (may or may not necessitate a merge). Based on a slack channel, tickets can be created in Zendesk that are related to the challenge that the customer is facing. For this, it would be great to merge them and associate them to the customer. Also great to note that the ticket can be closed if the colleague in the thread doesn’t need our help.

### 3. What if a new ticket is related to another ticket?

If the other ticket is still open, merge the new ticket into it and alert our teammates who is responsible for the active ticket. This is easiest to see for tickets that originate from Slack. If you catch it for those that come in via email, that is great, but it can be harder to do.

### 4. Can I merge a ticket into one that I closed in the past?

Short answer, No. Hopefully in the future, Zendesk will give us this feature; for now, we can link to the other ticket and be sure the requestor is correct.

### 5. Do we have anything to triage manually?

Yes, we have a few customers listed in our [Customer Exception list](customer-exceptions.md) that we have to manually triage because we cannot automate the link from Slack to Zendesk. When a customer creates a support request in these channels, we have to manually create a Zendesk ticket and then triage that.

We also look at the queues of anyone who is out that day to see if someone needs to fill-in (the original CSE keeps responsibility) -- great for when the CSE is out a day or two -- or we if we need to transition the case to another CSE --great for when the CSE is out a longer period of time.

We should be creating tickets when the post is from someone at the customer, even if the end result is no action for CS. We can skip things from our internal teammates.

And finally, we are also brought into every new incident channel to be there if it requires customer communication and ensure we have a team member available to serve as a messenger.

### 6. What do I do when I see a company update in the triage queue?

We sometimes get all company updates coming to the support mailbox. Company updates could be meeting updates etc. When you come across these updates, from a data integrity perspective, please go ahead and delete them.

### 7.What if we are close to missing SLA?

When SLA is close to expiring, we view the teams' cases we ask those AERs with less than 5 open/active tickets (pending or open ... on hold = not active) if they have capacity to take it.

### 8. What to do when it is an AER first day taking cases?

When it's an AER first day take to take cases, they will get the first one that comes through the queue. After that, they will have the first right of refusal. The goal is for them to have 3 cases by the end of the week.

### 9. How to Triage Post Customer Support

When we see post in the Customer Support channel, we need to make sure whether or not a ticket needs to be created for the AER's following the same processes as listed above. There may be circumstances that involve additional action. Please view those [here](customer-exceptions.md)

### 10. Customer Request on Custom Scripts

Sometimes custom scripts are developed by the CE team, if the customer reaches out regarding any issues with running the script. It would be no action for the CS team.

### 11. How to Handle Follow Up Tickets

When a customer replies to a solved Zendesk ticket a new ticket will be created. You will want to remove all the tags and triage following the same steps listed above.

### 12. External Communities

There are a couple of external slack communities that customers can ask questions in. If you do not have access to these, you can be invited by any team member with access. Please post in our internal slack channel to ask for access.

### 13. Slack Channels

When slack channels have 'support-' they will automatically trigger Zendesk to create tickets. If you see a Zendesk ticket that comes in like this please reach out to the appropiate slack channel and ask if they would be able to change the dash to a an underscore or some other symbol. You can then delete the Zendesk ticket.
