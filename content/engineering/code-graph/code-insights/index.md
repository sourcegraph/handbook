# Code insights team

The code insights team is responsible for building and delivering code insights to engineering leaders, empowering data-driven decisions in engineering organizations.

<img src="https://storage.googleapis.com/sourcegraph-assets/handbook/engineering/code_insights/screenshot.svg" alt="Screenshot of a code insights dashboard with graphs" width="1141" height="391" style="width: 100%; height: auto" />

## Pages

- [Processes](processes.md)
- [Goals and Roadmap](../../../company/strategy/code-graph/code-insights/index.md)
- [Product docs](https://docs.sourcegraph.com/code_insights)
- [Development docs](https://docs.sourcegraph.com/dev/background-information/insights)

## Members

- [Joel Kwartler](../../../company/team/index.md#joel-kwartler) ([Product Manager](../../../product/roles/index.md#product-manager))
- [Alicja Suska](../../../company/team/index.md#alicja-suska) ([Product Designer](../../../product/roles/index.md#product-designer))
- [Felix Becker](../../../company/team/index.md#felix-becker) ([Engineering Manager](../../roles.md#engineering-manager)) {#code-insights-eng}
  - [Vova Kulikov](../../../company/team/index.md#vova-kulikov) (Frontend Engineer)
  - [Justin Boyson](../../../company/team/index.md#justin-boyson) (Frontend Engineer)
  - [Coury Clark](../../../company/team/index.md#coury-clark) (Backend Engineer)
  - [Cristina Birkel](../../../company/team/index.md#cristina-birkel) (Backend Engineer)

[We're hiring!](https://boards.greenhouse.io/sourcegraph91/jobs/4034945004)

## Mission

To create a Sourcegraph code insights product that answers all your important high-level questions about what's in your code and how it's changing.

## Vision

Sourcegraph users – especially those in leadership roles – create and monitor code insights to answer vital questions about their code, including:

1. How their code is tracking against any migration, pattern, or code smell goals
1. How their code is changing over time and what areas may need more or less developer attention
1. Understanding their code's current and historical content, like its languages, libraries, and structure
1. What patterns or outliers exist in their third party tools' data when viewed at a high level
1. Any of the above questions, but also filtered by repository, engineering team, or other division

## Responsibilities

The code insights team is responsible for all code insights features, both backend and frontend.

While code insights is in prototype stage, the code insights team is also responsible for all support.

## What is code insights?

Code insights is the first feature in Sourcegraph that can tell you things about your code at a **high level**.

Code insights dashboards will answer questions like "How is a migration progressing?", "What areas of the code are most vulnerable to bugs?", and "How many developers are using a specific API?" Code insights will also incorporate third-party data like code coverage or static analysis metrics to deliver on the promise of aggregating everything you can know about your code.

Sourcegraph is in the unique position to give these insights because we have universal code search: to know _anything_ about your code at a high level confidently means you must know _everything_ about your code at a low level.

Code insights connects many features that Sourcegraph already has and builds on top of them.
We go beyond single-step code intelligence and search to connect the full cycle of analyzing (code intelligence), monitoring (code insights), and actionably changing a codebase (batch changes).

Code insights is the first feature primarily built for non-search-based user personas (developers), instead focusing first on the needs of engineering directors and VPs.

For more information about code insights, see the original [product document](https://docs.google.com/document/d/1EHzor6I1GhVVIpl70mH-c10b1tNEl_p1xRMJ9qHQfoc/edit) or this [demo](https://www.youtube.com/watch?v=XqeRb6Mc4Co) of a code insights prototype. Anyone on the Sourcegraph team can create your own insight using the [quickstart guide](https://gist.github.com/Joelkw/f0582b164578aabc3ac936dee43f23e0), which is explicitly not in the Sourcegraph docs because code insights is undergoing rapid development and this setup will soon change.

## Contact

- #code-insights channel or @codeinsights in Slack.
- [team/code-insights](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/code-insights) label on GitHub.
- @sourcegraph/code-insights team on GitHub. We also have two specific GitHub groups to reduce notification spam from pull requests:
  - @sourcegraph/code-insights-frontend for only the frontend engineers on the team
  - @sourcegraph/code-insights-backend for only the backend engineers on the team
- [Code Insights Events](https://calendar.google.com/calendar/u/0?cid=Y19kOWFyMHUzZ3BpbnVpNjRiMDRpNjc3bm1qY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) calendar.
  - _Teammates should add this calendar (calendar ID `c_d9ar0u3gpinui64b04i677nmjc@group.calendar.google.com`) as an additional calendar in the [Roots PTO Slack app](../../../people-ops/submitting-time-off.md) so that their PTO is visible to their team on the team calendar (and disable adding their manager directly to the calendar invite)._
- code-insights-team@sourcegraph.com Google group for mentioning in Google Docs and calendar invites.

## Useful browser bookmarks ⭐️

The following bookmarks are useful to add to your browser's bookmark bar if you're on the code insights team. You can drag & drop these directly into your bookmarks bar.

- [GitHub Project Board](https://github.com/orgs/sourcegraph/projects/118?fullscreen=true) (fullscreen)
- [New code insights issue](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/code-insights&projects=sourcegraph/118) (pre-fills labels and project)
- <a href="javascript:location.search='?expand=1&template=developer_insights.md&labels=team/code-insights'">Use Developer Insights PR template</a> (bookmarklet, run on the open-PR GitHub page to add our checklist template)
- [Code Insights GDrive folder](https://drive.google.com/drive/folders/16DrxdYnJAQ-fCIy3n1DXheReqWNV5U12) (all our documents are here or linked from here)
- [Code Insights Roadmap](https://sourcegraph.productboard.com/roadmap/3362047-code-insights-beta-to-ga)

## History

In mid-2020, Code Insights was born out of [RFC 144: Code Insights](https://docs.google.com/document/d/1EHzor6I1GhVVIpl70mH-c10b1tNEl_p1xRMJ9qHQfoc/edit#), with the stated goal of being a Sourcegraph feature directly valuable to users in engineering leadership, in addition to individual developers. It was prototyped solely on the frontend to validate strong customer interest.

In late 2020, after the initial validation, and using the frontend-only functional prototype, a product designer and newly-hired product manager developed a detailed validation of use cases, customer excitement, potential directions, and the existing spaces the product fit into. Those findings are in [PD 18: Code Insights](https://docs.google.com/document/d/1d34gCpt_rUOMAun8phcjNsFofGaaA_N_8znmgaugdKw/edit).

In early 2021, seeing continued validation and opportunity, Code Insights became its own team separate from the "web team" (now 2021's Developer Insights org).

In mid-2021 we made the first engineering hires to grow Code Insights to a full engineering team and bring the product to market.
