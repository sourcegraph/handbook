## Repository policies and controls

As our product offerings grow we will have increasingly more code in scope for SOC2 compliance spread across multiple repositories. This policy defines categories for repositories and which controls are necessary.

## Repository categories

### SOC2-scoped

Any repository that contains code which processes Enterprise Sourcegraph customer data is categorized as `SOC2-scoped`. This includes repositories such as: sourcegraph/sourcegraph, sourcegraph/cody, sourcegraph/scip-\* and more.

### Security-tracked

Repositories that may not be in scope for compliance but present security risks should be categorized as `Security-tracked`. This includes repositories such as: sourcegraph/abuse-ban-bot, sourcegraph/controller and more.

### Out-of-scope

All other repositories are categorized as `Out-of-scope`.

## Repository controls

The following controls are required for all `SOC2-scoped` repositories. `Security-tracked` repositories are not required to have the controls but should be strongly considered. If a repository is categorized as `Out-of-scope` it does not require any controls.

- Branch protection: a repository must not allow committing directly to the `main` branch.
- PR approvals: merging changes to the main branch must require an approval
- Test plan: PRs must have a Test Plan in the PR description.
- CODEOWNERS: a repository must have a CODEOWNERS file.
- CLA: non-Sourcegraph employees can only contribute to the repo by signing a CLA.
- CI tests: code must pass tests (unit, integration, etc) before merging.
- SAST: code must pass security testing before merging.
