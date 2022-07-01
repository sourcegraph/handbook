# Sourcegraph strategy

- Long-term: [make it so everyone can code](#purpose)
- FY23 (this year): [target 5 specific use cases for existing customers first to grow ARR](#this-year-fy23)

## Long-term

### Purpose

Our overall purpose is we want to make it so **everyone can code**. A world where everyone, not just ~0.1% of the world population, can code will see faster and more broadly beneficial technological progress. This page describes how we are going to achieve that goal, and the [individual team and org strategies](#per-team-strategy-pages) describe what we're doing in each of our product teams.

Want to help us achieve these goals? [We're hiring!](https://github.com/sourcegraph/careers)

#### Background

For thousands of years after writing was invented, most people remained illiterate. Universal literacy seemed unlikely. Is it really possible that every human would be capable of reading and writing? How would literacy benefit the average person? As we now know, every human is capable of and benefits immensely from literacy.

More recently, around 1976, just 0.2% of the world's population used computers. Two tiny companies sought to make computing universal: Apple's vision then was to create a "bicycle for the mind" in the form of a computer, and Microsoft wanted to put a computer "on every desk and in every home". Though it seemed unlikely at the time, as we now know, everyone is capable of and benefits immensely from having a computer (or a phone).

Today, only about 0.1% of the world's population can code. That tiny group has built software that runs the modern world and improves the lives of billions of people. Think of the possibilities if everyone was able to code. All around the world, more people would be able to solve problems and improve their lives by building software. We don't know exactly what these billions of coders will create, but we know that this will bring faster and more broadly beneficial technological progress.

### Values

Our [values](../../company-info-and-process/values/index.md) are the principles and beliefs that help us implement our strategy and achieve our [goals](../goals/index.md).

## Medium-term

### Use cases

We have identified five key use cases for our universal code search platform:

1. [Developer onboarding](use-cases/dev-onboarding.md)
1. [Code reuse](use-cases/code-reuse.md)
1. [Code health](use-cases/code-health.md)
1. [Code security](use-cases/code-security.md)
1. [Incident Response](use-cases/incident-response.md)

There is no explicit mention of developer velocity in these use case titles, because they all improve developer velocity. Notably, research shows that revenue growth among companies who invest in the velocity of their developers see revenue growth up to 4-5 times faster than those who don’t.

There are also several related resources:

- How we [work with use cases](working-with-use-cases.md)
- [Use cases slide (internal only)](https://docs.google.com/presentation/d/1XIZFqOxB9ZVEeswOzLWgLaOxK-K9SAn94juo2_cpRnY/edit#slide=id.g1074ab41e5e_2_0)
- [AE pitch deck (internal only)](https://docs.google.com/presentation/d/1gplLIYGVzrqgyNOLhDrCtlF_VpXFIBRDtw6S6iOEaro/edit#slide=id.g10985e83d9f_0_465)
- [Use case discovery & command (internal only)](https://docs.google.com/document/d/1ngbta0HM50P3lZiQiT8m5lZn54WJW5wJXW5jwT3xVts/edit#heading=h.r950ejc8058m)
- [FY23 use cases in detail (internal only)](https://docs.google.com/document/d/1k7w-sgK3T4B_kLi9wuEIvvMdRp4hPd0YtsUt0UpwvsU/edit#heading=h.t4fumzvh3saz)
- [Productboard use case index (internal only)](https://sourcegraph.productboard.com/feature-board/3957049-fy23-use-cases)
- [How Code Insights maps to FY23 Use Cases](https://docs.google.com/document/d/1NXR0eX9VseJGT_BfCata_WR-yP0VxPsyYIyrsTOuoPs/edit#) (private until GA)

### Principles

- Sourcegraph is universal code search, not universal "everything" search. Any additional data types in our search need to be relevant to the software development workflow.
- We want every developer, not just a specific niche audience, to use Sourcegraph.
  - We won't adopt polarizing public stances that would divide our audience.
- Our product should strive to be fundamentally privacy-respecting and secure. This means that users don't need to trust us to verify that their data is private and secure.
- Build on-ramps in our product to turn more people into frequent users, instead of building the product _for_ infrequent users (which is a self-fulfilling prophecy).
- We eventually want to be a platform that ties together all of the tools developers use.
  - Other developer tools are partners, not competitors.
  - This entails designing for extensibility in our product (and documenting it more thoroughly) as a first-order priority.
- Sourcegraph provides greater value the larger a software team. We are building not just for individual developers, but for development teams. We believe software development is increasingly a multiplayer game.

Additionally, these are our [product design principles](../../departments/engineering/design/product_design_principles.md).

### Assumptions

- Sufficiently good code search will be useful to every developer many times per day (on average). It may take a while to convert any specific person into a frequent code search power user, but it will happen eventually.
- Code search that is _exclusively_ for public/open-source code is not actually that useful because most people spend most of their time working on their organization's internal code.
- Any given developer will only pick one code search tool to use. Any given company will standardize on a single code search tool.
  - Therefore, to avoid fragmentation, Sourcegraph should be not only _much_ better than the alternatives, but also _not worse_ in any significant way.

### Pricing

- Trying Sourcegraph (to prove it works and is valuable) is free and (if you want) self-service.
- If your organization is getting value from Sourcegraph with a lot of users, our [pricing](https://about.sourcegraph.com/pricing) is designed so that we earn money from you. This lets us invest in improving our product.
- All users at a given customer are on the same pricing tier. This is simpler than having users at different tiers and encourages us to build things that are broadly valuable.

## This year (FY23)

Our strategy for FY23 is: **target 5 specific use cases for existing customers first to grow ARR.** ([Last year's strategy](history.md#what-we-learned-from-fy22s-strategy) was about serving larger and smaller customers.)

Let's break that down:

- [Target 5 specific use cases](#target-5-specific-use-cases)
- [Iterate with existing customers first](#iterate-with-existing-customers-first)
- [Grow ARR](#grow-arr)

### Target 5 specific use cases

So far, we've been selling code search to companies that know they need code search. But most companies don't know they need code search or what problems it solves. Even power users don't know all the ways they could use code search. To overcome this, we'll market/design/develop/sell around five specific use cases that we'll target (mapped to our ideal customer profile, personas, and value drivers) that are immediately and obviously compelling to many more devs and companies.

Some customers already use Sourcegraph for these use cases by stitching together our product capabilities in novel ways. That's great for those particularly industrious customers, but we want the use cases to feel so obvious and natural to every user, which will require a lot of product and engineering work. This is not just a marketing/positioning/pitching exercise.

See [above](#use-cases) on this page for the complete list of use cases and supporting links.

### Iterate with existing customers first

Product development (especially around target use cases) will go faster, incur less risk, and yield a more compelling and valuable product by iterating with existing customers (who already use Sourcegraph for the use cases and can give us more and better feedback), not new prospective customers.

Winning new customers is still very important, and we think this strategy will actually maximize new customer revenue. After all, what's more compelling to a new customer: (a) a product that demonstrably meets your needs, as validated by other well-known customers, or (b) a product that requires custom work before it meets your needs? Of course it's (a), and to achieve that, we need to build the target use cases to be so compelling that our existing customers adopt them (and expand usage/revenue) and so that new customers adopt as-is without customizations (with faster, smaller initial lands).

Don't think about this as "say no to building for prospects". Instead, think "create and execute on such a compelling product roadmap that we can meet our revenue targets and win new customers without needing to build specifically for prospects".

### Grow ARR

ARR (annual recurring revenue) is _the_ key metric for our business because:

- ARR is a good proxy for the long-term value we create for customers.
- Earning revenue (being customer-funded) is the only way to build a long-term, independent company.

Everyone here helps grow ARR (and if you don't know how or have better ideas, speak up!). It's subtler but just as important to help ensure ARR corresponds to long-term customer value through our culture, practices, and values.

## Team strategy pages

- [**Product & Engineering**](../../departments/engineering/strategy-goals/index.md)
  - [Highlights of planned features from all teams (currently internal only)](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gd8d1ce5e98_0_164)
  - [Feature areas by maturity, tier, or code host compatibility](../../departments/engineering/product/index.md#feature-matrices)
  - [Search core and Search product](search/index.md)
  - [Batch Changes](batch-changes/index.md)
  - [Code Intelligence](code-intelligence/index.md)
  - [Code Insights](code-insights/index.md)
  - [Dev Experience](dev-experience/index.md)
  - [Frontend Platform](frontend-platform/index.md)
  - [Content Platform](content-platform/index.md)
  - [IAM](iam/index.md)
  - [Integrations](integrations/index.md)
  - [Growth](growth-team/index.md)
  - [Repo Management](repo-management/index.md)
  - [Security](https://github.com/orgs/sourcegraph/projects/257/views/3)
  - DevOps/SRE
  - [Delivery](delivery/index.md)

## Historical strategy

See "[Historical strategy](history.md)" for explanations of changes in our strategy and older concepts.
