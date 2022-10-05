## **Looker**

Looker is a business intelligence tool used for standard enterprise reporting and ad hoc reporting and analysis. All Sourcegraph employees can have View access to Looker. Some groups have the ability to create reports. If you are not a part of a group that can save content, reach out to #Analytics in Slack.

Looker has the ability to connect to all data sources that are located in our BigQuery DWH. It can also connect to documents in Google.

### **Notable reports**

**Company level metrics**
If you’re looking for high-level data about how our user base interacts with our product generally, below are links to charts for some commonly requested data points. Unless otherwise noted, these charts include data for both free and paying users.

- [Monthly users by instance type](https://sourcegraph.looker.com/looks/729)
- [Instances by deployment type](https://sourcegraph.looker.com/looks/971?toggle=fil,pik)
- [DAU/MAU ](https://sourcegraph.looker.com/looks/1319)
- [Average seat consumption (MAU/Total Seats)](https://sourcegraph.looker.com/looks/1333?toggle=dat,fil,pik) - customers only
- [Customer support tickets](https://sourcegraph.looker.com/dashboards/177?Organization=&Ticket+priority=None%2Cp1%2Cp2&Created+Date=90+day&Assignee+ID=&Lifecycle=)
- [Growth dashboard ](https://sourcegraph.looker.com/dashboards/292?Salesforce%20Unique%20ID=&Unique%20Server%20ID=)(includes metrics like total searches per month, lines of code indexed per month, user retention etc)
- [Technical health score](https://sourcegraph.looker.com/dashboards/179?Customer+Engineer=&Account+Executive=&Customer+Name=&Telemetry+Status=Full+telemetry&Customer+Tenure+%28days%29=%5B0%2C2000%5D)

**Customer-level metrics**
If you’re looking for product usage data for a specific customer(s), below are links to charts for some commonly requested data points. Please note that if you want to see a full overview of a specific instance’s usage, the dashboards in the “Full instance overview” section may be more useful.

- [MAUs by customer](https://sourcegraph.looker.com/looks/1065)
- [Total user accounts by customer (monthly)](https://sourcegraph.looker.com/looks/1066)
- [DAU/MAU by customer](https://sourcegraph.looker.com/looks/1316)
- [Customers by Sourcegraph version](https://sourcegraph.looker.com/looks/718)
- [Customer seat consumption (MAU/purchased seats)](https://sourcegraph.looker.com/looks/1332?toggle=pik)
- [Deployment type by customer](https://sourcegraph.looker.com/looks/1317) (ex. kubernetes, docker-compose)
- [Hosting type by customer](https://sourcegraph.looker.com/looks/1374) (ex. self-hosted, managed instance)
- [Telemetry status by customer](https://sourcegraph.looker.com/looks/1366)
- [Code hosts by customer](https://sourcegraph.looker.com/looks/1198)
- [Total repos by customer](https://sourcegraph.looker.com/looks/1318)
- [NPS score by customer](https://sourcegraph.looker.com/dashboards/128?Unique+Server+ID=Uber&Time=48+months)
- [Customer support metrics by customer](https://sourcegraph.looker.com/dashboards/177?Organization=Uber&Ticket+priority=None%2Cp1%2Cp2&Created+Date=90+day&Assignee+ID=&Lifecycle=)

**Full instance overview**
If you’re looking for a full breakdown of usage on a server or for a particular customer, below are links to a few widely used dashboards that contain a variety of usage metrics.

- [Customer account overview: ](https://sourcegraph.looker.com/dashboards/296?Name=Uber&Contract+Start+Date=&Company+size+%28%23+of+employees%29=&Account+Exec=&Customer+Engineer=&Contract+End+Date=)A key dashboard we use to assess usage at a customer account (note: this is only for customers, free and prospect instances will not show up here). While more pared down than the following two dashboards, it contains the metrics we think are generally most important to measuring overall usage.
- [Server instances dashboard:](https://sourcegraph.looker.com/dashboards/167?Unique+Server+ID=Uber&Salesforce+Unique+ID=) This dashboard is much more comprehensive than the customer account overview, but not every metric on here will be important/relevant for every user/customer. However, you can find free and prospect instances on this dashboard
- [Technical health dashboard:](https://sourcegraph.looker.com/dashboards/179?Customer+Engineer=&Account+Executive=&Customer+Name=&Telemetry+Status=Full+telemetry&Customer+Tenure+%28days%29=%5B0%2C2000%5D) This dashboard contains the account’s technical health score and the metrics that are included as a part of that score.

**Feature specific dashboards and charts**

- [Code intelligence](https://sourcegraph.looker.com/dashboards/158?Unique+Server+ID=Dropbox&Company+Type=)
- [Batch changes](https://sourcegraph.looker.com/dashboards/174?Unique%20Server%20ID=)
- [Code insights](https://sourcegraph.looker.com/dashboards/208?Instance=)
- [Code monitoring](https://sourcegraph.looker.com/looks/932?toggle=fil,pik)
- [Extensions](https://sourcegraph.looker.com/dashboards/165?Filter%20to%20a%20server%20ID=-NULL)

**Related useful links**

- [Metrics definitions](./process/user_definitions.md#user-metrics-definitions)
- [Data sources of truth:](./analytics/sources-of-truth.md#sources-of-truth) Includes some definitions and links to data points owned/managed by Sales and Finance (ex. ARR)

## **Amplitude**

Amplitude is a business intelligence tool for product analytics. It surfaces data and insight into customer and user behavior and can help optimize for desired outcomes. Amplitude is for product managers. It’s a space where they can create reports, perform ad-hoc analysis, and understand the user journey.

Amplitude tracks Sourcegraph cloud usage.

### **Notable reports: **

- [Cloud growth metrics](https://analytics.amplitude.com/sourcegraph/dashboard/ya9aoy7?source=search): high-level growth metrics such as traffic, activation, and retention for Sourcegraph cloud
- [Organizations on cloud overview](https://analytics.amplitude.com/sourcegraph/dashboard/8towezl?source=search)**: **high-level growth metrics for organizations participating in our beta program on cloud
