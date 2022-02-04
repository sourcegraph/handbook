# Batch Changes strategy

Batch Changes is a tool to find code that needs to be changed and change it at scale by running code. This page outlines the vision, strategy, and goals of the Batch Changes team.

## Quick links

- [Code Graph overall strategy](../index.md)
- [Product & Engineering strategy](../../../../departments/product-engineering/strategy-goals/index.md)
- [Batch Changes positioning and messaging](../../../../departments/marketing/product-marketing/batch_changes_positioning.md)
- [Demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw)
- [Batch Changes documentation](https://docs.sourcegraph.com/batch_changes)
- [Batch Changes team page](../../../../departments/product-engineering/engineering/code-graph/batch-changes/index.md)
- [Planning board](https://github.com/orgs/sourcegraph/projects/216)

## Vision

### 3-year vision

**Developers can easily run code to create changesets across many repositories and codehosts, and track them to completion.**

### 10-year vision

**Automated code changes are a common practice for all developers.** Making that happen requires two layers. First, making it easy to run code to create changesets across many repositories and codehosts, provided you know how to write code that changes code, our 3-year vision. Second, writing code that changes code, or more generally making describing code changes easier. We will know we have achieved this when it is as intuitive to change code across the entire codebase as in an IDE.

## Mission & Strategy

### Mission

We allow developers to focus on changing their code, without having to do any plumbing (building scripts to interact with codehosts and integrate with other tools and workflow). We help them drive changesets to completion without having to rely on spreadsheets and heavy project management, as these steps are painful and time consuming, which encourages keeping old code around. We do this because we think developer's time is better spent shipping products than building plumbing and doing project management, and because having a frictionless way to make code changes will encourage all developers to keep the codebase quality high over time.

### Strategy

To deliver our vision, we will:

- First, get adopted by the Sourcegraph customer base, including large enterprises. We will target customers with advanced practices and workflow, and collaborate with them to build a category-defining product that all other companies will use. This is what we are doing today.
- Concurrently, spread usage (MAUs) within our customer base, and make sure we deliver on our success metric (changesets merged).
- Then, create low time-to-value entry points into Batch Changes, and allow users unfamiliar with the practice of automating code changes to onboard with a smooth learning curve. Make onboarding Batch Changes self-serve for most users, to help our customers be successful and prepare for launching on Cloud.
- Then, release Batch Changes on Sourcegraph Cloud, and test and learn how we can serve individuals and smaller teams.
- Eventually, address the problem end to end by becoming the go-to place for code change tools and recipes.

## Competitive landscape

Our primary competition comes from companies building internal tools to apply and track code changes. Individual users inside companies also build scripts around [git-xargs](https://github.com/gruntwork-io/git-xargs), [mu-repo](https://fabioz.github.io/mu-repo/) or [turbolift](https://github.com/Skyscanner/turbolift) to create changesets, then tend to outgrow it when they scale usage (lack of changeset tracking, collaboration, reproducibility). Every tool relies on a search engine to return matches, so being integrated with Sourcegraph search is a key competitive advantage for Batch Changes.

We expect to see more vertical competition from companies focused on a language ecosystem, that enter the market by building refactoring frameworks for a given language ecosystem, then competing with Batch Changes on tooling to apply and track code changes. [Moderne](https://moderne.io/)/[openrewrite](https://github.com/openrewrite/rewrite) is the first significant example of this, focused on the Java ecosystem.

We are committed to remaining language-agnostic, which includes using Batch Changes to apply and track changesets created with frameworks such as openrewrite or any other refactoring framework. We also think there is an opportunity in leveraging precise code intelligence to create radically better code change tools that support many languages in the future.

## Themes

To deliver the strategy, here are the themes we want to focus on for the next year.

### Enterprise scale

We have the overarching goal to [level up our enterprise-ready features](../index.md#level-up-our-enterprise-ready-features). Batch Changes is successfully adopted by very large companies, with 10,000s of repositories. While there is no technical limitation for Batch Changes to run at that scale, there are 2 limitations in practice:

- Creating changesets locally takes too long to be practical for very large-scale changes.
- In companies with 10,000s of repositories, it is difficult for batch changes maintainers to understand what repositories they should target with a change, and to analyse the progress of a batch change.

To drive enterprise success and stickiness, we need to:

- Deliver a great experience in creating changesets at **enterprise scale** (10,000s repositories), resulting in more users onboarding batch changes.
- Make sure that iterating on batch changes has the **lowest cycle time possible**, and that the debugging experience is smooth.
- Allow users to find out where to create batch changes and understand what to do to **get changesets merged** in batch changes with 1,000s of changesets. This will increase the number of changesets merged, our key [success metric](../../../../departments/product-engineering/engineering/code-graph/batch-changes/metrics.md).

### Discovery, configuration and onboarding

As we go to market, our install base of customers with Batch Changes enabled is growing. Often, a few teams have adopted Batch Changes in a given company, because they were the ones feeling the need at the time. That team is frequently used to making large-scale code changes and building automation, so adopting Batch Changes is easier for them and they later turn into evangelists inside the company. In order to go beyond that beachhead user base within a company, we want to make Batch Changes more discoverable, and self-serve for new users, both as a way to drive adoption within customers and increase value and stickiness, but also to prepare for the self-serve model of Batch Changes on Sourcegraph Cloud. We plan to:

- Make Batch Changes more discoverable within Sourcegraph.
- Provide pathways from Search, Code Monitoring, Code Insights into Batch Changes.
- Make onboarding self-serve and provide easy ways to get started.

### Adoption through low time-to-value usage patterns

The main use case for Batch Changes today is to automate creating changesets at scale, then track them to completion. This requires some time investment from users to get familiar with Batch Changes, and also to write the code required to automate code changes. This is great for the platform engineer persona or users that feel the urgency to adopt, but it does not allow for less committed users to discover Batch Changes and form habits.

We have heard from customers that tracking and managing changesets created _outside_ of batch changes is very valuable as it replaces manual tasks: track the status of changes across many teams and make sure they get merged. We think there is an opportunity to offer a low time-to-value entry point into Batch Changes by allowing users to import changesets easily, and use the tracking and management functions.

We also think we can deliver our vision by offering a way to change code across repositories, without writing code, and directly from the Sourcegraph navigation UI.

We plan to drive usage (MAUs) by implementing low time-to-value, high-frequency use cases.

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
1. Bitbucket Cloud is frequently requested by [customers](https://sourcegraph2020.lightning.force.com/lightning/r/Product_Gap__c/a1B3t00000IkxMjEAJ/view), and it's likely that we will see more and more requests as Bitbucket server approaches [EOL](https://www.atlassian.com/migration/assess/journey-to-cloud). We plan to add support for Bitbucket Cloud this quarter ([#24199](https://github.com/sourcegraph/sourcegraph/issues/24199)).
1. We recently onboarded a few monorepo customers that highlighted the limitations of our (experimental) monorepo support in Batch Changes. We plan to address those limitations and move monorepo support to GA ([RFC](https://docs.google.com/document/d/1o3fNI-itoU0LOwY29luutkw3L8IEfoVPYEGsD7kotmU), [#28246](https://github.com/sourcegraph/sourcegraph/issues/28246)).
1. Batch Changes's minimalist permission model is limiting adoption in the traditional enterprise segment. In particular, customers report they want to control who can run batch changes at all. We plan to make a first iteration to solve this problem.
1. Every customer is different and uses a broad set of tooling. We plan to design outgoing webhooks that allow customers to easily integrate Batch Changes into their workflow. Better integration allows customers, for example, to build notification systems around batch changes changesets, and achieve a better merge rate which is critical at [enterprise scale](#enterprise-scale). We aim to experiment with a customer on this ([#26790](https://github.com/sourcegraph/sourcegraph/issues/26790)).

### Discovery

We have multiple dependencies on other teams that require an explicit plan that we will start scoping out this quarter. In particular:

1. Server-side batch changes is not available yet on managed instances, because we have no way to bill for variable compute costs. By the end of the quarter, we want to have a plan and timeline to address that.
1. Cloud is coming up, and it does not support Batch Changes. By the end of this quarter, we want to have a plan for Batch Changes on Cloud, including solving for pricing and billing issues.
1. Lastly, we want to start discovery and planning for integrating Batch Changes with another feature (eg. create a batch change from a search result, a Code Insight, or a Code Monitor), to set the stage for a full-fledged workflow next quarter.

## What we are not working on

- **Windows support** ([#24849](https://github.com/sourcegraph/sourcegraph/issues/24849)): Reliably supporting creating batch changes locally in a windows environment is a very large amount of work, that is incompatible with our plan of delivering Server-side Batch Changes as fast as possible. Windows support has blocked one [prospect](https://github.com/sourcegraph/customers/issues/3) and slowed down adoption at a [customer](https://github.com/sourcegraph/customers/issues/2), and will likely be important in the Banking and Gaming industry. We plan to address these customers with Server-side Batch Changes. Server-side Batch Changes will bypass the need to run the CLI locally, and instead allow customers to compute the batch changes on the Sourcegraph instance.

- **Education material about code change tools:** Helping our customers find and select a code change tool that suits their needs is a very common ask, and something we think could drive adoption. We don’t have bandwidth for this this quarter though.

In general, we tend to focus on features that we can build for multiple codehosts in a relatively homogenous manner, and avoid codehost-specific features.
