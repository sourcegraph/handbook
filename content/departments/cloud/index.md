# Cloud Team

> NOTE: **Cloud means single-tenant dedicated instances managed by Sourcegraph** *(for example `mycompany.sourcegraph.com`)*. Sourcegraph Cloud should not be confused with Sourcegraph.com which holds public and open source code. The Cloud and managed instance should be considered synonyms within these handbook pages. 

The Cloud team is the special focus team reporting directly to CEO modeled on *“if AWS were to offer ‘Managed Sourcegraph’ like they do Elasticsearch, Redis, PostgreSQL, etc., how would they do it?”* The team is resposible for maintaining existing managed instances and building the next generation of them. The Cloud team has no other responsibilities.

## Mission statement

Build a **fully managed platform** for using Sourcegraph that can **(by EOFY23) support 100+ customers** using **dedicated** Sourcegraph instances, providing **feature compatibility** with self-hosted while **being cost-efficient for customers and Sourcegraph**.

**Fully managed**

- Observability allowing Sourcegraph to react before user impact is noticed, while respecting user privacy
- Frequent, invisible Sourcegraph upgrades
- Invisible infrastructure updates
- Zero infrastructure access for customers

**Platform**

- Low customer onboarding cost
- Zero customer maintenance cost
- Secure (SOC 2, documented security posture)
- Reliable (ability to offer SLA, internal SLO of 99.9%)
- Automatable (in due time, feature releases / billing / upgrades / analytics are built-in)

**Support 100+ customer**

- Targeting 100+ customers in FY23 to invest in supporting 1000 in FY24
  - Support 250 production-grade instances (accommodating trials / testing) 
- Compatible with current MI use cases
  - Infrastructure / Domain / Isolation boundary per customer

**Dedicated Sourcegraph instances**

- One Sourcegraph instance serves a single customer
- (FY23/FY24) Dedicated Cloud infrastructure
  - With a path to “single-tenant Sourcegraph, shared-infrastructure” model in the future
- (FY23/FY24) GCP only
  - With a path to supporting other Cloud providers / Bring-your-own-Kubernetes in the future

**Feature compatibility**

- Feature set on-par with self-hosted
  - With time, getting more powerful than self-hosted
- Features are opt-in (for a fee)
- New features available on Cloud before self-hosted
- Existing features have higher adoption on Cloud than self-hosted

**Cost-efficiency**

- Expected to support teams from 50 to 5000 users (EOFY23) at 500$/month minimal infrastructure cost
- Infrastructure cost covered by Sourcegraph
  - We’re incentivized to operate efficiently
- Administration / operations provided by Sourcegraph
  - Cloud team headcount scales sublinearly with number of customers
- (FY24) Self service provisioning / release channels for upgrades

## Roadmap

The Cloud team will define FY23 roadmap in upcomming weeks.

### Q2FY23 goals

- Support up to 100 managed instances [without greatly increasing engineering capacity invested in maintenance](https://docs.google.com/document/d/1SvWVScwBtLdrvoVKB4tgSiqhv3MPBDjv6JbwqGnlLdg/edit#)
  - [Migrate all managed instances to v 1.1 architecture](https://docs.google.com/document/d/1ZHOnZc6K0oLhnqbcFYyzvdqng2ZM4vhc8Ln20Q4piQ0/edit#heading=h.trqab8y0kufp)
- Provision sourcegraph.sourcegraph.com as production grade managed instance for Sourcegraph team
- [Support migration Sourcegraph.com customers to the Cloud](https://docs.google.com/document/d/1owIo8QA_omwnFqSfS5EKyIhd4SpMDdn7cZJrsvgjl-E/edit#heading=h.2vev9l6i9qrg)
- Support SOC2 audit for managed instances
- Enabling managed instances trials (limited capacity)
- Defined SLO & measured SLO for managed instances

## Team

{{generator:product_team.cloud}}