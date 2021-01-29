# Business Operations & Strategy

The Business Operations & Strategy (BizOps) team is responsible for [translating business goals (strategy) into tactical operations (execution)](https://medium.com/business-startup-development-and-more/why-your-startup-also-needs-a-bizops-team-5d2e7d436a0).

## Members

- S.S., Director of Business Operations & Strategy (starting 2021-02-15)
- [Eric Brody-Moore](../../../../company/team/index.md#eric-brody-moore), Business Operations Senior Analyst
- [Farhan Attamimi](../../../../company/team/index.md#farhan-attamimi), Business Operations Analyst
- S.H., Business Operations Analyst (starting 2021-03-08)
- K.B., Business Operations Analyst (starting 2021-03-08)

## Roles

See our [careers page](../../../../company/careers.md) for open roles on the BizOps team.

## Goals

TODO

# Analytics

This page describes Sourcegraph's analytics function, our data sources, and how to use our data tools.

To reach us, mention @business-team in the most relevant channel (i.e. #marketing for a marketing-related question).

## Active product analytics dashboards

Dashboards are structured by goal instead of team. As we have more and more projects being worked on and tracked concurrently, this makes it easier for the product, engineering and business teams to track, link to, and simplify the lifecycle of dashboards. For example, we don't need to think about when it's time to deprecate a look from the code intel dashboard. When the goal is removed, the dashboard is archived.

WIP

- LSIF adoption
- Sourcegraph WAU
- Browser extension adoption
- Sourcegraph extension discoverability
- Enterprise onboarding
- Code monitoring/saved searches
- Campaigns engagement

## How we work

**Internal BizOps projects:**  We use [GitHub issues in the Sourcegraph analytics repository](https://github.com/sourcegraph/analytics/issues) to document projects, and the [analytics kanban board](https://github.com/orgs/sourcegraph/projects/63) for prioritization.

**Cross-functional projects:** Tag @ebrodymoore in existing [sourcegraph/sourcegraph GitHub issues](https://github.com/sourcegraph/sourcegraph/issues) or create a new issue. For larger projects, please work with the BizOps team to lay out the following information to help us understand and prioritize your request:

- **People:** Who is involved, and what are the expectations of each person? Who will be responsible for driving the project forward? Does each person have the necessary bandwidth to uphold the expecations asked of them? 
- **End state:** What is the end state of the project? What decisions will be made? Be as specific as possible (i.e. if the end state is a graph, draw out the graph). Please provide a "data roadmap" if there are going to be multiple phases of the project. 
- **The why:** How does it support [Sourcegraph's company and team goals](../../../company/goals/index.md)?
- **Timeline:** What's the timeline of the project? When does this need to be delivered, and how will it be followed up upon in the future?

**Small asks and questions:** Post in the #analytics channel. 

If you need clarification or are not sure about any of the above, ask a question in the [Slack #analytics channel](https://sourcegraph.slack.com/archives/CN4FC7XT4).

## Data sources

We collect data from the following:

* Google Analytics: Website analytics for Sourcegraph marketing and docs pages (not Sourcegraph.com)
* HubSpot: Marketing automation
* Salesforce: Customer Relationship Management system (CRM)
* MixMax: Email marketing automation (Apollo is not used in production, but still retains data)
* ZoomInfo:  Data enrichment of account and contact information
* Sourcegraph.com Site-admin pages: customer subscriptions and license keys
* [Pings](https://docs.sourcegraph.com/admin/pings) from self-hosted Sourcegraph instances containing anonymous and aggregated information. There are [specific guidelines](../../engineering/adding_ping_data.md) that must be followed for teams to add ping data. 
* [Custom tool to track events](https://github.com/sourcegraph/sourcegraph/issues/5486) on the Sourcegraph.com instance
* [Prometheus dashboards](https://sourcegraph.com/-/debug/grafana/?orgId=1) show high-level insight into the health of a Sourcegraph instance to admins. Sourcegraph teammates can see the health of Sourcegraph.com. 

We have [written policies about how we handle customer information](customer_data_policy.md). 
	
## Data tools

* [Looker](https://sourcegraph.looker.com/projects/sourcegraph_events/files/1_home.md): Business intelligence/data visualization tool
* Google Cloud Platform: BigQuery is our data warehouse and the database Looker runs on top of
* Google Sheets: There are a [number of spreadsheets](https://drive.google.com/drive/folders/1LIfVyhjhh_mpc0SNOFvpNfN2h4CmGQmI) that Looker queries (by way of BigQuery).
* BizOps builds ad-hoc tools to analyze data for various reasons. The projects are in the [Google Drive Analytics folder](https://drive.google.com/drive/folders/1mtrHKsB2Kv0IGQ829zbcRGDSYHQpzkfd) and the source code is available in the [analytics repo](https://github.com/sourcegraph/analytics).

### Data pipelines

Every underlying data source (not chart!) is assumed to always be up-to-date unless noted otherwise.

#### HubSpot

[The HubSpot data pipeline](https://github.com/sourcegraph/analytics/tree/master/HubSpot%20ETL) is updated once per day (in the afternoon PST).  If you need the latest data at any time, post in the #analytics channel in Slack and the BizOps team can run the pipeline manually. 

[Lead-generation](https://docs.google.com/spreadsheets/d/16S3xlcY7DmpcfKZYD-3VHUsaPLiYHyisu8cD_gZpv0Q/edit#gid=0) from HubSpot is triggered by Zapier and is always up-to-date. [Marketing operations](../../marketing/marketing_operations.md#maintaining-data-pipelines) has more information on lead-gen events. 

## Using Looker

[Looker](https://sourcegraph.looker.com/) is a self-service tool with many pre-built reports and visualizations. The [onboarding doc](https://sourcegraph.looker.com/projects/sourcegraph_events/files/1_home.md) is located in Looker. Reach out in the #analytics Slack channel if you have any questions, we're happy to help!

### Quick links
* [Sales/customer engineering](https://sourcegraph.looker.com/browse/boards/2)
* [Product/engineering board](https://sourcegraph.looker.com/browse/boards/5)

### Things to know about using Looker

* By clicking `Explore from here` or changing a filter on a dashboard, you *will not* change the underlying dashboard. Unless you explicitly click `Edit`, you are considered to be on your own temporary branch and will not change anything (even for yourself the next time you open the dashboard). 
* When creating and editing dashboards, save individual tables and charts as [looks](https://docs.looker.com/exploring-data/saving-and-editing-looks) instead of tiles directly to the dashboard. Looks can be added to multiple dashboards while tiles cannot be, and when look is edited, the changes will apply to dashboards that look exists. 

### Downsides of Looker (and our plans to address them)
- **Discoverability of data**: Bookmarking, favoriting or adding the sales/customer engineering board, product/engineering board and server instances overview look (or some combination of them) to your Looker instance is the best solution right now. These are all kept up-to-date with the most relevant data for all teams. 
- **Speed**: Looker’s UI makes it easy to analyze data, but the result really complex SQL query that take awhile to run (especially on dashboards that are compiled of many separate queries). Fixing the performance issues is not currently a priority, but is something that we’ll get to when we grow the team out.  
- **Naming conventions**: We’re slowly working on making naming conventions of dashboards, graphs, data points, etc... more obvious. If you come across anything that isn’t clear, let us know! 
