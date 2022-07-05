# Repo Management team

The Repo Management team is part of the [Enablement](../index.md) org.

## Mission

Our mission (which we do choose to accept) is to ensure that Sourcegraph’s most critical prerequisite to providing awesome customer value—access to code—is robust, stable and meets the needs of our customers, both directly and in how it underpins everything else in Sourcegraph.

## Members

{{generator:product_team.repo_management}}

## Strategy

[Find out about the Repo Management team's vision, guiding principles, current status quo, and strategic plans](../../../../strategy-goals/strategy/repo-management/index.md)

## Onboarding

Check out our [onboarding guide](onboarding.md).

## Responsibilities

### Code host / repository management

Including maintenance, development, support, and advice for:

- Code host connections
- Code replication into Sourcegraph
- Code storage within Sourcegraph
- Repository permission syncing
- Permission caching
- Explicit permissions API

### Authentication

Temporary custody of authentication, efforts largely limited to support and maintenance

## Contact

- #repo-management channel or @repo-management-team in Slack.
- [team/repo-management](https://github.com/sourcegraph/sourcegraph/labels/team%2Frepo-management) label and @sourcegraph/repo-management team on GitHub.

For information on how to contact us for support, or how we handle support, please see [our processes](processes.md).

## Mental Model

Repo Management is both an externally and internally facing team, as we not only have to balance the direct needs of customers who directly set up and engage with the functionality we provide, but we also underpin most of Sourcegraph’s featuresby providing them access to customers’ code.

Our vision is therefore derived from customer insights and awareness of market trends, but is also coupled to the vision of all other teams within Sourcegraph: we are only successful if we’re enabling the maximum number of teams to hit their goals. Our roadmap is therefore comprised of direct customer needs, functional gaps in the product, as well as preempting work in support of other Sourcegraph teams’ roadmaps.

We avoid blocking other teams by delivering new features and performance improvements before those teams and our customers feel their need. We identify potential upcoming bottlenecks by partnering with other Sourcegraph teams, current customers, and future customers to understand their vision and where Repo Management may block them from achieving their own visions.

Building a multi-year product vision is hard, but Repo Management can’t effectively serve our customers if we don’t know where they want to be in the future. Every team in Sourcegraph depends on Repo Management and we can’t achieve our goals without building a technical strategy that best supports the maximum number of our customers.

We believe that solving our big rocks is non-trivial and our strategic projects are technically complex implementations that can take multiple engineering months to complete. This means we need to start working now on features that teams and customers need in 6 months. For example, if Batch Changes wants to deliver feature X in Q1 2024 and feature X depends on feature Y from Repo Management, then Repo Management may need to begin work at least as early as Q3 2023 to avoid becoming a blocker.

We solve problems in a way that increases our support exponentially, instead of delivering value linearly. This means that, where possible, we design solutions that scale to multiple use cases: we would rather design sub-repo permissions in a way that supports all code hosts, instead of designing and delivering a solution for git, then Perforce, then CVS.

## How We Plan

We prioritize work across two delivery streams:

1.  Product Engineering: Unblocking new and existing customers and other engineering teams by delivering new functionality or expanding coverage of existing features
1.  Performance Engineering: Strategic investments to improve the performance, scalability and reliability of our infrastructure to stay ahead of Sourcegraph’s growth curve

We prioritize work differently depending on the delivery stream.

### Product Engineering

We prioritize work in the product engineering delivery stream using one metric: (I)ARR. We work with customer engineering and sales to assign all projects an expected revenue impact within a set timeframe. Sometimes, when the timeframe stretches beyond the sales pipeline, the value is entirely speculative.

We can deliver the expected revenue impact in two ways:
Directly deliver functionality that unblocks a new customer or expansion of an existing customer (e.g. launch native SVN support to unblock the revenue linked to specific prospects)
Unblock feature launches from other Sourcegraph engineering teams by delivering services that have a dependency on (e.g. need good example)

While revenue is the primary metric for prioritization, we do accommodate work that underpins critical company goals, and other metrics are taken into account, such as the severity of the the customers need (i.e a large amount of revenue not blocked by a “nice to have” request is unlikely to supercede even a moderate amount of blocked revenue).

> In FY23, our focus and effort is going to be guided far more on the basis of our existing customers, on the basis that they and their needs are representative of our target market. For now, we will therefore be focusing on rounding out and strengthening our offering, rather than trying to stretch to expand into the long tail of code hosts.

### Performance Engineering

We prioritize work in the performance engineering delivery stream by using our deep system knowledge to identify future scaling, performance, or scalability concerns. These concerns are judged against the benchmark of our largest customers and prospects - but with the aim to significant exceed current needs, in order to satisfy unpredictable future need. Sometimes we undertake work that, rather than being directly customer impacting, is instead related to our future ability to deliver customer value - such as rearchitecting the system to unblock faster development or future system enhancements. These projects may not directly impact ARR, but they drive long-term improvements to our systems, ensuring we don’t negatively impact customers or other teams in the future.

## Processes

Read more about [how this team works](processes.md).

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../dev/process/principles-and-practices.md) and [Enablement org's principles and practices](../index.md#principles-and-practices).

We also have a set of [guiding principles](../../../../strategy-goals/strategy/repo-management/index.md#guiding-principles) that help inform our decision making about our strategic and prioritization choices.

## Internal

[Internal page](internal.md) geared towards Repo Management team members.

## Other

- [Operational rotation](operational-rotation.md)
- [Internships](internships.md)
