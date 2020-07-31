# Cloud team

The cloud team owns all work that is necessary to build, secure, scale, and operate our multi-tenant hosted version of Sourcegraph for customers that do not want to deploy Sourcegraph on-premise.

## Goals

1. Any user or organization can use Sourcegraph Cloud with both the private and public code that they care about in a secure way.

## Contact

- #cloud channel or @cloud-team in Slack
- [team/cloud](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/cloud) label in GitHub.

## Resources

- [Tracking Issues](https://github.com/sourcegraph/sourcegraph/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Ateam%2Fcloud+label%3Atracking)

## Processes

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

- [Tomás Senart](../../../company/team/index.md#tomás-senart) ([engineering manager](../roles.md#engineering-manager))
- [Joe Chen](../../../company/team/index.md#joe-chen)
- [Ryan Slade](../../../company/team/index.md#ryan-slade)
- [Dax McDonald](../../../company/team/index.md#dax-mcdonald-he-him)
- [Asdine El Hrychy](../../../company/team/index.md#asdine-el-hrychy)

Other:

- [Keegan Carruthers-Smith](../../../company/team/index.md#keegan-carruthers-smith) will not be isolating his work to a single team. Instead, he will serially choose tasks that he thinks are important to work on and he will post updates to the most relevant tracking issue on GitHub. This is an experiment for the next month and we will evaluate the outcome on 2020-08-17. Tomás will continue to be his manager during this experiment.

## Hiring status

_Updated 2020-07-03_

We are hiring for these roles:

- +1 [Software Engineer - Backend](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-backend.md)
