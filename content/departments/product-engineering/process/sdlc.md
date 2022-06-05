# Software development life cycle

<span class="badge badge-note">SOC2/GN-98</span>

Sourcegraph uses three types of approaches to drive changes:

- [Product Documents](../product/process/product_documents.md) to communicate high-level product problems that need to be solved. All PDs are available in our [public Google Drive folder](https://drive.google.com/drive/folders/1UbuN9izpTj7ppJiduKI5tid8GEFuAiEx).
  - See also the [product process](../product/process/index.md).
- [Request For Comments](../../../company-info-and-process/communication/rfcs/index.md) to communicate technical problems or specific solutions in response to a Product Document.
- Tickets (GitHub, GitHub discussions, JIRA, ...) and Pull Requests to communicate targeted technical problems or solutions, possibly (but not always) in response to RFCs or PDs.

Sourcegraph follows an agile process, which means that the teams go through repeated iterations on a solution in order to refine results and adapt to changes discovered during each phase.

## Design

Designing at Sourcegraph starts with a design document, which can be either a formal PD or RFC, or an informal GitHub Issue or Google Doc that gets formalized into an RFC or PD as the explorative work and gathering of requirements progresses.

The outcome of the design step is an updated Product Document that links to design work and user research that supports it. The design team follows [product design principles](../product/design/index.md) and iteratively solidifies its work into deliverables that can be shipped in order to measure and evaluate the solution design.

When a RFC or PD reaches the [REVIEW](../product/process/product_documents.md#status) phase, reviewers and approvers scrutinize the proposed solution, seeking to establish it if meets the stated requirements.

A detailed version of the [design process](../product/design/design_process.md) is available. This process may also include engineering discovery work that explores the problem space to frame the right boundaries for the implementation phase and to surface potential problems as soon as possible.

## Implementation

With the help of a Product Manager, the relevant engineering teams divide the necessary work into smaller tracked units of effort with the management system of their choice. This optionally takes the form of a [tracking issue](../engineering/process/tracking_issues.md). Embedding security in the developement process, [security ambassadors](../engineering/admin-exp/security/#security-ambassador-program) are present to provide early feedback and assistance on security related requirements.

Engineering teams iterate and plan the implementation of these units of work on their own time. The Product Manager is ultimately responsible for the conformance of the result to the requirements stated in the Product Document or RFC, though an Engineering Manager or Engineer can also lead the work.

If complex problems surface during this step, an RFC can be created to frame the discussions around that particular problem to provide an adequate solution.

## Verification and Testing

The testing phase ensures conformance to the requirements stated in the Product Document/RFC/Ticket and to appropriate standards for service and security. The solution is scrutized to evaluate if the requirements stated in the design phase are met.

Security is evaluated through automated [vulnerability scanning and SAST](../../product-engineering/engineering/admin-exp/security/tooling/index.md#cicd-pipeline-vulnerability-scanning) during [continuous integration](https://docs.sourcegraph.com/dev/background-information/ci).

If necessary, the changes will be deployed on an internal Sourcegraph instance to be internally tried until enough confidence is reached.

If the change is a feature, it may initially only be available behind a [feature flag](../engineering/tools/continuous_releasability.md#a-feature-flag-is-required-for-every-new-feature) in order to provide a mechanism to disable it if needed, as well as ensure that the continuous releasability contract is maintained.

## Deployments

Sourcegraph uses two different mechanisms to deploy its changes in production:

- [Continuous deployments](../engineering/index.md#sourcegraph-deployments-and-other-developer-test-instances) on soucegraph.com
- [Release-based model](../engineering/process/releases/index.md) for [managed instances](../engineering/admin-exp/devops/managed/index.md).

## Maintenance and monitoring

The Product Manager and the owning team are in charge of ensuring that the newly introduced changes are meeting the requirements, observing the behaviour in the production environments through monitoring, feedback or bug reports from customers. If any incorrect behaviour is found or a requirement isn't met, they write corrective changes to fix those issues.
