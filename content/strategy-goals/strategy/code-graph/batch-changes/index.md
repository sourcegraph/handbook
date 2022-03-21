# Batch Changes strategy

Batch Changes is a tool to find code that needs to be changed and change it at scale by running code. This page outlines the vision, strategy, and goals of the Batch Changes team over the next year or so.

## Quick links

- [Code Graph overall strategy](../index.md)
- [Product & Engineering strategy](../../../../departments/product-engineering/strategy-goals/index.md)
- [Batch Changes positioning and messaging](../../../../departments/marketing/product-marketing/batch_changes_positioning.md)
- [Demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw)
- [Batch Changes documentation](https://docs.sourcegraph.com/batch_changes)
- [Batch Changes team page](../../../../departments/product-engineering/engineering/code-graph/batch-changes/index.md)
- [Planning board](https://github.com/orgs/sourcegraph/projects/216)
- [Roadmap](https://github.com/orgs/sourcegraph/projects/214/views/34?filterQuery=owning-org%3A%22Code+Graph%22+type%3ARoadmap+owning-team%3A%22Batch+changes%22)

## Vision

### 3-year vision

**Developers can easily run code to create changesets across many repositories and codehosts, and track them to completion.**

### 10-year vision

**Automated code changes are a common practice for all developers.** Making that happen requires two layers. First, making it easy to run code to create changesets across many repositories and codehosts, provided you know how to write code that changes code, our 3-year vision. Second, writing code that changes code, or more generally making describing code changes easier.

By lowering the cost and effort required to change code at scale, we’ll make it commonplace to do small, incremental codebase health operations, instead of postponing to another day. We will know we have achieved this when it is as intuitive to change code across the entire codebase as in an IDE.

## Mission & Strategy

### Mission

We allow developers to focus on changing their code, without having to do any plumbing (building scripts to interact with codehosts and integrate with other tools and workflow). We help them drive changesets to completion without having to rely on spreadsheets and heavy project management, as these steps are painful and time consuming, which encourages keeping old code around. We also help developers find, build and share the code rewrite scripts they need to achieve their goals. We do this because we think developer's time is better spent shipping products than building plumbing and doing project management, and because having a frictionless way to make code changes will encourage all developers to keep the codebase quality high over time.

### Strategy

To deliver our vision, we will:

- First, get adopted by the Sourcegraph customer base, including large enterprises. We will target customers with advanced practices and workflow, and collaborate with them to build a category-defining product that all other companies will use. This is what we are doing today.
- Concurrently, spread usage (MAUs) within our customer base and make sure we deliver on our success metric (changesets merged).
- Then, create low time-to-value entry points into Batch Changes, and allow users unfamiliar with the practice of automating code changes to easily onboard and solve a problem linked to a [use case](../../use-cases/index.md). Make onboarding Batch Changes self-serve for most users, to help our customers be successful and prepare for launching on Cloud.
- Then, release Batch Changes on Sourcegraph Cloud, and test and learn how we can serve individuals and smaller teams.
- Eventually, address the problem end to end by becoming the go-to place for code change tools and recipes.

## Competitive landscape

Our primary competition comes from companies building internal tools to apply and track code changes. Individual users inside companies also build scripts around [git-xargs](https://github.com/gruntwork-io/git-xargs), [mu-repo](https://fabioz.github.io/mu-repo/) or [turbolift](https://github.com/Skyscanner/turbolift) to create changesets, then tend to outgrow it when they scale usage (lack of changeset tracking, collaboration, reproducibility). Every tool relies on a search engine to return matches, so being integrated with Sourcegraph search is a key competitive advantage for Batch Changes.

We expect to see more vertical competition from companies focused on a language ecosystem, that enter the market by building refactoring frameworks for a given language ecosystem, then competing with Batch Changes on tooling to apply and track code changes. [Moderne](https://moderne.io/)/[openrewrite](https://github.com/openrewrite/rewrite) is the first significant example of this, focused on the Java ecosystem. Recently, [updatecli](https://www.updatecli.io/) also showed up on our radar. So far, Batch Changes differentiates with better search, a collaborative management UI, its language agnostic approach and enterprise-grade features.

We are committed to remaining language-agnostic, which includes using Batch Changes to apply and track changesets created with frameworks such as openrewrite or any other refactoring framework. We also think there is an opportunity in leveraging precise code intelligence to create radically better code change tools that support many languages in the future.

## Themes

To deliver the strategy, here are the themes we want to focus on for the next year.

### Enterprise scale

We have the overarching goal to [level up our enterprise-ready features](../index.md#level-up-our-enterprise-ready-features). Batch Changes is successfully adopted by very large companies, with 10,000s of repositories. They face three limitations in practice:

- Creating changesets locally takes too long to be practical for very large-scale changes.
- Navigation in the UI when there are 100s of batch changes and 10,000s of changesets is cumbersome.
- Batch Changes's permission model is minimalistic and insufficient for some large enterprises.

To drive enterprise success and stickiness, we need to:

- Deliver a great experience in creating changesets at **enterprise scale** (10,000s repositories), resulting in more users onboarding batch changes.
- Make sure that iterating on batch changes has the **lowest cycle time possible**, and that the debugging experience is smooth.
- Enable our users to make sense of a large number of batch changes and changesets.

### Get changesets merged

The key [success metric](../../../../departments/product-engineering/engineering/code-graph/batch-changes/metrics.md) for batch changes is the number of changesets that get _merged_. In practice, once a user has applied a batch change, they need to spend time tracking and following up with downstream repository owners so that they merge the batch change's changesets. The larger the batch change, the more time-consuming this can be. We want to improve how easy it is for users to get large batch changes over the finish line, as measured by time-to-merge and batch changes merge rate.

### Time-to-value

Batch Changes is a powerful product with a steep learning curve. The main friction point is that Batch Changes requires users to write **steps** (the components of a batch spec that define a specific change to be executed), either using existing code rewrite tools (sed, comby, etc) or writing code from scratch. Most developers are unfamiliar with such tooling, and have a hard time onboarding to batch changes.

We want to decrease time to value and make it easier for any developer to get value out of Batch Changes. We measure success here by tracking:

- the batch changes success rate (number of batch changes that get applied / number of batch changes that stay in preview)

### Discoverability and end to end use cases

Getting the most out of our product can take time as you get up to speed with what’s possible, and Code Graph features can feel disconnected. We want to make it easier for users to understand how Batch Changes and other Sourcegraph features can help with use cases.

Success here means creating end-to-end usage paths that use Batch Changes as well as other features.

## Where we are now

Batch Changes has proven early product/market fit with high-growth scale-ups and medium to large technology companies. We are now working on expanding into more traditional enterprises. We see anecdotal early evidence of market fit across other segments ([Batch Changes dashboard](https://sourcegraph.looker.com/dashboards-next/174)).

Over the first year, we have discovered a repeatable playbook for our [Code Reuse](../../use-cases/code-reuse.md) use case. A platform engineering team, sometimes supported by a developer experience team, adopts Batch Changes to make large-scale code changes to internal libraries, frameworks and platforms they maintain . Some batch changes are relatively simple code changes, such as updating configuration files across many repositories. Some are more complex, such as changing API call sites to ship a breaking change in an internal library. The common denominator is those changes would take a very long time to create and track to completion using a manual approach. Adopting Batch Changes allows the platform team to automate manual work and save time, as well as transition from a model in which they are asking their customer teams to do some work, to a more proactive where they can propose a change themselves and leave customer teams to review and merge. See [playbook](../../../../departments/marketing/product-marketing/batch_changes_positioning.md#go-to-market-playbook)

We have five main learnings from the first year of Batch Changes:

- The key success metric for customers is the number of changesets opened by Batch Changes that eventually get merged. To be successful, we need to increase adoption, and the merge rate of changesets.
- We have discovered that importing, tracking and managing existing changesets that were not created by Batch Changes, is perceived as very useful by customers. However, importing changesets today is clumsy, so this workflow is not very frequently used. We have an opportunity to improve it and validate the value of this use case. If successful, it could create a low-friction, low time-to-value entry point into Batch Changes for new users and increase usage frequency and stickiness.
- Batch changes works great for teams with 1,000s of repositories, but gets clumsy to use for companies with 10,000s repositories.
- The job to be done (JTBD) for our customers is changing code at a large-scale. To do so, they need to automate a code change, apply it, then track it to completion. Batch Changes today is addressing applying and tracking changes, but the first thing many customers ask is "how do I write code that makes change x". To solve for our customers JTBD, we will need to provide an answer to that question.
- As users get more sophisticated and work on large, more complex batch changes, debugging and iteration cycle time become the bottlenecks.

## What's next and why

### Top customer, support, sales, and marketing issues

The top product gaps are running batch changes at large scale (solved by server-side batch changes) and Bitbucket Cloud support. Both are on our Q1 roadmap.

We keep hearing user requests for [mounting files on batch change steps containers](https://github.com/sourcegraph/sourcegraph/issues/14851), and for [improved monorepo support](https://docs.google.com/document/d/1o3fNI-itoU0LOwY29luutkw3L8IEfoVPYEGsD7kotmU) from monorepo users.

## FY 2023 Q1 goals

### Execution

This quarter, we are primarily focusing on improving the value and usability of Batch Changes at [enterprise scale](#enterprise-scale).

1. Move [server side Batch Changes](https://docs.sourcegraph.com/batch_changes/explanations/server_side) (SSBC) currently an [experimental](https://docs.sourcegraph.com/batch_changes/explanations/server_side) feature, to beta. We can move to beta ([#26919](https://github.com/sourcegraph/sourcegraph/issues/26919)) after we:
   - Onboard three early customers, and get positive feedback
   - Train sales CE, CS and sales to sell and support SSBC.
   - Make sure that the upgrade process for SSBC is scalable (upgrading Sourcegraph + SSBC takes no more than twice the time required to upgrade Sourcegraph).
   - Create a unified experience, that is clear regardless of if you have executors connected or not.
1. Bitbucket Cloud is frequently requested by [customers](https://sourcegraph2020.lightning.force.com/lightning/r/Product_Gap__c/a1B3t00000IkxMjEAJ/view), and it's likely that we will see more and more requests as Bitbucket server approaches [EOL](https://www.atlassian.com/migration/assess/journey-to-cloud). We plan to add support for Bitbucket Cloud this quarter ([#24199](https://github.com/sourcegraph/sourcegraph/issues/24199)).
1. We recently onboarded a few monorepo customers that highlighted the limitations of our (experimental) monorepo support in Batch Changes. We plan to address those limitations and move monorepo support to GA ([RFC](https://docs.google.com/document/d/1o3fNI-itoU0LOwY29luutkw3L8IEfoVPYEGsD7kotmU), [#28246](https://github.com/sourcegraph/sourcegraph/issues/28246)).
1. Batch Changes's minimalist permission model is limiting adoption in the traditional enterprise segment. In particular, customers report they want to control who can run batch changes at all. We plan to make a first iteration to solve this problem.
1. Every customer is different and uses a broad set of tooling. We plan to design outgoing webhooks that allow customers to easily integrate Batch Changes into their workflow. Better integration allows customers, for example, to build notification systems around batch changes changesets, and achieve a better merge rate which is critical at [enterprise scale](#enterprise-scale). We aim to experiment with a customer on this ([#26790](https://github.com/sourcegraph/sourcegraph/issues/26790)).

### Discovery

This quarter, we want to run discovery on a few threads, including to clear dependencies on other teams:

1. Server-side batch changes is not available yet on managed instances, because we have no way to bill for variable compute costs. By the end of the quarter, we want to have a plan and timeline to address that. ([Private RFC](https://docs.google.com/document/d/1g267ZD0veHKWDeM3GlzpwRGIRrAsDDIXt4Vh7vVvG18/edit#heading=h.trqab8y0kufp))
1. Getting changesets merged is critical to our [enterprise scale](#enterprise-scale) theme. We are currently investigating how to improve this [#31691](https://github.com/sourcegraph/sourcegraph/issues/31691).
1. We want to start discovery and planning for integrating Batch Changes with another feature (eg. create a batch change from a search result, a Code Insight, or a Code Monitor), to set the stage for a full-fledged workflow next quarter.
1. We are collecting detailed data on what batch changes customers run, in order to inform creating sample batch changes specs, or potentially codemod tooling. See (private) [insights](https://sourcegraph.productboard.com/feature-board/2104383-batch-changes)

## What we are not working on

- **Windows support** ([#24849](https://github.com/sourcegraph/sourcegraph/issues/24849)): Reliably supporting creating batch changes locally in a windows environment is a very large amount of work, that is incompatible with our plan of delivering Server-side Batch Changes as fast as possible. Windows support has blocked one [prospect](https://github.com/sourcegraph/customers/issues/3) and slowed down adoption at a [customer](https://github.com/sourcegraph/customers/issues/2), and will likely be important in the Banking and Gaming industry. We plan to address these customers with Server-side Batch Changes. Server-side Batch Changes will bypass the need to run the CLI locally, and instead allow customers to compute the batch changes on the Sourcegraph instance.

- **Education material about code change tools:** Helping our customers find and select a code change tool that suits their needs is a very common ask, and something we think could drive adoption. We don’t have bandwidth for this this quarter though.

- **Batch Changes on Cloud:** Making [Batch Changes available on Cloud](https://docs.google.com/document/d/1tcl5Zs_0NCYieya9weTyelxPxoif0VfxAq8UIV4JDjA/edit#heading=h.g0gjwch98szj) is not on our roadmap for FY23, and is tentatively planned for FY24.

In general, we tend to focus on features that we can build for multiple codehosts in a relatively homogenous manner, and avoid codehost-specific features.

## Related use cases

This section lists use cases that are related to this product team, along with the specific relevant features.

{{generator:product_team_use_case_list.batch_changes}}
