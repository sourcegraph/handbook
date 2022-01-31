# **Access Control Policy**

**Policy Owner**: Tech Ops

**Effective Date**: Feb 1, 2022

**Last Updated Date**: Jan 25, 2022

1. **Purpose**

To limit access to information, information processing systems, and networks to authorized parties in order to protect our customers, team members, contractors, and other partners from harm caused by both deliberate and inadvertent misuse. Our intention in publishing this policy is to outline information security guidelines intended to protect Sourcegraph’s assets, not to impose restrictions.

2. **Scope**

This policy applies to all teammates and contractors of Sourcegraph and to all external parties with access to Sourcegraph engineering networks and system resources.

3. **Policy**

Access to information computing resources is limited to personnel with a business requirement for such access. Access rights shall be granted or revoked in accordance with this Access Control Policy.

4. **Business Requirements of Access Control**

## **Access Control Policy**

Sourcegraph shall determine the type and level of access granted to individual users based on the “principle of least privilege.” This principle states that users are only granted the level of access absolutely required to perform their job functions, and is dictated by Sourcegraph’s business and security requirements. Permissions and access rights not expressly granted shall be, by default, prohibited.

Sourcegraph’s primary method of assigning and maintaining consistent access controls and access rights shall be through the implementation of Role-Based Access Control (RBAC). Wherever feasible, rights and restrictions shall be allocated to groups. Individual user accounts may be granted additional permissions as needed with approval from the system owner or authorized party.

All privileged access to production systems should use Multi-Factor Authentication (MFA).

5. **User Access Management**

Sourcegraph requires that all personnel have a unique user identifier for system access, and that user credentials and passwords are not shared between multiple personnel. Users with multiple levels of access (e.g. administrators) should be given separate accounts for normal system use and for administrative functions wherever feasible. Root, service, and administrator accounts may use a password management system to share passwords for business continuity purposes only. Administrators shall only use shared administrative accounts as needed.

## **User Registration and Deregistration**

Only authorized administrators shall be permitted to create new user IDs, and may only do so upon receipt of a documented request from authorized parties. User provisioning requests must include approval from data owners or Sourcegraph management authorized to grant system access. User IDs shall be promptly disabled or removed when users leave the organization or contract work ends. User IDs shall not be re-used.

## **User Access Provisioning**

- New employees and/or contractors are not to be granted access to any Sourcegraph production systems until after they have completed all HR mandatory on-boarding tasks, which may include but is not limited to signed employment agreements, intellectual property agreements, and information security policy
- Access should be restricted to only what is necessary to perform job duties
- No access may be granted earlier than the official employee start date, unless otherwise approved by People Ops and VP level or higher. A ticket will be submitted to Tech Ops documenting that this approval has been given prior to access being granted.
- Access requests and rights modifications shall be documented in an access request ticket, Slack thread, or email. No permissions shall be granted without approval from the system or data owner or management.
- Records of all permission and privilege changes shall be maintained for no less than one year

## **Management of Privileged Access**

Granting of administrative rights shall be strictly controlled, and requires approval from the asset owner.

## **User Access Reviews**

Administrators shall perform access rights reviews of user, administrator, and service accounts on a quarterly basis to verify that user access is limited to systems that are required for their job function. Access reviews shall be documented.

Access reviews may include group membership as well as evaluations of any specific or exception-based permission. Access rights shall also be reviewed as part of any job role change, including promotion, demotion, or transfer within the company. Tech Ops is notified of these changes through Process St.

## **Removal & Adjustment of Access Rights**

The access rights of all users shall be promptly removed upon termination of their employment or contract, or when rights are no longer needed due to a change in job function or role. In the case of a separation from the company, all access will be deprovisioned within 5 business days from the date on which the offboarding request is submitted unless otherwise specified.

**Access Provisioning, Deprovisioning, and Change Procedure**

The Access Management Procedure for Sourcegraph systems can be found in Appendix A to this policy.

6. **User Responsibility for the Management of Secret Authentication Information**

Control and management of individual user passwords is the responsibility of all Sourcegraph personnel and third-party users. Users shall protect secret authentication information in accordance with the Information Security Policy.

7. **Password Policy**

Keep in mind that the passwords we choose contribute to the security of our Sourcegraph-managed systems and data. In addition to being users, many of us are also Administrators and so it is especially important to be thoughtful when selecting a password.

We have guidance for setting passwords to Sourcegraph-managed accounts. These are strongly recommended and will be enforced at the organizational level when available.

**System and Application Access**

## **Information Access Restriction**

Applications must restrict access to program functions and information to authorized users and support personnel in accordance with the defined access control policy. The level and type of restrictions applied by each application should be based on the individual application requirements, as identified by the data owner. The application-specific access control policy must also conform to Sourcegraph policies regarding access controls and data management.

Prior to implementation, evaluation criteria are to be applied to application software to determine the necessary access controls and data policies. Assessment criteria include, but are not limited to:

- Sensitivity and classification of data.
- Risk to the organization of unauthorized access or disclosure of data
- The ability to, and granularity of, control(s) on user access rights to the application and data stored within the application
- Restrictions on data outputs, including filtering sensitive information, controlling output, and restricting information access to authorized personnel
- Controls over access rights between the evaluated application and other applications and systems
- Programmatic restrictions on user access to application functions and privileged instructions
- Logging and auditing functionality for system functions and information access
- Data retention and aging features

All unnecessary default accounts must be removed or disabled before making a system available on the network. Specifically, vendor default passwords and credentials must be changed on all Sourcegraph systems, devices, and infrastructure prior to deployment. This applies to ALL default passwords, including but not limited to those used by operating systems, software that provides security services, application and system accounts, and Simple Network Management Protocol (SNMP) community strings where feasible.

## **Secure Log-on Procedures**

Secure log-on controls shall be designed and selected in accordance with the sensitivity of data and the risk of unauthorized access based on the totality of the security and access control architecture.

### **Multi Factor authentication (MF2) Procedures**

Multi-factor authentication will be enforced whenever possible.

## **Password Management System**

Systems for managing passwords should be interactive and assist Sourcegraph personnel in maintaining password standards by enforcing password strength criteria including minimum length, and password complexity where feasible.

All storage and transmission of passwords is to be protected using appropriate cryptographic protections, either through hashing or encryption. All Sourcegraph employees will be given access to 1Password to create and manage complex passwords.

## **Use of Privileged Utility Programs**

Use of utility programs, system files, or other software that might be capable of overriding system and application controls or altering system configurations must be restricted to the minimum personnel required. Systems are to maintain logs of all use of system utilities or alteration of system configurations. Extraneous system utilities or other privileged programs are to be removed or disabled as part of the system build and configuration process.

Management approval is required prior to the installation or use of any ad hoc or third-party system utilities.

## **Access to Program Source Code**

Access to program source code and associated items, including designs, specifications, verification plans, and validation plans shall be strictly controlled in order to prevent the introduction of unauthorized functionality into software, avoid unintentional changes, and protect Sourcegraph intellectual property.

All access to private source code shall be based on business need and must be logged for review and audit.

8. **Exceptions**

Requests for an exception to this Policy must be submitted to the Tech Ops Manager for approval.

9. **Violations & Enforcement**

Any known violations of this policy should be reported to the Tech Ops Manager. Violations of this policy can result in immediate withdrawal or suspension of system and network privileges and/or disciplinary action in accordance with company procedures up to and including termination of employment.
