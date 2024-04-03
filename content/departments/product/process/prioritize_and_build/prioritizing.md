# Prioritizing

If you are looking for information on how to give feedback to the product team for something you need to be prioritized, see our instructions for [surfacing product feedback](../feedback/surfacing_product_requests.md). Otherwise, this page describes different ways Product Managers think about prioritization for their areas.

## Personas

We use personas to understand our users and what they need as we prioritize our work. More can be read on the [personas page](../../../marketing/process/personas.md) in the marketing handbook, which also links to a presentation with the actual personas in it.

## Inputs to prioritization

There are several sources that product managers look at when deciding what's important to prioritize next.

- [Your own strategy](../../../../strategy-goals/strategy/index.md#per-team-strategy-pages) and where you are trying to go
- [The overall company strategy](../../../../strategy-goals/strategy/index.md) and how you fit in
- [User & stakeholder feedback](../feedback/user_stakeholder_feedback.md) to realize our value [dev-love](../../../../company-info-and-process/values/index.md#dev-love)

## Saying "no"

We receive tons of feature requests and bug reports, more than we can handle. This means we must frequently say "no" or prioritize things less urgently than some people would like. Our job is to find the most important things to work on.

## How do I get feedback from the company?

### RFCs

[RFCs](../../../../company-info-and-process/communication/rfcs/index.md) are documents used to outline and solicit feedback on projects. They provide context around a problem that needs to be solved and are a medium for creating specifications for a project.

Generally, items in the roadmap will be big enough they require writing an RFC, though this will not always be the case. When a solution is clear, a well-detailed issue is sufficient to communicate intent, motivation, and solution.

## Engineering prototyping

Sometimes there is a general product area that your team owns that the CEO/CTO/Product Manager/CE/Sales seem interested in, and a developer is passionate/inspired/excited about it and wants to work on prototyping in that area. The developer has total freedom for a couple months to work on it part-time as long as they make progress in prototyping with the Sales and CE teams and are showing progress to customers regularly. The sole test will be, if we ask the Sales/CE teams "is $DEVELOPER's prototype/project drawing interest in customer calls and is $DEVELOPER iterating on it well in response to feedback?"

## Revenue considerations

Revenue is important to us as a company because, without revenue, we don't have a stable business. Whenever you consider introducing a new feature, you should think through how this feature will help us grow. For example:

- What is the story that ties my work to future revenue?
  - What is the revenue opportunity? (more is better)
  - How long will it take to realize that revenue? (sooner is better)
- Who is the likely buyer of this feature, and how well does it correlate with our ideal customer profile?
- How does this feature fit into our pricing model? Are parts of it free and paid and, if so, what is the upgrade path?
- Are there other things we should consider doing that would have a bigger impact on the business instead?
- How will the feature convert visitors to users, and what is those user's path to generating revenue?
- How will you track this funnel?

All of this is not to say that we don't prioritize features that drive monthly active users, or that we are myopically focused on driving revenue up. It's just that we are stewards of the business, and we want to build a long-term sustainable business and this requires making investments, experiments, and bets that we think will drive future revenue. Not all bets and experiments will be successful, and that is ok! What is important is that:

1. We continue making bets like these
1. These bets are prioritized and staffed proportionally to the opportunity (they shouldn't disproportionally take resources away from other things that are more likely/guaranteed to yield revenue on shorter time horizons).

## Prioritizing bug fixes and small tasks

Bugs and issues from customers come up regularly and need to be prioritized. Many of these tasks are quick (< 1 day) and should be prioritized within the iteration. Larger tasks should be added to the project roadmap. Customer issues should include context about how important that customer is, and how important this particular issue is to the customer so that teams can effectively prioritize. The goal is not to have the engineering teams jump at every customer request, but to thoughtfully triage them when compared to the rest of the work they have slated. If there is any ambiguity in importance, the PM can be consulted to help make prioritization decisions.

Each team may decide how they would like to keep track of the backlog of issues, whether that is in a kanban board, google doc, etc. Similarly, teams can decide how they would like to allocate resources to this, whether it is having one person working down the backlog each week, or assigning a set of issues to be accomplished within an iteration.

## Prioritizing requests that impact the product roadmap

Sometimes, we need to prioritize changes to our product on short notice due to new information we have. This change could be to benefit [customers](../../../sales/index.md#customer) or [prospects](../../../sales/index.md#prospect), or could be a strategic initiative.

If the requested change is large enough that it would impact the planned [product roadmap](../../index.md#roadmap) of one or several [engineering teams](../../../engineering/dev/index.md#teams), we should handle its prioritization as follows:

1. The product manager should contact all relevant [engineering managers](../../../engineering/dev/roles/index.md#engineering_manager), providing the following information in the form of an [RFC](../../../../company-info-and-process/communication/rfcs/index.md):
   - Description of the desired functionality.
   - Context on why is this important: the customers or prospects that would benefit from the change, the size of the opportunity, and the risks of not doing this work.
   - Desired timeline for the change: when do we need this by?
   - Desired timeline for the evaluation: how soon do we need to know whether we can deliver this?
1. Engineering managers own providing a timely answer, either directly or by delegating evaluation of the request to a [software engineer](../../../engineering/dev/roles/index.md#software-engineer) on their project team. If cross-team coordination is needed to evaluate the request, engineering managers own facilitating this coordination. The evaluation should be provided in the form of an [RFC](../../../../company-info-and-process/communication/rfcs/index.md), or added to the original RFC provided by the product manager, and should include:
   - An estimation of the amount of work needed to implement the request.
   - If the amount of work needed spans more than one milestone, a proposed breakdown of incremental changes (for example, shipping a first functional but slow implementation in milestone N then working on performance in milestone N+1).
   - An overview of work that would get deprioritized if we chose to prioritize the request.
   - Any concerns raised by the request: stability, scalability, cost, performance.
   - A recommendation on whether to move forward with prioritizing the request:
     - OK to move forward.
     - Recommend not moving forward: this may be because of outstanding concerns, or because prioritizing the request would lead to deprioritizing important engineering goals.
1. Based on the evaluations provided by engineering manager, the product manager owns:
   - Making a final decision on whether to prioritize the request.
   - Communicating this decision to the engineering and sales/CE teams.
1. Engineering managers own updating the project roadmap and iteration plans to reflect the product manager's decision.

## Prioritizing things that impact current iteration plans

Sometimes, we need to prioritize changes to our product on _very_ short notice due to new information we have. Generally, short-term re-prioritization should not significantly change any in-progress iteration (milestone or sprint), but should provide the engineering team with sufficient data to alter their _upcoming_ iteration. Interrupting the current iteration can negatively impact engineering velocity and morale, can delay planned feature delivery, and contribute to engineer context switch fatigue and burnout.

However, extenuating circumstances exist that would encourage us to break this rule (all subject to interpretation):

- A bug that is significantly impacting Sourcegraph Cloud.
- A bug that is significantly impacting a managed or on-premises instance.
- A bug that is significantly impacting a prospective customer.
- Critical, time-sensitive opportunities.

Important questions to ask while re-prioritizing and proposing solutions for critical, short-term work:

- Is an instance totally broken?
- What is the impact to the business?
- What happens if we don't do this?
- What is the real (vs. perceived) urgency?
- How does this impact the work that is planned?
- Is this thing more important than what is planned?
- Is this a hack? Will this be a sustainable solution?
- Can we do it "right"? How long would that take?
- Are we already planning on solving this? How long until we work on this? Is that timeline acceptable?

## How to reference customer names in public tickets

Accounts (customer, prospect and lead) names are private, and should not be included in public GitHub tickets. See our process for [referencing private customer names in public places](../../../data-analytics/documentation.md#how-to).

## Experimentation and improvements to prioritization

### Using the AARRR Framework to facilitate feature lifecycle-based prioritization

Features are no different than products in their need to acquire visitors, activate users, retain those users, expand via referral and other viral means and generate revenue for the business.

To improve prioritization so that teams consider these stages as part of feature development, some product teams are experimenting with Dave McClure's pirate framework. This framework condenses these phases into an easy to remember (if not comical sounding) mnemonic:

- **Acquisition** - grow the number of users using the feature
- **Activation** - improve the number of users who see value
- **Retention** - ensure activated users come back to the feature
- **Referral** - ensure your users invite other users
- **Revenue** - understand how the feature contributes back to the business.

Learn more about the framework with this [introduction](https://medium.com/@ginoarendsz/an-introduction-to-the-aarrr-framework-b8570d6ae0d2) or Dave McClure's [slide deck on the topic](https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version).

To leverage the framework, teams are incorporating the metrics in [product documents](https://docs.google.com/document/d/1-TIKwwQd2eQEH0PCuBhOitLcm31Pdx5NmCShVj6JqyU/edit#bookmark=id.gp24i8rlesx), [user stories](https://miro.com/app/board/o9J_ltNMJnI=/) and in reporting such as [Amplitude notebooks](https://analytics.amplitude.com/sourcegraph/notebook/h7td539?source=sidebar).
