# Business Operations & Strategy

The Business Operations & Strategy (BizOps) team is made up of Business Operations, Data Operations, and Analytics. This page contains information that is relevant to the whole company, and each of the links below will take you to subteam-specific information. There are plans to split up the Business Operations and Data and Analytics teams, which will happen sometime after the [Director of Data and Analytics](https://boards.greenhouse.io/sourcegraph91/jobs/4084968004) position is filled. At this point, everything in this section applies to all functional areas.

## Functional areas

- [Business Operations (BizOps)](business-operations/index.md)
- Data and Analytics
  - [Data Operations](data-operations/index.md)
  - [Analytics](analytics/index.md)

## Members

{{generator:reporting_structure.vp_operations}}

## Resources

- [Teammate onboarding](onboarding/index.md)
- [User metrics definitions](process/user_definitions.md)
- [CustomerOps Tools Overview](tools/customer_ops_tools.md)
- [Amplitude overview](tools/amplitude.md)
- [A/B testing](process/ab-testing.md)
- [Guide to user journey mapping](../../departments/product-engineering/product/process/user_journey_maps.md)
- [Guide to product-led growth](process/product_led_growth.md)
- [Customer data policy](process/customer_data_policy.md)
- [Team processes](process/index.md)

## Goals

See the [Operations OKRs](../../strategy-goals/goals/2023_Q1.md#operations-bizops-finance-techops-legal-peopleops) for the Ops team's full OKRs. Below are the BizOps-specific OKRs:

OBJECTIVE: Empower the business through better visibility of data

- KR: Multi-touch attribution is in place
- KR: Understanding of what customer attributes and Sourcegraph actions drive higher close/renewal rates or adoption/consumption, and for CE to put those findings into practice
- KR: Understanding of what user actions drive Cloud account setups (or retention), and for Product and Commercial Sales to put those findings into practice

## How to work with us

### Requests for deliverables

The Business Operations team accepts work requests through [GitHub issues in the Sourcegraph analytics repository](https://github.com/sourcegraph/analytics/issues). Any request that doesn't have an attached GitHub issue will not have an assigned individual and expected timeline, and won't be tracked by the team.

Examples of requests that require an issue:

- requesting a new dashboard
- getting a question answered with data (e.g. "I would like to know the number of MAUs for the Batch Changes feature")
- requesting analytics support for a new feature (e.g. "Can we start tracking page views of our case studies")
- finding a bug in our data or data pipeline (e.g. "I ran a SQL query and the data does not match my expectations")

GitHub issues help us manage requests by including as much relevant information as possible. Please use the relevant issue template in the repository and fill out the requested information. If no template matches, create a blank issue and include as many details around your request as possible. These points are normally useful:

- **The problem:** Describe the problem or question you have.
- **End state:** What is the end state of the project? What decisions will be made? Be as specific as possible (i.e. if the end state is a graph, draw out the graph in Figma, on paper and upload a PDF, etc)
- **The why:** What will this request be used for? How does it support [Sourcegraph's company and team goals](../../strategy-goals/goals/index.md)?
- **Timeline:** What's the timeline of the project? Is it urgent? When does this need to be delivered, and how will it be followed up upon in the future?
- **People:** Who is involved, and what are the expectations of each person? Who will be responsible for driving the project forward? Does each person have the necessary bandwidth to uphold the expectations asked of them?

A BizOps team member will triage and assign issues to the relevant team member.

For _time-sensitive_ and _urgent_ requests, please tag the issue with the `urgent` label. This will make the GitHub issue appear in the #analytics channel in Slack to ensure visibility, where you can follow up with more details/asks.

### What a great request looks like

- **The problem:** We don't have a great high-level dashboard for the product/eng leadership team to get a pulse on our product KPIs.
- **End state:** [PDF of a sketch](https://drive.google.com/file/d/1X2VKoWUvJpLS7LMMkG3bmhA7DJkXVujB/view) and a [doc of all the metrics](https://docs.google.com/document/d/111lB3rPDU3DHiiu4fc8MCVAK_-b20HL9cM4BkIkbmk8/edit#).
- **The why:** This will play a part in prioritizing product/eng projects, understanding feature adoption, progress towards OKRs, etc
- **Timeline:** By 2021-10-22 for a first draft would be ideal!
- **People:** Nick and Christina will be responsible for usage of the dashboard and suggesting modifications. This will be delivered (automatically) into #TBD Slack channel every Monday.

### General contact

To get in touch with us, or ask for our input or help:

- Post in one of our [slack channels](#slack-channels), or mention @business-ops in any channel
- Tag @sourcegraph/bizops in existing GitHub issues

## How we work

We use [GitHub issues in the Sourcegraph analytics repository](https://github.com/sourcegraph/analytics/issues) to track projects, and the [Business Operations Kanban board](https://github.com/orgs/sourcegraph/projects/63) for tracking current projects.

### Slack channels

- **#business-ops** to interact with the Business Operations team (e.g. questions you know are specifically for us)
- **#business-ops-internal** for internal BizOps communication
- **#analytics** for anything related to analytics; not just the Business Operations team (e.g the impact on a shift from HubSpot to Marketo, sharing a deliverable that has cross-functional impact, or a question related to data you don’t know where to ask). This channel has previously been a catch-all for Business Operations, and we'll be pushing you all towards business-ops for those topics
- **#analytics-review** for help with self-service and WIP data projects (questions about the data, requests for peer review). Although we do expect to be involved in this quite a bit, it’s not just meant to get feedback from Business Operations. We will also be using this channel to have our work peer reviewed and collaborate with other folks from different parts of the business! Anybody comfortable enough with data can be a peer reviewer or answer questions
- **#data-eng-ops** for Data Ops communication
