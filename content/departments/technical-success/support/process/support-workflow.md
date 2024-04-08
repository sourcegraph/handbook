# Support Workflow

## From noticing an issue ... through resolution

1. **Someone notices something in our product not working correctly or needs help getting our product working.** This could be a prospect, a paying customer, open source users, or anyone at Sourcegraph -- we consider all of them customers, regardless of what "type."

2. **Someone engages the support team for help.** Our customers are able to initiate conversations for help via several methods (Slack channels, support@ email, Discord, etc -- (more details below). Allowing customers to initiate conversations via several methods increases the likelihood that we become aware of issues or questions as quickly as possible and can get our customers the help they need. We use Zendesk to keep track of every request from a customer. Zendesk simplifies what would otherwise feel complex through out-of-the-box configuration and integrations, allowing us to have almost everything in one place for easy prioritization and powerful data tracking. We get the benefit of everything coming to one place and customers have the lowest barrier possible to interact with us. Our teammates will almost always reach out to us over Slack. The primary exception is when there is an outage (`about`, /`search` on sourcegraph.com, or `docs` is fully unreachable) and engineering pages us via OpsGenie.

3. **A support engineer decides which conversation needs attention next.** As a general rule, we help in the order the request was received and aim to not have anyone waiting more than a couple of hours for a meaningful first response. We are mindful of [our SLAs](../index.md#slas). We personally follow our guiding principles around [prioritization](support-prioritization.md). We all [triage](customer-support-triaging.md) based on our availability.

4. **A support engineer takes accountability for a conversation in Zendesk.** From that moment, the support engineer is accountable for making sure the issue is resolved. How many open, active issues an support engineer can handle simultaneously depends. The team will always have to work together to make sure everyone has the time and space they need to solve issues effectively. If any of us feel overwhelmed, we make that known and employee the [case transition process](case-transitions.md) to balance the workload.

5. **The support engineer builds context.** Upon taking a case, you build context to determine how to proceed. You do this by:

   1. Determining who the customer is and where they are at in their lifecycle
   2. Reviewing relevant deployment and/or account info docs found in Vitally or in Salesforce.
   3. Talking with the TA or CE who is assigned (listed in the Salesforce app in Zendesk), if one is assigned. Depending on where the case originated, you may want to check with internal teammates to ensure we have full context. For example, again, a quick check with the CE/TA might yield invaluable information. If the issue is from marketing, we should see if they have any considerations for our response.
   4. Relevant Looker dashboards (for example [the customer version board](https://sourcegraph.looker.com/dashboards-next/163))
   5. Looking at other recent cases. A good starting point is the [database of resolved tickets](https://github.com/sourcegraph/support-tools-internal/tree/main/resolved-tickets).

6. **The support engineer does two extra things ASAP if the ticket originated from Slack.**

   1. **Signal accountability.** Comment in the thread from the customer in Slack with something along the lines of: "I'll help you with this. I need a few minutes to dig in and then I'll share my thoughts with you/see what questions I have." -- to signal your accountability to the CE and let the customer know we are on it. The goal is for this to be super quick and then you move on to the real initial response after you have had more time to dig in.
   2. **Taking accountability for more than one issue at a time.** If you see a customer has posted a few questions at once, go ahead and take accountability for them all. Often when customers do this the issues end up being related and it will be a better experience for everyone involved if the same person handles them all. This may require you to get help on other tickets and that is okay! Just let the team know and we will figure it out.

7. **The support engineer responds within our SLA response time**. The goal of our first responses is to be helpful, show progress, and not ever have anyone wondering what's next. As such, our first response is always informed by 1) considering full context for the customer, the issue, and the situation (we did most of this in step 5) and 2) first trying to solve the issue. If you need more time, that's okay - share that update with the customer.

8. **The support engineer ensures the issue is resolved.** This step is the biggest step. It could mean identifying and filing a defect. It could mean helping the customer figure out what they need to do. It could mean refocusing our efforts to not settle for symptom-focused solutions, but pushing ourselves and our engineering teammates to find the root cause. If we get stuck, that's okay! It will happen. A lot. Here are the steps we take when we are stuck:

   1. Ask our teammates in our #technical-customer-collaboration Slack channel.
   2. If we collectively don't know the answer, then we engage engineering following the steps outlined [here](engaging-other-teams.md).
   3. A few additional tips...
      - If ever an issue seems a bit bigger than helping a customer fix something that isn't working correctly or explaining how something works (for example, the customer needs to make a decision about doing something one way or another), then it's a good idea to loop in the CE and see if they want to offer any additional ideas/thoughts to the customer to help them from a strategic perspective.
      - Try to make sure that what you are helping a customer with is fully supported. You can check this by referring to the resources found [here](../../../product#feature-matrices).
      - For features tagged beta or experimental in our docs, it’s okay to err on the side of engaging engineering sooner rather than later (since we don't yet know if we will want to release these, we keep our docs light in case we opt to remove the feature after all).

9. **The support engineer ensures all appropriate tags are added to the ticket in Zendesk.** Ticket tags should be added to your ticket to accurately depict the theme of the issue within the ticket. A ticket theme helps us to identify which part of the product area was the point of focus discovered through the triaging process. Ticket tags are used to identify recurring themes that our customers are seeing. When these themes are identifed, it enables us to present detailed data to product and engineering teams on what our customers are experiencing.

   - **Example:** A question about batch changes resulted in there being an issue with the executors. `batch_changes` would be the tag to identify the product area, `executors` would identify the theme.

10. **The support engineer resolves the issue.** We don't consider something resolved unless the customer does/would. When one of these is true do we designate a case "closed" in Zendesk.

    1. We help the customer figure out what they need to do and they confirm they have done it and agree the issue is resolved `AND` we complete any internal tasks born from working on the ticket (like updating documentation or filing a GitHub issue for a docs update).
    2. We identify a workaround to get the customer on their way `AND` we file a defect or product improvement (in the public GitHub tracker) to address the underlying root cause and share the link with the customer.
    3. We help the customer figure out what they need to do and they stop responding. After a couple of attempts, if we are confident the issue would be solved, `AND` we complete any internal tasks born from working on the ticket (like updating documentation), we go ahead and consider it resolved. Often in these situations we give the CE a heads-up of our decision.
    4. We identify a defect, engineering fixes it, the customer confirms the issue is resolved `OR` we share the public defect link with the customer (always do this when possible instead of keeping the case open) `AND` we complete any internal tasks born from working on the ticket (like updating documentation). Until then, we consider the case open and while engineering prioritizes the defect for a fix, we place the case "on-hold" in Zendesk.
    5. We confirm the ticket is a product gap and follow the [product gap process](product-gap-process.md) to engage the account's Technical Advisor (TA) or the Scaled Success team.
    6. We confirm the ticket is product feedback and follow the [product feedback process](product-feedback-process.md) to share this feedback with the product team.
    7. If we are still working on finding the answer and the customer stops responding, we email a couple more times to see if they had a chance to look at our last response. If they still don't respond, and they have a CE, talk with them to see if they have another way to get in touch and see what's going on. If not, or if the customer does not have a CE, `AND` we complete any internal tasks born from working on the ticket (like updating documentation), then it's okay to close the ticket at this point.

11. **While we work, we keep Zendesk, Slack, and/or Salesforce up-to-date.** If a ticket originates in Slack, you'll still need to keep Zendesk up to date. Switch the requestor to the person asking for help in Slack so that the issue ties to the right customer. Assign ticket priority and estimated level-of-effort(LoE) tags. The level-of-effort is dynamic and can change over a tickets' lifetime. Use the internal notes function in Zendesk to leave notes for yourself to track your progress and decisions (these will also appear in Salesforce for others to see). A summary of what happened should be obvious in Zendesk even if all the work happened in Slack. Also, we will often learn details about a customer's environment, etc that we should keep in Salesforce and Vitally. We update it in the account info doc in [the customer notes folder](https://drive.google.com/drive/u/0/folders/1gjXWQ1l0Fnt2pVS2ohx3w0cw-gaJ_Ez0), if one exists (be sure to talk to the CE as part of updating it, in the event that what you are updating ends up being invaluable information to them for what else may be happening with the account). This data is then rendered in Zendesk so we don't have to ask the customer for it again. Zendesk also always reflects where we are at in our process by using the status function.

### Zendesk statuses and what they mean

- New
  - What a ticket in this state means: The initial state of the ticket when it’s created, before any first response to the requestor. These tickets may either be unassigned, or initially assigned to an SE without the first response yet sent.
  - Who has the next action: The next step is with us. We are actively working on it and have the next action / response.
- Open
  - What a ticket in this state means: The follow-on state of a ticket when someone responds to a ticket that’s in progress. An open ticket is assigned to an SE and being actively worked and effort is directly related to resolving the issue at hand (eg, root cause analysis, troubleshooting, research directly related to the issue at hand, collaboration on the issue, etc).
  - Who has the next action: The next step is with us. We are actively working on it and have the next action / response.
- Pending
  - What a ticket in this state means: The follow-on state of a ticket when we are waiting for the customer to respond. This includes when we believe the ticket is resolved and are waiting for confirmation from the customer.
  - Who has the next action: The next step is with the customer. We are not actively working on it and are waiting for the customer, who has the next action / response.
- On-hold
  - What a ticket in this state means: The follow-on state of a ticket when we are waiting for a Sourcegraph internal team or external third-party to respond or take the next step / action.
  - Who has the next action: The next step is with an internal team or external third-party. We are not actively working on it and are waiting for a third-party to reply, who has the next action / response.
- Solved
  - What a ticket in this state means: The final state of a ticket, when we believe we have resolved the issue fully. Note: solved tickets move to this status automatically after 48 business hours. They _can_ be reopened.
  - Who has the next action: No one. SE is no longer actively working the ticket. If the customer doesn’t feel it is resolved they will reopen.
- Closed
  - What a ticket in this state means: The final, locked state of a ticket. Closed tickets _cannot_ be reopened. Note: solved tickets move to this state 72 hours after set to solved.
  - Who has the next action: No one.

#### A note on "internal" tasks or work not directly related to resolving the issue

There are times when separate, ad-hoc tasks are necessary which are indirectly related to the resolution of a customer issue. This may include things like a documentation update, deeper testing on a feature, minor code fixes, etc. It is good, important work to do and make time for but shouldn’t hold up the resolution path of the ticket itself. As such, to keep track of these kinds of tasks, we have created a new issue type of type = Task.

When doing this kind of work, create a new ticket of type Task to keep track of your to-do list, but proceed on the customer case as-is.

## Details about all the methods via which our customers can ask for help

As explained above, our customers are able to initiate conversations for help via several methods.

### OpsGenie paging

- **Purpose:** Monitoring alerts trigger a page to make sure we know immediately about all outages (`about`, /`search` on sourcegraph.com, or `docs` is fully unreachable).
- **Those involved:** Software engineers > support
- **Details:** Initial pages trigger for the software engineer who is on-call. If it’s a system outage (about, /search, or docs is fully unreachable), the software developer pages support as outlined in our [on-call practice](../../../engineering/dev/process/incidents/on_call.md). Support will help troubleshoot (gathering information from any customers who report the issue) and handle internal (alerting stakeholders)/external (direct and status page posting) communications as outlined in our [serving as messenger during incidents](../../../engineering/dev/process/incidents/index.md).

### Customer Slack channels (internal or external)

- **Purpose:** Provided to enterprise customers during trial (pre-sales) and converted to a support channel (post-sales) for ongoing communications via an easy, familiar method
- **Those involved:** AE + CE + TA + support > (Engineering) + Product
- **Details:** We use Foqal.io to automate support within any customer channel. As long as we are able to add the Foqal Agent to the slack channel - whether our channel or customer-owned - and enable the form widget so that customers can create a request for Support we are able to support the customer via slack. We do not monitor all activity in the channel and require the customer to submit a request. Once submitted, it automatically creates a ticket in Zendesk. TAs are ultimately responsible for these channels and there is huge value-add for them to engage with customers here frequently. There is equal value in addressing customer questions/issues with reasonable responsiveness, and support is in a better position to do so. The special steps associated with these channels are outlined above.

- **_Important note_: CS only supports slack channels that our support Agent can be added to. Customers who are not able to do so can engage support via support@sourcegraph.com. Customer Engineers and Account Excutives can also create a Zendesk ticket on behalf of the customer, setting the customer as the requestor and inserting the relative slack link into the ticket.**

### help (https://discord.com/channels/969688426372825169/981588434315522048) channel in Community Discord

- **Purpose:** Provided as an avenue for our community members (champions, open source, SaaS offering users) to get help.
- **Those involved:** Support, product, marketing (especially our community team)
- **Details:** This is the one channel in our Community Discord account that is linked to Zendesk to create a ticket for each post. Support's role is to make sure no post gets left behind. Others at Sourcegraph may jump in and help, and that is great! We just want to make sure everyone gets the help they need.

### Internal Slack channel #ask-customer-support

- **Purpose:** Where the customer support team communicates with folks outside the team and vice versa. Always okay to ask questions here, collaborate on a customer issue, etc
- **Those involved:** Support + anyone who has questions, needs to collaborate
- **Details:** This is a primary collaboration space for us to work with folks across the company and them to work with us.

### Hubspot "talk to a dev" form

- **Purpose:** Initially this button in the app was an experiment that sort of turned into a thing and now the link lives elsewhere, so here we are!
- **Those involved:** Support > marketing (if necessary)
- **Details:** Most of what comes in are help requests; but if anything looks more marketing related in nature, we loop marketing in by engaging them in the #marketing Slack channel and @ mentioning @marketing-operations.

### NPS responses

- **Purpose:** We have a form embedded in the product to inquire with customers how they feel about the product every so often.
- **Those involved:** Product > support (if necessary)
- **Details:** Sometimes this feedback becomes support-ish in nature. When this happens, product engages support via [their process outlined here](../../../product/process/feedback/product_feedback_monitoring.md) and support handles it via our outlined workflow steps.

### support@ email

- **Purpose:** Official support email address for customers and that anyone internally can copy in if they are emailing with a customer and a support issue/question comes up.
- **Those involved:** Support > CE, product, etc
- **Details:** These emails feed into Zendesk and are triaged and handled by support. If anything is more relevant for a CE, product, etc, then support will alert that team/person in the most appropriate Slack channel to coordinate. Similarly, if anyone defers to support using this email, they are also welcome to create such a thread with more context in the Slack #ask-customer-support channel.

### feedback@ email

- **Purpose:** An email that is sometimes included in forms we send customers (for example, our NPS forms). It may not be used frequently, but when it is used, we want to be sure nothing falls through the cracks.
- **Those involved:** Product > support (if necessary)
- **Details:** Sometimes this feedback becomes support-ish in nature. When this happens, product engages support via [their process outlined here](../../../product/process/feedback/product_feedback_monitoring.md) and support handles it via our outlined workflow steps.

### Support contracts

- **Purpose:** Agreed upon contracts to provide with dedicated support.
- **Those involved:** CE/support/engineering
- **Details:** You can see which customers have such contracts in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit).

### [GitHub public issue tracker](https://github.com/sourcegraph/sourcegraph/issues)

- **Purpose:** Our non-paying and open source customers can seek help via this tracker, though sometimes our team and enterprise customers opt to use it, too.
- **Those involved:** Product > support (if necessary)
- **Workflow:** Sometimes this feedback becomes support-ish in nature. When this happens, product engages support via [their process outlined here](../../../product/process/feedback/product_feedback_monitoring.md) and support handles it via our outlined workflow steps. Additionally, the relevant templates instruct customers to email support@sourcegraph.com if they require immediate help.
