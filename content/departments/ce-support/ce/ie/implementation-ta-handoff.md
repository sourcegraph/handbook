# Overview

This document is a work in progress to give an overview of the expectations of the handoff between the implementation team and the technical advisor (TA) when a jointly managed deployment is completed.

# Inputs from Implementation

Implementation should input values to fill out the production deployment information in the account's dashboard in Vitally. This information includes the following:

  - Link to the [Technical Design Document](https://docs.google.com/document/d/1vjETRXdUtLSTRrnMAuN6aEbR_Xx0qHacONrnI0zoPyc)
  - Start date of implementation of production infrastructure
  - Completion date of implementation of production infrastructure
  - Sourcegraph instance URL
  - Deployment type (ex: Kubernetes with Helm)
  - Infrastructure Hosting Provider (ex: AWS)
  - Machine Instance Types
  - Total CPU
  - Total Memory (GB)
  - Total Disk Space (GB)

Implementation will also fill in details regarding the code host on the same Vitally dashboard. This information includes the following:
  - Code Hosts in Use
  - Number of Repositories
  - Number of Monorepos
  - Largest Repository (MB)

This section will be maintained by the TA after the initial implementation work has been completed.

This will ensure the TA and any other members of the CE team are able to have clear visibility on the infrastructure configurations for the customer instance.

# Supporting Documentation for Ongoing Support

The implementation team will keep a log of notes from the implementation. These notes will include information that will ensure a smoother support experience for the customer. Examples of information includes:
  - Discussed upper limits for users, concurrent users, and repositories on initial deployment
  - Special deployment details (ex: rockskip enabled, externalized PostgreSQL database)
  - Any significant errors or engineering involvement in successfully completing deployment

# Closing out a Deployment

Implementation is considered complete when the Sourcegraph instance is deployed and operational according to the originally scoped work. This includes completion of the necessary infrastructure for all customer environments, Sourcegraph deployment and resourcing, and Sourcegraph instance configuration (code host connections, syncing, and indexing along with general site configuration).

At this point, the customer will be working exclusively with the TA for all subsequent updates (onboarding additional users, code hosts, batch changes, etc.), and the implementation engineer will no longer be actively involved in the deployment.

# Documenting Lessons Learned



# Long Term Upgrade Strategy

