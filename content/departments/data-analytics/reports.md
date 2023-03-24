## **Looker**

Looker is a business intelligence tool used for standard enterprise reporting and ad hoc reporting and analysis. All Sourcegraph employees can have View access to Looker. Some groups have the ability to create reports. If you are not a part of a group that can save content, reach out to #Analytics in Slack.

Looker has the ability to connect to all data sources that are located in our BigQuery DWH. It can also connect to documents in Google.

### **Notable reports**

**Company level metrics**
If you’re looking for high-level data about how our user base interacts with our product generally, below are links to charts for some commonly requested data points. Unless otherwise noted, these charts include data for both free and paying users.

- [Monthly users by instance type](https://sourcegraph.looker.com/looks/1519)
- [Instances by deployment type](https://sourcegraph.looker.com/looks/1520)
- [DAU/MAU ](https://sourcegraph.looker.com/looks/1521)
- [Average seat consumption (MAU/Total Seats)](https://sourcegraph.looker.com/looks/1522)) - customers only
- [Technical health score](https://sourcegraph.looker.com/dashboards/389?Customer%20Name=&Account%20Executive=&Customer%20Engineer=&Customer%20Tenure%20(days)=%5B0,2000%5D&Telemetry%20Status=)

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

- [Server instances dashboard:](https://sourcegraph.looker.com/dashboards/409?Account%20name=Chime&Installer%20email=) This dashboard is much more comprehensive than the customer account overview, but not every metric on here will be important/relevant for every user/customer. However, you can find free and prospect instances on this dashboard
- [Technical health dashboard:](https://sourcegraph.looker.com/dashboards/389?Customer%20Name=&Account%20Executive=&Customer%20Engineer=&Customer%20Tenure%20(days)=%5B0,2000%5D&Telemetry%20Status=) This dashboard contains the account’s technical health score and the metrics that are included as a part of that score.

**Feature specific dashboards and charts**

- [Code intelligence - all customers](https://sourcegraph.looker.com/dashboards/413?Account%20Type=Customer&Account%20name=&%20Week=4%20week%20ago%20for%204%20week,null&Telemetry%20Status=)
- [Code intelligence - single customer](https://sourcegraph.looker.com/dashboards/412?Account%20Type=Customer&%20Week=4%20week%20ago%20for%204%20week&Account%20name=Chime&Installer%20email=)
- [Batch changes - all customers](https://sourcegraph.looker.com/dashboards/422?Account%20Type=Customer&Account%20name=&Date=3%20months&Products%20Purchased=)
- [Batch changes - single customer](https://sourcegraph.looker.com/dashboards/382?Account%20Type=Customer&Account%20name=Chime&Installer%20email=&Date=3%20month)
- [Code insights - all customers](https://sourcegraph.looker.com/dashboards/427?Account%20Type=Customer&Products%20Purchased=&Account%20name=)
- [Code insights - single customer](https://sourcegraph.looker.com/dashboards/426?Account%20Type=Customer&Account%20name=Chime&Week%20Date=4%20week&Installer%20email=)
- [Search - all customers](https://sourcegraph.looker.com/dashboards/424?Account%20Type=Customer&%20Date=90%20day&Account%20name=&Installer%20email=)
- [Search - single customer](https://sourcegraph.looker.com/dashboards/423?Account%20name=&Installer%20email=&%20Date=90%20day&Account%20Type=)
- [App Performance KPIs](https://sourcegraph.looker.com/dashboards/440)

**Related useful links**

- placeholder for user metrics definitions
- placeholder for sources of truth Includes some definitions and links to data points owned/managed by Sales and Finance (ex. ARR)

## **Amplitude**

Amplitude is a business intelligence tool for product analytics. It surfaces data and insight into customer and user behavior and can help optimize for desired outcomes. Amplitude is for product managers. It’s a space where they can create reports, perform ad-hoc analysis, and understand the user journey.

Amplitude tracks Sourcegraph cloud usage.

### **Notable reports: **

- [Cloud growth metrics](https://analytics.amplitude.com/sourcegraph/dashboard/ya9aoy7?source=search): high-level growth metrics such as traffic, activation, and retention for Sourcegraph cloud
- [Organizations on cloud overview](https://analytics.amplitude.com/sourcegraph/dashboard/8towezl?source=search)**: **high-level growth metrics for organizations participating in our beta program on cloud
