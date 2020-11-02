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

section Code intel
    SQLite data to Postgres migration                       :done,   2020-10-01, 2020-10-20
    Auto-indexing for supported languages (RFC 201)         :active, 2020-10-10, 40d
    Rebuild lsif-java indexer using com.sun.source          :active, 2020-10-10, 40d
    Add native Gradle support for lsif-java                 :active, 2020-10-21, 14d
    Add native Maven support for lsif-java                  :active, 2020-11-05, 14d
    Resolve outstanding issues for lsif-clang delivery      :active, 2020-09-21, 50d
    Ship lsif-clang to 3 organizations                      :active, 2020-11-01, 20d
    Review and fill documentation gaps to ease adoption     :active, 2020-10-21, 15d
    Ship lsif-go to 2 organizations                         :active, 2020-11-01, 20d
    Add incremental indexing for monorepo support (RFC 170) :active, 2020-11-10, 5d
    Ship lsif-java to 3 organizations                       :        2020-11-20, 20d
    Integrate with Bazel for monorepo support               :        2020-11-21, 7d

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
1. Versioning/releasing of src-cli with respect to sg/sg
1. Respect GitHub GraphQL rate limits
1. Improved documentation of src-cli login process

See [roadmap at a glance](https://docs.google.com/document/d/1zRTfK6mENKicfLwDaWgLk1dBvQVKDg-J7pwjGg8tpps/edit#) for more.

## Cloud

See [cloud roadmap](../engineering/cloud/goals.md#roadmap)

## Code intel

1. ✅ Simplify database structure and improve performance by migrating SQLite data to Postgres
1. 🔄 Provide best effort auto-indexing for supported languages [RFC 201](https://docs.google.com/document/d/1NPQs1s814LZjNXjPuavqC1N7hZR192DNtmSBmAeH9UY/edit)
1. 🔄 Rebuild lsif-java indexer using com.sun.source
1. 🔄 Add native Gradle support for lsif-java
1. 🔄 Add native Maven support for lsif-java
1. 🔄 Resolve outstanding issues for lsif-clang delivery
1. 🔄 Ship lsif-clang to 3 organizations
1. 🔄 Review and fill documentation gaps to ease adoption
1. 🔄 Ship lsif-go to 2 organizations
1. 🔄 Add incremental indexing for monorepo support [RFC 170](https://docs.google.com/document/d/1NPu0Vc7FpdoYwCrtpnu-8KB4OPbw7L0KBTqw96JVc8w/edit#)
1. Ship lsif-java to 3 organizations
1. Integrate with Bazel for monorepo support

See [Code Intel roadmap](https://docs.google.com/document/d/1JPNelxg_8xwZKz8TT2BnpCccShOgxJrLubf2RNGye50/edit#) for more.

## Distribution

See [Distribution roadmap](https://github.com/sourcegraph/about/pull/1104).

## Search

See [search roadmap](../engineering/search/goals.md).

## Security

See [WIP roadmap](https://sourcegraph.productboard.com/feature-board/2119755-cloud).

## Web

1. ✅ Existing sourcegraph extensions are more discoverable ([RFC 209](https://docs.google.com/document/d/1I5BMEGp3QuB81AjSzLCQwq_XJV1sXevlU0lpB4O1pj8/edit#))
1. ✅ The Sourcegraph browser extension is more discoverable and easy to congifure ([RFC 221](https://docs.google.com/document/d/19f4xleYBU1zZZdqMmXlLmFxeR-fwEpOwTOgViOFOnyo/edit))
1. 🔄 Build new and improved Sourcegraph extensions to showcase the value and opportunity of extensions ([RFC 246](https://docs.google.com/document/d/1HngEeLNAe7_QzVJr6UPi0Si4ZALqTzb7uonOxUiJP6g/edit))
1. Improve the Sourcegraph extensions (internal) development experience ([RFC 155](https://docs.google.com/document/d/1ikrUNVe3YVbR-JpegxhjrFdmRkTGzTLcOMkKHnOyjuE/edit)) and (external) documentation
1. Code insights TBD
1. Sourcegraph web app navigation is clearer and intentionally designed ([RFC 248](https://docs.google.com/document/d/1AEeCuXuYGlu2kU9HfTuh5rMuoL2ASxy-G4LFje_ySFE/edit?usp=drive_web&ouid=110069214620879702746))
1. Page title breadcrumbs are unified and useful 
1. Later-stage code insights work 

