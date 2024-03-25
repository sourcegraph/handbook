# Engineering

The Engineering department at Sourcegraph consists of:

- [Development](dev/index.md)

## Teams

- [Code Search](teams/code-search/index.md)
- [Infrastructure](infrastructure/index.md)
  - [Cloud Operations](../../departments/cloud/index.md)
  - [Core Services](teams/core-services/index.md)
  - [Developer Infrastructure](teams/devinfra/index.md)
  - [Release](teams/release/index.md)
- Cody
  - [Cody Strategic](teams/cody-strat/index.md)
- Product Platform
  - [Source](teams/source/index.md)
  - [Graph](teams/graph/index.md)
  - [Search Platform](teams/search-platform/index.md)

## Slack channels

- #team-engineering
- #announce-engineering
- #discuss-engineering
- #buildkite-main
- #chat-dev
- #chat-dev-urandom

## Processes

- [Product Planning Process](product-planning.md)
- [Collaborating with Design](../product/design/design-and-engineering-collaboration.md)
- [Submitting a bug report](submitting-a-bug-report.md)
- [Working with issues](working-with-issues.md)
- [Our software development lifecycle (SDLC)](sdlc.md)
- [Bi-Weekly Status Updates](bi-weekly-updates.md)

## Resources

- [Managed Services infrastructure](./managed-services/index.md)

## What's in a feature?

For every feature we ship, consider:

#### Build

- **Security:** Make it secure, because our customers trust us with very sensitive code and other data, and we need to continually earn and retain that trust.
- **Reliability:** Make it stable and robust, because devs don't trust flaky or incorrect results.
- **Speed:** Make it fast, because devs won't use something 10+ times daily if it's slow.
- **Scalability:** Make it work at large scale, such as big monorepos or 100,000s of repositories.
- **Documentation:** Add and update documentation for the new feature.
- **Accessibility:** Make it accessible to a broad set of users (including keyboard accessibility).
- **Observability:** Help admins debug, manage, and scale the functionality.
- **Telemetry:** Gather the (minimum) data needed for us to understand how the feature is being used and improve it.
- **Backward-compatibility:** Make it smooth to upgrade from past versions and adapt usage to the newest version.
- **Forward-compatibility:** Anticipate the feature's future evolution (where possible, and without over-building today).
- **Admin experience:** Give an admin the visibility and controls they need to roll out and manage the feature.

#### Feedback

- **Iteration feedback:** Iterate with our existing customers and gather user feedback as early as possible.
- **Usage/value analytics:** Show how the feature is being used to users and admins, communicate the value to the customer's business, and identify opportunities for more value.

#### Launch

- **Marketing:** Update all marketing content to reflect the new feature (such as our about site, readmes, extension descriptions, slides, etc.).
- **Announcement:** Draft the eventual announcement of the feature early (in blog post form, along with a changelog entry and major docs changes), and update it as you iterate.
- **Pricing/packaging:** Decide which plans include this feature and whether its code will be open-source or not.

What's intentionally NOT in this list (but would be plausible items for a similar list at other companies):

- **~~Localization~~:** We don't yet see the need to localize Sourcegraph for non-English languages or different regions.
- **~~Offline/mobile~~:** We target online desktop users right now. (Note: This is separate from supporting airgapped instances of Sourcegraph within corporate networks, which is important.)
- **~~Abuse prevention~~:** Because Sourcegraph is an enterprise product used in isolated instances within companies, we can rely on admins for the very limited moderation necessary (such as if a search context with an offensive name is created).
- **~~Public usage~~:** We target organizations' Sourcegraph instances (Cloud managed instances and customer self-managed or jointly managed instances), not Sourcegraph.com. Presume for any feature that it's not worth doing extra work to make it work on Sourcegraph.com (and disable it on Sourcegraph.com with a feature flag if needed).
- **~~Secrecy/surprise~~:** We almost never care about keeping a feature secret prior to announcement. It's still important to avoid confusing users and customers about pre-release features and future plans.

## Links

Reference:

- [KPIs](https://sourcegraph.looker.com/boards/20)
- [Cross-team collaboration](cross-team-collab.md)
- [Demo day](demo-day.md)
- [Backstage <> Sourcegraph overview and integration concepts](https://docs.google.com/document/d/1g13hyadsogj-oniBNBHYTxXCS6z3BDqMt-51r6dyeP4/)
