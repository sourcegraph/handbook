# Repo Management strategy

This page outlines the vision, strategy, and goals of the [Repository Management team](../../../../departments/product-engineering/engineering/enablement/repo-management/index.md).

---

# Mission & Vision

## Mission

Our mission (which we do choose to accept) is to ensure that Sourcegraph’s most critical prerequisite to providing awesome customer value—access to code—is robust, stable and meets the needs of our customers, both directly and in how it underpins everything else in Sourcegraph.

## Vision

### 1 Year vision

> Our support of currently supported code hosts scales to the biggest companies with minimal customization or friction.

> Sourcegraph engineers are able to interact with the components that facilitate access to code in a consistent and simple way, enabling new functionality to be built to support all code management systems with little-to-no customization.

### 3 Year vision

> Sourcegraph is easily set up to access any code management system, regardless of type. Sourcegraph functionality works with any code, from anywhere.

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

## Product Gaps

[This document](https://docs.google.com/document/d/14P-QtLBjd264I9-p70wL6rP36_GltAGsF18sMWawzGc/edit#heading=h.vki1iuq1jfl1) is an analysis of all currently recorded product gaps linked to our team.

# Strategy and plans

## What's next and why

Note that the time periods are rolling time periods and the plans here are reviewed and updated monthly.

### Short term (3m)

#### Sub-repository permissions - Perforce support

- **Current status:** In progress
- **Expected effort:** ~60% team time
- **Why:** Support a range of customers, across various code hosts (but beginning with Perforce) who utilize sub-repo level permissions within their code host.

[PD for the work](https://docs.google.com/document/d/1d8j-6VC_nk8HXEDT6U2_s-_9uSzgzHWZzrJjII9pKEE/edit#heading=h.hamivlgnpbpn)
[Tracking issue for the work](https://github.com/sourcegraph/sourcegraph/issues/27916)
[Timing analysis for the project](https://docs.google.com/document/d/1p0a9YSj_OPJcmjHZgdou2RKGw-qLo_nzdwpryisyfzo/edit#heading=h.g3dopdwgj3yv)

#### More scalable explicit permissions API

- ** Current status:** In progress/further planning
- **Expected effort:** ~15% team time
- **Why:** At least one large customer has experienced scaling issues resulting from overly granular endpoints used to inform Sourcegraph of the required repo permissions. As a result, endpoints that make broader changes but require less calls are needed.

[Tracking issue](https://github.com/sourcegraph/sourcegraph/issues/28590)
[Originating customer issue](https://github.com/sourcegraph/customer/issues/546)

### Mid term (6m)

#### [GitServer HA Cont.](https://docs.google.com/document/d/1U5KmrVRezD1wjs1g2dBkeCJIfGTJ4dzZ8zXudJaDNNU/edit#)

- **Why:** Support our largest customers in a robust and reliable way, no matter how many repos and what size.
- **What:** Better support for monorepos, likely through better utilization of ability to replicate or shard monorepos across multiple GitServer instances within Sourcegraph

#### Gerrit Permissions syncing

- **Why:** Needed to unblock at least 1 [customer](https://github.com/sourcegraph/accounts/issues/246). We are currently [investigating](https://github.com/sourcegraph/sourcegraph/issues/23563) the value to other customers who are known Gerrit users, and the depth of support needed.
- **What:** Gerrit supports permissions more granular than just repo-level. Since this is needed to properly (in a long term way) support Perforce too, we're expecting to do work to change our internal model to support more granular permissions, then add Gerrit support properly on top of this.

#### [BB Cloud permissions](https://github.com/sourcegraph/sourcegraph/issues/19782)

- **Why:** Currently blocking expansion for at least [one large customer](https://github.com/sourcegraph/customer/issues/288) as well as being strategically valuable as Atlassian have announce EOL for BB Server, meaning many other BB Server customers will likely move to BB Cloud and want this support.
- **What:** Support permissions syncing for BitBucket Cloud.

## What we're not working on

#### Phabricator support

- **Current status:** Under investigation
- Currently under investigation to try and ID customer need in light of upcoming Phabricator deprication.
