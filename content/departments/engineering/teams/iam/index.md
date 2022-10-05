# Identity and Access Management (IAM) Team

> NOTE: The IAM team is a newly formed team at Sourcegraph. We'll be updating this page as we clarify our mission, vision, and roadmap.

## Goals and Roadmap

The goals and roadmap for the IAM team can be found on our [strategy page](../../../../strategy-goals/strategy/iam/index.md)

## Areas of Ownership

Service management is a broad area of ownership. To provide more clarity into what its stands for, we will break this down based on product domains. We will also provide a list of features and services from a technical engineering ownership perspective.

### Product domains

#### Identity and access management

The IAM team is responsible for both authentication and authorization to Sourcegraph, including login, sign-in and sign-up pages and user management for on-prem and managed instances.

The IAM team also owns code-level authorization, which is enforced based on the repository permissions on the code host level or with explicit permissions API.

#### Teams management

Capabilities that provide customers with transparency and access control to how Sourcegraph is used within their organizations. This includes but is not limited to organization/team management, role-based access control, and other features targeted towards admins on our customer’s side.

#### Subscription management

The end-to-end experience of managing customers’ subscription lifecycle includes the subscription as the entity, its changes over time, and the impact on Sourcegraph product offering and AAR. This includes both providing transparency to the customers and internal tooling to support Customer Engineering and Finance and Sales teams.

#### Pricing and packaging

Both technical and presentational sides of pricing. This includes both the presentation of pricing tiers to the customers with the process of selecting an appropriate plan and underlying technical implementation of the pricing model and its connection with billing and payments, plus impact on subscription management.

#### Billing, invoicing, and payments

The process on paying for Sourcegraph subscription.

#### Usage reporting and entitlement enforcement

Customer-facing and internal tools and features that provide transparency to how customers consume entitlements within their current subscription, including entitlements limiting enforcing capabilities.

### Engineering ownership

For a detailed list of features and services owned by the IAM team, check out the [Engineering Ownership page](../../dev/process/engineering_ownership.md).

## Team

{{generator:product_team.iam}}

We’re hiring! [Check out our open roles](https://boards.greenhouse.io/sourcegraph91/jobs/4101082004).

## Partner Teams

The IAM team works alongside several other teams at Sourcegraph. You can find more information about their teams and goals on the respective pages:

- [Repo Management](../repo-management/index.md)
- [Security](../../../security/index.md) - Team ambassador: [Feroz Salam](../../../security/index.md#feroz-salam)

## How we work

### How to contact the team and ask for help

- For users with urgent help requests reach out to our support team at [support@sourcegraph.com](mailto:support@sourcegraph.com).
- For emergencies and incidents, alert the team using Slack command `/genie alert [message] for iam`.
- For internal Sourcegraph teammates, join us in #iam to ask questions or request help from our team, or ask `@iam-support` directly.
- For feature requests, please reach out to our product manager, Ryan, at [ryphil@sourcegraph.com](mailto:ryphil@sourcegraph.com) and include `IAM Feature Request:` in your subject line.

### Planning, execution, and issue tracking

The IAM team plans work based on our [long-term roadmap](https://github.com/orgs/sourcegraph/projects/214/views/52) and setting [quarterly goals](#goals-and-roadmap). During the quarter, we follow a flavor of the SCRUM process with biweekly sprints. Our cycle starts every second Tuesday with a retrospective, sprint review, and planning meetings. We set goals for each sprint and focus team efforts during the iteration on achieving these goals rather than closing a number of issues. It’s the outcomes and delivered customer value, not the output, that matters.

We are using [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) as our project tracking tool. The [list view of backlog](https://github.com/orgs/sourcegraph/projects/259/views/10) is publicly available in our team project.

#### How we use GitHub Projects

- The GitHub project for the team is the single source of truth for our backlog. Please use descriptions, comments under GitHub issues, and different categorization options to keep all the issues up to date. Comments are also the best place for asking questions about the issue itself. That way, we keep all the context in a single place.
- We use GitHub milestones (usually connected with the quarterly goals) and custom fields to group issues for given initiatives/projects into epics, and to track different service or engineering ownership areas. This for example, helps us understand what the cost of operations with each area we own is.
- We use [keyword or manually](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) linking pull requests to issues automatically in GitHub.
- We use [planning poker in ZenHub](https://help.zenhub.com/support/solutions/articles/43000620555-planning-poker-in-zenhub) for [groomings and estimation sessions which we run asynchronously](#groomings).
- You can paste a link to GitHub in any Slack messages to have a rendered attachment automatically.

### User research

We conduct regular user research and usability testing. This helps us understand how our product is being used, identify pain points and opportunities, and better understand our users.

Research is typically planned, organized, and executed by the product team.

#### Observing user research

Anyone on the team can join a research session as an observer and notetaker. Observing and notetaking during user interviews and testing sessions is an amazing way to get a first-hand look at how others use our products and ideas, and your role as a notetaker is a huge help for the team.

See "[So you’re about to help us with user testing](../../product/process/user_research/user_research_observer.md)" to learn what to expect during user research sessions and how to take great notes.

### Working agreements

#### Decision log

[This document](https://docs.google.com/document/d/10ylYWDpDABAlaF-dPi5_hgjNkTmakMeivxxsIz2Q3uQ/edit?usp=sharing) contains all important decisions and agreements done within the IAM team in reverse-chronological order so that they can be tracked over time. Consider this a single source of truth for all the decisions within the team. If you are leading the decision-making process, please update the documents with the details about the decision made. If appropriate, especially for team working agreement, please update the handbook as well.

#### Team internal communication

We are a globally distributed team with 16+ hours of time zone difference. Asynchronous communication is a key for achieving high visibility and close collaboration within the team. In addition to [general Sourcegraph async communication guidelines](../../../../company-info-and-process/communication/asynchronous-communication.md), we agreed to the following recommendations within the IAM team.

##### Team communication channels and how to use them

###### Slack

While the team is following [multiple Slack channels](#team-slack-channels), #iam-internal is the place for all work-related discussions, including [status updates](#regular-status-updates), questions, requests for help, team announcements, etc. Please remember that Slack is not a source of truth. To make the relevant information easily discoverable over time, use other channels (for example, GitHub, Handbook, Google docs, etc.) and reference them on Slack via links. It's worth thinking about Slack as a synchronous—rather than asynchronous—communication channel.

###### GitHub

[GitHub](https://github.com/orgs/sourcegraph/projects/259/views/10) is the IAM team's single source of truth for team backlog, work planning, and execution. Please include all tasks related to status updates and questions within GitHub issues and keep the state of the sprint board up to date.

Please keep all discussions related to ongoing code changes within GitHub pull requests. You will find more guidelines for making pull requests and asking for code review in the [Making pull requests and asking for code reviews](#making-pull-requests-and-asking-for-code-reviews) section.

###### Figma

We use Figma for high- and medium-fidelity design and prototyping. High-fidelity design artifacts and their annotations should be considered a source of truth for design implementation, copy, and interaction behavior.

Use comments in Figma to ask questions and share feedback. If a decision or missing information is uncovered in comments in Figma, that context will be added to the design artifact itself as an annotation.

###### Handbook and Google docs

Google doc is a great choice for kicking off async collaboration, proposing RFC, writing a one-pager problem definition, or documenting a decision. To make the context in Google docs more discoverable, we agreed to:

- **Public Information** - Convert it to a handbook section/page linked from the main IAM team handbook page once
- **Information internal to Sourcegraph** - Create Google Doc within the [IAM Team Google drive](https://drive.google.com/drive/u/0/folders/0ACd8_Z-WGWroUk9PVA?ths=true) or if different location is more appropriate (for example RFCs) create a shortcut to this document within the IAM Team Google drive. If you decide to add a link to an internal Google doc directly in the handbook page, please ensure that sensitive information is not exposed in the link title.

Please refer to our values of [open and transparent](../../../../company-info-and-process/values/index.md#open-and-transparent) for more context about the difference between public and internal information.

###### Loom

We are using Loom to record short videos for bug reports, demos, and for multimodal communication. This way, we can provide more context to the rest of the IAM team.

##### Regular status updates

All team members, including product manager, engineering manager, and product designer, have agreed to share regular status updates on the #iam Slack channel. The recommended cadence is either daily or every second day, based on the needs and personal preferences. These updates should be focused on current sprint or quarterly goals, risk and blockers, requests for help, and any personal information you would like to share with your team.

To keep the updates standardized, we are using the following template:

```txt
👉 Status update 👈

What is my priority:
<content>

What went unexpected:
<content>

Where do I need help:
<content>
```

#### Sprint reviews

Each sprint is followed by a short sprint review meeting on Google Meet. During this meeting, we review the state of sprint goals, demo the features we delivered and discuss topics related to the sprint's scope. We also review the state of our retrospective actions items. This is an open meeting. Our stakeholders and members of other teams at Sourcegraph are always welcome to attend. Each review has a designated facilitator, usually an engineer from the IAM team, responsible for filling in the [agenda](https://docs.google.com/document/d/14hxy2WrcOpKwpRKqkJ0bvsDc4vRyTolmgBsoOoj2jko/edit) and facilitating the meeting.

#### Retrospectives

The team is doing retrospectives on a biweekly basis at the end of each sprint. We are using [Retrium](https://app.retrium.com/team-room/0c97e800-29c0-41cb-97e1-eb2556fbfa7d) and changing the format of the retrospective from time to time, experimenting with [different techniques available within Retrium tool](https://www.retrium.com/retrospective-techniques).

##### Retrospective action items

The action items from the retrospective are migrated to GitHub and usually have an owner assigned responsible for leading the action to its completion. The retrospective actions GitHub issues that require engineering effort are going through team's [regular grooming process](#groomings) and later are part of a sprint scope.

We review the backlog of action items during each [sprint review](#sprint-reviews). We discuss the outcomes of the items from this list completed in given sprint and the team makes recommendations about what action items should be added to the next iteration.

#### Groomings

To support the globally distributed nature of our team, we are doing our groomings in an asynchronous format. The [planning poker in ZenHub](https://help.zenhub.com/support/solutions/articles/43000620555-planning-poker-in-zenhub) is our tool of choice, and we are running our groomings session based on the following schedule:

- Each Monday, the new async grooming session should be created within [ZenHub board](https://app.zenhub.com/workspaces/iamerience-627aebcc9f8b7c00128a8ab6/board).
- Every task added to the session should have an owner assigned. The task assignee is responsible for breaking the tasks into meaningful subtasks if applicable and working on description and acceptance criteria to meet the expectations of our DoR. This should be done between Monday and Wednesday.
- Thursday and Friday are reserved for the whole team async estimation based on the planning poker session settings. We are using Fibonacci numbers and treating one story point as one day of work for a single engineer.
- Each story point represents a single developer day.

The "grooming" label is used for marking tickets to be included in the upcoming grooming session.

#### Team calendar

All team events and reminders should be added to the [team calendar](https://calendar.google.com/calendar/embed?src=c_n5p67no2g2tprhq3g0v7km7pv8%40group.calendar.google.com). This will allow us to keep all team events and reminders in a single place, increasing visibility for people within and outside of the team.

- Please add `iam-team@sourcegraph.com` group to participants for all events you expect people to join/participate in. This will automatically block time on your peers’ calendars. Also, if they can’t join, they can decline the event providing transparency about their ability to participate.
- For reminders, you don’t need to add participants

#### Paid Time Off

Our team tracks paid time off (PTO) using our [a shared Google Doc](https://docs.google.com/spreadsheets/d/1TelNUYufAcYe6pq4NtmmnlaNji_OCq70qklkHoiRIDE/edit?usp=sharing). This transparency ensures that we accurately plan sprints and on-call rotations. We encourage team members to add their PTO to this calendar as early as possible. Please make sure you [submit PTO via Roots](../../../../benefits-pay-perks/benefits-perks/time-off/submitting-time-off.md) as well.

We encourage our team to take as much time off to feel refreshed and energized at work, as outlined in our [benefits section](../../../../benefits-pay-perks/benefits-perks/time-off/index.md). Sick days and other urgent PTO does not need to be added to this document.

#### Making pull requests and asking for code reviews

- Everyone (including engineers, EM, PM, PD) should set up a reliable way to receive pull request review notifications, examples are emails, Slack notifications (through GitHub Scheduled reminders). In some cases, direct pinging required reviewers could inform reviewers about the urgency and may help expedite receiving reviews.
- Pull requests in the draft state indicate work in progress and not ready for review, while occasionally the author may ask for early feedback in explicit forms, examples are direct pings, mentioned on the pull requests.

#### Definition of Done (DoD)

TBD

#### Definition of Ready (DoR)

TBD

#### On-call and support rotation

We use the same OpsGenie schedule for both on-call and support rotation, and use the [SlackGenie automation](https://github.com/sourcegraph/background-jobs/blob/main/slackgenie/config.yaml) to automatically rotate team member for the `@iam-support` Slack handle.

### Team slack channels

- #iam-internal - internal channel for IAM team for all day to day communication within the team.
- #iam - external channel for IAM team where other Sourcegraphers can ask for help or leave questions for the team.
- #repo-iam-team-internal - a good channel to use whenever we're unclear on whether something should be owned by Repo Management or IAM.

## Product and technical documentation

Please go to [IAM Team Google Drive](https://drive.google.com/drive/u/0/folders/0ACd8_Z-WGWroUk9PVA?ths=true).

## [Playbooks](playbooks/index.md) and procedures

- [Getting a list of cloud users](playbooks/getting-a-list-of-cloud-users.md)

## [Hiring](hiring/index.md)

This section contains links to IAM specific interview types.

- [Architectural Interview](hiring/iam-software-engineer-architectural-interview.md)
- [Pairing Coding Interview](../../dev/hiring/software-engineer-coding-exercise.md#iam-team-coding-exercise)

## Onboarding

### Onboarding goals and milestones

Your onboarding will take up to three months. During this time, you should acquire the necessary domain knowledge and experience that will allow you to succeed in the role of [software engineer](../../dev/roles/index.md#software-engineer) within your [seniority level](../../dev/career-development/framework.md#levels). This process is a team effort, and your success depends not only on your actions, but also on full support from your team and manager.

We are applying 30/60/90 day patterns and breaking down the onboarding process into three milestones, each with defined themes and outcomes to keep things organized and clarify what you should expect.

#### First month

The central theme for the first month is **learning**. During these 30 days, your goal is to acquire the **foundational domain knowledge** about our product, processes, architecture, and codebase to help you **feel comfortable and effective in a software engineer's role** in the IAM team.

You will be exposed to a ton of new information - you will meet many people, read multiple documents, and, most importantly, solve small, well-defined technical challenges. We understand this might feel overwhelming, so please relax and do not stress. This first month is the time for [learning and growth](../../../../company-info-and-process/values#continuously-grow).

#### Second month

We will give you more **ownership** and opportunities to make an impact. While learning will still be the central theme, you can expect more complex problems to solve. You will also get your **first project assigned**, requiring you to collaborate with other teams, think about planning, execution, risk management, technical design, and other factors.

With the domain knowledge and business context you have acquired so far, it's an excellent opportunity to **start making an impact on the team**. We expect your honest **feedback** about our current processes, tooling, architecture, code base, product goals etc. Please be [proactive in sharing your ideas](../../../../company-info-and-process/values#high-agency) on how we can improve in the spirit of **continuous improvement**.

#### Third month

Time is running fast, and you learned a lot. You feel productive and autonomous, and your contributions make a real impact on the team. It's time to provide you with more **technical leadership** opportunities.

We would like you to take the role of a **Directly Responsible Individual (DRI)** for a given project. DRIs are empowered and accountable for the success of the initiative they lead. The scope and complexity of the problem will depend on your seniority level. While you likely won't be the only person working on this project, it's up to you to make sure it gets done and that you have all resources necessary. Being a DRI might sound challenging and stressful, especially during your first months at Sourcegraph. Don't worry; your buddy, peers, and team's triad (Project Manager, Project Designer, and Engineering Manager) are here to help and support you. The goal is to give you the sense of responsibility, ownership, and experience of wearing different hats.

Finally, we would like you to start **shadowing** your team members during **on-call rotation** and participate in responding to and resolving production incidents. This experience will prepare you for performing on-call duty once you finish your onboarding process.

### Questions that you might come up with during your onboarding

Here you can find a list of questions asked by other team members during their onboarding. As a distributed, async-first team, our goal is to provide you with the answers to all these questions in an asynchronous form.

If the answer is not available below, your buddy and the whole team will share their knowledge with you. We highly encourage you to contribute to this list and add tasks to our [onboarding improvements](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateammate-onboarding) to continuously improve the IAM team domain knowledge database and onboarding process.

- How Sourcegraph is designed? - Deep dive into our [architecture](https://docs.sourcegraph.com/dev/background-information/architecture)
- On-premise, managed instances, and the Cloud - What are main differences and similarities? What should I care about from the perspective of the IAM team?
- Life of a commit - How does my code end up in production?
  - [Current Software Development Life Cycle](../../sdlc.md)
  - [Cloud CI pipeline](https://docs.sourcegraph.com/dev/background-information/continuous_integration)
    - Video from Dave Try about [CI pipeline](https://www.loom.com/share/601c226a8a93429890c40213922476f9)
    - [CI/CD slides](https://docs.google.com/presentation/d/1ML71MPM4n9EHW-57p8ks9GktJdKqrcQnWhBiU2qQGpI)
    - [Deployment to production](../../dev/process/deployments/index.md)
  - [How to deploy during a freeze](../devops/deploy-code-change.md)
- Decisions/trade-offs we accepted in our development process:
  - Why do we have a single repo for all services?
  - Why do we have a distributed monolith?
  - How does our continuous deployment model work?
  - Why we are using GraphQL API?
- Overview of the Cloud infrastructure setup.
- Overview of the frontend/UI layer at Sourcegraph.
- [Overview of the GraphQL API layer at Sourcegraph](https://docs.google.com/document/d/1urMZCQ4ZRqHqGvYoKXgLG7EfBEZa_foIilJEhA9Es28/edit#)
- I am debugging an issue on production - where can I find logs, metrics, events, and traces?
- What is the difference between login connection and code host connection? How do we authenticate and authorize users on the Cloud?
- Authorization of GraphQL calls - how do we know the call was made by a legitimate user?
- [How do we add repositories to Sourcegraph, and how does the repository state management work?](https://docs.google.com/document/d/1BS-gd3oU-sl3B2Mu6CoERl452kP7hlH1z1fbIBotXic/edit#heading=h.kelnla4sqwyv)
- [How do we fetch, sync, and enforce code host repository permissions?](https://docs.google.com/document/d/17xYmDqSfOUZuqwH8OA-mh0DRieZedA0JkHGffgvzSBw/edit#heading=h.kelnla4sqwyv)
- [How does subscription and license management work?](https://docs.google.com/document/d/1ytTm57Oaf1Hr3cUtzIotnezG_I2OEKBoamtkcqlXefk/edit#)
- [Database schema overview](https://github.com/sourcegraph/sourcegraph/blob/main/internal/database/schema.md)
- [How do we deal with incidents?](../../dev/process/incidents/index.md)
- What is our on-call strategy?

## Useful links

- [IAM Team GitHub Project](https://github.com/orgs/sourcegraph/projects/259)
- [IAM Team Google Drive](https://drive.google.com/drive/u/0/folders/0ACd8_Z-WGWroUk9PVA?ths=true)
- [IAM Team Retrium workspace](https://app.retrium.com/team-room/0c97e800-29c0-41cb-97e1-eb2556fbfa7d)
