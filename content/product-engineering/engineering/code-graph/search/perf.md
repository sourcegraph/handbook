# Search Scaling to 500k Repos

This document is a living document which summarises the current state of this project as well as containing a work log.

## Current Status

Last Updated [2020-09-17 Fri 16:30]

- `search-blitz` - We have continuous performance testing against production.
- More detailed tracing. We now know the time taken to assign repos between
  indexed and not indexed as well as time taken to marshal requests to
  Zoekt. Assigning repos is the most significant.
- Next: Call zoekt earlier. This will reduce time taken in assigning repos to
  indexed as well as marshalling requests.

## Work Log

### [2020-09-17 Fri 16:00]

Implemented tracing on zoektIndexedRepos and on our RPC layer. We ended up
implementing what we think is a nice pattern
(#13951).

Underlined in red is the instrumentation we added:

![image](https://user-images.githubusercontent.com/187831/93611008-08890c80-f9ce-11ea-8613-a8802725acd8.png)

Breaking down the above example which searches over 100k repos:

- `resolveRepositories` fetches the list of repos to search from the database and resolves them against branch queries. In this example Sourcegraph.com copies an in memory cache of the list, and then creates the RepositoryRevision list. This takes 40ms.
- `newIndexedSearchRequest` is the most significant chunk of
  time. It took 115ms. This decides which repos can go to zoekt vs
  searcher.
- `zoekt.Search` indicates the RPC layer takes 40ms. We added logging to confirm 21ms is spent marshalling. Noticing when zoekt actually starts searching, there is another 20ms to unmarshal. This large cost is due to sending a list of all repos to search.
- `shardedSearcher` is the actual search logic on zoekt. It only took 31ms (but is sharded out over 12 nodes).

The approach we are starting on Monday is for global searches. We will call
`zoekt.Search` without the large list and before we call
`resolveRepositories`. Then we filter the response against
`resolveRepositories`. This should remove most of the work in
`newIndexedSearchRequest` as well as all the work in marshalling/unmarshalling a request in
the RPC layer.

In the example above this effectively shaves off 150ms of a 350ms search request. This doesn't sound like a lot. However, this number scales linearly with the number of repositories. Additionally we have seen it fluctuate a lot.

### [2020-09-17 Thu 13:00]

Focus:

- Global search. IE no repo or rev filters and default version context.
- Literal. Not regexes. Not structural.

We are calling out what we are ignoring to focus our work when we are debating as well as communicate what we don't intend on directly improving. However, a rising tide raises all ships.

Why just global search? It provides validations for our idea without requiring changes to zoekt. Additionally non-global search is often very fast.

Why just literal? Focus. We can optimize regular expression search in Zoekt, or restructure how structural search works. But those just improve those specific use cases. While focussing on literal allows us to target the common slowness in all cases.

#### Next week

- [ ] trace zoektIndexedRepos
- [ ] call zoekt earlier. See below for what this means.

#### Progress updates

- search-blitz is out
- weird spikes in p99 graphs. Ends up being how histograms are created with
  low traffic in prometheus.
- drilling down on a specific query, we have wildly varying search times. We
  want to add Jaeger tracing to all search-blitz requests to help debug this.

#### Observations

Slow parts in searching a large amount of repos:

- fetching the list of repos from the DB. Sourcegraph.com optimization, that
  doesn't apply to other large scale instances.
- creating resolvedRevisions + zoektIndexedRepos (deciding what is indexed or
  not).
- lots of time spent between zoekt finding results, and zoekt.Search reporting
  it is done receiving them. Even with small file match count.

##### graphql.resolveRepositories

We intend to keep this on the critical path. Sourcegraph.com has an
optimization for it. We need to make it fast for other large instances.

##### zoektIndexedRepos

We want to remove this from the critical path. Instead we want to trigger
zoekt early on, and filter the results we get back from zoekt (based on the
output of =graphql.resolveRepositories=). It will still be on the critical path for searcher, but will have a much more efficient implementation since it does much less work.

Complication: version contexts can inject non-HEAD branches. Simplification:
version contexts search over a small set of repos, so can use old logic. More
generally we will have issues around searching large numbers of repos and
wanting to target branches other than HEAD. So we need to design our solution
to keep our RepoBranches logic.

Our first attempt at this will be special casing global search queries. Before
doing any search work (including `graphql.resolveRepositories`), we will send
the query to Zoekt without RepoBranches filters but a `branch:HEAD`
filter. Global search queries are queries without repo filters and not in a
version context.

#### Brainstorming

- treat public vs private repos differently
- instrumentation in the RPC layer
- don't send zoekt the repos. do auth filtering on response.

## [2020-09-09 Wed 11:30]

The queries below sound good. We will investigate the data and create groups for each kind of query. Then we will regularly run the queries and record response times. Those response times will guide our work and show improvements.

Tentative plan for Stefan and Keegan:

- Keegan and Stefan will work very closely together.
- Keegan finishes up Streaming work. Stefan may also help.
- Stefan will create a service which measures search performance for our target queries (prometheus + raw data of performance persisted).
- We will investigate our search data to create target queries we will measure soon.
- We will use this document as a living document + log of our work on this project. It will both communicate high level goals/progress as well as contain details over time. This is an experiment.

Next:

- Infrastructure/tools which allow us to easily experiment with zoekt and measure performance (a canary like system which also receives production traffic). We want this as early as possible since it will be so useful to experiments we try (there are lots of ideas we could tackle).

## [2020-09-09 Wed 09:24]

First thing to accomplish is establishing a baseline of performance we want to monitor and improve. I think picking a small number of queries which we regularly run against sourcegraph.com and record the time it takes. We want to measure things that are important, here is a list of ideas to seed the discussion.

- The sort of queries generated by code intel (type:symbol on a repo). Currently this is by far our most common query, and deserves some measurement and investigation. My gut tells me there are quick wins in our graphql layer. Possibly some more fundemental changes for how symbols works in Zoekt.
- The sort of queries our users generally do:
  - We should probably analyse a days worth of searches to try and understand this. Below are some guesses.
  - Global literal search with 50k results. A user trying out sourcegraph and just typing something in.
  - Global literal search with ~1k results. Somewhat representative of a search where the user has a goal in mind (ie somewhat specific like an error code).
  - Global literal search with <5 results. Needle in haystack search.
- The sort of queries structural search generates. IE regex literals broken up with \`.\*\` between them. We may want to add a goal around structural search perf rather. eg pick a query done by the new homepage and try make that fast (and scale). That should inform zoekt work as well as how structural search interacts with zoekt. (imagine if strutural search was integrated into zoekt's matcher? Or if structural search directly spoke to zoekt and asked zoekt to return file contents in results. So structural search doesn't fetch archives)

Some links to discussions around zoekt performance:

- zoekt: ideas to improve performance and memory usage #10445
- Reduce memory usage of zoekt-webserver [google/zoekt#86](https://github.com/google/zoekt/issues/86)
- index: Use roaring bitmaps for content posting lists sourcegraph/zoekt#10
- [Indexing all OSS Code · search · Sourcegraph](https://github.com/orgs/sourcegraph/teams/search/discussions/3)
- [Ideas for longer term code search infrastructure projects · search · Sourcegraph](https://github.com/orgs/sourcegraph/teams/search/discussions/1)
- [3.17 search backend planning · search · Sourcegraph](https://github.com/orgs/sourcegraph/teams/search/discussions/2)
- [The first notes on search being a product in Sourcegraph · Cloud · Sourcegraph](https://github.com/orgs/sourcegraph/teams/cloud/discussions/2)
- sourcegraph.com search performance regularly poor #9359
- searching for rare strings with count:x qualifier in large installation (xxx k repos) times out #11395
- RFC 30: Zoekt Horizontal Scaling [RFC 30](https://docs.google.com/document/d/18w8T_KzYxQye8wg1g01QpMOX4_ERTtbOxMBRYaOEkmk)
