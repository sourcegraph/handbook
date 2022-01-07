# Checkov

### Checkov Terraform Scanning

## What is it?

- We have added Checkov to our Infrastructure pipeline to help us identify security vulnerabilities in our IaC (Infrastructure-as-code).
- You can read more about it [here](https://www.checkov.io/1.Welcome/Quick%20Start.html).

## How does this impact you?

- Any finding reported by Checkov will need to corrected. If it cannot be corrected immediately, a security-issue will need to be created and the proper suppression entered into the code.  Also please tag the security team to review the PR.

If it is a false-positive, the proper suppression entry will need to be entered into the code.

## If checkov finds vulnerabilities will it fail the pipeline?

- Yes.

## I have a vulnerability that is a false positive, or one that we will not fix. Can I make Checkov ignore it?

- Yes. Simply follow these instructions: (https://www.checkov.io/2.Basics/Suppressing%20and%20Skipping%20Policies.html) and then tag the security team to review the PR.
