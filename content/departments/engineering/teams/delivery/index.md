# Delivery team

## Mission

Delivery's mission is to empower any customer to self-manage Sourcegraph in a way that is compatible with their environment, supports their level of technical expertise, and allows them to easily access the value that our product provides.

Informed by internal and external stakeholders, Sourcegraph distributions will evolve to meet the needs of our customers.

## Current Workstreams

Listed is a high-level overview of workstreams that Delivery is currently undertaking. This list will mutate as the team continues to mature. Workstreams may turn into long-term responsibilities, roadmap items, or strategic guides.

- Docker Compose Load Testing
  - Load test using K6 accurate upper bounds of each Docker container
  - Work with Strategic PM to define T-Shirt sizes
  - Led by Beatrix Woo and James Cotter
- AWS Marketplace Integration
  - Work with AWS & Tom Pinckney to define onboarding requirements
  - Build 3 AMIs and update documentation accordingly
- Long Term Self-Managed Solution
  - Spun up working group to gather peer feedback
  - Initial focus is on building K3 POC
  - Tech Lead is Stephen Gutekanst
- Build out Delivery team
  - Hire 2 more engineers
  - [Delivery Engineer role](https://boards.greenhouse.io/sourcegraph91/jobs/4357102004)
- Resource Estimator
  - Create roadmap to extend Resource Estimator into new customer workflow.
  - Owned by Sanjeev Sekar

## Members

{{generator:product_team.delivery}}

For more detailed information on the Delivery team members, check out our [README page](./team/index.md) which expands on our profile.

## Strategy

[Find out about our team’s vision, guiding principles, current status quo, and strategic plans](../../../../strategy-goals/strategy/delivery/index.md)

## Responsibilities

- Deployments methods
  - [Docker-Compose](https://github.com/sourcegraph/deploy-sourcegraph-docker)
- Maintenance of [Kubernetes-Helm](./deployment/helm.md) and [Kustomize](https://github.com/sourcegraph/deploy-sourcegraph) core repositories
  - Customer Engineering will support jointly-managed deployments.
- [Customer deployments and docs](https://docs.sourcegraph.com/admin/install)

## Contact

- [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) channel, or `@delivery-support` in Slack. Please follow our [support guidelines](#support-request-guidelines) below.
- [team/delivery](https://github.com/sourcegraph/sourcegraph/labels/team%2Fdelivery) label and [@sourcegraph/delivery](https://github.com/orgs/sourcegraph/teams/delivery) team on GitHub.

## Support

If in doubt about the process, please ask in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX). Delivery teammates shold consult our [support-rotation](./processes.md#support-rotation) guide to handle inquiries.

### Requesting our support

Feel free to direct simple questions to us in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) in Slack. As a rule of thumb, anything that is not documented in our handbook or [docsite](https://docs.sourcegraph.com/) usually indicates it is not a simple question (e.g. feature requests) and should follow our [support request guidelines](./#support-request-guidelines) below.

- This channel _is_ regularly checked and well-monitored
- So please do **NOT** directly message or CC an engineer—this is to try and protect their focus
- Instead, if it’s urgent, please @ either the PM or the EM in the question in the channel and we'll ensure it gets the best response

### Support request guidelines

Support requests related to our [areas of ownership](index.md#responsibilities) should follow this process:

1. Make sure there is an issue—if there's not, please create one and include:
   - A short description of the ask
   - A more detailed explanation of the background, the context and the challenge that needs solving
   - Any guidance related to the impact this is having
   - Any extra information that could help us solve or prioritize this
2. Ensure lable `team/delivery` is added to the issue
3. Ensure that the issue is added to the "[Delivery](https://github.com/orgs/sourcegraph/projects/205)" board in GitHub
4. Anything without a status is checked and triaged weekly - so this is enough for feature requests or less urgent issues
5. If you think this needs eyes 👀 sooner
   - Within a few hours ➡️ message in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX)
   - ASAP ➡️ message in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) and CC `@delivery-support`

<!-- ## Growth plan

TODO

## Tech stack

TODO-->

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../dev/process/principles-and-practices.md).

We also have a set of [guiding principles](../../../../strategy-goals/strategy/delivery/index.md#guiding-principles) that help inform our decision making about our stretegic and prioritization choices.

## Processes

- [Read more about how we work](processes.md)
- [Onboarding](onboarding.md)
- [Customers](customers/index.md)

[devops]: ../devops/index.md
