# Support Workflow

## From noticing an issue ... through resolution

Things happen pretty much in this order...and at every step, our decisions and actions are informed by [our ethos](https://about.sourcegraph.com/handbook/ce/support#our-ethos). 

1. **Someone notices something in our product not working correctly or needs help getting our product working.** This could be a customer, an open source users, or anyone at Sourcegraph. 

2. **Someone engages the support team for help.** Our customers are able to initiate conversations for help via several methods (Slack channels, support@ email, Twitter, etc -- more details below). Allowing customers to initiate conversations via several methods increases the likelihood that we become aware of issues, feedback, etc as quickly as possible and can get our customers the help they need. In order to scale this, we use Zendesk. Zendesk simplifies what would otherwise feel complex through out-of-the-box configuration and integrations, allowing us to have almost everything in one place for easy prioritization and powerful data tracking. We get the benefit of everything coming to one place and customers have the lowest barrier possible to interact with us. Our teammates will almost always reach out to us over Slack. The primary exception is when there is an outage (`about`, /`search`, or `docs` is fully unreachable) and engineering pages us via OpsGenie - you can read more about that [here](p0-Incident-Response.md)).

3. **A CSE takes ownership of a conversation in Zendesk.** From that moment, that CSE owns making sure the issue is resolved. How many open, active issues a CSE can handle simultaneously depends. The team will always have to work together to make sure everyone has the time and space they need to solve issues effectively. If any of us feel overwhelmed, we talk about it together and figure out a solution so that workloads are balanced and allow us to do our best work. While we work, we communicate where the customer is. For example, while we might be notified in Zendesk of a new issue, but if the source is Slack, we will work in Slack. *Note: More details on this soon as we configure Zendesk and learn how all of the integrations work.* 

4. **The CSE responds within our SLA response time as stated [here](https://about.sourcegraph.com/handbook/ce/support#our-service-level-agreements-slas)**. Our first response is always informed by 1) considering full context for the customer, the issue, and the situation and 2) first trying to solve the issue. You can get full context for the customer by looking at the Salesforce data surfaced in Zendesk, special note in Zendesk (which should always match what we have in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit), relevant Looker dashboards (for example [the distribution board](https://sourcegraph.looker.com/dashboards-next/163)), by chatting with the CE, looking at other recent cases, etc. The goal of our first responses is to be helpful, show progress, and not ever have anyone wondering what's next. Depending on where the case originated, we may need to check with our internal teammates to ensure we have full context. For example, again, a quick check with the CE might yield invaluable information. Or, if the issue is from marketing, we should see if they have any considerations for our response. It can take time to write such a first response and our SLA grants that. Sometimes we may need to ask clarifying questions and that's okay! Just be sure to share context with the customer so they understand why we need the information we ask for. **For issues that originate in any #trial- Slack channels,** always coordinate with the CE before responding - since these customers are in our pre-sales process, everything can matter just a little bit more.

5. **The CSE ensures the issue is resolved.** This step is the biggest step. It could mean identifying and filing a defect. It could mean helping the customer figure out what they need to do. If we get stuck, that's okay! It will happen. A lot. Our first step when we are stuck is to ask our teammates in our #customer-support-chat Slack channel. If we collectively don't know the answer, then we seek help from engineering following the steps outlined [here](https://about.sourcegraph.com/handbook/ce/routing_questions). *Note: through 2021-03, before going to engineering, we first ask our CE teammates for help in the #ce-team-chat Slack channel.* We don't consider something resolved unless the customer does/would. Resolution happens in a few ways. Only when one of these is true do we designate a case "closed" in Zendesk.
	7. We help the customer figure out what they need to do and they confirm they have done it and agree the issue is resolved. 
	8. We help the customer figure out what they need to do and they stop responding. After a couple of attempts, if we are confident the issue would be solved, we go ahead and consider it resolved. Often in these situations we give the CE a heads-up to see if they can get confirmation from the customer.
	9. We identify a defect, engineering fixes it, and the customer confirms the issue is resolved. Until then, we consider the case open and while engineering prioritizes the defect for a fix, we place the case "on-hold" in Zendesk. 
	10. We confirm the "issue" is a feature request and file or verify the request has been filed for our product team. *Note: We have a bit to figure out still about this particular workflow.*
	11. We update any documentation that needs to be updated as a result of what we learned along the way.

7. **While we work, we keep Zendesk and Salesforce up-to-date.** We will often learn details about a customer's environment, etc that we should keep in Salesforce. We update and enter new such data in Salesforce as we learn it. *Note: There will be more details about this soon; we have a bit figure out still for how this will work, what data we need.* This data is then rendered in Zendesk so we don't have to ask the customer for it again. Zendesk also always reflects where we are at in our process by using the status function:
	8. New = a CSE has yet to take ownership
	9. Open = a CSE owns the next step
	10. Pending = the customer owns the next step
	11. On-hold = it's a defect and we are waiting for engineering to fix it
	12. Closed = the issue is resolved as described above

9. **We validate how we did, accept feedback with grace, learn, and grow.** Once we set a case to closed status, we ask the customer how their experience was. *Note: More coming on this soon. The out-of-the-box Zendesk solution might not work for us since the majority of issues originate from Slack channels.* 

## All the details about all the methods via which our customers can ask for help

As explained above, our customers are able to initiate conversations for help via several methods.

### OpsGenie paging
* **Purpose:** Monitoring alerts trigger a page to make sure we know immediately about all outages (`about`, /`search`, or `docs` is fully unreachable).
* **Those involved:** Software engineers > support
* **Details:** Initial pages trigger for the software engineer who is on-call. If it’s a system outage (about, /search, or docs is fully unreachable), the software developer pages support as outlined in our [on-call practice](https://about.sourcegraph.com/handbook/engineering/incidents/on_call). Support will help troubleshoot (gathering information from any customers who report the issue) and handle internal (alerting stakeholders)/external (direct and status page posting) communications as outlined in our [p0 incident response](p0-Incident-Response.md).

### Customer Slack channels #trial-[customer] and #support-[customer]
* **Purpose:** Provided to enterprise customers during trial (pre-sales) and converted to a support channel (post-sales) for ongoing communications via an easy, familiar method
* **Those involved:** AE + CE + support > (Engineering) + Product
* **Details:** Every post in these channels automatically create a record in Zendesk via a Zapier integration. While that creates a need to merge records in Zendesk, it also ensures nothing falls through the cracks and we are able to capture all conversations that happen and gather the associated data and insights -- plus, it’s easier to merge/delete in Zendesk than remember to manually send a Slack post to Zendesk. Our CEs are ultimately responsible for these channels and there is huge value-add for them to engage with customers here frequently. There is equal value in addressing customer questions/issues with reasonable responsiveness, and support is in a better position to do so. AEs, CEs, and support use best judgement as they collaborate together to be responsive. AEs and CEs are always welcome to tag support via the @customer-support group mention, if they want to pull support into help. Support will also proactively jump in if they identify the post to be a product question or support issue and the CE is occupied. Support checks with the CE before posting and moves forward if they don’t get a response after a couple of hours (planning for if the CE is occupied in meetings back to back). When support does so, they @ mention the assigned CE to invite additional comment. For example, if a customer has a question about how something works, support can likely share that information faster if the AE and CE are in meetings all day. Support can keep the CE in position as a trusted partner by ending their answer with something like “@[CE] might have some additional thoughts to share, too.” The CE can then respond accordingly. If support needs engineering assistance, it's up to the engineer if they feel it makes sense to jump into the conversation, too. If so, that should happen directly in the channel. Otherwise, we expect software engineers to not be in these channels on an ongoing basis and we encourage them to leave after an issue is resolved.

### Internal Slack channel #customer-support
* **Purpose:** Where the customer support team communicates with folks outside the team and vice versa. Always okay to ask questions here, collaborate on a customer issue, etc
* **Those involved:** Support + anyone who has questions, needs to collaborate
* **Details:** Since this channel is used for a lot, the support team manually sends only relevant threads into Zendesk using the Slack/Zendesk integration.

### NPS responses
*Note: This will be outlined very soon*

* **Purpose:**
* **Those involved:**
* **Details:**

### support@ email
* **Purpose:** Official support email address for customers and that anyone internally can copy in if they are emailing with a customer and a support issue/question comes up.
* **Those involved:** Support > CE, product, etc
* **Details:** These emails feed into Zendesk and are triaged and handled by support. If anything is more relevant for a CE, product, etc, then support will alert that team/person in the most appropriate Slack channel to coordinate. Similarly, if anyone defers to support using this email, they are also welcome to create such a thread with more context in the Slack #customer-support channel.

### feedback@ email
* **Purpose:** An email that is sometimes included in forms we send customers (for example, our NPS forms). It may not be used frequently, but when it is used, we want to be sure nothing falls through the cracks.
* **Those involved:** same as support@ email
* **Details:** same as support@ email

### hi@ email
* **Purpose:** A general email that is mostly spam, but support triages to make sure nothing falls through the cracks
* **Those involved:** Support + others as needed
* **Details:** same as support@ email

### Support contracts
* **Purpose:** Agreed upon contracts to provide with dedicated support.
* **Those involved:** CE/support/engineering
* **Details:** *Note: We still need to figure out exactly how support will be involved.* You can see which customers have such contracts in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit).

### Customer-owned Slack accounts
* **Purpose:** We have a couple customers who were not able to join our Slack account, so we agreed to join theirs. Generally, we don't want to do this because it's very hard to scale, have coverage when folks are not working, etc.
* **Those involved:** CE > support
* **Details:** CEs check with support before agreeing to this. For these customers, we assign two CSEs to be in the customer's Slack account so we have optimal coverage. Support manually creates Zendesk tickets to track this work. ou can see which customers have such set-up in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit).

### [GitHub public issue tracker](https://github.com/sourcegraph/sourcegraph/issues)
* **Purpose:** Our non-paying and open source customers can seek help via this tracker, though sometimes our team and enterprise customers opt to use it, too.
* **Those involved:** Support + product, engineering
* **Workflow:** Using a Zapier integration, we have all new issues created in the GitHub public tracker trigger the creation of a ticket in Zendesk. These are routed to a triage queue and contain issues created by our engineering team. It’s never bad for support to see what issues our engineering team creates, so we can look at those and delete, but also make sure we don’t miss issues created by those who need help. Triaging happens on a weekly cadence since we don’t have an SLA for these issues, and also don’t want them to fall through the cracks. We route feature requests to product, bugs to engineering, and handle the rest.

### @srcgraph Twitter (and other social)
* **Purpose:** Our Twitter account, mostly for marketing, though sometimes users alert us of support issues here.
* **Those involved:** Marketing > support
* **Details:** Marketing forwards into Zendesk anything they need us to handle. We coordinate with them (as needed) in Slack to agree on how we respond, which account, etc.

### Slack developer communities
* **Purpose:** Developer relations
* **Those involved:** Marketing > Support
* **Details:** Support team members join via personal email addresses. Marketing monitors posts a link to anything they need us to handle in the #customer-support Slack channel. Support will also create a ticket in Zendesk to track these so we get a better understanding of volume over time. Currently we join the following:
	* Gophers


