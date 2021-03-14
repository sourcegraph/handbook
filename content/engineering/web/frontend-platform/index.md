# Frontend platform team

The Frontend platform team (part of the Web org) defines and maintains the standards and tooling for web development at Sourcegraph.

## Members

<!-- Due to the markdown renderer that we use, the indentation here is sensitive. If you want to change the indentation, check that it renders correctly locally with `make serve` -->
- [Alicja Suska](../../../../company/team/index.md#alicja-suska-she-her) ([Product Designer](../../../product/roles/index.md#product-designer))
- [Patrick Dubroy](../../../../company/team/index.md#patrick-dubroy-he-him) ([Engineering Manager](../../../engineering/roles/index.md#engineering-manager)) {#frontend-platform-eng}
  - [Tom Ross](../../../../company/team/index.md#tom-ross-he-him)
  - [Felipe Janer](../../../../company/team/index.md#felipe-janer-he-him)  
  - [Valery Bugakov](../../../../company/team/index.md#valery-bugakov-he-him) moves in FQ2 to the [Code Insights Team](../code-insights/index.md)

## Contact

- [#frontend-platform-chat](https://sourcegraph.slack.com/archives/C01LTKUHRL3) channel or @frontend-platform in Slack.
- [team/frontend-platform](https://github.com/sourcegraph/sourcegraph/labels/team%2Ffrontend-platform) label and [@sourcegraph/frontend-platform](https://github.com/orgs/sourcegraph/teams/frontend-platform) team on GitHub.

## Goals

[Goals](goals.md)

## Growth plan

We are not planning on growing the Frontend platform team further in 2021.

## Tech stack

We use a modern, flexible tech stack.
Here are some of the technologies we use to deliver on our goals:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [SCSS](https://sass-lang.com/) + [Bootstrap](https://getbootstrap.com/)
- [GraphQL](https://graphql.org/)
- [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview)
- [Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

## Processes

#### Tracking Issues
The team makes use of [tracking issues](../../tracking_issues.md) for tracking progress on the implementation of new features. The teammates should ensure that a tracking issue is created when starting work on features that are expected to take longer than a single iteration to deliver.

#### Product Feedback

Specific product feedback about well-defined, small features can be found directly in the backlog boards. More general product feedback that applies to larger features, or that needs more research and planning to be actionable, is kept in [Productboard](https://sourcegraph.productboard.com/feature-board/2330177-web-frontend-platform)

### Iterations

The team creates a focused plan each iteration, by agreeing on an appropriately small set of [iteration goals](../../../../company/goals/index.md).

We plan our work in **2-week iterations**.

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true).
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
   
#### Progress monitoring

We monitor the progress of the work in an iteration in the following ways:
1. Iteration: The overall iteration progress is monitored through a GitHub project board (See [Iterations](#iterations).)
1. Tracking issue: If a feature is made up out of multiple issue we use a tracking issue to keep track of its progress. (See [Tracking issues](#tracking-issues).)
1. Pull request: The implementation of a feature is tracked through a checklist in description of the pull request.  (See [PR template](https://github.com/sourcegraph/sourcegraph/blob/main/.github/PULL_REQUEST_TEMPLATE/pull_request_template.md).)

### Updates

We do regular updates to communicate our progress to members of the team, and to external stakeholders.

### Retrospectives

After each iteration, we hold a sync retrospective meeting to reflect on the past iteration. We use this meeting to:

- Review the previous retro’s action items to ensure we hold teammates accountable for actioning them
- We give _Shoutouts!_ to teammates to show appreciation for something they did that we appreciated.
- Discuss things that went well in the past iteration and that we should do more of / invest more into it.
- We discuss the things that could have gone better and what we can learn from it to improve.
- We talk about processes that we should revisit/refine/propose to improve our efficiency?

We capture and assign actions to teammates to action. Teammates should consider actions coming out of the retrospective as a very high priority.

Teammates contribute to the retrospective asynchronously during the iteration by adding their thoughts to our [retrospective document](https://docs.google.com/document/d/1YW45Dksk0vIn7drhatwLyo6YbMMkS-naHcuShUi1OOw/edit). Teammates are highly encouraged to comment on points raised before the sync meeting in the document.

We rotate who leads the retrospective to allow all teammates an opportunity to lead the session. Teammates can find the rotation schedule at the top of the [retrospective document](https://docs.google.com/document/d/1YW45Dksk0vIn7drhatwLyo6YbMMkS-naHcuShUi1OOw/edit). 

### Code reviews

The team follow's the [default code review guidelines](https://docs.sourcegraph.com/dev/background-information/code_reviews) with the following addition:

1. If the author would like any of the requested reviewers to merge the PR after approval they add the label `merge-on-any-approve`
1. If the author would like their PR to be merged once all of the requested reviewers have approved it they add the label `merge-on-all-approve`

### Pair programming

We use pair programming extensively. We're huge believers in pair programming in remote work contexts, so we aim to pair for 15 hours a week.

### Weekly Sync

The team holds weekly syncs.

The meeting notes of team syncs can be found [in this doc](https://docs.google.com/document/d/1apinxDIp2PdyDHjkr_nBuD7ykfzItVuTvWejiA66sjY/edit?ts=5fb7fd29#).

Before team syncs, teammates and stakeholders should write down under "Agenda" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.
