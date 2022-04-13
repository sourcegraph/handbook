# Adding a community landing page

Sourcegraph hosts community landing pages to help open source community members discover, onboard, and search their code. Good examples include the [Kubernetes](https://sourcegraph.com/kubernetes), [Stanford](https://sourcegraph.com/stanford) and [Julia](https://sourcegraph.com/julia) landing pages. The pages are based on search contexts (a named collection of repositories and revisions).

## How to create a community landing page on Sourcegraph Cloud

First, create the search context:

- Make sure you are a site-admin on Cloud
- Identify the requirements for the community search contexts page. What repos should be included in the search context? What examples would be worth highlighting?
- Create a new search context: [Create page](https://sourcegraph.com/contexts/new)
  - Select the "Global owner" option from the Owner dropdown (this will make the context available to all users on Cloud)
  - Enter the context name (e.g. `stanford`, `cncf`, `julia`)
  - Enter a description (Markdown is supported)
  - Select the "Public" visibility
  - Enter the repositories as a JSON config (see [Julia edit page](https://sourcegraph.com/contexts/julia/edit) for example configuration)
  - Click "Test configuration" to check if the configuration is in the correct format and that all of the entered repositories exist
  - Finally, you can create the search context

Second, create the corresponding community search context page in the main Sourcegraph repository. This is a temporary measure and will be automated in the future.
Steps:

- Copy an existing page config (e.g. [Julia](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/client/web/src/communitySearchContexts/Julia.tsx)) and adjust the necessary data
  - **Important**: The `spec` property should match the search context name you created in the first step
- Add the corresponding route [to the client router](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/client/web/src/communitySearchContexts/routes.tsx?L29)
- Add the same route [to the backend router as well](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/cmd/frontend/internal/app/ui/router.go?L178)
- For confirmation and recap, check out [this PR](https://github.com/sourcegraph/sourcegraph/pull/32932) for adding the Julia community search context.
- Tag the search-product team to review & approve the changes (or if you need help adding the page)
