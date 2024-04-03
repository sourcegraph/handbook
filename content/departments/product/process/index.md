# Product Management Process

This page contains information that is relevant for how to do well at your job as a product manager. For information that is relevant to the whole company, including all product managers, check the index at the [product home](../index.md) page.

## Product process

### Principles

See [principles](../../product/index.md#principles) for our core beliefs in how
we build products

### Strategy

See [strategy](../../../strategy-goals/index.md).

### Learn

- Research
  - [User research](user_research/index.md)
- Feedback
  - [Tracking user & stakeholder feedback](feedback/user_stakeholder_feedback.md) - sources of feedback and how we keep track of that feedback.
  - [Product feedback monitoring](feedback/product_feedback_monitoring.md) - how we respond to user feedback for the feedback channels the product team owns.
  - [Surfacing feedback to the product team](feedback/surfacing_product_requests.md) - how other teams surface feedback
- Metrics

### Prioritize & build

- [PR-FAQs](../../engineering/product-planning.md) to share high level business ideas
- [Prioritizing](prioritize_and_build/prioritizing.md) - how we prioritize work, and how to get things prioritized.
- [Feature deprecation](prioritize_and_build/deprecation_process.md) - how we deprecate features when necessary.

### Go-to-market

- [Feature rollout](gtm/rollout_process.md) - how we test, rollout and launch new features.
  - [Release blog post template](https://github.com/sourcegraph/about/blob/main/handbook/product/product_management/release_blog_post_template.md)
  - [New feature legal questionnaire](gtm/new_feature_legal_questionnaire.md) - how we share relevant information about new features with our legal team.
- [Pricing and tiering/packaging](gtm/pricing.md)
- [Licensing](gtm/licensing.md)

#### Experimenting on sourcegraph.com

We welcome experimentations on sourcegraph.com. It should be very easy to experiment on .com, send a tweet or email campaign out to get some traffics, and get early feedback in.

The bar for an experiment on .com is the following:

- Break nothing (new UIs and public data APIs are low risk, anything involving sensitive data or critical APIs is high risk)
- Don't disrupt the main flows
- Add basic usage metrics to know what's going on

In particular an experiment does not require:

- Discoverability
- A polished design
- Approvals, as long as it meets the criteria above
- A/B testing, although A/B testing can be used

When you experiment on .com you commit to:

- Make a small announcement in #progress when you start the experiment
- Following our [feature labelling](https://docs.sourcegraph.com/admin/beta_and_experimental_features) guidelines
- Maintaining and supporting it (until removed or removed)
- No later than one moth after the experiment started, either remove the experiment or decide to work on progressing it to Beta/GA. Note that this doesn't require to progress to Beta/GA within one month, it just required to have an actionable and staffed plan.
- Notifying teams that might be affected by your experiment or work on related features.

#### Talking to customers and stakeholders

In general, product team members are empowered to communicate directly with customers and stakeholders. Sometimes it can be helpful to have someone review your communication before sending it, especially if it is going to a wide or unfamiliar audience. If you want, the Marketing and PR teams are available to help any time: simply ask in #marketing and someone will be happy to review your communication.

There are just a few places where a review is required; these should include your product director and someone from the marketing team:

- Release posts/blog posts (review process already includes this, so nothing special to be done here)
- Social media using the official accounts, including YouTube
- Public presentations/events/speaking engagements
- [about.sourcegraph.com](https://about.sourcegraph.com) site updates
- Updates on pricing/packaging changes
- Updates on feature deprecation
- Speaking to press

Unless the change is extremely wide in impact (a large about site update, a major press outlet, or a major pricing change), you do not need to continue blocking on marketing or product director review after 3 full business days have passed from the review request. Apart from the guidance for specific groups we collaborate with below, we also have a general principle within Engineering of [welcoming contributions](../../engineering/cross-team-collab.md).

## Tools/Templates

- [Strategy page template](https://github.com/sourcegraph/handbook/blob/main/page_templates/strategy_template.md) - a template for a [product strategy page](../../../strategy-goals/strategy/index.md), covering vision, strategy and short term direction.
- [Figma](https://www.figma.com/files/team/438792081639669302/Sourcegraph)
- [Productboard](https://sourcegraph.productboard.com/)
- [Amplitude](../../data-analytics/amplitude.md)
- [Running remote hackathons](../../../company-info-and-process/remote/remote_hackathons.md#facilitating-a-remote-hackathon)

### Product data

Teams should review and update the product [data files](https://github.com/sourcegraph/handbook/blob/main/data/) monthly, in particular the [features.yml](https://github.com/sourcegraph/handbook/blob/main/data/features.yml) in case the feature has reached a new maturity, delivered new code host compatibility, or otherwise updated any information displayed on the automatically generated [product team and feature reference pages](../index.md##product-team-and-feature-matrices).

Part of the product data is a (internal-only) list of [what's supported](https://docs.google.com/spreadsheets/d/101JXaau2EPvi322AOFmNeoeuXSJqlruD8gBBsHl1fmI/edit#gid=33376279), which contains extended product information for our Sales and Support teams. This should also be manually reviewed and updated as feature capabilities evolve.

## Glossary

There is also a [company-wide glossary of terms](../../../company-info-and-process/onboarding/glossary.md) we use, the below are specific to the product team.

- Product priorities: An ordered list of problem statements or outcomes that product has evidence is important
- Roadmap: The tasks and timeline for when each will be worked on
- Backlog: The ordered list of items to be tackled after items on the roadmap are complete
- Department: A top-level organizational unit of people, such as Sales, Engineering, or Marketing.
- Team: A well-defined product team that works to deliver features for one or more product areas.
- Product Area: A loosely defined collection of features or capabilities that may be worked on by one or more teams.
- Developer onboarding: Referring to the use case of "developer onboarding and velocity," where a new developer joining a company is able to quickly understand and become productive in their new company's codebase.
- Early access enrollment: Referring to the process of enabling early access for customers or prospects so they can begin using an [Experimental or Beta](https://docs.sourcegraph.com/admin/beta_and_experimental_features) feature.
- New user experience: Referring to the user journey of a new user of Sourcegraph in and around the product.
- Launch tier levels (L1, L2, and L3) are also an important term to be aware of, and the definitions as well as process/source of truth are documented on the [marketing launch page](../../marketing/product-marketing/marketing_launch_tiers.md).

## Collaboration

Product Management collaborates with a lot of different groups. Beyond our shared [work as a team value](../../../company-info-and-process/values/index.md#work-as-a-team), there are some teams where collaboration is especially important and where roles and responsibilities can be unclear. To help clarify this, we have documented high level practices around how we work together.

Apart from the guidance for specific groups we collaborate with below, we also have a general principle within Engineering of [welcoming contributions](../../engineering/cross-team-collab.md).

### Executive decisions

There are some classes of questions that occasionally require an executive level in order to proceed, usually because they are part of a high level strategic decision or because they require making tradeoffs between different organizations or departments within the company. Some examples of these in the past which have gotten stuck are:

- Pricing strategy
- Upgrade strategy
- Competitive strategy
- Prioritization across org/department boundaries
- Decisions when values conflict

The procedure is for the team who needs clarity around any of these kinds of items to write a proposal with how they would like to proceed, which can be added to the [executive decision log](https://docs.google.com/document/d/14snvXSR_SosGfO9GFZHZ4GPy94omcEuDUUKrLdqUQuw/edit#).

It's important to keep in mind that, when multiple parties are disagreeing on the path forward, it's important to lean in with empathy ([escalate cleanly](../../../company-info-and-process/communication/conflicts.md#clean-escalation)) and ensure everyone understands each others views. You won't always come to an agreement because of different priorities/contexts, but you should always be able to come to a mutual understanding of the trade-offs that you can present together for a decision.

## Communication

- [Onboarding to the product team](../onboarding/index.md)
- [Sourcegraph messaging](../../marketing/process/messaging.md)
- [Working with Data & Analytics](../../data-analytics/index.md#communicationsasking-a-question)
- [Recommended reading](../onboarding/recommended_reading.md)

## Deprecated

- [Learning](product_learning.md) - how we learn from what we shipped.
