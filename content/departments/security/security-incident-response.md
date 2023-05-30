# Security Incident Response Policy

## Purpose

This document establishes the plan for managing information security incidents and events, and offers guidance for employees or incident responders who believe they have discovered, or are responding to, a security incident.

## Scope

This policy covers all information security or data privacy events or incidents.

## Incident and Event Definitions

- A security event is an observable occurrence relevant to the confidentiality, availability, integrity, or privacy of company controlled data, systems or networks.
- A security incident is a security event which results in loss or damage to the confidentiality, availability, integrity, or privacy of company controlled data, systems or networks.

## Incident Reporting & Documentation

### Reporting

If a Sourcegraph employee, contractor, user, or customer becomes aware of any
possible information security event or incident, unauthorized access, policy violation,
security weakness, or suspicious activity, they can report the incident by emailing
security-team@sourcegraph.com.

If there is strong reason to believe that the possible security incident is ongoing and
could have significant impact to data or systems belonging to Sourcegraph or its
clients, the incident should be raised by emailing security-emergency@sourcegraph.com.
This method should be used with caution as it will page the Security team immediately.

Reports should include specific details about what has been observed or discovered.

### Severity

When raising a security incident, Sourcegraph's security team will assign the
incident a severity based on the following categories:

#### S3/S4 - Low and Medium Severity

Issues meeting this severity are simply suspicions or odd behaviors. They are not verified and require further investigation. There is no clear indicator that systems have tangible risk and do not require emergency response. This includes lost/stolen laptop with disk encryption, suspicious emails, outages, strange activity on a laptop, etc.

#### S2 - High Severity

High severity issues relate to problems where an adversary or active exploitation hasn’t been proven yet, and may not have happened, but is likely to happen. This may include lost/stolen laptop without encryption, vulnerabilities with direct risk of exploitation, threats with risk or adversarial persistence on our systems (e.g.: backdoors, malware), malicious access of business data (e.g.: passwords, vulnerability data, payments information), or threats that put any individual at risk of physical harm.

#### S1 - Critical Severity

Critical issues relate to actively exploited risks and involve a malicious actor. Identification of active exploitation is required to meet this severity category.

## Incident Response Process

In order to standardize the process of incident response and ensure that all required
steps are followed when responding to an incident, a process document must be made
available to all members of the security team. The document should cover all steps
of the incident response process, including:

- Documentation requirements
- Escalation steps
- Client notification requirements
- Post-incident processes, such as postmortem and forensics

The incident response process must be tested at least annually.

### Special Considerations

#### Internal Issues

Issues where the malicious actor is an internal employee, contractor, vendor, or partner requires sensitive handling. The incident manager shall contact the VP of People or the CEO directly and will not discuss with other employees. These are critical issues where follow-up must occur.

## Roles & Responsibilities

Every employee and user of any Sourcegraph information resources has responsibilities toward the protection of the information assets. The table below establishes the specific responsibilities of the incident responder roles.

### Response Team Members

| Roles                               | Responsibilites                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Incident Manager                    | The Incident Manager is the primary and ultimate decision maker during the response period. The Incident Manager is ultimately responsible for resolving the incident and formally closing incident response actions. Contacts can be found in the Contact Information section. The responsibilities are listed in the Incident Response Process section                                                                                                                                                                                                                                                     |
| Incident Response Team (IRT)        | The individuals who have been engaged and are actively working on the incident. All members of the IRT will remain engaged in incident response until the incident is formally resolved, or they are formally dismissed by the Incident Manager.                                                                                                                                                                                                                                                                                                                                                             |
| Engineers (Support and Development) | Qualified engineers will be placed into the on-call rotation and may act as the Incident Manager (if primary resources are not available) or a member of the IRT when engaged to respond to an incident. Engineers are responsible for understanding the technologies and components of the information systems, the security controls in place including logging, monitoring, and alerting tools, appropriate communications channels, incident response protocols, escalation procedures, and documentation requirements. When Engineers are engaged in incident response, they become members of the IRT. |
| Users                               | Employees and contractors of Sourcegraph. Users are responsible for following policies, reporting problems, suspected problems, weaknesses, suspicious activity, and security incidents and events.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Marketing                           | Marketing are responsible for working with the Incident Manager to compile communications (internal, customer-facing, and/or external), guiding the communication strategy and methods, and publishing/sending the communications related to a security incident or event. Coordinate with CE/ce-support/support/Sales on customer-impacting incidents and delivering information to key contacts.                                                                                                                                                                                                           |
| Customers                           | Customers are responsible for reporting problems with their use of Sourcegraph services. Customers are responsible for verifying that reported problems are resolved. This includes end users of sourcegraph.com                                                                                                                                                                                                                                                                                                                                                                                             |
| Legal Counsel                       | Responsible, in conjunction with the CEO and executive management, for determining if an incident shall be considered a reportable breach. Counsel shall review and approve in writing all external breach notices before they are sent to any external party.                                                                                                                                                                                                                                                                                                                                               |
| Executive Management                | Responsible, in conjunction with the CEO and legal counsel, for determining if an incident shall be considered a reportable breach. An appropriate company officer shall review and approve in writing all external breach notices before they are sent to any external party. Sourcegraph shall seek stakeholder consensus when determining whether a breach has occurred. The Sourcegraph CEO shall make a final breach determination in the event that consensus cannot be reached.                                                                                                                       |

### Management Commitment

Sourcegraph management has approved this policy and commits to providing the resources, tools and training needed to reasonably respond to identified security events and incidents with the potential to adversely affect the company or its customers.

## Contact information

Contacts for IT and Engineering Management as well as executive staff and can be found in Sourcegraph’s Slack, on Bamboo, or in the Handbook.

## Exceptions

Requests for an exception to this Policy must be submitted to and authorized by the Director of Platform and Infrastructure for approval. Exceptions shall be documented.

## Violations & Enforcement

Any known violations of this policy should be reported to report-policy-violation@sourcegraph.com. Failure to follow this policy can result in disciplinary action, up to and including termination.

**Policy Owner:** Head of Security

| Version | Date        | Description              | Author          | Approved by |
| ------- | ----------- | ------------------------ | --------------- | ----------- |
| 1.0     | 31-Jul-2021 | First version            | André Eleuterio | Diego Comas |
| 1.1     | 30-May-2023 | 2023 review - no updates | André Eleuterio | Diego Comas |
