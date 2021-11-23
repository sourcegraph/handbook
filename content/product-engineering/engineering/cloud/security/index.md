# Security team

<div style="text-align: center; margin-bottom: 1rem">
  <img src="https://storage.googleapis.com/sourcegraph-assets/security-team-logo.jpg" width="50%" alt="Shielding Sourcegraph from attackers">
</div>

We think that security is an enabler for the business. Sourcegraph is committed to proactive security, and addressing vulnerabilities in a timely manner. We approach security with a can-do philosophy, and look to achieve product goals while maintaining a positive posture, and increasing our security stance over time.

## Members

- [Diego Comas](../../../../company/team/index.md#diego-comas)
  - [André Eleuterio](../../../../company/team/index.md#andré-eleuterio)
  - [Mohammad Umer Alam](../../../../company/team/index.md#mohammad-umer-alam)
  - [Lauren Chapman](../../../../company/team/index.md#lauren-chapman)
  - [David Sandy](../../../../company/team/index.md#david-sandy)
  - FY2022 security engineer

## Contact

- [security@sourcegraph.com](mailto:security@sourcegraph.com)
- #security channel Slack.
- @sourcegraph/security on GitHub.
- [report a vulnerability](reporting-vulnerabilities.md)

## Goals and priorities

See [security goals and priorities](../../../../company/strategy/cloud/security/index.md)

## Onboarding

- New members [onboarding guide](./security-onboarding.md)

---

## Responsibilities

- Proactively improve the security of our application and infrastructure.
- Define, plan, and prioritize security work that needs to be done (and then go do that work).
- Directly contribute to our codebase (i.e., Go, TypeScript, Kubernetes, Docker, Google Cloud Platform) to secure our application and deployments, and help other engineers on our team make the necessary changes.
- [Respond to security vulnerability reports](#how-we-respond-to-security-vulnerability-reports)
  - https://github.com/sourcegraph/security-issues
- Increase our security posture by running traditional security tools such as vulnerability scanners, SAST, and DAST tools.
  - https://github.com/sourcegraph/sourcegraph/security/code-scanning
  - [Infrastructure information](./infrastructure/index.md)
  - [Security tooling](./tooling/index.md)
- Create a culture of security at Sourcegraph that empowers all of our engineers to write secure code.
- Respond to Security Incidents as per our [Security Incident Response Policy](./security-incident-response.md)

---

## How we are improving and investing in product security

- We are growing our security team to expand, develop and mature the security program
- We are embedding new security practices to improve our secure SDLC
- We are improving our internal security training for developers
- We have a security ambassador program where a security engineer is involved in the early stages of the design of new features to give input and help identifying potential weaknesses of the product
- We have developed a new vulnerability management process which will limit the number of open vulnerabilities as we will have a much closer follow up with a new SLA

---

## CI/CD Pipeline Vulnerability Scanning

- We are currently using Checkov.io to [scan our IaC](/checkov.md)

## How to work with us

### Security Ambassador Program

In an effort to work closely with our teammates and shift security focus more into the development process, we are pleased to introduce the Security Ambassador program which will align each one of our security engineers with an engineering organization.

- **What does this mean?**

  - The ambassador assigned to your organization will become very knowledgable on your team's work.
  - The ambassador will help you integrate security thought-processes into your workflow.
  - The ambassador will become your primary point of contact regarding any security concerns that may arise in your development process.
  - The ambassador will be available to join any planning, testing and implementation meetings where their input might be beneficial.

- **Why?**

  - This will allow you to get quicker responses to your security questions and concerns from someone who has a deeper understanding of your team's work.
  - This will allow us to produce a more secure product by integrating security into the early stages of product development.

- **Does this mean I can't talk to anyone else on the security team?**

  - Absolutely not. You are welcome to reach out to anyone in the security team at anytime. We encourage everyone to use the #security slack channel.

- **Who is the ambassador for my team?**
  <table>
  <tr>
   <td><strong>Org</strong>
   </td>
   <td><strong>Division/Team</strong>
   </td>
   <td><strong>Assignee</strong>
   </td>
  </tr>
  <tr>
   <td>Code Graph
   </td>
   <td>Search Core
   </td>
   <td>André
   </td>
  </tr>
  <tr>
   <td>Code Graph
   </td>
   <td>Search Product
   </td>
   <td>Lauren
   </td>
  </tr>
  <tr>
   <td>Code Graph
   </td>
   <td>Code intelligence
   </td>
   <td>André
   </td>
  </tr>
  <tr>
   <td>Code Graph
   </td>
   <td>Batch Changes
   </td>
   <td>Lauren
   </td>
  </tr>
  <tr>
   <td>Code Graph
   </td>
   <td>Code insight
   </td>
   <td>André
   </td>
  </tr>
  <tr>
   <td>Enablement
   </td>
   <td>Repo management
   </td>
   <td>David
   </td>
  </tr>
  <tr>
   <td>Enablement
   </td>
   <td>Delivery
   </td>
   <td>Mohammad
   </td>
  </tr>
  <tr>
   <td>Enablement
   </td>
   <td>Dev Experience
   </td>
   <td>Mohammad
   </td>
  </tr>
  <tr>
   <td>Enablement
   </td>
   <td>Front End Platform
   </td>
   <td>Lauren
   </td>
  </tr>
  <tr>
   <td>Cloud
   </td>
   <td>Growth
   </td>
   <td>Mohammad
   </td>
  </tr>
  <tr>
   <td>Cloud
   </td>
   <td>Extensibility
   </td>
   <td>David
   </td>
  </tr>
  <tr>
   <td>Cloud
   </td>
   <td>Devops
   </td>
   <td>André
   </td>
  </tr>
  <tr>
   <td>Cloud
   </td>
   <td>Cloud Saas
   </td>
   <td>David
   </td>
  </tr>
  </table>

### Security Questionnaires

We're always happy for teams to [request security code reviews](secure-code-review.md).

Security questionnaires for new and existing customers should [follow the process here](../../../../sales/salessecurity.md) - feel free to message us on #security too.

### Questions and Support Requests

Security questions and support requests should be raised in #security:

1. Click the lightning bolt below the Slack message box in #security
2. Select an option at the top of the menu
3. Fill out the questions
4. Tag @security-support in the resulting thread if urgent

Reach out to us on #security if you have any doubts, or for any reason feel like our process can't work for you in a particular case.

---

## How we work

[Read about our methodology and process.](process.md)
[Security Support Rotation](security-support-rotation.md)
