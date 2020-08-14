# Web team

The web team owns all work related to our web application and browser extensions that isn't already owned by one of the other mission based teams.

This is a large ownership area, so the team creates a focused plan each iteration, by agreeing on an appropriately small set of [goals](../../../company/goals/index.md). Each goal should have more than one teammate working on it.

The web team's current focus is documented in [the tracking issue for the current milestone](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+label%3Atracking+label%3Ateam%2Fweb+is%3Aopen).

## Contact

- #web channel or @web-team in Slack.
- [team/web](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/web) label and [@sourcegraph/web](https://github.com/orgs/sourcegraph/teams/web) team on GitHub.

## Goals

TODO

## Tech stack

TypeScript, React, RxJS, GraphQL, Go.

## Processes

### Planning

We do [planning](../tracking_issues.md#planning-a-milestone-with-a-tracking-issue) with [tracking issues](../tracking_issues.md).

### Updates

We do regular updates to communicate our progress to members of the team, and to external stakeholders.

#### Daily Slack updates

Collaborating across timezones requires regular communication to keep each other updated on our progress, and coordinate work handoff if needed. We use daily Slack updates to achieve this.

Every day, Slackbot will post a reminder in the #web to write your daily update.

**At the end of each working day**, you should post your update as a threaded response to the Slackbot message.

You should include in your update:
- What you worked on during your day.
- Whether you're blocked on anything to make progress (a code review, input in an RFC or in a GitHub issue...).
- What you plan on tackling next.

**At the beginning of each working day**, you should read the updates thread for the previous working day, to learn what your teammates have been working on, and check if they need your help.

#### Weekly updates in the tracking issue

We use weekly [progress updates in the tracking issue](../tracking_issues.md#progress_updates) to inform external stakeholders of the progress of the team.

Every Friday, Slackbot will post a reminder in #web to write your weekly progress update. You should post your update in the tracking issue for the current milestone by EOD Friday.

### Retrospectives

After the 20th of each month, we hold a retrospective, to reflect on the past iteration. We use this retrospective to:
- Understand whether we accomplished the goals we set at the beginning of the iteration. If we didn't accomplish them, reflect on the reasons why.
- Discuss things that didn't go well in the iteration, and identify action items to improve on these in the next iteration.
- Discuss things that went well in the past iteration, and that we should do more of / invest more into.

At the beginning of each iteration, the engineering manager will:
- Schedule the retrospective meeting
- Set up a Slack reminder three days before the retrospective meeting, asking teammates to write their discussion topics in the retrospective document

The meeting notes for all past web team retrospectives can be found [here](https://docs.google.com/document/d/1YW45Dksk0vIn7drhatwLyo6YbMMkS-naHcuShUi1OOw/edit#heading=h.dxt1jy5hsf1d).

We do monthly backlog triages together, where we go through the issues in the "To do" column of our [Project board](https://github.com/orgs/sourcegraph/projects/45) and decide which issues we should work on soon by moving them to the "Next" column.
To manage the load for these triages, a triage may have a specific theme, like "debt" or "performance".
This helps us resurface older issues, create shared awareness for existing deficiencies among everyone working on the web codebase and ensure all issues have estimates.

## Team syncs

The web team holds weekly syncs.

The meeting notes of web team syncs can be found [in this doc](https://docs.google.com/document/u/1/d/1IUsjbtYdGiAHvRUB1yf4eqnynin9WsxFR2zFCMm78jw/edit#).

Before web team syncs, teammates and stakeholders should write down under "Discussion items" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.

## Members

- [Loïc Guychard](../../../company/team/index.md#loic-guychard) ([engineering manager](../roles.md#engineering-manager))
- [Felix Becker](../../../company/team/index.md#felix-becker)
- [Marek Zaluski](../../../company/team/index.md#marek-zaluski)
- [TJ Kandala](../../../company/team/index.md#todo)

## Growth plan

We are growing the web team by hiring [frontend engineers](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-frontend.md). When this team gets big enough, we expect to split it into two teams with the following ownership areas:

- Web infrastructure
    - The **Sourcegraph web application and codebase** is clean, cohesive, stable and performant. It's easy for all teammates to onboard and contribute to the web application.
- Extensions and integrations
    - **Sourcegraph extensions** empower users to integrate Sourcegraph with any third-party service providing useful information about code (code coverage, exception tracking, tracing, code quality). They are consistently supported across all code host integrations and the Sourcegraph UI. Through extensions, Sourcegraph surfaces high-level [**code insights**](https://docs.google.com/document/d/1EHzor6I1GhVVIpl70mH-c10b1tNEl_p1xRMJ9qHQfoc/edit) to engineering leaders, empowering data-driven decisions.
    - The **browser extension** and code host **native integrations** are a breeze to set up, and add compelling value when reading or reviewing code. Enabling native code host integrations for all users is a no-brainer for site admins.

Loïc is interested to be the manager of the [Search team](../search/index.md) so we are [hiring an engineering manager for this team](https://github.com/sourcegraph/careers/blob/master/job-descriptions/engineering-manager-web.md) to replace him.
