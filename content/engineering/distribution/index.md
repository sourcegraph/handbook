# Distribution team

<img align="right" src="https://user-images.githubusercontent.com/3173176/92966535-955f2380-f42c-11ea-8723-2aa60c55b2db.png" height="500px" alt="Sourcegraph Distribution team logo"></img>

The distribution team is responsible for making Sourcegraph easy to deploy, scale, monitor, and debug. We solve the most challenging problems our customers face deploying Sourcegraph on-premise in a variety of environments, and on [Sourcegraph.com](https://sourcegraph.com/search) - the largest Sourcegraph instance in the world.

## Contact

- Slack: #distributioneers channel or @distribution
- For support requests, please use our dedicated [support rotation](#support-rotation)
- File issues: [team/distribution](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/distribution) label

## Team communication

Our team has two Slack channels, one public (#distributioneers) and one private (#distribution-team). **Our default is to use the public channel**. The #distribution-team channel will only be used for discussing internal team topics, like scheduling, retrospectives, how we do updates, etc.

## [Goals](goals.md)

See [Goals](goals.md)

## Details

- [Product & personas](product.md)
- [Ownership areas](ownership_areas.md)
- [Recurring processes](recurring_processes.md)
- [Internal infrastructure](internal_infrastructure.md)
- [Tools](tools/index.md)
- [Tech stack](tech_stack.md)
- [Onboarding](onboarding.md)

### Resources

- [Observability at Sourcegraph](../observability/index.md)
- [Observability developer guide](https://docs.sourcegraph.com/dev/background-information/observability)
- [Managed instances](managed/index.md)
- [Collecting and inspecting metrics dumps](metrics_dumps.md)
- [How to set up a separate website maintained by Sourcegraph](separate_website.md)
- [How to simulate k8s admin security restrictions](k8s_admin_custom_policy.md)
- [How to test the Gitlab native integration locally](gitlab_native_local.md)
- [How to make updates to global settings and configuration on sourcegraph.com](update_sourcegraph_website.md)
- [Create GCP commitments](gcp.md#committed-use-discounts)
- [Update various service tokens for sourcegraph.com](tokens.md)
- [Rollbacks](rollbacks.md)

### [FAQ](faq.md)

- [Why is there not a "stable" or "latest" Docker image tag?](faq.md#why-is-there-not-a-stable-or-latest-docker-image-tag)

## Members

- [Dan Mckean (Product Manager)](../../company/team/index.md#dan-mckean-he-him)
- FQ2 [Engineering Manager](../roles.md#engineering-manager) hire, [Bill Creager](../../company/team/index.md#bill-creager) acting manager until then {#distribution-eng}
  - [Geoffrey Gilmore](../../company/team/index.md#geoffrey-gilmore)
  - [Dave Try](../../company/team/index.md#dave-try)
  - [Dax McDonald](../../company/team/index.md#dax-mcdonald-he-him)
  - [Robert Lin](../../company/team/index.md#robert-lin)
  - FQ1 [distribution engineer](https://boards.greenhouse.io/sourcegraph91/jobs/4003908004)
  - FQ3 hire

## Getting help from the Distribution team

### Urgent customer incidents

You can send an urgent notification to the engineer directly from Slack utilizing the following command: `/genie alert "ce/p1: Customer XYZ systems are impaired #12345" for distribution-support`.
If the engineer is unable, a message will be send to the rest of the team.

Please provide a link to an [issue](https://about.sourcegraph.com/handbook/ce/customer_issues) in the message.

Find out [how we cover on-call](#on-call-Support).

### General questions

  1. In [#distributioneers](https://sourcegraph.slack.com/archives/CJX299FGE), click the blue lightning bolt just below the Slack text field
  2. At the top of the popup, select the type of request – "Ask a question"
  3. Fill out the form!
  4. Your responses will be posted in the channel, which is monitored by the member of the team on the support rotation ([see below](#how-we-cover-support-requests) for more info!)
  5. We'll get back to you asap. But, if this is a **time sensitive question**, please tag `@distribution-support` in the thread in the channel.

### General support requests

  1. In [#distributioneers](https://sourcegraph.slack.com/archives/CJX299FGE), click the blue lightning bolt just below the Slack text field
  2. At the top of the popup, select the type of request – "Request support"
  3. Fill out the form!
  4. Your responses will be posted in the channel, which is monitored by the member of the team on the support rotation ([see below](#how-we-cover-support-requests) for more info!)
  5. We'll get back to you asap. But, if this is a **time sensitive request**, please tag `@distribution-support` in the thread in the channel, or consider using the method outlined in ["Urgent customer incidents"](#urgent-customer-incidents) above if _really_ urgent.

### How we cover support requests

Who is on-call? Slack: `/genie whoisoncall distribution-support`

_The on-call support engineer can be reached (without you needing to know who it is) by using the Slack handle `@distribution-support`._

We maintain a support rotation to deal day-to-day requests (respond to ad-hoc, time-sensitive questions from customers or other teams, RFC review requests, etc). This makes it easier for other teams to reach out an engineer on the team whose priority is being the point of contact for these questions. You can read more about this on the references below.
When you are the active support engineer, your focus and priority is responding to requests and questions in #distributioneers, sometimes this might require creating an issue, re-assigning, looping in other engineers, etc.

_Distribution Team: If for any reason you are unavailable for a rotation, please coordinate with the team for someone to take over._

**Resonsibilities**:

The on-call support engineer is responsbile for owning the communication and determining the relative priority of the issue. However, the on-call engineer is **not expected** to solve issues entirely on their own (in fact, it's encouraged to pull in the other engineers if necessary - to bounce ideas off of one another, someone else might have more expertise in this particular area, etc.).

**References:**

- [SRE Book](https://sre.google/sre-book/dealing-with-interrupts/)

## On-Call Support

Who is on-call? Slack: `/genie whoisoncall Distribution`

We have a 24x7 OpsGenie rotation to respond to [incidents](../incidents/index.md) (events that cause service disruption). You can find more information about [being on-call in the handbook](../incidents/on_call.md).

**Incidents on-call**

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub.com/sourcegraph/sourcegraph%24+file:monitoring/.*+%7B:%5B_%5D%2C+Owner:+monitoring.ObservableOwnerDistribution%2C+:%5B_%5D%7D+OR+%28:%5B_%5D%2C+monitoring.ObservableOwnerDistribution%29+count:1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/aa59eba4-9b34-45ea-9515-c4dab4cbdac9/main)
