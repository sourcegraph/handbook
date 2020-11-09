# Product roadmap

We strive for an outcome-based roadmap: each roadamp item should describe the problem we want to solve or outcome we want to achieve.

<!-- Gantt chart syntax documentation: https://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/gantt.html -->

<pre class="mermaid" data-rendered-width="150%" data-scroll-right="50%">
gantt
    title In progress work
    dateFormat YYYY-MM-DD
    axisFormat %b %d

section Milestones
    3.21 :active, release-3.21, 2020-09-21, 2020-10-20
    3.22 :        release-3.22, 2020-10-21, 2020-11-20

%% section Campaigns
%%     TO DO :active, after release-3.21, 30d

section Cloud
    User added code is indexed and searchable                 :done,   2020-09-23, 2020-10-07
    RFC 167 - Product license tiers                           :active, 2020-10-07, 14d
    Syncing repos is more scalable                            :active, 2020-10-07, 14d
    Metrics/monitoring in place                               :active, 2020-10-07, 14d
    GitHub app to simplify access to repositories (spike)     :        2020-10-21, 2d
    Webhooks to receive repo permissions and metadata (spike) :        2020-10-21, 2d

%%section Code intel
 %% TO DO   

section Web
    Browser extension discoverability                         :done,    2020-09-28, 14d
    Build new and improved extensions                         :active,   2020-10-12, 14d
    Improve extensions development + docs                     :         2020-10-26, 14d
    Code insights TBD                                         :         2020-11-09, 14d
    Web nav updates                                           :         2020-11-09, 7d
    Breadcrumbs                                               :         2020-11-16, 7d

%% section Search
%%     TO DO :active, after release-3.21, 30d
</pre>

## Campaigns

1. **Customer outreach to improve adoption of campaigns**
1. User credentials ([RFC 242](https://docs.google.com/document/d/1SqoWWm1xs82QibrWwYsXmpmgweN6EpcKt1qXrRBjjlU/edit)), which will allow non-site-admins to create campaigns
1. Better burndown charts
1. Versioning/releasing of src-cli with respect to sg/sg
1. Improved documentation of src-cli login process
1. Add filtering/searching to campaign and changeset lists
1. Ability to auto-merge changesets, depending on various conditions
1. Ability to add default reviewers to changesets

See [our team page](https://about.sourcegraph.com/handbook/engineering/campaigns#roadmap) for more detail about our longer-term roadmap and our roadmap process.

## Cloud

See [cloud roadmap](../engineering/cloud/goals.md#roadmap)

## Code intel

See [Code Intel roadmap](../engineering/code-intelligence/goals.md#roadmap)

## Distribution

See [Distribution roadmap](https://github.com/sourcegraph/about/pull/1104).

## Search

See [search roadmap](../engineering/search/goals.md).

## Security

See [WIP roadmap](https://sourcegraph.productboard.com/feature-board/2119755-cloud).

## Web

See [web roadmap](../engineering/web/goals.md#roadmap)
