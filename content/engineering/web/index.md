<img src="./logo.svg" alt="Sourcegraph Web Team Logo" style="width: 35%; float: right; margin-left: 1rem">

# Web team

The Web team owns two areas of the product: 

1. **Frontend platform:** the maintenance and expansion of the Sourcegraph web application. We also define and maintain the standards and tooling for how we do web development at Sourcegraph.
2. **Extensibility:** our code host and third-party integrations (including our browser extension) and our [Sourcegraph extensions](https://docs.sourcegraph.com/extensions). 

This is a large ownership area, so the team creates a focused plan each iteration, by agreeing on an appropriately small set of [iteration goals](../../../company/goals/index.md). Each goal should have more than one teammate working on it.

<div style="clear: both"/>

## Members

- [Joel Kwartler](../../../company/team/index.md#joel-kwartler-he-him) ([Product Manager](../../product/roles/product_manager.md)*)
- [Jean du Plessis](../../../company/team/index.md#jean-du-plessis-he-him) ([Engineering Manager](../roles.md#engineering-manager))
  - [Felix Becker](../../../company/team/index.md#felix-becker)
  - [Marek Zaluski](../../../company/team/index.md#marek-zaluski)
  - [TJ Kandala](../../../company/team/index.md#tharuntej-kandala-he-him)
  - [Tom Ross](../../../company/team/index.md##tom-ross-he-him)
  - [F.J.](../../../company/team/index.md##full-name-optional-pronouns) _(Starts 2021-01-11)_

_* Joel is the acting PM for this team until we are able to hire a dedicated PM for it. Once that happens, he will focus entirely on code insights._  

## Contact

- [#web](https://sourcegraph.slack.com/archives/CMT39K56Z) channel or @web-team in Slack.
- [team/web](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/web) label and [@sourcegraph/web](https://github.com/orgs/sourcegraph/teams/web) team on GitHub.

## [Goals](goals.md)

See [goals](goals.md)

## Tech stack

We use a modern, flexible tech stack.
Here are some of the technologies we use to deliver on our goals:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/) + [Bootstrap](https://getbootstrap.com/)
- [GraphQL](https://graphql.org/)
- [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API)
- [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

## Processes

### Backlog

The web team keeps a backlog GitHub project board for each of our focus areas: [frontend platform backlog](https://github.com/orgs/sourcegraph/projects/117) and [extensibility backlog](https://github.com/orgs/sourcegraph/projects/116). 

We use the backlogs for tracking bugs, small features, and unplanned work. We don't use the backlog for tracking work that is expressly planned in our [roadmap](goals.md#roadmap). 

To add an issue, tag it `team/web` to notify the web team PM and put it in the "to triage" column of the board. Unless you're directly asked, only web team members should move issues out of the "to triage" column on the board. A web team member will confirm the issue is web team-related, and then move it to the appropriate column.

#### Product Feedback

Specific product feedback about well-defined, small features can be found directly in the backlog boards. More general product feedback that applies to larger features, or that needs more research and planning to be actionable, is kept in Productboard, separated by focus area: [extensibility feedback](https://sourcegraph.productboard.com/feature-board/2330167-web-extensibility) and [frontend platform feedback](https://sourcegraph.productboard.com/feature-board/2330177-web-frontend-platform). 

### Iterations

We plan our work in **2-week iterations**.
We work on a single project in those 2 weeks as a team.

Our goals for the current and past iterations can be found in our [iteration goals living Google Doc](https://docs.google.com/document/d/1n9WKjieKmd2YYkNrEsOfdmxRYUrbowLWjq05phLoQ6s/edit).

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true), with estimate labels and assignees.
At the beginning of an iteration, we fill the "Planned" column with all issues we want to accomplish by the end of the iteration and make sure they have estimates and assignees.
Each issue should be as small as possible.
Over the course of the iteration, we strive to close issues with small, iterative pull requests that we review and merge timely (generally a day).
By the end of an iteration, all issues should be in the "Done" column and the board gets emptied.

#### Iteration planning

To ensure the team can be productive right from the start of an iteration we start planning for our next iteration as soon as a new iteration starts.

1. First week of the iteration
   1. The EM & PM will add tasks that should be considered for the iteration throughout the week.
      1. Tasks are added to the [Iteration planning scratchpad](https://docs.google.com/spreadsheets/d/1PKxOps4AWlqdI-H2eKSRzNhw4XT-oiwOpKF4UdN_1b8/edit); a spreadsheet we use to propose work items for the upcoming iteration
      1. The PM will focus on adding items that are aligned with our roadmap so that we keep working towards our goals
      1. The EM will focus on adding bugs and tech debt issues to ensure we maintain a high quality code base and product.
   1. The EM & PM work on getting all tasks to a "Ready for dev" status.
      1. A "Ready for dev" status means that all the necessary information has been captured or prepared so that the engineer taking up the issue can essentially start working on it immediately.
         1. This does not involve figuring out implementation detail, as we do not tell engineers how to execute a task, but rather tell them the problem and make the requirements clear, and then ask them to figure out the best way to implement the solution.
         1. We don't block on design dependencies for a task, but try to identify any dependency early on and communicate this requirement to the product designer.
   1. The PM identifies and communicates design input needed from the Product Designer and works to prioritize it with them.
1. Second week of the iteration
   1. By the Wednesday, the EM and PM should have ensured that:
      1. All planned work have refined issues in GitHub and are added to the 'Next iteration' column on the backlog board
      1. All issues are in a "Ready for dev" state
      1. All issues have effort estimates and have been prioritized
      1. The team’s available capacity for the next iteration is known.
         1. A teammates capacity is calculated at 80% of the iteration days - vacation days.
   1. On the Wednesday, the teammates are invited to review the planned iteration scope and to provide feedback.
   1. On the Thursday, the EM and PM will have a sync call to finalize the next iteration’s scope. In determining the iteration scope they will factor in:
      1. The priority
      1. The effort estimate
      1. The available capacity of the team
      1. Any left over issues that won't be complete from the prior iteration, and whether those issues should still be prioritized next iteration or moved to a backlog category.
      1. Feedback from the teammates
   1. The PM will prepare the current iteration project in GitHub with the relevant issues.

### Updates

We do regular updates to communicate our progress to members of the team, and to external stakeholders.

#### Daily Slack updates

Collaborating across timezones requires regular communication to keep each other updated on our progress, and coordinate work handoff if needed. We also use this opportunity to build camaraderie between team members by sharing some non-work related aspects of our lives with each other.

We use [Geekbot](https://geekbot.com/) to facilitate all this and these updates are purely for coordination within the team (as opposed to for external stakeholders). At the start of each working day, Geekbot will ask each teammate a set of questions and the responses will be posted in the #web-chat Slack channel.

All teammates are expected to be part of this channel, and should read the updates, to learn what your teammates have been working on, and check if they need your help.

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

## Growth plan

_Updated 2020-01-08*_

*Updated by Joel on behalf of Jean.

We are actively hiring [frontend engineers](../hiring/software-engineer-frontend.md) to grow the Web team. 
When this team team gets big enough, we expect to split into two teams **Frontend platform** and **Extensibility**. We will only make this split once we have identified a dedicated engineering manager and a dedicated product manager.

_In January 2021, [Code Insights](../code-insights/index.md) moved out of the Web Team into its own team, lead by Felix Becker (Interim EM) and Joel Kwartler (PM)._

### Frontend platform: frontend web platform and code browsing 

This team is responsible for:

1. Defining how we do web development at Sourcegraph and ensuring that our product engineering teams have the tools and components they need to quickly build high quality user experiences everywhere we use web technologies (for example: web application, browser extensions).
1. The core user experience of the Sourcegraph product

The team's areas of responsibility include:

- Frontend platform
   - Creating and maintaining a standard Sourcegraph UI component library.
   - Sourcegraph web tech stack, tools, patterns, documentation, education (e.g. webpack, TypeScript, React, RxJS).
   - Documentation and training material to enable product teams and new hires to quickly learn how we do web development at Sourcegraph.
   - Define and maintain how we test frontend code.
   - Ensuring an efficiency and reliabile frontend CI pipeline.
- Code browsing
   - Application navigation and information hierarchy
   - Syntax highlighting and file viewing
   - Repository landing pages and file directory pages
   - Basic code host-like features (e.g. viewing diffs, commits, history)
   - Sourcegraph application homepage
   - Accessibility support

### Extensibility: Sourcegraph extensions and code host integrations

This team is responsible for: 

1. Bringing the value of Sourcegraph to other developer tools
1. Bringing the value of other developer tools into Sourcegraph

The team's areas of responsibility include:

- Sourcegraph extensions
   - Providing a Sourcegraph extension API that enables developers to bring data from their favorite developer tools into their Sourcegraph workflow.
   - Building useful Sourcegraph extensions on top of the Sourcegraph extension API (for example: Codecov, Datadog, Sentry, Lightstep)
   - Documentation and tutorials that enable third party developers to create extensions that are actively used.
- Integrations   
   - Surface code intelligence (and other Sourcegraph data) in code hosts through user installed browser extensions. 
   - Add native support for Sourcegraph in code hosts (for example: GitLab) or popular sites where developer look at code examples (e.g. https://reactjs.org, https://pkg.go.dev/) so users don't have to install our browser extensions to get code intelligence.