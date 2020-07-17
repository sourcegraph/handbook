# Web team

The web team owns all work related to our web application and browser extensions that isn't already owned by one of the other mission based teams.

This is a large ownership area, so the team creates a focused plan each iteration:

- ~30-40% quick wins: these are small but impactful tasks. They may come from product, design, analytics, customer engineering, or be technical debt / engineering investment tasks.
- ~60-70% focused goal: we'll agree on a single, focused goal that we can work on as a team. Depending on priorities, this may be a product goal, or an engineering investment.

The web team's current focus is documented in [the tracking issue for the current milestone](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+label%3Atracking+label%3Ateam%2Fweb+is%3Aopen).

## Contact

- #web channel or @web-team in Slack.
- [team/web](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/web) label and [@sourcegraph/web](https://github.com/orgs/sourcegraph/teams/web) team on GitHub.

## Tech stack

TypeScript, React, RxJS, GraphQL, Go.

## Processes

We do [weekly check-ins](../tracking_issues.md#using-a-tracking-issue-for-progress-check-ins) (between Friday EOD and Monday 5am PT) and [planning](../tracking_issues.md#planning-a-milestone-with-a-tracking-issue) with [tracking issues](../tracking_issues.md).

## Team syncs

The web team holds weekly syncs.

The meeting notes of web team syncs can be found [in this doc](https://docs.google.com/document/u/1/d/1IUsjbtYdGiAHvRUB1yf4eqnynin9WsxFR2zFCMm78jw/edit#).

Before web team syncs, teammates and stakeholders should write down under "Discussion items" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.

## Members

- [Loïc Guychard](../../../company/team/index.md#loic-guychard) ([engineering manager](../roles.md#engineering-manager))
- [Felix Becker](../../../company/team/index.md#felix-becker)
- [Simon Korzunov](../../../company/team/index.md#simon-korzunov)
- [Marek Zaluski](../../../company/team/index.md#marek-zaluski)
- [T. K.](../../../company/team/index.md#todo) starting 2020-07-27.
- [J. P.](../../../company/team/index.md#todo) starting 2020-08-03.

## Growth plan

We are growing the web team by hiring [frontend engineers](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-frontend.md). When this team gets big enough, we expect to split it into two teams with the following ownership areas:

- Web infrastructure
    - The **Sourcegraph web application and codebase** is clean, cohesive, stable and performant. It's easy for all teammates to onboard and contribute to the web application.
- Extensions and integrations
    - **Sourcegraph extensions** empower users to integrate Sourcegraph with any third-party service providing useful information about code (code coverage, exception tracking, tracing, code quality). They are consistently supported across all code host integrations and the Sourcegraph UI. Through extensions, Sourcegraph surfaces high-level [**code insights**](https://docs.google.com/document/d/1EHzor6I1GhVVIpl70mH-c10b1tNEl_p1xRMJ9qHQfoc/edit) to engineering leaders, empowering data-driven decisions.
    - The **browser extension** and code host **native integrations** are a breeze to set up, and add compelling value when reading or reviewing code. Enabling native code host integrations for all users is a no-brainer for site admins.
    
Loïc is interested to be the manager of the [Search team](../search/index.md) so we are [hiring an engineering manager for this team](https://github.com/sourcegraph/careers/blob/master/job-descriptions/engineering-manager-web.md) to replace him.
