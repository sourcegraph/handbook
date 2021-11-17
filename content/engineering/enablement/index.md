# Enablement org

## Mission

Our mission is to provide technical foundations critical to the business, our customers, and our products. We do this by ensuring we have the best tools, processes, and services in place, for use by both customers and our own engineers when using or developing Sourcegraph. For a deep dive into our mission see our [strategy page](../../company/strategy/enablement/index.md)

## Team

The org is lead by [Serina Clark](../../company/team/index.md#serina-clark) ([Director of Product](../../product/roles/index.md#director-of-product)) and [Jean du Plessis](../../company/team/index.md#jean-du-plessis) ([Director of Engineering](../roles.md#director-of-engineering))

- [Repo Management](repo-management/index.md)
  - [Jordan Plahn](../../company/team/index.md#jordan-plahn) ([Engineering Manager](../roles.md#engineering-manager))
  - [Dan Mckean](../../company/team/index.md#dan-mckean) ([Product Manager](../../product/roles/index.md#product-manager))
  - [Ryan Slade](../../company/team/index.md#ryan-slade)
  - [Indradhanush Gupta](../../company/team/index.md#indradhanush-gupta)
- [Delivery](delivery/index.md)
  - [Dan Mckean](../../company/team/index.md#dan-mckean) ([Product Manager](../../product/roles/index.md#product-manager))
  - TBH ([Engineering Manager](../roles.md#engineering-manager))
  - [Geoffrey Gilmore](../../company/team/index.md#geoffrey-gilmore)
  - [Dave Try](../../company/team/index.md#dave-try)
  - [Crystal Augustus](../../company/team/index.md#crystal-augustus)
- [Dev Experience](dev-experience/index.md)
  - [Patrick Dubroy](../../company/team/index.md#patrick-dubroy) (acting [Engineering Manager](../roles.md#engineering-manager))
  - [Taylor Sperry](../../company/team/index.md#taylor-sperry) (Technical [Product Manager](../../product/roles/index.md#product-manager))
  - [Asdine El Hrychy](../../company/team/index.md#asdine-el-hrychy)
  - [JH Chabran](../../company/team/index.md#jh-chabran)
  - [Robert Lin](../../company/team/index.md#robert-lin)
- [Frontend Platform](frontend-platform/index.md)
  - [Alicja Suska](../../company/team/index.md#alicja-suska) ([Product Designer](../../product/roles/index.md#product-designer))
  - [Patrick Dubroy](../../company/team/index.md#patrick-dubroy) ([Engineering Manager](../roles.md#engineering-manager))
  - [Taylor Sperry](../../company/team/index.md#taylor-sperry) (Technical [Product Manager](../../product/roles/index.md#product-manager))
  - [Tom Ross](../../company/team/index.md#tom-ross)
  - [Valery Bugakov](../../company/team/index.md#valery-bugakov)
- [Engineering Education](engineering-education/index.md)
  - [Marek Zaluski](../../company/team/index.md#marek-zaluski)
- Sourcegraph Handbook
  - [Mary Belzer](../../company/team/index.md#mary-belzer) ([Product Manager](../../product/roles/index.md#product-manager))

## Principles and practices

In addition to the [engineering principles and practices](../principles-and-practices.md), the Enablement org follows the following principles and practices. Each team is afforded the freedom to operate as best they see fit to achieve their goals. Below are principles and practices all teams in the Enablement org follow.

### Unblocking others is your highest priority

Suppose a teammate is blocked by you on a question, your approval, or a pull request review. In that case, your top priority is always to unblock them, either directly or by helping them find someone else who can, even if this takes time away from your own or your team's priorities. If you're the one who is blocked, be sure to communicate that so that others can prioritize appropriately.

Typically, waiting for a PR review does not mean you are blocked: it's expected that you can start working on something else (e.g., a new PR that depends on the first one). However, it's important to get a review ASAP in some scenarios — e.g., to fix a regression or a broken CI pipeline. In those cases, you should communicate the urgency and expect that your teammates will prioritize unblocking you.

Even when a teammate is not _blocked_ but _inconvenienced_ (because of follow-up work), please don't leave them hanging for extended periods. You should generally budget some amount of time every day for doing reviews.

We want teammates to do what is best for the org as a whole. Don't optimize for your team's goals when it negatively impacts the goals of other teams, our users, or the company. Those goals are also your problem and your job.

### Pull requests

#### For authors

##### Prefer small PRs (<400 lines)

We extend Sourcegraph's company-wide guidance (see [what makes an effective PR](https://docs.sourcegraph.com/dev/background-information/code_reviews#what-makes-an-effective-pull-request-pr)) with a specific guideline that _PRs should contain less than 400 changed lines_ (excluding tests). Note that this is a _guideline_ and not a hard limit; there are situations where it doesn't make sense (e.g., PRs that are primarily mechanical changes).

There are several reasons to prefer small PRs:

- Reviews happen more quickly ("I'll just review this quickly right now" instead of "Hmmm, better schedule time for this later").
- It enables higher-quality reviews because there's less context for the reviewer to hold in their head. It's also easier to suggest significant changes when your teammate has spent only a few hours on a PR rather than a day or more.
- It encourages a tighter feedback loop.
- Smaller atomic changes are easier to roll back if required.

##### Keep reviewers to a minimum

Pull request authors should always prefer requesting reviews from a specific teammate(s) as opposed to a group. This creates accountability and clear expectations. A single reviewer is usually sufficient.

#### For reviewers

Reviewers should try to review promptly, allowing everyone involved in the pull request to iterate faster as the context is fresh in memory. Reviewers should aim to review within one working day from the date they were assigned to the pull request. If you don't think you'll be able to review a pull request within that time, let the author know as soon as possible.

If the pull request's author has not heard anything after one day, a new reviewer should be assigned.

### Communication

We recognize that frequent, open communication is key to the success of every team, especially in an all-remote environment.
We default to asynchronous communication in Slack, Google Docs, and GitHub issues over other mediums (video calls, emails, etc.) as we respect our teammates' time.

In addition to team-specific channels, we communicate in the following org-wide channels in Slack:

#enablement-org: Used primarily for org-wide communication and for other orgs to reach out for cross-org collaboration.

#enablement-social goes into this channel and random conversations, banter, jokes, etc., are all welcome here.

#enablement-leadership: This channel is for the Engineering and Product Managers to discuss higher-level matters impacting the whole org.

#### Slack acknowledgment

It is essential to remove assumptions/uncertainty around whether teammates have seen, understood, or acted on a message in an async-first communication environment.
To assist in this regard, we provide the following guideline for teammates to follow when communicating and responding in Slack.

**The most important thing to remember is not which emoji to use, but rather to remember to acknowledge and do it unambiguously.**

_When acknowledging a request:_

- `:thumbsup:` (👍) = I see the request and will action it
- `:white_check_mark:` (✅) = I have completed my action on the request

_When acknowledging a statement:_

- `:thumbsup:` 👍 = I agree with the statement or I have taken note of it
- `:thumbsdown:` 👎 = I disagree with a statement - encouraged to always follow up with a written response

_When acknowledging a question:_

You should provide a written response unless it's a simple yes/no question, in which case `:thumbs-up:` (👍)/`:thumbs-down:` (👎) is acceptable.

#### Weekly Slack check-ins

We use [Geekbot](https://geekbot.com/) to facilitate a once-a-week (on a Monday) social check-in where we ask teammates across the org the share a bit about what goes on in their life in the #enablement-social Slack channel. We also use this opportunity to build camaraderie between team members by sharing some non-work-related aspects of our lives.

Participation in sharing is voluntary.

#### Status updates

Each Engineering Manager of the teams in the org is responsible for sending out a [status update](../engineering-management.md#status-updates) by the Monday following their team's retrospective. This should happen at least once a month.

#### Leadership sync

To stay aligned as an organization on Monday we share our priorities for the week in the #enablement-leadership channel.  On Friday a reminder is sent to the same channel prompting the team with the following:

- What updates do you have on [our OKRs](https://github.com/orgs/sourcegraph/projects/214/views/14?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C188005%2C247470%2C284758%2C253662%2C243177%5D)
- Any highlights on team accomplishments?
- Any challenges or risks to call out?

On Thursday we meet as a leadership team via zoom to have real time conversation.  We cover one fun question, leadership updates, and hot topics.  This time gives us space to catch up on topics that are better discussed live and drive to quick decisions.  If we do not have a large enough cohort we will run the meeting async.

### Health reports

The engineering managers are responsible for compiling a weekly health report ([see example](https://docs.google.com/spreadsheets/d/1PnRPydNYLF2Als3KpVuIYO8dXeqckp_sbowVkvkdkeE/edit)) for their team.

The report is a confidential update between the Director and the Engineering Managers and serves the following purpose:

1. Updates the Director on how things are going at a high level in the team
1. Identifies areas of concern that could lead to proactive intervention to mitigate concerns

The report is not used for judging the team's performance or the manager, and its intention is solely to inform and trigger dialogue. Managers are not expected to provide exhaustive notes but rather a high-level summary.
