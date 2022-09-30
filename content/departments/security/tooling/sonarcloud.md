# SonarCloud vulnerability scanning

We use [SonarCloud][0] as a static analysis tool to analyse the code in the
`sourcegraph/sourcegraph` repository for security vulnerabilities.

## For Security engineers

### Changing the SonarCloud configuration

You can login to the SonarCloud website using your GitHub credentials, and should
then be able to view the SonarCloud configuration.

SonarCloud is configured with a [quality gate][1]. This means that only code that
SonarCloud determines has a 'Security Grade' of A is considered passing.

`sourcegraph/sourcegraph` has a branch merge protection defined: any code
which fails the quality gate will not be allowed into the `main` branch. A GitHub
admin will be required to change this.

### Changing the GitHub/SonarCloud integration

You will need to either be or have access to a GitHub Admin to change this.

The SonarCloud GitHub app runs a check against all branches/pull requests, as well as
against the main branch. It currently only scans the Sourcegraph product via
the main `sourcegraph/sourcegraph` repository.

There isn't much other configuration to set up or change for the GitHub app.

## For Sourcegraph engineers

Any SonarCloud issues should be visible to you via the output of the SonarCloud
Code Analysis GitHub check. If you're not clear on how to resolve an issue raised
by SonarCloud, please reach out to the Security team in [#security][2].

If the offending commit has to be landed as part of resolving an incident, find
an admin for the repository (for whom branch protection rules will not apply) to
merge the code in for you.

[0]: https://sonarcloud.io
[1]: https://sonarcloud.io/organizations/sourcegraph/quality_gates/show/37292
[2]: https://sourcegraph.slack.com/archives/C1JH2BEHZ
