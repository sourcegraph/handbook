# Implementation Overview

This document is an overview of the processes followed by the Implementation Team when involved in a customer implementation project. It is specific to the process for customers utilizing the _Jointly Deployed_ offering with assistance from the Implementation Team. Ad-hoc requests for support from the Implementation Team do not follow this process, but the Implementation Team may require pieces of this process to be completed in specific scenarios.

For information on recommended deployment types and strategies, visit [Implementation Strategies](impl-strategies.md).

# Implementation Team Use Cases

What is the main scope of work for the Implementation Team?

#### Complex Production Deployments

This is will be the primary use case for the Implementation Team. Following a simple trial, the CE should identify that the customer will require a complex self-hosted deployment and follows the processes to engage the Implementation Team. If the customer is selected for implementation services, the Implementation Team should be engaged leading up to contract closure, at which point the Implementation Team takes full ownership of the implementation and the customer from a technical perspective.

#### Production Instance Migrations or Feature Expansions

There are 3 main components to this use case:

- <em>[Self-Hosted to Cloud Migration](../../../cloud/technical-docs/v2.0/onprem_data_migration.md)</em> - when an existing on-prem customer migrates to a Sourcegraph managed Cloud v2 instance. **Note:** Cloud migrations can only be performed immediately following the provisioning of the new Cloud instance before a customer starts using the Cloud instance.
- <em>Self-Hosted to Different Self-Hosted Instance Migration</em> - when an existing self-hosted customer needs to transition to a different self-hosted instance (e.g., expanding from a single-node to a multi-node instance or migrating from on-prem to cloud self-hosted)
- <em>Self-Hosted Feature Expansion</em> - when an existing self-hosted customer is expanding their feature set and needs assistance with the infrastructure changes that accompany that expansion (e.g., IE assistance is needed to deploy executors for Server Side Batch Changes or Precise Code Navigation Auto-Indexing)

#### Production Ready Trial Deployments

This is generally not recommended. A majority of trials should consist of quick, simple deployments. If the CE determines that the customer will require a complex, production ready deployment for their trial and the CE feels the customer would benefit from implementation services, the Implementation Team should be notified via a formal implementation request. In current state, in order for a trial to be selected for implementation services:

- The CE and customer must be able to prove that the customer cannot move forward with a simpler trial environment
- The opportunity must be expected to contribute to upcoming fiscal year revenue
- The opportunity must be reviewed by CE and Sales leadership and selected from the implementation request backlog

# Implementation Engineering Prioritization

If the IE team needs to prioritize or make trade-offs we will approach prioritization in the following order:

1. Prod deployment
2. Multi-version upgrades (pre 5.0 to help drive Cody adoption)
3. Precise adoption
4. Trial deployment
5. Self-hosted to self-hosted instance migration
6. Self-hosted to cloud instance migration (with db migration)

# Cross-Functional Collaboration

The Implementation Team will have a variety of integration and collaboration points with various Sourcegraph teams throughtout the implementation project and customer lifecycle as a whole. This cross-functional collaboration includes:

#### Customer Engineering (CE) / Sales

Visit [Implemenation Cross-Team Collaboration Overview](implementation-cross-team-collaboration.md) to better understand this relationship.

#### Technical Advisory (TA)

Visit [TA-Implementation Collaboration Overview](implementation-ta-handoff.md) to better understand this relationship.

#### Customer Support (CS)

For the majority of implementations, the default process will be for CS to only be engaged once the customer is fully live. From there, the CS engineer will follow standard support practices. The documentation created by the Implementation Team during the hand-off to the TA should be sufficient for future CS engineers to better support the customer's needs.

#### Engineering

Similarly to CE, implementation will identify product issues, submit corresponding GitHub issues, submit product gaps identified by customers, and collaborate with engineering teams to properly priorities resolutions and feature request.

# Implementation Team Tasks and Responsibilities

The steps below detail, on a high level, the steps that the Sourcegraph Implementation Teams will work on both internally and directly with the customers:

[Implementation Engineers](../index.md)

- Confirmation of the production technical deployment design as captured by the CE
- Deploy customer non-production environment(s) for confirmation of deployment design and to use as a dedicated testing environment
- Configure code hosts on non-production environment(s) to confirm no issues cloning and indexing repos at scale
- Confirm Sourcegraph performance is optimal
- Build and configure production environment and code hosts

[Implementation Project Managers](../tpm/index.md)

- Set milestones for deployment and develop project plan (starts prior to contract finalization)
- Ensure leadership engagement and buy in for the implementation
- Confirm appropriate project staffing
- Track progress towards key milestones and implementation exit criteria
- Track open issues and risks
- Provide project reports to key internal and external stakeholders
- Engage cross-functional teams for additional assistance where needed
- Remove blockers for IEs and customer teams to accomplish project tasks

# Internal Steps Taken to Support Implementation Efforts

- Customer facing project plan developed
  - The Implementation Project Manager will begin development of the project plan before the customer has officially signed, but will have it fully developed at the time of the initial implementation kickoff call.
- Replica environment built
  - In certain cases with unique considerations (e.g., non-standard environment constraints, exceptional number of repositories, an untested system integration), the Implementation Team may build a replica environment to validate that a customer's use cases can be accomplished using Sourcegraph.
- Validate resourcing estimations for customer environments
  - Using the replica environment, run k6 load testing to ensure the instance can handle user traffic at scale and maintain high levels of performance. This will help validate the resourcing estimations for the customer’s deployment.
- Internal status reporting and blockers removal
  - The Implementation Project Manager will report on the status of the project to internal stakeholders while assisting the Implementation Engineer(s) to remove any implementation blockers they may be running into.

# High Level Implementation Project Plan

![Implementation Overview](https://storage.googleapis.com/sourcegraph-assets/Implementation%20Overview.png)

# Implementation Stakeholders

## Internal Stakeholders

While others may be directly or indirectly involved with specific implementations and customers, the below list accounts for the common stakeholders involved in a implementation project from Sourcegraph's side. It is important that these stakeholders have direct and clear access to any and all information pertaining to the deployment. This is primarily achieved through regular maintenance of the project plan documents.

- Implementation Engineer
- Implementation Project Manager
- Technical Account Manager
- Customer Engineer
- Account Executive
- Leadership (particularly for Strategic Accounts)

## External Stakeholders

The external stakeholders on the customer side will vary depending on the customer's organizational structure, needs, and internal processes. External stakeholders can largely be broken down into the below categories.

- Project Sponsor/ Champion - usually a leader invested in distributing Sourcegraph to developers
- Project Team - developers, admins, DevInfra team members, etc. dedicated to standing up Sourcegraph
- Project Manager - someone responsible for tracking progress, delegating tasks, and communication related to the implementation
- Engineering Leadership - managers, directors, etc. directly overseeing developers that will be impacted by Sourcegraph
- Engineers - end users providing feedback throughout UAT and user group roll-outs
- External Vendors - representatives of tools and products used by the customer may need to be engaged in certain scenarios

# Implementation Documentation

For ongoing support and account management, the Implementation Team is responsible for creating an internal document that details the following:

- Final Production Design (with specific emphasis on any deviations from standard, recommended deployment)
- Resourcing for the customer environment
  - Total CPU
  - Total Memory
  - Number of Nodes (Kubernetes)
    - Instance type for each node
  - Requests and limits per service
- Code statistics
  - Number of code hosts
    - Which code hosts
  - Lines of Code
  - Repos synced
- Overall customer environment information
  - How many environments are they deployed in?
    - Dev
    - Staging
    - Prod
  - Upgrade procedure and change management
    - Image scanning timeline
    - Pushing updates from development environment => production environment
  - Cloud platform
  - CI/CD stack
  - Externalized services
  - Other unique aspects of deployment
  - Current usage information and any expansion requirements

In addition, the Implementation Team is responsible for ensuring that the timeline information, deadlines, issues, risks, and statuses of any tasks are accurate and up to date in the project plan.

# Exit Criteria for the Implementation to be Considered Complete

Implementation is considered complete when the Sourcegraph instance is deployed and operational according to the originally scoped work. This includes deployment of the necessary infrastructure for all customer environments, the Sourcegraph application deployment, and Sourcegraph instance configuration (code host connections, syncing, and indexing along with general site configuration). While the long-term support resource will likely be executing a subset of tasks in parallel with the implementation (such as UAT and onboarding planning), the end of the implementation indicates the point at which the account will fully transition technical ownership to the Technical Advisor. Once transitioned, the Technical Advisor will continue with long-term customer success activities such as user onboarding, training, expansion, account health management, and general support.

The list of tasks to be accomplished before considering an implementation complete include, but are not limited to:

- Full production infrastructure live and stable
- Sourcegraph admin accounts provisioned and admins trained
- All scoped code hosts synced and indexed
- All scoped features are functioning as expected
- The production instance achieves a sufficiently high level of performance
- Standard workflow and performance tests completed
- The production infrastructure is staged for long-term success with continued user and feature expansion
- The production environment is right-sized (or a plan is in place to right-size the environemnt)
- The production environment is on a current version

# Implementation Project Management Tools

Below are a number of standardized tools used for managing larger implementation projects.

- [Implementation Playbook Template](https://docs.google.com/spreadsheets/d/1k5-jUMnnV8AMBqtQU6-v8YUbzyiqHE1m9LJ0ofL2RtM)
- [Standard Implementation Project Plan Template](https://docs.google.com/spreadsheets/d/1bS5IBfkrYMKR2sCkDKpxorbcv2bLNUNb01_Jv8AgF3Y)
- [Trial Implementation Project Plan Template](https://docs.google.com/spreadsheets/d/11NNbKykn79Zw7iBGREepqaEWhB-iN57Y_Tc0YwzmMhE)
- [Monthly Progress Report Template](https://docs.google.com/document/d/1p6zuk-SR4WN5M_5pN9qstPcZhW2GS60dVeT3AJGMbiI)
