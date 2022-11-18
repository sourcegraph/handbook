# Customer Support

Customer Support at Sourcegraph exists to resolve technical issues and answer technical/product questions for our customers (pre-sales and post-sales), open source users, and teammates.

### Our guiding principles:

- Persistently working toward and/or seeking resolution that works equally for our customers and us
- Staying at least a step ahead (summarizing current status, giving clear next steps, and setting expectations in every communication)
- Being flexible and open, maintaining a first principles thinking approach, and always confronting and growing past our biases
- Outgrowing ourselves, the way we work, and continuously improving
- Sharing our learnings through [our official documentation](https://docs.sourcegraph.com/) so that customers have a single source of truth

## We know that we are successful when we...

- **Deliver our customers with an exceptional customer experience.** Customer Satisfaction (CSAT) is the most important measurement of our success. Questions and issues will always arise - the experience that we provide to our customers in those moments is our ultimate north star.
- **Meet SLA (service level agreement) response 100% of the time.** Meeting SLA response requires a thoughtful first response that summarizes the troubleshooting the support engineer has already done, as well as next steps. A response of “we are on it” would not be sufficient for us to count as successfully meeting SLA. If we are staffed correctly and have reasonable SLAs, it should be possible to always meet our SLA response expectations.

## Our practices (how we work)

Letting customers talk to us where they prefer and streamlining our workflow must also be balanced with other elements of the customer experience. Handoffs cause frustration more than any other aspect of trying to get help. How we work accounts for this. It also accounts for continually positioning our CEs as trusted and reliable partners who need time to think about customers proactively.

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
- [Assigned application engineers](team/assigned-app-eng.md)
- [Business continuity](process/business-continuity-plan.md)

## SLAs

Our default contractual service level agreements (SLAs) are described below. The SLAs apply to generally available products and exclude [beta and experimental features](https://docs.sourcegraph.com/admin/beta_and_experimental_features). SLA response times are the time frames in which you can expect an initial response. Our team will make a best effort to resolve all issues as quickly as possible. However, please note that the SLA times are not to be considered as an expected time-to-resolution.

### The following applies to both cloud (managed instance) and on-premise/self-hosted Sourcegraph customers:

While Sourcegraph will strive to respond as soon as possible to every issue, we will be responsible for upholding the SLAs below Monday through Friday.

| Severity Level | Description                                                                                                                                          | Response time                                          | Support Availability   |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------- |
| 0              | Emergency: total loss of service or security-related issue (includes POCs)                                                                           | Within 2 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 1              | Severe impact: service significantly limited for 60%+ of users; core features are unavailable or extremely slowed down with no acceptable workaround | Within 4 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 2              | Medium impact: core features are unavailable or somewhat slowed; workaround exists                                                                   | Within 8 business hours of becoming aware of the issue | 24x5 (Monday - Friday) |
| 3              | Minimal impact: questions or clarifications around features, documentation, or deployments                                                           | Within 2 business days of becoming aware of the issue  | 24x5 (Monday - Friday) |

**Note:** premium support / enhanced SLAs will be available in the future

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

Sometimes we need to perform maintenance to keep your Sourcegraph Cloud instance working correctly. If scheduled downtime is necessary, we’ll give you at least 48 hours advance notice.In a quarter, scheduled downtime won’t exceed 10 hours.

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
