## Cody metrics

Below is an overview of a few of the key metrics we're using to measure and iterate on the cody product - how they are defined, why we use them, and where you can track them.

**Metric: Cody installs**

- **Definition:** The number of **distinct users** that successfully install Cody editor extensions. Installation occurs as soon as the extension is added by the user, and does not require a successful sign-in (which comes later).
- **Why this metric:** This is the first action in the user journey where a user can signal intent to use Cody.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Cody Installs (all users)” chart)

**Metric: Cody DAUs**

- **Definition:** The number of active [product users](#cody-product-dau) of Cody each day.
- **Why this metric:** Tracking DAU over time show the consistent engagement users have with Cody
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Cody DAUs” chart)

**Metric: Week 1 Usage Retention**

- **Definition:** The percentage of users who trigger an active product event (based on our [product user definition](#cody-product-dau)) in any of the 7-13 days (aka Week 1. Week 0 is days 0 to 6) after signup. Retention can be measured at other intervals besides Week 1 as well (such as Day 1, Day 7, Week 4, etc) but our company-level retention KPI will standarize on Week 1 Usage Retention.
- **Why this metric:** As we continue to ship improvements to Cody, retention will be key to understanding how much value users are getting from the Cody. There's also other retention metrics that we can measure such as Subscriber Retention, which measures the % of Cody Pro customers who purchase Cody Pro in Month 0 and whether or not they continue paying for Cody Pro in subsequent months.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Amplitude](https://app.amplitude.com/analytics/sourcegraph/chart/3pmjrguv)

**Metric: Completion acceptance rate (CAR)**

- **Definition:** The number of distinct accepted completion events divided by the number of distinct suggested completion events. We only count suggested completion events that were either 1) displayed to the user for at least 750ms, or 2) accepted by the user. For VSCode, we also exlcude suggestion/acceptance events that occur in an IDE that has other code completion providers enabled (because this makes it difficult for us to tell which suggested completion is "ours.") The code that generates this metric can be found [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/LookerSchema@4eee6154d7e4060121b9ca9211a2117dccde97c7/-/blob/views/eventlogger/cody.view.lkml?L401:12-401:38) (for VSCode) and [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/LookerSchema@4eee6154d7e4060121b9ca9211a2117dccde97c7/-/blob/views/eventlogger/cody.view.lkml?L419:12-419:38) (for JetBrains)
- **Why this metric:** This metric allows us to understand the quality of Cody's completion suggestions
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: "Completion acceptance rate" charts)

**Metric: Weighted completion acceptance rate (wCAR)**

- **Definition:** Total suggested characters of code that were accepted by the user / total suggested characters of code. We only count suggested completion events that were either 1) displayed to the user for at least 750ms, or 2) accepted by the user. For VSCode, we also exlcude suggestion/acceptance events that occur in an IDE that has other code completion providers enabled (because this makes it difficult for us to tell which suggested completion is "ours.") The code that generates this metric can be found [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/LookerSchema@4eee6154d7e4060121b9ca9211a2117dccde97c7/-/blob/views/eventlogger/cody.view.lkml?L819:12-819:38)
- **Why this metric:** wCAR does two things that the unweighted CAR does not: 1) it accounts for suggested completions that are partially accepted and 2) it assigns more weight to accepted completions that are longer (provide more code to the user). Since more code means more value, this weighting is a good indication of how valuable Cody's completions are.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Weighted CAR” chart)

**Metric: Persistence rate**

- **Definition:** the percentage of accepted completions that were unchanged or mostly unchanged at various time intervals (30/120/300/600 seconds). “Mostly unchanged” is defined as Levenshtein distance less than 33%. The code that generates this metric can be found [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/LookerSchema@4eee6154d7e4060121b9ca9211a2117dccde97c7/-/blob/views/eventlogger/cody.view.lkml?L934:19-934:30)
- **Why this metric:** This metric helps us understand the quality of Cody's completion suggestions. If most of the code written by Cody remains in the code base, we know that Cody is writing code that meets the standards of developers
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Persistence rate” chart)

## Cody user definitions

### Cody Product DAU

A product DAU represents a user who (1) makes a choice to interact or engage with Cody and (2) likely gets value from it.

By default, new user events are excluded; we maintain a tightly controlled allowlist of events that are included (find the full list on [our source of truth table in BigQuery](https://console.cloud.google.com/bigquery?project=telligentsourcegraph&ws=!1m5!1m4!4m3!1stelligentsourcegraph!2sdotcom_events!3scody_dau_lookup)).

Included events include:

- Accepting a completion (e.g. `CodyVSCodeExtension:completion:accepted`, `CodyJetBrainsPlugin:completion:accepted`)
- Asking a question, running a command, or editing a message (e.g. `CodyVSCodeExtension:recipe:chat-question:executed`, `CodyJetBrainsPlugin:recipe:improve-variable-names:clicked`, `web:codyChat:submit`, `CodyNeovimExtension:codeAction:cody.chat:executed`, and many more)
- Copying chat results (e.g. `CodyVSCodeExtension:copyButton:clicked`)
- Use of inline assist (e.g. `CodyVSCodeExtension:inline-assist:replaced`)
- And in the future, usage of new Cody-powered products like guardrails, natural language search, and more

### Cody Product DAUs and Installers

For retention calculations, it is important to not lose sight of the Cody editor extension installations. Even though these users may not actually get value from Cody from the installation alone, they have taken a direct action to get access to the product, and we have a chance to win them over. This metric is the Product DAU metric above, plus Cody extension installation events.

All retention calculations and charts (except when specifically marked) will use this Product DAUs + installers metric by default.

### Cody Billing DAU

A billing DAU represents a user who interacts with the Cody product, regardless of intention and result. This includes all [product DAU](#cody-product-dau) actions, and a broader set of product usage. For example, users who see Cody autocomplete suggestions (regardless of whether they accept them) and users who see pages that provide in-product information about Cody (such as the site-admin Cody page) are included as billing DAUs.

By default, any events that contain the text “cody” and that come from the Sourcegraph web app or Sourcegraph editor extensions (i.e., event source is `WEB` or `IDEEXTENSION`) are included. We also maintain a deny list of events that are excluded (for example, interactions with CTAs on marketing pages).

## Cody reporting tools

Cody data is available in Looker and Amplitude. Below we explain when to use which tool.

### Looker

Looker is the source of truth for all shareable Cody KPIs and metrics. You can generally find a lot of charts and dashboards pre-made by the Data and Analyics team here, but you can also feel free to manipulate those pre-made charts as needed, or generate your own! For more details on using looker, see [here](reports.md#what-is-looker)

### Amplitude

Amplitude contains the same Cody events data that looker does, but has fewer pre-made charts and key KPIs. In general, Amplitude is better used for exploratory analysis, such as investigating funnels and conversion or mapping user journeys. For more details on using Amplitude, see [here](reports.md#what-is-amplitude)

If you're SQL savvy and would prefer to query the data directly, check out [Redash](reports.md#what-is-redash)

## **Cody Pro Internal Reporting**

### **Reporting Data Source of Truth**

After evaluating Stripe's dashboard, its raw backend data, and our internal data (Self-Serve Cody, SSC) for Cody Pro reporting, we chose to pivot from using Stripe to SSC due to greater control and flexibility over our data. This decision came after addressing a discrepancy between the Slack bot (using Stripe's backend data) and Stripe dashboard figures achieving a 97% data match. The move to SSC, despite a current and lower 93% match confidence with Stripe data, will promise improved internal reporting after resolving a [critical bug](https://github.com/sourcegraph/self-serve-cody/issues/707) in active subscriber counting. Stripe remains essential for financial reporting compliant with GAAP, while SSC will serve our in-depth analytics.
[Click here](https://docs.google.com/document/d/1VX2VpoPzNCfOA_dCRrIM6_Dk5O5rY9bgI3yia0-oHDU/edit?usp=sharing) for a more detailed review of these sources' evaluation, implications, and resolutions.

### **Data Fields + Description**

- **date**: The reference date for the data snapshot (PST).
- **daily_subscribers**: The count of users who initiate a first or subsequent billing cycle of Cody Pro on a specific day.
- **new_subscribers**: The count of users who start their first month of a Cody Pro subscription on a specific day.
- **retained_subscribers**: The count of users who are active subscribers commencing their second or subsequent month of a Cody Pro subscription on a specific day.
- **canceled_subscribers**: The count of users whose subscriptions terminated on a specific day.
- **active_subscribers**: The total count of users with an 'active' subscription status on a specific day.
- **daily_revenue**: The total revenue generated from daily_subscribers, calculated as daily_subscribers multiplied by $9.
- **daily_revenue_added**: The revenue generated from new subscribers, calculated as new_subscribers multiplied by $9.
- **daily_revenue_retained**: The revenue from retained subscribers, calculated as retained_subscribers multiplied by $9.
- **MRR (Monthly Recurring Revenue)**: The monthly revenue from active subscribers, calculated as active_subscribers multiplied by $9.
- **ARR (Annual Recurring Revenue)**: The annualized MRR, calculated as MRR multiplied by 12.
