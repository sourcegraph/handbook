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

%% section Web
%%     TO DO :active, after release-3.21, 30d

%% section Search
%%     TO DO :active, after release-3.21, 30d
</pre>

## Campaigns

1. Gradually publish changesets ([RFC 228](https://docs.google.com/document/d/1A-5cbYGz1p1UB1eAFsIgpK5XDkvS7ZNAVKMdtBm_WY0/edit?ts=5f48b4b2#heading=h.trqab8y0kufp) changesetTemplate.published boolean)
1. Improved src-cli UX: better errors, debugging support, src-cli command to create skeleton spec
1. User credentials ([RFC 242](https://docs.google.com/document/d/1SqoWWm1xs82QibrWwYsXmpmgweN6EpcKt1qXrRBjjlU/edit)), which will allow non-site-admins to create campaigns
1. Allow multiple users to edit the same campaign
1. Versioning/releasing of src-cli with respect to sg/sg
1. Publish changesets as GitHub draft PRs (and same for other code hosts)

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

TO DO

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

TO DO: below are rough items from a previous web team planning discussion.

1. Webapp consistency
1. The extension registry is confusing and does not communicate it's value
1. Many developers do not realize Sourcegraph has a browser extension
1. The Sourcegraph extension development experience is confusing and there aren't any good examples
1. A few high quality non-language intelligence extension would help communicate the value and opportunity of Sourcegraph extensions
1. Code insights
1. Add support for more code hosts with the browser extension (e.g., Gerrit, Bitbucket Cloud).
1. Provide search capabilities from the code host
1. IDE integrations
