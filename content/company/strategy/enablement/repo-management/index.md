# Repo Management strategy

This page outlines the vision, strategy, and goals of the [Repository Management team](../../../../engineering/enablement/repo-management/index.md).

---

# Mission & Vision

## Mission

Our mission is to maintain and evolve the methods by which code is pulled into Sourcegraph from code hosts, in a way that supports all required functionality while maximizing performance, reliability, and ease of use.

We also have temporary custody of Authentication, with the aspiration being to split the team to give auth a dedicated team to own it. As a result, unless otherwise specified, the rest of this page relates to Repo Management and code host work.

## Vision

### 1 Year vision

> Sourcegraph provides the means to simply, easily, and reliably connect to all common code management systems, allowing you to use any of Sourcegraph’s brilliant functionality with any of your code, regardless of its storage system. Our support of different code hosts scales to the biggest companies with minimal customizations.

> Sourcegraph’s own engineers are able to interact with the components that facilitate access to code in a consistent and simple way, enabling new functionality to be built to support all code management systems with little-to-no customization.

### 3 Year vision

> Sourcegraph is easily set up to access any code management system, regardless of type. Sourcegraph functionality works with any code, from anywhere.

## Guiding principles

- We aim to support code hosts consistently
- We prioritize work that supports the majority of customers (current and future), sometimes compromising what we can offer to individual customers whose needs are not aligned with our strategic decisions
- Sourcegraph users, ranging from individual developers to central administrators (often called “site admins”) get value from our work as it is utilized to set up code host connections
- Many customers utilize more than one code management system and do not want to have to take code host differences into account, so we aim to make the setup, management, and capabilities of our code host support consistent, despite the technical differences between them
- We aim to ensure our setup of code hosts is simple enough for any engineer but also ensure that we provide documentation that is sufficiently clear that any user could follow it to set up code hosts
- Many customers have a large number of repos. Performance, scalability, reliability, and resilience are as important as the ease of setup
- Our Sourcegraph engineering team uses the code host connections and replicated code to provide their own functionality. As such, we aim to make sure that the support of code hosts is as consistent as the different code hosts allow in terms of facilitating the functionality Sourcegraph offers

## Top customer, support, sales and marketing issues

Note that these are order by approximate known revenue impacted - but that the figures are likely not to be representive of the total value, and so the order in which these get address may not correlate with the order here. Click on the product gap link to find out the up to date impacted revenue amount.

#### Perforce support

- [Approximate revenue impacted](https://sourcegraph2020.lightning.force.com/lightning/r/a1B3t00000IkT1nEAF/view)

#### Gerrit Permissions syncing

- **Why** Lack of support for Gerrit permissions
- [Approximate revenue impacted](https://sourcegraph2020.lightning.force.com/lightning/r/a1B3t00000Il6IFEAZ/view)

#### [Phabricator support](https://github.com/sourcegraph/sourcegraph/issues/25111)

- **Why:** Phabricator support within Sourcegraph was never properly implemented, resulting in limited support.
- [Approximate revenue impacted](https://sourcegraph2020.lightning.force.com/lightning/r/a1B3t00000IkxK8EAJ/view)

#### [Bitbucket Cloud permission syncing](https://github.com/sourcegraph/sourcegraph/issues/19782)

- **Why:** Atlassian are ending support for BitBucket Server and staring moving all customers to the Cloud. But Sourcegraph doesn't currently support native permission syncing for BitBucket Cloud.
- [Approximate revenue impacted](https://sourcegraph2020.lightning.force.com/lightning/r/a1B3t00000IkxMkEAJ/view)

# Strategy and plans

## What's next and why

Note that the time periods are rolling time periods and the plans here are reviewed and updated monthly.

### Short term (3m)

#### Monorepo support

- **Current status:** In progress
- **Expected effort:** <5% team time (our role is largely in support of the [Search team](../../code-graph/search) who owns this work)
- **Why:** Monorepos are commonplace but exert a huge toll on systems like ours - so much so that customers feel a significant ammount of pain and with

#### [GitServer HA](https://docs.google.com/document/d/1U5KmrVRezD1wjs1g2dBkeCJIfGTJ4dzZ8zXudJaDNNU/edit#)

- **Current status:** In progress
- **Expected effort:** ~50% team time
- **Why:** Code host connectivity, scalability and reliability is at the heart of our product, underpinning literally all other features. As we scale the size of customers we’re trying to win and delight, we cannot avoid tactical work to expand our functional coverage (which code hosts we support and how completely), but we also need to ensure Sourcegraph can handle the current and future challenges that the largest customers will throw at it with regards to the size of their repos, number of repos and performance required. This is partially in aid of monorepo support, and partly system resilience.

- [ ] Current work is related to replacing the hashing algorithm to prevent the redistribution (rebalancing) of repos across the available Gitservers when a Gitserver is added or removed.
- [ ] Next step is to trial repo duplication (copies on more than one Gitserver) in Sourcegraph.com
- [ ] After that, making control of the replication factor customer editable (likely not in Q3)
- [ ] Future work (Not within Q3) - sharding monorepos across multiple Gitservers

#### Perforce support

- **Current status:** In progress
- **Expected effort:** ~10% team time
- **Why:** Support our largest customers in a robust and reliable way, no matter how many repos and what size.

- [x] Support Perforce wildcard permission syncing (completed by the Distribution team - [docs](https://docs.sourcegraph.com/admin/repo/perforce#wildcards))
- [ ] Improved git-p4 repo syncing performance
  - Close collaboration between Distribution team and [large customer](https://github.com/sourcegraph/accounts/issues/6716)
  - We were able to make massive headway updating git-p4, but the customer have produced an even faster C++ version
  - Currently in the process of adopting this into our product for use behind a feature flag - [GH Issue](https://github.com/sourcegraph/sourcegraph/issues/25583)

### Mid term (6m)

#### [GitServer HA Cont.](https://docs.google.com/document/d/1U5KmrVRezD1wjs1g2dBkeCJIfGTJ4dzZ8zXudJaDNNU/edit#)

- **Why:** Support our largest customers in a robust and reliable way, no matter how many repos and what size.
- **What:** Better support for monorepos, likely through better utilization of ability to replicate or shard monorepos across multiple GitServer instances within Sourcegraph

#### Gerrit Permissions syncing

- **Why:** Needed to unblock at least 1 [customer](https://github.com/sourcegraph/accounts/issues/246). We are currently [investigating](https://github.com/sourcegraph/sourcegraph/issues/23563) the value to other customers who are known Gerrit users, and the depth of support needed.
- **What:** Gerrit supports permissions more granular than just repo-level. Since this is needed to properly (in a long term way) support Perforce too, we're expecting to do work to change our internal model to support more granualr permissions, then add Gerrit support properly on top of this.

#### [BB Cloud permissions](https://github.com/sourcegraph/sourcegraph/issues/19782)

- **Why:** Currently blocking expansion for at least [one large customer](https://github.com/sourcegraph/customer/issues/288) as well as being strategically valuable as Atlassian have announce EOL for BB Server, meaning many other BB Server customers will likely move to BB Cloud and want this support.
- **What:** Support permissions syncing for BitBucket Cloud.

## What we're not working on

#### Phabricator support

- **Current status:** Under investigation
- Currently under investigation to try and ID customer need in light of upcoming Phabricator deprication.
