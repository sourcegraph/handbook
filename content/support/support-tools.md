# Support Tools

When you first start in support, the list of tools to set-up can feel like a lot. This document explains how they add value for you, (when relevant) how they fit together, and a deep dive on Zendesk.

## Internal collaboration

- Slack is our primary communication tool.
- Github is where our handbook lives.
- Zoom is how we connect synchronously.
- Gmail is mostly for notifications.
- Google calendar is for your calendar, as well as shared calendars (like the CS team calendar).
- Asana is for our project tracking as a team
- Gsuite is for drafts, slide decks, and spreadsheets.
- Lattice is to facilitate our for our twice yearly [review cycles](../people-ops/impact-reviews.md).
- Greenhouse is for hiring.
- Grammarly and Hemingwayapp help us say what we intend.
- Otter.ai makes it easier for everyone to follow along during Zoom calls.

## All things customers

- Zendesk is where we manage our day-to-day work and interact with some customers.
- Slack is where we interact with most customers.
- Salesforce is our source of truth for customer data.
- Looker is our data warehouse so we can connect different data sources and analyze anything we need to.
- ProductBoard is where collect all feedback about the product.
- Calendly is useful when you need to schedule a call with a customer.
- Krisp quiets background noise when on Zoom.
- Grammarly and Hemingwayapp help us say what we intend and catch any typos we don't see.

## sourcegraph.com admin access

In order to have good security and risk mitigation practices, only a subset of the team has admin access to sourcegraph.com. If you need to help a customer and it requires such access, post in our #customer-support-internal Slack channel and @ mention Giselle, Stompy, and/or Warren. One of them can help!

## Managed instance access

In order to have good security and risk mitigation practices, only a subset of the team has [access to managed instances](./support-managed-instances.md) (you can find which customers have a managed instance [here](./customer-exceptions.md)). If you need to access logs for these customers, post in our #customer-support-internal Slack channel and @ mention Don, Jason, and/or Mariam. One of them can help! If it's a p1 issue and none of them are available, simply request the logs in the #delivery Slack channel from the Delivery team.

Read more about working with managed instances [here](./support-managed-instances.md).

## Test Environments

There are some test environments created specifically for the CS team to run tests on when helping customers. They allow the team to reproduce and debug issues without affecting our production instances.

- [Test instance deployed with Docker Compose](https://cse-aws-test.sgdev.org/) ([_management doc_](managing-cs-aws.md))
- [Test instance deployed with Kubernetes](https://cse-k8s.sgdev.org/) ([_management doc_](managing-cs-k8s.md))
- [Single Docker for local testing](https://docs.sourcegraph.com/admin/install/docker)
- [Installation guide for Local Development](https://docs.sourcegraph.com/dev)
- [GitHub Enterprise test instance ](https://ghe.sgdev.org/)
- [GitLab Enterprise test instance ](https://gitlab.sgdev.org)
- [Gerrit test instance ](https://gerrit.sgdev.org/)
- [Bitbucket test instance ](https://bitbucket.sgdev.org/)
- [Phabricator test instance ](https://phabricator.sgdev.org/)
- [Dogfood Perforce instance](p4-enablement.md)

> NOTE: You can find all the login credentials for the test instances in your 1Password account.

## Troubleshooting

### GitHub Repository for Support Tools

The [Support Tools GitHub Repository](https://github.com/sourcegraph/support-tools-internal) contains tools built by the CS team that provide values when supporting our customers. This repository is private and you are welcome to add your projects to this repository, but please speak to Virginia about your ideas and plans before development starts to aviod possible conflicts.

> NOTE: Please aviod working directly on main branch.

[Link to Support Tools GitHub Repository](https://github.com/sourcegraph/support-tools-internal)

### Command Line Generator

The [Command Line Generator](https://github.com/sourcegraph/support-generator) is a simple web app that supports can use to generate the most frequently used commands for different deployment type when supporting a customer.

[Link to Command Line Generator GitHub Repository](https://github.com/sourcegraph/support-generator)

### Sourcegraph Graphql Voyager

[Sourcegraph Graphql Voyager](https://sourcegraph.github.io/support-tools-internal/Graphql-Voyager/) is a bootstraped tool that allows users to visually explore the Sourcegraph GraphQL API as an interactive graph.

### Sourcegraph Debugging Sheet (WIP)

[Sourcegraph Debugging Sheet](debugging-cheat-sheet.md) is a cheatsheet designed to streamline the troubleshooting process by allowing the CS team to search for common topics discussed with our customers and first steps at troubleshoot them.

#### How to use:

1. Go to [Cors Demo](https://cors-anywhere.herokuapp.com/) to opt-in for temporary `Cors Anywhere` access by clicking on the Request temporary access to the demo server button
2. Enter your Sourcegraph Token on homescreen

[Link to Sourcegraph Graphql Voyager GitHub Repository](https://github.com/sourcegraph/support-tools-internal/tree/main/Graphql-Voyager)

### Scripts

Creating customized scripts can help automate a repetitive task for the team and the customers. You can find all the existing scripts in this [directory](https://github.com/sourcegraph/support-scripts) and are welcome to write and share your own custom scripts with the team.

> WARNING: This is a **public** repository. Please \*_do not_ add any private information to any part of the repository, including the names of our customers.

[Link to GitHub Repository for Scripts](https://github.com/sourcegraph/support-scripts)

## Zendesk

This section captures our Zendesk protocol and configuration decisions.

### Access

- Application engineers have agent access
- Virginia, Brielle, Nonso, Tamar, and Tech Ops have admin access
- Only Virginia can modify billing related items
- We have an admin level service account application engineers can use for integration work with Zendesk. If you want to do anything with this account, please check with @cs-leadership in our #customer-support-internal Slack channel first (they will help make sure what you want to do won't interrupt other workflow settings); similarly, this account should not used to make configuration changes without checking with the leadership team who is responsible for Zendesk configuration
- Tickets are also rendered via an iFrame in Salesforce for CE and sales access.

### Web vs desktop vs mobile app

The best way to use Zendesk as an agent is via the web app. The mobile app is nice, but installing such apps on your phone can make it harder to take a break from work. Really consider this before you download the app to your phone. The desktop app is very limited and best to not even bother with.

### When to be logged in and monitoring the queue

Our job requires that at least one of us is actively paying attention to what's coming into Zendesk between 9am-5pm pacific Monday - Friday. The only time the team expects you to not be logged in during your working hours is during your focus blocks as listed in our [schedule](support-schedule.md). Otherwise, if you need to focus, just let the team know in our #customer-support-internal Slack channel so we can coordinate and make sure to have you covered!

### Notifications

Set your notifications however you see fit to make sure you are able to help monitor the queue.

### Views

When you log into Zendesk, all tickets are organized by the following views:

- **Unassigned tickets.** All new tickets that no one on the team has taken accountability for yet
- **Your unsolved tickets.** All of your tickets that you are actively working on.
- **All unsolved tickets.** All tickets from across the entire team that everyone is actively working on.
- **Recently solved tickets.** All tickets that have been moved to solved status (tickets only stay in this status for 16 business hours and then they move to closed). When in a solved state, if customers reply this ticket re-opens. If in a closed state and the customer replies, a new ticket is created.
- **Rated tickets from the last 7 days.** All tickets from the last 7 days where a customer has taken time to tell us how we did.
- **All on-hold tickets.** All tickets from across the entire team that are on-hold waiting for a bug fix.
- **All closed tickets.** All tickets from across the entire team that are closed.
- **Suspended tickets.** Anything Zendesk deems is spam.
- **Deleted tickets.** Any deleted tickets.

There are also views for suspended (spam) and deleted tickets. We occasionally check these and never permanently delete anything without a double check with the team just to be sure.

### Ticket data fields

When you close a ticket, these are the required fields you must populate:

- **Did I make a docs update and put my PR link in an internal note on this ticket?** Designates how many updates we are making so we can demonstrated our contributions to our OKRs to improve our docs.
- **Did the customer indicate a positive sentiment with your work and did I share details in an internal note on this ticket?** Designates whether a customer expresses positive sentiment for your work. This replaces customer satisfaction (CSAT) measurement since we are not yet able to survey our customers in such a fashion.
- **Have you written a case summary?** Holds the team accountable for populating the [resolved case database](enablement/zendesk-ticket-exporter.md)
- **Have you uploaded the summary to the GitHub repository?** Holds the team accountable for populating the [resolved case database](enablement/zendesk-ticket-exporter.md)
- **Lifecycle:** Designates whether the request is associated with a customer when they are in the pre-sales or post-sales part of their lifecycle with us
- **Official type:** Designates whether this is a question, defect report, or help request
- **Official priority:** Designates whether the priority is p1 or p2 per our definitions outlined in our [prioritization guidelines](support-prioritization.md).
- **Engineering team:** Designates which engineering team is responsible for the part of the product or feature associated with the ticket (think, if I got help/needed help which engineering team did I go to/would have gone to?)

### Why there are duplicate ticket data fields

In addition to the required fields noted above, we also have these fields that seem duplicative...

- **Type:** This is the out of the box option that lists different option and we only use so something shows up for our customer who want to login into Zendesk to see their entire case history
- **Priority:** This is the out of the box option that we use to set the SLA counter. It is always normal and always triggers an 8 business hour count.

### Timezone

Zendesk is set to pacific timezone to align with our states SLAs.

### Schedule and SLAs

The schedule in Zendesk reflects our SLA hours and is set to 9-5 pacific, Monday - Friday. This allows us to use the SLA timer to reflect how much time we have before we hit our SLA (if relevant for that customer). The SLA clock is 8 business hours and therefore adds time if a case comes in after hours, on the weekend, or on a holiday. Currently we mark the following as holidays in Zendesk:

- December 24-25 for Christmas
- January 1 for New Year

Since we are global team, we do not add every holiday that everyone celebrates. We only add the holidays where the majority/all of the team is unavailable.

We do not use the SLA function in Zendesk since it doesn't work with our Slack integration in an optimal way for the team (the team found the never ending counter stressful).

### Default to private/internal notes

We have Zendesk set to default to private/internal notes. Since much of our work happens in Slack and we only use internal notes, this ensures we are not sending out-of-context emails by forgetting to change the toggle.

### Automations

We have a few automations set-up to streamline our workflow:

- When you reply to a ticket, it auto-assigns to you, so you don't have to worry about remembering to click "take it" to assign it to yourself
- The signature is built-in and is your name followed by Sourcegraph Support in the second line
- When triage sets the requestor and they are part of an organization where we have an assigned application engineer, the application engineer is automatically assigned via a trigger and their back-up (if there is one) is added as a follower via the same trigger; there is one trigger for each such customer (the list of which can be found in our [customer exceptions page](./customer-exceptions.md).
- Per our [customer exceptions page](./customer-exceptions.md), we have a few customers who have access to Zendesk and they can close their own tickets. When this happens, they are able to bypass the required fields where we gather data. To ensure proper data collection, we have an email notification that is sent to the application engineer responsible for the ticket that the customer has closed the ticket and to please go back to it and fill in the required data fields.

### Apps

We use the following apps to streamline our workflow:

- **Notes** allows us to reflect whatever is in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit) in the right panel, as well as anything about this customer's environment that is useful for troubleshooting
- **CC Quest** allows us to swap the requester for anyone in CC, which is especially relevant when a CE or SDR copies in support@ and we want to replace their names as the requestor with that of the customer

### The customer experience

- When a customer emails support@ they receive an automated email that says: This is an automated email to let you know that the email you just sent to support@sourcegraph.com has been received and if you need it, the ID number is ({{ticket.id}}). We do not count this as our first response (we only send this so you can have peace of mind that your email arrived to us). For our first reply, we aim to be truly helpful, where we have already spent time digging in. This usually happens in a couple of hours. You can read more about how we approach helping you [here](index.md). If you think of anything else while you wait for us to get back to you with a thoughtful and useful first response, just reply to this email." _Note: this email does not go to folks initiating help requests in our #support- and #trial- Slack channels._
- Once we (and the customer) deem the case solved, we mark the case solved. After an hour of doing so, Zendesk automatically emails a request for feedback on whether the support experience was good or bad. _Note: this email does not go to folks initiating help requests in our #support- and #trial- Slack channels._

### https://sourcegraph.zendesk.com/

This page is only open for customers who want to login into Zendesk to see all support requests for their organization.

- When folks try to access this page and have not been granted access as outlined in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit), they see this message: "This page is for Sourcegraph customers who would like to view all support requests in one place. The page will not function without a little configuration first. Email support@sourcegraph.com to get set-up."
- When folks have permission to login as noted in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit), they see this message: "To view all support requests from your organization in one place, select "my activities" from the menu under your profile avatar."

### Guide customizations

We do not use guide for our documentation, but must have it activated so customers can login into Zendesk as noted in our [Exceptions for Customers document](https://docs.google.com/document/d/1YeRxSeVizEJPE1JNA5FG7mIz3ucjSxYXkEBX2XEytJU/edit). In order to provide an optimal experience, we have made the following customizations:

- Removed search bar
- Modified text on home page
- Modified error messages
