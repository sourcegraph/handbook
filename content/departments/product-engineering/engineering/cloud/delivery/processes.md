# Delivery Team Processes

## How we work

### Planning, sync, & retro

We're currently working in a Kanban style. It suits the fact that support work often cannot wait for a new sprint, and so the idea of being able to plan what we be delivered in any period of time is unreliable.

Kanban means we maintain a backlog of work we want to complete, prioritized in such a way that the team picks up the next highest priority thing.

This allows us to be flexible about what's up next, but still protect the sanctity of concentration and focus, by avoiding (as much as we can) in-flight work from being dropped in favor of something else.

We work in 1 week cycles, and have the following ceremonies:

<!-- TODO (2022-02-27): we should update this in the upcoming weeks when things are more planned out for FY23Q1  -->

1. Planning/Sync (weekly)
   - This meeting is used to define the queue of work by priority and measure our status against our quarterly OKRs
   - By default, we make no time-based commitments, instead favouring a balance of strategic (long term) and tactical (short term repsonsive) work
   - This does not (and isn't intended to) prevent newly identified work from superceding what gets "planned"
2. Retro (biweekly)
   - A review of what we did for learing purposes

### Daily Standup (async)

We use [geekbot](https://app.geekbot.com/dashboard/standup/90421/manage?basic) to keep others informed of what's going on asynchronously. This is a good time to share your progress and ask for help to remove any blockers. If you do not have access, reach out to [#delivery-internal] for help.

The `@geekbot` will prompt all participates at 10 AM local time (you may override it) on weekday to provide status update.

- What did you do since {last_report_date}?
- What will you do today?
- Anything blocking your progress?

### Support Rotation

The Delivery team has a weekly support rotation where the Engineer On-Duty will monitor the [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) channel for questions and escalations, and other ad-hoc tasks. Off-duty team members may be allocated to project work.

More information about the [Delivery Team's Support Rotation can be found here](./on-call.md).

## Issue tracking

The [Delivery GitHub project](https://github.com/orgs/sourcegraph/projects/205) is the single source of truth. Our Kanban board on GitHub projects consists of the following columns:

- [Needs More Info](#needs-more-info)
- [Icebox](#icebox)
- [Blocked](#blocked)
- [Backlog](#backlog)
- [Up Next](#up-next)
- [In Progress](#in-progress)
- [Wating/In Review](#wating-in-review)
- [Complete](#complete)

### Needs More Info

This is where we can place any tickets that we need to either gather more information on.

Examples:

- A customer ticket comes in but we need to have more information from the customer.
- A ticket comes through from developers and we are unclear if this is really a Delivery issue.

### Icebox

This is where tickets that we really want to work on sometime in the future but have no plans for them at the moment.

### Blocked

These are for any tickets that we cannot move forward on. Either they rely on other work that needs to be done by other teams or it isn’t something that Delivery can get to at the moment.

### Backlog

> The items in here are ordered by importance where the most important issues are at the top.

These are items that we want to work on in the near future.

### Up Next

If you have completed the ticket that you are working on and need your next task, take it from here. These items have been reviewed and are ready to be worked on.
Note: The items in here are ordered by importance where the most important issues are at the top.

### In Progress

These are items that are currently being worked on. You should only have a maximum of 1 Item per person listed in here!

### Waiting/In Review

Items in here are either complete or are waiting on Customer/Internal feedback.

Examples:

- We have completed work that needs to also be confirmed and worked on by other teams.

### Complete

All work on this ticket that needs to be done by the Delivery team has been successfully completed.

[#delivery-internal]: https://sourcegraph.slack.com/archives/C02VDNKBWDU
