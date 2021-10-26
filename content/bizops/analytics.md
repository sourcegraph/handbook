# Analytics

This page describes Sourcegraph's analytics function, our data sources, and how to use our data tools.

- [Data sources](#data-sources)
- [Data tools/tech stack](#data-tools)
- [Using Looker](#using-looker)
- [Amplitude](amplitude.md)

## Data sources

We collect data from the following:

- Google Analytics: Website analytics for Sourcegraph marketing and docs pages (not Sourcegraph.com)
- Google Tag Manager: Tag management system to collect event data and execute custom scripts across marketing our sites (i.e. (about|info|docs).sourcegraph.com)
- HubSpot: Marketing automation
- Salesforce: Customer Relationship Management system (CRM)
- MixMax: Email marketing automation (Apollo is not used in production, but still retains data)
- ZoomInfo: Data enrichment of account and contact information
- Sourcegraph.com Site-admin pages: customer subscriptions and license keys
- [Pings](https://docs.sourcegraph.com/admin/pings) from self-hosted Sourcegraph instances containing anonymous and aggregated information. There are [specific guidelines](https://docs.sourcegraph.com/dev/background-information/adding_ping_data) that must be followed for teams to add ping data.
- [Event logger: custom tool to track events](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/client/web/src/tracking/eventLogger.ts). On Sourcegraph.com, this sends events directly to BigQuery. On customer instances, this sends events to the `EventLogs` database, which is then used to populate pings.
- [Prometheus dashboards](https://sourcegraph.com/-/debug/grafana/?orgId=1) show high-level insight into the health of a Sourcegraph instance to admins. Sourcegraph teammates can see the health of Sourcegraph.com.
- [Customer Environment Questions](customer_environment_questions.md)

We have [written policies about how we handle customer information](./customer_data_policy.md).

## Data tools

- [Looker](https://sourcegraph.looker.com/projects/sourcegraph_events/files/1_home.md): Business intelligence/data visualization tool
- Google Cloud Platform: BigQuery is our data warehouse and the database Looker runs on top of
- Google Sheets: There are a [number of spreadsheets](https://drive.google.com/drive/folders/1LIfVyhjhh_mpc0SNOFvpNfN2h4CmGQmI) that Looker queries (by way of BigQuery).
- BizOps builds ad-hoc tools to analyze data for various reasons. The projects are in the [Google Drive Analytics folder](https://drive.google.com/drive/folders/1mtrHKsB2Kv0IGQ829zbcRGDSYHQpzkfd) and the source code is available in the [analytics repo](https://github.com/sourcegraph/analytics).
- For further explanation on how we use these tools, see the [data workflows](data_workflows.md) page

### Data pipelines

Every underlying data source (not chart!) is assumed to always be up-to-date unless noted otherwise.

#### Google BigQuery

Most "data pipelines" are SQL queries that turn raw ping data into clean datasets for

#### HubSpot

[The HubSpot data pipeline](https://github.com/sourcegraph/analytics/tree/master/HubSpot%20ETL) is updated once per day (in the afternoon PST). If you need the latest data at any time, post in the #analytics channel in Slack and the BizOps team can run the pipeline manually.

## Using Looker

[Looker](https://sourcegraph.looker.com/) is a self-service tool with many pre-built reports and visualizations. The [onboarding doc](https://sourcegraph.looker.com/projects/sourcegraph_events/documents/1_home.md) is located in Looker. Reach out in the #analytics Slack channel if you have any questions, we're happy to help!

## How to

- Add metrics on [Sourcegraph Cloud](./amplitude.md#adding-events-to-amplitude)?
- Add metrics on [Sourcegraph on-prem](https://docs.sourcegraph.com/dev/background-information/adding_ping_data)?

### Quick links

- [Sales](https://sourcegraph.looker.com/browse/boards/2)
- [Customer Engineering](https://sourcegraph.looker.com/browse/boards/8)
- [Product/engineering board](https://sourcegraph.looker.com/browse/boards/5)

### Things to know about using Looker

- By clicking `Explore from here` or changing a filter on a dashboard, you _will not_ change the underlying dashboard. Unless you explicitly click `Edit`, you are considered to be on your own temporary branch and will not change anything (even for yourself the next time you open the dashboard).
- When creating and editing dashboards, save individual tables and charts as [looks](https://docs.looker.com/exploring-data/saving-and-editing-looks) instead of tiles directly to the dashboard. Looks can be added to multiple dashboards while tiles cannot be, and when look is edited, the changes will apply to dashboards that look exists.

### Downsides of Looker (and our plans to address them)

- **Discoverability of data**: Bookmarking, favoriting or adding the sales/customer engineering board, product/engineering board and server instances overview look (or some combination of them) to your Looker instance is the best solution right now. These are all kept up-to-date with the most relevant data for all teams.
- **Speed**: Looker’s UI makes it easy to analyze data, but the result really complex SQL query that take awhile to run (especially on dashboards that are compiled of many separate queries). Fixing the performance issues is not currently a priority, but is something that we’ll get to when we grow the team out.
- **Naming conventions**: We’re slowly working on making naming conventions of dashboards, graphs, data points, etc... more obvious. If you come across anything that isn’t clear, let us know!

### Looker administration

When adding a user to Looker, they need to be in both the group and role:

- Marketing, customer support, people ops, talent users = View
- CE, sales, product users = ‘All internal users, view and edit’
- Any other teams not listed should default to 'View'
- Generally, CE, sales, product, customer support and marketing receive accounts when joining the company
