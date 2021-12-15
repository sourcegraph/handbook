### Checkov Terraform Scanning

## What is it?

- We have added Checkov to our Infrastructure pipeline to help us identify security vulnerabilities in our IaC (Infrastructure-as-code).

## How does this impact you?

- Currently, it does not. Currently, there is no action required on your part. If you want to take the initative and resolve the issues it finds in your code, that is great!

## If checkov finds vulnerabilities will it fail the pipeline?

- No. Not for awhile. The pipeline will not fail when it finds vulnerabilities.

## I have a vulnerability that is a false positive, or one that we will not fix. Can I make Checkov ignore it?

- Yes. Simply follow these instructions: (https://www.checkov.io/2.Basics/Suppressing%20and%20Skipping%20Policies.html) and then tag the security team to review the PR.
-
