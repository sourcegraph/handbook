# Iteration log

This document contains the goals and work log for the search team's [2-week iterations](./index.md#iterations).

## YYYY-MM-DD to YYYY-MM-DD

### $GOAL_OR_THEME

- **Owner(s):** $OWNER
- **Outcomes:**
    - $DESIRED_OUTCOME
- **Work log:**
    - YYYY-MM-DD: $UPDATE

## 2020-09-21 to 2020-10-02

### Scale indexed search to 500k repositories

- **Owner(s):** Stefan, Keegan
- **Outcomes:**
    - Zoekt is called before we resolve repositories in global search. The outcome of this is a faster global search.
    - Improved tracing for indexed search.
- **Work log:**
    - YYYY-MM-DD: $UPDATE

### Streaming search

- **Owner(s):** Keegan, Juliana
- **Outcomes:**
    - Make a decision on whether to integrate with existing search results components or write a new set of components to show streamed results.
    - Identify which metatada we want to display while streaming results, and define corresponding API contract.
    - Define experience for large result sets (how many results are displayed initially, "show more" versus infinite scrolling).
    - Define experience for dynamic filters.
    - We have a project board representing remaining design + implementation work for future iterations.
- **Work log:**
    - YYYY-MM-DD: $UPDATE

### Enterprise homepage

- **Owner(s):** Juliana, Farhan
- **Outcomes:**
    - The feedback resulting from [design QA](https://www.figma.com/file/sPRyyv3nt5h0284nqEuAXE/%2312192-Sourcegraph-server-page-v1?node-id=2274%3A21539) has been implemented.
    - The feature has been QA'd internally.
    - If all feedback resulting from internal QA can be integrated during the iteration, the feature flag is turned on by default so that server users see it in 3.21.
    - Metrics collection will be reviewed
    - Survey is sent to internal users to gauge the response
- **Work log:**
    - 2020-09-25: Feedback from design QA has been implemented and merged. This feature is now also available for Sourcegraph.com behind a feature flag.

### Search tour

- **Owner(s):** Farhan
- **Outcomes:**
    - The [feedback from the first round of user testing](https://github.com/sourcegraph/sourcegraph/issues/13944) has been implemented.
    - The design team is able to run subsequent rounds of user testing for feedback.
    - If user testing is completed, and feedback is addressed, the tour is turned on for all Sourcegraph.com new users by default.
    - Metrics logging is reviewed and approved by @ebrodymoore and @rrhyne.
- **Work log:**
    - 2020-09-25: Fixes for the first round of user testing have been implemented in a [PR](https://github.com/sourcegraph/sourcegraph/pulls/attfarhan), approved by @limitedmage and awaiting review from @rrhyne and @lguychard. Metrics have been reviewed and approved by @ebrodymoore and rrhyne.

### Search expressions

- **Owner(s):** Rijnard
- **Outcomes:**
    - Make search expressions available under feature flag (merge WIP PR) 
- **Work log:**
    - YYYY-MM-DD: $UPDATE

### Blog post: Turning code search into on-demand lightweight analysis

- **Owner(s):** Rijnard
- **Outcomes:**
    - Raise visibility on the topic/capability of code search as lightweight analysis. Inform relevant customer contacts about these capabilities.
- **Work log:**
    - YYYY-MM-DD: $UPDATE
