# Customer Support Triaging
According to the Oxford dictionary, *triaging* or *triage* is the act of deciding the order of treatment. As customer support, we are the ‘doctors’ to our customers. We provide solutions to them when they have a problem. They are the ‘patients’.

When a customer posts a question/issue/problem in our shared slack channel or email, they end up in the *triage tickets* view in Zendesk.
What this means is that the customer issue needs to be understood before it’s assigned/picked up by a customer support engineer, which happens in the *Unassigned tickets* view.

## How to triage like a pro
Step 1:
In the triage view, the first step is to open a ticket and understand the context of the message. Slow down and have a closer look at the content and the medium from which the message originated (emails tend to be rare). Is this related to another open issue? Is this a new issue? Is this not an issue at all?

P.S: Internal notes are the default reply option in Zendesk.

Step 2:
Making an internal note for the rest of the team to understand what is required or what your decision was is really key. We are able to pick up context faster and jump in to pick up the ticket.
Internal notes are considered reminders and guides about the customer issue. They’re visible in Salesforce and to everyone in the company who has access to Salesforce. Please make sure to remind each other to change the requestor so that we can have high data integrity in Zendesk.

Step 3:
On the left panel, under *Tags*, select, *triaged*. You’ll want to submit the ticket as open now before going to the next step.

Step 4:
On the left panel, under the *Select Assignee* tab, pick *Assign to this group* and submit the ticket as open one more time -- this will make sure the ticket lands in the *Unassigned queue* (which requires that ticket have the tag “triaged,” status of “open” and assignee of the Support group).  It's important for data integrity, to ensure that we select Virginia as the assignee for tickets that don't require CS action.

## FAQs

### 1. Whose responsible for triaging?

Virginia is responsible for triaging, and all CSEs are welcome to triage if they are ready to pick up and work a ticket and they see Virginia hasn't yet triaged the new tickets.

### 2. What should I do when I see a ticket originating from Slack with an internal user as the post owner?

The first step would be to open up the slack channel in which the Sourcegraph colleague posted, which is linked in the Zendesk ticket. In here we can see what happened in the conversation. This helps build context as to whether similar tickets correspond to this as well (may or may not necessitate a merge). Based on a slack channel, tickets can be created in Zendesk that are related to the challenge that the customer is facing. For this, it would be great to merge them and associate them to the customer. Also great to note that the ticket can be closed if the colleague in the thread doesn’t need our help.

### 3. What if a new ticket is related to another ticket?

If the other ticket is still open, merge the new ticket into it and alert our teammates who is responsible for the active ticket. This is easiest to see for tickets that originate from Slack. If you catch it for those that come in via email, that is great, but it can be harder to do.

### 4. Can I merge a ticket into one that I closed in the past?
Short answer, No. Hopefully in the future, Zendesk will give us this feature; for now, we can link to the other ticket and be sure the requestor is correct.

### 5. Do we have anything to triage manually?

Yes, we have a few customers listed in our [Customer Exception list](customer-exceptions.md) that we have to manually triage because we cannot automate the link from Slack to Zendesk. When a customer creates a support request in these channels, we have to manually create a Zendesk ticket and then triage that.

### 6. What do I do when I see a company update in the triage queue?

We sometimes get all company updates coming to the support mailbox. Company updates could be meeting updates etc. When you come across these updates, from a data integrity perepective, please go ahead and delete them.
