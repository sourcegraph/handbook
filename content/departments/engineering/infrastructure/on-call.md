# Infra-org shared on-call rotation

> Derived from [Google Docs](https://docs.google.com/document/d/1kwb3ucL6Gh9bSZKJcgVyPN0hcHi-yR-_F7J7YheJ6P4/edit).

## Purpose

To better load balance support for high priority services in go/whodoinotify, the infrastructure org is implementing a shared on-call rotation.

Related docs:

- [Engineering - 24X7 Support Rotation](https://docs.google.com/document/d/1IAe8jsTr5aiEfLr94B_4Qwnnc9xdXKhHuxrvP8JUZ-0/edit)
- [Premium Support](https://docs.google.com/document/d/17h8TnsDAeEI8wWPa_8rAcx1HPQG6avUQvq6QIc8mmZ4/edit#heading=h.15fsxjwxv5fa)

## On-call principle

### Coverage

The on-call engineer is responsible for carrying the pager and respond to high priority issues (P0/P1 from TS, P1/P2 on Opsgenie). The on-call engineer is not expecting to handle non-critical operational work, they will still be delegated to the product team.

Services in priority support category should have higher prority than other systems in the case of simultaneous outage. Either by prioritizing them over other systems, or engage secondary or team members to handle non-priority support system failure.

The source of truth for prioritization is go/whodoinotify, as this page might be out of date.

### Responsibility

As an on-call engineer, you are expected to respond to pages and follow playbook to handle expected failure or hints to triage unexpected production issue. You are not expected to solve the issue on your own, but you should be the first responder. If it is approaching your end of shift or you are unavaiable to handle the issue, kindly acknowledge the page and delegate to your teammates.

## Playbook

Each shift is 7-day long, starting and ending on Monday 9AM UTC.

### Starting the rotation

At the start of their shift, the Incoming Engineer On-Call will prepare to take over support rotation duties from the Outgoing Engineer On-Call. The

### Review hand-off notes

The previous on-call engineer should post in the #team-infrastructure channel a link to the go/infra-on-call

This document is designed to help the Incoming Engineer On-Call get up to speed with any open issues that require their attention during their shift. Additionally, this is designed to provide a mechanism for the Outgoing Engineer On-Call to offload support duties in order to transition back into project work.

Upon reviewing the notes, the Incoming Engineer On-Call should create a new entry in go/infra-on-call from the template.

### Ensure OpsGenie can page you

This can be done in the OpsGenie interface by supplying your cellphone number or by downloading the OpsGenie app. The method you choose to be contacted is up to you as long as your response time follows the Response Time guidelines.

We recommend setting a 5-10 min delay in your OpsGenie during your sleep hours. Usually teammates in the opposite timezone should be able to acknowledge the page soon enough to avoid escalation. We expect this to get better once we are able to implement a follow-the-sun schedule.

### Support rotation duties

- Respond to pages from OpsGenie
- Keep notes about any incidents, alerts, and priority support issues during your shift in go/infra-on-call

### Ending On-Call Rotation

Review your on-call logs and complete your hand-off notes in go/infra-on-call. Send a message in #team-infrastructure and tag the Incoming Engineer On-Call.

## Glossary

### Incoming Engineer On-Call

The engineer that is starting their support rotation.

### Outgoing Engineer On-Call

The engineer that is ending their support rotation.

### Engineer On-Call

The engineer that is currently support rotation.
