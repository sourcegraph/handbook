# Using working groups to deliver cross-team initiatives

Some initiatives require committed effort and buy-in from multiple teams and functions, over a period of time. In an async culture, this sometimes means that:

- it's hard to get committed time from contributors
- getting buy-in and sharing updates is harder as there is no habitual way to do it (team channel, source of truth)

In that case, creating a working group can help bring structure and visibility into important cross-functional initiatives.

## What is a working group

A working group is a formally defined but ephemeral group of people focused on delivering a cross-functional outcome. Recent examples include making `/search` the homepage, and defining cloud personas.

Working groups bring structure and clarity on delivering a specific outcome. A working group should have a clear purpose, participants, and agreed upon communication channels.

Like any structure, it creates some overhead, so we should avoid superfluous working groups. Before creating one consider:

- is the initiative critical to achieving our goals?
- does the initiative require sustained work and coordination over time? If you just need review and alignment, consider writing an [RFC](rfcs.md).
- is the initiative important for multiple teams or functions?
- are existing communication channels insufficient to achieve the outcome?

If you answered yes to the questions above, creating a working group could help.

## Proposing a working group

There is no formal process for creating a working group, but here are a few guidelines to help drive success:

- **define the outcome.** A working group is not a set organisational structure like a team or an organization. It disappears once its outcome is achieved. Clearly defining the outcome helps set expectations and organise work.
- **define how the decision will be made.** See [making decisions at Sourcegraph](decisions.md).
- **sketch out a roadmap**.
- **write a proposal** to share the outcome, identify participants and roadmap widely. Writing an RFC can help.
- **collect feedback** and create the working group.

### Communication channels

If you decide to go forward with the working group, announce it widely. Set up a dedicated communication channel to make sure that all impacted teams are informed and bought into the initiative, and to ask for frequent input. A **slack channel**, named with a `wg-` prefix, is recommended.


## Ending a working group

After the outcome has been achieved, or after a given time period has elapsed, the working group should end. If the working group lives for too long (more than two quarters), it probably means that the outcome was too big and needs to be scoped down, or that responsibilities should be transferred to a team.

When you end the working group
- run a [retrospective](../retrospectives.md) if it's useful
- write and share a wrap up, share the final outcome
- archive the Slack channel
