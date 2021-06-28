# Customer Support

## Our ethos

Customer Support at Sourcegraph exists to resolve technical issues and answer technical/product questions in a way that feels (reasonably) effortless for our customers. Support is the go-to technical team for the Customer Engineering team, helping customers both pre- and post-sales.

We show up for our customers, open source users, and teammates by living up to our Sourcegraph values and handbook, as well as these additional guiding principles …

- Focusing on the impact we might have and aligning our decisions and actions to the impact we desire
- Seeking/providing context so the why is clear
- Demonstrating profound compassion for the people with whom our paths cross and the problems/questions we help them solve, meeting them where they are
- Only asking our customers and teammates things we can’t do or answer ourselves
- Persistently working toward and/or seeking resolution that works equally for our customers and us (see [an open letter about root cause](root-cause.md) for inspiration)
- Staying at least a step ahead (summarizing current status, giving clear next steps, and setting expectations in every communication)
- Being flexible and open, maintaining a first principles thinking approach, and always confronting and growing past our biases
- Outgrowing ourselves, the way we work, and continuously improving

Keeping our reason for existence and guiding principles in mind in all of our work and interactions, we ensure consistent outcomes, allowing each member of the team to have space and creativity to get there in different ways and learn from each other. When it is important that we do things consistently, we make sure to maintain our support section of the handbook. When we have knowledge to share, we ensure it’s reflected in [our official documentation](https://docs.sourcegraph.com/) so that customers have a single source of truth.

For additional context, check out [RFC 274](https://docs.google.com/document/d/1eLJmEVoD4H2s18gw65OCKSEX7ZQiG38FU_jU3UsrBKY/edit#), the starting vision for CS at Sourcegraph.

## The team
- [Adeola Akinsiku](../company/team/index.md#adeola-akinsiku)
- [Warren Gifford](../company/team/index.md#warren-gifford-he-him)
- [Stompy Mwendwa](../company/team/index.md#stompy-mwendwa)
- [Giselle Northy](../company/team/index.md#giselle-northy-she-her)
- [Beatrix Woo](../company/team/index.md#beatrix-woo-she-her)
- [Carl Hicks](../company/team/index.md#carl-hicks-he-him)
- [Gabe Torres](../company/team/index.md#team#gabe-torres-he-him)
- [Virginia Ulrich](../company/team/index.md#virginia-ulrich-she-her) (Head of Customer Support - reporting to Beyang, CTO)

More details about each team member in [our team READMEs](support-bios.md).

## We know that we are successful when we …

* **Meet SLA (service level agreement) response 100% of the time.** Meeting SLA response requires a thoughtful first response that summarizes the troubleshooting the support engineer has already done, as well as next steps. A response of “we are on it” would not be sufficient for us to count as successfully meeting SLA. If we are staffed correctly and have reasonable SLAs, it should be possible to always meet our SLA response expectations. Performance available in [the Customer Support dashboard in Looker](https://sourcegraph.looker.com/dashboards-next/177).
* **Meet SLA (service level agreement) resolution 95% of the time.** While it’s possible to always meet our SLA response expectations, we will need to allow ourselves reasonable grace with our target for SLA resolution. This grace accounts for using commercially reasonable efforts to provide a resolution or workaround. Performance available in [the Customer Support dashboard in Looker](https://sourcegraph.looker.com/dashboards-next/177).
* **No more than 10% of cases result in a request for help from engineering per month.** Requests for help are questions about how something works and/or troubleshooting assistance. This does not include defects or feature improvement requests. 10% may be the wrong target, but it’s a start and no matter what, the target will reflect the intention that the support team will strive to be as self-sufficient as possible. Performance available in summary updates (currently manually tallied).
* **We complete any [FY22 OKRs](https://docs.google.com/document/d/18d3sX38O6ephNuoHqZT9BwU1m1_FGuRfsTwYbc8lMV8/edit#heading=h.obnaanj0svtb) (or quarterly) assigned to our team.**
	* [FY22Q2 OKR plan](FY22Q2-OKR-Plan.md)


In addition to these top level key performance indicators (KPIs), we will have several more to help us uncover any team health issues as quickly as possible and look at any interesting trends that could result in product, practice, and/or staffing improvements. For example:

* Total case volume
* Type of case (how-to question, defect, product improvement)
* Percent of issues/questions by product/feature
* Average number of cases per customer
* Volume of cases by each customer
* Volume of cases incoming during US hours, Europe hours, etc


## How we intersect with other teams
We are a [customer-first company](../company/customer-first.md). We work alongside just about every team. Here is how we add value to each other and a collaboration overview for each pairing.

### Customer Engineers (CEs)
- **How support adds value to CE:** Support helps customers both pre- and post-sales, and allowing CEs to do more proactive work by taking on the reactive technical troubleshooting work when customers experience issues.
- **How CE adds value to support:** CE has nuanced context that is valuable to how support works with a customer; CE can also help clarify / remind customers we need information (during regularly scheduled calls) on the more tricky issues.
- **Collaboration overview:** We can think of CE and support as work best friends, working closely together every day, primarily communicating in Slack. CEs (or others -- including customers -- but primarily CEs) may engage support at any point during the pre-sales and post-sales process to share context to help support best serve our customers.

### Software Engineers (SWEs)
- **How support adds value to SWEs:** Support handles the majority of customer issues, reducing the amount of time engineering has to be reactive and providing a more data-driven view into the source of recurring issues/questions; support also handles the majority of internal and external communication during a critical p0 incident (letting engineering stay focused on solving the issue).
- **How SWEs adds value to support:** SWEs create a high quality product and when needed, helps support when they get stuck (this should be more rare than frequent), and helps uplevel support via planned training sessions, periodic pairing, deep-dives on new features/products, etc.
- **Collaboration overview:** Whether a defect or a question, all interactions with engineering initiated by support will start by filing a GitHub issue, making it easier to track trends and follow-up.

### Product
- **How support adds value to product:** Support provides a data-driven view into the source of recurring issues/questions, ad-hoc feedback shared whilst helping customers, and helps update documentation so customers (and we) have a single source of truth.
- **How product adds value to support:** Product educates support on new features and helps clarify expected behavior questions.
- **Collaboration overview:** TBD where support will ask product for help clarifying expected behavior (GitHub, an existing Slack channel, etc) and how to best collaborate on documentation.

### Marketing
- **How support adds value to marketing:** Support helps ensure that when developers think of Sourcegraph, they associate it with quality and responsiveness.
- **How marketing adds value to support:** Marketing provides self-service avenues for our customers to learn and help each other learn (community, developer education).
- **Collaboration overview:** When a customer engages on a social platform and marketing feels it's best for support to engage, they will push that conversation into Zendesk via an integration and we will then coordinate with them to help.

### Sales
- **How support adds value to sales:** Support helps ensure (via collaboration with CE) that technical issues/questions are not a blocker to sales conversations.
- **How sales adds value to support:** Sales, like CE, has nuanced context that is valuable to how support works with a customer.
- **Collaboration overview:** Mostly via the CE bringing in support.

### Operations
- **How support adds value to operations:** Support delivers on SLA to inform whether our promised SLAs in contracts are accurate and also provides a general data set that can help us see a more full picture about customer health and team performance. Support is a team that is built to hire folks who may need some on-the-job training (either technical or customer service), allowing us to build relationships with universities, code academies, etc.
- **How operations adds value to support:** Operations provides the foundation of everything. They also provide data from multiple sources to help support see the most nuanced view to make thoughtful priority decisions.
- **How we collaborate:** Ad-hoc based on hiring, onboarding, and data needs.



## Our practices (how we work)

Letting customers talk to us where they prefer and streamlining our workflow must also be balanced with other elements of the customer experience. Handoffs cause frustration more than any other aspect of trying to get help. How we work accounts for this. It also accounts for continually positioning our CEs as trusted and reliable partners who need time to think about customers proactively.

We rely mostly on our ethos to inform our decisions and actions, allowing for the team to be creative and innovate. The practices we write down represent the things that need to be done the same way, every time, by every person on the team. Or, the things we absolutely don't want to lose, forget, need to refer back to. As a general rule, this should always be a very small list.

* [Onboarding](customer-support-onboarding.md)
* [Team README](support-bios.md)
* [Team schedule](support-schedule.md)
* [Team rituals](support-team-rituals.md)
* [Workflow](support-workflow.md)
* [Prioritization](support-prioritization.md)
* [Customer exceptions](customer-exceptions.md)
* [Engaging other teams](engaging-other-teams.md)
* [P0 incident response](p0-Incident-Response.md)
* [Triaging](customer-support-triaging.md)
* [Enablement](support-enablement.md)
* [Tools](support-tools.md)



## SLAs

To honor our service level agreements (SLAs), we strive to maintain the response and resolution times below.

#### For customers with on-premises/self-hosted Sourcegraph instances:

While Sourcegraph will strive to respond as soon as possible to every issue, we will be responsible for upholding the SLAs below during working hours (9:00a.m. to 5:00p.m.) Pacific Time, Monday through Friday.

||Description|Response time|Resolution time|
|---|---|---|---|
|Severity 1|Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment.|Within 24 hours of becoming aware of the issue|Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.|
|Severity 2|Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.|Within one business week of becoming aware of the issue|When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update.|

#### For customers with managed instances:

||Description|Response time|Resolution time|
|---|---|---|---|
|Severity 1|Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment.|Within 24 hours of becoming aware of the issue|Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.|
|Severity 2|Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.|Within one business week of becoming aware of the issue|When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update.|

We will work with the customer to schedule maintenance downtime at least 24 hours in advance, and will use commercially reasonable efforts to ensure downtimes lasts no longer than 2 hours. In aggregate, Sourcegraph will use commercially reasonable efforts to maintain availability of 99.5% uptime.

#### For customers with custom support agreements:

Enterprise Plus and Elite customers should refer to their contracts if they have custom service-level agreements.
