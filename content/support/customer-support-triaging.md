# Customer Support Triaging
According to the Oxford dictionary, *triaging* or *triage* is the act of deciding the order of treatment. As customer support, we are the ‘doctors’ to our customers. We provide solutions to them when they have a problem. They are the ‘patients’.

When a customer posts a question/issue/problem in our shared slack channel or email, they end up in the *triage tickets* view in Zendesk.
What this means is that the customer issue needs to be understood before it’s assigned/picked up by a customer support engineer, which happens in the *Unassigned tickets* view.

## The speed at which to triage
In order to set-up the team for success meeting our internal 1-hour SLA, it is critical that the triage team triages every ticket that comes in within ~10 minutes of it coming in. 

## How to triage like a pro
* **Step 1:** In the triage view, the first step is to open a ticket and understand the context of the message. Slow down and have a closer look at the content and the medium from which the message originated (emails tend to be rare). Is this related to another open issue? Is this a new issue? Is this not an issue at all?

* **Step 2:** Identify if there is action for CS or not
	* If there is an action for CS, go to step 3
	* If there is no action for CS, go to step 8


* **Step 3:** Before you do anything else, if the case came in via Slack, you will need to manually trigger the SLA counter. To do so, leave the requester as the Zendesk Slack Bot and change from internal note to public reply and send "triggering SLA counter" as a public reply (send it by saving the case as "open." Don't worry, this goes to a no-reply email. If the case came in via email, this step isn't necessary. 

* **Step 4:** If the case came in via Slack, change the requestor to the person who requested it. This is not necessary if the ticket came in via email. 

* **Step 5:** Leave an internal note that says "In CS queue for helping" and share any other context for the team. This note also syncs to Salesforce so that CEs know our triaging decision. 

* **Step 6:** On the left panel, under *Tags*, select, *triaged*.

* **Step 7:** On the left panel, under the *Select Assignee* tab, pick *Assign to this group* and submit the ticket as open -- this will make sure the ticket lands in the *Unassigned queue* (which requires that ticket have the tag “triaged,” status of “open” and assignee of the Support group).  

* **Step 8:** If the case came in via Slack, change the requestor to the person who requested it. This is not necessary if the ticket came in via email. 

* **Step9:** If there is no action for CS, use the "no action for CS macro" and leave a reason why not -- remember, these internal notes sync to Salesforce so CEs know our decision making. This macro should also change the assignee to Virginia, which is important so these tickets don't count in the support metric data. 

## FAQs

### 1. Whose responsible for triaging?

Virginia, Stompy, and Carl are responsible for triaging. If needed, Adeola, Beatrix, and Warren can serve as back-up.

### 2. What should I do when I see a ticket originating from Slack with an internal user as the post owner?

The first step would be to open up the slack channel in which the Sourcegraph colleague posted, which is linked in the Zendesk ticket. In here we can see what happened in the conversation. This helps build context as to whether similar tickets correspond to this as well (may or may not necessitate a merge). Based on a slack channel, tickets can be created in Zendesk that are related to the challenge that the customer is facing. For this, it would be great to merge them and associate them to the customer. Also great to note that the ticket can be closed if the colleague in the thread doesn’t need our help.

### 3. What if a new ticket is related to another ticket?

If the other ticket is still open, merge the new ticket into it and alert our teammates who is responsible for the active ticket. This is easiest to see for tickets that originate from Slack. If you catch it for those that come in via email, that is great, but it can be harder to do.

### 4. Can I merge a ticket into one that I closed in the past?
Short answer, No. Hopefully in the future, Zendesk will give us this feature; for now, we can link to the other ticket and be sure the requestor is correct.

### 5. Do we have anything to triage manually?

Yes, we have a few customers listed in our [Customer Exception list](customer-exceptions.md) that we have to manually triage because we cannot automate the link from Slack to Zendesk. When a customer creates a support request in these channels, we have to manually create a Zendesk ticket and then triage that.

### 6. What do I do when I see a company update in the triage queue?

We sometimes get all company updates coming to the support mailbox. Company updates could be meeting updates etc. When you come across these updates, from a data integrity perspective, please go ahead and delete them.
