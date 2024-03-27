# Security support rotation

The Security team has a dedicated member on a weekly support rotation. This document outlines the responsibilities of this role and how to execute the tasks. In a nutshell, these are the responsibilities of the engineer:

- Incoming inquiries from other teams
- PR reviews
- Bug bounty reports on HackerOne
- Security questionnaires
- Cloudflare WAF blocks
- Security-issues GitHub project
- Emails to security@sourcegraph.com
- Ensuring a smooth transition to the next engineer on rotation

## Expectations

The engineer on rotation is expected to comply with these responsibilities only **_within their usual working hours_**. There is no on-call, 24x7-watch expectation on these tasks. The async nature of Sourcegraph allows us to properly support the organization without having to be in front of the computer all day.

You are not expected to provide all answers to inquiries or review all PRs. You are expected to be the initial responder and decide whether to tackle the work right away or add it for later planning. As a general rule of thumb, any work that will take longer than half a day should become a ticket in the team's [GitHub issues](https://github.com/sourcegraph/security/issues). This also includes work that takes less than half a day but needs to be transitioned to another engineer.

The engineer on support rotation is responsible for anything that doesn't have a clear owner in our team. For example if we start receiving a trove of PRs for something that another engineer is currently working on, there's no need to keep an eye on those. On the other hand, if it's a one-off review then it's your responsibility to ensure the ball doesn't get dropped.

Finally, it's your responsibility to ensure a smooth transition to the next engineer on rotation. This includes:

- Wrapping up tasks as you can;
- Ensuring all tasks are properly documented (with GitHub issues and status updates);
- Communicating any leftover tasks/asks/things to keep in mind for whoever is up next. This is best done the day before the rotation transitions via an async recap update posted in #security-internal.

### Channels to keep an eye on

Issues should arrive through the following channels, which should be checked at least _once a day_:

- #security
- #security-internal
- #security-monitoring
- #security-code-monitoring
- Slack messages that tag @security-team or @security-support
- GitHub notifications tagging @sourcegraph/security
- HackerOne reports (via email)
- security@sourcegraph.com email
- [security-issues](https://github.com/sourcegraph/security-issues) GitHub project

## How-tos

### Incoming questions and ad-hoc inquiries from other teams

We get asked various questions on a variety of topics. It's not expected that you know all the answers but it is your responsibility to go after the answers and engage the correct people in a timely manner.
These questions serve as a great opportunity to improve documentation so keep that in mind if you believe the answer at hand may be reused in the future.

### PR reviews

Our team gets tagged for reviewing PRs in the @sourcegraph/security team in GitHub. PR reviews can concern any code written by our devs, from JS through Kubernetes and everything in between. If you do not feel comfortable reviewing a PR then set due date expectations with the team requesting the review and request help from other team members. Ideally pure code security reviews should be handled by @security/security-code-review members. If you are on support and you get assigned a code review, feel free to add that team to the assigned reviewers. PR reviews are a great opportunity for pairing and cross-team collaboration.

### Bug Bounty reports

We receive reports into our HackerOne program. Make sure that:

- You have an account on HackerOne
- You have notifications set up to receive emails reports from the platform

You should be able to view the HackerOne inbox for Sourcegraph [here](https://hackerone.com/bugs).

When HackerOne receives new bounty reports, they will do the first stage of trigge
themselves, and come to a conclusion about the report. They will then move the
report to the 'Pending review' stage, which is where you will be expected to
confirm that their work was correct.

If you feel unsure about their conclusion on a vulnerability, get help as soon
as possible, since there are SLAs involved.

We may continue to receive bounty reports to security@sourcegraph.com, the email
address for our old public bounty program. Keep an eye on these. In most cases,
we will not consider such reports for a bounty, but in case we receive a particularly
good report, we might consider the reporter for an invite to our HackerOne program.
Discuss any reports which you feel might qualify for an invite with the team before
responding to the reporter – we should be using our invites sparingly and only
for the best reports.

To assign a bounty to a reporter:

1. Go to the HackerOne inbox linked above
2. Find the relevant report using the search bar on the left-hand side of the page
3. Scroll to the bottom of the report
4. Click on the dropdown that says 'Add comment' and select 'Set award'
5. In the field that pops up to the right, enter the agreed dollar amount
6. Add a message thanking the reporter for their effort, and click 'Set award'
   on the bottom right of the page

Still unsure? Watch [this video](https://www.loom.com/share/52371e6d43b9421da1faf7ca712b47e2).

### Security questionnaires

We support Sales in filling out security questionnaires for customers. Sales does a first pass and we review it. These requests come in through the #security channel Security Questions workflow. The CE will list customer name, deployment type, link to the questionnaire and any other information.
Reviewing these questionnaires requires extensive knowledge of our company and application. It's inevitable that the first few will be somewhat bumpy but since these questionnaires often repeat questions it doesn't take long to be self-sufficient here.
[This spreadsheet](https://docs.google.com/spreadsheets/d/1xtjGzKExX9bEYBrsSyOcHFa-rm0SmB53hWnDKueVJjI/edit#gid=1823332226) is maintained by the CE team with a knowledge base of common questions. If you run into any incorrect or missing information make sure to update the spreadsheet. [This folder](https://drive.google.com/drive/folders/11X8xoX9lK7aHY-UqZQIwQl_aQ8NQFu1D) contains previous security questionnaires that can be useful for reference. Keep in mind that many of these are old and may contain outdated information.

### Cloudflare WAF blocks

[NOTE: this will eventually be moved to more thorough docs on operating Cloudflare]

Sourcegraph.com is behind the Cloudflare WAF. It's a great tool but sometimes it blocks legitimate uses of our application, especially searches. When that happens the user is presented with the default Cloudflare block page, and they may come to us to help review why the request was blocked. To review Cloudflare blocks:

1. Get information from the user about an approximate timestamp and which HTTP request they were making, especially the URL.
2. Go on Cloudflare -> Firewall -> Overview and use filters to find the event where the user was blocked.
3. Once you find the event take a note of the RuleID:
   ![Cloudflare event](https://storage.googleapis.com/sourcegraph-assets/cloudflare-waf-block-1.png)
4. Go to Firewall -> Managed rules and find the rule group containing this RuleID. Find information about the rule and what it's trying to block. In most cases we disable the rule regardless since a WAF cannot block legitimate searches.
5. To disable the rule, add the RuleID to [this list](https://github.com/sourcegraph/infrastructure/blob/main/dns/variables.tf#L1) and follow our git flow for updating infrastructure.

### Security Vendor Reviews

Vendor reviews are requested by teammates when a new vendor is being onboarded. When requested, we want to review various aspects of the vendor's security policy, not limited to but including, data processing, data protection, security reporting, and type of data being shared. Here is a non-exhaustive list of items you may want to review for this request.

Information needed and reviewed:

1. What type of information is being shared with the vendor: customer data, sourcegraph data, both?
2. Security compliance certifications like ISO27001 or SOC 2.
3. Encryption standards of data at rest and in transit (transport layer security).
4. Clear measures around confidentiality, integrity, availability, and resilience of processing systems and services.
5. Clear process in case of a security incident and the reporting to Sourcegraph.
6. Ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident.
7. Periodic testing on security, assessing and evaluating the effectiveness of technical and organizational measures for ensuring the security of the processing.

Vendor reviews are now being submitted via [Airbase](../finance/process/ap.md#airbase-guided-procurement-contract-executionvendor-request)

We are notified when a user submits request for vendor procurement.

1. In the Airbase portal once you login, under Requests section you will see all pending reviews
2. Click on the vendor request, it will open the request
3. Click on the security review section and a side window will open on the right
4. Here you will find a few questions answered and any supporting documents attached.
   a. If there is incomplete information in the submission, please indicate that in the comments and tagging the requestor. You can also reach out to them directly via Slack
5. Review the attached documents with above guidelines in mind
6. If a security portal link from the vendor is provided, request access and review information available there
7. Click approve or deny based on your review

### New repository alert

We get alerts for new repositories created in the Sourcegraph GitHub org. These repositories should be added to [this spreadsheet](https://docs.google.com/spreadsheets/d/1IPQv9lPe1J3fwx_ZwOV-Tu4PqyP_c4bXKd3p_uw291s/edit#gid=0) and categorized as per our Repository policy: `SOC2-compliant`, `SOC2-in-progress`, `Security-tracked` or `Out-of-scope`.
