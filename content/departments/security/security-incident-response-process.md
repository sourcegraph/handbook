# Security Incident Response Process

The aim of this document is to define the key steps required as part of responding to a security incident, in line with Sourcegraph’s Security Incident Response Policy.

## Security Incident Lead

The incident lead is responsible for resolving the incident as quickly and safely as possible. They are the DRI coordinating the incident, tasked with driving it to resolution and keeping others informed (if it’s a non-customer-impact issue) or coordinating with the messenger on communication (for customer-impact issues).

The security incident lead should be a member of the security team, and may be the same person who identified and raised the incident. For critical severity incidents, it should be the Head of Security.

The incident lead can change throughout the incident depending on severity. For example, it may start as the first responder and switch to another teammate, or rotate depending on timezone. When changing over, the current and new incident leads should meet and fully handover.

A security incident lead is responsible for:

- Following the Security Incident Checklist.
- Maintaining the list of action items and work streams, and assigning them to responders.
- Validating action items have been completed.
- Providing regular incident updates.
- Ensuring the right teammates are working on the incident.
- Handing communication within the team, with the company, and working with a messenger for customer-impacting incidents.

## Triaging a reported event and declaring an incident

When triaging a security event, follow the documented [security event response process](https://github.com/sourcegraph/security-monitoring/blob/main/docs/security-event-handling.md).

If you believe that the event report is a valid incident, then formally raise an incident in incient.io as indicated by the checklist below. Access to this channel should be determined based on the scope of the incident. You can coordinate with IT-Techops to set the channel to Private if there is evidence that communication would be visible to the attacker. However, remember that the channel cannot be set back to public if the determination changes. Keep in mind that some incidents may also involve sensitive information about employees, and treat this data carefully.

You will need to choose a severity for the incident – use the guidelines from the [Security Incident Response Policy](./security-incident-response.md#severity) to guide you. The severity of the incident will determine escalation and reporting requirements.

### Responding to Falco alerts

Follow up actions and rule explanations are documented in the [Falco playbooks](https://github.com/sourcegraph/security-monitoring/tree/main/docs/playbooks/falco) section in the incident response directory.

## Investigation, containment, and neutralization

Once the incident has been declared, the incident lead must coordinate the work required as described above.

The incident lead should create a checklist of items for the incident by following the template provided [here](https://docs.google.com/document/d/1WMXMmoPIo1amdd_FhOTKE2DDjTaCSMBooi_7OFMsaHA/edit?usp=sharing).

The incident lead is not expected to carry out all of this work themselves – they should bring in relevant team members as required.

For communication:

- Either use the #security-incidents private Slack channel or a Zoom call to coordinate dealing with
  the incident.
- All tracking of significant changes should be done via the incident tracking document in Google
  Drive.

### Escalation and internal notification

Aside from the team working on investigation and containment, other members of Sourcegraph’s team might also need to be involved. In particular, these are:

- For all S2 incidents and above, the Security Lead must immediately be notified.
- For all S2 incidents and above, the Legal team must immediately be notified.
- For all S1 incidents, the VP of Engineering must be notified.

### Client notification

Clients must be notified if Sourcegraph has confirmed that their data has been impacted during an incident. Clients should be notified:

- Within 24 hours of discovering that their data has been impacted to tell them as much
- Within 72 hours of the first notification with a detailed report on exactly what data has been compromised according to known information at the time.

When the full impact of the incident is known, clients should also be provided with a full report on exactly what data of theirs has been compromised.

### Forensic evidence collection

In the process of investigation, the team responding to the incident must collect any evidence that they think will be necessary for future investigation. Any information that helps to trace the course which an attacker has taken through Sourcegraph’s systems is potentially useful.

When convenient, this information should be stored in the [Security Incidents Google Drive](https://drive.google.com/drive/folders/12zMUAdBng6yRNMSfOTOMnXtAyQ0TPPhN), in a folder titled with the incident ID. Google Drive provides version history, ensuring that any changes to evidence can be tracked and attributed to their authors.

## Recovery & remediation

Once the attacker has been removed from the system, the next priority should be to recover the systems affected. Work with the Engineering and Operations teams as required to get systems back up and running.

For systems that have been compromised, ensure that you restore systems to the last known good state – that is, the last point at which we are confident the systems had not been compromised.

For secrets such as service account keys and passwords, ensure that these are rotated wherever there is reason to believe that they might have been compromised.

It is the security team’s job at this point to provide the other Engineering and Operations teams with the information that they need to return the business to its normal operating posture.

## Postmortem & forensic investigation

Once the attacker has been removed from the system and the immediate recovery and remediation steps have taken place, the incident manager is expected to coordinate the completion and publication of a postmortem report for all S1 and S2 severity incidents.

A template for the report can be found [here](https://docs.google.com/document/d/1g-UocctW1Zp-z5GdJ6b_Gx5ikHsMU30tWc_6qearMUo/edit). The postmortem must cover:

- The root cause of the incident
- A summary of all data and systems impacted
- Information on the attacker, where available
- Steps that could be taken by the security team to reduce the chance of this incident reoccuring
- Steps that could be taken by the wider organization to reduce the change of this incident reoccurring

All action items identified must be tagged with an owner, and the owner must be made aware of the action item.

If it is deemed safe, feel free to publish and circulate the incident tracking document and postmortem across the organisation.

### Forensic investigation

In some cases it may be necessary to conduct detailed analysis of the evidence collected during the incident. If there are the necessary skills to do this within the team, then this analysis can proceed internally. Otherwise, the team should engage external consultants to carry out this work. Consult with the Security Lead if you are unclear about what steps are required here.
