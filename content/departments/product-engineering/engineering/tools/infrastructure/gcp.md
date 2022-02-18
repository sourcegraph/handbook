# Google Cloud

## Projects

We utilize multiple Google Cloud projects and folders to organize our workloads and manage access control for our engineers, as well as limit the scope of roles and service accounts across projects.

All **Permanent** Projects and permissions are defined in [infrastructure/gcp](https://github.com/sourcegraph/infrastructure/tree/main/gcp).
Temporary projects should be created as needed in [Engineering Projects](#engineering-projects)

### Root Projects

These projects contain per-project permissions.

- **TelligentSourcegraph**: Data pipeline and storage for pings and Cloud event logging.
- **Universities**: Sourcegraph instances for universities.
- **sourcegraph-interviews**: Shared project for interviews.

### Folders

#### Engineering Projects

Contains projects used by individual engineers. Engineers are expected to remove all their resources once they are done testing. All projects must be prefixed with `$name-` (the name of the owner).

Generally, these projects should be short-lived and shutdown by the engineer when it is no longer needed (this will delete all resources in the project). Longer lived projects should be put in another folder and cloud-devops should be contacted for review. Short term projects do not need to be added via Terraform but longer term projects should be stood up via Terraform in the infrastructure repo.

_Note: Customer Support team members should provision clusters within the cse-k8s project._

#### Sourcegraph Cloud

Sourcegraph Cloud projects.

- **Sourcegraph**: Services for sourcegraph.com.
- **Sourcegraph Auxiliary**: Testing clusters, deployments and VMs.
- **sourcegraph-code-intel**: Services for Code Intel code execution that are separated from our production project for extra isolation.
- **Sourcegraph CI**: Services for our CI cluster and temporary CI resources.

#### Sourcegraph Security

[Sourcegraph Security projects](../../cloud/security/infrastructure/index.md#projects).

- **[sourcegraph-security-logging](../../cloud/security/infrastructure/index.md#logging)**: Infrastructure required for centralized security logging.
- **[sourcegraph-security-logging-stage](../../cloud/security/infrastructure/index.md#logging-stage)**: Staging environment for logging infrastructure.

#### Other Projects

Misc Projects with permissions set at the project level.

- **sourcegraph-calend**: Owned by @sqs.
- **sourcegraph-orgtool**: Owned by @sqs.

#### Managed Instances

Multiple `sourcegraph-managed-$name` projects, one for each our managed deployments to guarantee separation of privileges and access control.

## [Committed use discounts](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#how_committed_use_discounts_work)

Compute Engine lets you purchase committed use contracts in return for deeply discounted prices for VM usage. These discounts are referred to as committed use discounts.

### Current commitments

- Period: 1 Year
- End Date: August 1, 2021
- CPU: `1200`
- Memory: `3500`
- Report: [GCP Commitment Proposal July 2020](https://docs.google.com/document/d/1G_p8eiWqmRmnrgA0U-lcJHfKQhAQTGr5ROuLoNeQ59s)

### Assessing commitments

We will review the previous commitments and our billing reports to identify new commitment opportunities. Unless there are interesting cost-saving opportunities, we will keep a single active commitment to simplify its calculation and review.

#### Previous commitment and utilization

Review previous commitments and utilization reports to asses if we can increase or supplement our commitments.

- Sign in to **Cloud Billing** in the Google Cloud Console
- From the Billing navigation menu, select **Commitments**
- Change the `Scope -> Time` range to "Year to date"
- Review VCPU, RAM and other commitments over the last year

#### Billing reports

Review the billing reports and look for cost-saving opportunities by understanding which are the most expensive resources.

- Sign in to **Cloud Billing** in the Google Cloud Console
- From the Billing navigation menu, select **Reports**
- Change the `Filters -> Time range` to "Year to date"
- Change the `Filters -> Group by` to SKU
- Review Predefined Instance Ram
- Review Predefined Instance Core

#### Creating a commitment

Once we have reviewed the current utilization and commitments, we will create a new commitment as required.

- Sign in to **[Commitment List](https://console.cloud.google.com/compute/commitments)**
- Check for any active commitment
- If there is not active commitment, or the current commitment is about to expire select **Purchase commitment**
- Fill in the commitment information, modify the example below as required from your assessment
  - Name: `${month}${year}` (`july2020`)
  - Region: `us-central1`
  - Commitment type: `General-purpose N1`
  - Period: `1 year`
- Select **Purchase** -> **Purchase**
