# How to Triage like a Pro

**Step 1:** Conversation initiated by the customer

**Step 2:** Notification is in Slack under Support Agent

**Step 3:** While under Support Agent select _Home_ and see incoming tickets under _Waiting for Help_

**Step 4:** To assign the ticket to yourself select ‘…’ and then select Start.

**Step 5:** Identify if there is action for CS or not if it's not clear, post in #customer-support-triage and brainstorm the best path.

If there is an action for CS, go to Step 6. There is an action for CS if the action is to:

- troubleshoot
- explain how a feature works in the product/how to do something in the product
- handle incident customer communication
- handle anything related to security for a customer without a TA
- handle a feature request for a customer without a TA

If there is no action for CS, go to back to step 4 select ‘…’ and then select _Ignore_ then proceed to step 8. There is no action for CS if the action is to:

- handle anything related to security for a customer with a TA
- handle a feature request for a customer with a TA
- provide guidance on how to think about using Sourcegraph/drive adoption (ie more proactive in nature guidance)
- for employment verifications, marketing, spam, and other non-support related issues check out [Handling Non-Support Emails](non-support-emails.md).

**Step 6:** Selecting _View Thread_ will allow you to respond to the customer within the slack thread.

**Step 7:** Once done communicating with the customer in the Slack Thread, you will go back to support agent and from there you can put the thread on Hold with Notes or End Chat.

- **Hold:** Chat can be placed on hold while you are working on stuff in the
  background. When you are not interacting with the customer. To Resume communication you will go to Support Agent, Hold ‘…’, select Resume.
- **End Chat:** This is the same information that is filled out when closing a Zendesk ticket and is automatically transferred over to the Zendesk.

**Step 8:** If there is no action for CS, use the "no action for CS macro" in Zendesk and leave a reason why not then submit the ticket as solved.

## Zendesk Ticket Standards

It is important that we maintain consistent quality across our support tickets to ensure the collection of valuable data that can be shared with our Product and Engineering Teams.

### Ticket Subject

The Zendesk ticket subject should be clear, concise, and structured with relevant keywords. This will enable both the product and engineering teams to quickly read and understand the issue or question.

### Ticket Tagging

It is crucial to thoughtfully select ticket tags for the quick and efficient categorization of the ticket's content. Use relevant keywords and phrases as tags to aid in seamless search and filtering. This practice benefits both our product and engineering teams. To enhance overall ticket management, avoid using overly generic or ambiguous tags. Instead, maintain a consistent and organized tagging system that aligns with Sourcegraph's specific support needs. Examples: `embeddings` `multi_version_upgrades` `query_syntax_issues`

### Ticket Organizations and Users

To ensure accurate information for both users and organizations, it's important to verify and update these details. When you encounter `create` next to the organization, please select the appropriate organization and then update the domain section in Zendesk. If the user is not associated with an organization, select the user's name and update the organization section in Zendesk accordingly.

## FAQs

### 1. What should I do when I see a ticket originating from Slack with an internal user as the post owner?

The first step would be to open up the slack channel in which the Sourcegraph colleague posted, which is linked in the Zendesk ticket. In here we can see what happened in the conversation. This helps build context as to whether similar tickets correspond to this as well (may or may not necessitate a merge). Based on a slack channel, tickets can be created in Zendesk that are related to the challenge that the customer is facing. For this, it would be great to merge them and associate them to the customer. Also great to note that the ticket can be closed if the colleague in the thread doesn’t need our help.

### 2. What if a new ticket is related to another ticket?

If the other ticket is still open, merge the new ticket into it and alert our teammates who is responsible for the active ticket. This is easiest to see for tickets that originate from Slack. If you catch it for those that come in via email, that is great, but it can be harder to do.

### 3. Can I merge a ticket into one that I closed in the past?

No. Hopefully in the future, Zendesk will give us this feature; for now, we can link to the other ticket and be sure the requestor is correct.

### 4. What do I do when I see a non-support email in the triage queue?

Sometimes, emails not related to support issues, such as employment verification, bills, marketing, or spam, may be directed to Support. Please refer to the section on [Handling Non-Support Emails](non-support-emails.md) for guidance.

### 5. What if we are close to missing SLA?

When SLA is close to expiring and the ticket is assigned, we ask SE to send a first response; otherwise, we collaborate as a team to provide a meaningful initial response to prevent SLA violations.

### 6. How to triage post in the customer support channel.

When we see post in the Customer Support channel, we need to make sure whether or not a ticket needs to be created for the SE's following the same processes as listed above. There may be circumstances that involve additional action. Please view those [here](customer-exceptions.md).

### 7. Customer request on custom scripts.

Sometimes custom scripts are developed by the CE or TA team, if the customer reaches out regarding any issues with running the script. It would be no action for the CS team.

### 8. How to handle follow up tickets.

When a customer replies to a solved Zendesk ticket a new ticket will be created. You will want to remove all the tags and triage following the same steps listed above.

### 9. How to add the support agent integration to a customer Slack channel.

Simply navigate to the support agent app in Slack and at the top expand the title with the drop-down arrow. Choose the first option, `Add this app to a channel` and either search out or type the channel you'd like to add the integration to. Here's a quick [video](https://www.loom.com/share/6f5b7191a8fa49478318b9ce81dd9cc8) on how to do it. Please ping @CS-Leadership so they can complete the [setup](https://docs.google.com/document/d/1gmApObWJUZ6DfR9w2xNmBTXppRhG6plQA8mWYYs1Y5Y/edit#)
