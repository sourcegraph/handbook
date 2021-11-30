# Engineering

- [Onboarding](onboarding/index.md)
- [Principles and practices](principles-and-practices.md)
- [Engineering management](engineering-management.md)
- RFCs (requests for comment)
  - [All RFC documents](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa) (Google Drive)
  - [How we use RFCs](../../communication/rfcs/index.md)
- [Tracking issues](tracking_issues.md)
- Practices & Philosophy
  - [Planning](planning.md)
  - [Customer Issues](../../support/engaging-other-teams.md)
  - [Incidents](incidents/index.md)
  - [Product documentation](product_documentation.md)
  - [Continuous releasability](continuous_releasability.md)
  - [Releases](releases/index.md)
    - [Release issue template](releases/release_issue_template.md)
  - [External contributions](external_contributions.md)
  - [Licenses](licenses.md)
  - Guides on development, local setup, testing, best practices, etc. can be found in our "[Developing Sourcegraph](https://docs.sourcegraph.com/dev)" documentation.
- Tooling
  - [Configuring Zoom to send recordings to Slack automatically](configuring_zoom_recordings_to_slack_automatically.md)
  - [Slackgenie](slackgenie.md)
- Infrastructure
  - [Cloud environments](environments.md)
  - [Deployments](deployments/index.md)
  - [On-call](incidents/on_call.md)
  - [Observability](observability/index.md)
- [Hiring](hiring/index.md)
  - [Open positions](hiring/index.md#open-positions)
  - [Early-career engineers](hiring/early-career-engineers.md)
- [Career development](career-development/index.md)
  - [Career development framework](career-development/framework.md)
  - [Talent review process](career-development/talent-review-process.md)
- [Core Application Operational Rotation](core-application/operational-rotation.md)

## Org chart

- [How engineering is organized](eng_org.md).
- [Roles and responsibilities](roles.md)

## Communication

For a list of engineering relevant Slack channels to join see the [team chat](../../communication/team_chat.md#engineering) page in the handbook.

## Repositories

Sourcegraph has a lot of repositories!

### Where Sourcegraph is built (things you'll find out-of-the-box)

- [Main repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-main&type=&language=)
- [Web development repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-web&type=&language=)
- [Backend repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-backend&type=&language=)
- [Tooling repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-tooling&type=&language=)
- [Documentation repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-docs&type=&language=)

### How Sourcegraph gets deployed

- [Infrastructure repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-infrastructure&type=&language=)
- [Customer infrastructure repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-infrastructure+repo-type-customer&type=&language=)

### Where Sourcegraph gets extended functionality

- [Code intelligence repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-codeintel&type=&language=)
- [CLI repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-cli&type=&language=)
- [Editor extension repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-editor&type=&language=)

### How Sourcegraph operates as a business

- [Business repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-business&type=&language=)
- [Customer repositories](https://github.com/sourcegraph?utf8=%E2%9C%93&q=repo-type-customer&type=&language=)

## Sourcegraph deployments and other developer test instances

- [sourcegraph.com](https://sourcegraph.com) is our production deployment for open source code.
- [k8s.sgdev.org](https://k8s.sgdev.org) is a dogfood deployment that replicates the scale of our largest customers.
- [demo.sourcegraph.com](https://demo.sourcegraph.com) is a managed instance used for CE demos.
- [devmanaged.sourcegraph.com](https://devmanaged.sourcegraph.com) is a managed instance used for managed instances development.
- [storybook.sgdev.org](http://storybook.sgdev.org) is a design system built with Storybook.
- [gerrit.sgdev.org](https://gerrit.sgdev.org) is a Gerrit test instance.
- [gitlab.sgdev.org](https://gitlab.sgdev.org) is a Gitlab test instance.
- [github.sgdev.org](https://github.sgdev.org) is a Github test instance.
- [bitbucket.sgdev.org](https://bitbucket.sgdev.org) is a Bitbucket test instance.

## Slack channels

Slack channels for non-team-specific engineering interests typically start with a #dev- prefix

The current channels are:

- #dev-chat
- #dev-ops
- #dev-experience
- #dev-frontend
- #dev-databases
- #dev-urandom
- #prod-eng-announce 

## Misc.

This point lives here for now:

- We require passing checks on GitHub PRs before merging (and don't allow direct pushes to main). Sometimes it's nice to push without waiting for checks (such as for docs-only changes), but this is outweighed by the downside that people too often accidentally merged changes that broke the build. Certain kinds of low risk changes (e.g., documentation only changes) may only run a subset of the build pipeline so that checks pass quickly in those cases.
