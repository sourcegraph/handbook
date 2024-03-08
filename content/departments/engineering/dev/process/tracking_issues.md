# Tracking issues

## What is a tracking issue?

A tracking issue is a GitHub issue that captures the planned and on-going work of a team's milestone, project, RFC, goal or anything else of the sort. This artifact is a medium used for planning, progress check-ins and stakeholder communication. You can take a look at [examples of open tracking issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Atracking) to get a sense of what they look like.

Note that this is an optional process; some teams use tracking issues and some teams do not. For those that do they will follow the procedures below.

## Creating a new tracking issue

1. Create a new GitHub issue with the [tracking issue template](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=tracking&template=tracking_issue.md&title=%24TEAM%3A+%24MILESTONE+Tracking+issue).
1. Give it the **"\$THING_BEING_TRACKED: Tracking issue"** title.
1. Assign it to the right milestone, creating such milestone if it doesn't yet exist.
   1. Note that the right milestone may be no milestone at all. Check with your team if you are unsure.
1. Ensure the **tracking** label is set as well as the other labels you want to track. Issues and pull requests with those labels will show up in the tracking issue.

## Updating an existing issue

If you want to convert an existing issue into a tracking issue:

1. Add the `tracking` label.
1. Update the title by appending **": Tracking issue"**.
1. Add the following code to the bottom of the issue.

```markdown
### Tracked issues

<!-- BEGIN WORK -->
<!-- END WORK -->

#### Legend

- 👩 Customer issue
- 🐛 Bug
- 🧶 Technical debt
- 🎩 Quality of life
- 🛠️ [Roadmap](https://handbook.sourcegraph.com/departments/product-engineering/process/planning-process#roadmap)
- 🕵️ [Spike](<https://en.wikipedia.org/wiki/Spike_(software_development)>)
- 🔒 Security issue
- 🙆 Stretch goal
```

## Populating and maintaining a tracking issue

An open tracking issue is populated and kept up to date with the GitHub issues and pull requests labeled the same as the tracking issue (minus the `tracking` label) that belong to any repositories of the `sourcegraph` organization. Optionally, a milestone can also be set. If a milestone is set, all linked issues must also belong to the same milestone. The tracking issue will be updated as these issues and pull requests are opened, changed, closed, merged, etc.

This is done automatically by the [tracking-issue tool](#contributing-to-the-tracking-issue-tool) which [runs in response to GitHub issue events](https://github.com/sourcegraph/sourcegraph/blob/main/.github/workflows/tracking-issue.yml#L6) happening in [https://github.com/sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph).

### Rendering

There are a number of ways to affect how the workload section of a tracking issue is rendered.

#### Visibility

Issues and pull requests from private repositories will have their title replaced by a link to prevent leaking private information (e.g customer and security-issues repositories).

#### Ordering

The generated work load can be re-ordered manually in the GitHub UI and that ordering will be preserved when the tracking issue is updated.

#### Nesting

A tracking issue can also track other tracking issues. This is helpful when tracking the implementation work of an RFC or a multiple-milestone goal. As an example, we will refer to the [tracking issue for the code intelligence team's 3.21 milestone](https://github.com/sourcegraph/sourcegraph/issues/13987) (shown below), and the [tracking issue for RFC 235](https://github.com/sourcegraph/sourcegraph/issues/13882).

<div class="text-center">
  <a href="https://sourcegraphstatic.com/efritz-tracking-issue.png" target="_blank">
    <img src="https://sourcegraphstatic.com/efritz-tracking-issue.png" alt="Nested tracking issues" style="width: 50%">
  </a>
</div>

The 3.21 milestone tracking issue will track all issues and pull requests with the `team/graph` label in milestone 3.21. The RFC tracking issue will track all issues and pull requests with both the `team/graph` label and the `RFC-235` label. Because the RFC tracking issue and its children have a _superset_ of labels tracked by the milestone tracking issue, the latter will include all of the issues referenced in the former.

If a tracking issue includes other tracking issues, then all issues and PRs will be nested under the _most specific_ tracking issue that includes it (the tracking issue with the most label overlap). This allows arbitrarily deep nesting of tracking issues, which can span over multiple assignees and milestones.

#### Labels

These are the standard labels you can use to refine how each work item in the tracking issue looks. You can add any number of these labels to an issue or pull request.

- **roadmap**: Issues related to work planned in our roadmap will be displayed the 🛠 emoji.
- **customer**: Important issues reported or desired by a customer will be displayed with the 👩 emoji. If the issue body includes a Hubspot link to the customer's profile, then the emoji will be linked to it. If you have the Sourcegraph extension installed with _Experimental link previews_ enabled and authorized the Hubspot's domain for it, then the customer's name will show up next to the emoji.
- **spike**: Time boxed investigation tasks meant to facilitate more granular planning will be displayed with the 🕵️ emoji.
- **bug**: An error, flaw or fault that produces an incorrect or unexpected result, or behavior. These will be displayed with the 🐛 emoji.
- **debt**: Technical debt issues will be displayed with the 🧶emoji.
- **estimate/\$Nd**: A rough day level estimate of the task will be displayed alongside the emojis and summed up to a total workload in days that is displayed next to the teammate's GitHub handle.

Apart from these standard labels, you can display any label inline (e.g. `perf`) by explicitly allowing it. This is done by adding a `<!-- LABEL: $YOUR_LABEL_NAME -->` comment to the tracking issue body outside the `<!-- BEGIN WORK -->` and `<!-- END WORK -->` section which is reserved for the generated work loads.

#### Pull requests

Pull requests, if labeled and milestoned correctly, will show up in their author's workload. They can be easily spotted by looking for the <img src="https://github.githubassets.com/images/icons/emoji/shipit.png" height=20 width=20/> emoji. Additionally, if a pull request's body contains the issue number (i.e. #1234) that it relates to, the it will show up under that issue as a nested list item.

## Planning a milestone with a tracking issue

Planning a team's milestone happens in the last week of the previous milestone.

1. [Open a new tracking issue](#creating-a-tracking-issue) with `WIP` in the title, add the appropriate `team/$TEAM` label, and add it to the right milestone.
1. Ask all members of the team through appropriate channels to create or assign issues to this milestone. When possible, issues should be estimated with the appropriate `estimate/$DAYS` label.
1. Once everyone's ready, have the tracking issue review by relevant parties (e.g. product team,).
1. Make adjustments to the planned work with the team based on the feedback from the review.
1. Add the `planned/$MILESTONE` label to all planned issues. This is used to track what work was originally planned, even if it gets deprioritized during the milestone.
1. Remove `WIP` from the title.

All planned work items are meant to be finished in the iteration. If this doesn't happen, it is either due to unknown unknowns or lack of estimating accuracy. While we cannot work on the former, we can on the latter—over time, we aim to estimate better.

Teammates should be conservative by picking an estimate somewhere in between the median case and worst case scenarios, not best case. The higher someone's level of experience with the issue being estimated as well as estimation itself, the closer the estimate can be to the best case scenario. The opposite is also true.

Despite estimation having a bad reputation in some circles, we find it valuable to:

1. Prevent any single team member having more work assigned than available work days.
1. Ensure everyone has enough slack in the iteration (~20% of their time). This is to account for unexpected things, to foster creativity and to prevent burn-out.
1. Remind the person working on the issue to avoid time sinks or approaches that would miss the estimate.

Roadmap items may take more than an iteration to implement. As such please link to an issue which is scoped to this iteration. If it isn't clear how to break down a larger item in a scope increment, a **spike** of one or two days could be appropriate to determine such scope and then create the resulting issues for the iteration—it's fine to update the tracking issue with the results of a spike during the iteration.

## Contributing to the tracking issue tool

The code for the tracking-issue tool [lives in the main Sourcegraph repository](https://github.com/sourcegraph/sourcegraph/tree/main/internal/cmd/tracking-issue).
