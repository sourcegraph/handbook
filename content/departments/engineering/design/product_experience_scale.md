# Product Experience at Scale

**Problem we’re solving:** We have a ton of scale-related work to be done and need a north star for the experience for a dev working in a 2XL account. [These problem statements](https://docs.google.com/document/d/1ZMinEqj2bI5xJ_6B-gHO7wCCL0ey6r2Z0JZJa6_r2DI/edit#bookmark=id.um13pq6kj5vf) outline “what” we need to build and this outlines “how” we will design/build these features to delight customers.

### Assumptions

- Mapping this to 2XL scale (500k repos and 50k users). So whenever we say “a developer” we mean one working in an org of 2XL scale unless otherwise stated.
- This only applies to GA features, experimental/beta features will not follow these as long as they are clearly marked within the app and related docs pages.
- Each team will need to define SLAs which support these experience principles. These only aim to define what a ‘great’ experience is for developers using Sourcegraph at scale.
- We will make these as concrete as possible, recognizing that interpretation will still be needed by each team

## Bad Experience

### Scale-readiness

- A developer using Sourcegraph cannot access core features because they break at scale and error messages do not provide insights.
- Application’s UI does not handle well large amounts of data - for example lists with many entires do not provide a smooth viewing and browsing experience
- The UI is not ready to handle neither the existing 2XL organization needs, nor their future requirements.

### Perceived performance

- A developer using Sourcegraph in a 2XL organization can feel the slowness of the application. This slowness may even render Sourcegraph unusable for these developers.
- A developer believes the product is broken, when in reality it is loading, due to a lack of clear loading information.

### Approach to handling the issues (reactive vs. proactive)

- Reactive: We (Sourcegraph) hear about issues mainly from our customers before we know about them.

## Good Experience

### Scale-readiness

- A developer can accomplish most day-to-day responsibilities and occasionally hits a paper-cut issue due to scale.
- Application’s UI handles well large amounts of data - the core functionality that includes lists has sort, search, and filter capabilities (extended/secondary features may not)
- The UI is ready to handle the existing 2XL organization needs
- We’re actively working on foreseeing and handling the future requirements of 2XL orgs

### Perceived performance

- A developer using Sourcegraph in a 2XL organization perceives Sourcegraph as ‘meeting expectations’ regarding the speed. There are no places in the application that are unusable.
- When a feature does not scale to meet the needs of a 2XL customer, there are clear guardrails put in place and communicated in-app to customers which prevent the feature from breaking.

### Approach to handling the issues (reactive vs. proactive)

- Proactive: We are aware of possible improvements we can make to improve experience for 2XL customers and we are actively working on adding them to our roadmaps.
- All known ‘Blocking’ and ‘Must have’ issues are solved.
- We have designed our own set of design principles for scale and we’re actively working on key product areas to follow these.
- In some places, where the experience and performance is not good but we are aware of it, we temporarily set degradation principles like warnings, better and more interesting loading states to make up for the development time we take to address scale.

## Great Experience

### Scale-readiness

- A developer at a large, strategic account of 2XL scale feels the same speed as if they were the only user; i.e. all functionality works. In many places they exceed their expectations.
- Application’s UI - the core functionality and the secondary features - handles exceptionally well large amounts of data.
- Most of the 2XL clients still have a room to expand their needs and Sourcegraph is ready to provide delightful experience.

### Perceived performance

- Key experiences are thoughtfully redesigned to work at 2XL scale (i.e. user management) including the introduction of features to support these experiences which are _only_ used at scale.
  - Example: All lists have sort, search, and filter capabilities
  - Example: Admin Analytics may include ‘drilldown’ functionality that lets an admin start high level (department) and drill down into specific teams/users. This may not be useful for smaller customers but is critical for large
- Sourcegraph features operate under the 100ms rule (source)

### Approach to handling the issues (reactive vs. proactive)

- Proactive: We continuously improve experience for 2XL customers to accommodate for their existing and future needs. We’re forward-looking, not reactive.
- All known ‘Blocking’, ‘Must have’, and ‘Nice to have’ issues identified are solved.
- We have clear SLAs and automated alerting for when our infrastructure is slowing down the experience for customers (i.e. we know about the slowness before the customer contacts us)
- We have designed our own set of design principles for scale and all product/features follow these.
