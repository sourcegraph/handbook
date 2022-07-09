# GCP Access Process:

## Standard Access: For permanent access to resources, projects or assets

- Resources in scope for this procedure: GCP Organization Level permissions, Managed Instance and Sourcegraph Cloud
- Clone sourcegraph/infrastructure repo into a new branch
- Under folder gcp/org find the appropriate terraform file:
  - Files are organized by permission level
    - Organization permission
      - Used when granting access across all resources in all projects
    - Folder permissions
      - Used to grant access to all projects and resources in a particular folder, such as engineering projects or managed instances
    - Project permissions
      - Used for granular permissions granted on per project basis
- Modify the terraform in the relevant file
  - If the role you are trying to gain access to already has a resource block, add yourself to it
  - If it doesnt, create a new resource block and follow the naming convention in the file
    - Resource name: projectname_rolename
- Run `terraform init` and then `terraform plan` to review changes
  - If `terraform plan` is changing more than what is expected, reach out to security team to review the unexpected changes
  - If `terraform plan` output is expected, create a PR
    - Tag security for review
    - Post in #tech-ops slack channel so a ticket is created to track manager approvals
- Once approved, run terraform apply

## Procedure for requesting escalated permission for incident response:

- Environment in scope: Sourcegraph Cloud and Managed Instances
- Reach out to Tech Ops via #tech-ops channel
- Request access as follows
  - Google group to be added to: [gcp-admin-escalated@sourcegraph.com](mailto:gcp-admin-escalated@sourcegraph.com)
  - Time frame access is needed
  - Approvals from incident lead, manager or security team
- Tech Ops will add you to the google group
- You will automatically lose access at the end of the time frame unless you renew with approvals

## Procedure for requesting on-call access

- Environment in scope: Sourcegraph Cloud and Managed Instances
- Reach out to Tech Ops via #tech-ops channel
- Request access as follows
  - Google group to be added to: [gcp-admin-oncall@sourcegraph.com](mailto:gcp-admin-escalated@sourcegraph.com)
  - Time frame access is needed
  - Approvals from manager or security team
- Tech Ops will add you to the google group
- You will automatically lose access at the end of the time frame unless you renew with approvals
