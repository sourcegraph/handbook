# **Business Continuity and Disaster Recovery Policy**

## **Purpose**

The purpose of this business continuity plan is to prepare Sourcegraph in the event of extended service outages caused by factors beyond our control (e.g. natural disasters, man-made events, etc.), and to restore services to the widest extent possible in a minimum time frame.

## **Scope**

All Sourcegraph production operations and IT systems that are business critical. This policy applies to all employees of Sourcegraph and to all relevant external parties, including but not limited to Sourcegraph consultants and contractors.

# **Policy**

In the event of a major disruption to production services and a disaster affecting the availability and/or security of the Sourcegraph assets, senior managers and executive staff shall determine mitigation actions.

A disaster recovery test and the business continuity plan(s), including a test of backup restoration processes, shall be performed on an annual basis.

Continuity of information security shall be considered along with operational continuity.

In the case of an information security event or incident, refer to the Security Incident Response Policy.

## **Communications and Escalation**

Executive staff should be notified of any disaster affecting Sourcegraph Corporate IT or production operations.

Communications shall take place over any available regular channels including Slack, email, phone, messaging applications and online meeting tools.

A key contacts list shall be maintained.

## **Roles and Responsibilities**

<table>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Responsibility</strong>
   </td>
  </tr>
  <tr>
   <td>Security team
   </td>
   <td>The Security team shall coordinate the necessary BC/DR efforts with all impacted teams to mitigate losses and recover the corporate tools and information systems.
   </td>
  </tr>
  <tr>
   <td>Departmental Heads
   </td>
   <td>Each department head shall be responsible for communications with their departmental staff and any actions needed to maintain continuity of their business functions. Departmental heads shall communicate regularly with executive staff and the Tech Ops Manager.
   </td>
  </tr>
  <tr>
   <td>Managers 
   </td>
   <td>Managers shall be responsible for communicating with their direct reports and providing any needed assistance for staff to continue working from alternative locations.
   </td>
  </tr>
  <tr>
   <td>Head of Customer Support 
   </td>
   <td>The Head of Customer Support, in conjunction with the CEO and Director of Global Communications shall be responsible for any external and client communications regarding any disaster or business continuity actions that are relevant to customers and third parties.
   </td>
  </tr>
  <tr>
   <td>VP of Engineering
   </td>
   <td>The VP of Engineering, in conjunction with the Head of Customer Support, shall be responsible for leading efforts to maintain continuity of Sourcegraph services to customers during a disaster.
   </td>
  </tr>
  <tr>
   <td>VP of People
   </td>
   <td>The VP of People shall be responsible for internal communications to employees as well as any action needed to maintain physical health and safety of the workforce.
   </td>
  </tr>
</table>

## **Continuity of Critical Services**

Sourcegraph’s Business Continuity Plan (BCP) has been developed to guide the organization’s response, recovery, and restoration of operations following disruption arising from an incident or crisis. The BCP has been tailored to meet the requirements of specific disruption scenarios and address the business’s needs in those circumstances in order to maintain continuity of product and service delivery and/or essential internal functioning.

The BCP is made up of a set of comprehensive tactical/operational response plans that all teams across the organization can leverage to maintain continuity of their operations. Tactical/operational response plans address specific scenarios that impact either the Enterprise as a whole, or in some cases a smaller subset of teams.

The BCPs can be found [here](https://drive.google.com/drive/u/0/folders/1MiDf6B4YWRR2ryPYINd_4GgEAoNrdMm9).

## **Information Security Continuity**

Sourcegraph requires continuity of the information security controls it implements on its information technology systems and capabilities during any disruption, and as such assurance of the confidentiality, integrity and availability of data and infrastructure under adverse conditions is paramount.

The BCMP shall contribute to ensuring that:

- All staff working remotely are required to use secure remote connection mechanisms. Data in-transit across these mechanisms will be encrypted via suitable algorithms and benefits from two-factor authentication;
- Networks and other information technology assets are monitored regardless of location;
- Information systems capacity requirements are continually monitored where headcount, technical resources, technology, vendors etc are all considered to ensure current practices are sufficient, appropriate and effective;
- Information processing facilities and services on-premises and within the Cloud are implemented with sufficient redundancy to meet availability requirements.
- Continuity of information security controls shall be validated, evaluated and reviewed periodically as part of overall testing and exercising of the BCP.

## **Reporting and Escalating Incidents**

Any member of staff may report an incident or disruption, and in the first instance should attempt to notify their immediate line manager, or if they are unavailable, a more senior manager in the department.

An initial assessment of the circumstances should indicate if the situation is causing only local disruption i.e. likely to be graded as ‘minor’, or if the scenario may be causing wider disruption to other parts of the business and will therefore be ‘significant’ or ‘critical’.

The team manager receiving the initial notification of a potential disruption must:

- Make an initial assessment of the situation and determine an initial severity grading;
- Decide if it is a scenario/disruption that can be resolved through local remediation with/without invoking a tactical BC response plan;
- Notify the Security team to brief them of the situation, agree the severity rating, any plans to be invoked, and the cadence of updates to be provided;
- If the scenario is agreed to be ‘minor’, supervise local activities to resolve the incident and provide updates as appropriate;

In the event that the initial incident grading is clearly judged to be higher than ‘minor’ either:

- Notify the Security Team via their emergency email immediately, who can then review the circumstances and initiate the relevant tactical BC Plan.

## **Investigation and Response**

During the response to a disruption by either a specific business unit or the Security team, the following key actions shall be completed in addition to any other activities undertaken:

- Consult the BCP to invoke relevant tactical response plans;
- Ensure all appropriate corrective actions completed to reinstate affected functions or services take into account applicable recovery time and recovery point objectives as well as maximum tolerable periods of disruption;
- Investigate and determine the root cause of the disruption;
- Fully document and record all decisions taken on an incident log and create a final incident management report for review.

## **Stand Down**

A stand down of personnel and resources can be declared in one of two ways:

- If the response involved a ‘minor’ incident then the stand down can be declared by the local team manager who was coordinating resolution of the disruption, in agreement with the Security team.
- The de-escalation of activity or full stand down from an incident or crisis shall be declared by the Security team lead, or an executive team member, at the appropriate time.

## **Debrief and Remediation**

It is vital that all parties involved in the management of either a local or wider response to an incident or crisis engage in debriefing and post-incident evaluation exercises. This will assist in identifying both processes that worked well and any lessons-learned that can be utilized for continual improvement of response activities.

## **Exceptions**

Requests for an exception to this Policy must be submitted to the Security Engineering Manager for approval and shall be documented.

## **Policy Compliance**

Sourcegraph will measure and verify compliance to this policy through various methods, including but not limited to, business tool reports, and both internal and external audits.

# **Violations & Enforcement**

Any known violations of this policy should be reported to [report-policy-violation@sourcegraph.com](mailto:report-policy-violation@sourcegraph.com). Failure to follow this policy can result in disciplinary action, up to and including termination.

**Policy Owner:** Security Engineering Manager

<table>
  <tr>
   <td><strong>Version</strong>
   </td>
   <td><strong>Date</strong>
   </td>
   <td><strong>Author/Reviewer</strong>
   </td>
   <td><strong>Comments</strong>
   </td>
  </tr>
  <tr>
   <td>1.0
   </td>
   <td>24-Jan-2022
   </td>
   <td>Diego Comas
   </td>
   <td>First Version
   </td>
  </tr>
  <tr>
   <td>2.0
   </td>
   <td>26-07-2002
   </td>
   <td>Dora Neumeier
   </td>
   <td>Updates after annual BC Plan testing 
   </td>
  </tr>
  <tr>
   <td>2.0
   </td>
   <td>26-07-22
   </td>
   <td>Diego Comas
   </td>
   <td>Reviewed & Approved
   </td>
  </tr>
  <tr>
   <td>2.0
   </td>
   <td>31-05-23
   </td>
   <td>Dora Neumeier
   </td>
   <td>Annual review (also reviewed as part of the BC testing)
   </td>
  </tr>
</table>
