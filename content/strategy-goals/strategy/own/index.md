# Own Strategy

## Own elevator pitch

Sourcegraph Own is a revolutionary way to manage code ownership for all your code across repositories and code hosts. It allows you to react to incidents and security issues faster and increases developer productivity by making it easy to find who owns the code quickly. Unlike CODEOWNERS, Soucegraph Own is always up to date, provides 100% ownership coverage, and connects to enterprise systems (LDAP, incident management, etc). Own tells you about who’s accountable for code and who knows about code.

## Quick links

- [Engineering strategy](../../../departments/engineering/index.md#product-vision-and-strategy)
- [Own](../../../departments/engineering/teams/own/index.md)
- [Product Marketing Brief](https://docs.google.com/document/d/1597R1KNoyrU79twn0xoBBMxexnRRGe2I1VQA4mxtR-I/edit#heading=h.a9uhc0ymvnxt)

## Vision

In 3 years, nobody will have to worry about CODEOWNERS being out of date. Devs will be able to quickly understand who owns what code and service, and how all the pieces fit together, and collaboration will be so much easier. The People Graph and the Source Graph will be merged.

## Mission

Allow developers to quickly answer questions about relationships between code, and the persons who build or interact with it. Make all the workflows that require navigating the org chart to improve or fix code easy. Reduce noise, automate boring tasks, kill useless emails.

## Strategy

Own is an emerging product, that we plan to release as an MVP at Starship in March 2023. Our product strategy is relatively bare-bone at this stage:

- First, we'll lay some foundatations. Sourcegraph Own will ingest existing ownership data (eg. from CODEOWNERS) and provide powerful ways to use it that neither CODEOWNERS nor in-house systems provide, building on the power of Sourcegraph.
  - What code does alice own that has the AuthParser class? Search for `AuthParser file:has.owner(@alice)`.
  - We need to remove AuthParser from the codebase. Who owns code that uses it? Search for `AuthParser select:owner`, get a list of all the owners, quickly contact them.
  - Search for files without owner
- Second, we'll make ownership 10x easier and 10x more valuable.
  - We'll make it so ownership can be inferred automatically, and be evergreen, removing the need for maintenance and solving a major pain point. We'll make it easy to answer both "who's accountable for this code" and "who owns this code", and provide escalation paths.
  - Sourcegraph Own will power existing Sourcegraph features, increasing the power of the Code Intelligence platform.
- Third, we'll integrate with the most common communication systems (email, Slack, ticketing, pagerduty), and provide a way for Sourcegraph features (including Own) to notify developers.
- Fourth, we'l make it so Own knows about services, applications and artifacts
- Last, we'll vertizalize into specific use cases, where knowing who's responsible for what are critical, such as incident response.

## Competitive landscape

See [Own - Product Marketing Brief](https://docs.google.com/document/d/1597R1KNoyrU79twn0xoBBMxexnRRGe2I1VQA4mxtR-I/edit#heading=h.a9uhc0ymvnxt) (private) for now.
