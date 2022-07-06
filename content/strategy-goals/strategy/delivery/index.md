# Delivery strategy

This page outlines the short-term strategy for the [Delivery team](../../../departments/engineering/teams/delivery/index.md).

---

## Q2 Objective and Key Results

### Problem Area: Improve customer admin experience with deploying, upgrading, and maintaining self-hosted Sourcegraph instances.

Our goal is to ensure any Sourcegraph prospect or customer to use Sourcegraph in a way fits within their environment and allows them to easily access the value that our product provides. Make it as easy as possible for customers to access the value of Sourcegraph's latest developments through a simple upgrade process

- Key Result 1: Reduce the number of support tickets raised to Delivery team about deployment resourcing needs by shipping improved documentation for Resource Estimation based on customer product usage.
- Key Result 2: Define a data metric inventory and cross-functional DRIs required for long term Resource Estimator tooling improvements.
- Key Result 3: Complete an RFC for a proposal to establish a centralized location to store data about customer architecture and resourcing needs.
- Key Result 4: Interview 5 or more enterprise customers who have either deployed Sourcegraph to production or ran an upgrade in the last 3 quarters to understand their pain points
- Key Result 4: Ship customer research insights document synthesizing customer research findings.

Within this area, in Q2 we are not working on:

- Shipping improvements to Resource Estimator tool itself
- Support for non-sequential version upgrades

### Problem Area: Build customer trust by improving internal troubleshooting processes

We want to streamline our troubleshooting processes for our Customer Engineering and Customer Support teams to ensure we can reduce any friction customers may face during setup, upgrade, or maintenance of a self-hosted Sourcegraph instance. Our goal is to help improve the customer experience and reduce the time to resolve issues.

- Key Result 1: 80% of Github issues escalated to Delivery for customer issues are using the Delivery team escalation template in Github which includes standardized peocesses for troubleshooting.
- Key Result 2: Publish reference architecture to Sourcegraph docs based off a modified and generalized architecture built for Stripe POC

---

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
