## What we do

- [Security Support Rotation](security-support-rotation.md)

### Making sure that we release our product without high or critical vulnerabilities

- We scan our containers and IaC as defined in the CI/CD Pipeline Vulnerability Scanning section below.
- As part of the release process, we will conduct a full scan of our product using Trivy and Checkov.
- Any high and critical vulnerabilities will need to be addressed before releasing.
- The artifacts from the scans are then archived.

### Improving and investing in our product's security

We're always happy for teams to [request security code reviews](secure-code-review.md). Besides directly looking at code to improve our security, we also:

- Keep growing our security team to expand, develop and mature the security program
- Embed new security practices to improve our secure SDLC
- Continue with improving our internal security training for developers
- Have a security ambassador program where a security engineer is involved in the early stages of the design of new features to give input and help identifying potential weaknesses of the product
- Have developed a new vulnerability management process which will limit the number of open vulnerabilities as we will have a much closer follow up with a new SLA

### Monitoring and incident response

- [Security Incident Response Policy](./security-incident-response.md)
- [Security Incident Response Process](./security-incident-response-process.md)

### Risk management

The Security team manages risk via the [Information Security Risk Management Policy][0]
and the underlying [risk management process](security-risk-management-process.md).

[0]: https://docs.google.com/document/d/1dWTVx2Uzz8Eo0pG4x1b4i8CBbi4pO-U7jktbO4ihTG4/edit
