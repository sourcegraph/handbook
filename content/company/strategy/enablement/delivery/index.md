# Delivery strategy

This page outlines the vision, strategy, and goals of the [Delivery team](../../../../engineering/enablement/delivery/index.md).

---

# Mission & Vision

## Mission

Enable any Sourcegraph prospect or customer to use Sourcegraph in a way fits within their environment and allows them to easily access the value that our product provides. Make it as easy as possible for customers to access the value of Sourcegraph's latest developments through a simple upgrade process.

## Problem Space

While there are seemingly 3 problems here, the reality is that it narrows down to one.
(This is a slight generalization as there are things that can be done to improve each individually, but the root of the majority of the issues lie in one place, and we consider that to be our opportunity to deliver maximum value)

#### 1. POCs

- POCs take one of two forms:
  1. A very simple deployment that is likely not representative of the customers environment or the way in which they’ll actually deploy Sourcegraph
  2. A high fidelity POC that is as close to what their production deployment looks like
- In scenario A, the complexity is mostly avoided, the internal compliance and security hoops are largely avoided, and the simpler we can make the deployment, the shorter the time to value.
- In scenario B, it’s essentially the same, or as close as possible to, a production deployment.

#### 2. Upgrades

- While upgrading seems quite distinct to deployments, the reality is that both the deployment method (Docker Compose or Kubernetes) and the configuration method used (direct file edits or Kustomize) make a huge difference to the ease of upgrade.
- While there is work we could do to lessen the cost of upgrades (e.g. allow upgrading more than one version in one go) this doesn’t achieve the aim of having every customer update every version. The configuration and deployment mechanisms are the fundamental route to making upgrades easier.

#### 3. Production deployments

- As above, both the two things above essentially fall down to the deployment mechanism, which also includes the method used to configure the deployment.

## Vision

### 1 Year vision

Sourcegraph can be run by any user with a standard engineering background, at any scale, with ease. Configurations to the deployment are simple, easily made, and do not complicate upgrades. Sourcegraph customers appreciate the ease of upgrades and are keen to access Sourcegraphs latest updates. Customers are able to self-serve for deploying, upgrading, and troubleshooting deployments of Sourcegraph.

### 3 Year vision

Setting up and running Sourcegraph is trivial but superbly flexible, supporting customers spanning both the full range of technical capability and the full range of required configurability.

### 10 year vision

Customers are no more than 1 release behind the most recent release of Sourcegraph. Customers can seemlessly migrate between our supported deployment options with their changing business needs.

## Guiding principles

These are the principles that guide the work we do in delivery. Sometimes adhering to one causes us to compromise another, but they guide our decisions on what matters.

- We find and support the best deployment, configuration, and upgrade solutions to support the majority of our current and future customers
- We cannot cater to every customer’s wants and needs, and trying to would undermine our ability to serve all of Sourcegraph’s current and future customers
- We prioritize work that will best support the majority of our customers and prospects, sometimes compromising what we can offer to individual customers whose needs are not aligned with our strategic decisions
- We typically refer to our primary persona as a “site admin” - they’re the person or team responsible for deploying Sourcegraph, including any configuration required to make it fit into their existing environment and meet the security requirements
  - The site admin is often the linchpin of a successful deal, but they rarely have a hand in kicking off the use of Sourcegraph (and so can be less emotionally invested), but they are responsible for the deployment, which unlocks the value, whether that be during POC or production deployment
  - The ease of the site admin’s experience is critical to success as blockers for them block every other user, but site admin experience levels vary massively
  - Many site admins are normal engineers, rather than specialists in the types of technologies common for system deployments
- We aim to provide solutions that make immediate sense to any engineer responsible for deploying, configuring, and supporting Sourcegraph
- Since we cannot always provide something super simple and intuitive (sometimes unavoidable in the complex world of distribution technologies) we provide documentation that anyone with even a very basic technical understanding can follow
- We aim to use technologies that are commonplace, but sometimes we will deviate when the solution we can provide will better serve our customers and can still be offered with sufficient guidance and support

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

- The primary customer and support problem is one of the ease with which Sourcegraph can be installed and upgrades
  - This spans multiple sub problems, but a high level overview of the pain [can be read here](https://docs.google.com/document/d/1RPcTHbEDaKbPC0p0HaCLBMeLyz-18do9LZ4KRt_ZagU/edit#)

TODO add more specific customer/support problem information

# Strategy and plans

## Goals

🎯 Reduce the average number of issues raised relating to POC or Production deployments

🎯 Increase the percentage of customers adoption new releases within 1 month

🎯 TBD

## Applicable OKRs

The business objective can be most concisely summarized as:
Shorten the time to value for POC and production deployment customers

The specific OKR that pertains to this is currently

1. Accelerate time to experiencing value for revenue-driving customers
   - KR: Reduce the % of deployments that result in Delivery team issues
     - Baseline: TBD
     - How we measure: Count of deployment-related issues (manually keeping track)
     - Why? Deployments are critical to our customers' successful use of Sourcegraph. Delays and issues in POC setup negatively impact deal success and size; production instance delays undermine rollout and expansion; and upgrade issues limit the speed and ease with which we can deliver greater value to existing customers, which in turn hinders expansion and renewals. More information.
     - Teams: Delivery (main driver), Customer Support (support; external to org), Customer Engineering (support; external to org)

(Non-relevant KRs for other teams removed)

## Principles of our approach

The following are some important principles of the approach we’re expecting to take.

**1. The suite of approved and supported deployment and configuration options that we offer may not include the current options.**

- Feedback from current customers regularly points to three main points of friction (lack of Helm support, merge conflicts during upgrades, fear of Kustomize during deployment configuration), and LOTS of anecdotal requirements.
- While we could try and meet all the asks from existing customers, since they are largely inconsistent and related to customers own process and limitations, those are considered anecdotal and not representative of Sourcegraph’s future 1000 customers.
- However, the lessons learned from use of our current options should absolutely be utilized in the consideration of all options available.
- As a result, the right approach is to reconsider the options as if starting from scratch.
- The 2 most influential factors will be:
  1. Industry best (or at least most common) practices for deployment of tools like Sourcegraph
  2. Compatibility with our products own deployment needs
- This does NOT mean that we will cease to support this for existing customers; we will either provide support for the life of customers using any retired option, or we will offer a route to migrate and work to support that.

**2. Managed instances are not on the table as a solution to this.**

- While they offload the pain to us, and we do charge customers for that privilege, the burden of proving our security is higher for managed instances.
- In the future, the expectation is that managed instances will become a spin off single-tenant version of the Cloud (SaaS Sourcegraph).
- But, the aim will not be to migrate customers to single-tenant managed instances, but to migrate many to the multi-tenant SaaS sourcegraph.com.
- As a result, it’s firmly believed that the value of managed instances (not and future) is limited to unblocking Sourcegraph for customers who either lack the knowledge or inclination to run it themselves, are willing to pay for that, and cannot or will not use sourcegraph.com.

## What's next and why

> More detailed plans related back to the themes and goals. If your time frame covers more than a quarter, it would be valuable to give some indication of time within the plans in this section, to help others appreciate the likely ETA of value.

Note that the time periods are rolling time periods and the plans here are reviewed and updated monthly.

### The direction of our approach

This problem has no silver bullet, but the approach we’re expecting to take is roughly the following, in approximate order:

1. Start from scratch, discounting all existing customers and imagine all possible deployment options
2. Assess these against all factors that can help judge them:
   - (Note: This is not a list of all requirements, and more a list of considerations from which more detailed requirements can be drawn)
     - Lessons learned (from existing deployments and from our engineers’ own experiences)
     - Industry standards and common industry expectations
     - Compatibility with our own products deployment needs
     - The cost of support and maintenance
     - The migration path for existing customers on EOL options
     - (Though the migration path—or lack—will not constrain us from making the right long-term choice if the cost of continuing to support existing deployment methods for existing customers is acceptable)
3. Shortlist the options
4. Review the shortlist with input from Sourcegraph staff and customers
5. Develop a POC of any promising candidates
6. Final decision about the option(s) we want to support
7. Implementation of the winning option(s)
8. Revise documentation
9. Sourcegraph team training (/production and circulation of training materials)
10. Launch winning option(s) and cease new deployments of EOL deployment options
    - This may involve a limited or beta launch before the current and discontinued options are phased out

### Short term (3m)

- [ ] Redcued friction in deployments and upgrades
  - See more information in the [problem statement [WIP]](https://docs.google.com/document/d/1RPcTHbEDaKbPC0p0HaCLBMeLyz-18do9LZ4KRt_ZagU/edit#)

### Mid term (6m)

- Expected to be a continuation of the work in the short term, though it's hoped that value will be delivered incrementally.

### Long term (12m)

TODO

## What we're not working on

> What are we explicitly not working on? Are there frequent requests from customers or other teams we are choosing not to take on? Making that explicit makes other teams understand the strategy and reduces back and forth.<br>If there is a time component (e.g. “We’re not working on this this Q but likely to pick it up next Q”), call it out.

TODO

## Closest partners

Customer Engineering and Customer Support are undeniably our closest partners and most knowledgeable internal stakeholders in this endeavour.

Not only will be closely engaging them to get feedback on the proposed deployment options, we will be depending on them for the successful rollout of the new options.
CE
In particular, we will be working closely with CE leadership in light of their efforts to establish a professional services (PS) capacity within CE.

With that in mind, one of the most critical things for Delivery to produce is a comprehensive record of what is officially support, ideally supplemented by reference architectures (à la Gitlab). When a CE takes on a new customer, or works with an existing to devise a new deployment, this guide should be critical to identifying whether all customer requirements can be met in a way that is already officially supported.

PS may still get involved, but will be doing so at the customers expense to facilitate the technical implementation. But the hope is that we minimize the need for that kind of involvement through careful selection of the right deployment and configuration options.

Instead, PS are (hopefully) going to be more likely needed to help facilitate in the scenario that the customer wants something not currently supported. This will be handled through a (yet to be drafted) exception process, engaging Engineering, Product, Support and any other relevant parties. Ultimately the decision will be made on the following factors:

- Can the work be done by CE PS, or will this require official support in the product in order to offer
- Will anything done as custom (by PS) be amalgamated into the product formally at some point
  - In the mean-time, or if the answer is no, who takes responsibility for supporting it
- Is the value of the deal (or potential expansion) sufficient to warrant the work
- Is this aligned with our strategic vision for the product and the business

A process for handling exceptions according to these assessment criteria (and likely more) will be drawn up to properly handle expectations in a way that does not leave us with regret.
