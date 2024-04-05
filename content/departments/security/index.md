<div style="text-align: center; margin-bottom: 1rem">
  <img src="https://storage.googleapis.com/sourcegraph-assets/Security-AsterRisk-Logo-transparent.png" width="188" height="349" align=right alt="Aster Risk">
</div>

# Security team

We think that security is an enabler for the business. Sourcegraph is committed to proactive security, and addressing vulnerabilities in a timely manner. We approach security with a can-do philosophy, and look to achieve product goals while maintaining a positive posture, and improving our security stance over time.

- [Report a vulnerability](reporting-vulnerabilities.md)
- [Report an incident](./security-incident-response.md#reporting)

Please visit our Security Trust Portal for all of Sourcegraph's latest information on the security, reliability, privacy, and compliance of our product.

- [Security Trust Portal](https://security.sourcegraph.com)

## Members

{{generator:product_team.security}}

## Contact

We're here to help so reach out to us at [security@sourcegraph.com](mailto:security@sourcegraph.com) with any questions you may have. Sourcegraph employees can reach us in the #security Slack channel or tag us using @sourcegraph/security on GitHub or @sourcegraph/security-code-review for a code review.

Security questions and support requests should be raised in #security:

1. Click the lightning bolt below the Slack message box in #security
2. Select an option at the top of the menu
3. Fill out the questions
4. Tag @security-support in the resulting thread if urgent

### Security Attestations & Questionnaires

Sourcegraph's security team puts great importance on verification and attestation through industry standards when it comes to our security practices and posture. Please find all the information on attestation evidence (SOC 2, pen-tests, etc.) and our Security Trust Portal [here](./security-trust-center.md).

Security questionnaires for new and existing customers should [follow the process here](../sales/process/salessecurity.md)—feel free to message us on #security too.

Reach out to us on #security if you have any doubts, or for any reason feel like our process can't work for you in a particular case.

### Slack acknowledgement

It is essential to remove assumptions/uncertainty around whether teammates have seen, understood, or acted on a message in an async-first communication environment.
To assist in this regard, we provide the following guideline for teammates to follow when communicating and responding in Slack.

**The most important thing to remember is not which emoji to use, but rather to remember to acknowledge and do it unambiguously.**

_When acknowledging a request:_

- `:thumbsup:` (👍) = I see the request and will action it
- `:white_check_mark:` (✅) = I have completed my action on the request

_When acknowledging a statement:_

- `:thumbsup:` 👍 = I agree with the statement or I have taken note of it
- `:thumbsdown:` 👎 = I disagree with a statement—encouraged to always follow up with a written response

_When acknowledging a question:_

You should provide a written response unless it's a simple yes/no question, in which case `:thumbs-up:` (👍)/`:thumbs-down:` (👎) is acceptable.

## Security Ambassador Program

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

  - Absolutely not. You are welcome to reach out to anyone in the security team at anytime. We encourage everyone to use the #discuss-security slack channel.

- **Who is the ambassador for my team?**
<table>
  <tr>
   <td>
<strong>Team Name</strong>
   </td>
   <td><strong>Ambassador</strong>
   </td>
  </tr>
  <tr>
   <td>Cody AI
   </td>
   <td>Will
   </td>
  </tr>
  <tr>
   <td>Cody Growth Enterprise
   </td>
   <td>André
   </td>
  </tr>
  <tr>
   <td>Cody Growth PLG
   </td>
   <td>Will
   </td>
  </tr>
  <tr>
   <td>Cody Product Experience
   </td>
   <td>Dora
   </td>
  </tr>
  <tr>
   <td>Cloud Ops
   </td>
   <td>André
   </td>
  </tr>
  <tr>
   <td>Core Services
   </td>
   <td>Vincent
   </td>
  </tr>
  <tr>
   <td>Dev Infra
   </td>
   <td>Mohammad
   </td>
  </tr>
  <tr>
   <td>Release
   </td>
   <td>Dora
   </td>
  </tr>
  <tr>
   <td>Graph
   </td>
   <td>Shiva
   </td>
  </tr>
  <tr>
   <td>Search
   </td>
   <td>Vincent
   </td>
  </tr>
  <tr>
   <td>Source
   </td>
   <td>Vincent
   </td>
  </tr>
  <tr>
   <td>Search Suite
   </td>
   <td>Shiva
   </td>
  </tr>
  <tr>
   <td>Tech Ops
   </td>
   <td>Mohammad
   </td>
  </tr>
</table>

---

## Interviews

Interviews for candidates looking to join the Security team broadly follow the
[standard interview process][interview-process], with two security-specific
technical interviews. The nature of the technical interview will depend on the
depth of your prior security experience.

For early career security engineers, there will be two case-study based technical
interviews. The case studies will look at different areas of your security-based
knowledge in the context of real-world examples that you might encounter during
your time at Sourcegraph.

Experienced security engineers will have one resume-based technical deep dive,
which will cover prior experience in the security field, and how this experience
might be relevant to Sourcegraph. The second technical interview is an
[application security walkthrough](./appsec-walkthrough.md), where candidates will
walk us through a code example of their choice and discuss how they would review
it from a security perspective.

If you are unsure about which interview set you will be doing, reach out to the
recruiter you are working with for more information!

## Onboarding

- New members [onboarding guide](./security-onboarding.md)

## Security infrastructure and tooling

See [tooling](./tooling/index.md) for a list of active tools we use and
[infrastructure](./infrastructure/index.md) for more information on the infrastructure
that we maintain.

---

## Responsibilities

- Proactively improve the security of our application and infrastructure. Includes [continuous code reviews](./continuous-code-review-process.md)
- Define, plan, and prioritize security work that needs to be done (and then go do that work).
- Directly contribute to our codebase (i.e., Go, TypeScript, Kubernetes, Docker, Google Cloud Platform) to secure our application and deployments, and help other engineers on our team make the necessary changes.
- [Respond to security vulnerability reports](#how-we-respond-to-security-vulnerability-reports)
  - https://github.com/sourcegraph/security-issues
- Increase our security posture by running traditional security tools such as vulnerability scanners, SAST, and DAST tools.
  - [Security tooling](./tooling/index.md)
- Create a culture of security at Sourcegraph that empowers all of our engineers to write secure code.
- Respond to Security Incidents as per our [Security Incident Response Policy](./security-incident-response.md)

More detailed description of our responsibilities and what we do, can be found [here](what-we-do.md).

---

## Security Policies

We are responsible for maintaining company-wide security policies. You can find them [here](../../company-info-and-process/policies).

## Secure coding guidelines

The secure coding guidelines contain information on how to address and prevent certain types of vulnerabilities. It's a required read for engineers at Sourcegraph and is finished by completing a short assessment. The training and guidelines can be found [here](./secure-code-training.md).

## RFC reviews

Security should be added as an approver to the RFC if it:

- Proposes changing handling of customer data
- Proposes updates or new infrastructure
- Proposes accepting risk instead of other tradeoffs

We would much rather take a look at RFCs we didn't need to than miss important RFCs. When in doubt, definitely ask us for a review.

## Data Sharing

Please read about our data sharing practises and guidelines [here](../../company-info-and-process/policies/data-sharing.md).

# Misc Links

- [Code Ownership Matrix](../engineering/dev/process/engineering_ownership.md)

[interview-process]: ../people-talent/talent/process/engineering_interview_process_candidates.md#standard-interview-process
