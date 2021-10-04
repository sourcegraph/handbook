# Security Onboarding **🧑‍💻**

## Setup 

- Set up your [local development environment](https://github.com/sourcegraph/sourcegraph/blob/main/doc/dev/getting-started/index.md).
  - If you encounter any issues, ask for help in #dev-chat and then update the documentation to reflect the resolution (so the next engineer that we hire doesn’t run into the same problem).
- **Setup Github and **[Configure your GitHub notifications](https://about.sourcegraph.com/handbook/engineering/github-notifications):
  - Because we are an all-remote company and favor asynchronous communication, it is important to configure your notifications correctly so that you receive and read notifications that are important (e.g. someone makes a comment on one of your PRs, someone adds you as a reviewer to a PR) without being overwhelmed by notifications that don’t involve you.
- [Add Sourcegraph as a browser search engine](https://docs.sourcegraph.com/integration/browser_search_engine).
  - To search our private code, log in to our [internal dogfood instance](https://about.sourcegraph.com/handbook/engineering/deployments/instances#k8s-sgdev-org) (<code>[k8s.sgdev.org](https://k8s.sgdev.org/)</code>) and add another entry: <code>[https://k8s.sgdev.org/search?q=%s](https://k8s.sgdev.org/search?q=%s)</code>.
- Request access to
  - GCP
  - Buildkite
  - Sourcegraph Github repo
  - Cloudflare
- Setup SG tool per [https://github.com/sourcegraph/sourcegraph/blob/main/dev/sg/README.md](https://github.com/sourcegraph/sourcegraph/blob/main/dev/sg/README.md)
- [Setup the google cloud CLI tool](https://cloud.google.com/functions/docs/quickstart) and authenticate.
  - That is needed for terraform and kubectl.
- Install and Setup sourcegraph terraform
  - [https://github.com/sourcegraph/infrastructure#first-time-using-terraform](https://github.com/sourcegraph/infrastructure#first-time-using-terraform)
- [Connecting to dogfood with kubectl](https://about.sourcegraph.com/handbook/engineering/deployments/debugging/tutorial#gain-access-to-the-cluster).
  - For prod and other clusters it’s just a matter of adding the other kubeconfigs
- Get accustomed to Buildkite
  - Understanding adding security steps to pipeline
- Download and setup Burpsuite community edition on your laptop
- Valuable docs to read:
  - https://docs.sourcegraph.com
  - Sourcegraph demo video

## Acceptance Criteria

- You are able to run Sourcegraph code locally with dev-private
- You are able to run tf plan on the sourcegraph/infrastructure repository
- You are able to kubectl into our clusters
- Complete hands on tasks assigned to you as a starter task
- Capture traffic via Burpsuite for analysis
