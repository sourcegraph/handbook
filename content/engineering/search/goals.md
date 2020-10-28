# Goals

_Updated 2020-09-11_

## Scalable

- **Scale indexed search to 500k repositories**
   - **Problem:** We have customers who need Sourcegraph to scale to 500k repositories. Some parts of Sourcegraph don't work well at that scale.
   - **Outcome:** Sourcegraph can search 500k repositories in less than 300ms. This is on par with [grep.app](https://grep.app).
   - **Planned work:** Scaling indexed text search to 500k repositories

## Fast

- **Unblock improving user perceived performance**
  - **Problem:** Our current search infrastructure relies on on-shot requests with aggressive timeouts, but it is hard to tune those timeouts for large codebases. If we make the timeouts too small, then search may not return results for needle-in-the-haystack queries (because the search timed out). If we make the timeouts too large, then search becomes slower across the board and users spend time waiting for more results when we could have returned useful results to them sooner. Detecting and handling these timeouts across multiple service boundaries is also error prone and has led to bugs.
  - **Outcome:**
      - Unblock the ability to add responsive and fast-loading search results.
      - Return results faster for large result sets, e.g. indexed repositories in very large codebases.
  - **In progress work:** Streaming search

## Expressive

- **Extend Search Query Language**
  - **Problem:** It is imperative that users can find and filter the code, files, repositories, and commits they care about in extremely large codebases.
  - **Outcomes:** Users can express relations on code, files, repositories, and commits in search queries to more effectively filter the data they need. Sourcegraph is the exclusive industrial-strength search solution that provides these capabilities.
  - **Planned work:** Search language rules engine

## Easy to use

- **Improve search experience**
  - **Problem:**
      - New users who are trying Sourcegraph for the first time have trouble learning the syntax and breadth of Sourcegraph features.
          - **In progress work:** Search onboarding tour
      - It is hard for users to quickly get to code they care about.
          - **In progress work:** Enterprise homepage
  - **Outcomes:**
     - New users introduced to Sourcegraph are able to quickly run searches that show them the value of Sourcegraph.
     - Users can run searches over code they care about more quickly.
     - Sourcegraph surfaces code and searches users care about.

## Shareable

- **Code monitoring** ([RFC 227](https://docs.google.com/document/d/1_R5DgpUkxyZilsJ9vBQm5cvRPT2udc3tZIPg2q3cnZU/edit))
  - **Problem:** Users want to be notified about important things going on in their code.
  - **Outcome:** Notifications create a shared understanding and raise awareness of what’s going on in the code.
  - **Planned work:** Code monitoring version 1
