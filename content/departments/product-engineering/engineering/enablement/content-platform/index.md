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

## Contact

- #content-platform and @content-platform-team on Slack

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

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../process/principles-and-practices.md) and [Enablement principles and practices](../index.md#principles-and-practices).

## Processes

### Triaging Incoming Requests

The Content Platform Product Manager triages and prioritizes requests on a daily basis. They will:

1. Verify all necessary information is in the request
1. Determine urgency and priority against other work
1. Set expectations with stakeholder/requester
1. Create a Github issue (may automate this, TBD)
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
  - **Not Doing/Cancelled:** Issue has been resolved another way, meaning no work is needed on this issue. Or, we have decided not to work on this issue. Either way, the reason for moving to this status should be explained in a comment.
- **Automation:**
  - When an issue or PR is added to the project, its status is set to **Needs Triage**.
  - When an issue or PR is reopened, its status is set to **Needs Triage**.
  - When an issue or PR is closed, its status is changed to **Done**.
    - In some cases, **Not Doing/Cancelled** may be a more appropriate status. If so, manually change the status.
  - When a PR is merged, its status is changed to **Done**.

### Planning

We plan using a Kanban workflow in a [Github project](https://github.com/orgs/sourcegraph/projects/227/views/5?layout=board&filterQuery=label%3A%22%F0%9F%8F%97+Handbook+website%22). We do not work in iterations or sprints.

#### Weekly Planning Meeting

- _Overview:_ Weekly call with all the teammates to discuss the work in progress and review upcoming priorities. Opportunity to surface dependencies on each other and other sources.
- _Goal:_ connect as a team, ensure we are all clear on status of inflight work and next priorities
- _When:_ Mondays at 19:00 UTC.

### Retrospectives

- _Overview:_ We conduct a bi-weekly [retrospective](../../../../../company-info-and-process/communication/retrospectives.md) to celebrate wins and share feedback.
- _Goal:_ To ensure we improve as a team to become more efficient and effective.
- _When:_ Every second Thursday at 20:00 UTC.

### Engaging with Other Teams

- See [this section](#requests) for making a request to the content platform team.

#### Collaborating with Marketing

- Marketing will [submit requests](#requests) as needed. They will then be [triaged](#triaging-incoming-requests) and prioritized against other work
- All work follows a [specific process](https://docs.google.com/spreadsheets/d/1tOSgIJ7cg50zha5iSgYhL1exd7f3w4H_yCkOEdnWD4g/edit#gid=215222) created in collaboration with marketing.
  - Sharing the design with a developer step:
    - Developer will review design async and provide feedback on the feasibility of the design. They should always have access to all figma files and be notified of design changes that may increase the lead time.
      - Use [PERT](https://www.techrepublic.com/blog/it-consultant/use-pert-technique-for-more-accurate-estimates/#:~:text=PERT%20is%20an%20estimating%20technique,up%20with%20a%20final%20estimate.&text=The%20resulting%20PERT%20estimate%20is,as%20the%20other%20two%20values.) technique for estimation.
        - Estimation should include 3 days for QA to give plenty of time for feedback and corrections.
      - Fabiana will share with Mary when ready, who will assign a developer who is likely to work on the page or feature.
- Marketing will continue to track work in Asana, while the Content Platform team is tracking work in Github. Details of how this will work:
  - Fabiana is responsible for keeping Asana up to date.
  - Mary is responsible for keeping Github up to date.
  - We are using a [Github + Asana integration](https://asana.com/apps/github) to link Github PRs in Asana
  - Content Platform Team provides updates to their work in Github, including but no limited to:
    - QA links
    - Questions for stakeholders
    - Progress updates as needed
  - Mary and Fabiana will be working closely to ensure relevant information is present in both Asana and Github as needed. At the beginning this will feel like duplication of work, but we want to start doing this manually while we figure out our way of working, instead of over-engineering up front. Will look into further automation/syncing options in the future as needed.
