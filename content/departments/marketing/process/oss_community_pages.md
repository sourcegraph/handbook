# Adding a community landing page

Sourcegraph hosts community landing pages to help open source community members discover, onboard, and search their code. Good examples include the [Kubernetes](https://sourcegraph.com/kubernetes) and [Stanford](https://sourcegraph.com/stanford) landing pages. The pages are based on search contexts (a named collection of repositories and revisions).

## How to create a community landing page on Sourcegraph Cloud

First, create the search context:

- Make sure you are a site-admin on Cloud
- Identify the requirements for the community search contexts page. What repos should be included in the search context? What examples would be worth highlighting?
- Create a new search context: [Create page](https://sourcegraph.com/contexts/new)
  - Select the "Global owner" option from the Owner dropdown (this will make the context available to all users on Cloud)
  - Enter the context name (e.g. `stanford`, `cncf`)
  - Enter a description (Markdown is supported)
  - Select the "Public" visibility
  - Enter the repositories as a JSON config (see [Stanford edit page](https://sourcegraph.com/contexts/stanford/edit) for example configuration)
  - Click "Test configuration" to check if the configuration is in the correct format and that all of the entered repositories exist
  - Finally, you can create the search context

Second, create the corresponding community search context page in the main Sourcegraph repository. This is a temporary measure and will be automated in the future.
Steps:

- Copy an existing page config (e.g. [Stanford](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@675e5129031b75998ffa2823782f5e354390edfb/-/blob/client/web/src/communitySearchContexts/Stanford.tsx)) and adjust the necessary data
  - **Important**: The `spec` property should match the search context name you created in the first step
- Add the corresponding route [to the client router](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@675e5129031b75998ffa2823782f5e354390edfb/-/blob/client/web/src/communitySearchContexts/routes.tsx?L31)
- Add the same route [to the backend router as well](https://sourcegraph.com/github.com/sourcegraph/sourcegraph@675e5129031b75998ffa2823782f5e354390edfb/-/blob/cmd/frontend/internal/app/ui/router.go?L173)
- Tag the search-product team to review & approve the changes (or if you need help adding the page)
