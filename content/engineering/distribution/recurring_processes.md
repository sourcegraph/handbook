# Recurring processes

## Quarterly

### OKRs

Every quarter, we set OKRs to set our focus and align our goals with those of the company.

**Input:** Existing issues and new ideas proposed by any member of the Sourcegraph organization.

**Output:** OKRs and issues filed and assigned to Backlog milestone for each thing that is covered by
the OKRs.

**Process:** The [project lead](../roles.md#project-lead) drives OKR planning, and follows these steps:

1. Gather context:
   1. Last quarter's OKRs
   1. Issue backlog
   1. Any goals, proposals, or priorities not yet represented in the issue backlog. Write down your own and
      solicit from teammates.
1. Filter out any items that are not priorities this quarter, and group the remaining items into
   themes.
1. From the themes, define the objectives and key results.
1. Propose these OKRs to the Distribution team for 1 round of feedback.
1. Add these to the company OKRs document. Solicit feedback from VP Engineering. Respond to feedback
   and iterate.

#### Updating the OKRs mid-quarter

This is generally discouraged, but may be necessary if real priorities shift (update objective) or a
better way to measure emerges (update key results). Updates should be signed off by the VP of
Engineering.

## Monthly

### Milestone planning

Every (monthly) iteration, we determine what work we plan to do to bring us closer to accomplishing
our quarterly OKRs.

**Input:** Existing issues and new proposals in line with our OKRs.

**Output:** A [tracking issue](../tracking_issues.md) that lists all engineering items of work we plan to accomplish this
iteration.

**Process:** The [project lead](../roles.md#project-lead) drives iteration planning, and follows
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

1. Consult the quarterly OKRs and use these to do a preliminary pass through the tracking issue,
   assigning issues to the Backlog that do not fulfill the OKRs.<br>
   1. If an issue is important but doesn't satisfy the OKRs, weigh the cost of not prioritizing the
      issue with the cost of updating the OKRs mid-quarter.
1. Ask everyone to go through the issues in the current milestone assigned to them. If the amount of
   work exceeds what they think is feasible, prune the lowest priority issues (using their best
   judgment) by unassigning themselves, but keeping the issue in the milestone. Use the OKRs as a
   guidepost for prioritization.
1. In a meeting (budget an hour), go through the tracking issue as a team.
   1. Prior to the meeting, the project lead should estimate how long each discussion item should
      take, so that they can keep the meeting on schedule. The tech lead should also talk to people
      1-1 to clarify, align, and build consensus prior to the meeting. A good rule of thumb to shoot
      for is that the team is 70-80% aligned on who's working on what by the time the meeting takes
      place.
   1. Revisit the Quarterly OKRs.
   1. During the meeting, everyone should say 1-2 sentences about each issue assigned to them to
      convey useful context to the rest of the team. Issues that have no useful context to share can
      be skipped.
   1. For each unassigned issue, decide whether it needs to be prioritized/assigned. Otherwise, move
      it to the Backlog.
1. If there are any remaining uncertainties following the meeting, the project lead should follow up
   1-1 to finalize the tracking issue.
1. If the quarterly OKRs need to be updated, propose an update and obtain approval from the VP of
   Engineering. It may make sense to block work on issues out of line with the existing OKRs until
   the approval to update the OKRs is received.

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

This can be done in the internal sync at the start of a new iteration.

The [project lead](../roles.md#project-lead) drives the retrospective. Ask everyone to review the
previous milestone tracking issue, the planned work assigned to you, what got done, what didn't, and
come prepared to talk about the following:

* What was painful about the milestone? How can we address that pain moving forward?
* What should we stop doing?
* What should we start doing?

## Weekly

### Internal sync

The [internal
sync](https://docs.google.com/document/d/1otP6F8qfm2yNOW1hjTszkkuiYF1MGp31s5ATeA76ij4/edit) serves
to share updates, sync on immediate plans and priorities, and discuss any topics that need
discussing with the entire Distribution team.

### External sync

The [external
sync](https://docs.google.com/document/d/1g9gb_i-Q6QXifISiS1urZ2gcfO2Pz-VHYqurW_94My4/edit)
communicates progress updates and priority/planning changes between Distribution and the broader
Engineering/Product organization. Since it mostly covers what was already discussed in the interanl sync, it is entirely optional for Distribution team members to join.

### Bi-weekly updates

Every Wed @ 3pm and Fri @ 1pm you will be reminded in the #distributioneers Slack channel to post an update that communicates any progress you've made since your last update, any unexpected things that came up and took up your time, and what you are working on currently.

> **Update:**
>
> * Helped $CUSTOMER with search scaling questions.
> * Made some progress on updating the regression test suite.
> * Opened a PR to update Jaeger tracing behavior (https://github.com/sourcegraph/sourcegraph/pull/9330)

We use bi-weekly updates because:

- Daily updates are too frequent, tedious to write out, and tedious for others outside the Distribution team to read.
- Weekly updates make it easy to forget what you did at the start of the week.
- It encourages posting updates frequently, but just focusing on the high-level / key points of interest that you recall over the past few days.
- Unlike daily updates, it does not give an impression that others want an hour-by-hour account of what you did or that you should include insignificant topics.
