# Code intelligence team

[Roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit#heading=h.dimwsc9ccmwq)

## Vision

Code intelligence is as good or better than an IDE in the browser for all code hosts and all languages, including cross-repository definitions and references.

## Direction

The Code Intelligence team builds tools and services that provide contextual information around code, taking into account its lexical, syntactic, and semantic structure. This includes:

- An API to provide fast, comprehensive, and accurate answers to important code navigation queries such as Go to Definition and Find References

- A powerful and flexible language-agnostic model of dependency relationships across projects, repositories, and languages

- Robust, extensible, and scalable infrastructure to index code across all languages, keep those indexes up-to-date, and efficiently resolve code intelligence queries against all indexed code.

## Contact

- #code-intel channel or @codeintel in Slack.
- [team/code-intelligence](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/code-intelligence) label in GitHub.

## Tech stack

Precise code intelligence-specific services are written in Go and code intelligence features are added to the existing frontend service where possible. Sourcegraph extensions that provide code intelligence are written in TypeScript. We use SQLite databases to store data specific to a particular LSIF index and Postgres to store all other data.

## Team documentation & planning

Here are some key ways to contact us:

- On GitHub, mention or assign issues to the [@sourcegraph/code-intel](https://github.com/orgs/sourcegraph/teams/code-intel) team.
- On Slack, use the [#code-intel](https://app.slack.com/client/T02FSM7DL/CHXHX7XAS) channel.
- On Google Drive, we use the [Code Intel](https://drive.google.com/drive/folders/1vKcW5EM4RBIuF8ZFvPM0G1FRwl_03RXK) directory.

The Code Intelligence team holds a weekly sync meeting.  We use a Google doc for [agenda and meeting notes](https://docs.google.com/document/d/1R4gXavKwajVRplHSy1ECn_ZHMoQZIwiGKqWWb2SdbUE/edit). If you would like to add a topic to the agenda, please ping [the #code-intel channel in Slack]( https://app.slack.com/client/T02FSM7DL/CHXHX7XAS) to ensure we are prepared to address it.

Prior to the weekly sync meeting, each team member should:

1. Add any agenda items that should be discussed.
2. Review any existing agenda items and be prepared to discuss them.
3. Update the current release [tracking issue](../tracking_issues.md) with a summary of progress for the previous week and plans for the next week.

We track most of our work using [issues on the Sourcegraph main repository](https://github.com/sourcegraph/sourcegraph/issues). If you have an issue that wants our attention, mention [the @sourcegraph/code-intel team](https://github.com/orgs/sourcegraph/teams/code-intel) or tag your issue with the [`team/code-intelligence` label](https://github.com/sourcegraph/sourcegraph/labels/team%2Fcode-intelligence).

## Members

- [Nick Snyder](../../../company/team/index.md#nick-snyder-he-him) ([engineering manager](../roles.md#engineering-manager))
- [Eric Fritz](../../../company/team/index.md#eric-fritz-he-him) ([project lead](../roles.md#project-lead))
- [Garo Brik](../../../company/team/index.md#garo-brik-they-them)

## Hiring status

_Updated 2020-06-02_

We are hiring for these roles:

- +2 [Software Engineer - Code intelligence](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-code-intelligence.md)
- +1 [Engineering Manager - Product](https://github.com/sourcegraph/careers/blob/master/job-descriptions/engineering-manager-product.md)
