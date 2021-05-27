# Planning

Planning is a continuous process of negotiation between product and engineering. Teams should review the project roadmap weekly with the [Product Manager](./roles/index.md#product-manager) during their team meetings, and update it regularly as new information comes in. The product manager should also review the plans for all projects in the next release for overall coherency. This ensures that projects can work on the schedules that make the most sense for them (subject to the constraint of needing to ship some kind of milestone monthly). A particularly long-term project can have many months of visibility into requirements and plans, and shorter or more experimental projects can be planned with shorter time horizons.

## Product / eng team backlogs

Teams track the work they are doing in [GitHub Projects](https://github.com/orgs/sourcegraph/projects). Here are the direct links for each team:

- Global code graph
   - Code intelligence
   - [Batch changes](https://github.com/orgs/sourcegraph/projects/119): If you would like a team to prioritize an issue, please add it to the "Needs prioritization" column in this board.
   - Search core backend
      - [Backlog](https://github.com/orgs/sourcegraph/projects/168)
      - [Support](https://github.com/orgs/sourcegraph/projects/166)
   - Search product
      - The Search team creates a new project board for each iteration. It is named like: "Search product :: \<date> iteration"
      - [Support](https://github.com/orgs/sourcegraph/projects/165)
      - [Design refresh](https://github.com/orgs/sourcegraph/projects/159)
      - [Search contexts](https://github.com/orgs/sourcegraph/projects/113)
      - [Standalone issues backlog](https://github.com/orgs/sourcegraph/projects/99)
      - [Streaming search](https://github.com/orgs/sourcegraph/projects/120)
      - [Graphqlbackeng refactor](https://github.com/orgs/sourcegraph/projects/172)
      - [Exhaustive](https://github.com/orgs/sourcegraph/projects/172)
      - [Playground](https://github.com/orgs/sourcegraph/projects/173)
      - [Code monitoring](https://github.com/orgs/sourcegraph/projects/121)
- Developer insights
   - Code insights
      - [Backend](https://github.com/orgs/sourcegraph/projects/122)
      - [Current work](https://github.com/orgs/sourcegraph/projects/118)
   - Front end platform
   - Extensibility
      - [Standalone issues backlog](https://github.com/orgs/sourcegraph/projects/116)
      - [Current iteration](https://github.com/orgs/sourcegraph/projects/118)
- Platform and infrastructure
   - Security
      - [Iterations](https://github.com/orgs/sourcegraph/projects/130)
      - [Transparently and openly communicate a security positive stance and approach](https://github.com/orgs/sourcegraph/projects/89)
      - [Secure Cloud resources](https://github.com/orgs/sourcegraph/projects/88)
      - [Visibility into our exposures](https://github.com/orgs/sourcegraph/projects/88)
   - Core application
      - [Production testing of all authorization models](https://github.com/orgs/sourcegraph/projects/164)
      - [Retro actions](https://github.com/orgs/sourcegraph/projects/162)
      - [Support](https://github.com/orgs/sourcegraph/projects/153)
      - [Planning board](https://github.com/orgs/sourcegraph/projects/148)
   - Distribution

## Planning artifacts

Planning requires several artifacts for communicating. This section clarifies how each artifact is used in the planning process.

### Goals

[Goals](../company/goals/index.md) align teams with the company's goals. They should be used to make prioritization decisions and help to maintain team direction and focus.

### Roadmap

[The roadmap](roadmap.md) is where we track and prioritize larger projects that we intend to finish in the next 3-6 months.

Engineering should feel empowered to add items to the roadmap that they feel strongly about, which will start conversations with product. We want to push decisions down to people closest to those problems. It is product's responsibility to help give insight into customer pains and feedback, strategic priorities, and to ensure consistency across the product.

The project roadmap is NOT:

- a comprehensive backlog of everything we want to do
- a list of every bug or customer issue in our issue tracker
- permanent or mandated

The project roadmap is:

- a prioritized list of the most important things we intend to do
- an indicator of relative priority to teams, customers, and users
- a place for discussions about priority
- where engineering and product negotiate the next most important thing to work on

Teams should work on the next thing at the top of the roadmap and should not jump around. If there is a desire to work on something lower on the roadmap, that should be elevated during team meetings and the chnage in priority should be discussed. That item should be moved in the roadmap based on the outcome of the discussion.

### RFCs

[RFCs](../communication/rfcs/index.md) are documents used to outline and solicit feedback on projects. They provide context around a problem that needs to be solved and are a medium for creating specifications for a project.

Generally, items in the roadmap will be big enough they require writing an RFC, though this will not always be the case. When a solution is clear, a well-detailed issue is sufficient to communicate intent, motivation, and solution.

### [Tracking issues](../engineering/tracking_issues.md)

See [tracking issues](../engineering/tracking_issues.md)

### [Delivery plans](delivery_plans.md)

See [delivery plans](delivery_plans.md).

### [Prioritizing](prioritizing.md)

See [prioritizing](prioritizing.md).
