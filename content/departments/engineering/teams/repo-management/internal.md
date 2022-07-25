# Internal

This page contains information that is mostly interesting to members of the Repo Management team.

## Rhythm of the Team

We believe in building a strong team that is welcoming, supportive, and a joy to be part of. We are intentional about building relationships within the team. Here are some ways we do that:

1. Social Hours: a heavily asynchronous team and company does not mean we never talk face to face. We set aside time on a set cadence to get to know each other better. We make time to talk freely about anxieties and challenges we're dealing with so that we can better support each other.
2. Pair Programming: we love to build together and collaborate on hard problems. Our team solves complex problems and working with others is often the best way to deliver. Engineers on Repo Management self organize pair programming sessions on whatever cadence they desire.
3. Team Travel: nothing can replace meeting each other in person. We do this by using our generous [team travel budget](../../../../benefits-pay-perks/benefits-perks/travel#travel-budget-philosophy) to connect as a team every 6 months and our other travel budgets to meet each other as part of other trips. Where should we go next?

## Mechanisms

The following are mechanisms we use to stay in sync. We favor asynchoronous mechanisms whenever possible to respect the working hours of teammates.

1. [Meeting] Bi-weekly Planning and Retro: Every two weeks we plan our upcoming work in our [Kanban board](https://github.com/orgs/sourcegraph/projects/209/views/1).
2. [Meeting] Bi-weekly Sync: We meet to discuss what everyone is working on, high priority issues that may have come through, blockers, and in-flight support.
3. [Meeting] Quarter Kick-Off: Near the end of a quarter, we meet as a team to think and talk about the next quarter. We focus on in-flight projects that will carry-over, new projects that will begin, goals, and any tech debt that we want to fix.
4. [Async] Monthly Status Update: Every month the EM sends a status update with all of the highlights, challenges, and news currently impacting the team. This drives alignment with leadership and celebrates our wins.
5. [Async] Standup Update: Every morning, the geekbot Slack bot prompts a standup update. Every team member answers it (during their morning) and it automatically posts to the team Slack channel.

## Support

We use a weekly support rotation to provide dedicated support for customers and avoid randomization for the rest of the team. There is always one engineer designated as the primary support owner for a week.

### Expectations

The following are expectations for the support owner in a given week:

1. Triaging and resolving support requests is your only priority for the week. Any and all project work is put on hold for the week.
2. Monitor #repo-management and #ask-engineering for inbound requests
3. Aim to acknowledge all requests within 24 hours, even if the initial response is an indication that we don't have bandwidth to review it yet and will respond back at a future date. Add the GitHub issue to the Repo Management project with the Status "Support Issues".
4. Provide the incoming support owner with the status of all in-flight issues before their rotation begins (Monday morning is fine, asychronous updates are fine). Include the relative priority of all issues so the incoming support owner knows where to begin.
5. Ask for help when you are stuck! Don't spend too much time trying to troubleshoot an issue, especially if it's high priority. Do your best, ask the team, and resolve the issue
6. If you ever have 0 active support requests (woohoo!), use that time to improve something within our team. Adding/improving tests, updating documentation, fixing bugs, and otherwise improving what we own are all great things to spend time on.
7. If you ever have _too many_ support requests, leave a message in #repo-management-internal and engage the secondary support owner for the week
8. After resolving an issue, do _at least_ one of the following:
   1. Add an FAQ to one of the existing docs based on the area or create one [here](https://drive.google.com/drive/folders/1ON6RfELoYYmUiMZ_ET3-Bzz66oYMVRx2)
   2. Update docs.sourcegraph.com or other documentation
   3. Create a backlog issue for an improvement, feature, tool, etc. that would have been useful to troubleshoot and solve the problem

The rest of the team is _always_ available to help. While you might be the owner of support for a week, you are not alone.

## Onboarding

Our team's onboarding documentation can be found [here](onboarding.md).

## Technical Interest

Landing zone for team technical documentation (e.g. RFCs, videos, other handbook pages, etc)

1. [Life of a repository](https://docs.sourcegraph.com/dev/background-information/architecture/life-of-a-repository)
1. [Sourcegraph Architecture overview](https://docs.sourcegraph.com/dev/background-information/architecture)
1. [Sub-repo permissions RFC](https://docs.google.com/document/d/1d8j-6VC_nk8HXEDT6U2_s-_9uSzgzHWZzrJjII9pKEE/edit)
1. [Hexagonal Architecture for Repo Management](https://docs.google.com/document/d/1sxHpZIqKGi66evDQl6sN1FAJObbHAIkdl49EKOy7aUs/edit)
1. [Adding support for a new code host](./support-new-code-host.md)
1. [Upgrading p4-fusion](./upgrade-p4-fusion.md)
