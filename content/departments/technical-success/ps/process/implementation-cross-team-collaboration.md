# Implemenation Cross-Team Collaboration Overview

This document outlines the processes for collaborating with Implementation Engineering and pulling the team into customer deployments and migrations.

# Evaluation for IE-led Deployments and Migrations

### Production Deployments

Throughout the pre-sales processes, particulary Solutions Mapping, the CE should be determining the expected deployment method and overally expected complexity of the deployment for their prospective customers. While reasons for pulling IE into a customer deployment can vary, the typical situation will be:

- Sourcegraph Cloud is not a viable option.
- The customer is expected to have a particularly large or complex instance.
- There is a high probability the instance will require a Kubernetes deployment.

### Production Migrations

IE can also be pulled in if the customer is going through a Production Instance Migration. Applicable migrations include:

- Moving from a simple self-hosted deployment (i.e. Machine Image or Docker Compose) to a more complex self-hosted deployment (i.e. Kubernetes)
- Moving from a self-hosted deployment to Sourcegraph Cloud

<em>Note - If you need help answering deployment related questions from a customer, but don't necessarily need a full IE-led deployment, always feel free to reach out to #ask-implementation</em>

# Initiating an Implementation Request

To initiate an implementation request, the 'Implementation Request' Slack Workflow should be followe in #ask-implementation. This request should include:

- Customer Name:
- Request Type:
- Expected Deployment Method:
- Expected Hosting Provider:
- Link to Salesforce Opportunity:
- Links to Technical Design artifacts:
- Additional Information (if needed):

From there, the customer request will be added to the [Implementation Services Account Backlog](https://docs.google.com/spreadsheets/d/1-79Q5RwAizDY3jBXSWQwmV9G6Jv5nrHzmcvemm4KffQ/edit#gid=0) where the account/opportunity will be triaged and prioritized. All requests will be reviewed by the implementation team and, if needed, Sales/TS leadership before being selected for implementation services. The triage will take into consideration:

1. Impact on upcoming fiscal year revenue
2. Overall size and technical complexity of the deployment
3. Opportunity ARR and TAM of the account
4. Account intangibles such as deployment risks, admin technical aptitude, and other contextual items that could impact the importance of utilizing a jointly deployed offering
5. Current implementation team bandwidth<br>

The CE and AE will be made aware of the qualification (or disqualification) and prioritization of the account for jointly deployed implementation services. Depending on the decision and timeline requirements, the implementation team will coordinate with the CE and AE to clearly define next steps and requirements to meet that customer's needs.

# Handoff to Implementation

If the deployment is selected to be IE-led, The CE will be asked to provide a fully documented Technical Design Document and completed Discovery Questionnaire documented in the Implementation Playbook provided by the IE team. The TDD and Discovery questions should include all technical, infrastructure, project, and timeline information necessary for the implementation to plan out the customer's deployment.

Leading up to deal close, the CE should schedule an internal meeting to level-set on the customer, discuss any open questions, and plan IE's introduction to the customer. Following deal close, the CE should work with the customer to schedule an introductory meeting for the Implementation Team to meet the customer and kick-off the deployment. Note, depending on timing, it's preferable that this kick-off is done in conjuction with TA's Partnership Kickoff.

# Requirements Collection and Project Planning

During discovery, requirements for the implementation should be collected. Much of this information will be gathered as part of the TDD, but,leading up to the contract being signed, the implementation team will need to collect:

- Technical Requirements
- Deployment Timelines
- Meeting Cadence with Customer Leadership and Project Team Members
- Project Staffing and Key Stakeholder Identification and Engagement
- Progress Reporting Expectations
- Roles and Responsibilities Level-Setting
- Implementation Prerequisites
- Scope and Timeline Sign-Off

# Handoff from Implementation to TA

Approximately 3 weeks from deployment completion, the Implementation Team should pull in the TA to begin planning user onboarding. IE and TA should be in constant communication to ensure full trasparency on the status of the deployment and make sure that the customer is staged for timely onboarding upon completion of the deployment. Following completion of the deployment, IE should make sure any deployment related documentation is available ot TA (and Support) within Vitally.
