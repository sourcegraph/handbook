# Release Team

## Mission

Enable any Sourcegraph customer or user to trial or run (in production) Sourcegraph in a way that is compatible with their environment, supports their level of technical expertise, and allows them to easily access the value that our product provides. Make it as easy as possible to access this value, and to maintain it going forwards by easily staying up to date with Sourcegraph's latest developments.

## Leadership

{{generator:product_team_leads.ship_release}}

## Members

{{generator:product_team.ship_release}}

For more detailed information on the Release team members, check out our [README page](./team/index.md) which expands on our profile.

## Responsibilities

- Deployments methods and configuration
  - [Kubernetes - Helm](./deployment/helm.md)
  - [Kubernetes - kustomize](https://github.com/sourcegraph/deploy-sourcegraph)
  - [docker](https://github.com/sourcegraph/deploy-sourcegraph-docker)
- [Customer deployments and docs](https://docs.sourcegraph.com/admin/install)
- [Org-wide areas of ownership](../../dev/process/engineering_ownership.md#delivery-and-delivery-tiger-team)
- ~~[Sourcegraph releases](../../dev/process/releases/index.md)~~ releases are owned by the [Release Guild](../../guilds/release_guild.md) and the Delivery provides support to the Release Guild.

## Contact

- #delivery channel, or `@delivery-support` in Slack. Please follow our [support guidelines](#support-request-guidelines) below.
- [team/release](https://github.com/sourcegraph/sourcegraph/labels/team%2Frelease) label and [@sourcegraph/release](https://github.com/orgs/sourcegraph/teams/release) team on GitHub.

## Support

If in doubt about the process, please ask in #delivery. Delivery teammates shold consult our [support-rotation](./processes.md#support-rotation) guide to handle inquiries.

### Requesting our support

Feel free to direct simple questions to us in #delivery in Slack. As a rule of thumb, anything that is not documented in our handbook or [docsite](https://docs.sourcegraph.com/) usually indicates it is not a simple question (e.g. feature requests) and should follow our [support request guidelines](./#support-request-guidelines) below.

- This channel _is_ regularly checked and well-monitored
- So please do **NOT** directly message or CC an engineer—this is to try and protect their focus
- Instead, if it’s urgent, please @ either the PM or the EM in the question in the channel and we'll ensure it gets the best response

### Support request guidelines

Support requests related to our [areas of ownership](./#responsibilities) should follow this process:

1. Make sure there is an issue—if there's not, please create one and include:
   - A short description of the ask
   - A more detailed explanation of the background, the context and the challenge that needs solving
   - Any guidance related to the impact this is having
   - Any extra information that could help us solve or prioritize this
2. Ensure lable `team/delivery` is added to the issue
3. Ensure that the issue is added to the "[Delivery](https://github.com/orgs/sourcegraph/projects/205)" board in GitHub
4. Anything without a status is checked and triaged weekly - so this is enough for feature requests or less urgent issues
5. If you think this needs eyes 👀 sooner
   - Within a few hours ➡️ message in #delivery
   - ASAP ➡️ message in #delivery and CC `@delivery-support`

<!-- ## Growth plan

TODO

## Tech stack

TODO-->

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../dev/process/principles-and-practices.md).

## Processes

- [Read more about how we work](processes.md)
- [Onboarding](onboarding.md)
- [Customers](customers/index.md)

[devops]: ../devops/index.md
