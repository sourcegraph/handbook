# Extensibility Team Goals and Priorities 

## Goals

See also our [completed goals](goals_completed.md).

###  Make Sourcegraph extensions an active ecosystem

**Problem:** 

- Sourcegraph's native extensions UI has problems of scale, such as displaying very many extensions. 
- Sourcegraph's extensions registry has UI problems that make it harder for users or CE/Sales folks to find or share valuable extensions.
- We haven't yet analyzed which customers are using which extensions most, and why. 
- Nearly all of the most commonly-used extensions were built by Sourcegraph rather than third-party developers. This won't scale – Sourcegraph has neither the resources nor the insight that third-party developers have when it comes to building useful extensions. 

**Milestones:**

1. ✅ We can collect anonymized, aggregate usage data of our extensions to determine the popularity and usage of (existing and future) extensions ([RFC 267](https://docs.google.com/document/d/1HKgwTyG-IcRM81xLAmussWV4EdK95uy7GjKFIG8vgU4/edit#heading=h.trqab8y0kufp)). 
   - **Outcome:** We can measure usage and adoption of extensions, by extension ID, across our customers in order to make informed product decisions. 

1. 🔄 The on-Sourcegraph extensions UI (action bar and contribution points) is clear and scalable, to help users discover and use extensions. 
   - **Outcome:** - [*N<sub>1</sub>*][N1]% of Sourcegraph server users use at least one extension a week. 

1. 🔄  The extensions registry promotes discovery of relevant extensions and third-party extensions. 
   - **Outcome:** The Sales and CE teams are excited and confident when showing off the extensions registry and extensions features to customers. 

1. Sourcegraph partners with relevant third-party services to publish their own extensions. 
   - **Outcome:** Three "partnership" extensions have been built by Sourcegraph partners. 

1. We can safely and confidently oversee the extensions ecosystem of third-party contributions without needing to individually review published extensions. 
   - **Outcome:** Customers are qualitatively confident in using extensions built by non-partner third parties. 
   - **Outcome:** We have a scalable process and policy for publishing or verifying extensions. 

1. Sourcegraph extensions become an "ecosystem" (third parties build extensions using docs/tutorials/marketing promos; expose metrics and adoption of extensions to developers and/or public). 
   - **Outcome:** Three custom extensions have been built by customers. 
   - **Outcome:** One custom extension has been publicly published by an existing customer and is used by developers not at that customer. 
   - **Outcome:** One of the five most-used Sourcegraph extensions was built by a non-Sourcegrapher. 

### Support and efficiently maintain our code host integrations and browser extensions

**Problem:** 

- Code hosts periodically update the design and structure of their web platforms, which can break our browser extension and integrations
- New customers have unique configurations that may interfere with how the code host integration communicates with the Sourcegraph instance
- Releasing our browser extensions is currently a manual process for two of our three supported browsers, which means every fix takes additional time to release

**Milestones:**

1. The Sourcegraph Safari and Firefox extensions are within the same order of magnitude difficulty to release as the Chrome extension. 
   - **Outcome:** Releasing the Safari and Firefox extensions take less than an hour combined. 

1. [Ongoing] The Sourcegraph code host integrations receive updates as necessary to work on our supported code hosts. 
   - **Outcome:** The Sourcegraph extensions support code hosts that customers may migrate to, like BitBucket Cloud. 

### Short term

Our goal work for the current iteration can be found on our [GitHub project board](https://github.com/orgs/sourcegraph/projects/145).

## Roadmap

The Extensibility team maintains an [objective-based roadmap](https://sourcegraph.productboard.com/roadmap/2599047-extensibility-fy22-roadmap)

At a glance roadmap as of 2021-03-17:

![2021-03-17](https://sourcegraphstatic.com/handbook/product-roadmaps/2021-03-17ExtensibilityRoadmap.png)

[N1]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit