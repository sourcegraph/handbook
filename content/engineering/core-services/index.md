# Core services team

## Vision statement

Sourcegraph operations are fast (e.g. search), instances scale to 80k repositories, private code is secure and respects ACLs for every authorization provider, and the product settings are easy to set up and understand for our largest customers.

## Tech stack

Go, Postgres, Redis, Docker, Kubernetes.

## Resources

- [Roadmap](https://docs.google.com/document/d/1cBsE9801DcBF9chZyMnxRdolqM_1c2pPyGQz15QAvYI/edit#heading=h.fv5i7qi85bru)
- [Tracking Issues](https://github.com/sourcegraph/sourcegraph/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Ateam%2Fcore-services+label%3Atracking)

## Processes

### Weekly check-ins

Everyone writes a weekly check-in in the active tracking issue of the on-going iteration. These check-ins describe the work done in the previous week as well as what's to come in the next week.

This process helps each teammate reflect and plan each week proactively and enables other parts of the organization to have visibility into on-going progress.

Appropriate times to write this check-in are end of day on Friday or beginning of day on Monday.

Here's an example of a [good weekly check-in](https://github.com/sourcegraph/sourcegraph/issues/7190#issuecomment-573564817). A benefit of weekly check-ins is they make writing your performance self-review easier. Be brief and focus on the high level. Be more detailed when there is interesting information on wins/progress (eg a graph of performance being improved). Avoid status updates which are just commit logs.

### Monthly planning

Planning happens monthly in the last week of the current iteration to match [Sourcegraph's monthly release cycle](../releases/index.md).

The team manager schedules a block of time to triage all open issues [labeled with **team/core-services**](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fcore-services) and may request that certain teammates help with this process.

Each issue is:

- Closed if appropriate.
- Commented on if it's unclear what next steps are.
- Assigned to the up-coming milestone if deemed a priority.
- Left in the backlog otherwise.

Every issue assigned to the upcoming milestone needs to be:

1. Assigned to a single owner.
1. Conservatively estimated with one of the **estimate/Nd** labels.
1. Categorized with any combination of these labels: **spike**, **roadmap**, **bug**, **debt**, **customer**.

These category labels have the following meaning:

- **roadmap**: Issues related to work planned in our roadmap.
- **customer**: Important issues reported or desired by a customer.
- **spike**: Time boxed investigation meant to facilitate more granular planning.
- **bug**: An error, flaw or fault that produces an incorrect or unexpected result, or behavior.
- **debt**: Technical debt.

After this triage process, the team manager puts together a draft tracking issue containing this initial proposed work for the iteration. Most of the body of the tracking issue is [automatically generated](https://github.com/sourcegraph/sourcegraph/blob/master/internal/cmd/tracking-issue/main.go) from  properly labeled GitHub issues — they're in the right milestone, have the **team/core-services** label, are estimated *and* categorized.

This means teammates *need not check off, remove or add issues* to the task list in the tracking issue — that is done automatically throughout the planning process and throughout the iteration itself.

When the draft tracking issue is published, everyone on the team is asked to:

1. Update their availability for the month in the Not Working calendar and write down the number of working days in the designated section in the tracking issue.
1. Propose other work for the iteration in a comment in the tracking issue. Each proposed work item must be captured in a separate GitHub issue that is assigned to the right owner, estimated, and categorized as per the above mentioned requirements.

All planned work items are meant to be finished in the iteration. If this doesn't happen, it is either due to unknown unknowns or lack of estimating accuracy. While we cannot work on the former, we can on the latter — over time, we aim to estimate better.

Teammates should be conservative by picking an estimate somewhere in between the median case and worst case scenarios, not best case. The higher someone's level of experience with the issue being estimated as well as estimation itself, the closer the estimate can be to the best case scenario. The opposite is also true.

Despite estimation having a bad reputation in some circles, we find it valuable to:

1. Prevent any single team member having more work assigned than available work days.
1. Ensure everyone has enough slack in the iteration (~20% of their time). This is to account for unexpected things, to foster creativity and to prevent burn-out.
1. Remind the person working on the issue to avoid time sinks or approaches that would miss the estimate.

Roadmap items may take more than an iteration to implement. As such please link to an issue which is scoped to this iteration. If it isn't clear how to break down a larger item in a scope increment, a **spike** of one or two days could be appropriate to determine such scope and then create the resulting issues for the iteration — it's fine to update the tracking issue with the results of a spike during the iteration.

After the internal discussion of the team's work plan for the iteration ends, the tracking issue is ready to be *reviewed* by external stake-holders. The team manager asks for +1s from the relevant [Product Manager](../../product/roles.md#product-manager) and the [VP of Engineering](../roles.md#vp-engineering).

After adjusting the work plan according to their feedback (if necessary), the team manager marks the tracking issue as approved in its "Status" section and labels all planned issues with a `planned/$MILESTONE` label.

Because this label allows the `tracking-issue` tool to keep track of issues that are taken out of the milestone during the iteration, it should not be removed from those issues when that happens.
