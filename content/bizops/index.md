# Business Operations

The Business Operations (BizOps) team is responsible for [translating business goals (strategy) into tactical operations (execution)](https://medium.com/business-startup-development-and-more/why-your-startup-also-needs-a-bizops-team-5d2e7d436a0).

- [Finance](#finance-and-reporting)
- [Analytics](#analytics)

# Finance and reporting

## Sources of truth
- [Financial statements](https://www.dropbox.com/home/Finance/Financial%20reports)
- Metrics
	- [Quarterly](https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c/edit#gid=774643452&range=A36) and [monthly](https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c/edit#gid=774643452&range=A120) IARR
	- [ARR](https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c/edit#gid=508166254)
	- [Bookings](https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c/edit#gid=0)
	- [Net ARR churn](https://docs.google.com/spreadsheets/d/1Ao3Nqw6gH3yAuZtICV3xo35kKKnI9oKXnvPuTQ0Fh9c/edit#gid=774643452&range=A39)
	- Note: this spreadsheet is updated manually, so it will not be updated in real-time. The BizOps team is committed to updating the sheet within 3 business days (but in most circumstances much sooner) of the closing of a new or renewal deal, or the end of the month for expansions. 
- [Pro-forma financials](https://docs.google.com/spreadsheets/d/1EkZ7O69-2jbgtacoFDrY8L6rP73Hlqp_syyVCnmGAFA/edit#gid=498016854) (including IARR goals, hiring plans and cost model)
- [Weighted quarterly sales projections](https://sourcegraph.looker.com/looks/614)
- [Board deck calculations](https://docs.google.com/spreadsheets/d/1iI1J40Pw5o9hDqhx658BQ9QeoFlm-OU8NfbeRY16l8Q/edit#gid=0)

## Billing

Each month, [expansion and MAU amounts are calculated](https://docs.google.com/spreadsheets/d/1tRcz3bNOho1TyWvrYSv37RIYcQs7I0i05-5eKwLq8TI/edit#gid=0) and sent as invoices through Xero. 

## Goals

TODO

# Analytics

This page describes Sourcegraph's analytics function, our data sources, and how to use our data tools.

To reach us, mention @ericbm in the most relevant channel (i.e. #marketing for a marketing-related question).

## Submitting a data request

**Projects:** Proposals to capture and report on new data are in [GitHub issues in the Sourcegraph analytics repository](https://github.com/sourcegraph/analytics/issues). Provide the following data to help us understand and prioritize your request:

- What is the purpose of the visualization?
- Will it be frequently used, or is it only needed sporadically?
- How does it support [Sourcegraph's company and team goals](../../company/goals/index.md)?
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
* [Pings](https://docs.sourcegraph.com/admin/pings) from self-hosted Sourcegraph instances containing anonymous and aggregated information. There are [specific guidelines](../engineering/adding_ping_data.md) that must be followed for teams to add ping data. 
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

[Lead-generation](https://docs.google.com/spreadsheets/d/16S3xlcY7DmpcfKZYD-3VHUsaPLiYHyisu8cD_gZpv0Q/edit#gid=0) from HubSpot is triggered by Zapier and is always up-to-date. [Marketing operations](../marketing/marketing_operations.md#maintaining-data-pipelines) has more information on lead-gen events. 

## Using Looker

[Looker](https://sourcegraph.looker.com/) is a self-service tool with many pre-built reports and visualizations. The [onboarding doc](https://sourcegraph.looker.com/projects/sourcegraph_events/files/1_home.md) is located in Looker. Reach out in the #analytics Slack channel if you have any questions, we're happy to help!

### Quick links
* [Go-to-market board](https://sourcegraph.looker.com/browse/boards/2)
* [Product/engineering board](https://sourcegraph.looker.com/browse/boards/5)
* [All instances](https://sourcegraph.looker.com/looks/436)
