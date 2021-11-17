# Cloud Software-as-a-Service Team

The Cloud Software-as-a-Service (SaaS) Team is responsible for the **service management** part of the Sourcegraph Cloud product. The team provides both **customer-facing** and **internal capabilities that enable our customers to use the Sourcegraph Cloud product as a service**.

## Vision

TBA. More can be found in our [Cloud Vision](../index.md#vision)

## Goals and Roadmap

Our detailed Sourcegraph Cloud roadmap is currently internal-only until our public announcement later this year. Our Q4 OKRs are publicly available [here](../index.md#okrs-fy22q4).

Beyond Q4, our goals over the next 12-24 months include:

- Provide a delightful self-service onboarding and self-service payments capabilities for new developers and new teams to enable a true Software-as-a-Service experience for customers who prefer it
- Provide in-depth administration capabilities to unlock adoption of Sourcegraph Cloud by large enterprises
- Enable full multi-tenancy for Sourcegraph, both cloud and on-prem, providing additional security for customers who prefer it
- Create a culture that focuses on launching and landing features by verifying user love of each new feature we release

## Areas of Ownership

Service management is a broad area of ownership. To provide more clarity into what its stands for, we will break this down based on product domains. We will also provide a list of features and services from a technical engineering ownership perspective.

### Product domains

#### Administration experience and teams management

Capabilities that provide customers with transparency and access control to how Sourcegraph Cloud is used within their organizations. This means changing the Sourcegraph product from a single to multi-tenant architecture that will enable multiple customers to operate on a single shared cloud instance securely. On the other side, it’s all about providing functionalities to support organizations collaborating on the cloud. This includes but is not limited to team management, role-based access control, and other features targeted towards admins on our customer’s side.

In addition to the organization-level management capabilities, we are also responsible for individual users' administration experience.

While managing code host connections and repositories as a domain is owned by the Repository Management team, we identify this area as crucial for supporting organizations collaborating on the cloud. It’s also impacted by the transition from single to multi-tenant architecture. Because of both, we acknowledge the lack of clear boundaries between the domains and the need for close collaboration between both teams in this problem space.

#### Subscription management

The end-to-end experience of managing customers’ subscription lifecycle includes the subscription as the entity, its changes over time, and the impact on Sourcegraph product offering and AAR. This includes both providing transparency to the customers and internal tooling to support Customer Engineering and Finance and Sales teams.

#### Pricing and packaging

Both technical and presentational sides of pricing. This includes both the presentation of pricing tiers to the customers with the process of selecting an appropriate plan and underlying technical implementation of the pricing model and its connection with billing and payments, plus impact on subscription management.

#### Billing, invoicing, and payments

The end-to-end self-service process on paying for Sourcegraph subscription on the cloud.

#### Identity and access management

We own both authentication and authorization to Sourcegraph.com, including both login and sign-up flow and user management on the cloud.

Code-level authorization is enforced based on the repository permissions on the code host level and the Repository Management team owns this area. It is coupled with administration experience and team management, which created close collaboration between both teams.

#### Usage reporting and entitlement enforcement

Customer-facing and internal tools and features that provide transparency to how customers consume entitlements within their current subscription, including entitlements limiting enforcing capabilities.

### Engineering ownership

The list below contains features and services that already exist, and the Cloud SaaS team is responsible for keeping the light on them.

- Organizations
- Multi-tenancy
- User profile and settings
- Sign up flow
- Post sign up and onboarding flow
- User notifications

## Team

- [Ryan Phillips](../../../company/team/index.md#ryan-phillips) (he/him) - [Product Manager](../../../product/roles/index.md#product-manager)
- [Quinn Keast](../../../company/team/index.md#quinn-keast) (he/him) - [Product Designer](../../../product/roles/index.md#product-designer)
- [Rafal Leszczynski](../../../company/team/index.md#rafal-leszczynski) (he/him) - [Engineering Manager](../../roles.md#engineering-manager)
  - [Joe Chen](../../../company/team/index.md#joe-chen) (he/him)
  - [Artem Ruts](../../../company/team/index.md#artem-ruts) (he/him)
  - [Milan Freml](../../../company/team/index.md#milan-freml) (he/him)
  - [Rafal Gajdulewicz](../../../company/team/index.md#rafal-gajdulewicz) (he/him)
  - P. R. (he/him) - starting 2022.01

We’re hiring! [Check out our open roles](https://boards.greenhouse.io/sourcegraph91/jobs/4101082004).

## Partner Teams

The Cloud SaaS team works alongside several other teams within the Cloud organization at Sourcegraph. You can find more information about their teams and goals on the respective pages:

- [Cloud Growth](../growth)
- [Cloud DevOps](../devops)
- [Extensibility](../extensibility)
- [Security](../security)

## News and updates

- [2021.10.13 monthly update](https://groups.google.com/a/sourcegraph.com/g/engineering-team-status/c/3p0Pj2-RfVY?hl=en)

## How we work

### How to contact the team and ask for help

- For cloud users with urgent help requests reach out to our support team at [support@sourcegraph.com](mailto:support@sourcegraph.com).
- For emergencies and incidents, alert the team using Slack command `/genie alert [message] for Cloud SaaS Team`.
- For internal Sourcegraph teammates, join us in [#cloud-saas](https://sourcegraph.slack.com/archives/cloud-saas) to ask questions or request help from our team.
- For cloud users with feature requests, please reach out to our product manager, Ryan, at [ryphil@sourcegraph.com](mailto:ryphil@sourcegraph.com) and include `Cloud Feature Request:` in your subject line.

### Planning, execution, and issue tracking

The Cloud SaaS team plans work based on our [long-term roadmap](https://docs.google.com/spreadsheets/d/1vTEWyiNQLhJYxo99HkgOhtdNyYfSlyyRNuhEnIySMMc/edit#gid=0) and setting [quarterly goals](#goals-and-roadmap). During the quarter, we follow a flavor of the SCRUM process with biweekly sprints. Our cycle starts every second Tuesday with a retrospective, sprint review, and planning meetings. We set goals for each sprint and focus team efforts during the iteration on achieving these goals rather than closing a number of issues. It’s the outcomes and delivered customer value, not the output, that matters.

We are using [Jira](https://www.atlassian.com/software/jira) as our project tracking tool. While you will need access to Sourcegraph Atlassian account to view the [Cloud SaaS project](https://sourcegraph.atlassian.net/jira/software/c/projects/CLOUD/boards/11/backlog?selectedIssue=CLOUD-73&issueLimit=100) the [list view of all the issues](https://sourcegraph.atlassian.net/jira/software/c/projects/CLOUD/issues/) within this project is publicly available.

#### How we use Jira

- Jira is the single source of truth for our backlog. Please use descriptions, comments under Jira issues, and different categorization options to keep all the issues up to date. Comments are also the best place for asking questions about the issue itself. That way, we keep all the context in a single place.
- We use [versions/releases](https://sourcegraph.atlassian.net/projects/CLOUD?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page) for milestones (usually connected with the quarterly goals) and group issues for given initiatives/projects into epics.
- We use [components](https://sourcegraph.atlassian.net/jira/software/c/projects/CLOUD/components) to track different service or engineering ownership areas. This for example, helps us understand what the cost of operations with each area we own is.
- To track GitHub PRs automatically in JIRA, use the JIRA ticket number anywhere in the branch name. So for example, if the ticket number is `CLOUD-42` and you name your branch `the-answer-to-everything-CLOUD-42`, the resulting PR from this branch will automatically be associated with the JIRA ticket. The same goes for commits and PRs - all will be linked to a Jira issue as long as you keep the issue id within the commit message or PR title.
- We use [Agile Poker](https://confluence.spartez-software.com/display/JPP/Agile+Poker+for+Jira+Cloud) addon for [groomings and estimation sessions which we run asynchronously](#groomings).
- You can use Jira issue ID (exp. `CLOUD-123`) within the messages on the [#cloud-saas-internal](https://sourcegraph.slack.com/archives/C02EQBDB1LY) Slack channel to automatically create a link to Jira issue. We are also pushing all status changes to our Jira project to [#cloud-saas-jira](https://sourcegraph.slack.com/archives/C02FDFTBATA) Slack channel.

### User research

We conduct regular user research and usability testing. This helps us understand how our product is being used, identify pain points and opportunities, and better understand our users.

Research is typically planned, organized, and executed by the product team.

#### Observing user research

Anyone on the team can join a research session as an observer and notetaker. Observing and notetaking during user interviews and testing sessions is an amazing way to get a first-hand look at how others use our products and ideas, and your role as a notetaker is a huge help for the team.

See "[So you’re about to help us with user testing](../../../product/user_research/user_research_observer.md)" to learn what to expect during user research sessions and how to take great notes.

#### User research calendar

We use a shared [Sourcegraph Cloud Research calendar](https://calendar.google.com/calendar/u/0?cid=Y185ZG9oYmJxOW5mYW50cDVva2t1dHBpMnJha0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) to schedule and surface research activities. When new research sessions are scheduled, they will be automatically duplicated to the Cloud SaaS team calendar, and the Cloud SaaS team invited as attendees (note that attendance is always optional, but we haven’t found a way to reflect this in the automatic event).

### Working agreements

#### Decision log

[This document](https://docs.google.com/document/d/10ylYWDpDABAlaF-dPi5_hgjNkTmakMeivxxsIz2Q3uQ/edit?usp=sharing) contains all important decisions and agreements done within the Cloud SaaS team in chronological order so that they can be tracked over time. Consider this a single source of truth for all the decisions within the team. If you are leading the decision-making process, please update the documents with the details about the decision made. If appropriate, especially for team working agreement, please update the handbook as well.

#### Team internal communication

TBD

#### Sprint reviews

Each sprint is followed by a short sprint review meeting on Google Meet. During this meeting, we review the state of sprint goals, demo the features we delivered and discuss topics related to the sprint's scope. We also review the state of our retrospective actions items. This is an open meeting. Our stakeholders and members of other teams at Sourcegraph are always welcome to attend. Each review has a designated facilitator, usually an engineer from the Cloud SaaS team, responsible for filling in the [agenda](https://docs.google.com/document/d/14hxy2WrcOpKwpRKqkJ0bvsDc4vRyTolmgBsoOoj2jko/edit) and facilitating the meeting.

#### Retrospectives

The team is doing retrospectives on a biweekly basis at the end of each sprint. We are using [Retrium](https://app.retrium.com/team-room/0c97e800-29c0-41cb-97e1-eb2556fbfa7d) and changing the format of the retrospective from time to time, experimenting with [different techniques available within Retrium tool](https://www.retrium.com/retrospective-techniques). Action items from the retrospective are [migrated to Jira](https://sourcegraph.atlassian.net/browse/CLOUD-92) and usually have the owner assigned responsible for leading the action to its completion.

#### Groomings

To support the globally distributed nature of our team, we are doing our groomings in an asynchronous format. [Agile Poker Jira addon](https://marketplace.atlassian.com/apps/700473/agile-poker-for-jira-planning-estimation?tab=overview&hosting=cloud) is our tool of choice, and we are running our groomings session based on the following schedule:

- Each Monday, the new async grooming session should be created within [Agile Poker app](https://sourcegraph.atlassian.net/projects/CLOUD?selectedItem=com.atlassian.plugins.atlassian-connect-plugin:com.spartez.jira.plugins.jiraplanningpoker__poker-project-page#!/board/11/sessions-management?type=async)
- Every task added to the session should have an owner assigned. The task assignee is responsible for breaking the tasks into meaningful subtasks if applicable and working on description and acceptance criteria to meet the expectations of our DoR. This should be done between Monday and Wednesday.
- Thursday and Friday are reserved for the whole team async estimation based on the Agile Poker session settings. We are using Fibonacci numbers and treating one story point as one day of work for a single engineer

#### Team calendar

All team events and reminders should be added to the [team calendar](https://calendar.google.com/calendar/embed?src=c_n5p67no2g2tprhq3g0v7km7pv8%40group.calendar.google.com&ctz=Europe%2FWarsaw). This will allow us to keep all team events and reminders in a single place, increasing visibility for people within and outside of the team.

- Please add `cloud-saas-team@sourcegraph.com` group to participants for all events you expect people to join/participate in. This will automatically block time on your peers’ calendars. Also, if they can’t join, they can decline the event providing transparency about their ability to participate.
- For reminders, you don’t need to add participants

#### Making pull requests and asking for code reviews

TBD

#### Definition of done (DoD)

TBD

#### Definition of ready (DoR)

TBD

#### On-call

TBD

## Product and technical documentation

TBD

## Playbooks and procedures

- [Getting a list of cloud users](./playbooks/getting-a-list-of-cloud-users.md)

## Hiring and onboarding

### Hiring

This section contains links to Cloud SaaS specific interview types.

- [Architectural Interview](./hiring/cloud-saas-software-engineer-architectural-interview.md)
- [Pairing Coding Interview](../../hiring/software-engineer-coding-exercise.md#cloud-saas-team-coding-exercise)

### Onboarding

TBD

## Useful Links

- [Cloud SaaS Jira Project](https://sourcegraph.atlassian.net/jira/software/c/projects/CLOUD/boards/11/backlog)
- [Cloud SaaS Retrium workspace](https://app.retrium.com/team-room/0c97e800-29c0-41cb-97e1-eb2556fbfa7d)
- [Looker dashboard with Cloud private code addption metrics](https://sourcegraph.looker.com/dashboards-next/207?Repo+Private+%28Yes+%2F+No%29=Yes%2CNo)
