# Customer Engineering: Working with Customers

A CE, being the pre-sales technical sales engineer, works with prospective customers in a number of different ways. This page captures high-level descriptions of the ways in which we work with or on behalf of our prospective customers. Each section contains links to some supporting documents, templates, processes, playbooks, and recordings.

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
  - [Creating Tickets -Trial Support](#creating-support-tickets-during-trials)
  - [Pre-to-Post Sales Handoff](#pre-to-post-sales-handoff)

---

# Pre-Sales Customer Touchpoints

## Discovery and Demo

The initial conversation(s) with a prospective customer can vary in length and scope, but always involves discovery. That is, uncovering their needs and motivations, and demonstrating product capabilities. This could range from an abbreviated 30-minute intro call with a smaller prospect, or multiple hour-long calls across various stakeholders and teams at an enterprise organization.

### Resources

- [Customer discovery playbook](#customer-discovery)
- [First Call Playbook training](https://docs.google.com/presentation/d/11xnb8kU8al0nu5swyprfUqFQs88CU1wDYLy65uimZBs/edit#slide=id.g260d5c6e87d_0_0)
- [First Call deck](https://docs.google.com/presentation/d/11Nz_PCy-RP5uPExtao9Hx-UM1-EykHdaft66sH6BTcs/edit#slide=id.g28295ca06f6_0_323)
- [First Demo Script](https://docs.google.com/document/d/107vpU01GNuoW64iSOEMYE5iFsusiDPbk2uqB3VQCWjE/edit#heading=h.dmholmrckdap)

## Technical Qualification

Early on in the process, we begin to understand the needs of our prospective customers. As we learn about them - their needs, their tech stack, their business, etc. we capture technical details on the Salesforce opportunity.

If a CE encounters a non-standard deal - that is, the requirements extend beyond our known scale or compatibility - the CE should document those risks on the opportunity and raise with leadership for review.

For complex requirements, CEs should be on the lookout for opportunities to position Professional Services to help ensure successful outcomes.

### Resources

- [Implementation Discovery Questions Template](https://docs.google.com/spreadsheets/d/1p2sCHDPsZBF5dIs13xaJF0zPc4vIvz0g4NGxOHU2qig/edit#gid=0)

## Customer Trials

Trials are an important and strategic part of our sales cycles because when developers start to use Sourcegraph, they love it and want to use it forever. Seriously! Ideally, our trials do not run longer than 30 days - 21 days ideally. Before, during and after, you collaborate closely with your account executive to ensure a successful experience for the customer.

Before the trial, you're working with the AE to scope and plan the trial - both use cases they'll test (which you'll enable them on) and technically how they plan to deploy Sourcegraph for the trial.

CE and AE should use the [Joint Success Plan template](https://docs.google.com/spreadsheets/d/10nXs7INmzvKxGb5xPOTju8yxnkQXcBc3SEYdu20xFtM/edit#gid=1991584268) to complete planning activities in advance of trial start. Here's a breakdown of who leads which aspects:

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

Often before or during a customer’s technical trial, they will have security-related questions about either Sourcegraph or the manner in which Sourcegraph is deployed (Cloud, Managed Instance, Self-Hosted). The process for handling customer security reviews and questionnaires is detailed here: [Responding to Customer Security Reviews](../process/security-reviews.md). Many of the answers can be found on [Safebase](https://app.safebase.io/portal) which prospective users can directly request access to.

## License Keys

CEs are the team responsible for generating license keys for prospective customers. Here's some useful resources on how to do that:

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

## Creating Support Tickets during Trials

CE is responsible for creating tickets on behalf of prospective customers via support@sourcegraph.com. Tickets should be created when the resolution requires additional troubleshooting.

## Pre-to-Post Sales Handoff

A critical last step in the sales process is to hand off the opportunity to the Technical Advisory (post-sales) team. It's important so that we transfer important context about the deal (goals, needs, expectations, etc) and contacts so that the TA team is able to effectively take the relationship forward.

The overall process is captured [here](../../ta/enterprise-success/team-culture/processes.md#post-sales-handoff). It's most important that CE knows the process is slightly different depending on the [customer segmentation](../../ta/index.md#customer-segmentation) and whether they will be managed by a named, dedicated TA or part of our digital, scaled success program.

Need-to-know's for all accounts:

- CE handles the production license for any net new business opportunity or expansion.
- If a separate production cloud instance is required, CE handles the creation request

For a named TA account:

- CEs are expected to participate in a formal knowledge transfer / hand-off with the TA before the deal closes
  - CE should collect relevant information (doc links, channels, etc.) to make for a productive session
- CE should participate in the post-sales kick-off call; after that, CE should roll off of the account until / unless there is an active expansion opportunity.

Need-to-know's for a digital & scaled success accounts:

- CE, as part of hand-off, should map the appropriate roles on the contacts in Salesforce. See role definitions [here, step 7](../../ta/enterprise-success/team-culture/processes.md#process-overview).
