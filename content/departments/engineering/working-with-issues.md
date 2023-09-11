# Working with issues

Teams are free to adopt the workflow they want for planning out sprints and organizing their backlog. However, we need to ensure that there is a clear way to submit issues to a team, and that issues get looked at. To balance the need for flexibility (the workflow that works best for each team) with the need for consistency, each engineering team needs to implement a minimum set of constraints.

In other words, pick the workflow you want, as long as you implement this interface:

- **use GitHub as the single source of truth** (if you want to use something else, it's your responsibility to build the mechanism to sync it with GitHub)
- **all issues have a team label**
- **the only thing needed to surface an issue to a team is to add its team label to the issue** (eg. `team/batchers`). It's the responsibility of each team to setup the right process or [automation](https://github.com/sourcegraph/sourcegraph/blob/main/.github/workflows/label-move.yml) to make that happen. Note that this does not guarantee that this issue will be prioritized and worked on, just that it will be on the team's radar.
- **teams have a Triage column on their board**, where everybody (including automation) can add things for prioritization
- **teams have a Backlog column on their board**

Note that customers are not expected to follow this process and cannot label issues. PMs make sure that [issues submitted by users outside Sourcegraph get labeled properly](../product/process/feedback/product_feedback_monitoring.md), so that they get on the owning team's radar.

#### Surfacing issues to the design team

Issues that need design work can be tagged with the `needs-design` label.
