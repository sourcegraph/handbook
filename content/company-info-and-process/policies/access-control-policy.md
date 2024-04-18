# **Access Control & Credentials Management Policy**

## Purpose

The purpose of this policy is to limit access to information and information processing systems to authorized parties in order to protect our customers, employees, contractors, and other partners from harm caused by both deliberate and inadvertent misuse. Furthermore, this policy outlines Sourcegraph’s approach to credential management used for authentication on company assets. Our intent in publishing this policy is to outline information security practices intended to protect Sourcegraph’s assets, not to impose arbitrary restrictions.

## Scope

This policy applies to all Sourcegraph full-time teammates, interns, temporary contractors, and to all external parties with access to Sourcegraph systems (referred to in this policy as “users”).

## Policy

Access to information and information processing systems is limited to users with a business requirement for such access. Access rights should be granted or revoked in accordance with this Access Control Policy.

## Business Requirements of Access Control

### Access Control Policy

The level of access granted to individual Sourcegraph users should be based on the “principle of least privilege.” This principle states that users are only granted the level of access absolutely required to perform their job functions, and is dictated by Sourcegraph’s business and security requirements. Permissions and access rights not expressly granted should, by default, be prohibited.

Sourcegraph’s primary method of assigning and maintaining consistent access controls and access rights is through the implementation of Role-Based Access Control (RBAC). Wherever feasible, rights and restrictions should be allocated to groups. Individual user accounts may be granted additional permissions with a request stating “business need” and approval by the asset/system owner.

Related:

- How to submit an [application access request](../../departments/tech-ops/process/application_access_request.md)

## User Access Management

Sourcegraph requires that all personnel have a unique user identifier for system access, and that user credentials and passwords are not shared between multiple personnel. Users with multiple levels of access (e.g. administrators) should be given separate accounts for normal system use and for administrative functions wherever feasible. Root, service, and administrator accounts may use a password management system to share passwords for business continuity purposes only. Administrators should only use shared administrative accounts as needed.

### User Registration and Deregistration

Only authorized administrators are permitted to create new user accounts. User provisioning requests must be submitted to the Tech-Ops team and include approval from the asset/system owner of the system additional access is requested for. User IDs are promptly disabled or removed when users leave the organization or contract work ends. User IDs should not be re-used.

### User Access Provisioning

- Access should be restricted to only what is necessary to perform job duties
- No access should be granted earlier than the official employee start date, unless otherwise approved by People Ops and VP level or higher. A request will be submitted to Tech-Ops documenting that this approval has been given prior to access being granted.
- Access requests and rights modifications should be documented. Permissions to confidential information or information systems that process such data will be granted with approval from the asset/system owner.

### Management of Privileged Access

Granting of administrative rights is strictly controlled, and requires approval from the asset/system owner.

### User Access Reviews

System owners of production infrastructure and production operations systems should perform access rights reviews of user, administrator, and service accounts on an annual basis to verify that user access is limited to systems that are required for their job function. Access reviews will be documented.

Access reviews may include group membership as well as evaluations of any specific or exception-based permission. Access rights shall also be reviewed as part of a job transfer within the company.

### Removal & Adjustment of Access Rights

The access rights of all users should be promptly removed upon termination of their employment or contract, or when rights are no longer needed due to a change in job function or role. In the case of a separation from the company, access to core communication and production systems will be removed within 48 hours from the date indicated on the offboarding request unless otherwise specified.

## User Responsibility for the Management of Secret Authentication Information

Control and management of individual user passwords is the responsibility of all Sourcegraph full-time teammates, interns, and temporary contractors. Users should protect secret authentication information in accordance with this policy.

## Credentials Management Policy

The passwords we choose contribute to the security of our Sourcegraph-managed systems and data. The use of poor credentials in service and system can lead to disclosure of sensitive information and data breaches. In addition to being users, many of us are also Administrators and so it is especially important to be thoughtful when selecting a password. \
 \
[This](../../departments/tech-ops/process/internal-security/passwords.md) is guidance for setting passwords to Sourcegraph-managed accounts. These are strongly recommended and will be enforced at the organizational level when available.

## System and Application Access

### Information Access Restriction

Applications must restrict access to program functions and information to authorized users and support personnel in accordance with the defined Access Control policy. The level and type of restrictions applied by each application should be based on the individual application requirements, as identified by the asset/system owner. The application-specific access control policy must also conform to Sourcegraph policies regarding access controls and data management.

Prior to implementation, evaluation criteria are to be applied to application software to determine the necessary access controls and data policies. Assessment criteria include, but are not limited to:

- Sensitivity and classification of data.
- Risk to the organization of unauthorized access or disclosure of data
- The ability to, and granularity of, control(s) on user access rights to the application and data stored within the application
- Restrictions on data outputs, including filtering sensitive information, controlling output, and restricting information access to authorized personnel
- Controls over access rights between the evaluated application and other applications and systems
- Programmatic restrictions on user access to application functions and privileged instructions
- Logging and auditing functionality for system functions and information access
- Data retention and aging features

### Secure Log-on Procedures

Secure log-on controls are used to prove the identity of user and should be designed and selected in accordance with the sensitivity of data and the risk of unauthorized access It is prefered that all applications with sensitive data use an IdP provider for SSO (Okta and Google). In lieu of these options, MFA (multi factor authentication) should be enforced.

### **Multi Factor authentication (MF2) Procedures**

Multi-factor authentication will be enforced whenever possible.

### Password Management System

Systems for managing passwords should be interactive and assist Sourcegraph personnel in maintaining password standards by enforcing password strength criteria including minimum length, and password complexity where feasible.

All storage and transmission of passwords is to be protected using appropriate cryptographic protections, either through hashing or encryption. All Sourcegraph employees will be given access to a password manager to create and manage complex passwords.

### Use of Privileged Utility Programs

Use of utility programs (an application that performs computer management tasks such as virus protection, password management, file compression, etc.),or other software that might be capable of overriding system and application controls or altering system configurations must be restricted.

Management approval is required prior to the installation or use of any ad hoc or third-party system utilities.

### Access to Application Source Code

The risk to avoid is the introduction of new code in our open source Sourcegraph code by external people, therefore access to program source code and associated items, including designs, specifications, verification plans, and validation plans should be strictly controlled in order to prevent the introduction of unauthorized functionality into software, avoid unintentional changes, and protect Sourcegraph intellectual property.

All access to private source code shall follow our [GitHub Access & Permission Policy.](https://docs.google.com/document/d/1PHu0LhiybXdBenivkZy5l3A9Pq300L_YH8s0lavxLcE/edit)

### Exceptions

Requests for an exception to this policy must be submitted to the VP of Operations for approval.

## Policy Compliance

Sourcegraph will measure and verify compliance to this policy through various methods, including but not limited to, business tool reports, and both internal and external audits.

### Violations & Enforcement

Any known violations of this policy should be reported to report-policy-violation@sourcegraph.com. Failure to follow this policy can result in disciplinary action, up to and including termination.

**Policy Owner & Approver:** VP Operations

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
   <td>2022-03-20
   </td>
   <td>Nicky Van Maneen, Maureen Loughrey
   </td>
   <td>First Version
   </td>
  </tr>
  <tr>
   <td>1.1
   </td>
   <td>2022-07-18
   </td>
   <td>Nicky Van Maanen, Maureen Loughrey
   </td>
   <td>Reviewed and made changes
   </td>
  </tr>
  <tr>
   <td>1.1
   </td>
   <td>2022-07-29
   </td>
   <td>Dora Neumeier
   </td>
   <td>Reviewed and final amendments
   </td>
  </tr>
  <tr>
   <td>1.1
   </td>
   <td>2022-07-27
   </td>
   <td>Dan Adler
   </td>
   <td>Approved
   </td>
  </tr>
   <tr>
   <td>1.1
   </td>
   <td>2023-05-31
   </td>
   <td>Dora Neumeier
   </td>
   <td>Annual Review
   </td>
  </tr>
</table>
