# Customer Engineering Team Culture

CEs interact with most every other team at Sourcegraph. This page details those intersections as well as our team-specific operating procedures.

- [How we intersect other teams](#how-we-intersect-other-teams)
- [Recurring Team Meetings](#recurring-team-meetings)
- [Out of Office / Vacation / PTO Protocols](#ooo-protocols)
- [Relevant Slack Channels](#ce-specific-slack-channels)
- [CE Forward-Looking Vision](#forward-vision)

---

## How we intersect other teams

We work alongside just about every team at Sourcegraph. Here is how we add value to each other and a collaboration overview for each pairing.

### Sales

- **How CE adds value to sales:** CEs are the right-hand team for Sales by serving as technical experts and ultimately owning the technical win. CEs lead product demos, guide customers through trials, lead production deployments, capture customer technical requirements, closely monitor product usage and adoption, and build and nurture technical champions.
- **How sales adds value to CE:** Sales, with their focus on the commercial relationship, introduces CEs to the customer relationship and helps CEs nurture the relationship. Both Sales Development Reps (SDRs) and Account Executives (AEs) share context with CEs prior to introducing them to the customer.
- **Collaboration overview:** AEs and CEs are stably paired together on accounts throughout the customer journey. SDRs, during their prospecting efforts, are able to get support from the CE team via the @ce-sdr-collab slack user group. SDRs should post their question and tag this user group in the #ce slack channel. CEs in this user group are individuals on the CE team that are in their first 120 days; this provides great learning opportunities for the CE team to craft answers and confirm their product understanding; it in turn provides more structure and responsibility for responding to Q&As to help the SDR team be successful.

### Customer Support (CS)

- **How CE adds value to CS:** CE has nuanced context that is valuable to how support works with a customer; CE can also help clarify / remind customers we need information (during regularly scheduled calls) on the more tricky issues.
- **How CS adds value to CE:** CS is the go-to technical team for our CEs. CS resolves issues for customers both pre- and post-sales, allowing CEs to do more proactive work by taking on the reactive technical troubleshooting work when customers experience issues.
- **Collaboration overview:** CEs (or others -- including customers -- but primarily CEs) may engage support at any point during the pre-sales and post-sales customer engagement process. When a customer runs into an issue, the CE will allow support do the heads-down troubleshooting work.
  - CEs may collaborate with application engineers in CS on an issue. For example, if the CE has useful information or background that could be helpful in addressing the issue. Another example would be the CE has a suggested workaround to help alleviate the customer-reported issue. In scenarios such as these, if an application engineer has already been assigned to an issue, the CE should engage with the application engineer directly; to avoid unclear communication to the customer, the CE should directly engage the application engineer rather than joining the customer thread. If the ticket has not yet been assigned, the CE can either let the customer know that the support team will be picking up their request and provide additional information that may be considered useful or the CE should provide the context in the support channel (via the Support Ticket Context shortcut in slack) for when it is picked up by the application engineer. For each request the CE should provide the following information:
    - Customer Name:
    - Link to issue (slack / GH / ZD ticket #):
    - Background information or anything we should know that would be helpful?:
  - CE may also need to share additional context around an issue with the head of support. For example, a CE may need to share special circumstances around a customer issue. In scenarios such as this, the CE should raise a request in the support channel (via the Support Ticket Request shortcut in slack). For each request the CE should provide the following information:
    - Customer Name:
    - Link to issue (Slack / Github issue / ZD ticket #):
    - What’s the ask:
    - Why are we making this ask:
    - What happens if we don’t take this desired action:
    - Is there a time consideration we need to be aware of, if so what is it and why?:
    - Anything else we should know that would be helpful?:

### Software Engineers (SWEs)

- **How CE adds value to SWEs:** CE provides important insights from prospective and current customers which inform and serve as important inputs to Product roadmap.
- **How SWEs adds value to CE:** SWEs create a high quality product and when needed, helps educate CEs on how certain features work so that they can educate customers. SWEs also conduct via planned training sessions, periodic pairing, deep-dives on new features/products, etc.
- **Collaboration overview:** CEs can pose how-to questions and provide feedback via Slack

### Product

- **How CE adds value to product:** CEs provide a data-driven view into customer concerns/questions, ad-hoc feedback shared whilst helping customers, and helps update documentation so customers (and we) have a single source of truth.
- **How product adds value to CE:** Product educates CE on new features and helps clarify expected behavior questions.
- **Collaboration overview:** CEs provide Product with feedback and feature requests; Product seeks inputs from customer through CEs. [More information on working with product](working-with-product.md).

### Marketing

- **How CE adds value to marketing:** CEs help ensure marketing material is relevant and valuable to engineers and engineering leaders.
- **How marketing adds value to CE:** Marketing provides self-service avenues for our customers to learn and help each other learn (community, developer education).
- **Collaboration overview:** Marketing will seek customer input (surveys, feedback, case studies, etc) via CEs

## Recurring Team Meetings

- CE team meeting (bi-weekly on Wednesdays): Global team sync; open team discussion about any topics
- Demo workshop (bi-weekly on Wednesdays): A space for the CE team to collaborate on demos, scripts, and other ideas / needs that will help us serve our customers better
- CE team hangout (monthly on Thursdays): An open forum to ask questions, collaborate, and chat as a team.
- Product & CE Requests & Feedback Themes (bi-weekly on Wednesdays): Feedback treads and requests between CE and Product.
- CE <> Sales Office Hours (bi-weekly on Tuesdays): An open forum to discuss topics and answer questions from the sales team.
- CE project planning and review (bi-weekly on Fridays): meeting for CEs to collaborate on internal projects

## OOO Protocols

Prior to taking time off, CEs should:

1. [Log time off request in Roots PTO](../benefits-pay-perks/benefits-perks/time-off/submitting-time-off.md)
1. Log time off on the CE team google calendar
1. Work with their manager to create a coverage plan
1. Notify their customers through the appropriate channel of their upcoming OOO
1. Update their slack status accordingly with OOO dates indicated

## CE-Specific Slack Channels

| Slack Channel     | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| #ce-internal      | Internal channel the CE team to touch base with each other.    |
| #ce               | External channel for other teams to ask CEs a question.        |
| #customer-support | Where support collaborates with everyone outside of support.   |
| #ask-product-eng  | Where CEs can ask product and Eng questions about Sourcegraph. |
| #feedback         | Where CEs can share customer feedback with product.            |

## Forward Vision

### Current State

Today, our CE team exists as a combined pre-sales and post-sales customer-centric organization. We are first and foremost responsible for building and fostering relationships with developer users and champions at our prospects and customers; we serve as the technical experts during the sales cycle and help enable our customers throughout our journey together. We do this via a single-account-specific scope of work, meaning the vast majority of how a CE’s time is spent, is focused specifically on one of their many accounts to which they are assigned.

##### How we serve our customers

We come to deeply know and understand our customers and their needs; we enable them and guide them through our technical and product expertise. We teach our customers new and better ways to get value from Sourcegraph as thought leaders and evangelists by hosting product demos and webinars, and focusing on product usage and adoption.

##### How we serve our business

We serve as the voice of the customer to internal teams: we provide Product / Engineering with a data-driven view into customer questions, ad hoc feedback, and raising feature requests which serve as inputs to the roadmap; we provide marketing with critical information and inputs; we provide Sales with account-focused support and technical leadership at all points of the customer journey; we provide Customer Support with customer context necessary to resolve their issues.

#### Current Needs

The list of things we could be doing is endless; as is the list of things we’d like to do if we had the time and space to do them.

In the current model, CEs aren't able to work on valuable projects that help many accounts (eg, building custom extensions or batch changes for prospects/customers, writing materials to help our champions grow usage internally, etc, etc) because assigned accounts take up all of our time and focus. As we acquire more customers, it is even more valuable to be able to work on projects that help many accounts at once.

In the current model, the CE team can't easily "surge" to provide a lot of help to a single customer or in a single area, because every CE is already near capacity (20-30 assigned accounts per CE). As we encounter more complex customers and expand our use cases, the peak workload of even a single account will often exceed what a CE can provide even today.

In the current model and in our current state, a customer paying us $1,800 a year may receive the same (or worse, more) time and attention than a customer paying us more than $200,000 a year. We believe that the ~80% of customers that are not "strategic" and their needs are better served by our team working on projects that indirectly help them (along with other teams, such as Customer Support) versus having only an assigned (but overloaded) CE to directly help them.

#### Opportunities & Benefits

Acknowledging that the above needs are important for our customers and our business, we believe that against all of the different teams that could work towards addressing these needs, CEs are uniquely positioned to be the best ones to do so. As such, we believe there exists an opportunity for CE -- a team that sits adjacent to so many different functions (Product, Engineering, Support, Marketing, Sales, Operations) internally and interfaces most deeply with our customers -- to expand our footprint and positively impact our customers and our business. A primary intention for accomplishing this is by enabling cross-account, project-based work.

We believe that this is the exact moment in our journey to take such a risk and we bet that if we carve out focus and space, we will achieve the following benefits: matured capabilities (eg, demos, trials, data-driven customer health measurement and analysis, documentation, etc), increased footprint (eg, strategic account growth, dev community advocacy and outreach, building customer-centric solutions to expand Sourcegraph, etc), and internal opportunities for CE growth and advancement (eg, strategic focus, PM-type work, Eng-type build work, etc).

### Future Vision

We envision our CE team being able to continue building and fostering relationships with developer users and champions at our prospects and customers, continue serving as the technical experts during the sales cycle and helping enable our customers throughout our journey together (from the very first meeting and every subsequent meeting thereafter), while being able to impact and deliver cross-functional, cross-customer projects and establish a new strategic customer focus.

##### What we mean by cross-functional, cross-customer projects

Project-based work falls into two categories:

1. internal projects partnering with cross-functional stakeholders on relevant teams to create collateral, tools, and / or content that will benefit our teams and our customers
1. external projects specific to one or more customer-stated needs that either solve a problem or help our champions grow usage internally

Some ideas of sample projects have been described above, restated they are: creating great demo videos and scripts, building custom extensions or batch changes for prospects/customers, writing materials to help our champions grow usage internally, improving documentation, analyzing telemetry to measure customer health and propose growth tactics, blogging about customer use cases, etc.

##### What we mean by strategic focus

Today, we have customers that contribute a significant amount of revenue, have significant growth / expansion potential, and have significant strategic value (eg, a new or specialized vertical). These accounts, the additional opportunities within them, and the complexity deserve a more holistic and more intimate focus in terms of account management post-sale. To achieve this means a subset of CEs working more closely with a smaller number of customers to be able to appropriately nurture each account. In our ideal state, we should be engaging with these customers at minimum every other week be it hosting a training session or webinar or delivering them with content (videos, articles, etc) for their own internal knowledge bases.

#### How we get there

As we lay out the framework for being able to make some of these pivots, we must be thoughtful of the impact to other parts of the company and we must ensure we are always doing right by our customers.

CE guiding principles remain unchanged: we will continue to work across both pre- and post-sales activities and are laser focused on our customers being able to use Sourcegraph well.

##### Strategic Focus

A subset of the CE team will assume a strategic account focus; these individuals will not be removed from any existing opportunities that they are supporting. CE leadership is accountable for providing a plan (timing and activities) to Sales leadership with a recommendation to realign any impacted accounts from CE perspective only. No accounts with active opportunities, renewals, or expansion opportunities will be impacted or disrupted. This is expected to be complete and in place by the end of Q2.

##### Project-based Focus

CEs have already begun and delivered on several important internal project work (customer-facing demo recordings, use-case based demo scripts, customer-facing deployment guides). All CEs, based on their existing work load and customer needs, have opportunities to contribute and lead projects. This is why 1-2 week sprints are critical framing for project work (more below). CE leadership will compile from cross-functional teams an initial set of projects and define each project against the templated criteria below. CEs, based on their availability, will be assigned to lead individual projects and work with the applicable stakeholders to get inputs, reviews / approvals, etc.

As we continue CE hiring and onboarding in Q2 and beyond, and as we assess both the needs and impact of this project work for our teams and our customers, we will gauge whether there exists enough need to have CEs be exclusively dedicated to project work in the future.

For CEs to be able to execute on these critically important areas will require availability and focus. As such, this exercise has brought to light the need to clarify and/or realign some specific areas to other parts of the company.

#### Teams with whom we have aligned

Product:

- For NPS feedback, PMs should review and follow up. For our strategic accounts, Product will work with the AE and the CE to address any feedback and participate in weekly product roadmap reviews or monthly feedback theme reviews.
  - In parallel, as an example potential project, it may make sense to prioritize a CE project to expose product roadmap updates (via Productboard) and account feedback to all site admins.
- For beta recruitment/participation, PMs would check with AEs for advice and AEs can always tag CEs for perspective.

Marketing:

- The marketing team would check with the AE on the account first as it relates to requests for information or identifying users for things like CAB and user stories. The AE can always tag CEs for perspective.

Customer Support:

- On non-strategic accounts, for deployment and upgrade support as well as debugging, Customer Support will handle. For anything licensing or commercial-related the AE will handle. One can always ask the CE team for on-the-fly advice. General how-to’s and feedback sent in Slack will be handled by the CE team for the time being, until Customer Support hires and ramps 2 additional application engineers. Once in place and onboarded for one month, CE will transition how-to and feedback responsibilities to CS (estimated to happen by the end of July).
  - In parallel, it may make sense to prioritize a CE project to improve the set of materials that customers and our team can refer to, thereby answering more customer questions without them needing to ask us, and making it easier for our team to help customers.
- A customer with a private Slack channel is likely viewed as strategic; as such these will have specific focus and nurture from the CE team.

Sales:

- A customer engineer should be available to attend any / every call with a customer or prospect, as necessary.
- AEs should drive renewal activities from a commercial aspect, with CEs contributing.
- AEs should drive the process around a customer trial - advancing the sales cycle towards a trial - and pull in CEs as appropriate (CEs will contribute heavily, but AEs run the process as part of the overall sales process).

#### How we conduct project work

Our goal is to be able to complete specific projects in no greater than 2 week increments (ideally 1 week), with project review and prioritization happening on a weekly basis. We will use tooling (eg, Asana, Jira, etc) to capture, maintain, and track priority and progress in a transparent manner. Because this project work will be a mix of both internally defined and identified projects (eg, documentation updates, demo videos, scripts) and externally raised customer projects (eg, batch changes, custom extensions, etc) during sprint review the participating individuals (CE leaders, cross-functional teams (AEs, Product, Eng, Support, etc), CEs) will review requests and collectively agree on prioritization for the sprint ahead.

For each project, we will define:

1. The objectives and expected outcomes of the project (what is it solving or creating)
1. The scope of the project (define the bounds of what we will and will not do)
1. Impact of the project (to help gauge prioritization how impactful will the output of this project be to our teams and our customers, perhaps 1 = widespread impact internally and externally, 2 = widespread impact EITHER internally OR externally, 3 = specific impact externally, 4 = specific impact internally)
1. Project stakeholders - both those that need to provide input into the objectives and scope and also provide feedback on the finished product. Defined stakeholders are individuals or teams that will either directly utilize the output of the project (in which they will be part of roll out, as applicable) or have direct context with the subject matter. They are not expected to actively contribute to the project itself.
1. Project Owner - we will have one individual assigned as the owner of a project; it is their responsibility to define and collect necessary inputs for the project. They are ultimately accountable for the project being completed.
1. Project Lead(s) - these are the individuals that are leading the effort to deliver the project. Note: the project owner may also be a project lead, or there may be different people identified depending on the project.
1. Roll-out plan (how will we deploy / publish or make known / available the output of the project, where will the output go when finished, what is the communication plan).
1. Support plan (as applicable) for any code that is built as part of a project, Eng, Support, and Product leadership must sign-off on the ongoing support plan for any deliverable, even if the support plan is that we will not be providing any support and the customer will. See note below.

A note on supporting and maintaining any CE-built code or scripts:

If a CE authors a Sourcegraph extension then initially CE are the ones that support that extension. A customer may desire for CE to build the initial version of an extension, but the customer agrees to own the ultimate extension by maintaining and hosting the code. This will be outlined in the support plan as part of the project definition, before the project commences.

Should product feedback / requests be identified as part of this project work, such as changes needed to our extension API or batch changes product to support use cases, then CE will raise that to product following the normal process.

If a CE-authored extension goes beyond the scope of a CE’s ability to maintain it and we need official product/eng support for an extension, then CE leadership will raise that request to Eng and Product leadership for consideration. This request and approval is required before the project is initiated.
