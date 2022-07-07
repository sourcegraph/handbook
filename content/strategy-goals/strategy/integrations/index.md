# Integrations Team Strategy

Quick links:

- [Integrations Backlog](https://github.com/orgs/sourcegraph/projects/213/views/26)

## Vision

Coming soon

## Strategy and Plans for FY’23

### Themes

#### Start introducing new concepts to Sourcegraph

In the long term we want Sourcegraph to become the primary source for information relating to code, tying all tools that developers use into a single platform.

Our first start in realising this is to integrate the concept of code ownership into Sourcegraph. This has been a highly requested feature with clear, validated use cases across all of our products. After code ownership, we will have a pattern of how we ingest, store and search across new concepts. We will then identify and prioritize subsequent concepts (and their associated use cases), and determine how we can incorporate those into Sourcegraph.

#### Pause Browser extensions

When launched, our Browser Extensions provided much needed code intelligence functionality into code hosts, however, this is now implemented natively (either directly in the case of GitHub, or indirectly through Web IDEs).

Adding functionality via Browser Extensions is expensive and brittle due to the fact we don’t own the underlying platform and we anticipate this will get worse as browsers become further locked down. Despite the difficulties, we do have a competitive advantage that we can provide the same functionality across different code hosts, providing a consistent experience for our customers.

Because of these complexities, we believe the best course of action is to pause adding any new functionality to the Browser extensions. We will reassess once we can expose some of the new functionality that can be built on top of new concepts.

We do believe that there are minor process improvements we can do to improve adoption within our customers such as becoming an approved extension for [Chrome enterprise.](https://support.google.com/chrome/a/answer/6306504?hl=en)

#### Pause IDE extensions

After Q2 we will have supported IDE extensions for VS Code and the JetBrains family of IDEs. This will take our IDE coverage to the [majority of professional developers](https://survey.stackoverflow.co/2022/#section-worked-with-vs-want-to-work-with-integrated-development-environment) and the most highly requested by our customers.

Because of this coverage and the comparative cost of implementing new features in IDEs (especially for JetBrains), we will be pausing any additional feature work here. Similarly to Browser Extensions we will reassess this pause once we’ve integrated new concepts into our platform.

However we believe we can greatly improve the adoption of our IDE extensions by focusing on the management and rollout of extensions at scale. Often enterprises have supported IDEs, IDE extensions, or tooling for particular IDEs. If we can become a standard approved extension for IDEs at large companies, we can greatly increase our reach inside of them. To achieve this we’ll focus on any minor improvements, or process on our onboarding that will provide us wholesale adoption in an enterprise.

#### Deprecate the current Sourcegraph extensions

Our current Sourcegraph extensions are limited in the functionality they can bring to Sourcegraph. Primarily they fetch data from third party sources and display it back to the user to provide in-context information (e.g. coverage data), or provide useful utilities (e.g. git blame, exporting searches, or opening in editors etc.).

As we move towards a model of ingesting and storing new concepts, we don’t believe that the current model of extensions is right. For this reason and when coupled with security concerns around our open extension registry and front-end extensibility and generally low adoption we think it’s best to deprecate the current Sourcegraph extensions.

In doing that we will look at what functionality should become core parts of the application (E.g. code intelligence, open in editor, search export etc.), and what should be eventually moved to our new integration model. We will also carefully assess the impact to customers with their own private extension registry and those who’ve built their own extensions.

### What’s next and why

#### FY’23 Q3

- Code ownership
  - Code ownership database that can be queries by a “codeowners” keyword, and via an API
- Deprecating Sourcegraph extensions
  - Prevent authoring of new extensions on our Sourcegraph.com extension registry
  - Move “code intelligence” features to core functionality
  - Move “git extras” (i.e. git blame etc.) extension to core functionality
  - Move “open in editor” extension to core functionality

#### FY’23 Q4+

- Code ownership
  - Code ownership supported by other products (e.g. Batch Changes and Code Insights)
- Deprecating Sourcegraph extensions
  - Move “search exports” extension to core functionality
  - Move “go imports search” extension to core functionality
  - Deprecate the extension registry and extensions page
- Support test coverage data
- Investigate and prioritize other concepts to be imported (e.g. Code quality metrics, vulnerability data, service maps, logging information, performance metrics etc.)

Check out our roadmap [here](https://github.com/orgs/sourcegraph/projects/214/views/56)

### What we’re not working on & why

- Adding new features to IDE or Browser extensions
- Investing further into Sourcegraph extensions
