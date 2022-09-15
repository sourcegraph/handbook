# Technical Advisors (TAs)

## Who we are

Technical Advisors (TA), within Customer Engineering (CE), are specialized experts focused first and foremost on the post-sales customer experience and relationship. Our team will be responsible for continously monitoring the health of our customers, becoming trusted advisors to them on all things Sourcegraph and engineering, and builting out the tools and processes internally to do this job as effectively as possible.  We are responsible for ensuring that customers are achieving their success metrics that were defined during the sales process, and that they continue to find new valueble use cases for Sourcegraph.


## Team Culture & Norms

### Team Norms

This team is highly focused on engaging our customers with valuble insight and information.  We also are focused on internally surfacing customer information that is important to the business.  This means both synchronous customer conversations throughout the day along with synchronous and asynchronous Sourcegraph processes.

Any daily / weekly / monthly team activities will be defined at a later time.  


### How we work in support of customers

Ultimately we will work to increase the following customer metrics:
- Adoption
- Usage / Consumption
- NPS 
- Renewal Rate

While those metrics are good for our business, the driving factor should be making that the customer is successful in their own business, and that Sourcegraph is a critical tool in that process that proves invaluble to their organization.

### How to contact us

This team can be engaged in the [`#technical-advisors` channel](https://sourcegraph.slack.com/archives/C0426PSSTM3). The team is also in the [`#ce channel`](https://sourcegraph.slack.com/archives/CU93UDUBV), however, the [`#ce channel`](https://sourcegraph.slack.com/archives/CU93UDUBV) is more focused on the actual Customer Engineers, not the TA sub-team.

## Internal Team Resources

- TA Onboarding (WIP)
- TBD

## Segmentation

We break our team down into four segments of customers which is used to help define what kind of activiteies are expected and how frequent they should occur.

Those segments are:
- Strategic
- Large Enterprise
- Small Enterprise
- Commercial 


# Tooling

## Vitally

We use Vitally stay organized internally around our customers.  Your account should be able to look at just your book of business or the entire customer base.

### Account Views

- 2x2 Meeting Dashboard
    - This is a prebuilt screen that will surface all the relevant information for your 2x2 Meetings to discuss your customers.
- Technical Details
    - This view is indended to be a snapshot of the technical details from our customers implementation.  If an Implementation Engineer was asigned to the implementation, they will be responsible for recording this information.

### Dashboards
- [Deployment Tracking](https://sourcegraph.vitally.io/work/team/dashboards/539a4ade-5d23-4d16-8883-5036e74836ae)
    - This dashboard is used to track the ongoing customer deployments and ensure they are getting value in a timely manner.
    - This filters out Sourcegraph Managed / Cloud instances, and any instance that has a Production Infastructure Completed date.

# Technical Advisor Responsibilities and Touchpoints

The following are a sample of the activities that a TA is responsible for on a daily basis:

### Internal

-  Establish up-to-date account map / plan
    -  Org, roles & responsibilities, learn the state of things, intros to folks
- Account Monitoring: flag and schedule internal meetings, work with customer on corrective action, customer health
    - Internal 2x2 meetings


### External

- Account Monitoring: flag and schedule internal meetings, work with customer on corrective action, customer health
- Relationship building
    - Champion identification/building/nurture activities
    - Tech advocate identification/building/nurture activities
- Standardized customer communications
    - Incident response
    - Product updates
    - Product research
- Usage & Value Reporting on a quarterly basis

# Detailed Touchpoints

## Post-Sales Engagement Kickoff

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

Once a customer signs on with Sourcegraph, we need to:

- Generate a full license key.
- Plan a kickoff call with our main contact(s) to plan the engagement.

On the kickoff call we plan our ongoing engagement with the customer. Different customers have different needs, so it's important to talk through topics such as:

- How often do they want to have check-in calls?
- What types of trainings, webinars, or Q&A sessions could their team use? When?
- Would they like any assistance or resources to integrate Sourcegraph into their developer onboarding process?
- Anything else we can look to help them out with? Upcoming initiatives they could use Sourcegraph for?

### Resources

- [Post Sales Engagement Sheet Template](https://docs.google.com/spreadsheets/d/18DjSYXOnALOHYN-zrMhOGUWGFCaXYShqcKt477tj3LU/edit#gid=0)
- [Post-Sales Kickoff Deck Template](https://docs.google.com/presentation/d/1eTis1XiS3U1M1M1a35wBw5qwTnJSMozXcz_gXJcGXhk/edit)
- [Sample Chorus Recording](https://chorus.ai/meeting/066B000C659C4F1D83AA465576444924)

## User Onboarding

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

A critical part of the customer experience is user onboarding. After deal close, once the customers' production infrastructure is setup and confifured, CEs are responsible for driving adoption of users onto Sourcegraph. During engagement kick-off, CE works with our customer stakeholders to create a plan to onboard their users.

### Resources

- [Customer Health Dashboard](https://sourcegraph.looker.com/dashboards-next/194)

## Webinars / Trainings / Q&A Sessions

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

A standard customer engagmeent should include three core trainings, as well as optional topics customized to customer needs or requests, or demos of new features or use cases that are relevant to the team. These webinars may be run repeatedly if, for example, you're expanding into a new business unit within an existing customer.

### Standard trainings

- [Sourcegraph 101](https://github.com/sourcegraph/customer-training/tree/main/trainings/sourcegraph-101) ([Video training](https://drive.google.com/file/d/1emSuz6Q871OC2YOadcfkrUXfuopn6JCB/view?usp=sharing)) - The basic "how to use Sourcegraph search" webinar. This should take a new users from 0 to able to use the tool competently. The repo includes a fully scripted talk track, a lesson plan version of the talk track for those who prefer that format to a script, a Slack follow up message to send to customers, test exercises for customers to run, and the content formatted for inclusion in a customer's LMS for self-directed learning.
- [Sourcegraph 102](https://github.com/sourcegraph/customer-training/tree/main/trainings/sourcegraph-102) ([Video training](https://drive.google.com/file/d/1813s6MTmFqtWJ5IYVc6ivkX3mKlY6X7T/view?usp=sharing)) - This should take a customer from being a general Sourcegraph user through being able to use the majority of Sourcegraph's advanced search features.
- [Admin training webinar](https://github.com/sourcegraph/customer-training/tree/main/trainings/admin-webinar) - This should take an admin for the instance through all of the elements of the admin area of the app, and leave them feeling confident with instance and user management training. This is not intended for cluster admins, and so does not cover sizing the cluster, etc.

### Other trainings

- Security use case training - Currently in progress with ETA for completion of EOQ Q2FY23. This should walk customers thorugh how to use Sourcegraph for the [security use case](https://about.sourcegraph.com/use-cases#find-and-fix-security-vulnerabilities).

### Resources

- [Training Webinar Recording](https://chorus.ai/meeting/8FEAE02538644AA3ABB22149750E6308?)
- [Customer Training Engineer repo](https://github.com/sourcegraph/customer-training/tree/main/trainings)

## QBRs

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

We often hold QBRs, or Quarterly Business Reviews (sometimes referred to as an Executive Business Review), with our customers which recaps how Sourcegraph has been integrated into and creating value for their organization over the past quarter. These QBRs are typically created and presented by the CE assigned to the account, in conjunction with the account’s AE. They are typically presented in a slide deck format to executive-level leadership, and highlight usage metrics and use cases for their org. Additionally, they are used to gather feedback and comments from leadership regarding Sourcegraph.

### Resources

- The [QBR Guide](https://docs.google.com/document/d/1gFRn2SkX19sU0GSMGndNkk-I9cFe7FlN3xlZ2UX3Frs/edit#) details how CEs should execute a QBR.
- [QBR Quickstart video](https://www.loom.com/share/fb63d3286cda43a3b57913c5bdcc9806)
- [QBR Deck Template](https://docs.google.com/presentation/d/10TTvP3_U9-z_40vyqo1Bi_f0lD2s8TclFLnqvXIdU1s/edit#slide=id.gc868ddee9e_0_0)
- [QBR Deck Template (with value realization)](https://docs.google.com/presentation/d/1PMd0_nuPrhM7m_vKp9eW-GYDbhwUk1D4DQHy8-smObE)
- [Example QBR Deck](https://docs.google.com/presentation/d/1bWjDHA5U6luV4h6jNDo9fyj11tkpf_nHi9DhbLsPxr0/edit#slide=id.g96a3fc9b53_0_0)
- [Example QBR Survey](https://www.surveymonkey.com/results/SM-K6LMJQMZ7/)
- [Sample QBR Recording on Chorus](https://chorus.ai/meeting/36928A0D99694DCB8E0AC9D028E44A1D?search=qbr&recordingsOnly=true&transcript=false)

## Expansions and Renewals

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

Expanding Sourcegraph to a new team or unlocking new enterprise features could involve a full cycle of CE discovery and demos and value mapping. It could also include a trial for a new user group or with that new feature. A basic renewal or seat expansion may not involve CE beyond generating a new license key.

## Ongoing Customer Nurture

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

While our CS team is primarily responsible for reactive technical support, CE helps keep an eye out on Slack for any questions or issues that come through. CE can view any support issues in Zendesk by using our SFDC <> Zendesk integration. Go to the Account page in Salesforce and click the "Zendesk" tab to view.

At times a customer may raise a feature request or provide product feedback. It is our responsibility as CEs to gather that feedback and share with the product teams.

### Resources

- [Product Gaps Dashboard](https://sourcegraph2020.lightning.force.com/lightning/r/Dashboard/01Z5b0000015UGhEAM/view?queryScope=userFolders)

## Account Management

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

As CEs we are responsible for the technical success of our customers. Post-sales we nurture these relationships and manage the accounts by paying attention to customer health metrics. Usage, adoption, and customer sentiment are important indicators that we monitor and address. It is recommended that CEs routinely monitor this to keep a pulse on customer metrics. There is also a link to this from the Salesforce Account record.

In addition to routine monitoring, CE should be collaborating with their AE to create and maintain [account plans](https://drive.google.com/drive/folders/1EoKl4lFeR8VvM6LyubMocxN4Z4OHPoNl) for each customer. These should be revisited on a quarterly basis.

### Resources

- [Customer Health Dashboard](https://sourcegraph.looker.com/dashboards-next/194)
- [Instance overview dashboard](https://sourcegraph.looker.com/dashboards-next/167)


# Playbooks

To enable CEs and ensure consistent practices, our team may produce playbooks from time-to-time. These playbooks should serve as a useful onboarding resource to new CEs and a helpful refresher for CEs as well.

## Account Health

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

The [account health playbook](https://docs.google.com/document/d/1YeuwtlplEkZEnmLMXZ1vKjJGImUZCIb1x4aCLXcNavc/edit) offers a repeatable framework for mitigating the risk of low adoption scores by offering suggestions for engagement as well as repeatable training and reusable content. This is a living document that should change to reflect available components in the [Customer Health Dashboard - Individual Customer](https://sourcegraph.looker.com/dashboards-next/194?Unique+Server+ID=Eventbrite) and mature over time to provide more refined resources to support Customer Engineers.


# Processes

Similar to playbooks, processes exist to ensure consistent practices amongst teams. Processes that the CE team either drives or heavily contributes to are outlined below.

## Renewal Process

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

Finance, TA, Sales, and Value Engineering all play a key role in customer renewals. While the customer renewal is a single event, our teams are constantly assessing the health of our customers and taking corrective action as necessary.

### Process and Roles & Responsibilities

On a quarterly basis, finance generates and publishes an updated renewal analysis for remaining renewals in the Fiscal Year. On a monthly basis, AE and Sales updates the [Renewals: Health Assessment](https://docs.google.com/spreadsheets/d/1iabZh8JzZc6d05z6xjLkpM-RtpbyG2qb2jXwUj1vlMU/edit#gid=153370473) doc:

- Sales (AE) raises relationship and business needs / challenges that pose a risk for the customers' health
- TA raises technical and business needs / challeneges that pose a risk for the customers' health
- The Red Accounts Program is employed to address any challenges raised as part of these health assessments.

90 days prior to the renewal, Value Engineering engages to perform a value realization exercise prior to the first customer renewal call. The AE establishes a plan for the renewal proposal and begins renewal discussions with the Champion / Economic Buyer (EB).

## Red Accounts

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

As the team accountable for our customers' technical success, usage, and adoption of our products, CEs must keep a close pulse on the health of our customers. The Red Accounts Program exists to ensure we as a company are assessing customer health at all times.

### Overview

For any account that is designated as having a health rating of red - either via [calculated score](https://sourcegraph.looker.com/dashboards-next/179?Customer+Engineer=&Account+Executive=&Unique+Server+ID=&Region=) or by a member of the account team - the AE and CE will jointly provide a current status of the account, identify any necessary asks of the business in order to best serve the customer, create an appropriate action plan, and track through to resolution (ideally promotion of the health from red to yellow or green).

### Red Accounts Process

In slack, the #red-accounts channel has been created so that when the Customer Health field on the Salesforce Account record is set to Red, a post is auto-triggered in the slack channel and a corresponding row will be automatically added to the Account Tracker tab of the [Red Accounts](https://docs.google.com/spreadsheets/d/1eVgWhrtgH8WQGo_pRuMseqz-Bk1P1Bymrlkutzz5jEA/edit#gid=0) Google Sheet. The AE / CE will jointly fill in relevant information to understand current state, needs, and the intended actions. Any asks or needs against the intended action plan should be initiated via a thread on the auto-generated slack post; this allows for visibility and transparency.

### Roles and Responsibilities

The CE will monitor the Customer Health dashboard and where appliable update the Customer Health field on the Salesforce Account record to red.

Should an AE or CE feel that an account which isn't designated as red via the health dashboard, is in fact red for any reason (eg a champion leaves, etc) they should align, and the CE should update the Salesforce Account record to red.

Both the AE and CE are responsible for participating in the creation of the action plan, and overseeing the action plan through to resolution.

## Tech Reviews

Tech Reviews are employed in both pre-sales scenarios and post-sales scenarios.

- Tech reviews in pre-sales situations are documented as part of the [CE Technical Win Management Process](../process/tech-win-process.md).
- Tech reviews in post-sales situations are documented as part of the [Customer Success Process](../process/tech-reviews.md).

## Account Planning

*This section contains information from when CE / pre-sales owned the process.  It will be updated as these processes are redefined*

Account Planning is critical to the success of our customers. The account planning process is where an account team (AE & CE) comes together to review the current status of their customers (Usage, Health, ect.) on a quarterly basis and sets new goals for the next quarter, focusing on customer health, retention, and expansion.

A [video version](https://www.loom.com/share/b18f6a43fa6243a38affe0a25c068f6d) of this has also been recorded.

### What is an Account Plan?

The Account Plan is an internal document that provides customer context, objectives, risks, and plans for a customer account looking back on the previous quarter and ahead for the next quarter that includes the following information:

Customer Context

- Contacts: champions, EB, advocate, admin, etc.
- Use cases
- How they’re using SG; internal initiatives; value perception
- Customer health

Objectives and plans

- Expansion & Growth Opportunities
- Account Risks & Challenges
- Product Feedback themes
- Quarterly Account Objectives

### How do I start an Account Plan?

To create a new Account Plan, a CE makes a copy of the [Account Plan Template](https://docs.google.com/document/d/1AN-irUdSLOhmV_zIIjKfAdw8vvf3Eh2HEdd0hhYiC_M/).

Each plan is stored:

- In the [accounts plan folder](https://drive.google.com/drive/folders/1EoKl4lFeR8VvM6LyubMocxN4Z4OHPoNl?usp=sharing) for central access of all Customer Account Plans
- A [shortcut linked](https://support.google.com/drive/answer/9700156?hl=en&co=GENIE.Platform%3DDesktop) to the account plan from within the customer folder
- URL reference of the Account Plan on the account object in SFDC in the “Action Plan Link” field

### When should I Account Plan?

Account Planning for all accounts occurs one a quarter, but the exact timing depends on the tier of the customer.

For Tier 1 customers, this prior to internal QBRs so that the information can be presented there.

For Tier 2 and Tier 3 customers, this will happen sometime at the beginning of the quarter.

Calendar invites will be sent out indicating the weeks during which each Tier's account plans should be completed.

Newly signed customers will not have their first account plan created till after their account onboarding has been complete. Untill then, the onboarding plan should be the roadmap for the customer.

### What do I do with an Account Plan?

For Tier 1 customers, this account plan will be shared with CE and AE leadership at a 2:2 Review meeting, and shared again to the whole organization at the internal QBR.

For Tier 2 and Tier 3 customers, the account plan will be shared with your CE leader directly during your 1:1.

Regardless of tier, each account plan should include clear next steps that will be added in Salesforce to the _Notes / Next Steps_ field on the account. A link to the account plan should also be included in the _Account Plan Link_ field.

### Additional Questions

What is the difference between the Account Plan and the Technical Design Document?

- The Account Plan is not meant to be a technical document, it is meant to be a single place for someone to look for the business and health information around an account. The Technical Design Document is meant to be the single place for someone to look for technical details around a customer's implementation of Sourcegraph

How do I find out what tier my customers are?

- In this [SFDC Account Tiering Report](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O5b000005HUrjEAG/view)

How do I see when my accounts renew?

- In this [SFDC Renewals Report](https://sourcegraph2020.lightning.force.com/lightning/r/Report/00O5b000005HGAbEAO/view)
