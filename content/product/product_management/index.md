# Product Management

This page contains information that is relevant for how to do well at your job as a product manager. For information that is relevant to the whole company, including all product managers, check the index at the [product home](../index.md) page.

## Product process

### Product planning

- [Planning](planning.md) - how we do planning and the artifacts we use to plan.
- [Tracking issues](../../engineering/tracking_issues.md) - how we keep track of planned and on-going work.
- [Prioritizing](prioritizing.md) - how we prioritize work, and how to get things prioritized.
- [Tracking user feedback](user_feedback.md) - sources of feedback and how we keep track of that feedback.
- [Responding to user feedback](responding_to_user_feedback.md) - how we respond to user feedback for the feedback channels the product team owns.
- [Feature rollout](rollout_process.md) - how we test, rollout and launch new features.
- [Feature deprecation](deprecation_process.md) - how we deprecate features when necessary.

### Definitions

<dl>
    <dt>Product priorities</dt>
    <dd>An ordered list of problem statements or outcomes that product has evidence is important</dt>
    <dt>Roadmap</dt>
    <dd>The tasks and timeline for when each will be worked on</dt>
    <dt>Backlog</dt>
    <dd>The ordered list of items to be tackled after items on the roadmap are complete.</dt>
</dl>

## Release early, release often

Each project, no matter how long-running, needs to plan to ship _something_ in each release. The "something" depends on the project. We strongly prefer for it to be a minimal viable feature that is enabled by default. The next best thing is to ship something that is feature-flagged off by default. When possible, larger features should be merged mid-cycle to solicit feedback from the team and customers before the release is cut.

The reason for this is to avoid going for too long without customer feedback (from customers trying it) or even technical/product feedback (from performing the diligent work of polishing it to be ready to release). Lacking these critical checks means we will end up building something that doesn't solve people's problems or that is over-built.

When we have relaxed this in the past, the results have been bad and the overwhelming feedback from retrospectives has been to release regularly.

## Sourcegraph’s design principles

Sourcegraph’s product design principles are how we express our shared vision and values while designing for our product.

We use our principles to:

- To help our team make **consistent decisions**.
- To **provide constraints** that lead to better outcomes.
- To **resolve ambiguity** when faced with options that provide value among different dimensions.
- To build a **shared vision** across our design and product team.

Our principles were [co-created](https://docs.google.com/document/d/1zRbtZR68ZITYypSAJJ63Ir_fFPxJfTtidJmsrxUXW7o/edit#) with members of the design, product, and frontend application teams, and will benefit:

- Designers.
- Product managers.
- Engineers.
- Marketing.
- And other stakeholders involved in the design process.

### Our principles

- **A personal tool within a larger workflow**
  Sourcegraph is a powerful yet personal tool that exists within a larger workflow. Design for familiar patterns with thoughtful defaults, while embracing personalization and adaptability.

- **Made for everyone**
  Our purpose is to make it so everyone can code. This demands we make Sourcegraph accessible and useful for all developers through universal, inclusive design.

- **Gracefully manage complexity**
  Sourcegraph supports complex product requirements, but also empowers users to manage this complexity for their individual needs.

- **Code as content**
  More time is spent reading than writing code. Elevate the craft of code as content.

- **Trust is earned**
  Sourcegraph is the source of truth, but this trust is earned. Accuracy, transparency, recency, and honesty together work to uphold this source of truth.

- **Create momentum**
  Help developers create and maintain flow. To do this, Sourcegraph must be fast in every way. We design purposefully to help users iterate and build momentum.

## Tools/Templates

- [Direction page template](https://github.com/sourcegraph/about/blob/main/handbook/product/product_management/direction_template.md) - a template for a product direction page, covering vision, strategy and short term direction ([example](direction_template.md))
- [Figma](https://www.figma.com/files/team/438792081639669302/Sourcegraph)
- [Productboard](https://sourcegraph.productboard.com/)
- [Amplitude](../../ops/bizops/amplitude.md)
- [Release blog post template](./release_blog_post_template.md)

## References

- [Onboarding to the product team](../onboarding/index.md)
- [Sourcegraph messaging](../../marketing/messaging/index.md)
- [Product learnings](product_learning.md)
- [Working with BizOps](../../ops/bizops/index.md#how-to-work-with-us)
- [Recommended reading](../onboarding/recommended_reading.md)
