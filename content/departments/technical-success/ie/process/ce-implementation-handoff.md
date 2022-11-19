# CE-AE-Implementation Collaboration Overview

This document is a work in progress to give an overview of the expectations of the handoff between the customer engineering team and the implementation engineering team when a new customer requires implementation support.

# Jointly Deployed Evaluation

During the initial conversations with a customer, the CE should evaluate whether or not the customer is a candidate for a jointly deployed instance. Typical reasons a customer would be flagged for jointly deployed are:

- Sourcegraph's Cloud offering is not a viable option.
- The customer is expected to have a particularly large instance.
- There is a high probability the instance will require a Kubernetes deployment.

# Initiating an Implementation Request

If the customer is unable to utilize our Cloud option or a one-click-deployment, the CE should send a Slack request to #ask-implementation by submitting the request through the 'Implementation Request' Slack Workflow with the following information:

Implementation Services Customer Request

- Customer Name:
- Link to Salesforce Opportunity:
- Link to TDD:
- Expected Deployment Type:
- Expected Hosting Provider:
- Additional Information (if needed):

From there, the customer request will be added to the [Implementation Services Account Backlog](https://docs.google.com/spreadsheets/d/1-79Q5RwAizDY3jBXSWQwmV9G6Jv5nrHzmcvemm4KffQ/edit#gid=0) where the account/opportunity will be triaged and prioritized. All requests will be reviewed by the implementation team, Sales leadership, and CE leadership before being selected for implementation services. The triage will take into consideration:

1. Impact on upcoming fiscal year revenue
2. Overall size and technical complexity of the deployment
3. Opportunity ARR and TAM of the account
4. Account intangibles such as deployment risks, admin technical aptitude, and other contextual items that could impact the importance of utilizing a jointly deployed offering
5. Current implementation team bandwidth<br>

The CE and AE will be made aware of the qualification (or disqualification) and prioritization of the account for jointly deployed implementation services. Depending on the decision and timeline requirements, the implementation team will coordinate with the CE and AE to clearly define next steps and requirements to meet that customer's needs.

# Handoff to Implementation

As a prerequisite to a handoff from CE to Implementation, please review the [Implementation Prerequisites](implementation-prerequisites.md).

Much of the information needed by the Implementation team will come from the [Technical Design Document](https://docs.google.com/document/d/1vjETRXdUtLSTRrnMAuN6aEbR_Xx0qHacONrnI0zoPyc/edit#heading=h.y9pic5x93a9l) (TDD) written by the CE, along with the discovery questions documented in the Implementation Playbook which should provide a comprehensive understanding of project requirements. The TDD and Discovery questions should include all technical, infrastructure, project, and timeline information necessary for the implementation to plan out the customer's deployment. In order to accomplish this, the [Implementation Project Manager](../tpm/index.md) should be pulled into conversations surrounding the customer deployment during the as the customer approaching contract closure. The [Implementation Engineer](index.md) should then be engaged following completion of the initial TDD and Discovery drafts.

In the event the customer has different requirements for their production deployment from the trial outlined in the TDD, the production requirements should be documented in the TDD in a separate section.

# Customer Introductions and Other Communication

### External Communications

Once we have confirmed the evaluation that a customer will require implementation team support for their deployment, it is the CE’s responsibility to introduce the customer to the assigned implementation engineer and project manager leading the deployment. The CE should actively communicate to the customer that they will be working with an separate implementation team from the discovery phase through the end of the implementation, and a formal introductory meeting should be scheduled. From this point onward, the implementation team should be included on continued communications.

As IE involvement begins, it is imperative that the CE is setting the stage correctly for the implementation team to be successful. The AE and CE on the account should be clearly communicating what customers should expect when working with the implementation team. In addition, the Implementation Project Manager should be brought in on calls to help begin identifying a project plan for the deployment.

### Internal Communications

When the request for IE resourcing has been approved, the internal stakeholders on the project should hold a meeting to make sure any context is passed from the CE to the implementation team. This meeting is primarily to go through the TDD and ensure there is no loss of info in the handoff from the CE. From this point onward, the Implementation team (alongside the AE) will become the official owners of the customer.

# Requirements Collection and Project Planning

During discovery, requirements for the implementation should be collected. Much of this information will be gathered as part of the TDD, but,leading up to the contract being signed, the implementation team will need to collect:

- Technical Requirements
- Deployment Timelines
- Meeting Cadence with Customer Leadership and Project Team Members
- Project Staffing and Key Stakeholder Identification and Engagement
- Progress Reporting Expectations
- Roles and Responsibilities Level-Setting
- Operational Structures and Requirements
- Implementation Prerequisites
- Scope and Timeline Sign-Off
