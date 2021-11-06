# Core application team

Note: This page is a work in progress to represent an updated organizational structure to facilitate future growth.

<img width="70%" height="70%" src="logo.jpg" alt="Sourcegraph Cloud team logo">

While you could think this is an angry cloud, it's actually a fierce and determined one 😃.

## Areas of ownership

The Core Application team has broad [area ownership](areas-of-ownership.md) within the Sourcegraph product delivery organization. We are responsible for [code host connection and repository management](areas-of-ownership.md#code-host-connections-and-repositories-management), [administration experience](areas-of-ownership.md#administration-experience), [licensing, finance and subscription management](areas-of-ownership.md#licensing-and-subscription-management), [authorization, authentication, and IAM](areas-of-ownership.md#identity-and-access-management). The team also owns other [platform-level developer enablement themes](areas-of-ownership.md#developer-enablement).

## Members

- [Dan McKean](../../company/team/index.md#dan-mckean) ([Product Manager](../../product/roles/index.md#product-manager))
- TBD ([Product Designer](../../product/roles/index.md#product-designer))
- [Jean Du Plessis](../../company/team/index.md#jean-du-plessis) ([Engineering Manager](../roles.md#engineering-manager)) {#core-application-eng}
  - [Ryan Slade](../../company/team/index.md#ryan-slade)
  - [Asdine El Hrychy](../../company/team/index.md#asdine-el-hrychy)
  - [Indradhanush Gupta](../../company/team/index.md#indradhanush-gupta)

## How to contact the team and ask for help

- Please ask questions and submit requests for assistance via #core-application Slack channel
- Use `@core-app` to mention the team in Slack
- Use [team/core-application](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/core-application) label to tag the team in GitHub.
- Requests for assistance from Customer Support and other teams are triaged, worked on, and resolved based on their priority level by a team member on [operational rotation](operational-rotation.md).
- See [Core Application Support board](https://github.com/orgs/sourcegraph/projects/153) for information about all tracked requests and their current status.

## [Goals](../../company/strategy/cloud/core-application/index.md)

See [goals](../../company/strategy/cloud/core-application/index.md)

## [Onboarding](onboarding/index.md)

See [onboarding](onboarding/index.md)

## [Playbooks](playbooks/index.md)

See [playbooks](playbooks/index.md)

## Processes

We have two week sprints starting on Wednesdays. We do a sync planning the day before (Tuesday) where we determine what each teammate works on. We use [JIRA](https://sourcegraph.atlassian.net/secure/RapidBoard.jspa?rapidView=5&projectKey=COREAPP&view=planning&issueLimit=100) to track that work. We do a sync [retrospective](https://app.retrium.com/team-room/acf6e310-7bbb-45e0-8a9e-bbc1f4305077) before the planning meeting, and have a general team sync meeting every other Monday. We use Geekbot in the #core-application-sync Slack channel for daily updates.

### Operational rotation - how do we provide support to other teams

We are establishing the [operational rotation](operational-rotation.md) to predictably deliver sprint goals and provide the necessary support to other teams.

## Team norms

### Getting assistance

If you need assistance with a task, let the team know in the #core-application-sync channel. You'll find your peers are more than happy to act as a [rubber duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging) and get you unblocked, or direct you to the right person(s) for further assistance.

See [Tagging teammates](#tagging-teammates) below for more information.

### Giving assistance

Consider setting up regular [office hours](https://support.google.com/calendar/answer/190998?co=GENIE.Platform%3DDesktop&hl=en) so that peers can reserve your time, while knowing that they won't be disrupting your daily workflow.

### Code reviews

- **Post-merge feedback:** It is important to make progress while getting feedback from other teammates in code reviews. On the one hand, the pull request author doesn't have to be blocked by all reviewers who the author intends to get feedback from; on the other hand, reviewers can still focus on their work on hands and leave feedback at their convenience. The pull request author should use their best judgement to decide if a pull request should wait (for high-risk changes) or simply rely on post-merge feedback.
- **Approve to unblock:** When the reviewer thinks there are no obvious blockers and trusts the pull request author will take care of comments/questions/concerns (e.g. answer to questions, explain rationale, act on code suggestions) before merging the pull request.
- **Request for changes:** When the reviewer believes it is important to get another round of review from the person before merging the pull request. This situation often happens when there is a significant design change.

### JIRA

The team is currently experimenting with JIRA as our project tracker.

To track GitHub PRs automatically in JIRA, use the JIRA ticket number anywhere in the branch name. So for example, if the ticket number is `COREAPP-42` and you name your branch `the-answer-to-everything-COREAPP-42`, the resulting PR from this branch will automatically be associated with the JIRA ticket.

### Tagging teammates

Feel free to tag `@core-app` on Slack or anyone directly as and when required. It is acceptable to tag people to get their attention. On the contrary it is also acceptable to turn off your notifications when you want to focus and do not want to be interrupted.

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+monitoring.ObservableOwnerCoreApplication&patternType=literal)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/01b8adfc-9b85-462b-a841-945791c17e9e/main)

## Resources

- [Cloud roadmap](https://sourcegraph.productboard.com/feature-board/2119755-cloud)
- [GitHub Projects](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Cloud+OR+Core+OR+Backend)
- [Manual migrations](manual_migrations.md)
- [Hiring](hiring/index.md)
