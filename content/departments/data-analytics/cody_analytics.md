## Cody Data and Analytics

**Metric: Cody Installs**

- **Definition:** The number of **distinct users** that click the Install Cody button from the various places on sourcegraph.com or about.sourcegraph.com.
- **Why this metric:** Because there are multiple ways to install Cody, this metric shows a consistent view of the intent to follow the steps to install Cody.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Cody Installs (all users)” chart)

**Metric: Cody DAUs**

- **Definition:** The number of active users of Cody each day. A Cody user is defined as any user that fires any Cody event.
- **Why this metric:** Tracking DAU over time show the consistent engagement users have with Cody
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Cody DAUs” chart)

**Metric: Retention**

- **Definition:** The number of Cody users who were active 1 and 7 days after installing Cody, respectively.
- **Why this metric:** As we continue to ship improvements to Cody, retention will be key to understanding how much value users are getting from the Cody.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Cody Day 1 Vs Day 7 Retention” chart)

## Cody Data Capture Mechanisms

There are two mechanisms in which we collect Cody usage data. Through the eventlogger on sourcegraph.com and through Pings

\*\*Eventlogger
Data in the eventlogger is populated at the event level. An anonymous user id is assigned to a user in order to track individual usage. There is a server endpoint in the pubic argument that can be associated with an instance.

\*\*Pings
Data in pings follows our normal pings mechanism which provides aggregated and anonymized usage data for both self-hosted and managed instances.

## Cody Reporting Tools

Cody data is available in Looker and Amplitude. Below we explain when to use which tool.

\*\*Looker

Looker is the source of truth for all shareable Cody KPIs and metrics. See [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) KPIs.

Looker also contains reporting via Pings from our customers.

\*\*Amplitude

Amplitude contains Cody events from the Eventlogger. See [Amplitude](https://analytics.amplitude.com/sourcegraph/space/mrlfrgi/all) Cody project for examples of analyses.
Use Amplitude for adhoc analysis, funnel analytics, and other analytics outside of performance metrics.
