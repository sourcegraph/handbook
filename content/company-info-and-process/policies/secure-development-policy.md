# **Secure Development Policy**

## **Purpose**

To ensure that information security is designed and implemented within the development lifecycle for applications and information systems.

## **Scope**

All Sourcegraph applications and information systems that are business critical and/or process, store, or transmit sensitive data. This policy applies to all internal and external engineers and developers of Sourcegraph software and infrastructure. This policy applies to all human and/or AI-generated code.

# **Policy**

This policy describes the rules for the acquisition and development of software and systems that shall be applied to developments within the Sourcegraph organization.

## **System Change Control Procedures**

Changes to systems within the development lifecycle shall be controlled by the use of formal change control procedures.

Significant code changes must be reviewed and approved by at least one other Sourcegraph employee before being merged into any production branch.

## **Software Version Control**

All Sourcegraph software is version controlled and synced between contributors (developers). All code is written, tested, and saved in a temporary git branch before being synced to the main branch.

## **Restrictions on Changes to Software Packages**

Modifications to third-party business application packages shall be discouraged, limited to necessary changes and all changes shall be strictly controlled.

## **Secure System Engineering Principles**

Principles for engineering secure systems shall be established, documented, maintained and applied to any information system implementation efforts.

Engineering style guides and technical references can be found in the Code guidelines documentation [here](https://docs.sourcegraph.com/dev/background-information/languages).

Software developers are expected to adhere to Sourcegraph’s coding guidelines throughout the development cycle, including standards for quality, commenting, and security.

## **Secure Development Environment**

Sourcegraph shall establish and appropriately protect secure development environments for system development and integration efforts that cover the entire system development life cycle.

## **Outsourced Development**

Sourcegraph shall supervise and monitor the activity of outsourced system development. Outsourced development shall adhere to all Sourcegraph standards and policies.

## **System Security Testing**

Testing of security functionality shall be carried out during development. No code shall be deployed to Sourcegraph production systems without documented, successful test results.

## **System Acceptance Testing**

Acceptance testing programs and related criteria shall be established for new information systems, upgrades and new versions.

## **Protection of Test Data**

Test data shall be selected carefully, protected and controlled. Sensitive customer data shall be protected in accordance with all contracts and commitments. Customer data shall not be used for testing purposes without the explicit permission of the data owner and the VP of Engineering.

## **Acquisition of Third-Party Systems and Software**

The acquisition of third-party systems and software shall be done in accordance with the requirements of the Sourcegraph Third-Party Management Policy.

## **Exceptions**

Requests for an exception to this Policy must be submitted to the Security for approval.

## **Policy Compliance**

Sourcegraph will measure and verify compliance to this policy through various methods, including but not limited to, business tool reports, and both internal and external audits.

## **Violations & Enforcement**

Any known violations of this policy should be reported to [report-policy-violation@sourcegraph.com](mailto:report-policy-violation@sourcegraph.com). Failure to follow this policy can result in disciplinary action, up to and including termination.

**Policy Owner:** Head of Security

| Version | Date        | Description   | Author          | Approved by |
| ------- | ----------- | ------------- | --------------- | ----------- |
| 1.0     | 29-Apr-2022 | First version | Diego Comas     | Diego Comas |
| 1.1     | 30-May-2023 | 2023 review   | André Eleuterio | Diego Comas |
| 1.2     | 17-Aug-2023 | Minor update  | André Eleuterio | Diego Comas |
