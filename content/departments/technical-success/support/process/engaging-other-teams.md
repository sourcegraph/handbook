# Engaging Other Teams

Our goal as Support Engineering is to need help from engineering no more than 10% of the time (not counting when we file defects). It's okay that we need help, and we will need help, and we also continually take what we learn each time we do back to the rest of the team (and our product documentation, as relevant).

When we need help, we seek it consistently, following the steps outlined here. We created these steps to ensure we:

- Take the work as far as we can
- Exhaust our collective expertise
- Minimize the time added to the customer experience whilst they wait for help

With the introduction of the go/whodoinotify. This is our primary go-to avenue to get help from our engineering teammates aside from filing GitHub issues. A few more reasons to help this make sense:

1. It is important that our team is as self-sustaining as possible and we need to be able to measure that. We have very fair salaries for a support role compared to the rest of the industry for this very reason and being able to reconcile total tickets vs what gets into GitHub helps us suss out our performance as well as room for growth.
2. To help reduce time to resolution for customer issues, we'd like to remain agile and make use of go/whodoinotify to get eyes on it as soon as possible. If required, and for some of the issues that we judge that are related to a specific team input, we then use GitHub RFHs given that those would require a deeper subject matter level of attention.
3. Most questions we might ask that are simple will likely lead to a doc update and being able to see the history from the case to the GitHub issue and whether a docs update happened allows us to actually double check if docs updates are happening, where improvement is helpful (not just in the docs, but in what may make updating them difficult), etc.

At no point are we meant to be gatekeepers or go-betweens. No one else at Sourcegraph has to go through us to go to engineering; that is what the #discuss-engineering Slack channel is for.

Any support engineer can use the #discuss-engineering and #discuss-implementation and the proper channels in go/whodoinotify for anything they deem useful. These could be:

- ...for your own curiosity as you are learning (a question you have)
- ...as you work on a cross-functional project
- ...maybe if you get curious after posting in #discuss-engineering or filing a GitHub issue and you have a tangentially related issue -- just say that when you post

And now that this is all clear, here is our practice:

## Step 1: Gather all the details/context and set expectations with the customer

The more we know, the easier it will be to find the answer. For example:

- Do we have updated details about the customer's environment?
- Do we have the steps to be able to reproduce the issue and relevant screenshots and logs?
- Do we know if the customer made any other changes to their environment recently (this could be anything, not just related to Sourcegraph)?
- Do we have a few examples of users who are impacted and those who are not if the issue is not impacting all of their users?
- Do we have an understanding of the level of urgency the customer and/or our CE/Sales counterparts are feeling to resolve the issue?

Never say "I need to ask engineering" or anything that can erode trust with the customer in your ability. It's okay that you need help! Instead say things like: "I want to double check with some of my teammates about this one..."

## Step 2: Check with your teammates first and move forward when needed

If you don't need help and are filing a defect, you can skip this step.

When you need help, post in our #team-support-engineering Slack channel first to see if anyone on our team is able to help you move forward. Always trust your assessment of the situation and move forward to engaging engineering based on the level of urgency/priority associated with the work.

## Step 3: Identify who can help you

Primarily, we'd want to start asking for help using go/whodoinotify. If the issue is more complex, we'd opt to create a GitHub issue and tag the relevant rotation pod in go/whodoinotify.

A couple of notes before to help you get started in figuring out which team will be best to help:

- In some cases, questions can span multiple teams. For example, a question about how to scale up indexed search to serve a large set of repositories could cover the Source, Search, and Release teams. In such cases, start where you think is best and our teammates in engineering will help us figure out if we need to go to another engineering team.
- For features tagged beta or experimental in our docs, it’s okay to err on the side of engaging product + engineering sooner rather than later (since we don't yet know if we will want to release these, we keep our docs light in case we opt to remove the feature after all. Also, for these features we're still figuring out how users expect them to work, so often "bugs" are informative to understand product or education gaps in the feature – you're helping the team by surfacing them directly).

### Infrastructure

**Keywords**: `deploy`, `Docker`, `container`, `image`, `Kubernetes`/`k8s`, `cluster`, `AWS`, `Google Cloud`/`GCP`, `self-hosted`, `multi version upgrades`, `executors`

Any questions about self-hosted deployment should be routed to the [Release team](../../../engineering/teams/release/index.md).

Any questions about managed instance deployment should be routed to the [Cloud team](../../../engineering/teams/).

### Monitoring, management, and performance optimization

**Keywords**: `scaling`, `resources`, `performance`/`perf`, `monitoring`, `Grafana`, `Prometheus`, `alert`, `dashboard`

Questions about specific alerts and graph panels should be routed to the team that is responsible for the alert or panel, as indicated by relevant entry in [Alert solutions](https://docs.sourcegraph.com/admin/observability/alert_solutions) or the [Dashboards reference](https://docs.sourcegraph.com/admin/observability/dashboards) respectively.

Any other questions about monitoring and performance for self-hosted customers should be routed to the [Release team](../../../engineering/teams/release/index.md).

Any other questions about monitoring and performance for managed instance deployment should be routed to the [Cloud team](../../../engineering/teams/../../cloud/index.md).

### Cody

**Keywords**: `embeddings`, `LLMs`, `anthropic`, `openAI`, `autocomplete`, `intellij`, `emacs`, `xcode`, `neovim`

At the moment, Cody as a single entity exists as various products (Cody for web, Cody for VS Code, Cody App, etc...), and which issues go where is not cut and dry. For the time being, summarize your question in #discuss-cody and they will send you in the right direction.

### Code host connections

**Keywords**: `code host`, `cloning`, `syncing`, `token`, `GitHub`, `GitLab`, `Bitbucket`, `Phabricator`, `Gerrit`, `repository`, `project`, `Perforce`, `src-expose`, `src serve-git`

Any questions about code host connections and repository syncing should be routed to the Repository Management team.

- `Perforce` should be routed to the [Source](../../../engineering/teams/source/index.md)
- `permission syncing` should be routed to [Source](../../../engineering/teams/source/index.md)
- `CVS` should be routed to [Source](../../../engineering/teams/source/index.md)
- `license enforcement/management` should be routed to [Source](../../../engineering/teams/source/index.md) (though these should always go through the CE)

Note that this section applies to backend connections with code hosts, such as repository cloning and syncing. Questions about [frontend/UI integrations with code hosts](#browser-extensions-and-code-host-native-integrations) (e.g., getting code intelligence inside of a code host) should be routed to the [Code Search team](../../../engineering/teams/code-search/index.md).

### Repository Management

**Keywords**: `indexing`, `gitserver`, `code host syncing`, `repo updates`

Any questions about repository updating, indexing, or code host syncing should be routed to the [Source](../../../engineering/teams/source/index.md).

### Code Intelligence

**Keywords**: `code intelligence`, `precise`, `navigation`, `LSIF`, `language server`/`LSP`, `go to definition`, `hover`, `find references`, `ctags`, `src lsif`, `syntax highlighter`, `syntect-server` any programming language names (e.g. `Go`, `Java`, `Python`, `COBOL`, etc.)

Any questions about code intelligence and navigation should be routed to the [Graph team](../../../engineering/teams/graph/index.md) in [#discuss-graph](https://sourcegraph.slack.com/archives/CHXHX7XAS).

### Search

**Keywords**: `search`, `indexed search`, `indexing`, `diff search`, `symbols`, `keyword`, `filter`, `scope`, `version context`, `repogroup`, `saved search`, `code monitoring`, `src search`

The search team is divided into two sub-teams, search-platform(formerly search-core), and code-search(formerly search-product). Code-search is focused on delivering features such as search contexts, and search predicates for Cloud and Enterprise alike, as well as driving retention for search in public code. Search-platform is focused on growing the global index on Sourcegraph Cloud.

Any questions about search should be routed to the [Search Platform team](../../../engineering/teams/search-platform/index.md), via the [#discuss-code-search](https://sourcegraph.slack.com/archives/C05EA9KQUTA) and [#discuss-search-platform](https://sourcegraph.slack.com/archives/C05R619V4F8) slack channels. Teams should be flagged appropriately via @code-search-team or @search-platform-team. The search team will also assign a dedicated team member for support inquiries via the @search-platform-support and @search-product-support tags.

In GitHub issues search-platform and code-search should be flagged via team/search-platform and team/code-search respectively.

### Browser extension and code host native integrations

**Keywords**: `browser extension`, `native integration`, `chrome`, `firefox`, `safari`, `Phabricator`, `Bitbucket`, `GitHub`, `GitLab`

Any questions about the browser extension or code host native integrations should be routed to the [Code Search team](../../../engineering/teams/code-search/index.md).

### Sourcegraph extensions

**Keywords**: `extensions`, `plugins`, `blame`, `git-extras`, `Codecov`

Any questions about the browser extension or code host native integrations should be routed to the [Code Search team](../../../engineering/teams/code-search/index.md).

### Batch Changes

**Keywords**: `campaigns`, `large scale code changes`, `refactoring`, `src batch`, `automation`, `batch changes`

Any questions about Batch Changes should be routed to the [Code Search team](../../../engineering/teams/code-search/index.md).

### Cloud

**Keywords**: `cloud`, `Open Source Search`, `sourcegraph.com`

Any questions about Sourcegraph cloud should be routed to the [Cloud organization](../../../engineering/teams/index.md) via the #team-cloud channel.

Cloud gets cc'd on all cloud related tickets (i.e. Engineering Team field is set to Cloud).
Cloud team has also agreed to ping Support on P3/P5 alerts on #team-customer-support so we can more proactively help customers that are experiencing issues on their cloud managed instance.

### IAM

**Keywords**: `permissions`, `ACLs`, `access`, `authorization`, `authz`, `authentication`, `authn`, `SSO`, `SAML`, `OAuth`, `auth proxy`, `OpenIDConnect`, `OIDC`

Any questions about Identity and Access Management (IAM) and Administration Experience should be routed to the [Source team](../../../engineering/teams/source/index.md) via the `#ask-source` slack channel.

### Code Insights

**Keywords**: `insights`, `visualization`, `tracking`, `measuring`, `technical debt`

Any questions about Code Insights should be routed to the [Code Search Team](../../../engineering/teams/code-search/index.md)

### Docs site availability

**Keywords**: `docs`, `documentation`, `sourcegraph.com`,

The marketing team is responsible for our docs site (https://docs.sourcegraph.com/) being available, but not necessarily documentation (that is the responsibility for each engineering team).

If the docs site is unavilable, route to the Docs team via the [#docs](https://sourcegraph.slack.com/archives/C01DXLN3D0T) channel.

For a more detailed breakdown of codebase ownership please see the [Engineering Ownership](../../../engineering/dev/process/engineering_ownership.md) matrix

## Step 4: File a GitHub issue

Filing a GitHub issue allows us to understand how we are doing toward our goal of being a self-sustaining team, as well as trends over time that impact the customer experience, engineering workload planning, and our team's experience.

### Select the right issue tracker

We maintain two issue trackers:

1. [sourcegraph/customer](https://github.com/sourcegraph/customer/issues) for private issues/questions that affect a particular customer and all requests for help (RFHs).
2. [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph/issues) for public issues affecting the general product (you may file one at the end of the case, but usually you start with the customer repo while you work to understand if the issue is a defect that would affect other customers).

When in doubt, file in the private repo—issues can be moved over to the public repo if needed. And remember, a customer includes those we are working with during the sales process (not just those who have already signed a contract with us).

- Navigate to the correct issue repo from the links above; once there, click the "new issue" button (if you are using the private repo, this will show you some templates -- use the SE New Issue template
- Provide all information required for troubleshooting that you gathered in the previous steps, including the customer deployment doc and/or the account doc, if available
- Include Sourcegraph version number.
- Include name of the extension along with the extension version number when filing issues with extensions for the Code Exploration team.
- Include customer quotes in markdown using a quote block. For example, `> quote goes here.`
- Label it with `customer/$name` and `rfh (request for help from SE)`.
- Assign the issue to the appropriate team you identified in the previous step by adding the team via their team label.

If it turns out to be a general issue affecting multiple deployments, create an issue in the [public issue tracker](https://github.com/sourcegraph/sourcegraph/issues/new/choose). The issue must not include any private information. It is okay to link any relevant private, customer specific issues. If not already linked to the relevant Zendesk tickets, do so.

### Add the priority label

Add a prioritization label to the GitHub issue based on a combination of (1) the severity of the issue and (2) any relevant context that translates to level of urgency (for example, if a customer is in the sales process, issues have a higher degree of urgency):

- `se/p0`: All customer reported issues per our contractual p1 service level agreement definition [here](../index.md#our-service-level-agreements-slas).
- `se/p1`: All customer reported issues per our contractual p1 service level agreement definition [here](../index.md#our-service-level-agreements-slas).
- `se/p2`: All customer reported issues per our contractual p2 service level agreement definition [here](../index.md#our-service-level-agreements-slas), including all feature requests.
- `se/p3`: All customer reported issues per our contractual p1 service level agreement definition [here](../index.md#our-service-level-agreements-slas).

Selecting priority is more of an art than a science. Start with the issue and its severity and then move it up based on all relevant context (again, for example, are we in the sales process? does the customer have something happening that requires more immediate attention?)

## Step 5: Collaborate and resolve

### Requests for help (RFHs)

After you file a GitHub issue, keep it simple and always provide;

1.  a brief description of the issue you need help on,

2.  a link to the GitHub issue(if you chose this route), and

3.  the context around timeline (for example: it's okay to look at this tomorrow or later in the week).

- When posting in Release team's channel, [#discuss-releases](https://sourcegraph.slack.com/archives/C02E4HE42BX), use @release-team
- When posting regarding a Batch Changes issue, post in [#discuss-code-search](https://sourcegraph.slack.com/archives/C05EA9KQUTA), use @batcher-support
- When posting for Repository Management, be sure to do so in the [#discuss-source](https://sourcegraph.slack.com/archives/C05EMJM2SLR) channel and use @source-support
- When posting for Cloud, be sure to do so in the [#discuss-cloud-ops](https://sourcegraph.slack.com/archives/C03JR7S7KRP) channel and use @cloud-support
- When posting for [Search platform](https://sourcegraph.slack.com/archives/C05R619V4F8), use @search-platform-support
- When posting for [Code Search](https://sourcegraph.slack.com/archives/C05EA9KQUTA), use @search-product-support
- When posting for Code Intelligence/Code Navigation, be sure to do so in [#discuss-graph](https://sourcegraph.slack.com/archives/CHXHX7XAS), use @graph-support
- When posting for Cody, post in [#discuss-cody](https://sourcegraph.slack.com/archives/C04MSD3DP5L)
- Whenever we have more work than any one engineering team can handle via their support process, we prioritize issues holistically. We try to catch this before the engineering team has to alert us.

### How To Questions

For How-To procedure go [here](how-to-tickets.md)

### Defects

If the issue is a defect, we trust our teammates in product and engineering to schedule the fix based on all other priorities they have to consider. The context you provide on urgency in the ticket is useful to them for this. If the customer requires a timeline update, we can talk with the relevant engineering team to get a sense. We never want to make promises, but we can share what we know and make sure the customer doesn't feel left in the dark or like no one cares about their issue.

### Collaboration

Ask the engineer helping you to see if they would like to work directly with the customer. If so, we can add them in cc on the Zendesk ticket (if the origin was the support@ email) or @ them in the relevant customer-facing Slack thread. We never want to be an unnecessary go-between, but depending on the issue, we also don't want to erode the customer's trust in your ability. It's okay that you need help and it's also okay to position that as your desire to talk with your teammates (as described in step 1).

It's also okay to share with the engineering helping you that you would appreciate chatting over Slack more casually or that you would appreciate a Zoom call. You are working with them, it's okay to collaborate like you would any member of the team! If you want to learn more about something that comes up, just share that. Our teammates in engineering will be happy to engage in more robust ways than just the back and forth in the GitHub issue.

### Resolution

Even when engineering is helping, you are accountable for the work and it is your job to reach resolution as outlined in our [workflow](support-workflow.md).

And in some cases, the customer resolves the issue or you figure it out on your own, after all. Please be sure to share in the GitHub issue all the details so our engineering teammates can learn, too!

## And sometimes, we need help from teams outside of engineering ...

### Enterprise subscriptions and licenses

**Keywords**: `subscription`, `license`, `key`, `renew`, `expire`, `contract`

For any questions about contract renewal, the CE and [Sales](../../../sales/index.md) teams are responsible. Post in the [#discuss-ce](https://sourcegraph.slack.com/archives/CU93UDUBV) channel @ mentioning the assigned sales rep and CE.

For any questions about license key extension, the CE team is responsible. See the [license key management documentation](../../ce/process/license_keys.md) for guidance.

### Usage statistics

**Keywords**: `usage`, `users`, `DAU`, `WAU`, `MAU`

Any questions about usage statistics should be routed to the [Data & Analytics team](../../../data-analytics/index.md).
