# Software development life cycle

<span class="badge badge-note">SOC2/CI-98</span>

> NOTE: Please follow [this guidance](#contributing-to-this-page) on how to contribute to this page.

This document explains the workflow for driving changes on the Sourcegraph software application.

## Overview

Sourcegraph uses GitHub issues to track and drive changes to its application. They are the single source of truth, and are structured as following:

- Roadmap issues
  - Tracking issues
    - Standard issues

### Roadmap items

At the very top, Sourcegraph uses roadmap issues, found in the [roadmap tracker](https://github.com/sourcegraph/product-engineering-tracker) list objectives for each quarter in individual issues.
Each individual issue is tagged with their owning organization, owning team and assignees, who are in charge of updating the issue during the quarter.

A roadmap issue contains the following sections:

- Problem definition
- Measure of success
- Solution summary
- What specific customers are we iterating on the problem with?
- Impact on use cases
- Delivery plan

The purpose of these sections is make the objectives definition and understanding the current status clear for every teammate, regardless of their role.

### Tracking issues

A tracking issue is a GitHub issue that captures the planned and on-going work of a team’s milestone, project, RFC, goal or anything else of the sort and are mentioned in roadmap items they relate to. This artifact is a medium used for planning, progress check-ins and stakeholder communication.

A [detailed guide about tracking issues](dev/process/tracking_issues.md) is available.

### Standard issues

A standard issue captures a task, a bug or an explocation owned by a team (assigned through a label of the form `team/NAME`). Other expectations toward the issue content and labels are up to its owning team.

A [detailed page about issues](working-with-issues.md) is available.

## Additional artefacts

To convey additional context driving changes, Sourcegraph uses two other type of artefacts, that are referenced by GitHub issues:

- [Product Documents](product/process/prioritize_and_build/product_documents.md) to communicate high-level product problems that need to be solved. All PDs are available in our [public Google Drive folder](https://drive.google.com/drive/folders/1UbuN9izpTj7ppJiduKI5tid8GEFuAiEx).
  - See also the [product process](product/process/index.md).
- [Request For Comments](../../company-info-and-process/communication/rfcs/index.md) to communicate around specific problems and make decisions.

## Workflow

The flow starts with a GitHub issue that will be the single source of truth for the initiative and will be referenced by all produced artefacts.

### Design

Designing at Sourcegraph starts with a design document: a PD, an RFC or simply a description in the GitHub issue.

The outcome of the design step is an updated Product Document that links to design work and user research that supports it. The design team follows [product design principles](design/index.md) and iteratively solidifies its work into deliverables that can be shipped in order to measure and evaluate the solution design.

When a RFC or PD reaches the [REVIEW](product/process/prioritize_and_build/product_documents.md#status) phase, reviewers and approvers scrutinize the proposed solution, seeking to establish it if meets the stated requirements.

A detailed version of the [design process](design/design_process.md) is available. This process may also include engineering discovery work that explores the problem space to frame the right boundaries for the implementation phase and to surface potential problems as soon as possible.

### Implementation

With the help of a Product Manager, the relevant engineering teams divide the necessary work into smaller tracked units of effort with the management system of their choice. This optionally takes the form of a [tracking issue](dev/process/tracking_issues.md). Embedding security in the developement process, [security ambassadors](../security/#security-ambassador-program) are present to provide early feedback and assistance on security related requirements.

Engineering teams iterate and plan the implementation of these units of work on their own time. The Product Manager is ultimately responsible for the conformance of the result to the requirements stated in the Product Document or RFC, though an Engineering Manager or Engineer can also lead the work.

If complex problems surface during this step, an RFC can be created to frame the discussions around that particular problem to provide an adequate solution.

### Verification and Testing

The testing phase ensures conformance to the requirements stated in the Product Document/RFC/Ticket and to appropriate standards for service and security. The solution is scrutized to evaluate if the requirements stated in the design phase are met.

Security is evaluated through automated [vulnerability scanning and SAST](../security/tooling/index.md#cicd-pipeline-vulnerability-scanning) during [continuous integration](https://docs.sourcegraph.com/dev/background-information/ci).

If necessary, the changes will be deployed on an internal Sourcegraph instance to be internally tried until enough confidence is reached.

If the change is a feature, it may initially only be available behind a [feature flag](dev/tools/continuous_releasability.md#a-feature-flag-is-required-for-every-new-feature) in order to provide a mechanism to disable it if needed, as well as ensure that the continuous releasability contract is maintained.

### Deployments

Sourcegraph uses two different mechanisms to deploy its changes in production:

- [Continuous deployments](dev/index.md#sourcegraph-deployments-and-other-developer-test-instances) on soucegraph.com
- [Release-based model](dev/process/releases/index.md) for [managed instances](../cloud/index.md).

### Maintenance and monitoring

The Product Manager and the owning team are in charge of ensuring that the newly introduced changes are meeting the requirements, observing the behaviour in the production environments through monitoring, feedback or bug reports from customers. If any incorrect behaviour is found or a requirement isn’t met, they write corrective changes to fix those issues.

## Team specifics

Optionally, teams can specialize this document to further detail their own process, as long as it is compatible with the default SDLC covered in this document by creating a `sdlc.md` page under their own folder and linking toward it in this section, below this paragraph.

## Contributing to this page

Changes to this pages impacts all teams and therefore must be reviewed by organization leaders as well as the Developer Experience team.
