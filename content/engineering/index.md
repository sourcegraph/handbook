# Engineering

- [Onboarding](onboarding.md)
- RFCs (requests for comment)
  - [All RFC documents](https://drive.google.com/drive/folders/1bip_pMeWePyNNdCEETRzoyMdLtntcNKR) (Google Drive)
  - [How we use RFCs](../communication/rfcs/index.md)
- [Tracking issues](tracking_issues.md)
- [Code reviews](code_reviews.md)
- Programming guides
  - [Go](languages/go.md)
  - [TypeScript](languages/typescript.md)
- [Testing](testing.md)
- [Product documentation](product_documentation.md)
- [Continuous releasability](continuous_releasability.md)
- [Commit message guidelines](commit_messages.md)
- [Incidents](incidents.md)
- [Releases](releases/index.md)
  - [Release issue template](releases/release_issue_template.md)
- [Deployments](deployments.md)
- [On-call](on_call/index.md)
- [Prometheus](prometheus.md)
- [Adding ping data](adding_ping_data.md)
- [Adding buildkite secrets](adding_buildkite_secrets.md)
- [External contributions](external_contributions.md)

## Ownership of technical decisions

The default owner of any technical decision is the person or team that owns the work implied by the decision.

If ownership is unclear, ask "Do we have a designated owner for X?" in an appropriate Slack channel and @mention appropriate managers.

If there is a dispute about ownership, then perform a [clean escalation](../communication/clean_escalation.md) to determine an owner.

## [Roles and responsibilities](roles.md)

- [VP Engineering](roles.md#vp-engineering)
- [Software Engineer](roles.md#software-engineer)

## Teams

[How engineering is organized](organization.md).

## Repositories

Sourcegraph has a lot of repositories!

## Where Sourcegraph is built (things you'll find out-of-the-box):

- [Main repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-main&type=&language=)
- [Web development repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-web&type=&language=)
- [Backend repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-backend&type=&language=)
- [Tooling repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-tooling&type=&language=)
- [Documentation repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-docs&type=&language=)

## How Sourcegraph gets deployed:

- [Infrastructure repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-infrastructure&type=&language=)
- [Customer infrastructure repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-infrastructure+repo-type-customer&type=&language=)

## Where Sourcegraph gets extended functionality:

- [Code intelligence repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-codeintel&type=&language=)
- [CLI repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-cli&type=&language=)
- [Editor extension repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-editor&type=&language=)

## How Sourcegraph operates as a business

- [Business repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-business&type=&language=)
- [Customer repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-customer&type=&language=)

## Misc.

This point lives here for now:

- We require passing checks on GitHub PRs before merging (and don't allow direct pushes to master). Sometimes it's nice to push without waiting for checks (such as for docs-only changes), but this is outweighed by the downside that people too often accidentally merged changes that broke the build. Certain kinds of low risk changes (e.g., documentation only changes) may only run a subset of the build pipeline so that checks pass quickly in those cases.
