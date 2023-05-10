# Support prioritization

We have many factors to consider in order to determine priorities and as such, we need very clear boundaries and definitions to ensure there is only ever a single number one priority and it’s straightforward to determine what that is.

## Pre-Sales Support Exceptions

Starting FY24, Support will no longer serve as the front-line on pre-sales technical issues. CE, as the technical team closest to the prospective customer, during the Sales cycle will serve as front-line on needs and issues and may engage Support, as needed. Support will no longer monitor trial channels by default. Support may temporarily join a channel to assist with an issue, but they would subsequently leave the channel. If an exception to this process is requested, please reach out to @cs-leadership in Slack.

### Engaging Support on Pre-Sales Technical Needs

If a CE needs help on behalf of a customer, they can either email support@sourcegraph.com or post a message in #customer-support. With any request please sahre the following:

- Issue summary
- What was the prospect attempting to do and what is the expected result?
- What steps have been taken to resolve the issue already?
- What is the impact of the issue (is it blocking full use, select users, etc?)
- Link to any relevant [Technical Design Documents](https://drive.google.com/drive/folders/1o-4rB24vcYsOiUzSEr_vzJsC7pE03yYC)
- Context about where in the sales cycle the prospect is and any key dates to be aware of in resolving the issue

### Pre-sales Ticket Severity

Based on the needs and impact of the ticket, SEs will assign a severity level to the ticket based on the following criteria:

- **p0:** Failed deployment or total loss of service
- **p1:** Core features are unavailable or the service as a whole is slow
- **p2:** Non-blocking technical asks or problems

## Priority definitions

All work is assigned a priority per these definitions:

- **p0:** All customer reported issues per our contractual p0 service level agreement definition [here](../index.md#slas) (even Cloud customers, though we don't have SLAs for them at this time).
- **p1:** All customer reported issues per our contractual p1 service level agreement definition [here](../index.md#slas) (even Cloud customers, though we don't have SLAs for them at this time).
- **p2:** Paying customers who have reported issues per our contractual p2 service level agreement definition [here](../index.md#slas).
- **p3:** Any internally identified goals/tasks/projects.

## Making hard choices

Sometimes we have too much work to keep it simple. In these situations, we will put forth our best effort and unless something about the situation requires us to deviate, we follow this order of priority:

- Pre-sales customers first (See support exceptions above)
- Enterprise customers second
- Team customers third
- Free customers fourth
- Open source fifth
- Internally driven work last

When we have a normal amount of work, we help when help is needed and even with severity level based SLAs, we still strive to get back to customers (including pre-sales) within a couple of hours most of the time.

When we have an unusually large amount of work or more folks are out than normal, it is fine if customers (including pre-sales) have to wait. In such situations, we will communicate proactively, letting them know that we have team members arriving in another few hours who will be able to help them.

## Priority assignment

Priority is always assigned by the Support Engineer at time of triage, sometimes with input from the customer and/or other internal teams/practices/contractual obligations. We will only expect engineering to drop everything for p0 and p1 issues if they really cannot wait a day. Either way, the idea is that we expect very few p0 and p1 issues overall, so the need to drop everything should be rare. This also means that it’s okay for p2 issues to sit a bit before engineering takes a look and decides timing for work. The onus will be on support to provide all the necessary context for engineering to decide how to handle p2 issues.
