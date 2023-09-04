# Cloud Engineer onboarding

Welcome to the [Cloud team](./index.md)! This document will guide you through Cloud-team-specific onboarding tasks to make your start here at Sourcegraph as smooth as it can be. Make sure you've read and completed the [general engineering onboarding guide](../engineering/dev/onboarding/software-engineer-onboarding.md).

## Checklist

### Week 1

#### Goals

- Clear knowledge of the [company goals](../../strategy-goals/index.md), [values](../../company-info-and-process/values/index.md) and [code of conduct](../../company-info-and-process/community/code_of_conduct.md), as well as [Cloud's mission and vision](index.md).
- Know the expected outcome of each Cloud onboarding milestone.
- You have a sense of what tools you will be using and for what

#### Tasks

> [!NOTE] If you need access to any system, reach out to your peers in #cloud-internal on Slack.
> If access has to be granted by #it-tech-ops, please cc the Cloud team EM for approval

- Meet your onboarding buddy
- Attend weekly sync meeting
- Deploy your own SG instance using the following [install methods](https://docs.sourcegraph.com/admin/install):
  - [Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose): You should be able to install this locally on your Sourcegraph laptop. If for some reason you do not have the local resources, create a vm in your own [engineering project](../engineering/dev/tools/infrastructure/gcp.md#projects)
  - [Kubernetes](https://docs.sourcegraph.com/admin/install/kubernetes): To install this it is recommended you create a cluster in your own [engineering project](../engineering/dev/tools/infrastructure/gcp.md#engineering-projects).
- Familiarize yourself with the Sourcegraph's [internal infrastructure](../engineering/dev/tools/infrastructure/index.md) and the team's ownership areas
- Open and merge first GitHub pull request by adding yourself to [team page](../../handbook/editing/add-yourself-to-team-page.md) in Handbook
- Read our [Cloud team handbook pages](index.md)
- Join the following Slack channels:
  - #cloud
  - #cloud-internal
  - #dev-ops
  - #dev-chat
  - #prod-eng-announce
  - #alerts-managed-instances
- Request access to the following in #it-tech-ops:
  - [Opsgenie](https://sourcegraph.app.opsgenie.com)
  - 1password vaults `Customer managed instances` and `Internal managed instances`
  - Google Group [gcp-cloud-team@sourcegraph.com](https://groups.google.com/u/0/a/sourcegraph.com/g/cloud-team)
  - [Excalidraw](https://excalidraw.com/)
  - [Cloudflare](https://cloudflare.com/)
- Request access to the following in #cloud-internal:
  - The Cloud Opsgenie team
  - 1password vault [Cloud](https://team-sourcegraph.1password.com/vaults/qxzajcksgc3givogl3r6qjbimu/allitems)
  - Google Group [cloud-team@sourcegraph.com](https://groups.google.com/u/0/a/sourcegraph.com/g/cloud-team)
  - [geekbot](https://app.geekbot.com/dashboard/standup/97887/view)

### Week 2

#### Goals

- Develop high-level understanding of product.
- You are participating in our team rituals.
- Get to know your team.
- Work towards closing one issue.

#### Tasks

- Schedule a 1 on 1 meeting with each of the engineers in the team
- Set up a [local environment](https://docs.sourcegraph.com/dev/getting-started). This will be your other test environment. If you get stuck, just post in the #dev-chat Slack channel. You will often want to run Sourcegraph locally when you are troubleshooting or testing.
- Add discussion items to the Weekly Sync doc
- Review the [Cloud board](./github-projects-beta.md)

### By the end of your first month, the following will be true

#### Goals

- Confidently deploy Sourcegraph via all supported deployment methods, and understand when a customer would use one over the others.
- Begin diving into and improving technical documentation and processes.
- Understand how changes are deployed to our Cloud environments
- Confidently contributing to and closing team issues

#### Tasks

- Review the Sourcegraph install docs and make any appropriate updates.
- Shadow another member of Cloud team during an incident or during their on-call schedule.
- Take on new issues, and pair with other engineers.

### By the end of your second month, the following will be true

#### Goals

- Made improvements to our processes and how we deliver sourcegraph.com
- Made improvements to our olly

#### Tasks

- Take on the @cloud-support rotation and pair with teams to resolve issues.
- Identify inefficiencies and raise issues to fix them

### By the end of your third month, the following will be true

#### Goals

- Mentoring direct team members, and engineers in Customer Engineering and Customer Support
- Contribute to long term team goals

#### Tasks

- Develop any new material required to help others level up and understand our product
- Add to the team's planning
