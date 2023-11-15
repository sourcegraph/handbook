# Batch Changes strategy

Batch Changes is a tool to find code that needs to be changed and change it at scale by running code. This page outlines the vision, strategy, and goals of the Batch Changes team over the next year or so.

## Quick links

- [Engineering strategy](../../../departments/engineering/index.md#product-vision-and-strategy)
- [Demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw)
- [Batch Changes documentation](https://docs.sourcegraph.com/batch_changes)
- [Roadmap](https://docs.google.com/document/d/1XNrbBtkS8_lsjKxV8zvNfb1sn1Ug9Zhc24LFLCOa-Ic/edit?usp=sharing)

## Definitions

We use:

- _code rewrite steps_ as a catch all term for what's also known as codemods or code transform steps. This includes running sed, comby, a bash script, or a complex AST-based tool such as [fastmod](https://github.com/facebookincubator/fastmod) to fix or improve code.

- _changesets_ as a more generic term for pull requests, merge requests, patches.

## Vision

**Automated code changes are a common practice for all developers.** By lowering the cost and effort required to change code at scale, we’ll make it commonplace to do small, incremental codebase health operations, instead of postponing to another day. We will know we have achieved this when it is as intuitive to change code across the entire codebase as in an IDE.

Making that happen requires two layers. First, making it easy to run code rewrite steps to create changesets across many repositories and codehosts, provided you know how to write those code rewrite steps. Second, making it easy to discover, use, reuse and write code rewrite steps.

## Mission & Strategy

### Mission

We allow developers to focus on changing their code, without having to do any plumbing (building scripts to interact with codehosts and integrate with other tools and workflow). We help them drive changesets to completion without having to rely on spreadsheets and heavy project management, as these steps are painful and time consuming, which encourages keeping old code around. We also help developers find, build and share the code rewrite steps they need to achieve their goals. We do this because we think developer's time is better spent shipping products than building plumbing and doing project management, and because having a frictionless way to make code changes will encourage all developers to keep the codebase quality high over time.

### Strategy

To deliver our vision, we will:

- First, get adopted by the Sourcegraph customer base, including large enterprises. We will target customers with advanced practices and workflow, and collaborate with them to build a category-defining product that all other companies will use. This is what we are doing today.
- Concurrently, spread usage (MAUs) within our customer base and make sure we deliver on our success metric (changesets merged). One way we'll do this is by decreasing time-to-value for Batch Changes, allowing users unfamiliar with the practice of automating code changes to easily onboard and solve a problem, possibly without writing code.
- Eventually, address the problem end to end by becoming the go-to place for discovering, using, building and sharing code rewrite steps.

## Competitive landscape

Our primary competition comes from companies building internal tools to apply and track code changes. Individual users inside companies also build scripts around [git-xargs](https://github.com/gruntwork-io/git-xargs), [multi-gitter](https://github.com/lindell/multi-gitter), [mu-repo](https://fabioz.github.io/mu-repo/) or [turbolift](https://github.com/Skyscanner/turbolift) to create changesets, then tend to outgrow it when they scale usage (lack of changeset tracking, collaboration, reproducibility). Every tool relies on a search engine to return matches, so being integrated with Sourcegraph search is a key competitive advantage for Batch Changes.

We expect to see more vertical competition from companies focused on a language ecosystem, that enter the market by building refactoring frameworks for a given language ecosystem, then competing with Batch Changes on tooling to apply and track code changes. [Moderne](https://moderne.io/)/[openrewrite](https://github.com/openrewrite/rewrite) is the first significant example of this, focused on the Java ecosystem. Recently, [updatecli](https://www.updatecli.io/) also showed up on our radar. So far, Batch Changes differentiates with better search, a collaborative management UI, its language agnostic approach and enterprise-grade features.

In the past, a few customers have seen some overlap with Atomist ([acquired by Docker](https://www.docker.com/blog/docker-acquires-atomist/)).

We are committed to remaining language-agnostic, which includes using Batch Changes to apply and track changesets created with frameworks such as openrewrite or any other refactoring framework. We also think there is an opportunity in leveraging precise code intelligence to create radically better code change tools that support many languages in the future.

## Themes

To deliver the strategy, here are the themes we want to focus on for the next year.

### Enterprise scale

We have the overarching goal to [level up our enterprise-ready features](../index.md#level-up-our-enterprise-ready-features). Batch Changes is successfully adopted by very large companies, with 10,000s of repositories. They face three limitations in practice:

- Creating changesets locally takes too long to be practical for very large-scale changes.
- Navigation in the UI when there are 100s of batch changes and 10,000s of changesets is cumbersome.
- Batch Changes's permission model is minimalistic and insufficient for some large enterprises.
- Supporting running batch changes in large monorepos

To drive enterprise success and stickiness, we need to:

- Deliver a great experience in creating changesets at **enterprise scale** (10,000s repositories), resulting in more users onboarding batch changes.
- Support enterprise requirements in terms of permissions and controls.
- Enable our users to make sense of a large number of batch changes and changesets.

### Get changesets merged

The key [success metric](../../../departments/engineering/teams/code-search/batch-changes/metrics.md) for batch changes is the number of changesets that get _merged_. In practice, once a user has applied a batch change, they need to spend time tracking and following up with downstream repository owners so that they merge the batch change's changesets. The larger the batch change, the more time-consuming this can be. We want to improve how easy it is for users to get large batch changes over the finish line, as measured by time-to-merge and batch changes merge rate.

### Time to value

Batch Changes is a powerful product with a steep learning curve. The two main friction points are:

- Iterating on a batch change has a slow cycle time
- Batch Changes requires users to write **code rewrite steps** (the components of a batch spec that define a specific change to be executed), either using existing code rewrite tools (sed, comby, etc) or writing code from scratch. Most developers are unfamiliar with such tooling, and have a hard time onboarding to Batch Changes.
- (second order) some users are afraid to experiment with batch changes

We are pursuing three approaches here:

- Building a library of batch specs, that users can reuse and build upon. This will give users code to bootstrap from, but in most cases it will only get them 60% of the way for their use case.
- Solve common, simple code rewrite use cases end-to-end, without requiring users to write any code. Common use cases:
  - run a regex-based search and replace
  - run a structural search and replace (comby)
  - rename a symbol
- Reducing iteration time (reduce the time between changing a batch change, and getting feedback)

### Feature parity on Sourcegraph Cloud

Today, running batch changes server-side is available on Cloud (formerly managed instances), provided that customers self-host executors. This is not practical, given customers that use Cloud want to minimize installation and maintenance work. Our long term goal is to enable running batch changes server-side by default for all managed instances customers, with managed executors. This will likely require billing for variable compute costs beyond a free usage tier, which implies additional operations to bill customers. Our roadmap therefore is:

- Stage 1: enable executors on managed instances by default, with a capped free usage tier. Usage beyond the free tier requires self-hosting executors.
- Stage 2: collect feedback on usage patterns, run customer discovery on billing.
- Stage 3: put billing in place, GA managed executors.

## Where we are now

Batch Changes has proven early product/market fit with high-growth scale-ups and medium to large technology companies. We see:

- High usage inside companies that already have teams running code rewrite tools, and use Batch Changes to be more efficient. In those companies, a small subgroup of developers that are usually inside platform teams use Batch Changes.
- Low usage in companies that don't have an existing practice of running code rewrite tools.

Sourcegraph is successful if it saves time, frequently, to many developers. Therefore our immediate next step is to focus on increasing usage inside our existing customers by decreasing time to value. When that is successful, we will continue working on supporting larger enterprises.

## What's next and why

### Top customer, support, sales, and marketing issues

We keep hearing user requests for [mounting files on batch change steps containers](https://github.com/sourcegraph/sourcegraph/issues/14851), and for [improved monorepo support](https://docs.google.com/document/d/1o3fNI-itoU0LOwY29luutkw3L8IEfoVPYEGsD7kotmU) from monorepo users.

## FY 2023 Q3 goals

### Roadmap

This quarter, we will focus on two things: time-to-value and keep iterating on server-side batch changes. Here is our list of priorities:

- **Get adoption for self-hosted executors and iterate on running batch changes server-side as feedback comes in**. To do so, we are working with customers on improving executors and making deployments easier (see [RFC 696 APPROVED: Reduced isolation deployments for executor](https://docs.google.com/document/d/16SVTBbuqAc2RizJBZgBRCfv5fsMVhR_a2QrIHnEh5T0/edit#heading=h.trqab8y0kufp)).
- **An MVP of the Batch Changes library** ([#32687](https://github.com/sourcegraph/sourcegraph/issues/32687)), that will contain a small set of universally-useful batch changes specs. As part of this, we need to figure out how we can build more specs (collaborate with professional services? hire a dedicated teammate?).
- **Ship an experimental version of solving a batch change use case end-to-end, without writing code**. It's likely we'll experiment with [RFC 713: Compute-powered batch changes](https://docs.google.com/document/d/1c9vGgSfh35HNzhPSMltgVkMA9B1NO4QF5GgZwFlt5Ys/edit#heading=h.trqab8y0kufp). This is successful if we see a sharp uptick in the number of MAUs per customer.
- **GA mounting files on step containers** ([#14851](https://github.com/sourcegraph/sourcegraph/issues/14851)), to reduce cycle time for customers that run their own code rewrite tools/scripts.

## What we are not working on

- **Windows support** ([#24849](https://github.com/sourcegraph/sourcegraph/issues/24849)): Reliably supporting creating batch changes locally in a windows environment is a very large amount of work, that is incompatible with our plan of delivering Server-side Batch Changes as fast as possible. Windows support has blocked one [prospect](https://github.com/sourcegraph/customers/issues/3) and slowed down adoption at a [customer](https://github.com/sourcegraph/customers/issues/2), and will likely be important in the Banking and Gaming industry. We plan to address these customers with Server-side Batch Changes. Server-side Batch Changes will bypass the need to run the CLI locally, and instead allow customers to compute the batch changes on the Sourcegraph instance.

- **Permissions and access control** is not a focus for Q2, as we are still collecting feedback and we want to focus on running batch changes server-side. It's very likely to be a focus area for Q3 as efforts from other teams (IAM) land.

- **Additional codehosts** we do not plan to add additional codehosts (outside of BitBucket Cloud), or code review tool integrations (Gerrit, Phabricator) this year.

In general, we tend to focus on features that we can build for multiple codehosts in a relatively homogenous manner, and avoid codehost-specific features.

## Related use cases

This section lists use cases that are related to this product team, along with the specific relevant features.

{{generator:product_team_use_case_list.batch_changes}}
