# Integrations Team Strategy

## Vision

Sourcegraph provides value anywhere that someone reads or writes code.

## Strategy and Plans for FY’23

### Themes

For the next 6 months, we will be focussing on the following two themes:

1. Move extensions into the core workflow
2. Introduce new concepts to Sourcegraph

Due to this focus, we'll be pausing feature work on IDE and Browser extensions.

#### Moving extensions into the core workflow

To improve the core workflow we will move the most heavily used extensions to be core parts of our product (e.g. code intelligence, open in editor, git extras etc.). For our customers this will result in these features being both faster and more discoverable, saving developer time.

To further simplify the product and have a greater focus on the core workflow we will also deprecate the current Sourcegraph extensions and the extension registry. With the most used extensions becoming core parts of our product there's less need for our extensions. Instead, we will work towards a different extension model in order to support our goal of introducing new concepts to Sourcegraph. Deprecating Sourcegraph extensions will require us to work with our customers to determine what custom extensions have been built and endeavour to add them as native features.

#### Introduce new concepts to Sourcegraph

In the long term we want Sourcegraph to become the primary source for information relating to code, tying all tools that developers use into a single platform. This will make Sourcegraph indispensable as we become the best way to answer any question relating to code, unblocking developers and saving their time.

The first concept we want to introduce to Sourcegraph is code ownership. This has been a highly requested feature with clear, validated use cases across all of our products.

After code ownership, we will have a pattern of how we ingest, store and search across new concepts. We will then identify and prioritize subsequent concepts (and their associated use cases), and determine how we can incorporate those into Sourcegraph.

#### Pause Browser extensions

When launched, our Browser Extensions provided much needed code intelligence functionality into code hosts. Since then code hosts have now caught up and implement similar (albeit not as good) functionality to their products.

Because of this we want to first focus on improving our competitive differentiation by bringing new concepts about code into Sourcegraph. From there we can work out where best to display them on code hosts to provide the most value to our users.

After we've added additional user value to the Browser extensions, we will focus on improving widespread adoption for developers at an enterprise level. We had previously optimised for onboarding individual users, but given our focus change to enterprise, we need to find an adoption strategy that is more scalable. Instead, we will explore ideas such as becoming an approved extension for [Chrome enterprise](https://support.google.com/chrome/a/answer/6306504?hl=en).

#### Pause IDE extensions

After the release of the JetBrains plugin we will have supported IDE extensions for the [majority of professional developers](https://survey.stackoverflow.co/2022/#section-worked-with-vs-want-to-work-with-integrated-development-environment) and the most highly requested by our customers.

Similar to Browser extensions, we want to improve our user value and product differentiation to become more than a convenient place to search in a user's editor. We plan on using the new concepts that we will be incorporating into Sourcegraph to increase value for user's in IDEs. After that, we'll work on getting enterprise-wide adoption by making authentication, and distribution of our extensions easier.

### What’s next and why

#### FY’23 Q3

- Code ownership
  - Research into the best technical solution and customer needs
- Deprecating Sourcegraph extensions
  - Prevent authoring of new extensions on our Sourcegraph.com extension registry
  - Move “code intelligence” features to core workflow
  - Move “git extras” (i.e. git blame etc.) extension to core workflow
  - Move “open in editor” extension to core workflow
  - Move “search exports” extension to core workflow
  - Move “go imports search” extension to core workflow
  - Deprecate the extension registry and extensions page

#### FY’23 Q4+

- Code ownership
  - Code ownership database that can be queried by a “codeowners” keyword, and via an API
  - Code ownership supported by other products (e.g. Batch Changes and Code Insights)
- Deprecating Sourcegraph extensions
- Support test coverage data
- Investigate and prioritize other concepts to be imported (e.g. Code quality metrics, vulnerability data, service maps, logging information, performance metrics etc.)

Check out our roadmap [here](https://github.com/orgs/sourcegraph/projects/214/views/56)

### What we’re not working on & why

- Adding new features to IDE or Browser extensions
- Investing further into Sourcegraph extensions
