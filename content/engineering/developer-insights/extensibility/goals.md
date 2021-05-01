# Extensibility Team Goals and Roadmap

The Extensibility team, due to missing dedicated PM, design and additional engineering support, will not be following a traditional product roadmap in FY22 and instead will focuses on high impact projects aligned with the company's OKRs.
## Goals for FY22

See also our [completed goals](goals_completed.md).

###  1. Make Sourcegraph extensions an active ecosystem

**Problem:** Sourcegraph extensions won't grow or provide nearly as much value if Sourcegraph builds and maintains the only extensions. (In fact, at that point, we're sometimes just costing ourselves in the documentation + maintenance of an extensions platform when we might as well build first-class features directly).

We want – and our users want – our users to build custom extensions, but there are a number of blockers that keep other folks from making extensions. These include documentation issues, the extension registry's appearance sending mixed or incorrect messages about what extensions are and how actively they're maintained, the ability of a user to use many Sourcegraph extensions at once, and actually proving out the third party partnership/developer model for any third-party extension.

**Why we are focusing on this:** Extensions can provide sales, retention, differentiation, delight, and "free" functionality to Sourcegraph. An in-depth explanation of these benefits and evidence they exist is [in this doc](https://docs.google.com/document/d/1bpyQWEkrFS3Uk0TQ3kXWJfR1ZPvWYKr020ufnm1TFsQ/edit).
### 2. Support and efficiently maintain our code host integrations and browser extensions

**Problem:** Sourcegraph browser extensions are highly valued by our users, but they lack a few key features users expect – like falling back to Sourcegraph.com – they have frequent customer-specific bugs, and they aren't easy to maintain across three browsers/release processes.

**Why we are focusing on this:** As more people use Sourcegraph Cloud as we index more repos, we want to update the browser extension so it has automatic fallback to Sourcegraph.com (in later Q2). We also want to keep the browser extension working cleanly without derailing our development velocity, since this is otherwise a constant issue that costs us time every month, so we need to focus on clean, easy ways to deploy the browser extensions.

### 3. Drive native integration adoption

**Problem:** We have native integrations for both Bitbucket server and GitLab, but not all customers using those code hosts use the native integration, or use it for all of their users.

**Why we are focusing on this:** We know that the more interactions with Sourcegraph, the higher WAU, value, and presence of Sourcegraph to our customers, which helps with retention and expansion.

## Roadmap

The Extensibility [roadmap](https://sourcegraph.productboard.com/feature-board/2689572-fy2022-roadmap-developer-insights) can be viewed in Productboard.
