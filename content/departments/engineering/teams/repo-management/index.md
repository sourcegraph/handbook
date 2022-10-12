# Repo Management team

## Mission

Our mission is to ensure that Sourcegraph "just works" with the code hosts that our customers use. Whether customers use GitHub, Gitlab, Bitbucket, Perforce, or the many other code hosts that exist, we ensure their code syncs with Sourcegraph without them worrying about it.

## Members

{{generator:product_team.repo_management}}

## Strategy

[Find out about the Repo Management team's vision, guiding principles, current status quo, and strategic plans](../../../../strategy-goals/strategy/repo-management/index.md)

## Onboarding

Check out our [onboarding guide](onboarding.md).

## Responsibilities

### Code Host / Repository Management

Including maintenance, development, support, and advice for:

- Code host connections
- Code replication into Sourcegraph
- Code storage within Sourcegraph

## Contact

- #repo-management channel or @repo-management-team in Slack.
- [team/repo-management](https://github.com/sourcegraph/sourcegraph/labels/team%2Frepo-management) label and @sourcegraph/repo-management team on GitHub.

For information on how to contact us for support, or how we handle support, please see [our processes](processes.md).

## Operations

We believe an operationally mature team is key to delighting our customers and ensuring we exceed their expectations every day. As Sourcegraph becomes cloud-first and product-led, it’s crucial that we have the mechanisms in place to support more customers that choose to use our Cloud product. 

### Oncall

The centerpiece of our operations is the oncall. The oncall is our go-to person for handling inbound support requests, whether those are automated alerts, customer questions, or incidents. Oncall ownership rotates every week. We also utilize a secondary oncall to provide follow-the-sun oncall coverage for high severity issues and to load balance if the primary oncall has too many issues. Our oncall allocates their time to items in the following priority order:

1. Pageable alerts 
2. Active incidents
3. Customer p0s and p1s
4. Sentry alerts
5. Customer p2s
6. Monitor / action / resolve errors in #repo-management-errors channel on Slack
7. Questions in #repo-management and #ask-engineering
8. Incident action items (if not prioritized during planning)
9. Tech debt

We have the following expectations of the oncall:

1. Triaging and resolving support requests is your only priority for the week. Any and all project work is put on hold for the week. When in doubt, reference the priorities above. 
2. Monitor #repo-management and #ask-engineering for inbound requests.
3. Monitor any code monitors that post to our Slack channels
4. Aim to acknowledge all requests within 24 hours, even if the initial response is an indication that we don’t have bandwidth to review it yet and will respond back at a future date. Add the GitHub issue to the Repo Management project with the Status “Support Issues”.
5. Provide the incoming support owner with the status of all in-flight issues before their rotation begins (Monday morning is fine, asynchronous updates are fine). Include the relative priority of all issues so the incoming support owner knows where to begin.
6. Ask for help when you are stuck! Don’t spend too much time trying to troubleshoot an issue, especially if it’s high priority. Do your best, ask the team, and resolve the issue.
7. If you ever have too many support requests, leave a message in #repo-management-internal and engage the secondary support owner for the week
8. After resolving an issue, do at least one of the following:
  - Add an FAQ to one of the existing docs based on the area or create one here
  - Update docs.sourcegraph.com or other documentation
  - Create a backlog issue for an improvement, feature, tool, etc. that would have been useful to troubleshoot and solve the problem and find an owner for the issue

### Pageable Issues

We have two ways of receiving pages. The first is for automated alerts that are defined in the next section for our Cloud customers. The second is when we are paged by other teams (typically the Cloud team) if a customer raises an issue with repo syncing. Below are our guidelines for manually paging our team.

The following are pageable issues:

1. 2 or more repos have not synced for more than 9 hours

The following are not pageable issues:

1. Partial or delayed repository sync that has occurred for less than 9 hours
2. Repo syncing issues that occur during the 7 day instance creation window
3. 1 repository is not syncing

We ask that you send us a message in #repo-management for not pageable issues so we can help you. 

### List of Alerts

All of the alerts we are responsible for are available on https://docs.sourcegraph.com/admin/observability/alerts 

## Processes

Read more about [how this team works](processes.md).

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../dev/process/principles-and-practices.md).

We also have a set of [guiding principles](../../../../strategy-goals/strategy/repo-management/index.md#guiding-principles) that help inform our decision making about our strategic and prioritization choices.

## Internal

[Internal page](internal.md) geared towards Repo Management team members.

## Other

- [Operational rotation](operational-rotation.md)
- [Internships](internships.md)
