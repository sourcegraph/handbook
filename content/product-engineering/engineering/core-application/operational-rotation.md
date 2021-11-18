# Operational rotation - how do we provide support to other teams?

Our team works in biweekly iterations applying SCRUM principles. Each sprint has defined goals and fixed scope that the team has committed to deliver. We also need to support our customers and reply to different types of requests from other teams (for example, answering questions, reviewing and merging pull requests, or performing necessary maintenance tasks). While all of these (outside of the sprint) tasks are essential and could be urgent, we consider them interruption work because they are not part of currently planned sprint commitments.

We want to **focus on the sprint and have the flow** without constantly switching contexts. We also want to be **predictable with our commitments**. At the same time, we acknowledge that **there will always be unplanned work that needs our urgent attention**.

We are establishing the **operational rotation** to predictably deliver sprint goals and provide the necessary support to other teams. Each iteration, a **single engineer** from the team will play a goalie role and take responsibility for all open requests for assistance. It's a **rotation-based** assignment with a defined [schedule](https://sourcegraph.app.opsgenie.com/settings/schedule/detail/b553cefc-2466-4ad2-ad0c-66937c790bbf). All requests for help that fall into this category will be worked on within this engineer's **regular office hours**. We are tracking these requests in a separate [Core Application Support GitHub project](https://github.com/orgs/sourcegraph/projects/153#card-65409816) to keep us organized and transparent.

**_IMPORTANT: Operational rotation and on-call rotation are two separate roles with different responsibilities._**

## Responsibilities of the engineer on operation rotation

- Be responsible for all types of interruption work so other team members can focus on sprint goals.
- Provide customer support by working on support requests for help (#rfh
- Answer questions and provide support to other teams on #core-application Slack channels
- Review and merge PRs from other teams
- Regularly update the team about the current state of support escalations, SLAs, and any risks connected with interruption work.
- Keep the [support project](https://github.com/orgs/sourcegraph/projects/153#card-65409816) organized and up to date.
- Triage issues from Customer Support and creates tickets. If needed, asks the team's triad (product manager, product designer, and engineering manager) for help with prioritization.
- Hands off work in progress to the next team member who is starting operational rotation.
- Share knowledge with the Customer Support team. Example:
  - Pair with Customer Support engineer(s) on current open customer support issues.
  - Optionally (but highly recommended), record and add to the list [here](../../../support/enablement/debugging-tips.md).
- Work on the team's technical debt items if there is free capacity.
