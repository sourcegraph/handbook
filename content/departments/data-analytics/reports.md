# Reports and dashboards at Sourcegraph

The Data & Analytics team uses three primary tools for dashboards and reporting - Looker, Amplitude, and Redash. Other tooling is used across the org (ex. Google Analytics, Google Sheets, etc) but these two tools house the majority of the enterprise reporting content owned by D&A.

## **Looker**

### **What is Looker?**

Looker is a business intelligence tool used for standard enterprise reporting and analysis.

#### **How do I get access to Looker?**

All Sourcegraph employees can have View access to Looker, and select people have the ability to edit/create reports and explore datasets. If you need help getting a Looker account with View access, please reach out to #ask-it-tech-ops. If you have a looker account, but need the ability to create reports/explore datasets, please request temporary edit permissions via [Entitle](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiW0VudGVyIGFjY2VzcyByZWFzb24gaGVyZV0iLCJyb2xlSWRzIjpbeyJpZCI6IjUxNmM4ZTc3LTc2YWQtNDJkOS04OTIyLWRlZDI1NmM0NDk3MCIsInRocm91Z2giOiI1MTZjOGU3Ny03NmFkLTQyZDktODkyMi1kZWQyNTZjNDQ5NzAiLCJ0eXBlIjoicm9sZSJ9XX0%3D).

#### **What data can I find in Looker?**

Looker is essentially the frontend interface for our BigQuery data warehouse. The data available in BigQuery/Looker is evolving all the time, but here are a few of the primary data sources:

- [Pings](https://docs.sourcegraph.com/admin/pings) data from free, on-prem instances, customer managed/on-prem instances, and Sourcegraph.com
- [Eventlogger's](https://sourcegraph.com/search?q=context%3Aglobal+repo%3Asourcegraph%2Fsourcegraph+eventLogger.log%28&patternType=lucky&groupBy=repo) event-stream usage data for sourcegraph.com and about.sourcegraph.com (for customer event-stream data, please see Amplitude)
- Sourcegraph app data
- Salesforce data, like information about accounts, opportunities, leads, etc.
- Zendesk
- Outreach.io
- Hubspot

To find content you may be interested in, we recommend subscribing to "boards" that are relevant to you. Boards are collections of dashboards and looks related to a specific team or initative. We've curated these boards to make it easy for you to browse content for the teams/iniatives you're interested in.

A few of these boards are listed below, but our boards are evolving every day, so we recommend browsing our boards in Looker directly. You can do this by going to the menu (from wherever you are in looker, click the three lines in the top left to go to the menu!) then click the “+” next to “Boards” in the left navigation menu and select “Browse all boards”

**Team boards**

- [AE/CE team board](https://sourcegraph.looker.com/boards/49): This board contains a variety of dashboards and looks that might be relevant to AEs and CEs, mostly pertaining to customer/prospect product usage (daily active users, batch changes activity, support tickets, etc)
- [SDR team board](https://sourcegraph.looker.com/boards/57):This board contains dashboards that are relevant to SDRs / anyone doing prospecting, such as a dashboard that enables you to see if any target accounts have existing sourcegraph instances
- [Technical advisor team board](https://sourcegraph.looker.com/boards/50):The board contains content that TAs will find particularly useful, such as detailed information about product usage on customer instances, customer support tickets, seat consumption data, etc.
- [Customer support team board](https://sourcegraph.looker.com/boards/54): This board contains dashboards that might be helpful for debugging customer issues. It contains data about deployment types, code hosts, dependency versions, etc
- [Finance team board](https://sourcegraph.looker.com/boards/53):This board contains content that is used in regular finance reporting or for specific finance team initiatives
- [Marketing team board](https://sourcegraph.looker.com/boards/51)This board contains dashboards and content that the marketing team will find particularly useful - such as campaign performance overviews and sourcegraph.com web traffic data

We don't have boards for every team yet, but we're working on it!

**Initiative boards**

- [Instance configuration board](https://sourcegraph.looker.com/boards/56): Contains data on things like instance deployment methods, postrges dependency versions, customer telemetry status, etc. We recommend engineers subscribe to this board
- [Sourcegraph.com traffic analytics board](https://sourcegraph.looker.com/boards/55): Contains web traffic data for sourcegraph websites (ex pageviews,sessions, clicks, etc)
- [Company-wide metrics board](https://sourcegraph.looker.com/boards/58): This board contains data for company metrics that are top-of-mind, such as DAUs, DAU/MAU ratio, seat consumption ratio, and how many customers are on the most recent version. We recommend everyone add this board! You never know, what you learn may come in handy during Sourcegraph trivia at Merge :)

#### **How often is data in Looker updated?**

It depends on the dataset, but most of our data pipelines/transformations run anywhere from once a day to once an hour. So you should always be seeing near real-time data in Looker. However, we do have a few datasets (specifically customer telemetry status, and linking a customer to their instance identifiers) that are currently updated manually, and therefore a bit less frequently.

If you suspect you're looking at stale data on a dashboard or look, be sure to:

- Check the filters: most of our charts are filtered by date, often with filters such as "the last complete week" or "the last complete day." If the data you're seeing is not filtered to the timeframe you need, you may have to adjust the filters.
- Clear the cache: Sometimes looker will cache the results of a query to avoid querying the database multiple times. If you think you're seeing stale data on a dashboard, select the gear button in the top right corner and choose "clear cache and refresh" from the drop-down menu options.

### **How to use Looker**

We've created a few training videos to help you navigate our Looker project:

- [Navigating our Looker project](https://www.loom.com/share/d7bd9e551d8649f7980857c6f84f2b39)
- [Using our dashboards](https://drive.google.com/file/d/1xXWE4VKbsBo-o2Y2AiEEfZm9FACo3qcG/view?usp=sharing)
- [Using our looks](https://drive.google.com/file/d/1HnWAaexvBLoRrHH40EKSDbYecDtNvCoW/view?usp=sharing)
- ["Exploring" our datasets](https://drive.google.com/file/d/1fIYUA_rdHfaYIulANJkKI9hrsvkihEHI/view?usp=sharing) - note that "View" users do not have access to explore content. If you'd like to be explore content, request a View/Edit/Create license in [Entitle](https://app.entitle.io/request?)
- [Creating custom fields](https://drive.google.com/drive/u/0/folders/17Yz0MO08q_OUk8TNh0ViIGT3j2pPUKqD) - note that "View" users do not have access to explore content

#### **Additional training videos/documentation from Looker**

Looker also puts out guides and training videos that may be useful if you're looking for a more general tutorial about using the tool. Here are a few that we like in particular:

- [Looker introduction](https://cloud.google.com/looker/docs/intro)
- [Find and organize content](https://cloud.google.com/looker/docs/find-and-organize-content)
- [Create an alert](https://cloud.google.com/looker/docs/creating-alerts)
- [Download data from Looker](https://cloud.google.com/looker/docs/downloading#downloading_data_from_a_dashboard)
- [Create dashboards](https://cloud.google.com/looker/docs/creating-user-defined-dashboards) - note that "View" users do not have access to create dashboards content
- [Create fields](https://cloud.google.com/looker/docs/custom-fields)

#### **Quick Looker tips and tricks**

- Almost all of our Looker content (with the exception of Cody data) is filterable by `Account name`, `installer email`, and (where relevant) `Date`. To find a customer instance, we recommend filtering by account name. However, to find a propsect's instance or an instance belonging to a free user, you should filter using the installer_email. If you don't know a prospect's installer_email, you can look it up using their license key [here](https://sourcegraph.looker.com/looks/1597). This is because we don't currently automatically associate all instances to a salesforce account automatically (this functionality is coming soon!)
- Most of our dashboards/looks filter to `Account type = Customer` by default. To search for a prospect or free instance, change the filter to `Account type = Free`
- To find content you may be interested in, we recommend subscribing to "boards" that are relevant to you. Boards are collections of dashboards and looks. You can subscribe to boards by going to your looker homepage (from wherever you are in Looker, click the logo in the top left corner to go to your homepage!) then click the “+” next to “Boards” in the left navigation menu and select “Browse all boards”
- Many (though not all) dashboards offer the ability to "drill-down" into data points by clicking on values. For example, on [this dashboard](https://sourcegraph.looker.com/dashboards/453), you can click any data point in the first chart to see a full list of the data that comprises the data point.
- Keep track of the content you like by "favoriting" it! You can favorite content by clicking the "heart" icon next to the name of any dashboard or look. View favorited content by clicking "Favorites" in the left-hand menu

### **Looker developers**

- In addition to reviewing the training videos linked above, we recommend all Looker developers review the [LookML Guide](https://cloud.google.com/looker/docs/what-is-lookml) and take Looker's [Understanding LookML in Looker](https://www.cloudskillsboost.google/paths/28) course
- For best practices for working within our Looker project specifically, please refer to our [best practices](https://docs.google.com/document/d/1OnBNQoscva88Qp969Ji3tURqGJY6NnjLpI-TIH2d-RE/edit#)

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

## **Amplitude**

### **What is Amplitude?**

Amplitude is a business intelligence tool specifically for product analytics, unlike Looker, which visualizes many different types of data. Amplitude is where we visualize user-level, event-stream data for both customers and for Sourcegraph.com.

#### **What data can I find in Amplitude?**

Search data: Amplitude contains search data from some managed instance customers, and from dotcom.
Cody data: Amplitude contains cody data from all clients and instances

#### **How do I get access?**

Request access from #ask-it-tech-ops

#### **Is this for me?**

Amplitude is best used to perform product-specific analyses and to better understand the user journey, and is therfore often most useful for designers or product managers with an understanding of those types of analyses.

### **Notable reports**

- [Top of funnel dashboard](https://app.amplitude.com/analytics/sourcegraph/dashboard/nktm80f3)

Note that we don't do a lot of our standardized company reporting out of Amplitude; it's mostly a place for individuals to explore and answer their own questions. So be sure to browse the team-spaces and see what your coworkers are working on!

## **Redash**

### **What is Redash?**

Redash is a data analysis tool to enable power users of our data to query our data warehouse directly using SQL.

Redash allows you to:

- Query our data tables & create saved queries that can be easily revisited and shared with your colleagues.
- Have queries auto-refresh, so whenever you go back to it, it'll have the most up-to-date data
- Create customizable queries that you can update parameters to (example here)
- Create simple charts/visualizations (example here)

### **What data can I find in Redash?**

Redash is connected to our BigQuery data warehouse, so you'll be able to query any table that lives there. There are a lot of tables in our data warehouse and many may not be relevant. Here are the ones we'd suggest you use Redash to query. If you need data that doesn't live in one of these tables, you may want to reach out to our team so we can point you in the right direction.

- dotcom_events.events: dotcom click data
- dotcom_events.events_usage: managed instance data
- sourcegraph_analytics.update_checks: pings
- dotcom_events.cody: all cody-specific event data
- salesforce_data: salesforce data (accouts, leads, campaign)
- stripe: stripe charges, accounts, invoice, etc data
- sams: sourcegraph account management system
- ssc: self-serve-cody

### **Is this for me?**

This is really only useful for those who have experience with where our data lives and have strong understanding of SQL. If that is you, then this tool can enable you to answer one-off questions and create simple charts. All other users will be better served by Looker and Amplitude

### **How do I get access?**

We've configured Redash to authenticate you with your Sourcegraph Google account, so no need to request access. Just click [here](https://redash.sgdev.org/)!

### **How do I use it?**

Here's a quick [loom overview](https://www.loom.com/share/f4473f4930d947cc9514d39c8fba46ea) to get you started.
