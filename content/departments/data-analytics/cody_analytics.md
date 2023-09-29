## Cody data and analytics

**Metric: Cody installs**

- **Definition:** The number of **distinct users** that successfully install Cody editor extensions. Installation occurs as soon as the extension is added by the user, and does not require a successful sign-in (which comes later).
- **Why this metric:** This is the first action in the user journey where a user can signal intent to use Cody.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Cody Installs (all users)” chart)

**Metric: Cody DAUs**

- **Definition:** The number of active [product users](#cody-product-dau) of Cody each day.
- **Why this metric:** Tracking DAU over time show the consistent engagement users have with Cody
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Cody DAUs” chart)

**Metric: Retention**

- **Definition:** The number of Cody users who were active (based on our [product user definition](#cody-product-daus) 1 and 7 days after installing Cody, respectively.
- **Why this metric:** As we continue to ship improvements to Cody, retention will be key to understanding how much value users are getting from the Cody.
- **Source of truth:** This data is logged by eventlogger, and accessed via [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) (see: “Cody Day 1 Vs Day 7 Retention” chart)

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

A billing DAU represents a user who interacts with the Cody product, regardless of intention and result. This is inclusive of a broader set of product usage. This includes pages that provide in-product information about Cody (such as the site-admin Cody page).

By default, any events that contain the text “cody” and that come from the Sourcegraph web app or Sourcegraph editor extensions (i.e., event source is `WEB` or `IDEEXTENSION`) are included. We also maintain a deny list of events that are excluded (for example, interactions with CTAs on marketing pages).

## Cody reporting tools

Cody data is available in Looker and Amplitude. Below we explain when to use which tool.

\*\*Looker

Looker is the source of truth for all shareable Cody KPIs and metrics. See [Looker](https://sourcegraph.looker.com/dashboards/476?Server+Endpoint=) KPIs.

Looker also contains reporting via Pings from our customers.

\*\*Amplitude

Amplitude contains Cody events from the Eventlogger. See [Amplitude](https://analytics.amplitude.com/sourcegraph/space/mrlfrgi/all) Cody project for examples of analyses.
Use Amplitude for adhoc analysis, funnel analytics, and other analytics outside of performance metrics.
