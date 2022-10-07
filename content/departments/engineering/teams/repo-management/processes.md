# Repo Management Processes

## Support

The Repo Management team primarily receives support requests from the Customer Engineering (CE) and Sales orgs. The requests vary from customer identified bugs to simple questions to deep dives into product gaps. CE and Sales work on behalf of Sourcegraph customers and, as a result, their support requests are high priority for our team.

We also receive support requests from other engineering teams because our ownership impacts many areas within Sourcegraph.

### Requesting Support

We provide two primary ways of requesting support from Repo Management:

1. The #repo-management channel in Slack is our preferred method of receiving support requests. If your support request is a simple question, post in the channel. You don’t have to provide a GitHub issue or any other artifact. If your support request is more than a question (e.g. customer bug, deep dive required, high priority ask), follow the support [request guidelines](#support-request-guidelines) below.

2. If you are unsure whether Repo Management is the right team, or it impacts multiple teams, you can post in the #ask-engineering channel. We recommend posting in #repo-management instead if you are confident that Repo Management is the right owner as we do not review the #ask-engineering channel as quickly.

### Support Request Guidelines

Support requests related to our [areas of ownership](index.md#responsibilities) should follow this process:

1. Make sure there is an issue - if there's not, please create one and include:
   - A short description of the ask
   - A more detailed explanation of the background, the context and the challenge that needs solving
   - Any guidance related to the impact this is having
   - Any extra information that could help us solve or prioritize this
2. Ensure label `team/repo-management` is added to the issue
   . Send a message to #repo-management in Slack to notify the team that you have created the issue

### How We Handle Support

Each week one member from the Repo Management team is on support rotation according to [repo-management-support](https://sourcegraph.app.opsgenie.com/settings/schedule/detail/b553cefc-2466-4ad2-ad0c-66937c790bbf) schedule in OpsGenie. The user is also added to the Slack User Group `@repo-management-support` by [Slackgenie](https://github.com/sourcegraph/background-jobs/tree/main/slackgenie). Feel free to tag `@repo-management-support` for your support requests on Slack.

For simple questions in #repo-management or #ask-engineering, we will review and respond on a daily basis.

More involved support requests follow the below process:

1. Requester sends a message to #repo-management and links to the issue they created on https://github.com/sourcegraph/customer/issues (the customer issue should include the label team/repo-management).
2. The IC on the weekly support rotation acknowledges the message in Slack, asks any follow up questions, and provides an ETA for us to review the issue. If the issue is p1, we review immediately.
3. The IC on support will review the request in more detail and create an issue on our [Kanban board](https://github.com/orgs/sourcegraph/projects/209/views/1) and add it to the Support Issues list.
4. If the request is not trivial, the IC will loop in the the EM and PM to triage with the requester on relative priority and timing.
5. Once we’re ready to work on the issue, the IC will either personally work on the request or work with the team to identify the right owner.
6. Whoever takes the issue will own it until completion and communicate directly with the requester.

## How we work

We're currently working in a Kanban style. It suits the fact that support work often cannot wait for a new sprint, and so the idea of being able to plan what we be delivered in any period of time is unreliable.

Kanban means we maintain a backlog of work we want to complete, prioritized in such a way that the team picks up the next highest priority thing.

This allows us to be flexible about what's up next, but still protect the sanctity of concentration and focus by avoiding (as much as we can) in-flight work from being dropped in favor of something else.

For larger pieces of work we utilise [tracking issues](../../dev/process/tracking_issues.md), for [example](https://github.com/sourcegraph/sourcegraph/issues/27916).

We work in 2 week cycles, and have the following ceremonies:

1. Planning (biweekly)
   - This is more of a "line up a queue of work in priority" exercise than it would be with sprints
   - By default, we make no time-based commitments, instead favouring a balance of strategic (long term) and tactical (short term repsonsive) work
   - This does not (and isn't intended to) prevent newly identified work from superceding what gets "planned"
2. Sync (biweekly)
   - This happens on the weeks we don't have planning, and is a check in on the plans and anything new
3. Retro (biweekly)
   - A review of what we did for learing purposes

### How we structure our work

We split our time between project work, support, and ad-hoc requests. We always have one person dedicated to support requests and the remaining engineers are split between our two delivery streams as outlined in our [strategy page](../../../../strategy-goals/strategy/repo-management/index.md#how-we-plan). In an ideal week, everyone who is not on support is focusing solely on either the performance engineering track or the product engineering trakc. But, we often receive ad-hoc requests for items that don't fit our definition of a support issue.

We plan for ad-hoc requests on a case by case basis, taking into account team availability, the size of the request, skills/knowledge required, and the urgency of the request. We pull the ad-hoc request into our 2 week cycle if we have the right people available to deliver it efficiently and with high quality. This approach ensures we spread ad-hoc work evenly across all teammates.
