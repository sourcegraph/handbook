# Product Management

This page contains information that is relevant for how to do well at your job as a product manager. For information that is relevant to the whole company, including all product managers, check the index at the [product home](../index.md) page.

## References

- [Onboarding to the product team](../onboarding/index.md)
- The [Sourcegraph workflow](../../workflow/index.md) describes how our product fits into the developer workflow.
- Product documents (PDs)
- [Product learnings](product_learning.md)
- [Working with BizOps](../../ops/bizops/index.md#how-to-work-with-us)
- [Recommended reading](../onboarding/recommended_reading.md)

## Product process

### Product planning

- [Planning](planning.md) - how we do planning and the artifacts we use to plan.
- [Delivery plans](delivery_plans.md) - how we validate the things we build solve user problems.
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

## Monthly release templates

- [Release blog post template](./release_blog_post_template.md)

### Tools

- [Figma](https://www.figma.com/files/team/438792081639669302/Sourcegraph)
- [Productboard](https://sourcegraph.productboard.com/)
- [Amplitude](../../ops/bizops/amplitude.md)

## Release early, release often

Each project, no matter how long-running, needs to plan to ship _something_ in each release. The "something" depends on the project. We strongly prefer for it to be a minimal viable feature that is enabled by default. The next best thing is to ship something that is feature-flagged off by default. When possible, larger features should be merged mid-cycle to solicit feedback from the team and customers before the release is cut.

The reason for this is to avoid going for too long without customer feedback (from customers trying it) or even technical/product feedback (from performing the diligent work of polishing it to be ready to release). Lacking these critical checks means we will end up building something that doesn't solve people's problems or that is over-built.

When we have relaxed this in the past, the results have been bad and the overwhelming feedback from retrospectives has been to release regularly.
