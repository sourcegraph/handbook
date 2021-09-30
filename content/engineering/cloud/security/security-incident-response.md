# Security Incident Response Policy

**Policy Owner:** security@sourcegraph.com  
**Policy Authors:** André Eleuterio, Dan Mckean  
**Approved by:** Bill Creager, Director of Platform and Infrastructure  
**Effective Date:** July 31st 2021

## Purpose

This document establishes the plan for managing information security incidents and events, and offers guidance for employees or incident responders who believe they have discovered, or are responding to, a security incident.

## Scope

This policy covers all information security or data privacy events or incidents.

## Incident and Event Definitions

A security event is an observable occurrence relevant to the confidentiality, availability, integrity, or privacy of company controlled data, systems or networks.  
A security incident is a security event which results in loss or damage to the confidentiality, availability, integrity, or privacy of company controlled data, systems or networks.

## Incident Reporting & Documentation

### Reporting

If a Sourcegraph employee, contractor, user, or customer becomes aware of an information security event or incident, possible incident, imminent incident, unauthorized access, policy violation, security weakness, or suspicious activity, then they shall immediately report the information using ALL of the following communication channels:

- Email security@sourcegraph.com information or reports about the event or incident
- Message @security in any open (non-private) Sourcegraph Slack channel

Reports should include specific details about what has been observed or discovered.

### Severity

Sourcegraph’s Security team will monitor incident and event tickets and shall assign a ticket severity based on the following categories.

#### S3/S4 - Low and Medium Severity

Issues meeting this severity are simply suspicions or odd behaviors. They are not verified and require further investigation. There is no clear indicator that systems have tangible risk and do not require emergency response. This includes lost/stolen laptop with disk encryption, suspicious emails, outages, strange activity on a laptop, etc.

#### S2 - High Severity

High severity issues relate to problems where an adversary or active exploitation hasn’t been proven yet, and may not have happened, but is likely to happen. This may include lost/stolen laptop without encryption, vulnerabilities with direct risk of exploitation, threats with risk or adversarial persistence on our systems (e.g.: backdoors, malware), malicious access of business data (e.g.: passwords, vulnerability data, payments information), or threats that put any individual at risk of physical harm.

#### S1 - Critical Severity

Critical issues relate to actively exploited risks and involve a malicious actor. Identification of active exploitation is required to meet this severity category.

### Escalation and Internal Reporting

- S1 - Critical Severity: S1 issues require immediate notification to the Platform Director.
- S2 - High Severity: A ticket must be completed and the appropriate manager (see S1 above) must also be notified via email or Slack with a reference to the ticket number.
- S3/S4 - Medium and Low Severity: A ticket must be created and assigned to the appropriate department for response.

### Documentation

All reported security events, incidents, and response activities shall be documented in the ticket raised for the issue.

A root cause analysis may be performed on all verified S1 security incidents. A root cause analysis report shall be documented and referenced in the incident ticket. The root cause analysis shall be reviewed by the most relevant manager or executive, who shall determine if a post-mortem meeting will be called.

## Incident Response Process

For critical issues, the response team will follow an iterative response process designed to investigate, contain exploitation, eradicate the threat, recover system and services, remediate vulnerabilities, and document a post-mortem with the lessons of an incident.

#### Summary

- Event reported
- Triage and analysis
- Investigation
- Containment & neutralization (short term work)
- Recovery & vulnerability remediation
- Hardening & Detection improvements (lessons learned, long term work)
- Post-mortem
- Customer communication

#### Detailed

- An appropriate person (e.g. an engineering manager) will manage the incident response effort
- For S1/S2 incidents:
  - A Slack channel will be created for the incident, with all relevant parties invited, to coordinate efforts and provide updates
  - A recurring Incident Response Meeting or scheduled update cadence will be established until the incident is resolved
  - Legal and executive staff will be informed as needed

#### Responsibilities of the incident manager

- The right people from all functions are actively involved at all times
- Status updates are communicated to the appropriate persons at regular intervals
- Incidents are resolved in the immediate term
- Determining necessary follow-up actions
- Assigning follow-up activities to the appropriate people
- Promptly reporting incident details which may trigger breach reporting, in writing to the appropriate executive management

Ensure the following is occurring with sufficient frequency and detail:

- Update Incident Ticket and timelines
- Document new Indicators of Compromise (IOCs)
- Perform investigative Q&A
- Apply emergency mitigations
- Plan long term mitigations
- Document Root Cause Analysis (RCA)
- Assist in customer-facing comms as needed
- Additional items as needed

### Special Considerations

#### Internal Issues

Issues where the malicious actor is an internal employee, contractor, vendor, or partner requires sensitive handling. The incident manager shall contact the VP of People or the CEO directly and will not discuss with other employees. These are critical issues where follow-up must occur.

#### Compromised Communications

Incident responders must have access to Slack available before listing themselves as incident members. If there are IT communication risks, an out of band solution will be chosen, and communicated to incident responders via email or another uncompromised method of communication.

#### Additional Requirements

- Suspected and reported events and incidents shall be documented.
- Suspected incidents shall be assessed and classified as either an event or an incident.
- Incident response shall be performed according to this plan and any associated procedures.
- All incidents shall be formally documented, and a documented root cause analysis shall be performed.
- Suspected and confirmed unauthorized access events shall be reviewed by the Incident Response Team. Breach determinations shall only be made by the incident manager in coordination with appropriate executive management.
- Sourcegraph shall promptly and properly notify customers, partners, users, affected parties, and regulatory agencies of relevant incidents or breaches in accordance with Sourcegraph policies, contractual commitments, and regulatory requirements. Sourcegraph will disclose the issue as soon as it is confirmed and initial investigations are done.
- This Incident Response Plan shall be reviewed and tested at least annually.

## Roles & Responsibilities

Every employee and user of any Sourcegraph information resources has responsibilities toward the protection of the information assets. The table below establishes the specific responsibilities of the incident responder roles.

### Response Team Members

| Roles                               | Responsibilites                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Incident Manager                    | The Incident Manager is the primary and ultimate decision maker during the response period. The Incident Manager is ultimately responsible for resolving the incident and formally closing incident response actions. Contacts can be found in the Contact Information section. The responsibilities are listed in the Incident Response Process section                                                                                                                                                                                                                                                     |
| Incident Response Team (IRT)        | The individuals who have been engaged and are actively working on the incident. All members of the IRT will remain engaged in incident response until the incident is formally resolved, or they are formally dismissed by the Incident Manager.                                                                                                                                                                                                                                                                                                                                                             |
| Engineers (Support and Development) | Qualified engineers will be placed into the on-call rotation and may act as the Incident Manager (if primary resources are not available) or a member of the IRT when engaged to respond to an incident. Engineers are responsible for understanding the technologies and components of the information systems, the security controls in place including logging, monitoring, and alerting tools, appropriate communications channels, incident response protocols, escalation procedures, and documentation requirements. When Engineers are engaged in incident response, they become members of the IRT. |
| Users                               | Employees and contractors of Sourcegraph. Users are responsible for following policies, reporting problems, suspected problems, weaknesses, suspicious activity, and security incidents and events.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Marketing                           | Marketing are responsible for working with the Incident Manager to compile communications (internal, customer-facing, and/or external), guiding the communication strategy and methods, and publishing/sending the communications related to a security incident or event. Coordinate with CE/Support/Sales on customer-impacting incidents and delivering information to key contacts.                                                                                                                                                                                                                      |
| Customers                           | Customers are responsible for reporting problems with their use of Sourcegraph services. Customers are responsible for verifying that reported problems are resolved. This includes end users of sourcegraph.com                                                                                                                                                                                                                                                                                                                                                                                             |
| Legal Counsel                       | Responsible, in conjunction with the CEO and executive management, for determining if an incident shall be considered a reportable breach. Counsel shall review and approve in writing all external breach notices before they are sent to any external party.                                                                                                                                                                                                                                                                                                                                               |
| Executive Management                | Responsible, in conjunction with the CEO and legal counsel, for determining if an incident shall be considered a reportable breach. An appropriate company officer shall review and approve in writing all external breach notices before they are sent to any external party. Sourcegraph shall seek stakeholder consensus when determining whether a breach has occurred. The Sourcegraph CEO shall make a final breach determination in the event that consensus cannot be reached.                                                                                                                       |

### Management Commitment

Sourcegraph management has approved this policy and commits to providing the resources, tools and training needed to reasonably respond to identified security events and incidents with the potential to adversely affect the company or its customers.

## Exceptions

Requests for an exception to this Policy must be submitted to and authorized by the Director of Platform and Infrastructure for approval. Exceptions shall be documented.

## Violations & Enforcement

Any known violations of this policy should be reported to the Director of Platform and Infrastructure. Violations of this policy may result in immediate withdrawal or suspension of system and network privileges and/or disciplinary action in accordance with company procedures up to and including termination of employment.

## Contact information

Contacts for IT and Engineering Management as well as executive staff and can be found in Sourcegraph’s Slack, on Bamboo, or in the Handbook.
