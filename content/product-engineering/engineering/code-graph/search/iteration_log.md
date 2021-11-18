# Search core iteration log (deprecated)

This document contains the goals and work log for the search core team's 2-week iterations. **This is deprecated**: see up-to-date processes and planning artifacts on the [team page](./core.md#iterations)

## YYYY-MM-DD to YYYY-MM-DD

### $GOAL_OR_THEME

- **Owner(s):** $OWNER
- **Outcomes:**
  - $DESIRED_OUTCOME
- **Work log:**
  - YYYY-MM-DD: $UPDATE

## 2021-04-03 to 2021-05-14

### Out of Office

- Keegan :: 4th - 7th (4 days).

### Research

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
  - Evaluate Solr and livegrep
- **Work log:**
  - 2021-05-07: Found a promising setup with Solr. Content is not stored in the index, but instead repos stay stored on disk. Search retrieves tree-hashes of candidate documents, local searcher loads documents and runs regexp concurrently. Pros: smaller index, faster lookup, less network traffic. First results are promising. Will continue on Monday with more experiments.
  - 2021-05-10: No updates from Keegan due to out of office. Keegan is on support, so instead will focus on other work (planning, misc tasks) which doesn't require deep focus. Intends to have a draft plan, which is our main deliverable from the research phase.

### Misc

- 2021-05-07 (Stefan): Support was very quiet this week.
  - Followed up on an old ticket sourcegraph/customer#291: I wrote a small bash script to find a potential bad repo (Waiting for reply)
  - Apart from that I handled a request regarding confusion around '+' for filter chips (waiting for input from UX)#20559
- 2021-05-07 (Stefan): Moved filter chips fror `archived:yes` and `fork:yes` from the repo carousel to the dynamic filter carousel #20655
- 2021-05-10 (Keegan): Fixed bug in how we convert `repo:` regex filters into database queries. #20389

## 2021-04-19 to 2021-04-30

### Scaling

- **Owner(s):** Stefan
- **Outcomes:**
  - Validate Solr as possible search backend.
- **Work log:**
  - 2021-04-23: Built a (CLI) prototype for code search based on a Solr backend. We could validate that it is feasable to support regexp search. The next question is to find out how Solr performs under realistic conditions and to compare the performance against zoekt.

## 2021-04-05 to 2021-04-16

### Ranking

- **Owner(s):** Ryan
- **Outcomes:**
  - Search results are ordered by a global importance metric.
- **Work log:**
  - 2021-04-09: RFC 359 released & reviewed
  - Implement Github popularity ranking for open source search.
    - 2021-04-09: modified repoupdater and zoekt indexservers to compute the popularity of each repo and store it as part of each shard’s metadata.

### Exhaustive Search

- **Owner(s):** Keegan, Stefan
- **Outcomes:**
  - Ready for external use.
- **Work log:**
  - 2021-04-09: Descoped to remove result count work. Zoekt scheduler landed and tested. `count:all` landed. Next week we will do polish work, testing and documentation for exhaustive search.
  - 2021-04-16: Lots of testing and polish work. Documentation also shipped. I regard this as ready for external use. May need some time to respond to internal testing next week.

### Customer Support

- **Rotation:**
  - 2021-04-12: Stefan
- **Work log:**
  - 2021-04-06: Fixed major regression in 3.26.1 where partial result sets for large repos are returned. Release a new patch release. #19733
