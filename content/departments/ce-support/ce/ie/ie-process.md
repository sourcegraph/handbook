# Overview

This document is an overview of the processes followed by the implementation team when involved in a customer implementation project. This document is specific to the process for _Jointly Managed Implementations_. Ad-hoc requests for support from the implementation team do not follow this process, but the implementation team may require pieces of this process to be completed in those cases.

# Inputs from Pre-Sales

The primary input from pre-sales will be the TDD. The TDD, when completed, should include all information necessary for the implementation team to plan out a deployment for the newly signed customer. The TDD should be updated with information about lessons learned in the POC process and how the proof of concept design and deployment differs from the production design and deployment.

# Direct steps taken with customers

The steps below detail, on a high level, the steps that Sourcegraph implementation engineers will be interfacing with the customer.

- Confirmation of the production deployment design as captured in the pre-sales stages
- Set milestones for deployment and share the project plan
- Deploy customer non-production environment(s) for initial confirmation of deployment design
- Configure code hosts on non-production environment(s) to confirm no issues cloning and indexing repos at scale
- Onboard testing users into non-production environment(s) and confirm Sourcegraph performance is optimal
- Build production environment
- Configure code hosts on production environment
- Onboard full scope of users

# Internal steps taken to support implementation efforts

- Customer facing project plan developed
  - The Implementation Project Manager will begin development of the project plan before the customer has officially signed, but will have it fully developed at the time of the initial implementation kickoff call.
- Replica environment built
  - Building a replica environment is especially important for new deployments with unique considerations (exceptional number of repos, exceptionally large monorepos, exceptionally high seat count). This will help validate the resourcing estimations for the customer’s deployment.
- Validate resourcing estimations for customer environments
  - Using the replica environment, run k6 load testing to ensure the instance can handle user traffic at scale and maintain high levels of performance.

# Internal stakeholders

At a minimum, the internal stakeholders should include the following people:

- Implementation Engineer
- Implementation Project Manager
- Customer Success Manager (Technical Account Manager)
- Customer Engineer
- Account Executive

It is important that these stakeholders have direct and clear access to any and all information pertaining to the deployment. This is primarily achieved through regular maintenance of the project plan documents.

# Internal and external documents to maintain for progress updates/project status

For ongoing support and account management, the implementation engineer is responsible for creating an internal document that details the following:

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

In addition, the implementation team is responsible for ensuring that the timeline information, deadlines, and status of any tasks are accurate and up to date in the external project plan.

# Requirements for implementation to be considered complete
