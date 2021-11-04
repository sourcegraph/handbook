# Support Workflow

## From noticing an issue ... through resolution

Things happen pretty much in this order...and at every step, our decisions and actions are informed by [our ethos](../support/index.md).

1. **Someone notices something in our product not working correctly or needs help getting our product working.** This could be a prospect, a paying customer, an open source users, or anyone at Sourcegraph -- we consider all of them customers, regardless of what "type."

2. **Someone engages the support team for help.** Our customers are able to initiate conversations for help via several methods (Slack channels, support@ email, Twitter, etc -- (more details below). Allowing customers to initiate conversations via several methods increases the likelihood that we become aware of issues, feedback, etc as quickly as possible and can get our customers the help they need. In order to scale this, we use Zendesk. Zendesk simplifies what would otherwise feel complex through out-of-the-box configuration and integrations, allowing us to have almost everything in one place for easy prioritization and powerful data tracking. We get the benefit of everything coming to one place and customers have the lowest barrier possible to interact with us. Our teammates will almost always reach out to us over Slack. The primary exception is when there is an outage (`about`, /`search` on sourcegraph.com, or `docs` is fully unreachable) and engineering pages us via OpsGenie - you can read more about that [here](p0-Incident-Response.md)).

3. **A CSE decides which conversation needs attention next.** As a general rule, we help in the order the request was received and aim to not have anyone waiting more than a couple of hours for a meaningful first response. In situations where we have too much work to honor this, we identify what needs to be handled next by following the "making hard decisions" list in [our prioritization guidance](support-prioritization.md). Virginia is accountable for triaging the queue, and everyone on the team is welcome to do triage when they are ready to take a ticket by following the steps outlined [here](customer-support-triaging.md).

4. **A CSE takes accountability for a conversation in Zendesk.** From that moment, the CSE is accountable for making sure the issue is resolved. How many open, active issues a CSE can handle simultaneously depends. The team will always have to work together to make sure everyone has the time and space they need to solve issues effectively. If any of us feel overwhelmed, we talk about it together and figure out a solution so that workloads are balanced and allow us to do our best work.

5. **The CSE pauses to build context.** This is the most counterintuitive, unique step in our workflow. It is also the step that does the most to ensuring the kind of customer experience we want to provide. You can get full context for the customer by:

   1. Determining what kind of customer it is by reviewing our [support plans](https://about.sourcegraph.com/support/) and seeing this mapped to the Salesforce app in Zendesk
   2. Seeing if you can find them in the #stripe-alerts channel in Slack (these would be self-service customers who do not have a CE assigned)
   3. Reviewing the deployment and/or account info docs found in the [customer notes folder](https://drive.google.com/drive/u/0/folders/1gjXWQ1l0Fnt2pVS2ohx3w0cw-gaJ_Ez0) -- these are available for most customers paying at least 50k in annually recurring revenue (ARR) and are created/maintained by the CE
   4. Talking with the CE who is assigned (listed in the Salesforce app in Zendesk), if one is assigned
   5. Looking at the customer health and customer engagement ratings (the Salesforce app in Zendesk)
   6. Looking at the other Salesforce data surfaced in Zendesk and even looking in Salesforce if you feel compelled
   7. Looking for special notes about the customer in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit)
   8. Relevant Looker dashboards (for example [the distribution board](https://sourcegraph.looker.com/dashboards-next/163))
   9. Looking at other recent cases. A good starting point is the [database of resolved tickets](https://github.com/sourcegraph/support-tools-internal/tree/main/resolved-tickets).
   10. To find which Sourcegraph version a company is running, visit the [instances Looker dashboard](https://sourcegraph.looker.com/looks/436), find the row for the customer's instance, and look at the version number in the row's **Latest Version** column. Some customer instances are offline or only [provide critical telemtry](https://docs.sourcegraph.com/admin/pings#critical-telemetry). The [full list is in Google Drive](https://docs.google.com/document/d/18q-xbHl53hg_y_0xX-buZpD04vMv3vJrqiXd9IeeE64/edit). If you don't see a customer in the Looker dashboard or the Google list, ask in #analytics on Slack.
   11. Depending on where the case originated, we may need to check with our internal teammates to ensure we have full context. For example, again, a quick check with the CE might yield invaluable information. If the issue is from marketing, we should see if they have any considerations for our response.

   Spend 10-15 minutes just orienting to that customer before even looking at the details of the issue.

6. **The CSE does two extra things ASAP if the ticket originated from Slack.** Our trial- and support- channels are where our enterprise customers can work with anyone at Sourcegraph. This means not everything that comes into Zendesk via this medium will be for us (we use a Zapier integration that creates a new Zendesk ticket for each new post in a channel) -- you can see more details about our triage process [here](./customer-support-triaging.md).

   1. **Signal accountability.** Comment in the thread from the customer in Slack with something along the lines of: "I'll help you with this. I need a few minutes to dig in and then I'll share my thoughts with you/see what questions I have." -- to signal your accountability to the CE and let the customer know we are on it. The goal is for this to be super quick and then you move on to the real initial response after you have had more time to dig in.
   2. **Taking accountability for more than one issue at a time.** If you see a customer has posted a few questions at once, go ahead and take accountability for them all. Often when customers do this the issues end up being related and it will be a better experience for everyone involved if the same person handles them all. This may require you to get help on other tickets and that is okay! Just let the team know and we will figure it out.

7. **The CSE responds within our internal 1-hour SLA response time**. The goal of our first responses is to be helpful, show progress, and not ever have anyone wondering what's next. As such, our first response is always informed by 1) considering full context for the customer, the issue, and the situation (we did most of this in step 5) and 2) first trying to solve the issue. Sometimes we may need to ask clarifying questions and that's okay! Just be sure to share context with the customer so they understand why we need the information we ask for. It may be that as 1-hour nears, you need more time. That's okay! Post an update and keep working on it. Also, remember that Zendesk responses default to internal/private notes. If you are working a ticket that originated via email, be sure to toggle to public reply when you are ready to get your response to the person who needs help. Again, for conversations that originate from Slack, this comes after signaling responsibility with that quick note!

8. **The CSE ensures the issue is resolved.** This step is the biggest step. It could mean identifying and filing a defect. It could mean helping the customer figure out what they need to do. It could mean refocusing our efforts to not settle for symptom-focused solutions, but pushing ourselves and our engineering teammates to find the root cause (read [an open letter about root cause](root-cause.md) for inspiration). If we get stuck, that's okay! It will happen. A lot. Here are the steps we take when we are stuck:

   1. Ask our teammates in our #customer-support-internal Slack channel.
   2. If we collectively don't know the answer, then we engage engineering following the steps outlined [here](engaging-other-teams.md).

For features tagged beta or experimental in our docs, it’s okay to err on the side of engaging engineering sooner rather than later (since we don't yet know if we will want to release these, we keep our docs light in case we opt to remove the feature after all).

9. **The CSE resolves the issue.** We don't consider something resolved unless the customer does/would. Resolution happens in a few ways. Only when one of these is true do we designate a case "closed" in Zendesk -- and if we were working in Slack, we leave that channel.

   1. We help the customer figure out what they need to do and they confirm they have done it and agree the issue is resolved `AND` we complete any internal tasks born from working on the ticket (like updating documentation or filing a GitHub issue for a docs update).
   2. We identify a workaround to get the customer on their way `AND` we file a defect or product improvement (in the public GitHub tracker) to address the underlying root cause (read [an open letter about root cause](root-cause.md) for inspiration) and share the link with the customer.
   3. We help the customer figure out what they need to do and they stop responding. After a couple of attempts, if we are confident the issue would be solved, `AND` we complete any internal tasks born from working on the ticket (like updating documentation), we go ahead and consider it resolved. Often in these situations we give the CE a heads-up of our decision.
   4. We identify a defect, engineering fixes it, the customer confirms the issue is resolved `OR` we share the public defect link with the customer (always do this when possible instead of keeping the case open) `AND` we complete any internal tasks born from working on the ticket (like updating documentation). Until then, we consider the case open and while engineering prioritizes the defect for a fix, we place the case "on-hold" in Zendesk.
   5. We confirm the "issue" is a feature request and tag in the CE to handle the request if there is a CE assigned to the customer `OR` file it in the public repo (for customers without a CE assigned) and share the link with the customer `AND` we complete any internal tasks born from working on the ticket (like updating documentation).
   6. If we are still working on finding the answer and the customer stops responding, we email a couple more times to see if they had a chance to look at our last response. If they still don't respond, and they have a CE, talk with them to see if they have another way to get in touch and see what's going on. If not, or if the customer does not have a CE, `AND` we complete any internal tasks born from working on the ticket (like updating documentation), then it's okay to close the ticket at this point.

10. **While we work, we keep Zendesk, Slack, and/or Salesforce up-to-date.** If a ticket originates in Slack, you'll still need to keep Zendesk up to date. Switch the requestor to the person asking for help in Slack so that the issue ties to the right customer. Use the internal notes function in Zendesk to leave notes for yourself to track your progress and decisions (these will also appear in Salesforce for others to see). A summary of what happened should be obvious in Zendesk even if all the work happened in Slack. Also, we will often learn details about a customer's environment, etc that we should keep in Salesforce. We update and enter new such data in Salesforce as we learn it via a Google Form as outlined [here](../bizops/customer_environment_questions.md) and/or the account info doc in [the customer notes folder](https://drive.google.com/drive/u/0/folders/1gjXWQ1l0Fnt2pVS2ohx3w0cw-gaJ_Ez0), if one exists (be sure to talk to the CE as part of updating it, in the event that what you are updating ends up being invaluable information to them for what else may be happening with the account). This data is then rendered in Zendesk so we don't have to ask the customer for it again. Zendesk also always reflects where we are at in our process by using the status function:

    1. New = a CSE has yet to taken accountability
    2. Open = a CSE is accountable for the next step
    3. Pending = the customer is accountable for the next step
    4. On-hold = it's a defect and we are waiting for engineering to fix it
    5. Solved = the issue is resolved as described above
    6. Closed = the final state (solved tickets move to this status automatically after 16 business hours)

11. **We validate how we did, accept feedback with grace, learn, and grow.** Once we mark a case as solved, we also indicate whether we received positive indications from the customer they are happy with our work. If along the way, we receive any feedback from the customer or internal teammate, we celebrate positive feedback and we follow-up on constructive feedback, inviting the customer and/or internal teammate to offer any advice they have for us.

## All the details about all the methods via which our customers can ask for help

As explained above, our customers are able to initiate conversations for help via several methods.

### OpsGenie paging

- **Purpose:** Monitoring alerts trigger a page to make sure we know immediately about all outages (`about`, /`search` on sourcegraph.com, or `docs` is fully unreachable).
- **Those involved:** Software engineers > support
- **Details:** Initial pages trigger for the software engineer who is on-call. If it’s a system outage (about, /search, or docs is fully unreachable), the software developer pages support as outlined in our [on-call practice](../engineering/incidents/on_call.md). Support will help troubleshoot (gathering information from any customers who report the issue) and handle internal (alerting stakeholders)/external (direct and status page posting) communications as outlined in our [p0 incident response](p0-Incident-Response.md).

### Customer Slack channels #trial-[customer] and #support-[customer]

- **Purpose:** Provided to enterprise customers during trial (pre-sales) and converted to a support channel (post-sales) for ongoing communications via an easy, familiar method
- **Those involved:** AE + CE + support > (Engineering) + Product
- **Details:** Channels must be named with trial- or support- somewhere in the title to link to Zendesk. In some cases where the customer creates the channel in their Slack account, we need IT Tech Ops to set-up a special Zap. If a channel cannot be linked via automation, it is noted in our [Customer Exception list](customer-exceptions.md) and is manually triaged. Every new post in these channels automatically create a record in Zendesk via a Zapier integration (it does not create new tickets for every new comment in a thread). While that creates some noise, it also ensures nothing falls through the cracks and we are able to capture all conversations that happen and gather the associated data and insights -- plus, it’s easier to merge/delete in Zendesk than remember to manually send a Slack post to Zendesk. Our CEs are ultimately responsible for these channels and there is huge value-add for them to engage with customers here frequently. There is equal value in addressing customer questions/issues with reasonable responsiveness, and support is in a better position to do so. The special steps associated with these channels are outlined above.

### #help channel in Community Slack account

- **Purpose:** Provided as an avenue for our community members (champions, open source, SaaS offering users) to get help.
- **Those involved:** Support, product, marketing (especially our community team)
- **Details:** This is the one channel in our Community Slack account that is linked to Zendesk to create a ticket for each post. Support's role is to make sure no post gets left behind. Others at Sourcegraph may jump in and help, and that is great! We just want to make sure everyone gets the help they need.

### Internal Slack channel #customer-support

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
- **Details:** Sometimes this feedback becomes support-ish in nature. When this happens, product engages support via [their process outlined here](../product/product_management/responding_to_user_feedback.md#nps-feedback) and support handles it via our outlined workflow steps.

### support@ email

- **Purpose:** Official support email address for customers and that anyone internally can copy in if they are emailing with a customer and a support issue/question comes up.
- **Those involved:** Support > CE, product, etc
- **Details:** These emails feed into Zendesk and are triaged and handled by support. If anything is more relevant for a CE, product, etc, then support will alert that team/person in the most appropriate Slack channel to coordinate. Similarly, if anyone defers to support using this email, they are also welcome to create such a thread with more context in the Slack #customer-support channel.

### feedback@ email

- **Purpose:** An email that is sometimes included in forms we send customers (for example, our NPS forms). It may not be used frequently, but when it is used, we want to be sure nothing falls through the cracks.
- **Those involved:** Product > support (if necessary)
- **Details:** Sometimes this feedback becomes support-ish in nature. When this happens, product engages support via [their process outlined here](../product/product_management/responding_to_user_feedback.md#nps-feedback) and support handles it via our outlined workflow steps.

### Support contracts

- **Purpose:** Agreed upon contracts to provide with dedicated support.
- **Those involved:** CE/support/engineering
- **Details:** You can see which customers have such contracts in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit).

### External (customer) Slack accounts

- **Purpose:** We have a couple customers who were not able to join our Slack account, so we agreed to join theirs. Generally, we don't want to do this because it's very hard to scale, have coverage when folks are not working, etc.
- **Those involved:** CE > support
- **Details:** CEs check with support before agreeing to this. For these customers, we assign two CSEs to be in the customer's Slack account so we have optimal coverage. Support manually creates Zendesk tickets to track this work. ou can see which customers have such set-up in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit).

### [GitHub public issue tracker](https://github.com/sourcegraph/sourcegraph/issues)

- **Purpose:** Our non-paying and open source customers can seek help via this tracker, though sometimes our team and enterprise customers opt to use it, too.
- **Those involved:** Product > support (if necessary)
- **Workflow:** Sometimes this feedback becomes support-ish in nature. When this happens, product engages support via [their process outlined here](../product/product_management/responding_to_user_feedback.md#nps-feedback) and support handles it via our outlined workflow steps. Additionally, the relevant templates instruct customers to email support@sourcegraph.com if they require immediate help.

### @sourcegraph Twitter (and other social)

- **Purpose:** Our Twitter account, mostly for marketing, though sometimes users alert us of support issues here.
- **Those involved:** Marketing > support
- **Details:** Marketing forwards into Zendesk anything they need us to handle. We coordinate with them (as needed) in Slack to agree on how we respond, which account, etc.

### Slack developer communities

- **Purpose:** Developer relations
- **Those involved:** Marketing > Support
- **Details:** Support team members join via personal email addresses. Marketing monitors posts a link to anything they need us to handle in the #customer-support Slack channel. Support will also create a ticket in Zendesk to track these so we get a better understanding of volume over time. Currently we join the following:
  - Gophers
