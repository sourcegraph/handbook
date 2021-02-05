# Engineering

- [Onboarding](onboarding.md)
- RFCs (requests for comment)
  - [All RFC documents](https://drive.google.com/drive/folders/1zP3FxdDlcSQGC1qvM9lHZRaHH4I9Jwwa) (Google Drive)
  - [How we use RFCs](../communication/rfcs/index.md)
- [Tracking issues](tracking_issues.md)
- [Code reviews](code_reviews.md)
- Programming guides
  - [Go](languages/go.md)
  - [TypeScript](languages/typescript.md)
  - [Terraform](languages/terraform.md)
- Practices & Philosophy
  - [Customer Issues](../ce/customer_issues.md)
  - [Incidents](incidents/index.md)
  - [Testing](testing.md)
  - [Styling UI](./web/styling.md)
  - [Continuous integration](continuous_integration.md)
  - [Product documentation](product_documentation.md)
  - [Continuous releasability](continuous_releasability.md)
  - [Commit message guidelines](commit_messages.md)
  - [Releases](releases/index.md)
    - [Release issue template](releases/release_issue_template.md)
  - [External contributions](external_contributions.md)
  - [Introducing a new service](introducing_a_new_service.md)
  - [Security patterns](security_patterns.md)
- Tooling
  - [Ignoring editor config files in Git](ignoring_editor_config_files.md)
  - [Configuring Zoom to send recordings to Slack automatically](configuring_zoom_recordings_to_slack_automatically.md)
- Infrastructure
  - [Cloud environments](environments.md)
  - [Deployments](deployments/index.md)
  - [On-call](incidents/on_call.md)
  - [Observability](observability/index.md)
  - [Honeycomb](honeycomb.md)
  - [Adding and debugging ping data](adding_ping_data.md)
  - [Adding buildkite secrets](adding_buildkite_secrets.md)

## Org chart

- [How engineering is organized](eng_org.md).
- [Roles and responsibilities](roles.md)

## Guiding principles

We build things in this order:

1. **Make it work**: Build the minimal useful thing that we can use to start collecting feedback and validating we are on the right track. Take shortcuts where possible (cut scope, not quality) because this work might get thrown away if we discover we are going in the wrong direction.
1. **Make it smooth**: Once we have signal that we are building the right thing, the next goal is to make the experience smooth so we feel good about putting this in front of users. Aim for smooth when in the make it work phase (to avoid duplicate efforts), but if it's possible to separate the two in order to move things forward, we should!
1. **Make it fast**: Now that the experience works smoothly, make sure it is fast for users. There is no benefit to speeding up a fundamentally broken experience.
1. **Make it scale**: Make it work at large scale. It is better to have high demand and need to surge on scalability than to make an infinitely scalable unused feature.

## Ownership of technical decisions

The default owner of any technical decision is the person or team that owns the work implied by the decision.

If ownership is unclear, ask "Do we have a designated owner for X?" in an appropriate Slack channel and @mention appropriate managers.

If there is a dispute about ownership, then perform a [clean escalation](../communication/code_of_conduct.md#clean-escalation) to determine an owner.


### Communication

For a list of engineering relevant Slack channels to join see the [team chat](../communication/team_chat.md#engineering) page in the handbook.

## Open positions

[Open positions](hiring/index.md#open-positions)

## Innovation time

We love it when engineers have ideas for things they want to do, even if they don't align with our existing iteration plans or [goals](../../company/goals/index.md). We want to create time and space for engineers to work on these ideas without negatively impacting our team goals and planned work.

If you have an idea for something you want to work on, then you have a few options:

1. **Just do it** if you can timebox the effort (e.g., 1-2 days) such that it won't impact your ability to deliver on existing plans.
2. If working on your idea would require a non-trivial amount of time or would impact your ability to deliver on existing plans, then have a discussion with your manager to come up with a feasible plan (e.g., explicitly schedule time to work on your idea during the next iteration).

In any case, you should report the results of your work in [progress updates](tracking_issues.md#progress-updates) just like any other work.

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
