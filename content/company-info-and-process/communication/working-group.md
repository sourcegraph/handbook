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
- does the initiative require sustained work and coordination over time? If you just need review and alignment, consider writing an [RFC](rfcs/index.md).
- is the initiative important for multiple teams or functions?
- are existing communication channels insufficient to achieve the outcome?

If you answered yes to the questions above, creating a working group could help.

## Creating a working group

There is no formal process for creating a working group, but here are a few guidelines to help drive success:

- **define the outcome.** A working group is not a set organizational structure like a team or an organization. It disappears once its outcome is achieved. Clearly defining the outcome helps set expectations and organize work.
- **define how the decision will be made.**
- **sketch out a timeline and roadmap of actions/deliverables**.
- **list members** and what role they play in the working group.
- **write a collaboration plan** indicating how the working group will collaborate; will there be a weekly meeting? Async collab only? Something else? How will status of deliverables be tracked? Is someone leading the coordination effort?
- **add the above to a draft charter** to share the outcome, identify participants and roadmap widely. In some cases, writing an RFC first can help determine if the working group is needed.
- **collect feedback on your charter/RFC** and then kick off the working group.

### Communication channels

If you decide to go forward with the working group, announce it widely. Set up a dedicated communication channel to make sure that all impacted teams are informed and bought into the initiative, and to ask for frequent input. A **slack channel**, named with a `wg-` prefix, is recommended.

You can also use the charter document you [created above](#creating-a-working-group) to track the deliverables and status. If you have a weekly meeting, you can also use this same document to track the agenda. Either way, you can link to this document from the Slack channel you created.

## Supporting asynchronous working

Sourcegraph is an all-remote company and we work [asynchronously](asynchronous-communication.md). As such, it's important with working groups to err on the side of writing things down, recording meetings, and having some kind of daily (or at least every few daily) status on deliverables, who has which action, and if anything is blocked. It can be easy when trying to move quickly to rely on face to face, real-time communication with a small group of people in the same time zone, but doing so will limit the ability of everyone at the company to contribute.

## Ending a working group

After the outcome has been achieved, or after a given time period has elapsed, the working group should end. If the working group lives for too long (more than two quarters), it probably means that the outcome was too big and needs to be scoped down, or that responsibilities should be transferred to a team.

When you end the working group

- run a [retrospective](retrospectives.md) if it's useful
- write and share a wrap up, share the final outcome
- archive the Slack channel
