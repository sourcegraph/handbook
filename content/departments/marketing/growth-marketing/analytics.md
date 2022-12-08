## Key Metrics and Definitions

**Metric: Visitors**

- **Definition:** The number of unique hits to our website. Visitor numbers exclude users who used Sourcegraph via an extension only (since these users did not actually visit our website). Unless otherwise specified, visitor numbers include traffic to both the product and marketing sites.
- **Why this metric:** Tracking quantitative information about visitors will help us measure how many people are aware of our product. Qualitative info about visitors will help us understand who our traffic is and how they found us, so we can assess what's working.
- **Related metrics:**
  - Referrer: the website that directed the visitor to our website
    - Original referrer: The first website that directed this user to our website
    - Session referrer: The website that directed this user to our website for this specific session
  - UTM parameters (ex source, medium, etc): the UTM parameters associated to the URL the user landed on
  - Other qualitative info such as new vs returning user, cohort date, and whether the user has a cloud account
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/351) (see: “Visitors” chart)

**Metric: Leads (aka trial requests)**

- **Definition:** The number of unique cloud trial form submissions (regardless of whether or not they qualified for a trial)
- **Why this metric:** This metric helps us understand if visitors are getting enough value from our product to want to try it on their company’s code
- **Related metrics**
  - UTM parameters: the campaign that drove this lead to our website
  - Other qualitative info such as request data and current status (converted, disqulaified, etc)
- **Source of truth:** This data is logged via Salesforce, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/351) (see: “Growth Marketing KPIs”, “All leads”)

**Metric: Qualified leads (aka trial starts)**

- **Definition:** The number of leads who qualify for a trial instance.
- **Why this metric:** This helps us understand if we’re driving qualified visitors to try our product
- **Source of truth:** This data is logged in Salesforce, but should be accessed via [Looker](https://sourcegraph.looker.com/dashboards/351)(see:“Growth Marketing KPIs”, “All leads”)

**Metric: Visitor conversion rate**

- **Definition:** The ratio of leads to visitors (leads / visitors)
- **Why this metric:** This helps us understand what percentage of our visitors are requesting a trial
- **Source of truth:** [Looker](https://sourcegraph.looker.com/dashboards/351)(see: “Growth Marketing KPIs”, “Visitor Conversion”)

**Metric: Signup conversion rate**

- **Definition:** The ratio of leads to signup page visitors
- **Why this metric:** This helps us understand what percentage of people who land on the signup page actually signup, which gives us insight into whether the value of the product/signing up is clear
- **Source of truth:** [Looker](https://sourcegraph.looker.com/dashboards/351)(see: “Signup page conversion”)

**Metric: Lead qualification rate**

- **Definition**: The ratio of qualified leads to all leads (qualified leads / leads)
- **Why this metric:** Helps us understand what percentage of leads are actually qualified, to give us an idea of whether or not we’re driving the right kind of visitors to signup
- **Sources of truth** [Looker](https://sourcegraph.looker.com/dashboards/351)(see: “Growth Marketing KPIs”, “Trial requests vs qualified trial starts”)

## Key data sources

- **EventLogger:** An in-house tracking tool we use to track visitors and events on our websites. EventLogger logs data that is sent to our data warehouse and accessed in places like Looker and BigQuery. Documentation for key events in the signup flow can be found below. If you’re interested in the name of an event not specified at link below, see [here](../../data-analytics/amplitude.md#how-do-i-find-what-we-call-an-event-in-the-sourcegraph-code).
  - [Signup page](https://www.figma.com/file/8GislYxQsTAULqzxuDslca/Sign-Up-Flow-MVP?node-id=1851%3A1653&t=tRG6pg4Xfsyq8b7O-1)
  - [Dotcom homepage CTAs](https://www.figma.com/file/qdUtoveMtn2wI8eaysE1De/UX%3A-Cleaning-up-noise-below-the-search-bar-on-dotcom?node-id=29%3A2418&t=gjdiCLjDg4pqPhVT-0)
- **Salesforce**: Salesforce is used to track which leads are qualified, the status of those leads, and whether or not an opportunity is associated to those leads. Any salesforce data that would be of interest to the growth marketing team should be available via Looker.
- **[Plausible tracking](https://plausible.io/sites):** Plausible is a secondary tool we use to track visitors and referrers. While not considered a source of truth, we often use this for real-time analysis (Looker/Amplitude operate on a ~1-2hr delay). In addition, for more simple analyses, some find Plausible’s UI friendlier than our other BI tools.

## Known Gaps/Roadmap

- **EventLogger audit/improvements**
  - **Problem**: In the past we’ve mostly used eventlogger on the product site to track in-product activity, and not so much in other places. EventLogger tracking on the product/marketing site also hasn’t been the main priority of any team for some time. As a result, we’re not 100% confident we have all the required tracking on every sourcegraph webpage. With help from the growth marketing team, Analytics is conducting an audit to ensure we have all the right tracking in place.
  - **Impacts:**
    - We’re missing some data, or that data isn’t as accessible as we’d like
    - We have questions about how eventlogger is logging certain things, and want to ensure the data is as clean and reliable as possible,
  - **Plan to fix:**
    - [DONE] Conduct [audit](https://docs.google.com/document/d/1SnNSFMMftJMUpQJdsh4Q9F2PpQd18urn9Egh3mRhN1c/edit#) to identify gaps, [create a plan](https://docs.google.com/document/d/1Jf3JiYXXlIHWoy-EUm3w1T3JvfYYx26UjYZaTjDHsuI/edit) to fix them
    - [IN PROGRESS] Execute on each action item from the audit, in priority order
    - [DONE] [Update eventlogger → Amplitude pipeline](https://github.com/sourcegraph/analytics/issues/713) to parse additional event metadata and ensure instrumentation follows best practices
- **Dispersed sources of truth for key metrics, definitions**
  - **Problem:** We’re reporting in a number of places using a number of different tools. It’s not always easy to find what you’re looking for
  - **Impacts:**
    - It’s unclear where to go to get questions answered
    - We may not all be on the same page about what metrics mean
  - **Plan:**
    - [DONE] Document key metrics, how they are defined, sources of truth for each, in the handbook. Link to documentation in all reporting for visibility
    - [IN PROGRESS] Make data products (enterprise dashboards, ad hoc analysis) [more intuitive/interoperable](https://github.com/sourcegraph/analytics/issues/706)
- **Additional visualizations for data we didn’t have/didn’t track closely in the past**
  - **Problem:** In the past, the analytics team has not worked extensively with marketing data/stakeholders. As a result, we don't have a lot of data products tailored specifically to this audience.
  - **Impacts:**
    - Some high-level marketing metrics that would be useful to all marketing stakeholders (including growth marketing) are not available "out of the box"
  - **Plan to fix:**
    - [IN PROGRESS] Generate new data products that contain high-level marketing metrics so this data is easily accessible to all stakeholders. This is an ongoing effort, check out the [analytics project board](https://github.com/orgs/sourcegraph/projects/246/views/3) for work in flight for the current sprint. We'll post major updates publicly in #growth.

## Ongoing analytics initiatives for growth marketing

- Reviewing the impact of changes/additions to marketing and product sites
  - Each ticket in “measuring” status on the [growth marketing project board](https://github.com/orgs/sourcegraph/projects/296) gets reviewed at least once (or if necessary, at a regular cadence) to assess impact and determine if iteration is necessary
- Exploratory/ad-hoc analysis to surface anything potentially useful to the team
  - Some examples: [1](https://sourcegraph.slack.com/archives/C046X8AG5NY/p1667419856394489), [2](https://docs.google.com/document/d/1h5GP7zWOxylFyC8vm7fUWTp53xlFUHb7JlIEl8OzE0s/edit#), [3](https://sourcegraph.slack.com/archives/C046X8AG5NY/p1666819574200669), and [4](https://sourcegraph.slack.com/archives/C046X8AG5NY/p1666729945183029)
- Ongoing standardization/improvement of data pipelines, event logging, tracking
  - [EventLogger proposal](https://docs.google.com/document/d/16Lj2NyBZA3vnkS9gCi4JIk5IruAWNbo-SByNkWDY0hg/edit#)
  - [Event/event property process standardization](https://docs.google.com/document/d/18sJO6AeRrbzsdMPBb-jKLo6MsDgdRaUlLKovEwKV76Y/edit)
  - [EventLogger audit](https://docs.google.com/document/d/1SnNSFMMftJMUpQJdsh4Q9F2PpQd18urn9Egh3mRhN1c/edit#)
- Company-level reporting
  - [Product-led growth weekly](https://docs.google.com/presentation/d/1GxS4hWKLulxXfQPo4lVZ-BS5_OYLM9onpc90JmQhUb8/edit#slide=id.p)
  - [Weekly GTM Ops Update](https://docs.google.com/presentation/d/1XijiSEk4e1uY-z0UqFKXNQpC558GU6vRNdLN0yPlTVU/edit#slide=id.g177bd7b20dc_0_19)
- Updating enterprise dashboards and KPIs as necessary
  - [Product-led growth overview (Looker)](https://sourcegraph.looker.com/dashboards/351)
  - [Growth marketing dashboard (Amplitude)](https://analytics.amplitude.com/sourcegraph/dashboard/jsg5f3q)

## Other Resources

- [What we’ve learned (WIP)](https://docs.google.com/document/d/1lgx7h0a2vgfv-AXlVbD6UfqEFe2OWNvgRuUQhTplz0A/edit)
- [Industry benchmarks](https://docs.google.com/document/d/1JGnuynNiP9TkmgSuwkeuytKqcL7vPDBTGYB3MXiOPnA/edit): use this to compare our baseline KPIs to industry benchmarks
