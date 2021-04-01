# Engineering onboarding

Welcome! We're excited to have you join the team. This document outlines the structure of your first few weeks at Sourcegraph.

## Getting set up

You'll have to get some basics set up in your first few days:

- Complete [general onboarding](../../people-ops/onboarding/index.md#general-onboarding-checklist)
- [Configure your GitHub notifications.](../github-notifications/index.md)
- Join #dev-announce, #dev-chat, and your team's channel on Slack, as well as any other channels you find interesting. [Team chat documentation](../../communication/team_chat.md#engineering)
- Set up your [local development environment](https://github.com/sourcegraph/sourcegraph/blob/main/doc/dev/getting-started/index.md). If you encounter any issues, ask for help in Slack and then update the documentation to reflect the resolution (so the next engineer that we hire doesn't run into the same problem).
- [Add Sourcegraph as a browser search engine](https://docs.sourcegraph.com/integration/browser_search_engine). To search our private code, log in to our [internal dogfood instance](../deployments/instances.md#k8s-sgdev-org) ([`k8s.sgdev.org`](https://k8s.sgdev.org)) and add another entry: `https://k8s.sgdev.org/search?q=%s`.
- Read through your team's handbook page, to learn about the team and its internal processes.
- Complete the onboarding for your role:
  - [Software engineer onboarding](software-engineer-onboarding.md)
  - [Engineering manager onboarding](engineering-manager-onboarding.md)
- If you need access to Percy for visual testing, create an account by going to https://percy.io/invite-login and looging in with your GitHub account. Then ask on `#dev-chat` for an email invitation to our Percy org. **Do not create an account on Browserstack as this is not supported for our organization.**

## Manager checklist

Your manager should complete the following steps when you join:

- Schedule a recurring [1-1](../../leadership/1-1.md).
- Grant access to necessary services.
  - [Sourcegraph organization on GitHub](https://github.com/orgs/sourcegraph/people)
    - Invite to relevant GitHub teams, including [@sourcegraph/everyone](https://github.com/orgs/sourcegraph/teams/everyone).
  - [Sourcegraph organization on Sourcegraph.com](https://sourcegraph.com/organizations/sourcegraph/members)
  - [LSIF organization on GitHub](https://github.com/orgs/lsif/people) (optional; recommended for Code Intelligence team members)
  - [Buildkite](https://buildkite.com/organizations/sourcegraph/users/new)
  - Add the user to the `gcp-engineering` [group](https://console.cloud.google.com/iam-admin/groups?orgonly=true&project=&folder=&organizationId=1006954638239&supportedpurview=organizationId) so they have access to our [Google Cloud Platform](../environments.md).
  - [Opsgenie](https://sourcegraph.app.opsgenie.com/settings/users/)
  - [Docker Hub](https://hub.docker.com/orgs/sourcegraph)
  - [Site24x7](https://www.site24x7.com) (optional; recommended for Distribution team members)
  - [HoneyComb.io](https://www.honeycomb.io/)
  - Ask Christina to send an invite to [Productboard](https://sourcegraph.productboard.com)
  - Ask a member of the Design team to invite as "Viewer" to [Figma](https://figma.com)
