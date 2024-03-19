# Security risk management process

## Introduction

This document explains some of the key concepts in information
security risk management, as well as explaining how to carry out
the actions required by Sourcegraph’s [Information Security Risk Management Policy][0].
Knowledge of the policy, including details of the required actions and
definitions of key terms, is assumed within this document. In other words,
please read the policy if you haven't already!

## Risk register

Sourcegraph's security team maintains an [information security risk register][1].
This risk register tracks high-level issues which could affect the confidentiality,
integrity, or availability of the data Sourcegraph manages. As it is high-level,
the risk register does not contain specific technical vulnerabilities. Instead,
it tracks security concerns which require medium- to long-term effort to rectify.

The risk register is the source of truth for Sourcegraph’s information security
risks. To edit the Risk Register, you must be a member of the Security team; if
you do not have access and believe you might require it, email
[security@sourcegraph.com][2].

## Information Security Risk Committee

The Information Security Risk Committee exists to discuss the management of
information security risks across the organization. It is responsible for the
regular review of Sourcegraph's information security risk profile as required by
the Information Security Risk Policy.

Sourcegraph's Information Security Risk Committee is currently comprised of:

- [Quinn Slack][3], Head of Product & Engineering
- [Dan Adler][4], VP Operations
- [Diego Comas][5], Security Lead
- Sam Mandell, Legal

[3]: ../../team/index.md#quinn-slack
[4]: ../../team/index.md#dan-adler
[5]: ../../team/index.md#diego-comas
[6]: ../../team/index.md#tammy-zhu

## Risk identification

Information security risks can be raised in either of the following two ways:

- ad-hoc, by emailing the security team
- by a member of the Information Security Risk Committee during the scheduled
  risk review meeting

### Ad-hoc risk identification

Sourcegraph’s employees can raise potential information security risks at
any time by sending an email with details of the risk in question to
[security@sourcegraph.com][2].

It is the responsibility of the Security team member currently on the support
rota to ensure that:

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
to specific issues in relevant trackers (GitHub, Jira, etc.) where the
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
and irrelevant risks are removed, a Google Calendar entry will prompt the
Security team to send out a risk report once every six months. The team member
on the Security support rota must then send out a high-level risk report to all
current risk owners and the Information Security Risk Committee. This report
should contain:

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

## I'm part of the risk committee – what are my responsibilities?

Members of the risk committee have two main responsibilities:

- Working with the Security team to identify any risks related to their area of
  the business as part of the scheduled [risk review process](#reporting-and-review).
- Assisting the Security team in developing and iterating on the risk management
  programme to ensure it is meeting the goals of the risk management policy.

The Security team will let you know whenever your input is required on matters
relating to security risk management - if you haven't heard from us, there's
nothing required from you at the moment!

## I'm a risk owner – what do I do now?

Risk owners are responsible for:

- Working with the Security team to identify treatment plans for risks relating
  to their business areas
- Ensuring that treatment plans agreed upon are put into action and delivered
  by the agreed upon due date

The Security team will ensure that you are involved in all parts of the treatment
process from when a risk is raised against your area. This includes involving
you in:

- Verifying that an identified risk has been identified correctly, and that all
  available controls to mitigate against the risk have been noted
- Verifying that the risk estimate for the risk (as defined in the
  [risk management policy][0]) is accurate
- Developing a reasonable treatment plan for the risk, and identifying a realistic
  due date for the delivery of the plan
- Closing off the risk when the treatment plan is complete

[0]: https://docs.google.com/document/d/1dWTVx2Uzz8Eo0pG4x1b4i8CBbi4pO-U7jktbO4ihTG4/edit
[1]: https://docs.google.com/spreadsheets/d/1fugokYzcrjJ4lPmbjoo91rFk-3mBabsz4UCOnuL6_PE/edit#gid=0
[2]: mailto:security@sourcegraph.com
