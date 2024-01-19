# Managed Services incident response

This page includes incident response playbooks the [Core Services team](../index.md) can use when operating the [Managed Services Platform](./platform.md) fleet.

**For more MSP user/operator-oriented guidance, refer to the [Managed Services infrastructure](../../../managed-services/index.md) pages instead**.

## Basics

### Declaring an incident

If a MSP service outage occurs, you should [declare an incident](../../../dev/process/incidents/index.md), which more or less means using the `/incident` command to create an incident.
Assess the impact of the outage and configure the incident as appropriate.
Use the `owners` field in service specification to infer what channels and stakeholders need to be notified, if any.

### Infrastructure access

Quick links and brief summary below - for more details refer to [the more generalized guidance](./platform.md#infrastructure-access).

- **Terraform Cloud**
  - Core Services team members should be part of the Core Services team in Terraform Cloud, which should have access to all MSP TFC workspaces by default.
  - [Entitle: `Managed Services Platform Operators`](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiRU5URVIgSlVTVElGSUNBVElPTiBIRVJFIiwicm9sZUlkcyI6W3siaWQiOiJiMzg3MzJjYy04OTUyLTQ2Y2QtYmIxZS1lZjI2ODUwNzIyNmIiLCJ0aHJvdWdoIjoiYjM4NzMyY2MtODk1Mi00NmNkLWJiMWUtZWYyNjg1MDcyMjZiIiwidHlwZSI6InJvbGUifV19) can be used in case a non-Core-Services teammate needs access, or if there is some other issue accessing the workspace.
  - [Entitle: `owners`](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjM2MDAiLCJqdXN0aWZpY2F0aW9uIjoiSlVTVElGSUNBVElPTiBIRVJFIiwicm9sZUlkcyI6W3siaWQiOiJiMGNlYjM3MS00NjMxLTRlZTctYjhjYy1mMzc5NGY5MDc0MjQiLCJ0aHJvdWdoIjoiYjBjZWIzNzEtNDYzMS00ZWU3LWI4Y2MtZjM3OTRmOTA3NDI0IiwidHlwZSI6InJvbGUifV19) can be used for escalated access to Sourcegraph's entire Terraform Cloud account. Use with care!
- **Google Cloud Platform**
  - For individual MSP services, request `mspServiceEditor` or `mspServiceReader` via Entitle on the specific service environment's project.
  - For groups of MSP services, you can request `mspServiceEditor` or `mspServiceReader` on the service's folder:
    - `catogory: prod` services: [Entitle: `mspServiceEditor` on the `Managed Services` folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiODQzNTYxNzktZjkwMi00MDVlLTlhMTQtNTY3YTY1NmM5MzdmIiwidGhyb3VnaCI6Ijg0MzU2MTc5LWY5MDItNDA1ZS05YTE0LTU2N2E2NTZjOTM3ZiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)
    - `catogory: internal` services: [Entitle: `mspServiceEditor` on the the `Internal Services` folder](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjEwODAwIiwianVzdGlmaWNhdGlvbiI6IkpVU1RJRklDQVRJT04gSEVSRSIsInJvbGVJZHMiOlt7ImlkIjoiZTEyYTJkZDktYzY1ZC00YzM0LTlmNDgtMzYzNTNkZmY0MDkyIiwidGhyb3VnaCI6ImUxMmEyZGQ5LWM2NWQtNGMzNC05ZjQ4LTM2MzUzZGZmNDA5MiIsInR5cGUiOiJyb2xlIn1dfQ%3D%3D)
    - `catogory: test` services: All engineers should have access by default (test services are placed in the `Engineering Projects` folder)
  - `mspServiceEditor` and `mspServiceReader` are available for convenience, and are configured [in `gcp/org/customer-roles/msp.tf` in the infrastructure repo](https://github.com/sourcegraph/infrastructure/blob/main/gcp/custom-roles/msp.tf). Additional roles can be requested directly via Entitle.

Service-specific guidance is generated in [Managed Services infrastructure](../../../managed-services/index.md) pages.

### Changing infrastructure

#### CLI-apply mode

In peacetime, all service workspaces are left in "VCS mode", where the remote [`managed-services`](https://github.com/sourcegraph/managed-services) repository is used when running Terraform plan and apply in Terraform Cloud.
Changes to the repository automatically triggers a plan as part of repository CI, and merging to `main` automatically deploys the workspaces.

"CLI mode" makes a workspace behave like an "old-school" Terraform workplace, where `terraform plan` and `terraform apply` only use your local generated Terraform, and the remote repository is ignored (though run execution still occur in Terraform Cloud).

You can place a service environment in "CLI mode" using `sg msp tfc sync`:

```sh
sg msp tfc sync --workspace-run-mode=cli $SERVICE $ENVIRONMENT
```

This is useful for quickly making changes without committing/pushing to the remote [`managed-services`](https://github.com/sourcegraph/managed-services) repository first, and prevents other automated mechanisms from changing your infrastructure.
You can manually hand-edit the generated Terraform as well.

**Use with care** - and when done, remember to make sure the default generated Terraform matches any changes you might have made, and once the `main` branch in [`managed-services`](https://github.com/sourcegraph/managed-services) aligns with your changes, the service must be placed in "VCS mode" again:

```sh
sg msp tfc sync $SERVICE $ENVIRONMENT
```

## Scenario playbooks

### GCP resource recovery

Unintended GCP resource deletions can happen when an unintended Terraform change (for example, conflict with a manually rolled out change upon automation) is merged and deployed in Terraform Cloud.

In general, the first order of business is to revert the unintended Terraform change.
A reverse is unlikely to successfully apply in Terraform because [many GCP products support "soft deletion"](https://cloud.google.com/docs/security/deletion#stage_2_-_soft_deletion), and attempting to "undelete" a resource will cause a conflict (typically in the ID/name/etc), but it gives us an indicator of how far we are from the last known good state, and will destroy the resources that were created to replace the original resources that you wanted.

At this point, you may want to [place the affected workspaces in CLI-apply mode](#cli-apply-mode) to prevent further unexpected changes.

Next, you want to assess what resources can be recovered - not every GCP product supports it.
[Get yourself access to the GCP resources](#infrastructure-access) and use the GCP Console to restore the relevant resources.
Then, based on the Terraform plan, start to "reconstruct" the desired state by importing the resources you have restored into the Terraform state using the [`terraform import` command](https://developer.hashicorp.com/terraform/cli/import).
A more detailed example is available in [example: recovering from project deletion](#example-recovering-from-project-deletion).

As you recover all the missing resources for each workspace, run a `terraform apply` for each to ensure that the workspace is back to a healthy state, and repeat for the next stack in the sequence.

#### Example: recovering from project deletion

This section covers project deletion as an example, as it occurred in [INC-263](https://app.incident.io/sourcegraph/incidents/263).
Additional mitigations for this specific scenario exists now, but it could still be a useful reference.

In the service's `project` workspace, an attempt to restore the project via a revert to Terraform configuraiton is likely to have run into an error like the following, as the soft-deleted project ID would conflict with the project Terraform is trying to create:

```none
Error: error creating project $PROJECT_ID: googleapi: Error 409: Requested entity already exists, alreadyExists.
with google_project.pings-prod-project
```

In the event only the _project_ is deleted, pretty much all resources can be recovered by through this page by restoring the project within 30 days.
Deleted projects can be viewed in [Cloud Resource Manager's "Pending Deletion" page](https://console.cloud.google.com/cloud-resource-manager?pendingDeletion=true).
Project recovery requires "Owner" permission on the deleted project - if a lot of projects need recovery, the "Owner" role can be requested at the GCP organization level with additional approval so that all projects can be recovered quickly.
This is especially important if Entitle has not yet sync'd a project, as it often suffers significant lag time to pick up on more recently created projects.

Once restored, you want to import the project into the Terraform state so that it can be managed by Terraform again.
In the original error above, `google_project.pings-prod-project` is the ID of the resource in the Terraform configuration, and we are being told that this particular resource cannot be created because it already exists.
Note that this ID may look different for each service, so inspect the error message and the generated MSP Terraform carefully to double-check if you are unsure.

```sh
terraform import google_project.pings-prod-project $PROJECT_ID
```

Once imported, the service's `project` workspace should now be able to apply as before, as Terraform will no longer attempt a creation, but instead manage the existing imported project.
Conflicts with existing resources can generally be addressed with this strategy using `terraform import`.

Note that different resources have different naming conventions for how to import particular resources - consult the provider resource documentation, for example [the "Import" section of the `google_service_account` resource](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/google_service_account#import).
Error messages will also indicate the naming scheme, for example:

```none
Error: Error creating service account: googleapi: Error 409: Service account operatoraccess-980434 already exists within project projects/$PROJECT_ID. Details: [ { "@type": "type.googleapis.com/google.rpc.ResourceInfo", "resourceName": "projects/$PROJECT_ID/serviceAccounts/operatoraccess-980434@$PROJECT_ID.iam.gserviceaccount.com" } ] , alreadyExists
with google_service_account.iam-operatoraccess-account
```

The corresponding import command would use `resourceName` from the error message:

```sh
terraform import google_service_account.iam-operatoraccess-account projects/$PROJECT_ID/serviceAccounts/operatoraccess-980434@$PROJECT_ID.iam.gserviceaccount.com
```
