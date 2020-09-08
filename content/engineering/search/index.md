# Search team

We own the end-to-end Sourcegraph search experience.

## Vision

Sourcegraph search is:

- **Fast:** Performance of showing results is fast and I can get to what I’m looking for quickly.
- **Scalable:** Sourcegraph scales to any private codebase and the size of the open-source universe. Users can trust that the result set is drawn from the entire set of code they care about, and if the result isn't found, it doesn't exist.
- **Expressive:** It is possible to construct a search query to find exactly the results I’m looking for. The tools, syntax, filters, are provided to construct the queries I want to write. We strive for a search experience where the answer to “Can I do ‘X’ with Sourcegraph?” will always be yes.
- **Easy to use:** Users can quickly understand how to find what they are looking for and what options are available for searching. The search syntax is clear and intuitive.
- **Shareable:** Sourcegraph searches are easy to share, and provide team and organization wide value. This in turn creates network effects that compound the value Sourcegraph provides with scale.

## Goals

_Updated 2020-09-05_

## [WIP] Medium term (3-6 months)

### Scale indexed search to 500k repositories
   - **Problem:** We have customers who need Sourcegraph to scale to 500k repositories. Some parts of Sourcegraph don't work well at that scale.
   - **Outcome:** Sourcegraph can search 500k repositories in less than 300ms. This is on par with [grep.app](https://grep.app).
   - **Plan:** Incrementally add repositories to Sourcegraph.com until searches get slow or start breaking. Fix those things. Then continue adding repositories.
   - **Owners:** TBD
   - **Status:** Sourcegraph.com currently has about 100k repositories.

## Short term (1-3 months)

Our current focus is documented in the [tracking issue for the current milestone](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Atracking+label%3Ateam%2Fsearch).

### Fast

- **Unblock improving user perceived performance**
  - **Problem:** Our current search infrastructure relies on on-shot requests with aggressive timeouts, but it is hard to tune those timeouts for large codebases. If we make the timeouts too small, then search may not return results for needle-in-the-haystack queries (because the search timed out). If we make the timeouts too large, then search becomes slower across the board and users spend time waiting for more results when we could have returned useful results to them sooner. Detecting and handling these timeouts across multiple service boundaries is also error prone and has led to bugs.
  - **Outcome:** 
      - Unblock the ability to add responsive and fast-loading search results. 
      - Return results faster for large result sets, e.g. indexed repositories in very large codebases.
  - **Plan:** Streaming search
  - **Owner:** Keegan
  - **Status:** In progress

### Expressive

- **Search Expressions (AND/OR/NOT)** ([term explanation](https://github.com/sourcegraph/sourcegraph/issues/13126), [term RFC](https://docs.google.com/document/d/1SHky6nodPs1w_zRXz24jB2nq5LbMCJl1u7hcLTGHDL8/edit#))
  - **Problem:** We have customers who want to migrate from OpenGrok and other search tools, and they want to be able to do searches that are available in those tools.
  - **Outcomes:** OpenGrok users eagerly migrate to Sourcegraph, and can run complex searches on Sourcegraph.
  - **Owner:** Rijnard
  - **Status:** In progress
- **Improve syntax for existing filters like `repohasfile`**
  - **Problem:** Creating a custom filter name for every permutation of search use does not scale (existing filter examples: `repohasfile`, `hascommitafter`).
  - **Outcomes:** We have an expressive syntax that scales and effectively leverages existing filters to achieve searches that previously would have required a custom/new filter.
  - **Owner:** Rijnard/Stefan
  - **Status:** Not started
- **Revision search**
  - **Problem:** Users want to search across branches with the same ease as searching across repositories, and are currently unable to do so.
  - **Owner:** Stefan
  - **Status:** In progress

### Easy to use

- **Improve search experience**
  - **Problem:**
      - New users who are trying Sourcegraph for the first time have trouble learning the syntax and breadth of Sourcegraph features.
          - **Plan:** Search onboarding tour
          - **Owner:** Farhan
          - **Status:** In progress
      - It is hard for users to quickly get to code they care about.
          - **Plan:** Enterprise homepage
          - **Owner:** Farhan, Juliana
          - **Status:** In progress
    - **Outcomes:**
      - New users introduced to Sourcegraph are able to quickly run searches that show them the value of Sourcegraph.
      - Users can run searches over code they care about more quickly.
      - Sourcegraph surfaces code and searches users care about.

### Shareable

- **Code monitoring** ([RFC 227](https://docs.google.com/document/d/1_R5DgpUkxyZilsJ9vBQm5cvRPT2udc3tZIPg2q3cnZU/edit))
  - **Problem:** Users want to be notified about important things going on in their code.
  - **Outcome:** Notifications create a shared understanding and raise awareness of what’s going on in the code.
  - **Plan**
      - Improved diff search performance
      - Webhooks on search results
          - Slack integration
          - Zapier integration
          - Email
  - **Owner:** TBD
  - **Status:** Not started

[WIP longer term goals](https://docs.google.com/document/d/1ibKiSTSxrRiY_3f3Rx3kGzLgTMO5Uz2XzTsdEZuh4UU/edit)

## Contact

- #search channel or @searchers on Slack.
- [@sourcegraph/search](https://github.com/orgs/sourcegraph/teams/search) team or [team/search label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fsearch+) on GitHub.

## Members

- [Pooja Jain](../../../company/team/index.md#) ([Product Manager](../../product/roles/product_manager.md)) is focused on search, [Christina Forney](../../../company/team/index.md#christina-forney-she-her) is supporting.
- [Loïc Guychard](../../../company/team/index.md#loïc-guychard) ([Engineering Manager](../roles.md#engineering-manager))
  - [Farhan Attamimi](../../../company/team/index.md#farhan-attamimi)
  - [Rijnard van Tonder](../../../company/team/index.md#rijnard-van-tonder)
  - [Stefan Hengl](../../../company/team/index.md#stefan-hengl-he-him)
  - [Juliana Peña](../../../company/team/index.md#juliana-peña-she-her)

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo%3A%5Egithub.com%2Fsourcegraph%2Fsourcegraph%24+file%3Amonitoring%2F.*+%7B%3A%5B_%5D%2C+Owner%3A+ObservableOwnerSearch%2C+%3A%5B_%5D%7D+OR+%28%3A%5B_%5D%2C+ObservableOwnerSearch%29+count%3A1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/f482ef3e-f5dc-4bef-b7c4-307e0ad30d6a)

## Growth plan

_Updated 2020-07-22_

We would like to grow this team to ~6-8 engineers and we expect the right split of skills to be roughly 50%/50% between [frontend](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-frontend.md) and [backend](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-backend.md). This growth is contingent upon having a dedicated engineering manager for this team.
