# Security support rotation

The Security team has a dedicated member on a weekly support rotation. This document outlines the responsibilities of this role and how to execute the tasks. In a nutshell, these are the responsibilities of the engineer:

- Incoming inquiries from other teams
- PR reviews
- Bug bounty reports
- Security questionnaires
- Cloudflare WAF blocks
- Vulnerability board
- Emails to security@sourcegraph.com
- Ensuring a smooth transition to the next engineer on rotation

## Expectations

The engineer on rotation is expected to comply with these responsibilities only **_within their usual working hours_**. There is no on-call, 24x7-watch expectation on these tasks. The async nature of Sourcegraph allows us to properly support the organization without having to be in front of the computer all day.

You are not expected to provide all answers to inquiries or review all PRs. You are expected to be the initial responder and decide whether to tackle the work right away or add it for later planning. As a general rule of thumb, any work that will take longer than half a day should become a ticket in the team's [Jira backlog](https://sourcegraph.atlassian.net/secure/RapidBoard.jspa?rapidView=4&projectKey=SECURITY&selectedIssue=SECURITY-51). This also includes work that takes less than half a day but needs to be transitioned to another engineer.

The engineer on support rotation is responsible for anything that doesn't have a clear owner in our team. For example if we start receiving a trove of PRs for something that another engineer is currently working on, there's no need to keep an eye on those. On the other hand, if it's a one-off review then it's your responsibility to ensure the ball doesn't get dropped.

Finally, it's your responsibility to ensure a smooth transition to the next engineer on rotation. This includes:

- Wrapping up tasks as you can;
- Ensuring all tasks are properly documented (with Jira tickets and status updates);
- Communicating any leftover tasks/asks/things to keep in mind for whoever is up next. This is best done the day before the rotation transitions via an async recap update posted in #security-internal.

### Channels to keep an eye on

The following channels/boards should be check at least _once a day_:

- #security
- #security-internal
- Messages that tag @security-team or @security-support
- GitHub notifications tagging @security
- security@sourcegraph.com email
- [Jira vulnerability board](https://sourcegraph.atlassian.net/jira/software/c/projects/VUL/boards/10)

## How-tos

### Incoming questions and ad-hoc inquiries from other teams

We get asked various questions on a variety of topics. It's not expected that you know all the answers but it is your responsibility to go after the answers and engage the correct people in a timely manner.
These questions serve as a great opportunity to improve documentation so keep that in mind if you believe the answer at hand may be reused in the future.

### PR reviews

Our team gets tagged for reviewing PRs in the @security team in GitHub. PR reviews can concern any code written by our devs, from JS through Kubernetes and everything in between. If you do not feel comfortable reviewing a PR set due date expectations with the team requesting the review and request help from other team members. PR reviews are a great opportunity for pairing and cross-team collaboration.

### Bug Bounty reports

We receive Bug Bounty reports through security@sourcegraph.com. We're looking into moving to a managed platform soon but until then we manage the full circle from initial communications through arranging the payment.

Relevant links:

- [Bug bounty policy](reporting-vulnerabilities.md)
- [Vulnerability Management Process](https://docs.google.com/document/d/1kz_OPNjbwGAdCOmFAj2l6RkweFqJQNwV9pLfrzMhD-o/edit#heading=h.xi1of12kq9by)
- [Vulnerability Management Policy](https://docs.google.com/document/d/1kz_OPNjbwGAdCOmFAj2l6RkweFqJQNwV9pLfrzMhD-o/edit#heading=h.xi1of12kq9by)

For every email to security@ with a Bug Bounty report, do the following:

1. Reply acknowledging the report and that we will look into it. Please ensure security@sourcegraph.com remains CC'd during the bounty communication process (often it can get removed by defaulting to "Reply" rather than "Reply to all").
2. Within 3 days max (but ideally asap) triage the report and confirm whether it's real and its impact. If confirmed, create an issue in the security-issues repository. If not, reply to the reporter explaining why the report is invalid. More information can be found in the Triage section of the Vulnerability Management Process doc.
3. If the issue is confirmed, reply to the reporter and ask for their PayPal information (email, name, mobile number, and country) in case a bounty is due. Then email finance@sourcegraph.com (CCing security@) saying the bounty value and contact information for the payment.

If you feel unsure about triaging a vulnerability, get help as soon as possible since there are SLAs involved.

### Security questionnaires

We support Sales in filling out security questionnaires for customers. Sales does a first pass and we review it. These requests come in through the #security channel Security Questions workflow. The CE will list customer name, deployment type, link to the questionnaire and any other information.
Reviewing these questionnaires requires extensive knowledge of our company and application. It's inevitable that the first few will be somewhat bumpy but since these questionnaires often repeat questions it doesn't take long to be self-sufficient here.
[This spreadsheet](https://docs.google.com/spreadsheets/d/1xtjGzKExX9bEYBrsSyOcHFa-rm0SmB53hWnDKueVJjI/edit#gid=1823332226) is maintained by the CE team with a knowledge base of common questions. If you run into any incorrect or missing information make sure to update the spreadsheet. [This folder](https://drive.google.com/drive/folders/11X8xoX9lK7aHY-UqZQIwQl_aQ8NQFu1D) contains previous security questionnaires that can be useful for reference. Keep in mind that many of these are old and may contain outdated information.

### Cloudflare WAF blocks

[NOTE: this will eventually be moved to more thorough docs on operating Cloudflare]

Sourcegraph.com is behind the Cloudflare WAF. It's a great tool but sometimes it blocks legitimate uses of our application, especially searches. When that happens the user is presented with the default Cloudflare block page. To review Cloudflare blocks:

1. Get information from the user about an approximate timestamp and which HTTP request they were making, especially the URL.
2. Go on Cloudflare -> Firewall -> Overview and use filters to find the event where the user was blocked.
3. Once you find the event take a note of the RuleID:
   ![Cloudflare event](https://storage.googleapis.com/sourcegraph-assets/cloudflare-waf-block-1.png)
4. Go to Firewall -> Managed rules and find the rule group containing this RuleID. Find information about the rule and what it's trying to block. In most cases we disable the rule regardless since a WAF cannot block legitimate searches.
5. To disable the rule, add the RuleID to [this list](https://github.com/sourcegraph/infrastructure/blob/main/dns/variables.tf#L1) and follow our git flow for updating infrastructure.
