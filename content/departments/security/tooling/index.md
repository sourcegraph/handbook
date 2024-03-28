# Security tooling and processes

This page contains information on tools and processes we run within the Security
team.

If you want to document sensitive information, you can either:

- Store it in [Google Drive](https://docs.google.com/document/d/10oocqojeIM0uZpcOl6L76afDYj3-MLsFxRK2jhOg93E/).
- Add it to the `docs` folder in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/tree/main/security/docs).
  This option is better for technical documentation.

## Processes

- [Blocking IPs in Cloudflare](https://docs.google.com/document/d/17FV8pjbJNrhAtW9lvGIbJ1jSkXe0mRw4ci7w0084RBE/edit#heading=h.jpz7uaphhdtk)

## Terraform Cloud

We use Terraform Cloud to manage the deployment of cloud infrastructure across Sourcegraph. You can
find more information on using the platform [here](./terraform-cloud.md).

Notifications for changes to Terraform in folders of interest to the Security team go to #security-terraform.
The configuration of notification settings can be found in `infrastructure/terraform-cloud`.

## SAST scanning

We use a combination of tools within the team to cover a number of different types
of vulnerability.

- We use [Checkov](./checkov.md) to scan our Terraform infrastructure.
- We use [Trivy](./trivy/index.md) to scan containers for issues with dependencies.
- We use [Semgrep OSS](./semgrep.md) to scan our code in `sourcegraph/sourcegraph` and `sourcegraph/cody` for vulnerabilities & bad patterns

Additionally, we have enabled [push protection](./push-protection.md) for all public repositories for secret scanning.

## Entitle

We use Entitle as our permission management system.

- An Intro on [Entitle](entitle.md)
- [How To Guide](entitle_request.md) using GCP as an example
- [Entitle for GitHub](entitle_github.md) teams and elevated permissions access for teammates and managers
- [Cloudflare Access Request](entitle_cloudflare.md)

## Cloudflare Token

We use Cloudflare tokens to manage access to our Cloudflare account.

The token is used by our Terraform code to manage DNS records and other Cloudflare services

Update the token [here](https://console.cloud.google.com/security/secret-manager/secret/CLOUDFLARE_API_TOKEN/versions?project=sourcegraph-ci), [here](https://console.cloud.google.com/security/secret-manager/secret/CLOUDFLARE_API_TOKEN/versions?project=sourcegraph-secrets) and in the [Terraform Cloud varset](https://app.terraform.io/app/sourcegraph/settings/varsets/varset-HYQK3eJLUcgQ3ZF5).

We typically set a 1 year expiry on the token.

Make sure to test that the token works by running `terraform plan` in the `infrastructure` repository on the relevant code
