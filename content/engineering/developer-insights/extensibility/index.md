# Extensibility team

The extensibility team owns our code host and third-party integrations (including our browser extension) and our [Sourcegraph extensions](https://docs.sourcegraph.com/extensions).

## Members

<!-- Due to the markdown renderer that we use, the indentation here is sensitive. If you want to change the indentation, check that it renders correctly locally with `make serve` -->

- [Joel Kwartler](../../../company/team/index.md#joel-kwartler-he-him) ([Product Manager](../../../product/roles/index.md#product-manager)) is the acting PM for this team until we can hire a dedicated PM for it. Once that happens, Joel will focus entirely on code insights.
- [Jean du Plessis](../../../company/team/index.md#jean-du-plessis-he-him) (Acting [Engineering Manager](../../roles.md#engineering-manager)) {#extensibility-eng}
  - [TJ Kandala](../../../company/team/index.md#tharuntej-kandala-he-him)
  - [Murat Sutunc](../../../company/team/index.md#murat-sutunc-he-him)
  - FQ2 frontend engineer hire

## Mission

Our mission is to bring the value of Sourcegraph to everywhere you work with code and to bring the value of other developer tools into Sourcegraph.

## Vision

Sourcegraph powers your first stop for any information about your code, for any tool or website you use.

1. Build a healthy ecosystem of Sourcegraph extensions, built by developers everywhere, who want to bring the power of existing developer tools they love into our platform.
1. Build new paths to get value from Sourcegraph on other websites and IDEs.
1. All of Sourcegraph's most powerful features are easily available on most any code host while using any browser thanks to native integrations and browser extensions.

## Responsibilities

_The extensibility team has many ownership areas, but not all of them are under active development at the same time. We nonetheless list them all here as a source of truth for deciding if an issue, feedback, or comment is relevant to the extensibility team. You can find our current priorities in our [goals page](goals.md)._

1. Sourcegraph extensions
   - Providing a Sourcegraph extension API that enables developers to bring data from their favorite developer tools into their Sourcegraph workflow.
   - Build and maintain useful Sourcegraph extensions.([Sourcegraph-maintained extensions](https://docs.sourcegraph.com/dev/background-information/sourcegraph_extensions)).
   - Documentation and tutorials that enable third-party developers to create actively useful extensions.
   - Building and maintaining the extensions registry, discovery paths, and extensions developer toolsets, to create an ecosystem around Sourcegraph extensions.
1. Code host integrations
   - Add native support for Sourcegraph in code hosts (for example: [GitLab native integration](https://docs.sourcegraph.com/integration/gitlab#gitlab-ui-native-integration)) when possible, so all users of a Sourcegraph instance can get features like code intelligence on their code host without individual setup.
1. Browser extensions
   - Develop and maintain [browser extensions](https://docs.sourcegraph.com/integration/browser_extension) that surface code intelligence and other Sourcegraph features on code hosts (for example: Github).
1. IDE and other third-party code view integrations
   - Develop and maintain IDE integrations that bring Sourcegraph functionality right to your IDE
   - Explore and develop features for other popular code-view websites like https://pkg.go.dev/ and messaging platforms like Slack

## Contact

- [#extensibility](https://app.slack.com/client/T02FSM7DL/C01LZKLRF0C) channel or @extensibility on Slack
- [team/extensibility](https://github.com/sourcegraph/sourcegraph/labels/team%2Fextensibility) label and [@sourcegraph/extensibility](https://github.com/orgs/sourcegraph/teams/extensibility) team on GitHub.

## Goals

[Goals](goals.md)

## Growth plan

We are not planning on growing the Extensibility team further in 2021.

## Tech stack

We use a modern, flexible tech stack. Here are some of the technologies we use to deliver on our goals:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/) + [Bootstrap](https://getbootstrap.com/)
- [GraphQL](https://graphql.org/)
- [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API)
- [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

## Processes

### Planning, Prioritization, and Execution

As a team, we've experimented with Scrum and Kanban and decided that our team operates much more efficiently when we focused on continuous delivery with changing priorities. We use our [Github Project Board](https://github.com/orgs/sourcegraph/projects/145?fullscreen=true) to track individual tasks and their status. The "To do" column is a constantly prioritized list of items. Each issue on this column is as atomic as possible, and we move them to the top of the list to signify their importance. As we start working on the issues, we move them to the "In Progress" column. They remain in this column until the change is code reviewed and merged. Once the change is successfully merged, it is moved to the "Done" column. We also have a "Blocked" column to track issues where we currently can't make progress. This simple workflow not only makes us operate faster but also helps us communicate our progress with partners.

As our to-do list grew, we realized that it became hard to see and prioritize issues, so we've decided to complement our Kanban board with a [backlog board](https://github.com/orgs/sourcegraph/projects/116?fullscreen=true).
When a new issue is opened and tagged for our team on the Sourcegraph repository, our scripts automatically add it to our "To Triage" column. Every week our EM and PM have a short meeting and decides the next steps for these issues. If it's an important issue, it will be moved to [Github Project Board](https://github.com/orgs/sourcegraph/projects/145?fullscreen=true), and stack ranked accordingly. If it's not an urgent issue, it will be moved to the "Backlog" column. Periodically we go over the "Backlog" column and move relevant items to "To Do" column.

Our kanplan methodology gives us the ability to backlog groom while continuously delivering quality software. We benefit from flexible planning, clearer focus, and total transparency because whatever's on the board is the top priority. We also communicate our team updates with the broader engineering org [every two weeks](https://about.sourcegraph.com/handbook/engineering/engineering-management#status-updates).

### Tracking Issues

The team makes use of [tracking issues](../../tracking_issues.md) for tracking progress on the implementation of new features. The teammates should ensure that a tracking issue is created when starting work on features that are expected to take longer than a few days to deliver.

### Product Feedback

Specific product feedback about well-defined, small features can be found directly in the backlog boards. More general product feedback that applies to larger features or that needs more research and planning to be actionable is kept in [Productboard](https://sourcegraph.productboard.com/feature-board/2330167-web-extensibility)

### Retrospectives

Every two weeks, we hold a sync retrospective meeting to reflect on the past two weeks. We use this meeting to:

- Review the previous retro’s action items to ensure we hold teammates accountable for actioning them
- We give _Shoutouts!_ to teammates to show appreciation for something they did that we appreciated.
- Discuss things that went well in the past two weeks and that we should do more of / invest more into it.
- We discuss the things that could have gone better and what we can learn from it to improve.
- We talk about processes that we should revisit/refine/propose to improve our efficiency?

We capture and assign actions to teammates to action. Teammates should consider actions coming out of the retrospective as a very high priority.

Teammates contribute to the retrospective asynchronously by adding their thoughts to our [retrospective document](https://docs.google.com/document/d/1uLR_2ICQB3jSCtQ3ebpQqvUYg11IIm0ZRJ5LoZ_wp2M/edit). Teammates are highly encouraged to comment on points raised before the sync meeting in the document.

We rotate who leads the retrospective to allow all teammates an opportunity to lead the session. Teammates can find the rotation schedule at the top of the [retrospective document](https://docs.google.com/document/d/1uLR_2ICQB3jSCtQ3ebpQqvUYg11IIm0ZRJ5LoZ_wp2M/edit).

### Code reviews

The team follow's the [default code review guidelines](https://docs.sourcegraph.com/dev/background-information/code_reviews) with the following addition:

1. If the author would like any of the requested reviewers to merge the PR after approval they add the label `merge-on-any-approve`
1. If the author would like their PR to be merged once all of the requested reviewers have approved it they add the label `merge-on-all-approve`

### Feature freeze

We do not merge major features in the **last 3 days before the [release branch is cut](../../releases.md)**. We make sure that our changes keep `main` [continuously releasable](../../continuous_releasability.md), but leave buffer time in the form of a [feature freeze](https://en.wikipedia.org/wiki/Freeze_(software_engineering\)) so that we can address any issues found on Sourcegraph Cloud.

### Pair programming

We use pair programming extensively. We're huge believers in pair programming in remote work contexts, so we aim to pair as much as possible.

### Weekly Sync

The team holds weekly syncs.

The meeting notes of team syncs can be found [in this doc](https://docs.google.com/document/d/1apinxDIp2PdyDHjkr_nBuD7ykfzItVuTvWejiA66sjY/edit?ts=5fb7fd29#).

Before team syncs, teammates and stakeholders should write down under "Agenda" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.

### Hack Time

Every week, we spend an hour and a half working on experiments outside of our prioritized lists. Examples of the type of work include extensions we feel strongly about, market intelligence tools, automation scripts, etc.
