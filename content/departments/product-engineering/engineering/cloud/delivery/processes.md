# Delivery Team Processes

## Support

If in doubt about the process, please ask in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX).

### Requesting our support

Feel free to direct simple questions to us in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) in Slack.

- This channel _is_ regularly checked and well-monitored
- So please do **NOT** directly message or CC an engineer—this is to try and protect their focus
- Instead, if it’s urgent, please @ either the PM or the EM in the question in the channel and we'll ensure it gets the best response

### Support request guidelines

Support requests related to our [areas of ownership](index.md#responsibilities) should follow this process:

1. Make sure there is an issue—if there's not, please create one and include:
   - A short description of the ask
   - A more detailed explanation of the background, the context and the challenge that needs solving
   - Any guidance related to the impact this is having
   - Any extra information that could help us solve or prioritize this
2. Ensure lable `team/delivery` is added to the issue
3. Ensure that the issue is added to the "[Delivery](https://github.com/orgs/sourcegraph/projects/205)" board in GitHub
4. Anything without a status is checked and triaged weekly - so this is enough for feature requests or less urgent issues
5. If you think this needs eyes 👀 sooner
   - Within a few hours ➡️ message in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX)
   - ASAP ➡️ message in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) and CC `@delivery-support`

## How we work

### Planning, sync, & retro

We're currently working in a Kanban style. It suits the fact that support work often cannot wait for a new sprint, and so the idea of being able to plan what we be delivered in any period of time is unreliable.

Kanban means we maintain a backlog of work we want to complete, prioritized in such a way that the team picks up the next highest priority thing.

This allows us to be flexible about what's up next, but still protect the sanctity of concentration and focus, by avoiding (as much as we can) in-flight work from being dropped in favor of something else.

We still work in 2 week cycles, and have the following ceremonies:

1. Planning (biweekly)
   - This is more of a "line up a queue of work in priority" exercise than it would be with sprints
   - By default, we make no time-based commitments, instead favouring a balance of strategic (long term) and tactical (short term repsonsive) work
   - This does not (and isn't intended to) prevent newly identified work from superceding what gets "planned"
2. Sync (biweekly)
   - This happens on the weeks we don't have planning, and is a check in on the plans and anything new
3. Retro (biweekly)
   - A review of what we did for learing purposes

### On-Call Rotation

The Delivery team has a weekly on-call rotation where the Engineer On-Duty will respond to managed instance alerts, monitor the [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) channel for questions and escalations, and other ad-hoc tasks. Off-duty team members may be allocated to project work.

More information about the [Delivery Team's On-Call Rotation can be found here](./on-call.md).

## Issue tracking

The [Delivery GitHub project](https://github.com/orgs/sourcegraph/projects/205) is the single source of truth. Our Kanban board on GitHub projects consists of the following columns:

- [Needs More Info](#needs-more-info)
- [Icebox](#icebox)
- [Blocked](#blocked)
- [Backlog][#backlog]
- [Up Next][#up-next]
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

> The items in here are ordered by importance. Top is the most important.

These are items that we want to work on in the near future.

### Up Next

If you have completed the ticket that you are working on and need your next task, take it from here. These items have been looked over and are ready to be worked on.
Note: The items in here are ordered by importance. Top is most important.

### In Progress

These are items that are currently being worked on. You should only have a maximum of 1 Item per person listed in here!

### Waiting/In Review

Items in here are either complete or are waiting on Customer/Internal feedback.

Examples:

- We have created a managed instance but we want to confirm the customer is able to log in.
- We have completed work that needs to also be confirmed and worked on by other teams.

### Complete

All work on this ticket that needs to be done by the Delivery team has been successfully completed.
