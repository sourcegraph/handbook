# Sourcegraph strategy

## Purpose

Our overall purpose is we want to make it so **everyone can code**. A world where everyone, not just ~0.1% of the world population, can code will see faster and more broadly beneficial technological progress. This page describes how we are going to achieve that goal, and the [individual team and org strategies](index.md#per-area-strategy-pages) describe what we're doing in each of our product areas.

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

## Goals

Our [goals](../goals/index.md) describe what each of us is working toward now (so that we succeed in our long-term mission).

## Values

Our [values](../values.md) are the principles and beliefs that help us achieve our [goals](../goals/index.md) and make our strategy real.

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

Additionally, our [product design principles](../../product/design/product_design_principles.md) are:

- **A personal tool within a larger workflow**<br />
  Sourcegraph is a powerful yet personal tool that exists within a larger workflow. Design for familiar patterns with thoughtful defaults, while embracing personalization and adaptability.

- **Made for everyone**<br />
  Our purpose is to make it so everyone can code. This demands we make Sourcegraph accessible and useful for all developers through universal, inclusive design.

- **Gracefully manage complexity**<br />
  Sourcegraph supports complex product requirements, but also empowers users to manage this complexity for their individual needs.

- **Code as content**<br />
  More time is spent reading than writing code. Elevate the craft of code as content.

- **Trust is earned**<br />
  Sourcegraph is the source of truth, but this trust is earned. Accuracy, transparency, recency, and honesty together work to uphold this source of truth.

- **Create momentum**<br />
  Help developers create and maintain flow. To do this, Sourcegraph must be fast in every way. We design purposefully to help users iterate and build momentum.

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

A complete list of feature areas by maturity, tier, or by code host compatibility can be found on [our feature reference pages](../../product/index.md#product-area-and-feature-reference).

## One year vision

> Problem statement: In large and complex codebases ([Big Code](#big-code)), it's hard for developers to discover, understand, and fix code.

Sourcegraph is the one place to find and fix things across all code.

- Sourcegraph knows almost everything that can be known about your code (code structure, Git metadata, build, code hosts, runtime metrics, code reviews, docs, issues, project management, etc.).
- It's easy to find and use this information on Sourcegraph itself and in your editor, code host, and code reviews.
- When you need to find something in or about your code (which happens many times per day), you usually start on Sourcegraph.
- To spread adoption of a new dev tool/practice or make a large-scale code change, you use Sourcegraph because you trust everyone uses it.

### Build Sourcegraph into the development workflow

#### Challenge to overcome

We measure the value Sourcegraph brings to developers by measuring how often they use Sourcegraph in their daily workflows. We believe the [natural frequency of usage](https://amplitude.com/blog/2016/10/11/product-usage-interval) (how often people use Sourcegraph) as a key part of every developer’s workflow is many times per day. Our current usage metrics are good, but are not as high as they should be to match this natural frequency of usage.

#### What we want to achieve

Sourcegraph is an essential and frequently used part of the developer’s day to day workflow because it is the place that gives developers all context about their code. Sourcegraph is The One Search Bar to find information you need about your code. Search is easy to do from anywhere, aware of your current context, and integrated deeply into your common workflows; it's not just a list of matches.

We will measure this by:

- Number of daily active users
- Number of times Sourcegraph is used per day

#### How we're going to do this

- Insert Sourcegraph into more places in the developer workflow, so developers are being prompted to go use Sourcegraph.
- Give developers more reasons to come back with greater frequency by adding more value for them inside of Sourcegraph (e.g., information about code that doesn't live in the code itself).

### Support a broader set of configurations and workflows

#### Challenge to overcome

Many organizations have unique code setups and workflows that require workarounds to support, or prevent them from using Sourcegraph entirely.

#### What we want to achieve

Sourcegraph is the code search solution for every developer and every organization, regardless of their setup. At any organization, Sourcegraph is how developers are able to work with large and complex development workflows. Sourcegraph sustainably supports configuration of unique infrastructure and code setups.

#### How we're going to do this

- Solve use cases that are present at many large enterprises.
- Reduce friction in getting Sourcegraph deployed at scale.
- More integrated support for non-Git version control systems.

### Surface insights into code and development

#### Challenge to overcome

Software development executives have a hard time understanding what is going on with their large teams, the projects they are investing in, and the impact developers and teams have inside of their organization. The insights and information they need is hard to come by and is not solved by other tools or services because it relies on data the development teams produce to be tied to higher order concerns.

#### What we want to achieve

Sourcegraph has access to the low level data needed to build insights that are high quality and meaningful. Sourcegraph feeds the symbiotic relationship between developer produced data and executive insights, creating a cyclical feedback loop of immense value. Engineering leaders turn to Sourcegraph to understand what is going on in their organization.

#### How we're going to do this

- Do research to understand what questions engineering leaders want to answer about their organization's code.
- Add features to Sourcegraph that provide insights that are valuable to both leaders and developers.

## Three-year vision: democratize code search

We will make universal code search accessible to everyone.

Code search is a powerful tool that becomes indispensable when you work on large, shared codebases or depend heavily on the universe of open-source code outside your organization. It's like fire––powerful and versatile and those who've seen the light can't imagine going back to the darkness. Let's bring code search down from the Mount Olympus of Tech and make it accessible to everyone, not just the 0.1% of developers who work at Google and other tech giants.

- Fast code search that scales to giant codebases and the universe of open-source code.
- Precise code navigation that makes walking the reference graph as simple as point-and-click.
- Make large scale code changes possible (universal search-and-replace).
- Integrate with code hosts and code review tools to bring these developer superpowers to everywhere SWEs need to understand code.
- Sourcegraph becomes a natural hub to distribute other dev tools, due to its extensibility and the fact that the average developer using Sourcegraph does so several times per day.
- Sourcegraph provides analytics about what parts of the code are changing and makes this view accessible to every individual developer.

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

## Per-area strategy pages

Within this overall product strategy, individual product areas set their own goals and roadmaps aligned to the [company OKRs](../goals/2022_q3.md), and each have a strategy page with all the details of what they are working on next and why. There is also an [(currently internal only) presentation](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gd8d1ce5e98_0_164) with highlights of planned features from all teams.

### [Code Graph](code-graph/index.md)

- [Search core and Search product](code-graph/search/index.md)
- [Batch Changes](code-graph/batch-changes/index.md)
- [Code Intelligence](code-graph/code-intelligence/index.md)
- [Code Insights](code-graph/code-insights/index.md)

### [Enablement](enablement/index.md)

- [Delivery](enablement/delivery/index.md)
- Dev Experience
- [Frontend Platform](enablement/frontend-platform/index.md)
- [Repo Management](enablement/repo-management/index.md)
- [Engineering Education](enablement/engineering-education/index.md)
- [Handbook](enablement/handbook/index.md)

### Cloud

- [Core application](cloud/core-application/index.md)
- Cloud SaaS
- Growth
  - [API docs](cloud/growth/index.md)
- [Security](cloud/security/index.md)
- DevOps/SRE
- [Extensibility](cloud/extensibility/index.md)
