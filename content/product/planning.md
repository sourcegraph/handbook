# Planning

Planning is a continuous process of negotiation between product and engineering. Teams should review the project roadmap weekly with the [Product Manager](roles.md#product-manager) during their team meetings, and update it regularly as new information comes in. The product manager should also review the plans for all projects in the next release for overall coherency. This ensures that projects can work on the schedules that make the most sense for them (subject to the constraint of needing to ship some kind of milestone monthly). A particularly long-term project can have many months of visibility into requirements and plans, and shorter or more experimental projects can be planned with shorter time horizons.

## Planning artifacts

Planning requires several artifacts for communicating. This section clarifies how each artifact is used in the planning process.

### OKRs

[OKRs](../../company/okrs/index.md) align teams with the company's goals for the quarter. They should be used to make prioritization decisions and help to maintain team direction and focus.

### Project roadmap

[The project roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit?usp=sharing) is where we track and prioritize larger projects that we intend to finish in the next 3-6 months.

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

### Tracking issues

Tracking issues are GitHub issues that encapsulate the planned work for an iteration. Tracking issues are a great place to keep track of the smaller issues and bugs that come up and the team intends to work on. See [Prioritizing bug fixes and small tasks](#prioritizing-bug-fixes-and-small-tasks) for guidance on triaging incoming requests.

Teams should aggressively prioritize work for the iteration so that expectations can be set accordingly with users waiting for features or bug fixes. If work is carried over for multiple iterations it is an indication that the priority of that item is not actually as high as believed, or that the team is trying to do too many things in an iteration. Engineering can lean on Product for help with prioritization.

## Prioritizing bug fixes and small tasks

Bugs and issues from customers come up regularly and need to be prioritized. Many of these tasks are quick (< 1 day) and should be prioritized within the iteration. Larger tasks should be added to the project roadmap. Customer issues should include context about how important that customer is, and how important this particular issue is to the customer so that teams can effectively prioritize. The goal is not to have the engineering teams jump at every customer request, but to thoughtfully triage them when compared to the rest of the work they have slated. If there is any ambiguity in importance, the PM can be consulted to help make prioritization decisions.

Each team may decide how they would like to keep track of the backlog of issues, whether that is in a kanban board, google doc, etc. Similarly, teams can decide how they would like to allocate resources to this, whether it is having one person working down the backlog each week, or assigning a set of issues to be accomplished within an iteration.
