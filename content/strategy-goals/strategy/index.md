# Sourcegraph strategy

## Purpose

Our overall purpose is we want to make it so **everyone can code**. A world where everyone, not just ~0.1% of the world population, can code will see faster and more broadly beneficial technological progress. This page describes how we are going to achieve that goal, and the [individual team and org strategies](#per-team-strategy-pages) describe what we're doing in each of our product teams.

Want to help us achieve these goals? [We're hiring!](https://github.com/sourcegraph/careers)

### Background

For thousands of years after writing was invented, most people remained illiterate. Universal literacy seemed unlikely. Is it really possible that every human would be capable of reading and writing? How would literacy benefit the average person? As we now know, every human is capable of and benefits immensely from literacy.

More recently, around 1976, just 0.2% of the world's population used computers. Two tiny companies sought to make computing universal: Apple's vision then was to create a "bicycle for the mind" in the form of a computer, and Microsoft wanted to put a computer "on every desk and in every home". Though it seemed unlikely at the time, as we now know, everyone is capable of and benefits immensely from having a computer (or a phone).

Today, only about 0.1% of the world's population can code. That tiny group has built software that runs the modern world and improves the lives of billions of people. Think of the possibilities if everyone was able to code. All around the world, more people would be able to solve problems and improve their lives by building software. We don't know exactly what these billions of coders will create, but we know that this will bring faster and more broadly beneficial technological progress.

### Big Code

We're living in [the era of Big Code](https://thenewstack.io/universal-code-search-a-new-search-tech-for-the-era-of-big-code/): the amount, complexity, and value of code is growing quickly.

Tools and practices that were conceived before the era of Big Code will break down, leaving codebases that are huge but complex and brittle. Any change might shatter the whole thing. Developers become hesitant about making changes. Productivity slows, communication bottlenecks grow, deadlines are missed, and quality declines.

This is a new game. Companies that master this will thrive. Companies that don't will fail.

> For people as users of technology, Big Code is great. It means there's more software out there, it's more personalized, it's faster, it's on their desktop and phone and watch, it's localized, and so on. But for developers, it's way harder and takes way more work to build software than it did 10 years ago.

## Mission

To make it so [everyone can code](#purpose), we will create tools, networks, and incentives for coding at ever-larger scale.

## Values

Our [values](../../company-info-and-process/values/index.md) are the principles and beliefs that help us achieve our [goals](../goals/index.md) and make our strategy real.

## Principles

- Sourcegraph is universal code search, not universal "everything" search. Any additional data types in our search need to be relevant to the software development workflow.
- We want every developer, not just a specific niche audience, to use Sourcegraph.
  - We won't adopt polarizing public stances that would divide our audience.
- Our product should strive to be fundamentally privacy-respecting and secure. This means that users don't need to trust us to verify that their data is private and secure.
- Build on-ramps in our product to turn more people into frequent users, instead of building the product _for_ infrequent users (which is a self-fulfilling prophecy).
- We eventually want to be a platform that ties together all of the tools developers use.
  - Other developer tools are partners, not competitors.
  - This entails designing for extensibility in our product (and documenting it more thoroughly) as a first-order priority.
- Sourcegraph provides greater value the larger a software team. We are building not just for individual developers, but for development teams. We believe software development is increasingly a multiplayer game.

Additionally, these are our [product design principles](../../product-engineering/product/design/product_design_principles.md).

## Assumptions

- Sufficiently good code search will be useful to every developer many times per day (on average). It may take a while to convert any specific person into a frequent code search power user, but it will happen eventually.
- Code search that is _exclusively_ for public/open-source code is not actually that useful because most people spend most of their time working on their organization's internal code.
- Any given developer will only pick one code search tool to use. Any given company will standardize on a single code search tool.
  - Therefore, to avoid fragmentation, Sourcegraph should be not only _much_ better than the alternatives, but also _not worse_ in any significant way.

## Pricing

- Trying Sourcegraph (to prove it works and is valuable) is free and (if you want) self-service.
- If your organization is getting value from Sourcegraph with a lot of users, our [pricing](https://about.sourcegraph.com/pricing) is designed so that we earn money from you. This lets us invest in improving our product.
- All users at a given customer are on the same pricing tier. This is simpler than having users at different tiers and encourages us to build things that are broadly valuable.

## Where we're at now

A complete list of feature areas by maturity, tier, or by code host compatibility can be found on [our feature matrices](../../departments/product-engineering/product/index.md#feature-matrices). The [following](../../departments/product-engineering/strategy-goals/index.md) gives on overview of what we are working on today.

## Five-year vision: democratize code

We will make the universal code graph accessible to everyone.

The universe of code is exploding, but to any given person, most of that universe remains terra incognita. We will map out that universe and its graph of dependencies, references, and authorship, so that everyone can easily traverse, explore, discover, and make use of it. (Think Google vs. Yahoo.)

- Sourcegraph understands the reference and dependency graph of the open-source universe and all our customers' private code. We make it easy to walk this graph (subject to the privacy constraints of our customers and users) even if you're not a professional software engineer.
- You can see which changes to code affect you and how your changes affect others.
- When a library changes, it's commonplace to include refactoring scripts (to update call sites) along with the change. Sourcegraph automatically propagates the suggested changes to all public and private code that depends on the library.
- You can discover and more easily use libraries, with data about who uses them and how they're used.
- Sourcegraph understands how the entire codebase of an organization is evolving and makes this accessible to codebase owners. The health and overall status of the codebase is no longer opaque to engineering leaders.

## Ten-year-vision: democratize coding

We will make it so coding is a universal skill (just like universal literacy). This requires not only making coding easier but also introducing more widely available economic incentives--letting anyone earn a living coding from anywhere in the world.

As code becomes an essential part of every company and organization, more and more people can make an impact by having access to code. It will start with roles like product management and SRE that are adjacent to software engineering, but we envision a future where code becomes so critical that nearly everyone in an organization will have an interest in understanding it and modifying it. This applies to organizations of all sizes--and even individuals earning a living from libraries they wrote and shared with others who make profitable end-user products on top of them.

Coding itself is a technology, and we anticipate the technology adoption curve will eventually extend to nearly everyone. (Just like everyone has adopted the "technology" of reading and writing--literacy.) Tools like Netscape Navigator and Google Web Search made the internet accessible to all, and Windows and Macintosh made desktop computing accessible to all. We will make coding accessible to all.

- Sourcegraph code search supports high-level queries (e.g., `function to parse URL`, `function to marshal struct into ${INTERNAL_FORMAT}`).
- Non-technical people can use Sourcegraph to gain an understanding of what a piece of code does and modify it. E.g., a salesperson can look up a function that encodes a piece of automation in the sales process and change it to align with updated sales priorities for the quarter.
- Sourcegraph provides a discovery and marketplace mechanism for authors of useful shared libraries to distribute and make a living off of novel source code and algorithms.

## Per-team strategy pages

Within this overall product strategy, individual product teams set their own goals and roadmaps aligned to the [company OKRs](../goals/index.md), and each have a strategy page with all the details of what they are working on next and why. There is also an [(currently internal only) presentation](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gd8d1ce5e98_0_164) with highlights of planned features from all teams.

### [Product & Engineering](../../departments/engineering/strategy-goals/index.md)

#### [Code Graph](code-graph/index.md)

- [Search core and Search product](code-graph/search/index.md)
- [Batch Changes](code-graph/batch-changes/index.md)
- [Code Intelligence](code-graph/code-intelligence/index.md)
- [Code Insights](code-graph/code-insights/index.md)

#### [Enablement](enablement/index.md)

- [Delivery](enablement/delivery/index.md)
- [Dev Experience](enablement/dev-experience/index.md)
- [Frontend Platform](enablement/frontend-platform/index.md)
- [Repo Management](enablement/repo-management/index.md)
- [Engineering Education](enablement/engineering-education/index.md)
- [Handbook](enablement/handbook/index.md)

#### Cloud

- [Core application](cloud/core-application/index.md)
- Cloud SaaS
- Growth
  - [API docs](cloud/growth/index.md)
- [Security](cloud/security/index.md)
- DevOps/SRE
- [Extensibility](cloud/extensibility/index.md)
