# CE-Implementation Collaboration Overview

This document is a work in progress to give an overview of the expectations of the handoff between the customer engineering team and the implementation engineering team when a new customer requires implementation support.

# Jointly Managed Evalutation

During the initial conversations with a customer, the CE should evaluate whether or not the customer is a candidate for a jointly managed instance. Typical reasons a customer would be flagged for jointly managed are:

- Sourcegraph's Cloud offering is not a viable option.
- The customer is expected to have a particularly large instance.
- There is a high probability the instance will require a Kubernetes deployment.

# Initiating an IE Request

If the customer is unable to utilize our Cloud option or a one-click-deployment, the CE should send a Slack request to [#ask-implementation](https://sourcegraph.slack.com/archives/C0418GDBT7S) with the following information:

Jointly-Managed Implementation Request
- Customer Name:
- Link to Salesforce Opportunity:
- Link to TDD:
- Expected Deployment Type:
- Expected Hosting Provider:
- Additional Information (if needed):

From there, the implementation team will add the customer to the [Jointly-Managed Backlog](https://docs.google.com/spreadsheets/d/1v36cFlcWGEGENKGGTsElCEP4_ZhIQd2mhgpwDxRPtGM/edit#gid=0) where the account/opportunity will be triaged and prioritized. The triage will take into consideration:

1. Overall size and technical complexity of the deployment
2. Opportunity ARR and TAM of the account
3. Account intangibles such as deployment risks, admin technical aptitude, and other contextual items that could impact the importance of a jointly managed deployment
4. Current bandwidth 
 Note: the TDD should outline how large they are (including the number of expected users, repos, and code hosts) and a brief description of why they will likely need a jointly managed instance.

The CE and AE will be made aware of the qualification (or disqualification) and prioritization of the account for jointly-managed implementation services. Depending on the decision and timeline requirements, the implementation team will coordinate with the CE and AE to clearly define next steps and requirements to meet that customer's needs.

# Handoff to Implementation

As a prerequisite to a handoff from CE to Implementation, the Implementation team must review and sign off on the [Technical Design Document](https://docs.google.com/document/d/1vjETRXdUtLSTRrnMAuN6aEbR_Xx0qHacONrnI0zoPyc/edit#heading=h.y9pic5x93a9l) (TDD) written by the CE and a high-level sense of project requirements should be established. The TDD should include all technical information necessary for the implementation to plan out the customer's deployment, giving the implementation team a much clearer understanding of the scope of the deployment as it was agreed upon between the customer and Sourcegraph. In order to accomplish this, the [Implementation Project Manager](../tpm/index.md) should be pulled into conversations surrounding the customer deployment during the as the customer approaching contract closure. The [Implementation Engineer](index.md) should then be engaged following completion of the initial TDD draft.

In the event the customer has different requirements for their production deployment from the trial outlined in the TDD, the production requirements should be documented in the TDD in a separate section.

# Customer Introductions and Other Communication

### External Communications

Once we have confirmed the evalutation that a customer will require implementation team support for their deployment, it is the CE’s responsibility to introduce the customer to the assigned implementation engineer and project manager leading the deployment. The CE should actively communicate to the customer that they will be working with an seperate implementation team from the discovery phase through the end of the implementation, and a formal introductory meeting should be scheduled. From this point onward, the implementation team should be included on continued communications.

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
