# **Data Management Policy**

## Purpose

To ensure that information is classified, protected, retained and securely disposed of in accordance with its importance to the organization.

## Scope

All Sourcegraph data, information and information systems.

# Policy

Sourcegraph classifies data and information systems in accordance with legal requirements, sensitivity, and business criticality in order to ensure that information is given the appropriate level of protection. Data owners are responsible for identifying any additional requirements for specific data or exceptions to standard handling requirements.

Information systems and applications shall be classified according to the highest classification of data that they store or process.

## Data Classification

To help Sourcegraph and its employees easily understand the level of security to be used for all types of information, the company has created these categories under which data can fall:

### **Restricted**

**Audience:** limited number of people can access, only under break-glass scenarios.

Following items are examples of such data:

- Customer private code
- Private code on sourcegraph.com
- Individual (non-shared) account passwords

### **Private**

**Audience:** limited number of people can access

Following items are examples of such data:

- Other customer non-personal data
- Production secrets
- Teammate and Customer Personal Data, including:
  - Data about a person that would reasonably be expected to be kept confidential
  - Government identifiers (social security number, national ID number)
  - Full date of birth
  - Performance, payroll, and other employment-related personal data
  - Demographic data, like race, religion, political views
  - Medical and/or health information
  - Data related to claims, reports, and investigations
  - Customer personal data
  - Combinations of any personal data that put someone at risk for identity theft or reputational harm
- Private repository names
- Privileged legal materials
- Company financials
- Security issues

### **Internal**

**Audience:** Sourcegraph teammates

Following items are examples of such data:

- Sourcegraph private code (infrastructure, deploy-\* repositories)
- Private RFCs
- Internal policies or processes containing sensitive business, teammate, or customer information
- Teammate Personal Data, including data that teammates share internally (such as in open
  channels), and that does not fall within the Private data category.

### **Public**

**Audience:** Public

Following items are examples of such data:

- Sourcegraph public Source code
- Public RFCs
- Personal data that teammates share publicly (such as in public handbook team pages).
- We default to public unless information belongs to one of the above categories

## **Labeling**

There is currently no internal requirement to label data according to this policy, however labels are encouraged. By labeling data according to classification level, individuals can quickly refer to this policy for proper handing.

## **Data Handling**

    A summary of data handling guidelines can be found in Appendix B.

### **Restricted Data Handling**

Restricted data is subject to the following protection and handling requirements as well as the full list under “Private Data Handling”:

- Business need-to-know required for approved business functions
- Logging and monitoring of access required
- All copies of restricted data outside of approved system(s) must be pre-approved by both Legal and Security
- Access for non-preapproved-roles requires documented approval from the data owner
- Restricted data shall be encrypted in transit over public networks and at rest
- NDA required (if disclosed to a 3rd party)

### **Private Data Handling**

Private data is subject to the following protection and handling requirements:

- Access is restricted to specific employees, roles and/or departments
- Private systems shall not allow unauthenticated or anonymous access
- Private Customer Data shall not be used or stored in non-production systems/environments
- Private data shall be encrypted in transit over public networks
- Mobile device hard drives containing private data, including laptops, shall be encrypted
- Mobile devices storing or accessing private data shall be protected by a log-on password or passcode and shall be configured to lock the screen after five (5) minutes of non-use
- Backups shall be encrypted
- Private data shall not be stored on personal phones or devices or removable media including USB drives, CD’s, or DVD’s
- Paper records shall be labeled “Private” and securely stored and disposed
- Hard drives and mobile devices used to store private information must be securely wiped prior to disposal or physically destroyed
- Transfer of rivate data to people or entities outside the company shall only be done in accordance with a legal contract or arrangement, and the explicit written permission of management or the data owner

### **Internal Data Handling**

Restricted data is subject to the following protection and handling requirements:

- Access is restricted to users with a need-to-know based on business requirements
- Restricted systems shall not allow unauthenticated or anonymous access
- Transfer of restricted data to people or entities outside the company or authorized users shall require management approval and shall only be done in accordance with a legal contract or arrangement, or the permission of the data owner
- Paper records shall be securely stored and disposed
- Hard drives and mobile devices used to store restricted information must be securely wiped prior to disposal or physically destroyed

### **Public Data Handling**

No special protection or handling controls are required for public data. Public data may be freely distributed.

## **Data Retention**

Sourcegraph shall retain data as long as the company has a need for its use, or to meet regulatory or contractual requirements. Once data is no longer needed, it shall be securely disposed of or archived. Data owners, in consultation with legal counsel, may determine retention periods for their data. Retention periods shall be documented in the Data Retention Matrix in Appendix A to this policy.

## **Data & Device Disposal**

Data classified as private shall be securely deleted when no longer needed. Sourcegraph shall assess the data and disposal practices of third-party vendors in accordance with the Third-Party Management Policy. Only third-parties who meet Sourcegraph requirements for secure data disposal shall be used for storing and processing private data.

Sourcegraph shall ensure that all private data is securely deleted from company devices prior to, or at the time of disposal.

## **Annual Data Review**

Management shall review data retention requirements during the annual review of this policy. Data shall be disposed of in accordance with this policy.

## **Legal Requirements**

Under certain circumstances, Sourcegraph may become subject to legal proceedings requiring retention of data associated with legal holds, lawsuits, or other matters as stipulated by Sourcegraph legal counsel. Such records and information are exempt from any other requirements specified within this Data Management Policy and are to be retained in accordance with requirements identified by the Legal department. All such holds and special retention requirements are subject to annual review with Sourcegraph’s legal counsel to evaluate continuing requirements and scope.

## **Policy Compliance**

Sourcegraph will measure and verify compliance to this policy through various methods, including but not limited to, business tool reports, and both internal and external audits.

## **Exceptions**

Requests for an exception to this policy must be submitted to the owner of this policy for approval and will be reviewed on a case by case basis.

## **Violations & Enforcement**

Any known violations of this policy should be reported to [report-policy-violation@sourcegraph.com](mailto:report-policy-violation@sourcegraph.com). Failure to follow this policy can result in disciplinary action, up to and including termination.

**Policy Owner:** Compliance Manager

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
   <td>2021-09-27
   </td>
   <td>Nicky Van Maneen
   </td>
   <td>First Version
   </td>
  </tr>
  <tr>
   <td>2.0
   </td>
   <td>2022-03-22
   </td>
   <td>Dora Neumeier
   </td>
   <td>Additions to Classification Matrix and retention Matrix
   </td>
  </tr>
  <tr>
   <td>2.1
   </td>
   <td>2022-04-21
   </td>
   <td>Diego Comas
   </td>
   <td>New nomenclature of the different types of classification
   </td>
  </tr>
  <tr>
   <td>2.2
   </td>
   <td>2022-04-27
   </td>
   <td>Dora Neumeier
   </td>
   <td>New classification was added as per Security “zero trust” framework requirements
   </td>
  </tr>
   <tr>
   <td>2.3
   </td>
   <td>2023-05-31
   </td>
   <td>Dora Neumeier
   </td>
   <td>Annual review (amendments to some data retention periods)
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>

# **Appendix A – Data Retention Matrix**

<table>
  <tr>
   <td><strong>System or Application</strong>
   </td>
   <td><strong>Data Description</strong>
   </td>
   <td><strong>Retention Period</strong>
   </td>
  </tr>
  <tr>
   <td>Sourcegraph SaaS Products
   </td>
   <td>Customer Data
   </td>
   <td>Up to 60 days after contract termination
   </td>
  </tr>
  <tr>
   <td>Managed Instances
   </td>
   <td>Customer Data, Partial Customer Code
   </td>
   <td>SLA is 15 days from contract termination - according to handbook guidance
   </td>
  </tr>
  <tr>
   <td>Sourcegraph AutoSupport
   </td>
   <td>Customer instance and metadata, debugging data
   </td>
   <td>Indefinite
   </td>
  </tr>
  <tr>
   <td>Sourcegraph Customer Support Tickets (Zendesk)
   </td>
   <td>Support Tickets and Cases
   </td>
   <td>Indefinite
   </td>
  </tr>
  <tr>
   <td>Sourcegraph Customer Support Phone Conversations (TalkDesk)
   </td>
   <td>Support Phone Conversations
   </td>
   <td>Indefinite
   </td>
  </tr>
  <tr>
   <td>Sourcegraph Security Event Data (Splunk)
   </td>
   <td>Security and system event and log data, network data flow logs
   </td>
   <td>On-Premise - Indefinite
<p>
AWS Instance - 1 year
   </td>
  </tr>
  <tr>
   <td>Sourcegraph Vulnerability Scan Data (Qualys)
   </td>
   <td>Vulnerability scan results and detection data
   </td>
   <td>6 months
<p>
host (asset) data is retained until removed and purged from Qualys
   </td>
  </tr>
  <tr>
   <td>Sourcegraph Customer Sales (Salesforce)
   </td>
   <td>Opportunity and Sales Data
   </td>
   <td>Indefinite
   </td>
  </tr>
  <tr>
   <td>Sourcegraph QA and Testing Data (TestRail)
   </td>
   <td>QA, testing scenarios and results data
   </td>
   <td>Indefinite
   </td>
  </tr>
  <tr>
   <td>Sourcegraph internal meeting (Zoom)
   </td>
   <td>Internal meetings
   </td>
   <td>
<ul>

<li>Deletes all cloud recordings after 30 days.

<li>Allow people to delete cloud recordings before 30 days.

<li>Allow Admin to recover cloud recordings from trash (30 days).
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Sourcegraph Customer Sales Data (Chorus)
   </td>
   <td>Opportunity, Sales, and Customer feedback Data
   </td>
   <td>Indefinite
   </td>
  </tr>
  <tr>
   <td><a href="https://workspace.google.com/products/vault/">Google Vault</a>
   </td>
   <td>Google Vault (gmail, drive, chat, and groups)
   </td>
   <td>6 months
   </td>
  </tr>
  <tr>
   <td><a href="https://slack.com/help/articles/203457187-Customize-message-and-file-retention">Slack</a>
   </td>
   <td>Company wide communication tool (data ranges from confidential to public)
   </td>
   <td>
<ul>

<li><a href="../communication/team_chat.md">https://handbook.sourcegraph.com/company-info-and-process/communication/team_chat</a>
    General retention is for 180 days (exceptions channels can be found in link above)
<ul>
</ul>
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><a href="https://help.lattice.com/hc/en-us/articles/1500001262262-Lattice-Data-Exports-and-Data-Retention-Period">Lattice</a>
   </td>
   <td>Employee feedback forms (performance 360 reviews)
   </td>
   <td>Auto-delete 90 days after a person is terminated
   </td>
  </tr>
  <tr>
   <td>Chorus
   </td>
   <td>
   </td>
   <td>180-day auto delete
   </td>
  </tr>
  <tr>
   <td>Sourcegraph alerting system(OpsGenie)
   </td>
   <td>Uptime and performance check for Managed Instances, internal data
   </td>
   <td>Indefinitely
   </td>
  </tr>
  <tr>
   <td>Sourcegraph incident management system (Incident.io)
   </td>
   <td>Private data (managed instances details, logs)
   </td>
   <td>Indefinitely
   </td>
  </tr>
  <tr>
   <td>Sourcegraph Employee Google Profile
   </td>
   <td>Private data
   </td>
   <td> 6 months
   </td>
  </tr>
</table>

# **Appendix B – Classification Rule Matrix**

<table>
  <tr>
   <td><strong>Classification Level </strong>
   </td>
   <td><strong>Impact </strong>
   </td>
   <td><strong>Storage </strong>
   </td>
   <td><strong>Disposal </strong>
   </td>
   <td><strong>Labeling </strong>
   </td>
   <td><strong>Access by any member of Sourcegraph </strong>
   </td>
   <td><strong>Copying / Email </strong>
   </td>
  </tr>
  <tr>
   <td>
    <strong>Restricted</strong>
   </td>
   <td>
    Major Impact.
    Loss or damage will seriously impede the organization’s future.
    Public or internal disclosure could cause harm to on-going business operations.
   </td>
   <td>
    Encrypted and / or Physical Access controls
   </td>
   <td>
    Electronic storage media must be irretrievably erased, degaussed and/or disposed of in a secure fashion
   </td>
   <td>
    Recommendation: Media – External and internal labels.
    or
    Hard copy – each page or file to be labeled.
    or
    Mail – address of specific person. Label on inside only.
   </td>
   <td>
    Asset Owner or Exec approval and Non-disclosure agreement for external parties.
    Business need-to-know required for approved business functions or asset owners only. Manager and data owner approval required
   </td>
   <td>
    Distribution must be protected at all times.
    Asset Owner, Security and Legal approval required for sharing externally.
    Email – encrypted email only
   </td>
  </tr>
  <tr>
   <td>
    <strong>Private </strong>
   </td>
   <td>
    Considerable Impact.
    Loss or damage COULD seriously impede the organization’s future. Public or internal disclosure could cause harm to on-going business operations.
   </td>
   <td>
    Encrypted and / or Physical Access controls
   </td>
   <td>
     Disposal – shredding or secure disposal boxes for physical assets.
   </td>
   <td>
    Recommendation:Media – External and internal labels.
    or
    Hard copy – each page or file to be labeled.
    or
    Mail – address of specific person. Label on inside only.
   </td>
   <td>
    Asset Owner or Exec approval and Non-disclosure agreement for external parties.
    Highly restricted access or asset owner only.
   </td>
   <td>
    Distribution must be protected at all times.
    Asset Owner or Exec approval for sharing.
    Email – encrypted email only
   </td>
  </tr>
  <tr>
   <td>
    <strong>Internal </strong>
   </td>
   <td>
    Minor Impact.
    Loss or damage could cause minor concerns to the organization’s future. Public or internal disclosure could cause little or no harm to on-going business operations.
   </td>
   <td>
    Encryption optional and / or Physical Access controls
   </td>
   <td>
     Disposal – shredding or secure disposal boxes Disposal – shredding or secure disposal boxes for physical assets.
   </td>
   <td>
    Recommendation: Hard copy – each page or file to be labeled.
    Soft copy - share on internal communication channels only.
   </td>
   <td>
    Non-disclosure Agreement,
    Access by any member of Sourcegraph
   </td>
   <td>
     No restrictions.
   </td>
  </tr>
  <tr>
   <td>
    <strong>Public</strong>
   </td>
   <td>
    No impact
   </td>
   <td>
    Encryption not necessary – no physical protection required
   </td>
   <td>
    Disposal – no special process required
   </td>
   <td>
    No restrictions
   </td>
   <td>
    No restrictions
   </td>
   <td>
    No restrictions
   </td>
  </tr>
</table>
