# Product Features & Maturity

## Search

[Code Graph Strategy](/company/strategy/code_graph) | [Search Strategy](/company/strategy/code_graph/search)

- Limitations: 400k is biggest customer scale, but 1m repositories is a conservative estimate of what we can support

### Literal Search

[Documentation](https://docs.sourcegraph.com/code_search/reference/queries)

- Maturity: Generally Available
- Available in: free,enterprise

### Regular Expression Search

[Documentation](https://docs.sourcegraph.com/code_search/reference/queries)

- Maturity: Generally Available
- Available in: free,enterprise

### Structural Search

[Documentation](https://docs.sourcegraph.com/code_search/reference/queries)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Works for up to 1m repos depending on the query, but performance is unpredictable for certain queries at even a handful (~200) repositories. There doesn't seem to be anything consistent about the problem queries.

### Diff/Commit Search

[Documentation](https://docs.sourcegraph.com/code_search/reference/queries)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: WIP to remove limit; 50 repositories is the current max

### Code Monitoring

[Documentation](https://docs.sourcegraph.com/code_monitoring)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Limited by diff/commit search scale, limit to 50 repositories. No shared code monitors, only individual.

### Code Monitoring E-mail Notifications

[Documentation](https://docs.sourcegraph.com/code_monitoring)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Recipients limited to the owning user. Can't email to other members of organization/instance.

### Code Monitoring Webhooks

- Maturity: Not Implemented

### Saved Searches

[Documentation](https://docs.sourcegraph.com/code_search/explanations/features#saved-searches)

- Maturity: Deprecated
- Available in: free,enterprise
- Limitations: This is/has been being deprecated and replaced by code monitoring.

### Search Contexts

[Documentation](https://docs.sourcegraph.com/code_search/explanations/features#search-contexts)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Cannot currently share search contexts with other org members.

## Code Intelligence

[Code Graph Strategy](/company/strategy/code_graph) | [Code Intelligence Strategy](/company/strategy/code_graph/code-intelligence)

### Search-based Code Intelligence

[Documentation](https://docs.sourcegraph.com/code_intelligence/explanations/search_based_code_intelligence)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: https://docs.sourcegraph.com/code_intelligence/explanations/search_based_code_intelligence#what-languages-are-supported

### Precise Code Intelligence for Go

[Documentation](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: No auto-indexing or dependency navigation.

### Precise Code Intelligence for JavaScript/TypeScript

[Documentation](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Customers may run into some issues. No auto-indexing or dependency navigation.

### Precise Code Intelligence for Java & Scala

- Maturity: Not Implemented
- Limitations: No auto-indexing or dependency navigation. No cross-repo support. Supports Gradle, Maven and sbt projects. Kotlin is not yet supported but will be part of this package; it is in development with Beta support by early Q4.

### Precise Code Intelligence for C/C++

[Documentation](https://docs.sourcegraph.com/code_intelligence/explanations/precise_code_intelligence)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: No auto-indexing or dependency navigation. No cross-repo support. The build systems for C and C++ are wide ranging and frequently customized. The indexer supports the most common build tools, however there is custom work required for this to work. Based on our previous experiences with fragmented and custom setups, we cannot ensure support without a previous case by case assessment of the customer's setup.

### Precise Code Intelligence for Python

- Maturity: Not Implemented

### Precise Code Intelligence for C#

- Maturity: Not Implemented

### Precise Code Intelligence for JavaScript/TypeScript

- Maturity: Not Implemented

## Batch Changes

[Code Graph Strategy](/company/strategy/code_graph) | [Batch Changes Strategy](/company/strategy/code-graph/batch-changes)

### Batch Changes

[Documentation](???)

- Maturity: Generally Available
- Available in: enterprise
- Limitations: Limited to <1,000 repositories. No src-cli support on Windows. Monorepo support is considered experimental. Server-side changes are not supported. https://docs.sourcegraph.com/batch_changes/references/requirements#code-hosts

## Code Insights

[Code Graph Strategy](/company/strategy/code_graph) | [Code Insights Strategy](/company/strategy/code-graph/code-insights)

### Code Insights

[Documentation](???)

- Maturity: Beta
- Available in: enterprise
- Limitations: Real-time live preview search insights for up to ~50-70 repos listed manually. Custom search query insights over all repositories has limitations defined at https://docs.sourcegraph.com/code_insights/explanations/current_limitations_of_code_insights. Language pie charts work only on one repo. GraphQL API exists but not yet fully documented; exports dont work for insights running "in real time" over <50 repos (but you can always run those over all repos and filter down); only exports aggregated data. There are performance speed calculations, some slight feature parity limitations between <70 repo insights and "all repo" insights, and detailed notes on why an insight might not match a manual search. We have only tested up to 26.4k repos so have caution at scales >50,000 repos. Deployment via Docker is not supported. A Timescale database is required.

## Security

[Cloud Strategy](/company/strategy/cloud) | [Security Strategy](/company/strategy/cloud/security)

### SOC II Type II

[Documentation](???)

- Maturity: Not Implemented
- Limitations: ETA mid-2022

## Extensions

[Cloud Strategy](/company/strategy/cloud) | [Extensions Strategy](/company/strategy/cloud/extensibility)

### Pre-built Extensions

[Documentation](???)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Only extensions not marked as experimental in the index are considered generally available.

### Custom Extensions

[Documentation](???)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: https://docs.sourcegraph.com/extensions/authoring

## Repository Management

[Enablement Strategy](/company/strategy/enablement) | [Repository Management Strategy](/company/strategy/enablement/repo-management)

### Repository Syncing

[Documentation](???)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Phabricator is supported but requires reading note about mirroring repos at https://docs.sourcegraph.com/admin/external_service/phabricator. Gerrit has some limitations. Perforce has out of the box configuration in Sourcegraph, but is still in beta and being validated. CVS currently requires src-expose.

### Repository Permissions

[Documentation](https://docs.sourcegraph.com/admin/repo/permissions)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: For Perforce we support down to directory level with wildcard permissions, but not file level.

### User Authentication

[Documentation](https://docs.sourcegraph.com/admin/config/authorization_and_authentication)

- Maturity: Generally Available
- Available in: free,enterprise

### Browser Extension

[Documentation](https://docs.sourcegraph.com/integration/browser_extension)

- Maturity: Generally Available
- Available in: free,enterprise

### Native Integration

[Documentation](https://docs.sourcegraph.com/integration)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: GitLab requires every user to opt in to this setting, so even if an admin turns it on by default, each user will also need to turn it on by default to get native hovers inside of the code host.

## Deployment

[Enablement Strategy](/company/strategy/enablement) | [Deployment Strategy](/company/strategy/enablement/delivery)

### Single Container Deployment

[Documentation](https://docs.sourcegraph.com/admin/install/docker)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Only intended for trials and POC deployments - not for long term production use by paying customers.

### Docker Compose Deployment

[Documentation](https://docs.sourcegraph.com/admin/install/docker-compose)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Minimum Docker version: v20.10.0. Minimum version of Docker Compose: v1.22.0. More caveats at https://docs.sourcegraph.com/admin/install/docker-compose#docker-compose

### Kubernetes Deployment

[Documentation](https://docs.sourcegraph.com/admin/install/kubernetes/configure#getting-started)

- Maturity: Generally Available
- Available in: free,enterprise
- Limitations: Can orchestrate using Kustomize, but not Helm. Recommended for Sourcegraph Enterprise license - uou can run through these instructions without one, but you must obtain a license for instances of more than 10 users. Minimum Kubernetes version: v1.15 and kubectl v1.15 or later. More on caveats/requirements at https://docs.sourcegraph.com/admin/install/kubernetes#kubernetes
