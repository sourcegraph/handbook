# Security infrastructure playbooks

Contains playbooks for GCP project deployments and GKE project deployments.

## GCP deployment playbooks

Playbooks and step-by-step instructions on working with our GCP infrastructure. It's assumed that you already have [terraform](https://www.terraform.io/) installed.

It's recommended that you use [tfenv](https://github.com/tfutils/tfenv) to help manage terraform versions.

For basic terraform issues, see [debugging terraform](#debugging-terraform)

### Creating a new GCP project

This is done via terraform from `gcp/projects` in the [Sourcegraph infrastructure repository](https://github.com/sourcegraph/infrastructure). Unless you're a GCP admin, you'll be blocked on permissions here.

1. Update the `security_projects` collection to include a new project.
   1. The fields `name`, `billing_account`, and `services` must be set.
   2. The name of the object should be the same as the `name` field.
   3. `billing_account` should always be set to `"default"`.
   4. `services` is a list of non-default APIs required by the project.
2. At this point, you will very likely be blocked on IAM Permissions.
3. To verify that your change is correct, run `terraform plan` from `gcp/projects` in our infrastructure repository.
4. If the change is purely additive, you're free to apply it by running `terraform apply` and entering `yes` at the prompt. If anything is updated or deleted, check with the project owner to see what's out of sync, and whether it's ok to still apply the change.
5. Assuming `terraform apply` succeeds, update the [security infrastructure](./index.md) page and the [GCP](../../engineering/dev/tools/infrastructure/ghe.md#sourcegraph-security) page of the handbook to reflect the new project.
6. Create an empty folder under `security` in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/tree/main/security) to store future terraform configuration.

### Debugging terraform

Basic Terraform errors that are common to run into. See [terraform playbooks](https://docs.sourcegraph.com/dev/background-information/languages/extended_guide/terraform) for uncommon terraform issues.

If you get the error `Unsupported Terraform Core version [...] required_version = "A.B.C"`, or the error `Error: Error loading state: state snapshot was created by Terraform vA.B.C, which is newer than current vX.Y.Z; upgrade to Terraform vA.B.C or greater to work with this state`, that means you need to use the specific terraform version `A.B.C`. An easy solution is to run `tfenv use A.B.C`.

1. If you get the error `No installed versions of terraform matched 'A.B.C `, then you need to install `A.B.C`. To do this, run `tfenv install A.B.C` before running `tfenv use A.B.C`.

You may need to run `terraform init` if you've added a new plugin to your configuration, or if you haven't run terraform commands from this directory before.

If `terraform plan` results in more changes than expected, try merging in the most recent `main` branch.

1. If this still shows unexpected changes, try running `terraform plan` from the main branch. If the unexpected changes are gone, then it's an issue with your PR. However, if the unexpected delta is still present from the main branch, it could mean one of a few things.
   1. Someone has an approved PR and is applying some changes before merging. Check in #distributioneers or the PRs on the infrastructure repository.
   2. GCP has updated how things are configured. This is somewhat common with large projects like dogfood and cloud. This is usually means that GCP switched the default "true" value of a field (ex. `"on" ->"true"`). This results in terraform detecting a change between the local and remote state, despite there not actually being one. This is annoying and confusing, but usually harmless. Usually not something we'd need to deal with, since we don't have large projects, but this often occurs when modifying dogfood or dotcom. Go bug the owner of the project, or verify that GCP did make an unexpected change.

If `terraform plan` or `terraform apply` fails on acquiring state lock, look at the `who` field of the error.

- If the `who` field is obviously a developer, they're probably also running `terraform plan` or `terraform apply` on the same GCP resources. You'll probably have a merge conflict at some point, so it's a good idea to sync with them on what the two of you are doing, and how it could interact.
- If the `who` field is buildkite, then we may have a stuck pipeline. A good heuristic is to see if the lock was created more than ~10 minutes ago. If it was, it's a good idea to start hunting through PRs on the infrastructure repo for a stuck pipeline so you can ping the PR author, or to ping #distributrioneers if you can't find the source. You may need to force unlock the state after killing the stuck pipeline.

During a `terraform init` if you get the below error that means there was an issue pulling the terraform state from Cloud storage. Running `gcloud auth application-default login` to refresh your default auth token should resolve it (`gcloud auth login` will not recreate the token).

```
Error: Failed to get existing workspaces: querying Cloud Storage failed: Get "https://www.googleapis.com/storage/v1/b/sourcegraph-tfstate/o?alt=json&delimiter=%2F&pageToken=&prefix=infrastructure%2Fpentest%2F&prettyPrint=false&projection=full&versions=false": oauth2: cannot fetch token: 400 Bad Request
Response: {
  "error": "invalid_grant",
  "error_description": "Token has been expired or revoked."
}
```
