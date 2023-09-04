# Customer Engineering: Working with Customers

A CE, being both a pre-sales engineer and a post-sales technical account manager, works with customers in a number of different ways throughout the customer journey. This page captures high-level descriptions of the ways in which we work with or on behalf of our customers. Each section contains links to some supporting documents, templates, processes, playbooks, and recordings.

- [Pre-Sales Customer Touchpoints](#pre-sales-customer-touchpoints)
  - [Discovery and Demo](#discovery-and-demo)
  - [Technical Design](#technical-design)
  - [Customer Trials](#customer-trials)
  - [Security Reviews](#security-reviews)
  - [License Keys](#license-keys)
- [Playbooks](#playbooks)
  - [Customer Discovery](#customer-discovery)
- [Processes](#processes)
  - [CE Technical Win Management](#ce-technical-win-management)
  - [Tech Reviews](#tech-reviews)
  - [Creating Tickets -Trial Support](#creating-trial-support-tickets)

---

# Pre-Sales Customer Touchpoints

## Discovery and Demo

The initial conversation(s) with a customer can vary in length and scope, but always involve discovery, that is uncovering their needs and motivations, and demonstrating product capabilities. This could range from an abbreviated 30-minute intro call with a smaller prospect, or multiple hour-long calls across various stakeholders and teams at an enterprise organization.

### Resources

- [Customer discovery playbook](#customer-discovery)
- [Demo education resources](../onboarding/education.md#trainings-and-demos)

## Technical Design

Early on in the process, we begin to understand the needs of our prospective customers. As we learn about them - their needs, their tech stack, their business, etc. we begin to document both the product and technical requirements and the business context of the deal in Salesforce. A subset of customers, especially those on self-hosted deployments, require the capture of additional information in order to successfully design a Sourcegraph deployment. Those additional artifacts, such as Implementation Discovery Questions, architecture diagrams, and other technical design elements should be stored [here](https://drive.google.com/drive/folders/1o-4rB24vcYsOiUzSEr_vzJsC7pE03yYC). These artifacts should also be linked from within your respective prospective customer [folder](https://drive.google.com/drive/folders/1gjXWQ1l0Fnt2pVS2ohx3w0cw-gaJ_Ez0) by creating a [shortcut](https://support.google.com/drive/answer/9700156?hl=en&co=GENIE.Platform%3DDesktop) in Drive.

For complex engagements, we have internal technical reviews with cross-functional teams (see [technical deal reviews](#technical-deal-reviews) below) that occur before approval to proceed to a trial deployment, to ensure we at Sourcegraph are collectively aligned on their needs and expectations, and so that the customer has the right expectations set and is positioned for success.

### Resources

- [Implementation Discovery Questions Template](https://docs.google.com/spreadsheets/d/1p2sCHDPsZBF5dIs13xaJF0zPc4vIvz0g4NGxOHU2qig/edit#gid=0)

## Customer Trials

Trials are an important and strategic part of our sales cycles because when developers start to use Sourcegraph, they love it and want to use it forever. Seriously! Typically, our trials run for about a month but sometimes longer. Before, during and after, you collaborate closely with your account executive to ensure a successful experience for the customer.

Before the trial, you're working with the AE to scope and plan the trial - both use cases they'll test (which you'll enable them on) and technically how they plan to deploy Sourcegraph for the trial.

CE and AE should use the [Trial and Deployment Planning Template](https://docs.google.com/spreadsheets/d/1mi_540InPEs6_xmCE2gHzw6Vt9QHDx-IdGogQZN6Ezw/edit?usp=sharing) to complete planning activities in advance of trial start. Here's a breakdown of who leads which aspects:

- Documenting their technical landscape (CE-led)
- Trial use cases / metrics for success (CE-led)
- Business value assessment planning (AE-led)
- User survey planning (AE-led)
- Deployment support and checklist (CE-led)
- Technical configuration review (CE-led)
- Trial rollout plan (CE-led)
- Communication and ongoing support (CE-led)

During the trial, CE is enabling and educating the customer on how to use Sourcegraph. CEs orient our activities during the trial against the defined use cases and metrics for success to ensure developers are set up for success. It is the CE's responsibility to deliver the technical win for the trial.

### Resources

- [Trial and Deployment Planning Template](https://docs.google.com/spreadsheets/d/1mi_540InPEs6_xmCE2gHzw6Vt9QHDx-IdGogQZN6Ezw/edit?usp=sharing)
- [Mid-trial check-in Q&A recording](https://chorus.ai/meeting/CEA97B5EA976491E97AED80A2EAE45D5)

## Security Reviews

Often during a customer’s technical validation process for our product, they will have security-related questions about either Sourcegraph or the manner in which Sourcegraph is deployed (Cloud, Managed Instance, Self-Hosted). The process for handling customer security reviews and questionnaires is detailed here: [Responding to Customer Security Reviews](../process/security-reviews.md)

The current CE Security SMEs are [Max Wiederholt](../../../../team/index.md#max-wiederholt) for US West / APAC and [Shawn King](../../../../team/index.md#shawn-king) for US East / EMEA. We occasionally rotate team members in this role.

## License Keys

CEs are the team responsible for generating and maintaining license keys for customers. Here's some useful resources on how to do that:

- [Creating and maintaining license keys for customers](../process/license_keys.md)
- [Recording of creating a new key for demo.sourcegraph.com](https://drive.google.com/file/d/1fYsBqdzdBLd0mzAu2FJxrWznRX0k-iqr/view?usp=sharing)

---

# Playbooks

To enable CEs and ensure consistent practices, our team may produce playbooks from time-to-time. These playbooks should serve as a useful onboarding resource to new CEs and a helpful refresher for CEs as well.

## Customer Discovery

The [customer discovery playbook](https://docs.google.com/document/d/14iSqJBtiM32D1zSVVvtZGZmWVLuQ7S7MoJDM6wAhkyQ/edit) provides CEs with a framework and tools to successfully prepare for and conduct your first meetings with prospective customers (or even new stakeholders within existing customer organizations). These inputs should serve as the prerequisites to any customer demo because it enables you to tailor your content and talk track to what’s most relevant to the customer. It also provides key areas for CEs to consider and specific steps to take to ensure the CE has the correct context and knowledge to properly support a successful customer engagement beyond the initial meetings

---

# Processes

Similar to playbooks, processes exist to ensure consistent practices amongst teams. Processes that the CE team either drives or heavily contributes to are outlined below.

## CE Technical Win Management

CEs are tightly aligned with the sales team and serve as technical experts, providing strategy and guidance to AEs during the sales cycle. Ultimately it is the CE that owns the “technical win” associated with an opportunity. The [CE Technical Win Management Process](../process/tech-win-process.md) outlines expectations around how Customer Engineering tracks and communicates the status of the technical win as part of all sales opportunities.

## Tech Reviews

Tech Reviews are employed in both pre-sales scenarios and post-sales scenarios.

- Tech reviews in pre-sales situations are documented as part of the [CE Technical Win Management Process](../process/tech-win-process.md).
- Tech reviews in post-sales situations are documented as part of the [Customer Success Process](../process/tech-reviews.md).

## Creating Trial Support Tickets

Customer Engineering is responsible for creating tickets on behalf of the customer, tickets should be created when the resolution requires additional troubleshooting.

#### 1. Create Tickets for Trial Customers

> [!NOTE] To create the ticket in Slack use the ❓on the corresponding Slack message or email trialsupport@sourcegraph.com

#### 2. To begin, access the Support Agent in Slack to view the created tickets. Follow these steps:

- Go to Slack and navigate to the Support Agent integration.
- Select the `Home` tab within Support Agent to see the list of incoming tickets under the `Waiting for Help` section.

#### 3. Assigning Tickets

To take ownership of a ticket and determine the appropriate action, follow these steps:

- Locate the ticket you want to handle within the `Waiting for Help` section.
- Click on the three dots `...` next to the ticket and select `Start` to assign the ticket to yourself.

#### 4. Responding to Customers within Slack or Foqal

- Select `View Thread` to respond to the customer within the Slack thread or the Foqal ticket number located on the left to open the Foqal web browser.

#### 5. Handling Chat Status - End Chat

To manage the chat status and effectively organize your workflow, follow these steps:

- When the communication with the customer is complete, go back to Support Agent and choose `End Chat`.

#### 6. Transferring Trial ticket to Support Engineering

In some cases, tickets originating from trial support may require additional guidance from our Support Engineers. In such cases, the Customer Engineering (CE) team should create a post in #discuss-customer-support to request a Support Engineer (SE) to take ownership of the ticket. Once the SE has confirmed, the CE can transfer ticket ownership from themselves to the appropriate Support Engineer (SE).
-To transfer the ticket from Slack, select `...` under the `Home` tab in Support Agent, select transfer, and select the appropriate Support Engineer (SE)

Before transferring a ticket to support please ensure that you include the following information as an internal note:

- Customer details
- Link to the specific issue
- Detailed summary of the issue or question
- Consequences of not taking the desired action
- Any time considerations and their significance
- Any additional relevant information that can assist u

Ways to add these internal notes:

- **Slack:** In Support Agent, under `home` > `Your current chats` > select the dropdown `Options`, and `Add Ticket Notes`

- **Zendesk:** In Zendesk, in the view `Trial Customers`, you can select your existing ticket, `Apply Macro`, select `Customer Support Ticket Request`, and add the internal notes.
