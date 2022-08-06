# Customer Support

Customer Support at Sourcegraph exists to resolve technical issues and answer technical/product questions for our customers (pre-sales and post-sales), open source users, and teammeates.

### Our guiding principles:

- Demonstrating profound compassion for the people with whom our paths cross and the problems/questions we help them solve, meeting them where they are
- Persistently working toward and/or seeking resolution that works equally for our customers and us (see [an open letter about root cause](process/enablement/root-cause.md) for inspiration)
- Staying at least a step ahead (summarizing current status, giving clear next steps, and setting expectations in every communication) (see [an open letter about staying a step ahead](process/enablement/step-ahead.md))
- Being flexible and open, maintaining a first principles thinking approach, and always confronting and growing past our biases
- Outgrowing ourselves, the way we work, and continuously improving
- Share our learnings through [our official documentation](https://docs.sourcegraph.com/) so that customers have a single source of truth

## We know that we are successful when we...

- **Deliver our customers with an exceptional customer experience.** Customer Satisfaction (CSAT) is the most important measurement of our success. Questions and issues will always arise - the experience that we provide to our customers in those moments is our ultimate north star.
- **Meet SLA (service level agreement) response 100% of the time.** Meeting SLA response requires a thoughtful first response that summarizes the troubleshooting the support engineer has already done, as well as next steps. A response of “we are on it” would not be sufficient for us to count as successfully meeting SLA. If we are staffed correctly and have reasonable SLAs, it should be possible to always meet our SLA response expectations.

## Our practices (how we work)

Letting customers talk to us where they prefer and streamlining our workflow must also be balanced with other elements of the customer experience. Handoffs cause frustration more than any other aspect of trying to get help. How we work accounts for this. It also accounts for continually positioning our CEs as trusted and reliable partners who need time to think about customers proactively.


- [Application engineer onboarding](onboarding/customer-support-onboarding.md)
- [Manager onboarding](onboarding/customer-support-manager-onboarding.md)
- [Career growth](career-growth/index.md)
- [Team README](team/index.md)
- [Team schedule](process/support-schedule.md)
- [Organizational structure](team/support-org-structure.md)
- [Team rituals](team-culture/index.md)
- [Workflow](process/support-workflow.md)
- [Prioritization](process/support-prioritization.md)
- [Customer exceptions](process/customer-exceptions.md)
- [Engaging other teams](process/engaging-other-teams.md)
- [Serving as messenger during incidents](process/serving-as-a-messenger-during-incidents.md)
- [Triaging](process/customer-support-triaging.md)
- [Support capacity levels and contingencies](process/support-capacity-levels-and-contingencies.md)
- [Case reviews](process/case-reviews.md)
- [Enablement](process/enablement/index.md)
- [Tools](tools/index.md)
- [Assigned application engineers](team/assigned-app-eng.md)
- [Permanently deleting user data](process/permanently_deleting_user_data.md)
- [Removing repositories from cloud](process/removing-repositores-from-cloud.md)
- [Business continuity](process/business-continuity-plan.md)
- [Cloud Maintenance Window Process](process/cloud-maintenance-window.md)
- [Change Management Checklist](process/change-management-checklist.md)
- [FAQ for CEs](process/ce-faq.md)

## SLAs

Our default contractual service level agreements (SLAs) are described below. The SLAs apply to generally available products and exclude [beta and experimental features](https://docs.sourcegraph.com/admin/beta_and_experimental_features). Additionally, we have the following internal SLAs:

- We aim to respond to all customers on all issues within 1 hour between 9:00–0:00 UTC (2am–5pm PT) Monday-Friday (priority given to customers in our pre-sales process)
- We aim to resolve all issues within an average of no more than one week.

#### For customers with on-premises/self-hosted Sourcegraph instances:

While Sourcegraph will strive to respond as soon as possible to every issue, we will be responsible for upholding the SLAs below during working hours (9:00a.m. to 5:00p.m.) Pacific Time, Monday through Friday.

|            | Description                                                                                                                                | Response time                                           | Resolution time                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Severity 1 | Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment. | Within 24 hours of becoming aware of the issue          | Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.                |
| Severity 2 | Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.         | Within one business week of becoming aware of the issue | When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update. |

#### For customers with managed instances:

|            | Description                                                                                                                                | Response time                                           | Resolution time                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Severity 1 | Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment. | Within 24 hours of becoming aware of the issue          | Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.                |
| Severity 2 | Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.         | Within one business week of becoming aware of the issue | When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update. |

We will work with the customer to schedule maintenance downtime at least 24 hours in advance, and will use commercially reasonable efforts to ensure downtimes lasts no longer than 2 hours. In aggregate, Sourcegraph will use commercially reasonable efforts to maintain availability of 99.5% uptime.

#### For cloud saas customers:

|            | Description                                                                                                                                | Response time                                           | Resolution time                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Severity 1 | Any error reported where usage of Sourcegraph is severely impacted, and causes a high impact to the business, in a production environment. | Within 24 hours of becoming aware of the issue          | Within 72 hours, using commercially reasonable efforts to provide a resolution or workaround.                |
| Severity 2 | Any error reported that involves partial, non-critical loss of use, or any general usage questions, feature requests, and similar.         | Within one business week of becoming aware of the issue | When complete, using commercially reasonable efforts to provide a resolution, workaround, or product update. |

We will use commercially reasonable efforts to ensure downtimes lasts no longer than 2 hours. In aggregate, Sourcegraph will use commercially reasonable efforts to maintain availability of 99.5% uptime.

#### For customers with custom support agreements:

Enterprise Plus and Elite customers should refer to their contracts if they have custom service-level agreements.

## Support on-call

Our contractual SLAs do not require support to be available 24x7, but we strive to make sure our customers have what they need when they need it. Via proper staffing (hiring folks whose working hours align with our needs), we will eventually move to 24x5 over the course of FY23, possibly into FY24. We will assess quarterly whether we need to move to a 24x7 schedule. In the meantime, our [team schedule](process/support-schedule.md) shows when we have folks online and the OpsGenie on-call protocol can alert a CS leader at any time, too: use the Slack command: `/genie alert [alert message] for customer-support` ... and this will trigger a page to a member of the leadership team, any time, any day.
