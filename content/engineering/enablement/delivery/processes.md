# Delivery Team Processes

## Support

Any questions, please ask in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX).

### Simple questions or queries

Feel free to direct simple questions to us in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) in Slack.

- This channel _is_ regularly checked and well monitored
- So please do **NOT** directly message or CC an engineer - this is to try and protect their focus
- Instead, if it’s urgent, please @ either the PM or the EM in the question in the channel and we'll ensure it gets the best response

### Making a formal support request

Support requests related to our [areas of ownership](index.md#responsibilities) should follow this process:

1. Make sure there is an issue in Github:
   - A short description of the ask
   - A more detailed explanation of the background, the context and the challenge that needs solving
   - Any guidance related to the impact this is having
   - Any extra information that could help us solve or prioritize this
2. Ensure lable `team/delivery` is added to the issue
3. Ensure that the issue is added to the "[Delivery](https://github.com/orgs/sourcegraph/projects/205)" board in GitHub
4. Message us in [#delivery](https://sourcegraph.slack.com/archives/C02E4HE42BX) and CC `@delivery-support`
   - 🙏 Please do not cc individual engineers - this is to try and preserve focus

> ⚠️ Please note that feature requests (classified as anything not currently officially supported) will be triaged by the PM of the team, and are not handled as part of the teams support rotation.<br><br>If an issue is submitted as a support request for something not officially supported, the person on the rota will advise the person who submitted it of this, and CC the PM. 

### How we manage support

- We have a Slack handle `@delivery-support` with 1 engineer (on weekly rotation), plus the EM and the PM (the latter two more for review, visibility, and support for the engineer).
- The engineer on our support rotation is responsible for primary triage
  - Only [incidents](../../incidents/index.md) and urgent/critical support issues can jump to the front of the queue (P1)
  - Only urgent & critical support issues are allowed to spill over from the engineer on the support rotation to other engineers in the team
  - All other issues are handled only by the on-rotation engineer on a prioritized basis
  - Only in exceptional circumstances (with EM or PM agreement) should more engineers get involved (e.g. very high support load)
  - Other engineers avoid involvement in support issues, unless asked to engage by another member of the team
- If any support issue is at risk of suffering due to prioritization calls, the engineer will communicate this to the CS responsible for the issue
- If multiple issues are at risk of suffering, the engineer will escalate to the EM or PM of the team

## How we work

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
