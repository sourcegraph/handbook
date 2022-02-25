# Engineering onboarding

Welcome! We're excited to have you join the team. This document outlines the structure of your first few weeks at Sourcegraph.

## Getting set up

You'll have to get some basics set up in your first few days:

- Complete [general onboarding](../../../../company-info-and-process/onboarding/index.md#general-onboarding-checklist)
- [Configure your GitHub notifications.](../../../../company-info-and-process/onboarding/git-intro/github-notifications/index.md)
- Join #prod-eng-announce, #dev-chat, and your team's channel on Slack, as well as any other channels you find interesting. [Team chat documentation](../../../../company-info-and-process/communication/team_chat.md#engineering)
- Set up your [local development environment](https://docs.sourcegraph.com/dev/setup/quickstart). If you encounter any issues, ask for help in Slack and then update the documentation to reflect the resolution (so the next engineer that we hire doesn't run into the same problem).
- [Add Sourcegraph as a browser search engine](https://docs.sourcegraph.com/integration/browser_search_engine). To search our private code, log in to our [internal dogfood instance](../process/deployments/instances.md#k8s-sgdev-org) ([`k8s.sgdev.org`](https://k8s.sgdev.org)) and add another entry: `https://k8s.sgdev.org/search?q=%s`.
- Read through your team's handbook page, to learn about the team and its internal processes.
- Complete the onboarding for your role:
  - [Software engineer onboarding](software-engineer-onboarding.md)
  - [Engineering manager onboarding](engineering-manager-onboarding.md)
- If you need access to Percy for visual testing, ask on #dev-chat for an invitation to our org.
- If you did not receive your invitation to the `sourcegraph` GitHub organization, reach out to our Tech Ops team in `#it-tech-ops` in Slack.
- If you need access to any additional tool or are having issues with any of them such as, reach out to our Tech Ops team in `#it-tech-ops` in Slack.

## Manager checklist

For Hiring Managers, visit the [Onboarding process for Hiring Managers](../../../../company-info-and-process/onboarding/onboarding-for-hiring-managers.md) page.

Your manager should complete the following steps when you join:

- Schedule a recurring [1-1](../../../../company-info-and-process/communication/1-1.md).
- Notify People Ops on the tools needed by day one - [Tools for new teammates form](https://docs.google.com/forms/d/e/1FAIpQLSeQjfoLjAZUim7pVYw9joQCssXuVz2t2RlpjLadzmHrj15cwQ/viewform)
  - [Sourcegraph organization on GitHub](https://github.com/orgs/sourcegraph/people)
    - Invite to relevant GitHub teams, including @sourcegraph/everyone.
  - [Productboard](https://sourcegraph.productboard.com)
  - [Figma](https://figma.com)
  - For GCP access, request Tech Ops to add the user to the team specific gcp group, usually gcp-{team-name}. This will provide the user with necessary access to our [Google Cloud Platform](../tools/infrastructure/gcp.md)..
- Grant access to necessary services.

  - [Sourcegraph organization on Sourcegraph.com](https://sourcegraph.com/organizations/sourcegraph/settings/members)
  - [LSIF organization on GitHub](https://github.com/orgs/lsif/people) (optional; recommended for Code Intelligence team members)
  - [Buildkite](https://buildkite.com/organizations/sourcegraph/users/new)
  - [Opsgenie](https://sourcegraph.app.opsgenie.com/settings/users/)

  - [Site24x7](https://www.site24x7.com) (optional; recommended for Distribution team members)
  - [HoneyComb.io](https://www.honeycomb.io/)
