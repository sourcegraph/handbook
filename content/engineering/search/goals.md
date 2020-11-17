# Search goals and priorities

This page documents the current goals and priorities of the [Search team](index.md). See also our [completed goals](goals_completed.md).

## Goals

### Support large scale organizations

Timeline: ~6 months (May 2021)

#### Definition of large scale

Organizations with:

- A Git directory size between 100 GB and 50 TB
- Total lines of code (LOC) between 1 billion and 5 billion

See [looker](https://sourcegraph.looker.com/looks/436) for current customer data.

#### [WIP] Problem

Large customers expect search to be fast at their scale. Customers expect to be able to search over their codebase intuitively, and want their first search result quickly. For larger organizations, customers care about getting all search results for important changes in their codebase. Supporting search at this scale also helps work towards supporting the Cloud growth efforts.

#### [WIP] Outcome

TODO: What does this look like? Describe this in prose using descriptions from the team: [Search team 6 month vision](https://docs.google.com/document/d/1iiYCKK5D2PTVzzFmTF1OHl5SNLVkYfbOfyrCcoYM_24/edit#heading=h.bi6mdia4vr7w).

- Make it clear to the passing naive hacker that they couldn’t write something which replaces us in a few weekends / just use grep.
- Our search experience is consistent, reliable, and predictable: IE Sourcegraph search does what it says and says what it does.
- We understand more about each individual user and tailor their results so that results are ranked to promote the languages and repositories they are most likely to care about.
- Search queries and their results become a frictionless starting point for creating all the other business objects our users will start to value… monitors, insights, campaigns and /next/.
- Search is optimized for the cloud, where hundreds of a company’s private repos will live alongside hundreds of thousands of public open source repos.
- We have a learnable, comprehensive code search query language; performant and reliable search across all result types we offer; a polished product that handles failure cases properly; and a personalized experience for users that surfaces their most relevant code.

#### [WIP] Milestones

- All basic search types (indexed, regular expression, structural) are fast at this scale.
    - What is fast?
        - Time to first result: Time until user sees their first result on the client
        - Total search latency: Time until results are sent to the client
    - Need baselines for different targets for different search types
- Users trust Sourcegraph to return all their search results.
- Users can find important changes in their codebase with search
- They can find what they’re looking for in the search UI.
- Users take less time to drill down to search results.
- Users find diff and commit search performant.
- Sharing useful searches within the organization is easy.
- Users can bookmark searches.
- We’ve learned which semantic search features customers find most useful.

## Roadmap

1. ✅ [Enterprise homepage](#1-enterprise-homepage)
1. ✅ [Search tour](#2-search-tour)
1. 🔄 [Search expressions](#3-search-expressions)
1. 🔄 [Scale indexed text search to 500k repositories](#4-scale-indexed-text-search-to-500k-repositories)
1. 🔄 [Streaming search](#5-streaming-search)
1. [Code monitoring (private code monitors, no sharing, emails + webhooks)](#6-code-monitoring-version-1)
1. [Performance at scale](#7-performance-at-scale)
follow-up to “scale indexed text search to 500k repositories”, focus and scope TBD
1. [Consolidate repogroups + search scopes](#8-consolidate-repogroups-search-scopes)
as a user, I can create a scope of code I want to search across as a list of repositories 
1. [Better version contexts 1/2](#9-better-version-contexts-12)
as a user, I can create a scope of code I want to search across as a list of repositories + branches
1. [Search language rules engine](#10-search-language-rules-engine)
1. [Saved searches without monitoring](#11-saved-searches-without-monitoring)
1. [Search results redesign](#12-search-results-redesign)
1. [Diff/commit search performance](#13-diffcommit-search-performance)
1. [Search input redesign](#14-search-input-redesign)
1. [Structural search performance](#15-structural-search-performance)
1. [Better version contexts 2/2](#16-better-version-contexts-22) 
as a user, I can create a scope of code I want to search across as a list of repositories + branches that should be indexed
1. [Code monitoring version 2](#17-code-monitoring-version-2)
1. [Semantic search: prototype validation](#18-semantic-search-prototype-validation)
1. [External search result providers](#19-external-search-result-providers)
1. [Semantic search: implementation](#20-semantic-search-implementation)

See [search roadmap prioritization](https://docs.google.com/document/d/1sUoaF8otA25NMapVcM5yHfP82kFie0NUd3_kL5Rg2Ns/edit) for more details on individual items.

## Roadmap details

### 3. Search expressions

- **Owner:** Rijnard
- **Status:** In progress

### 4. Scale indexed text search to 500k repositories

- **Plan:** Incrementally add repositories to Sourcegraph.com until searches get slow or start breaking. Fix those things. Then continue adding repositories.
- **Owners:** Keegan/Stefan
- **Status:** [In progress](perf.md)
- **Estimated completion**: 3.23 (End of December 2020)

### 5. Streaming search

- **Plan:** Streaming search
- **Owners:** Keegan, Juliana
- **Status:** In progress
- **Estimated completion:**
  - ~~3.21~~ 2020-09-23 update: We revised this estimate after discussing needed work on the design & frontend side.
  - 3.22

### 6. Code monitoring version 1

- Code monitoring sends users notifications for new search results in channels outside of Sourcegraph.
- Improve email notification support and expand the types of notification channels available.
- **Plan**
  - Personal code monitors (no organization level monitors in v1)
  - Email and Webhooks Support
- **Owner:** Juliana, Stefan
- **Status:** Not started
- **Estimated start:** 2020-11-02
- **Estimated effort:** 4 weeks
  
### 7. Performance at scale

Follow-up to “scale indexed text search to 500k repositories”, focus and scope TBD

### 8. Consolidate repogroups + search scopes

As a user, I can create a scope of code I want to search across as a list of repositories

- Consolidate the overlapping features for this experience - repogroups and search scope pages.
- Scoping your search to multiple repositories is intuitive and easy ([issue](https://github.com/sourcegraph/sourcegraph/issues/10621))

### 9. Better version contexts 1/2

As a user, I can create a scope of code I want to search across as a list of repositories + branches

- Creating version context scopes manually is time consuming. Improve this user experience ([issue](https://github.com/sourcegraph/sourcegraph/issues/11569))
- ToDo: consolidate user requests for a better search experience with version contexts set

### 10. Search language rules engine

- **Owner:** Rijnard
- **Status:** In progress
- **Plan**
  - Implement a query language extension to express relations (i.e., rules) on code, files, repositories, and commits. This replaces awkward one-off filters like `repohasfile`, `repohascommitafter` that do not generalize.
  - Prototype semantic search functionality that combines text search and LSIF data
  - Implement quality-of-life features for search: syntax highlighting, multiline queries, improve structural search performance
- **Owner:** Rijnard/Stefan
- **Status:** Not started
- **Estimated start:** 3.21
- **Estimated effort:** 4 months
  
### 11. Saved searches without monitoring

- Save or bookmark a search query you want to run again.
- Save a "composable query" or a query that can added on to the existing search query entered (i.e., improve [search scopes](https://docs.sourcegraph.com/code_search/how-to/scopes)).
  
### 12. Search results redesign

- Search Tabs
- Search results with sidebar
- Design refresh
- and more. scope TBD
  
### 13. Diff/commit search performance

- Diff/commit search performance works beyond the 50 repository limit ([issue](https://github.com/sourcegraph/sourcegraph/issues/6826)).
- Support security use cases which require searching over code history, specifically commits and diffs.
  
### 14. Search input redesign

- Reduce business in the search bar
- Search Expressions are supported
- and more. scope TBD

### 15. Structural search performance

- Structural search is a good experience for larger-scale code bases and cloud users.
- Structural search supports security use cases that require returning exhaustive search results, i.e., every result from the entire set of code they care about.

### 16. Better version contexts 2/2

As a user, I can create a scope of code I want to search across as a list of repositories + branches that should be indexed

- Improve the speed for unindexed code (e.g. diffs, commits) in the version context scopes they want to search over.

### 17. Code monitoring version 2

- Code monitoring sends users notifications for new search results in channels outside of Sourcegraph.
- Plan below should be updated based on learnings from user testing code monitoring version 1.
- **Plan**
  - Organization level code monitors

### 18. Semantic search: prototype validation

- Referencing precise code intelligence (e.g. usages, definition) in search
- **Plan**
  - Build a prototype to validate the idea
  
### 19. External search result providers

- Ability to search over data from issue trackers, internal tools, etc.
- The first set of providers is likely Sourcegraph [extensions](https://sourcegraph.com/extensions)
  
### 20. Semantic search: implementation

- Referencing precise code intelligence (e.g. usages, definition) in search
