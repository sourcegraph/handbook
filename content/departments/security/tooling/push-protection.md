# GitHub Push Protection

We have enabled [Github push protection](https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/push-protection-for-repositories-and-organizations) feature on all public repositories for scanning secrets in commits.
This document helps to unblock sourcegraph engineers when the push protection blocks the git push operation.

## For Sourcegraph Engineers

### How to unblock the push protection (self-serve) ?

Here is a [quick demo](https://www.loom.com/share/bf12643decd94e318cb16914348dfd6b?sid=ee879aee-0577-4852-8f2c-61fabd5316fb) on how to unblock the push protection. Additionally, here is the step by step guide

#### While using Git CLI:

1. Check the Github push error logs for links to unblock the push protection.
2. The link redirects to Github UI, verify the leaked secret and revoke it if applicable.
3. Mark the secret appropriately as "Used in Test", "False Positive" or "Fix Later"
4. Finally click "Finish" or "Allow me to expose secret" to resolve.
5. Once all secrets are resolved, the push protection should be unblocked automatically.
6. Kindly retry the `git push` operation again from CLI to push your changes to Github.

**Please note that you'll have to do this for each leaked secret before retrying push.**

#### While using Github UI:

1. The Github popup should appear automatically showing the leaked secret alert
2. Mark the secret appropriately as "Used in Test", "False Positive" or "Fix Later"
3. Finally click "Finish" or "Allow me to expose secret" to resolve.
4. Once all secrets are resolved, the push protection should be unblocked automatically.
5. Kindly retry pushing your changes again to Github.

**Please note that you'll have to do this for each leaked secret before retrying push.**

## For Security Engineers

### How to resolve the secret alerts posted in security-monitoring channel ?

When a secret leak is detected in the Github push protection, the security team will receive a Github alert in the security-monitoring channel.

1. Click on the alert and verify the leaked secret.
2. Assess the risk of the secret leak, if required create a security incident to resolve the leak.
3. After assessing the situation, revoke the secret if applicable. Additionally, discuss with the engineer who committed the secret to understand the impact of the leak.
4. Based on risk, perform the forensic analysis to understand the leak.
5. Close the alert from Github UI after verifying the secret-leak incident is resolved.

**Please note that you'll have to do this for each leaked secret**

### How to disable or enable Push Protection for a repository ?

While this is highly discouraged, you can disable and enable the push protection for a repository by following the steps below:

1. Escalate your privilege as `Admin` for Github repository through Entitle.
2. Navigate to the repository settings page.
3. Scroll down to the `Code security and analysis` option.
4. Under `Secret scanning` and disable or enable the `Push protection` option.
5. Hit `Save` to save the changes.
