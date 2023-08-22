# Amplitude

## How do I get started?

1. Login to [our workspace](https://analytics.amplitude.com/sourcegraph) (named `Sourcegraph`). If you don't have an account, post in #it-tech-ops or request one during login.
2. Read the [Sourcegraph <> Amplitude FAQs](#faqs), view team-specific spaces below, or reach out in #analytics for help if you have any questions getting started viewing dashboards.
3. Read the [Amplitude help center](https://help.amplitude.com/hc/en-us) and Amplitude docs for [building analyses](https://help.amplitude.com/hc/en-us/categories/360003165371-Build-and-share-your-analysis) and/or check out some of our [tutorials](https://drive.google.com/drive/folders/1cdcUe2e4bnYjxr9xqV6-pCsOOPIEMqGI). As a reminder, you can always post in #analytics-review if you have a work-in-progress analysis you want someone else's eyes on. to get started building your own charts.
4. Look at all the [Team Spaces](https://analytics.amplitude.com/sourcegraph/team-spaces) and join whichever ones are relevant to you. Learn more about Team Spaces [here](#what-are-team-spaces).

## Why are we using Amplitude?

Amplitude is a product analytics tool specializing in turning event data into actionable insights and dashboards. Amplitude lets you analyze funnels, user flows, retention and more.

### Why aren't we using Looker for this?

Looker is very flexible in that we can set it up for any purpose we'd like. The downside is that to provide a great self-service experience for questions about product usage, setting up Looker would take a _lot_ of work. We get these capabilities out of the box with Amplitude.

### What is in Looker vs. Amplitude?

Anything not based directly on analyzing event-level data is in Looker. This includes [pings from on-prem instances](https://docs.sourcegraph.com/admin/pings), anything we get from the [Cloud Postgres database](https://github.com/sourcegraph/sourcegraph/blob/main/internal/database/schema.md) and any data from third-parties tools (such as Google Analytics and Salesforce).

Any analysis we conducted in Looker before we started using Amplitude we can continue doing in Looker. We'll still maintain existing Looker dashboards and visualizations. Amplitude will help us conduct new and different analyses regarding product analytics.

## Data

### Pipeline

Our Amplitude pipeline is connected to our `dotcom_events.events` table. The pipeline works like so:

1. A scheduled BigQuery [query](https://console.cloud.google.com/bigquery?tc=us:64b02e2a-0000-2155-80f9-001a11446b5e&project=telligentsourcegraph&ws=!1m0) runs hourly to extract the latest rows from `dotcom_events.events` and export the results to a [Google Cloud Storage bucket](<https://console.cloud.google.com/storage/browser/amplitude-events-dotcom;tab=objects?forceOnBucketsSortingFiltering=true&project=telligentsourcegraph&prefix=&forceOnObjectsSortingFiltering=false&pageState=(%22StorageObjectListTable%22:(%22f%22:%22%255B%255D%22))>)
2. Amplitude has a GCS connector set up that checks this bucket every hour and loads any new data into Amplitude.
3. The exported event data is now available in Amplitude for analysis and reporting.

The entire pipeline runs every hour so it can take up to 1 hour for data to start appearing in Amplitude.

#### Derived Properties

Within Amplitude we have built some derived properties that make it easier to extract our specific keys from our nested data fields and use them for analysis. Current derived properties include:

1. charCount
2. linesOfCode
3. is_sourcegraph_teammate
4. feature_flag:enable_simple_search
5. cody_client_version

If you have any derived properties you would like to create, please reach out to the Data&Analytics Team.

## Using Amplitude FAQs

### How do I find what we call an event in the Sourcegraph code?

Most often, you can search in the 'Select event' dropdown, and you'll find the event you're looking for. If you can't or are unsure what the Amplitude event corresponds to, keep reading!

To figure out an event's name is in code or to confirm whether an existing event in Amplitude is the correct one, follow these steps (or [watch this video](https://drive.google.com/file/d/1R1oAc82nZULfxtr_KsIPBT4K08YHEwLa/view?usp=sharing)) :

To find what a button, page view, or action is named

1. Open Safari or Chrome
2. Enable developer mode (preferences -> advanced)
3. Go to sourcegraph.com
4. Show the JavaScript console
5. Enter `localStorage.eventLogDebug = "true"`
6. Start using Sourcegraph and click/view the event you're looking for!

### Where should I save charts?

There are three levels to where you can save a chart:

1. To create a _private_ chart, uncheck 'Make Discoverable' in the chart's dropdown ("More").
2. To create a chart that is _discoverable_ by other teammates but not as easily accessible unless they search (or you send them a link), just create a chart. This is Amplitude's default.
3. Add charts to Team Spaces if you want them to be _easily accessible_ to teammates.

### What are Team Spaces?

Team Spaces are a collection of charts, dashboards and notebooks that are relevant to a specific group (Amplitude's version of a folder system). By joining one, Amplitude will notify you of every new analysis that a teammate adds to the space (and they'll be notified of yours, too). You can see all of our Team Spaces [here](https://analytics.amplitude.com/sourcegraph/team-spaces).

### Are there "official" or "approved" dashboards?

Yes! Select dashboards are reviewed by the Data & Analytics team and are marked as `Official Content`. You can view all this content by simply opening the search bar and selecting the `Official Content` checkbox.

### How do I know whether my account's instance data will be on Looker or Amplitude?

You can use [this flowchart](../#which-data-tool-should-i-use-for-instance-data) to determine which data tools (if any) your account will show up in.
