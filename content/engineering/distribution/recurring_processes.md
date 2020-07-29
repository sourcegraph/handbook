# Recurring processes

- [Monthly](#monthly)
  - [Milestone planning](#milestone-planning)
  - [Retrospective](#retrospective)
- [Weekly](#weekly)
  - [Company meeting](#company-meeting)
  - [Weekly Distribution team sync](#weekly-distribution-team-sync)
  - [Bi-weekly async updates](#bi-weekly-async-updates)
  - [Distribution management sync](#distribution-management-sync)

<!--

TODO(nick): Add process for setting, reviewing, and updating goals, and for making them per-team and not just company-wide.

-->

## Monthly

### Milestone planning

Every (monthly) iteration, we determine what work we plan to do to bring us closer to accomplishing
our goals.

**Input:** Existing issues and new proposals in line with our goals.

**Output:** A [tracking issue](../tracking_issues.md) that lists all engineering items of work we plan to accomplish this iteration.

**Process:** The [engineering manager](../roles.md#engineering-manager) drives iteration planning, and follows
these steps:

**Proposal phase (day 1):** The idea here is to identify a superset of issues to be prioritized for
this milestone, rather than to identify the exact set of issues. The pruning phase (day 2) will
yield the latter.

1. Triage [Distribution issues with no
   milestone](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+no%3Amilestone+label%3Ateam%2Fdistribution)
   into either Backlog or the current milestone.
1. Ask everyone to do the following in parallel:
   1. Move their open issues from the previous milestone to the current milestone.
   1. Write any new goals or proposals in GitHub issues and add these to the current milestone or
      the Backlog (use best judgment).
   1. Go through the [Distribution Backlog
      milestone](https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+milestone%3Abacklog+label%3Ateam%2Fdistribution)
      and move all issues to the current milestone they think should be considered for
      prioritization this milestone. If the issue has no owner and there is a probable owner, they
      should assign that owner now.

**Pruning phase (day 2):** The idea here is to take the list of proposed issues and winnow it down to a
feasible set of work with clear lines of ownership.

1. Consult the [goals](../../../company/goals/index.md) and use these to do a preliminary pass through the tracking issue,
   assigning issues to the Backlog that do not fulfill the goals.<br>
   1. If an issue is important but doesn't satisfy the goals, consider if the goal needs to be changed.
1. Ask everyone to go through the issues in the current milestone assigned to them. If the amount of
   work exceeds what they think is feasible, prune the lowest priority issues (using their best
   judgment) by unassigning themselves, but keeping the issue in the milestone. Use the goals as a
   guidepost for prioritization.
1. In a meeting (budget an hour), go through the tracking issue as a team.
   1. Prior to the meeting, the project lead should estimate how long each discussion item should
      take, so that they can keep the meeting on schedule. The tech lead should also talk to people
      1-1 to clarify, align, and build consensus prior to the meeting. A good rule of thumb to shoot
      for is that the team is 70-80% aligned on who's working on what by the time the meeting takes
      place.
   1. Revisit the goals. Are they still the right goals?
   1. During the meeting, everyone should say 1-2 sentences about each issue assigned to them to
      convey useful context to the rest of the team. Issues that have no useful context to share can
      be skipped.
   1. For each unassigned issue, decide whether it needs to be prioritized/assigned. Otherwise, move
      it to the Backlog.
1. If there are any remaining uncertainties following the meeting, the project lead should follow up
   1-1 to finalize the tracking issue.
1. If the goals need to be updated, propose an update and obtain approval from the VP of
   Engineering. It may make sense to block work on issues out of line with the existing goals until
   the approval to update the goals is received.

**Note on agency and responsibility:**

* It is *every* Distribution teammate's responsibility to understand the team's priorities and propose
  the work that aligns with these priorities.
* It is the project lead's responsibility to ensure (1) the tracking issue is the right set of
  things to work on and (2) every team member is bought into the outcome of planning. How active a
  role you take in planning should depend on your read of the team at the start of planning. Common
  pitfalls are being too passive or too dictatorial. Too passive means we aren't necessarily working
  on the right things. Too dictatorial means people aren't bought into what we're working on. Avoid
  both of these. Keep in mind that no one (including you) has a monopoly on useful knowledge and
  context, but also that the project lead exists for a reason.

### Retrospective

The [engineering manager](../roles.md#engineering-manager) drives the [retrospective](../../../retrospectives/index.md) following the [engineering milestone retrospectives](../../../retrospectives/index.md#engineering-milestone-retrospectives) format.

## Weekly

### Company meeting

As with everyone at Sourcegraph, we join the [weekly company meeting](https://about.sourcegraph.com/handbook/communication/company_meeting) on Mondays @ 10:30am PST (when timezone permits, watching the recording otherwise).

### Weekly Distribution team sync

Mon @ 11am PST we hold an [internal
team sync](https://docs.google.com/document/d/1otP6F8qfm2yNOW1hjTszkkuiYF1MGp31s5ATeA76ij4/edit) via Zoom. The goal is to:

- Think about the problems we're solving by briefly going over what everyone is working on
- Revisit our [goals](goals.md) and think about how we are tracking towards them when useful (and consider if they are still the right goals)
- Identify and address any topics & issues that warrant further discussion
- Act as an opportunity / space for anyone to call out concerns, questions, etc. that they may have or suggest things we could be doing better, etc.
- Serve as a space for others outside our team that work closely with us (e.g. people working on Cloud infrastructure) to interact with us face-to-face.

The first Monday before the [20th (release day)](../releases/index.md), this meeting is used to finalize planning the next release.
The second Monday before the [20th (release day)](../releases/index.md), this meeting is used to kick-off asynchronous planning for the next release.

These meetings are recorded (posted automatically to the #distributioneers Slack channel) so that anyone whose timezone does not permit can participate after the fact.

### Weekly updates

#### Wednesday Slack update

Wed, before EOD (local time): distribution members are expected to post an update in Slack communicating:

1. What you have worked on since your last update
2. What you are working on now
3. Anything you feel uneasy about, think is at risk of not being completed, etc.

**Example:**

> **Update:**
>
> * Helped $CUSTOMER with search scaling questions.
> * Made some progress on updating the regression test suite, more work to do.
> * Opened a PR for that nasty bug (https://github.com/sourcegraph/sourcegraph/pull/9330)
> * https://github.com/sourcegraph/sourcegraph/pull/9331 turned out much harder than I thought, it may slip this release
> * I am now focused on https://github.com/sourcegraph/sourcegraph/issues/10419

The goal of this update is to ensure we're discussing things as a team, asking for help when appropriate, reflecting on our progress, and giving others the opportunity to provide help and guidance.

#### Friday GitHub update

Fri, before EOD (local time): distribution members are expected to post an update with the following to [our monthly tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fdistribution+label%3Atracking+Distribution):

- What you've worked on **this week**
- What you plan to focus on **next week**
- Anything that you think may not get finished in time for the release

**Example:**

> This week:
>
> * Lots of progress on regression test suite, more to do.
> * That nasty bug is fixed (https://github.com/sourcegraph/sourcegraph/pull/9330)
> * https://github.com/sourcegraph/sourcegraph/pull/9331 turned out much harder than we thought and it may slip this release
> * Next week: Will finish up the above + start working on automating releases

The goal of this update is to communicate to _the broader Sourcegraph team_ what we're working on, what progress we've made, and anything that is at risk at a high-level.

#### Why weekly & asynchronous updates?

We use asynchronous updates via Slack and GitHub instead of face-to-face video call stand-ups because it allows:

- You to write your update and consume other's updates at your own pace.
- Others to opt-out of conversations they may not have stake in easily (topics worth discussing with the entire team can be brought up at the weekly team sync.)

We send updates twice a week because:

- Daily updates are too frequent, tedious to write out, tedious to consume, and give the impression that someone wants an hour-by-hour account of work (we do not).
- A single weekly update make it easy to forget what you did at the start of the week, forget to ask for help, and make it hard for others to offer help in a timely fashion.
- Two updates a week encourage posting updates and gathering feedback regularly, while still focusing on just the high-level key points of interest.

We want to respect autonomy and view updates as a tool to help remind team members to collaborate together, ask for help, and perform self-reflection about whether your current focus is right or not.
