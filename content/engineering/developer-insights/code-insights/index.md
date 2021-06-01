# Code insights team

The code insights team is responsible for building and delivering code insights to engineering leaders, empowering data-driven decisions in engineering organizations.

<img src="./screenshot.svg" alt="Screenshot of a code insights dashboard with graphs" width="1141" height="391" style="width: 100%; height: auto" />

## Members

- [Joel Kwartler](../../../company/team/index.md#joel-kwartler-he-him) ([Product Manager](../../../product/roles/index.md#product-manager))
- [Alicja Suska](../../../company/team/index.md#alicja-suska-she-her) ([Product Designer](../../../product/roles/index.md#product-designer))
- [Felix Becker](../../../company/team/index.md#felix-becker) ([Engineering Manager](../../roles.md#engineering-manager)) {#code-insights-eng}
  - [Vova Kulikov](https://about.sourcegraph.com/handbook/company/team#vova-kulikov-he-him) (Frontend Engineer)
  - [Coury Clark](../../../company/team/index.md#coury-clark-he-him) (Backend Engineer)

[We're hiring!](https://boards.greenhouse.io/sourcegraph91/jobs/4028726004)

## Mission

To create a Sourcegraph code insights product that answers all your important high-level questions about what's in your code and how it's changing.

## Vision

Sourcegraph users – especially those in leadership roles – create and monitor code insights to answer vital questions about their code, including:

1. How their code is tracking against any migration, pattern, or code smell goals
1. How their code is changing over time and what areas may need more or less developer attention
1. Understanding their code's current and historical content, like its languages, libraries, and structure
1. What patterns or outliers exist in their third party tools' data when viewed at a high level
1. Any of the above questions, but also filtered by repository, engineering team, or other division

## Responsibilities

The code insights team is responsible for all code insights features, both backend and frontend.

While code insights is in prototype stage, the code insights team is also responsible for all support.

## What is code insights?

Code insights is the first feature in Sourcegraph that can tell you things about your code at a **high level**.

Code insights dashboards will answer questions like "How is a migration progressing?", "What areas of the code are most vulnerable to bugs?", and "How many developers are using a specific API?" Code insights will also incorporate third-party data like code coverage or static analysis metrics to deliver on the promise of aggregating everything you can know about your code.

Sourcegraph is in the unique position to give these insights because we have universal code search: to know _anything_ about your code at a high level confidently means you must know _everything_ about your code at a low level.

Code insights connects many features that Sourcegraph already has and builds on top of them.
We go beyond single-step code intelligence and search to connect the full cycle of analyzing (code intelligence), monitoring (code insights), and actionably changing a codebase (batch changes).

Code insights is the first feature primarily built for non-search-based user personas (developers), instead focusing first on the needs of engineering directors and VPs.

For more information about code insights, see the original [product document](https://docs.google.com/document/d/1EHzor6I1GhVVIpl70mH-c10b1tNEl_p1xRMJ9qHQfoc/edit) or this [demo](https://www.youtube.com/watch?v=XqeRb6Mc4Co) of a code insights prototype. Anyone on the Sourcegraph team can create your own insight using the [quickstart guide](https://gist.github.com/Joelkw/f0582b164578aabc3ac936dee43f23e0), which is explicitly not in the Sourcegraph docs because code insights is undergoing rapid development and this setup will soon change.

## Contact

- [#code-insights](https://sourcegraph.slack.com/archives/C014ZCKMCAV) channel or @codeinsights in Slack.
- [team/code-insights](https://github.com/sourcegraph/sourcegraph/issues/new?labels=team/code-insights) label on GitHub.

## Goals and roadmap

[Goals and roadmap](goals.md)

## Processes

We share the [Developer Insights org's processes](../index.md#processes), plus the following for our team.
We use our [bi-weekly retrospective](#retrospectives) to identify any tweaks we should make that would improve our process.

### Weekly Sync

The team holds weekly syncs.

The meeting notes of team syncs can be found [in this doc](https://docs.google.com/document/d/1cftSl8GMuw4uUv91wpgpMCPB8BFJ28dd3FojBYDB4rI/edit).

Before team syncs, teammates and stakeholders should write down under "Agenda" in the meeting notes document anything that they'd like to bring up for discussion with the whole team.
Attendees are encouraged to add comments on talking points asynchronously before the meeting too.

### Planning and prioritization

We plan and track our day-to-day work on our [Kanban board](https://github.com/orgs/sourcegraph/projects/118). Our current process is as follows:

- Incoming tickets (e.g. from other teams) arrive in the _Inbox_ column.
- Work is scheduled by adding a card to the _Planned_ column. This happens after talking through the next priorities in our [weekly sync](#weekly-sync) or raising something asynchronously in the #code-insights Slack channel.
  - The _Planned_ column is an _ordered_ column, by priority. Priority is discussed on the team.
  - Work should not be moved into this column until it is ready for development.
  - Anything that needs design input gets the `needs-design` label and goes in the _Needs design_ column.
- When starting work, engineers pull cards from the _Planned_ column and move it to the _In Progress_ column.
- There should never be more than a couple of cards in the _In Progress_ column at the same time. If we paused work on something (e.g. because priorities changed), it should be moved back to _Planned_ or _Icebox_ as appropriate.
- Things we triaged from the _Inbox_, but don't plan to work on, go into the _Icebox_.

Note: we intentionally plan so we can avoid merging significant work less than two days before a release (if a release is on the 20th, our last day to merge is the 18th). Exceptions require explicit approval of both the PM and EM.

### Tracking Issues

The team makes use of [tracking issues](../../tracking_issues.md) for tracking progress on the implementation of longer projects that need to be broken up into multiple issues.
The teammates should ensure that a tracking issue is created when starting work on features that are expected to take longer than a few days (or require multiple PRs) to deliver.

### Product Feedback

Specific product feedback about well-defined, small features can be found directly in the GitHub board.
More general product feedback that applies to larger features, or that needs more research and planning to be actionable, is kept in [Productboard](https://sourcegraph.productboard.com/feature-board/1793095-code-insights).

### Retrospectives

Every two weeks, we hold a review/retrospective meeting to reflect on the past two weeks. We use this meeting to:

- Review the previous retro’s action items to ensure they get completed
- Give _Shoutouts!_ to teammates to show appreciation for something they did that we appreciated
- Discuss things that went well in the past two weeks and that we should do more of / invest more into it
- Discuss the things that could have gone better and what we can learn from it to improve
- Talk about processes that we should revisit/refine/propose to improve our efficiency.

We capture and assign actions to individual teammates. Teammates should consider actions coming out of the retrospective as a very high priority.

Teammates contribute to the retrospective asynchronously during the iteration by adding their thoughts to our [retrospective document](https://docs.google.com/document/d/13MrQ5pZnvqBvWcsw8TcKSpDA2E9iR7YSL7dWr89mhDs/edit).
Teammates are highly encouraged to comment on points raised before the sync meeting in the document.

We rotate who leads the retrospective to allow all teammates an opportunity to lead the session.
Teammates can find the rotation schedule at the top of the [retrospective document](https://docs.google.com/document/d/13MrQ5pZnvqBvWcsw8TcKSpDA2E9iR7YSL7dWr89mhDs/edit).

### Code reviews

The team follows the [default code review guidelines](https://docs.sourcegraph.com/dev/background-information/code_reviews) with the following addition:

1. If the author would like any of the requested reviewers to merge the PR after approval they add the label `merge-on-any-approve`
2. If the author would like their PR to be merged once all of the requested reviewers have approved it they add the label `merge-on-all-approve`
3. When there are only minor issues, reviewers are encouraged to give "approval with comments" and trust their teammates to address the comments without requiring a follow-up review.

### Code Insights frontend

The most interesting part of the code insights UI are the charts.
We use SVG and D3 libraries (d3-scales, d3-axis, d3-format) for this.

#### Learning materials

- [SVG intro specs _MDN_](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
  Simple and short description of most popular aspects of SVG.
- [Frontend masters D3 workshop _Shirley Wu_](https://frontendmasters.com/courses/d3/)
  A very interesting workshop from Shirley Wu about SVG and d3 itself. If you prefer reading materials
  instead this workshop has a detailed description and sandbox on [ObservableHq.com](https://next.observablehq.com/@sxywu/introduction-to-svg-and-d3-js).
- [React and pure d3 _Amelia Wattenberger blog_](https://wattenberger.com/blog/react-and-d3)
  The interesting blog post about how to get on react as a rendering library and d3 as a tool for chart math.
- [Sara Soueidan's blog](https://www.sarasoueidan.com/tags/svg/)
  If you want to dive a little more into the peculiarities of SVG spec.

**NOTE**: _The order is not important, you can read these as you like depending on what you are interested in._
