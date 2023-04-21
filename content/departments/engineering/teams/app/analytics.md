## Key Metrics and Definitions

**Metric: App downloads**

- **Definition:** The number of **distinct users** that click the download button or copy the brew install code snippet on the about or docs site.
- **Why this metric:** Because there are multiple ways to install the app, this metric shows a consistent view of the intent to download and install the app.
- **Related metrics:**
  - Downloads by type - Same definition with the ability to see if the download was linus, mac, or brew.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/440) (see: “App downloaders” chart)

**Metric: App DAU**

- **Definition:** The number of active users of the app each day
- **Why this metric:** Tracking DAU over time show the engagement users have with the app
- **Source of truth:** This data is logged by pings, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/440) (see: “DAU” chart)

**Metric: App total repos**

- **Definition:** The number of repos synced in apps
- **Why this metric:** Tracking repos over time show the engagement users have with the app
- **Source of truth:** This data is logged by pings, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/440) (see: “Total repos” chart)

**Metric: % active apps**

- **Definition:** The percentage of all apps whose user was active that day
- **Why this metric:** Tracking % active apps over time show how engaged our app users are as our app base grows.
- **Source of truth:** This data is logged by pings, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/440) (see: “% active apps)

**Metric: Visitors**

- **Definition:** The number of unique hits to our website. Visitor numbers exclude users who used Sourcegraph via an extension only (since these users did not actually visit our website). Unless otherwise specified, visitor numbers include traffic to both the product and marketing sites.
- **Why this metric:** Tracking quantitative information about visitors will help us measure how many people are aware of our product. Qualitative info about visitors will help us understand who our traffic is and how they found us, so we can assess what's working.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/440) (see: “Visitors” chart)

**Metric: Retention**

- **Definition:** The number of app users who were active 1 and 7 days after installing the app, respectively.
- **Why this metric:** As we continue to ship improvements to the app, retention will be key to understanding how much value users are getting from the app.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/440)

## Analytics schemas

**Outbound URL parameters (and UTMs) in the app**

- Where: In the app, these URL parameters are added to outbound links.
- Which links: all links going to Sourcegraph domains.

  - [Docs](https://docs.sourcegraph.com)
  - [About](https://about.sourcegraph.com)
  - [Dotcom](https://sourcegraph.com/search)

  | URL parameter |                           Description                           |      Example value       |
  | :-----------: | :-------------------------------------------------------------: | :----------------------: |
  |  app_version  |          Installed release version of Sourcegraph App           | 2023.03.23+205275.dd37e7 |
  |    app_os     |          Operating system (“mac”, “linux”, “windows”)           |           mac            |
  | utm_campaign  |                    Always equal to “sg_app”                     |          sg_app          |
  |  utm_medium   |                   Always equal to “referral”                    |         referral         |
  |  utm_source   | (Optional) Product page, if any, that is the source of the link |      batch-changes       |

**Update Check Pings in the app**
In Sourcegraph App, we re-use the same “update check” mechanism to send pings but instead of full pings, we send limited telemetry.

| Ping request field |   BigQuery column   |                                                                              Description                                                                              |            Example value             |
| :----------------: | :-----------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------: |
|        site        |   remote_site_id    |                             Site ID, a random unique anonymous identifier that persists for the duration of the installation of the app.                              | c98c20ce-3a0f-40d3-9a9e-ac2c24c7a52c |
|     deployType     |     deploy_type     |                                          Deploy type that identifies this as Sourcegraph App. Always equal to “app” in App.                                           |                 app                  |
|      version       | remote_site_version |                                                             Installed release version of Sourcegraph App                                                              |       2023.03.23+205275.dd37e7       |
|         os         |         os          |                                Operating system (“mac”, “linux”, “windows”) (newly created field in pings schema; only present in App)                                |                 mac                  |
|     totalRepos     |     total_repos     |                                           Number of repos added (newly created field in pings schema; only present in App)                                            |                  12                  |
|    activeToday     |    active_today     | Boolean indicating if the App user was active today. “getUsersActiveTodayCount” is used to determine this. (newly created field in pings schema; only present in App) |

- Where: These fields are present in the “Update Check” pings, sent by Sourcegraph App to the “Update Check” handler on sourcegraph.com and then inserted into a dataset in BigQuery. Existing ping payloads for other instances of Sourcegraph are not changed.
- Frequency: A ping is triggered upon startup of Sourcegraph App and thereafter at an interval of approximately every 30 minutes while the app is running (same frequency as instance pings)
