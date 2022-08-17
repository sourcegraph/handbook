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
- [Team Meeting Norms](team/team-meeting-norms.md)
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

Our default contractual service level agreements (SLAs) are described below. The SLAs apply to generally available products and exclude [beta and experimental features](https://docs.sourcegraph.com/admin/beta_and_experimental_features). SLA response times are the time frames in which you can expect an initial response. Our team will make a best effort to resolve all issues as quickly as possible. However, please note that the SLA times are not to be considered as an expected time-to-resolution.

#### The following applies to both cloud (managed instance) and on-premise/self-hosted Sourcegraph customers:

While Sourcegraph will strive to respond as soon as possible to every issue, we will be responsible for upholding the SLAs below Monday through Friday.

| Severity Level | Description                                                                                                                                          | Response time                                          | Support Availability   |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------- |
| 0              | Emergency: total loss of service or security-related issue (includes POCs)                                                                           | Within 2 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 1              | Severe impact: service significantly limited for 60%+ of users; core features are unavailable or extremely slowed down with no acceptable workaround | Within 4 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 2              | Medium impact: core features are unavailable or somewhat slowed; workaround exists                                                                   | Within 8 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 3              | Minimal impact: questions or clarifications around features, documentation, or deployments                                                           | Within 2 business days of becoming aware of the issue  | 24x5 (Monday - Friday) |

**Note:** premium support / enhanced SLAs will be available in the future

**Note for Cloud (Managed Instance) customers:** We will use commercially reasonable efforts to ensure downtimes lasts no longer than 2 hours. In aggregate, Sourcegraph will use commercially reasonable efforts to maintain availability of 99.5% uptime.

#### Sev 0 - Emergency Support Scope

What constitues a Sev 0 - Emergency:

- Instance is completely down, unavailable or unresponsive for all users
- Web UI showing 4xx or 5xx errors on every page
- All users are unable to login
- A security related incident that poses risk / exposure

What is not a Sev 0 - Emergency:

- A single user is unable to login
- Performance is slower than usual
- Partial or delayed repository sync

#### For customers with custom support agreements:

Enterprise Plus and Elite customers should refer to their contracts if they have custom service-level agreements.

## Support on-call

OpsGenie on-call protocol alerts a CS leader at any time, too: use the Slack command: `/genie alert [alert message] for customer-support` ... and this will trigger a page to a member of the leadership team, any time, any day.
