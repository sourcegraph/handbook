# Content Platform Team

The Content Platform team creates, manages, and optimizes the content platforms that enable the success of Sourcegraph’s business objectives.

## Our Strategy

[Mission & Vision](../../../../strategy-goals/strategy/content-platform/index.md)

## Responsibilities

The current existing content platforms include:

- [Marketing site](https://about.sourcegraph.com)
- [Blog](https://about.sourcegraph.com/blog/)
- [Learn site](https://learn.sourcegraph.com)
- [Handbook](https://handbook.sourcegraph.com)
- [Docs](https://docs.sourcegraph.com)

### Customers

The Content Platform team has the following customers:

1. Marketing department: The marketing, blog, and learn sites.
1. Engineering department: The docs site.
1. Sourcegraph employees: The handbook site.

## Principles

We inherit Sourcegraph's [engineering principles and practices](../../dev/process/principles-and-practices.md).

### Guiding principles

1. **Customer-first:** we exist to enable our customers to succeed against their objectives.
1. **Empowerment:** we build everything to empower the customer to be self-sufficient in managing the content.
1. **Forward-thinking:** we execute on our customers’ requests, keeping the overall content ecosystem in mind to drive efficiency and re-use.
1. **Indexability:** Search engines’ ability to index the content is not an afterthought and is key to success.
1. **High-quality:** The content platforms are the face of Sourcegraph to the public, and given our developer-focused audience, only the highest quality of engineering will be acceptable.

## Where we are now

We intend to form a self-sufficient engineering team with all the necessary cross-functional roles to deliver on the mission.

We envision driving two workstreams inside of the team, one focused on the more traditional markdown-driven content architecture (handbook, docs) and one around CMS-driven content (marketing, blog, learn). By looking at our platforms from a content-neutral way, we still believe there are many shared elements between all the sites and want to optimize for efficiency. Also, if/when needs of the handbook and docs sites diverge more drastically from the other sites to the point where it causes inefficiency in the team, we will treat it as a signal that it is time to evaluate whether to split the team.

This team will be successful if it can deliver on its customers’ needs to help them achieve their goals. Streamlining the prioritization and delivery of work while enabling self-service ability is essential. Ultimately, meeting the delivery commitments on time will determine the team’s success.

## Contact

- #content-platform and @content-platform-team on Slack

## Processes

### Requests

The Content Platform team helps with updates or changes to the various [sites we are responsible for](#responsibilities). **Note:** that if you're comfortable making changes to one of these sites, you don't have to put in a request for the Content Platform team. We are happy to serve as a review on your PR, but no need to put in a request unless you need us to complete the work for you. Requests to the Content Platform team can be made through a Slack workflow:

1. In the #content-platform channel in Slack, click the + icon, then “Content Platform Request”

- ![Content platform request in Slack](https://storage.googleapis.com/sourcegraph-assets/handbook/content-platform-request.png)

2. This will prompt you to fill out a form with relevant details.
3. Completed forms will be sent to the Content Platform Product Manager, who will [triage](#triaging-incoming-requests) and update you with more information.
   - **Note:** You'll see a condensed version of your request appear in the #content-platform channel instead of the full text you entered. Your full request will be sent directly to the PM via Slackbot, and they will follow up with questions as needed.

#### Service level agreements (SLAs)

- **Initial response:** All requests will be (triaged)[#triaging-incoming-requests] within one business day.
  - **Urgent requests:** If your request is urgent, flag it in the #content-platform channel or contact the Content Platform [Product Manager](#members) directly so they can respond as soon as possible. Urgent requests are issues impacting customers' ability to interact with our sites, issues blocking an essential part of a current marketing campaign, or potentially other requests defined on a case-by-case basis.
- **Resolution:**
  - **Non-urgent requests** will be resolved by a due date agreed upon by the team and the requestor as part of triage.
  - **Urgent** requests will be worked until the issue is resolved or no longer in an urgent state.

### Triaging Incoming Requests

The Content Platform Product Manager triages and prioritizes requests on a daily basis. They will:

1. Verify all necessary information is in the request
1. Determine urgency and priority against other work
1. Set expectations with stakeholder/requester. The Content Platform team work in two-week sprints and will confirm what will be added to next or future sprint after the [bi-weekly planning meeting](#bi-weekly-planning-meeting).
1. Create a GitHub issue (may automate this, TBD) and link the issue in the request thread in the #content-platform channel. You can see an example [here](https://sourcegraph.slack.com/archives/C02PSJF0QLU/p1647386134658749).
1. If this is a marketing request, add the `marketing-request` label to the GitHub issue.
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
- Anyone can request help from the Content Platform team according to [this process](#requests)
  - Issues are then [triaged](#triaging-incoming-requests) and added to the proper repo in GitHub (and to the [Content Platform Work project](https://github.com/orgs/sourcegraph/projects/227/views/1))
- Anyone can [create an issue directly in the project](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-project-board-note)

### Prioritizing Issues

- Issues are prioritized as they come in by the Content Platform Product Manager, with input from the rest of the team and stakeholders
- Priorities are reviewed in the [bi-weekly team sync](#bi-weekly-sync-meeting) to prepare for the next sprint

### Issue Status + Updating Issues

- All work tracked in the Content Platform [GitHub project](https://github.com/orgs/sourcegraph/projects/227/views/1)
- **Views:**
  - **[All Issues](https://github.com/orgs/sourcegraph/projects/227/views/1)** contains issues that fall under the [responsibilities](#responsibilities) of the content platform team, regardless of repo or site.
  - **[Handbook](https://github.com/orgs/sourcegraph/projects/227/views/5)** contains issues in the [Handbook repo](https://github.com/sourcegraph/handbook).
  - **[About/Marketing Site](https://github.com/orgs/sourcegraph/projects/227/views/7)** contains issues in the [About repo](https://github.com/sourcegraph/about/labels/blog), excluding issues labeled “docs”, “docs-ux”, or “blog”.
  - **[Blog](https://github.com/orgs/sourcegraph/projects/227/views/8)** contains issues labeled “blog”.
  - **[Learn](https://github.com/orgs/sourcegraph/projects/227/views/9)** contains issues in the [Learn repo](https://github.com/sourcegraph/learn).
- **Statuses:**
  - **Backlog:** Issue has not yet been [triaged](#triaging-incoming-requests) or is otherwise not ready to be worked.
  - **Ready for Development:** Issue has been triaged and prioritized, and is ready to be worked.
  - **In Progress:** Issue is actively being worked on.
  - **In Review:** Issue is in review. This could be a PR review, QA, or stakeholder review.
  - **Blocked/Paused:** Work is currently paused on this issue. If possible, please add details about why the issue is blocked or paused. If you’re blocked, tag your PM for help.
  - **Done:** Work is complete, PR is merged (if applicable), and no further action is needed on this issue.
  - **Not Planned:** Issue has been triaged, but not prioritized with current work. This may mean it will be prioritized in the future when it aligns with the roadmap.
- **Automation:**

GitHub Automation workflows are currently in Beta and we take advantage of the following features available to us:

- When an issue is added to the project, its status is set to **Backlog**.
- When an issue or PR is reopened, its status is set to **Ready for Development**.
  - In some cases, PRs may be reopened but are not yet **In Progress** again. If , manually change the status.
- When an issue or PR is closed, its status is changed to **Done**.
  - In some cases, **Not Doing/Cancelled** may be a more appropriate status. If so, manually change the status.
- When PR changes are requested, the status is set to **In Progress**.
- When a PR is approved, its status is changed to **In Stakeholder Review**.
- When a PR is merged, its status is changed to **Done**.

### Pull Requests

All PRs made by the Content Platform team go through a creation and QA process.

**Authors for PRs should include:**

1. Context in the description on what the PR achieves. This includes which issues it refers to, if any, using [closing keywords](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) to automate issue closing.
2. A list of tasks as a Test Plan that a reviewer should test to ensure the proposed changes work as intended.
3. At least 1 reviewer to review, provide feedback if necessary, and approve, in order to increase code health and prevent accidental bugs and changes from being snuck in after an approval has been made.
4. Setting yourself as the assignee to keep track of your work.
5. Any relevant labels, including the required `team/content-platform` label.
6. Tagging the **Content Platform Work** project and setting the apropriate status through the stages of work: In Progress and In Review, to keep everyone informed.
7. Any relevant Milestones.
8. Any optional comments to lines of code to point out specific context for reviewers.

**The QA Process should go as follows:**

1. Create a draft PR if your PR is still work in progress (WIP).
2. Assign a reviewer once your PR is ready to be reviewed and is no longer WIP.
3. If there are changes requested, push your changes and resolve conversations as they are fixed. You can optionally leave conversations unresolved if more conversation is necessary.
4. Once approved, the Author merges and the branch is automatically deleted.

### Planning

We work in two-week sprints and we plan our sprints on a bi-weekly basis. A sprint starts on a Monday and ends on the Friday of the following week.
You can view our [Current Sprint](https://github.com/orgs/sourcegraph/projects/227/views/18) on GitHub.

#### Bi-weekly Planning Meeting

- _Overview:_ Bi-weekly call with all the teammates to plan the next sprint.
- _Goal:_ Plan and estimate the issues for the next sprint based on priorities and define a sprint goal.
- _When:_ Monday

#### Bi-weekly Sync Meeting

- _Overview:_ Bi-weekly call with all the teammates to discuss the work in progress and review upcoming priorities. Opportunity to surface dependencies on each other and other sources.
- _Goal:_ Connect as a team, ensure we are all clear on the status of inflight work and next priorities.
- _When:_ Every second Monday

#### Retrospectives

- _Overview:_ We conduct a bi-weekly [retrospective](../../../../company-info-and-process/communication/retrospectives.md) to celebrate wins and share feedback.
- _Goal:_ To ensure we improve as a team to become more efficient and effective.
- _When:_ Every second Thursday

### Engaging with Other Teams

- See [this section](#requests) for making a request to the Content Platform team.

#### Collaborating with Marketing

- Marketing will [submit requests](#requests) as needed. They will then be [triaged](#triaging-incoming-requests) and prioritized based on urgency indicated from the requestor.
- Content Platform team requires assets to be approved before adding it to the sprint backlog.
  - Figma file: this is always the source of truth for design and copy
- Marketing will continue to track work in Asana, while the Content Platform team is tracking work in GitHub. Details of how this will work:
  - Marketing Project Manager is responsible for keeping Asana up to date.
  - Content Platform Product Manager is responsible for keeping GitHub up to date.
  - GitHub issue contains a link to the Asana card, and Asana card contains a link to GitHub issue.
  - Content Platform team provides updates to their work in GitHub, including but no limited to:
    - QA links
    - Questions for stakeholders
    - Progress updates as needed
- All marketing requests go through our [Marketing QA process](qa-process.md) and inherit our [Pull Requests](#pull-requests) process.
