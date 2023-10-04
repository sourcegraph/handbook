# Software Development Life Cycle (SDLC)

## Introduction

This handbook outlines the software development life cycle (SDLC) methodology used at Sourcegraph. It serves as a reference guide for all team members involved in the software development process. Our SDLC methodology is designed to ensure effective planning, execution, and delivery of software projects while maintaining transparency and accountability.

## Overview

At Sourcegraph, we utilize a structured approach to software development. Our SDLC methodology is primarily driven by GitHub issues, which act as the central repository for tracking and managing changes to our software applications. This methodology includes the following key components:

1. **Roadmap Items**: We maintain a roadmap tracker to list objectives for each quarter, with individual issues detailing these objectives. Each issue is tagged with ownership information, including the owning organization, team, and assignees responsible for updates.

2. **Tracking Issues**: Tracking issues are used to capture planned and ongoing work related to milestones, projects, RFCs (Request For Comments), goals, and more. They serve as a planning tool, facilitate progress check-ins, and aid in stakeholder communication.

3. **Standard Issues**: Standard issues represent tasks, bugs, or exploratory work owned by specific teams, indicated by labels such as `team/NAME`. Teams have flexibility in defining the content and labels for standard issues.

4. **Additional Artifacts**: In addition to GitHub issues, we use PRDs to communicate product plans and RFCs to discuss specific issues and make decisions.

## Workflow

Our software development process follows a structured workflow:

### Design Phase

The design phase involves defining the solution to a problem. Detailed design processes are described in our [Design process](../product/design/index.md#design-process).

#### Product Lifecycle Labels

We use labels to communicate the quality and support level of our products and features to our customers. These labels are assigned subjectively but not arbitrarily, following these guidelines:

- **Early Access Program (EAP)**:

  - Shared privately with NDA's customers.
  - Feature implementations represent super early functionality.
  - Not suitable for production workloads.
  - Goals: Assess potential, identify improvements.

- **Experimental**:

  - Shared publicly.
  - Feature implementations represented are in super early functionality.
  - Unsupported.
  - Goals: Assess potential, identify improvements.

- **Beta (n)**:

  - Shared publicly (although private betas are sometimes used).
  - Features are fully implemented, although may need additional quality and performance improvement.
  - Best-effort support.
  - No guarantee of stability between beta versions.
  - Goals: Gather feedback, fix bugs, optimize performance, train sales and support staff, finalize documentation.

- **General Availability (GA)**:
  - Publicly available.
  - Suitable for production workloads.
  - Fully supported using industry best practices.
  - Performance optimized.
  - No new features without sufficient "bake time."
  - Come with scenario-complete docs + samples.
  - Sales and support staff trained and ready to go.
  - Goals: Continual stability and improvement.

### Verification and Testing

The testing phase ensures that the solution meets the specified requirements. Automated vulnerability scanning and SAST (Static Application Security Testing) are integrated into our CI/CD pipeline to assess security. Features may initially be behind feature flags for testing and continuous releasability.

[CI/CD pipelines](dev/tools/infrastructure/ci/index.md) cover testing on multiple levels, unit, integration and end-to-end. The application end-to-end test suites cover our containers and kubernetes deployments, and are running against real code hosts.

After going through Continuous Integration, changes are automatically deployed on an internal Sourcegraph instance, referred to as "S2" that all Sourcegraph teammates use on a daily basis, allowing to further observe correctness before any releases are made.

### Deployment Phase

Deployment methods:

- [Continuous deployments for sourcegraph.com](dev/process/deployments/index.md#dotcom).
- [Release-based model for managed instances](https://docs.sourcegraph.com/cloud#monthly-upgrades-and-maintenance).

#### Versioning

Each version of a product represents its maturity and breadth of applicability:

- **Major Versions**: Owned by marketing to communicate a significant jump forward, often as part of a launch event.
- **Minor Versions and Revisions**: Owned by the product teams to communicate minor changes, new features, bug fixes, etc., at the team's discretion.

You can find more detailed information on versioned releases at [Sourcegraph releases](dev/process/releases/index.md).

### Maintenance and Monitoring

Product Teams (consisting of product and engineering team members) monitor changes in production, ensuring they meet requirements and observing behavior through monitoring, feedback, and bug reports. Corrective changes are made as needed.
