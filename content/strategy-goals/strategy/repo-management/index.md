# Repo Management strategy

This page outlines the vision, strategy, and goals of the [Repository Management team](../../../departments/engineering/teams/repo-management/index.md).

---

# Mission & Vision

## Mission

Our mission (which we do choose to accept) is to ensure that Sourcegraph’s most critical prerequisite to providing awesome customer value—access to code—is robust, stable and meets the needs of our customers, both directly and in how it underpins everything else in Sourcegraph.

## Vision

> Our support of code hosts scales to the biggest companies with minimal customization or friction. Sourcegraph engineers are able to interact with the components that facilitate access to code in a consistent and simple way, enabling new functionality to be built to support all code management systems with little-to-no customization. Sourcegraph is easily set up to access any code management system, regardless of type. Sourcegraph functionality works with any code, from anywhere.

# Where we are now

Sourcegraph’s core value proposition is to allow developers to search across _all_ of their code, regardless of which code host it is stored in. Repository management owns the core technology used to connect and sync code from customers code host to Sourcegraph.

There are two official ways to connect code to Sourcegraph:

- Directly connecting to the code host
- Leveraging src-srv-git or srv git

**Directly Connecting to the Code Host**
Sourcegraph supports [4 main code hosts as Tier 1](https://docs.sourcegraph.com/admin/external_service): GitHub Cloud and Self-hosted, GitLab Cloud and Self-hosted, BitBucket Cloud and Server, and Perforce. Tier 1 code hosts represent our highest level of support and most reliable code host integrations. Full details about current support for these Tier 1 code hosts can be found [here](https://docs.sourcegraph.com/admin/external_service).

**Leveraging src-srv-git or srv git**
For all other code hosts, Sourcegraph provides a CLI tool called src-expose to periodically sync and continuously serve local directories as Git repositories over HTTP. Code hosts that leverage this method have mixed Sourcegraph functionality.

- Search based code intel: ✅
- Precise based code intel: ✅
- All types of search: ✅
- Code Monitors: ✅
- Serach Contexts: ✅
- Permissions syncing: ❌ (must use explicit permissions API)
- Batch Changes: ❌
- Code Insights: ❌

Code hosts in this method: Azure DevOps, CVS, SVN, Gerrit, and any others not mentioned in Tier 1.

## Strategy and Plans

Last updated: Oct 14, 2022

In the long term we want Sourcegraph to provide seamless, out-of-the-box, code host integrations for code hosts that cover 90% of the market usage. This is critical to ensuring that Sourcegraph delivers on our vision of allowing customers to search across all of their code, regardless of where it is stored.

### What’s next and why (H2FY23)

- **Increased scale support for Tier 1 code hosts** - Our customers often times have many GBs and sometimes TBs of code, across many different code hosts. We are working hard to identify and solve performance bottlenecks. This will ensure that code stays as fresh as possible, even across TBs of code. We will be focusing on our Tier 1 code hosts for this testing.
- **Webhooks for Repo Syncing** - Occasionally, repositories in Sourcegraph can fall out of date with the codehost due to the refresh algorithm we use. To solve this, we’ll introduce webhooks allowing the Sourcegraph application will receive an event each time new code is committed to a repository on the code host, and can trigger a sync for that repository in Sourcegraph
- **Perforce Improvements** - We know our Perforce implementation still has a number of [known limitations](https://docs.sourcegraph.com/admin/repo/perforce#known-issues-and-limitations). By end of FY23, we intend to continue iterating on our Perforce implementation. These improvements include changelist support, streams support, and reliability improvements.
- **Other Strategic Readiness Improvements** - We’ll be focusing on improvements that enable us to confidently support our largest existing customers. This includes experience improvements for admins, improved reliability, and features designed specifically for customers with up to 50k users and 500k repositories.

### What we’re not working on and why

- **Any new Tier 1 code host support** - For the remainder of FY23, we will not work on introducing Tier 1 support for any new code hosts. We are not working on this in FY23 to focus on providing robust support for our existing 4 tier 1 code hosts.

# Detailed Roadmap

While we are working on making our roadmap publicly viewable, we are not yet ready to share our detailed roadmap publicly. Internal Sourcegraph employees can see the [full list of the tracking issues for Repo Management here](https://docs.google.com/spreadsheets/d/15rPg9SBfcp3OP6j7vkYwJkXNsLVWfxpM7JdT2QeSD6Y/edit?usp=sharing).

# Product Gaps

[This document](https://docs.google.com/document/d/14P-QtLBjd264I9-p70wL6rP36_GltAGsF18sMWawzGc/edit#heading=h.vki1iuq1jfl1) is an analysis of all currently recorded product gaps linked to our team.
