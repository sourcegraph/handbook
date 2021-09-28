# Repo Management Direction

This page outlines the vision, strategy, and goals of the [Repository Management team](index.md).

---

# Mission & Vision

## Mission

Our mission is to maintain and evolve the methods by which code is pulled into Sourcegraph from code hosts, in a way that supports all required functionality while maximizing performance, reliability, and ease of use.

We also have temporary custody of Authentication, with the aspiration being to split the team to give auth a dedicated team to own it. As a result, unless otherwise specified, the rest of this page relates to Repo Management and code host work.

## Vision

### 1 Year vision

Sourcegraph provides the means to simply, easily, and reliably connect to all common code management systems, allowing you to use any of Sourcegraph’s brilliant functionality with any of your code, regardless of its storage system. Our support of different code hosts scales to the biggest companies with minimal customizations.

Sourcegraph’s own engineers are able to interact with the components that facilitate access to code in a consistent and simple way, enabling new functionality to be built to support all code management systems with little-to-no customization.

### 3 Year vision

Sourcegraph is easily set up to access any code management system, regardless of type. Sourcegraph functionality works with any code, from anywhere.

### 10 year vision

> A sentence or two on your ten year vision is where you can really go wild and describe the problems you want to solve and solutions you want to deliver unbound by limitations of technology or scope. Be inspiring and look to the our 10 and 30 year strategies for ideas.

TODO

## Guiding principles

- We aim to provide consistent support for the code hosts we support
- We cannot cater to every customer’s wants and needs, and trying to would undermine our ability to serve all of Sourcegraph’s current and future customers
- As a result, we prioritize work that will best support that majority (current and future), sometimes compromising what we can offer to individual customers whose needs are not aligned with our strategic decisions
- Our work underpins almost every feature Sourcegraph offers, and so our work is of value to all users of Sourcegraph
- More directly our work is utilized by any user setting up code host connections - this can be any kind of Sourcegraph user, ranging from IC developers to central administrators (often called “site admins”)
- Many customers will utilize more than one code management system and so oftentimes have more than one code host to set Sourcegraph up with
- Customers do not want to have to take code host differences into account, so we aim to make the setup, management, and capabilities of our code host support consistent, despite the technical differences between them
- We aim to ensure our setup of code hosts is simple enough for any engineer but also ensure that we provide documentation that is sufficiently clear that any user could follow it to set up code hosts
- Many customers have a large number of repos and a number of large repos, and so performance, scalability, reliability, and resilience are as important as the ease of setup
- We also serve the rest of the Sourcegraph engineering team, who use the code host connections and replicated code to provide their own functionality
- As a result, we aim to make sure that the support of code hosts is as consistent as the different code hosts allow in terms of facilitating the functionality Sourcegraph offers

---

# Where we are now

> - Where is the team's area of ownership in terms of its maturity? Is it new and basic, or complete and lovable? Are different features at different levels?
> - What did we achieve in the last few months?
> - What key learnings did we recently make?
> - What is on the critical path for growth?
> - How does the product fit within Sourcegraph as a whole?

TODO

## Top customer, support, sales and marketing issues

> ⚠️ Please see below in [Strategy and plans](#strategy-and-plans) for more information on which problems are actually in scope of the team.

- Monorepo support
  - **Problem:** A major priority is to start supporting repositories that are massive in scale. Today, this does not work simply because the machines take too long to process unindexed searches, even with a MASSIVE machine.
- Phabricator support
  - **Problem:** Phabricator support within Sourcegraph was never properly implemented, resulting in limited support.
- Bitbucket Cloud permission syncing
  - **Problem:** Atlassian are ending support for BitBucket Server and staring moving all customers to the Cloud. But Sourcegraph doesn't currently support native permission syncing for BitBucket Cloud.
- ***

# Strategy and plans

## Goals

TODO

🎯 Goal 1

🎯 Goal 2

🎯 Goal 3

## Themes

TODO

## What's next and why

> More detailed plans related back to the themes and goals. If your time frame covers more than a quarter, it would be valuable to give some indication of time within the plans in this section, to help others appreciate the likely ETA of value.

> ℹ️ The plans for this team are currently being worked out and the following summarizes the current plans.

Note that the time periods are rolling time periods and the plans here are reviewed and updated monthly.

### Short term (3m)

#### Monorepo support

- **Current status:** In progress
- **Expected effort:** <5% team time
- Most of the previously considered work actually resides with other teams, so our role in this will largely be support.|

#### GitServer HA

- **Current status:** In progress
- **Expected effort:** ~50% team time
- This is partially in aid of monorepo support, and partly system resilience.
- More information and problem context available [here](https://docs.google.com/document/d/1U5KmrVRezD1wjs1g2dBkeCJIfGTJ4dzZ8zXudJaDNNU/edit#).

1. Current work is related to replacing the hashing algorith to prevent the redistribution (rebalancing) of repos across the available Gitservers when a Gitserver is added or removed.
2. Next step is to trial repo duplication (copies on more than one Gitserver) in Sourcegraph.com
3. After that, making control of the replication factor customer editable (likely not in Q3)
4. Future work (Not within Q3) - sharding monorepos across multiple Gitservers

#### Perforce support

- **Current status:** In progress
- **Expected effort:** ~10% team time

- [x] Support Perforce wildcard permission syncing (completed by the Distribution team - [docs](https://docs.sourcegraph.com/admin/repo/perforce#wildcards))
- [ ] Improved git-p4 repo syncing performance
  - Close collaboration between Distribution team and [large customer](https://github.com/sourcegraph/accounts/issues/6716)
  - Were able to make massive headway updating git-p4, but the customer have produced an even faster C++ version
  - Aim is for us to take over responsibility

### Mid term (6m)

TODO

### Long term (12m)

TODO

## What we're not working on

> What are we explicitly not working on? Are there frequent requests from customers or other teams we are choosing not to take on? Making that explicit makes other teams understand the strategy and reduces back and forth.<br>If there is a time component (e.g. “We’re not working on this this Q but likely to pick it up next Q”), call it out.

TODO

#### Phabricator support

- **Current status:** Under investigation
- **Expected effort:** TBD
- Currently under investigation to try and ID customer need in light of upcoming Phabricator deprication.
