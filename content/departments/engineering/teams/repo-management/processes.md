# Repo Management Processes

## Support

The Repo Management team primarily receives support requests from the Customer Engineering (CE) and Sales orgs. The requests vary from customer identified bugs to simple questions to deep dives into product gaps. CE and Sales work on behalf of Sourcegraph customers and, as a result, their support requests are high priority for our team.

We also receive support requests from other engineering teams because our ownership impacts many areas within Sourcegraph.

### Requesting Support

We provide two primary ways of requesting support from Repo Management:

1. The #repo-management channel in Slack is our preferred method of receiving support requests. If your support request is a simple question, post in the channel. You don’t have to provide a GitHub issue or any other artifact. If your support request is more than a question (e.g. customer bug, deep dive required, high priority ask), follow the support [request guidelines](#support-request-guidelines) below.

2. If you are unsure whether Repo Management is the right team, or it impacts multiple teams, you can post in the #ask-engineering channel. We recommend posting in #repo-management instead if you are confident that Repo Management is the right owner as we do not review the #ask-engineering channel as quickly.

### Support Request Guidelines

Support requests related to our [areas of ownership](index.md#responsibilities) should follow this process:

1. Make sure there is an issue - if there's not, please create one and include:
   - A short description of the ask
   - A more detailed explanation of the background, the context and the challenge that needs solving
   - Any guidance related to the impact this is having
   - Any extra information that could help us solve or prioritize this
2. Ensure label `team/repo-management` is added to the issue
   . Send a message to #repo-management in Slack to notify the team that you have created the issue

### How We Handle Support

Each week one member from the Repo Management team is on support rotation according to [repo-management-support](https://sourcegraph.app.opsgenie.com/settings/schedule/detail/b553cefc-2466-4ad2-ad0c-66937c790bbf) schedule in OpsGenie. The user is also added to the Slack User Group `@repo-management-support` by [Slackgenie](https://github.com/sourcegraph/background-jobs/tree/main/slackgenie). Feel free to tag `@repo-management-support` for your support requests on Slack.

For simple questions in #repo-management or #ask-engineering, we will review and respond on a daily basis.

More involved support requests follow the below process:

1. Requester sends a message to #repo-management and links to the issue they created on https://github.com/sourcegraph/customer/issues (the customer issue should include the label team/repo-management).
2. The IC on the weekly support rotation acknowledges the message in Slack, asks any follow up questions, and provides an ETA for us to review the issue. If the issue is p1, we review immediately.
3. The IC on support will review the request in more detail and create an issue on our [Kanban board](https://github.com/orgs/sourcegraph/projects/209/views/1) and add it to the Support Issues list.
4. If the request is not trivial, the IC will loop in the the EM and PM to triage with the requester on relative priority and timing.
5. Once we’re ready to work on the issue, the IC will either personally work on the request or work with the team to identify the right owner.
6. Whoever takes the issue will own it until completion and communicate directly with the requester.

## How we work

We work in 2 week cycles.

_Week 1_

| Monday              | Tuesday         | Wednesday | Thursday | Friday |
| ------------------- | --------------- | --------- | -------- | ------ |
| 45min Retrospective |                 |           |          |        |
| 45min Grooming      |                 |           |          |        |
| 45min Planning      | Company meeting |           |          |        |
|                     | Demo Day        |           |          |        |

_Week 2_

| Monday | Tuesday | Wednesday | Thursday | Friday |
| ------ | ------- | --------- | -------- | ------ |
|        |         |           |          |        |
|        |         |           |          |        |
|        |         |           |          |        |
|        |         |           |          |        |

### Important documents and links

- [repo-management board](https://github.com/orgs/sourcegraph/projects/209/views/1)
- [repo-management retrospective](https://docs.google.com/document/d/1i44vugdH8hRvb3Uc3KSlmCbzbdI1_X5todyg4dQRdpk/edit)
- [repo-management planning doc](https://docs.google.com/document/d/1DI2Ul6tCNNoXi9dq10DlLj1XE5v3bb_mBH5Xhq7f9xQ/edit#heading=h.sjawbxxomzzj)

### Retrospective

**Goal**: continuously improve how we work. We do that by using the retrospective to look back at the past 2 weeks. What we want to find out is what went well, what didn't go well, and how we can improve.

The agenda for the retrospective is this:

- _10min_: fill out the prompts in [this Google Doc](https://docs.google.com/document/d/1i44vugdH8hRvb3Uc3KSlmCbzbdI1_X5todyg4dQRdpk/edit)
  - What went well?
  - What could have gone better?
  - Do you feel supported?
  - Do you feel like you’re moving into the right direction of your team?
  - What processes/other things should we revisit/refine/propose?
  - Other thoughts/questions?
- _5min_: celebrate what went well (read out all items)
- _2min_: vote on items
- _28min_: talk through items, start with the highest votes
  - 5min per item, use a timer, be strict
  - Once 5min are up: ask if 2 more minutes
  - If possible: collect action items

### Grooming

**Goal**: The goal for the grooming session is to get as many items in our backlog
_prioritized_ and _estimated_. We estimate together enough tickets so that we’re
all on the same page on how to implement something and how long it will take, so
that we can plan it in future sprint

Requirements for the meeting:

- DRI for a project prepares by creating as many tickets as possible
- Product comes in with requirements from customers and tickets

Agenda for the grooming meeeting:

- Open the [repo-management board](https://github.com/orgs/sourcegraph/projects/209/views/1)
- Answer:
  - What's in the backlog? Something missing?
  - What's estimated? What's not estimated?
- Go through top N of unestimated tickets that Product thinks we will work on next

### Planning

See the [repo-management planning doc](https://docs.google.com/document/d/1DI2Ul6tCNNoXi9dq10DlLj1XE5v3bb_mBH5Xhq7f9xQ/edit#heading=h.sjawbxxomzzj) for the specific agenda we use in each planning meeting.

A good planning meeting should answer the following questions:

- **Bookkeeping**:
  - What's the availability of everybody for the next 2 weeks?
  - Is there a release happening? If so, when?
  - Any other special events? (kickoff meetings, meetups, …)
  - Who's on Support?
- **Leftover work**:
  - Are there things left-over from the last iteration? If so, why?
- **Planning next 2 weeks**
  - **Step 1: gather input**:
    - What does Product need us to do in the next 2 weeks?
      - _Ideally_ these requests are prioritized and “ready to be implemented”
    - Are there any customer issues we need to work on?
    - Other requests from outside?
  - **Step 2: plan**:
    - What do we want to work on?
      - Go through each person, define what they'll work on, what they commit to do
      - Check if it matches their availability
- What will we demo at the end of the iteration?

### How we structure our work

We split our time between project work, support, and ad-hoc requests. We always have one person dedicated to support requests and the remaining engineers are split between our two delivery streams as outlined in our [strategy page](../../../../strategy-goals/strategy/repo-management/index.md#how-we-plan). In an ideal week, everyone who is not on support is focusing solely on either the performance engineering track or the product engineering trakc. But, we often receive ad-hoc requests for items that don't fit our definition of a support issue.

We plan for ad-hoc requests on a case by case basis, taking into account team availability, the size of the request, skills/knowledge required, and the urgency of the request. We pull the ad-hoc request into our 2 week cycle if we have the right people available to deliver it efficiently and with high quality. This approach ensures we spread ad-hoc work evenly across all teammates.
