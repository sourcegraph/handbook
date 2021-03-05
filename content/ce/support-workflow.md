# Support Workflow

## From noticing an issue ... through resolution

Things happen pretty much in this order...and at every step, our decisions and actions are informed by [our ethos](https://about.sourcegraph.com/handbook/ce/support#our-ethos). 

1. **Someone notices something in our product not working correctly or needs help getting our product working.** This could be a customer, an open source users, or anyone at Sourcegraph. 

2. **Someone engages the support team for help.** Our customers are able to initiate conversations for help via several methods (Slack channels, support@ email, Twitter, etc -- [more details below](https://about.sourcegraph.com/handbook/ce/support-workflow#all-the-details-about-all-the-methods-via-which-our-customers-can-ask-for-help)). Allowing customers to initiate conversations via several methods increases the likelihood that we become aware of issues, feedback, etc as quickly as possible and can get our customers the help they need. In order to scale this, we use Zendesk. Zendesk simplifies what would otherwise feel complex through out-of-the-box configuration and integrations, allowing us to have almost everything in one place for easy prioritization and powerful data tracking. We get the benefit of everything coming to one place and customers have the lowest barrier possible to interact with us. Our teammates will almost always reach out to us over Slack. The primary exception is when there is an outage (`about`, /`search` on sourcegraph.com, or `docs` is fully unreachable) and engineering pages us via OpsGenie - you can read more about that [here](p0-Incident-Response.md)).

3. **A CSE decides which conversation needs attention next.**  As a general rule, we help in the order the request was received and aim to not have anyone waiting more than a couple of hours for a meaningful first response. In situations where we have too much work to honor this, we identify what needs to be handled next by following the "making hard decisions" list in [our prioritization guidance](https://about.sourcegraph.com/handbook/ce/support-prioritization).

4. **A CSE takes ownership of a conversation in Zendesk.** From that moment, the CSE owns making sure the issue is resolved. How many open, active issues a CSE can handle simultaneously depends. The team will always have to work together to make sure everyone has the time and space they need to solve issues effectively. If any of us feel overwhelmed, we talk about it together and figure out a solution so that workloads are balanced and allow us to do our best work. And we have a few extra steps for when the issue originates in Slack:
	1. **Triage.** Our trial- and support- channels are where our enterprise customers can work with anyone at Sourcegraph. This means not everything that comes into Zendesk via this medium will be for us (we use a Zapier integration that creates a new Zendesk ticket for each new post in a channel). Virginia is primarily responsible for triaging our unassigned queue. The general guideline is: If something is broken, hop in and help; if it's a question about how something works or anything else, best to leave it for the CE. If you see something that is not for us, follow the appropriate steps outlined below. 
	2. **Signaling ownership.** Depending on our triage, you will take ownership by doing one of the following in Slack and Zendesk:
		1. **Taking ownership of things that originate from trial- channels.** Always pause to confirm with a CE first if it's best for you to help or not. These are pre-sales situations and require a bit more upfront collaboration. Create a post in our #customer-support channel and @ the CE to confirm. If they agree, comment in the thread with something like "I'll help you with this." Even while waiting for the CE to respond, put the Zendesk ticket in your name. 
		2. **Taking ownership of things that originate from support- channels.** Comment in the thread in Slack with "I'll help you with this. @[CE] let me know if you have any thoughts." This will signal ownership to the CE and let the customer know we are on it. Also put the Zendesk ticket in your name. 
		3. **Taking ownership of more than one issue at a time.** If you see a customer has posted a few questions at once, go ahead and take ownership of them all. Often when customers do this the issues end up being related and it will be a better experience for everyone involved if the same person handles them all. This may require you to get help on other tickets and that is okay! Just let the team know and we will figure it out.
		4. **Identifying we are not the best owners.** If something comes in from Slack that seems like it's better for a CE to handle, take a minute to let the CE assigned to that customer know by @ mentioning them in a post in our #customer-support channel. This will make it easier for them to know that we've already decided we aren't the best to handle it and give our teammates an opportunity to let us know if they would find more value in us going ahead and jumping in. Be sure to put this Zendesk ticket in your name, too and do the tracking outlined below.

5. **The CSE responds within our SLA response time as stated [here](https://about.sourcegraph.com/handbook/ce/support#our-service-level-agreements-slas)**. The goal of our first responses is to be helpful, show progress, and not ever have anyone wondering what's next. As such, our first response is always informed by 1) considering full context for the customer, the issue, and the situation and 2) first trying to solve the issue. You can get full context for the customer by: 
	1. Determine what kind of customer it is by reviewing our [support plans](https://about.sourcegraph.com/support/) and seeing status in Salesforce (in the future, this will render in Zendesk)
	2. Talking with the CE who is assigned (listed in Salesforce on the customer account record), if one is assigned
	2. Looking at the Salesforce data surfaced in Zendesk (this is coming soon -- so for now it's just looking in Salesforce)
	3. The special notes in Zendesk (which should always match what we have in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit)
	4. Relevant Looker dashboards (for example [the distribution board](https://sourcegraph.looker.com/dashboards-next/163))
	5. Looking at other recent cases 
	6. To find which Sourcegraph version a company is running, visit the [instances Looker dashboard](https://sourcegraph.looker.com/looks/436), find the row for the customer's instance, and look at the version number in the row's **Latest Version** column. Some customer instances are offline or only [provide critical telemtry](https://docs.sourcegraph.com/admin/pings#critical-telemetry). The [full list is in Google Drive](https://docs.google.com/document/d/18q-xbHl53hg_y_0xX-buZpD04vMv3vJrqiXd9IeeE64/edit). If you don't see a customer in the Looker dashboard or the Google list, ask in #analytics on Slack. 
	7. Depending on where the case originated, we may need to check with our internal teammates to ensure we have full context. For example, again, a quick check with the CE might yield invaluable information.
	8. If the issue is from marketing, we should see if they have any considerations for our response.
	
	Spend 10-15 minutes just orienting to that customer before even looking at the details of the issue. It can take time to write such a first response and our SLA grants that. Sometimes we may need to ask clarifying questions and that's okay! Just be sure to share context with the customer so they understand why we need the information we ask for. **For issues that originate in any #trial- Slack channels,** always coordinate with the CE before responding - since these customers are in our pre-sales process, everything can matter just a little bit more.

6. **The CSE ensures the issue is resolved.** This step is the biggest step. It could mean identifying and filing a defect. It could mean helping the customer figure out what they need to do. If we get stuck, that's okay! It will happen. A lot. Here are the steps we take when we are stuck:
	1.  Ask our teammates in our #customer-support-chat Slack channel. 
	2. If we collectively don't know the answer, then we seek help from our CE teammates by posting in our #customer-support Slack channel and @ mentioning @CE. *Note: we do this through 2021-03 as part of onboarding* 
	3. If we are still stuck, we engage engineering following the steps outlined [here](https://about.sourcegraph.com/handbook/ce/engaging-other-teams).  
	
7. **The CSE resolves the issue.** We don't consider something resolved unless the customer does/would. Resolution happens in a few ways. Only when one of these is true do we designate a case "closed" in Zendesk -- and if we were working in Slack, we leave that channel****.	
	1. We help the customer figure out what they need to do and they confirm they have done it and agree the issue is resolved. 
	2. We help the customer figure out what they need to do and they stop responding. After a couple of attempts, if we are confident the issue would be solved, we go ahead and consider it resolved. Often in these situations we give the CE a heads-up to see if they can get confirmation from the customer.
	3. We identify a defect, engineering fixes it, and the customer confirms the issue is resolved. Until then, we consider the case open and while engineering prioritizes the defect for a fix, we place the case "on-hold" in Zendesk. 
	4. We confirm the "issue" is a feature request and file or verify the request has been filed for our product team. *Note: We have a bit to figure out still about this particular workflow.*
	5. We update any documentation that needs to be updated as a result of what we learned along the way.
	6. If we are still working on finding the answer and the customer stops responding, we email a couple more times to see if they had a chance to look at our last response. If they still don't respond, and they have a CE, talk with them to see if they have another way to get in touch and see what's going on. If the customer does not have a CE, then it's okay to close the ticket at this point.

8. **While we work, we keep Zendesk and Salesforce up-to-date.** If a ticket originates in Slack, you'll still need to keep Zendesk up to date. Switch the requestor to the person asking for help in Slack so that the issue ties to the right customer. Use the internal notes function in Zendesk to leave notes for yourself to track your progress and decisions (these will also appear in Salesforce for others to see). A summary of what happened should be obvious in Zendesk even if all the work happened in Slack. Also, we will often learn details about a customer's environment, etc that we should keep in Salesforce. We update and enter new such data in Salesforce as we learn it. *Note: There will be more details about this soon; we have a bit figure out still for how this will work, what data we need.* This data is then rendered in Zendesk so we don't have to ask the customer for it again. Zendesk also always reflects where we are at in our process by using the status function:
	1. New = a CSE has yet to take ownership
	2. Open = a CSE owns the next step
	3. Pending = the customer owns the next step
	4. On-hold = it's a defect and we are waiting for engineering to fix it
	5. Solved = the issue is resolved as described above
	6. Closed = the final state (solved tickets move to this status automatically after 16 business hours)

9. **We validate how we did, accept feedback with grace, learn, and grow.** Once a case moves from solved to closed, Zendesk sends an email asking the customer how we did. We celebrate positive feedback and we follow-up on constructive feedback, inviting the customer to offer any advice they have for us. *Note: More coming soon on the follow-up practice and how to handle this for tickets that originate in Slack since it's not yet clear how this feature works with that integration.* 

## All the details about all the methods via which our customers can ask for help

As explained above, our customers are able to initiate conversations for help via several methods.

### OpsGenie paging
* **Purpose:** Monitoring alerts trigger a page to make sure we know immediately about all outages (`about`, /`search` on sourcegraph.com, or `docs` is fully unreachable).
* **Those involved:** Software engineers > support
* **Details:** Initial pages trigger for the software engineer who is on-call. If it’s a system outage (about, /search, or docs is fully unreachable), the software developer pages support as outlined in our [on-call practice](https://about.sourcegraph.com/handbook/engineering/incidents/on_call). Support will help troubleshoot (gathering information from any customers who report the issue) and handle internal (alerting stakeholders)/external (direct and status page posting) communications as outlined in our [p0 incident response](p0-Incident-Response.md).

### Customer Slack channels #trial-[customer] and #support-[customer]
* **Purpose:** Provided to enterprise customers during trial (pre-sales) and converted to a support channel (post-sales) for ongoing communications via an easy, familiar method
* **Those involved:** AE + CE + support > (Engineering) + Product
* **Details:** Every new post in these channels automatically create a record in Zendesk via a Zapier integration (it does not create new tickets for every new comment in a thread). While that creates some noise, it also ensures nothing falls through the cracks and we are able to capture all conversations that happen and gather the associated data and insights -- plus, it’s easier to merge/delete in Zendesk than remember to manually send a Slack post to Zendesk. Our CEs are ultimately responsible for these channels and there is huge value-add for them to engage with customers here frequently. There is equal value in addressing customer questions/issues with reasonable responsiveness, and support is in a better position to do so. The special steps associated with these channels are outlined above. 

### Internal Slack channel #customer-support
* **Purpose:** Where the customer support team communicates with folks outside the team and vice versa. Always okay to ask questions here, collaborate on a customer issue, etc
* **Those involved:** Support + anyone who has questions, needs to collaborate
* **Details:** This is a primary collaboration space for us to work with folks across the company and them to work with us.

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


