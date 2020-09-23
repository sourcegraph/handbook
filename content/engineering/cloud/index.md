# Cloud team

The cloud team owns all work that is necessary to build, secure, scale, and operate our multi-tenant hosted version of Sourcegraph for customers that do not want to deploy Sourcegraph on-premise.

The cloud team is also responsible for all [backend-infrastructure areas of ownership](../backend-infrastructure/index.md). A lot of the work for Sourcegraph Cloud is in direct support of scaling and performance of backend-infrastructure. Work will be balanced as needed to support both efforts.

## Areas of ownership

- Authorization and authentication
- Repository management (gitserver, repo-updater, src-expose)
- Data storage and access libraries
- GraphQL API
- src-cli
- License generation and enforcement
- Admin and user settings
- Analytics

## Goals guiding principles

1. **Make it work**: Build the backend blocking work, and expose it (even in a roughly usable way) to the Sourcegraph team. We will be able to quickly surface any glaring issues and will have more thoughts around usability. Take shortcuts where possible (this is currently due to the team having fewer frontend resources).
   - Where possible, making it work and usable should be combined (avoid duplicate efforts), but if it's possible to separate the two in order to move things forward, we should!
1. **Make it usable**: The experience has been designed and thought through. We feel good about putting this in front of users, and they will find it valuable!
1. **Make it fast**: Now that users can try it, make sure the experience is fast for them (but it's better to have a slow working feature than a fast not-working one).
1. **Make it scale**: Make it work at large scale. Up until now we have been starting to grow awareness of the feature, so the number of users is starting to matter. It is better to have high demand and need to surge on scalability than to make an infinitely scalable unused feature.

## Goals

### Sourcegraph Cloud

1. Any user or organization can use Sourcegraph Cloud with both the private and public code that they care about in a secure way.

#### Milestones

1. The Sourcegraph organization and team members can add public code from GitHub.com, GitLab.com, and Bitbucket Cloud.
    - Code is indexed.
    - It's possible to search over only their code (vs all public code).
1. Any user can add public code from GitHub.com, GitLab.com, and Bitbucket Cloud.
    - Connecting their first code host and adding their own public repos is intuitive and easy for new users.
    - Connecting with code hosts and and adding public repos is intuitive and easy for current users.
    - System activity and progress is easy to understand and doesn’t take too long.
        - Repo syncing
        - Repo indexing
    - Searching their own versus searching all Cloud code is intuitive.
1. The Sourcegraph organization and team members can add private code to Sourcegraph Cloud.
    - No plaintext tokens or secrets anywhere (including gitserver .git/config remotes).
    - All private repository content are only decryptable by Sourcegraph services.
        - Gitserver.
        - Searcher and code intel caches.
        - Any other service that needs access to repository contents needs to be able to decrypt what it needs on the fly.
1. Any user or organization can add private code to Sourcegraph Cloud for free before it's GA.
    - Authorization from code hosts is enforced (e.g., organizations, teams).
    - Repository visibility and permissions on Sourcegraph is intuitive.
    - Adding private repositories is part of the same flows as adding public repositories.
1. Sourcegraph Cloud is Generally Available (GA).
    - Abuse protection: API rate limiting, DDoS mitigation, limiting user accounts.
    - Scalable syncing of permissions, repos, changesets.
    - High availability, SLOs, etc.
    - Billing and subscriptions.

### Backend infrastructure

Backend infrastructure goals are ad hoc as requests come up from customers or other teams. The Cloud team is responsible for scheduling and prioritizing these requests as they come up. See the [roadmap](../../product/roadmap.md#cloud) for planned items.

## Contact

- #cloud channel or @cloud-team in Slack
- [team/cloud](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/cloud) label in GitHub.

## Resources

- [Tracking Issues](https://github.com/sourcegraph/sourcegraph/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Ateam%2Fcloud+label%3Atracking)
- [Manual migrations](manual_migrations.md)

## Processes

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo%3A%5Egithub.com%2Fsourcegraph%2Fsourcegraph%24+file%3Amonitoring%2F.*+%7B%3A%5B_%5D%2C+Owner%3A+ObservableOwnerCloud%2C+%3A%5B_%5D%7D+OR+%28%3A%5B_%5D%2C+ObservableOwnerCloud%29+count%3A1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/01b8adfc-9b85-462b-a841-945791c17e9e/main)

### Planning

We meet every month for a planning session as the current iteration approaches its ends. In this meeting we collaborate on what our few and focused goals for the iteration should be, what their scope is and which teammates work on what.
These goals are then captured in an iteration [tracking issue](../tracking_issues.md).

It's fine for an iteration to start with only clear goals and for the specific work to make progress on those to be discovered afterwards.

### Updates

We do regular updates to communicate our progress to members of the team, and to external stakeholders.

#### Daily personal Slack updates

Collaborating across timezones requires regular communication to keep each other updated on progress, and coordinate work handoff if needed. We use daily Slack updates to achieve this.

Every day, Slackbot will post a reminder in the #cloud channel for you to write your daily update.

**At the end of each working day**, you should post your update as a threaded response to the Slackbot message.

You should include in your update:
- What you worked on during your day.
- Whether you're blocked on anything to make progress (a code review, input in an RFC or in a GitHub issue...).
- What you plan on tackling next.

**At the beginning of each working day**, you should read the updates thread for the previous working day, to learn what your teammates have been working on, and check if they need your help.

#### Weekly goal updates in the tracking issue

We use weekly [progress updates in the tracking issue](../tracking_issues.md#progress_updates) to inform external stakeholders of the progress of the team on the iteration goals.

Every Friday, Slackbot will post a reminder in #cloud for us to write weekly progress updates for each goal in the iteration.

The teammates working on a goal are responsible for this update and should decide amongst themselves who writes this update each week.

### Retrospectives

After the 20th of each month, we hold a retrospective, to reflect on the past iteration. We use this retrospective to:
- Understand whether we accomplished the goals we set at the beginning of the iteration. If we didn't accomplish them, reflect on the reasons why.
- Discuss things that didn't go well in the iteration, and identify action items to improve on these in the next iteration.
- Discuss things that went well in the past iteration, and that we should do more of / invest more into.

At the beginning of each iteration, the engineering manager will:
- Schedule the retrospective meeting
- Set up a Slack reminder three days before the retrospective meeting, asking teammates to write their discussion topics in the retrospective document

## Team syncs

The cloud team holds weekly syncs.

The meeting notes can be found [in this doc](https://docs.google.com/document/d/1CeSzdNK1lUnEr02TvllxTxkkYlwGhs4mMHCTt3D-ZGw/).

Before team syncs, teammates and stakeholders should write down under "Discussion items" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.

By default, members of the team will provide a brief update about the goals they're working on (one update per iteration goal) — this will be a short version of the written update in the tracking issue.

## Members

- We're hiring a [Product Manager](../../product/roles/product_manager.md) for this role. [Christina Forney](../../../company/team/index.md#christina-forney-she-her) is involved in the meantime.
- [Tomás Senart](../../../company/team/index.md#tomás-senart) ([Engineering Manager](../roles.md#engineering-manager))
    - [Joe Chen](../../../company/team/index.md#joe-chen)
    - [Ryan Slade](../../../company/team/index.md#ryan-slade-he-him)
    - [Dax McDonald](../../../company/team/index.md#dax-mcdonald-he-him)
    - [Asdine El Hrychy](../../../company/team/index.md#asdine-el-hrychy)

Other:

- [Keegan Carruthers-Smith](../../../company/team/index.md#keegan-carruthers-smith) will not be isolating his work to a single team. Instead, he will serially choose tasks that he thinks are important to work on and he will post updates to the most relevant tracking issue on GitHub. This is an experiment for the next month and we will evaluate the outcome on 2020-08-17. Tomás will continue to be his manager during this experiment.

## Growth plan

_Updated 2020-08-05_

We are growing the Cloud team by hiring both [Full stack Engineers](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-full-stack.md) and [Backend Engineers](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-backend.md).

There continues to be a need for work to happen on other areas of our backend infrastructure and the Cloud team is the best team to own that kind of work today. When this Cloud team reaches 6 engineers, we plan to split the team in half to form a new [Backend Infrastructure team](../backend-infrastructure/index.md). When this happens, Tomás will be the manager of both teams and will look to identify new managers so we are able to continue growing both teams.

Each of these teams should not grow larger than 8 engineers. In the mean-time, Tomás will be the manager of both teams, but we're looking to hire Engineering Managers for both down the line.
