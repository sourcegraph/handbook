# Product Management

This page contains information that is relevant for how to do well at your job as a product manager. For information that is relevant to the whole company, including all product managers, check the index at the [product home](../index.md) page.

## Product process

- [Planning](planning.md) - how we do planning and the artifacts we use to plan.
- [Pricing](pricing.md) - how we decide what tier a feature goes in/how much an add-on feature costs.
- [Tracking issues](../../engineering/tracking_issues.md) - how we keep track of planned and on-going work.
- [Prioritizing](prioritizing.md) - how we prioritize work, and how to get things prioritized.
- [Tracking user feedback](user_feedback.md) - sources of feedback and how we keep track of that feedback.
- [Responding to user feedback](responding_to_user_feedback.md) - how we respond to user feedback for the feedback channels the product team owns.
- [Feature rollout](rollout_process.md) - how we test, rollout and launch new features.
- [Learning](product_learning.md) - how we learn from what we shipped.
- [Feature deprecation](deprecation_process.md) - how we deprecate features when necessary.

### Keeping strategy up to date

Sourcegraph has a top-level [strategy page](../../company/strategy/index.md) that describes at a high level where our product is headed and why. Everyone contributes to this page, and it's important to be familiar with its contents. In addition to this shared content, each team has a set of non-overlapping sources of truth that they should review and update monthly:

#### OKR and roadmap tracking

We have a [high-level OKR and roadmap tracker](https://github.com/orgs/sourcegraph/projects/214/views/1) (internal only) in GitHub. Each month you should work with your team to update your status and plans. After updating, you should ensure it is reflected in the manually created slide decks which rely on this information:

- The [OKR slide deck](https://docs.google.com/presentation/d/1DgY3k684Jn3diCe4GPPcrGt9iaD9-vyndiiJwEoELyE/edit?usp=sharing) which contains an easy to read version of the information in the tracker.
- The [PMM roadmap deck](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gf131fe1596_2_7) (internal only) deck which contains upcoming and recently launched important customer-facing features from the OKR and roadmap tracker.
- The [Key accounts deck](https://docs.google.com/presentation/d/18hw513mX3ssA9isQdGdnmrt5-BIN4TRMpjkSaodTEuw/edit#slide=id.gf03521df2b_0_0) (internal only) contains status information on key accounts.

#### Per-area strategy pages

We also use [per-area strategy pages](../../company/strategy/index.md#per-area-strategy-pages) as a [narrative framework](https://www.mindtheproduct.com/the-importance-of-narrative/) for prioritization, to document trade-offs between goals, and to communicate strategy outwardly. Because this is a longer outlook, they tend to not change much each month but should be reviewed.

#### Product data

The last thing teams should review and update monthly are the product [data files](https://github.com/sourcegraph/handbook/blob/main/data/), in particular the [features.yml](https://github.com/sourcegraph/handbook/blob/main/data/features.yml) in case the feature has reached a new maturity, delivered new code host compatibility, or otherwise updated any information displayed on the automatically generated [feature reference pages](../index.md#feature-reference).

Part of the product data is a (internal-only) list of [what's supported](https://docs.google.com/spreadsheets/d/101JXaau2EPvi322AOFmNeoeuXSJqlruD8gBBsHl1fmI/edit#gid=33376279), which contains extended product information for our Sales and Support teams. This should also be manually reviewed and updated as feature capabilities evolve.

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

Unless the change is extremely wide in impact (a large about site update, a major press outlet, or a major pricing change), you do not need to continue blocking on marketing or product director review after 3 full business days have passed from the review request.

### Talking about customers publicly

When talking about customers publicly, we can use the process for [linking to customer or prospect names in public places](../../bizops/customer_ops_tools.md#linking-to-customer-or-prospect-names-in-public-places) to do this in an anonymous (to non-Sourcegraph users) way that still links everything together for us.

## Release early, release often

Each project, no matter how long-running, needs to plan to ship _something_ in each release. The "something" depends on the project. We strongly prefer for it to be a minimal viable feature that is enabled by default. The next best thing is to ship something that is feature-flagged off by default. When possible, larger features should be merged mid-cycle to solicit feedback from the team and customers before the release is cut.

The reason for this is to avoid going for too long without customer feedback (from customers trying it) or even technical/product feedback (from performing the diligent work of polishing it to be ready to release). Lacking these critical checks means we will end up building something that doesn't solve people's problems or that is over-built.

When we have relaxed this in the past, the results have been bad and the overwhelming feedback from retrospectives has been to release regularly.

## Tools/Templates

- [Strategy page template](https://github.com/sourcegraph/handbook/blob/main/page_templates/strategy_template.md) - a template for a [product strategy page](../../company/strategy/index.md), covering vision, strategy and short term direction.
- [Figma](https://www.figma.com/files/team/438792081639669302/Sourcegraph)
- [Productboard](https://sourcegraph.productboard.com/)
- [Amplitude](../../bizops/amplitude.md)
- [Release blog post template](https://github.com/sourcegraph/about/blob/main/handbook/product/product_management/release_blog_post_template.md)
- [Running remote hackathons](../../company/remote/remote_hackathons.md#facilitating-a-remote-hackathon)

## References

- [Onboarding to the product team](../onboarding/index.md)
- [Sourcegraph messaging](../../marketing/messaging.md)
- [Working with BizOps](../../bizops/index.md#how-to-work-with-us)
- [Recommended reading](../onboarding/recommended_reading.md)
