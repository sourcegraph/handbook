# How to route questions from customers

This document is provided as a glossary for new CE team members to know how to route questions from customers. It is a rough feature ownership mapping by team.

In many cases, questions can span multiple teams. For example, a question about how to scale up indexed search to serve a large set of repositories could cover the Distribution, Cloud, and Search teams. In such cases, default to asking the [Distribution team](../engineering/distribution/index.md#support-rotation) for more precise guidance first.

If escalating to a dev team, check their team page in the Handbook to confirm if they've specified a preferred escalation process.

Additions to this document are welcome.

## Subscriptions and licenses

**Keywords**: `subscription`, `license`, `key`, `renew`, `expire`, `contract`

For any questions about contract renewal, the CE and [Sales](../sales/index.md) teams are responsible.

For any questions about license key extension, the CE team is responsible. See the [license key management documentation](../sales/license_keys.md) for guidance.

## Deployment

**Keywords**: `deploy`, `Docker`, `container`, `image`, `Kubernetes`/`k8s`, `cluster`, `AWS`, `Google Cloud`/`GCP`

Any questions about deployment should be routed to the [Distribution team](../engineering/distribution/index.md).

If asking the Distribution team in their Slack channel, ping the [on-call dev](../engineering/distribution/index.md#support-rotation).

## Monitoring, management, and performance optimization

**Keywords**: `scaling`, `resources`, `performance`/`perf`, `monitoring`, `Grafana`, `Prometheus`, `alert`, `dashboard`

Questions about specific alerts and graph panels should be routed to the team that owns the alert or panel, as indicated by relevant entry in [Alert solutions](https://docs.sourcegraph.com/admin/observability/alert_solutions) or the [Dashboards reference](https://docs.sourcegraph.com/admin/observability/dashboards) respectively.

Any other questions about monitoring and performance should be routed to the [Distribution team](../engineering/distribution/index.md).

If asking the Distribution team in their Slack channel, ping the [on-call dev]../engineering/distribution/index.md#support-rotation).

## Code host connections

**Keywords**: `code host`, `cloning`, `syncing`, `token`, `GitHub`, `GitLab`, `Bitbucket`, `Phabricator`, `Gerrit`, `repository`, `project`, `Perforce`, `src-expose`

Any questions about code host connections and repository syncing should be routed to the [Cloud team](../engineering/cloud/index.md).

Note that this section applies to backend connections with code hosts, such as repository cloning and syncing. Questions about [frontend/UI integrations with code hosts](#browser-extensions-and-code-host-native-integrations) (e.g., getting code intelligence inside of a code host) should be rounted to the [Web team](../engineering/web/index.md).

## Repository permissions

**Keywords**: `permissions`, `ACLs`, `access`, `authorization`, `authz`

Any questions about repository permissions should be routed to the [Cloud team](../engineering/cloud/index.md).

## User authentication (SSO)

**Keywords**: `authentication`, `authn`, `SSO`, `SAML`, `OAuth`, `auth proxy`, `OpenIDConnect`, `OIDC`

Any questions about user authentication should be routed to the [Cloud team](../engineering/cloud/index.md).

## Code intelligence

**Keywords**: `code intelligence`, `precise`, `navigation`, `LSIF`, `language server`/`LSP`, `go to definition`, `hover`, `find references`, any programming language names (e.g. `Go`, `Java`, `Python`, `COBOL`, etc.)

Any questions about code intelligence and navigation should be routed to the [Code Intelligence team](../engineering/code-intelligence/index.md).

## Search

**Keywords**: `search`, `indexed search`, `indexing`, `diff search`, `symbols`, `keyword`, `filter`, `scope`, `version context`, `repogroup`, `saved search`

Any questions about search should be routed to the [Search team](../engineering/search/index.md).

## Browser extension and code host native integrations

**Keywords**: `browser extension`, `native integration`, `chrome`, `firefox`, `safari`, `Phabricator`, `Bitbucket`, `GitHub`, `GitLab`

Any questions about the browser extension or code host native integrations should be routed to the [Web team](../engineering/web/index.md).

## Sourcegraph extensions

**Keywords**: `extensions`, `plugins`, `blame`, `git-extras`, `Codecov`

Any questions about Sourcegraph extensions should be routed to the [Web team](../engineering/web/index.md).

## Campaigns

**Keywords**: `campaigns`, `large scale code changes`, `refactoring`

Any questions about campaigns should be routed to the [Campaigns team](../engineering/campaigns/index.md).

## Usage statistics

**Keywords**: `usage`, `users`, `DAU`, `WAU`, `MAU`

Any questions about usage statistics should be routed to the [BizOps team](../ops/bizops/index.md).
