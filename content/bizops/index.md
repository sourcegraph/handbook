# Business Operations & Strategy

The Business Operations & Strategy (BizOps) team is made up of Business Operations, Data Operations, and Analytics. This page contains information that is relevant to the whole company, and each of the links below will take you to subteam-specific information. There are plans to split up the Business Operations and Data and Analytics teams, which will happen sometime after the [Director of Data and Analytics](https://boards.greenhouse.io/sourcegraph91/jobs/4084968004) position is filled. At this point, everything in this section applies to all functional areas.

## Functional areas

- [Business Operations (BizOps)](business_operations.md)
- Data and Analytics
  - [Data Operations](data_operations.md)
  - [Analytics](analytics.md)

## Members

- [Dan Adler](../company/team/index.md#dan-adler-he-him), VP Operations
- [Eric Brody-Moore](../company/team/index.md#eric-brody-moore), Business Operations Manager
- [Farhan Attamimi](../company/team/index.md#farhan-attamimi), Senior Data Operations Analyst
- [Steph Hay](../company/team/index.md#steph-hay-she-her), Senior Business Operations Analyst
- [Kelsey Brown](../company/team/index.md#kelsey-brown-she-her), Senior Business Operations Analyst
- **Hiring**: [Director of Data and Analytics](https://boards.greenhouse.io/sourcegraph91/jobs/4084968004)

## Resources

- [Teammate onboarding](onboarding.md)
- [User metrics definitions](user_definitions.md)
- [CustomerOps Tools Overview](customer_ops_tools.md)
- [Amplitude overview](amplitude.md)
- [A/B testing](ab-testing.md)

## Goals

See the [Operations OKRs](../company/goals/2022_q3.md#operations-bizops-finance-techops-legal) for the Ops team's full OKRs. Below are the six OKRs specific to the BizOps team:

- KR: Enable the product team to self-serve on a majority of ad hoc analytical requests
- KR: 2x cloud weekly activation rate to N7
- KR: 2x cloud weekly retention rate to N8
- KR: Maximize ROI on marketing spend
- KR: We have mapped the Sourcegraph user journey and the SDR, Marketing, and/or Product teams are using 1+ recommendations for messaging, outreach, or user actions - that are correlated with converting free users to sales opportunities
- KR: Sales reps are using the new pricing model and report that it is helping to speed up or otherwise improve negotiations

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
- **End state:** What is the end state of the project? What decisions will be made? Be as specific as possible (i.e. if the end state is a graph, draw out the graph).
- **The why:** What will this request be used for? How does it support [Sourcegraph's company and team goals](../company/goals/index.md)?
- **Timeline:** What's the timeline of the project? Is it urgent? When does this need to be delivered, and how will it be followed up upon in the future?
- **People:** Who is involved, and what are the expectations of each person? Who will be responsible for driving the project forward? Does each person have the necessary bandwidth to uphold the expecations asked of them?

A BizOps team member will triage and assign issues to the relevant team member.

For _time-sensitive_ and _urgent_ requests, please tag the issue with the `urgent` label. This will make the GitHub issue appear in the #analytics channel in Slack to ensure visibility, where you can follow up with more details/asks.

### General contact

To get in touch with us, or ask for our input or help:

- Post in one of our [slack channels](#slack-channels), or mention @business-ops in any channel
- Tag [@sourcegraph/bizops](https://github.com/orgs/sourcegraph/teams/bizops) in existing GitHub issues

## How we work

We use [GitHub issues in the Sourcegraph analytics repository](https://github.com/sourcegraph/analytics/issues) to track projects, and the [Business Operations kanban board](https://github.com/orgs/sourcegraph/projects/63) for tracking current projects.

### Slack channels

- **#business-ops** to interact with the Business Operations team (e.g. questions you know are specifically for us)
- **#business-ops-internal** for internal BizOps communication
- **#analytics** for anything related to analytics; not just the Business Operations team (e.g the impact on a shift from HubSpot to Marketo, sharing a deliverable that has cross-functional impact, or a question related to data you don’t know where to ask). This channel has previously been a catch-all for Business Operations, and we'll be pushing you all towards business-ops for those topics
- **#analytics-review** for help with self-service and WIP data projects (questions about the data, requests for peer review). Although we do expect to be involved in this quite a bit, it’s not just meant to get feedback from Business Operations. We will also be using this channel to have our work peer reviewed and collaborate with other folks from different parts of the business! Anybody comfortable enough with data can be a peer reviewer or answer questions
