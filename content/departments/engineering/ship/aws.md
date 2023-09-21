# AWS Cloud Management

Sourcegraph AWS Organisation is managed by the Ship team. This includes:

- creating new AWS accounts
- OKTA group access assignments to AWS Accounts
- billing alerting
- deleting AWS accounts

## Create AWS Account

AWS Account are owned by team, which is responsible for requesting access and managing resources. To create a new AWS account:

1. Add new organisation unit and AWS account [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/variables.tf)

2. Open Pull Request and ask for approval in #discuss-cloud-ops channel.

> Note: default billing alert is set to 500$/m, if you require higher limit contact Finance Team and ask for approval in Pull Request.

3. [For Cloud Operations] After merging PR, follow [instructions](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/README.md#create-new-aws-account)

## Access AWS Account

AWS account access is managed via OKTA SSO.

Access to an AWS account via cli/terraform:

> Note: requires [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

1. Add required profile to `~/.aws/config`` file:

```
[sso-session sg]
sso_start_url = https://d-92672e68f8.awsapps.com/start
sso_region = us-west-2
sso_registration_scopes = sso:account:access

[profile <YOUR_ACCOUNT_NAME>]
sso_session = sg
sso_account_id = <YOUR_ACCOUNT_ID>
sso_role_name = AdministratorAccess
region = us-east-1
output = json
```

2. Login via SSO

```sh
aws sso login --profile <YOUR_ACCOUNT_NAME>
```

Access to an AWS account via web console:

1. Login to [OKTA](https://sourcegraph.okta.com/)

2. Choose `AWS SSO` tile.

3. Click given account tile and then `Management console` button.

## Delete AWS Account

You can only delete AWS accounts which belong to your team. To delete an AWS account:

1. Delete AWS account [here](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/variables.tf)

2. Open Pull Request and ask for approval in #discuss-cloud-ops channel.

3. [For Cloud Operations] After merging PR, follow [instructions](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/blob/cloud/aws/README.md#create-new-aws-account)
