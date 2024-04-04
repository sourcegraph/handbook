# Core Services Team

The Sourcegraph Core Services team:

- Builds tooling and operate infrastructure that enables Sourcegraph Engineers to launch and support their own customer-facing services
- Operates shared/company-wide services

Our mid-term goals are to:

- Build robust tooling, infrastructure, and best practices for Sourcegraph-managed services
- Support services operated by other teams on infrastructure and tooling we built
- Build new services required to make Sourcegraph/Cody successful
- Support existing services with custom infrastructure, and eventually enable migration to standardised architecture - in particular, strip Sourcegraph.com down into a "plain old Sourcegraph instance" so we can more easily migrate it to standardised architecture

For specific, current examples of our work and ownership, see [Ownership areas](#ownership-areas) and [go/whodoinotify, filtering by the "Core Services" team](https://www.appsheet.com/start/24237f2b-0a37-45c8-bd7c-c14d35d2c811?platform=desktop#viewStack%5B0%5D%5Bidentifier%5D%5BType%5D=Control&viewStack%5B0%5D%5Bidentifier%5D%5BName%5D=Services&viewStack%5B0%5D%5BmutableState%5D%5BControlName%5D=Services&viewStack%5B0%5D%5BmutableState%5D%5BRoot%5D=fastTable&viewStack%5B0%5D%5BmutableState%5D%5BDataStamp%5D=2024-03-29T12:36:37.6658472Z&viewStack%5B0%5D%5BmutableState%5D%5BGroupBy%5D%5B0%5D%5BColumn%5D=Service%20Level&viewStack%5B0%5D%5BmutableState%5D%5BGroupBy%5D%5B0%5D%5BOrder%5D=Ascending&viewStack%5B0%5D%5BmutableState%5D%5BUserDefinedFilters%5D%5B0%5D%5B0%5D=attribute&viewStack%5B0%5D%5BmutableState%5D%5BUserDefinedFilters%5D%5B0%5D%5B1%5D=Team&viewStack%5B0%5D%5BmutableState%5D%5BUserDefinedFilters%5D%5B0%5D%5B2%5D%5B7157b796%5D=true&appName=WhoDoINotify-668547298).

To reach out to us, please use #discuss-core-services.

## Leadership

{{generator:product_team_leads.ship_core_services}}

## Members

{{generator:product_team.ship_core_services}}

## Ownership areas

For detailed ownership, see [go/whodoinotify, filtering by the "Core Services" team](https://www.appsheet.com/start/24237f2b-0a37-45c8-bd7c-c14d35d2c811?platform=desktop#viewStack%5B0%5D%5Bidentifier%5D%5BType%5D=Control&viewStack%5B0%5D%5Bidentifier%5D%5BName%5D=Services&viewStack%5B0%5D%5BmutableState%5D%5BControlName%5D=Services&viewStack%5B0%5D%5BmutableState%5D%5BRoot%5D=fastTable&viewStack%5B0%5D%5BmutableState%5D%5BDataStamp%5D=2024-03-29T12:36:37.6658472Z&viewStack%5B0%5D%5BmutableState%5D%5BGroupBy%5D%5B0%5D%5BColumn%5D=Service%20Level&viewStack%5B0%5D%5BmutableState%5D%5BGroupBy%5D%5B0%5D%5BOrder%5D=Ascending&viewStack%5B0%5D%5BmutableState%5D%5BUserDefinedFilters%5D%5B0%5D%5B0%5D=attribute&viewStack%5B0%5D%5BmutableState%5D%5BUserDefinedFilters%5D%5B0%5D%5B1%5D=Team&viewStack%5B0%5D%5BmutableState%5D%5BUserDefinedFilters%5D%5B0%5D%5B2%5D%5B7157b796%5D=true&appName=WhoDoINotify-668547298)

At a higher level, our core ownership areas include:

- [Managed Services Platform (MSP)](./managed-services/platform.md) and [Managed Services](./managed-services/index.md) as a whole:
  - Tooling to bootstrap and operate new services on cloud infrastructure
  - Deployment pipelines, observability tooling for managed services
  - Support infrastructure for existing standalone managed services
  - API gateway and other API concerns
- [Sourcegraph Accounts (accounts.sourcegraph.com)](./sams/index.md): Sourcegraph-wide and service-to-service authentication
- [Telemetry Gateway](../../managed-services/telemetry-gateway.md): Centralised event/analytics proxies and related SDKs
- [Sourcegraph.com infrastructure](../../dev/process/deployments/instances.md#dotcom):
  - [Sourcegraph.com playbooks](../../dev/process/deployments/playbooks.md#sourcegraphcom)
  - [Google Front End (GFE)](./google-front-end/index.md)

## Processes

### Team planning

Planning processes align with those used throughout the [Infrastructure org](../../infrastructure/index.md).
[go/ship-okrs](https://www.appsheet.com/start/ce3ca2b6-cf8f-4367-a386-28a3e9856cb9#viewStack%5B0%5D%5Bidentifier%5D%5BType%5D=Control&viewStack%5B0%5D%5Bidentifier%5D%5BName%5D=Welcome) tracks all Infrastructure key results and objectives, including Core Services.
go/ship-okrs also maintains a record of weekly updates towards key results and objectives.

### Issue tracking

The team does issue tracking within the [Core Services GitHub project board (go/core-services-board)](https://github.com/orgs/sourcegraph/projects/405/views/1).
This board tracks projects from across the Sourcegraph GitHub organization, as we track issues in several repositories based on relevancy:

- [`sourcegraph/sourcegraph`](https://github.com/sourcegraph/sourcegraph): issues related to services housed in the monorepo (Telemetry Gateway, Pings, etc.). All Core Services issues in this repository are labelled `team/core-services`.
- Private: [`sourcegraph/managed-services`](https://github.com/sourcegraph/managed-services): issues related to Managed Services Platform (MSP)
- Private: [`sourcegraph/sourcegraph-accounts`](https://github.com/sourcegraph/sourcegraph-accounts): issues related to Sourcegraph Accounts Management System

How board columns should be used are directly documented in column descriptions within the project board.

#### Project views

For key results and objectives derived from [team planning](#team-planning), DRIs are expected to maintain [project views](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project) within the shared project board with appropriate filters to capture any relevant work (label, "tracked by", and so on).
These views should be prefixed with `KR:`.

For ad-hoc support with 3 days+ of work, we can choose to create views to track related requests and work, divided by category, for example `Support: Telemetry Gateway`.

### Recurring meetings

The Core Services team hosts a weekly team sync, with meeting notes available [here](https://docs.google.com/document/d/1ZJfSZX3VG3TJ5kXoa72SAdV55udnyt7MsILC1HWduw4/edit).
Each week we review [issue tracking](#issue-tracking), discuss technical topics, areas of concern, active cross-team discussions, and do some general bantering.

If you have something you would like to discuss synchronously with the team, please reach out to #discuss-core-services and we'd be happy to arrange for you join a session.
