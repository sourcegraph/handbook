# Customer Engineering: Working with Customers

This page captures best practices, playbooks, and processes for how CEs should work with customers.

* [Tracking and Maintaining your Accounts](#account-tracking)
* [Playbooks](#playbooks)
  * [Customer Discovery](#customer-discovery)
* [Processes](#processes)
  * [Red Accounts](#red-accounts)



## Account Tracking

A CE can glean important insights into a customers' usage via our [instance overview dashboard](https://sourcegraph.looker.com/dashboards-next/167?Unique+Server+ID=Netflix&Salesforce+Unique+ID=). It is recommended that CEs routinely monitor this to keep a pulse on customer metrics. There is also a link to this from the Salesforce Account record.

## Playbooks

To enable CEs and ensure consistent practices, our team may produce playbooks from time-to-time. These playbooks should serve as a useful onboarding resource to new CEs and a helpful refresher for CEs as well.

### Customer Discovery

The [customer discovery playbook](https://docs.google.com/document/d/14iSqJBtiM32D1zSVVvtZGZmWVLuQ7S7MoJDM6wAhkyQ/edit) provides CEs with a framework and tools to successfully prepare for and conduct your first meetings with prospective customers (or even new stakeholders within existing customer organizations). These inputs should serve as the prerequisites to any customer demo because it enables you to tailor your content and talk track to what’s most relevant to the customer. It also provides key areas for CEs to consider and specific steps to take to ensure the CE has the correct context and knowledge to properly support a successful customer engagement beyond the initial meetings

### QBR Guide

We often hold QBRs, or Quarterly Business Reviews (sometimes referred to as an Executive Business Review), with our customers which recaps how Sourcegraph has been integrated into and creating value for their organization over the past quarter. These QBRs are typically created and presented by the CE assigned to the account, in conjunction with the account’s AE. They are typically presented in a slide deck format to executive-level leadership, and highlight usage metrics and use cases for their org. Additionally, they are used to gather feedback and comments from leadership regarding Sourcegraph. The [QBR Guide](https://docs.google.com/document/d/1gFRn2SkX19sU0GSMGndNkk-I9cFe7FlN3xlZ2UX3Frs/edit#) details how CEs should execute a QBR.

## Processes

Similar to playbooks, processes exist to ensure consistent practices amongst teams. Processes that the CE team either drives or heavily contributes to are outlined below.

### Red Accounts

As the team accountable for our customers' technical success, usage, and adoption of our products, CEs must keep a close pulse on the health of our customers. The Red Accounts Program exists to ensure we as a company are assessing customer health at all times.

#### Overview

For any account that is designated as having a health rating of red - either via [calculated score](https://sourcegraph.looker.com/dashboards-next/179?Customer+Engineer=&Account+Executive=&Unique+Server+ID=&Region=) or by a member of the account team - the AE and CE will jointly provide a current status of the account, identify any necessary asks of the business in order to best serve the customer, create an appropriate action plan, and track through to resolution (ideally promotion of the health from red to yellow or green). 

#### Red Accounts Process
In slack, the #red-accounts channel has been created so that when the Customer Health field on the Salesforce Account record is set to Red, a post is auto-triggered in the slack channel and a corresponding row will be automatically added to the Account Tracker tab of the [Red Accounts](https://docs.google.com/spreadsheets/d/1eVgWhrtgH8WQGo_pRuMseqz-Bk1P1Bymrlkutzz5jEA/edit#gid=0) Google Sheet. The AE / CE will jointly fill in relevant information to understand current state, needs, and the intended actions. Any asks or needs against the intended action plan should be initiated via a thread on the auto-generated slack post; this allows for visibility and transparency.

#### Roles and Responsibilities
The CE will monitor the Customer Health dashboard and where appliable update the Customer Health field on the Salesforce Account record to red.

Should an AE or CE feel that an account which isn't designated as red via the health dashboard, is in fact red for any reason (eg a champion leaves, etc) they should align, and the CE should update the Salesforce Account record to red.

Both the AE and CE are responsible for participating in the creation of the action plan, and overseeing the action plan through to resolution.
