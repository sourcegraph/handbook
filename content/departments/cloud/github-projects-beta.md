# How we use GitHub Projects (Beta)

## All issues should be created within a single repo

We create all issues within the [`sourcegraph/customer`](https://github.com/sourcegraph/customer) repository.

Many Github features (exp. `Milestones` and `Labels`) work only within a single repo. If the issues span across multiple repositories, we need to duplicate the label creation and cannot group all of them under a single milestone. The [`sourcegraph/customer`][(](https://github.com/sourcegraph/customer)) repository is private, so we do not risk exposing any private data in the description or comments of the issues.

## Hierarchy in GH projects

We use the `milestone -> epic -> issue` hierarchy.

### Milestones

To track progress on bigger initiatives with potentially an expected launch date and cross-team dependencies, we use [Github Milestones](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones). Milestones support `title`, `description`, and the optional `due date`. We can easily assign issues to milestones and filter them down on our project board or use the milestone view, which supports additional progress visualization.

*For milestones to work, we need to [keep all issues within the single repository](#all-issues-should-be-created-within-a-single-repo) as milestones are restricted to the single repo.*

### Epics

We introduce the concept of epics to group issues together that belong to a single initiative or problem space. For example, `Managed SMTP on the Cloud` or `MI v1 -> V1.1 migration`. This allows us to better track progress within the given initiative.

*Unfortunately, Github does not support epics as a separate entity, so we need to implement custom workarounds to have epics.*

> NOTE: While other project management tools support epics, all Sourcegraph engineering teams are currently using Github for issue tracking. As the Cloud team is involved in many cross-functional projects, we need to operate with standardized tooling used by other teams.

#### How to create epic

- Create a new issue with `EPIC: <epic title>` naming convention 
- Add the `<epic title>` option to the [Cloud GH project EPIC filed in settings](https://github.com/orgs/sourcegraph/projects/264/settings/fields/8318956)
- Add the `cloud-epic` label *(required for filtering GH project views)*
- Add `https://github.com/orgs/sourcegraph/projects/264/views/8?filterQuery=epic%3A%22<epic title>%22` to the epic issue *(this will link to a view with all issues assigned to this epic)*

#### How to add an issue to an epic

To add issues to the epic, select the epic title from the `EPIC` field dropdown in the Cloud team GH project.

## Issues

Every task that the Cloud team is working on should have a GH issue. This will allow the team to avoid creating shadow work and provide transparency on where we invest the team's time.

> NOTE: Please apply common sense here - if it takes more time to create an issue than to perform the task, do it and move forward to the next task.

**All requests for help should have an issue assigned.**

While we can answer questions from other teams on [#cloud](https://sourcegraph.slack.com/archives/C03JR7S7KRP) slack channel, if the question turns out to be an actual request for performing an action and the *common-sense rule* from above does not apply, we should ask the requestor for a GH issue.

## Cloud team Github project custom fields

GH project beta supports custom fields that can be added to the list views. This provided us with additional layers of sorting, filtering, and categorization. Below is the list of the fields the Cloud team uses right now.

> NODE: If you think we need additional fields, please start a discussion on with the team on slack.

| Field name | Data type       | Purpose                                                                          |
| ---------- | --------------- | -------------------------------------------------------------------------------- |
| Status     | `Enum - select` | Current status of the issue when it comes to its execution                      |
| EPIC       | `Enum - select` | Add the issue to [epic](#epics)                                                  |
| SLA        | `Date`          | Assign the SLA for MI requests and P1                                            |
| Estimate   | `Enum - select` | Estimate the effort and complexity of the issue with a single developer days    |
| Milestone  | `GH milestone`  | Assign the issue to [milestone](#milestones)                                     |
| Grooming   | `Boolean`       | Flag that the issue is scheduled for a [weekly grooming cycle](grooming-and-estimation-process.md)                       |
| Component  | `Enum - select` | Experimental - categorize issues based on the service/component within the system |

## Cloud team Github project board views

> NOTE: We can create as many views as needed, and each team member should feel comfortable creating the one they need. Please keep in mind that all views are shared with the rest of the team.

| View Name                                                                | Purpose                                   |
| ------------------------------------------------------------------------ | ----------------------------------------- |
| [Backlog view](https://github.com/orgs/sourcegraph/projects/264/views/1) | All issues except the ones with `no status` and the status `Done` are grouped by the status. This view is best used for a general backlog overview, refining, and prioritization. |
| [Kanban board](https://github.com/orgs/sourcegraph/projects/264/views/9) | A board view for everyday IC workflow. Contains issues from `Up next` to `Done` |
| [New Items](https://github.com/orgs/sourcegraph/projects/264/views/11)   | The view with all new issues without status that requires triaging and prioritization |
| [Epics view](https://github.com/orgs/sourcegraph/projects/264/views/10)  | The view containing all the epics grouped by milestones |
| [Request for help view](https://github.com/orgs/sourcegraph/projects/264/views/12) | The view containing all requests for help from Customer Engineering & Support, including P1s and P2s group by status |
| [Manage instance creation requests](https://github.com/orgs/sourcegraph/projects/264/views/4)| The view containing [special type of mange instance requests](index.md#managed-instance-requests) with SLAs created for auditing requirements |
| [Manage instance tear-down requests](https://github.com/orgs/sourcegraph/projects/264/views/6) | The view containing [special type of mange instance requests](index.md#managed-instance-requests) with SLAs created for auditing requirements |
| [Postmortem Action Items view](https://github.com/orgs/sourcegraph/projects/264/views/13) | The view containing all issues that were created as post-incident action items owned by the Cloud team grouped by status |
| [Grooming view](https://github.com/orgs/sourcegraph/projects/264/views/14) | The special view used to list all issues that are part of the current [grooming cycle](grooming-and-estimation-process.md|
| All issues view                                                            | The special view used to filter down issues by epic - a [link to this view is added to every EPIC type issue](#how-to-add-issue-to-an-epic) | 

## Issue status and its meaning

The table below contains all the statuses that are currently added to the Cloud team Github project.

| Status    | Meaning                                                                                   |
| --------- | ----------------------------------------------------------------------------------------- |
| No status | New issue that requires triaging - default status for all new issues added to the project |
| Blocked   | The issue has a blocker that prevents its execution. The blocker should be clearly defined in the issue comments |
| Backlog   | Triaged issues that should be priorities and groomed to be ready for implementation. The Backlog should be prioritized, with the most important issues at the top of the list |
| Up next   | Groomed issues are ready for implementation. Can be picked up by any Cloud engineer as the next task |
| Waiting for feedback | Development work is completed, and the issue is waiting for review from the rest of the Cloud team or an issue requestor |
| Done      | Completed work that is delivered/shipped to production |
