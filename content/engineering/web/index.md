<img src="./logo.svg" alt="Sourcegraph Web Team Logo" style="width: 35%; float: right; margin-left: 1rem">

# Web team

The web team owns the maintenance and expansion of our web application and code host integrations as vehicles to deliver the value of [extensions](https://docs.sourcegraph.com/extensions) to our users.

This is a large ownership area, so the team creates a focused plan each iteration, by agreeing on an appropriately small set of [iteration goals](../../../company/goals/index.md). Each goal should have more than one teammate working on it.

<div style="clear: both"/>

## Contact

- #web channel or @web-team in Slack.
- [team/web](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/web) label and [@sourcegraph/web](https://github.com/orgs/sourcegraph/teams/web) team on GitHub.

## [Goals](goals.md)

See [goals](goals.md)

## Tech stack

TypeScript, React, RxJS, GraphQL, Go.

## Processes

### Backlog

The web team keeps a [backlog Github project board](https://github.com/orgs/sourcegraph/projects/98).

We use the backlog for tracking bugs, small features, and unplanned work. We don't use the backlog for tracking work that is expressly planned in our [roadmap](../../product/roadmap.md#web).

To add an issue, tag it `team/web` to notify the web team PM and put it in the "to triage" column of the board. Unless you're directly asked, only web team members should move issues out of the "to triage" column on the board. A web team member will confirm the issue is web team-related, and then move it to the appropriate column.

### Iterations

We plan our work in **2-week iterations**.
We work on a single project in those 2 weeks as a team.

Our goals for the current and past iterations can be found in our [iteration goals living Google Doc](https://docs.google.com/document/d/1n9WKjieKmd2YYkNrEsOfdmxRYUrbowLWjq05phLoQ6s/edit).

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true), with estimate labels and assignees.
At the beginning of an iteration, we fill the "Planned" column with all issues we want to accomplish by the end of the iteration and make sure they have estimates and assignees.
Each issue should be as small as possible.
Over the course of the iteration, we strive to close issues with small, iterative pull requests that we review and merge timely (generally a day).
By the end of an iteration, all issues should be in the "Done" column and the board gets emptied.

### Updates

We do regular updates to communicate our progress to members of the team, and to external stakeholders.

#### Daily Slack updates

Collaborating across timezones requires regular communication to keep each other updated on our progress, and coordinate work handoff if needed. We use daily Slack updates to achieve this.
These updates are purely for coordination within the team (as opposed to for external stakeholders).

Every day, Slackbot will post a reminder in the #web channel to write your daily update.

**At the end of each working day**, you should post your update as a threaded response to the Slackbot message.

You should include in your update:

- What you worked on during your day.
- Whether you're blocked on anything to make progress (a code review, input in an RFC or in a GitHub issue...).
- What you plan on tackling next.

**At the beginning of each working day**, you should read the updates thread for the previous working day, to learn what your teammates have been working on, and check if they need your help.

### Retrospectives

After each iteration, we hold a retrospective, to reflect on the past iteration. We use this retrospective to:

- Understand whether we accomplished the goals we set at the beginning of the iteration. If we didn't accomplish them, reflect on the reasons why.
- Discuss things that didn't go well in the iteration, and identify action items to improve on these in the next iteration.
- Discuss things that went well in the past iteration, and that we should do more of / invest more into.

At the beginning of each iteration, the engineering manager will:

- Schedule the retrospective meeting
- Set up a Slack reminder three days before the retrospective meeting, asking teammates to write their discussion topics [in our retrospectives document](https://docs.google.com/document/d/1YW45Dksk0vIn7drhatwLyo6YbMMkS-naHcuShUi1OOw/edit#heading=h.dxt1jy5hsf1d)

We do regular backlog triages together, where we go through [the issues in our backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fweb).
This helps us resurface older issues, create shared awareness for existing deficiencies among everyone on our team and ensures no-longer-applicable issues are closed.
To manage the load for these triages, a triage may have a specific theme, like "debt" or "performance".

## Team syncs

The web team holds weekly syncs.

The meeting notes of web team syncs can be found [in this doc](https://docs.google.com/document/u/1/d/1IUsjbtYdGiAHvRUB1yf4eqnynin9WsxFR2zFCMm78jw/edit#).

Before web team syncs, teammates and stakeholders should write down under "Discussion items" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.

## Members

- [Joel Kwartler](../../../company/team/index.md#joel-kwartler-he-him) ([Product Manager](../../product/roles/product_manager.md))
- [Jean du Plessis](../../../company/team/index.md#jean-du-plessis-he-him) ([Engineering Manager](../roles.md#engineering-manager))
  - [Felix Becker](../../../company/team/index.md#felix-becker)
  - [Marek Zaluski](../../../company/team/index.md#marek-zaluski)
  - [TJ Kandala](../../../company/team/index.md#tharuntej-kandala-he-him)

## Growth plan

We are growing the web team by hiring [frontend engineers](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-frontend.md). When this team gets big enough, we expect to split it into two teams with the following ownership areas:

- Web infrastructure
  - The **Sourcegraph web application and codebase** is clean, cohesive, stable and performant. It's easy for all teammates to onboard and contribute to the web application.
- Extensions and integrations
  - **Sourcegraph extensions** empower users to integrate Sourcegraph with any third-party service providing useful information about code (code coverage, exception tracking, tracing, code quality). They are consistently supported across all code host integrations and the Sourcegraph UI. Through extensions, Sourcegraph surfaces high-level [**code insights**](https://docs.google.com/document/d/1EHzor6I1GhVVIpl70mH-c10b1tNEl_p1xRMJ9qHQfoc/edit) to engineering leaders, empowering data-driven decisions.
  - The **browser extension** and code host **native integrations** are a breeze to set up, and add compelling value when reading or reviewing code. Enabling native code host integrations for all users is a no-brainer for site admins.
