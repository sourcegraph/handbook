# Planning

Planning is a continuous negotiation between product and engineering. Our overall documentation for how we do planning and OKRs can be found on the [Product & Engineering planning](../../product-engineering/planning.md) page.

## How to price features

It's important to think about how your features will go to market, but [pricing features](pricing.md) is a complicated topic and has its own page.

## Product / eng team backlogs

You can find the backlogs for the product teams by visiting their [individual strategy pages](../../company/strategy/index.md#per-team-strategy-pages). Teams are using different tools and processes to plan and track their work such as Jira, Productboard, or GitHub issues.

## Planning artifacts

Planning requires several artifacts for communicating. This section clarifies how each artifact is used in the planning process. The [Product & Engineering planning](../../product-engineering/planning.md) page has full details on the artifacts that are produced during planning.

### Goals

[Goals](../../company/goals/index.md) align teams with the company's goals. They should be used to make prioritization [decisions](../../communication/decisions.md) and help to maintain team direction and focus.

### Strategy Pages

[The per-team strategy pages](../../company/strategy/index.md#per-team-strategy-pages) are a roadmap where we track and prioritize larger projects that we intend to finish in the next 3-12 months.

Engineering should feel empowered to bring up that they feel strongly about in conversations with product. [We want to push decisions down to people closest to those problems](../../communication/decisions.md#what-makes-an-effective-decision). It is product's responsibility to help give insight into customer pains and feedback, strategic priorities, and to ensure consistency across the product.

The roadmap/strategy is NOT:

- a comprehensive backlog of everything we want to do
- a list of every bug or customer issue in our issue tracker
- permanent or unchanging

The roadmap/strategy is:

- a prioritized list of the most important things we intend to do
- an indicator of relative priority to teams, customers, and users
- a place for discussions about priority
- updated monthly
- where engineering and product negotiate the next most important thing to work on

Teams should work on what their strategy page says they will work on next, and not just leave it behind to work on other things. If there is a desire to work on something else, the change should be discussed and merged to the page.

We ask that teams leverage the [Strategy page template](https://github.com/sourcegraph/handbook/blob/main/page_templates/strategy_template.md) when creating and updating content.

### RFCs

[RFCs](../../communication/rfcs/index.md) are documents used to outline and solicit feedback on projects. They provide context around a problem that needs to be solved and are a medium for creating specifications for a project.

Generally, items in the roadmap will be big enough they require writing an RFC, though this will not always be the case. When a solution is clear, a well-detailed issue is sufficient to communicate intent, motivation, and solution.

### [Tracking issues](../../engineering/tracking_issues.md)

See [tracking issues](../../engineering/tracking_issues.md)

### [Prioritizing](prioritizing.md)

See [prioritizing](prioritizing.md).

### Experimentation and improvements to planning

#### Using the AARRR Framework to facilitate feature lifecycle planning

Features are no different than products in their need to acquire visitors, activate users, retain those users, expand via referral and other viral means and generate revenue for the business.

To improve planning so that teams consider these stages as part of feature development, some product teams are experimenting with Dave McClure's pirate framework. This framework condenses these phases into an easy to remember (if not comical sounding) mnemonic:

- Acquisition - grow the number of users using the feature
- Activation - improve the number of users who see value
- Retention - ensure activated users come back to the feature
- Referral - ensure your users invite other users
- Revenue - understand how the feature contributes back to the business.

Learn more about the framework with this [introduction](https://medium.com/@ginoarendsz/an-introduction-to-the-aarrr-framework-b8570d6ae0d2) or Dave McClure's [slide deck on the topic](https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version).

To leverage the framework, teams are incorporating the metrics in [product documents](https://docs.google.com/document/d/1-TIKwwQd2eQEH0PCuBhOitLcm31Pdx5NmCShVj6JqyU/edit#bookmark=id.gp24i8rlesx), [user stories](https://miro.com/app/board/o9J_ltNMJnI=/) and in reporting such as [Amplitude notebooks](https://analytics.amplitude.com/sourcegraph/notebook/h7td539?source=sidebar).
