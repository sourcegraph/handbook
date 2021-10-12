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

### Direction page updates

We use [direction pages](../../direction/index.md#per-area-direction-pages) to communicate where each of our product teams is headed, for the areas of the product that they work on. Newly created teams should begin documenting the scope of their team as well as their mission, vision, and more by creating one of these pages as part of the process of forming.

All in-place product engineering teams should have their own direction page, and should update it on a monthly cadence (at the same time the [PMM roadmap](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gf131fe1596_2_7) (internal only) is updated) by proposing a new pull request to update their content. Everyone on the team should be invited to contribute, and the update should be shared with important stakeholders. This helps us keep everyone aligned, and ensures we have a single source of truth for our product directions. The specific day of the month that the team updates the doc is up to the team internally to decide, the important part is that it is never more than a month out of date.

## Glossary

- Product priorities: An ordered list of problem statements or outcomes that product has evidence is important
- Roadmap: The tasks and timeline for when each will be worked on
- Backlog: The ordered list of items to be tackled after items on the roadmap are complete
- Department: A top-level organizational unit of people, such as Sales, Product or Marketing.
- Org: A mid-level organizational unit of people, such as Code Graph, Enablement, or Cloud. Note that an org does not necessarily represent a coherent product area that exists in the product, it's an internal team.

Launch tier levels (L1, L2, and L3) are also an important term to be aware of, and the definitions as well as process/source of truth are documented on the [marketing launch page](../../marketing/product-marketing/marketing_launch_tiers.md).

## Communications

### Feature roll-outs

Communications around feature roll-out are especially important, and are documented on[the rollout process](./rollout_process.md#communications) page.

### Talking to customers and stakeholders

In general, product team members are empowered to communicate directly with customers and stakeholders. Sometimes it can be helpful to have someone review your communication before sending it, especially if it is going to a wide or unfamiliar audience. If you want, the Marketing and PR teams are available to help any time: simply ask in #marketing and someone will be happy to review your communication.

There are just a few places where a review is required; these should include your product director and someone from the marketing team:

- Release posts/blog posts (review process already includes this, so nothing special to be done here)
- Social media using the official accounts, including YouTube
- Public presentations/events/speaking engagements
- [about.sourcegraph.com](https://about.sourcegraph.com) site updates
- Updates on pricing/packaging changes
- Updates on feature deprecation
- Speaking to press

### Talking about customers publicly

When talking about customers publicly, we can use the process for [linking to customer or prospect names in public places](../../bizops/customer_ops_tools.md#linking-to-customer-or-prospect-names-in-public-places) to do this in an anonymous (to non-Sourcegraph users) way that still links everything together for us.

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
- [Amplitude](../../bizops/amplitude.md)
- [Release blog post template](https://github.com/sourcegraph/about/blob/main/handbook/product/product_management/release_blog_post_template.md)

## References

- [Onboarding to the product team](../onboarding/index.md)
- [Sourcegraph messaging](../../marketing/messaging.md)
- [Product learnings](product_learning.md)
- [Working with BizOps](../../bizops/index.md#how-to-work-with-us)
- [Recommended reading](../onboarding/recommended_reading.md)
