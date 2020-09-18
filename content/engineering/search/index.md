# Search team

We own the end-to-end Sourcegraph search experience.

## Vision

Sourcegraph search is:

- **Fast:** Performance of showing results is fast and I can get to what I’m looking for quickly.
- **Scalable:** Sourcegraph scales to any private codebase and the size of the open-source universe. Users can trust that the result set is drawn from the entire set of code they care about, and if the result isn't found, it doesn't exist.
- **Expressive:** It is possible to construct a search query to find exactly the results I’m looking for. The tools, syntax, filters, are provided to construct the queries I want to write. We strive for a search experience where the answer to “Can I do ‘X’ with Sourcegraph?” will always be yes.
- **Easy to use:** Users can quickly understand how to find what they are looking for and what options are available for searching. The search syntax is clear and intuitive.
- **Shareable:** Sourcegraph searches are easy to share, and provide team and organization wide value. This in turn creates network effects that compound the value Sourcegraph provides with scale.

## Iterations

The search team plans its work in **2-week iterations**.

The goals and updates for current and past iterations can be found in the [iteration log](./iteration_log.md).

The planned work items for the current iteration are tracked in the [Search iterations GitHub project](https://github.com/orgs/sourcegraph/projects/93).

### Planning an iteration

Iterations start **every other Monday**.

**On the last Friday of an iteration:**

- Teammates add the themes they're planning to work on, and the desired outcomes, to the [iteration log](./iteration_log.md).
- Teammates add relevant GitHub issues or cards to the **Planned** column of the [Search iterations GitHub project](https://github.com/orgs/sourcegraph/projects/93).
- Teammates add any topics they would like to discuss during the retrospective to the [Search team retrospectives](https://docs.google.com/document/d/1YyPhH-OVrFddLhlerlfrqmnqe633I09wp9D9mSI4Za8/edit) document.

**On the first Monday of an iteration:**

- The team holds its [retrospective](https://docs.google.com/document/d/1YyPhH-OVrFddLhlerlfrqmnqe633I09wp9D9mSI4Za8/edit) for the previous iteration.
- The team reviews the iteration plan during the team sync, and kicks off the iteration.

**Work log updates:**

- Teammates should update the [work log](./iteration_log.md) for the themes they're working on.
- PR approvals are not required for work log updates.
- Updates should be in prose and communicate progress made and pain points.
- Updates should happen at least twice (in the middle and at the end of the iteration), but may be more frequent if desired.
    - The mid-iteration update should contain a forecast for the next week, and whether the remaining planned work is on track to be completed on time.
    - The end-of-iteration update should mention whether the planned outcomes were reached or not, and if not, why.


## Goals

_Updated 2020-09-11_

### Scalable

- **Scale indexed search to 500k repositories**
   - **Problem:** We have customers who need Sourcegraph to scale to 500k repositories. Some parts of Sourcegraph don't work well at that scale.
   - **Outcome:** Sourcegraph can search 500k repositories in less than 300ms. This is on par with [grep.app](https://grep.app).
   - **Plan:** Incrementally add repositories to Sourcegraph.com until searches get slow or start breaking. Fix those things. Then continue adding repositories.
   - **Owners:** Keegan/Stefan
   - **Status:** Sourcegraph.com currently has about 100k repositories.
   - **Estimated completion**: 3.23 (End of December 2020)

### Fast

- **Unblock improving user perceived performance**
  - **Problem:** Our current search infrastructure relies on on-shot requests with aggressive timeouts, but it is hard to tune those timeouts for large codebases. If we make the timeouts too small, then search may not return results for needle-in-the-haystack queries (because the search timed out). If we make the timeouts too large, then search becomes slower across the board and users spend time waiting for more results when we could have returned useful results to them sooner. Detecting and handling these timeouts across multiple service boundaries is also error prone and has led to bugs.
  - **Outcome:**
      - Unblock the ability to add responsive and fast-loading search results.
      - Return results faster for large result sets, e.g. indexed repositories in very large codebases.
  - **Plan:** Streaming search
  - **Owner:** Keegan
  - **Status:** [In progress](perf.md)
  - **Estimated completion:** 3.21

### Expressive

- **Extend Search Query Language**
  - **Problem:** It is imperative that users can find and filter the code, files, repositories, and commits they care about in extremely large codebases.
  - **Outcomes:** Users can express relations on code, files, repositories, and commits in search queries to more effectively filter the data they need. Sourcegraph is the exclusive industrial-strength search solution that provides these capabilities.
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

### Easy to use

- **Improve search experience**
  - **Problem:**
      - New users who are trying Sourcegraph for the first time have trouble learning the syntax and breadth of Sourcegraph features.
          - **Plan:** Search onboarding tour
          - **Owner:** Farhan
          - **Status:** In progress
          - **Estimated completion**: 3.20
      - It is hard for users to quickly get to code they care about.
          - **Plan:** Enterprise homepage
          - **Owner:** Farhan, Juliana
          - **Status:** In progress
         - **Estimated completion**: 3.21
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
  - **Estimated start:** TODO
  - **Estimated effort:** TODO

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
