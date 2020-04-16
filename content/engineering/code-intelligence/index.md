# Code intelligence team

[Roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit#heading=h.dimwsc9ccmwq)

## Vision

Code intelligence is as good or better than an IDE in the browser for all code hosts and all languages, including cross-repository definitions and references.

## Direction

The Code Intelligence team builds tools and services that provide contextual information around code, taking into account its lexical, syntactic, and semantic structure. This includes:

- An API to provide fast, comprehensive, and accurate answers to important code navigation queries such as Go to Definition and Find References

- A powerful and flexible language-agnostic model of dependency relationships across projects, repositories, and languages

- Robust, extensible, and scalable infrastructure to index code across all languages, keep those indexes up-to-date, and efficiently resolve code intelligence queries against all indexed code.

## Tech stack

Most of the Code Intelligence tools and infrastructure are implemented in Go and TypeScript. Precise code indexers are written in a variety of languages, as needed.  We use Postgres and SQLite for data storage.

## Team documentation & planning

Here are some key ways to contact us:

- On GitHub, mention or assign issues to the [@sourcegraph/code-intel](https://github.com/orgs/sourcegraph/teams/code-intel) team.
- On Slack, use the [#code-intel](https://app.slack.com/client/T02FSM7DL/CHXHX7XAS) channel.
- On Google Drive, we use the [Code Intel](https://drive.google.com/drive/folders/1vKcW5EM4RBIuF8ZFvPM0G1FRwl_03RXK) directory.

The Code Intelligence team holds a weekly sync meeting.  We use a Google doc for [agenda and meeting notes](https://docs.google.com/document/d/1R4gXavKwajVRplHSy1ECn_ZHMoQZIwiGKqWWb2SdbUE/edit). If you would like to add a topic to the agenda, please ping [the #code-intel channel in Slack]( https://app.slack.com/client/T02FSM7DL/CHXHX7XAS) to ensure we are prepared to address it.

Prior to the weekly sync meeting, each team member should:

1. Add any agenda items that should be discussed.
2. Review any existing agenda items and be prepared to discuss them.
3. Update the current release tracking issue with a summary of progress for the previous week and plans for the next week.

We track most of our work using [issues on the Sourcegraph main repository](https://github.com/sourcegraph/sourcegraph/issues). If you have an issue that wants our attention, mention [the @sourcegraph/code-intel team](https://github.com/orgs/sourcegraph/teams/code-intel) or tag your issue with the [`team/code-intelligence` label](https://github.com/sourcegraph/sourcegraph/labels/team%2Fcode-intelligence).
