# Support Engineering

Supporting Engineering at Sourcegraph is responsible for answering technical & product questions and solving technical issues & problems that our customers, open source users, and teammates encounter. We improve our customers' experience by making our documentation better and more self-service and we contribute code in order to make our product better.

## Our Team Purpose Statement

Aid the technical success of our customers by resolving their problems and making our product and their experience better

## Team KPIs / Measures of Success

- Customer Satisfaction (CSAT)
- SLA Achievement (Time to First Response)

### Customer Satisfaction (CSAT)

We want to deliver our customers with an exceptional customer experience. Customer Satisfaction (CSAT) is the most important measurement of our success. Questions and issues will always arise - the experience that we provide to our customers in those moments is our ultimate north star.

### SLA Achievement (Time to First Response)

Our main SLA (service level agreement) on tickets is time to first response (TTFR). We aim to meet this 95% of the time. Meeting the SLA requires a thoughtful first response that summarizes the troubleshooting the support engineer has already done or will do, as well as next steps. A response of “we are on it” is not be sufficient for us to count as successfully meeting SLA.

## Our guiding principles:

- Persistently working toward and/or seeking resolution that works equally for our customers and us
- Staying at least a step ahead (summarizing current status, giving clear next steps, and setting expectations in every communication)
- Being flexible and open, maintaining a first principles thinking approach, and always confronting and growing past our biases
- Outgrowing ourselves, the way we work, and continuously improving
- Sharing our learnings through [our official documentation](https://docs.sourcegraph.com/) so that customers have a single source of truth

## Team Reference Resources

### Team Culture & Norms

- [Team Processes & Workflows](process/index.md)
- [Team rituals](team-culture/index.md)
- [Team schedule](process/support-schedule.md)

### Internal Team Resources

- [New Team Member Onboarding](onboarding/index.md)
- [Career Development](career-growth/index.md)
- [Educational Materials](process/enablement/index.md)

### External Team Resources

- [How we work with other teams](process/engaging-other-teams.md)
- [Assigned support engineers](team/assigned-app-eng.md)
- [Team README](team/index.md)
- [Business continuity](process/business-continuity-plan.md)

## SLAs

Our default contractual service level agreements (SLAs) are described below. The SLAs apply to generally available products and exclude [beta and experimental features](https://docs.sourcegraph.com/admin/beta_and_experimental_features). SLA response times are the time frames in which you can expect an initial response. Our team will make a best effort to resolve all issues as quickly as possible. However, please note that the SLA times are not to be considered as an expected time-to-resolution.

### The following applies to both cloud (managed instance) and on-premise/self-hosted Sourcegraph customers:

While Sourcegraph will strive to respond as soon as possible to every issue, we will be responsible for upholding the SLAs below Monday through Friday.

For Enteprise plans:

| Severity Level | Description                                                                                                                                          | Response time                                          | Support Availability   |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------- |
| 0              | Emergency: total loss of service or security-related issue (includes POCs)                                                                           | Within 2 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 1              | Severe impact: service significantly limited for 60%+ of users; core features are unavailable or extremely slowed down with no acceptable workaround | Within 4 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 2              | Medium impact: core features are unavailable or somewhat slowed; workaround exists                                                                   | Within 8 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 3              | Minimal impact: questions or clarifications around features, documentation, or deployments                                                           | Within 2 business days of becoming aware of the issue  | 24x5 (Monday - Friday) |

For our Enterprise Starter plans the SLAs are as follows:

| Severity Level | Description                                                                                                                                          | Response time                                           | Support Availability   |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------- |
| 0              | Emergency: total loss of service or security-related issue (includes POCs)                                                                           | Within 4 business hours of becoming aware of the issue  | 24x5 (Monday - Friday) |
| 1              | Severe impact: service significantly limited for 60%+ of users; core features are unavailable or extremely slowed down with no acceptable workaround | Within 6 business hours of becoming aware of the issue  | 24x5 (Monday - Friday) |
| 2              | Medium impact: core features are unavailable or somewhat slowed; workaround exists                                                                   | Within 16 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 3              | Minimal impact: questions or clarifications around features, documentation, or deployments                                                           | Within 3 business days of becoming aware of the issue   | 24x5 (Monday - Friday) |

**Note:** premium support / enhanced SLAs are available as an add-on for our Enterprise plans.
**Note:** The business hours which, due to 24x5, are defined as:

Sunday 2pm PST - Friday 5pm PST

### Sourcegraph Cloud (Managed Instance) SLA

Effective: November 14, 2022

Sourcegraph provides a 99.5% Uptime commitment for customers on the Business and Enterprise plans (our Service Level Agreement or SLA).

#### Downtime

Downtime is the overall number of minutes Sourcegraph Cloud instance was unavailable during a calendar month. Sourcegraph calculates unavailability using server monitoring software to measure the server side error rate, ping test results, web server tests, TCP port tests, and website tests. Due to the single-tenant architecture of Sourcegraph Cloud, downtime is measured on a per-customer basis.

Downtime excludes the following:

- Slowness or other performance issues with individual Sourcegraph features
- Issues that are related to external apps or third parties, including authentication providers and code hosts
- Any products or features identified as experimental or beta
- External network problems outside of our reasonable control (such as connectivity problems between client ISP, Cloudflare and Google Cloud Platform)
- Maintenance during Scheduled Downtime

#### Scheduled Downtime

Sometimes we need to perform maintenance to keep your Sourcegraph Cloud instance working correctly. If scheduled downtime is necessary, we’ll give you at least 48 hours advance notice. In a quarter, scheduled downtime won’t exceed 10 hours.

#### Uptime Commitment

Uptime is the percentage of total possible minutes Sourcegraph was available during a calendar month. Our commitment is to maintain at least 99.5% Uptime:

```
[(total minutes in month - Downtime) / total minutes in month] > 99.5%
```

#### Sev 0 - Emergency Support Scope

What constitutes a Sev 0 - Emergency:

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
