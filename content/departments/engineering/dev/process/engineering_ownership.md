# Engineering Ownership

The following table documents the ownership of our product and tech stack.

If you see an area that is missing, figure who the right owner is via GoLinks (go/whodoinotify) and add it to the appropriate team. If you can't figure out who the right owner is, post in #eng-leads. It's up to all of us to keep this list up to date, and teams should be sure to add to it as their ownership areas change or grow.

### User journeys

- View lists of batch changes globally, by organization, or by individual
- Configure credentials for publishing changesets
- Create, edit, and execute a batch spec
- View active batch spec execution
- Preview results of executing a batch spec
- Preview a changeset diff from an executed batch diff
- Set changesets to publish from the preview of a batch spec
- Apply a batch spec
- View the status, burndown chart, and previously executed specs of an open batch change
- Perform a bulk operation on changeset for an open batch change
- Close a batch change\* As an admin, configure and view webhooks for a code host connection, add a global access token to use with batch changes, view a list of all batch specs that have been executed.

### Repositories

- sourcegraph/batch-change-examples
- sourcegraph/src-cli

## [Cloud](../../../cloud/index.md) (Managed Instances)

### General

- Production support and on-call of single-tenant managed instances
- "Continuous delivery" and deployment tooling

### Container images

- [sourcegraph/codeinsights-db](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/codeinsights-db)

## [Graph](../../teams/graph/index.md)

### General

- Code intelligence API
- Model for dependency relationships across projects, repositories, and languages
- Infrastructure to precise index code, and update and query it
- Syntax highlighter
- Blob storage
- Executors

### User journeys

- Fuzzy file search through a repository
- Navigate through directory tree in a repository
- Search symbols for a repository
- Go to definition from symbol
- Find references and implentations for a symbol
- Inspect and modify LSIF/SCIP uploads for a repository or instance
- Inspect auto-indexing jobs for a repository or index
- Edit auto-indexing policies or congfiguration for a repository or instance.

### Repositories

- lsif/lsif.github.io
- sourcegraph-codeintel-showcase
- sourcegraph/codeintelutils
- sourcegraph/code-intel-extensions
- sourcegrap/codeintellify
- sourcegraph/lsif-go
- sourcegraph/lsif-node
- sourcegraph/lsif-java
- sourcegraph/lsif-clang
- sourcegraph/lsif-test

### Container images

- [sourcegraph/codeintel-db](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/codeintel-db)
- [sourcegraph/minio](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/minio)
- [sourcegraph/precise-code-intel-worker](https://github.com/sourcegraph/sourcegraph/tree/main/enterprise/cmd/precise-code-intel-worker)
- [sourcegraph/symbols](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/symbols)
- [sourcegraph/syntax-highlighter](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/syntax-highlighter)

### General

- Product-oriented features that generate inbound traffic and lead to qualified trials
-

### Tooling

- Netlify

### Repositories

- sourcegraph/about (incl. blog)
- sourcegraph/sourcegraph#readme.md
- sourcegraph/learn
- sourcegraph/docsite

## [Delivery](../../teams/release/index.md)

### General

- Deployment methods and configuration
- Customer deployments and docs
- Go Live Support
- Resource estimator
- Health status tooling
- One-click export
- Product education and documentation around delivery
- Multi-version upgrades

### Container images

- [sourcegraph/alpine-3.14](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/alpine-3.14)
- [sourcegraph/cadvisor](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/cadvisor)
- [sourcegraph/frontend](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/frontend)
- [sourcegraph/migrator](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/migrator)
- [sourcegraph/postgres-12-alpine](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/postgres-12-alpine)
- [sourcegraph/postgres_exporter](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/postgres_exporter)
- [sourcegraph/redis-cache](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/redis-cache)
- [sourcegraph/redis-store](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/redis-store)
- [sourcegraph/redis_exporter](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/redis_exporter)
- [sourcegraph/server](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/server)
- [sourcegraph/worker](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/worker)

## [Developer Infrastructure](../../teams/devinfra/index.md)

### General

- [Continuous integration tooling, support, pipelines, infrastructure, and playbook](../tools/infrastructure/ci/index.md)
- Bazel Support
- Error types, logging, alerts, and monitoring for backend services
- Backend testing standards, libraries, scale-testing, and infrastructure
- Packaging infrastructure
- SOC2 compliance around the software development lifecycle, testing, and CI
- GCP cost savings
- Production support and on-call of DotCom environment
- Observability tooling for DotCom environment
- Dogfood/Scale testing and other test environments
- Code host QA instances
- DNS

### Repositories

- sourcegraph/asdf-cache-buildkite-plugin
- sourcegraph/aspect-cli-plugin-buildkite
- sourcegraph/cache-buildkite-plugin
- sourcegraph/clabot-config
- sourcegraph/deploy-sourcegraph-cloud
- sourcegraph/deploy-sourcegraph-scaletesting
- sourcegraph/dev-private
- sourcegraph/infrastructure
- sourcegraph/log
- sourcegraph/repoplicant
- sourcegraph/sg
- sourcegraph/step-slack-notify-buildkite-plugin
- sourcegraph/stylelint-config

### Tooling

- [sg](https://docs.sourcegraph.com/dev/background-information/sg)
- [Contributor Licence Agreement (CLA) bot](https://github.com/sourcegraph/clabot-config)
- [Monitoring generator](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/monitoring)
- GitHub and GitHub Applications
- Buildkite
- Sentry.io
- Geekbot
- Bazel
- HoneyComb
- CLA Bot

### Container images

- [sourcegraph/sg](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/sg)
- [sourcegraph/grafana](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/grafana)
- [sourcegraph/jaeger-agent](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/jaeger-agent)
- [sourcegraph/jaeger-all-in-one](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/jaeger-all-in-one)
- [sourcegraph/prometheus](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/prometheus)
- [infrastructure/buildkite-agent-bazel](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/buildkite-agent-bazel)
- [infrastructure/buildkite-agent-metrics](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/buildkite-agent-metrics)
- [infrastructure/buildkite-agent-stateless](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/buildkite-agent-stateless)
- [infrastructure/buildkite-autoscaler](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/buildkite-autoscaler)
- [infrastructure/buildkite-job-dispatcher](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/buildkite-job-dispatcher)
- [infrastructure/sgping](https://github.com/sourcegraph/infrastructure/tree/main/docker-images/sgping)

### General

- Client-side error monitoring
- Frontend testing standards, libraries, and infrastructure
- Frontend coding standards (Typescript, HTML, CSS)
- Cross-cutting frontend metrics
- Wildcard Component Library
- WCAG compliance (Accessibility)

### User journeys

- Global navigation bar
- User profile menu and dropdown
- Global footer
- Feedback and NPS widgets
- Global keyboard shortcuts
- Color theme
- Code view header selectors and file path
- Repositories page tree, commits, branches, tags, and compare tabs and pages
- Core navigation of the user settings page and product research page
- Core navigation of site admin page
- Commit diff view
- Non-code file view
- Code panel file history view

### Tooling

- Gitstart
- TPGi
- Chromatic
- Storybook
- Webpack

## [Source](../../teams/source/index.md)

### General

- Code host connections (GitHub, GitLab, BitBucket, Perforce, CVS, Gerrit)
- Code replication into Sourcegraph\* Code storage within Sourcegraph
- CVS importer
- E2E Permissions (RBAC for features and Repo Permissions)
- Repository permission syncing
- Permission caching
- Explicit permissions API
- Identity and access management
- Sign-in/Sign-up UI
- Administration experience and teams management
- Subscription management
- Pricing and packaging
- Billing, invoicing, and payments
- Usage reporting and entitlement enforcement
- Licensing models
- Support and maintenance around authentication

### User journeys

- Add new codehost connection
- Add repositories
- Sync public repositories
- Sync all or individual repositories
- Sign-up through email, GitHub, GitLab
- Sign-in through email, GitHub, GitLab
- Global configuration notifications and repo syncing notifications
- User profile
- User emails
- User privacy
- Organization settings
- Organization members
- Organization invitations

## Container images

- [sourcegraph/github-proxy](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/github-proxy)
- [sourcegraph/repo-updater](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/repo-updater)
- [sourcegraph/gitserver](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/gitserver)

## [Search Core](../../teams/search-platform/index.md)

### General

- Indexed and unindexed search
- Result ranking
- Open source indexing

### Tooling

- Zoekt

### Repositories

- sourcegraph/zoekt
- sourcegraph/search-scratch

## Container images

- [sourcegraph/indexed-searcher](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/indexed-searcher)
- [sourcegraph/search-indexer](https://github.com/sourcegraph/sourcegraph/tree/main/docker-images/search-indexer)
- [sourcegraph/searcher](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/searcher)

## [Code Search](../../teams/code-search/index.md)

### General

- Search UX
- Batch Changes
- Code Insights
- Code Monitors
- Code Exploration
- Admin UX
- [src-cli](https://github.com/sourcegraph/src-cli)
- Browser Extensions
- IDE extensions
- Executors
- Notebooks

### User journeys

#### Search

- Search using the search box
- View recent search activity, community search activity, and saved searches
- View progress of an executed search, results, and tips for no results
- Modify search queries in the sidebar
- Manage search context
- Add, edit, and delete saved searches
- Create, view details, filter, edit, disable, and copy code monitors
- Send email and Slack notifications from a code monitor
- Create, search, view, edit, update permissions, delete, copy, export, favorite, run, and manage blocks for notebooks
- Add searches and files to the notepad and edit or delete added items
- Create a notebook from notepad items.

#### Batch Changes

- View lists of batch changes globally, by organization, or by individual
- Configure credentials for publishing changesets
- Create, edit, and execute a batch spec
- View active batch spec execution
- Preview results of executing a batch spec
- Preview a changeset diff from an executed batch diff
- Set changesets to publish from the preview of a batch spec
- Apply a batch spec
- View the status, burndown chart, and previously executed specs of an open batch change
- Perform a bulk operation on changeset for an open batch change
- Close a batch change\* As an admin, configure and view webhooks for a code host connection, add a global access token to use with batch changes, view a list of all batch specs that have been executed.

#### Code Insights

- Discover code insights
- Create insights through dashboard or search result
- Add insight to a dashboard
- Create and edit dashboards
- Drill down insights
- Edit, share, and delete insights
- View insights
- Filter insights by context or repo regex
- Limited access mode/licensing gating features for code insights license tag
- code insights graphql API to create/read/edit/delete insights and dashboards
- File page hover tooltips

## [Security](../../../security/index.md)

### General

- Security infrastructure, tooling, vulnerability reports, incident response, and external communications
- Compliance
- 3rd party security vendor relationships and risk management
- Customer risk management

### Tooling

- Cloudflare
- HackerOne

## Individual Contributors

- [Thorsten Ball](../../../../team/index.md#thorsten-ball): Dependency search

## Owners files

Owners files work exactly like the CODENOTIFY files that we use currently, and can also help you find the owner of a certain bit of code:

- An OWNERS file can appear in any directory.
- Owners files are recursive, so an OWNERS file in a directory also applies to all subdirectories.
- The effective owners of a given file / directory are determined by the union of the owners of all parent directories.

OWNERS files and CODENOTIFY files use the same syntax, and notifications for both are implemented by the [Codenotify](https://github.com/sourcegraph/codenotify) tool. Owners files have some additional guidelines:

- It is preferred to list a team (e.g., @sourcegraph/frontend-platform) rather than individuals.
- If there is an individual with expertise in a given part of the code, who is not on the owning team (e.g., Thorsten Ball with sg), that person should be listed in OWNERS.

For questions about our use of owners files, please reach out on #discuss-dev-experience.
