# Engaging Other Teams

Our goal as Customer Support is to need help from engineering no more than 10% of the time (not counting when we file defects). It's okay that we need help, and we will need help, and we also continually take what we learn each time we do back to the rest of the team (and our product documentation, as relevant).

When we need help, we seek it consistently, following the steps outlined here. We created these steps to ensure we:

- Take the work as far as we can
- Exhaust our collective expertise
- Minimize the time added to the customer experience whilst they wait for help

At no point are we meant to be gate keepers or go-betweens. Generally, when a CE needs help, they will come to us. They may also still go directly to engineering for other questions they have. And when we engage engineering, if the CE wants to be included, be sure to do so. This is especially relevant for customers still in the pre-sales process where everything is just a bit more sensitive.

## Step 1: Gather all the details/context and set expectations with the customer

The more we know, the easier it will be to find the answer. For example:

- Do we have updated details about the customer's environment?
- Do we have the steps to be able to reproduce the issue and relevant screenshots and logs?
- Do we know if the customer made any other changes to their environment recently (this could be anything, not just related to Sourcegraph)?
- Do we have a few examples of users who are impacted and those who are not if the issue is not impacting all of their users?
- Do we have an understanding of the level of urgency the customer and/or our CE/Sales counterparts are feeling to resolve the issue?

Never say "I need to ask engineering" or anything that can erode trust with the customer in your ability. It's okay that you need help! Instead say things like: "I want to talk to some of my teammates about this one..."

## Step 2: Check with your teammates first and move forward when needed

If you don't need help and are filing a defect, you can skip this step.

When you need help, post in our #customer-support-internal Slack channel first to see if anyone on our team is able to help you move forward. Always trust your assessment of the situation and move forward to engaging engineering based on the level of urgency/priority associated with the work.

## Step 3: Identify which team can help you

In many cases, questions can span multiple teams. For example, a question about how to scale up indexed search to serve a large set of repositories could cover the Distribution, Cloud, and Search teams. In such cases, start where you think is best and our teammates in engineering will help us figure out if we need to go to another engineering team.

### Deployment

**Keywords**: `deploy`, `Docker`, `container`, `image`, `Kubernetes`/`k8s`, `cluster`, `AWS`, `Google Cloud`/`GCP`

Any questions about deployment should be routed to the [Delivery team](../engineering/enablement/delivery/index.md).

### Monitoring, management, and performance optimization

**Keywords**: `scaling`, `resources`, `performance`/`perf`, `monitoring`, `Grafana`, `Prometheus`, `alert`, `dashboard`

Questions about specific alerts and graph panels should be routed to the team that is responsible for the alert or panel, as indicated by relevant entry in [Alert solutions](https://docs.sourcegraph.com/admin/observability/alert_solutions) or the [Dashboards reference](https://docs.sourcegraph.com/admin/observability/dashboards) respectively.

Any other questions about monitoring and performance should be routed to the [Delivery team](../engineering/enablement/delivery/index.md).

### Code host connections

**Keywords**: `code host`, `cloning`, `syncing`, `token`, `GitHub`, `GitLab`, `Bitbucket`, `Phabricator`, `Gerrit`, `repository`, `project`, `Perforce`, `src-expose`, `src serve-git`

Any questions about code host connections and repository syncing should be routed to the Repository Management team.

EXCEPTIONs FOR Q3FY22 (to be reassessed for Q4 by 2021-10-31):

- `Perforce` should be routed to the [Repo Management](../engineering/enablement/repo-management/index.md)
- `permission syncing` should be routed to the [Repo Management](../engineering/enablement/repo-management/index.md)
- `CVS` should be routed to the [Batch Changes team](../engineering/code-graph/batch-changes/index.md)
- `license enforcement/management` should be routed to the [Batch Changes team](../engineering/code-graph/batch-changes/index.md) (though these should always go through the CE)

Note that this section applies to backend connections with code hosts, such as repository cloning and syncing. Questions about [frontend/UI integrations with code hosts](#browser-extensions-and-code-host-native-integrations) (e.g., getting code intelligence inside of a code host) should be rounted to the [Extensibility team](../engineering/cloud/extensibility/index.md).

### Repository permissions

**Keywords**: `permissions`, `ACLs`, `access`, `authorization`, `authz`

Any questions about repository permissions should be routed to the Repository Management team.

### User authentication (SSO)

**Keywords**: `authentication`, `authn`, `SSO`, `SAML`, `OAuth`, `auth proxy`, `OpenIDConnect`, `OIDC`

Any questions about user authentication should be routed to the Repository Management team.

### Code intelligence

**Keywords**: `code intelligence`, `precise`, `navigation`, `LSIF`, `language server`/`LSP`, `go to definition`, `hover`, `find references`, `ctags`, any programming language names (e.g. `Go`, `Java`, `Python`, `COBOL`, etc.)

Any questions about code intelligence and navigation should be routed to the [Code Intelligence team](../engineering/code-graph/code-intelligence/index.md).

### Search

**Keywords**: `search`, `indexed search`, `indexing`, `diff search`, `symbols`, `keyword`, `filter`, `scope`, `version context`, `repogroup`, `saved search`, `code monitoring`

The search team is divided into two sub-teams, search-product, and search-core. Search-product is focused on delivering features such as search contexts, and search predicates for Cloud and Enterprise alike, as well as driving retention for search in public code. Search-core is focused on growing the global index on Sourcegraph Cloud.

Any questions about search should be routed to the [Search team](../engineering/code-graph/search/index.md), via the #search slack channel. Teams should be flagged appropriately via @search-product or @search-core. The search team will also assign a dedicated team member for support inquiries via the @search-core-support and @search-product-support tags.

In GitHub issues search-core and search-product should be flagged via team/search-core and team/search-product respectively.

### Browser extension and code host native integrations

**Keywords**: `browser extension`, `native integration`, `chrome`, `firefox`, `safari`, `Phabricator`, `Bitbucket`, `GitHub`, `GitLab`

Any questions about the browser extension or code host native integrations should be routed to the [Extensibility team](../engineering/cloud/extensibility/index.md).

### Sourcegraph extensions

**Keywords**: `extensions`, `plugins`, `blame`, `git-extras`, `Codecov`

Any questions about Sourcegraph extensions should be routed to the [Extensibility team](../engineering/cloud/extensibility/index.md).

### Batch Changes

**Keywords**: `campaigns`, `large scale code changes`, `refactoring`, `src-cli`, `automation`, `batch changes`

Any questions about Batch Changes should be routed to the [Batch Changes team](../engineering/code-graph/batch-changes/index.md).

### Cloud

**Keywords**: `cloud`, `Open Source Search`, `sourcegraph.com`,

The cloud team is a newly formed team at Sourcegraph focused on rapidly scaling our cloud presence. Today, the team is the DRI for all things cloud including DevOps/infra for cloud, new feature development, and early-access/waitlist programs for cloud.

Any questions about Sourcegraph cloud should be routed to the [Cloud SaaS](../engineering/cloud/saas/index.md) via the [#cloud-saas slack channel](https://sourcegraph.slack.com/archives/C025BKWFPDY).

## Step 4: File a Github issue

It can seem duplicative, but it's just as important when we need help as it is when we file a defect to file a Github issue. This allows us to understand how we are doing toward our goal of being a self-sustaining team, as well as trends over time that impact the customer experience, engineering work load planning, and our team's experience.

### Select the right issue tracker

We maintain two issue trackers:

1. [sourcegraph/customer](https://github.com/sourcegraph/customer/issues) for private issues that affect a particular customer and our requests for help (RFHs).
2. [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/issues) for public issues affecting the general product.

When in doubt, file in the private repo—issues can be moved over to the public repo if needed. And remember, a customer includes those we are working with during the sales process (not just those who have already signed a contract with us).

- Navigate to the correct issue repo from the links above; once there, click the "new issue" button (if you are using the private repo, this will show you some templates -- use the CSE New Issue template
- Provide all information required for troubleshooting that you gathered in the previous steps, including the customer deployment doc and/or the account doc, if available
- Include customer quotes in mark down using a quote block. For example, `> quote goes here.`
- Label it with `customer/$name` and `rfh`.
- Assign the issue to the appropriate team you identified in the previous step by adding the team via their team label.

If it turns our to be a general issue affecting multiple deployments, create an issue in the [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues/new/choose). The issue must not include any private information. It is okay to link any relevant private, customer specific issues. If not already linked to the relevant Zendesk tickets, do so.

### Add the priority label

Add a prioritization label to the Github issue based on a combination of (1) the severity of the issue and (2) any relevant context that translates to level of urgency (for example, if a customer is in the sales process, issues have a higher degree of urgency):

- `cs/p1`: All customer reported issues per our contractual p1 service level agreement definition [here](../support/index.md#our-service-level-agreements-slas).
- `cs/p2`: All customer reported issues per our contractual p2 service level agreement definition [here](../support/index.md#our-service-level-agreements-slas), including all feature requests.

Selecting priority is more of an art than a science. Start with the issue and its severity and then move it up based on all relevant context (again, for example, are we in the sales process? does the customer have something happening that requires more immediate attention?)

## Step 5: Collaborate and resolve

### Requests for help (RFHs)

After you file the Github issue, alert the relevant engineering team you did so in Slack. Keep it simple and always provide 1) a brief description of what you need, 2) link to the Github issue, and 3) the context around timeline (for example: it's okay to look at this tomorrow or later in the week).

- When posting in the Delivery team's Slack channel, use @distribution-support to contact the on-call dev (if @delivery-support does not exist)
- When posting in Batcher Changes team's Slack channel, use @batchers-support
- When posting for Repository Management, be sure to do so in the #repo-management channel and use @core-app-support (if @repo-management-support doesn't exist)
- When posting for Cloud/SaaS, be sure to do so in the #cloud-saas channel and use @cloud-saas
- When posting for Search, use @search-core-support or @search-product-support ... depending which team within Search you need
- Whenever we have more work than any one engineering team can handle via their support process, we prioritize issues holistically. We try to catch this before the engineering team has to alert us.

### Defects

If the issue is a defect, we trust our teammates in product and engineering to schedule the fix based on all other priorities they have to consider. The context you provide on urgency in the ticket is useful to them for this. If the customer requires a timeline update, we can talk with the relevant engineering team to get a sense. We never want to make promises, but we can share what we know and make sure the customer doesn't feel left in the dark or like no one cares about their issue.

### Collaboration

Ask the engineer helping you to see if they would like to work directly with the customer. If so, we can add them in cc on the Zendesk ticket (if the origin was the support@ email) or @ them in the relevant customer-facing Slack thread. We never want to be an unnecessary go-between, but depending on the issue, we also don't want to erode the customer's trust in your ability. It's okay that you need help and it's also okay to position that as your desire to talk with your teammates (as described in step 1).

### Resolution

Even when engineering is helping, you are accountable for the work and it is your job to reach resolution as outlined in our [workflow](support-workflow.md).

And in some cases, the customer resolves the issue or you figure it out on your own, after all. Please be sure to share in the Github issue all the details so our engineering teammates can learn, too!

## And sometimes, we need help from teams outside of engineering ...

### Subscriptions and licenses

**Keywords**: `subscription`, `license`, `key`, `renew`, `expire`, `contract`

For any questions about contract renewal, the CE and [Sales](../sales/index.md) teams are responsible. Post in the #ce channel @ mentioning the assigned sales rep and CE.

For any questions about license key extension, the CE team is responsible. See the [license key management documentation](../ce/license_keys.md) for guidance.

### Usage statistics

**Keywords**: `usage`, `users`, `DAU`, `WAU`, `MAU`

Any questions about usage statistics should be routed to the [BizOps team](../bizops/index.md).
