# DevOps Engineer Oboarding

Welcome to the DevOps team! This document will guide you through DevOps-specific onboarding tasks to make your start here at Sourcegraph as smooth as it can be. Make sure you've read and completed the [general engineering onboarding guide](../../people-ops/../onboarding/software-engineer-onboarding.md).

## DevOps Onboarding Checklist

### Week 1

#### Goals

- Clear knowledge of the [company goals](../../../company/goals/index.md), [values](../../../company/values.md) and [code of conduct](../../../communication/code_of_conduct.md), as well as [DevOps' mission and vision](./index.md).
- Know the expected outcome of each DevOps onboarding milestone.
- You have a sense of what tools you will be using and for what

#### Tasks

- Meet your onboarding buddy
- Attend weekly sync meeting
- Deploy your own SG instance using the following [install methods](https://docs.sourcegraph.com/admin/install):
  - [Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose): You should be able to install this locally on your Sourcegraph laptop. If for some reason you do not have the local resources, create a vm in your own [engineering project](../environments.md#engineering-projects)
  - [Kubernetes](https://docs.sourcegraph.com/admin/install/kubernetes): To install this it is recommend you create a cluster in your own [engineering project](../environments.md#engineering-projects).
- Familiarize yourself with the DevOps [internal infrastructure](./internal_infrastructure.md) and ownership areas
- Open and merge first GitHub pull request by adding yourself to [team page](../../../company/team/index.md) in Handbook
- Read our [DevOps handbook pages](index.md)
- Join the following Slack channels
  - #cloud-org
  - #cloud-devops
  - #dev-ops
  - #dev-chat
  - #dev-announce
  - #alerts-cloud

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
- Review the [DevOps Board](https://github.com/orgs/sourcegraph/projects/220)

### By the end of your first month, the following will be true

#### Goals

- Confidently deploy sourcegraph via all supported deployment methods, and understand when a customer would use one over the others.
- Begin diving into and improving technical documentation and processes.
- Understand how changes are deployed to our Cloud environments
- Confidently contributing to and closing team issues

#### Tasks

- Review the sourcegraph install docs and make any appropriate updates.
- Shadow another member of DevOps team during an incident or during their on-call schedule.
- Take on new issues, and pair with other engineers.

### By the end of your second month, the following will be true

#### Goals

- You will have assisted [customer engineering](../../../ce/index.md) and [customer support](../../../support/index.md), taken ownership of any DevOps tasks and resolved them.
- Made improvements to our processes and how we deliver sourcegraph.

#### Tasks

- Take on the @devops-support rotation and pair with the customer facing teams to resolve issues.
- Identify inefficiencies and raise issues to fix them

### By the end of your third month, the following will be true

#### Goals

- Mentoring direct team members, and engineers in Customer Engineering and Customer Support
- Contribute to long term team goals

#### Tasks

- Develop any new material required to help others level up and understand our product
- Add to the teams planning and OKRs
