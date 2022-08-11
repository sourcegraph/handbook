# Engineering

The Engineering department at Sourcegraph consists of:

- [Development](dev/index.md)
- [Product Management](product/index.md)
- [Design](design/index.md)

## Product vision and strategy

_1-year vision:_ Sourcegraph is a code intelligence platform, which devs will use 10+ times daily to unblock themselves and code better. Sourcegraph will be the fastest, and often only, way for devs to find what they need because it integrates all kinds of code-related information and makes it accessible within seconds on the web, in the editor, in code review, in custom tooling, and anywhere else it's needed.

Notes:

- This vision is valid through 2023-09. That technically makes it a 15-month vision (not 12-month) from when we adopted it.
- When we say devs will use it "10+ times daily", that's the high-level intent but not strict success criteria.
  - We want to track and increase frequency of usage, and we want it to approach and/or exceed 10 times daily for as many devs as possible.
  - If there are kinds or groups of devs who don't use Sourcegraph frequently (much less 10+ times daily), we should figure out why and see if we can make Sourcegraph more useful to them.
  - For example, if a dev works at a company where only some of the code they work with is on Sourcegraph, then it's less likely they'll find Sourcegraph useful 10+ times daily. The most valuable first step is probably to figure out how to get all of their code on Sourcegraph.
- What is the relationship between "10+ times daily" and "dev time saved"?
  - We want users to use Sourcegraph 10+ times daily _because_ it saves them time.
  - We don't want to artificially increase frequency of usage through annoying "growth hack" techniques that don't save devs time.
  - We prefer higher usage frequency with less value per use (for example, a user having 10 sessions each with `N/10` time saved is better than 1 session with `N` time saved). This is because as a non-system-of-record (that users aren't required to use), we need users to remember to use us and consider us among their small number of go-to dev tools, which is more likely to happen with high usage frequency.
- See "[Engineering department update 2022-06](https://docs.google.com/document/d/1YezFhbIsH8YHRLRdwZ-qUK1Z4aogM04_8IqxJpUX-nY/edit#)" for our strategy, including making Cloud (managed instances) the preferred deployment method, focusing on the core workflow, counting dev time saved, and deeply integrating code-related concepts (code nav, code graph, code ownership, and more).

## Roadmap

[Roadmap](https://docs.google.com/document/d/1ICtf7Hpt5opOngS9fe1T0ETX_MTMBiuPwVeKG9cAQX0/edit)

## Teams

- [Admin Analytics Tiger Team](teams/admin-analytics/index.md)
- [Batch Changes](teams/batch-changes/index.md)
- [Code Insights](teams/code-insights/index.md)
- [Code Intelligence](teams/code-intelligence/index.md)
- [Content Platform](teams/content-platform/index.md)
- [Delivery](teams/delivery/index.md)
- [Dev Experience](teams/dev-experience/index.md)
- [Frontend Platform](teams/frontend-platform/index.md)
- [IAM](teams/iam/index.md)
- [Integrations](teams/integrations/index.md)
- [Repo Management](teams/repo-management/index.md)
- [Search Core](teams/search/core.md)
- [Search Product](teams/search/product.md)
- [Security](../security/index.md)

The following functional teams work across the above dev teams:

- Design
- Product Management

## Slack channels

- #engineering
- #eng-announce
- #eng-leads
- #ask-engineering

## Processes

- [Submitting a bug report](submitting-a-bug-report.md)
- [Working with issues](working-with-issues.md)
- [Our software development lifecycle (SDLC)](sdlc.md)

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

- [Current roadmap (private)](https://github.com/orgs/sourcegraph/projects/214/views/21)
- [KPIs](https://sourcegraph.looker.com/boards/20)
- [Cross-team collaboration](cross-team-collab.md)
- [Demo day](demo-day.md)
