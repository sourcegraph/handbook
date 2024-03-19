# Implementation and TA Collaboration Overview

This document is a work in progress to give an overview of the integration and collaboration between the implementation team and the technical advisor (TA) when a jointly deployed implementation is completed.

# Inputs from Implementation

Implementation should input values to fill out the production deployment information in the account's dashboard in Vitally. This information includes the following:

- Link to any [Technical Design Documents](https://drive.google.com/drive/folders/1o-4rB24vcYsOiUzSEr_vzJsC7pE03yYC)
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

In addition, the implementation team will keep a dedicated:

- Issues Log - active problems that need resolving
- Risk Log - potential future problems and responses to those problems if they come to fruition
- Expansion Opportunities - if information is gathered on specific user or feature expansion opps, the implementation team will transition that information to the TA

# Closing out a Deployment

Implementation is considered complete when the Sourcegraph instance is deployed and operational according to the originally scoped work. This includes completion of the necessary infrastructure for all customer environments, Sourcegraph deployment and resourcing, and Sourcegraph instance configuration (code host connections, syncing, and indexing along with general site configuration).

At this point, the customer will be working exclusively with the TA for all subsequent updates (onboarding additional users, code hosts, batch changes, etc.), and the implementation engineer will no longer be actively involved in the deployment. The Implementation team will be accountable for a smooth transition of ownership to the TA.
