# Business Operations

The Business Operations (BizOps) team is responsible for [translating business goals (strategy) into tactical operations (execution)](https://medium.com/business-startup-development-and-more/why-your-startup-also-needs-a-bizops-team-5d2e7d436a0).

To reach us, mention `@ericbm` in #analytics, #sales or #marketing.
## Analytics

This page describes Sourcegraph's analytics function, our data sources, and how to use our data tools.

### How to submit a data request

[Looker](https://sourcegraph.looker.com/) is a self-service tool so we encourage everyone to try finding answers within the tool. [Get started here](#using-looker) if you're not familiar with Looker, the team in the #analytics Slack channel are more than happy to answer any questions regarding Looker. 

**Projects:** Add an issue to the [analytics board](https://github.com/sourcegraph/analytics/issues) in GitHub. This is used as the analytics project board and is triaged every day. Please think through and include the following so we can effectively prioritize your request.
- What is the deliverable going to be used for? Why do you need it? This helps the team prioritize requests. 
- What do you want the deliverable to look like (in as much detail as possible)? For example, if you want a specific chart that illustrates some metric, it would be extremely helpful to draw the chart on paper and attach it.
- When do you need the deliverable by? 
- Is this request a nice-to-have or a necessity?

**Small asks and questions:** Post in the #analytics channel in Slack. 

### Data sources

Here are the following sources we collect data from:

* Google Analytics: Website analytics for Sourcegraph marketing and docs pages (not Sourcegraph.com)
* HubSpot: Marketing automation and CRM
* Apollo: Email marketing automation
* Sourcegraph.com Site-admin pages: customer subscriptions and license keys
* [Pings](https://docs.sourcegraph.com/admin/pings) from self-hosted Sourcegraph instances containing anonymous and aggregated information
* [Custom tool to track events](https://github.com/sourcegraph/sourcegraph/issues/5486) on the Sourcegraph.com instance
* [Prometheus dashboards](https://sourcegraph.com/-/debug/grafana/?orgId=1) show high-level insight into the health of a Sourcegraph instance to admins. Sourcegraph teammates can see the health of Sourcegraph.com. 

### Data tools

* [Looker](#using-looker): Business intelligence/data visualization tool
* Google Cloud Platform: BigQuery is our data warehouse and the database Looker runs on top of
* Google Sheets: There are a [number of spreadsheets](https://drive.google.com/drive/folders/1vOyhFO90FjHe-bwnHOZeljHLuhXL2BAv)that Looker queries (by way of BigQuery).
* BizOps builds ad-hoc tools to analyze data for various reasons. The projects are in the [Google Drive Analytics folder](https://drive.google.com/drive/folders/13b2PJqiQzjLMrM2ZAjlsax0fT_DQlxFm) and the source code is available in the [analytics repo](https://github.com/sourcegraph/analytics).

### Data pipelines

Every underlying data source (not chart!) is assumed to always be up-to-date unless noted otherwise.

* HubSpot data: Every week on Sunday night or Monday morning, BizOps triggers [scripts](https://github.com/sourcegraph/analytics/tree/master/HubSpot%20ETL) that retrieve data from HubSpot and upload it to BigQuery. This does mean that currently our HubSpot data in Looker is not updated during the week. If you have a particular reason you'd like it to be updated during the week, mention @ericbm in the #analytics channel in Slack. 

## Using Looker

### Sourcegraph quick links

[All Instances](https://sourcegraph.looker.com/looks/436)<br/>
[Specific Instance Overview](https://sourcegraph.looker.com/dashboards/94?Unique%20Server%20ID=&Site%20ID=&filter_config=%7B%22Unique%20Server%20ID%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22%22%7D,%7B%7D%5D,%22id%22:4%7D%5D,%22Site%20ID%22:%5B%7B%22type%22:%22%3D%22,%22values%22:%5B%7B%22constant%22:%22%22%7D,%7B%7D%5D,%22id%22:5%7D%5D%7D) (To select a specific company, fill the Unique Server ID field)<br/>

Folders:<br/>
[Marketing](https://sourcegraph.looker.com/folders/109)<br/>
[Sales](https://sourcegraph.looker.com/folders/114)<br/>
[Product Insights](https://sourcegraph.looker.com/folders/113)<br/>

### Getting started with Looker

Looker enables us to explore and visualize Sourcegraph data sources. If you're a new user, here's where to get started.

[Exploring data](http://www.looker.com/docs/exploring-data/exploring-data)<br/>
[Visualizing data](http://www.looker.com/docs/exploring-data/visualizing-query-results)<br/>
[Building dashboards](http://www.looker.com/docs/exploring-data/building-dashboards)<br/>

Looker developed their own language called LookML for defining calculations and data relationships in a SQL database. The 'Explores' and other functionality you see in Looker is all based on a LookML model.  The average Sourcegraph teammate should not need to write any LookML code, but should you need or want to, here are a couple resources to get started.

[Introduction to LookML](http://www.looker.com/docs/data-modeling/learning-lookml/what-is-lookml)<br/>
[LookML Terms and Concepts](http://www.looker.com/docs/data-modeling/learning-lookml/lookml-terms-and-concepts)<br/>
[Complete Looker Docs](http://www.looker.com/docs/reference)<br/>
