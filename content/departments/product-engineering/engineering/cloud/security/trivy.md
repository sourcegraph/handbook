# Trivy Container vulnerability scanning

## What is it?

We have added [Trivy](https://github.com/aquasecurity/trivy) to our Sourcegraph pipeline to help us identify security vulnerabilities in our Containers.

## How does this impact you?

Any finding reported by Trivy will need to corrected. If it cannot be corrected immediately, a security-issue will need to be created, the proper suppression created, the #security slack channel needs to be alerted,
and then please tag the security in the PR.
Please see [these instruction](https://aquasecurity.github.io/trivy/v0.23.0/vulnerability/examples/filter/) on suppressing a vulnerability for Trviy.

## If Trivy finds vulnerabilities will it fail the pipeline?

Not at the moment. Once we finish optimizing the results and have the neccessary procedures in place, this will be begin failing.

## I have a vulnerability that is a false positive, or one that we will not fix. Can I make Trivy ignore it?

Yes. Simply follow the instructions in [filtering vulnerabilities](https://aquasecurity.github.io/trivy/v0.23.0/vulnerability/examples/filter/) and then tag the security team to review the PR.

## Are there any IDE Plugins for Trivy?

Yes. Trivy is available as a plugin for VSCode:

- [VSCode](https://marketplace.visualstudio.com/items?itemName=AquaSecurityOfficial.trivy-vulnerability-scanner)
- Also Trivy can be installed locally on macOS via homebrew: `$ brew install aquasecurity/trivy/trivy`
