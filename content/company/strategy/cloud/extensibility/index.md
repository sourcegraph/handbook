# Extensibility Team Goals and Roadmap

The Extensibility team focuses on high impact projects aligned with the company's OKRs.

As Sourcegraph continues to grow and the team is able to bring on a dedicated product manager, designer, and additional engineers, the team's roadmap will adopt a more traditional product development trajectory.

## Goals for FY22

See also our [completed goals](../../../../engineering/cloud/extensibility/goals_completed.md).

### 1. Make Sourcegraph extensions an active ecosystem

**Problem:** Sourcegraph extensions won't grow or provide nearly as much value if Sourcegraph builds and maintains the only extensions. (In fact, at that point, we're sometimes just costing ourselves in the documentation + maintenance of an extensions platform when we might as well build first-class features directly).

We want – and our users want – our users to build custom extensions, but there are a number of blockers preventing this. These include documentation issues, the extension registry's appearance sending mixed or incorrect messages about what extensions are and how actively they're maintained, the ability of a user to use many Sourcegraph extensions at once, and validating the impact of a the third party partnership/developer model for major third-party extensions.

**Why we are focusing on this:** Extensions can provide sales, retention, differentiation, delight, and "free" functionality to Sourcegraph. An in-depth explanation of these benefits and evidence they exist is [in this doc](https://docs.google.com/document/d/1bpyQWEkrFS3Uk0TQ3kXWJfR1ZPvWYKr020ufnm1TFsQ/edit).

**How we will measure success:** We track a few key metrics to measure success in our [Sourcegraph Extensions KPIs Looker dashboard](https://sourcegraph.looker.com/dashboards/165). These include the number of customers enabling extensions, the individual user enablement counts of specific extensions at each customer, and the saturation of extensions at each customer (how many extensions enablers / how many total users). Related, we have an [extensions-focused FY22Q2 OKR](https://docs.google.com/spreadsheets/d/1pNXVev2JtYC94lB1NIfsc8OqyYnnSFn7p5PYFcniblE/edit#gid=1673112721) for increasing the number of customer instances that use extensions.

### 2. Support and efficiently maintain our code host integrations and browser extensions

**Problem:** Sourcegraph browser extensions are highly valued by our users, but they lack a few key features users expect – like falling back to Sourcegraph.com – they have frequent customer-specific bugs, and they aren't easy to maintain across three browsers/release processes.

**Why we are focusing on this:** As more people use Sourcegraph Cloud as we index more repos, we want to update the browser extension so it has automatic fallback to Sourcegraph.com (in later Q2). We also want to keep the browser extension working cleanly without derailing our development velocity, since this is otherwise a constant issue that costs us time every month, so we need to focus on clean, easy ways to deploy the browser extensions.

**How we will measure success**: We will quantitatively track the time to release of new versions of our browser extension, as well as monitor usage, uninstalls, and churn rates on our [Code Host Integrations KPIs Looker dashboard](https://sourcegraph.looker.com/dashboards/144).

### 3. Drive native integration adoption

**Problem:** We have native integrations for both Bitbucket server and GitLab, but not all customers using those code hosts use the native integration, or use it for all of their users.

**Why we are focusing on this:** We know that the more interactions with Sourcegraph, the higher WAU, value, and presence of Sourcegraph to our customers, which helps with retention and expansion.

**How we will measure success:** We have a [Code Host Integrations KPIs Looker dashboard](https://sourcegraph.looker.com/dashboards/144) where we track the number of customers using code host integrations and the saturation at each customer (how many users use it / total customer users).

## Roadmap

### FY22

The below items are the team's current focus areas in order of delivery quarter. The detailed Extensibility [roadmap](https://sourcegraph.productboard.com/feature-board/2689572-fy2022-roadmap-developer-insights), including progress status, can be viewed in Productboard. (There is also an [Extensibility-team-specific gantt chart roadmap](https://sourcegraph.productboard.com/roadmap/2748745-extensibility-features-timeline-roadmap) view with the same information.)

| Feature                                                                     | Goal area               | Delivery quarter (FY22) |
| --------------------------------------------------------------------------- | ----------------------- | ----------------------- |
| Complete extensions marketplace redesign                                    | Extensions ecosystem    | Q2                      |
| Sourcegraph extension partnership (private)                                 | Extensions ecosystem    | Q2                      |
| Troubleshooting documentation                                               | Extensions ecosystem    | Q2                      |
| Browser Extension release process is replicable for all 3 browsers          | Integration maintenance | Q2                      |
| Extensions demo videos                                                      | Extensions ecosystem    | Q2                      |
| Browser Extension handles both Sourcegraph.com and a private instance       | Integration maintenance | Q3                      |
| All code host integrations natively support Bitbucket Cloud and Data Center | Integration maintenance | Q4                      |
| Identify barriers to integration adoption                                   | Integration adoption    | Q4                      |
