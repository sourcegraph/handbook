# Security tooling and processes

This page contains information on tools and processes we run within the Security
team.

If you want to document sensitive information, you can either:

- Store it in [Google Drive](https://docs.google.com/document/d/10oocqojeIM0uZpcOl6L76afDYj3-MLsFxRK2jhOg93E/).
- Add it to the `docs` folder in the [infrastructure repository](https://github.com/sourcegraph/infrastructure/tree/main/security/docs).
  This option is better for technical documentation.

## Processes

- [Blocking IPs in Cloudflare](https://docs.google.com/document/d/17FV8pjbJNrhAtW9lvGIbJ1jSkXe0mRw4ci7w0084RBE/edit#heading=h.jpz7uaphhdtk)

## SAST scanning

We use a combination of tools within the team to cover a number of different types
of vulnerability.

- We use [Checkov](./checkov.md) to scan our Terraform infrastructure.
- We use [Trivy](./trivy/index.md) to scan containers for issues with dependencies.
- We use [SonarCloud](./sonarcloud.md) to scan our code in `sourcegraph/sourcegraph` for vulnerabilities
