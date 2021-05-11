# Engineering

- [Onboarding](onboarding.md)
- [Principles and practices](principles-and-practices.md)
- RFCs (requests for comment)
  - [All RFC documents](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa) (Google Drive)
  - [How we use RFCs](../communication/rfcs/index.md)
- [Tracking issues](tracking_issues.md)
- Practices & Philosophy
  - [Customer Issues](../support/engaging-other-teams.md)
  - [Incidents](incidents/index.md)
  - [Product documentation](product_documentation.md)
  - [Continuous releasability](continuous_releasability.md)
  - [Releases](releases/index.md)
    - [Release issue template](releases/release_issue_template.md)
  - [External contributions](external_contributions.md)
  - Guides on development, local setup, testing, best practices, etc. can be found in our "[Developing Sourcegraph](https://docs.sourcegraph.com/dev)" documentation.
- Tooling
  - [Configuring Zoom to send recordings to Slack automatically](configuring_zoom_recordings_to_slack_automatically.md)
- Infrastructure
  - [Cloud environments](environments.md)
  - [Deployments](deployments/index.md)
  - [On-call](incidents/on_call.md)
  - [Observability](observability/index.md)

## Org chart

- [How engineering is organized](eng_org.md).
- [Roles and responsibilities](roles.md)


## Communication

For a list of engineering relevant Slack channels to join see the [team chat](../communication/team_chat.md#engineering) page in the handbook.

## Open positions

[Open positions](hiring/index.md#open-positions)


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
