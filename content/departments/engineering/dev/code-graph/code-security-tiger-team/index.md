# Code Security tiger team

The purpose of the Code Security [tiger team](https://en.wikipedia.org/wiki/Tiger_team) is to iterate quickly with customers over new user flows addressing the [Code security use case](../../../../../strategy-goals/strategy/use-cases/code-security.md) over FY23Q2.

## Workflow

### Sync

We sync weekly on Wednesday. See our [sync doc](https://docs.google.com/document/d/1r7wiK8F8AQvvnv5YMRAeqNLDS4WkDSvGvbGQVsX1xis/edit#)

### Customer discovery

We use [lookback](https://lookback.io/org/sourcegraph/projects/code-security/rounds) for customer discovery sessions and [airtable](https://airtable.com/appNsjegbsi2XumCg/tblam1hdUFUSFLzyS/viwTBDtytBqAxoZ40?blocks=hide) for collecting insihgts.

## Strategy

See [strategy page](../../../../../strategy-goals/strategy/code-security-tiger-team/index.md)

## Contact

[`#code-security-tiger-team`](https://sourcegraph.slack.com/archives/C03DWADAG8M) or `@code-security-tiger-team` on Slack

[`sourcegraph/code-security-tiger-team`](https://github.com/orgs/sourcegraph/teams/code-security-tiger-team) on GithUb

## Members

{{generator:product_team.code_security_tiger_team}}

- [Ryan Scott](../../../../../team/index.md#ryan-scott), Product Manager
- [Dan Diemer](../../../../../team/index.md#dan-diemer), Customer Engineer
- [Thorsten Ball](../../../../../team/index.md#thorsten-ball), Software Engineer
- [André Eleuterio](../../../../../team/index.md#andré-eleuterio), Security Engineer

## Reading list

If you are interested in the space but don't know where to start, here's a few items to put on your reading list:

- The [log4j vulnerability, and how Sourcegraph helped](https://about.sourcegraph.com/blog/log4j-log4shell-0-day/)
- Blogs from well known companies in the application security space provide good perspectives. For example (non-exhaustive list!), [Snyk's](https://snyk.io/blog/), [Veracode's](https://www.veracode.com/blog), [Sonatype's](https://blog.sonatype.com/).
- Software supply chain is a key area of interest:
  - [Allan Friedman - someone set us up the SBOM](https://www.youtube.com/watch?v=9j1KYLfklMQ)
  - [SBOMs explained](https://guides.sonatype.com/foundations/devops/sboms-explained/)

## Glossary

We try not to use acronyms at Sourcegaph, but there's a lot of them in security. Here's a list that could be useful to Sourcegraphers new to the field:

- **NTIA**: National Telecommunications and Information Administration. A US agency that advises the US president on telecommunication policy, and contributes to developing frameworks and standards.
- **OWASP**: The Open Web Application Security Project. A nonprofit foundation that works to improve the security of software.
- **SBOM**: Software Bill Of Material. The two most common SBOM standards are [SPDX](https://spdx.dev/) (developed by ISO) and OWASP's [CycloneDX](https://cyclonedx.org/) (developed by OWASP).
- **SLSA**: Supply chain Levels for Software Artifacts, or SLSA (salsa). A security framework and set of standards for improving software supply chain integrity and security.
- **SCA**: Software Composition Analysis. An automated process to identify dependencies of a software. SCA tools analyzes the application's **dependencies** for potential vulnerabilities.
- **SAST**: Static Application Security Testing. SAST tools analyzes the the application's **code** for potential vulnerabilities, based on a set of predefined rules. Some SAST tools also suggest fixes.
- **DAST**: Dynamic Application Security Testing. DAST tools **interact directly with the application** to identify vulnerabilities by performing attacks, without having access to the source code.
- **NVD**: National Vulnerability Database. A US-government maintained repository of vulnerabilities.
