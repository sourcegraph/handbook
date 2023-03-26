# Reports and dashboards at Sourcegraph

The Data & Analytics team uses two primary tools for dashboards and reporting - Looker and Amplitude. Other tooling is used across the org (ex. Redash, Google Analytics, Google Sheets, etc) but these two tools house the majority of the enterprise reporting content owned by D&A.

## **Looker**

### **What is Looker?**

Looker is a business intelligence tool used for standard enterprise reporting and ad hoc reporting and analysis. All Sourcegraph employees can have View access to Looker. Some groups have the ability to create reports/explore datasets. If you need help getting access to Looker, please reach out to #ask-it-tech-ops

#### **What data can I find in Looker?**

Looker is essentially the frontend interface for our BigQuery data warehouse. The data available in BigQuery/Looker is evolving all the time, but here are a few of the primary data sources:

- [Pings](https://docs.sourcegraph.com/admin/pings) data from free, on-prem instances, customer managed/on-prem instances, and Sourcegraph.com
- [Eventlogger's](https://sourcegraph.com/search?q=context%3Aglobal+repo%3Asourcegraph%2Fsourcegraph+eventLogger.log%28&patternType=lucky&groupBy=repo) event-stream usage data for sourcegraph.com and about.sourcegraph.com (for customer event-stream data, please see Amplitude)
- Sourcegraph app data
- Salesforce data, like information about accounts, opportunities, leads, etc.
- Zendesk
- Outreach.io
- Hubspot

Using these data sources, we use Looker to answer questions such as:

- Which customers are using batch changes, and how often?
- Which language should we index for precise code intel next?
- Which campaigns brought in the most leads?
- Which referrers are driving traffic to sourcegraph.com?

#### **How often is data in Looker updated?**

It depends on the dataset, but most of our data pipelines/transformations run anywhere from once a day to once an hour. So assuming we're still getting data from these sources, you should always be seeing the most up-to-date data in Looker. However, we do have a few datasets (specifically customer telemetry status, and linking a customer to their instance identifiers) that are currently updated manually, and therefore a bit less frequently.

### **How to use Looker**

We've created a few training videos to help you navigate our Looker project:

- Overview of data in Looker
- Best practices for navigating our Looker project (and finding content you care about)
- [Using our dashboards](https://drive.google.com/drive/u/0/folders/17Yz0MO08q_OUk8TNh0ViIGT3j2pPUKqD)
- [Using our looks](https://drive.google.com/drive/u/0/folders/17Yz0MO08q_OUk8TNh0ViIGT3j2pPUKqD)
- ["Exploring" our datasets](https://drive.google.com/drive/u/0/folders/17Yz0MO08q_OUk8TNh0ViIGT3j2pPUKqD) - note that "View" users do not have access to explore content
- [Creating custom fields](https://drive.google.com/drive/u/0/folders/17Yz0MO08q_OUk8TNh0ViIGT3j2pPUKqD) - note that "View" users do not have access to explore content

#### **Additional training videos/documentation from Looker**

Looker also puts out guides and training videos that may be useful if you're looking for a more general tutorial about using the tool. Here are a few that we like in particular:

- [Looker introduction](https://cloud.google.com/looker/docs/intro)
- [Find and organize content](https://connect.looker.com/library/video/find-and-organize-content?_ga=2.48790688.703451167.1679794488-276166785.1639170296)
- [Send alerts and share content](https://connect.looker.com/library/video/sending-and-sharing-content?_ga=2.215891345.703451167.1679794488-276166785.1639170296)
- [Download data from Looker](https://cloud.google.com/looker/docs/downloading#downloading_data_from_a_dashboard)
- [Create dashboards](https://connect.looker.com/library/video/create-reports-and-dashboards?_ga=2.11491506.703451167.1679794488-276166785.1639170296) - note that "View" users do not have access to create dashboards content

### **Notable reports**

Below you'll find links to Looker reports containing frequently requested data that many teams find useful. This doesn't represent all the reports available, but should give you a good idea of the types of reports that can be found in Looker.

**Company level metrics**
If you’re looking for high-level data about how our user base interacts with our product generally, below are links to charts for some commonly requested data points. Unless otherwise noted, these charts include data for both free and paying users.

- [Monthly users by instance type](https://sourcegraph.looker.com/looks/1519)
- [Instances by deployment type](https://sourcegraph.looker.com/looks/1520)
- [DAU/MAU ](https://sourcegraph.looker.com/looks/1521)
- [Average seat consumption (MAU/Total Seats)](https://sourcegraph.looker.com/looks/1522)) - customers only
- [Technical health score](<https://sourcegraph.looker.com/dashboards/389?Customer%20Name=&Account%20Executive=&Customer%20Engineer=&Customer%20Tenure%20(days)=%5B0,2000%5D&Telemetry%20Status=>)

**Customer-level metrics**
If you’re looking for product usage data for a specific customer(s), below are links to charts for some commonly requested data points. Please note that if you want to see a full overview of a specific instance’s usage, the dashboards in the “Full instance overview” section may be more useful.

- [MAUs by customer](https://sourcegraph.looker.com/looks/1513)
- [Total user accounts by customer (monthly)](https://sourcegraph.looker.com/looks/1514)
- [DAU/MAU by customer](https://sourcegraph.looker.com/looks/1523)
- [Customers by Sourcegraph version](https://sourcegraph.looker.com/looks/1524)
- [Deployment type by customer](https://sourcegraph.looker.com/looks/1525) (ex. kubernetes, docker-compose)
- [Hosting type by customer](https://sourcegraph.looker.com/looks/1526) (ex. self-hosted, managed instance)
- [Telemetry status by customer](https://sourcegraph.looker.com/looks/1527)
- [Code hosts by customer](https://sourcegraph.looker.com/looks/1528)
- [Total repos by customer](https://sourcegraph.looker.com/looks/1529)
- [NPS score by customer](https://sourcegraph.looker.com/looks/1530)
- [Customer support metrics by customer](https://sourcegraph.looker.com/dashboards/421?Organization=&Assignee%20ID=&Ticket%20priority=None,p1,p2,p0,p3&Created%20Date=90%20day&Lifecycle=)

**Full instance overview**
If you’re looking for a full breakdown of usage on a server or for a particular customer, below are links to a few widely used dashboards that contain a variety of usage metrics.

- [Single-instance dashboard:](https://sourcegraph.looker.com/dashboards/409?Account%20name=Databricks&Installer%20email=) This dashboard is much more comprehensive than the customer account overview, but not every metric on here will be important/relevant for every user/customer. You can also find free and prospect instances on this dashboard
- [Technical health dashboard:](<https://sourcegraph.looker.com/dashboards/389?Customer%20Name=&Account%20Executive=&Customer%20Engineer=&Customer%20Tenure%20(days)=%5B0,2000%5D&Telemetry%20Status=>) This dashboard contains the account’s technical health score and the metrics that are included as a part of that score.

**Feature specific dashboards and charts**

- [Code intelligence - all customers](https://sourcegraph.looker.com/dashboards/413?Account%20Type=Customer&Account%20name=&%20Week=4%20week%20ago%20for%204%20week,null&Telemetry%20Status=)
- [Code intelligence - single customer](https://sourcegraph.looker.com/dashboards/412?Account%20Type=Customer&%20Week=4%20week%20ago%20for%204%20week&Account%20name=Databricks&Installer%20email=)
- [Batch changes - all customers](https://sourcegraph.looker.com/dashboards/422?Account%20Type=Customer&Account%20name=&Date=3%20months&Products%20Purchased=)
- [Batch changes - single customer](https://sourcegraph.looker.com/dashboards/382?Account%20Type=Customer&Account%20name=Databricks&Installer%20email=&Date=3%20month)
- [Code insights - all customers](https://sourcegraph.looker.com/dashboards/427?Account%20Type=Customer&Products%20Purchased=&Account%20name=)
- [Code insights - single customer](https://sourcegraph.looker.com/dashboards/426?Account%20Type=Customer&Account%20name=Databricks&Week%20Date=4%20week&Installer%20email=)
- [Search - all customers](https://sourcegraph.looker.com/dashboards/424?Account%20Type=Customer&%20Date=90%20day&Account%20name=&Installer%20email=)
- [Search - single customer](https://sourcegraph.looker.com/dashboards/423?Account%20name=Databricks&Installer%20email=&%20Date=90%20day&Account%20Type=)
- [App Performance KPIs](https://sourcegraph.looker.com/dashboards/440)

**Related useful links**

- placeholder for user metrics definitions
- placeholder for sources of truth Includes some definitions and links to data points owned/managed by Sales and Finance (ex. ARR)

## **Amplitude**

Amplitude is a business intelligence tool specifically for product analytics, unlike Looker, which visualizes many different types of data. Amplitude is where we visualize user-level, event-stream data for both customers and for Sourcegraph.com. It can be used to create reports, perform ad-hoc analysis, and understand the user journey, and is therfore often most useful for designers and product managers.

### **Notable reports: **

- [Cloud growth metrics](https://analytics.amplitude.com/sourcegraph/dashboard/ya9aoy7?source=search): high-level growth metrics such as traffic, activation, and retention for Sourcegraph cloud
- [Organizations on cloud overview](https://analytics.amplitude.com/sourcegraph/dashboard/8towezl?source=search)**: **high-level growth metrics for organizations participating in our beta program on cloud
