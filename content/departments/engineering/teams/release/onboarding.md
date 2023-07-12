# Delivery Engineer Onboarding

Welcome to the Delivery team! This document will guide you through delivery-specific onboarding tasks to make your start here at Sourcegraph as smooth as it can be. Make sure you've read and completed the [general engineering onboarding guide](../../dev/onboarding/index.md).

## Delivery Onboarding Checklist

### Week 1

#### Goals

- Clear knowledge of the [strategy](../../../../strategy-goals/index.md), [values](../../../../company-info-and-process/values/index.md) and [code of conduct](../../../../company-info-and-process/communication/code_of_conduct.md), as well as [Delivery's mission and vision](./index.md).
- Know the expected outcome of each Distribution onboarding milestone.
- Become familiar with Delivery [responsibilities](index.md#Responsibilities), [tech stack](index.md#tech-stack)
- Go through [Process St Onboarding](https://app.process.st/reports/)
- You have a sense of what tools you will be using and for what

#### Tasks

> If you need access to any system, reach out to your peers in `#delivery-internal` on Slack.

- Meet your onboarding buddy
- Attend weekly sync meeting
- Deploy your own SG instance using the following [install methods](https://docs.sourcegraph.com/admin/install):
  - [Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose): You should be able to install this locally on your Souregraph laptop. If for some reason you do not have the local resources, create a vm in your own [engineering project](../../dev/tools/infrastructure/gcp.md#engineering-projects)
  - [Kubernetes](https://docs.sourcegraph.com/admin/install/kubernetes): To install this it is recommend you create a cluster in your own [engineering project](../../dev/tools/infrastructure/gcp.md#engineering-projects).
- Read our [Delivery handbook pages](index.md)
- Join the distribution Slack channels
  - #delivery
  - #delivery-internal
  - #dev-ops
  - #dev-chat
  - #dev-accounce
- Make sure you are added to the [Release](https://github.com/orgs/sourcegraph/teams/release) team in Sourcegraph GitHub org. Reach out to [#team-releases] if you're not.
- Ask to be added to `gcp-engineering` and `gcp-delivery` Google Group in [#it-tech-ops]
- Ask to be added to our team on [geekbot](https://app.geekbot.com/dashboard/standup/90421/manage?members) in [#delivery-internal] channel.

### Week 2

#### Goals

- Develop high-level understanding of product.
- You are participating in our team rituals.
- Get to know your team.
- Work towards closing one issue.

#### Tasks

- Familiarise yourself with the [internal infrastructure](../../dev/tools/index.md) at Sourcegraph and ownership areas.
- Read through the [deployments types](https://docs.google.com/presentation/d/1u4mbXjubQqV-6WFbuS7Q1b_X6BVh-_GWzzFQMcrAzLw/edit#slide=id.p) presentation
- Schedule a 1 on 1 meeting with each of the engineers in the team
- Set up a [local environment](https://docs.sourcegraph.com/dev/getting-started). This will be your other test environment. If you get stuck, just post in the #dev-chat Slack channel. You will often want to run Sourcegraph locally when you are troubleshooting or testing.
- Add discussion items to the [weekly sync doc](https://docs.google.com/document/d/1otP6F8qfm2yNOW1hjTszkkuiYF1MGp31s5ATeA76ij4/edit?usp=sharing).
- Review the list of [good-first-issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22+label%3Ateam%2Fdistribution) and select one or two issues to complete.

### By the end of your first month, the following will be true

#### Goals

- Confidently deploy sourcegraph via all supported deployment methods, and understand when a customer would use one over the others.
- Begin diving into and improving technical documentation and processes.
- Understand how sourcegraph is released.
- Confidently contributing to and closing team issues

#### Tasks

- Review the sourcegraph install docs and make any appropriate updates.
- Shadow the release captain during the release process. Point out things that don't make sense, ask questions, in order to help us improve the process.
- Take on new issues, and pair with other engineers.

### By the end of your second month, the following will be true

#### Goals

- You will have assisted [customer engineering](../../../technical-success/ce/index.md) and [customer support](../../../technical-success/support/index.md), taken ownership of any distribution tasks and resolved them.
- Made improvements to our processes and how we deliver sourcegraph.

#### Tasks

- Take on the @delivery-support rotation and pair with the customer facing teams to resolve issues.
- Identify inefficiences and raise issues to fix them

### By the end of your third month, the following will be true

#### Goals

- Mentoring direct team members, and engineers in Customer Engineering and Customer Support
- Contribute to long term team goals

#### Tasks

- Develop any new material required to help others level up and understand our product
- Add to the team's planning

[gcp]: https://console.cloud.google.com
[#it-tech-ops]: https://sourcegraph.slack.com/archives/C01CSS3TC75
[#delivery-internal]: https://sourcegraph.slack.com/archives/C02VDNKBWDU
