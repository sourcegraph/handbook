# Adding a community landing page

Sourcegraph hosts community landing pages to help open source community members discover, onboard, and search their code. Good examples include the [kubernetes](https://sourcegraph.com/kubernetes) and [stanford](https://sourcegraph.com/stanford) landing pages.


 For now, those pages are based on repogroups (a named group of repositories defined by a site admin on Sourcegraph.com).

## How to create a community landing page on Sourcegraph Cloud

* Identify the requirements for the repogroup page. What repos should be included in the repogroup? What examples would be worth highlighting?
* Create the repogroup by opening a PR adding a repogroup definition to `search.repositoryGroups` [here](https://github.com/sourcegraph/deploy-sourcegraph-dot-com/blob/release/base/frontend/sourcegraph-frontend.ConfigMap.yaml#L47). Tag search-product for review.
* Create the page ([example](https://github.com/sourcegraph/sourcegraph/commit/576318e4dff2a3ecc8002ebea2b490b8ee99fc31)) and open a PR. Tag search-product for review.
* Run a few tests to check that repositories are all indexed and the repo group returns expected results.
