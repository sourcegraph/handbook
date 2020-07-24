# Engineering onboarding

Welcome to Sourcegraph! This document will guide you through engineering specific onboarding.

## Manager checklist

- Grant access to necessary services.
  - [Sourcegraph organization on GitHub](https://github.com/orgs/sourcegraph/people)
    - Invite to relevant GitHub teams, including [@sourcegraph/everyone](https://github.com/orgs/sourcegraph/teams/everyone).
  - [LSIF organization on GitHub](https://github.com/orgs/lsif/people) (optional; recommended for Code Intelligence team members)
  - [Buildkite](https://buildkite.com/organizations/sourcegraph/users/new)
  - Google Cloud Platform ([prod](https://console.cloud.google.com/iam-admin/iam?project=sourcegraph-dev), [test](https://console.cloud.google.com/iam-admin/iam?project=sourcegraph-server))
  - [Opsgenie](https://sourcegraph.app.opsgenie.com/settings/users/)
  - [Docker Hub](https://hub.docker.com/orgs/sourcegraph)
  - [Site24x7](https://www.site24x7.com) (optional; recommended for Distribution team members)
  - [HoneyComb.io](https://www.honeycomb.io/)
  - Ask Christina to send an invite to [Productboard](https://sourcegraph.productboard.com)
- Schedule a recurring [1-1](../leadership/1-1.md).
- Schedule time to discuss Sourcegraph's system architecture and tech stack.
- Schedule a time to discuss on-call rotation.
- Assign one or more starter tasks (e.g. small bugs or issues).

## Engineer checklist

As you are completing these tasks, you may notice documentation, processes, or code that is broken or out of date. Your first priority is to fix these things. **Act like you own the onboarding experience of the next engineer that we hire.**

- [Complete general onboarding](../people-ops/onboarding.md#for-all-new-teammates)
- [Configure your GitHub notifications.](github-notifications/index.md)
- Message each person on your immediate team to setup a time to meet them. Some things you might want to learn:
  - What brought them to Sourcegraph?
  - What are they currently working on?
  - What do they do for fun?
- Join #dev-announce, #dev-chat, and your team's channel on Slack. [Team chat documentation](../communication/team_chat.md#engineering)
- Read through the rest of the engineering handbook to learn more about how we operate.
- Read how we plan and keep each other up to date with [tracking issues](tracking_issues.md).
- Setup your [local development environment](https://github.com/sourcegraph/sourcegraph/blob/master/doc/dev/local_development.md#step-1-install-dependencies). If you encounter any issues, ask for help in Slack and then update the documentation to reflect the resolution (so the next engineer that we hire doesn't run into the same problem).
- Make yourself an admin on sourcegraph.com and sgdev.org by updating the database directly (this is not what a normal user would do, but doing it this way will expose you to useful knowledge). Relevant documentation:
  - Make sure you have an account on our deployments ([sourcegraph.com](https://sourcegraph.com), [sourcegraph.sgdev.org](https://sourcegraph.sgdev.org), [k8s.sgdev.org](https://k8s.sgdev.org)) before editing the database.
  - [Our deployments](deployments.md)
  - [How do I access the Sourcegraph database?](https://docs.sourcegraph.com/admin/faq#how-do-i-access-the-sourcegraph-database)
  - PostgreSQL Hint: Consider using a [transaction](https://www.postgresql.org/docs/current/tutorial-transactions.html) so that you can ROLLBACK your actions in case of a mistake
- Add yourself to the `sourcegraph` org on Sourcegraph.com.
- Start working on the starter tasks that your manager has assigned you.
