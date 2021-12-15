# Engineering

- [Onboarding](onboarding/index.md)
- [Principles and practices](process/principles-and-practices.md)
- [Engineering management](tools/engineering-management.md)
- RFCs (requests for comment)
  - [All RFC documents](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa) (Google Drive)
  - [How we use RFCs](../../../company-info-and-process/communication/rfcs/index.md)
- [Tracking issues](process/tracking_issues.md)
- [Engineering ownership](process/engineering_ownership.md) - who owns what
- Practices & Philosophy
  - [Planning](process/planning.md)
  - [Customer Issues](../../support/process/engaging-other-teams.md)
  - [Incidents](process/incidents/index.md)
  - [Product documentation](process/product_documentation.md)
  - [Continuous releasability](tools/continuous_releasability.md)
  - [Releases](process/releases/index.md)
    - [Release issue template](process/releases/release_issue_template.md)
  - [External contributions](process/external_contributions.md)
  - [Licenses](process/licenses.md)
  - Guides on development, local setup, testing, best practices, etc. can be found in our "[Developing Sourcegraph](https://docs.sourcegraph.com/dev)" documentation.
- [Tooling](tools/index.md)
  - [Slackgenie](tools/slackgenie.md)
- Infrastructure
  - [Internal infrastructure](tools/infrastructure/index.md)
  - [Deployments](process/deployments/index.md)
  - [On-call](process/incidents/on_call.md)
  - [Observability](tools/observability/index.md)
- [Hiring](hiring/index.md)
  - [Open positions](hiring/index.md#open-positions)
  - [Early-career engineers](hiring/early-career-engineers.md)
- [Career development](career-development/index.md)
  - [Career development framework](career-development/framework.md)
  - [Talent review process](career-development/talent-review-process.md)
- [Core Application Operational Rotation](core-application/operational-rotation.md)
- [Use cases](../../../strategy-goals/strategy/index.md#use-cases)
- [How to work with use cases](../../../strategy-goals/strategy/working_with_use_cases.md)

Welcome to Engineering!

<div class="container my-4 video-embed embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://storage.googleapis.com/sourcegraph-assets/handbook/eng%20dept%20video.mp4" allowfullscreen="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameborder="0"></iframe>
</div>

## Org chart

- [How engineering is organized](team/index.md).
- [Roles and responsibilities](roles/index.md)

## Communication

For a list of engineering relevant Slack channels to join see the [team chat](../../../company-info-and-process/communication/team_chat.md#engineering) page in the handbook.

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
