# Product Management

This page contains information that is relevant for how to do well at your job as a product manager. For information that is relevant to the whole company, including all product managers, check the index at the [product home](../index.md) page.

## Product process

- [Planning](planning.md) - how we do planning and the artifacts we use to plan.
- [Pricing](pricing.md) - how we decide what tier a feature goes in/how much an add-on feature costs.
- [Tracking issues](../../engineering/tracking_issues.md) - how we keep track of planned and on-going work.
- [Prioritizing](prioritizing.md) - how we prioritize work, and how to get things prioritized.
- [Tracking user & stakeholder feedback](user_stakeholder_feedback.md) - sources of feedback and how we keep track of that feedback.
- [Responding to user feedback](responding_to_user_feedback.md) - how we respond to user feedback for the feedback channels the product team owns.
- [Feature rollout](rollout_process.md) - how we test, rollout and launch new features.
- [Learning](product_learning.md) - how we learn from what we shipped.
- [Feature deprecation](deprecation_process.md) - how we deprecate features when necessary.

### Keeping strategy up to date

Sourcegraph has a top-level [strategy page](../../company/strategy/index.md) that describes at a high level where our product is headed and why. Everyone contributes to this page, and it's important to be familiar with its contents. In addition to this shared content, each team has a set of non-overlapping sources of truth that they should review and update regularly:

#### OKR and roadmap tracking

We have a [high-level OKR and roadmap tracker](https://github.com/orgs/sourcegraph/projects/214/views/1) (internal only) in GitHub. Each week you should work with your team to update your status and plans. After updating, you should ensure it is reflected in the manually created slide decks which rely on this information:

Weekly (by Friday 19:00 UTC):

- The [OKR slide deck](https://docs.google.com/presentation/d/1DgY3k684Jn3diCe4GPPcrGt9iaD9-vyndiiJwEoELyE/edit?usp=sharing) which contains an easy to read version of the information in the tracker. This document contains only OKRs at the product/engineering level, not individual org OKRs, and is updated by Product Directors (based on the updates provided by product teams).

Monthly:

- The [PMM roadmap deck](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gf131fe1596_2_7) (internal only) deck which contains upcoming and recently launched important customer-facing features from the OKR and roadmap tracker. In the future we may transition updating this to PMM, but for now its important product managers are involved in ensuring it is up to date and correct.
- The [Key accounts deck](https://docs.google.com/presentation/d/18hw513mX3ssA9isQdGdnmrt5-BIN4TRMpjkSaodTEuw/edit#slide=id.gf03521df2b_0_0) (internal only) contains status information on key accounts. Christina and Kylie own making this update for the product team.

#### Per-team strategy pages

We also use [per-team strategy pages](../../company/strategy/index.md#per-team-strategy-pages) as a [narrative framework](https://www.mindtheproduct.com/the-importance-of-narrative/) for prioritization, to document trade-offs between goals, and to communicate strategy outwardly. Because this is a longer outlook, they tend to not change much each month but should be reviewed.

#### Product data

The last thing teams should review and update monthly are the product [data files](https://github.com/sourcegraph/handbook/blob/main/data/), in particular the [features.yml](https://github.com/sourcegraph/handbook/blob/main/data/features.yml) in case the feature has reached a new maturity, delivered new code host compatibility, or otherwise updated any information displayed on the automatically generated [product team and feature reference pages](../index.md##product-team-and-feature-matrices).

Part of the product data is a (internal-only) list of [what's supported](https://docs.google.com/spreadsheets/d/101JXaau2EPvi322AOFmNeoeuXSJqlruD8gBBsHl1fmI/edit#gid=33376279), which contains extended product information for our Sales and Support teams. This should also be manually reviewed and updated as feature capabilities evolve.

## Glossary

- Product priorities: An ordered list of problem statements or outcomes that product has evidence is important
- Roadmap: The tasks and timeline for when each will be worked on
- Backlog: The ordered list of items to be tackled after items on the roadmap are complete
- Department: A top-level organizational unit of people, such as Sales, Product or Marketing.
- Org: A mid-level organizational unit of people, such as Code Graph, Enablement, or Cloud. Note that an org does not necessarily represent a coherent product area that exists in the product, it's an internal team.
- Team: A well-defined product team that works to deliver features for one or more product areas.
- Product Area: A loosely defined collection of features or capabilities that may be worked on by one or more teams.

Launch tier levels (L1, L2, and L3) are also an important term to be aware of, and the definitions as well as process/source of truth are documented on the [marketing launch page](../../marketing/product-marketing/marketing_launch_tiers.md).

## Collaboration

Product Management collaborates with a lot of different groups. Beyond our shared [work as a team value](../../company/values.md#work-as-a-team), there are some teams where collaboration is especially important and where roles and responsibilities can be unclear. To help clarify this, we have documented high level practices around how we work together.

### Product Management & Marketing

Product Management and Marketing must work closely together to successfully create and launch products. Because of this, it's important to be clear on what the shared and unique responsibilities are within the working relationship.

TODO add link to source of this info

| Product Marketing is DRI                                                                                 | Product Management is DRI                                                        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Customer and market-facing                                                                               | Development and product-facing                                                   |
| Defining the roadmap                                                                                     | Providing important market context to the roadmap                                |
| Receives new product info and product updates from product management teams                              | Delivers new product info and product updates to product marketing team          |
| Responsible for aligning product packaging and messaging with market demands                             | Responsible for aligning product requirements with market demands                |
| Defines key value props and messaging of new and updated products to sales, marketing, and support teams | Delivers technical aspects of new and updated products to product marketing team |
| Closest allies are product management, marketing, and sales                                              | Closest allies are the development team, customer support, customer engineering, and product marketing                    |

Shared areas of ownership where both teams contribute are:

- [Pricing and tiering/packaging](./pricing.md)
- Market research, including personas, ideal customer profiles, etc.
- Competitive positioning and analysis
- [Go to market planning](./rollout_process.md)
- [Customer communications](#talking-to-customers-and-stakeholders)

Since we have the same goal of launching products that drive adoption and revenue, we don't experience a lot of conflict over the shared ownership. When we do, though, we use the [clean escalation](../../communication/conflicts.md#clean-escalation) process to get to the best decision.

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
