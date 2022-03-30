# Content Platform Team

The Content Platform team (part of the [Enablement](../index.md) org) creates, manages, and optimizes the content platforms that enable the success of Sourcegraph’s business objectives.

## Members

{{generator:product_team.content_platform}}

## Our Strategy

[Mission & Vision](../../../../../strategy-goals/strategy/enablement/content-platform/index.md)

## Responsibilities

The current existing content platforms include:

- [Marketing site](https://about.sourcegraph.com)
- [Blog](https://about.sourcegraph.com/blog/)
- [Learn site](https://learn.sourcegraph.com)
- [Handbook](https://handbook.sourcegraph.com)
- [Docs](https://docs.sourcegraph.com)

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../process/principles-and-practices.md) and [Enablement principles and practices](../index.md#principles-and-practices).

## Contact

- #content-platform and @content-platform-team on Slack

## Processes

### Requests

The content platform team helps with updates or changes to the various [sites we are responsible for](#responsibilities). Note that if you're comfortable making changes to one of these sites, you don't have to put in a request for the Content Platform Team. We are happy to serve as a review on your PR, but no need to put in a request unless you need us to complete the work for you. Requests to the content platform team can be made through a Slack workflow:

1. In the #content-platform channel in Slack, click the + icon, then “Content Platform Request”

- ![Content platform request in Slack](https://storage.googleapis.com/sourcegraph-assets/handbook/content-platform-request.png)

2. This will prompt you to fill out a form with relevant details.
3. Completed forms will be sent to the content platform product manager, who will [triage](#triaging-incoming-requests) and update you with more information.
   - **Note:** You'll see a condensed version of your request appear in the #content-platform channel instead of the full text you entered. Your full request will be sent directly to the PM via Slackbot, and they will follow up with questions as needed.

#### Service level agreements (SLAs)

- **Initial response:** all requests will be (triaged)[#triaging-incoming-requests] within one business day.
  - **Urgent requests:** If your request is urgent, flag it in the #content-platform channel or contact the CPT [Product Manager](#members) directly so they can respond as soon as possible. Urgent requests are issues impacting customers' ability to interact with our sites, issues blocking an essential part of a current marketing campaign, or potentially other requests defined on a case-by-case basis.
- **Resolution:**
  - **Non-urgent requests** will be resolved by a due date agreed upon by the CPT and the requestor as part of triage.
  - **Urgent** requests will be worked until the issue is resolved or no longer in an urgent state.

### Triaging Incoming Requests

The Content Platform Product Manager triages and prioritizes requests on a daily basis. They will:

1. Verify all necessary information is in the request
1. Determine urgency and priority against other work
1. Set expectations with stakeholder/requester
1. Create a Github issue (may automate this, TBD) and link the issue in the request thread in the #content-platform channel. You can see an example [here](https://sourcegraph.slack.com/archives/C02PSJF0QLU/p1647386134658749).
1. If this is a marketing request, add the `marketing-request` label to the Github issue.
1. If applicable, assign to a developer. Otherwise put into the team [Kanban board](https://github.com/orgs/sourcegraph/projects/227/views/5?layout=board&filterQuery=label%3A%22%F0%9F%8F%97+Handbook+website%22) according to priority determined in step 2.

### Creating Issues

- Anyone can [create an issue in the repos](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-repository) we work in:
  - [About](https://github.com/sourcegraph/about/issues/new)
    - [Blog](https://github.com/sourcegraph/about/issues/new?labels=about-blog)
    - [Legal Docs](https://github.com/sourcegraph/about/issues/new?labels=legal)
  - [Learn](https://github.com/sourcegraph/learn/issues/new/choose)
  - [Handbook](https://github.com/sourcegraph/handbook/issues/new/choose)
  - Docs:
    - [Docs](https://github.com/sourcegraph/sourcegraph/issues/new?labels=docs) for content level
    - [Docsite](https://github.com/sourcegraph/docsite/issues/new) for application level
  - Note: After issues are created, they must be added to the [Content Platform Work project](https://github.com/orgs/sourcegraph/projects/227/views/1) to be prioritized
- Anyone can request help from the content platform team according to [this process](#requests)
  - Issues are then [triaged](#triaging-incoming-requests) and added to the proper repo in Github (and to the [Content Platform Work project](https://github.com/orgs/sourcegraph/projects/227/views/1))
- Anyone can [create an issue directly in the project](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-project-board-note)

### Prioritizing Issues

- Issues are prioritized as they come in by the content platform [product manager](../../../product/roles), with input from the rest of the team and stakeholders
- Priorities are reviewed in the [weekly team sync](#weekly-planning-meeting) to prepare for the upcoming week

### Issue Status + Updating Issues

- All work tracked in the Content Platform [Github project](https://github.com/orgs/sourcegraph/projects/227/views/1)
- **Views:**
  - **[All Issues](https://github.com/orgs/sourcegraph/projects/227/views/1)** contains issues that fall under the [responsibilities](#responsibilities) of the content platform team, regardless of repo or site.
  - **[Handbook](https://github.com/orgs/sourcegraph/projects/227/views/5)** contains issues in the [Handbook repo](https://github.com/sourcegraph/handbook).
  - **[About/Marketing Site](https://github.com/orgs/sourcegraph/projects/227/views/7)** contains issues in the [About repo](https://github.com/sourcegraph/about/labels/blog), excluding issues labeled “docs”, “docs-ux”, or “blog”.
  - **[Blog](https://github.com/orgs/sourcegraph/projects/227/views/8)** contains issues labeled “blog”.
  - **[Learn](https://github.com/orgs/sourcegraph/projects/227/views/9)** contains issues in the [Learn repo](https://github.com/sourcegraph/learn.
- **Statuses:**
  - **Backlog:** Issue has not yet been [triaged](#triaging-incoming-requests) or is otherwise not ready to be worked.
  - **Ready for Development:** Issue has been triaged and prioritized, and is ready to be worked.
  - **In Progress:** Issue is actively being worked on.
  - **In Review:** Issue is in review. This could be a PR review, QA, or stakeholder review.
  - **Blocked/Paused:** Work is currently paused on this issue. If possible, please add details about why the issue is blocked or paused. If you’re blocked, tag your PM for help.
  - **Done:** Work is complete, PR is merged (if applicable), and no further action is needed on this issue.
  - **Not Planned:** Issue has been triaged, but not prioritized with current work. This may mean it will be prioritized in the future when it aligns with the roadmap.
- **Automation:**
  - When an issue or PR is added to the project, its status is set to **Backlog**.
  - When an issue or PR is reopened, its status is set to **Ready for Development**.
  - When an issue or PR is closed, its status is changed to **Done**.
    - In some cases, **Not Doing/Cancelled** may be a more appropriate status. If so, manually change the status.
  - When a PR is merged, its status is changed to **Done**.

### Pull Requests

All PRs made by the CPT go through a creation and QA process.

**Authors for PRs should include:**

1. Context in the description on what the PR achieves. This includes which issues it refers to, if any, using [closing keywords](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) to automate issue closing.
2. A list of tasks as a Test Plan that a reviewer should test to ensure the proposed changes work as intended.
3. At least 1 reviewer to review, provide feedback if necessary, and approve, in order to increase code health and prevent accidental bugs and changes from being snuck in after an approval has been made.
   - Note that the `/docs`, `/blogposts`, and `/podcasts` directories in our [About repo](https://github.com/sourcegraph/about) dismiss approvals for our Legal and Content Marketing teams to reduce friction. However, other changes proposed for the rest of the codebase requires an approval.
4. Setting yourself as the assignee to keep track of your work.
5. Any relevant labels, including the required `team/content-platform` label.
6. Tagging the **Content Platform Work** project and setting the apropriate status through the stages of work: In Progress and In Review, to keep everyone informed.
7. Any relevant Milestones.
8. Any optional comments to lines of code to point out specific context for reviewers.

**The QA Process should go as follows:**

1. Create a draft PR if your PR is still work in progress (WIP).
2. Assign a reviewer once your PR is ready to be reviewed and is no longer WIP.
3. If there are changes requested, push your changes and resolve conversations as they are fixed. You can optionally leave conversations unresolved if more conversation is necessary.
4. Once approved, the Author merges and the branch is deleted.

### Planning

We currently plan using Sprints and include issues to work on in a bi-weekly basis. You can view our [Current Sprint](https://github.com/orgs/sourcegraph/projects/227/views/18) on GitHub.

#### Weekly Planning Meeting

- _Overview:_ Weekly call with all the teammates to discuss the work in progress and review upcoming priorities. Opportunity to surface dependencies on each other and other sources.
- _Goal:_ connect as a team, ensure we are all clear on status of inflight work and next priorities
- _When:_ Tuesdays at 14:00 UTC.

### Retrospectives

- _Overview:_ We conduct a bi-weekly [retrospective](../../../../../company-info-and-process/communication/retrospectives.md) to celebrate wins and share feedback.
- _Goal:_ To ensure we improve as a team to become more efficient and effective.
- _When:_ Every second Thursday at 14:00 UTC.

### Engaging with Other Teams

- See [this section](#requests) for making a request to the content platform team.

#### Collaborating with Marketing

- Marketing will [submit requests](#requests) as needed. They will then be [triaged](#triaging-incoming-requests) and prioritized against other work.
- Figma is always the source of truth for design and copy.
- Marketing will continue to track work in Asana, while the Content Platform team is tracking work in Github. Details of how this will work:
  - Marketing Project Manager is responsible for keeping Asana up to date.
  - CPT Product Manager is responsible for keeping Github up to date.
  - Github issue contains a link to the Asana card, and Asana card contains a link to Github issue.
  - Content Platform Team provides updates to their work in Github, including but no limited to:
    - QA links
    - Questions for stakeholders
    - Progress updates as needed
- All marketing requests go through our [Marketing QA process](qa-process.md) and inherit our [Pull Requests](#pull-requests) process.
