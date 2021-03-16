# Support Tools

When you first start in support, the list of tools to set-up can feel like a lot. This document explains how they add value for you, (when relevant) how they fit together, and a deep dive on Zendesk.

## Internal collaboration
* Slack is our primary communication tool.
* Github is where our handbook lives.
* Zoom is how we connect synchronously. 
* Gmail is mostly for notifications.
* Google calendar is for your calendar, as well as shared calendars (like the CS team calendar).
* Gsuite is for drafts, slide decks, and spreadsheets.
* Lattice is to facilitate our for our twice yearly [review cycles](https://about.sourcegraph.com/handbook/people-ops/review-cycles).
* Lever is for hiring.
* Grammarly and Hemingwayapp help us say what we intend.
* Otter.ai makes it easier for everyone to follow along during Zoom calls.

## All things customers
* Zendesk is where we manage our day-to-day work and interact with some customers.
* Slack is where we interact with most customers.
* Salesforce is our source of truth for customer data.
* Looker is our data warehouse so we can connect different data sources and analyze anything we need to.
* ProductBoard is where collect all feedback about the product.
* Calendly is useful when you need to schedule a call with a customer.
* Krisp quiets background noise when on Zoom.
* Grammarly and Hemingwayapp help us say what we intend and catch any typos we don't see.

## Troubleshooting
A placeholder to be populated over time as the team onboards and ramps-up


## Zendesk
This section captures our Zendesk protocol and configuration decisions. 

### Access
* CSEs have agent access
* Virginia and Tech Ops have admin access
* The rest of the company will have visibility in a few ways (all of these items will be configured in 2021-03):
	* All new Zendesk tickets are linked to the #customer-support-issues-feed Slack channel
	* All Zendesk tickets (and the entire comment history) manifest in Salesforce on the customer's record (this needs to be implemented)
	* When we create a Github issue from Zendesk, that also pulls in the conversation history in Github for engineering to see

### Web vs desktop vs mobile app	
The best way to use Zendesk as an agent is via the web app. The mobile app is nice, but installing such apps on your phone can make it harder to take a break from work. Really consider this before you download the app to your phone. The desktop app is very limited and best to not even bother with.

### When to be logged in and monitoring the queue
Our job requires that at least one of us is actively paying attention to what's coming into Zendesk between 9am-5pm pacific Monday - Friday. The only time the team expects you to not be logged in during your working hours is during your focus blocks as listed in our [schedule](https://about.sourcegraph.com/handbook/ce/support-schedule). Otherwise, if you need to focus, just let the team know in our #customer-support-chat Slack channel so we can coordinate and make sure to have you covered!

### Notifications
Set your notifications however you see fit to make sure you are able to help monitor the queue. 

### Views
When you log into Zendesk, all tickets are organized by the following views:

* **Unassigned tickets.** All new tickets that no one on the team has taken accountability for yet
* **Your unsolved tickets.** All of your tickets that you are actively working on.
* **All unsolved tickets.** All tickets from across the entire team that everyone is actively working on.
* **Recently solved tickets.** All tickets that have been moved to solved status (tickets only stay in this status for 16 business hours and then they move to closed). When in a solved state, if customers reply this ticket re-opens. If in a closed state and the customer replies, a new ticket is created.
* **Rated tickets from the last 7 days.** All tickets from the last 7 days where a customer has taken time to tell us how we did.
* **All on-hold tickets.** All tickets from across the entire team that are on-hold waiting for a bug fix.
* **All closed tickets.** All tickets from across the entire team that are closed.
* **Suspended tickets.** Anything Zendesk deems is spam.
* **Deleted tickets.** Any deleted tickets.

There are also views for suspended (spam) and deleted tickets. We occasionally check these and never permanently delete anything without a double check with the team just to be sure.

### Ticket data fields
When you close a ticket, these are the required fields you must populate:

* **Lifecycle:** Designates whether the request is associated with a customer when they are in the pre-sales or post-sales part of their lifecycle with us
* **Official type:** Designates whether this is a question, defect report, or help request
* **Official priority:** Designates whether the priority is p0, p1, or p2 per our definitions outlined in our [prioritization guidelines](https://about.sourcegraph.com/handbook/ce/support-prioritization). 
* **Engineering team:** Designates which engineering team is responsible for the part of the product or feature associated with the ticket (think, if I got help/needed help which engineering team did I go to/would have gone to?)

### Why there are duplicate ticket data fields
In addition to the required fields noted above, we also have these fields that seem duplicative...

* **Type:** This is the out of the box option that lists different option and we only use so something shows up for our customer who want to login into Zendesk to see their entire case history
* **Priority:** This is the out of the box option that we use to set the SLA counter. It is always normal and always triggers an 8 business hour count.

### Timezone
Zendesk is set to pacific timezone to align with our states SLAs.

### Schedule and SLAs
The schedule in Zendesk reflects our SLA hours and is set to 9-5 pacific, Monday - Friday. This allows us to use the SLA timer to reflect how much time we have before we hit our SLA (if relevant for that customer). The SLA clock is 8 business hours and therefore adds time if a case comes in after hours, on the weekend, or on a holiday. Currently we mark the following as holidays in Zendesk:

* December 24-25 for Christmas
* January 1 for New Year

Since we are global team, we do not add every holiday that everyone celebrates. We only add the holidays where the majority/all of the team is unavailable.

The SLA timer reflects our most aggressive SLA and for many customers, we have more time to respond and invoke this latitude as necessary as outlined in our [prioritization guidelines](https://about.sourcegraph.com/handbook/ce/support-prioritization). 

### Default to private/internal notes
We have Zendesk set to default to private/internal notes. Since much of our work happens in Slack and we only use internal notes, this ensures we are not sending out-of-context emails by forgetting to change the toggle.

### Automations
We have a few automations set-up to streamline our workflow:

* When you reply to a ticket, it auto-assigns to you, so you don't have to worry about remembering to click "take it" to assign it to yourself
* The signature is built-in and is your name followed by Sourcegraph Support in the second line
* 1 hour after you set a case to closed, an automated email is sent to the requestor asking to rate their experience

### Apps
We use the following apps to streamline our workflow:

* **Notes** allows us to reflect whatever is in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit) in the right panel, as well as anything about this customer's environment that is useful for troubleshooting
* **CC Quest** allows us to swap the requester for anyone in CC, which is especially relevant when a CE or SDR copies in support@ and we want to replace their names as the requestor with that of the customer


### The customer experience
* When a customer emails support@ they receive an automated email that says: This is an automated email to let you know that the email you just sent to support@sourcegraph.com has been received and if you need it, the ID number is ({{ticket.id}}). We do not count this as our first response (we only send this so you can have peace of mind that your email arrived to us). For our first reply, we aim to be truly helpful, where we have already spent time digging in. This usually happens in a couple of hours. You can read more about how we approach helping you [here](https://about.sourcegraph.com/handbook/ce/support). If you think of anything else while you wait for us to get back to you with a thoughtful and useful first response, just reply to this email." *Note: this email does not go to folks initiating help requests in our #support- and #trial- Slack channels.*
* Once we (and the customer) deem the case solved, we mark the case solved. After an hour of doing so, Zendesk automatically emails a request for feedback on whether the support experience was good or bad. *Note: this email does not go to folks initiating help requests in our #support- and #trial- Slack channels.*

### https://sourcegraph.zendesk.com/
This page is only open for customers who want to login into Zendesk to see all support requests for their organization. 

* When folks try to access this page and have not been granted access as outlined in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit), they see this message: "This page is for Sourcegraph customers who would like to view all support requests in one place. The page will not function without a little configuration first. Email support@sourcegraph.com to get set-up."
* When folks have permission to login as noted in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit), they see this message: "To view all support requests from your organization in one place, select "my activities" from the menu under your profile avatar."

### Guide customizations
We do not use guide for our documentation, but must have it activated so customers can login into Zendesk as noted in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit). In order to provide an optimal experience, we have made the following customizations:

* Removed search bar
* Modified text on home page
* Modified error messages
* Added type to the my activity table