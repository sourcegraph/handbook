# Iteration log

This document contains the goals and work log for the search core team's [2-week iterations](./core.md#iterations).

## YYYY-MM-DD to YYYY-MM-DD

### $GOAL_OR_THEME

- **Owner(s):** $OWNER
- **Outcomes:**
    - $DESIRED_OUTCOME
- **Work log:**
    - YYYY-MM-DD: $UPDATE

## 2021-04-05 to 2021-04-16

### Search builtins, complete contains filter predicate

- **Owner(s):** Rijnard, Camden
- **Outcomes:**
    - Complete contains filter predicate work items (See [#18584](https://github.com/sourcegraph/sourcegraph/pull/18584))
    - Make progress on refactoring query processing (See outline in RFC 254)
    - Make additions to [RFC 353](https://docs.google.com/document/d/1h3WCJEcTeOXwK0DeH8N5QEtPaNta85ddGP4R-2rMdrs/edit#) for search predicate builtins
- **Work log:**
    - 2021-04-09: Added predicate syntax highlighting [#19894](https://github.com/sourcegraph/sourcegraph/pull/19894), [#19900](https://github.com/sourcegraph/sourcegraph/pull/19900). Updated RFC 353 with syntax extension and motivation for search builtins. Merged [major restructure](https://github.com/sourcegraph/sourcegraph/commit/a2f7bc9772e24781efc399d79e94f8d0734c85f3) to query processing covering debt going back years.

### Ranking

- **Owner(s):** Ryan
- **Outcomes:**
    - TODO
- **Work log:**
    - TODO

### Exhaustive Search

- **Owner(s):** Keegan, Stefan
- **Outcomes:**
    - Ready for external use.
- **Work log:**
    - 2021-04-09: Descoped to remove result count work. Zoekt scheduler landed and tested. `count:all` landed. Next week we will do polish work, testing and documentation for exhaustive search.

### Customer Support

- **Rotation:**
  - 2021-04-12: Keegan
- **Work log:**
  - 2021-04-06: Fixed major regression in 3.26.1 where partial result sets for large repos are returned. Release a new patch release. [#19733](https://github.com/sourcegraph/sourcegraph/issues/19733)
