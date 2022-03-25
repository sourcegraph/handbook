# Search core team

The search core team owns all parts of Sourcegraph that map an interpreted search query to a set of results:

- Indexed and unindexed search (Zoekt & Searcher)
- Diff/commit search
- Result ranking

To learn more about our goals, see the [Search Core strategy](../../../../../strategy-goals/strategy/code-graph/search/core.md) page.

## Team members

  {{generator:product_team.search_core}}

## Contact

- #search channel or @search-core on Slack.
- [`team/search-core` on GitHub](https://github.com/orgs/sourcegraph/teams/search-core)

## Support rotation

The Search Core team has a customer support rotation: each week, one team member will be responsible for fielding questions and requests from Customer Engineering and Customer Support.

The engineer on support rotation can be contacted using the Slack alias `@search-core-support`.

The support rotation can be viewed on OpsGenie: [search core schedule](https://sourcegraph.app.opsgenie.com/teams/dashboard/1cc52380-1d71-420e-9c80-2ccb161c648c/main).

Should an engineer be unable to fulfill support responsibilities for any reason (for example, due to upcoming time off), they should swap with a teammate.

We track support issues from customers on this [board](https://github.com/orgs/sourcegraph/projects/166)

## Planning

- The search core team plans its work continuously (we don't do sprints/iterations).
- Supporting existing customers is critical to our success and can be prioritized ahead of roadmap work.
- Our [OKR and status updates are tracked using GitHub](https://github.com/orgs/sourcegraph/projects/214/views/11) under the Code Graph tab.

## Team syncs, plans and updates:

- The teams holds syncs twice weekly (Mon, Thu).
- Before team syncs, teammates add their status and plans to the [team sync meeting notes](https://docs.google.com/document/d/1cTdGC4jBK7aEnb9ChzCLYHVGBpRRMNYGdUUPYVPIWHo/edit#).
- The team discusses the updates live during the sync.
- Updates should be in prose and communicate progress made and pain points.

## Backlog

We use a [backlog project board](https://github.com/orgs/sourcegraph/projects/204/views/3?layout=board) to capture work items we've identified.

## Retrospective

- We have a retrospective every two weeks, on Monday. This is a time for us to look back and discuss progress and consider changes to process.
- Our [action plans and learnings are capture in a document](https://docs.google.com/document/d/1qCSVyu0IU9_w0mpHic3mFS2yqwI1CzZwM9HUp2ySrU4/edit) and we use a Jamboard to capture everyone's thoughts. The theme for the Jamboard rotates.

## Our Repositories

- [Zoekt](https://github.com/sourcegraph/zoekt) the Zoekt search engine we support and use.
- [Sourcegraph](https://github.com/sourcegraph/sourcegraph) our product
- [Scratchpad](https://github.com/sourcegraph/search-scratch) A place to capture research, thoughts, and ideas.

## On Boarding

Public resources are available here:

- [Learning Go](https://go.dev)
- [Architecture diagram](https://docs.sourcegraph.com/dev/background-information/architecture)
- [Sourcegraph Documentation](https://docs.sourcegraph.com/dev)
- [Super helpful intro video](https://www.youtube.com/watch?v=VXaUXwMLzjg)
- Zoekt Bedtime Reading:
  - https://github.com/sourcegraph/zoekt/blob/master/doc/design.md
  - https://swtch.com/~rsc/regexp/regexp4.html
  - https://www.youtube.com/watch?v=qOKDQT7-PJk
  - https://www.youtube.com/watch?v=_-KTAvgJYdI
  - https://about.sourcegraph.com/blog/tackling-the-long-tail-of-tiny-repos-with-shard-merging/
  - https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/
  - https://swtch.com/~rsc/regexp/regexp4.html
  - https://github.blog/2021-12-15-a-brief-history-of-code-search-at-github/

Our private resources are available [in the Google doc](https://docs.google.com/document/d/10SNzhuA5dmRJ5Na3PMnuShlPmtGGVIz3P2GA4RtfaGo/edit)

## Misc

- [iteration log (deprecated)](./iteration_log.md)
