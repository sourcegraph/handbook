# Checkov Terraform vulnerability scanning

## What is it?

[Checkov](https://www.checkov.io/1.Welcome/What%20is%20Checkov.html) scans our
Terraform configuration to identify security issues affecting our infrastructure.

Checkov can identify hundreds of security issues that might impact our infrastructure,
and therefore has the potential to significantly improve our security posture
before the affected infrastructure is deployed.

## How is Checkov run?

Checkov runs against two repositories, [infrastructure][0] and [deploy-sourcegraph-managed][1],
via GitHub Actions.

These GitHub checks will fail your PR and should (in most cases) prevent you from
merging in resource specifications until the issues that Checkov has raised are
either resolved or skipped.

## Resolving or skipping Checkov failures

Ideally, issues raised by Checkov should be resolved by following the advice suggested
in the `guideline` section of the GitHub Action output. Simply updating your PR
with the corrected Terraform should be enough in these cases.

In some cases, Checkov might return a false positive – something it thinks is an
issue, but which doesn't affect Sourcegraph do to the specific way our infrastructure
is configured. In other cases, Checkov might report an issue that will take too
long to resolve given business needs.

In these cases, you can add a Checkov skip for the individual issue that Checkov
has identified. You can find the relevant instructions in the 'Suppressing
individual checks' section on the [Checkov website][4], or look at some existing
skips within [our repositories][5]. If you add a skip, please tag the Security
team in your updated PR, so that we can approve the change and track the resulting
issues where necessary.

## Guidance for security engineers

Checkov is unfortunately currently configured with both global and local skips, and
some of the reasons for the global skips are undocumented.

If you are approached with a request to add a Checkov skip, or tagged in a PR that
adds a Checkov skip, your workflow should be as follows:

1. If the skip is required to resolve an ongoing incident, approve the skip immediately
   and then follow the rest of this process retrospectively.
1. Assess the validity of the issue that Checkov is reporting.
1. If the issue is valid, assess the reason why the request to add a skip has
   been made. If the proposed issue would require significant engineering time
   to resolve (which is for some reason not available) then add a security
   vulnerability of the correct severity following the [vulnerability remediation
   process][2].
1. If the issue is not valid, ensure that a clearly-explain skip annotation is
   added to the offending resource, and accept the PR

We do not add any new global skipped checks unless there is a pressing business
reason to do so. Global skip checks are configured directly within the GitHub
Action. Speak to the Security Lead if you have a need to do this.

A partial list of globally skipped checks can be found [here][3]. This list
includes planned remediation work for these checks. If you are adding a globally
skipped check then please keep this list updated.

## IDE plugins for Checkov

If you would like to integrate Checkov with your development workflow, you can
also use the following plugins:

- [IntelliJ Plugin Marketplace](https://plugins.jetbrains.com/plugin/17721-checkov)
- [VSCode](https://github.com/bridgecrewio/checkov-vscode)
- [A pre-commit hook when using terraform](https://www.checkov.io/4.Integrations/pre-commit.html)

[0]: https://github.com/sourcegraph/infrastructure/
[1]: https://github.com/sourcegraph/deploy-sourcegraph-managed/
[2]: ../vulnerability-management-process.md
[3]: https://docs.google.com/spreadsheets/d/1s1wX-SkBT_oFPGV92TlxJJUEi33uqkxr72HuBXgVIbg/edit#gid=0
[4]: https://www.checkov.io/2.Basics/Suppressing%20and%20Skipping%20Policies.html
[5]: https://sourcegraph.sourcegraph.com/search?q=context:sourcegraph+repo:%5Egithub%5C.com/sourcegraph/infrastructure%24+checkov:skip&patternType=literal
