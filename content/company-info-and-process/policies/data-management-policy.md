# Data Management Policy

1. ## Purpose

   To ensure that information is classified, protected, retained and securely disposed of in accordance with its importance to the organization.

2. ## Scope

   All Sourcegraph data, information and information systems.

3. ## Policy

   Sourcegraph classifies data and information systems in accordance with legal requirements, sensitivity, and business criticality in order to ensure that information is given the appropriate level of protection. Data owners are responsible for identifying any additional requirements for specific data or exceptions to standard handling requirements.
   Information systems and applications shall be classified according to the highest classification of data that they store or process.

4. ## Data Classification

   To help Sourcegraph and its employees easily understand the level of security to be used for all types of information, the company has created these categories under which data can fall:

   ### Restricted: limited number of people can access, only under break-glass scenarios.

   - Customer private code
   - Private code on sourcegraph.com
   - Individual (non-shared) account passwords

   ### Private: limited number of people can access

   - Other customer non-personal data
   - Production secrets
   - Private customer repository names
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
   - Privileged legal materials (e.g Employment contracts)
   - Security issues

   ### Internal: Sourcegraph teammates have access

   - Sourcegraph private code (infrastructure, deploy-\* repositories)
   - Private RFCs
   - Company financials
   - Internal policies or processes containing sensitive business, teammate, or customer information
   - Teammate Personal Data, including data that teammates share internally (such as in open Slack channels), and that does not fall within the Private data category.

   ### Public:

   - Sourcegraph public source code
   - Public RFCs
   - Personal data that teammates share publicly (such as in public Handbook pages).
   - We default to public unless information belongs to one of the above categories

5. ## Labeling

   There is currently no internal requirement to label data according to this policy, however labels are encouraged. By labeling data according to classification level, individuals can quickly refer to this policy for proper handing.

6. ## Data Handling
   A summary of data handling guidelines can be found in Appendix B.

## Confidential Data Handling

- Confidential data is subject to the following protection and handling requirements:
- Access for non-preapproved-roles requires documented approval from the data owner
- Access is restricted to specific employees, roles and/or departments
- Confidential systems shall not allow unauthenticated or anonymous access
- Confidential Customer Data shall not be used or stored in non-production systems/environments
- Confidential data shall be encrypted in transit over public networks
- Mobile device hard drives containing confidential data, including laptops, shall be encrypted
- Mobile devices storing or accessing confidential data shall be protected by a log-on password or passcode and shall be configured to lock the screen after five (5) minutes of non-use
- Backups shall be encrypted
- Confidential data shall not be stored on personal phones or devices or removable media including USB drives, CD’s, or DVD’s
- Paper records shall be labeled “confidential” and securely stored and disposed
- Hard drives and mobile devices used to store confidential information must be securely wiped prior to disposal or physically destroyed
- Transfer of confidential data to people or entities outside the company shall only be done in accordance with a legal contract or arrangement, and the explicit written permission of management or the data owner

## Internal Data Handling

Restricted data is subject to the following protection and handling requirements:

- Access is restricted to users with a need-to-know based on business requirements
- Restricted systems shall not allow unauthenticated or anonymous access
- Transfer of restricted data to people or entities outside the company or authorized users shall require management approval and shall only be done in accordance with a legal contract or arrangement, or the permission of the data owner
- Paper records shall be securely stored and disposed
- Hard drives and mobile devices used to store restricted information must be securely wiped prior to disposal or physically destroyed

## Public Data Handling

No special protection or handling controls are required for public data. Public data may be freely distributed.

7. ## Data Retention
   Sourcegraph shall retain data as long as the company has a need for its use, or to meet regulatory or contractual requirements. Once data is no longer needed, it shall be securely disposed of or archived. Data owners, in consultation with legal counsel, may determine retention periods for their data. Retention periods shall be documented in the Data Retention Matrix in Appendix A to this policy.
8. ## Data & Device Disposal

   Data classified as confidential shall be securely deleted when no longer needed. Sourcegraph shall assess the data and disposal practices of third-party vendors in accordance with the Third-Party Management Policy. Only third-parties who meet Sourcegraph requirements for secure data disposal shall be used for storing and processing confidential data.
   Sourcegraph shall ensure that all confidential data is securely deleted from company devices prior to, or at the time of disposal.

9. ## Annual Data Review

   Management shall review data retention requirements during the annual review of this policy. Data shall be disposed of in accordance with this policy.

10. ## Legal Requirements

    Under certain circumstances, Sourcegraph may become subject to legal proceedings requiring retention of data associated with legal holds, lawsuits, or other matters as stipulated by Sourcegraph legal counsel. Such records and information are exempt from any other requirements specified within this Data Management Policy and are to be retained in accordance with requirements identified by the Legal department. All such holds and special retention requirements are subject to annual review with Sourcegraph’s legal counsel to evaluate continuing requirements and scope.

11. ## Policy Compliance

    Sourcegraph will measure and verify compliance to this policy through various methods, including but not limited to, business tool reports, and both internal and external audits.

12. ## Exceptions

    Requests for an exception to this policy must be submitted to the owner of this policy for approval and will be reviewed on a case by case basis.

13. ## Violations & Enforcement
    Any known violations of this policy should be reported to report-policy-violation@sourcegraph.com. Failure to follow this policy can result in disciplinary action, up to and including termination.

### Policy Owner: **Compliance Manager**
