# Onboarding

Welcome! We're excited to have you join the team. This document outlines the structure of your first few weeks at Sourcegraph.

## Guiding principles

### There are no stupid questions

Joining a new company can be overwhelming — there's a lot to learn! As you navigate your first few weeks at Sourcegraph, we want you to know that everyone on the team is here to help, and that there are **no stupid questions**.

Every time you're curious or confused about something — just ask! When you do so, use [public discussion channels](../communication/team_chat.md#avoid_private_messages) as much as possible.

### Think and act like an owner

At Sourcegraph, we don't think of engineers as resources — we think of them as owners of their work, who constantly reevaluate how to use their talents to be as impactful as possible. We value your opinions and ideas. You should always feel empowered to identify potential improvements and act upon them, whether they be improvements to processes (like onboarding), our handbook and general documentation, our codebase and tooling, or our product.

Never assume that a problem is somebody else's to fix!

## Getting set up

You'll have to get some basics set up in your first few days:
- Complete [general onboarding](../people-ops/onboarding/index.md#for-all-new-teammates)
- [Configure your GitHub notifications.](./github-notifications/index.md)
- Join #dev-announce, #dev-chat, and your team's channel on Slack, as well as any other channels you find interesting. [Team chat documentation](../communication/team_chat.md#engineering)
- Set up your [local development environment](https://github.com/sourcegraph/sourcegraph/blob/master/doc/dev/local_development.md#step-1-install-dependencies). If you encounter any issues, ask for help in Slack and then update the documentation to reflect the resolution (so the next engineer that we hire doesn't run into the same problem).
- Read through your team's handbook page, to learn about the team and its internal processes.

### Manager checklist

Your manager should complete the following steps when you join:
- Schedule a recurring [1-1](../leadership/1-1.md).
- Grant access to necessary services.
  - [Sourcegraph organization on GitHub](https://github.com/orgs/sourcegraph/people)
    - Invite to relevant GitHub teams, including [@sourcegraph/everyone](https://github.com/orgs/sourcegraph/teams/everyone).
  - [LSIF organization on GitHub](https://github.com/orgs/lsif/people) (optional; recommended for Code Intelligence team members)
  - [Buildkite](https://buildkite.com/organizations/sourcegraph/users/new)
  - Google Cloud Platform ([prod](https://console.cloud.google.com/iam-admin/iam?project=sourcegraph-dev), [test](https://console.cloud.google.com/iam-admin/iam?project=sourcegraph-server))
  - [Opsgenie](https://sourcegraph.app.opsgenie.com/settings/users/)
  - [Docker Hub](https://hub.docker.com/orgs/sourcegraph)
  - [Site24x7](https://www.site24x7.com) (optional; recommended for Distribution team members)
  - [HoneyComb.io](https://www.honeycomb.io/)
  - Ask Christina to send an invite to [Productboard](https://sourcegraph.productboard.com)

## Weeks 1-3

### Starter tasks

Your manager will assign to you three starter tasks that you should aim to complete in your first three weeks. These tasks are small, atomic, and intended to expose you to different parts of our codebase and product: it's important that you build the flexibility to fix any problem you'll be faced with at Sourcegraph, and don't narrow down your comfort zone to a certain part of our codebase or product.

As you're working on these tasks:
- Optimize for learning: your priority is to soak up as much context as possible, not to ship something as fast as possible.
- Aim to be as incremental as possible:
    - Open a pull request as soon as you feel like you're ready for feedback or input on your code — you can make it a draft pull request if your code is still a work in progress.  
    - Favour splitting up your work in multiple pull requests every time it makes sense — shipping frequently is important.
    - Ask yourself what tests are appropriate for the change you're tackling, and add them!
- If you need help, remember that there are [no stupid questions](#there_are_no_stupid_questions) — ask for help in your team's channel (or any appropriate channel), and add the answer to our docs or the handbook if you feel like it can help future teammates.

As you complete these tasks, share your accomplishments in #progress 🙂

### Pairing sessions

Reach out to every member of your direct team, and set up a two-hour pairing session with them. These sessions will be an opportunity to get to know your teammates, understand what they're working on and why, and learn more about our codebase and development flows!

Take the first 20-30 minutes of the session to have an unstructured, introductory chat. Then, start hacking! Your teammate will set up a [live share](https://visualstudio.microsoft.com/services/live-share/) and walk you through what they're currently working on. Ask as many questions as possible, to try to understand:
- What problem is your teammate trying to solve?
- Why is that problem important? What team goal does it fit under?
- What are relevant [RFCs](https://about.sourcegraph.com/handbook/communication/rfcs), [PDs](https://about.sourcegraph.com/handbook/product/product_documents), GitHub issues or documentation pages?
- What parts of our codebase need to be changed to solve this problem?
- How will the code being changed be tested?
- Will there be future work needed after solving this problem? How could you contribute?

**Teammates** should prepare these pairing sessions so that they bring you the most value, and allow you to quickly ramp up on what the team is working on and why.

### Reading material

There will be plenty for you to read and learn about when you're not working on your starter tasks:
- Read through our [architecture overview](https://docs.sourcegraph.com/dev/architecture).
- Read through the rest of the engineering handbook to learn more about how we operate.
- Read how we choose and continually update our [goals](../../company/goals/index.md).
- Read how we plan and keep each other up to date with [tracking issues](./tracking_issues.md).

## Weeks 4-6

### Start contributing to your team's goals

By now, you'll have shipped multiple improvements, paired with all members of your immediate team to understand what they were working on, and learned a lot about Sourcegraph. It'll be time for you to start contributing to your team's goals! It'll be up to you to define how you'll accomplish this:
- Pick a current iteration goal you'd like to start contributing to (or work with your team to define these iteration goals if the team is in planning phase).
- Chat with the teammates currently working on that goal, and relevant stakeholders (product, design, CE) to understand the problem being solved.
- Prepare a proposal for how you'll work with the team solving that problem in the following three weeks. Your work may include:
    - Working on previously identified GitHub issues
    - Doing spikes to solve unknowns and learn more about the problem
    - Writing RFCs to propose solutions, and planning resulting development work
- Discuss your plan with the team and your manager.
- Get hacking!

At Sourcegraph, you'll be expected to own the problems your team is solving, and work with the team to define solutions and plan your work — we think it's important that you start doing this early on!

### Give feedback on your onboarding

At the end of week 6 at Sourcegraph, your manager will send you a survey to learn more about what worked and what didn't during your onboarding. Take your time to answer this thoughtfully — your answers will be very important to make sure our onboarding process is even better for future hires!
