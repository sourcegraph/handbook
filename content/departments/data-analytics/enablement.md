# **Enablement**

### FAQs

- [General FAQ](faq.md)
- [User-level data FAQ](https://docs.google.com/document/d/1vXHoMBnvI_SlOjft4Q1Zhb5ZoScS1IjZ4V1LSKgVxv8/edit#heading=h.5cvokp6lk0w3)

## Data sources

### Product data

We collect two different levels of product data. The type of data we collect depends how an instance is being hosted and the customer's contract.

- [Pings](https://docs.sourcegraph.com/admin/pings) we collect pings from Sourcegraph cloud, self-hosted, and managed Sourcegraph instances. These pings contain anonymous and aggregated information. There are [specific guidelines](https://docs.sourcegraph.com/dev/background-information/adding_ping_data) that must be followed for teams to add ping data.
- [User-level data](https://docs.google.com/document/d/1vXHoMBnvI_SlOjft4Q1Zhb5ZoScS1IjZ4V1LSKgVxv8/edit#heading=h.5cvokp6lk0w3): we collect anonymous, user-level, event stream data from Sourceraph.com and Sourcegraph managed instances using our [event logger](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/client/web/src/tracking/eventLogger.ts). The event stream is data that is collected at the time the user does something in the product. That means, what did they do, when did they do it, what was the outcome. Soon, we'll be collecting this data from all customers regardless of hosting type, assuming their contract allows it - see the [RFC](https://docs.google.com/document/d/1Yh5ZTey7VrMNV3oz-wlY4aVbmtwpH8EdCSfa794Oxv4/edit) for details on this project and this [chart](https://sourcegraph.looker.com/looks/1754?toggle=pik) for details on which customer's have contractually allowed this.

Some customers have the contractual right to send us no telemetry at all, or a much smaller subset of telemetry (called [critical telemetry](https://docs.sourcegraph.com/admin/pings#critical-telemetry)) you check the telemetry status of all customer instances [here](https://sourcegraph.looker.com/looks/1366). The options are as follows:

- No telemetry: This self-hosted customer has an airgapped instance, or has turned pings off. We don't have any data about this customer's product usage
- [Critical pings: ](https://docs.sourcegraph.com/admin/pings#critical-telemetry)This self-hosted customer has elected to send us only the pings that are required for billing, support, updates, and security notices
- Full pings: This self-hosted customer sends us all the aggregated, anonymoous data we outline [here](https://docs.sourcegraph.com/admin/pings#other-telemetry)

#### Which tool should I use to find product data?

![Data tool flowchart](https://storage.googleapis.com/sourcegraph-assets/handbook/BizOps/data_workflow.png)

#### **Tool Specific Resources**

[Onboarding to Looker](reports.md)

[Onboarding to Amplitude](amplitude.md)

### Other data sources

We also load data to BigQuery from:

- Salesforce: Customer Relationship Management system (CRM)
- Sourcegraph.com Site-admin pages: customer Enterprise subscriptions and license keys
- Sourcegraph production database: we query a few particular tables from the production database via terraform to access data for Sourcegraph.com
- Google Sheets: There are a [number of spreadsheets](https://drive.google.com/drive/folders/1LIfVyhjhh_mpc0SNOFvpNfN2h4CmGQmI) that get loaded into BigQuery
- Zendesk: customer support ticketing

We largely do this using Fivetran, but also leverage other tools and system-specific integrations (like BigQuery's gsheets connector) when necessary.

# **Support Model**

Supporting a **Self-Service** framework for BI and Analytics is imperative to being a data driven organization.

This framework consists of three principles:

1. Give the right people the right set of tools and capabilities
2. Create a collaborative environment
3. Create a process to govern how this collaboration leads to continuous improvement of our analytics capabilities

## **Personas**

In our Self-Service framework, we need to accommodate multiple personas because not all users will want to self-serve the same way.

## **Viewers**

- Viewers are interested in standardized reporting on standardized metrics. They are interested to see how metrics change over time and may want to drill into specific datasets for those metrics. Viewers will request new standard metrics or new filters on current standard reports. They will also request new views and reports. Viewers may want to create their own views or dashboards for their own personal use.
- Examples of use cases of a viewer
  - I want to view standard/trusted reporting on multiple topics
  - I want to filter results with a set of standard filters
  - I have a set of metrics that I am measured against and want to track progress of those metrics
  - I want to automate a set of metrics that I report out on regularly

## **Creators**

- Creators are interested in all the components of a Viewer, but will also want to create their own views/reports. Creators will also want to perform ad-hoc analysis. They are interested in both standard metrics and new/undefined metrics. They may be able to write queries directly against a data warehouse. And creators will use our standard tools, but may use other tools that are not part of the Data and Analytics tech stack.
- Examples of use cases of a creator
  - I want to create and share views/reports on multiple topics across multiple standard tools
  - I want to perform ad hoc analysis
  - I want to query the DWH to understand and analyze data quickly
  - I want to automate analysis
