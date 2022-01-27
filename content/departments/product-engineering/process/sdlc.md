# Software Development Life Cycle <span class="badge badge-note">SOC2/GN-98</span>

Sourcegraph uses two types of approaches to drive changes: 

- [Product Documents](../product/process/product_documents.md) to communicate high-level product problems that need to be solved. These documents. A list of all publicly available PDs is available. 
- [Request For Comments](../../../company-info-and-process/communication/rfcs/index.md) to communicate technical problems or specific solutions in response to a Product Document. 

Sourcegraph follows an agile process, meaning that the team will repeatedly go through in order to refine the result and adapt to changes discovered during each phases.

## Design

Designing at Sourcegraph starts with a design document, either a formal one in the shape of a PD or RFC, or an informal one (a GitHub issue, a Google Doc) that gets formalized into an RFC or PD as the explorative work progresses.

The outcome of the design step is an updated Product Document that links to design work and user research that supports it. The design team follows the [product design principles](../product/design/index.md). Through an iterative process, the team solidifies its work into deliverables that can be shipped in order to measure and evaluate the solution design.

A detailed version of the [design process](../product/design/design_process.md) is available.

It may also include engineering discovery work that explores the problem space to frame the right boundaries for the implementation phase and to surface potential problems as soon as possible.

## Implementation

The relevant engineering teams divide the necessary work from the Product Document with the help of a Product Manager, into smaller tracked units of work with the tracking system of their choice. 

They iterate and plan the implementation of these units of work on their own time. The Product Manager is ultimately responsible for the conformance of the result to the requirements stated in the Product Document. Instead of a product manager, an engineering manager or engineer may lead the work in this manner.

In the eventuality of complex problems surfacing during this step, an RFC can be created to frame the discussions around that particular problem to provide an adequate solution. 

## Testing

The outcome of this phase is two-fold: conformance to the requirements stated in the Product Document and ensuring the right quality level has been achieved, both in terms of service and security. Quality is ensured through reviewing conformance to the Product Document. Security is evaluated through automated vulnerability scanning and SAST during continuous integration and warns the developers of their presence without failing the build. 

If necessary, the changes will be deployed on an internal Sourcegraph instance to be internally tried until enough confidence is reached. 

If the change is a feature, it may initially only be available behind a [feature flag](../engineering/tools/continuous_releasability.md#a-feature-flag-is-required-for-every-new-feature) in order to provide a mechanism to disable it if needed, as well as ensure that the continuous releasability contract is maintained.

## Deployments

Sourcegraph uses two different mechanisms to deploy its changes in production: 

- [Continuous deployments](../engineering/index.md#sourcegraph-deployments-and-other-developer-test-instances)) on soucegraph.com 
- [Release-based model](../engineering/process/releases/index.md) for [managed instances](../engineering/cloud/delivery/managed/index.md).
