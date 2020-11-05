# Customer Engineering onboarding

Welcome to Sourcegraph! This document will guide you through customer engineering-specific onboarding.

## Weeks 1 and 2

### CE-specific onboarding during weeks 1 and 2

- Get familiar with our systems and processes (NOTE: Request access/licenses to these tools in #internal-it-tools):
  - [GitHub](https://github.com/) (Provide GitHub username and request access to Sourcegraph repo) 
  - [Salesforce](https://sourcegraph2020.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fsourcegraph2020.lightning.force.com%252Flightning%252Fpage%252Fhome)
  - [HubSpot](https://app.hubspot.com/contacts/2762526/deals/board/view/all/)
    -  Note: We have officially transitioned to Salesforce as our CRM, but HubSpot still has some historical context. Please get access to both.
  - Set up [email logging](https://about.sourcegraph.com/handbook/sales/records)
  - [JIRA Service Desk](https://sourcegraph.atlassian.net/jira/servicedesk/projects/SG/queues/custom/1)
  - [Looker](https://sourcegraph.looker.com/dashboards/94?Unique%20Server%20ID=&Site%20ID=&filter_config=%7B%22Unique%20Server%20ID%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22%22%7D,%7B%7D%5D,%22id%22:2%7D%5D,%22Site%20ID%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22%22%7D,%7B%7D%5D,%22id%22:3%7D%5D%7D)
  - [Krisp](https://krisp.ai/)
  - Familiarize yourself with the [Weekly CE Sync Notes](https://docs.google.com/document/d/1c40u7Bh2vPIAHcz8qS_qLOt310MfjrGeHN5-W45nh4U/edit) and format 
    - Updates to be provided in order of priority 
- [Join as many customer calls as possible](../sales/onboarding/joining_customer_calls.md)
  - Collect questions along the way (unfamiliar terms, use cases, etc.)
- Watch [Dan's recorded demo](https://drive.google.com/file/d/1VUZ0rnZQpNgjtGDI0tMC-h-OtL0Czz8H/view?usp=sharing) 
- Schedule a demo from the most recent CE hire before you
- [Install Sourcegraph](https://docs.sourcegraph.com/admin/install/) using each of the three deployment options
  - Watch [Dave's Kubernetes Walkthrough video](https://drive.google.com/drive/folders/1Mqlndi3anVp9Eq8tYgVoyjodyoxsfik2?usp=sharing)
  - Ask for any help needed along the way in the #dev-chat channel
  - Update our docs where necessary
- Participate in (or watch the recording of) the following training sessions. Please ask your manager or People Ops to help you find the right training sessions to join if you cannot find the right training videos to watch.
  - CE Goals
  - CE systems and processes 
  - Product introduction 
    - Optionally request access to [Figma](https://www.figma.com/) in the #product channel on Slack
  - Sourcegraph demo 
  - Product deployment
    - ["Deployment types - A crash course in Sourcegraph"](https://docs.google.com/presentation/d/1u4mbXjubQqV-6WFbuS7Q1b_X6BVh-_GWzzFQMcrAzLw/edit#slide=id.p)
  - Sourcegraph data 
- Go through [Product](https://about.sourcegraph.com/handbook/product/onboarding) and [Engineering](https://about.sourcegraph.com/handbook/engineering/onboarding) onboarding, specifically to gain understanding of:
  - How our product is architected, how it works together, etc. [Sourcegraph architecture](https://docs.sourcegraph.com/dev/background-information/architecture), and all the resources on that page, are a very helpful read-through (as well as a bookmark to come back to later).
  - How product is developed here.
  - Other ways other team members are onboarded.
- Set up introductory calls with each Engineering team manager (use https://about.sourcegraph.com/company/team to help you find who that would include), Sales, Product, and Marketing team members
- Read our [CE handbook pages](index.md)
  - [Support](support.md)
- Set up a Sourcegraph.com account and request access to become a site-admin in the #internal-it-tools Slack channel. Once you have access, familiarize yourself with the site-admin page (used to manage customer accounts, license keys, etc.).
- Obtain access to the Sourcegraph Dropbox team folder. You can request this in the #internal-it-tools Slack channel.
  - Get access to the "Customer contracts" folder as well.
- Ask for a license to LinkedIn Sales Navigator tool in #sales channel
- Read through [Architecture overview](https://docs.sourcegraph.com/dev/background-information/architecture) to understand how our application and system works.    If you have any questions, reach out to @nicksnyder, and make sure to update/incorporate what you learned from that q&a here. 
- Read through our [observability and monitoring](https://docs.sourcegraph.com/admin/observability) docs and understand how to troubleshoot those tools 
  - [Grafana and Prometheus](https://docs.sourcegraph.com/admin/observability/metrics)
  - [Tracing](https://docs.sourcegraph.com/admin/observability/tracing)
  - [Alerting](https://docs.sourcegraph.com/admin/observability/alerting)


### General onboarding during weeks 1 and 2

- Go through general onboarding [People Ops](../people-ops/index.md)
  - [General onboarding steps](../people-ops/onboarding/index.md#general-onboarding-checklist)
  - [Sourcegraph handbook](../index.md) intro
- [CEO](../ceo/index.md)
  - Vision
  - [Values](../../company/values.md)
  - Company pitch
  - [Goals](../../company/goals/index.md)
  - Last board deck or video
- [Product](../product/index.md)
  - [Personas](../marketing/personas.md)
  - [Products](https://about.sourcegraph.com/product)
- Read/watch
  - Entire [about.sourcegraph.com](https://about.sourcegraph.com) site
  - Sourcegraph [glossary](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/enterprise/docs/glossary.md)
  - [Videos of campaigns](https://about.sourcegraph.com/product/code-change-management), currently in private beta
  - Case studies: [Yelp](https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html), [Quantcast](https://about.sourcegraph.com/case-studies/quantcast/) and [Thorn](https://about.sourcegraph.com/case-studies/we-are-thorn/)
  - Latest Sourcegraph release blog post (on our [blog](https://about.sourcegraph.com/blog))
- Set up 1-on-1s over the next month with all members of the [Distribution team](../engineering/distribution/index.md). This is the engineering team that CEs traditionally work with most often, as they own customer deployment, monitoring, and upgrades.
- Set up 1-on-1s over the next month with all members of the [Sales team](../sales/index.md).
- Confirm with Noemi you can access the "Sourcegraph shared" folder on Google Drive
- Add yourself to the [team page](https://about.sourcegraph.com/company/team). - Add a link to your team page bio to your Slack profile

### Checkpoint

- Deliver a compelling 15-minute demo of Sourcegraph

## Week 3

- Take ownership of a new prospect relationship (if available)
  - Deliver the initial demo on the first call
    - An experienced CE will be in attendance, but only to provide feedback after the call, not to help on the call
  - Be the primary point of contact for questions, emails, and Slack communication
- Take ownership of an existing customer relationship
  - Reach out to set up an introduction
  - Define success criteria for growth
  
## CE Onboarding Checklist

- Week 1
  - Get all [tools](https://about.sourcegraph.com/handbook/ce/onboarding#ce-specific-onboarding-during-weeks-1-and-2)
  - Get your [accounts](https://docs.google.com/spreadsheets/d/1EbAlUlMoZU-M2haRj0DoW3E7h7KG2D0vwLX3PlwL-h0/edit#gid=154354692)
  - Read ALL existing [case studies](https://about.sourcegraph.com/case-studies)
    - Also understand the typical use case buckets
  - Get a Sourcegraph instance [deployed](https://docs.sourcegraph.com/admin/install)
  - Make a Handbook edit to the CE onboarding section

- Week 2
  - Discovery questions 
    - What questions can you ask to help understand a new prospect’s situation?
    - What would disqualify a prospect?
    - (Technical) objection handling
  - Dig in/understand different deployment types, what it takes, when, why.
  - Take on your first support ticket
  - Give SG 101, 102 (internal certification)
    - 10 Step Demo Certification 

- Weeks 3-4
  - Give a campaigns demo
  - Give SG 101, 102 (to clients/prospects)
  - Do 1 week frontline support
  - Run your first customer meeting (existing account)
  - Run your first customer meeting (new demo)

  
## FAQ

- How do we interface in customer engagements?
  - Primary communication with customers is over dedicated shared Slack channels:
    - Prospects: #trial-companyname / new format is: #trial-companyname-sourcegraph
    - Customers: #support-companyname / new format is: #support-companyname-sourcegraph
- How do I route technical questions to the appropriate team?
  - [Routing Customer Questions](https://about.sourcegraph.com/handbook/ce/routing_questions)
- Where can I track user feedback?
  - [User Feedback](https://about.sourcegraph.com/handbook/product/user_feedback)
