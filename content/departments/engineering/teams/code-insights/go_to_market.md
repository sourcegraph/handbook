# Code Insights go-to-market resources

This is the source of truth list of go-to-market resources for the sales, customer engineering, and marketing teams.

## Sales and customer engineering

### Code Insights enablement training _internal_

In the [Google drive folder](https://drive.google.com/drive/folders/1vYwRVsK8IfmaLa7cDcctXydClsWmnAQE): the [zoom recording](https://drive.google.com/file/d/1B1RX_Vn1sWVcv6iZajcMlcYhw5jwMtjp/view), the [slide deck](https://docs.google.com/presentation/d/1feAl1na3R3A56c_WKvWddgZB_bhk69Qqq6GWr_ISYuM/edit#slide=id.g115ca1be0be_3_654), and the [followup Q&A](https://docs.google.com/document/d/1r22Q7D801c1W6sNB0UAXk_VFlG-BgFgxk0sByZ7hR2E/edit).

This is an exhaustive resource from March 2022 containing all you need to know to effectively generate, demo, support, and close Code Insights sales, including:

- Code Insights to FY23 Use Case mappings
- Discovery questions
- Demo paths
- Demo tips
- Objection handling
- Competitive market overview
- Business Value drivers
- Interpreting usage stats
- Pricing
- Closing sales

### Demo dashboards on demo.sourcegraph.com

There are demo dashboards by use case, persona, feature, and overall on demo.sourcegraph.com for you to use – for example, here's the generic ["popular examples" one](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDU0Nn0=) and here's the ["[Use case] code health one](https://demo.sourcegraph.com/insights/dashboards/ZGFzaGJvYXJkOnsiSWRUeXBlIjoiY3VzdG9tIiwiQXJnIjo3NDUzNn0=). You can access them by using the dashboards dropdown – anything in the "Insights Examples" org (all will be in the same section of the dropdown) are perfect for demos, or you can type the name in the dropdown search selector.

### Individual instance usage dashboards

[Per-instance Code Insights dashboard](https://sourcegraph.looker.com/dashboards/208?Instance=Atlassian) to see detailed usage. This [loom video](https://drive.google.com/file/d/1MoAI2VSpw49lYJh2cUXTSnC2Ys_EdyTd/view?usp=sharing) explains how to interpet the data (first original 2m:30s) and the final most-recently-updated 3m:10s go through how you can determine best next steps and what resources to send your customers.

[Overall search aggregation dashboard](https://sourcegraph.looker.com/dashboards/370?Unique+Server+ID=) shows you search aggregations (charts on sidebar of search screen) usage and you can filter it to individual instances. You won't need this as often but you can see if your customer is using things like the capture group search breakdown or repo/path filters a lot in their search.

[Code Insights backfill times dashboard](https://sourcegraph.looker.com/dashboards/373) shows you p50/p90/p99 backfill times in seconds for code insights. Use this to determine "are insights unnaturally slow at my customer?" You can compare them to similar customer's backfill times (make sure to also try to match a similar number of repos at those comparison customers) to get a sense of what "normal" is. Null values show when customers didn't create/backfill any insights that week.

### Common use cases Docs

The [main dashboard insights recipes](https://docs.sourcegraph.com/code_insights/references/common_use_cases) and [search results aggregations](https://docs.sourcegraph.com/code_insights/references/search_aggregations_use_cases) recipes.

### Customer-facing [pitch slides](https://docs.google.com/presentation/d/1EXKLG_Bk7L95EvWmAWzE3XQs_eV5QASELG2Sgppd278/edit)

You can use these as a starting point for Code Insights presentations.

### Pricing

- [Free tier of Code Insights](https://docs.sourcegraph.com/code_insights/references/license#limited-access)
- [Primary pricing document for AEs](https://docs.google.com/document/d/11Y5ZDIT_nCwkobGzVgseM7vgmk5Hkt-4UZHvivHwN7A/edit#) _internal_
  - The go-to place when you need to price Code Insights for a proposal: includes how to price, common FAQs, and a running list of closed sales.
- [Full pricing logic](https://docs.google.com/document/d/1uItRIIzujoCCaZkDg73ZV8lguhux-D75zjqVr6zTnRI/edit#bookmark=id.i02vq75zxjxu) _internal_
  - The full deep dive into the justifications behind the pricing.

### Code Insights closed sales trends and analysis

[Analysis of closed sales through FY23Q1.](https://docs.google.com/presentation/d/1xEMucmt6E3hXl-k1bRp5nsfFyEVI1zqkFlVj-Fn4Jt8/edit#slide=id.g12fb793a505_0_36) This can help you determine who to target or when to target customers based on usage data.

### How to demo Code Insights on public prospect repos

If you want to run Code Insights over a public prospect's repo, [follow these steps](https://drive.google.com/file/d/1fOrEPLS91-4CTNwihOQi7w0Q_nOIEd0X/view?usp=sharing) to connect those repos to demo.sourcegraph.com. Since it's unlikely you're a site admin on demo.sourcegraph.com, you can tag @ce-sdr-collab in the #CE channel to ask them to temporarily connect the repos you need. Note: you should ensure you use **demo.sourcegraph.com** and **not** sourcegraph.com

## Marketing

### Customer-facing shareable resources

- PDFs and case studies
  - [Neo Financial Code Insights Case Study](https://about.sourcegraph.com/case-studies/neo-financial-improves-the-developer-experience-with-sourcegraph)
  - [How Frontend Platform Teams can build a data-driven relationship with your codebase](https://about.sourcegraph.com/guides/data-driven-relationships-with-codebases.pdf)
  - [How DevOps Teams can build a data-driven relationship with your codebase](https://about.sourcegraph.com/guides/devops-data-driven-relationships-with-codebases.pdf)
  - [PDF for "Sourcegraph for platform engineering"](https://sourcegraph.highspot.com/items/63a3491704ea61ab3909a530?lfrm=shp.0)
  - [How Sourcegraph uses Code Insights: case study blog post](https://about.sourcegraph.com/blog/migrating-to-css-modules-with-codemods-and-code-insights/)
- April 2022 Code Insights Webinar: How to track what really matters to you and your team
  - [Slides](https://docs.google.com/presentation/d/1d-A7HwARbLKOjreGXsQ5eA9W4oO7Qb_5LXaOw6k2Tic/edit#slide=id.p) (for internal use or explicit repurposing – don't share directly)
  - [Figma flow chart](https://www.figma.com/file/8U0dOvt368voozlCMvmvPA/Tracking-what-matters-in-your-code-webinar?node-id=5%3A44)
  - [Webinar Recording](https://drive.google.com/file/d/143csAoQZ2eQK1DaCNOekeV0MdqFX61tb/view?usp=sharing)
- General
  - [About.sourcegraph.com landing page](https://about.sourcegraph.com/code-insights/)
  - [Sourcegraph.com landing page](https://sourcegraph.com/insights)
  - [Announcement blog post from CEO Quinn Slack](https://about.sourcegraph.com/blog/announcing-code-insights/)

### Internal-only resources

- [Quick list of how Code Insights maps to FY23 Use Cases](https://docs.google.com/document/d/1NXR0eX9VseJGT_BfCata_WR-yP0VxPsyYIyrsTOuoPs/edit#heading=h.xern6pnzakek)
- [Specific engineering team persona talking points and examples](https://docs.google.com/document/d/1x95bRgTtt5CXdCQVOXG_JgJ8ut4totRzCAKderw2cxA/edit#)
- [Product marketing brief](https://docs.google.com/document/d/1KH91cjc9Y0BnEKdcsgeSyBqRLEQ5jA7uMA1br5mmZG4/edit) _internal_
  - An overview of the target audience, problem, solution, and go-to-market strategy.
- [Launch FAQ](https://docs.google.com/document/d/1Vb9M-92GzHJeMEHRJzASRTX_LXfFgBmUOLqKTRFTKI8/edit) _internal_
  - FAQ-style responses to launch-related questions.
