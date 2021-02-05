# Cloud team

<img width="70%" height="70%" src="logo.jpg" alt="Sourcegraph Cloud team logo">

While you could think this is an angry cloud, it's actually a fierce and determined one 😃.

The cloud team owns all work that is necessary to build, secure, scale, and operate our multi-tenant hosted version of Sourcegraph for customers that do not want to deploy Sourcegraph on-premise.

The cloud team is also responsible for our backend platform. A lot of the work for Sourcegraph Cloud is in direct support of scaling and performance of backend-infrastructure. Work will be balanced as needed to support both efforts.

## Areas of ownership

- Authorization and authentication
- Repository management (gitserver, repo-updater, src-expose)
- Data storage and access libraries
- GraphQL API
- License generation and enforcement
- Admin and user settings
- Analytics

## [Goals](goals.md)

See [goals](goals.md)

## Contact

- #cloud channel or @cloud-team in Slack
- [team/cloud](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/cloud) label in GitHub.

## Resources

- [Tracking Issues](https://github.com/sourcegraph/sourcegraph/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Ateam%2Fcloud+label%3Atracking)
- [Manual migrations](manual_migrations.md)

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/sourcegraph/sourcegraph%24+monitoring.ObservableOwnerCloud&patternType=literal)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/01b8adfc-9b85-462b-a841-945791c17e9e/main)

## Processes

### Planning & grooming

On the 7th day of the cycle, we create the next cycle's tracking issue and ask all team-mates to add work they expect or want to do to it, while ensuring it has an estimate, enough context to be picked up and is labelled appropriately (i.e. async grooming).

The engineering manager also reviews all GitHub issues with the `team/cloud` label and assigns anything deemed important to teammates' workload for next cycle (e.g. new bugs, customer issues, tech debt).

On the 10th day of the cycle, we host our planning meeting. In this meeting, we:

- Revise the work previously added to the cycle makes sense in the context of our team's milestones.
- Ensure everyone has enough slack time (~20%).
- Check assignments take into account knowledge sharing and pairing.
- Validate estimations as a group (i.e. smoke test approaches thought of by those who groomed)
- Write a Plan section on the tracking issue in prose, describing what we're doing this cycle and why we chose to do those things.

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

The cloud team holds bi-weekly retrospectives.

The meeting notes can be found [in this doc](https://docs.google.com/document/d/1IJZzKw18JGc3AeCID5VIV2hec3Ee6o6wFSGfMakXJ5I/edit).

We aim to:

- Understand whether we accomplished the goals we set at the beginning of the iteration. If we didn't accomplish them, reflect on the reasons why.
- Discuss things that didn't go well in the iteration, and identify action items to improve on these in the next iteration.
- Discuss things that went well in the past iteration, and that we should do more of / invest more into.

## Team syncs

The cloud team holds bi-weekly syncs.

The meeting notes can be found [in this doc](https://docs.google.com/document/d/1CeSzdNK1lUnEr02TvllxTxkkYlwGhs4mMHCTt3D-ZGw/).

Before team syncs, teammates and stakeholders should write down under "Discussion items" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.

By default, members of the team will provide a brief update about the goals they're working on (one update per iteration goal) — this will be a short version of the written update in the tracking issue.

## Team norms

### Code reviews

- **Post-merge feedback:** It is important to make progress while getting feedback from other teammates in code reviews. On the one hand, the pull request author doesn't have to be blocked by all reviewers who the author intends to get feedback from; on the other hand, reviewers can still focus on their work on hands and leave feedback at their convenience. The pull request author should use their best judgement to decide if a pull request should wait (for high-risk changes) or simply rely on post-merge feedback.
- **Approve to unblock:** When the reviewer thinks there are no obvious blockers and trusts the pull request author will take care of comments/questions/concerns (e.g. answer to questions, explain rationale, act on code suggestions) before merging the pull request.
- **Request for changes:** When the reviewer believes it is important to get another round of review from the person before merging the pull request. This situation often happens when there is a significant design change.

## Members

- We're hiring a [Product Manager](../../product/roles/product_manager.md) for this role. [Christina Forney](../../../company/team/index.md#christina-forney-she-her) is involved in the meantime.
- [Quinn Keast](../../../company/team/index.md#quinn-keast-he-him) ([Product Designer](../../product/roles/product_designer.md))
- Core application {#core-application-eng}
    - [FQ1 Engineering Manager](https://jobs.lever.co/sourcegraph/95ad534f-8724-45dc-9b50-291c5926a7dc), Tomás acting manager until then.
        - [Joe Chen](../../../company/team/index.md#joe-chen)
        - [Ryan Slade](../../../company/team/index.md#ryan-slade-he-him)
        - [Alan Harris](../../../company/team/index.md#alan-harris-he-him)
        - [Artem Ruts](../../../company/team/index.md#artem-ruts-he-him)
        - [Alex Russell-Saw](../../../company/team/index.md#alex-russell-saw-he-him)
        - I. G. estimated start date is February 1st 2021
        - FQ1 [frontend engineer](https://jobs.lever.co/sourcegraph/b2f9a8b0-cc06-4629-81a0-0f2fa64271c7)
- Backend platform {#backend-platform-eng}
    - FQ2 [Engineering Manager](../roles.md#engineering-manager), Tomás acting manager until then.
        - [Tomás Senart](../../../company/team/index.md#tomás-senart)
        - [Asdine El Hrychy](../../../company/team/index.md#asdine-el-hrychy)
        - FQ2 backend engineer
        - FQ3 backend engineer
        - FQ4 backend engineer
