# Security risk management process

## Introduction

This document details how to execute the actions required by
Sourcegraph’s [Information Security Risk Management Policy][0].
Knowledge of the policy, including details of the required actions and
definitions of key terms, is assumed within this document.

## Risk register

Sourcegraph maintains its [information security risk register][1]
in Google Sheets. This document is the source of truth for Sourcegraph’s
information security risks. To edit the Risk Register, you must be a member of
the Security team; if you do not have access and believe you might require it,
email [security@sourcegraph.com][2].

## Risk identification

Information security risks at Sourcegraph might be raised ad-hoc or via the
regular risk review process.

### Ad-hoc risk identification

Sourcegraph’s employees may raise potential information security risks at
any point in time by sending an email with details of the risk in question to
[security@sourcegraph.com][2]. It is the
responsibility of the Security team member currently on the support rota to
ensure that:

- The email is acknowledged
- Any unclear details about the risk in question are clarified with the person
  reporting the risk
- Estimates of inherent and residual risk are created according to the process
  described in the Information Security Risk Management Policy. Only Security
  team members are able to add new risks and set information security risk
  estimates.
- A risk owner is assigned. An appropriate risk owner should have good
  knowledge of the risk area in question, and should be able to own and
  drive any required risk treatments.
- If required, a treatment plan with a due date is defined

Security team members are also free to raise and triage risks in this manner as
required.

### Risk identification through scheduled review

New risks might also be identified during the scheduled risk review process; for
more information on this process, see ‘Reporting and review’ below.

## Risk treatment, acceptance, and exceptions

Once a risk has been triaged and entered into the risk register, it will either
require treatment or acceptance. By default, any risk with a Low residual risk
estimate is considered to be accepted, and requires no further action until the
next scheduled risk review.

Any risk with a Medium or a High residual risk estimate will require further
controls to reduce the information security risk to Sourcegraph. It is the
responsibility of the Security team member handling the risk entry to work with
the risk owner to identify treatments that would achieve this goal, and a
realistic timeline in which this can happen.

Once this is done, the risk entry in the register should be updated with links
to specific issues in relevant trackers (Github, Jira, etc.) where the
treatment actions will occur, as well as the due date. The Security team member
must notify the risk owner of this change and receive written confirmation that
they are satisfied with the status of the risk register entry.

In some cases, it might be possible that there is no reasonable treatment
possible for a risk that exceeds the threshold for risk treatment. In this case,
an exception should be sought. Exceptions can only be signed off by the CTO. In
order to raise an exception:

- Discuss the risk first with the Engineering Manager of the Security team to
  confirm that an exception should be sought in this case.
- Compose an email to the CTO, including the Engineering Manager of the Security
  team and the risk owner, explaining the nature of the risk and the reason why
  a suitable treatment cannot be found. If the CTO confirms in writing that they
  are happy to grant this exception, update the risk register accordingly.
- If the CTO is not satisfied that an exception is merited, work with the
  involved parties to investigate other possible treatments or approaches to the
  problem.

## Reporting and review

In order to ensure that the risk register is up-to-date
and irrelevant risks are removed, a reporting and review process is also
necessary. Once every six months, a Google Calendar entry will prompt the
Security team to send out a risk report. The team member on the support rota
must then send out a high-level risk report to all risk owners and Sourcegraph
staff at VP-level. This report should contain:

- A link to the current risk register
- A summary of new risks added to the register since the previous report
- A summary of risks requiring treatment that are about to or have already
  exceeded their due date

As part of this reporting process, risk owners should also be requested to
review their risks and confirm in writing that they are satisfied with their
status in the risk register. Any changes that they wish to make should then be
discussed on an individual basis, and the risk register should be updated when a
conclusion is reached. All decisions made should be written down in the risk
register for later reference, as well as to confirm that the risk register item
has been punctually reviewed.

When the review process is completed, the updated risk register should be sent
to the Security Engineering Manager for approval using the Approval workflow in
Google Sheets.

[0]: https://docs.google.com/document/u/2/d/1JMeLKBxgGsT-rrxxQpvBI_IQSYlj4I5KoldYNT5iQLQ/edit
[1]: https://docs.google.com/spreadsheets/d/1fugokYzcrjJ4lPmbjoo91rFk-3mBabsz4UCOnuL6_PE/edit#gid=0
[2]: mailto:security@sourcegraph.com
