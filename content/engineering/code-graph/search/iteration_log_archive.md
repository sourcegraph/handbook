# Iteration log archive

This document contains the goals and work log for the 2-week iterations of the search team conducted when it still operated as a single team.

## 2021-04-05 to 2021-04-16

### Research highlighting improvements

- **Owner(s):** Rok, Camden
- **Outcomes:**
  - Consolidate highlighting in Rust (move HTML re-parsing from `cmd/frontend/internal/highlight/highlight.go` to Rust lib)
  - Compile Rust lib to WASM and verify basic correctness
  - Measure speed and memory performance of the compiled lib vs. existing solution
- **Work log:**
  - YYYY-MM-DD: $UPDATE

### Enterprise contexts

- **Owner(s):** Rok, Camden
- **Outcomes:**
  - Identify all changes needed to incorporate search contexts into code intel
  - API support for creating search contexts
- **Work log:**
  - YYYY-MM-DD: $UPDATE

## 2021-03-22 to 2021-04-02

### Enterprise contexts

- **Owner(s):** Rok
- **Outcomes:**
  - Users are able to search with converted version contexts on the dogfood instance
  - Basic UI for displaying and listing search contexts
- **Work log:**
  - 2021-03-26: API support for converting version contexts is in main (soon on the dogfood instance). Finished the paginated API for search contexts. Started working on minimal UI for displaying and listing search contexts.
  - 2021-04-02: API support for retrieving a single search context and paginating search contexts is merged. Pending review: basic search context pages (single and list), infinite scrolling for the dropdown, and UI for converting version contexts. When this is merged (early next week), MVP can be considered finished.

### Search predicate builtins, complete `contains` filter predicate

- **Owner(s):** Rijnard, Camden
- **Outcomes:**
  - Complete [RFC 353 for search predicate builtins](https://docs.google.com/document/d/1h3WCJEcTeOXwK0DeH8N5QEtPaNta85ddGP4R-2rMdrs/edit#)
  - Complete `contains` filter predicate work items (See #18584)
  - Make progress on refactoring query processing (See outline in [RFC 254](https://docs.google.com/document/d/1_m63fsBMAtqaq3GA_aMzKUPxD3yxTy8d12lJE6qN6PU/edit#heading=h.s25eb1cluqod))
- **Work log:**
  - 2021-03-26: Partial RFC 353 progress, partial query refactoring progress.
  - 2021-04-02: Progress on frontend predicate scanner. Progress on refactoring (testing behavioral equivalence for major changes). Implemented `repo.contains.commit.after` to replace `repoHasCommitAfter`. RFC 353 is incomplete--we had to revisit considerations for predicate syntax around supporting better `repoHasCommitAfter`.

### Alerting and observability

- **Owner(s):** Camden
- **Outcomes:**
  - Have a plan for implementing alerting and a light on-call rotation
  - Implement better metrics to alert on
  - Get first minimal alerts working
- **Work log:**
  - 2021-03-27: Added a prometheus metric for overall search latency
  - 2021-03-29: Modified search-blitz to use a yaml config, have named queries, independently scheduled queries, and identify itself with a user-agent string. Additionally, added streaming support and moved it into sourcegraph/sourcegraph.
  - 2021-04-01: Created a sourcegraph.com-only dashboard for monitoring sentinel queries

### Code Monitoring

- **Owner(s):** Juliana
- **Outcomes:**
  - Polish items related to the "Monitor" button on the search results page are addressed
  - Work on checklist for code monitor queries is started
- **Work log:**
  - 2021-03-29: Prototype badge has been removed
  - 2021-03-30: Updated UI for the "Monitor" button on search results page
  - 2021-04-02: Checklist is code complete and in PR

### Exhaustive/Streaming

- **Owner(s):** Stefan, Keegan, Juliana
- **Outcomes:**
  - Sharded streaming on Cloud
  - Fixed highlighting for diff/commit search
- **Work log:**
  - 2021-03-26 (Stefan): This week I focussed mainly on improving observability for streaming and exhaustive search. In the course of that I overhauled our logging to Prometheus and Honeycomb. With the improved logging I was able to troubleshoot a recent performance degradation.
  - 2021-04-01: Sharded streaming was activated for everyone. Activation was smooth without any incidents.
  - 2021-04-01: Highlighting for diff/commit was fixed with a frontend-only fix. In the long run we should improve things by sending plain text or already highlighted html from the backend to frontend.
  - 2021-04-01: Paid back technical debt with smaller refactorings (RepoMatch, diff/commit streaming).

### Misc

- **Work log:**
  - 2021-03-28: Camden :: Completed linting effort #19568
  - 2021-03-29: Camden :: Added a generic match interface based off my work with Keegan #19580
  - 2021-04-01: Stefan :: Troubleshot a customer incident and investigated traffic spikes that started last Saturday.
  - 2021-04-02: Rijnard :: Fixed `/search` homepage autofocus regression before it became a feature request. #19678. Added helper functions for transforming frontend queries (stream suggestions).

## 2021-03-08 to 2021-03-22

### Implement `contains` filter predicate and document new additions

- **Owner(s):** Rijnard, Camden
- **Outcomes:**
  - Finish implementing `contains` filter predicate (see #18584) and pings metrics
  - Document `select` and `contains` usage and examples (`select` ships this release)
- **Work log:**
  - 2021-03-12: Initial `contains` implementation close to being merged. Started heavily refactoring our query processing which is slowing progress for evaluating more expressive queries like filter predicates, and will help address [perf/UX issues related streaming](https://github.com/sourcegraph/sourcegraph/issues/18203) (e.g., process queries natively by backends like Zoekt when possible, faster `not` queries, etc.)
  - 2021-03-15: Initial `contains` implementation merged. Still need to clean up predicate parsing and improve performance on intersections for high-cardinality matches
  - 2021-03-19: Merged documentation for `select`. `select` functionality shipped in 3.26. Continued query refactoring to simplify evaluation logic; pings metrics and `contains` frontend implementation deferred for ~1 week to minimize context switching.

### Enterprise contexts

- **Owner(s):** Rok
- **Outcomes:**
  - RFC reviewed and approved
  - MVP ready to be shipped (ideally within the 3.26 release)
- **Work log:**
  - 2021-03-12: RFC halfway reviewed. MVP not likely to be shipped within the next release, because it requires some internal testing to be confident. At this point, the MVP contains the ability to migrate version contexts, view search context "profile" page, and listing search contexts.
  - 2021-03-19: Decided to move MVP to next release to allow for some internal testing. Enterprise contexts RFC reviewed and approved. DB and ORM pull requests for enterprise contexts MVP under review and should be merged soon. Paginating search contexts API response complicates the dropdown UI a bit, so we'll have to find a way to address that.

### Streaming

- **Owner(s):** Stefan, Keegan, Juliana
- **Outcomes:**
  - Streaming defaults to on for all environments.
  - Streaming release blockers fixed.
- **Work log:**
  - 2021-03-12:
    - Nearly all integration tests run for streaming. One last release blocker left around duplicate results in or queries. Discussing solutions still in #18203.
    - Fixed "too large spans" in K8S logs. Root cause: we logged to spans ZoektSearch and ZoektSearchAll for every event coming from zoekt. Now we just log aggregates.
    - Log "time to first result" to Honeycomb (to be reviewed #19102). Still open: log to Prometheus, add to ping.
  - 2021-03-19: Streaming defaults to on for all environments.
  - 2021-03-19: Streaming now logs to Prometheus, Ping DB, and Honeycomb.
  - 2021-03-19: Don't mark spans as failed for context errors, which, by design, are very frequent for streaming search.
  - 2021-03-19: End-to-end tests have been updated to match expectations for Streaming Search

### Exhaustive

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
  - Enable zoekt end to end streaming for everyone on sourcegraph.com. #18303
  - Result limit and counts improvements (detailed breakdown, display limits, etc). #18297
  - src-cli for streaming done. For now what is missing is `-json` support.
  - Implement scheduler in Zoekt.
  - Initial release plan shared.
- **Work log:**
  - 2021-03-12:
    - Scheduler for zoekt out for review. sourcegraph/zoekt#74
    - src-cli now supports `-json` for streaming.
  - 2021-03-19:
    - Keegan :: reduced time this week, so did not land scheduler or result limit improvments.
    - Scheduler PR updated after feedback.

### Code Monitoring

- **Owner(s):** Juliana
- **Outcomes:**
  - Work is advanced on [Code Monitoring polish items](https://github.com/sourcegraph/sourcegraph/issues/17414)
- **Work log:**
  - 2021-03-12: Low cost polish items have been addressed.

### Misc

- **Work log:**
  - 2021-03-17: Rijnard :: Added syntax highlighting definitions 10+ languages, closed 7+ issues including customer requests.
  - 2021-03-17: Rijnard :: Shipped feature to enable case-sensitivity by default (customer request). #19242
  - 2021-03-10: Camden :: Finished pulling result types out of `graphqlbackend`. #18348
  - 2021-03-12: Keegan :: Fixed most common panic in production around go symbols. #19071
  - 2021-03-12: Keegan :: Several PRs to clean up logs in CI for backend tests (remove log spam, reduce verbosity, add buildkite sections).
  - 2021-03-12: Stefan :: Tiny refactoring of graphqlbackend.seach_results.go: don't return nil, nil anywhere.
  - 2021-03-15: Keegan :: Fixed panic in service discovery code. #19122
  - 2021-03-17: Camden :: Added highlighting for our queries in documentation. sourcegraph/docsite#70
  - 2021-03-17: Camden :: Small refactoring around how we keep track of result types. #19226
  - 2021-03-18: Keegan :: dx work with Erik to move from go-bindata to go embed. #19256 and [19276](https://github.com/sourcegraph/sourcegraph/pull/19276)
  - 2021-03-18: Camden :: Fixed alignment issue on firefox for docs anchors. #19238
  - 2021-03-19: Camden :: Generate railroad diagrams in replacement of the monstrous handwritten tables. #19289
  - 2021-03-19: Stefan :: Moved logging from `evaluateLeaf` to the top and refactored parts of it along the way. #19278
  - 2021-03-19: Stefan :: Fixed a bug in zoekt that led us to report always a shard count of 1 for every repo. #19265
  - 2021-03-19: Juliana :: Started planning for webapp redesign with the Design and Frontend Platform teams

## 2021-02-22 to 2021-03-05

### Enable mandatory linting

- **Owner(s):** Camden
- **Outcomes:**
  - Solicit opinions/buy-in on enabling mandatory linting
  - Enable minimal mandatory linting
  - Complete plan for migration towards unified linting configuration, and begin fixing lints
- **Work log:**
  - 2021-02-26: Feedback was generally positive, with some concern expressed for undue linting noise. Created a PR enabling mandatory linting (#18703) and an issue for tracking progress of unifying `.golangci.yml` and `.golangci.mandatory.yml` (#18720).
  - 2021-03-01: Merged mandatory linting
  - 2021-03-02: Enable first set of linters

### `select` polish and `contains` filter predicate MVP

- **Owner(s):** Rijnard, Camden
- **Outcomes:**
  - Polish remaining `select` work (optimization and add pings, see #18002)
  - Start implementing `contains` filter predicate (see #18584)
- **Work log:**
  - 2021-02-26: Added backend optimizations to `select`. Made progress understanding how to integrate pings--to reduce effort, we should add pings for `select` and `contains` at the same time. Discussed `contains` implementation and scaffolding. Started related refactoring to query inputs to generally help clean implementation.
  - 2021-03-04: Polished all of `select` including support for `symbol.kind` and frontend autocompletion. Started initial implementation of `contains` on the frontend/backend. Pings for `select` will be added along with `contains` implementation. Outcomes met.
  - 2021-03-05: Implemented `contains`, but the implementation was a bit dirty, so decided to spend some time refactoring before merging

### Clean up graphqlbackend resolvers

- **Owner(s):** Camden
- **Outcomes:**
  - Make all search result types independent of resolvers (tracking issue #18348)
  - Move result types out of graphqlbackend
- **Work log:**
  - Everything but commit results are moved out of graphqlbackend. Commit results are blocked on splitting out highlights, which are resolvers

### Enterprise search contexts

- **Owner(s):** Rok
- **Outcomes:**
  - Enterprise contexts RFC includes DB schema, API schema, and a clear migration path for version contexts
  - Enterprise contexts RFC undergoing review (or at least ready for review)
- **Work log:**
  - 2021-02-26: Defined the background and problem sections in the RFC. Removed the context URL parameter - now we are always using query as the source of truth for contexts.
  - 2021-03-05: Finished the RFC and is now ready for review. Quinn K. and Erik gave it a quick pre-review pass to iron out any obvious issues. Fixed the [issues](https://github.com/sourcegraph/sourcegraph/issues/18732) that were found during user testing search contexts.

### Exhaustive

- **Owner(s):** Keegan, Stefan
- **Outcomes:**
  - Zoekt end to end streaming for sourcegraph.com. #18303
  - Result limit and counts improvements (detailed breakdown, display limits, etc). #18297
  - Validate scheduler approach with a proof of concept. #18305
  - Publish exhaustive search RFC.
- **Work log:**
  - 2021-02-26: Zoekt stream search implemented. In testing phase now. Display
    limits implemented. Highlights in diff/commit search contribute to result
    count. Dynamic filters now use O(1) space to be computed. Published [RFC 288
    ](https://docs.google.com/document/d/1dk309wEXA34b-LF66SBOzcNBJ6jZbWXT_eeBL9TZ2Ro/edit#heading=h.trqab8y0kufp):
    Exhaustive Search.
  - 2021-03-05:
    - src-cli now supports streaming (PR in review, will probably merge on
      Monday). As described in RFC 288, src-cli is key for rolling out
      exhaustive search.
    - First integration test for streaming search. We had couple of regressions
      over the last weeks and the new integration tests go a long way in
      avoiding those moving forward.
    - Lots of smaller cleanups and bug-fixes: EG we remove
      `repositoriesSearches` and `indexedRepositoriesSearches`. Those fields
      were a drag on the performace but were never read.

### Misc

- **Owner(s):** Keegan, Juliana
- **Work log\***
  - ci: specify env in the pipeline once (#18690)
  - gitserver: remove log spam around setting HEAD (#18813)
  - gitserver: use fetch when cloning (#18535)
  - dev: build without custom build tags (#18776)
  - code monitoring: toggle labels fixed and improvements to a11y (#18881)
  - dev experience: wrote and sent out for review [RFC 344](https://docs.google.com/document/d/1ojZ2bmgnZ7CrUrZXJI1vpH_BI_PQp1ygNWt9VtYjDRA/edit#) for frotend development on deployed instances

### Streaming search polish

- **Owner(s):** Juliana
- **Outcomes:**
  - Streaming search is polished with no major scenario blocking bugs
  - Streaming search can be enabled on Cloud for everyone
- **Work log:**
  - 2021-02-23: Performance issues have been addressed and streaming is now at an acceptable level of performance
  - 2021-02-22: Server side errors are now handled and displayed to the user correctly
  - 2021-02-24: Streaming search is now enabled globally on Sourcegraph.com
  - 2021-02-25: Other UI polish fixes for streaming search have been addressed
  - 2021-03-05: Fixed low-hanging fruit a11y issues

## 2021-02-08 to 2021-02-19

### Implement `select` filtering

- **Owner(s):** Rijnard, Camden
- **Outcomes:**
  - Implement frontend and backend components to support `select` filtering. See overview of work in #18002 and RFC 254.
- **Work log:**
  - 2021-02-12: `select:` functionality is live on Sourcegraph.com as of Sunday 15 Feb (for some reason deploys didn't go through on Friday?. It's working--next work items to address are around `limitHit`/`show more` functionality, optimizations, and extensions for `symbols`. We still have to add metrics capturing/pings. The current issue #18002 tracks these items.
  - 2021-02-19: Updated behavioral specification for `select:`, implemented bug fixes and additional UI hovers for it. `select:` support is considered shippable now, modulo metrics tracking/optimization/docs. On the timeline we've allocated 3 reamining weeks polish this work, and have work-in-progress optimizations for `select`, associated refactoring, and metrics tracking in the pipeline. Whatever time we gain should be spent on refactoring related code (e.g., result types, query types) for upcoming filter predicate support, or we will be slowed down by the current code when we move to work on that next.

### Search contexts

- **Owner(s):** Rok, Juliana
- **Outcomes:**
  - Finish implementing search contexts UI
  - Search contexts are ready for user testing on Cloud
- **Work log:**
  - 2021-02-12: Search context dropdown is now populated with real data, search contexts can be selected (keyboard or mouse interaction), context is appended to the query when copying, and context filter is fully supported on the frontend.
  - 2021-02-19: Finished up all of the tasks needed to start user testing search contexts on Cloud (storing last selected search context in localStorage, adding context parameter to URL, search within dropdown, context is appended to query when searching).

### Streaming search/Exhaustive Search

- **Owner(s):** Juliana, Keegan, Stefan
  - Increased user confidence
  - Stream results per shard: Currently, we stream results per zoekt instance.
    To avoid aggregation and reduce the memory footprint we have to enable
    zoekt to stream back results as they are found for each shard. This will
    improve performance for streaming search and enable exhaustive search.
- **Work log:**
  - 2021-02-11: We made several improvements to increase the user's confidence
    in reported statistics
    - Align effect of `count:` filter with reported number of results.
    - For streaming, we now use 500 as a common limit for all search results.
      This makes the number of returned results more predictable. Previously
      we had a limit of 30 per search backend.
    - We don't report more results than the user asked for.
  - 2021-02-12:
    - Made progress to enable zoekt for streaming. We prototyped different
      protocols and encodings to find a good fit to move forward.
  - 2021-02-19:
    - Zoekt now has a new endpoint `/stream` which we call from Sourcegraph.
      Within Zoekt we still process a search in batch mode but stream the
      results back in chunks. We already started updating Zoekt to support
      streaming natively, however we will only finish this during the next
      itertion.
  - 2021-02-19: Numerous perf fixes have been made to the frontend to aid streaming search. Streaming search now also renders branch names or commit IDs when necessary.

## 2021-01-25 to 2021-02-05

### Search contexts

- **Owner(s):** Rok
- **Outcomes:**
  - [Issues](https://docs.google.com/document/d/1SU6AdJPa1vzQVUKc2Otj608GztsNARF1v4pnA-fTKzU/edit?usp=sharing) regarding search context namespacing are resolved.
  - The API supports search queries with a provided search context (`global` and `@username`).
- **Work log:**
  - 2021-01-29: Added support for retrieving user-added repositories. Opened PRs implementing search with a search context and listing search contexts.
  - 2021-02-05: Finished the backend part of the search contexts for Cloud. This includes context filter in the query language and listing search contexts on the API. I have also added support for the context filter on the frontend (with syntax highlighting for the context prefix). I am working on the context filter suggestions in a separate PR, which will be finished in the next iteration.
  - 2021-02-05: Search contexts UI implementation is underway: feature flag and non-functional button are checked in, while dropdown menu is in PR.

### Streaming search

- **Owner(s):** Juliana, Keegan, Stefan
  - Streaming search turned on for Sourcegraph.com.
    - Improve user experience during streaming.
    - Streaming support for filters and alerts.
    - Performance/reliability testing in webapp and backend.
- **Work log:**
  - 2021-01-29: Perf/reliability improvements (avoid batching of results, lots of PRs); UX improvements (count proposals, progress info) and initial work on factoring out search from graphqlbackend.
  - 2021-02-01: Backend plan for the week is responding to feedback from Sourcegraph org dogfooding. When not doing that, improving streaming design in preparation for Exhaustive Search work.
  - 2021-02-05: Repo and symbol search are now streaming (everything is streaming now). Major refactoring to core stream interface which greatly simplified most uses of it. Lots of cleanup in text search backend. Tweaks done to experience of exhaustive search. Will likely turn it on for Sourcegraph.com on Monday.

### Exhaustive Search

- **Owner(s):** Keegan
- **Outcomes:**
  - Defering until next iteration to fully focus on streaming.

### Structural search for monorepos

- **Owner(s):** Rijnard, Camden
- **Outcomes:**
  - Close out remaining issues, and make searcher querying Zoekt the default path for structural search.
- **Work log:**
  - 2021-01-28: Benchmarked the new path and made it the default after looking at the results. There are a couple of minor concerns we can improve, and possibly explore structural search support for unindexed repositories. Other than that, we have a head start on [RFC 254](https://docs.google.com/document/d/1_m63fsBMAtqaq3GA_aMzKUPxD3yxTy8d12lJE6qN6PU/edit#) which was published early this week.
  - 2021-02-05: We did some quality control and worked through bugs (e.g., language selection and avoid searching all indexed repos instead of just `HEAD` if unspecified). Used some remaining time to support unindexed structural sesarch. All outcomes met.

### Refactor search query parsing

- **Owner(s):** Juliana
- **Outcomes:**
  - Search query parsing for query, pattern type, case sensitivity and version context are done in a single place instead of multiple times in differet components
- **Work log:**
  - 2021-01-28: Refactoring has been completed

### Code monitoring

- **Owner(s):** Juliana
- **Outcomes:**
  - Address high priority polish issues to get Code Monitoring out to customers
- **Work log:**
  - 2021-01-29: All high priority issues and some medium priority issues have been addressed ([tracking issue](https://github.com/sourcegraph/sourcegraph/issues/17414))

## 2021-01-11 to 2021-01-22

### Streaming search

- **Owner(s):** Juliana, Keegan, Stefan
- **Outcomes:**
  - Streaming search UI errors/skipped items are rendered with updated design
  - Streaming text search.
  - Non streaming backends fallback gracefully.
- **Work log:**
  - 2021-01-13: Streaming upto the Zoekt client. We still need to make it stream per replica and streaming within the replica. Got blocked by streaming progress updates.
  - 2021-01-14: Error/skipped items UI has been updated to match design
  - 2021-01-15: Search expression support in streaming.
  - 2021-01-15: Work towards progress streaming and zoekt streaming. Both are now unblocked for next week. We have a high level plan to tackle both next week.
  - 2021-01-22: Lots of updates. Streaming progress, streaming zoekt per replica and search backend now only uses streaming. For graphqlbackend we rely on aggregating the stream. Streaming as a whole is functional. We are now fixing obvious flaws in it before turning on the feature flag.
  - 2021-01-25: UI polish work to address issues with streaming search progress

### Exhaustive Search

- **Owner(s):** Keegan
- **Outcomes:**
  - RFC published.
- **Work log:**
  - 2021-01-15: An early incomplete draft is being reviewed. Hope to publish widely next week.
  - 2021-01-22: Decided to fully focus on streaming search. Pushing out working on the RFC until we have the streaming feature flag turned on.

### Structural search for monorepos

- **Owner(s):** Rijnard, Camden
- **Outcomes:**
  - Make structural search work better for monorepos. Currently monorepos can time out for structural search purely because it takes too long to copy the data to search. The outcome focuses on architectural changes to avoid unnecessary data zipping and copying to our searcher worker (see sourcegraph/sourcegraph#14619).
- **Work log:**
  - 2021-01-15: Steady progress and almost have end-to-end code working to go through searcher. Difficult to communicate and construct the parts we need from frontend to searcher though.
  - 2021-01-22: Opened PR to enable new structural search path end-to-end behind a flag. Still working on a couple of bugs and stress testing.

### Search rules

- **Owner(s):** Rijnard
- **Outcomes:**
  - RFC published.
- **Work log:**
  - 2021-01-15: No progress at this time, too busy with **Structural search for monorepos**.
  - 2021-01-22: Lots of progress, [WIP RFC254 draft here](https://docs.google.com/document/d/1_m63fsBMAtqaq3GA_aMzKUPxD3yxTy8d12lJE6qN6PU). The thinking/design is done, but not the writing and formatting. Need one or two more days to finish this item.

### Search contexts

- **Owner(s):** Rok
- **Outcomes:**
  - Validate approach for resolving a search context to a set of repositories to search on the backend.
  - Validate implementation plan for frontend changes with Quinn Keast.
- **Work log:**
  - 2021-01-19: Started on UI tweaks for search toggle buttons and the copy button redesign
  - 2021-01-15: Researching the backend for resolving repositories and how contexts will fit into it. Researching the query language and how to add the `context:` filter. Raised an issue with Quinn regarding search context namespacing.

## 2020-12-14 to 2021-01-08

### Streaming search

- **Owner(s):** Juliana, Keegan
- **Outcomes:**
  - Streaming search UI renders errors
  - Streaming search is presented to the team in a Brain Food session
  - Progress API is combined with results and streams out.
- **Work log:**
  - 2020-12-17: Streaming search presented in Brain Food ([slides](https://docs.google.com/presentation/d/1SFnmec2NEHaxlkqutHeH4feSIwaJywxHsfpa6t2FmfI/edit?usp=sharing))
  - 2020-12-18: Streaming search now shows errors and handles completion states better.
  - 2021-01-08: Streaming search now logs client-side events

### Scrollable filters in search results

- **Owner(s):** Juliana
- **Outcomes:**
  - Dynamic filters in the filter bars above the search results should be scrollable
- **Work log:**
  - 2021-01-07: Filters are now scrollable

## 2020-11-30 to 2020-12-11

### Code monitoring

- **Owner(s):** Stefan, Juliana, Farhan
- **Outcomes:**
  - Functioning code monitoring. Users can create and edit code monitors, see the status, and receive emails.
  - Design QA feedback on the code monitoring creation and list pages is addressed.
  - (Loïc) Starting points for code monitoring are documented
- **Work log:**
  - 2020-12-04 (stefan): The backend is ready for v1 of code monitoring. I have already created a couple of code monitors on Cloud and emails are sent as expected. I removed the unsubscribe link in the email by updating a rule on Mailchimp.
  - 2020-12-04 (stefan): I made good progress this week. Locally, code monitoring works as expected including sending emails. I am currently splitting up the changes in smaller chunks to make the updates more reviewable. I don't expect to have enough time to implement a custom "unsubscribe", so we will go with Mailchimp (just like saved searches). Since Mailchimp adds the unsubscribe footer automatically, we have to make a minor adjustment to the design of the email template. I plan to spend the next week fixing minor bugs, increasing test coverage, and improving code quality.
  - 2020-12-04 (farhan - posted late): Factored out the code monitoring form, opened PR for edit functionality, added GraphQL requests for editing. Worked on a lot of small details e.g. enabling/disabling buttons, confirmation before cancelling, redirecting to list page.
  - 2020-12-14 (farhan): Merged editing and deleting functionality. Added unit tests for whole flow. Implemented two rounds of QA. Fixed bugs found around editing actions, submitting the form before all fields were complete on Safari.

### Documentation clean up and content

- **Owner(s):** Farhan
- **Outcomes:**
  - Add docs for users transitioning from OpenGrok: differences from OpenGrok, keywords and search formats available, typical searches in OG and Sourcegraph equivalents.
  - Clean up all existing search docs so each doc has single responsibility and is in the correct Tutorial/Explanation/How-to/Reference category.
- **Work log:**
  - 2020-12-04 (posted late): Checked in with CE team for requirements on the OpenGrok documentation. It turns out the [existing page](https://docs.sourcegraph.com/code_search/how-to/opengrok) was useful for a customer facing this issue, and they'll be linking to the page in their onboarding process. May need to improve discoverability down the line, but for now we're waiting on additional requests they might have. Updated outdated content on that page.
  - 2020-12-14: no update here, was focused on code monitoring.

### Structural search for monorepos

- **Owner(s):** Rijnard
- **Outcomes:**
  - Make structural search work better for monorepos. Currently monorepos can time out for structural search purely because it takes too long to copy the data to search. The outcome focuses on architectural changes to avoid unnecessary data zipping and copying to our searcher worker.
- **Work log:**
  - 2020-12-04: I have a work-in-progress branch that pulls out the current frontend code and rearchitects things to run through searcher. Next step is to make searcher talk directly to Zoekt. This week I also took some time to familiarize myself with our dashboard and spent some time making informative search tables/graphs. I also spent time finalizing toggle behavior for search expressions and refactoring frontend query code.
  - 2020-12-11: I haven't completed the work to have searcher talk to Zoekt yet, this needs more time and I couldn't hit this objective in one iteration. I estimate I need another week or two to get it done. Other work this week was refactoring frontend and backend code to polish search expressions for commit search, and query highlighting/hovers for release.

### Streaming search

- **Owner(s):** Juliana, Keegan
- **Outcomes:**
  - Streaming search is available behind a feature flag, which we enable by default for the Sourcegraph org.
  - The backend progress API is functional.
  - We have repo-level streaming for search types other than `diff`.
  - The streaming search UI is closer to feature parity with the GraphQL search UI.
- **Work log:**
  - 2020-12-02: (keegan) backend progress API implemented, but only sends at the end of stream.
  - 2020-12-03: (juliana) Streaming search is now enabled for Sourcegraph org users on sourcegraph.com
  - 2020-12-04: (juliana) Streaming search now shows states (loading, completed with no results, completed with some results) (#16410)
  - 2020-12-04: (juliana) Met with Rob to QA to the search progress UI design implementation. Some PRs and work items have been created out of that. (#16475, #16476)
  - 2020-12-11: (juliana) More front-end features have been completed for streaming search: alerts, saving searches, search again with skipped results, plus more UI polish fixes
  - 2020-12-11: (keegan) did some follow-up work on progress API after feedback from enabling streaming. Including samples of repos that where skipped in the messages.
  - 2020-12-11: (keegan) overall did not make much progress this iteration. Had low productivity.

## 2020-11-16 to 2020-11-27

### Streaming search

- **Owner(s):** Keegan, Juliana, Rob
- **Outcomes:**
  - The search results page can consume the streaming data directly as it comes in, without the need to convert to GraphQL types
  - Fully functioning progress API from the backend. This will allow us to have the "full" streaming experience with diff/commit search.
- **Work log:**
  - 2020-11-20: (juliana) Porting of the search UI to support streaming search is underway with good progress. Initial blank page (#15993), filters (#15997), tabs and infobar (#16038), version context warning (#16039)
  - 2020-11-20: (keegan) Spent most of the week tracking down unexpected slowness/buffering in diff search. Once I fixed it locally I created a [demo video](https://www.loom.com/share/e4f9a8f85ba74321bbf3dd3f74aafe06) of streaming diff search. Rest of the week was spent on debugging diff search performance in prod.
  - 2020-11-24: (keegan) My plan for this week is to fully focus on progress API in the backend. However, I have worked on both a [customer P1](https://github.com/sourcegraph/sourcegraph/issues/15992) issue and some [long standing tech debt](https://github.com/sourcegraph/sourcegraph/pull/16121) with Tomas. I expect to still have a PR ready of a fully functioning progress backend, but its getting a little tight.
  - 2020-11-25: (juliana) Streaming search now renders results (#16097)

### Code monitoring

- **Owner(s):** Stefan, Juliana, Farhan
- **Outcomes:**
  - Code monitor CRUD: users are able to list and edit (non-functioning) monitors
- **Work log:**
  - 2020-11-20 (stefan): milestone reached for backend implementation of code monitors: minimum set of GraphQL queries and mutations to support the POC are in place. Next step: implement "query runner" and "email sender".
  - 2020-11-23 (farhan): code monitoring listing page completed. Edit functionality is deprioritized in favor of search context prototyping, so may not be completed this iteration.
  - 2020-11-27 (stefan): finished new query runner, for now queries are queued for executing every 5 minutes. Next step: implement "email sender".
  - 2020-11-30 (farhan): did not work on code monitoring this week to prioritize search contexts prototyping.

### Scale indexed search to 500k repositories

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
  - Improved performance for simple regex queries such as "term1 term2 patternType:regexp"
- **Work log:**
  - 2020-11-27 (stefan): Our CR for upstream zoekt was accepted and we merged it into to our fork. I added related queries to search-blitz to measure improvements. Local tests just on zoekt and on medium sized repos showed that latencies reduce between 30% to 80% for relevant queries. I will look at search-blitz data next week.

### Documentation clean up and content

- **Owner(s):** Farhan
- **Outcomes:**
  - Clean up all existing search docs so each doc has single responsibility and is in the correct Tutorial/Explanation/How-to/Reference category.
  - Add docs for users transitioning from OpenGrok: differences from OpenGrok, keywords and search formats available, typical searches in OG and Sourcegraph equivalents.
- **Work log:**:
  - 2020-11-30: Gathered requirements for OpenGrok transition docs. Did not make much progress on writing those docs yet.

### Ship Search Expressions and Query Highlighting, Hovers

- **Owner(s):** Rijnard
- **Outcomes:**
  - The frontend work is in place to ship search expressions. I will be tying it together and adding docs. I will also activate query syntax highlighting and hovers for our next release, and will make progress on that this iteration.
- **Work log:** - 2020-11-20: We have stable and feature-complete regexp highlighting for all patterns/fields and preliminary structural search and hover support. I also helped with release this week, unblocking various search regression testing, and backend code cleanup. My next week will focus on completing search expression work and feature-complete smart query hovers. - 2020-11-27: I refactored frontend code to account for search expressions and handle query transformation for UI toggles correctly. Didn't get a chance to update search expression documentation, will catch up to that in a day or two's worth of work. I implemented and activated hovers for regular expressions
  🎉.

### Search context prototyping

- **Owner(s):** Farhan
- **Outcomes:**
  - Build a prototype for search contexts following Figma desigsn for @quinnkeast, and iterate as needed until Quinn is able to complete his testing.
- **Work log:**
  - 2020-11-23: Newly added goal.
  - 2020-11-30: Completed prototype for search contexts, and iterated on it together with Quinn several times. Quinn has conducted some hallway testing, and will continue to do so. We were able to identify limitations in the design, and came up with solutions for those. We also have a WIP gist outlining the process of functional prototyping and its benefits.

## 2020-11-02 to 2020-11-13

### Code monitoring

- **Owner(s):** Stefan, Juliana, Farhan
- **Outcomes:**
  - Spill over from last iteration: finish stub-implementation of code monitoring schema.
  - Initial UI for code monitor CRUD: users are able to create and list (non-functioning) monitors
- **Work log:**
  - 2020-11-04: Code Monitoring now has an (empty) feature-flagged homepage (#15355)
  - 2020-11-06: Code Monitoring code has been moved to enteprise folder as it will be an enterprise feature. (#15443, #15513)
  - 2020-11-09: (stefan) GraphQL mutations (create, delete, toggle, edit) for the monitor table are up for review.
  - 2020-11-09 (farhan): Basic code monitoring creation page is up for review.
  - 2020-11-13 (stefan): GraphQL mutations for create, delete and toggle were merged. This week I worked mostly on preparing the code for `editCodeMonitor` and replacing stubs with resolvers that return real data. Once `editCodeMonitor` is in place I expect the other mutations to be relatively straightforward.
  - 2020-11-13 (farhan): Create code monitor page is complete.

### Scale indexed search to 500k repositories

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
  - Spill over from last iteration: merge our patch to upstream zoekt.
  - RFC: for regex queries, queries such as "term1 term2" are interpreted as literal regex (alternative: implicit AND) instead of being fuzzified in the parsing layer.
- **Work log:**
  - 2020-11-09: Created RFC 264 to discuss interpretation of regex queries, which has implications for the performance of queries such as `term1 term2` (with regex toggle set to active).
  - 2020-11-09: Regarding merging perf work to zoekt upstream: Finished addressing review comments of CR. Waiting for feedback from Han-Wen.
  - 2020-11-13: I haven't work on this topic this week. The CR is still parked until Han-Wen returns from his vacation.

### Streaming search

- **Owner(s):** Keegan, Juliana, Rob
- **Outcomes:**
  - Something that makes you go yay on Sourcegraph.com
  - Non-functional (fake data) progress UI is created to match Figma designs
- **Work log:**
  - 2020-11-04: Backend streaming implementation of commit/diff search. Needs to be wired up to HTTP API layer still.
  - 2020-11-05: Progress API in webapp PoC done to unblock UI work.
  - 2020-11-06: Initial bootstrapping for streaming search progress UI is underway (#15549)
  - 2020-11-13: Streaming progress UI (with fake data) is compelte (#15668)
  - 2020-11-13: Streaming for diff/commit working. I am working through some bugs around unexpected buffering happening, but will share a demo video soon.

### Featureful frontend query parser, part 2

- **Owner(s):** Rijnard
- **Outcomes:**
  - As before, we need a proper frontend query parser for syntax highlighting, hover hints, and consistent UI state (toggle activation) of search expressions and future query syntax extension. All of that couldn't fit into the previous iteration: In this iteration I will merge the code we need to unblock shipping search expressions (first bullet in [14016](https://github.com/sourcegraph/sourcegraph/issues/14016)). Time allowing I'll add some contextual regex/structural highlighting, since I prototyped it already.
- **Work log:**
  - 2020-11-08: Finished the base parser code that unblocks the part for query-checking complex expressions in the frontend. There are still bits to refine, but it's complete enough to use for the checks we need. I spent some time adding regex/structural query syntax highlighting and hovers in a prototype branch, and will incrementally merge this work into the main branch.
  - 2020-11-15: Finished the validation check that uses scanner/parser code to drive better UI. I've drafted changes that solve the toggle issue and query mangling (see #13958. I stopped just short of putting up these PRs at the end of the week, because I discovered that our logic for transforming/parsing queries is spread out and I need to restructure this so that it isn't so tricky to follow how we manipulate queries and avoid re-scanning/re-parsing things. I also committed basic regex highlighting to internal Sourcegraph org users--so far so good.

### Quality-of-life search code improvements, continued

- **Owner(s):** Rijnard
- **Outcomes:**
  - This is a catch-all goal for improving the quality of our search code (bug fixes and refactors). One concrete goal is to fix a nasty commit search issue #13313 that I have a WIP branch fix for. There's also a structural search/archive copying deficiency I want/need to look into [#14619](https://github.com/sourcegraph/sourcegraph/issues/14619#issuecomment-720910776).
- **Work log:**
  - 2020-11-08: Will be spending time this week to resolve slow structural search/archive copying. Fixed two minor bugs in frontend parsing/hovers #15410, #15367.
  - 2020-11-15: Discussed how to go about rearchitecting code paths for structural search and settled on a direction in https://github.com/sourcegraph/sourcegraph/issues/14619#issuecomment-726653340. Unfortunately I didn't make progress with a solution I can ship yet. I decided not to tackle the commit issue because the commit code was touched heavily for streaming. I spent some time debugging a possible `repohasfile` issue for the release, but I'm not sure it's resolved yet #15178.

### Improve tracking of search onboarding on enterprise instances

- **Owner(s):** @farhan
- **Outcomes:**
  - Spillover from last iteration, PRs merged for: Weekly retention is tracked in pings #13636.
  - Spillover from last iteration, PRs merged for: Search tour usage is tracked in pings #14781.
  - Spillover from last iteration: SMTP is tracked in pings #14115.
- **Work log:**
  - 2020-11-09: PRs for search tour usage pings were merged. Updated PR for weekly retention pings after review feedback from Cloud team, still awaiting review from BizOps. RFC for SMTP pings still awaiting review from Pooja and Dan, pinged them to see whether this is still a priority.
  - 2020-11-13: PR for weekly retention is ready to be merged as of Friday Singapore time. @ebrodymoore will merge once the BigQuery schema is updated.

### Documentation clean up and content

- **Owner(s):** Farhan
- **Outcomes:**
  - Clear goals are outlined for improvements to search documentation, to be completed next iteration.
- **Work log:**
  - 2020-11-09: Planning and reading up on Divio's documentation system. Outcome has been changed to complete planning this iteration, and work on actually improving docs for next iteration.
  - 2020-11-13: No update. I was focused on code monitoring, and this was bumped to a lower priority.

## 2020-10-19 to 2020-10-30

### Featureful frontend query parser

- **Owner(s):** Rijnard
- **Outcomes:**
  - We need a proper frontend query parser for syntax highlighting, hover hints, and consistent UI state (toggle activation) of search expressions and future query syntax extensions. See [14016](https://github.com/sourcegraph/sourcegraph/issues/14016).
- **Work log:**
  - 2020-10-23: Started with this implementation. Have the basic recursive descent parsing down but didn't quite get as far as I wanted, mostly because I spent some time reading up about TypeScript, looking at other TS parser/visitor implementations, and getting pretty deep into Monaco API to understand how our parser/tree output could be used in the context of highlighting and smart editing _and_ serve the role for validating toggle state, etc. I have a good picture of how things could fit together now and will probably get this finished this week.
  - 2020-1030: I implemented the "hard part" of what we need for the scanner/parser in the frontend [#15091, #15201, #15202, #15203]. What still remains is to hook this into our current uses, and make sure we have enough test coverage like we have in the backend. The focus is on getting this out to make search expression stable, but I took some time to validate the direction by prototyping a scanner/parser for detailed highlighting and hover info for regex expressions, and excited about where this direction is going. It relates to helping issues like #14081 down the line (demo/full implementation TBD).

### Quality-of-life search code improvements

- **Owner(s):** Rijnard
- **Outcomes:**
  - We have a huge debt in parts of our search code and the state is unhealthy. I have been tracking a backlog of issues to refactor and fix re: deleting old parser code, fixing commit search issues. I will be selectively tackling [bug](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+author%3Arvantonder+label%3Ateam%2Fsearch+label%3Abug) and [refactor](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+author%3Arvantonder+label%3Ateam%2Fsearch+label%3Arefactor) issues to make things more sane.
- **Work log:**
  - 2020-10-23: Did a pretty hefty parser pass to clean up debt and make it simpler to connect frontend parser work with backend parser #15042. Small bug fixes and fixed search doc theming (not really part of this goal but work worth mentioning).
  - 2020-10-30: Discovered and fixed some issues with `not` expressions in backend search, part of a refactor [#15139, [15042](https://github.com/sourcegraph/sourcegraph/pull/15042)]. Also fixed an issue where search expressions would not give expected results because repo cache was not invalidated #15144. Implemented a [TOML highlighter](https://github.com/sourcegraph/TOML-syntax-highlighting) to help address #13937.

### Code monitoring

- **Owner(s):** Stefan, Juliana, Farhan
- **Outcomes:**
  - We have a GraphQL schema for code monitoring, with a stubbed out implementation on the backend, allowing us to decouple backend and frontend development.
  - SMTP is tracked in pings #14115.
- **Work log:**
  - 2020-10-23: Finished v1 of GraphQL schema for code monitoring (Google drive > Sourcegraph shared > Search > Code Monitor GraphQL Design). Next step: Review together with Juliana.
  - 2020-10-30: Juliana and I agreed on the first version of the GraphQL schema. I have put up a PR that covers 80% of it. It will probably take another 2 days to finish the stub mutations and the rest of the schema. The stubs will not be connected to the DB yet.
  - 2020-10-30 (@farhan): [RFC for SMTP pings](https://docs.google.com/document/d/1fp3zuhjw6gykaF2_TRWDh7ia-dAdDqrj9gxjtFmcy7I/edit#heading=h.trqab8y0kufp) is awaiting review

### Scale indexed search to 500k repositories

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
  - We have a similar performance for simple regex searches and their literal equivalents (EG `config overall`) on indexed repositories.
- **Work log:**
  - 2020-10-23: Created a patch for google/zoekt with performance improvements for searches s uch as `(field)(?-s:.)*?(bar)`. Depending on the relation between the search terms (how frequent they are and how frequently they appear on the same line) we see reduced latencies between 86% (best case) and -3.5% (worst case). This change is motivated by https://github.com/sourcegraph/sourcegraph/issues/14351.
  - 2020-10-30: I worked extensively on the patch this week. We probably still have to iron out some kinks, but I feel confident that we are converging on a good solution.

### Streaming search

- **Owner(s):** Keegan, Juliana, Rob
- **Outcomes:**
  - We have high-fidelity designs for streaming search.
  - High-fidelity designs are implemented (TODO: assess viability of this outcome when Juliana is back).
  - API: statistics for designs.
  - Backend: true streaming for text search with stats.
- **Work log:**
  - 2020-10-22: API for statistics is designed and discussed. Renamed to progress to encompess what it actually does. #14977
  - 2020-10-26: Some refactorings of graphqlbackend to make streaming possible. Namely cleaning up the interfaces between different search backends and the result aggregator.
  - 2020-10-29: Important customer work took some backend time this week. See #15148.
  - 2020-10-30: Basic integration tests have been added for streaming search, including mocking the server sent events. #15122

### Search Tour

- **Owner(s):** @farhan
- **Outcomes:**
  - Search field is no longer focused by default for users who haven't searched yet #14783.
  - Search tour is re-enabled by default for enterprise customers.
  - Search tour usage is tracked in pings #14781.
- **Work log:**
  - 2020-10-30: #14783 is fixed. PRs are open to get search tour usage in pings; awaiting review from the BizOps team, who are also working on cleaning up existing pings before merging PRs that add more data to pings. #15113, sourcegraph/analytics#63. Tour is enabled by default on enterprise.

### Improve tracking of search onboarding on enterprise instances

- **Owner(s):** @farhan
- **Outcomes:**
  - Total number of unique searchers is tracked in pings #14575.
  - Weekly retention is tracked in pings #13636.
- **Work log:**
  - 2020-10-30: #14575 was closed due to the data already existing. PRs are open to add weekly retention to pings. #15199, sourcegraph/analytics#65

## 2020-10-5 to 2020-10-16

### Enterprise homepage

- **Owner(s):** Juliana
- **Outcomes:**
  - Replace saved searches panel with a new repogroup panel on Cloud.
- **Work log:**
  - 2020-10-07: The repogroup panel has been completed and checked in. We will consider turning the feature flag on by default in Cloud next week after getting feedback from internal users.
  - 2020-10-13: The footer UI from the original designs for the home panels has been implemented.
  - 2020-10-13: Panels have now been enabled for everyone in Cloud.

### Search tour

- **Owner(s):** Juliana
- **Outcomes:**
  - Do not show the Tour to users who have already searched.
- **Work log:**
  - 2020-10-08: The tour has been modified to only show to users on their first day of using Sourcegraph, based on the same data we already use to determine when to show user other notifications ([See PR](https://github.com/sourcegraph/sourcegraph/pull/14535)).
  - 2020-10-15: We had originally enabled the search tour everywhere on 2020-10-13, but on 2020-10-15 we decided to disable it for the 3.21 release since there are still some issues regarding new user experience that came in from feedback. We plan to address these issues before turning the feature on definitely.

### Scale indexed search to 500k repositories

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
  - (done) gap in tracing is explained
  - (in progress) zoekt scaled-out by factor 2 => observe change in latency
  - (done) search-blitz runs structural search queries
  - (done) identify pieces of code that don't scale -> repoSearch -> speed-up repoSearch
- **Work log:**
  - 2020-10-07: We improved tracing and closed many of the gaps we prevously had. For example, with the new spans we found that `logSearchLatency` (which was previously untracked) was on the criticial path and took a significant amount of time #14433. Search-blitz now tracks 1 structual query from Rynards blog post. I will align with Rijnard which additional queries are useful to add. After Bejang increased the global index, the latencies for global queries increased as expected. Surprisingly, the performance did not improve after we scaled out Zoekt. Right now, the assumption is that the performance of frontend degraded offsetting the gains by the scale out. For example the increase of the global index revealed that repo search is a bottleneck. It relies on resolved repositories and generally runs after file/path search. For the global query `context.WithValue`, repo search can take up to 200ms. We evaluated different options (leverage Cgo to call out to more performant Rust regex engine, offload matching to zoekt, and concurrency). In the end we went with concurrency, because calling out to Rust comes with an additional burden for deployments, and calling out to zoekt brings complexity while just benefiting the global queries (although we might want to come back to that idea later). Concurrency seemed to be a good tradeof of performance/effort for now.

### Search expressions & blog post

- **Owner(s):** Rijnard
- **Outcomes:**
  - (1) Make search expressions available under feature flag (merge WIP PR) & (2) Raise visibility on the topic/capability of code search as lightweight analysis. Inform relevant customer contacts about these capabilities.
- **Work log:**
  - 2020-10-07: I did some prep work to get search expressions ready ([related to how queries are evaluated](https://github.com/sourcegraph/sourcegraph/pull/14461)). Added functionality where search expressions merge repo results, and added integration tests. The PR is now [up for review](https://github.com/sourcegraph/sourcegraph/pull/13907). For the blog post, I added C-style comments and a cmd+enter shortcut for the search console page. I came up with some compelling examples that address blog post feedback, and will put up the blog post for review and publish it next week.
  - 2020-10-15: Search expressions are merged in #13907. We need to do follow up work in the UI + document to advertise the new features. The blog post is ready to ship, but depends on #14816 for performant queries that was introduced by search expressions.

### Streaming search

- **Owner(s):** Keegan, Juliana
- **Outcomes:**
  - API: fully working v0 of API covering all types.
  - Backend: true streaming for text search with stats.
  - Webapp: TODO
- **Work log:**
  - 2020-10-16: API is fully functional except for statistics. The nuts and bolts of that need some input. Will be working with Loic 2020-10-20 to help define that.
  - 2020-10-09: (Keegan) Low productivity Mon-Wed, didn't feel well. Thu/Fri worked on a customer P0 related to Zoekt creating too many HTTP connections and exhausting socket limits. https://github.com/sourcegraph/customer/issues/111

## 2020-09-21 to 2020-10-02

### Scale indexed search to 500k repositories

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
  - Zoekt is called before we resolve repositories in global search. The outcome of this is a faster global search.
  - Improved tracing for indexed search.
- **Work log:**
  - 2020-10-02:
    - Added more tracing #14335, #14296, #14371
    - Insights from new spans helped us to identify redudant calls to the DB #14367
    - #14093 was merged and reduces latency of global searches: Comparing traces of the same query before and after showed that the change reduced latency by 25% (400-> 300ms). The 100ms are important because they would have scaled with the number of indexed repositories.
  - 2020-09-25: Important parts of the code path had not been instrumented with tracing. To pinpoint the performance issue, we added tracing to `newIndexSearchRequest` #13949 and the RPC layer #13951. Based on the improved tracing, we chose to focus our efforts on global queries first, IE queries without `repo:` or `file:` filters. Traces of global queries show that we spend a significant amount of time (O(#indexed repos)) on assembling, splitting, and serializing lists of repo revisions. With #14093 we resolve repositories and query zoekt concurrently (limited to global, literal content searches). We plan to measure the impact of #14093 with help of selected traces and search-blitz.

### Streaming search

- **Owner(s):** Keegan, Juliana
- **Outcomes:**
  - Make a decision on whether to integrate with existing search results components or write a new set of components to show streamed results.
  - Identify which metatada we want to display while streaming results, and define corresponding API contract.
  - Define experience for large result sets (how many results are displayed initially, "show more" versus infinite scrolling).
  - Define experience for dynamic filters.
  - We have a project board representing remaining design + implementation work for future iterations.
- **Work log:**
  - 2020-10-02: Repository search results added to streaming API. In progress work for commit. Remaining is symbols, alerts and stats (to be tackled next).
  - 2020-09-25: Exploratory work has been made to understand how the search results page currently works and how the streaming search POC has been built. [Notes](https://docs.google.com/document/d/1ApXqBr9tasltKPvV9KHp64VzPekH5vCKOcAWz6Am6Ng/edit#heading=h.q8u68shhkq3i)
  - 2020-10-02: There is now an initial design ([Figma link](https://www.figma.com/file/IyiXZIbPHK447NCXov0AvK/13928-Streaming-search?node-id=25%3A451)]. More functionality has been added to the existing streaming search POC: repository searcha and dynamic filters.

### Enterprise homepage

- **Owner(s):** Juliana, Farhan
- **Outcomes:**
  - The feedback resulting from [design QA](https://www.figma.com/file/sPRyyv3nt5h0284nqEuAXE/%2312192-Sourcegraph-server-page-v1?node-id=2274%3A21539) has been implemented.
  - The feature has been QA'd internally.
  - If all feedback resulting from internal QA can be integrated during the iteration, the feature flag is turned on by default so that server users see it in 3.21.
  - Metrics collection will be reviewed
  - Survey is sent to internal users to gauge the response
- **Work log:**
  - 2020-09-25: Feedback from design QA has been implemented and merged. Telemetry logging has been added. This feature is now also available for Sourcegraph.com behind a feature flag.
  - 2020-10-02: All outcomes were met, and the enterprise homepage has been turned on by default.

### Search tour

- **Owner(s):** Farhan
- **Outcomes:**
  - The [feedback from the first round of user testing](https://github.com/sourcegraph/sourcegraph/issues/13944) has been implemented.
  - The design team is able to run subsequent rounds of user testing for feedback.
  - If user testing is completed, and feedback is addressed, the tour is turned on for all Sourcegraph.com new users by default.
  - Metrics logging is reviewed and approved by @ebrodymoore and @rrhyne.
- **Work log:**
  - 2020-09-25: Fixes for the first round of user testing have been implemented in a [PR](https://github.com/sourcegraph/sourcegraph/pulls/attfarhan), approved by @limitedmage and awaiting review from @rrhyne and @lguychard. Metrics have been reviewed and approved by @ebrodymoore and rrhyne.
  - 2020-10-02: All outcomes were met. Design has and continues to run more user testing, and there have not been additional changes requested.

### Search expressions

- **Owner(s):** Rijnard
- **Outcomes:**
  - Make search expressions available under feature flag (merge WIP PR)
- **Work log:**
  - 2020-09-25: Not working on this this week. Next week.
  - 2020-10-02: Didn't get a chance to do work on it this week.

### Blog post: Turning code search into on-demand lightweight analysis

- **Owner(s):** Rijnard
- **Outcomes:**
  - Raise visibility on the topic/capability of code search as lightweight analysis. Inform relevant customer contacts about these capabilities.
- **Work log:**
  - 2020-09-25: Want to get the multiline search query page onto Sourcegraph.com for the blog post, so I worked on that a bit. It doesn't have to be perfect, but it can't be a mess either, so I've been working on polishing up the sourcegraph/sourcegraph#14147. Debugged/fixed a major regression affecting repogroups, a setback for progress on this blog post. Also got sidetracked by an important customer issue about large files not being indexed, and debugged/reproduced the issue to help next steps. Will continue with this work item next week, should be ok to get things done in time.
  - 2020-10-02: Finished the main blog post content. Got some valuable feedback and I'm going to do another pass to address that next week before publishing. The multiline editor page does need a bit more work (see [PR description](https://github.com/sourcegraph/about/pull/1618).

### Code Monitoring

- **Owner(s):** Juliana
- **Outcomes:**
  - Work with product and design to understand the scope of the work. Based on this, start work on a dev implementation plan.
- **Work log:**
  - 2020-09-25: Initial meeting took place between Pooja, Quinn Keast and Juliana to understand the scope of the work. [Meeting notes](https://docs.google.com/document/d/1EG42dM1old49uPXpGAqL7b9k95bWpM0Zcu0JM5gXtOQ/edit?ts=5f6dac2c)
  - 2020-10-02: More offline discussions have been completed to clarify the scope of the work. An initial [dev implementation plan](https://docs.google.com/spreadsheets/d/1IP9XS3JAd-ulxi2WTqqDFs1KimtyHsb1HbBMQxk6abw/edit#gid=0) has been drafted.
