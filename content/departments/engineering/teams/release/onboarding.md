# Release Engineer Onboarding

Welcome to the Release team! This document will guide you through release onboarding tasks to make your start here at Sourcegraph as smooth as it can be. Make sure you've read and completed the [general engineering onboarding guide](../../dev/onboarding/index.md).

## Release Onboarding Checklist

### Week 1

#### Goals

- Clear knowledge of the [strategy](../../../../strategy-goals/index.md), [values](../../../../company-info-and-process/values/index.md) and [code of conduct](../../../../company-info-and-process/communication/code_of_conduct.md), as well as [Release's mission and vision](./index.md).
- Know the expected outcome of each Distribution onboarding milestone.
- Become familiar with Release [responsibilities](index.md#Responsibilities), [tech stack](index.md#tech-stack)
- Go through [Process St Onboarding](https://app.process.st/reports/)
- You have a sense of what tools you will be using and for what

#### Tasks

> If you need access to any system, reach out to your peers in `#team-releases` on Slack.

- Meet your onboarding buddy
- Attend weekly sync meeting
- Deploy your own SG instance using the following [install methods](https://docs.sourcegraph.com/admin/install):
  - [Docker Compose](https://sourcegraph.com/docs/admin/deploy/docker-compose): You should be able to install this locally on your Sourcegraph laptop. If for some reason you do not have the local resources, create a vm in your own [engineering project](../../dev/tools/infrastructure/gcp.md#engineering-projects)
  - [Kubernetes](https://sourcegraph.com/docs/admin/deploy/kubernetes): To install this it is recommended you create a cluster in your own [engineering project](../../dev/tools/infrastructure/gcp.md#engineering-projects).
- Read our [Release handbook pages](index.md)
- Join the distribution Slack channels

  - #discuss-releases
  - #team-releases
  - #chat-dev
  - #announce-engineering

- Make sure you are added to the [Release](https://github.com/orgs/sourcegraph/teams/release) team in Sourcegraph GitHub org. Reach out to #team-releases if you're not.
- Ask to be added to `gcp-engineering` and `gcp-delivery` Google Group in [#it-tech-ops]

### Week 2

#### Goals

- Develop a high-level understanding of our product.
- Participate in our team meetings and discussions.
- Get to know your team.
- Work towards closing one issue.

#### Tasks

- Familiarise yourself with the [internal infrastructure](../../dev/tools/index.md) at Sourcegraph and ownership areas.
- Read through the [deployments types](https://docs.google.com/presentation/d/1u4mbXjubQqV-6WFbuS7Q1b_X6BVh-_GWzzFQMcrAzLw/edit#slide=id.p) presentation
- Schedule a 1 on 1 meeting with each of the engineers in the team
- Set up a [local environment](https://sourcegraph.com/docs/dev/setup/quickstart). This will be your other test environment. If you get stuck, just post in the #chat-dev Slack channel. You will often want to run Sourcegraph locally when you are troubleshooting or testing.
- Add discussion items to the [weekly sync doc](https://docs.google.com/document/d/1TrumZIb-FkNUOuM2ZQhgY2hvtd0wLg_F5gJip7hA20Q/edit).

### By the end of your first month, the following will be true

#### Goals

- Confidently deploy Sourcegraph via all supported deployment methods, and understand when a customer would use one over the others.
- Begin diving into and improving technical documentation and processes.
- Understand how Sourcegraph is released.
- Confidently contributing to and closing team issues

#### Tasks

- Review the Sourcegraph install docs and make any appropriate updates.
- Shadow the release captain during the release process. Point out things that don't make sense, ask questions, in order to help us improve the process.
- Take on new issues, and pair with other engineers.

### By the end of your second month, the following will be true

#### Goals

- You will have assisted [customer engineering](../../../technical-success/ce/index.md) and [customer support](../../../technical-success/support/index.md), taken ownership of any distribution tasks and resolved them.
- Made improvements to our processes and how we deploy Sourcegraph.

#### Tasks

- Take on the @infra-support rotation and pair with the customer facing teams to resolve issues.
- Identify inefficiencies and raise issues to fix them

### By the end of your third month, the following will be true

#### Goals

- Mentoring direct team members and engineers in Customer Engineering and Customer Support
- Contribute to long term team goals

#### Tasks

- Develop any new material required to help others level up and understand our product
- Add to the team's planning

[gcp]: https://console.cloud.google.com
[#it-tech-ops]: https://sourcegraph.slack.com/archives/C01CSS3TC75
[#team-releases]: https://sourcegraph.slack.com/archives/C05EH3JP15Z
