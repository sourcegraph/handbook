# Customer Support Triaging

According to the Oxford dictionary, _triaging_ or _triage_ is the act of deciding the order of treatment. As customer support, we are the ‘doctors’ to our customers. We provide solutions to them when they have a problem. They are the ‘patients’.

When a customer posts a question/issue/problem in our shared slack channel or email, they end up in the _triage tickets_ view in Zendesk.
What this means is that the customer issue needs to be understood before it’s assigned/picked up by a customer support engineer, which happens in the _Unassigned tickets_ view.

## The speed at which to triage

In order to set-up the team for success meeting our internal 1-hour SLA, it is critical that the triage team triages every ticket that comes in within ~10 minutes of it coming in.

That said, there may be times when we have unusally large amount of work or more folks are out than normal and it is fine customers have to wait. In such [situations](<support-prioritization.md#:~:text=When%20we%20have%20an%20unusually%20large%20amount%20of%20work%20or%20more%20folks%20are%20out%20than%20normal%2C%20it%20is%20fine%20if%20customers%20(including%20pre-sales)%20have%20to%20wait.%20In%20such%20situations%2C%20we%20will%20communicate%20proactively%2C%20letting%20them%20know%20that%20we%20have%20team%20members%20arriving%20in%20another%20few%20hours%20who%20will%20be%20able%20to%20help%20them.>), the person triaging can help set expectations and invite the customer to share whether there is more urgency than may be immediately apparent.

## How to triage like a pro

- **Step 1:** In the triage view, the first step is to open a ticket and understand the context of the message. Slow down and have a closer look at the content and the medium from which the message originated (emails tend to be rare). Is this related to another open issue? Is this a new issue? Is this not an issue at all?

- **Step 2:** If the case came in via Slack (whether or primary account and the support- or trial- channels, or our Community account and the #help channel, or the Hubspot "talk to a dev" form), change the requestor to the person who requested it. This is not necessary if the ticket came in via email.

  - Sometimes it may be an internal person and that would be correct, unless our teammate is posting on behalf of the customer and then we would want to change it to the customer.
  - When an application engineer is assigned to a customer, this step will also trigger that application engineer and their backup to appear as a follower (you don't see these auto populate until after you save the ticket (ie "submit as open").
  - For the Hubspot form, we will also need to change the subject from "[Sourcegraph] Contact reconversion by submitting on HubSpot Form "Contact Us | Talk to a Dev" to something more useful for the person asking for help, like "Sourcegraph help request" -- that way they look at the email when a member of the team answers them.

- **Step 3:** Identify if there is action for CS or not

  If there is an action for CS, got to Step 4. There is an action for CS if the action is to:

  - troubleshoot
  - explain how a feature works in the product/how to do something in the product
  - handle anything related to security for a customer without a CE
  - handle a feature request for a customer without a CE

  If there is no action for CS, go to step 9. There is no action for CS if the action is to:

  - handle anything related to licensing
  - handle anything related to security for a customer with a CE
  - handle a feature request for a customer with a CE
  - provide guidance on how to think about using Sourcegraph/drive adoption (ie more proactive in nature guidance)

  If it's not clear, post in #customer-support-triage and brainstorm the best path.

  If it's from the Hubspot form and for marketing, engage them in the #marketing Slack channel and @ mention @marketing-operations.

- **Step 4:** If it's from Hubspot, change the subject to "Sourcegraph help request"

- **Step 5:** Leave an internal note that says "In CS queue for helping" and share any other context for the team. This note also syncs to Salesforce so that CEs know our triaging decision.

- **Step 6:** On the left panel, under _Tags_, select, _triaged_.

- **Step 7:** On the left panel, under the _Select Assignee_ tab, pick _Assign to this group_ and submit the ticket as open -- this will make sure the ticket lands in the _Unassigned queue_ (which requires that ticket have the tag “triaged,” status of “open” and assignee of the Support group).

- **Step 8:** Create a post in our #customer-support-internal Slack channel altering the team that there is a new ticket available to take.

- **Step 9:** If there is no action for CS, use the "no action for CS macro" and leave a reason why not -- remember, these internal notes sync to Salesforce so CEs know our decision making. This macro should also change the assignee to Virginia, which is important so these tickets don't count in the support metric data. You may then submit the ticket as solved.

## FAQs

### 1. Whose responsible for triaging?

Nonso 08:00 - 14:00 UTC (Stompy as backup)
Stompy 14:00 - 15:00 UTC (Tamar, Brielle, Nonso as backup)
Virginia 15:00 - 24:00 UTC (Tamar, Brielle as backup)

### 2. What should I do when I see a ticket originating from Slack with an internal user as the post owner?

The first step would be to open up the slack channel in which the Sourcegraph colleague posted, which is linked in the Zendesk ticket. In here we can see what happened in the conversation. This helps build context as to whether similar tickets correspond to this as well (may or may not necessitate a merge). Based on a slack channel, tickets can be created in Zendesk that are related to the challenge that the customer is facing. For this, it would be great to merge them and associate them to the customer. Also great to note that the ticket can be closed if the colleague in the thread doesn’t need our help.

### 3. What if a new ticket is related to another ticket?

If the other ticket is still open, merge the new ticket into it and alert our teammates who is responsible for the active ticket. This is easiest to see for tickets that originate from Slack. If you catch it for those that come in via email, that is great, but it can be harder to do.

### 4. Can I merge a ticket into one that I closed in the past?

Short answer, No. Hopefully in the future, Zendesk will give us this feature; for now, we can link to the other ticket and be sure the requestor is correct.

### 5. Do we have anything to triage manually?

Yes, we have a few customers listed in our [Customer Exception list](customer-exceptions.md) that we have to manually triage because we cannot automate the link from Slack to Zendesk. When a customer creates a support request in these channels, we have to manually create a Zendesk ticket and then triage that.

We also look at the queues of anyone who is out that day to see if someone needs to fill-in (the original CSE keeps responsibility) -- great for when the CSE is out a day or two -- or we if we need to transition the case to another CSE --great for when the CSE is out a longer period of time.

### 6. What do I do when I see a company update in the triage queue?

We sometimes get all company updates coming to the support mailbox. Company updates could be meeting updates etc. When you come across these updates, from a data integrity perspective, please go ahead and delete them.
