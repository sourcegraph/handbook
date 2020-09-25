# Business & product operations

The business & product operations (BizOps) team is responsible for [translating business goals (strategy) into tactical operations (execution)](https://medium.com/business-startup-development-and-more/why-your-startup-also-needs-a-bizops-team-5d2e7d436a0).

## Members

- [Dan Adler](../../../../company/team/index.md#dan-adler-he-him), VP Operations
- [Eric Brody-Moore](../../../../company/team/index.md#eric-brody-moore), Business Operations Senior Analyst

## Roles

See the [Operations roles](../roles/index.md) page.

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

**Data requests and cross-functional projects:** Tag @ebrodymoore in existing [sourcegraph/sourcegraph GitHub issues](https://github.com/sourcegraph/sourcegraph/issues) or create a new issue. Provide the following data to help us understand and prioritize your request:

- What is the purpose of the visualization?
- Will it be frequently used, or is it only needed sporadically?
- How does it support [Sourcegraph's company and team goals](../../../company/goals/index.md)?
- Do you know how you want the data visualized? If you need a new graph or chart, adding a photo of a sketch on paper helps immensely.
- When does this need to be delivered?
- How urgent is this request?

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
* Google Sheets: There are a [number of spreadsheets](https://drive.google.com/drive/folders/1vOyhFO90FjHe-bwnHOZeljHLuhXL2BAv) that Looker queries (by way of BigQuery).
* BizOps builds ad-hoc tools to analyze data for various reasons. The projects are in the [Google Drive Analytics folder](https://drive.google.com/drive/folders/13b2PJqiQzjLMrM2ZAjlsax0fT_DQlxFm) and the source code is available in the [analytics repo](https://github.com/sourcegraph/analytics).

### Data pipelines

Every underlying data source (not chart!) is assumed to always be up-to-date unless noted otherwise.

#### HubSpot

[The HubSpot data pipeline](https://github.com/sourcegraph/analytics/tree/master/HubSpot%20ETL) is updated once per day (in the afternoon PST).  If you need the latest data at any time, post in the #analytics channel in Slack and the BizOps team can run the pipeline manually. 

[Lead-generation](https://docs.google.com/spreadsheets/d/16S3xlcY7DmpcfKZYD-3VHUsaPLiYHyisu8cD_gZpv0Q/edit#gid=0) from HubSpot is triggered by Zapier and is always up-to-date. [Marketing operations](../../marketing/marketing_operations.md#maintaining-data-pipelines) has more information on lead-gen events. 

## Using Looker

[Looker](https://sourcegraph.looker.com/) is a self-service tool with many pre-built reports and visualizations. The [onboarding doc](https://sourcegraph.looker.com/projects/sourcegraph_events/files/1_home.md) is located in Looker. Reach out in the #analytics Slack channel if you have any questions, we're happy to help!

### Quick links
* [Go-to-market board](https://sourcegraph.looker.com/browse/boards/2)
* [Product/engineering board](https://sourcegraph.looker.com/browse/boards/5)
* [All instances](https://sourcegraph.looker.com/looks/436)
