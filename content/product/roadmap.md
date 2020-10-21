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

%% section Code intel
%%     TO DO :active, after release-3.21, 30d

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

1. ✅ User added code is indexed
1. ✅ Users do not need to take any steps for a repository they add to be searchable
1. 🔄 [RFC 167: Product license tiers](https://docs.google.com/document/d/1XozQ4JINJqirdaG-XqGtboT2-PlIXPyBn6EwV7Q3pWI/edit?ts=5f0811cf#heading=h.trqab8y0kufp)
1. 🔄 Syncing repos is more scalable
1. 🔄 Metrics/monitoring in place to ensure a good experience
1. GitHub app to have users sign in with GitHub and select the repos/organizations that have access.
1. Use webhooks to receive updates on anything that is relevant to this user’s connection to GitHub
1. Equivalent things to GitLab and Bitbucket Cloud
1. User understands state and progress of their configured repositories and associated metadata
1. [UX TBD: New sign up/auth flow]
1. [UX TBD: Communicate state]

Unplanned:

- [Non-Git VCS](https://docs.google.com/document/d/1Y2xYbckAz5jlBePER_BarypeDfP3mjjX9bBOZm3ALqY/edit#heading=h.m60esa7uysvx)

## Code intel

1. 🔄 Simplify database structure and improve performance by migrating SQLite data to Postgres.
1. 🔄 Rebuild lsif-java indexer using com.sun.source
1. 🔄 Resolve outstanding issues for lsif-clang
1. 🔄 Provide best effort auto-indexing for supported languages
1. 🔄 Ship lsif-go to 3 organizations
1. 🔄 Ship lsif-clang to 3 organizations
1. Add native Gradle support for lsif-java
1. Ship lsif-java to 3 organizations
1. Integrate with Bazel for monorepo support

See [Code Intel roadmap](https://docs.google.com/document/d/1JPNelxg_8xwZKz8TT2BnpCccShOgxJrLubf2RNGye50/edit#) for more.


## Distribution

See [Distribution roadmap](https://github.com/sourcegraph/about/pull/1104).

## Search

1. 🔄 Enterprise homepage
1. 🔄 Search tour
1. 🔄 Search expressions
1. 🔄 Scaling indexed text search to 500k repositories
1. 🔄 Streaming search
1. Code monitoring (private code monitors, no sharing, emails + webhooks)
1. Performance at scale: follow-up to “scale indexed text search to 500k repositories”, focus and scope TBD
1. As a user, I can create a scope of code I want to search across as a list of repositories (consolidate repogroups + search scopes)
1. As a user, I can create a scope of code I want to search across as a list of repositories + branches (better version contexts 1/2)
1. Search language rules engine
1. Saved searches without monitoring
1. Search results redesign
1. Diff/commit search performance
1. Search input redesign
1. Structural search performance
1. As a user, I can create a scope of code I want to search across as a list of repositories + branches that should be indexed (better version contexts 2/2)
1. Code monitoring (shareable)
1. Semantic search: prototype validation
1. External search result providers
1. Semantic search: implementation

See [search roadmap prioritization](https://docs.google.com/document/d/1sUoaF8otA25NMapVcM5yHfP82kFie0NUd3_kL5Rg2Ns/edit) for more details on individual items.

## Security

TO DO

## Web

1. ✅ Existing sourcegraph extensions are more discoverable ([RFC 209](https://docs.google.com/document/d/1I5BMEGp3QuB81AjSzLCQwq_XJV1sXevlU0lpB4O1pj8/edit#))
1. ✅ The Sourcegraph browser extension is more discoverable and easy to congifure ([RFC 221](https://docs.google.com/document/d/19f4xleYBU1zZZdqMmXlLmFxeR-fwEpOwTOgViOFOnyo/edit))
1. 🔄 Build new and improved Sourcegraph extensions to showcase the value and opportunity of extensions ([RFC 246](https://docs.google.com/document/d/1HngEeLNAe7_QzVJr6UPi0Si4ZALqTzb7uonOxUiJP6g/edit))
1. Improve the Sourcegraph extensions (internal) development experience ([RFC 155](https://docs.google.com/document/d/1ikrUNVe3YVbR-JpegxhjrFdmRkTGzTLcOMkKHnOyjuE/edit)) and (external) documentation
1. Code insights TBD
1. Sourcegraph web app navigation is clearer and intentionally designed ([RFC 248](https://docs.google.com/document/d/1AEeCuXuYGlu2kU9HfTuh5rMuoL2ASxy-G4LFje_ySFE/edit?usp=drive_web&ouid=110069214620879702746))
1. Page title breadcrumbs are unified and useful 
1. Later-stage code insights work 

